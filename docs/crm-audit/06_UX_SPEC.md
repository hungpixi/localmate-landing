# LocalMate CRM UX specification

Status: frontend shell implemented

Scope: internal CRM operations surface at `/crm`. This document covers the frontend owned by this workstream. Worker handlers, persistence, auth, and migrations are intentionally out of scope.

## Product intent

The CRM should answer one operational question quickly: “What conversation should I move forward next?” It is a workbench for a small LocalMate team, not an analytics product. The interface therefore keeps the pipeline visible, makes stage ownership explicit, and gives intake a short path.

## Design direction

- Tone: calm, direct, trustworthy, and operational.
- Canvas: pale cool neutral with white work surfaces.
- Accent: cobalt blue for action and focus; green and orange are reserved for semantic status.
- Type: existing project font stack, compact labels, generous row spacing.
- Shape: 8px radius for shell, controls, and surfaces. Stage tags are the one intentional pill shape because they represent status.
- Motion: short feedback transitions and skeleton shimmer only. All motion is reduced under `prefers-reduced-motion`.
- Responsive behavior: sidebar becomes a drawer below 900px; lead table remains horizontally scrollable so columns do not collapse into ambiguous cards.

## Information architecture

`/crm`

- Overview: greeting, summary metrics, pipeline table, and operating principle.
- Leads: searchable, filterable pipeline records.
- Follow-ups: currently represented as the operational section below the pipeline; future API-backed due queue can attach here without changing the shell.
- Workspace settings: reserved navigation entry for a future settings route.

The public landing page remains the default route `/` and is not changed as part of this work.

## Core flows

### Review the pipeline

1. On entry, the page requests the first page of leads.
2. While waiting, the table shape is represented by skeleton rows.
3. A successful response renders totals, stage counts for the current page, and lead rows.
4. Search and stage changes reset to page one and issue a new request.
5. Refresh repeats the current request without clearing visible data first.

### Move a lead forward

The stage control is inline in each row. Selecting a new stage sends a `PATCH` request. The returned record replaces the local row so the API remains the source of truth. Failed updates show a contextual alert and retain the prior row state.

### Create a lead

The “New lead” action opens a modal with required name, business name, and phone fields, plus optional category and source. Submission shows a disabled saving state. A successful API response prepends the returned lead and increments the total. Failures stay inside the dialog so input is not lost.

### Empty and failure states

- No records without filters: explain that the pipeline is ready and offer “Create first lead”.
- No records with filters: explain that filters match nothing and suggest trying again.
- Load or mutation failure: show an inline alert with the API message when available and a retry action for list failures.

## Frontend API contract

The client reads `VITE_LOCALMATE_API_BASE_URL` at build time. If omitted, requests are relative to the current origin. No production fallback data is provided.

### `GET /api/crm/leads`

Query parameters:

| Parameter | Type | Required | Meaning |
|---|---|---:|---|
| `search` | string | no | Matches lead or business text |
| `stage` | `new \| contacted \| qualified \| won \| lost` | no | Limits pipeline stage |
| `page` | number | no | 1-based page number |
| `pageSize` | number | no | Requested page size, frontend uses 25 |

Expected response:

```json
{
  "items": [
    {
      "id": "lead_123",
      "name": "Nguyen Van A",
      "businessName": "A Home Services",
      "phone": "+84 90 000 0000",
      "category": "home services",
      "location": "Ho Chi Minh City",
      "stage": "qualified",
      "source": "Website",
      "ownerName": "Thao Nguyen",
      "nextActionAt": "2026-07-29T09:00:00Z",
      "createdAt": "2026-07-28T03:00:00Z",
      "updatedAt": "2026-07-28T04:00:00Z"
    }
  ],
  "total": 1,
  "page": 1,
  "pageSize": 25
}
```

### `POST /api/crm/leads`

Request body:

```json
{
  "name": "Nguyen Van A",
  "businessName": "A Home Services",
  "phone": "+84 90 000 0000",
  "category": "home services",
  "source": "Website"
}
```

Response: the created `Lead` object, including its server-generated `id`, `stage`, timestamps, and any normalized fields.

### `PATCH /api/crm/leads/:id`

Request body: `{ "stage": "contacted" }`.

Response: the updated `Lead` object. The frontend replaces the row with this response.

## Accessibility and interaction requirements

- Every icon-only control has an accessible label.
- Form fields have visible labels and native required validation.
- Focus rings use the cobalt accent and remain visible on white surfaces.
- Status is communicated with text, not color alone.
- Table content stays available on narrow screens through horizontal scrolling.
- Reduced-motion users receive no shimmer or drawer transition.

## Open backend questions

- Confirm whether list totals are global or scoped to the current filter.
- Confirm server authorization and whether the current workspace is inferred from the session.
- Define a dedicated follow-up endpoint before expanding the follow-up section into a queue.
- Define the lead detail route before wiring the current “Open” affordance.

