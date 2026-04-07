import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MapPin, Calendar, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import BeforeAfterGrid from '@/components/BeforeAfterGrid';

const galleryImages = [
  {
    src: "/images/before-after/dermal-fillers/lips/lip-filler-corners-ratio.jpg",
    alt: "Lip filler before and after showing lifted corners and improved lip ratio",
    caption: "Lifted corners and improved upper-to-lower lip ratio — a subtle, balanced enhancement."
  },
  {
    src: "/images/before-after/dermal-fillers/lips/lip-augmentation-profile.jpg",
    alt: "Lip augmentation before and after profile view showing natural volume enhancement",
    caption: "Profile view demonstrating natural volume enhancement with precise filler placement."
  },
  {
    src: "/images/before-after/dermal-fillers/lips/lip-filler-natural-enhancement.jpg",
    alt: "Natural lip filler before and after showing subtle volume restoration",
    caption: "Subtle volume restoration maintaining the patient's natural lip shape and proportions."
  },
  {
    src: "/images/before-after/dermal-fillers/lips/vascular-occlusion-complication-management.jpg",
    alt: "Vascular occlusion complication management before and after showing complete recovery",
    caption: (
      <span>
        <strong className="text-[#C9A050]">Complication management:</strong> Vascular occlusion caused by filler injected elsewhere. 
        CosmeDocs manages national-level filler complications for multiple dermal filler companies. Full recovery achieved.
      </span>
    )
  },
  {
    src: "/images/before-after/dermal-fillers/lips/lip-filler-progression-sessions.jpg",
    alt: "Lip filler progression showing results after one and two treatment sessions",
    caption: "Gradual lip enhancement over two sessions — building volume naturally over time."
  },
  {
    src: "/images/before-after/dermal-fillers/lips/lip-filler-side-profile.jpg",
    alt: "Lip filler before and after side profile showing improved definition",
    caption: "Improved lip definition and vermillion border enhancement from a side profile view."
  },
  {
    src: "/images/before-after/dermal-fillers/lips/lip-correction-fix.jpg",
    alt: "Lip filler correction before and after showing improved symmetry and shape",
    caption: "Lip correction — reshaping and balancing a previous lip filler result performed elsewhere."
  },
  {
    src: "/images/before-after/dermal-fillers/lips/full-face-rejuvenation.jpg",
    alt: "Full face rejuvenation including lip filler showing overall facial balance improvement",
    caption: "Full-face rejuvenation incorporating lip filler as part of a holistic treatment plan."
  },
  {
    src: "/images/before-after/dermal-fillers/lips/full-face-filler-rejuvenation.jpg",
    alt: "Comprehensive facial filler treatment including lips showing restored volume and contour",
    caption: "Comprehensive facial volume restoration including lip enhancement for overall facial harmony."
  },
  {
    src: "/images/before-after/lips/lip-filler-journey-5-weeks.jpg",
    alt: "Lip filler journey showing before, immediately after, and 5 weeks later results at CosmeDocs Harley Street",
    caption: (
      <span>
        <strong className="text-[#C9A050]">The real journey:</strong> Before, immediately after, and 5 weeks later — we present realistic results, not just our best ones. Swelling settles, filler integrates, and the final outcome speaks for itself.
      </span>
    )
  }
];

