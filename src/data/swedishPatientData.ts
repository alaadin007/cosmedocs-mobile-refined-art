import type { PatientPageData } from './internationalPageTypes';

// Shared pricing items used across all international pages
export const sharedPricingItems = [
  { name: "Botox 1 Area", price: "£175" },
  { name: "Botox 3 Areas", price: "£350" },
  { name: "Masseter Botox", price: "£350" },
  { name: "Calf Reduction", price: "£750" },
  { name: "Lip Filler 0.5ml", price: "£300" },
  { name: "Lip Filler 1ml", price: "£350" },
  { name: "Nose Filler", price: "£450" },
  { name: "Cheek Filler", price: "£350/ml" },
  { name: "Jawline Filler", price: "£350/ml" },
  { name: "Tear Trough", price: "£425" },
  { name: "HA Makeover", price: "From £1,250" },
  { name: "Profhilo", price: "£350" },
];

// Shared treatment menu
export const sharedTreatmentMenu = (labels: { botox: string; fillers: string; skin: string; contouring: string; medical: string; makeover: string }) => [
  { name: labels.botox, items: ["Forehead", "Frown Lines", "Crow's Feet", "Lip Flip", "Brow Lift"], link: "/treatments/botox/" },
  { name: labels.fillers, items: ["Lips", "Cheeks", "Chin", "Jawline", "Tear Trough", "Nose"], link: "/treatments/dermal-fillers/" },
  { name: labels.skin, items: ["Profhilo", "Polynucleotides", "Chemical Peels", "Microneedling"], link: "/treatments/skin-rejuvenation/" },
  { name: labels.contouring, items: ["Masseter / Jaw Slimming", "Calf Reduction", "Barbie Botox"], link: "/treatments/masseter-botox/" },
  { name: labels.medical, items: ["Migraine", "Hyperhidrosis", "Bruxism", "TMJ"], link: "/treatments/botox/medical/" },
  { name: labels.makeover, items: ["8-Point Facelift", "Full Face Rejuvenation", "Volume Restoration"], link: "/treatments/ha-makeover/" },
];

// Shared about us points
export const sharedAboutPoints = (lang: {
  since: string; injections: string; harley: string; doctors: string; natural: string; regulated: string;
}) => [
  lang.since, lang.injections, lang.harley, lang.doctors, lang.natural, lang.regulated,
];

