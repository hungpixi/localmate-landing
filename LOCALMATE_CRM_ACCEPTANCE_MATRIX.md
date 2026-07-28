# LocalMate CRM acceptance matrix

Status meanings: **Pass** = directly evidenced in the reviewed checkout; **Fail** = contradicted by code; **Blocked** = required artifact or runtime unavailable; **Not applicable** = no CRM implementation to exercise.

| ID | Acceptance requirement | Evidence expected | Reviewed evidence | Status | Owner |
|---|---|---|---|---|---|
| UI-01 | CRM shell and navigation load | deployed URL + screenshot/video of routes | `App.tsx` contains landing sections only | Fail | Worker 03 / CRM UI |
| UI-02 | Lead list/search/filter render real records | UI trace plus network response | no CRM screen or endpoint | Blocked | Worker 04 / CRM UI |
| UI-03 | Lead detail/edit/status actions persist | before/after UI + API/D1 proof | no CRUD implementation | Blocked | Worker 04 + Worker 02 |
| UI-04 | Buttons have active handlers and error/loading states | interaction trace | no CRM buttons; landing form has misleading success behavior | Fail | Worker 03 |
| API-01 | Authenticated CRM API exists | route inventory and curl examples | no server/API directory or dependency | Blocked | Worker 02 |
| API-02 | Server-side validation and consistent errors | invalid/valid request responses | only client-side validation in landing form | Blocked | Worker 02 |
| API-03 | CRUD is idempotent and handles missing records | repeat/update/delete traces | no endpoint | Blocked | Worker 02 |
| API-04 | Secrets remain server-side | source scan and deployment config | Telegram config is in client bundle; example token present | Fail | Worker 06 / security |
| D1-01 | Schema and migration are committed | migration files + `wrangler d1 migrations list` | none found | Blocked | Worker 01 / D1 |
| D1-02 | Lead writes and reads from D1 | request plus D1 query showing same ID | no D1 binding/query | Blocked | Worker 01 + Worker 02 |
| D1-03 | Constraints/indexes support CRM queries | schema review and query plan | no schema | Blocked | Worker 01 |
| D1-04 | Failure/rollback behavior is observable | forced failure + logs | no server path; form catches and reports success | Fail | Worker 02 + Worker 08 |
| INT-01 | Landing lead form feeds CRM API | browser network trace and CRM row | posts Apps Script directly with `no-cors` | Fail | Worker 05 / intake |
| INT-02 | Notifications reflect actual delivery | provider response/logs, not optimistic flags | payload hardcodes notification/sheet flags before send | Fail | Worker 07 / integrations |
| QA-01 | Automated checks pass | clean install, build, tests | build blocked: dependencies absent; no CRM tests | Blocked | Worker 08 |
| QA-02 | Runtime smoke test passes on target deployment | URL, timestamp, screenshots, traces | no CRM deployment/evidence supplied | Blocked | Worker 08 + Worker 09 |
| OPS-01 | Runbook covers migrations, secrets, rollback | checked-in operational procedure | this audit adds procedure; implementation inputs absent | Blocked | Worker 09 |

**Release gate:** any P0 Fail or Blocked item prevents acceptance. Current result: 7 Fail, 12 Blocked, 0 Pass for CRM-specific requirements.
