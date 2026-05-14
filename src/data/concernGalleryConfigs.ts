import type { ConcernGalleryConfig } from '@/components/concern-gallery/ConcernGalleryPage';

const RELATED_DEFAULT = [
  { label: 'Subtle Lip Filler', path: '/before-after/lip-filler-subtle/' },
  { label: 'Marionette Lines (Filler)', path: '/before-after/marionette-lines-filler/' },
  { label: 'Cheek Filler — Mid-Face', path: '/before-after/cheek-filler-mid-face/' },
  { label: 'Under-Eye / Tear Trough', path: '/before-after/under-eye-tear-trough/' },
  { label: 'Male Jawline', path: '/before-after/jawline-filler-male/' },
  { label: 'Non-Surgical Nose Job', path: '/before-after/non-surgical-nose-job-photo-faq/' },
  { label: 'Chin Profile Balance', path: '/before-after/chin-profile-balance/' },
  { label: 'Filler Correction & Dissolving', path: '/before-after/filler-correction-dissolved/' },
];

const filterRelated = (currentPath: string) =>
  RELATED_DEFAULT.filter((l) => l.path !== currentPath).slice(0, 6);

export const lipFillerSubtleConfig: ConcernGalleryConfig = {
  slug: 'lip-filler-subtle',
  title: 'Subtle Lip Filler Before & After | Natural Results | CosmeDocs',
  metaDescription:
    'Subtle, natural-looking lip filler before and after photos from our Harley Street doctors. 0.5ml and 1ml results focused on shape, hydration and proportion — never overfilled.',
  h1: 'Subtle Lip Filler — Before & After',
  intro:
    'Quiet, balanced lip enhancement. These results show what 0.5ml–1ml of hyaluronic acid filler looks like when the goal is shape and hydration — not volume for its own sake.',
  breadcrumbItems: [
    { label: 'Before & After', path: '/before-after/' },
    { label: 'Concerns', path: '/before-after/' },
  ],
  breadcrumbCurrent: 'Subtle Lip Filler',
  galleryName: 'Subtle Lip Filler Before & After Results',
  images: [
    {
      src: '/images/before-after/dermal-fillers/lips/lip-filler-natural-enhancement.jpg',
      alt: 'Subtle lip filler before and after — natural shape with light hydration',
      caption: '0.5ml across the upper and lower lip — shape refined, vermillion border defined.',
    },
    {
      src: '/images/before-after/dermal-fillers/lips/lip-filler-corners-ratio.jpg',
      alt: 'Subtle lip filler with corner lift and improved upper-to-lower ratio',
      caption: 'Corner lift and a softer upper-to-lower ratio — the lip looks rested, not filled.',
    },
    {
      src: '/images/before-after/dermal-fillers/lips/lip-augmentation-profile.jpg',
      alt: 'Subtle lip filler profile view showing natural projection',
      caption: 'Profile view — gentle projection, no shelf, no duck-bill silhouette.',
    },
    {
      src: '/images/before-after/dermal-fillers/lips/lip-filler-side-profile.jpg',
      alt: 'Subtle lip enhancement side profile with vermillion border definition',
      caption: 'Side profile — vermillion border crisp, body of the lip soft and mobile.',
    },
    {
      src: '/images/before-after/dermal-fillers/lips/lip-filler-progression-sessions.jpg',
      alt: 'Subtle lip filler progression across two sessions for natural build',
      caption: 'Two conservative sessions, 6 weeks apart — building gradually rather than in one visit.',
    },
  ],
  whatYouSee: {
    title: 'What "subtle" actually looks like in a photo',
    body:
      'Subtle lip filler should not be obvious. In these photos look at three things: the upper-to-lower lip ratio (we keep it close to 1:1.6), the projection from the side (gentle, no overhang above the upper lip), and the way the lip sits at rest (no taut shine, no flat edge).\n\nIf a lip filler photo looks dramatic at rest, that result will look heavier in real life — photos flatten volume by around 15–20%.',
  },
  doctorNote: {
    title: "Doctor's note — why we cap subtle work at 1ml",
    body:
      'In the UK, the safest, most natural-looking lip results sit between 0.5ml and 1ml in a single session. Going beyond 1ml in one visit is when lips start to look full at rest rather than full when smiling — the line patients usually want to stay below.\n\nFor patients with very thin lips or significant asymmetry, we build over 2–3 sessions rather than chase the result in one. This is the difference between a doctor-led plan and a single-visit transaction.',
  },
  patientFAQ: [
    {
      q: 'How much filler is in these photos?',
      a: 'Most of the subtle results shown use 0.5ml to 1ml of a hyaluronic acid filler. A small number show two sessions of 0.5ml spaced 4–6 weeks apart.',
    },
    {
      q: 'Will my lips look like the photo straight away?',
      a: 'No. The first 48–72 hours show swelling and minor bruising. The result you see in these photos is taken at 2 weeks, when swelling has settled and the filler has integrated.',
    },
    {
      q: 'How long does subtle lip filler last?',
      a: 'In our experience, 0.5–1ml of HA filler in the lip lasts 6–9 months before a top-up is suggested. Lips metabolise filler faster than other facial areas because they are constantly mobile.',
    },
    {
      q: 'Can subtle filler be reversed?',
      a: 'Yes. All hyaluronic acid filler can be dissolved with hyalase. We perform reversals routinely, including for patients treated elsewhere.',
    },
  ],
  relatedLinks: filterRelated('/before-after/lip-filler-subtle/'),
  treatmentLink: { label: 'About Lip Filler Treatment', path: '/treatments/lip-fillers/' },
};

