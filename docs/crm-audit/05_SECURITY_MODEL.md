# LocalMate CRM security model

Status: design and audit for the current repository  
Owner: security/backend  
Last reviewed: 2026-07-28

## 1. Scope and conclusion

This repository is currently a Vite/React landing page. It has no Worker, Pages Function, API route, authentication middleware, D1/R2 binding, schema, or server-side environment configuration. Consequently, there are no security-owned backend/auth files to change safely in this task.

The intended production boundary is:

```text
public browser -> Cloudflare zone/WAF -> public POST /api/leads Worker
                                      -> Turnstile verification
                                      -> validation + rate limit/idempotency
                                      -> private CRM sink (D1/Queue/approved webhook)

CRM operators -> Cloudflare Access -> private CRM/API routes -> tenant-scoped data
```

The current form does not use that boundary. `src/components/sections/FinalCTASection.tsx` sends lead data directly to a Google Apps Script URL and attempts to send Telegram notifications from the browser. A Telegram bot token is present in frontend source (currently marked `EXAMPLE`, but it must still be treated as exposed if it has ever been real). This is a release blocker for any real credential and must be removed from browser code. Rotate/revoke it if it was valid.

`mode: no-cors` is not an authentication or CSRF control. A public Google Apps Script webhook also has no application-owned validation, tenant authorization, replay protection, or reliable abuse control. The frontend should later call only the public lead-ingest Worker; that route change is intentionally out of scope here to avoid a frontend/API conflict.

## 2. Assets, identities, and trust boundaries

| Asset | Required protection | Trust boundary |
| --- | --- | --- |
| Lead PII (name, phone, business, links, notes) | Confidentiality, integrity, retention/deletion controls | Browser is untrusted; Worker validates and normalizes |
| CRM records and status | Tenant isolation and least privilege | Access-authenticated operator/API only |
| Uploaded evidence or media | Private-by-default, type/size/quarantine controls | Browser upload is untrusted; R2 access through short-lived server-issued URLs |
| Telegram/Google/CRM credentials | Secret, rotation, audit trail | Worker bindings/secrets only; never shipped to JS |
| Access identity and role claims | Authenticity and authorization | Access policy plus Worker JWT verification |

Threat actors include anonymous spam/bots, an authenticated but unauthorized CRM user, a user changing object IDs, malicious file/content submitters, and a compromised third-party webhook credential. Assume all client fields, headers, IDs, URLs, filenames, and referrers are attacker-controlled.

## 3. Cloudflare Access identity verification and authorization

### Dashboard-only configuration

1. Create a self-hosted Access application for the CRM/admin hostname and protect `/admin/*`, `/api/crm/*`, uploads/downloads, and any operator-only callback. Do not protect the public landing page or `POST /api/leads` with an `Allow` policy.
2. Configure the IdP (Google Workspace/Microsoft Entra/Okta or another approved IdP), require MFA/strong authentication, and use an explicit group such as `localmate-crm-operators`. Do not use `Include: Everyone`, “all valid emails,” or a broad email-domain rule without a group/role restriction.
3. Use short, reviewed session durations for operator access; enable independent MFA when the IdP policy is not sufficient. Remove users from the IdP group and revoke sessions during offboarding.
4. For non-human CRM integrations, create a separate Access Service Auth policy and short-lived, named service token. Store the client secret outside the repository; do not reuse an operator token. A service token is not a substitute for per-user authorization.
5. Configure DNS/route/origin so the origin cannot be reached around Access. If a Worker is the origin, do not trust an Access header merely because it exists.

### Worker-owned verification

The Worker must verify `Cf-Access-Jwt-Assertion` cryptographically using the Access JWKS, and enforce the expected issuer, audience (`AUD`), algorithm, expiry, and not-before claims. It must derive the principal from verified claims only. Do not accept an email, role, organization ID, or user ID supplied in JSON, query parameters, or an unverified header. Cache JWKS safely with refresh-on-key-rotation behavior.

Authorization is separate from authentication:

- `crm.viewer`: read permitted records and metadata.
- `crm.editor`: create/update assigned records, never role membership or audit history.
- `crm.admin`: manage operators/configuration only if explicitly needed.
- Service tokens: endpoint-specific machine access, no implicit browser/session access.

Every object query must include the principal's permitted organization/tenant scope in the query predicate. A request for `/api/crm/leads/:id` must return the record only when both the ID and authorization scope match; otherwise return the same not-found response as an unknown ID to reduce enumeration. Never authorize by fetching an object first and checking ownership afterward in application code alone.

