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

const canonical = 'https://www.cosmedocs.com/ja/about-us/';

export default function AboutUsJapanese() {
  return (
    <>
      <Helmet>
        <title>Cosmedocsについて | ハーレーストリート医師 2007年から</title>
        <meta name="description" content="Cosmedocsチームのご紹介 — GMC登録医師、2007年以来100万回以上の注入実績。医師主導の美容医療。" data-rh="true" />
        <link rel="canonical" href={canonical} data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { ...ORGANIZATION_SCHEMA, "@type": "MedicalBusiness", foundingDate: "2007", description: "ハーレーストリート美容クリニック、2007年設立。GMC登録医師が100万回以上の注入を実施。" },
              { "@type": "AboutPage", "@id": canonical, url: canonical, name: "Cosmedocsについて", isPartOf: { "@id": "https://www.cosmedocs.com/" } },
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
}