export const marionetteLinesConfig: ConcernGalleryConfig = {
  slug: 'marionette-lines-filler',
  title: 'Marionette Lines Filler Before & After | Photo FAQ | CosmeDocs',
  metaDescription:
    'Marionette lines treated with dermal filler — real before and after photos from our Harley Street doctors. Honest results showing how the corners of the mouth lift.',
  h1: 'Marionette Lines — Before & After',
  intro:
    'Marionette lines run from the corner of the mouth toward the jawline. Filler does not erase them — it lifts the corner of the mouth so they cast less shadow. Here is what that actually looks like.',
  breadcrumbItems: [
    { label: 'Before & After', path: '/before-after/' },
  ],
  breadcrumbCurrent: 'Marionette Lines',
  galleryName: 'Marionette Lines Filler Before & After Results',
  images: [
    {
      src: '/images/before-after/dermal-fillers/lips/lip-filler-corners-ratio.jpg',
      alt: 'Marionette line softening through corner-of-mouth lift with filler',
      caption: 'Corner-of-mouth support softens the line above it — the line is not erased, the shadow is.',
    },
    {
      src: '/images/before-after/dermal-fillers/chin/chin-filler-result-1.jpg',
      alt: 'Chin and marionette area treated together for jawline support',
      caption: 'Chin support added — the lower face frame holds the corner of the mouth up.',
    },
    {
      src: '/images/before-after/dermal-fillers/chin/chin-filler-result-3.jpg',
      alt: 'Lower face filler combination addressing marionette area',
      caption: 'Combination treatment of chin + pre-jowl filler to soften marionette shadowing.',
    },
    {
      src: '/images/before-after/dermal-fillers/full-face-filler-before-after.jpg',
      alt: 'Full face rejuvenation including marionette support',
      caption: 'Full-face balance — cheek, chin and corner-of-mouth filler restore lower-face support.',
    },
  ],
  whatYouSee: {
    title: 'Marionette lines — why filler in the line itself rarely works',
    body:
      'Patients often ask for filler "in the line." This is almost always the wrong answer. Marionette lines are caused by loss of support around the corner of the mouth — by the time the line is visible, the structure underneath has already dropped.\n\nIn these photos the filler is placed at the chin, pre-jowl sulcus and corner of the mouth — not in the line itself. The line softens because the tissue around it is lifted.',
  },
  doctorNote: {
    title: "Doctor's note — when to add Botox",
    body:
      'For deeper marionette grooves, a small dose of Botox to the depressor anguli oris muscle (DAO) helps the corner of the mouth sit higher at rest. We typically use 2–4 units per side.\n\nFiller alone will improve the area but adding DAO Botox is what creates the noticeable "lifted" look patients describe.',
  },
  patientFAQ: [
    {
      q: 'Will filler get rid of my marionette lines completely?',
      a: 'In most cases, no — the line itself remains as a fold, but the shadow it casts becomes much less visible. Patients describe looking "less tired" rather than "line-free".',
    },
    {
      q: 'How much filler do you usually use?',
      a: 'For lower-face support around marionette lines, we typically use 1–2ml total across the chin, pre-jowl and corner of the mouth.',
    },
    {
      q: 'How long does it last?',
      a: 'Filler in this area lasts 12–18 months. Adding DAO Botox extends the visual result by reducing the daily downward muscle pull on the corner of the mouth.',
    },
  ],
  relatedLinks: filterRelated('/before-after/marionette-lines-filler/'),
  treatmentLink: { label: 'About Lower Face Filler', path: '/treatments/dermal-fillers/' },
};

