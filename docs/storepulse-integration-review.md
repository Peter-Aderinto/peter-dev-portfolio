# StorePulse portfolio integration review

Reviewed 11 October 2026. All portfolio changes remain uncommitted; nothing was pushed or deployed.

## Inspection and rollback checkpoint

- Portfolio: `/home/empire/peter-dev-portfolio`.
- Source, inspected read-only: `/home/empire/projects/storepulse`.
- Both projects were successfully inspected. No StorePulse application source was copied, modified, tested, or committed.
- Portfolio branch: `main`.
- Starting commit: `42ba2006d9e07f9361255b9384b7e54a5802337d`.
- Existing work at the start: modified `src/app/favicon.ico`, `src/app/globals.css`, and `src/components/Projects.tsx`; deleted `public/vercel.svg`; untracked `public/flowpay.png`, `src/app/apple-icon.png`, and `src/app/icon.svg`. This work was preserved. The commit alone does not capture those existing edits; do not use a hard reset to roll back this integration.
- StorePulse already had uncommitted editor, route, service, dependency, and hardening-test changes. Its Git status remained unchanged after inspection.

## Existing portfolio architecture

Next.js 16.2.11, React 19.2.4, TypeScript, App Router under `src/app`, and a single homepage with Hero, TechMarquee, About, Projects, DesignShowcase, Experience, Contact, and Footer. Projects use a typed array and filtered cards with Next Image, local public assets, and full-card link overlays. There were no project-detail routes.

Reusable Navbar, buttons, brand mark, cards, typography, and CSS variables establish the existing identity: charcoal `#070807`, panels `#111411`, lime `#b7f34a`, primary text `#f2f5f0`, and muted text `#9ba39a`. DM Sans and Manrope are loaded by existing CSS. Existing responsive conventions include 980px and 720px with further narrow-screen adjustments. Navigation uses homepage section anchors, with a mobile drawer. Next configuration is the existing minimal `next.config.ts`; no deployment, Vercel, environment, package, or hosting settings were changed.

## Created files

- `src/app/projects/storepulse/page.tsx`: server-rendered case study and route metadata.
- `src/app/projects/storepulse/storepulse.module.css`: scoped responsive case-study styling.
- `public/storepulse/storepulse-mark.svg`: genuine, already compact vector brand asset copied from StorePulse.
- `docs/storepulse-integration-review.md`: this review record.

## Modified files for this integration

- `src/components/Projects.tsx`: StorePulse added first, including subtitle, technologies, case-study destination, separate GitHub action, and an internal destination in the current tab.
- `src/components/Navbar.tsx`: optional `linkPrefix` allows case-study navigation to return to homepage sections; default homepage behavior stays the same.
- `src/app/globals.css`: StorePulse card image, subtitle, action, focus, and layering styles.

Earlier favicon, FlowPay, and project-link edits remain in the working tree separately from these additions.

## Presentation

- First project card: **StorePulse**, **Full-Stack Shopify Application**, **Shopify Store Health & Growth Dashboard**.
- View Project, card body, and arrow open `/projects/storepulse`.
- Separate GitHub action opens `https://github.com/Peter-Aderinto/storepulse-shopify-app` in a new tab.
- StorePulse is included in All, Web Apps, Frontend, and Shopify filters.
- Case study includes a hero, problem, solution, six verified features, three architecture flows, six engineering highlights, development status, and source-code calls to action.
- Metadata includes the requested title/description, canonical URL, Open Graph text, and Twitter summary. No invented screenshot or misleading social preview was added.
- Clearly identifies a functional development build, tested against a Shopify development store, with production hosting and App Store publication still ahead. No live development tunnel or App Store installation link is exposed.

## Features verified against source

Read README, DEVELOPMENT_PLAN, SCORING, REMEDIATION, SYNCHRONIZATION, package/configuration, Prisma schema, loaders/actions, catalog/scoring services, remediation services and editors, webhook services, dashboard/product components, and relevant automated-test source.

