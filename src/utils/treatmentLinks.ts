
// Treatment name to route mapping
export const treatmentRoutes: Record<string, string> = {
  // Botox treatments
  "botox": "/face-botox-areas",
  "face botox": "/face-botox-areas",
  "face botox areas": "/face-botox-areas",
  "anti-wrinkle treatments": "/face-botox-areas",
  "nefertiti face lift": "/nefertiti-botox-facelift",
  "nefertiti facelift": "/nefertiti-botox-facelift",
  "trigger point botox": "/trigger-point-botox",
  "advanced upper face botox": "/advanced-upper-face-botox",
  "lower face botox": "/lower-face-botox",
  
  // Dermal Fillers
  "lip fillers": "/lip-fillers",
  "lip filler": "/lip-fillers",
  "dermal fillers": "/dermal-filler-makeover",
  "dermal filler": "/dermal-filler-makeover",
  "dermal filler makeover": "/dermal-filler-makeover",
  "non surgical nose job": "/non-surgical-nose-job",
  "non-surgical nose job": "/non-surgical-nose-job",
  "lip filler dissolve": "/lip-filler-dissolve",
  
  // Other treatments
  "pdo threads": "/pdo-threads",
  "non surgical facelift": "/non-surgical-facelift",
  "non-surgical facelift": "/non-surgical-facelift",
  "clinical concepts to flawless skin": "/clinical-concepts-to-flawless-skin",
  "botox calf reduction": "/botox-calf-reduction",
  "medical anal bleaching": "/medical-anal-bleaching",
  "advanced consultation": "/advanced-consultation",
  "skin boosters": "/skin-boosters",
  
  // Add more treatments as pages are created
};

// Common treatment variations and aliases
export const treatmentAliases: Record<string, string> = {
  "botulinum toxin": "botox",
  "azzalure": "botox",
  "dysport": "botox",
  "hyaluronic acid": "dermal fillers",
  "ha fillers": "dermal fillers",
  "liquid rhinoplasty": "non surgical nose job",
  "non-surgical rhinoplasty": "non surgical nose job",
  "thread lift": "pdo threads",
  "polydioxanone threads": "pdo threads",
};

export function getAllTreatmentNames(): string[] {
  const directNames = Object.keys(treatmentRoutes);
  const aliasNames = Object.keys(treatmentAliases);
  return [...directNames, ...aliasNames].sort((a, b) => b.length - a.length); // Sort by length descending for better matching
}

export function getTreatmentRoute(treatmentName: string): string | null {
  const normalized = treatmentName.toLowerCase().trim();
  
  // Check direct route mapping
  if (treatmentRoutes[normalized]) {
    return treatmentRoutes[normalized];
  }
  
  // Check aliases
  if (treatmentAliases[normalized]) {
    const aliasTarget = treatmentAliases[normalized];
    return treatmentRoutes[aliasTarget] || null;
  }
  
  return null;
}
