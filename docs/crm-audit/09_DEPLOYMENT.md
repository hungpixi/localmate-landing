# Deployment and configuration audit

## Current state

The repository is a Vite/React static site. `npm run build` writes the deployable site to `dist/`; the small `worker/index.ts` file is deployment glue only—there is no application API route, D1 schema, migration, or seed file. The configuration below prepares the Cloudflare target without inventing application bindings or credentials.

Files owned by this deployment setup:

- `wrangler.jsonc` — static assets, environment variables, D1 placeholders, and environments.
- `worker/index.ts` — asset fallback and an explicit placeholder response for future `/api/*` routes.
- `.dev.vars.example` — safe local variable template. The real `.dev.vars` is ignored.
- `package.json` / `package-lock.json` — pinned Wrangler CLI and operational commands.

Replace every `<D1_...>` value in `wrangler.jsonc` before using a remote D1 command. Placeholder values are intentional and must never be deployed as-is.

## Wrangler configuration

`wrangler.jsonc` serves `dist/` as a single-page application and exposes the optional asset binding as `env.ASSETS`. `DB` is reserved for the future Worker/API layer and is separated per environment:

| Environment | Worker name | D1 resource |
| --- | --- | --- |
| local/default | `localmate-landing` | `<D1_DATABASE_NAME_DEV>` |
| staging | `localmate-landing-staging` | `<D1_DATABASE_NAME_STAGING>` |
| production | `localmate-landing-production` | `<D1_DATABASE_NAME_PRODUCTION>` |

The top-level `workers_dev` setting keeps deployment on a `workers.dev` endpoint until a reviewed route or custom domain is intentionally added. No production deployment or secret mutation is performed by this audit.

## Variables and secrets

Commit non-sensitive, environment-specific values under `vars`. Copy `.dev.vars.example` to `.dev.vars` for local-only values. Put credentials in Wrangler’s encrypted secret store:

```powershell
npx wrangler secret put TURNSTILE_SECRET_KEY --env staging
npx wrangler secret put TURNSTILE_SECRET_KEY --env production
```

Do not put secret values in `wrangler.jsonc`, `.env*`, shell history, or command arguments. Verify the target with `npx wrangler whoami` and the explicit `--env` before changing a secret.

## Commands

Run from the repository root:

```powershell
npm ci
npm run build
npm run cf:auth
npm run cf:dry-run
npm run cf:deploy:staging
```

Database commands are intentionally separate from asset deployment. They require a real D1 binding and a committed `migrations/` directory. This repository does not yet contain migrations or `db/seed.sql`; seed commands must remain unused until those files are reviewed and added.

```powershell
npm run db:migrate:local
npm run db:migrate:staging
npm run db:migrate:production
npm run db:seed:local
npm run db:seed:staging
```

Use `--local` for development and `--remote` only for the explicitly named non-local environment. Review `npx wrangler d1 migrations list DB --env staging --remote` before applying migrations. A migration failure leaves the last successful migration applied; it does not replace the need for a backup and release plan.

## Release procedure

1. Confirm the branch, commit, Node/npm versions, and `npx wrangler whoami` account.
2. Replace and verify the environment’s D1 name/ID; do not copy staging IDs into production.
3. Run `npm ci`, `npm run build`, and `npm run cf:dry-run`.
4. Apply reviewed staging migrations, seed only non-sensitive test data, then run smoke tests against the staging endpoint.
5. Deploy staging with `npm run cf:deploy:staging` and inspect `npx wrangler tail localmate-landing-staging`.
6. Obtain release approval, take/export the D1 backup, apply production migrations, and deploy with `npm run cf:deploy:production`.
7. Verify the homepage, SPA deep links, asset loading, API health checks (when implemented), D1 reads/writes, logs, and Access policy behavior.

The production command is documented for an approved operator; it was not run during this audit.

## Rollback

Worker rollback is a version operation, not a source reset:

```powershell
npx wrangler versions list --env production
npx wrangler versions view <VERSION_ID> --env production
npx wrangler rollback <VERSION_ID> --env production
```

Confirm the version ID, environment, and health impact before rollback. If the issue is data-related, stop writes if possible, preserve logs, and restore/replay using the D1 backup and migration procedure; do not “roll back” by editing an already-applied migration. Create a forward migration for schema fixes.

## Access runbook

Cloudflare Access is not configured in this repository. Before exposing an admin/API surface:

- Put the staging and production hostnames behind separate Access applications.
- Require the approved identity provider and least-privilege groups; keep production operators distinct from general users.
- Protect `/admin/*`, operational endpoints, and any internal API path. Do not rely on a frontend check.
- Validate Access headers/tokens in the Worker/API when authorization is required; return a deny-by-default response.
- Test unauthenticated, authorized, and unauthorized requests in staging before production.
- Record the Access application, policy, identity-provider, and emergency-break-glass owner in the operational inventory; keep tokens/secrets out of this repository.

For an incident, first disable or tighten the affected Access policy, then use Worker logs/tail and the deployment version list to identify the change. Restore access only after the endpoint and D1 state are verified.

## Open items

- Create the Worker/API entrypoint before using `env.DB` or `env.ASSETS` programmatically.
- Provision separate D1 databases and replace all placeholders.
- Add reviewed migrations and a non-sensitive seed dataset.
- Decide the final custom domain/routes and configure them per environment.
- Configure and test Cloudflare Access outside this repository.
