# LocalMate CRM Audit — Existing System

**Audit date:** 2026-07-28  
**Scope:** repository state at `ao/localmate-new-2/root`; read-only inspection before CRM migration  
**Conclusion:** this is a static React/Vite landing page with one browser-side lead submission flow. It is not yet a CRM application and has no durable lead store, authenticated operator surface, backend API, or Cloudflare Worker.

## 1. Existing repository tree

```text
localmate-new/
├── .agents/                         # project briefs, rules, plans, reports, skills, handoffs
├── docs/
│   ├── localmate-implementation-plan.md
│   ├── localmate-qa-report.md
│   └── crm-audit/
│       └── 01_EXISTING_SYSTEM.md   # this audit
├── public/
│   └── logo.png
├── src/
│   ├── App.tsx                      # single-page composition and scroll-to-form callback
│   ├── main.tsx                     # React 18 root; imports global CSS
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx           # sticky nav, mobile menu, anchor scrolling
│   │   │   └── Footer.tsx            # contact links and footer navigation
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PainPointsSection.tsx
│   │   │   ├── SolutionJourneySection.tsx
│   │   │   ├── BeforeAfterSection.tsx
│   │   │   ├── StarterPackageSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── ContentPackageSection.tsx
│   │   │   ├── SpecializedServicesSection.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   ├── DemoShowcaseSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── FinalCTASection.tsx   # lead form and outbound submission calls
│   │   └── ui/
│   │       ├── Accordion.tsx
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Container.tsx
│   │       ├── ResponsiveImage.tsx
│   │       ├── Section.tsx
│   │       └── SectionHeader.tsx
│   ├── data/
│   │   └── landingContent.ts        # all landing copy, packages, demos, FAQs, contacts
│   └── styles/
│       ├── globals.css
│       └── tokens.css
├── index.html                        # SPA shell, favicon, SEO metadata, Google Font
├── package.json / package-lock.json
├── tsconfig.json
├── vite.config.ts
├── logo.png                           # duplicate root asset
└── ChatGPT Image *.png                # three large root-level image assets, not imported by src
```

There is no `server/`, `api/`, `functions/`, `workers/`, `migrations/`, `wrangler.*`, `.github/` workflow, `.env.example`, test directory, router, or CRM screen in the repository. The implementation plan describes some files that do not exist in the current tree (`src/assets`, `MobileMenu.tsx`, `vite-env.d.ts`, `tsconfig.node.json`, and several public asset paths).

## 2. Runtime architecture and current flow

1. `src/main.tsx` mounts `App` under `React.StrictMode` into `#root`.
2. `src/App.tsx` renders one long page in a fixed order: header, marketing sections, demo showcase, FAQ, final CTA, footer.
3. Navigation is client-side DOM scrolling to section IDs. There are no routes or URL-level CRM views.
4. CTA buttons call `scrollIntoView`/manual `window.scrollTo` to reach `#register-form`; there is no modal or separate lead route.
5. `src/data/landingContent.ts` is imported directly by presentational sections. It is compile-time static content, not an API cache.

### Lead/demo form (`src/components/sections/FinalCTASection.tsx`)

The form has four controlled fields: `fullName`, `phone`, `industry`, and optional `facebookUrl`. Only name and phone are validated. Phone validation strips spaces, hyphens, periods, and parentheses, then applies a Vietnam-number regex. Form state, validation errors, loading, and success state are held in React memory only.

On submit the browser creates:

- `id`: `LEAD-${Date.now()}`
- `createdAt`: current ISO timestamp
- user-entered name and phone
- `businessName` and `businessCategory` inferred from `industry`
- hardcoded country, goal, package, source, status, and empty UTM/IP fields
- browser `document.referrer` and `navigator.userAgent`
- a note derived from the Facebook URL

It then sends the same payload to a hardcoded Google Apps Script URL using `fetch(..., { method: 'POST', mode: 'no-cors' })`. That request is deliberately not awaited; its rejection is only logged. A Telegram request is conditionally disabled because the committed bot token contains `EXAMPLE`. If enabled later, it would call Telegram directly from the browser.

The UI sets `success` after the try block and also sets `success` in `catch`, so a downstream failure can still show a successful registration. The payload also sets `telegramNotified: true` and `sheetSynced: true` before either delivery is confirmed. There is no retry, deduplication, idempotency key, server-side validation, consent record, spam protection, or operator acknowledgement.

