import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import BeforeAfterGrid from '@/components/BeforeAfterGrid';

const galleryImages = [
  {
    src: "/lovable-uploads/c5117df6-2f03-4565-8ede-2a7fa83bb2fe.png",
    alt: "Profhilo before and after showing improved skin hydration and texture on the face",
    caption: (
      <>
        <strong className="text-white/90">Profhilo — Bio-Remodelling</strong>
        <br />
        Visible improvement in skin hydration, firmness, and overall radiance. Profhilo uses ultra-pure hyaluronic acid to stimulate collagen and elastin production, delivering a natural glow without adding volume.
      </>
    )
  },
  {
    src: "/images/before-after/polynucleotides-skin-boosting-before-after.png",
    alt: "Polynucleotides skin boosting before and after showing rejuvenated skin texture",
    caption: (
      <>
        <strong className="text-white/90">Polynucleotides — Skin Boosting</strong>
        <br />
        Deep regenerative improvement achieved through polynucleotide therapy. This treatment harnesses DNA-derived bio-stimulators to repair damaged skin cells, reduce fine lines, and restore a youthful, dewy complexion from within.
      </>
    )
  },
  {
    src: "/images/before-after/polynucleotides-male-face-before-after.png",
    alt: "Polynucleotides male face and under-eye rejuvenation before and after results",
    caption: (
      <>
        <strong className="text-white/90">Polynucleotides — Male Face & Under-Eye</strong>
        <br />
        Targeted under-eye and facial skin rejuvenation for male patients. Polynucleotides address dark circles, crepey skin, and loss of elasticity — delivering subtle, natural results suited to masculine facial anatomy.
      </>
    )
  },
  {
    src: "/lovable-uploads/04ac4a20-e938-4966-8d5b-cdba7b58908f.png",
    alt: "Microneedling treatment progression showing significant skin texture improvement",
    caption: (
      <>
        <strong className="text-white/90">Microneedling — Collagen Induction Therapy</strong>
        <br />
        Progressive skin improvement through controlled micro-injuries that stimulate the body's natural healing response. Effective for acne scarring, enlarged pores, uneven texture, and fine lines — results build over a course of treatments.
      </>
    )
  }
];