export const cheekFillerMidFaceConfig: ConcernGalleryConfig = {
  slug: 'cheek-filler-mid-face',
  title: 'Cheek Filler Before & After | Mid-Face Restoration | CosmeDocs',
  metaDescription:
    'Cheek filler before and after photos focused on mid-face restoration. 1ml, 2ml and 4ml results from our Harley Street doctors — natural lift, not pillow cheeks.',
  h1: 'Cheek Filler — Mid-Face Restoration',
  intro:
    'When the mid-face loses volume, everything beneath it follows. Cheek filler restores the support structure — the lift in the lower face is a side effect of doing the upper face properly.',
  breadcrumbItems: [{ label: 'Before & After', path: '/before-after/' }],
  breadcrumbCurrent: 'Cheek Filler — Mid-Face',
  galleryName: 'Cheek Filler Mid-Face Before & After Results',
  images: [
    {
      src: '/images/before-after/dermal-fillers/full-face-filler-before-after.jpg',
      alt: 'Cheek filler before and after showing mid-face restoration',
      caption: 'Mid-face volume restored — the nasolabial fold softens because the cheek now supports it.',
    },
    {
      src: '/images/before-after/dermal-fillers/lips/full-face-rejuvenation.jpg',
      alt: 'Cheek and full face filler restoration result',
      caption: 'Cheek + lower face balance — front view shows restored facial proportions.',
    },
    {
      src: '/images/before-after/dermal-fillers/lips/full-face-filler-rejuvenation.jpg',
      alt: 'Comprehensive cheek filler restoration showing natural lift',
      caption: 'Comprehensive mid-face restoration — natural anterior projection of the cheek.',
    },
  ],
  whatYouSee: {
    title: 'How to read cheek filler photos honestly',
    body:
      'A good cheek result should look better in three-quarter view than head-on. If the only angle that looks impressive is front-on, the patient has been over-projected laterally — that creates the "shelf" look that ages poorly.\n\nIn these photos look at the under-eye area: a properly restored cheek smooths the lid-cheek junction without needing tear-trough filler.',
  },
  doctorNote: {
    title: "Doctor's note — 1ml, 2ml or 4ml?",
    body:
      'Most first-time patients in their 30s need 1ml per side (2ml total) for a refresh. Patients in their 40s with visible mid-face deflation typically need 2ml per side. Beyond 4ml total, results start to look done — we prefer to stage larger volumes across two sessions.',
  },
  patientFAQ: [
    {
      q: 'Will cheek filler make me look fat?',
      a: 'Not when placed correctly. The filler should sit on bone (deep medial cheek) — not in the surface fat. Properly placed cheek filler narrows the lower face by lifting it, not by adding bulk.',
    },
    {
      q: 'How long does cheek filler last?',
      a: '18–24 months on average. Cheek filler placed deep on bone lasts longer than superficial filler because the area moves less.',
    },
    {
      q: 'Will it fix my under-eye hollows?',
      a: 'Often yes — restoring cheek projection lifts the lower lid and reduces the shadow under the eye. We try cheek filler first before considering tear-trough filler.',
    },
  ],
  relatedLinks: filterRelated('/before-after/cheek-filler-mid-face/'),
  treatmentLink: { label: 'About Cheek Filler', path: '/treatments/cheek-fillers/' },
};

