import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import BeforeAfterGrid from '@/components/BeforeAfterGrid';

const polynucleotideImages = [
  {
    src: "/images/before-after/polynucleotides-skin-boosting-before-after.png",
    alt: "Before and after images showing the rejuvenating effects of polynucleotides on skin, highlighting smoother texture and reduced fine lines.",
    caption: "Transformed Skin: Polynucleotides Skin Boosting Effect — visible improvement in skin texture, hydration, and fine line reduction following a personalised polynucleotide treatment course."
  },
  {
    src: "/images/before-after/polynucleotides-male-face-before-after.png",
    alt: "Before and after photos of a male face, showing the effects of polynucleotide treatments on skin texture and under-eye area, with visible improvement in smoothness and reduced wrinkles.",
    caption: "Male Face & Under-Eye Rejuvenation — polynucleotide therapy targeting crepey skin and under-eye concerns, demonstrating improved skin tone, smoothness, and reduced wrinkles after treatment."
  }
];

const BeforeAfterPolynucleotides = () => {
  const seoData = generateSEOMetadata(
    "Polynucleotide Treatment Before & After | CosmeDocs Harley Street",
    "View real polynucleotide treatment before and after results. Regenerative skin rejuvenation performed by doctors on Harley Street, London.",
    "/before-after/skin-rejuvenation/polynucleotides/"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/before-after/skin-rejuvenation/polynucleotides/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/before-after/skin-rejuvenation/polynucleotides/" />
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
                "name": "Polynucleotide Treatment Before & After Results",
                "description": "Real patient polynucleotide treatment results from CosmeDocs Harley Street",
                "url": "https://www.cosmedocs.com/before-after/skin-rejuvenation/polynucleotides/"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-neutral-800 pt-0 pb-16">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[
                { label: 'Before & After', path: '/before-after/' },
                { label: 'Skin Rejuvenation', path: '/before-after/skin-rejuvenation/' }
              ]}
              currentPage="Polynucleotides"
            />
            <div className="max-w-3xl pt-6 pb-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <h1 className="text-4xl md:text-5xl font-light text-white mb-5 leading-tight tracking-tight">
                  Polynucleotides <span className="font-semibold text-[#C9A050]">Before & After</span>
                </h1>
                <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl font-light">
                  Real patient results demonstrating deep skin regeneration with polynucleotide treatments. These biostimulators work at a cellular level to repair, hydrate, and rejuvenate skin quality from within.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-8 flex flex-wrap gap-8 text-sm text-white/40">
                <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" />Real Unedited Photos</span>
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#C9A050]/70" />Harley Street, London</span>
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-[#C9A050]/70" />Consistent Clinical Conditions</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comprehensive Description */}
        <section className="py-16 bg-neutral-900 border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-light text-white mb-5 tracking-tight">
                  What Results Polynucleotides <span className="text-[#C9A050]">Can Achieve</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed font-light mb-6">
                  Browse real polynucleotides before and after results showing improvements in skin quality, hydration, texture, and overall skin vitality. These outcomes reflect personalised treatment planning and gradual biological skin regeneration rather than instant volume-based changes.
                </p>
                <ul className="space-y-3">
                  {['Skin texture and smoothness', 'Hydration and glow', 'Fine line softening', 'Overall skin quality enhancement'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/50 text-sm font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A050]/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-white/30 text-xs mt-6 font-light leading-relaxed">
                  Results develop progressively over time as collagen stimulation and tissue regeneration occur. Individual results vary depending on skin condition, age, lifestyle factors, and treatment protocol.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-light text-white mb-5 tracking-tight">
                  Understanding <span className="text-[#C9A050]">Treatment Outcomes</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed font-light mb-6">
                  Polynucleotide treatments work by stimulating cellular repair and skin regeneration. Results vary between individuals and depend on:
                </p>
                <ul className="space-y-3">
                  {[
                    'Skin health and baseline condition',
                    'Age and collagen activity',
                    'Number of sessions completed',
                    'Post-treatment skincare compliance',
                    'Lifestyle and sun exposure habits'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/50 text-sm font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A050]/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-white/30 text-xs mt-6 font-light leading-relaxed">
                  Multiple sessions may be required for optimal improvement. Our doctors will assess your skin and recommend a tailored programme.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-neutral-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-10">
              <h2 className="text-2xl font-light text-white mb-3 tracking-tight">
                Polynucleotides Before and After <span className="text-[#C9A050]">Results Gallery</span>
              </h2>
              <p className="text-white/40 text-sm leading-relaxed font-light max-w-2xl">
                Below you can view real polynucleotides before and after results showing gradual improvements achieved through personalised treatment planning and regenerative skin therapy.
              </p>
            </motion.div>

            <BeforeAfterGrid
              images={polynucleotideImages}
              initialDisplay={4}
              loadMoreIncrement={4}
            />
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 border-t border-white/[0.06] bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-center text-white/25 text-xs max-w-3xl mx-auto leading-relaxed font-light">
              Individual results may vary. All images show real patients treated at CosmeDocs. Photos are unretouched and taken under consistent clinical conditions. Before and after images are provided for educational purposes only. A consultation is required to assess suitability and expected results.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <p className="text-white/50 text-base mb-8 leading-relaxed font-light">
                  Polynucleotide treatments require a course for optimal results. Our doctors will assess your skin and recommend a tailored programme.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base transition-all duration-300 w-full sm:w-auto">
                      Book Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/before-after/skin-rejuvenation/">
                    <Button variant="ghost" className="border border-white/20 text-white/70 hover:text-white hover:bg-white/10 px-8 py-5 rounded-full text-base w-full sm:w-auto">
                      Back to Skin Rejuvenation
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Polynucleotide Treatment Before and After Gallery</h2>
          <p>Browse authentic polynucleotide treatment before and after results from CosmeDocs Harley Street. Polynucleotides are regenerative biostimulators that repair skin at a cellular level, improving hydration, elasticity, and overall skin quality. With the polynucleotides skin regenerative therapy you can see visible improvements in skin texture, smoothness, hydration, glow, fine line softening, and overall skin quality enhancement. All treatments at CosmeDocs are delivered by qualified medical professionals using regulated products and evidence-based techniques. The clinical approach focuses on natural-looking enhancements, facial balance and proportion, patient safety and ethical practice, and personalised treatment planning. The goal is refined, balanced improvement and not overcorrection. Our aesthetics is invisible art — bold, natural, always your way.</p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterPolynucleotides;
