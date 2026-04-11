import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ORGANIZATION_SCHEMA } from '@/utils/schemaMarkup';
import AboutHero from '@/components/about/AboutHero';
import AboutValues from '@/components/about/AboutValues';
import AboutTeam from '@/components/about/AboutTeam';
import AboutHolisticApproach from '@/components/about/AboutHolisticApproach';
import AboutBrands from '@/components/about/AboutBrands';
import AboutTrustSignals from '@/components/about/AboutTrustSignals';
import AboutCTA from '@/components/about/AboutCTA';

const AboutUsArabic = () => {
  const canonicalUrl = 'https://www.cosmedocs.com/ar/about-us/';

  return (
    <>
      <Helmet>
        <title>عن كوزميدوكس | أطباء هارلي ستريت منذ ٢٠٠٧</title>
        <meta name="description" content="تعرف على فريق كوزميدوكس — أطباء مسجلون في GMC في هارلي ستريت مع أكثر من مليون حقنة منذ ٢٠٠٧. طب تجميلي بقيادة أطباء متخصصين." />
        <link rel="canonical" href={canonicalUrl} data-rh="true" />
        <meta property="og:title" content="عن كوزميدوكس | هارلي ستريت" />
        <meta property="og:description" content="أطباء مسجلون في GMC مع أكثر من مليون حقنة منذ ٢٠٠٧" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/about-us/" />
        <link rel="alternate" hrefLang="ar" href={canonicalUrl} />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/a-propos/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/sobre-nosotros/" />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/about-us/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/about-us/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { ...ORGANIZATION_SCHEMA, "@type": "MedicalBusiness", foundingDate: "2007", description: "عيادة تجميل بوتيكية في هارلي ستريت تأسست عام ٢٠٠٧. أطباء مسجلون في GMC أجروا أكثر من مليون حقنة." },
              { "@type": "AboutPage", "@id": canonicalUrl, url: canonicalUrl, name: "عن كوزميدوكس", isPartOf: { "@id": "https://www.cosmedocs.com/" } },
              { "@type": "BreadcrumbList", itemListElement: [
                { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://www.cosmedocs.com/ar/" },
                { "@type": "ListItem", position: 2, name: "عن العيادة", item: canonicalUrl }
              ]}
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <motion.div className="absolute w-[600px] h-[600px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #C9A050 0%, transparent 70%)', filter: 'blur(80px)' }} animate={{ x: ['-10%','5%','-10%'], y: ['10%','25%','10%'] }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }} />
        </div>
        <div className="relative z-10">
          <AboutHero />
          <AboutValues />
          <AboutTeam />
          <AboutHolisticApproach />
          <AboutBrands />
          <AboutTrustSignals />
          <AboutCTA />
        </div>
      </div>
    </>
  );
};

export default AboutUsArabic;
