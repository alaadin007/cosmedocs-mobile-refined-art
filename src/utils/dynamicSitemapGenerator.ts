
interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

interface SitemapData {
  pages: SitemapUrl[];
  treatments: SitemapUrl[];
  beforeAfter: SitemapUrl[];
  blog: SitemapUrl[];
  locations: SitemapUrl[];
}

const baseUrl = 'https://www.cosmedocs.com';
const currentDate = new Date().toISOString().split('T')[0];

// ===== CANONICAL PAGE ROUTES (content pages only, no redirects) =====

const pageRoutes = [
  '/',
  '/about/',
  '/our-team/',
  '/our-team/dr-ahmed-haq/',
  '/our-team/dr-hena-haq/',
  '/our-team/laerta-aesthetician/',
  '/medical-skincare/',
  '/safety/',
  '/testimonials/',
  '/contact/',
  '/book-consultation/'
];

const treatmentRoutes = [
  // Botox Hub
  '/treatments/botox/',
  '/treatments/masseter-botox/',
  '/treatments/botox-lip-flip/',
  '/treatments/oily-skin-botox/',
  // Dermal Fillers Hub
  '/treatments/dermal-fillers/',
  '/treatments/lip-fillers/',
  '/treatments/jawline-filler/',
  '/treatments/cheek-fillers/',
  '/treatments/chin-filler/',
  '/treatments/tear-trough-filler/',
  '/treatments/temple-filler/',
  // Skin Rejuvenation Hub
  '/treatments/skin-rejuvenation/',
  '/treatments/profhilo/',
  '/treatments/polynucleotides/',
  '/treatments/prp-vampire-facial/',
  '/treatments/microneedling/',
  '/treatments/chemical-peels/',
  '/treatments/hydrafacial/',
  '/treatments/pdo-threads/',
  '/treatments/fat-dissolving/',
  // Laser Hub
  '/treatments/laser-treatments/',
  '/treatments/laser-hair-removal/',
  '/treatments/co2-laser/',
  '/treatments/pico-laser/',
  // Medical Hub
  '/medical/',
  '/medical/botox-for-migraines/',
  '/medical/botox-for-hyperhidrosis/',
  // Concerns Hub
  '/concerns/',
  '/concerns/acne/',
  '/concerns/pigmentation-melasma/',
  '/concerns/anti-ageing/',
  '/concerns/non-surgical-facelift/'
];

const beforeAfterRoutes = [
  '/before-after/',
  '/before-after/botox/',
  '/before-after/dermal-fillers/',
  '/before-after/dermal-fillers/lips/',
  '/before-after/dermal-fillers/jawline/',
  '/before-after/dermal-fillers/cheeks/',
  '/before-after/dermal-fillers/chin/',
  '/before-after/dermal-fillers/temples/',
  '/before-after/dermal-fillers/tear-trough/',
  '/before-after/dermal-fillers/nose/',
  '/before-after/dermal-fillers/full-face-makeover/',
  '/before-after/skin-rejuvenation/',
  '/before-after/skin-rejuvenation/polynucleotides/',
  '/before-after/laser-hair-removal/'
];

// ONLY 4 blogs permitted
const blogRoutes = [
  '/blog/',
  '/blog/tear-trough-filler-results-explained/',
  '/blog/jaw-filler-results-explained/',
  '/blog/chin-filler-results-explained/',
  '/blog/lip-filler-results-explained/'
];

const locationRoutes: string[] = [];

function getPriority(route: string): number {
  if (route === '/') return 1.0;
  if (['/treatments/botox/', '/treatments/dermal-fillers/', '/treatments/lip-fillers/', '/treatments/skin-rejuvenation/'].includes(route)) return 0.9;
  if (route.startsWith('/treatments/') || route.startsWith('/medical/')) return 0.8;
  if (route.startsWith('/concerns/')) return 0.7;
  if (route === '/before-after/') return 0.8;
  if (route.startsWith('/before-after/')) return 0.6;
  if (route.startsWith('/blog/')) return 0.7;
  return 0.6;
}

function getChangeFreq(route: string): 'weekly' | 'monthly' {
  if (['/', '/treatments/', '/before-after/', '/blog/'].includes(route)) return 'weekly';
  if (route.includes('/lip-fillers')) return 'weekly';
  return 'monthly';
}

function createSitemapUrl(route: string): SitemapUrl {
  return {
    loc: `${baseUrl}${route}`,
    lastmod: currentDate,
    changefreq: getChangeFreq(route),
    priority: getPriority(route)
  };
}

export const generateDynamicSitemapData = (): SitemapData => ({
  pages: pageRoutes.map(createSitemapUrl),
  treatments: treatmentRoutes.map(createSitemapUrl),
  beforeAfter: beforeAfterRoutes.map(createSitemapUrl),
  blog: blogRoutes.map(createSitemapUrl),
  locations: locationRoutes.map(createSitemapUrl)
});

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
    { loc: `${baseUrl}/sitemap-before-after.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemap-blog.xml`, lastmod: currentDate }
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

export function generateAllDynamicSitemaps(): Record<string, string> {
  const data = generateDynamicSitemapData();
  
  return {
    'sitemap.xml': generateSitemapIndex(),
    'sitemap-pages.xml': generateSitemapXML(data.pages),
    'sitemap-treatments.xml': generateSitemapXML(data.treatments),
    'sitemap-before-after.xml': generateSitemapXML(data.beforeAfter),
    'sitemap-blog.xml': generateSitemapXML(data.blog)
  };
}
