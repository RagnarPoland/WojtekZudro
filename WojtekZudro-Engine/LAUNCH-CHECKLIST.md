# Launch checklist - Astro blog

## 1) Build and artifacts

- Run: `npm run build`
- Verify `dist/` contains:
  - `index.html`
  - `wpis/`
  - `kategoria/`
  - `page/`
  - `_astro/`

## 2) Deploy target

- Deploy **contents of `dist/`** into server path that maps to `/blog/`.
- Ensure static assets under `_astro/` are publicly readable.

## 3) Redirects

- Add `301` redirects:
  - `/edukacja` -> `/blog/`
  - `/edukacja.html` -> `/blog/`
- Keep redirects permanent (no 302).

## 4) Functional smoke test

- `/blog/` returns `200`
- `/blog/page/2/` returns `200`
- `/blog/kategoria/seo-fundamentals/` returns `200`
- `/blog/wpis/staly-doplyw-ruchu-inbound/` returns `200`
- `favicon` loads under `/blog/favicon.svg` and `/blog/favicon.ico`

## 5) SEO sanity checks

- Single `h1` per page
- Canonical present on article pages
- Category and article links are internal and valid
- Pagination links are crawlable

## 6) Post-launch checks (24-72h)

- Search Console: submit sitemap and monitor indexation
- Check for 404 in server logs
- Confirm redirects are cached as 301