const BeforeAfterLipFiller = () => {
  const seoData = generateSEOMetadata(
    "Lip Filler Before & After | Real Results | CosmeDocs",
    "View real lip filler before and after results from CosmeDocs Harley Street. Natural lip enhancement, corrections, and complication management by our doctors.",
    "/before-after/dermal-fillers/lips/"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/before-after/dermal-fillers/lips/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/before-after/dermal-fillers/lips/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "name": "CosmeDocs",
                "description": "Doctor-led aesthetic medicine clinic on Harley Street",
                "url": "https://www.cosmedocs.com/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "10 Harley Street",
                  "addressLocality": "London",
                  "postalCode": "W1G 9PF",
                  "addressCountry": "GB"
                },
                
              },
              {
                "@type": "ImageGallery",
                "name": "Lip Filler Before & After Results",
                "description": "Real lip filler patient transformations from CosmeDocs Harley Street",
                "url": "https://www.cosmedocs.com/before-after/dermal-fillers/lips/"
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
                { label: 'Dermal Fillers', path: '/before-after/dermal-fillers/' }
              ]}
              currentPage="Lip Filler"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center mt-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Lip Filler Before & After
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Real patient results showing natural lip enhancement, corrections, and complication management 
                from our Harley Street clinic. We present realistic results, not just our best ones — because 
                honest outcomes build real trust.
              </p>
              <p className="text-sm text-[#C9A050]/70 mt-4 italic font-light">
                "Our aesthetics is invisible art — bold, natural, always your way."
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
              <BeforeAfterGrid images={galleryImages} initialDisplay={6} loadMoreIncrement={4} />
            </div>
          </div>
        </section>

        {/* Complication Management Callout */}
        <section className="py-16 bg-accent/30">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <AlertTriangle className="w-6 h-6 text-[#C9A050] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xl font-semibold text-white mb-1">National Complication Management</p>
                    <p className="text-sm text-gray-400">A commitment beyond our own clinic</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  CosmeDocs manages filler complications at a national level for multiple dermal filler companies. 
                  Vascular occlusion — a rare but serious complication where filler inadvertently blocks a blood vessel — 
                  requires immediate, expert intervention. Our doctors are trained to recognise and treat these emergencies, 
                  often correcting complications that originated at other clinics.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This expertise informs every injection we perform. Understanding what can go wrong — and how to resolve 
                  it — is what separates doctor-led aesthetic medicine from the rest.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 border-t border-white/10">
          <div className="page-container">
            <p className="text-center text-gray-500 text-xs max-w-3xl mx-auto leading-relaxed">
              Individual results may vary. All images show real patients treated at CosmeDocs or complication cases 
              managed by our team. Photos are unretouched and taken under consistent clinical conditions. 
              A consultation is required before any treatment.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <p className="text-2xl font-bold text-white mb-3">Explore More Results</p>
                <p className="text-gray-400">View other dermal filler treatment galleries.</p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: "Cheek Filler", path: "/before-after/dermal-fillers/cheeks/" },
                  { label: "Jawline Filler", path: "/before-after/dermal-fillers/jawline/" },
                  { label: "Non-Surgical Rhinoplasty", path: "/before-after/dermal-fillers/nose/" },
                  { label: "Chin Filler", path: "/before-after/dermal-fillers/chin/" },
                  { label: "Tear Trough", path: "/before-after/dermal-fillers/tear-trough/" },
                  { label: "All Filler Results", path: "/before-after/dermal-fillers/" }
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="group flex items-center justify-between p-4 bg-black/40 border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-colors"
                  >
                    <span className="text-sm font-medium text-white group-hover:text-[#C9A050] transition-colors">
                      {link.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#C9A050] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Balanced Internal Link to Treatment Page */}
        <section className="py-12 bg-gradient-to-b from-black to-gray-900">
          <div className="page-container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-400 mb-4">
                  Learn more about our approach to lip enhancement, including what to expect and how we tailor each treatment.
                </p>
                <Link to="/treatments/lip-fillers/">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-5 rounded-full">
                    About Lip Filler Treatment <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Lip Filler Before and After Gallery</h2>
          <p>
            View authentic lip filler before and after results from CosmeDocs Harley Street. Our gallery showcases 
            natural lip enhancement, lip correction, complication management including vascular occlusion cases, 
            and progressive treatment results. Every result demonstrates our commitment to subtle, balanced aesthetics 
            that enhance rather than transform.
          </p>
          <h3>Lip Filler Complication Management</h3>
          <p>
            CosmeDocs provides national-level complication management for dermal filler companies across the UK. 
            Our doctors are experienced in treating vascular occlusion, a rare but serious complication where 
            dermal filler blocks a blood vessel. This expertise in managing emergencies from other clinics 
            informs our own injection technique and safety protocols.
          </p>
          <h3>Natural Lip Enhancement at Harley Street</h3>
          <p>
            Our approach to lip filler prioritises natural proportions, symmetry, and balance. Whether enhancing 
            thin lips, correcting asymmetry, or improving lip ratio, our doctors use precise injection techniques 
            to achieve results that look and feel natural. Our aesthetics is invisible art — bold, natural, always your way.
          </p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterLipFiller;
