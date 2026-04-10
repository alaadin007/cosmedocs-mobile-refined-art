import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
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
