# The Door's Family Hotel — NestJS rewrite

Rebuild of [the-doors-family-hotel](../the-doors-family-hotel) (the original static HTML/CSS/JS
site) using NestJS + Handlebars views, with the menu pulled from a TypeScript data module instead
of hand-duplicated markup. See `AI_DOCS.md` in the original project for the full content/feature
spec this was built from.

**The deployed site is still static** (GitHub Pages) — NestJS is used at build time to render the
page, then the output is exported to plain `.html` + assets in `docs/`. There is no Node server
running in production; `docs/` is rebuilt fresh by CI on every push (see Deploying below), not
committed to git.

## Project layout

- `src/content/site.config.ts` — business facts, SEO meta, JSON-LD, social/contact links.
- `src/menu/menu.data.ts` — the full Food / Café / Bar menu (items, prices, and the
  Mo:Mo/Vodka/Whiskey pivot tables). **Edit prices/items here.**
- `views/index.hbs` — the page template (Handlebars), ported section-for-section from the
  original `index.html`.
- `public/` — CSS, JS, and all image/video/font/icon/PDF assets, copied from the original site.
- `scripts/export-static.ts` — boots the Nest app, renders each route, and writes the static
  output (plain HTML + copied `public/`) to `docs/`.

## Commands

```bash
npm install
npm run start:dev     # dev server at http://localhost:3000 (no hot-reload — restart after edits)
npm run build:static  # renders the site to docs/, for local preview of the exported output
```

## Deploying

Handled by `.github/workflows/deploy.yml`: on every push to `nestjs`, it runs `npm ci`,
`npm run build:static`, and publishes the resulting `docs/` folder via GitHub Pages' official
Actions deployment (`upload-pages-artifact` + `deploy-pages`).

One-time setup: in the GitHub repo settings, set **Pages → Build and deployment → Source** to
**GitHub Actions** (not "Deploy from a branch"). `docs/CNAME` (generated from `public/CNAME`)
carries the custom domain from the original site.

## Updating content

- **Menu prices/items** → `src/menu/menu.data.ts`, then `npm run build:static`.
- **Business info / SEO / social links** → `src/content/site.config.ts`.
- **Page copy/layout** → `views/index.hbs`.

After any change, re-run `npm run build:static` — `docs/` is generated output, not hand-edited.
