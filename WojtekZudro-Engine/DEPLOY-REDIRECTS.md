# Redirect plan (cutover)

After deploying Astro blog under `/blog`, set permanent redirect:

- old URL: `/edukacja` (and `/edukacja.html`)
- new URL: `/blog/`

## Apache (.htaccess) example

```apacheconf
RewriteRule ^edukacja/?$ /blog/ [R=301,L]
RewriteRule ^edukacja\.html$ /blog/ [R=301,L]
```

## Validation checklist

- `/edukacja` returns `301` to `/blog/`
- `/edukacja.html` returns `301` to `/blog/`
- `/blog/` returns `200`
- canonical on blog pages points to `/blog/...`
