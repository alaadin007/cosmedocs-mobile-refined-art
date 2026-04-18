import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { generateSEOMetadata } from '@/utils/seo';
import { ORGANIZATION_SCHEMA, createDoctorSchema } from '@/utils/schemaMarkup';
import AboutHero from '@/components/about/AboutHero';
import AboutValues from '@/components/about/AboutValues';
import AboutTeam from '@/components/about/AboutTeam';
import AboutHolisticApproach from '@/components/about/AboutHolisticApproach';
import AboutBrands from '@/components/about/AboutBrands';
import AboutTrustSignals from '@/components/about/AboutTrustSignals';
import AboutCTA from '@/components/about/AboutCTA';

const AboutUs = () => {
  const seoData = generateSEOMetadata(
    "About Cosmedocs | Harley Street Doctors Since 2007",
    "Meet the Cosmedocs team — GMC-registered Harley Street doctors with 1M+ injections since 2007. Doctor-led aesthetic medicine rooted in honesty, excellence and patient care.",
    "/about-us"
  );

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...ORGANIZATION_SCHEMA,
        "@type": "MedicalBusiness",
        "description": "Harley Street boutique aesthetic clinic established in 2007. Doctor-led, GMC-registered practitioners delivering over 1M+ injections. Specialising in Botox, dermal fillers, and medical dermatology.",
        "foundingDate": "2007",
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": "15"
        },
        "knowsAbout": [
          "Botox Injections",
          "Dermal Fillers",
          "Non-Surgical Rhinoplasty",
          "Medical Dermatology",
          "Aesthetic Medicine",
          "Skin Rejuvenation"
        ],
        "hasCredential": [
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "GMC Registration" },
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "CQC Compliance" },
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "Save Face Accreditation" }
        ],
        "memberOf": [
          { "@type": "Organization", "name": "British Association of Cosmetic Doctors" },
          { "@type": "Organization", "name": "Royal College of Physicians" },
          { "@type": "Organization", "name": "British Association of Dermatologists" }
        ]
      },
      {
        "@type": "AboutPage",
        "@id": "https://www.cosmedocs.com/about-us/",
        "url": "https://www.cosmedocs.com/about-us/",
        "name": seoData.title,
        "description": seoData.description,
        "isPartOf": { "@id": "https://www.cosmedocs.com/" },
        "mainEntity": { "@id": "https://www.cosmedocs.com/#organization" }
      },
      createDoctorSchema({
        name: "Dr A. Farhan Haq",
        jobTitle: "Cosmetic Physician & Medical Director",
        url: "https://www.cosmedocs.com/our-team/dr-ahmed-haq/",
        alumniOf: "Royal College of Surgeons Medical School",
        memberOf: "British Association of Cosmetic Doctors",
        skills: ["Botox", "Dermal Fillers", "Non-Surgical Rhinoplasty", "Facial Contouring", "Jaw Reduction"]
      }),
      createDoctorSchema({
        name: "Dr Hena Haq",
        jobTitle: "Cosmetic Physician & Programme Director",
        url: "https://www.cosmedocs.com/our-team/dr-hena-haq/",
        alumniOf: "Oxford Medical School",
        skills: ["Subtle Tweakments", "Lip Enhancement", "Skin Rejuvenation", "Tear Trough Treatment"]
      }),
      createDoctorSchema({
        name: "Dr Hassan A. Mirza",
        jobTitle: "Consultant Dermatologist",
        url: "https://www.cosmedocs.com/our-team/dr-hassan-mirza/",
        memberOf: "Royal College of Physicians",
        skills: ["Dermatology", "Acne Treatment", "Psoriasis", "Eczema", "Mole Removal"]
      }),
      createDoctorSchema({
        name: "Mr Karim Kassam",
        jobTitle: "Consultant Maxillofacial & Plastic Surgeon",
        url: "https://www.maxillofacialplasticsurgery.com",
        skills: ["Upper Eyelid Surgery", "Facelift Surgery", "Facial Scar Revision", "Facial Reconstruction", "Post-Trauma Surgery", "Post-Cancer Reconstruction"]
      }),
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cosmedocs.com/" },
          { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.cosmedocs.com/about-us/" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="keywords" content="about Cosmedocs, Harley Street aesthetic clinic, doctor-led aesthetic clinic, GMC registered doctors, invisible art aesthetics, London cosmetic doctors, Dr Ahmed Haq, Dr Hena Haq, Dr Hassan Mirza" />
        <script type="application/ld+json">
          {JSON.stringify(aboutPageSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Flowing Gold Gradient Orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #C9A050 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
            animate={{
              x: ['-10%', '5%', '-10%'],
              y: ['10%', '25%', '10%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-0 w-[500px] h-[500px] rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, #C9A050 0%, transparent 70%)',
              filter: 'blur(100px)',
            }}
            animate={{
              x: ['10%', '-5%', '10%'],
              y: ['40%', '60%', '40%'],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          />
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

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <p>
            Cosmedocs is a premier Harley Street aesthetic medicine clinic established in 2007, 
            offering doctor-led cosmetic treatments in the heart of London's renowned medical district. 
            With over one million injections performed since inception, Cosmedocs has built an 
            unrivalled reputation for excellence in non-surgical aesthetic procedures. The clinic's 
            philosophy centres on invisible art — subtle, natural enhancements that speak without 
            saying a word. Bold, natural, always your way.
          </p>
          <p>
            Led by Medical Director Dr A. Farhan Haq, a graduate of the Royal College of Surgeons 
            Medical School and member of the British Association of Cosmetic Doctors, the team 
            brings decades of combined experience in advanced injectable procedures, complex facial 
            contouring, and non-surgical jaw reduction. Dr Hena Haq, Programme Director of the 
            Harley Street Institute, specialises in subtle tweakments and holistic approaches that 
            deliver youthful yet natural outcomes. Consultant Dermatologist Dr Hassan A. Mirza, 
            a member of the Royal College of Physicians and the British Association of Dermatologists, 
            provides expert care for conditions including acne, psoriasis, eczema, and hair loss.
          </p>
          <p>
            All practitioners are GMC-registered and operate under CQC compliance. The clinic holds 
            Save Face accreditation and is fully insured. Cosmedocs goes beyond traditional beauty 
            clinics by focusing on treatments designed for both medical and psychological purposes, 
            understanding that physical appearance can profoundly impact mental health and overall 
            well-being. The clinic's values of honesty, excellence, respect, prudence, and community 
            guide every consultation and treatment decision.
          </p>
          <p>
            The Cosmedocs family of brands includes CosmeSurg for surgical procedures, Harley Street 
            Formulations for medical-grade skincare, the Harley Street Institute for professional 
            education and practitioner training, and Glow &amp; Go skin bar clinics. Each treatment 
            is meticulously evaluated for safety and efficacy, with minimally invasive procedures 
            like dermal fillers and Botox ensuring remarkable results with minimal downtime.
          </p>

      </div>
      </div>
    </>
  );
};

export default AboutUs;
