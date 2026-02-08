import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import BeforeAfterGrid from '@/components/BeforeAfterGrid';

const galleryImages = [
  {
    src: "/images/before-after/ha-makeover/ha-makeover-anatomy-planning.jpg",
    alt: "Before and after HA Makeover showing full-face rejuvenation with anatomical planning",
    caption: "Full-face rejuvenation using a bespoke HA Makeover plan with anatomy-led support points."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-structural-support.jpg",
    alt: "Before and after HA Makeover showing structural facial support and lifted contours",
    caption: "Structural facial support and balance following HA Makeover treatment."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-facial-balance.jpg",
    alt: "Before and after HA Makeover showing restored facial balance and proportion",
    caption: "Restored facial balance and proportion through bespoke full-face filler placement."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-volume-restoration.jpg",
    alt: "Before and after HA Makeover showing volume restoration over several months",
    caption: "Full-face volume restoration demonstrating natural, settled results over time."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-jawline-lift.jpg",
    alt: "Before and after HA Makeover showing improved jawline definition and mid-face lift",
    caption: "Improved jawline definition and mid-face support as part of a comprehensive HA Makeover."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-profile-rejuvenation.jpg",
    alt: "Before and after HA Makeover profile view showing chin and jawline enhancement",
    caption: "Profile view demonstrating chin projection and jawline refinement within a full-face plan."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-full-face-front.jpg",
    alt: "Before and after HA Makeover front view showing overall facial rejuvenation",
    caption: "Full-face rejuvenation with emphasis on structural support and natural contour restoration."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-natural-balance.jpg",
    alt: "Before and after HA Makeover showing natural facial balance and harmonious results",
    caption: "Natural facial balance achieved through considered, multi-point dermal filler placement."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-male-rejuvenation.jpg",
    alt: "Before and after HA Makeover showing male full-face rejuvenation",
    caption: "Male full-face rejuvenation — restoring structure and reducing visible signs of ageing."
  }
];

const BeforeAfterHAMakeover = () => {
  const seoData = generateSEOMetadata(
    "HA Makeover Before & After Results | Harley Street Doctors",
    "Real before and after results showing full-face rejuvenation with HA Makeover treatments performed by doctors on Harley Street.",
    "/before-after/ha-makeover/"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.co.uk/before-after/ha-makeover/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.co.uk/before-after/ha-makeover/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "name": "CosmeDocs",
                "description": "Doctor-led aesthetic medicine clinic on Harley Street",
                "url": "https://www.cosmedocs.co.uk/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "8-10 Harley Street",
                  "addressLocality": "London",
                  "postalCode": "W1G 9PF",
                  "addressCountry": "GB"
                },
                "medicalSpecialty": "Aesthetic Medicine"
              },
              {
                "@type": "ImageGallery",
                "name": "HA Makeover Before & After Results",
                "description": "Real full-face rejuvenation patient transformations from CosmeDocs Harley Street",
                "url": "https://www.cosmedocs.co.uk/before-after/ha-makeover/"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero */}
        <section className="relative pt-0 pb-16 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
          <div className="page-container relative z-10">
            <Breadcrumb
              items={[
                { label: 'Before & After', path: '/before-after/' },
              ]}
              currentPage="HA Makeover"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center mt-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-6 leading-tight text-white">
                HA Makeover Before &amp; After Results
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
                Real patient results showing full-face rejuvenation through bespoke HA Makeover 
                treatments. Each case reflects our commitment to structural balance, natural proportion, 
                and invisible results — planned and performed by our Harley Street doctors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-5 border-y border-white/10 bg-black/50">
          <div className="page-container">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-gray-400">Unretouched Clinical Photos</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-gray-400">Harley Street, London</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-gray-400">Consistent Lighting & Angles</span>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-5xl mx-auto">
              <BeforeAfterGrid images={galleryImages} initialDisplay={9} loadMoreIncrement={4} />
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 border-t border-white/10">
          <div className="page-container">
            <p className="text-center text-gray-500 text-xs max-w-3xl mx-auto leading-relaxed">
              All images show real patients treated by our doctors at our Harley Street clinic. 
              Individual results vary depending on facial anatomy, ageing patterns, and treatment plan. 
              Photos are unretouched and taken under consistent clinical conditions. 
              A consultation is required before any treatment.
            </p>
          </div>
        </section>

        {/* Internal Link to Treatment Page */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-extralight text-white mb-4">
                  Learn More About HA Makeover Treatment
                </h2>
                <p className="text-gray-400 font-light mb-6">
                  A consultation is required to assess suitability and expected outcomes.
                </p>
                <Link to="/treatments/ha-makeover/">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-5 rounded-full">
                    Learn more about HA Makeover treatment <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>HA Makeover Before and After Gallery</h2>
          <p>
            View authentic HA Makeover before and after results from CosmeDocs Harley Street. 
            Our gallery showcases full-face dermal filler rejuvenation including structural support, 
            volume restoration, and natural facial balance. Every result demonstrates our commitment 
            to invisible aesthetics that enhance rather than transform.
          </p>
          <h3>Full-Face Rejuvenation Results</h3>
          <p>
            These images represent real patients treated using bespoke HA Makeover plans by our 
            GMC-registered doctors. Results include cases informed by the 8-Point Facelift technique, 
            adapted to each patient's unique facial anatomy. Our aesthetics is invisible art — 
            bold, natural, always your way.
          </p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterHAMakeover;
