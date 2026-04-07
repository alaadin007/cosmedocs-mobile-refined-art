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
    alt: "Before and after full face makeover showing full-face rejuvenation with anatomical planning",
    caption: "Full-face rejuvenation using a bespoke plan with anatomy-led support points."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-structural-support.jpg",
    alt: "Before and after full face makeover showing structural facial support and lifted contours",
    caption: "Structural facial support and balance following full-face filler treatment."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-facial-balance.jpg",
    alt: "Before and after full face makeover showing restored facial balance and proportion",
    caption: "Restored facial balance and proportion through bespoke full-face filler placement."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-volume-restoration.jpg",
    alt: "Before and after full face makeover showing volume restoration over several months",
    caption: "Full-face volume restoration demonstrating natural, settled results over time."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-jawline-lift.jpg",
    alt: "Before and after full face makeover showing improved jawline definition and mid-face lift",
    caption: "Improved jawline definition and mid-face support as part of a comprehensive treatment."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-profile-rejuvenation.jpg",
    alt: "Before and after full face makeover profile view showing chin and jawline enhancement",
    caption: "Profile view demonstrating chin projection and jawline refinement within a full-face plan."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-full-face-front.jpg",
    alt: "Before and after full face makeover front view showing overall facial rejuvenation",
    caption: "Full-face rejuvenation with emphasis on structural support and natural contour restoration."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-natural-balance.jpg",
    alt: "Before and after full face makeover showing natural facial balance and harmonious results",
    caption: "Natural facial balance achieved through considered, multi-point dermal filler placement."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-natural-balance-profile.jpg",
    alt: "Before and after full face makeover profile view showing natural facial balance with multi-point dermal filler",
    caption: "Profile view — natural facial balance achieved through considered, multi-point dermal filler placement."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-natural-balance-front.jpg",
    alt: "Before and after full face makeover front view showing natural facial balance with multi-point dermal filler",
    caption: "Front view — natural facial balance and refreshed appearance through bespoke multi-point dermal filler placement."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-male-rejuvenation.jpg",
    alt: "Before and after full face makeover showing male full-face rejuvenation",
    caption: "Male full-face rejuvenation — restoring structure and reducing visible signs of ageing."
  },
  {
    src: "/images/before-after/ha-makeover/ha-makeover-one-year-progression.jpg",
    alt: "Before and after full face makeover showing full-face rejuvenation progression over one year",
    caption: "Full-face rejuvenation progression over one year — demonstrating long-term structural improvement."
  }
];

const BeforeAfterFullFaceMakeover = () => {
  const seoData = generateSEOMetadata(
    "Full Face Makeover Before & After Results | CosmeDocs Harley Street",
    "Real before and after results showing full-face dermal filler rejuvenation. Doctor-led HA Makeover treatments on Harley Street.",
    "/before-after/dermal-fillers/full-face-makeover/"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/before-after/dermal-fillers/full-face-makeover/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/before-after/dermal-fillers/full-face-makeover/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "name": "CosmeDocs",
                "description": "Doctor-led aesthetic medicine clinic on Harley Street",
                "url": "https://www.cosmedocs.com/",
                "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" },
                
              },
              {
                "@type": "ImageGallery",
                "name": "Full Face Makeover Before & After Results",
                "description": "Real full-face dermal filler rejuvenation results from CosmeDocs Harley Street",
                "url": "https://www.cosmedocs.com/before-after/dermal-fillers/full-face-makeover/"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        <section className="relative overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-neutral-800 pt-0 pb-16">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[
                { label: 'Before & After', path: '/before-after/' },
                { label: 'Dermal Fillers', path: '/before-after/dermal-fillers/' }
              ]}
              currentPage="Full Face Makeover"
            />
            <div className="max-w-3xl pt-6 pb-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <h1 className="text-4xl md:text-5xl font-light text-white mb-5 leading-tight tracking-tight">
                  Full Face Makeover <span className="font-semibold text-[#C9A050]">Before & After</span>
                </h1>
                <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl font-light">
                  Real patient results showing full-face rejuvenation through bespoke HA Makeover treatments. Each case reflects structural balance, natural proportion, and invisible results — planned and performed by our Harley Street doctors.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-8 flex flex-wrap gap-8 text-sm text-white/40">
                <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" />Unretouched Clinical Photos</span>
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#C9A050]/70" />Harley Street, London</span>
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-[#C9A050]/70" />Consistent Lighting & Angles</span>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <BeforeAfterGrid images={galleryImages} initialDisplay={9} loadMoreIncrement={4} />
          </div>
        </section>

        <section className="py-8 border-t border-white/[0.06] bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-center text-white/25 text-xs max-w-3xl mx-auto leading-relaxed font-light">
              All images show real patients treated by our doctors at our Harley Street clinic. Individual results vary depending on facial anatomy, ageing patterns, and treatment plan. Photos are unretouched and taken under consistent clinical conditions. A consultation is required before any treatment.
            </p>
          </div>
        </section>

        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-extralight text-white mb-4">Learn More About HA Makeover Treatment</h2>
                <p className="text-white/50 text-base mb-8 leading-relaxed font-light">
                  A consultation is required to assess suitability and expected outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/treatments/ha-makeover/">
                    <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base transition-all duration-300 w-full sm:w-auto">
                      HA Makeover Treatment <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/before-after/dermal-fillers/">
                    <Button variant="ghost" className="border border-white/20 text-white/70 hover:text-white hover:bg-white/10 px-8 py-5 rounded-full text-base w-full sm:w-auto">
                      Back to Dermal Fillers
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="sr-only">
          <h2>Full Face Makeover Before and After Gallery</h2>
          <p>View authentic full face makeover before and after results from CosmeDocs Harley Street. Our gallery showcases full-face dermal filler rejuvenation including structural support, volume restoration, and natural facial balance. Every result demonstrates our commitment to invisible aesthetics — bold, natural, always your way.</p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterFullFaceMakeover;
