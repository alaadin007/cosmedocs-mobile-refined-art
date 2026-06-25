# Sitemaps — manual maintenance

The auto-generator scripts were deleted in June 2026 because their hardcoded
route arrays drifted months out of sync with the real site and would
silently shrink the published sitemaps when run.

**All sitemap files under `public/` are now edited by hand.**

Files:
- `public/sitemap.xml` — index of sub-sitemaps
- `public/sitemap-pages.xml` — marketing + company pages
- `public/sitemap-treatments.xml` — treatment pages
- `public/sitemap-blog.xml` — blog posts
- `public/sitemap-before-after.xml` — gallery pages
- `public/sitemap-locations.xml` — UK + international locations
- `public/sitemap-{ar,de,es,fr,ja,zh}.xml` — language-specific

When adding or removing a route:
1. Edit the appropriate sub-sitemap directly.
2. Bump `<lastmod>` on the changed entries and on the same line in `sitemap.xml`.
3. Use today's date (YYYY-MM-DD), canonical host `https://www.cosmedocs.com`.

Do not reintroduce a generator script unless its route list is sourced
directly from `src/App.tsx` at build time.