References: [Access policies](https://developers.cloudflare.com/cloudflare-one/access-controls/policies/), [Access JWT validation](https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/authorization-cookie/validating-json/), and [service tokens](https://developers.cloudflare.com/cloudflare-one/access-controls/service-credentials/service-tokens/).

## 4. Public lead-ingest boundary

The public endpoint should be a narrow, append-only capability, for example `POST /api/leads`. It must not expose CRM reads, updates, deletes, exports, upload signing, or provider credentials.

Required server-side behavior:

- Accept only `POST`, enforce `Content-Type: application/json`, a small body limit (for example 16 KiB), and a strict allowlist of fields.
- Validate and normalize name, phone, industry, and optional URL. Reject unknown fields, control characters, oversized strings, invalid URL schemes, and arbitrary callback/webhook URLs.
- Ignore client-supplied lead ID, timestamps, IP, user-agent, status, sync flags, priority, and ownership. Generate IDs and timestamps server-side and derive request metadata from the platform request.
- Verify a Turnstile token server-side with `POST https://challenges.cloudflare.com/turnstile/v0/siteverify`; client-side rendering alone is not protection. Reject missing, expired, duplicate, or wrong-hostname/action tokens.
- Add an application idempotency key or derive a bounded duplicate fingerprint from normalized contact data plus a short time bucket. Never use a client timestamp as the only deduplication key.
- Persist first, then enqueue/retry provider notifications asynchronously. Do not make the browser call Telegram or Google. Provider failures must not cause duplicate lead creation.
- Return a generic success response and avoid reflecting submitted PII in error messages. Log a correlation ID, not phone numbers or full request bodies.
- Set an explicit allowed-origin list for browser CORS. Do not use `*` with credentials. Validate `Origin` on state-changing browser requests; CORS is not a replacement for authorization.

Recommended response contract: `202` with `{ "accepted": true, "requestId": "..." }`; `400` for schema errors; `403` for failed bot verification; `429` for abuse limits; `413` for oversized bodies. Keep error shape stable and generic.

## 5. Control matrix

| Risk | Required control | Owner |
| --- | --- | --- |
| IDOR/BOLA | Scope every read/write by verified principal + tenant; opaque IDs; deny-by-default | Worker/backend |
| CSRF | Prefer bearer/service-token API semantics; for cookie sessions require Origin check and synchronizer token; never state-change on GET | Worker + Access |
| XSS | Contextual output encoding; no `dangerouslySetInnerHTML`; sanitize rich text with an allowlist; never render submitted notes/URLs as HTML | Backend + frontend |
| SQL injection | D1 prepared statements/bind parameters only; fixed table/column allowlists; no string-built SQL, dynamic sort, or filter fragments | Worker/backend |
| Upload abuse | Allowlist MIME and extension, size/count limits, random object keys, private R2, malware/quarantine scan, content-disposition attachment, no executable serving, short-lived signed URLs | Worker/storage |
| Rate abuse | WAF rate rule plus Worker per-IP/device/contact throttling, Turnstile, body limits, idempotency, queue backpressure; monitor false positives | Dashboard + Worker |
| Security headers | HTTPS/HSTS, CSP, frame denial, nosniff, Referrer-Policy, Permissions-Policy; restrict script/connect/img/font sources to actual dependencies | Worker/Pages + Dashboard |
| SSRF | Never fetch user-provided URLs server-side; if future link previews exist, restrict scheme/host, resolve DNS safely, block private/link-local ranges, cap redirects/bytes/time | Worker/backend |
| PII leakage | Redact logs, least-privilege provider tokens, retention/deletion policy, no PII in URLs or analytics | Backend/ops |

For CSP, start in report-only mode, inventory actual assets, then enforce. The current frontend has third-party Google Apps Script and Telegram calls; the target architecture should remove those browser `connect-src` entries rather than add them to a permanent allowlist.

## 6. Upload design (when CRM uploads are introduced)

Uploads must never be accepted by a public unauthenticated route. An Access-authenticated Worker checks tenant/record permission, validates requested metadata, and issues a one-use/short-expiry upload authorization for a generated R2 key such as `tenantId/recordId/randomId`. The client cannot choose the final key or content type.

Enforce maximum bytes, file count, filename length, and permitted content types. Inspect magic bytes after upload; do not trust `Content-Type` or extension. Quarantine before making a file available, store metadata separately, and serve with `Content-Disposition: attachment`, `X-Content-Type-Options: nosniff`, and no inline execution. Deletes, replacements, and downloads must repeat tenant authorization.

## 7. Secrets and local variables

### Code-owned secrets

These belong in Worker secrets/Cloudflare secret bindings or an approved secret manager, never `.env` committed files, Vite `VITE_*` variables, HTML, logs, or client bundles:

- Telegram bot token and chat ID (if Telegram remains approved).
- Google Apps Script/webhook credential or signed secret.
- Turnstile secret key.
- CRM/D1/R2/provider credentials.
- Access service-token client secret and Cloudflare API token.

Only public values may be browser-visible: Turnstile sitekey, public origin, and non-sensitive feature configuration. `TEAM_DOMAIN` and Access `AUD` are configuration values, not credentials, but should still be environment-specific and not user-controlled.

The committed frontend currently contains a Google Apps Script URL and a Telegram token-shaped value. Treat the URL as public and the token as compromised if it was real: revoke/rotate it, inspect provider logs, and remove it in the future backend migration. Check git history and CI logs before declaring it remediated.

Local development should use an untracked `.dev.vars`/`.env.local` with placeholders and a checked-in `.env.example` containing names only. Production secrets should be set with Wrangler secret storage or the Cloudflare Dashboard; values must not be copied into `wrangler.toml`, PRs, screenshots, or shell history. Use separate development/staging/production credentials and rotate on staff/offboarding events.

## 8. Cloudflare Dashboard checklist

The following cannot be completed from this repository and is intentionally marked Dashboard-only:

- [Dashboard-only] Add the CRM Access application, IdP, MFA, group-based Allow policy, session duration, and offboarding process.
- [Dashboard-only] Add Service Auth policy and expiring service token for each machine integration; configure expiry alerts.
- [Dashboard-only] Configure WAF Managed Rules, bot protections appropriate to the plan, and a rate-limiting rule for `POST /api/leads`. Start with a monitored/challenge policy and tune from observed traffic; a suggested initial target is 5 requests/IP/minute with a short mitigation window, subject to legitimate traffic testing.
- [Dashboard-only] Configure custom rules to block unexpected methods, oversized requests, obvious scanner signatures, and direct origin access where applicable.
- [Dashboard-only] Enable HTTPS/Always Use HTTPS, HSTS only after confirming every subdomain is HTTPS-safe, and security-header behavior at the Worker/Pages layer.
- [Dashboard-only] Configure Turnstile sitekey/hostname/action and retain the secret only in the Worker secret store.
- [Dashboard-only] Configure Workers Logs/Analytics alerts for spikes in 4xx/5xx/429, failed Turnstile validation, Access denials, upload failures, and provider queue errors.
- [Dashboard-only] Restrict R2 buckets to private access and review CORS rules; do not expose the bucket publicly.

Cloudflare rate limiting is a perimeter control, not an exact transactional quota; the application still needs idempotency and a Worker-side abuse control. See [rate limiting rules](https://developers.cloudflare.com/waf/rate-limiting-rules/) and [Turnstile server-side validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).

## 9. Verification gates before production

1. Confirm no credential-shaped value remains in the built JS, git history, source maps, or logs; rotate anything previously valid.
2. Test unauthenticated, wrong-group, expired-token, wrong-audience, forged-header, and service-token requests.
3. Test two tenants and two users for every read/update/delete/download path, including guessed IDs and alternate HTTP methods.
4. Test malformed JSON, unknown fields, Unicode/control characters, oversized bodies, duplicate submissions, failed Turnstile, and rate-limit responses.
5. Test stored/reflected XSS payloads, SQL metacharacters, SSRF-looking URLs, polyglot files, MIME mismatches, oversized uploads, and private R2 access.
6. Verify headers and CSP in production, then inspect Access/WAF/Worker logs for PII leakage and correlation IDs.

## 10. Audit record

Reviewed files: `package.json`, `vite.config.ts`, `.gitignore`, `src/components/sections/FinalCTASection.tsx`, and repository file inventory. No backend/auth/security-owned runtime file exists in the current worktree, so no implementation change was made beyond this document.

Cloudflare references were checked on 2026-07-28: [Access policies](https://developers.cloudflare.com/cloudflare-one/access-controls/policies/), [JWT validation](https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/authorization-cookie/validating-json/), [service tokens](https://developers.cloudflare.com/cloudflare-one/access-controls/service-credentials/service-tokens/), [security headers](https://developers.cloudflare.com/workers/examples/security-headers/), [WAF rate limiting](https://developers.cloudflare.com/waf/rate-limiting-rules/), and [Turnstile validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).
