# LocalMate CRM verification runbook

Use a clean checkout of the integrated branch. Record commit SHA, deployment URL, environment, timestamp, and operator for every run.

## 1. Static inventory

```powershell
git status --short --branch
git log -1 --oneline
rg -n "CRM|crm|D1|d1|wrangler|/api/|fetch\(" src server functions migrations wrangler.toml wrangler.jsonc package.json
```

Confirm that CRM UI, API, migration, binding, and test files exist. A zero-result search is a blocker, not a pass.

## 2. Clean install and checks

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
npm ci
npm run build
npm test
```

If a script does not exist, record that as a gap and do not substitute a prose claim.

## 3. D1 migration and data proof

```powershell
npx wrangler d1 migrations apply <DB_NAME> --remote
npx wrangler d1 execute <DB_NAME> --remote --command "select name from sqlite_master where type='table' order by name"
```

Create a uniquely identified lead through the API, query D1 for that ID, update it, query again, and delete/archive it. Save command output with secrets redacted.

## 4. API smoke checks

Exercise authenticated list/detail/create/update paths, invalid input, missing ID, unauthorized access, duplicate retry, pagination, and server failure. Save status codes, response bodies, and request IDs. Verify that notification status is based on provider response.

## 5. Browser acceptance

At the deployed URL, capture screenshots/video for: login/authorization, empty list, populated list, search/filter, detail, edit/status action, loading state, success state, failure state, and mobile layout. Inspect the browser network panel to prove calls target the CRM API and not a direct secret-bearing provider URL.

## 6. Failure and rollback

Force an API/provider/D1 failure. Confirm the UI reports failure and does not create false success. Verify logs contain a correlation/request ID without PII or secrets. Test the documented migration rollback or forward-fix procedure in staging.

## Evidence rules

- A screenshot alone cannot prove persistence.
- A TypeScript/build pass cannot prove runtime behavior.
- A D1 table listing cannot prove the UI uses D1.
- A provider request cannot prove delivery unless its response/status is captured.
- Mark any unavailable deployment, secret, database, or browser run **Untestable**, with the owner and next action.