## 3. Reusable versus replaced parts for CRM migration

### Reusable with limited changes

| Existing part | Reuse assessment |
|---|---|
| `src/main.tsx`, `App.tsx` | Keep as the public landing entry point; add a real service boundary instead of embedding delivery in a section. |
| `Header`, `Footer`, UI primitives, CSS tokens/styles | Reusable presentation layer. Preserve visual language and accessibility behavior while adding CRM state feedback. |
| Marketing sections and `landingContent.ts` | Reusable as marketing content. Move mutable business/contact/package content out of code when it needs operational editing. |
| `FinalCTASection` field labels and basic UX | Reuse the user-facing intent and fields, but replace submission/state logic and likely extract a form component/hook. |
| `DEMO_SHOWCASES` rendering | Reuse the card layout only; replace fixture URLs and copy with explicitly labelled, reviewable portfolio/demo records. |
| Vite build output (`dist/`) | Suitable for a static Cloudflare Pages frontend. It cannot by itself provide CRM persistence or protected secrets. |

### Replace or introduce

- Replace direct Google Apps Script/Telegram calls with a same-origin backend endpoint (Cloudflare Worker/API or another approved service).
- Introduce a durable lead model and migration/schema, including status history, timestamps, source/UTM attribution, consent, delivery attempts, and deduplication strategy.
- Introduce server-side validation, rate limiting/bot protection, secret storage, structured errors, retries, and an explicit success contract.
- Add CRM/operator routes and authentication/authorization if staff need to view or manage leads.
- Introduce environment-based configuration; no provider URL, bot token, chat ID, or business defaults should be compiled into the public bundle.
- Add tests for validation, API contracts, persistence, notification failure, and duplicate submissions; add an end-to-end smoke path for the public form.

## 4. Mock, hardcoded, and placeholder inventory

### Marketing/content fixtures

`src/data/landingContent.ts` hardcodes navigation, pain points, solution steps, before/after claims, package prices (`2.900.000đ`, `990.000đ`), deliverables, process steps, specialized-service prices, trust claims, FAQ questions/answers, and contact details. These are content fixtures, not CRM records.

### Demo/portfolio fixtures

`DEMO_SHOWCASES` contains five fixed records and external links: `saosangedu.com`, `donhachuxanh.vercel.app`, `master.smentor.pages.dev`, `exportmate.vn`, and `sugarpolishnewnan.com`. The UI presents them as examples but has no freshness, ownership, availability, or demo-mode flag. The ExportMate entry is especially notable because `.agents` contains a large, unrelated ExportMate target-state knowledge set.

### Lead defaults and fabricated metadata

`FinalCTASection.tsx` hardcodes `cityCountry: 'Việt Nam'`, `priorityGoal: 'Nhận Web Demo 24h'`, `packageInterest: 'Gói Khởi Tạo 2.900.000đ'`, `status: 'new'`, `source: 'landing_page'`, blank UTM/IP fields, and fallback labels such as “chưa nhập/chưa phân loại”. It sets `telegramNotified` and `sheetSynced` to `true` optimistically. `LEAD-${Date.now()}` is only a client-generated identifier and is not safe as a durable unique key.

### External integration placeholders/secrets

- Google Apps Script deployment URL is embedded in `FinalCTASection.tsx` and is called directly from the browser with `no-cors`.
- Telegram bot token is embedded in source but intentionally contains `EXAMPLE`, so the Telegram path is disabled; chat ID is `123456789`.
- Google Fonts is loaded from `fonts.googleapis.com` in `index.html`.
- Contact links include a phone number, Zalo URL, email, personal website, and GitHub URL in `landingContent.ts`/`Footer.tsx`.
- No `localStorage` or `sessionStorage` usage was found. No IndexedDB, cookie-based app state, API client, mock service worker, or JSON fixture directory was found.

### Encoding risk

Vietnamese strings in the source, HTML metadata, and existing docs are visibly mojibake in the checked-out files (for example, `NgÆ°á»i...` in `index.html`). This should be treated as a content/data migration risk and verified at the byte/encoding level before moving copy into a CRM or notification channel.

## 5. Migration risks and required decisions