export const underEyeTearTroughConfig: ConcernGalleryConfig = {
  slug: 'under-eye-tear-trough',
  title: 'Under-Eye / Tear Trough Filler Before & After | CosmeDocs',
  metaDescription:
    'Tear trough filler before and after photos. Honest under-eye results from our Harley Street doctors — including who we turn away from this treatment and why.',
  h1: 'Under-Eye / Tear Trough — Before & After',
  intro:
    'The under-eye is the highest-risk filler area on the face. These results show what tear trough filler can — and cannot — fix, and the cases where we recommend cheek filler instead.',
  breadcrumbItems: [{ label: 'Before & After', path: '/before-after/' }],
  breadcrumbCurrent: 'Under-Eye / Tear Trough',
  galleryName: 'Tear Trough Filler Before & After Results',
  images: [
    {
      src: '/images/before-after/dermal-fillers/tear-trough-preview.jpg',
      alt: 'Tear trough filler before and after — softened under-eye shadow',
      caption: 'Tear trough softened — the dark shadow lifts because the hollow is filled, not because pigment changed.',
    },
    {
      src: '/images/before-after/dermal-fillers/full-face-filler-before-after.jpg',
      alt: 'Cheek and tear trough combined treatment',
      caption: 'Cheek + tear trough together — restoring the upper midface frame around the eye.',
    },
  ],
  whatYouSee: {
    title: 'Tear trough filler is a small treatment, photographed dramatically',
    body:
      'A tear trough result is rarely dramatic in person — but photographed under good light, the shadow change is obvious. Look at the line where the lower lid meets the cheek (the lid-cheek junction). When that line is shorter and the shadow above it is lighter, the treatment has done its job.\n\nIf you have visible bags rather than hollows, filler will not fix them — it can make them worse. We will tell you this at consultation.',
  },
  doctorNote: {
    title: "Doctor's note — why we turn 1 in 3 patients away",
    body:
      'About a third of patients who book a tear trough consultation are not good candidates. The most common reasons: prominent under-eye fat pads (filler will accentuate them), very thin skin (filler is visible/blue), or skin pigmentation rather than shadow (filler does not change pigment).\n\nFor these patients we suggest cheek filler, polynucleotides, or — in some cases — referring on for a lower-lid surgical opinion.',
  },
  patientFAQ: [
    {
      q: 'How much filler goes in the under-eye?',
      a: 'Very little — typically 0.3–0.5ml per side. Anyone offering you 1ml+ per side in the tear trough is over-treating.',
    },
    {
      q: 'Will I look puffy afterwards?',
      a: 'Mild swelling for 48–72 hours is normal. If the area still looks puffy at 2 weeks, the filler is sitting too superficially and may need adjusting or dissolving.',
    },
    {
      q: 'How long does it last?',
      a: 'In a stable lower lid, 12–18 months. Tear trough filler can outlast its visible effect — the filler is still present at 3+ years on some patients.',
    },
    {
      q: 'Can it be dissolved?',
      a: 'Yes. We routinely dissolve tear trough filler — both our own when patients want a reset, and from other clinics where the result is unsatisfactory.',
    },
  ],
  relatedLinks: filterRelated('/before-after/under-eye-tear-trough/'),
  treatmentLink: { label: 'About Tear Trough Filler', path: '/treatments/tear-trough-fillers/' },
};