- Authenticated admin loaders retrieve products through Shopify GraphQL; catalog/media/variant pagination and normalization are implemented.
- Shared deterministic scoring evaluates descriptions, imagery, alt-text presence, inventory readiness, and custom SEO completeness. Unknown data is excluded and coverage disclosed. Catalog scan limit is 250 products.
- Dashboard supports search, issues-only filtering, pagination, attention summaries, refresh, and product-detail navigation.
- Product analysis exposes category evidence and deterministic prioritized recommendations.
- Explicit SEO saves use `productUpdate`; alt-text saves use `fileUpdate`. Authentication, validation, product/image authority, stale-edit checks, duplicate-save protection, and authoritative rereads are implemented.
- Shopify's verified webhook boundary precedes product-update processing. Prisma transactions maintain shop-scoped metadata, seven-day receipt deduplication, and non-regressing product timestamps. Uninstall cleans up shop data.
- Webhooks store metadata, not a catalog replica, and do not rescan or push dashboard refreshes.
- Prisma/SQLite persist local sessions and synchronization metadata.
- Test source covers scoring, pagination, errors, remediation, authentication, tenant isolation, webhook persistence, and hardening. No exact test count is advertised; StorePulse tests were not run or altered as part of this portfolio task.

Older SCORING text still describes the earlier read-only phase. The presentation follows current source and later remediation/synchronization implementation instead.

## Assets and screenshot capture checklist

The user subsequently supplied `public/storepulse.png` in the StorePulse source project. It was copied unchanged to the portfolio as `public/storepulse/storepulse-dashboard.png` and now replaces the logo on the featured card and case-study hero. The complete screenshot is displayed without cropping, with descriptive alt text and a development-store caption. The original brand SVG remains available as a project asset.

Capture these later from the actual embedded application using permitted fictional development-store products:

1. Optional additional Store health dashboard capture: include the searchable product list and analysis coverage. The overview screenshot is now supplied and in use.
2. Product Analysis: product identity, category scores, issue evidence, and prioritized recommendations.
3. SEO editor: current title/description, editing fields, character counts, and explicit Save SEO/Cancel actions.

Optional fourth capture: image evidence with the alt-text editor. Crop away browser/dev-tunnel URLs, merchant/customer information, credentials, and unrelated Shopify Admin account details. Preserve the actual UI.

## Verification results

- `npm run lint`: passed.
- `npx tsc --noEmit`: passed; final production build also passed TypeScript validation.
- `npm run build`: passed; `/projects/storepulse` is statically generated.
- Existing automated portfolio tests: none found; package.json defines no test script.
- Browser checks passed at **1440, 1024, 768, and 375px** for homepage and case study: no horizontal overflow, all project images decode, seven cards remain, Shopify/All filters work, StorePulse arrow and separate GitHub action route correctly, back links return to projects, and existing homepage anchors remain present.
- On tablet/mobile, the shared navigation drawer opens, supplies homepage section destinations, and closes with Escape.
- All case-study main links can receive keyboard focus; visible focus outlines, descriptive image alt text, a skip link, one h1, and semantic section headings are present. Main actions have at least 44px height.
- Default-theme contrast: primary text/background **18.24:1**; muted text/panel **7.15:1**; button text/accent **14.71:1**. These exceed WCAG AA text thresholds. This is targeted verification, not a claim of a complete accessibility certification.
- No browser console errors or uncaught exceptions were observed.
- Existing SPSS, Bam, Melin, ImaniGifts, FlowPay, and simulator cards were retained. No unrelated homepage sections were redesigned.
- `git diff --check`: passed.

Browser tooling and verification captures live under `/tmp/portfolio-browser-check`, outside the portfolio and StorePulse repositories. No project dependencies were added.

## Review locally

The final built portfolio is running at `http://localhost:3210`.

1. Open `http://localhost:3210/#projects` and review the first StorePulse card.
2. Click the card or arrow, then try its separate GitHub action.
3. Open `http://localhost:3210/projects/storepulse` directly and review the content and layout.
4. Use browser responsive mode at 1440, 1024, 768, and 375px; Tab through actions and test the mobile navigation.
5. Run `git status --short` and review the files listed above. Earlier uncommitted portfolio changes remain in the same working tree.

If the local preview process has stopped, run `npm run start -- --port 3210` from the portfolio folder. For live edits, use `npm run dev` after stopping any other development server for this repository.
