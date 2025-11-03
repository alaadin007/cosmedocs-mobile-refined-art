// Treatment name to route mapping
export const treatmentRoutes: Record<string, string> = {
  // Botox treatments
  "botox": "/botox-london",
  "face botox": "/botox-london",
  "face botox areas": "/botox-london",
  "anti-wrinkle treatments": "/botox-london",
  "botox london": "/botox-london",
  "botox cost": "/botox-cost-london",
  "botox cost london": "/botox-cost-london",
  "botox price": "/botox-cost-london",
  "botox price london": "/botox-cost-london",
  "botox prices": "/botox-cost-london",
  "cost of botox": "/botox-cost-london",
  "how much does botox cost": "/botox-cost-london",
  "nefertiti face lift": "/nefertiti-botox-facelift",
  "nefertiti facelift": "/nefertiti-botox-facelift",
  "nefertiti lift": "/nefertiti-botox-face-jaw-lift",
  "nefertiti botox": "/nefertiti-botox-face-jaw-lift",
  "nefertiti jaw lift": "/nefertiti-botox-face-jaw-lift",
  "trigger point botox": "/trigger-point-botox",
  "advanced upper face botox": "/advanced-upper-face-botox",
  "lower face botox": "/lower-face-botox",
  "gummy smile botox": "/gummy-smile-botox",
  "gummy smile": "/gummy-smile-botox",
  "masseter botox": "/masseter-botox",
  "masseter": "/masseter-botox",
  "jawline slimming": "/masseter-botox",
  "jaw slimming": "/masseter-botox",
  "bruxism treatment": "/masseter-botox",
  
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
  "cheek fillers": "/cheek-filler",
  "cheek volume": "/cheek-filler",
  "cheek enhancement": "/cheek-filler",
  "tear trough": "/tear-trough-filler",
  "tear trough filler": "/tear-trough-filler",
  "under eye filler": "/tear-trough-filler",
  "under eye circles": "/tear-trough-filler",
  "lip fillers": "/lip-fillers",
  "lip filler": "/lip-fillers",
  "cupid bow": "/cupid-bow-lips",
  "cupid's bow": "/cupid-bow-lips",
  "cupid bow lips": "/cupid-bow-lips",
  "cupid's bow enhancement": "/cupid-bow-lips",
  "lip peak definition": "/cupid-bow-lips",
  "eczema": "/eczema-treatment",
  "eczema treatment": "/eczema-treatment",
  "psoriasis": "/psoriasis-treatment",
  "psoriasis treatment": "/psoriasis-treatment",
  "fat dissolve": "/fat-dissolve",
  "fat dissolving": "/fat-dissolve",
  "emsculpt": "/fat-dissolve",
  "body contouring": "/fat-dissolve",
  "t zone oily skin botox": "/oily-skin-botox",
  "oily skin botox": "/oily-skin-botox",
  "t-zone botox": "/oily-skin-botox",
  "sebum control": "/oily-skin-botox",
  "cosmederm": "/cosmederm",
  "dermatology": "/cosmederm",
  "medical dermatology": "/cosmederm",
  "skin clinic": "/cosmederm",
  
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
  "prp treatment": "/prp-treatment",
  "prp": "/prp-treatment",
  "vampire facial": "/prp-treatment",
  "platelet rich plasma": "/prp-treatment",
  "platelet-rich plasma": "/prp-treatment",
  "prgf": "/prp-treatment",
  "peel to reveal": "/peel-to-reveal",
  "peel-to-reveal": "/peel-to-reveal",
  "chemical peel": "/peel-to-reveal",
  "skin peel": "/peel-to-reveal",
  "cres system": "/peel-to-reveal",
  "deep cleansing": "/peel-to-reveal",
  "skin rejuvenation": "/peel-to-reveal",
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
