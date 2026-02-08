// Treatment name to route mapping - Updated for Phase 1 migration
// All routes now point to new /treatments/ nested structure
export const treatmentRoutes: Record<string, string> = {
  // Botox treatments
  "botox": "/treatments/botox",
  "face botox": "/treatments/botox",
  "face botox areas": "/treatments/botox",
  "anti-wrinkle treatments": "/treatments/botox",
  "botox london": "/treatments/botox",
  "botox cost": "/treatments/botox-cost",
  "botox cost london": "/treatments/botox-cost",
  "botox price": "/treatments/botox-cost",
  "botox price london": "/treatments/botox-cost",
  "botox prices": "/treatments/botox-cost",
  "cost of botox": "/treatments/botox-cost",
  "how much does botox cost": "/treatments/botox-cost",
  "nefertiti face lift": "/treatments/nefertiti-lift",
  "nefertiti facelift": "/treatments/nefertiti-lift",
  "nefertiti lift": "/treatments/nefertiti-lift",
  "nefertiti botox": "/treatments/nefertiti-lift",
  "nefertiti jaw lift": "/treatments/nefertiti-lift",
  "trigger point botox": "/treatments/trigger-point-botox",
  "gummy smile botox": "/treatments/gummy-smile-botox",
  "gummy smile": "/treatments/gummy-smile-botox",
  "masseter botox": "/treatments/masseter-botox",
  "masseter": "/treatments/masseter-botox",
  "jawline slimming": "/treatments/masseter-botox",
  "jaw slimming": "/treatments/masseter-botox",
  "bruxism treatment": "/treatments/bruxism-botox",
  "bruxism botox": "/treatments/bruxism-botox",
  "migraine botox": "/treatments/migraine-botox",
  "lip flip": "/treatments/lip-flip",
  "trap botox": "/treatments/trap-botox",
  "trapezius botox": "/treatments/trap-botox",
  "calf slimming": "/treatments/calf-slimming-botox",
  "calf reduction": "/treatments/calf-slimming-botox",
  "botox calf reduction": "/treatments/calf-slimming-botox",
  "excessive sweating": "/treatments/hyperhidrosis-botox",
  "hyperhidrosis": "/treatments/hyperhidrosis-botox",
  "hyperhidrosis botox": "/treatments/hyperhidrosis-botox",
  "oily skin botox": "/treatments/oily-skin-botox",
  "t-zone botox": "/treatments/oily-skin-botox",
  "sebum control": "/treatments/oily-skin-botox",
  "forehead lines": "/treatments/forehead-lines-botox",
  "forehead lines botox": "/treatments/forehead-lines-botox",
  "frown lines": "/treatments/frown-line-botox",
  "frown line botox": "/treatments/frown-line-botox",
  "crows feet": "/treatments/crows-feet-botox",
  "crows feet botox": "/treatments/crows-feet-botox",
  "bunny lines": "/treatments/bunny-lines-botox",
  "bunny lines botox": "/treatments/bunny-lines-botox",
  "nasal flaring": "/treatments/nasal-flaring-botox",
  "nasal flaring botox": "/treatments/nasal-flaring-botox",
  "chin botox": "/treatments/chin-botox",
  
  // Dermal Fillers - Main page
  "dermal fillers": "/treatments/dermal-fillers",
  "dermal filler": "/treatments/dermal-fillers",
  "dermal filler makeover": "/treatments/dermal-fillers",
  
  // Dermal Fillers - Individual treatments
  "marionette lines": "/treatments/marionette-lines",
  "marionette lines filler": "/treatments/marionette-lines",
  "nasolabial folds": "/treatments/nasolabial-folds",
  "nasolabial fold filler": "/treatments/nasolabial-folds",
  "smile lines": "/treatments/nasolabial-folds",
  "jawline filler": "/treatments/jawline-filler",
  "jawline": "/treatments/jawline-filler",
  "jawline definition": "/treatments/jawline-filler",
  "cheek filler": "/treatments/cheek-filler",
  "cheek fillers": "/treatments/cheek-filler",
  "cheek volume": "/treatments/cheek-filler",
  "cheek enhancement": "/treatments/cheek-filler",
  "tear trough": "/treatments/tear-trough-filler",
  "tear trough filler": "/treatments/tear-trough-filler",
  "under eye filler": "/treatments/tear-trough-filler",
  "under eye circles": "/treatments/tear-trough-filler",
  "lip fillers": "/treatments/lip-fillers",
  "lip filler": "/treatments/lip-fillers",
  "cupid bow": "/treatments/cupid-bow-lips",
  "cupid's bow": "/treatments/cupid-bow-lips",
  "cupid bow lips": "/treatments/cupid-bow-lips",
  "cupid's bow enhancement": "/treatments/cupid-bow-lips",
  "lip peak definition": "/treatments/cupid-bow-lips",
  "chin filler": "/treatments/chin-filler",
  "temple filler": "/treatments/temple-filler",
  "forehead filler": "/treatments/forehead-filler",
  "neck filler": "/treatments/neck-filler",
  "nose filler": "/treatments/nose-filler",
  "non surgical nose job": "/treatments/nose-filler",
  "non-surgical nose job": "/treatments/nose-filler",
  "liquid rhinoplasty": "/treatments/nose-filler",
  "filler dissolving": "/treatments/filler-dissolving",
  "lip filler dissolve": "/treatments/filler-dissolving",
  "hyaluronidase": "/treatments/filler-dissolving",
  "ear lobe rejuvenation": "/treatments/ear-lobe-rejuvenation",
  
  // Skin Rejuvenation
  "profhilo": "/treatments/profhilo",
  "skin boosters": "/treatments/profhilo",
  "polynucleotides": "/treatments/polynucleotides",
  "polynucleotide treatment": "/treatments/polynucleotides",
  "prp": "/treatments/prp",
  "prp treatment": "/treatments/prp",
  "vampire facial": "/treatments/prp",
  "platelet rich plasma": "/treatments/prp",
  "platelet-rich plasma": "/treatments/prp",
  "prgf": "/treatments/prp",
  "hydrafacial": "/treatments/hydrafacial",
  "chemical peel": "/treatments/chemical-peel",
  "skin peel": "/treatments/chemical-peel",
  "microneedling": "/treatments/microneedling",
  "pdo threads": "/treatments/pdo-threads",
  "thread lift": "/treatments/pdo-threads",
  "thread face lift": "/treatments/pdo-threads",
  "8 point facelift": "/treatments/ha-makeover",
  "8-point facelift": "/treatments/ha-makeover",
  "ha makeover": "/treatments/ha-makeover",
  "full face filler": "/treatments/ha-makeover",
  "full face rejuvenation": "/treatments/ha-makeover",
  "non surgical facelift": "/treatments/non-surgical-facelift",
  "non-surgical facelift": "/treatments/non-surgical-facelift",
  "non surgical ponytail": "/treatments/non-surgical-ponytail",
  "ponytail facelift": "/treatments/non-surgical-ponytail",
  "fat dissolving": "/treatments/fat-dissolving",
  "fat dissolve": "/treatments/fat-dissolving",
  "aqualyx": "/treatments/fat-dissolving",
  "prescription skincare": "/treatments/prescription-skincare",
  "peel to reveal": "/treatments/peel-to-reveal",
  "peel-to-reveal": "/treatments/peel-to-reveal",
  "cres system": "/treatments/peel-to-reveal",
  "deep cleansing": "/treatments/peel-to-reveal",
  "skin rejuvenation": "/treatments/peel-to-reveal",
  
  // Plastic Surgery
  "plastic surgery": "/treatments/plastic-surgery",
  "plastic surgeon": "/treatments/plastic-surgery",
  "blepharoplasty": "/treatments/blepharoplasty",
  "eyelid surgery": "/treatments/blepharoplasty",
  "rhinoplasty": "/treatments/rhinoplasty",
  "nose surgery": "/treatments/rhinoplasty",
  "facelift surgery": "/treatments/facelift-surgery",
  "surgical facelift": "/treatments/facelift-surgery",
  "liposuction": "/treatments/liposuction",
  "co2 laser": "/treatments/co2-laser",
  "laser resurfacing": "/treatments/co2-laser",
  "scar reduction": "/treatments/scar-reduction",
  "hair transplant": "/treatments/hair-transplant",
  "fue": "/treatments/hair-transplant",
  
  // Medical Dermatology
  "dermatology": "/treatments/dermatology",
  "medical dermatology": "/treatments/dermatology",
  "skin clinic": "/treatments/dermatology",
  "acne": "/treatments/acne",
  "acne treatment": "/treatments/acne",
  "mole removal": "/treatments/mole-removal",
  "skin tag removal": "/treatments/mole-removal",
  "eczema": "/treatments/eczema",
  "eczema treatment": "/treatments/eczema",
  "psoriasis": "/treatments/psoriasis",
  "psoriasis treatment": "/treatments/psoriasis",
  "hyperpigmentation": "/treatments/hyperpigmentation",
  "dark spots": "/treatments/hyperpigmentation",
  "melasma": "/treatments/hyperpigmentation",
  
  // Specialised
  "intimate bleaching": "/treatments/intimate-bleaching",
  "anal bleaching": "/treatments/intimate-bleaching",
  "advanced consultation": "/treatments/advanced-consultation",
  "clinical concepts": "/treatments/clinical-concepts"
};

// Common treatment variations and aliases
export const treatmentAliases: Record<string, string> = {
  "botulinum toxin": "botox",
  "azzalure": "botox",
  "dysport": "botox",
  "hyaluronic acid": "dermal fillers",
  "ha fillers": "dermal fillers",
  "liquid rhinoplasty": "nose filler",
  "non-surgical rhinoplasty": "nose filler",
  "thread lift": "pdo threads",
  "polydioxanone threads": "pdo threads",
  "excessive gum display": "gummy smile botox",
  "high lip line": "gummy smile botox"
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