const BeforeAfterSkinRejuvenation = () => {
  const seoData = generateSEOMetadata(
    "Skin Rejuvenation Before & After Results | CosmeDocs Harley Street",
    "View real skin rejuvenation before and after results from our London clinic. See Profhilo, Polynucleotides, microneedling, and chemical peel transformations.",
    "/before-after/skin-rejuvenation/"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://cosmedocs.co.uk/before-after/skin-rejuvenation/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://cosmedocs.co.uk/before-after/skin-rejuvenation/" />
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
                "name": "CosmeDocs",
                "description": "Doctor-led aesthetic medicine clinic on Harley Street",
                "url": "https://cosmedocs.co.uk/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "10 Harley Street",
                  "addressLocality": "London",
                  "postalCode": "W1G 9PF",
                  "addressCountry": "GB"
                },
                "medicalSpecialty": "Aesthetic Medicine"
              },
              {
                "@type": "ImageGallery",
                "name": "Skin Rejuvenation Before & After Results",
                "description": "Real patient skin rejuvenation transformations from CosmeDocs Harley Street clinic",
                "url": "https://cosmedocs.co.uk/before-after/skin-rejuvenation/"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
          <div className="page-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Link 
                to="/before-after/" 
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors"
              >
                ← Back to Gallery
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white">
                Skin Rejuvenation Before & After Results
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Real patient transformations showcasing the power of advanced skin rejuvenation treatments from our Harley Street clinic. Our aesthetics is invisible art — quiet, not loud.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-6 border-y border-white/10 bg-black/50">
          <div className="page-container">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-gray-400">Real Patient Results</span>
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

        {/* Comprehensive Description */}
        <section className="py-16 md:py-20">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-10 md:gap-16"
              >
                <div>
                  <p className="text-[#C9A050] text-sm font-medium tracking-widest uppercase mb-4">Understanding Our Results</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">
                    What Skin Rejuvenation Can Achieve
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Skin rejuvenation encompasses a range of regenerative treatments designed to restore your skin's natural vitality. From bio-remodelling with Profhilo to cellular repair through Polynucleotides, each approach targets different layers of the skin to address hydration, texture, laxity, and overall luminosity.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    At CosmeDocs, transformation speaks without saying a word. Our doctor-led protocols are tailored to your unique skin biology, ensuring results that look natural, feel effortless, and age gracefully.
                  </p>
                </div>
                <div>
                  <p className="text-[#C9A050] text-sm font-medium tracking-widest uppercase mb-4">Our Approach</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">
                    Bold, Natural, Always Your Way
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Every image in this gallery represents a real patient treated at our Harley Street clinic. We photograph under consistent clinical lighting and angles to give you an honest view of what each treatment can deliver.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Results vary depending on individual skin type, lifestyle, and treatment plan. Our doctors will discuss realistic expectations during your consultation, ensuring your journey is guided by expertise and transparency — minimal, quiet, never exaggerated.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Unified Gallery */}
        <section className="py-16 md:py-20 bg-accent/30">
          <div className="page-container">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Patient Gallery</h2>
                <p className="text-gray-400 max-w-2xl">
                  Browse real before and after results across our skin rejuvenation treatments — including Profhilo, Polynucleotides, Microneedling, and more.
                </p>
              </motion.div>

              <BeforeAfterGrid images={galleryImages} initialDisplay={4} />
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Learn More About Skin Rejuvenation</h2>
                <p className="text-gray-400">
                  Explore our skin rejuvenation treatments and understand which approach may benefit your skin.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/treatments/profhilo/"
                  className="group block p-6 bg-black/40 border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C9A050] transition-colors">
                    Profhilo Treatment
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Bio-remodelling treatment for deep skin hydration and improved laxity.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#C9A050] text-sm font-medium">
                    Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link 
                  to="/treatments/polynucleotides/"
                  className="group block p-6 bg-black/40 border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C9A050] transition-colors">
                    Polynucleotide Treatment
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Regenerative treatment for deep skin rejuvenation and repair.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#C9A050] text-sm font-medium">
                    View treatment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link 
                  to="/treatments/microneedling/"
                  className="group block p-6 bg-black/40 border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C9A050] transition-colors">
                    Microneedling
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Collagen induction therapy for improved texture and scarring.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#C9A050] text-sm font-medium">
                    View treatment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link 
                  to="/before-after/dermal-fillers/"
                  className="group block p-6 bg-black/40 border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C9A050] transition-colors">
                    Dermal Filler Results
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    View before & after results for lip, cheek, and jawline fillers.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#C9A050] text-sm font-medium">
                    View gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="page-container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Book Your Skin Consultation</h2>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                  Every treatment begins with a comprehensive skin assessment. Our doctors will analyse your skin concerns and recommend a tailored rejuvenation programme.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-6 rounded-full text-lg w-full sm:w-auto">
                      Book Consultation
                    </Button>
                  </Link>
                  <Link to="/treatments">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg w-full sm:w-auto">
                      View All Treatments
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Skin Rejuvenation Before & After Gallery - Real Results</h2>
          <p>View authentic skin rejuvenation before and after photos from our Harley Street clinic. Our expert doctors deliver transformative results using Profhilo, Polynucleotides, microneedling, chemical peels, and PRP treatments. Aesthetic medicine by CosmeDocs is minimal — quiet, not loud — invisible, not exaggerated.</p>
          
          <h3>Profhilo Bio-Remodelling Results</h3>
          <p>Profhilo is a revolutionary bio-remodelling treatment that uses ultra-pure hyaluronic acid to stimulate collagen and elastin. Results include improved skin hydration, firmness, and a natural radiance without adding volume or changing facial structure.</p>
          
          <h3>Polynucleotide Regenerative Results</h3>
          <p>Polynucleotide therapy delivers deep cellular regeneration using DNA-derived bio-stimulators. These treatments repair damaged skin cells, reduce fine lines, improve dark circles and crepey skin, and restore youthful elasticity for both men and women.</p>

          <h3>Microneedling Collagen Induction Results</h3>
          <p>Microneedling creates controlled micro-injuries to trigger the body's natural healing response. Over a course of treatments, patients see progressive improvement in acne scarring, enlarged pores, uneven texture, and fine lines.</p>

          <h3>Chemical Peel and PRP Results</h3>
          <p>Chemical peels exfoliate damaged skin layers to reveal fresher, brighter skin beneath, targeting pigmentation and texture. PRP (Platelet-Rich Plasma) harnesses your own growth factors for natural rejuvenation and skin repair.</p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterSkinRejuvenation;
