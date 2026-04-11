import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import type { SupportedLanguage, LanguageTranslations, CommonTranslation, PageTranslation, Tier1PageKey } from './types';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './config';

interface LanguageContextValue {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
  translations: LanguageTranslations | null;
  getPageTranslation: (pageKey: Tier1PageKey) => PageTranslation | undefined;
  common: CommonTranslation | null;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

// Lazy-load translation bundles
const translationLoaders: Record<SupportedLanguage, () => Promise<{ default: LanguageTranslations }>> = {
  en: () => import('./translations/en/index'),
  ar: () => import('./translations/ar/index'),
  fr: () => import('./translations/fr/index'),
  es: () => import('./translations/es/index'),
  zh: () => import('./translations/zh/index'),
};

function detectLanguageFromPath(pathname: string): SupportedLanguage {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first && first in SUPPORTED_LANGUAGES && first !== 'en') {
    return first as SupportedLanguage;
  }
  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const pathLang = detectLanguageFromPath(location.pathname);
  const [language, setLanguageState] = useState<SupportedLanguage>(pathLang);
  const [translations, setTranslations] = useState<LanguageTranslations | null>(null);

  const setLanguage = useCallback((lang: SupportedLanguage) => {
    setLanguageState(lang);
    localStorage.setItem('cosmedocs-lang', lang);
  }, []);

  // Sync language from URL path changes
  useEffect(() => {
    const detected = detectLanguageFromPath(location.pathname);
    if (detected !== language) {
      setLanguageState(detected);
    }
  }, [location.pathname]);

  // Load translations when language changes
  useEffect(() => {
    let cancelled = false;
    translationLoaders[language]().then(mod => {
      if (!cancelled) setTranslations(mod.default);
    });
    return () => { cancelled = true; };
  }, [language]);

  // Set HTML dir and lang attributes
  useEffect(() => {
    const config = SUPPORTED_LANGUAGES[language];
    document.documentElement.lang = config.hreflang;
    document.documentElement.dir = config.dir;
  }, [language]);

  const config = SUPPORTED_LANGUAGES[language];

  const getPageTranslation = useCallback((pageKey: Tier1PageKey) => {
    return translations?.pages[pageKey];
  }, [translations]);

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      dir: config.dir,
      isRTL: config.dir === 'rtl',
      translations,
      getPageTranslation,
      common: translations?.common ?? null,
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export function useTranslation(pageKey: Tier1PageKey) {
  const { getPageTranslation, common, language, isRTL } = useLanguage();
  return {
    page: getPageTranslation(pageKey),
    common,
    language,
    isRTL,
  };
}

/**
 * useT — deep translation accessor with English fallback.
 * Usage:
 *   const t = useT('contact');
 *   t('hero.title')           → returns translated string or English fallback
 *   t('hero.title', 'Default') → returns translated string or 'Default'
 */
export function useT(pageKey: Tier1PageKey) {
  const { translations, language } = useLanguage();

  // Load English as fallback synchronously (it's tiny and always loaded)
  const enTranslations = useRef<LanguageTranslations | null>(null);
  useEffect(() => {
    if (language !== 'en') {
      import('./translations/en/index').then(m => { enTranslations.current = m.default; });
    }
  }, [language]);

  const t = useCallback((key: string, fallback?: string): string => {
    // Try current language first — check content, then full page object (for meta.*)
    const currentPage = translations?.pages[pageKey];
    let val = getNestedValue(currentPage?.content, key);
    if (typeof val === 'string') return val;
    val = getNestedValue(currentPage, key);
    if (typeof val === 'string') return val;

    // Try English fallback
    const enPage = language === 'en' ? currentPage : enTranslations.current?.pages[pageKey];
    let enVal = getNestedValue(enPage?.content, key);
    if (typeof enVal === 'string') return enVal;
    enVal = getNestedValue(enPage, key);
    if (typeof enVal === 'string') return enVal;

    return fallback ?? key;
  }, [translations, pageKey, language]);

  return t;
}

function getNestedValue(obj: unknown, path: string): unknown {
  if (!obj || typeof obj !== 'object') return undefined;
  const keys = path.split('.');
  let current: unknown = obj;
  for (const k of keys) {
    if (current === null || current === undefined || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[k];
  }
  return current;
}
