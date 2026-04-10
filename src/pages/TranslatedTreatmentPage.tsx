import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage, useTranslation } from '@/i18n/LanguageContext';
import { getLocalisedPath, generateHreflangLinks, getCanonicalUrl } from '@/i18n/config';
import type { Tier1PageKey } from '@/i18n/types';
import { ArrowRight } from 'lucide-react';

/**
 * Generic translated treatment page that displays localised content
 * from the translation files. For Tier 1 treatment pages.
 */
export default function TranslatedTreatmentPage({ pageKey }: { pageKey: Tier1PageKey }) {
  const { language, isRTL, translations } = useLanguage();
  const { page, common } = useTranslation(pageKey);
  const hreflangLinks = generateHreflangLinks(pageKey);
  const canonical = getCanonicalUrl(language, pageKey);

  const content = page?.content as Record<string, unknown> | undefined;
  const title = (content?.title as string) || pageKey;
  const subtitle = (content?.subtitle as string) || '';
  const whatIs = (content?.whatIs as string) || '';
  const whatIsText = (content?.whatIsText as string) || '';
  const areas = (content?.areas as string[]) || [];
  const benefits = (content?.benefits as string[]) || [];

  return (
    <>
      <Helmet>
        <title>{page?.meta.title || 'CosmeDocs'}</title>
        <meta name="description" content={page?.meta.description || ''} data-rh="true" />
        {page?.meta.keywords && <meta name="keywords" content={page.meta.keywords} data-rh="true" />}
        <link rel="canonical" href={canonical} data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
        {hreflangLinks.map(link => (
          <link key={link.hreflang} rel="alternate" hrefLang={link.hreflang} href={link.href} data-rh="true" />
        ))}
      </Helmet>

      <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen">
        {/* Hero */}
        <section className="py-16 md:py-24 px-4 text-center bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
            {subtitle && <p className="text-lg text-white/60 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        </section>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-12">
          {/* What Is Section */}
          {whatIs && (
            <section>
              <h2 className="text-2xl font-bold mb-4">{whatIs}</h2>
              <p className="text-muted-foreground leading-relaxed">{whatIsText}</p>
            </section>
          )}

          {/* Treatment Areas */}
          {areas.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">{common?.navigation.treatments || 'Treatment Areas'}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {areas.map((area, i) => (
                  <div key={i} className="p-3 rounded-lg bg-muted/50 text-sm text-center">{area}</div>
                ))}
              </div>
            </section>
          )}

          {/* Benefits */}
          {benefits.length > 0 && (
            <section>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    <span className="text-[#C9A050]">✓</span>
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="text-center py-8 border-t border-border">
            <Link
              to={getLocalisedPath(language, 'contact')}
              className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#B8903F] font-semibold transition-colors"
            >
              {common?.cta.bookNow || 'Book Now'} <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
