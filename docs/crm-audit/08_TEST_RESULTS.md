# CRM audit test results

## Run metadata

- Date: 2026-07-28
- Repository: `localmate-new`
- Runner: `scripts/crm-audit/Invoke-CrmAuditTests.ps1`
- Runtime target: **not available**
- Test data: none sent; no production data accessed

## Initial result

The requested runtime-dependent CRM tests are **BLOCKED**, not passed. The checkout contains only a Vite landing page: there is no D1 binding/schema, API server/routes, auth/permissions layer, CRM data store, or Playwright test dependency. This was verified by repository file inspection and `package.json` inspection. The exact rerun command is:

```powershell
.\scripts\crm-audit\Invoke-CrmAuditTests.ps1 -BaseUrl http://localhost:8787 -JsonPath .\docs\crm-audit\08_TEST_RESULTS.json
```

Do not interpret a successful landing-page build as CRM/API acceptance.

## Evidence table

| ID | Status | Command | Expected | Actual | Evidence |
| --- | --- | --- | --- | --- | --- |
| BLD-01 | FAIL | `npm run build` | Exit 0; TypeScript and Vite bundle generated | Exit code 1; TypeScript reported missing `react`, `react-dom/client`, `lucide-react`, and JSX type declarations because `node_modules` is absent | Terminal command output from 2026-07-28; `package.json` declares dependencies but they are not installed |
| UI-STATIC-01 | PASS | `Select-String -Path package.json -Pattern '"dev"\\s*:\\s*"vite'` | Vite dev command is declared | Pattern found | `package.json`, runner output |
| VAL-STATIC-01 | PASS | `Select-String -Path src\\App.tsx -Pattern 'register-form'` | Lead form target exists in source | Pattern found | `src/App.tsx`, runner output |
| ACC-STATIC-01 | PASS | `Select-String -Path src\\components\\layout\\Header.tsx -Pattern 'onOpenDemoForm'` | Header CTA callback is wired | Pattern found | `src/components/layout/Header.tsx`, runner output |
| D1-01 | BLOCKED | `GET /api/health` | 200 healthy D1 payload | No target/runtime exists | Repository inspection; no D1 files/binding |
| API-01/02 | BLOCKED | `POST/GET /api/leads...` | Contract response and persistence | No API exists to call | Repository inspection; no server/functions/routes |
| UI-01/02 | BLOCKED | Playwright/capture at required viewports | Layout and keyboard assertions | No configured browser test runner/runtime | `package.json`; no Playwright dependency |
| SEC-01/02 | BLOCKED | Unauthenticated and injection-safe requests | Rejection/safe rendering | No auth/API/CRM runtime exists | Repository inspection |
| PERM-01 | BLOCKED | Non-admin protected-resource request | 401/403; no state change | No permissions layer exists | Repository inspection |
| VAL-01 | BLOCKED | Invalid form fixtures | Accessible errors; no persistence | No executable CRM submission path | Repository inspection |
| PERSIST-01 | BLOCKED | Create, reload, query | One durable record | No persistence/runtime exists | Repository inspection |
| ACC-01 | BLOCKED | Full visitor-to-confirmation flow | Confirmation and retrievable lead | No CRM submission backend exists | Repository inspection |

The three static source-presence checks emitted by the runner are PASS because each has a command and source-file evidence. They do not establish runtime behavior. `BLD-01` remains FAIL until dependencies are installed and the same command exits 0.

## Exit criteria

The audit is complete only when every BLOCKED/NOT TESTED row has a target, contract, test fixture, command output, expected/actual comparison, and artifact link. A runtime owner must provide the local/deployed URL, D1 migration state, disposable credentials for each role, API contract, and browser runner setup.