export const jawlineMaleConfig: ConcernGalleryConfig = {
  slug: 'jawline-filler-male',
  title: 'Male Jawline Filler Before & After | Men\'s Results | CosmeDocs',
  metaDescription:
    'Male jawline filler before and after photos. Masculine definition without overfilling — real results from our Harley Street doctors.',
  h1: 'Male Jawline Filler — Before & After',
  intro:
    'A male jawline result should look like the patient hit the gym, not the clinic. These photos show definition, angle and projection — not bulk.',
  breadcrumbItems: [{ label: 'Before & After', path: '/before-after/' }],
  breadcrumbCurrent: 'Male Jawline',
  galleryName: 'Male Jawline Filler Before & After Results',
  images: [
    {
      src: '/images/before-after/dermal-fillers/jawline/jawline-filler-new-1.jpg',
      alt: 'Male jawline filler before and after — defined angle and projection',
      caption: 'Defined gonial angle — masculine projection without lateral over-build.',
    },
    {
      src: '/images/before-after/dermal-fillers/jawline/jawline-filler-new-2.jpg',
      alt: 'Male chin and jawline filler combined for stronger profile',
      caption: 'Chin + jawline together — the profile lengthens and squares.',
    },
    {
      src: '/images/before-after/dermal-fillers/jawline/jawline-filler-new-3.jpg',
      alt: 'Male lower face contouring with filler — three-quarter view',
      caption: 'Three-quarter view — the jaw line reads from ear to chin without a break.',
    },
    {
      src: '/images/before-after/dermal-fillers/jawline/jawline-filler-new-4.jpg',
      alt: 'Male jawline definition with filler — front view',
      caption: 'Front view — slimmer-looking lower face because the angle is now defined.',
    },
    {
      src: '/images/before-after/dermal-fillers/jawline/jawline-filler-new-5.jpg',
      alt: 'Male jawline filler result with masseter botox',
      caption: 'Combined with masseter Botox — angle defined, masseter bulk reduced.',
    },
  ],
  whatYouSee: {
    title: 'A masculine jaw is about line, not volume',
    body:
      'Male jaw filler should restore a single continuous line from earlobe to chin point. If you can see a "step" between the gonial angle and the chin, the structure is still incomplete.\n\nIn these photos look at the angle of the jaw from a three-quarter view — the corner should be visible but not pillowy. Over-built male jawlines age toward looking heavy and feminised, not stronger.',
  },
  doctorNote: {
    title: "Doctor's note — why we often combine with masseter Botox",
    body:
      'Many male patients have a square but bulky lower face from masseter hypertrophy. Adding filler alone makes the area heavier. We typically combine 4ml of filler across the jaw with masseter Botox (25–40 units per side) — this slims the masseter while sharpening the bony angle. The two treatments together produce the V-line look filler alone cannot.',
  },
  patientFAQ: [
    {
      q: 'How much filler do men usually need?',
      a: '4ml total is the most common male jawline plan — 1ml per gonial angle, 1ml chin, 1ml across the body of the jaw. Larger frames may need 6ml staged across two sessions.',
    },
    {
      q: 'Will it look obvious?',
      a: 'No, when placed deep on bone. The result reads as a sharper face shape, not as "filler". Most male patients tell us friends comment on weight loss or training, not aesthetics.',
    },
    {
      q: 'How long does male jawline filler last?',
      a: '18–24 months. Deep, on-bone filler in the jaw is one of the longest-lasting placements on the face.',
    },
  ],
  relatedLinks: filterRelated('/before-after/jawline-filler-male/'),
  treatmentLink: { label: 'About Jawline Filler', path: '/treatments/jawline-fillers/' },
};

export const noseJobPhotoFAQConfig: ConcernGalleryConfig = {
  slug: 'non-surgical-nose-job-photo-faq',
  title: 'Non-Surgical Nose Job Before & After | Photo FAQ | CosmeDocs',
  metaDescription:
    'Non-surgical rhinoplasty before and after photos. Honest answers to the questions patients ask when comparing nose filler results — from our Harley Street doctors.',
  h1: 'Non-Surgical Nose Job — Photo FAQ',
  intro:
    'Filler cannot make a nose smaller. It can straighten a profile, lift a tip, smooth a dorsal bump and improve symmetry. These photos show what each of those actually looks like.',
  breadcrumbItems: [{ label: 'Before & After', path: '/before-after/' }],
  breadcrumbCurrent: 'Non-Surgical Nose Job',
  galleryName: 'Non-Surgical Rhinoplasty Before & After Results',
  images: [
    {
      src: '/images/before-after/dermal-fillers/nose/large-nose-dorsal-bump-before.jpg',
      alt: 'Large nose dorsal bump before non-surgical rhinoplasty',
      caption: 'Before — visible dorsal bump in profile.',
    },
    {
      src: '/images/before-after/dermal-fillers/nose/large-nose-dorsal-bump-after.jpg',
      alt: 'Large nose dorsal bump after non-surgical rhinoplasty with filler',
      caption: 'After — filler placed above and below the bump straightens the line.',
    },
    {
      src: '/images/before-after/dermal-fillers/nose/nose-filler-bridge-smoothing.png',
      alt: 'Bridge smoothing with dermal filler',
      caption: 'Bridge smoothing — small dorsal irregularity corrected with 0.3ml.',
    },
    {
      src: '/images/before-after/dermal-fillers/nose/nose-filler-bridge-tip-refinement.png',
      alt: 'Bridge and tip refinement with non-surgical rhinoplasty',
      caption: 'Bridge + tip refinement — combination placement for profile balance.',
    },
    {
      src: '/images/before-after/dermal-fillers/nose/nose-filler-contour-dent-correction.png',
      alt: 'Contour dent correction with nose filler',
      caption: 'Contour dent corrected — small volume, high impact in side-light photography.',
    },
    {
      src: '/images/before-after/dermal-fillers/nose/nose-filler-dorsal-correction.png',
      alt: 'Dorsal nasal correction with hyaluronic acid filler',
      caption: 'Dorsal correction — straight profile achieved with under 0.5ml total.',
    },
  ],
  whatYouSee: {
    title: 'How to read non-surgical nose job photos',
    body:
      'Compare profile views, not front views. The change non-surgical rhinoplasty makes is almost entirely in side profile — front-on changes are subtle.\n\nLook for: the bridge line should be straight or have a gentle slope, the tip should sit slightly higher than the bridge, and the angle from lip to nose tip should be open (around 95–105° in women, 90–95° in men).',
  },
  doctorNote: {
    title: "Doctor's note — non-surgical nose work is the highest-risk filler treatment",
    body:
      'The nose has end vessels — vascular occlusion here can cause skin necrosis or, very rarely, blindness. We use cannula technique, retrograde injection, aspirate before each deposit, and treat with no more than 0.5ml total in most cases.\n\nWe routinely treat patients who have had complications elsewhere. If your nose filler was done quickly, in a non-medical setting, or with more than 1ml in one session — get it reviewed.',
  },
  patientFAQ: [
    {
      q: 'How much filler goes in a non-surgical nose job?',
      a: 'Typically 0.2–0.5ml total. Anyone offering you 1ml+ in the nose in a single session is over-treating.',
    },
    {
      q: 'How long does it last?',
      a: 'Nose filler lasts longer than other facial filler — 12–24 months — because the area barely moves.',
    },
    {
      q: 'Can I have surgical rhinoplasty later?',
      a: 'Yes, but tell your surgeon. Filler should ideally be dissolved before surgery to avoid scarring complications.',
    },
    {
      q: 'Why does my friend\'s nose look smaller after filler?',
      a: 'Visual illusion. Straightening the profile and lifting the tip makes the nose appear refined — actual volume has increased, not decreased.',
    },
  ],
  relatedLinks: filterRelated('/before-after/non-surgical-nose-job-photo-faq/'),
  treatmentLink: { label: 'About Non-Surgical Nose Job', path: '/treatments/nose-fillers/' },
};

