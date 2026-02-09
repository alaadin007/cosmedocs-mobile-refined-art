import type { PatientPageData } from './internationalPageTypes';
import { sharedPricingItems, sharedTreatmentMenu, sharedAboutPoints } from './swedishPatientData';

export const germanData: PatientPageData = {
  lang: "de",
  slug: "german-patients",
  hero: {
    badge: "Cosmedocs · Harley Street · London",
    h1: "Ästhetische Klinik in London für deutschsprachige Patienten",
    subtitle: "Arztgeleitete ästhetische Medizin – natürliche Ergebnisse seit 2007",
    tagline: "Ihre Adresse für sichere und natürliche Schönheitsbehandlungen in London",
  },
  welcome: {
    title: "Willkommen bei Cosmedocs",
    text: "Cosmedocs befindet sich in der berühmten Harley Street in London und heißt seit 2007 deutschsprachige Patienten willkommen. Wir sind bekannt für medizinische Präzision, natürliche Ergebnisse und vollständigen Respekt für die Privatsphäre unserer Patienten. Viele deutsche Patienten verbinden ihren London-Besuch mit Behandlungen bei uns – oft zu niedrigeren Preisen als in Deutschland.",
    motto: "Wahre Schönheit bedeutet, Ihre Züge zu betonen – nicht sie zu verändern.",
  },
  whyChoose: {
    title: "Warum wählen deutschsprachige Patienten Cosmedocs?",
    reasons: ["Ärzte führen alle Behandlungen durch", "Seit 2007 an der Harley Street", "Über 1 Million Injektionen", "Spezialisiert auf natürliche Ergebnisse", "Oft günstiger als in Deutschland", "Strengster Datenschutz"],
  },
  philosophy: {
    title: "Unsere Philosophie: natürlich, niemals übertrieben",
    donts: ["Keine 'Instagram-Gesichter'", "Kein Überfüllen", "Keine Standardschablonen"],
    dos: ["Verbesserte Proportionen", "Ausgewogene Muskelkraft", "Leichter, feiner – aber immer noch Sie"],
    motto: "Natürliche Ergebnisse sind kein Versprechen – sie sind unser täglicher Standard.",
  },
  haMakeover: {
    title: "Was ist HA Makeover?",
    subtitle: "(Hyaluronsäure-basierte Gesichtsverjüngung)",
    description: "Ein ganzheitlicher Behandlungsplan mit Hyaluronsäure zur Wiederherstellung von Balance, Volumen und Ausstrahlung – ohne Ihre Gesichtszüge zu verändern.",
    goal: "Ziel: Jünger und frischer aussehen, ohne dass es auffällt.",
    ages: [
      { label: "30+", age: "30er Jahre", items: ["Leichter Volumenverlust", "Müde Augen", "Erste feine Linien"], goal: "Vorbeugung und Erhaltung" },
      { label: "40+", age: "40er Jahre", items: ["Deutlicher Volumenverlust", "Leichte Erschlaffung", "Feste Falten"], goal: "Balance und Stützung wiederherstellen" },
      { label: "50+", age: "50+ Jahre", items: ["Tiefer Volumenverlust", "Veränderte Gesichtsform", "Sichtbare Erschlaffung"], goal: "Ganzheitliche Verjüngung, natürlich" },
    ],
  },
  masseter: {
    title: "Masseter Botox (Kieferschlankung)",
    intro: "Beliebt bei Patienten, die eine schlankere Gesichtsform wünschen.",
    suitableFor: ["Breiter Kiefer", "Zähneknirschen (Bruxismus)", "Wunsch nach natürlicher Gesichtsverschlankung"],
    advantages: ["Kontrollierte Dosierung", "Kein 'eingefrorenes' Aussehen", "Schlank, aber nicht spitz"],
    result: "Ergebnis: Leichtere Konturen, weichere Linien – natürlich.",
  },
  calfReduction: {
    title: "Wadenverschlankung (Calf Reduction)",
    intro: "Cosmedocs gehört zu den ersten Kliniken in London, die Wadenverschlankung mit Botox anbieten.",
    suitableFor: ["Muskulöse Waden", "Keine Operation gewünscht", "Schlankere Beinlinien gewünscht"],
    features: ["Präzise Muskelbewertung", "Gangfunktion bleibt erhalten", "Schrittweise, natürliche Verschlankung"],
  },
  botox: {
    title: "Botox – auf natürliche Art",
    uses: ["Stirnfalten", "Zornesfalten", "Krähenfüße", "Brauenlifting"],
    benefits: ["Kein Einfrieren", "Bewahrter Ausdruck", "Entspanntes, frisches Aussehen"],
  },
  skinTreatments: {
    title: "Hautbehandlungen",
    treatments: ["Profhilo", "Polynukleotide", "Chemisches Peeling", "Microneedling", "PRP"],
  },
  privacy: {
    title: "Privatsphäre und Vertrauen",
    values: ["Private, ruhige Umgebung", "Direkter Kontakt mit dem Arzt", "Kein Verkaufsdruck", "Kultureller Respekt"],
    footer: "Die Beratung ist ruhig, medizinisch und ganz auf Sie zugeschnitten.",
  },
  pricing: {
    title: "Preise – London vs Deutschland",
    intro: "Viele deutsche Patienten stellen fest, dass Londoner Preise oft günstiger sind als zu Hause, bei höherer Expertise.",
    comparison: [
      { treatment: "Botox 3 Bereiche", local: "400–600 €", cosmedocs: "£350 (~410 €)" },
      { treatment: "Masseter Botox", local: "400–700 €", cosmedocs: "£350 (~410 €)" },
      { treatment: "Calf Reduction", local: "800–1.200 €", cosmedocs: "£750 (~880 €)" },
      { treatment: "Lip Filler 1ml", local: "350–500 €", cosmedocs: "£350 (~410 €)" },
      { treatment: "Nose Filler", local: "500–800 €", cosmedocs: "£450 (~530 €)" },
    ],
    items: sharedPricingItems,
  },
  treatmentMenu: {
    title: "Behandlungsmenü",
    categories: sharedTreatmentMenu({ botox: "Botox", fillers: "Dermal Filler", skin: "Hautverjüngung", contouring: "Konturierung", medical: "Medizinisches Botox", makeover: "HA Makeover" }),
  },
  aboutUs: {
    title: "Über Cosmedocs",
    points: sharedAboutPoints({ since: "Gegründet 2007 an der Harley Street", injections: "Über 1 Million Injektionen durchgeführt", harley: "10 Harley Street, London W1G 9PF", doctors: "Alle Behandlungen von Ärzten durchgeführt", natural: "Philosophie: 'Unsichtbare Kunst' – natürliche Ergebnisse", regulated: "Regulierte, GMC-registrierte Klinik" }),
  },
  gallery: { title: "Echte Patientenergebnisse", disclaimer: "Ergebnisse variieren. Bilder sind unbearbeitet und zeigen echte Behandlungsergebnisse." },
  cta: {
    title: "Weil das Natürliche das Schönste ist",
    details: ["📍 Harley Street, London", "👨‍⚕️ Ausschließlich arztgeleitete Behandlungen", "🕰 Seit 2007"],
    motto: "Veränderung muss nicht sichtbar sein. Schönheit ist ein Gefühl.",
    buttonText: "Beratung buchen",
  },
  faq: {
    title: "Häufig gestellte Fragen",
    items: [
      { q: "Nimmt Cosmedocs deutsche Patienten auf?", a: "Ja, wir heißen deutschsprachige Patienten willkommen. Beratungen finden auf Englisch statt mit klaren Erklärungen." },
      { q: "Ist es in London günstiger?", a: "Oft ja. Botox 3 Bereiche kostet £350 bei uns, verglichen mit 400–600 € in Deutschland." },
      { q: "Was ist Masseter Botox?", a: "Masseter Botox verschlankt das Gesicht durch Entspannung des Kiefermuskels. Wir legen Wert auf kontrollierte Dosierung." },
      { q: "Bieten Sie Wadenverschlankung an?", a: "Ja, wir gehören zu den ersten Londoner Kliniken. Die Behandlung reduziert den Wadenmuskel schrittweise ohne Beeinträchtigung der Gangfunktion." },
      { q: "Was ist HA Makeover?", a: "Eine ganzheitliche Hyaluronsäure-Lösung zur Wiederherstellung von Volumen, Struktur und Hautqualität." },
      { q: "Wie buche ich?", a: "Sie können über unsere Kontaktseite buchen oder unseren AI-Assistenten auf der Website nutzen." },
    ],
  },
  disclaimer: "Diese Seite wurde mit KI-Unterstützung erstellt. Wir empfehlen, unsere Fachärzte für die genauesten Informationen zu konsultieren.",
  seoText: "Cosmedocs ästhetische Klinik Harley Street London für deutschsprachige Patienten seit 2007. Botox, Dermal Filler, Masseter Botox Kieferschlankung, Wadenverschlankung Calf Reduction, HA Makeover Gesichtsverjüngung. Über 1 Million Injektionen. Arztgeleitete ästhetische Medizin mit natürlichen Ergebnissen.",
  keywords: "ästhetische klinik london, deutsche patienten london, botox london, masseter botox, wadenverschlankung, calf reduction, HA makeover, lippenfilter london, Harley Street, filler berlin london",
};
