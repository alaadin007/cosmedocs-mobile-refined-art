// Shared data structure for all international patient landing pages

export interface PatientPageData {
  lang: string;
  dir?: "ltr" | "rtl";
  slug: string;
  hero: {
    badge: string;
    h1: string;
    subtitle: string;
    tagline: string;
  };
  welcome: {
    title: string;
    text: string;
    motto: string;
  };
  whyChoose: {
    title: string;
    reasons: string[];
    footer?: string;
  };
  philosophy: {
    title: string;
    donts: string[];
    dos: string[];
    motto: string;
  };
  haMakeover: {
    title: string;
    subtitle?: string;
    description: string;
    goal: string;
    ages: {
      label: string;
      age: string;
      items: string[];
      goal: string;
    }[];
  };
  masseter?: {
    title: string;
    intro: string;
    suitableFor: string[];
    advantages: string[];
    result: string;
  };
  calfReduction?: {
    title: string;
    intro: string;
    suitableFor: string[];
    features: string[];
  };
  botox: {
    title: string;
    uses: string[];
    benefits: string[];
  };
  skinTreatments: {
    title: string;
    considerations?: string[];
    treatments: string[];
  };
  privacy: {
    title: string;
    values: string[];
    footer: string;
  };
  pricing: {
    title: string;
    intro: string;
    comparison?: { treatment: string; local: string; cosmedocs: string }[];
    items: { name: string; price: string }[];
  };
  treatmentMenu: {
    title: string;
    categories: { name: string; items: string[]; link: string }[];
  };
  aboutUs: {
    title: string;
    points: string[];
  };
  gallery: {
    title: string;
    disclaimer: string;
  };
  cta: {
    title: string;
    details: string[];
    motto: string;
    buttonText: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  disclaimer: string;
  seoText: string;
  keywords: string;
}
