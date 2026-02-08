/**
 * Automatic treatment route detection system
 * Updated for Phase 1 migration - all routes now under /treatments/
 */

// Central registry of all treatment routes (new nested structure)
const TREATMENT_ROUTES = [
  // Botox treatments
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
  
  // Dermal Filler treatments
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
  '/treatments/ha-makeover',
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

// Legacy route mapping for backward compatibility
const LEGACY_ROUTE_MAP: Record<string, string> = {
  '/lip-fillers': '/treatments/lip-fillers',
  '/non-surgical-nose-job': '/treatments/nose-filler',
  '/non-surgical-facelift': '/treatments/non-surgical-facelift',
  '/8-point-facelift': '/treatments/ha-makeover',
  '/pdo-threads': '/treatments/pdo-threads',
  '/dermal-fillers': '/treatments/dermal-fillers',
  '/polynucleotide-treatment': '/treatments/polynucleotides',
  '/profhilo': '/treatments/profhilo',
  '/hydrafacial': '/treatments/hydrafacial',
  '/prp-treatment': '/treatments/prp',
  '/botox-london': '/treatments/botox',
  '/botox-cost-london': '/treatments/botox-cost',
  '/nefertiti-botox-facelift': '/treatments/nefertiti-lift',
  '/trigger-point-botox': '/treatments/trigger-point-botox',
  '/gummy-smile-botox': '/treatments/gummy-smile-botox',
  '/chin-botox': '/treatments/chin-botox',
  '/trap-botox': '/treatments/trap-botox',
  '/botox-calf-reduction': '/treatments/calf-slimming-botox',
  '/frown-line-botox': '/treatments/frown-line-botox',
  '/crows-feet-botox': '/treatments/crows-feet-botox',
  '/forehead-lines-botox': '/treatments/forehead-lines-botox',
  '/bunny-lines-botox': '/treatments/bunny-lines-botox',
  '/nasal-flaring-botox': '/treatments/nasal-flaring-botox',
  '/lip-flip': '/treatments/lip-flip',
  '/migraine-botox': '/treatments/migraine-botox',
  '/bruxism-botox': '/treatments/bruxism-botox',
  '/excessive-sweat-botox': '/treatments/hyperhidrosis-botox',
  '/non-surgical-ponytail': '/treatments/non-surgical-ponytail',
  '/marionette-lines': '/treatments/marionette-lines',
  '/nasolabial-folds': '/treatments/nasolabial-folds',
  '/lip-filler-dissolve': '/treatments/filler-dissolving',
  '/cheek-filler': '/treatments/cheek-filler',
  '/chin-filler': '/treatments/chin-filler',
  '/cupid-bow-lips': '/treatments/cupid-bow-lips',
  '/ear-lobe-rejuvenation': '/treatments/ear-lobe-rejuvenation',
  '/hair-transplant-surgeon': '/treatments/hair-transplant',
  '/eczema-treatment': '/treatments/eczema',
  '/psoriasis-treatment': '/treatments/psoriasis',
  '/fat-dissolve': '/treatments/fat-dissolving',
  '/oily-skin-botox': '/treatments/oily-skin-botox',
  '/cosmederm': '/treatments/dermatology',
  '/mole-skin-tag-removal': '/treatments/mole-removal',
  '/advanced-consultation': '/treatments/advanced-consultation',
  '/clinical-concepts-to-flawless-skin': '/treatments/clinical-concepts',
  '/medical-anal-bleaching': '/treatments/intimate-bleaching'
};

/**
 * Get all treatment routes for sitemap generation
 */
export function getAllTreatmentRoutes(): string[] {
  return [...TREATMENT_ROUTES].sort();
}

/**
 * Get legacy route to new route mapping
 */
export function getLegacyRouteMap(): Record<string, string> {
  return { ...LEGACY_ROUTE_MAP };
}

/**
 * Convert legacy route to new nested route
 */
export function convertLegacyRoute(legacyRoute: string): string | null {
  const normalized = legacyRoute.startsWith('/') ? legacyRoute : `/${legacyRoute}`;
  return LEGACY_ROUTE_MAP[normalized] || null;
}

/**
 * Check if a route is a treatment route
 */
export function isTreatmentRoute(route: string): boolean {
  const normalized = route.startsWith('/') ? route : `/${route}`;
  return TREATMENT_ROUTES.includes(normalized) || normalized.startsWith('/treatments/');
}

/**
 * Get treatment routes by category
 */
export function getTreatmentRoutesByCategory(category: 'botox' | 'filler' | 'skin' | 'surgery' | 'dermatology'): string[] {
  switch (category) {
    case 'botox':
      return TREATMENT_ROUTES.filter(route => 
        route.includes('botox') || route.includes('lip-flip') || route.includes('nefertiti') || route.includes('hyperhidrosis')
      );
    case 'filler':
      return TREATMENT_ROUTES.filter(route => 
        route.includes('filler') || route.includes('marionette') || route.includes('nasolabial') || route.includes('nose-filler')
      );
    case 'skin':
      return TREATMENT_ROUTES.filter(route => 
        ['profhilo', 'polynucleotides', 'prp', 'hydrafacial', 'chemical-peel', 'microneedling', 'pdo-threads', 'facelift', 'fat-dissolving', 'peel-to-reveal', 'skincare'].some(term => route.includes(term))
      );
    case 'surgery':
      return TREATMENT_ROUTES.filter(route => 
        ['plastic-surgery', 'blepharoplasty', 'rhinoplasty', 'facelift-surgery', 'liposuction', 'co2-laser', 'scar-reduction', 'hair-transplant'].some(term => route.includes(term))
      );
    case 'dermatology':
      return TREATMENT_ROUTES.filter(route => 
        ['dermatology', 'acne', 'mole-removal', 'eczema', 'psoriasis', 'hyperpigmentation'].some(term => route.includes(term))
      );
    default:
      return [];
  }
}

export default {
  getAllTreatmentRoutes,
  getLegacyRouteMap,
  convertLegacyRoute,
  isTreatmentRoute,
  getTreatmentRoutesByCategory
};
