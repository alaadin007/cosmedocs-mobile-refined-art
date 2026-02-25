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
  '/treatments/oily-skin-botox/': {
    title: 'Botox for Oily Skin London | Cosmedocs Harley Street',
    description: 'Reduce excess oil production with micro-Botox. Minimise pores & control shine. Doctor-led treatment on Harley Street.'
  },
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
  // Language pages
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
    title: 'Turning 30 in 2026: Smart Guide to Preventative Aesthetics | CosmeDocs',
    description: 'Baby Botox, skin boosters, collagen banking & subtle lip refinement — the honest guide to what women approaching 30 actually need. By Harley Street doctors.'
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
  const path = normalisePath(url.pathname);

  // Only process HTML page requests, skip assets
  if (/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|otf|json|xml|txt|mp4|webm|webp)$/i.test(url.pathname)) {
    return context.next();
  }

  const response = await context.next();
  const contentType = response.headers.get('content-type') || '';

  // Only modify HTML responses
  if (!contentType.includes('text/html')) {
    return response;
  }

  const meta = PAGE_META[path];
  if (!meta) {
    return response;
  }

  let html = await response.text();

  // Replace existing <title> tag (or insert if missing)
  if (/<title>.*?<\/title>/i.test(html)) {
    html = html.replace(/<title>.*?<\/title>/i, `<title>${meta.title}</title>`);
  } else {
    html = html.replace('</head>', `  <title>${meta.title}</title>\n</head>`);
  }

  // Replace existing meta description (or insert if missing)
  if (/<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i.test(html)) {
    html = html.replace(
      /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="description" content="${meta.description}" />`
    );
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${meta.description}" />\n</head>`);
  }

  return new Response(html, {
    status: response.status,
    headers: response.headers,
  });
}

export const config = {
  path: "/*",
};
