// Netlify Edge Function: Injects page-specific <title> and <meta description>
// into the HTML response BEFORE JavaScript executes.
// This ensures crawlers (Google, Bing, AI bots) always see the correct metadata.

const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Cosmedocs London | Aesthetic Medicine | Harley Street',
    description: 'Harley Street aesthetic clinic by Dr. Ahmed Haq. Botox, fillers & skin treatments. Invisible art — Bold — Natural — Always Your Way.'
  },
  '/treatments/': {
    title: 'Aesthetic Treatments London | Cosmedocs Harley Street',
    description: 'Explore our full range of doctor-led aesthetic treatments. Botox, dermal fillers, skin rejuvenation, laser & plastic surgery on Harley Street.'
  },
  '/treatments/botox/': {
    title: 'Botox London | Anti-Wrinkle Injections | Cosmedocs Harley Street',
    description: 'Expert Botox treatments from £275. Doctor-led anti-wrinkle injections for forehead lines, crow\'s feet & frown lines. Harley Street since 2007.'
  },
  '/botox-cost-uk/': {
    title: 'Botox Cost UK (2026): Prices, Units & What Affects Cost',
    description: 'Clear explanation of Botox pricing in the UK, how many units you need, and why costs vary. Learn what you\'re really paying for from Harley Street doctors.'
  },
  '/botox-units-explained/': {
    title: 'Botox Units Explained: How Many Do You Need? (2026)',
    description: 'How many units of Botox do you need? Area-by-area breakdown for forehead, frown lines, crow\'s feet & more. Expert dosing guide from Harley Street.'
  },
  '/how-long-does-botox-last/': {
    title: 'How Long Does Botox Last? Duration Guide (2026)',
    description: 'Botox lasts 3–6 months depending on area, dosing & lifestyle. Area-by-area timeline, first-time expectations & how to make results last longer.'
  },
  '/cheap-botox-vs-expensive/': {
    title: 'Cheap Botox vs Expensive: What\'s the Difference? (2026)',
    description: 'Cheap vs expensive Botox compared: dosing, safety, longevity & real cost per month. Learn why budget Botox often costs more long-term.'
  },
  '/botox-price-london/': {
    title: 'Botox Prices London: What Does It Cost? (2026)',
    description: 'London Botox prices from £275. Compare Harley Street, Central London & outer borough pricing. Area-by-area cost breakdown from Harley Street doctors.'
  },
  '/treatments/botox-cost/': {
    title: 'Cost of Botox in London | Expert Injectable Clinic',
    description: 'Transparent Botox pricing from £275. Expert anti-wrinkle injections at London\'s leading pure injectable clinic. Premium results, honest costs.'
  },
  '/treatments/masseter-botox/': {
    title: 'Masseter Botox London | Jawline Slimming | Cosmedocs',
    description: 'Slim your jawline with masseter Botox. Reduce teeth grinding & reshape your face naturally. Doctor-led treatment on Harley Street.'
  },
  '/treatments/lip-flip/': {
    title: 'Lip Flip London | Botox Lip Enhancement | Cosmedocs',
    description: 'Subtle lip enhancement with the Botox lip flip. Non-filler alternative for a natural pout. Doctor-led on Harley Street.'
  },
  // oily-skin-botox removed: redirects to /treatments/botox/
  '/treatments/trap-botox/': {
    title: 'Trap Botox London | Trapezius Slimming | Cosmedocs',
    description: 'Slim your trapezius muscles with Trap Botox. Elongate your neck & relieve shoulder tension. Doctor-led on Harley Street.'
  },
  '/treatments/calf-slimming-botox/': {
    title: 'Calf Slimming Botox London | Cosmedocs Harley Street',
    description: 'Non-surgical calf reduction with Botox. Slim bulky calves for elegant leg contours. Doctor-led treatment on Harley Street.'
  },
  '/treatments/bruxism-botox/': {
    title: 'Bruxism Botox London | Teeth Grinding Treatment | Cosmedocs',
    description: 'Stop teeth grinding with masseter Botox for bruxism. Relieve jaw pain & protect your teeth. Doctor-led on Harley Street.'
  },
  '/treatments/gummy-smile-botox/': {
    title: 'Gummy Smile Botox London | Cosmedocs Harley Street',
    description: 'Correct a gummy smile with precise Botox. Subtle, natural results by experienced doctors on Harley Street.'
  },
  '/treatments/chin-botox/': {
    title: 'Chin Botox London | Dimpled Chin Treatment | Cosmedocs',
    description: 'Smooth a dimpled or pebbled chin with Botox. Precise treatment for chin creping by doctors on Harley Street.'
  },
  '/treatments/frown-line-botox/': {
    title: 'Frown Line Botox London | Glabellar Lines | Cosmedocs',
    description: 'Smooth deep frown lines between your brows with expert Botox. Natural results on Harley Street since 2007.'
  },
  '/treatments/crows-feet-botox/': {
    title: "Crow's Feet Botox London | Eye Wrinkle Treatment | Cosmedocs",
    description: "Soften crow's feet with precise Botox around the eyes. Natural, expressive results by Harley Street doctors."
  },
  '/treatments/forehead-lines-botox/': {
    title: 'Forehead Lines Botox London | Cosmedocs Harley Street',
    description: 'Smooth forehead lines with expert Botox. Natural movement preserved by experienced doctors on Harley Street.'
  },
  '/treatments/bunny-lines-botox/': {
    title: 'Bunny Lines Botox London | Nose Wrinkle Treatment | Cosmedocs',
    description: 'Smooth bunny lines on the nose with precise Botox. Subtle refinement by doctors on Harley Street.'
  },
  '/treatments/nasal-flaring-botox/': {
    title: 'Nasal Flaring Botox London | Nose Slimming | Cosmedocs',
    description: 'Reduce nasal flaring with Botox for a narrower, more refined nose. Non-surgical nose slimming on Harley Street.'
  },
  '/treatments/nefertiti-lift/': {
    title: 'Nefertiti Lift London | Non-Surgical Jawline & Neck Contouring | Cosmedocs',
    description: 'Define jawline & smooth neck bands with the Nefertiti Lift. Non-surgical Botox for sharp contours & reduced platysmal bands.'
  },
  '/treatments/trigger-point-botox/': {
    title: 'Trigger Point Botox London | Muscle Pain Relief | Cosmedocs',
    description: 'Relieve chronic muscle pain with trigger point Botox injections. Doctor-led treatment on Harley Street.'
  },
  '/medical/botox-for-migraines/': {
    title: 'Botox for Migraines London | Chronic Migraine Treatment | Cosmedocs',
    description: 'NHS-approved Botox for chronic migraines. Reduce frequency and severity of migraines with doctor-led treatment on Harley Street.'
  },
  '/medical/botox-for-hyperhidrosis/': {
    title: 'Botox for Hyperhidrosis London | Excessive Sweating Treatment | Cosmedocs',
    description: 'Stop excessive sweating with Botox for hyperhidrosis. Treat underarms, palms & forehead. Doctor-led on Harley Street.'
  },
  // Dermal Fillers
  '/treatments/dermal-fillers/': {
    title: 'Dermal Fillers London | Expert Filler Treatments | Cosmedocs Harley Street',
    description: 'Doctor-led dermal filler treatments on Harley Street. Lip, cheek, jawline, chin & tear trough fillers. Natural results since 2007.'
  },
  '/treatments/lip-fillers/': {
    title: 'Lip Fillers London | Natural Lip Enhancement | Cosmedocs Harley Street',
    description: 'Expert lip filler treatments from £350. Natural, balanced lip enhancement by doctors on Harley Street. Over 1 million injections performed.'
  },
  '/treatments/jawline-filler/': {
    title: 'Jawline Filler London | Jaw Definition | Cosmedocs Harley Street',
    description: 'Sculpt and define your jawline with expert dermal filler. Doctor-led jawline contouring on Harley Street since 2007.'
  },
  '/treatments/cheek-filler/': {
    title: 'Cheek Filler London | Cheek Enhancement | Cosmedocs Harley Street',
    description: 'Restore volume and lift with expert cheek filler. Natural-looking cheek augmentation by doctors on Harley Street.'
  },
  '/treatments/chin-filler/': {
    title: 'Chin Filler London | Chin Augmentation | Cosmedocs Harley Street',
    description: 'Define and project your chin with expert dermal filler. Non-surgical chin augmentation by doctors on Harley Street.'
  },
  '/treatments/tear-trough-filler/': {
    title: 'Tear Trough Filler London | Under Eye Treatment | Cosmedocs',
    description: 'Refresh tired under-eyes with expert tear trough filler. Reduce dark circles and hollowing. Doctor-led on Harley Street.'
  },
  '/treatments/temple-filler/': {
    title: 'Temple Filler London | Temporal Hollowing Treatment | Cosmedocs',
    description: 'Restore youthful temple volume with expert temple filler. Reduce hollowing and lift brows. Doctor-led on Harley Street.'
  },
  '/treatments/dermal-fillers/nose/': {
    title: 'Non-Surgical Nose Job London | Nose Filler | Cosmedocs',
    description: 'Reshape your nose without surgery. Expert non-surgical rhinoplasty with dermal filler on Harley Street since 2010.'
  },
  '/treatments/nose-filler/': {
    title: 'Non-Surgical Nose Job London | Nose Filler | Cosmedocs',
    description: 'Reshape your nose without surgery. Expert non-surgical rhinoplasty with dermal filler on Harley Street since 2010.'
  },
  '/treatments/cupid-bow-lips/': {
    title: "Cupid's Bow Lip Filler London | Cosmedocs Harley Street",
    description: "Define your cupid's bow with expert lip filler. Precise, natural lip shaping by doctors on Harley Street."
  },
  '/treatments/forehead-filler/': {
    title: 'Forehead Filler London | Cosmedocs Harley Street',
    description: 'Smooth forehead contour irregularities with expert forehead filler. Doctor-led treatment on Harley Street.'
  },
  '/treatments/neck-filler/': {
    title: 'Neck Filler London | Neck Rejuvenation | Cosmedocs',
    description: 'Rejuvenate your neck with expert dermal filler. Reduce lines and restore volume. Doctor-led on Harley Street.'
  },
  '/treatments/marionette-lines/': {
    title: 'Marionette Lines Filler London | Cosmedocs Harley Street',
    description: 'Smooth marionette lines with expert dermal filler. Lift downturned mouth corners naturally. Doctor-led on Harley Street.'
  },
  '/treatments/nasolabial-folds/': {
    title: 'Nasolabial Folds Filler London | Cosmedocs',
    description: 'Erase smile lines & nasolabial folds with dermal filler. Age-reversing face filler for natural, smooth results.'
  },
  '/treatments/filler-dissolving/': {
    title: 'Filler Dissolving London | Hyaluronidase | Cosmedocs',
    description: 'Dissolve unwanted filler safely with hyaluronidase. Expert filler removal and correction by doctors on Harley Street.'
  },
  '/treatments/ear-lobe-rejuvenation/': {
    title: 'Ear Lobe Rejuvenation London | Cosmedocs Harley Street',
    description: 'Restore volume to ageing or stretched ear lobes. Expert ear lobe filler by doctors on Harley Street.'
  },
  // Skin Rejuvenation
  '/treatments/skin-rejuvenation/': {
    title: 'Skin Rejuvenation London | Cosmedocs Harley Street',
    description: 'Advanced skin rejuvenation treatments including Profhilo, polynucleotides, PRP, microneedling & chemical peels. Doctor-led on Harley Street.'
  },
  '/treatments/profhilo/': {
    title: 'Profhilo Treatment London | £350 | Cosmedocs Harley Street',
    description: 'Doctor-led Profhilo bio-remodelling from £350. Stimulates collagen and elastin for natural skin rejuvenation. Harley Street clinic since 2007.'
  },
  '/treatments/polynucleotides/': {
    title: 'Polynucleotide Treatment London | Cosmedocs Harley Street',
    description: 'Doctor-led polynucleotide therapy for skin regeneration, under-eye rejuvenation & hair restoration. Advanced DNA repair treatment on Harley Street.'
  },
  '/treatments/prp-vampire-facial/': {
    title: 'PRP Treatment London | Vampire Facial | Cosmedocs Harley Street',
    description: 'Doctor-led PRP treatments for skin rejuvenation, hair restoration, and natural healing. Vampire facial using your own growth factors on Harley Street.'
  },
  '/treatments/microneedling/': {
    title: 'Microneedling London | Collagen Induction | Cosmedocs',
    description: 'Medical-grade microneedling for acne scars, fine lines & skin texture. Doctor-led collagen induction therapy on Harley Street.'
  },
  '/treatments/chemical-peels/': {
    title: 'Chemical Peel London | From £120 | Cosmedocs Harley Street',
    description: 'Fade hyperpigmentation, acne scars & melasma with medical-grade chemical peels. TCA, glycolic & salicylic treatments from £120 on Harley Street.'
  },
  '/treatments/hydrafacial/': {
    title: 'HydraFacial London | Cosmedocs Harley Street',
    description: 'Deep cleanse, exfoliate & hydrate with HydraFacial. Vortex technology for instantly glowing skin. Doctor-led treatments on Harley Street.'
  },
  '/treatments/pdo-threads/': {
    title: 'PDO Threads London | Thread Lift | Cosmedocs Harley Street',
    description: 'Non-surgical face lift with PDO threads. Lift sagging skin and stimulate collagen. Doctor-led thread lift on Harley Street.'
  },
  '/treatments/fat-dissolving/': {
    title: 'Fat Dissolving Injections London | Cosmedocs Harley Street',
    description: 'Non-surgical fat reduction with fat dissolving injections. Reduce double chin & stubborn fat pockets. Doctor-led on Harley Street.'
  },
  '/treatments/ha-makeover/': {
    title: 'HA Makeover London | Full Face Rejuvenation | Cosmedocs',
    description: 'Complete facial rejuvenation with hyaluronic acid makeover. Multi-point filler treatment for natural transformation. Harley Street since 2007.'
  },
  '/treatments/non-surgical-facelift/': {
    title: 'Non-Surgical Facelift London | Cosmedocs Harley Street',
    description: 'Lift and rejuvenate without surgery. Combined treatments for a natural, youthful appearance. Doctor-led on Harley Street.'
  },
  '/treatments/non-surgical-ponytail/': {
    title: 'Non-Surgical Ponytail Facelift London | Cosmedocs',
    description: 'Achieve the lifted ponytail look without surgery. Strategic filler and Botox for a natural lift. Doctor-led on Harley Street.'
  },
  '/treatments/prescription-skincare/': {
    title: 'Prescription Skincare London | Cosmedocs Harley Street',
    description: 'Medical-grade prescription skincare by dermatologists. Personalised regimens for acne, ageing & pigmentation. Harley Street clinic.'
  },
  '/treatments/peel-to-reveal/': {
    title: 'Peel to Reveal London | £120 | Cosmedocs',
    description: 'Revolutionary Peel to Reveal treatment. Deep skin cleansing, repairing & rejuvenation with powerful antioxidants. From £120.'
  },
  // Laser
  '/treatments/laser-treatments/': {
    title: 'Laser Treatments London | Cosmedocs Harley Street',
    description: 'Advanced laser treatments for skin resurfacing, hair removal, pigmentation & scar reduction. Doctor-led laser clinic on Harley Street.'
  },
  '/treatments/co2-laser/': {
    title: 'CO2 Laser Resurfacing London | Cosmedocs Harley Street',
    description: 'Fractional CO2 laser for wrinkles, scars & skin resurfacing. Advanced laser rejuvenation by doctors on Harley Street.'
  },
  '/treatments/laser-hair-removal/': {
    title: 'Laser Hair Removal London | Cosmedocs Harley Street',
    description: 'Permanent hair reduction with medical-grade laser. All skin types treated safely. Doctor-led laser hair removal on Harley Street.'
  },
  '/treatments/pico-laser/': {
    title: 'Pico Laser London | Pigmentation & Tattoo Removal | Cosmedocs',
    description: 'Advanced Pico laser for pigmentation, melasma & tattoo removal. Ultra-fast laser technology by doctors on Harley Street.'
  },
  // Plastic Surgery
  '/treatments/plastic-surgery/': {
    title: 'Plastic Surgery London | Expert Surgeons | Cosmedocs',
    description: 'Expert plastic surgery in London. Blepharoplasty, rhinoplasty, facelift & body contouring by specialist surgeons.'
  },
  '/treatments/blepharoplasty/': {
    title: 'Blepharoplasty London | Eyelid Surgery by Expert Plastic Surgeons',
    description: 'Expert blepharoplasty (eyelid surgery) in London. Rejuvenate tired eyes, remove excess skin and restore a youthful appearance.'
  },
  '/treatments/rhinoplasty/': {
    title: 'Rhinoplasty London | Nose Surgery | Cosmedocs',
    description: 'Expert surgical rhinoplasty in London. Reshape and refine your nose with specialist plastic surgeons.'
  },
  '/treatments/facelift-surgery/': {
    title: 'Facelift Surgery London | Expert Plastic Surgeons | Cosmedocs',
    description: 'Expert facelift surgery in London. Natural-looking facial rejuvenation by specialist plastic surgeons.'
  },
  '/treatments/liposuction/': {
    title: 'Liposuction London | Body Contouring by Expert Plastic Surgeons',
    description: 'Expert liposuction in London. Remove stubborn fat and sculpt your body with specialist plastic surgeons.'
  },
  '/treatments/scar-reduction/': {
    title: 'Scar Reduction London | Cosmedocs Harley Street',
    description: 'Advanced scar reduction treatments including laser, microneedling & surgical revision. Doctor-led on Harley Street.'
  },
  '/treatments/hair-transplant/': {
    title: 'Hair Transplant London | Expert Surgeons | Cosmedocs',
    description: 'Expert hair transplant surgery in London. FUE & FUT techniques by specialist surgeons for natural hair restoration.'
  },
  // Concerns
  '/concerns/': {
    title: 'Skin Concerns & Conditions | Cosmedocs London',
    description: 'Expert treatment for skin concerns including acne, eczema, pigmentation & anti-ageing. Doctor-led dermatology on Harley Street.'
  },
  '/concerns/acne/': {
    title: 'Acne Treatment London | Cosmedocs Harley Street',
    description: 'Expert acne treatment including medical-grade peels, prescription skincare & laser. Clear skin with doctor-led dermatology.'
  },
  '/concerns/eczema/': {
    title: 'Eczema Treatment London | Cosmedocs Harley Street',
    description: 'Expert eczema diagnosis and management. Personalised treatment plans by dermatologists on Harley Street.'
  },
  '/concerns/pigmentation-melasma/': {
    title: 'Pigmentation & Melasma Treatment London | Cosmedocs',
    description: 'Expert treatment for hyperpigmentation and melasma. Pico laser, chemical peels & prescription skincare on Harley Street.'
  },
  '/concerns/anti-ageing/': {
    title: 'Anti-Ageing Treatments London | Cosmedocs Harley Street',
    description: 'Comprehensive anti-ageing solutions including Botox, fillers, Profhilo & laser. Turn back the clock with doctor-led treatments.'
  },
  // Specialised
  '/treatments/intimate-bleaching/': {
    title: 'Intimate Bleaching London | Cosmedocs Harley Street',
    description: 'Discreet intimate area lightening treatment. Safe, effective & doctor-led. Confidential consultations on Harley Street.'
  },
  '/treatments/advanced-consultation/': {
    title: 'Advanced Aesthetic Consultation | Dr. Ahmed Haq',
    description: 'Millimetre-precision facial optimisation. Expert refinements for temporal hollowing & lip corners. 15+ years expertise.'
  },
  '/treatments/clinical-concepts/': {
    title: 'Clinical Concepts to Flawless Skin | Cosmedocs',
    description: 'Our signature clinical pathway to flawless skin. Combining advanced treatments for transformative results.'
  },
  // Medical
  '/medical/': {
    title: 'Medical Treatments | Cosmedocs Harley Street',
    description: 'Medical Botox treatments for migraines, hyperhidrosis & bruxism. NHS-approved, doctor-led treatments on Harley Street.'
  },
  // Before & After
  '/before-after/': {
    title: 'Before & After Results | Cosmedocs Harley Street',
    description: 'View real before and after results from our Harley Street clinic. Botox, fillers, skin rejuvenation & more.'
  },
  '/before-after/botox/': {
    title: 'Botox Before & After Results | Cosmedocs',
    description: 'View real Botox before and after results. Anti-wrinkle transformations by doctors on Harley Street.'
  },
  '/before-after/botox/masseter/': {
    title: 'Masseter Botox Before & After | Jawline Slimming Results',
    description: 'View real masseter Botox before and after results. Jawline slimming transformations on Harley Street.'
  },
  '/before-after/dermal-fillers/': {
    title: 'Dermal Filler Before & After Results | Cosmedocs',
    description: 'View real dermal filler before and after results. Lip, cheek, jawline & chin filler transformations.'
  },
  '/before-after/dermal-fillers/lips/': {
    title: 'Lip Filler Before & After Results | Cosmedocs',
    description: 'View real lip filler before and after results. Natural lip enhancement by doctors on Harley Street.'
  },
  '/before-after/dermal-fillers/nose/': {
    title: 'Non-Surgical Nose Job Before & After | CosmeDocs',
    description: 'View real non-surgical rhinoplasty before and after results. Nose filler for profile refinement on Harley Street.'
  },
  '/before-after/dermal-fillers/cheeks/': {
    title: 'Cheek Filler Before & After Results | Cosmedocs',
    description: 'View real cheek filler before and after results. Volume restoration and contouring on Harley Street.'
  },
  '/before-after/dermal-fillers/jawline/': {
    title: 'Jawline Filler Before & After Results | Cosmedocs',
    description: 'View real jawline filler before and after results. Jaw definition and contouring on Harley Street.'
  },
  '/before-after/dermal-fillers/tear-trough/': {
    title: 'Tear Trough Filler Before & After Results | Cosmedocs',
    description: 'View real tear trough filler before and after results. Under-eye rejuvenation on Harley Street.'
  },
  '/before-after/dermal-fillers/chin/': {
    title: 'Chin Filler Before & After Results | Cosmedocs',
    description: 'View real chin filler before and after results. Chin augmentation and profiling on Harley Street.'
  },
  '/before-after/skin-rejuvenation/': {
    title: 'Skin Rejuvenation Before & After Results | CosmeDocs Harley Street',
    description: 'View real skin rejuvenation before and after results. Profhilo, polynucleotides, microneedling & chemical peel transformations.'
  },
  '/before-after/skin-rejuvenation/polynucleotides/': {
    title: 'Polynucleotide Treatment Before & After | CosmeDocs Harley Street',
    description: 'View real polynucleotide treatment before and after results. Regenerative skin rejuvenation performed by doctors on Harley Street.'
  },
  '/before-after/ha-makeover/': {
    title: 'HA Makeover Before & After Results | CosmeDocs',
    description: 'View real HA Makeover full-face rejuvenation before and after results from Harley Street.'
  },
  '/before-after/laser-hair-removal/': {
    title: 'Laser Hair Removal Before & After Results | CosmeDocs',
    description: 'View real laser hair removal before and after results from our Harley Street clinic.'
  },
  // Blog
  '/blog/': {
    title: 'CosmeTalk Blog | Aesthetic Medicine Insights | Cosmedocs',
    description: 'Expert insights on aesthetic medicine, treatment results & skincare science from Cosmedocs Harley Street doctors.'
  },
  '/blog/tear-trough-filler-results-explained/': {
    title: 'Tear Trough Filler Results Explained | CosmeTalk',
    description: 'Understand tear trough filler results, longevity & what to expect. Expert guide by Cosmedocs Harley Street doctors.'
  },
  '/blog/jaw-filler-results-explained/': {
    title: 'Jaw Filler Results Explained | CosmeTalk',
    description: 'Understand jaw filler results, masculine vs feminine contouring & what to expect. Expert guide by Cosmedocs doctors.'
  },
  '/blog/chin-filler-results-explained/': {
    title: 'Chin Filler Results Explained | CosmeTalk',
    description: 'Understand chin filler results, profile enhancement & what to expect. Expert guide by Cosmedocs Harley Street doctors.'
  },
  '/blog/lip-filler-results-explained/': {
    title: 'Lip Filler Results Explained | CosmeTalk',
    description: 'Understand lip filler results, shapes, longevity & what to expect. Expert guide by Cosmedocs Harley Street doctors.'
  },
  // General pages
  '/prices/': {
    title: 'Treatment Prices | Cosmedocs Harley Street London',
    description: 'Transparent pricing for all aesthetic treatments. Botox from £275, lip fillers from £350. No hidden costs at Cosmedocs Harley Street.'
  },
  '/about-us/': {
    title: 'About Cosmedocs | Harley Street Doctors Since 2007',
    description: 'Meet the Cosmedocs team — GMC-registered Harley Street doctors with 1M+ injections since 2007.'
  },
  '/contact/': {
    title: 'Contact Cosmedocs | Harley Street Aesthetic Clinic London',
    description: 'Get in touch with Cosmedocs. Book a consultation, ask a question, or message us on WhatsApp. Harley Street, London since 2007.'
  },
  '/our-team/': {
    title: 'Our Team | Cosmedocs Harley Street Doctors',
    description: 'Meet our GMC-registered doctors and aesthetic specialists. Expert team led by Dr. Ahmed Haq on Harley Street.'
  },
  '/our-team/dr-ahmed-haq/': {
    title: 'Dr Ahmed Haq | Medical Director | Cosmedocs Harley Street',
    description: 'Dr Ahmed Haq — Cosmetic Physician & Medical Director at Cosmedocs. 15+ years of Harley Street experience. Over 1 million injections performed.'
  },
  '/our-team/dr-hena-haq/': {
    title: 'Dr Hena Haq | Programme Director | Cosmedocs Harley Street',
    description: 'Dr Hena Haq — Cosmetic Physician & Programme Director at Cosmedocs. Oxford Medical School graduate. Expert in facial aesthetics.'
  },
  '/our-team/laerta-aesthetician/': {
    title: 'Laerta | Senior Aesthetician | Cosmedocs Harley Street',
    description: 'Laerta — Senior Aesthetician at Cosmedocs specialising in HydraFacial, chemical peels & advanced skincare treatments.'
  },
  '/our-team/dr-hassan-mirza/': {
    title: 'Dr Hassan Mirza | Consultant Dermatologist | Cosmedocs',
    description: 'Dr Hassan A. Mirza — Consultant Dermatologist at Cosmedocs. Royal College of Physicians member. Expert in medical & cosmetic dermatology.'
  },
  '/our-team/dr-noor-hotaki/': {
    title: 'Dr Noor Hotaki | Cosmetic Physician | Cosmedocs',
    description: 'Dr Noor Hotaki — Cosmetic Physician at Cosmedocs Harley Street. Specialist in non-surgical aesthetic treatments.'
  },
  '/testimonials/': {
    title: 'Patient Testimonials & Reviews | Cosmedocs Harley Street',
    description: 'Read real patient reviews and testimonials. 5-star rated aesthetic clinic on Harley Street since 2007.'
  },
  '/harley-street-consulting-rooms/': {
    title: 'Harley Street Consulting Rooms | Cosmedocs Clinic',
    description: 'Visit our Harley Street consulting rooms. State-of-the-art facilities at 8-10 Harley Street, London W1G 9PF.'
  },
  '/private-gp-doctor/': {
    title: 'Private GP Doctor London | Cosmedocs Harley Street',
    description: 'Private GP consultations on Harley Street. Same-day appointments, comprehensive health checks & specialist referrals.'
  },
  '/membership/': {
    title: 'Cosmedocs Membership | Exclusive Benefits & Savings',
    description: 'Join the Cosmedocs membership programme. Exclusive discounts, priority bookings & complimentary treatments.'
  },
  '/partners/': {
    title: 'Partners & Collaborations | Cosmedocs',
    description: 'Our trusted partners and industry collaborations. Working with leading brands in aesthetic medicine.'
  },
  '/partnerships/': {
    title: 'Partnership Opportunities | Cosmedocs',
    description: 'Explore partnership opportunities with Cosmedocs. Collaborate with London\'s leading aesthetic clinic.'
  },
  '/fellowship-invitation/': {
    title: 'Fellowship Invitation | Cosmedocs Harley Street',
    description: 'Fellowship graduates: join our partner network. Transform your aesthetic practice with national support & mentorship.'
  },
  '/aesthetic-training/': {
    title: 'Aesthetic Medicine Training | Cosmedocs London',
    description: 'Fellowship training with Harley Street Institute since 2014. Live clinic mentorship with real patients.'
  },
  '/aesthetics-at-a-glance/': {
    title: 'Aesthetics at a Glance | Cosmedocs',
    description: 'Discover the science behind beautiful skin. A comprehensive visual guide to aesthetic medicine by Cosmedocs.'
  },
  '/aesthetic-intelligence/': {
    title: 'Aesthetic Intelligence | Cosmedocs',
    description: 'Understanding aesthetic intelligence — the science of facial harmony, proportion & natural beauty enhancement.'
  },
  '/aesthetic-treatments-made-easy/': {
    title: 'Aesthetic Treatments Made Easy | Cosmedocs',
    description: 'Your simple guide to aesthetic treatments. Understand options, what to expect & how to choose the right treatment.'
  },
  '/medical-student-work-experience/': {
    title: 'Medical Student Work Experience | Cosmedocs Harley Street',
    description: 'Gain clinical work experience at a Harley Street aesthetic clinic. Observe consultations & treatments first-hand.'
  },
  '/safety/': {
    title: 'Safety & Standards | GMC Registered Doctors | Cosmedocs',
    description: 'Your safety is paramount. GMC-registered doctors, CQC compliant, Save Face accredited. Clinical protocols at Cosmedocs Harley Street.'
  },
  '/botox-faqs/': {
    title: 'Botox FAQs | Common Questions Answered | Cosmedocs',
    description: 'Get answers to common Botox questions. Side effects, longevity, cost & what to expect. Expert answers from Harley Street doctors.'
  },
  '/ultimate-botox-guide/': {
    title: 'The Ultimate Botox Guide | Cosmedocs Harley Street',
    description: 'Everything you need to know about Botox. Comprehensive guide covering areas, costs, results & safety by Harley Street experts.'
  },
  // Locations
  '/birmingham/': {
    title: 'Cosmedocs Birmingham | Aesthetic Clinic',
    description: 'Cosmedocs aesthetic treatments in Birmingham. Botox, fillers & skin rejuvenation by Harley Street-trained doctors.'
  },
  '/manchester/': {
    title: 'Cosmedocs Manchester | Aesthetic Clinic',
    description: 'Cosmedocs aesthetic treatments in Manchester. Botox, fillers & skin rejuvenation by Harley Street-trained doctors.'
  },
  '/cardiff/': {
    title: 'Cosmedocs Cardiff | Aesthetic Clinic',
    description: 'Cosmedocs aesthetic treatments in Cardiff. Botox, fillers & skin rejuvenation by Harley Street-trained doctors.'
  },
  '/delhi/': {
    title: 'Cosmedocs Delhi | Aesthetic Clinic',
    description: 'Cosmedocs aesthetic treatments in Delhi. Botox, fillers & skin rejuvenation by Harley Street-trained doctors.'
  },
  '/karachi/': {
    title: 'Cosmedocs Karachi | Aesthetic Clinic',
    description: 'Cosmedocs aesthetic treatments in Karachi. Botox, fillers & skin rejuvenation by Harley Street-trained doctors.'
  },
  '/barbados/': {
    title: 'Cosmedocs Barbados | Aesthetic Clinic',
    description: 'Cosmedocs aesthetic treatments in Barbados. Botox, fillers & skin rejuvenation by Harley Street-trained doctors.'
  },
  // Language pages (legacy)
  '/treatments-summary-arabic/': {
    title: 'علاجات التجميل | Cosmedocs London',
    description: 'ملخص علاجات التجميل في كوزمي دوكس. حقن البوتوكس والفيلر وتجديد البشرة في شارع هارلي، لندن.'
  },
  '/treatments-summary-chinese/': {
    title: '美容治疗 | Cosmedocs London',
    description: 'Cosmedocs美容治疗概述。肉毒杆菌、填充剂和皮肤焕活治疗，位于伦敦哈利街。'
  },
  '/treatments-summary-japanese/': {
    title: '美容治療 | Cosmedocs London',
    description: 'Cosmedocsの美容治療の概要。ボトックス、フィラー、スキンリジュビネーション。ロンドン・ハーレーストリート。'
  },
  // ===== MULTILINGUAL STATIC PAGES =====
  // Arabic
  '/ar/': {
    title: 'كوزمي دوكس لندن | الطب التجميلي | هارلي ستريت',
    description: 'عيادة تجميلية في هارلي ستريت بإدارة الدكتور أحمد حق. البوتوكس والفيلر وعلاجات البشرة. فن التجميل الخفي.'
  },
  '/ar/treatments/': {
    title: 'علاجات التجميل لندن | كوزمي دوكس هارلي ستريت',
    description: 'اكتشف مجموعتنا الكاملة من العلاجات التجميلية بإشراف الأطباء. البوتوكس، الفيلر، تجديد البشرة والليزر في هارلي ستريت.'
  },
  '/ar/treatments/botox/': {
    title: 'البوتوكس لندن | حقن مضادة للتجاعيد | كوزمي دوكس',
    description: 'علاجات البوتوكس المتخصصة من £275. حقن مضادة للتجاعيد بإشراف الأطباء في هارلي ستريت منذ 2007.'
  },
  '/ar/treatments/dermal-fillers/': {
    title: 'حقن الفيلر لندن | كوزمي دوكس هارلي ستريت',
    description: 'علاجات الفيلر الجلدي بإشراف الأطباء. فيلر الشفاه والخدود وخط الفك والذقن وتحت العين في هارلي ستريت.'
  },
  '/ar/treatments/lip-fillers/': {
    title: 'فيلر الشفاه لندن | تكبير الشفاه الطبيعي | كوزمي دوكس',
    description: 'علاجات فيلر الشفاه المتخصصة من £350. تكبير شفاه طبيعي ومتوازن بإشراف أطباء هارلي ستريت.'
  },
  '/ar/treatments/jawline-filler/': {
    title: 'فيلر خط الفك لندن | تحديد الفك | كوزمي دوكس',
    description: 'نحت وتحديد خط الفك بفيلر متخصص. نحت خط الفك بإشراف أطباء هارلي ستريت منذ 2007.'
  },
  '/ar/treatments/chin-filler/': {
    title: 'فيلر الذقن لندن | تكبير الذقن | كوزمي دوكس',
    description: 'تحديد وإبراز الذقن بفيلر متخصص. تكبير الذقن بدون جراحة بإشراف أطباء هارلي ستريت.'
  },
  '/ar/treatments/tear-trough-filler/': {
    title: 'فيلر تحت العين لندن | علاج الهالات | كوزمي دوكس',
    description: 'تجديد منطقة تحت العين بفيلر متخصص. تقليل الهالات السوداء والتجاويف بإشراف أطباء هارلي ستريت.'
  },
  '/ar/treatments/skin-rejuvenation/': {
    title: 'تجديد البشرة لندن | كوزمي دوكس هارلي ستريت',
    description: 'علاجات تجديد البشرة المتقدمة بما في ذلك بروفايلو والبولينوكليوتيدات والميكرونيدلينج والتقشير الكيميائي.'
  },
  '/ar/prices/': {
    title: 'أسعار العلاج | كوزمي دوكس هارلي ستريت',
    description: 'أسعار شفافة لجميع العلاجات التجميلية. البوتوكس من £275، فيلر الشفاه من £350. بدون تكاليف مخفية.'
  },
  '/ar/contact/': {
    title: 'اتصل بنا | كوزمي دوكس هارلي ستريت',
    description: 'تواصل مع كوزمي دوكس. احجز استشارة أو تواصل عبر واتساب. هارلي ستريت، لندن.'
  },
  '/ar/about-us/': {
    title: 'عن كوزمي دوكس | أطباء هارلي ستريت منذ 2007',
    description: 'تعرف على فريق كوزمي دوكس — أطباء مسجلون في GMC مع أكثر من مليون حقنة منذ 2007.'
  },
  // French
  '/fr/': {
    title: 'Cosmedocs Londres | Médecine Esthétique | Harley Street',
    description: 'Clinique esthétique à Harley Street par le Dr Ahmed Haq. Botox, acide hyaluronique et traitements cutanés. L\'art esthétique invisible.'
  },
  '/fr/traitements/': {
    title: 'Traitements Esthétiques Londres | Cosmedocs Harley Street',
    description: 'Découvrez notre gamme complète de traitements esthétiques. Botox, acide hyaluronique, rajeunissement cutané et laser à Harley Street.'
  },
  '/fr/traitements/botox/': {
    title: 'Botox Londres | Injections Anti-Rides | Cosmedocs Harley Street',
    description: 'Traitements Botox experts dès £275. Injections anti-rides par des médecins à Harley Street depuis 2007.'
  },
  '/fr/traitements/acide-hyaluronique/': {
    title: 'Acide Hyaluronique Londres | Cosmedocs Harley Street',
    description: 'Injections d\'acide hyaluronique par des médecins. Lèvres, pommettes, mâchoire, menton et cernes à Harley Street.'
  },
  '/fr/traitements/injection-levres/': {
    title: 'Injection Lèvres Londres | Cosmedocs Harley Street',
    description: 'Injections lèvres expertes dès £350. Augmentation naturelle des lèvres par des médecins à Harley Street.'
  },
  '/fr/traitements/filler-machoire/': {
    title: 'Filler Mâchoire Londres | Cosmedocs Harley Street',
    description: 'Sculptez et définissez votre mâchoire avec un filler expert. Contouring de la mâchoire par des médecins à Harley Street.'
  },
  '/fr/traitements/filler-menton/': {
    title: 'Filler Menton Londres | Cosmedocs Harley Street',
    description: 'Définissez et projetez votre menton avec un filler expert. Augmentation du menton sans chirurgie à Harley Street.'
  },
  '/fr/traitements/cernes-creuses/': {
    title: 'Cernes Creuses Londres | Cosmedocs Harley Street',
    description: 'Rafraîchissez vos cernes avec un filler expert. Réduisez les cernes et les creux sous les yeux à Harley Street.'
  },
  '/fr/traitements/rajeunissement-peau/': {
    title: 'Rajeunissement Cutané Londres | Cosmedocs Harley Street',
    description: 'Traitements avancés de rajeunissement cutané incluant Profhilo, polynucléotides, microneedling et peelings chimiques.'
  },
  '/fr/tarifs/': {
    title: 'Tarifs | Cosmedocs Harley Street Londres',
    description: 'Tarifs transparents pour tous les traitements esthétiques. Botox dès £275, injection lèvres dès £350.'
  },
  '/fr/contact/': {
    title: 'Contact | Cosmedocs Harley Street',
    description: 'Contactez Cosmedocs. Prenez rendez-vous ou envoyez-nous un message sur WhatsApp. Harley Street, Londres.'
  },
  '/fr/a-propos/': {
    title: 'À Propos de Cosmedocs | Médecins Harley Street depuis 2007',
    description: 'Découvrez l\'équipe Cosmedocs — médecins GMC avec plus d\'un million d\'injections depuis 2007.'
  },
  // Spanish
  '/es/': {
    title: 'Cosmedocs Londres | Medicina Estética | Harley Street',
    description: 'Clínica estética en Harley Street por el Dr. Ahmed Haq. Botox, ácido hialurónico y tratamientos cutáneos. El arte estético invisible.'
  },
  '/es/tratamientos/': {
    title: 'Tratamientos Estéticos Londres | Cosmedocs Harley Street',
    description: 'Descubra nuestra gama completa de tratamientos estéticos. Botox, ácido hialurónico, rejuvenecimiento cutáneo y láser en Harley Street.'
  },
  '/es/tratamientos/botox/': {
    title: 'Botox Londres | Inyecciones Antiarrugas | Cosmedocs',
    description: 'Tratamientos de Botox expertos desde £275. Inyecciones antiarrugas por médicos en Harley Street desde 2007.'
  },
  '/es/tratamientos/acido-hialuronico/': {
    title: 'Ácido Hialurónico Londres | Cosmedocs Harley Street',
    description: 'Inyecciones de ácido hialurónico por médicos. Labios, pómulos, mandíbula, mentón y ojeras en Harley Street.'
  },
  '/es/tratamientos/relleno-labios/': {
    title: 'Relleno de Labios Londres | Cosmedocs Harley Street',
    description: 'Tratamientos de relleno labial expertos desde £350. Aumento labial natural por médicos en Harley Street.'
  },
  '/es/tratamientos/relleno-mandibula/': {
    title: 'Relleno Mandíbula Londres | Cosmedocs Harley Street',
    description: 'Esculpa y defina su mandíbula con relleno experto. Contorno mandibular por médicos en Harley Street.'
  },
  '/es/tratamientos/relleno-menton/': {
    title: 'Relleno Mentón Londres | Cosmedocs Harley Street',
    description: 'Defina y proyecte su mentón con relleno experto. Aumento de mentón sin cirugía en Harley Street.'
  },
  '/es/tratamientos/ojeras/': {
    title: 'Ojeras Londres | Cosmedocs Harley Street',
    description: 'Refresque sus ojeras con relleno experto. Reduzca las ojeras y las depresiones bajo los ojos en Harley Street.'
  },
  '/es/tratamientos/rejuvenecimiento-piel/': {
    title: 'Rejuvenecimiento Cutáneo Londres | Cosmedocs Harley Street',
    description: 'Tratamientos avanzados de rejuvenecimiento cutáneo incluyendo Profhilo, polinucleótidos, microneedling y peelings químicos.'
  },
  '/es/precios/': {
    title: 'Precios | Cosmedocs Harley Street Londres',
    description: 'Precios transparentes para todos los tratamientos estéticos. Botox desde £275, relleno labial desde £350.'
  },
  '/es/contacto/': {
    title: 'Contacto | Cosmedocs Harley Street',
    description: 'Contacte con Cosmedocs. Reserve una consulta o envíenos un mensaje por WhatsApp. Harley Street, Londres.'
  },
  '/es/sobre-nosotros/': {
    title: 'Sobre Cosmedocs | Médicos Harley Street desde 2007',
    description: 'Conozca al equipo Cosmedocs — médicos GMC con más de un millón de inyecciones desde 2007.'
  },
  // Chinese
  '/zh/': {
    title: 'Cosmedocs 伦敦 | 哈利街美容医学诊所',
    description: '哈利街美容诊所，由Ahmed Haq医生主导。肉毒杆菌、填充剂和皮肤治疗。隐形艺术 — 大胆 — 自然。'
  },
  '/zh/treatments/': {
    title: '伦敦美容治疗 | Cosmedocs 哈利街',
    description: '探索我们完整的医生主导美容治疗系列。肉毒杆菌、玻尿酸填充、皮肤焕活、激光和整形手术。'
  },
  '/zh/treatments/botox/': {
    title: '伦敦肉毒杆菌 | 抗皱注射 | Cosmedocs 哈利街',
    description: '专业肉毒杆菌治疗从£275起。自2007年起在哈利街由医生主导的抗皱注射。'
  },
  '/zh/treatments/dermal-fillers/': {
    title: '伦敦玻尿酸填充 | Cosmedocs 哈利街',
    description: '医生主导的玻尿酸填充治疗。丰唇、苹果肌、下颌线、下巴和泪沟填充在哈利街。'
  },
  '/zh/treatments/lip-fillers/': {
    title: '伦敦丰唇 | 自然唇部增强 | Cosmedocs 哈利街',
    description: '专业丰唇治疗从£350起。自然、平衡的唇部增强，由哈利街医生操作。'
  },
  '/zh/treatments/jawline-filler/': {
    title: '伦敦下颌线填充 | 下颌塑形 | Cosmedocs 哈利街',
    description: '使用专业填充剂雕塑和定义您的下颌线。自2007年起在哈利街由医生主导。'
  },
  '/zh/treatments/chin-filler/': {
    title: '伦敦下巴填充 | 下巴增大 | Cosmedocs 哈利街',
    description: '使用专业填充剂定义和突出您的下巴。哈利街医生主导的非手术下巴增大。'
  },
  '/zh/treatments/tear-trough-filler/': {
    title: '伦敦泪沟填充 | 眼下治疗 | Cosmedocs',
    description: '使用专业泪沟填充剂刷新疲惫的眼下区域。减少黑眼圈和凹陷。哈利街医生主导。'
  },
  '/zh/treatments/skin-rejuvenation/': {
    title: '伦敦皮肤焕活 | Cosmedocs 哈利街',
    description: '先进的皮肤焕活治疗，包括Profhilo、多核苷酸、微针和化学换肤。哈利街医生主导。'
  },
  '/zh/prices/': {
    title: '治疗价格 | Cosmedocs 哈利街 伦敦',
    description: '所有美容治疗的透明价格。肉毒杆菌从£275起，丰唇从£350起。没有隐藏费用。'
  },
  '/zh/contact/': {
    title: '联系 Cosmedocs | 哈利街美容诊所 伦敦',
    description: '联系Cosmedocs。预约咨询或通过WhatsApp给我们发消息。哈利街，伦敦。'
  },
  '/zh/about-us/': {
    title: '关于 Cosmedocs | 哈利街医生 始于2007年',
    description: '了解Cosmedocs团队 — GMC注册医生，自2007年以来超过100万次注射。'
  },
  // Dermatology
  '/treatments/dermatology/': {
    title: 'Dermatologist Harley Street | Cosmedocs',
    description: 'Expert dermatology for acne, eczema, psoriasis & skin cancer screening. CQC registered medical dermatologist.'
  },
  '/treatments/acne/': {
    title: 'Acne Treatment London | Cosmedocs Harley Street',
    description: 'Expert acne treatment including prescription skincare, chemical peels & laser. Clear skin with doctor-led dermatology.'
  },
  '/treatments/mole-removal/': {
    title: 'Mole Removal London | Cosmedocs Harley Street',
    description: 'Safe mole and skin tag removal by dermatologists. Includes dermoscopy screening. Harley Street clinic.'
  },
  '/treatments/eczema/': {
    title: 'Eczema Treatment London | Cosmedocs Harley Street',
    description: 'Expert eczema diagnosis and treatment. Personalised management plans by Harley Street dermatologists.'
  },
  '/treatments/psoriasis/': {
    title: 'Psoriasis Treatment London | Cosmedocs Harley Street',
    description: 'Advanced psoriasis management including biologics and cutting-edge treatments. Harley Street dermatologists.'
  },
  '/treatments/hyperpigmentation/': {
    title: 'Hyperpigmentation Treatment London | Cosmedocs',
    description: 'Expert treatment for hyperpigmentation and dark spots. Pico laser, chemical peels & prescription skincare.'
  },
  '/turning-30-aesthetic-guide/': {
    title: 'Turning 30 Aesthetics Guide 2026 | CosmeDocs',
    description: 'Baby Botox, skin boosters, collagen banking & subtle lip refinement — the honest guide to what women approaching 30 actually need. By Harley Street doctors.'
  },
  // AI Assessment Pages (ai.cosmedocs.com)
  '/auth/': {
    title: 'Sign In | CosmeDocs AI Aesthetic Assessment',
    description: 'Sign in to your CosmeDocs AI assessment portal. Access facial, hair and skin analysis results from our Harley Street clinic.'
  },
  '/dashboard/': {
    title: 'My Assessments Dashboard | CosmeDocs AI',
    description: 'View and manage your facial, hair and skin lesion assessment history. Track your aesthetic journey with CosmeDocs AI tools.'
  },
  '/facial-assessment/': {
    title: 'AI Facial Assessment | CosmeDocs Harley Street',
    description: 'AI-powered facial analysis evaluating skin quality, volume loss and ageing signs. Get personalised treatment recommendations from CosmeDocs.'
  },
  '/advanced-facial-assessment/': {
    title: 'Advanced AI Facial Assessment | CosmeDocs',
    description: 'Comprehensive AI facial analysis with detailed scoring across dynamic lines, static lines, volume and skin surface. CosmeDocs Harley Street.'
  },
  '/hair-assessment/': {
    title: 'AI Hair Analysis | CosmeDocs Harley Street',
    description: 'AI-powered hair and scalp assessment. Evaluate hair density, thinning patterns and get personalised restoration recommendations from CosmeDocs.'
  },
  '/skin-lesion/': {
    title: 'AI Skin Lesion Analysis | CosmeDocs Harley Street',
    description: 'AI-assisted skin lesion screening and analysis. Upload images for preliminary assessment by CosmeDocs dermatology specialists.'
  },
  '/dental/': {
    title: 'AI Dental Assessment | CosmeDocs Harley Street',
    description: 'AI-powered dental and smile assessment. Evaluate smile aesthetics and get recommendations for treatments including gummy smile Botox.'
  },
  '/privacy/': {
    title: 'Privacy Policy | CosmeDocs AI Assessment',
    description: 'How CosmeDocs protects your data and privacy during AI aesthetic assessments. GDPR compliant data handling at our Harley Street clinic.'
  },
  '/shop/': {
    title: 'Shop Cosmeceuticals | Potent Targeted Skincare | Cosmedocs',
    description: 'Targeted active ingredients in potent concentrations. Doctor-formulated Vitamin C serums, retinol creams and cosmeceuticals. Harley Street Formulations.'
  },
  '/shop/vitamin-c-serum/': {
    title: 'Best Vitamin C Serum UK | 20% L-Ascorbic Acid | Cosmedocs',
    description: 'Clinical-strength 20% Vitamin C serum with Ferulic acid & Vitamin E at pH 3.0. Doctor-formulated for skin brightening, anti-ageing & barrier repair. £85 with free shipping.'
  },
  '/shop/retinol-cream/': {
    title: 'Best Retinol Cream UK | Dual Vitamin A | Cosmedocs',
    description: 'Doctor-formulated dual retinoid cream with 0.5% Retinol & Retinyl Palmitate. Reduces fine lines, improves texture & stimulates collagen. £65 with free shipping.'
  },
};

