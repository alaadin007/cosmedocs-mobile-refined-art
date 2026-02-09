import type { PatientPageData } from './internationalPageTypes';
import { sharedPricingItems, sharedTreatmentMenu, sharedAboutPoints } from './swedishPatientData';

export const norwegianData: PatientPageData = {
  lang: "no",
  slug: "norwegian-patients",
  hero: {
    badge: "Cosmedocs · Harley Street · London",
    h1: "Estetisk klinikk i London for norske pasienter",
    subtitle: "Legestyrt estetisk medisin – naturlige resultater siden 2007",
    tagline: "Din destinasjon for trygg og naturlig skjønnhetsbehandling i London",
  },
  welcome: {
    title: "Velkommen til Cosmedocs",
    text: "Cosmedocs ligger på Harley Street i London og har siden 2007 ønsket pasienter fra Skandinavia velkommen. Vi er kjent for medisinsk presisjon, naturlige resultater og full respekt for pasientens privatliv. Mange norske pasienter kombinerer sin Londontur med behandlinger hos oss – ofte til lavere priser enn i Norge.",
    motto: "Ekte skjønnhet handler om å forsterke trekkene dine, ikke endre dem.",
  },
  whyChoose: {
    title: "Hvorfor velger norske pasienter Cosmedocs?",
    reasons: ["Leger utfører alle behandlinger", "Siden 2007 på Harley Street", "Over 1 million injeksjoner", "Spesialisert på naturlige resultater", "Ofte billigere enn i Norge", "Streng personvern"],
  },
  philosophy: {
    title: "Vår filosofi: naturlig, aldri overdrevet",
    donts: ["Ingen 'Instagram-ansikter'", "Ingen overfylling", "Ingen standardmaler"],
    dos: ["Forbedrede proporsjoner", "Balansert muskelstyrke", "Lettere, mer raffinert – men fortsatt deg"],
    motto: "Naturlige resultater er ikke et løfte – det er vår daglige standard.",
  },
  haMakeover: {
    title: "Hva er HA Makeover?",
    subtitle: "(Hyaluronsyre-basert ansiktsforyngelse)",
    description: "En helhetlig plan med hyaluronsyre for å gjenopprette balanse, volum og glød – uten å endre trekkene dine.",
    goal: "Målet: Se yngre og friskere ut uten at det synes.",
    ages: [
      { label: "30+", age: "30-årene", items: ["Lett volumtap", "Trøtte øyne", "Tidlige fine linjer"], goal: "Forebygging og bevaring" },
      { label: "40+", age: "40-årene", items: ["Tydelig volumtap", "Lett henging", "Faste linjer"], goal: "Gjenopprette balanse og støtte" },
      { label: "50+", age: "50+ år", items: ["Dypt volumtap", "Endret ansiktsform", "Synlig henging"], goal: "Helhetlig foryngelse, naturlig" },
    ],
  },
  masseter: {
    title: "Masseter Botox (kjeveslanking)",
    intro: "Populært blant skandinaviske pasienter som ønsker en slankere ansiktsform.",
    suitableFor: ["Bred kjeve", "Tanngnissing (bruksisme)", "Ønske om naturlig ansiktsslanking"],
    advantages: ["Kontrollert dosering", "Ingen 'frossen' look", "Slankt men ikke spisst"],
    result: "Resultat: Lettere konturer, mykere linjer – fortsatt naturlig.",
  },
  calfReduction: {
    title: "Leggslanking (Calf Reduction)",
    intro: "Cosmedocs er en av Londons første klinikker som tilbyr leggslanking med Botox.",
    suitableFor: ["Muskuløse legger", "Vil unngå kirurgi", "Ønsker slankere benlinje"],
    features: ["Presis muskelvurdering", "Bevart gangfunksjon", "Gradvis, naturlig fortynning"],
  },
  botox: {
    title: "Botox – på den naturlige måten",
    uses: ["Pannelinjer", "Rynker mellom øyenbrynene", "Kråketær", "Øyenbrynløft"],
    benefits: ["Ingen frysing", "Bevart uttrykk", "Avslappet og friskt utseende"],
  },
  skinTreatments: {
    title: "Hudbehandlinger",
    treatments: ["Profhilo", "Polynukleotider", "Kjemisk peeling", "Microneedling", "PRP"],
  },
  privacy: {
    title: "Personvern og tillit",
    values: ["Privat, rolig miljø", "Direkte kommunikasjon med lege", "Ingen salgspress", "Kulturell respekt"],
    footer: "Konsultasjonen er rolig, medisinsk og helt tilpasset deg.",
  },
  pricing: {
    title: "Priser – London vs Norge",
    intro: "Mange norske pasienter oppdager at London ofte er rimeligere enn hjemme, med høyere ekspertise.",
    comparison: [
      { treatment: "Botox 3 områder", local: "5 000–8 000 NOK", cosmedocs: "£350 (~4 900 NOK)" },
      { treatment: "Masseter Botox", local: "6 000–10 000 NOK", cosmedocs: "£350 (~4 900 NOK)" },
      { treatment: "Calf Reduction", local: "10 000–15 000 NOK", cosmedocs: "£750 (~10 500 NOK)" },
      { treatment: "Lip Filler 1ml", local: "5 000–7 000 NOK", cosmedocs: "£350 (~4 900 NOK)" },
      { treatment: "Nose Filler", local: "6 000–9 000 NOK", cosmedocs: "£450 (~6 300 NOK)" },
    ],
    items: sharedPricingItems,
  },
  treatmentMenu: {
    title: "Behandlingsmeny",
    categories: sharedTreatmentMenu({ botox: "Botox", fillers: "Dermal Fillers", skin: "Hudforyngelse", contouring: "Konturering", medical: "Medisinsk Botox", makeover: "HA Makeover" }),
  },
  aboutUs: {
    title: "Om Cosmedocs",
    points: sharedAboutPoints({ since: "Grunnlagt 2007 på Harley Street", injections: "Over 1 million injeksjoner utført", harley: "10 Harley Street, London W1G 9PF", doctors: "Alle behandlinger utføres av leger", natural: "Filosofi: 'Usynlig kunst' – naturlige resultater", regulated: "Regulert, GMC-registrert klinikk" }),
  },
  gallery: { title: "Ekte pasientresultater", disclaimer: "Resultatene varierer. Bildene er uredigerte og viser ekte behandlingsresultater." },
  cta: {
    title: "Fordi det naturlige er det vakreste",
    details: ["📍 Harley Street, London", "👨‍⚕️ Kun legestyrte behandlinger", "🕰 Siden 2007"],
    motto: "Forandring trenger ikke synes. Skjønnhet er en følelse.",
    buttonText: "Bestill konsultasjon",
  },
  faq: {
    title: "Vanlige spørsmål",
    items: [
      { q: "Tar Cosmedocs imot norske pasienter?", a: "Ja, vi ønsker pasienter fra hele Skandinavia velkommen. Konsultasjoner gjennomføres på engelsk med tydelige forklaringer." },
      { q: "Er det billigere i London?", a: "Ofte ja. Botox 3 områder koster £350 hos oss, sammenlignet med 5 000–8 000 NOK i Norge." },
      { q: "Hva er Masseter Botox?", a: "Masseter Botox slanker ansiktet ved å avspenne kjevemuskelen. Vi vektlegger kontrollert dosering for naturlige resultater." },
      { q: "Tilbyr dere leggslanking?", a: "Ja, vi er en av Londons første klinikker med leggslanking. Behandlingen reduserer leggmuskelen gradvis uten å påvirke gangfunksjonen." },
      { q: "Hva er HA Makeover?", a: "En helhetsløsning med hyaluronsyre som gjenoppretter volum, struktur og hudkvalitet – uten å endre trekkene dine." },
      { q: "Hvordan bestiller jeg?", a: "Du kan bestille via kontaktsiden vår eller bruke AI-assistenten på nettsiden for å utforske behandlingsalternativer." },
    ],
  },
  disclaimer: "Denne siden er laget med AI-assistanse. Vi anbefaler at du konsulterer våre spesialistleger for mest nøyaktig informasjon.",
  seoText: "Cosmedocs estetisk klinikk Harley Street London for norske pasienter siden 2007. Botox, dermal fillers, masseter botox kjeveslanking, leggslanking calf reduction, HA Makeover ansiktsforyngelse. Over 1 million injeksjoner. Legestyrt estetisk medisin med naturlige resultater.",
  keywords: "estetisk klinikk london, norske pasienter london, botox london, masseter botox, leggslanking, calf reduction, HA makeover, leppefiller london, Harley Street",
};
