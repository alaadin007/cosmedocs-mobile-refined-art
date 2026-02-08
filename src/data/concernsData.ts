export const concernsData = [
  {
    title: "Facial Ageing & Volume Loss",
    whatsHappening: "Fat pad descent, volume depletion, collagen loss, and skeletal remodelling. As we age, the natural support structures beneath the skin shift and diminish, leading to hollowing in the temples and cheeks, deeper folds around the nose and mouth, and an overall loss of youthful contour.",
    categories: [
      {
        heading: "Prescription & Medical Skincare",
        treatments: [
          { name: "Prescription Retinoids", path: "/treatments/prescription-skincare/" },
          { name: "Collagen-Stimulating Skincare", path: "/treatments/prescription-skincare/" },
        ],
      },
      {
        heading: "Skin Regeneration",
        treatments: [
          { name: "Polynucleotides", path: "/treatments/polynucleotide/" },
          { name: "Profhilo", path: "/treatments/profhilo/" },
          { name: "Microneedling", path: "/treatments/microneedling/" },
          { name: "PRP Treatment", path: "/treatments/prp/" },
        ],
      },
      {
        heading: "Volume & Structural Support",
        treatments: [
          { name: "Cheek Filler", path: "/treatments/cheek-filler/" },
          { name: "Temple Filler", path: "/treatments/temple-filler/" },
          { name: "Jawline Filler", path: "/treatments/jawline-filler/" },
          { name: "Chin Filler", path: "/treatments/chin-filler/" },
        ],
      },
      {
        heading: "Advanced Rejuvenation",
        treatments: [
          { name: "Full Face Rejuvenation", path: "/concerns/non-surgical-facelift/" },
          { name: "HA Makeover", path: "/treatments/ha-makeover/" },
          { name: "PDO Threads", path: "/treatments/pdo-threads/" },
        ],
        note: "Advanced procedures are recommended for selected cases following comprehensive assessment.",
      },
    ],
  },
  {
    title: "Lines & Wrinkles",
    whatsHappening: "Dynamic muscle movement creates expression lines that, over time, etch into static wrinkles visible even at rest. Understanding the difference between dynamic and static lines helps determine the most appropriate treatment approach.",
    categories: [
      {
        heading: "Prescription & Preventative Care",
        treatments: [
          { name: "Prescription Retinoids", path: "/treatments/prescription-skincare/" },
          { name: "Medical-Grade Skincare", path: "/treatments/prescription-skincare/" },
        ],
      },
      {
        heading: "Muscle Modulation",
        treatments: [
          { name: "Anti-Wrinkle Injections (Botox)", path: "/treatments/botox/" },
        ],
      },
      {
        heading: "Skin Quality Support",
        treatments: [
          { name: "Profhilo", path: "/treatments/profhilo/" },
          { name: "Polynucleotides", path: "/treatments/polynucleotide/" },
          { name: "Microneedling", path: "/treatments/microneedling/" },
        ],
      },
      {
        heading: "Targeted Correction",
        treatments: [
          { name: "Fine-Line Dermal Fillers", path: "/treatments/dermal-fillers/" },
        ],
        note: "Fillers for static lines are selected on a case-by-case basis following clinical assessment.",
      },
    ],
  },
  {
    title: "Skin Texture & Tone",
    whatsHappening: "Surface irregularity, slowed cell turnover, and collagen degradation. Uneven skin texture, enlarged pores, dullness, and rough patches often result from sun damage, environmental factors, and the natural ageing process.",
    categories: [
      {
        heading: "Prescription & Medical Skincare",
        treatments: [
          { name: "Prescription Retinoids", path: "/treatments/prescription-skincare/" },
          { name: "Pigment-Regulating Skincare", path: "/treatments/prescription-skincare/" },
        ],
      },
      {
        heading: "Exfoliation & Resurfacing",
        treatments: [
          { name: "Chemical Peels", path: "/treatments/chemical-peel/" },
          { name: "HydraFacial", path: "/treatments/hydrafacial/" },
        ],
      },
      {
        heading: "Collagen Stimulation",
        treatments: [
          { name: "Microneedling", path: "/treatments/microneedling/" },
          { name: "PRP Treatment", path: "/treatments/prp/" },
          { name: "Polynucleotides", path: "/treatments/polynucleotide/" },
        ],
      },
      {
        heading: "Advanced Resurfacing",
        treatments: [
          { name: "CO₂ Laser", path: "/treatments/co2-laser/" },
        ],
        note: "Laser resurfacing is considered for selected cases where surface-level treatments have been exhausted.",
      },
    ],
  },
  {
    title: "Pigmentation & Discolouration",
    whatsHappening: "Melanin overproduction, inflammation, UV damage, and hormonal triggers. Hyperpigmentation, melasma, age spots, and post-inflammatory marks can significantly impact skin clarity and require careful clinical assessment.",
    categories: [
      {
        heading: "Prescription Skincare (Foundation)",
        treatments: [
          { name: "Hydroquinone Regimens", path: "/treatments/prescription-skincare/" },
          { name: "Prescription Retinoids", path: "/treatments/prescription-skincare/" },
          { name: "Azelaic Acid Protocols", path: "/treatments/prescription-skincare/" },
        ],
      },
      {
        heading: "Skin Renewal",
        treatments: [
          { name: "Chemical Peels", path: "/treatments/chemical-peel/" },
          { name: "Microneedling", path: "/treatments/microneedling/" },
        ],
        note: "Melasma-safe protocols are used. Aggressive resurfacing can worsen pigmentation.",
      },
      {
        heading: "Adjunct Treatments",
        treatments: [
          { name: "Polynucleotides", path: "/treatments/polynucleotide/" },
        ],
        note: "⚠️ Injectables are supportive, not primary, for pigmentation concerns.",
      },
    ],
  },
  {
    title: "Acne & Scarring",
    whatsHappening: "Inflammation, follicular blockage, and collagen destruction. Active acne and the scars it leaves behind require different treatment strategies. Understanding skin type, severity, and underlying hormonal factors is essential.",
    categories: [
      {
        heading: "Prescription Dermatology",
        treatments: [
          { name: "Prescription Acne Regimens", path: "/treatments/prescription-skincare/" },
          { name: "Acne Treatment", path: "/concerns/acne/" },
        ],
        note: "Hormonal assessment may be indicated for persistent or cyclical acne.",
      },
      {
        heading: "Active Acne Control",
        treatments: [
          { name: "Chemical Peels", path: "/treatments/chemical-peel/" },
          { name: "HydraFacial", path: "/treatments/hydrafacial/" },
        ],
      },
      {
        heading: "Scar Remodelling",
        treatments: [
          { name: "Microneedling", path: "/treatments/microneedling/" },
          { name: "PRP Treatment", path: "/treatments/prp/" },
          { name: "Polynucleotides", path: "/treatments/polynucleotide/" },
        ],
      },
      {
        heading: "Structural Correction (Selected Cases)",
        treatments: [
          { name: "Dermal Fillers for Depressed Scars", path: "/treatments/dermal-fillers/" },
          { name: "CO₂ Laser", path: "/treatments/co2-laser/" },
        ],
        note: "Structural interventions are considered only after active acne is controlled.",
      },
    ],
  },
  {
    title: "Skin Laxity & Sagging",
    whatsHappening: "Collagen and elastin breakdown combined with ligament laxity and volume loss. The jawline softens, jowls form, and the neck loses definition. Addressing laxity often requires stimulating the skin's own regenerative processes.",
    categories: [
      {
        heading: "Skin Quality Support",
        treatments: [
          { name: "Profhilo", path: "/treatments/profhilo/" },
          { name: "Polynucleotides", path: "/treatments/polynucleotide/" },
          { name: "Medical-Grade Skincare", path: "/treatments/prescription-skincare/" },
        ],
      },
      {
        heading: "Structural Tightening",
        treatments: [
          { name: "PDO Threads", path: "/treatments/pdo-threads/" },
          { name: "Microneedling", path: "/treatments/microneedling/" },
        ],
      },
      {
        heading: "Supportive Volume",
        treatments: [
          { name: "Jawline Filler", path: "/treatments/jawline-filler/" },
          { name: "Cheek Filler", path: "/treatments/cheek-filler/" },
        ],
        note: "Volume is placed in lift vectors to complement tightening procedures.",
      },
      {
        heading: "Surgical Options (Advanced Laxity)",
        treatments: [
          { name: "Facelift Surgery", path: "/treatments/facelift-surgery/" },
        ],
        note: "Surgical consultation is recommended when non-surgical approaches have reached their limit.",
      },
    ],
  },
];
