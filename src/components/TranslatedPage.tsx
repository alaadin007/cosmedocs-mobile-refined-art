import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/i18n/LanguageContext';
import { generateHreflangLinks } from '@/i18n/config';
import type { Tier1PageKey } from '@/i18n/types';

interface TranslatedPageProps {
  pageKey: Tier1PageKey;
  children: ReactNode;
  /** Override meta if the page component handles its own Helmet */
  skipMeta?: boolean;
}

/**
 * Wrapper component that injects hreflang tags and translated metadata
 * for any Tier 1 page rendered in a non-English language context.
 */
export default function TranslatedPage({ pageKey, children, skipMeta = false }: TranslatedPageProps) {
  const { language, translations, isRTL } = useLanguage();
  const pageTranslation = translations?.pages[pageKey];
  const hreflangLinks = generateHreflangLinks(pageKey);

  return (
    <>
      <Helmet>
        {/* Hreflang tags for all languages */}
        {hreflangLinks.map(link => (
          <link
            key={link.hreflang}
            rel="alternate"
            hrefLang={link.hreflang}
            href={link.href}
            data-rh="true"
          />
        ))}

        {/* Translated meta if available and not skipped */}
        {!skipMeta && pageTranslation?.meta && (
          <>
            <title>{pageTranslation.meta.title}</title>
            <meta name="description" content={pageTranslation.meta.description} data-rh="true" />
            {pageTranslation.meta.keywords && (
              <meta name="keywords" content={pageTranslation.meta.keywords} data-rh="true" />
            )}
          </>
        )}
      </Helmet>

      <div dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </>
  );
}
