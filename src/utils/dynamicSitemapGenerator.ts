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

// Auto-detect treatment routes using the centralized treatment registry
// This ensures any new treatment pages are automatically included in sitemaps
function extractTreatmentRoutes(): string[] {
  try {
    // Import treatment routes from the centralized registry
    const { getAllTreatmentRoutes } = require('./treatmentRoutes');
    return getAllTreatmentRoutes();
  } catch (error) {
    console.warn('Could not load treatment routes from registry, using fallback');
    
    // Fallback: Define treatment-related route patterns 
    const treatmentPatterns = [
      // Core aesthetic treatments
      'lip-fillers', 'non-surgical-nose-job', 'non-surgical-facelift', 'pdo-threads',
      'dermal-fillers', 'polynucleotide-treatment', 'profhilo-treatment',
      'hydrafacial', 'prp-treatment',
      
      // Botox treatments
      'advanced-upper-face-botox', 'lower-face-botox', 'face-botox-areas', 'nefertiti-botox-facelift',
      'trigger-point-botox', 'gummy-smile-botox', 'chin-botox', 'botox-calf-reduction',
      
      // Filler treatments
      'marionette-lines', 'nasolabial-folds', 'lip-filler-dissolve', 'cheek-filler',
      
      // Advanced/specialized treatments
      'advanced-consultation', 'clinical-concepts-to-flawless-skin', 'medical-anal-bleaching',
      'peel-to-reveal'
    ];

    // Convert to full paths and return unique routes
    const routes = treatmentPatterns.map(pattern => `/${pattern}`);
    return [...new Set(routes)].sort();
  }
}

// Get treatment routes automatically
const treatmentRoutes = extractTreatmentRoutes();

const blogRoutes = [
  '/blog/non-surgical-nose-job-evolution',
  '/blog/pdo-threads-comprehensive-guide', 
  '/blog/aesthetic-maintenance-cost-guide',
  '/blog/chinese-london-aesthetics-guide',
  '/long-term-aesthetic-care-blog',
  '/aesthetic-maintenance-cost-blog',
  '/pdo-threads-blog',
  '/non-surgical-nose-job-blog',
  '/chinese-london-aesthetics-blog'
];

const locationRoutes = [
  '/birmingham',
  '/manchester', 
  '/cardiff',
  '/delhi',
  '/barbados'
];

const pageRoutes = [
  '/',
  '/treatments',
  '/about',
  '/contact',
  '/partners',
  '/treatments-summary-arabic',
  '/treatments-summary-chinese',
  '/team',
  '/before-after-gallery',
  '/membership'
];

// Function to determine priority based on route importance
function getPriority(route: string): number {
  if (route === '/') return 1.0;
  if (['/treatments', '/lip-fillers', '/non-surgical-nose-job', '/non-surgical-facelift', '/pdo-threads'].includes(route)) return 0.9;
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