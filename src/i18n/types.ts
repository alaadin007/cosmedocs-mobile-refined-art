// Types for the multilingual translation system

export type SupportedLanguage = 'en' | 'ar' | 'fr' | 'es' | 'zh';

export interface LanguageConfig {
  code: SupportedLanguage;
  name: string; // Native name
  nameEnglish: string;
  dir: 'ltr' | 'rtl';
  hreflang: string; // e.g. 'en-gb', 'ar', 'fr', 'es'
}

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
}

export interface PageTranslation {
  meta: PageMeta;
  slug: string; // The localised slug segment (e.g. 'traitements' for French treatments)
  lastSyncedVersion?: string; // ISO date of last sync with English master
  content: Record<string, unknown>; // Page-specific structured content
}

export interface NavigationTranslation {
  home: string;
  treatments: string;
  prices: string;
  about: string;
  contact: string;
  blog: string;
  beforeAfter: string;
  bookAppointment: string;
  askAnything: string;
  search: string;
  menu: string;
}

export interface CommonTranslation {
  navigation: NavigationTranslation;
  footer: {
    followUs: string;
    quickLinks: string;
    treatments: string;
    company: string;
    copyright: string;
  };
  cta: {
    bookNow: string;
    learnMore: string;
    viewGallery: string;
    contactUs: string;
    callUs: string;
    whatsapp: string;
    email: string;
  };
  breadcrumb: {
    home: string;
  };
}

// Tier 1 page keys
export type Tier1PageKey =
  | 'homepage'
  | 'treatments'
  | 'botox'
  | 'dermalFillers'
  | 'lipFillers'
  | 'jawlineFiller'
  | 'chinFiller'
  | 'tearTroughFiller'
  | 'skinRejuvenation'
  | 'prices'
  | 'contact'
  | 'about';

export interface LanguageTranslations {
  common: CommonTranslation;
  pages: Partial<Record<Tier1PageKey, PageTranslation>>;
}
