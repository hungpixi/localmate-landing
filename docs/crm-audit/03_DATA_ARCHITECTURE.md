# CRM data architecture audit

## Scope

This document is the data contract for the first Cloudflare D1 CRM migration. It covers lead capture, company/contact normalization, pipeline management, follow-up work, and audit history. It deliberately does not change API or frontend code.

The schema is designed for the LocalMate lead contract currently present in the repository: full name, phone, business name, city/country, business category, priority goal, package interest, status, source, UTM attribution, referrer, note, IP, user agent, and sync metadata.

## Master-brief assumptions and decisions

| Brief concern | Schema decision | API integration implication |
| --- | --- | --- |
| CRM is tenant-scoped | `workspaces` is the tenant boundary; every CRM business table carries `workspace_id`. | Every query and mutation must resolve and filter by workspace before reading an ID supplied by a client. |
| A lead submission can identify both a person and a business | `crm_contacts` and `crm_companies` are separate entities, linked to `crm_leads` by nullable foreign keys. | Ingestion may create or match a company/contact, but must keep the original lead row as the capture record. |
| One person or company may submit more than once | There is no unique constraint on phone, email, or business name. | Deduplication is an application decision; repeated submissions can be linked to an existing contact/company without losing events. |
| Pipeline status must be reportable and configurable | `crm_pipeline_stages` is workspace-scoped and ordered. Lead lifecycle status remains a constrained, coarse-grained field. | API should create stages (or copy approved templates) before assigning a lead to a stage. |
| Sales work needs a commercial record | `crm_opportunities` is separate from `crm_leads`; a lead may have zero or many opportunities. | Do not use lead amount fields for quotes or revenue. Monetary values are integer `*_vnd` columns. |
| Follow-up and history are distinct | `crm_activities` stores actionable communication/tasks; `crm_lead_events` is append-only transition/capture history. | Event rows should not be updated or deleted as part of normal CRM edits. |
| Attribution must survive later enrichment | UTM fields and capture metadata live on `crm_leads`, not only on contacts. | Preserve first submission attribution; later enrichment must not overwrite it without an explicit policy. |
| No production lead seed | `0001` contains DDL only. `0002` contains reusable source/stage templates only; it creates no workspace, company, contact, lead, opportunity, or activity. | Production deployment remains empty of customer/lead data until an authenticated ingestion flow writes it. |
| D1 is SQLite | IDs are application-generated UUID strings stored as `TEXT`; enums are `TEXT` plus `CHECK` constraints; JSON-like metadata is text. | Generate UUIDs in the API/Worker and use parameterized D1 statements. |

## Conventions

- All primary and foreign keys are `TEXT` UUIDs. The database does not generate IDs, avoiding SQLite-specific UUID functions.
- Timestamps are UTC ISO-8601 strings in the form `YYYY-MM-DDTHH:MM:SS.sssZ`, generated with SQLite `strftime`. The API must use the same format when supplying explicit values.
- `updated_at` is application-maintained on update because SQLite has no portable `ON UPDATE` clause. `created_at` is immutable.
- Currency is VND in integer columns (`amount_vnd`, never floating point or formatted text).
- Foreign keys are enabled in the migration. Child indexes are explicit because SQLite does not automatically index foreign keys.
- Deletes are conservative: CRM entities have `deleted_at` for soft deletion; relationship/history rows use cascading deletes only when the parent tenant/entity is removed intentionally.

## Entity map

```text
workspace ──< workspace_member >── user
    │
    ├──< company ──< contact
    │       │          ▲
    │       └──────────┘
    ├──< pipeline_stage
    ├──< lead >── company/contact/source/stage/owner
    │     ├──< lead_event
    │     ├──< activity
    │     ├──< note
    │     ├──< lead_tag >── tag
    │     └──< opportunity >── pipeline_stage/owner
    └──< activity / note / tag
```

`crm_lead_source_templates` and `crm_pipeline_stage_templates` are global reference catalogs installed by `0002`; they are not tenant data and are never referenced directly by a lead. An API may copy them into a workspace’s tables.

## Migration order and operational notes

1. Apply `migrations/0001_initial_schema.sql` to create empty CRM tables and indexes.
2. Apply `migrations/0002_reference_catalogs.sql` only when the product wants the optional template catalogs. It is safe to apply after `0001` and does not seed production leads.
3. Keep `PRAGMA foreign_keys = ON` in each D1 execution context; the migration sets it for its own statements.
4. Before any production migration, take the normal D1 backup and run the migration against a staging database first.

## Deliberate non-goals

This first schema does not model invoices, quotations, orders, payments, messaging bodies, file blobs, or external CRM sync attempts. Those should be additive migrations after an API contract exists. R2 object keys, not binary files, should be stored when document attachments are introduced.

