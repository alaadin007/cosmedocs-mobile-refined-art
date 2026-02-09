import type { PatientPageData } from './internationalPageTypes';
import { sharedPricingItems, sharedTreatmentMenu, sharedAboutPoints } from './swedishPatientData';

export const frenchData: PatientPageData = {
  lang: "fr",
  slug: "french-patients",
  hero: {
    badge: "Cosmedocs · Harley Street · Londres",
    h1: "Clinique esthétique à Londres pour patients francophones",
    subtitle: "Médecine esthétique dirigée par des médecins – résultats naturels depuis 2007",
    tagline: "Votre destination pour des soins esthétiques sûrs et naturels à Londres",
  },
  welcome: {
    title: "Bienvenue chez Cosmedocs",
    text: "Cosmedocs est situé sur la célèbre Harley Street à Londres et accueille depuis 2007 des patients francophones de France, Belgique, Suisse et du monde entier. Nous sommes reconnus pour notre précision médicale, nos résultats naturels et le respect total de la vie privée de nos patients. De nombreux patients français combinent leur voyage à Londres avec des traitements chez nous – souvent à des prix inférieurs à ceux pratiqués en France.",
    motto: "La vraie beauté, c'est sublimer vos traits, pas les changer.",
  },
  whyChoose: {
    title: "Pourquoi les patients francophones choisissent Cosmedocs ?",
    reasons: ["Médecins effectuent tous les traitements", "Depuis 2007 à Harley Street", "Plus d'1 million d'injections", "Spécialisés en résultats naturels", "Souvent moins cher qu'en France", "Protection stricte de la vie privée"],
  },
  philosophy: {
    title: "Notre philosophie : naturel, jamais exagéré",
    donts: ["Pas de visages 'Instagram'", "Pas de sur-remplissage", "Pas de modèles standardisés"],
    dos: ["Proportions améliorées", "Force musculaire équilibrée", "Plus léger, plus raffiné – mais toujours vous"],
    motto: "Les résultats naturels ne sont pas une promesse – c'est notre standard quotidien.",
  },
  haMakeover: {
    title: "Qu'est-ce que le HA Makeover ?",
    subtitle: "(Rajeunissement facial à base d'acide hyaluronique)",
    description: "Un plan de traitement global à l'acide hyaluronique pour restaurer l'équilibre, le volume et l'éclat – sans changer vos traits.",
    goal: "Objectif : Paraître plus jeune et plus frais sans que cela se voie.",
    ages: [
      { label: "30+", age: "La trentaine", items: ["Légère perte de volume", "Yeux fatigués", "Premières rides fines"], goal: "Prévention et préservation" },
      { label: "40+", age: "La quarantaine", items: ["Perte de volume visible", "Léger relâchement", "Rides installées"], goal: "Restaurer l'équilibre et le soutien" },
      { label: "50+", age: "50 ans et plus", items: ["Perte de volume profonde", "Forme du visage changée", "Relâchement visible"], goal: "Rajeunissement global, naturellement" },
    ],
  },
  masseter: {
    title: "Botox Masséter (affinement de la mâchoire)",
    intro: "Populaire auprès des patients souhaitant un visage plus fin.",
    suitableFor: ["Mâchoire large", "Bruxisme (grincement des dents)", "Souhait d'affinement naturel du visage"],
    advantages: ["Dosage contrôlé", "Pas d'aspect 'figé'", "Fin mais pas pointu"],
    result: "Résultat : Contours plus légers, lignes plus douces – toujours naturel.",
  },
  calfReduction: {
    title: "Affinement des mollets (Calf Reduction)",
    intro: "Cosmedocs est l'une des premières cliniques londoniennes à proposer l'affinement des mollets au Botox.",
    suitableFor: ["Mollets musculeux", "Pas de chirurgie souhaitée", "Désir de jambes plus fines"],
    features: ["Évaluation musculaire précise", "Marche préservée", "Affinement progressif et naturel"],
  },
  botox: {
    title: "Botox – de manière naturelle",
    uses: ["Rides du front", "Rides du lion", "Pattes d'oie", "Lifting des sourcils"],
    benefits: ["Pas de gel", "Expression préservée", "Aspect détendu et frais"],
  },
  skinTreatments: {
    title: "Soins de la peau",
    treatments: ["Profhilo", "Polynucléotides", "Peeling chimique", "Microneedling", "PRP"],
  },
  privacy: {
    title: "Confidentialité et confiance",
    values: ["Environnement privé et calme", "Communication directe avec le médecin", "Aucune pression commerciale", "Respect culturel"],
    footer: "La consultation est calme, médicale et entièrement personnalisée.",
  },
  pricing: {
    title: "Prix – Londres vs France",
    intro: "De nombreux patients français découvrent que les prix londoniens sont souvent inférieurs, avec une expertise supérieure.",
    comparison: [
      { treatment: "Botox 3 zones", local: "400–600 €", cosmedocs: "£350 (~410 €)" },
      { treatment: "Botox Masséter", local: "400–700 €", cosmedocs: "£350 (~410 €)" },
      { treatment: "Calf Reduction", local: "800–1 200 €", cosmedocs: "£750 (~880 €)" },
      { treatment: "Lip Filler 1ml", local: "350–500 €", cosmedocs: "£350 (~410 €)" },
      { treatment: "Filler Nez", local: "500–800 €", cosmedocs: "£450 (~530 €)" },
    ],
    items: sharedPricingItems,
  },
  treatmentMenu: {
    title: "Menu des traitements",
    categories: sharedTreatmentMenu({ botox: "Botox", fillers: "Acide hyaluronique", skin: "Rajeunissement cutané", contouring: "Remodelage", medical: "Botox médical", makeover: "HA Makeover" }),
  },
  aboutUs: {
    title: "À propos de Cosmedocs",
    points: sharedAboutPoints({ since: "Fondé en 2007 à Harley Street", injections: "Plus d'1 million d'injections réalisées", harley: "10 Harley Street, London W1G 9PF", doctors: "Tous les traitements effectués par des médecins", natural: "Philosophie : 'L'art invisible' – résultats naturels", regulated: "Clinique réglementée, enregistrée au GMC" }),
  },
  gallery: { title: "Résultats réels de patients", disclaimer: "Les résultats varient. Les images sont non retouchées et montrent des résultats réels." },
  cta: {
    title: "Parce que le naturel est le plus beau",
    details: ["📍 Harley Street, Londres", "👨‍⚕️ Traitements exclusivement dirigés par des médecins", "🕰 Depuis 2007"],
    motto: "Le changement n'a pas besoin d'être visible. La beauté est un ressenti.",
    buttonText: "Réserver une consultation",
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      { q: "Cosmedocs accueille-t-il des patients francophones ?", a: "Oui, nous accueillons des patients de France, Belgique et Suisse. Les consultations se font en anglais avec des explications claires." },
      { q: "Est-ce moins cher à Londres ?", a: "Souvent oui. Le Botox 3 zones coûte £350 chez nous, contre 400–600 € en France." },
      { q: "Qu'est-ce que le Botox Masséter ?", a: "Le Botox Masséter affine le visage en relâchant le muscle de la mâchoire. Nous privilégions un dosage contrôlé pour des résultats naturels." },
      { q: "Proposez-vous l'affinement des mollets ?", a: "Oui, nous sommes parmi les premières cliniques londoniennes. Le traitement réduit progressivement le muscle du mollet sans affecter la marche." },
      { q: "Qu'est-ce que le HA Makeover ?", a: "Une solution globale à l'acide hyaluronique qui restaure le volume, la structure et la qualité de la peau." },
      { q: "Comment réserver ?", a: "Vous pouvez réserver via notre page de contact ou utiliser notre assistant IA sur le site." },
    ],
  },
  disclaimer: "Cette page a été créée avec l'assistance de l'IA. Nous recommandons de consulter nos médecins spécialistes pour les informations les plus précises.",
  seoText: "Cosmedocs clinique esthétique Harley Street Londres pour patients francophones depuis 2007. Botox, acide hyaluronique, botox masséter affinement mâchoire, affinement mollets calf reduction, HA Makeover rajeunissement facial. Plus d'1 million d'injections. Médecine esthétique dirigée par des médecins avec résultats naturels.",
  keywords: "clinique esthétique londres, patients français londres, botox londres, botox masséter, affinement mollets, calf reduction, HA makeover, filler lèvres londres, Harley Street, botox paris londres",
};
