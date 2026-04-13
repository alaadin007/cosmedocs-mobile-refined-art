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

const canonical = 'https://www.cosmedocs.com/de/ueber-uns/';

export default function AboutUsGerman() {
  return (
    <>
      <Helmet>
        <title>Über Cosmedocs | Harley Street Ärzte seit 2007</title>
        <meta name="description" content="Lernen Sie das Cosmedocs-Team kennen — GMC-registrierte Ärzte mit über einer Million Injektionen seit 2007. Arztgeleitete ästhetische Medizin." data-rh="true" />
        <link rel="canonical" href={canonical} data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { ...ORGANIZATION_SCHEMA, "@type": "MedicalBusiness", foundingDate: "2007", description: "Boutique-Ästhetikklinik an der Harley Street, gegründet 2007. GMC-registrierte Ärzte mit über einer Million Injektionen." },
              { "@type": "AboutPage", "@id": canonical, url: canonical, name: "Über Cosmedocs", isPartOf: { "@id": "https://www.cosmedocs.com/" } },
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
