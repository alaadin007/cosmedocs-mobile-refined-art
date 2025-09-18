/**
 * Automatic treatment route detection system
 * This file maintains a registry of all treatment routes and provides utilities
 * to automatically include new treatment pages in sitemaps
 */

// Central registry of all treatment routes
// This should be updated whenever a new treatment page is created
const TREATMENT_ROUTES = [
  // Core aesthetic treatments
  '/lip-fillers',
  '/non-surgical-nose-job', 
  '/non-surgical-facelift',
  '/pdo-threads',
  '/dermal-fillers',
  '/polynucleotide-treatment',
  '/profhilo-treatment',
  '/hydrafacial',
  '/prp-treatment',
  
  // Botox treatments
  '/advanced-upper-face-botox',
  '/lower-face-botox',
  '/face-botox-areas',
  '/nefertiti-botox-facelift',
  '/trigger-point-botox',
  '/gummy-smile-botox',
  '/chin-botox',
  '/trap-botox',
  '/botox-calf-reduction',
  
  // Filler treatments
  '/marionette-lines',
  '/nasolabial-folds',
  '/lip-filler-dissolve',
  '/cheek-filler',  // ✅ Added the missing Cheek Filler page
  '/chin-filler',   // ✅ Added new Chin Filler page
  '/ear-lobe-rejuvenation', // ✅ Added new Ear Lobe Rejuvenation page
  '/hair-transplant-surgeon', // ✅ Added Hair Transplant Surgeon page
  '/eczema-treatment',
  '/psoriasis-treatment',
  
  // Advanced/specialized treatments
  '/advanced-consultation',
  '/clinical-concepts-to-flawless-skin',
  '/medical-anal-bleaching',
  '/peel-to-reveal'
];

/**
 * Get all treatment routes for sitemap generation
 * @returns Array of treatment route paths
 */
export function getAllTreatmentRoutes(): string[] {
  return [...TREATMENT_ROUTES].sort();
}

/**
 * Add a new treatment route to the registry
 * This should be called whenever a new treatment page is created
 * @param route - The route path (e.g., '/new-treatment')
 */
export function addTreatmentRoute(route: string): void {
  const normalizedRoute = route.startsWith('/') ? route : `/${route}`;
  
  if (!TREATMENT_ROUTES.includes(normalizedRoute)) {
    TREATMENT_ROUTES.push(normalizedRoute);
    TREATMENT_ROUTES.sort();
    
    console.log(`✅ Added new treatment route to sitemap: ${normalizedRoute}`);
  }
}

/**
 * Check if a route is a treatment route
 * @param route - The route to check
 * @returns True if the route is a treatment route
 */
export function isTreatmentRoute(route: string): boolean {
  const normalizedRoute = route.startsWith('/') ? route : `/${route}`;
  return TREATMENT_ROUTES.includes(normalizedRoute);
}

/**
 * Get treatment routes by category
 * @param category - The category to filter by
 * @returns Array of routes in the specified category
 */
export function getTreatmentRoutesByCategory(category: 'botox' | 'filler' | 'aesthetic' | 'advanced'): string[] {
  switch (category) {
    case 'botox':
      return TREATMENT_ROUTES.filter(route => 
        route.includes('botox') || route.includes('gummy-smile') || route.includes('chin-botox')
      );
    case 'filler':
      return TREATMENT_ROUTES.filter(route => 
        route.includes('filler') || route.includes('marionette') || route.includes('nasolabial')
      );
    case 'aesthetic':
      return TREATMENT_ROUTES.filter(route => 
        ['lip-fillers', 'dermal-fillers', 'profhilo', 'prp', 'hydrafacial', 'polynucleotide'].some(term => route.includes(term))
      );
    case 'advanced':
      return TREATMENT_ROUTES.filter(route => 
        route.includes('advanced') || route.includes('clinical') || route.includes('medical')
      );
    default:
      return [];
  }
}

export default {
  getAllTreatmentRoutes,
  addTreatmentRoute,
  isTreatmentRoute,
  getTreatmentRoutesByCategory
};