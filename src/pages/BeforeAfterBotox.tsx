import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, MapPin, Award, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Breadcrumb from '@/components/Breadcrumb';

const galleryImages = [
  {
    src: "/images/before-after/botox/botox-wrinkle-result-1.jpg",
    alt: "Botox before and after showing natural softening of facial tension",
    caption: "Natural softening of facial tension following Botox treatment.",
  },
  {
    src: "/images/before-after/botox/botox-wrinkle-result-2.jpg",
    alt: "Before and after Botox demonstrating subtle reduction in muscle activity",
    caption: "Subtle reduction in muscle activity while preserving natural expression.",
  },
  {
    src: "/images/before-after/botox/botox-wrinkle-result-3.jpg",
    alt: "Botox before and after result showing smoother, more relaxed appearance",
    caption: "Smoother, more relaxed appearance achieved through targeted Botox treatment.",
  },
  {
    src: "/images/before-after/botox/botox-wrinkle-result-4.jpg",
    alt: "Before and after Botox showing natural wrinkle reduction",
    caption: "Natural wrinkle reduction whilst maintaining full range of expression.",
  },
  {
    src: "/images/before-after/botox/botox-wrinkle-result-5.jpg",
    alt: "Botox treatment result demonstrating refreshed, natural-looking outcome",
    caption: "A refreshed, natural-looking outcome — invisible art at work.",
  },
  {
    src: "/images/before-after/botox/botox-wrinkle-result-6.jpg",
    alt: "Before and after Botox showing softened facial tension",
    caption: "Softened facial tension following doctor-led Botox treatment.",
  },
  {
    src: "/images/before-after/botox/botox-gummy-smile-result.jpg",
    alt: "Gummy smile correction before and after Botox treatment",
    caption: "Balanced smile following targeted Botox for gummy smile correction.",
  },
  {
    src: "/images/before-after/botox/botox-gummy-smile-result-2.jpg",
    alt: "Gummy smile before and after Botox showing reduced gum visibility",
    caption: "Reduced gum show for a more confident, balanced smile.",
  },
];