// Normalise path: ensure trailing slash
function normalisePath(path: string): string {
  // Don't add trailing slash to file paths
  if (/\.[a-zA-Z0-9]+$/.test(path)) return path;
  return path.endsWith('/') ? path : path + '/';
}

export default async function handler(request: Request, context: any) {
  const url = new URL(request.url);
  const rawPath = url.pathname;

  // Skip asset requests entirely — fast path, no context.next()
  if (/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|otf|json|xml|txt|mp4|webm|webp)$/i.test(rawPath)) {
    return context.next();
  }

  // 301 redirect non-trailing-slash HTML paths to trailing-slash version
  if (rawPath !== '/' && !rawPath.endsWith('/') && !/\.[a-zA-Z0-9]+$/.test(rawPath)) {
    const newUrl = new URL(request.url);
    newUrl.pathname = rawPath + '/';
    return new Response(null, {
      status: 301,
      headers: { Location: newUrl.toString() },
    });
  }

  const path = normalisePath(rawPath);

  // Check meta BEFORE fetching origin — if no match, pass through without buffering
  const meta = PAGE_META[path];
  if (!meta) {
    return context.next();
  }

  const response = await context.next();
  const contentType = response.headers.get('content-type') || '';

  // Only modify HTML responses
  if (!contentType.includes('text/html')) {
    return response;
  }

  let html = await response.text();

  // Build replacement strings once
  const titleTag = `<title>${meta.title}</title>`;
  const descTag = `<meta name="description" content="${meta.description}" />`;
  const canonicalUrl = `https://www.cosmedocs.com${path}`;
  const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" data-rh="true" />`;

  // Single-pass replacements using pre-compiled patterns
  html = html.replace(/<title>.*?<\/title>/i, titleTag);
  html = html.replace(
    /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
    descTag
  );

  if (/<link\s+rel=["']canonical["'].*?\/?>/i.test(html)) {
    html = html.replace(/<link\s+rel=["']canonical["'].*?\/?>/i, canonicalTag);
  } else {
    html = html.replace('</head>', `  ${canonicalTag}\n</head>`);
  }

  const headers = new Headers(response.headers);
  headers.set('x-edge-meta', '1');
  // Cache HTML for 60s at CDN level, revalidate in background
  if (!headers.has('cache-control')) {
    headers.set('cache-control', 'public, s-maxage=60, stale-while-revalidate=300');
  }

  return new Response(html, {
    status: response.status,
    headers,
  });
}

export const config = {
  path: "/*",
};
