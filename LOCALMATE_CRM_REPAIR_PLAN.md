# LocalMate CRM repair plan

This is a routing plan, not an implementation change. Owners must attach commits, tests, and runtime evidence to each item before the integrator re-audits.

| Priority | Repair | Owner | Definition of done |
|---|---|---|---|
| P0 | Commit D1 schema, migrations, indexes, seed/test strategy, and binding config | Worker 01 / D1 | Migration applies to a clean database; schema supports list/detail/status/audit queries |
| P0 | Implement authenticated CRM API with validation, pagination, CRUD, and typed error contract | Worker 02 / API | Curl suite covers auth, valid/invalid payloads, missing IDs, repeat writes, and server errors |
| P0 | Build CRM shell, lead list/detail, filters, and working action states | Worker 03 + Worker 04 / UI | Every CTA has a route or mutation; loading, empty, success, and failure states are demonstrated |
| P0 | Replace direct third-party form calls with CRM API intake | Worker 05 / intake | Submit creates one D1 record; duplicate/retry behavior is defined and observed |
| P0 | Remove client-side secrets and add auth/RBAC, CORS/CSRF policy as appropriate | Worker 06 / security | Source scan has no provider secret; unauthorized requests are rejected in runtime evidence |
| P0 | Make notifications asynchronous/observable and truthful | Worker 07 / integrations | Provider responses are persisted or logged; UI never claims delivery before confirmation |
| P0 | Add integration/e2e tests and capture target-environment smoke evidence | Worker 08 / QA | Clean install/build/tests pass; screenshots and network/D1 evidence are attached |
| P1 | Finalize deployment, migration, secret rotation, rollback, and monitoring procedure | Worker 09 / ops | Runbook steps execute against staging and include exact commands and expected output |
| P1 | Reconcile legacy landing/readiness docs with actual CRM scope | Orchestrator + all owners | Stale “passed/full completion” claims are labeled or removed; report links point to current evidence |

## Integrator sequence

1. Workers publish commit hashes and evidence links for their rows.
2. Integrator checks the integrated branch for UI/API/D1 contract alignment.
3. Integrator runs the clean-install, migration, API, browser, and failure-path checks in the runbook.
4. Only rows with reproducible evidence move to Pass; prose claims do not.

## Explicit blockers

No worker-specific CRM diff/report was available at audit time. Do not infer ownership completion from session status, legacy reports, or a successful historical build claim.
