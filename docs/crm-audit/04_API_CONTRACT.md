# CRM API contract

Status: canonical organizations/contacts/leads foundation. The adapter is intentionally isolated from migrations because the canonical migration is owned by the D1 architect.

## Runtime integration

`src/worker/index.ts` is the Worker entrypoint. Configure:

```toml
[[d1_databases]]
binding = "DB"
database_name = "<crm-database-name>"
database_id = "<database-id>"

[vars]
ALLOWED_ORIGINS = "https://<approved-origin>"
CRM_ORGANIZATION_ID = "<organization-id>"
# Store CRM_API_TOKEN as a Worker secret.
```

`CRM_WORKSPACE_ID` is the authenticated deployment scope. It is not accepted from body, query string, or a client-controlled header. Multi-tenant JWT/session claims can replace this configuration later inside `auth.ts` without changing repositories.

## Model

`organizations` is the tenant root. The canonical lead table is `crm_leads`; every lead belongs to a workspace and references a company and primary contact. All lead reads, writes, and lookups include `workspace_id` in the repository query to prevent cross-workspace access.

## Authentication and transport

- All routes except `GET /api/health` require `Authorization: Bearer <CRM_API_TOKEN>`.
- JSON writes require `Content-Type: application/json`.
- Responses include `X-Request-Id`; clients may provide one up to 100 characters.
- `ALLOWED_ORIGINS` is a comma-separated CORS allowlist. Unset means no cross-origin browser caller.

## Endpoints

All list endpoints accept `limit` (default 50, range 1–100) and `offset` (default 0, maximum 1,000,000).

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/health` | Process health; unauthenticated |
| GET/POST | `/api/organizations` | List/create organizations |
| GET | `/api/organizations/:id` | Read an organization |
| GET/POST | `/api/contacts` | List/create contacts in configured organization |
| GET/PATCH | `/api/contacts/:id` | Read/update a scoped contact |
| GET/POST | `/api/leads` | List/create leads in configured organization |
| GET/PATCH | `/api/leads/:id` | Read/update a scoped lead |

Organization create accepts `{ "name": "...", "slug": "..." }`. Contact create accepts required `fullName` and optional `email`, `phone`, `title`. Lead create accepts required `companyId`, `primaryContactId`, `stageId`, and `status`, plus optional `sourceId`, `ownerUserId`, `priority`, and `score`. Status codes are `new`, `contacted`, `qualified`, `won`, or `lost` and must correspond to workspace-owned stage IDs. Priority and score are integers 0–100. PATCH requires at least one recognized field.

Successful responses use `{ "data": ... }`; creates return `201`, reads/updates return `200`, and lists also include `{ "meta": { "limit", "offset" } }`.

## Errors

```json
{ "error": { "code": "VALIDATION_ERROR", "message": "contactId is required." } }
```

Status classes: `400` malformed JSON/pagination, `401` invalid token, `404` missing resource/route, `405` unsupported method, `415` wrong content type, `422` validation failure, `503` missing auth/scope configuration, and `500` unexpected failure. Internal exception details are not exposed.

## D1 canonical-schema reconciliation

The repository adapter assumes the canonical migration uses these tables and snake_case storage columns:

- `organizations`: `id`, `name`, `slug`, `created_at`, `updated_at`
- `contacts`: `id`, `organization_id`, `full_name`, `email`, `phone`, `title`, `created_at`, `updated_at`
- `crm_leads`: `id`, `workspace_id`, `company_id`, `primary_contact_id`, `source_id`, `stage_id`, `owner_user_id`, `status`, `priority`, `score`, and canonical `created_at`/`updated_at`

The `crm_leads` shape above is reconciled to D1 architect PR #8. `source_id` and `stage_id` are foreign-key IDs; stage records are workspace-owned and use the canonical codes above. This is an explicit adapter assumption, not a migration. The API intentionally does not use the former legacy fields (`business_name`, `city_country`, `business_category`, package fields, Facebook URL, UTM fields, notification flags, or frontend-generated lead IDs). Organization/company/contact table columns remain the adapter’s provisional snake_case mapping and must be checked against PR #8 before binding `DB`.

The previous flat `leads` adapter was incompatible with the master schema and has been replaced by this canonical `crm_leads` foundation. Remaining incompatibility: this Worker does not yet resolve stage codes from `stage_id` or validate company/contact/source ownership via joins; the migration/PR #8 integration must confirm those foreign keys and add repository checks before production enablement.

## Boundaries

- `index.ts`: routing, request context, CORS, response mapping.
- `auth.ts`: bearer authentication and organization scope.
- `validation.ts`: domain input parsing.
- `service.ts`: use-case orchestration and not-found policy.
- `repository.ts`: D1 SQL, tenant predicates, and storage/API mapping.
