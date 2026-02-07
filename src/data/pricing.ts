// Centralised pricing data — single source of truth for the entire site.
// Update prices HERE and every page/widget reflects the change automatically.

export interface PriceOption {
  name: string;
  price: string;
  note?: string;
}

export interface PricingItem {
  title: string;
  price?: string;
  description?: string;
  link?: string;
  note?: string;
  prices?: PriceOption[];
}

export interface PricingSection {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  items: PricingItem[];
}

// ────────────────────────────────────────
// BOTOX
// ────────────────────────────────────────

export const botoxFacePricing: PricingSection = {
  id: "botox-face",
  title: "FACE BOTOX",
  subtitle: "Injectable treatments for facial rejuvenation",
  description:
    "As highly experienced injectors in London since 2007, we specialise in carefully administering high doses of botox safely providing longevity.",
  items: [
    {
      title: "INJECTABLE CONSULTATION",
      price: "£50 (Off Any Treatment)",
      description: "Initial consultation to discuss your needs and treatment options",
    },
    {
      title: "FACE BOTOX / AZZALURE / DYSPORT",
      description: "Choose from: Frown Area, Forehead Area, Crows Feet",
      prices: [
        { name: "1 Area", price: "£175" },
        { name: "2 Areas", price: "£275" },
        { name: "3 Areas", price: "£350" },
        { name: "*Men supplement", price: "£50", note: "If Combined With Any 1,2,3 Main Areas" },
      ],
      link: "/treatments/botox/",
    },
    {
      title: "Forehead Lines Botox",
      price: "£175",
      link: "/treatments/botox/",
    },
    {
      title: "Frown Lines Botox (Glabella)",
      price: "£175",
      link: "/treatments/botox/",
    },
    {
      title: "Crow's Feet Botox",
      price: "£175",
      link: "/treatments/botox/",
    },
    {
      title: "Chin Botox",
      price: "£175 / £50 add-on",
      link: "/treatments/botox/",
    },
    {
      title: "Brow Lift Botox",
      price: "£175 / £50 add-on",
      link: "/treatments/botox/",
    },
    {
      title: "Gummy Smile Botox",
      price: "£175 / £50 add-on",
      link: "/treatments/botox/",
    },
    {
      title: "Bunny Lines Botox",
      price: "£175 / £50 add-on",
      link: "/treatments/botox/",
    },
    {
      title: "Nasal Flaring Botox",
      price: "£175 / £50 add-on",
      link: "/treatments/botox/",
    },
    {
      title: "Lip Flip Botox",
      price: "£175",
      link: "/treatments/lip-flip/",
    },
    {
      title: "Nefertiti Lift (Neck Bands/Platysma)",
      price: "£300",
      link: "/treatments/botox/",
    },
    {
      title: "Jelly Roll Botox",
      price: "£175",
    },
    {
      title: "Full Face Natural Botox",
      price: "£500",
      description: "Including all the above areas (3 areas plus the lower face)",
      link: "/treatments/botox/",
    },
    {
      title: "Migraine Botox / Headaches",
      price: "£450-550",
      link: "/treatments/botox/medical/",
    },
    {
      title: "Trigger Point Botox",
      price: "£350–£550",
      link: "/treatments/botox/medical/",
    },
    {
      title: "Bruxism Botox (Teeth Grinding)",
      price: "£350",
      link: "/treatments/masseter-botox/",
    },
    {
      title: "Rosacea & Blushing",
      price: "£350-450",
    },
    {
      title: "T-Zone Oily Skin Botox",
      price: "£250",
      description: "Reduces sebum production and controls facial shine",
      link: "/treatments/oily-skin-botox/",
    },
    {
      title: "Excessive Sweating (Hyperhidrosis)",
      price: "£550",
      link: "/treatments/botox/medical/",
    },
  ],
};

export const botoxContouringPricing: PricingSection = {
  id: "botox-contouring",
  title: "BOTOX CONTOURING",
  subtitle: "Advanced Botox treatments for body contouring and precise facial shaping",
  items: [
    {
      title: "Masseter (Jawline Slimming, Bruxism Teeth Grinding)",
      price: "£350",
      link: "/treatments/masseter-botox/",
    },
    {
      title: "Full Barbie Botox (Shoulder Reduction)",
      price: "£450",
      link: "/treatments/botox/",
    },
    {
      title: "Botox Calf Reduction",
      price: "£750",
      link: "/treatments/botox/",
    },
  ],
};

