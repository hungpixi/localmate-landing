# Project: ExportMate.AI Implementation Plan

## Architecture
- **Vite Frontend**: React application located in `/src` communicating with the Backend via `/api/*` endpoints.
- **Express Backend**: Express Node.js application in `/server` exposing APIs, handling OCR, document processing, and compliance rule verification.
- **Flue Server**: Agent runtime running on `http://localhost:3000` to execute agentic tasks.
- **Prisma & SQLite**: Database schema in `/server/prisma` persisting data in `server/dev.db`.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|---|---|---|---|
| 1 | Codebase Exploration | Audit current codebase, check implementation of all 19 pages, API endpoints, test suite, and check for mock data. | None | PLANNED |
| 2 | Onboarding Wizard & Prep Checklist (R1) | Implement step-by-step wizard capturing product category, destination, incoterms, and populating relevant document requirements. | M1 | PLANNED |
| 3 | Split Packaging & Labeling Audit (R2) | Implement moisture content checks, ISPM 15 compliance, allergen & language compliance, and integrate AI review tools. | M2 | PLANNED |
| 4 | Visual GIS Map & Deforestation Alerts (R3) | Update ESGTraceabilityPage with Leaflet map, GPS polygons, precision/intersection indicators, and tooltips. | M3 | PLANNED |
| 5 | Route Comparison & Thomas Booking CTA (R4) | Refactor Logistics page, show 3 carbon-rated routes, implement "Book Route" transition to AI Team Page pre-filling chat. | M4 | PLANNED |
| 6 | Integration Testing & Quality Audit | Run/fix backend integration tests, audit all 19 pages for actual vs. mock, and compile comprehensive audit report. | M5 | PLANNED |

## Interface Contracts
### Onboarding Wizard
- Client: `POST /api/export-dossiers` with `{ category, destination, incoterms }`
- Server: Creates dossier and initializes only required `DocumentRequirement` records.

### Packaging & Labeling Audit
- Client: Triggers audit on dossier or uploads label image
- Server: Returns detailed list of discrepancies (moisture alert, ISPM 15, allergen warning, language translation).

### GIS Deforestation Validation
- Client: `GET /api/shipments/:id/traceability` or `/api/eudr`
- Server: Returns geo-polygons with precision alerts (< 6 decimals -> yellow) and self-intersection flags (-> red).

### Route Booking
- Client: Transition to `/ai-team` with state containing booking details (Thomas agent prompt pre-fill).
