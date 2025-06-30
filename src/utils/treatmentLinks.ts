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
  "gummy smile botox": "/gummy-smile-botox",
  "gummy smile": "/gummy-smile-botox",
  "gummy smile treatment": "/gummy-smile-botox",
  
  // Dermal Fillers - Main page
  "dermal fillers": "/dermal-fillers",
  "dermal filler": "/dermal-fillers",
  "dermal filler makeover": "/dermal-fillers",
  
  // Dermal Fillers - Individual treatments
  "marionette lines": "/marionette-lines",
  "marionette lines filler": "/marionette-lines",
  "nasolabial folds": "/nasolabial-folds",
  "nasolabial fold filler": "/nasolabial-folds",
  "smile lines": "/nasolabial-folds",
  "jawline filler": "/jawline-filler",
  "jawline": "/jawline-filler",
  "jawline definition": "/jawline-filler",
  "cheek filler": "/cheek-filler",
  "cheek volume": "/cheek-filler",
  "cheek enhancement": "/cheek-filler",
  "tear trough": "/tear-trough-filler",
  "tear trough filler": "/tear-trough-filler",
  "under eye filler": "/tear-trough-filler",
  "under eye circles": "/tear-trough-filler",
  "lip fillers": "/lip-fillers",
  "lip filler": "/lip-fillers",
  
  // Other existing treatments
  "non surgical nose job": "/non-surgical-nose-job",
  "non-surgical nose job": "/non-surgical-nose-job",
  "lip filler dissolve": "/lip-filler-dissolve",
  "pdo threads": "/pdo-threads",
  "non surgical facelift": "/non-surgical-facelift",
  "non-surgical facelift": "/non-surgical-facelift",
  "clinical concepts to flawless skin": "/clinical-concepts-to-flawless-skin",
  "botox calf reduction": "/botox-calf-reduction",
  "medical anal bleaching": "/medical-anal-bleaching",
  "advanced consultation": "/advanced-consultation",
  "skin boosters": "/skin-boosters",
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
  "excessive gum display": "gummy smile botox",
  "high lip line": "gummy smile botox",
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
