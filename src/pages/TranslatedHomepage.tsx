import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage, useTranslation } from '@/i18n/LanguageContext';
import { getLocalisedPath, generateHreflangLinks, getCanonicalUrl } from '@/i18n/config';
import type { Tier1PageKey } from '@/i18n/types';
import { ArrowRight, Shield, Award, Users, Star, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const treatmentKeys: { key: Tier1PageKey; icon: string }[] = [
  { key: 'botox', icon: '💉' },
  { key: 'dermalFillers', icon: '✨' },
  { key: 'lipFillers', icon: '👄' },
  { key: 'jawlineFiller', icon: '🔷' },
  { key: 'chinFiller', icon: '◆' },
  { key: 'tearTroughFiller', icon: '👁' },
  { key: 'skinRejuvenation', icon: '🌟' },
];

export default function TranslatedHomepage() {
  const { language, isRTL, translations } = useLanguage();
  const { page, common } = useTranslation('homepage');
  const hreflangLinks = generateHreflangLinks('homepage');
  const canonical = getCanonicalUrl(language, 'homepage');

  const content = page?.content as Record<string, unknown> | undefined;

  const heroTitle = (content?.heroTitle as string) || 'CosmeDocs';
  const heroSubtitle = (content?.heroSubtitle as string) || '';
  const heroTagline = (content?.heroTagline as string) || '';
  const welcomeTitle = (content?.welcomeTitle as string) || '';
  const welcomeText = (content?.welcomeText as string) || '';
  const welcomeMotto = (content?.welcomeMotto as string) || '';
  const whyChooseTitle = (content?.whyChooseTitle as string) || '';
  const whyChooseReasons = (content?.whyChooseReasons as string[]) || [];

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

      <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/10">
              <span className="text-sm text-[#C9A050]">Cosmedocs · Harley Street · London</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-4 max-w-2xl mx-auto">
              {heroSubtitle}
            </p>
            <p className="text-sm text-[#C9A050] italic mb-10">
              {heroTagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-[#C9A050] hover:bg-[#B8903F] text-black font-semibold px-8 py-3 rounded-full"
              >
                <a href="https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29" target="_blank" rel="noopener">
                  {common?.cta.bookNow || 'Book Now'}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full"
              >
                <Link to={getLocalisedPath(language, 'treatments')}>
                  {common?.navigation.treatments || 'Treatments'} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        {welcomeTitle && (
          <section className="py-16 md:py-24 px-4 bg-white/[0.02]">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#C9A050]">
                {welcomeTitle}
              </h2>
              <p className="text-white/70 leading-relaxed mb-6 text-base md:text-lg">
                {welcomeText}
              </p>
              {welcomeMotto && (
                <p className="text-[#C9A050] italic text-lg">
                  "{welcomeMotto}"
                </p>
              )}
            </div>
          </section>
        )}

        {/* Trust Signals */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, label: 'GMC Registered', value: '2007' },
              { icon: Award, label: 'Harley Street', value: '8-10' },
              { icon: Users, label: 'Injections', value: '1M+' },
              { icon: Star, label: 'Doctor-Led', value: '100%' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <item.icon className="h-6 w-6 text-[#C9A050] mx-auto mb-2" />
                <p className="text-xl font-bold text-white">{item.value}</p>
                <p className="text-xs text-white/50 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        {whyChooseTitle && whyChooseReasons.length > 0 && (
          <section className="py-16 md:py-24 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
                {whyChooseTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChooseReasons.map((reason, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="w-6 h-6 rounded-full bg-[#C9A050]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#C9A050] text-xs">✓</span>
                    </div>
                    <p className="text-white/80 text-sm">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Treatment Quick Links */}
        <section className="py-16 md:py-24 px-4 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
              {common?.navigation.treatments || 'Treatments'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {treatmentKeys.map(({ key, icon }) => {
                const t = translations?.pages[key];
                if (!t) return null;
                const treatmentContent = t.content as Record<string, string> | undefined;
                return (
                  <Link
                    key={key}
                    to={getLocalisedPath(language, key)}
                    className="group p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#C9A050]/30 hover:bg-white/[0.05] transition-all"
                  >
                    <span className="text-2xl mb-3 block">{icon}</span>
                    <h3 className="text-white font-semibold mb-1 group-hover:text-[#C9A050] transition-colors">
                      {treatmentContent?.title || key}
                    </h3>
                    <p className="text-xs text-white/40">{treatmentContent?.subtitle || ''}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section className="py-16 md:py-24 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {common?.cta.contactUs || 'Contact Us'}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="h-4 w-4 text-[#C9A050]" />
                <span className="text-sm">8-10 Harley Street, London W1G 9PF</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Phone className="h-4 w-4 text-[#C9A050]" />
                <a href="tel:+443330551503" className="text-sm hover:text-white transition-colors">+44 333 055 1503</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-[#C9A050] hover:bg-[#B8903F] text-black font-semibold px-8 py-3 rounded-full"
              >
                <a href="https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29" target="_blank" rel="noopener">
                  {common?.cta.bookNow || 'Book Now'}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full"
              >
                <Link to={getLocalisedPath(language, 'contact')}>
                  {common?.cta.contactUs || 'Contact Us'}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Motto */}
        <section className="py-12 px-4 border-t border-white/5 text-center">
          <p className="text-sm text-white/30 italic max-w-md mx-auto">
            Our aesthetics is invisible art. Bold · Natural · Always Your Way.
          </p>
        </section>
      </div>
    </>
  );
}