export const chinProfileBalanceConfig: ConcernGalleryConfig = {
  slug: 'chin-profile-balance',
  title: 'Chin Filler Before & After | Profile Balance | CosmeDocs',
  metaDescription:
    'Chin filler before and after photos focused on profile balance. Real results from our Harley Street doctors — natural projection, no chin shelf.',
  h1: 'Chin Filler — Profile Balance',
  intro:
    'A balanced face needs a balanced chin. These photos show small-volume chin filler used to lengthen the lower face, support the lip and define the jaw — without the over-projected chin shelf seen in heavy-handed work.',
  breadcrumbItems: [{ label: 'Before & After', path: '/before-after/' }],
  breadcrumbCurrent: 'Chin Profile Balance',
  galleryName: 'Chin Filler Profile Balance Before & After Results',
  images: [
    {
      src: '/images/before-after/dermal-fillers/chin/chin-filler-result-1.jpg',
      alt: 'Chin filler before and after — improved profile balance',
      caption: 'Profile lengthened by 2–3mm — chin now sits in line with the lower lip.',
    },
    {
      src: '/images/before-after/dermal-fillers/chin/chin-filler-result-2.jpg',
      alt: 'Female chin filler with profile improvement',
      caption: 'Soft female chin projection — anterior, not lateral.',
    },
    {
      src: '/images/before-after/dermal-fillers/chin/chin-filler-result-3.jpg',
      alt: 'Chin filler combined with jawline support',
      caption: 'Chin + pre-jowl filler — the lower face frame is now continuous.',
    },
    {
      src: '/images/before-after/dermal-fillers/chin/chin-filler-result-4.jpg',
      alt: 'Chin filler refining jawline definition',
      caption: 'Chin definition without lateral spread — front view stays balanced.',
    },
    {
      src: '/images/before-after/dermal-fillers/chin/chin-filler-result-5.jpg',
      alt: 'Profile correction with conservative chin filler',
      caption: 'Conservative profile correction — under 1ml total.',
    },
  ],
  whatYouSee: {
    title: 'Read chin filler in profile, not front-on',
    body:
      'A line dropped vertically from the lower lip should touch — or just clear — the front of the chin. If the chin sits behind that line, profile balance is off and filler can correct it.\n\nFront-on, look for definition without widening. A good chin result should not widen the lower face from the front.',
  },
  doctorNote: {
    title: "Doctor's note — chin filler vs chin implant",
    body:
      'For projection of more than 4mm, a chin implant gives a longer-term, structurally cleaner result than filler. Filler is the right choice for 2–4mm of projection, for trial-runs before considering surgery, or where the patient wants a reversible option.',
  },
  patientFAQ: [
    {
      q: 'How much chin filler do I need?',
      a: 'Most balanced chin profile work uses 1–2ml total. Larger volumes belong staged across sessions or referred to a surgical opinion.',
    },
    {
      q: 'Will it look obvious from the front?',
      a: 'No, when placed centrally on bone. Properly placed chin filler defines the jaw without widening the face.',
    },
    {
      q: 'How long does it last?',
      a: '12–18 months. Chin filler placed deep on bone lasts longer than soft-tissue filler.',
    },
  ],
  relatedLinks: filterRelated('/before-after/chin-profile-balance/'),
  treatmentLink: { label: 'About Chin Filler', path: '/treatments/chin-fillers/' },
};

