# CRM audit test plan

## Scope and current baseline

This plan covers D1, API, UI, security, validation, permissions, reload persistence, and end-to-end acceptance. The current checkout is a React/Vite landing page. Repository inspection found no D1 schema/migrations, API handlers, authentication/authorization implementation, CRM runtime, Playwright dependency, or test runner. Those checks are intentionally runnable but blocked until the runtime is supplied.

Run from the repository root:

```powershell
.\scripts\crm-audit\Invoke-CrmAuditTests.ps1 -JsonPath .\docs\crm-audit\08_TEST_RESULTS.json
```

For a deployed/local target, provide its URL. Endpoint paths are explicit placeholders for the CRM contract and must be aligned before execution:

```powershell
.\scripts\crm-audit\Invoke-CrmAuditTests.ps1 -BaseUrl http://localhost:8787
```

## Status rules

`PASS` requires the command, expected result, actual result, and evidence location. `FAIL` means the command ran and contradicted the expectation. `BLOCKED` means a required runtime, fixture, contract, credential, or tool is unavailable. `NOT TESTED` means execution was deliberately skipped or the command could only establish transport, not behavior. No status is inferred from source inspection.

## Matrix

| ID | Area | Command / action | Expected | Evidence required | Current status |
| --- | --- | --- | --- | --- | --- |
| BLD-01 | Build | `npm run build` | Exit 0; TypeScript and Vite bundle generated | Terminal/CI log and `dist/` listing | Run by script |
| D1-01 | D1 | `GET /api/health` against configured target | HTTP 200 and healthy D1-backed payload | Response headers/body plus D1 binding/migration log | BLOCKED: no runtime |
| API-01 | API | `POST /api/leads` valid fixture | 2xx, stable ID, one persisted lead | Request/response with secrets redacted; D1 row query | BLOCKED: no runtime |
| API-02 | API | `GET /api/leads/does-not-exist` | 404; no stack trace or SQL detail | Response body/headers | BLOCKED: no runtime |
| UI-01 | UI/responsive | Browser at 360/390/768/1024/1280/1440 px | No overflow; navigation and CTA usable | Screenshots, console log, viewport list | BLOCKED: no browser runtime |
| UI-02 | UI/a11y | Keyboard focus FAQ and activate with Enter/Space | Correct open/closed state and `aria-expanded` | Playwright trace/screenshot and DOM assertion | BLOCKED: no runner |
| SEC-01 | Security | Unauthenticated `GET /api/admin` | 401/403; no sensitive data | Response and server log correlation | BLOCKED: no runtime |
| SEC-02 | Security | Submit script/HTML/SQL-like strings in lead fields | Stored/displayed safely; no execution; parameterized persistence | API response, rendered screenshot, D1 row | BLOCKED: no runtime |
| PERM-01 | Permissions | Non-admin reads/mutates `/api/admin/leads` | 401/403 and no state change | Before/after row count and response | BLOCKED: no runtime |
| VAL-01 | Validation | Empty, whitespace, malformed phone, overlong, Unicode inputs | Accessible field errors; no request persisted | Network log, DOM assertions, D1 query | BLOCKED: no runtime |
| PERSIST-01 | Reload persistence | Create valid lead, reload, revisit/admin query | Exactly one durable lead; no duplicate on reload | Before/after IDs, reload trace | BLOCKED: no runtime |
| ACC-01 | Acceptance | Visitor enters valid data and submits CTA flow | Confirmation is visible and lead is retrievable | Full trace, response, persisted row | BLOCKED: no runtime |

## Fixtures and test data

Use a disposable environment and synthetic data only. Valid fixture: `QA-<timestamp>`, `qa@example.invalid`, `0900000000`. Invalid fixtures: empty values, whitespace-only values, `not-a-phone`, a 10,001-character name, and harmless `<script>alert(1)</script>` text. Never commit real PII, tokens, cookies, or production exports.

## Ownership and execution order

The QA scripts and audit documents are owned by this change. Once a runtime exists, execute build/static checks, D1/API contract checks, security/permissions, validation, UI/responsive checks, reload persistence, then acceptance. Capture artifacts per ID and copy command/expected/actual/evidence into the results report.
