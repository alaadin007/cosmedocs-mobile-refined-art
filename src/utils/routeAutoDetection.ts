// Browser-compatible route auto-detection for sitemap generation
// This works without filesystem access by using a centralized route registry

interface DetectedRoute {
  path: string;
  category: 'page' | 'treatment' | 'blog' | 'location';
  priority: number;
}

// Centralized route registry - manually maintained but automatically used
const ROUTE_REGISTRY = {
  pages: [
    '/', '/treatments', '/about', '/contact', '/partners',
    '/treatments-summary-arabic', '/treatments-summary-chinese', '/treatments-summary-japanese',
    '/team', '/before-after-gallery', '/membership', '/harley-street-consulting-rooms'
  ],
  treatments: [
    '/lip-fillers', '/non-surgical-nose-job', '/non-surgical-facelift', '/pdo-threads',
    '/dermal-fillers', '/polynucleotide-treatment', '/profhilo-treatment',
    '/hydrafacial', '/prp-treatment', '/advanced-upper-face-botox', '/lower-face-botox',
    '/face-botox-areas', '/nefertiti-botox-facelift', '/trigger-point-botox', 
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
  locations: ['/birmingham', '/manchester', '/cardiff', '/delhi', '/barbados']
};

/**
 * Gets all routes from the centralized registry
 * This ensures the sitemap is always in sync with registered routes
 */
export function autoDetectRoutes(): DetectedRoute[] {
  const allRoutes: DetectedRoute[] = [];
  
  // Process each category
  Object.entries(ROUTE_REGISTRY).forEach(([category, routes]) => {
    routes.forEach(path => {
      allRoutes.push({
        path,
        category: category as 'page' | 'treatment' | 'blog' | 'location',
        priority: calculatePriority(path)
      });
    });
  });

  return allRoutes;
}

/**
 * Add a new route to the registry
 * Call this when creating new pages to automatically include them in sitemaps
 */
export function addRoute(path: string, category: 'page' | 'treatment' | 'blog' | 'location') {
  if (!ROUTE_REGISTRY[category].includes(path)) {
    ROUTE_REGISTRY[category].push(path);
    console.log(`✅ Added ${path} to ${category} routes for sitemap`);
  }
}

/**
 * Remove a route from the registry
 * Call this when deleting pages to automatically remove them from sitemaps
 */
export function removeRoute(path: string, category?: 'page' | 'treatment' | 'blog' | 'location') {
  if (category) {
    const index = ROUTE_REGISTRY[category].indexOf(path);
    if (index > -1) {
      ROUTE_REGISTRY[category].splice(index, 1);
      console.log(`✅ Removed ${path} from ${category} routes`);
    }
  } else {
    // Remove from all categories if no category specified
    Object.values(ROUTE_REGISTRY).forEach(routes => {
      const index = routes.indexOf(path);
      if (index > -1) {
        routes.splice(index, 1);
        console.log(`✅ Removed ${path} from sitemap routes`);
      }
    });
  }
}

function calculatePriority(path: string): number {
  if (path === '/') return 1.0;
  if (['/treatments', '/about', '/contact'].includes(path)) return 0.9;
  if (path.includes('harley-street')) return 0.8;
  if (isTreatmentRoute(path)) return 0.8;
  if (path.includes('/blog/')) return 0.7;
  if (isLocationRoute(path)) return 0.7;
  return 0.6;
}

function isTreatmentRoute(path: string): boolean {
  const treatmentKeywords = [
    'filler', 'botox', 'treatment', 'nose-job', 'facelift', 'threads',
    'profhilo', 'hydrafacial', 'prp', 'polynucleotide', 'consultation',
    'peel', 'microneedling', 'bleaching', 'skin-care'
  ];
  
  return treatmentKeywords.some(keyword => 
    path.toLowerCase().includes(keyword.toLowerCase())
  );
}

function isLocationRoute(path: string): boolean {
  const locations = ['birmingham', 'manchester', 'cardiff', 'delhi', 'barbados'];
  return locations.some(location => path.includes(location));
}

/**
 * Browser-safe sitemap regeneration trigger
 * This notifies that routes have changed and sitemap should be updated
 */
export function triggerSitemapUpdate() {
  console.log('🔄 Route registry updated - sitemap regeneration needed');
  
  // In development, we can trigger a notification
  if (import.meta.env.DEV) {
    console.log('💡 Run: npm run generate-sitemap to update sitemap files');
  }
  
  // Store a flag that sitemap needs updating
  if (typeof window !== 'undefined') {
    localStorage.setItem('sitemap-needs-update', 'true');
  }
}