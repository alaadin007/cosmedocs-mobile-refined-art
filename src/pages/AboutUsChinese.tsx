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

const AboutUsChinese = () => {
  const canonicalUrl = 'https://www.cosmedocs.com/zh/about-us/';

  return (
    <>
      <Helmet>
        <title>关于Cosmedocs | 哈利街医生 自2007年起</title>
        <meta name="description" content="了解Cosmedocs团队——自2007年以来在哈利街注册的GMC医生，已完成超过100万次注射。由医生主导的医美诊所。" />
        <link rel="canonical" href={canonicalUrl} data-rh="true" />
        <meta property="og:title" content="关于我们 | Cosmedocs" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/about-us/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/about-us/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/a-propos/" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/sobre-nosotros/" />
        <link rel="alternate" hrefLang="zh" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/about-us/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { ...ORGANIZATION_SCHEMA, "@type": "MedicalBusiness", foundingDate: "2007", description: "哈利街精品医美诊所，成立于2007年。GMC注册医生，已完成超过100万次注射。" },
              { "@type": "AboutPage", "@id": canonicalUrl, url: canonicalUrl, name: "关于Cosmedocs" },
              { "@type": "BreadcrumbList", itemListElement: [
                { "@type": "ListItem", position: 1, name: "首页", item: "https://www.cosmedocs.com/zh/" },
                { "@type": "ListItem", position: 2, name: "关于我们", item: canonicalUrl }
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

export default AboutUsChinese;