export const fillerCorrectionDissolvedConfig: ConcernGalleryConfig = {
  slug: 'filler-correction-dissolved',
  title: 'Filler Correction & Dissolving Before & After | CosmeDocs',
  metaDescription:
    'Filler correction and dissolving before and after photos. We treat complications and over-filled work from other clinics — see real corrective results.',
  h1: 'Filler Correction & Dissolving — Before & After',
  intro:
    'Cosmedocs manages national-level filler complications. These results show corrective dissolving and re-treatment cases — including work originally performed at other clinics.',
  breadcrumbItems: [{ label: 'Before & After', path: '/before-after/' }],
  breadcrumbCurrent: 'Filler Correction',
  galleryName: 'Filler Correction & Dissolving Before & After Results',
  images: [
    {
      src: '/images/before-after/dermal-fillers/lips/vascular-occlusion-complication-management.jpg',
      alt: 'Vascular occlusion complication managed with full recovery',
      caption: 'Vascular occlusion (filler injected elsewhere) — managed by our doctors with full recovery.',
    },
    {
      src: '/images/before-after/dermal-fillers/lips/lip-correction-fix.jpg',
      alt: 'Lip filler correction — over-filled lips dissolved and re-shaped',
      caption: 'Over-filled lips dissolved with hyalase, then re-shaped at 0.5ml six weeks later.',
    },
  ],
  whatYouSee: {
    title: 'What corrective work actually looks like',
    body:
      'Corrective filler work usually has two stages: dissolving the old filler with hyalase, then a 4–6 week wait for tissue to settle before re-treating conservatively.\n\nIn these photos the "after" image is taken at the end of stage two — not immediately after dissolving. Tissue often looks deflated immediately post-hyalase; this is temporary.',
  },
  doctorNote: {
    title: "Doctor's note — when to dissolve",
    body:
      'We recommend dissolving rather than "topping up" when filler has migrated, when there is visible nodulation, when the patient has lost facial proportion, or when there is any vascular concern. Dissolving is not failure — it is often the safest path back to a good result.\n\nWe accept emergency complication referrals. If you have signs of vascular occlusion (skin colour change, mottling, severe pain after injection), contact us immediately.',
  },
  patientFAQ: [
    {
      q: 'Does dissolving filler hurt?',
      a: 'It is uncomfortable rather than painful, with mild swelling for 24–48 hours. We use topical anaesthetic and small-volume hyalase injections.',
    },
    {
      q: 'Will I lose all my volume?',
      a: 'Hyalase only dissolves hyaluronic acid filler. Your natural tissue volume is unaffected. Most patients are surprised how much of their "lost" face was filler-related migration rather than real volume loss.',
    },
    {
      q: 'Can you dissolve filler from another clinic?',
      a: 'Yes. We routinely treat patients with unsatisfactory or complicated work from elsewhere — both UK and overseas.',
    },
    {
      q: 'How soon after dissolving can I have new filler?',
      a: '4–6 weeks. We need the tissue to fully settle before assessing the true baseline for new treatment.',
    },
  ],
  relatedLinks: filterRelated('/before-after/filler-correction-dissolved/'),
  treatmentLink: { label: 'About Filler Dissolving', path: '/treatments/filler-dissolving/' },
};

export const ALL_CONCERN_CONFIGS = [
  lipFillerSubtleConfig,
  marionetteLinesConfig,
  cheekFillerMidFaceConfig,
  underEyeTearTroughConfig,
  jawlineMaleConfig,
  noseJobPhotoFAQConfig,
  chinProfileBalanceConfig,
  fillerCorrectionDissolvedConfig,
];
