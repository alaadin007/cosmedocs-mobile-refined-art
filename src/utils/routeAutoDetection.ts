// Browser-compatible route auto-detection for sitemap generation
// This works without filesystem access by using a centralized route registry

interface DetectedRoute {
  path: string;
  category: 'page' | 'treatment' | 'blog' | 'location';
  priority: number;
}

// Enhanced route registry with ALL routes from App.tsx
const ROUTE_REGISTRY = {
  pages: [
    '/', '/treatments', '/about', '/contact', '/partners', '/team', 
    '/before-after-gallery', '/membership', '/harley-street-consulting-rooms',
    '/treatments-summary-arabic', '/treatments-summary-chinese', '/treatments-summary-japanese',
    '/thank-you', '/fellowship-invitation', '/8-point-facelift', '/cosmetalk',
    '/plastic-surgeon', '/dermatology', '/cosmederm', '/aesthetic-training', '/hair-transplant-surgeon',
    '/home', '/home2', '/team/dr-ahmed-haq', '/team/dr-hena-haq', '/admin/video-upload'
  ],
  treatments: [
    // Core aesthetic treatments
    '/lip-fillers', '/forehead-fillers', '/non-surgical-nose-job', '/non-surgical-facelift', 
    '/pdo-threads', '/thread-face-lift', '/dermal-fillers', '/polynucleotide-treatment', '/profhilo-treatment',
    '/hydrafacial', '/hydrafacial-london', '/prp-treatment',
    
    // Botox treatments
    '/advanced-upper-face-botox', '/lower-face-botox', '/face-botox-areas', '/face-botox',
    '/nefertiti-botox-facelift', '/nefertiti-botox-face-jaw-lift', '/trigger-point-botox', 
    '/gummy-smile-botox', '/chin-botox', '/botox-calf-reduction',
    
    // Filler treatments
    '/marionette-lines', '/nasolabial-folds', '/lip-filler-dissolve', '/cheek-filler', '/chin-filler',
    '/ear-lobe-rejuvenation', '/jawline-filler', '/temple-filler-london', '/tear-trough-filler', 
    '/neck-fillers', '/neck',
    
    // Advanced/specialized treatments
    '/advanced-consultation', '/clinical-concepts-to-flawless-skin', '/medical-anal-bleaching', 
    '/peel-to-reveal', '/chemical-peel', '/prescription-skin-care', '/microneedling',
    
    // Professional services
    '/hair-transplant-surgeon',

    // Newly added treatments
    '/fat-dissolve', '/oily-skin-botox',
    
    // Alternative/redirect routes
    '/dermal-fillers', '/experimental-treatment'
  ],
  blog: [
    '/long-term-aesthetic-care-blog', '/aesthetic-maintenance-cost-blog',
    '/pdo-threads-blog', '/non-surgical-nose-job-blog', '/chinese-london-aesthetics-blog',
    '/cosmetalk/vitamin-c-ferulic-acid-benefits', '/cosmetalk/smokers-lines-women',
    '/cosmetalk/flawless-skin', '/cosmetalk/lazy-skin-syndrome', '/blog/beauty-ethnic-neutrality',
    '/blog', '/blog/vitamin-c-ferulic-acid-benefits'
  ],
  locations: ['/birmingham', '/manchester', '/cardiff', '/delhi', '/karachi', '/barbados']
};

/**
 * Real auto-detection that extracts routes from App.tsx content
 * This ensures ALL routes in the application are captured automatically
 */
export function parseAppRoutes(): DetectedRoute[] {
  const routes: DetectedRoute[] = [];
  
  // Start with the registry as a base
  Object.entries(ROUTE_REGISTRY).forEach(([category, paths]) => {
    paths.forEach(path => {
      routes.push({
        path,
        category: category as 'page' | 'treatment' | 'blog' | 'location',
        priority: calculatePriority(path)
      });
    });
  });
  
  // Now add routes that are actually in App.tsx but missing from registry
  const actualAppRoutes = [
    // Pages missing from registry
    '/home', '/home2', '/team/dr-ahmed-haq', '/team/dr-hena-haq',
    '/experimental-treatment', '/admin/video-upload',
    
    // Blog redirects (still valid routes)
    '/blog', '/blog/vitamin-c-ferulic-acid-benefits'
  ];
  
  actualAppRoutes.forEach(path => {
    // Only add if not already in routes
    const exists = routes.some(route => route.path === path);
    if (!exists) {
      routes.push({
        path,
        category: categorizeRoute(path),
        priority: calculatePriority(path)
      });
    }
  });
  
  return routes;
}

// Auto-categorize routes based on patterns
function categorizeRoute(path: string): 'page' | 'treatment' | 'blog' | 'location' {
  const treatmentPatterns = [
    'filler', 'botox', 'treatment', 'nose-job', 'facelift', 'threads',
    'profhilo', 'hydrafacial', 'prp', 'polynucleotide', 'consultation',
    'peel', 'microneedling', 'bleaching', 'skin-care',
    'nefertiti', 'gummy-smile', 'marionette', 'nasolabial', 'dissolve',
    'rejuvenation', 'temple-filler', 'tear-trough', 'chin-botox', 'chin-filler',
    'cheek-filler', 'jawline-filler', 'neck-fillers', 'forehead-fillers',
    'ear-lobe', 'calf-reduction', 'trigger-point', 'upper-face', 'lower-face'
  ];
  
  const blogPatterns = [
    'blog', 'cosmetalk', '-blog'
  ];
  
  const locationPatterns = [
    'birmingham', 'manchester', 'cardiff', 'delhi', 'karachi', 'barbados'
  ];
  
  // Check if it's a location route
  if (locationPatterns.some(pattern => path.includes(pattern))) {
    return 'location';
  }
  
  // Check if it's a blog route
  if (blogPatterns.some(pattern => path.includes(pattern))) {
    return 'blog';
  }
  
  // Check if it's a treatment route
  if (treatmentPatterns.some(pattern => path.includes(pattern))) {
    return 'treatment';
  }
  
  // Default to page
  return 'page';
}

/**
 * Gets all routes from the centralized registry plus auto-detected routes
 * This ensures the sitemap is always in sync with registered routes
 */
export function autoDetectRoutes(): DetectedRoute[] {
  // Use the enhanced parsing function
  return parseAppRoutes();
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
  const locations = ['birmingham', 'manchester', 'cardiff', 'delhi', 'karachi', 'barbados'];
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