export const botoxSweattoxPricing: PricingSection = {
  id: "botox-sweattox",
  title: "SWEAT-TOX | FLUSHING",
  subtitle: "Treatments for excessive sweating and facial flushing",
  items: [
    {
      title: "Underarms Advanced Treatments",
      price: "£550",
      link: "/treatments/botox/medical/",
    },
    {
      title: "Palms",
      price: "£550",
      link: "/treatments/botox/medical/",
    },
    {
      title: "Forehead",
      price: "£350",
      link: "/treatments/botox/medical/",
    },
    {
      title: "Scalp",
      price: "£600",
      link: "/treatments/botox/medical/",
    },
    {
      title: "Nose",
      price: "£200",
      link: "/treatments/botox/medical/",
    },
    {
      title: "Cheeks",
      price: "£200",
      link: "/treatments/botox/medical/",
    },
  ],
};

// ────────────────────────────────────────
// DERMAL FILLERS
// ────────────────────────────────────────

export const fillersAntiAgeingPricing: PricingSection = {
  id: "fillers-antiageing",
  title: "ANTI-AGEING",
  subtitle: "Consultation £50 (off any treatment)",
  items: [
    { title: "8 Point Facelift", price: "From £800", description: "Comprehensive non-surgical facelift targeting 8 key facial points", link: "/treatments/dermal-fillers/" },
    { title: "Non-Surgical Facelift", price: "From £800", link: "/treatments/dermal-fillers/" },
    { title: "Marionette Lines Filler", price: "£325/ml", link: "/treatments/dermal-fillers/" },
    { title: "Nasolabial Folds Filler", price: "£325/ml", link: "/treatments/dermal-fillers/" },
    { title: "Jawline Filler (High Def/Jowls)", price: "£350/ml", link: "/treatments/jawline-filler/" },
    { title: "Cheek Filler", price: "£350/ml", link: "/treatments/cheek-filler/" },
    { title: "Tear Trough Filler / Under Eye Circles", price: "£425", link: "/treatments/tear-trough-filler/" },
    { title: "Chin Filler", price: "£350/ml", link: "/treatments/chin-filler/" },
    { title: "Neck Filler", price: "£400/ml", link: "/treatments/dermal-fillers/" },
  ],
};

export const fillersContouringPricing: PricingSection = {
  id: "fillers-contouring",
  title: "FACIAL CONTOURING",
  items: [
    { title: ".5ml Lip Filler (Natural)", price: "£300", link: "/treatments/lip-fillers/" },
    { title: "1ml Lip Filler (Bold & Plump)", price: "£350", link: "/treatments/lip-fillers/" },
    { title: "1.5 Lip Filler", price: "£400", link: "/treatments/lip-fillers/" },
    { title: "Lip Filler Dissolve", price: "£200", link: "/treatments/dermal-fillers/" },
    { title: "Non Surgical Nose Job (Filler)", price: "£450", link: "/treatments/nose-filler/" },
    { title: "Non Surgical Nose Job (PCL Threads)", price: "£950", link: "/treatments/nose-filler/" },
    { title: "Nose Filler Maintenance", price: "£400" },
    { title: "Forehead Filler Bumps & Dips", price: "£400", link: "/treatments/dermal-fillers/" },
    { title: "Temple Filler (Hollowing)", price: "£350/ml", link: "/treatments/temple-filler/" },
    { title: "Redensity 1", price: "£250/ml" },
    { title: "Aqualyx Fat Dissolving", price: "POC" },
    { title: "Fat Dissolve/Emsculpt", price: "POC", description: "Non-invasive body contouring and fat reduction", link: "/treatments/fat-dissolving/" },
    { title: "PDO Threads", link: "/treatments/pdo-threads/" },
    { title: "Ear Lobe Rejuvenation", price: "From £500", description: "Rejuvenation, new collagen, plumping using hyaluronic acid that stimulates your own collagen", link: "/treatments/dermal-fillers/" },
  ],
};

export const hyaluronicMakeoverPricing: PricingSection = {
  id: "hyaluronic-makeover",
  title: "HYALURONIC MAKEOVER (HA MAKEOVER)",
  description:
    "With HYALURONIC MAKEOVER (HAMO), you can achieve a youthful and refreshed look without invasive procedures.",
  items: [
    { title: "HAMA 1 – 3 Syringes", price: "£1,250", description: "Guide: 32-45, slim face" },
    { title: "HAMA 2 – 4 Syringes", price: "£1,500", description: "Guide: 45-65, slim face" },
  ],
};

export const skinBoostersPricing: PricingSection = {
  id: "skin-boosters",
  title: "SKIN BOOSTERS",
  subtitle: "Advanced hydration and skin rejuvenation",
  items: [
    { title: "PROFHILO", price: "£350 per session", description: "Bio-remodeling hyaluronic acid treatment for skin laxity and hydration", link: "/treatments/profhilo/" },
    { title: "POLYNUCLEOTIDES", price: "£300 per session", description: "DNA-based regenerative treatment to stimulate cellular renewal", link: "/treatments/polynucleotides/" },
    { title: "REDENSITY 1", price: "£250 per session", description: "Targeted skin quality enhancer for face, neck, and décolletage" },
    { title: "JALUPRO", price: "£275 per session", description: "Amino acid complex for deep skin restructuring" },
    { title: "SUNEKOS", price: "£275 per session", description: "Hyaluronic acid and amino acid treatment for periorbital areas" },
    { title: "MICRONEEDLING", price: "£250 per session", description: "Advanced collagen induction therapy for flawless skin rejuvenation", link: "/treatments/microneedling/" },
  ],
};