| Risk | Current evidence | Migration implication |
|---|---|---|
| Silent lead loss | Apps Script request is fire-and-forget; errors are logged only | Backend must return a durable acknowledgement and record delivery attempts. |
| False success | `catch` also sets `success`; sync flags are optimistic | Define success as persisted lead, not notification completion. Show retryable/unavailable states. |
| Public secret exposure | Provider URLs/token configuration live in client code | Rotate any real credentials and move secrets to Worker/platform secrets. |
| No durable identity | Timestamp ID is generated in browser | Server-generated UUID/ULID plus dedupe key is required. |
| Missing attribution | UTM fields are always empty; only referrer/user agent are collected | Decide required campaign fields and privacy/consent policy before CRM schema. |
| Data quality | `industry` is free text; no URL validation; only two fields required | Define normalized fields, validation, spam handling, and whether existing leads need cleanup. |
| Privacy/compliance | Phone, referrer, user agent, and optional Facebook URL are submitted without visible consent capture | Define retention, access control, privacy notice, deletion/export, and lawful basis. |
| Static fixture confusion | Portfolio/demo records are mixed into the production landing bundle | Separate demo fixtures from production/customer records and label examples. |
| Stale project documentation | `.agents` includes ExportMate-specific briefs/rules and a mismatched orchestrator project file | Do not use those target-state docs as evidence of implemented LocalMate infrastructure; reconcile before implementation. |
| Encoding corruption | Vietnamese copy is mojibake in source/docs | Fix/verify encoding as a dedicated migration step to avoid corrupt CRM notifications and records. |
| Deployment mismatch | Cloudflare instructions exist, but no Wrangler/Worker config exists | Pages can host the static bundle; CRM API/storage must be designed and provisioned separately. |

## 6. Cloudflare readiness

### Present

- `vite.config.ts` produces a normal Vite SPA build, with local dev port `3000`.
- `.gitignore` excludes `dist`, `node_modules`, and `.env` files.
- `.agents/rules/cloudflare-deployment.md` and the SSOT learning document specify Cloudflare Pages project `localmate-vn`, URL `https://localmate-vn.pages.dev`, and the Pages deployment command below.

### Missing

- No `wrangler.toml/jsonc`, Worker entry point, Pages Functions, D1 database, R2 bucket, KV namespace, queues, migrations, bindings, CORS policy, secrets, or CI workflow.
- No evidence in the implementation of a same-origin `/api` route or Cloudflare-compatible lead persistence.
- The existing external form calls would remain cross-origin and browser-dependent even if the static site were deployed to Pages.

### Readiness assessment

**Static Pages frontend:** structurally plausible, subject to a successful dependency install/build.  
**CRM backend:** not started.  
**Production lead reliability/security:** not ready; the current form should be considered a prototype integration.

## 7. Run, verify, and deploy commands

From the repository root in PowerShell:

```powershell
npm install
npm run dev                  # Vite dev server; configured for http://localhost:3000
npm run build                # tsc && vite build; output: dist/
npm run preview              # serve the built dist/ output locally
```

`package.json` does **not** define `npm run typecheck`; existing `.agents` notes refer to that command, but it is currently unavailable unless a script is added. The existing QA report claims a prior successful build, but the audit environment has no `node_modules`, so the current verification attempt stopped in `tsc` with missing `react`/`lucide-react` modules. No implementation files were changed by that attempt.

After installing and validating the static build, the repository’s Cloudflare Pages instruction is:

```powershell
npm run build
npx wrangler pages deploy dist --project-name localmate-vn
```

This requires Wrangler authentication and an already provisioned Pages project. It deploys only the static frontend; it does not create CRM persistence or a Worker API. Do not infer that the `.agents` Cloudflare/D1/R2 plans are implemented from their presence alone.

## 8. Recommended migration boundary

Keep the public landing page and its visual components as the first client. Define a small lead contract at the boundary of `FinalCTASection` and send it to a server-side endpoint. The endpoint should validate and normalize the input, persist the lead, return a stable lead ID, and enqueue optional notifications. A later CRM UI can consume the persisted lead model without coupling the landing page to Google Sheets or Telegram. Treat all current `landingContent.ts` records and demo URLs as seed/content inputs requiring explicit review, not as authoritative CRM data.