export const swedishData: PatientPageData = {
  lang: "sv",
  slug: "swedish-patients",
  hero: {
    badge: "Cosmedocs · Harley Street · London",
    h1: "Estetisk klinik i London för svenska patienter",
    subtitle: "Läkarledd estetisk medicin – naturliga resultat sedan 2007",
    tagline: "Din destination för säker och naturlig skönhetsbehandling i London",
  },
  welcome: {
    title: "Välkommen till Cosmedocs",
    text: "Cosmedocs ligger på Harley Street i London och har sedan 2007 välkomnat patienter från Skandinavien. Vi är kända för vår medicinska precision, naturliga resultat och fullständig respekt för patientens integritet. Många svenska patienter väljer att kombinera sin Londonresa med behandlingar hos oss – ofta till lägre priser än i Sverige.",
    motto: "Verklig skönhet handlar om att förstärka dina drag, inte förändra dem.",
  },
  whyChoose: {
    title: "Varför väljer svenska patienter Cosmedocs?",
    reasons: [
      "Läkare utför alla behandlingar", "Sedan 2007 på Harley Street", "Över 1 miljon injektioner",
      "Specialiserade på naturliga resultat", "Ofta billigare än i Sverige", "Strikt integritetsskydd",
    ],
  },
  philosophy: {
    title: "Vår filosofi: naturligt, aldrig överdrivet",
    donts: ["Inga 'Instagram-ansikten'", "Ingen överfyllning", "Inga standardmallar"],
    dos: ["Förbättrade proportioner", "Balanserad muskelstyrka", "Lättare, mer förfinat – men fortfarande du"],
    motto: "Naturliga resultat är inte ett löfte – det är vår dagliga standard.",
  },
  haMakeover: {
    title: "Vad är HA Makeover?",
    subtitle: "(Hyaluronsyra-baserad ansiktsföryngring)",
    description: "En helhetsplan med hyaluronsyra för att återställa balans, volym och lyster – utan att ändra dina drag.",
    goal: "Målet: Se yngre och fräschare ut utan att det syns att du gjort något.",
    ages: [
      { label: "30+", age: "30-årsåldern", items: ["Lätt volymförlust", "Trötta ögon", "Tidiga fina linjer"], goal: "Förebyggande och bevarande" },
      { label: "40+", age: "40-årsåldern", items: ["Tydlig volymförlust", "Lätt hängning", "Fasta linjer"], goal: "Återställa balans och stöd" },
      { label: "50+", age: "50+ år", items: ["Djup volymförlust", "Förändrad ansiktsform", "Synlig hängning"], goal: "Övergripande föryngring, naturligt" },
    ],
  },
  masseter: {
    title: "Masseter Botox (käkslimming)",
    intro: "Populärt bland skandinaviska patienter som önskar en smalare ansiktsform.",
    suitableFor: ["Bred käke", "Tandgnissling (bruxism)", "Önskan om naturlig ansiktsslimming"],
    advantages: ["Kontrollerad dosering", "Ingen 'frusen' look", "Smalt men inte spetsigt"],
    result: "Resultat: Lättare konturer, mjukare linjer – fortfarande naturligt.",
  },
  calfReduction: {
    title: "Vadslimming (Calf Reduction)",
    intro: "Cosmedocs är en av Londons första kliniker att erbjuda vadslimming med Botox.",
    suitableFor: ["Muskulära vader", "Vill undvika kirurgi", "Önskar slankare benlinjer"],
    features: ["Precis muskelbedömning", "Bevarad gångfunktion", "Gradvis, naturlig förtunning"],
  },
  botox: {
    title: "Botox – på det naturliga sättet",
    uses: ["Pannlinjer", "Rynkor mellan ögonbrynen", "Kråksparkar", "Ögonbrynslyft"],
    benefits: ["Ingen frysning", "Bevarat uttryck", "Avslappnat och fräscht utseende"],
  },
  skinTreatments: {
    title: "Hudbehandlingar",
    treatments: ["Profhilo", "Polynukleotider", "Kemisk peeling", "Microneedling", "PRP"],
  },
  privacy: {
    title: "Integritet och förtroende",
    values: ["Privat, lugn miljö", "Direkt kommunikation med läkare", "Ingen försäljningspress", "Kulturell respekt"],
    footer: "Konsultationen är lugn, medicinsk och helt anpassad efter dig.",
  },
  pricing: {
    title: "Priser – London vs Sverige",
    intro: "Många svenska patienter upptäcker att Londons priser ofta är lägre än hemma, med högre expertis.",
    comparison: [
      { treatment: "Botox 3 områden", local: "5 000–7 000 SEK", cosmedocs: "£350 (~4 700 SEK)" },
      { treatment: "Masseter Botox", local: "5 000–8 000 SEK", cosmedocs: "£350 (~4 700 SEK)" },
      { treatment: "Calf Reduction", local: "8 000–12 000 SEK", cosmedocs: "£750 (~10 000 SEK)" },
      { treatment: "Lip Filler 1ml", local: "4 000–6 000 SEK", cosmedocs: "£350 (~4 700 SEK)" },
      { treatment: "Nose Filler", local: "5 000–8 000 SEK", cosmedocs: "£450 (~6 000 SEK)" },
    ],
    items: sharedPricingItems,
  },
  treatmentMenu: {
    title: "Behandlingsmeny",
    categories: sharedTreatmentMenu({ botox: "Botox", fillers: "Dermal Fillers", skin: "Hudföryngring", contouring: "Konturering", medical: "Medicinsk Botox", makeover: "HA Makeover" }),
  },
  aboutUs: {
    title: "Om Cosmedocs",
    points: sharedAboutPoints({ since: "Grundat 2007 på Harley Street", injections: "Över 1 miljon injektioner utförda", harley: "10 Harley Street, London W1G 9PF", doctors: "Alla behandlingar utförs av läkare", natural: "Filosofi: 'Osynlig konst' – naturliga resultat", regulated: "Reglerad, GMC-registrerad klinik" }),
  },
  gallery: {
    title: "Verkliga patientresultat",
    disclaimer: "Resultaten varierar. Bilderna är oredigerade och visar verkliga behandlingsresultat.",
  },
  cta: {
    title: "För att det naturliga är det vackraste",
    details: ["📍 Harley Street, London", "👨‍⚕️ Enbart läkarledda behandlingar", "🕰 Sedan 2007"],
    motto: "Förändring behöver inte synas. Skönhet är en känsla.",
    buttonText: "Boka konsultation",
  },
  faq: {
    title: "Vanliga frågor",
    items: [
      { q: "Tar Cosmedocs emot svenska patienter?", a: "Ja, vi välkomnar patienter från hela Skandinavien. Konsultationer sker på engelska med tydliga förklaringar." },
      { q: "Är det billigare i London?", a: "Ofta ja. Botox 3 områden kostar £350 hos oss, jämfört med 5 000–7 000 SEK i Sverige, och med högre expertis." },
      { q: "Vad är Masseter Botox?", a: "Masseter Botox smalnar av ansiktet genom att slappna av käkmuskeln. Vi betonar kontrollerad dosering för naturliga resultat." },
      { q: "Erbjuder ni vadslimming?", a: "Ja, vi är en av Londons första kliniker med vadslimming. Behandlingen minskar vadmuskeln gradvis utan att påverka gångfunktionen." },
      { q: "Vad är HA Makeover?", a: "HA Makeover är en helhetslösning med hyaluronsyra som återställer volym, struktur och hudkvalitet – utan att förändra dina drag." },
      { q: "Hur bokar jag?", a: "Du kan boka via vår kontaktsida eller använda vår AI-assistent på hemsidan för att utforska behandlingsalternativ innan ditt besök." },
    ],
  },
  disclaimer: "Denna sida har skapats med AI-assistans. Vi rekommenderar att du konsulterar våra specialistläkare för den mest exakta informationen.",
  seoText: "Cosmedocs estetisk klinik Harley Street London för svenska patienter sedan 2007. Botox, dermal fillers, masseter botox käkslimming, vadslimming calf reduction, HA Makeover ansiktsföryngring, näsfiller, läppfiller, kindfiller. Över 1 miljon injektioner. Läkarledd estetisk medicin med naturliga resultat. Ofta billigare än i Sverige med högre expertis.",
  keywords: "estetisk klinik london, svenska patienter london, botox london, masseter botox, vadslimming, calf reduction, HA makeover, läppfiller london, dermal fillers london, Harley Street",
};