export const skinMedicinePricing: PricingSection = {
  id: "skin-medicine",
  title: "SKIN & HAIR MEDICINE",
  items: [
    { title: "Light Peels (no obvious flaking or dryness)", price: "£125", description: "Glycolic, Lactic, Pyruvic, Salycylic" },
    { title: "Medium Grade Peels (Peel To Reveal)", price: "£250", description: "Most popular – little flaking and dryness for 1 week" },
    { title: "Deep Tissue Grade Peel (Phenol)", price: "£1,000" },
    { title: "Microneedling 1 Session", price: "£150", link: "/treatments/microneedling/" },
    { title: "Microneedling 3 Sessions", price: "£350", description: "+ Complimentary Retinol (RRP £50)", link: "/treatments/microneedling/" },
    { title: "PRP 1 Session", price: "£500", link: "/treatments/prp-vampire-facial/" },
    { title: "PRP 3 Sessions", price: "£1,500", description: "+ Complimentary Vitamin C12% & Retinol (RRP £50)", link: "/treatments/prp-vampire-facial/" },
  ],
};

export const plasticSurgeryPricing: PricingSection = {
  id: "plastic-surgery",
  title: "PLASTIC SURGEON SERVICES",
  subtitle: "Expert cosmetic surgery procedures",
  items: [
    { title: "CONSULTATION", price: "£150", description: "Comprehensive surgical consultation and assessment" },
    { title: "RHINOPLASTY (NOSE SURGERY)", price: "From £6,000", description: "Surgical nose reshaping for improved aesthetics and function" },
    { title: "BREAST AUGMENTATION", price: "From £5,500", description: "Breast enhancement with implants" },
    { title: "BREAST REDUCTION", price: "From £7,000", description: "Reduction mammoplasty for comfort and proportion" },
    { title: "FACELIFT", price: "From £8,000", description: "Comprehensive facial rejuvenation surgery" },
    { title: "TUMMY TUCK", price: "From £6,500", description: "Abdominoplasty for flatter, firmer abdomen" },
    { title: "LIPOSUCTION", price: "From £3,500", description: "Fat removal for body contouring" },
    { title: "BLEPHAROPLASTY", price: "From £3,000", description: "Eyelid surgery for refreshed appearance" },
  ],
};

export const dermatologyPricing: PricingSection = {
  id: "dermatology",
  title: "DERMATOLOGY SERVICES",
  subtitle: "Medical and aesthetic dermatology",
  items: [
    { title: "DERMATOLOGY CONSULTATION", price: "£200", description: "Comprehensive skin health assessment and treatment planning" },
    { title: "SKIN CANCER SCREENING", price: "£300", description: "Comprehensive skin cancer detection and monitoring" },
    { title: "ACNE TREATMENT", price: "From £250", link: "/treatments/skin-rejuvenation/" },
    { title: "ECZEMA TREATMENT", price: "From £200", link: "/treatments/skin-rejuvenation/" },
    { title: "PSORIASIS TREATMENT", price: "From £250", link: "/treatments/skin-rejuvenation/" },
    { title: "ROSACEA TREATMENT", price: "From £200" },
    { title: "MOLE & SKIN TAG REMOVAL", price: "From £150" },
    { title: "SKIN TAG REMOVAL", price: "£100 FOR 5 TAGS" },
    { title: "HYPERPIGMENTATION TREATMENT", price: "From £300" },
    { title: "FACIAL THREAD VEINS", price: "FROM £75" },
    { title: "LEG VEINS / SPIDER VEINS", price: "£400 PER LEG" },
    { title: "PRESCRIPTION SKINCARE", price: "From £100" },
  ],
};

// ────────────────────────────────────────
// Lookup helper — get sections by ID
// ────────────────────────────────────────

const allSections: PricingSection[] = [
  botoxFacePricing,
  botoxContouringPricing,
  botoxSweattoxPricing,
  fillersAntiAgeingPricing,
  fillersContouringPricing,
  hyaluronicMakeoverPricing,
  skinBoostersPricing,
  skinMedicinePricing,
  plasticSurgeryPricing,
  dermatologyPricing,
];

export function getPricingByIds(ids: string[]): PricingSection[] {
  return allSections.filter((s) => ids.includes(s.id));
}

export function getPricingById(id: string): PricingSection | undefined {
  return allSections.find((s) => s.id === id);
}
