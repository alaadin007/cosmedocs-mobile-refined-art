import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ORGANIZATION_SCHEMA } from '@/utils/schemaMarkup';
import AboutHero from '@/components/about/AboutHero';
import AboutValues from '@/components/about/AboutValues';
import AboutTeam from '@/components/about/AboutTeam';
import AboutHolisticApproach from '@/components/about/AboutHolisticApproach';
import AboutBrands from '@/components/about/AboutBrands';
import AboutTrustSignals from '@/components/about/AboutTrustSignals';
import AboutHospitalAffiliations from '@/components/about/AboutHospitalAffiliations';
import AboutCTA from '@/components/about/AboutCTA';

const AboutUsSpanish = () => {
  const canonicalUrl = 'https://www.cosmedocs.com/es/sobre-nosotros/';

  return (
    <>
      <Helmet>
        <title>Sobre Cosmedocs | Médicos Harley Street Desde 2007</title>
        <meta name="description" content="Conozca al equipo Cosmedocs — médicos registrados en el GMC en Harley Street con más de 1M de inyecciones desde 2007. Medicina estética dirigida por médicos." />
        <link rel="canonical" href={canonicalUrl} data-rh="true" />
        <meta property="og:title" content="Sobre Nosotros | Cosmedocs" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/about-us/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/about-us/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/a-propos/" />
        <link rel="alternate" hrefLang="es" href={canonicalUrl} />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/about-us/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/about-us/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { ...ORGANIZATION_SCHEMA, "@type": "MedicalBusiness", foundingDate: "2007", description: "Clínica estética boutique en Harley Street fundada en 2007. Médicos registrados en el GMC con más de 1M de inyecciones realizadas." },
              { "@type": "AboutPage", "@id": canonicalUrl, url: canonicalUrl, name: "Sobre Cosmedocs" },
              { "@type": "BreadcrumbList", itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.cosmedocs.com/es/" },
                { "@type": "ListItem", position: 2, name: "Sobre Nosotros", item: canonicalUrl }
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
          <AboutHospitalAffiliations />
          <AboutCTA />
        </div>
      </div>
    </>
  );
};

export default AboutUsSpanish;
