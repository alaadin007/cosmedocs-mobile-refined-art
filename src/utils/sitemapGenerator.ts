interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

interface SitemapData {
  pages: SitemapUrl[];
  treatments: SitemapUrl[];
  blog: SitemapUrl[];
  locations: SitemapUrl[];
}

const baseUrl = 'https://www.cosmedocs.co.uk';
const currentDate = new Date().toISOString().split('T')[0];

export const sitemapData: SitemapData = {
  pages: [
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/treatments`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/partners`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      loc: `${baseUrl}/treatments-summary-arabic`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/treatments-summary-chinese`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    }
  ],
  treatments: [
    {
      loc: `${baseUrl}/lip-fillers`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/non-surgical-nose-job`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/non-surgical-facelift`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/dermal-filler-makeover`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/pdo-threads`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/advanced-consultation`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/advanced-upper-face-botox`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/lower-face-botox`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/nefertiti-botox-facelift`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/nefertiti-botox-face-jaw-lift`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/trigger-point-botox`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/lip-filler-dissolve`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/clinical-concepts-to-flawless-skin`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/medical-anal-bleaching`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/chin-botox`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    }
  ],
  blog: [
    {
      loc: `${baseUrl}/blog/non-surgical-nose-job-evolution`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/blog/pdo-threads-comprehensive-guide`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/blog/aesthetic-maintenance-cost-guide`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/blog/chinese-london-aesthetics-guide`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9
    }
  ],
  locations: [
    {
      loc: `${baseUrl}/birmingham`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/manchester`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/cardiff`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    }
  ]
};

export function generateSitemapXML(urls: SitemapUrl[]): string {
  const urlEntries = urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    <mobile:mobile/>
  </url>`).join('\n\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
  
${urlEntries}
</urlset>`;
}

export function generateSitemapIndex(): string {
  const sitemaps = [
    { loc: `${baseUrl}/sitemap-pages.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemap-treatments.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemap-blog.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemap-locations.xml`, lastmod: currentDate }
  ];

  const sitemapEntries = sitemaps.map(sitemap => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;
}

// Utility function to write sitemap files (for use in build scripts)
export function generateAllSitemaps(): Record<string, string> {
  return {
    'sitemap.xml': generateSitemapIndex(),
    'sitemap-pages.xml': generateSitemapXML(sitemapData.pages),
    'sitemap-treatments.xml': generateSitemapXML(sitemapData.treatments),
    'sitemap-blog.xml': generateSitemapXML(sitemapData.blog),
    'sitemap-locations.xml': generateSitemapXML(sitemapData.locations)
  };
}