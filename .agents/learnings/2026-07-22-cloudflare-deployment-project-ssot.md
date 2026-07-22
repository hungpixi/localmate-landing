# SSOT Learning: Cloudflare Pages Target Project Name

**Date:** 2026-07-22
**Category:** DevOps / Deployment / Cloudflare Pages

## Single Source of Truth (SSOT) Deployment Rule
- **Correct Cloudflare Pages Project Name:** `localmate-vn`
- **Official Production Domain:** `https://localmate-vn.pages.dev`
- **Wrangler Deployment Command:**
  ```bash
  npx wrangler pages deploy dist --project-name localmate-vn
  ```

## CRITICAL RULE FOR ALL AGENTS
1. Never deploy to `localmate`, `localmate-landing`, or any other placeholder name.
2. Always verify build folder is `dist/` (`npm run build`).
3. Always use `--project-name localmate-vn` when running `wrangler pages deploy`.
