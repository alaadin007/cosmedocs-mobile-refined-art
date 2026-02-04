
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

// Updated for Phase 4 migration - core pages with trailing slashes
const pageRoutes = [
  '/', '/treatments/', '/about/', '/contact/', '/partners/', '/partnerships/', '/auth/', '/dashboard/',
  '/treatments-summary-arabic/', '/treatments-summary-chinese/', '/treatments-summary-japanese/',
  '/our-team/', '/our-team/dr-ahmed-haq/', '/our-team/dr-hena-haq/', '/our-team/laerta-aesthetician/',
  '/our-team/dr-hassan-mirza/', '/our-team/dr-noor-hotaki/',
  '/before-after/', '/before-after/botox/', '/before-after/dermal-fillers/', '/before-after/skin-rejuvenation/',
  '/membership/', '/harley-street-consulting-rooms/',
  '/testimonials/', '/aesthetics-at-a-glance/',
  // Phase 4 hub pages
  '/concerns/', '/medical/', '/safety/'
];

// New nested treatment routes
const treatmentRoutes = [
  // Botox Hub & Sub-treatments
  '/treatments/botox',
  '/treatments/botox-cost',
  '/treatments/masseter-botox',
  '/treatments/lip-flip',
  '/treatments/gummy-smile-botox',
  '/treatments/chin-botox',
  '/treatments/frown-line-botox',
  '/treatments/crows-feet-botox',
  '/treatments/forehead-lines-botox',
  '/treatments/bunny-lines-botox',
  '/treatments/nasal-flaring-botox',
  '/treatments/nefertiti-lift',
  '/treatments/trap-botox',
  '/treatments/calf-slimming-botox',
  '/treatments/migraine-botox',
  '/treatments/bruxism-botox',
  '/treatments/hyperhidrosis-botox',
  '/treatments/oily-skin-botox',
  '/treatments/trigger-point-botox',
  '/treatments/botox/medical',
  
  // Dermal Fillers Hub & Sub-treatments
  '/treatments/dermal-fillers',
  '/treatments/lip-fillers',
  '/treatments/cupid-bow-lips',
  '/treatments/cheek-filler',
  '/treatments/chin-filler',
  '/treatments/jawline-filler',
  '/treatments/nose-filler',
  '/treatments/tear-trough-filler',
  '/treatments/temple-filler',
  '/treatments/forehead-filler',
  '/treatments/neck-filler',
  '/treatments/marionette-lines',
  '/treatments/nasolabial-folds',
  '/treatments/filler-dissolving',
  '/treatments/ear-lobe-rejuvenation',
  
  // Skin Rejuvenation & Advanced
  '/treatments/profhilo',
  '/treatments/polynucleotides',
  '/treatments/prp',
  '/treatments/hydrafacial',
  '/treatments/chemical-peel',
  '/treatments/microneedling',
  '/treatments/pdo-threads',
  '/treatments/8-point-facelift',
  '/treatments/non-surgical-facelift',
  '/treatments/non-surgical-ponytail',
  '/treatments/fat-dissolving',
  '/treatments/prescription-skincare',
  '/treatments/peel-to-reveal',
  
  // Plastic Surgery
  '/treatments/plastic-surgery',
  '/treatments/blepharoplasty',
  '/treatments/rhinoplasty',
  '/treatments/facelift-surgery',
  '/treatments/liposuction',
  '/treatments/co2-laser',
  '/treatments/scar-reduction',
  '/treatments/hair-transplant',
  
  // Medical Dermatology
  '/treatments/dermatology',
  '/treatments/acne',
  '/treatments/mole-removal',
  '/treatments/eczema',
  '/treatments/psoriasis',
  '/treatments/hyperpigmentation',
  
  // Specialised
  '/treatments/intimate-bleaching',
  '/treatments/advanced-consultation',
  '/treatments/clinical-concepts'
];

const blogRoutes = [
  '/blog/how-to-get-rid-of-bruises-quickly',
  '/blog/forehead-wrinkles-myths-tips',
  '/blog/lip-wrinkles-treatments',
  '/blog/skin-tags-and-skin-tag-removal',
  '/blog/beauty-ethnic-neutrality',
  '/long-term-aesthetic-care-blog',
  '/aesthetic-maintenance-cost-blog',
  '/pdo-threads-blog',
  '/non-surgical-nose-job-blog',
  '/chinese-london-aesthetics-blog',
  '/inside-mind-aesthetic-doctor-blog',
  '/cosmetalk',
  '/cosmetalk/vitamin-c-ferulic-acid-benefits',
  '/cosmetalk/smokers-lines-women',
  '/cosmetalk/flawless-skin',
  '/cosmetalk/lazy-skin-syndrome',
  '/cosmetalk/orofacial-neck-pain-cycle',
  '/journal',
  '/botox-faqs',
  '/ultimate-botox-guide'
];

const locationRoutes = [
  '/birmingham',
  '/manchester',
  '/cardiff',
  '/delhi',
  '/karachi',
  '/barbados'
];

// Function to determine priority based on route importance
function getPriority(route: string): number {
  if (route === '/') return 1.0;
  if (['/treatments', '/treatments/botox', '/treatments/dermal-fillers', '/treatments/lip-fillers'].includes(route)) return 0.9;
  if (route === '/harley-street-consulting-rooms') return 0.8;
  if (route.includes('/treatments/')) return 0.8;
  if (route.includes('blog') || route.includes('cosmetalk') || route.includes('journal')) return 0.7;
  if (locationRoutes.includes(route)) return 0.7;
  return 0.6;
}

// Function to determine change frequency
function getChangeFreq(route: string): 'weekly' | 'monthly' {
  if (route === '/' || route === '/treatments') return 'weekly';
  return 'monthly';
}

function createSitemapUrl(route: string): SitemapUrl {
  // Ensure trailing slash for all URLs
  const urlPath = route.endsWith('/') || route === '/' ? route : `${route}/`;
  return {
    loc: `${baseUrl}${urlPath}`,
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
