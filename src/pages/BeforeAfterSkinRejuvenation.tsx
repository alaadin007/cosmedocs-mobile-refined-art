import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

// Gallery sections with anchors for skin rejuvenation treatments
const gallerySections = [
  {
    id: "profhilo",
    title: "Profhilo",
    description: "Bio-remodelling for skin hydration and laxity",
    images: [
      { src: "/lovable-uploads/c5117df6-2f03-4565-8ede-2a7fa83bb2fe.png", alt: "Profhilo before and after showing improved skin hydration and texture", caption: "Improved skin quality and hydration" }
    ]
  },
  {
    id: "polynucleotides",
    title: "Polynucleotides",
    description: "Regenerative skin treatment for deep rejuvenation",
    images: []
  },
  {
    id: "microneedling",
    title: "Microneedling",
    description: "Collagen induction therapy for texture and scarring",
    images: [
      { src: "/lovable-uploads/04ac4a20-e938-4966-8d5b-cdba7b58908f.png", alt: "Microneedling treatment progression showing skin improvement", caption: "Progressive skin improvement" }
    ]
  },
  {
    id: "chemical-peel",
    title: "Chemical Peels",
    description: "Exfoliation for pigmentation, acne, and texture",
    images: []
  },
  {
    id: "prp",
    title: "PRP (Platelet-Rich Plasma)",
    description: "Your own growth factors for natural rejuvenation",
    images: []
  },
  {
    id: "hydrafacial",
    title: "HydraFacial",
    description: "Deep cleansing and hydration treatment",
    images: []
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
                Real patient transformations showcasing the power of advanced skin rejuvenation treatments from our Harley Street clinic.
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

        {/* Quick Navigation */}
        <section className="py-8 bg-accent/50 sticky top-0 z-40 backdrop-blur-sm border-b border-white/10">
          <div className="page-container">
            <div className="flex flex-wrap gap-3 justify-center">
              {gallerySections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Sections */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-6xl mx-auto space-y-20">
              {gallerySections.map((section) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{section.title}</h2>
                    <p className="text-gray-400">{section.description}</p>
                  </div>

                  {section.images.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.images.map((image, imageIndex) => (
                        <motion.div
                          key={imageIndex}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: imageIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="group relative overflow-hidden rounded-xl bg-gray-900"
                        >
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-sm">{image.caption}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-gray-900/30 border border-white/10 rounded-xl p-12 text-center">
                      <p className="text-gray-500">Gallery images coming soon</p>
                      <p className="text-gray-600 text-sm mt-2">Contact us to see examples during your consultation</p>
                    </div>
                  )}
                </motion.div>
              ))}
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
          <p>View authentic skin rejuvenation before and after photos from our Harley Street clinic. Our expert doctors deliver transformative results using Profhilo, Polynucleotides, microneedling, chemical peels, and PRP treatments.</p>
          
          <h3>Bio-Remodelling Results</h3>
          <p>Browse Profhilo and Polynucleotide treatment results showing improved skin hydration, texture, and laxity. These regenerative treatments stimulate your own collagen production for natural, lasting improvements.</p>
          
          <h3>Collagen Induction Therapy Results</h3>
          <p>Explore microneedling and PRP before and after photos showing reduced scarring, improved texture, and overall skin rejuvenation. Each treatment programme is tailored to your specific skin concerns.</p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterSkinRejuvenation;