const BeforeAfterBotox = () => {
  const seoData = generateSEOMetadata(
    "Botox Before & After Results | Harley Street",
    "Real patient before and after results showing natural wrinkle reduction with Botox. Doctor-led treatment at our Harley Street clinic, London.",
    "/before-after/botox/"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/before-after/botox/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/before-after/botox/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "@id": "https://www.cosmedocs.com/#clinic",
                "name": "CosmeDocs",
                "url": "https://www.cosmedocs.com/",
                "telephone": "+442071231123",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "10 Harley Street",
                  "addressLocality": "London",
                  "postalCode": "W1G 9PF",
                  "addressCountry": "GB"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "2387",
                  "bestRating": "5"
                }
              },
              {
                "@type": "ImageGallery",
                "@id": "https://www.cosmedocs.com/before-after/botox/#gallery",
                "name": "Botox Before and After Results",
                "description": "Real patient before and after photographs demonstrating natural wrinkle reduction achieved through expert Botox treatment at CosmeDocs Harley Street.",
                "url": "https://www.cosmedocs.com/before-after/botox/"
              },
              {
                "@type": "WebPage",
                "@id": "https://www.cosmedocs.com/before-after/botox/#page",
                "name": "Botox Before & After Results | Harley Street",
                "description": seoData.description,
                "url": "https://www.cosmedocs.com/before-after/botox/",
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cosmedocs.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Before & After", "item": "https://www.cosmedocs.com/before-after/" },
                    { "@type": "ListItem", "position": 3, "name": "Botox Results", "item": "https://www.cosmedocs.com/before-after/botox/" }
                  ]
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        

        {/* Flowing Gold Gradient Orbs — matches Home style */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #C9A050 0%, transparent 70%)',
              filter: 'blur(100px)',
            }}
            animate={{
              x: ['-20%', '10%', '-20%'],
              y: ['-10%', '20%', '-10%'],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, #C9A050 0%, transparent 70%)',
              filter: 'blur(120px)',
            }}
            animate={{
              x: ['20%', '-10%', '20%'],
              y: ['20%', '-10%', '20%'],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative pt-28 pb-16 px-6">
          <div className="max-w-5xl mx-auto relative z-10">
            <Breadcrumb
              items={[{ label: 'Before & After', path: '/before-after/' }]}
              currentPage="Botox"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="pt-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Botox{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A050] to-amber-400">
                  Before & After Results
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl mb-8">
                Real patient outcomes from our Harley Street clinic. Botox targets specific
                facial muscles to soften tension and reduce dynamic lines — whilst preserving
                natural expression. Every treatment is doctor-led, tailored to individual
                anatomy, with results that speak without saying a word.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#C9A050] to-transparent"></div>
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-5 border-y border-white/10 bg-white/[0.02] relative z-10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-white/40">Real Unedited Photos</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-white/40">Harley Street, London</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-white/40">1M+ Treatments Since 2007</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-white/40">Doctor-Led Clinic</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Gallery — General Botox Results */}
        <section className="py-16 relative z-10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="columns-1 md:columns-2 gap-6 space-y-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                  viewport={{ once: true }}
                  className="break-inside-avoid"
                >
                  <div className="group rounded-xl overflow-hidden bg-white/[0.03] border border-white/[0.08]">
                    <div className="overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      />
                    </div>
                    <div className="px-5 py-3 border-t border-white/[0.06]">
                      <p className="text-white/40 text-xs leading-relaxed font-light">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study — Masseter Botox */}
        <section className="py-16 relative z-10 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Masseter Botox{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A050] to-amber-400">
                  Before & After
                </span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-8">
                For patients seeking facial slimming or relief from jaw tension, masseter
                Botox can reduce muscle bulk and rebalance the lower face.
              </p>

              <div className="max-w-xl">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="/images/before-after/botox/masseter-botox-result.jpg"
                    alt="Masseter Botox before and after showing jawline slimming and facial rebalancing"
                    loading="lazy"
                    className="w-full h-auto block rounded-xl"
                  />
                </div>
              </div>

              <Link
                to="/before-after/botox/masseter/"
                className="inline-flex items-center gap-2 mt-8 text-[#C9A050] hover:text-amber-400 transition-colors text-lg font-medium"
              >
                View full masseter Botox before & after gallery
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 relative z-10 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="text-xl font-bold text-white mb-6">Learn More</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  to="/treatments/botox/"
                  className="group flex items-center justify-between p-5 bg-white/[0.03] border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-all duration-300"
                >
                  <div>
                    <p className="font-medium text-white group-hover:text-[#C9A050] transition-colors">Botox Overview</p>
                    <p className="text-sm text-white/40 mt-1">Our philosophy, approach, and safety</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#C9A050] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>

                <Link
                  to="/medical/"
                  className="group flex items-center justify-between p-5 bg-white/[0.03] border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-all duration-300"
                >
                  <div>
                    <p className="font-medium text-white group-hover:text-[#C9A050] transition-colors">Medical Botox</p>
                    <p className="text-sm text-white/40 mt-1">Migraine, bruxism, and hyperhidrosis</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#C9A050] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative z-10 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready for Your Transformation?
                </h2>
                <p className="text-white/60 text-lg mb-10 leading-relaxed">
                  Every treatment begins with a comprehensive facial assessment. Our doctors will
                  discuss your concerns and recommend an approach tailored to your facial structure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-6 rounded-full text-lg w-full sm:w-auto">
                      Book Consultation
                    </Button>
                  </Link>
                  <Link to="/before-after/">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg w-full sm:w-auto">
                      Back to Gallery
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 border-t border-white/10 relative z-10">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-center text-white/30 text-xs max-w-3xl mx-auto leading-relaxed">
              All images show real patients treated by our doctors at our Harley Street clinic.
              Individual results vary depending on anatomy and treatment plan.
            </p>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Botox Before & After Results Gallery</h2>
          <p>
            Botox before and after results gallery from CosmeDocs Harley Street clinic. These
            real patient photographs demonstrate natural wrinkle reduction and facial softening
            achieved through expert Botox treatment. Botox (botulinum toxin) works by temporarily
            relaxing targeted facial muscles, reducing the appearance of dynamic wrinkles whilst
            preserving natural facial expression. CosmeDocs has performed over one million
            aesthetic procedures since 2007, with all treatments administered by GMC-registered
            doctors at 10 Harley Street, London W1G 9PF. Our aesthetics is invisible art —
            bold, natural, always your way.
          </p>
        </div>

        
      </div>
    </>
  );
};

export default BeforeAfterBotox;
