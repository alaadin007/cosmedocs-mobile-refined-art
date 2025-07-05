# Sitemap Management

## Overview

The site uses a modular sitemap structure for better organization, maintainability, and SEO performance:

- **sitemap.xml** - Main sitemap index that references all other sitemaps
- **sitemap-pages.xml** - Main pages (home, treatments overview, company pages)
- **sitemap-treatments.xml** - All treatment-specific pages
- **sitemap-blog.xml** - Blog posts and articles
- **sitemap-locations.xml** - Location-specific pages

## Structure Benefits

1. **Better Organization** - Pages are logically grouped by type
2. **Easier Maintenance** - Update specific sections without touching others
3. **Faster Crawling** - Search engines can process smaller, focused sitemaps
4. **Scalability** - Easy to add new categories as the site grows

## Adding New Pages

### Manual Method

1. Edit the appropriate sitemap file in `public/`
2. Add your new URL following the existing format
3. Update the `lastmod` date

### Automated Method (Recommended)

1. Edit `src/utils/sitemapGenerator.ts`
2. Add your new URLs to the appropriate array
3. Run the regeneration script:

```bash
npx ts-node src/scripts/generateSitemaps.ts
```

## Sitemap Categories

### Pages (`sitemap-pages.xml`)
- Homepage
- Main navigation pages
- Company information
- Multilingual summaries

### Treatments (`sitemap-treatments.xml`)
- Core treatments (lip fillers, nose jobs, etc.)
- Advanced treatments (specialized botox, etc.)
- Specialized procedures

### Blog (`sitemap-blog.xml`)
- Educational articles
- Treatment guides
- Industry insights

### Locations (`sitemap-locations.xml`)
- City-specific pages
- Regional content

## SEO Best Practices

- **Priority**: Homepage = 1.0, Main sections = 0.9, Content pages = 0.7-0.8
- **Change Frequency**: Static pages = monthly, Dynamic content = weekly
- **Last Modified**: Always use current date when updating
- **Mobile Tags**: All URLs include mobile optimization tags

## Maintenance Schedule

- **Weekly**: Check for new pages that need adding
- **Monthly**: Regenerate all sitemaps with updated dates
- **Quarterly**: Review priorities and change frequencies

## Technical Notes

- All URLs use the correct domain: `https://www.cosmedocs.co.uk`
- XML declarations have no leading whitespace
- Files are properly encoded in UTF-8
- Mobile annotations are included for all URLs

## Troubleshooting

### XML Validation Errors
- Ensure no blank lines before `<?xml` declarations
- Check that all URLs are properly encoded
- Validate XML structure online before deployment

### Search Console Issues
- Submit the main sitemap.xml to Google Search Console
- Individual sitemaps will be discovered automatically
- Monitor crawl stats for any blocked URLs