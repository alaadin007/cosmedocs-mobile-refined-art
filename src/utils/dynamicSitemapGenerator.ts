
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

// Auto-detect ALL routes directly from App.tsx routing configuration
// This ensures the sitemap is always in sync with actual application routes
function extractAllRoutes(): { pages: string[], treatments: string[], blog: string[], locations: string[] } {
  try {
    // Import the auto-detection utility
    const { autoDetectRoutes } = require('./routeAutoDetection');
    const detectedRoutes = autoDetectRoutes();
    
    // Categorize routes automatically
    const categorized = {
      pages: [] as string[],
      treatments: [] as string[],
      blog: [] as string[],
      locations: [] as string[]
    };
    
    detectedRoutes.forEach(route => {
      switch (route.category) {
        case 'page':
          categorized.pages.push(route.path);
          break;
        case 'treatment':
          categorized.treatments.push(route.path);
          break;
        case 'blog':
          categorized.blog.push(route.path);
          break;
        case 'location':
          categorized.locations.push(route.path);
          break;
      }
    });
    
    return categorized;
  } catch (error) {
    console.warn('Could not auto-detect routes from App.tsx, using fallback');
    
    // Fallback to manual route definitions
    return {
      pages: [
        '/', '/treatments', '/about', '/contact', '/partners',
        '/treatments-summary-arabic', '/treatments-summary-chinese', '/treatments-summary-japanese',
        '/team', '/before-after-gallery', '/membership', '/harley-street-consulting-rooms'
      ],
      treatments: [
        '/lip-fillers', '/non-surgical-nose-job', '/non-surgical-facelift', '/pdo-threads',
        '/dermal-fillers', '/polynucleotide-treatment', '/profhilo',
        '/hydrafacial', '/prp-treatment', '/botox-london', '/nefertiti-botox-facelift', '/trigger-point-botox',
        '/gummy-smile-botox', '/chin-botox', '/botox-calf-reduction', '/marionette-lines',
        '/nasolabial-folds', '/lip-filler-dissolve', '/cheek-filler', '/chin-filler',
        '/ear-lobe-rejuvenation', '/jawline-filler', '/temple-filler-london',
        '/tear-trough-filler', '/neck-fillers', '/forehead-fillers', '/advanced-consultation',
        '/clinical-concepts-to-flawless-skin', '/medical-anal-bleaching', '/peel-to-reveal',
        '/chemical-peel', '/prescription-skin-care', '/microneedling'
      ],
      blog: [
        '/blog/non-surgical-nose-job-evolution', '/blog/pdo-threads-comprehensive-guide',
        '/blog/aesthetic-maintenance-cost-guide', '/blog/chinese-london-aesthetics-guide',
        '/long-term-aesthetic-care-blog', '/aesthetic-maintenance-cost-blog',
        '/pdo-threads-blog', '/non-surgical-nose-job-blog', '/chinese-london-aesthetics-blog'
      ],
      locations: ['/birmingham', '/manchester', '/cardiff', '/delhi', '/karachi', '/barbados']
    };
  }
}

// Get all routes automatically from App.tsx
const allRoutes = extractAllRoutes();
const { pages: pageRoutes, treatments: treatmentRoutes, blog: blogRoutes, locations: locationRoutes } = allRoutes;

// Function to determine priority based on route importance
function getPriority(route: string): number {
  if (route === '/') return 1.0;
  if (['/treatments', '/lip-fillers', '/non-surgical-nose-job', '/non-surgical-facelift', '/pdo-threads'].includes(route)) return 0.9;
  if (route === '/harley-street-consulting-rooms') return 0.8;
  if (route.includes('botox') || route.includes('filler')) return 0.8;
  if (route.includes('blog') || route.includes('treatment')) return 0.8;
  if (locationRoutes.includes(route)) return 0.7;
  return 0.6;
}

// Function to determine change frequency
function getChangeFreq(route: string): 'weekly' | 'monthly' {
  if (route === '/' || route === '/treatments') return 'weekly';
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

// Utility function to generate all sitemaps
export function generateAllDynamicSitemaps(): Record<string, string> {
  const data = generateDynamicSitemapData();
  
  return {
    'sitemap.xml': generateSitemapIndex(),
    'sitemap-pages.xml': generateSitemapXML(data.pages),
    'sitemap-treatments.xml': generateSitemapXML(data.treatments),
    'sitemap-blog.xml': generateSitemapXML(data.blog),
    'sitemap-locations.xml': generateSitemapXML(data.locations)
  };
}
