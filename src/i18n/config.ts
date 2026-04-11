import type { SupportedLanguage, LanguageConfig, Tier1PageKey } from './types';

export const SUPPORTED_LANGUAGES: Record<SupportedLanguage, LanguageConfig> = {
  en: { code: 'en', name: 'English', nameEnglish: 'English', dir: 'ltr', hreflang: 'en-gb' },
  ar: { code: 'ar', name: 'العربية', nameEnglish: 'Arabic', dir: 'rtl', hreflang: 'ar' },
  fr: { code: 'fr', name: 'Français', nameEnglish: 'French', dir: 'ltr', hreflang: 'fr' },
  es: { code: 'es', name: 'Español', nameEnglish: 'Spanish', dir: 'ltr', hreflang: 'es' },
  zh: { code: 'zh', name: '中文', nameEnglish: 'Chinese', dir: 'ltr', hreflang: 'zh' },
};

export const DEFAULT_LANGUAGE: SupportedLanguage = 'en';

export const BASE_URL = 'https://www.cosmedocs.com';

// Slug mappings: English slug → localised slug per language
// English paths are canonical; other languages get translated slugs
export const SLUG_MAP: Record<SupportedLanguage, Record<string, string>> = {
  en: {
    treatments: 'treatments',
    botox: 'botox',
    'dermal-fillers': 'dermal-fillers',
    'lip-fillers': 'lip-fillers',
    'jawline-filler': 'jawline-filler',
    'chin-filler': 'chin-filler',
    'tear-trough-filler': 'tear-trough-filler',
    'skin-rejuvenation': 'skin-rejuvenation',
    prices: 'prices',
    contact: 'contact',
    'about-us': 'about-us',
  },
  ar: {
    treatments: 'treatments',
    botox: 'botox',
    'dermal-fillers': 'dermal-fillers',
    'lip-fillers': 'lip-fillers',
    'jawline-filler': 'jawline-filler',
    'chin-filler': 'chin-filler',
    'tear-trough-filler': 'tear-trough-filler',
    'skin-rejuvenation': 'skin-rejuvenation',
    prices: 'prices',
    contact: 'contact',
    'about-us': 'about-us',
  },
  fr: {
    treatments: 'traitements',
    botox: 'botox',
    'dermal-fillers': 'acide-hyaluronique',
    'lip-fillers': 'injection-levres',
    'jawline-filler': 'filler-machoire',
    'chin-filler': 'filler-menton',
    'tear-trough-filler': 'cernes-creuses',
    'skin-rejuvenation': 'rajeunissement-peau',
    prices: 'tarifs',
    contact: 'contact',
    'about-us': 'a-propos',
  },
  es: {
    treatments: 'tratamientos',
    botox: 'botox',
    'dermal-fillers': 'acido-hialuronico',
    'lip-fillers': 'relleno-labios',
    'jawline-filler': 'relleno-mandibula',
    'chin-filler': 'relleno-menton',
    'tear-trough-filler': 'ojeras',
    'skin-rejuvenation': 'rejuvenecimiento-piel',
    prices: 'precios',
    contact: 'contacto',
    'about-us': 'sobre-nosotros',
  },
  zh: {
    treatments: 'treatments',
    botox: 'botox',
    'dermal-fillers': 'dermal-fillers',
    'lip-fillers': 'lip-fillers',
    'jawline-filler': 'jawline-filler',
    'chin-filler': 'chin-filler',
    'tear-trough-filler': 'tear-trough-filler',
    'skin-rejuvenation': 'skin-rejuvenation',
    prices: 'prices',
    contact: 'contact',
    'about-us': 'about-us',
  },
};

// Map page keys to their English route paths (without lang prefix)
export const PAGE_KEY_TO_PATH: Record<Tier1PageKey, string> = {
  homepage: '',
  treatments: 'treatments',
  botox: 'treatments/botox',
  dermalFillers: 'treatments/dermal-fillers',
  lipFillers: 'treatments/lip-fillers',
  jawlineFiller: 'treatments/jawline-filler',
  chinFiller: 'treatments/chin-filler',
  tearTroughFiller: 'treatments/tear-trough-filler',
  skinRejuvenation: 'treatments/skin-rejuvenation',
  prices: 'prices',
  contact: 'contact',
  about: 'about-us',
};

// Reverse: map localised slug back to English slug for a given language
export function resolveEnglishSlug(lang: SupportedLanguage, localisedSlug: string): string | undefined {
  const map = SLUG_MAP[lang];
  for (const [enSlug, localSlug] of Object.entries(map)) {
    if (localSlug === localisedSlug) return enSlug;
  }
  return undefined;
}

// Build a localised path for a page key
export function getLocalisedPath(lang: SupportedLanguage, pageKey: Tier1PageKey): string {
  const enPath = PAGE_KEY_TO_PATH[pageKey];
  if (!enPath) return lang === 'en' ? '/' : `/${lang}/`;

  const slugMap = SLUG_MAP[lang];
  const segments = enPath.split('/');
  const localisedSegments = segments.map(seg => slugMap[seg] || seg);
  const path = localisedSegments.join('/');

  return lang === 'en' ? `/${path}/` : `/${lang}/${path}/`;
}

// Build full canonical URL
export function getCanonicalUrl(lang: SupportedLanguage, pageKey: Tier1PageKey): string {
  return `${BASE_URL}${getLocalisedPath(lang, pageKey)}`;
}

// Generate hreflang links for a page
export function generateHreflangLinks(pageKey: Tier1PageKey, availableLanguages: SupportedLanguage[] = ['en', 'ar', 'fr', 'es', 'zh']): Array<{ hreflang: string; href: string }> {
  const links = availableLanguages.map(lang => ({
    hreflang: SUPPORTED_LANGUAGES[lang].hreflang,
    href: getCanonicalUrl(lang, pageKey),
  }));

  // Add x-default pointing to English
  links.push({
    hreflang: 'x-default',
    href: getCanonicalUrl('en', pageKey),
  });

  return links;
}
