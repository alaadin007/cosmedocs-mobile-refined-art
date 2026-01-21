import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

// Before/After Images
import fillerBA1 from "@/assets/before-after/filler-ba-1.jpg";
import fillerBA2 from "@/assets/before-after/filler-ba-2.jpg";

// Gallery sections with anchors
const gallerySections = [
  {
    id: "lip-filler",
    title: "Lip Filler",
    description: "Natural lip enhancement results",
    images: [
      { src: fillerBA2, alt: "Lip filler before and after showing natural enhancement", caption: "Natural lip enhancement" }
    ]
  },
  {
    id: "cheek-filler",
    title: "Cheek Filler",
    description: "Mid-face volume restoration",
    images: [
      { src: fillerBA1, alt: "Cheek filler before and after showing restored facial volume", caption: "Full-face rejuvenation including cheek enhancement" }
    ]
  },
  {
    id: "jawline-filler",
    title: "Jawline Filler",
    description: "Jawline definition and contouring",
    images: []
  },
  {
    id: "chin-filler",
    title: "Chin Filler",
    description: "Chin projection and lower face balance",
    images: []
  },
  {
    id: "tear-trough",
    title: "Tear Trough",
    description: "Under-eye hollowing correction",
    images: []
  },
  {
    id: "nose-filler",
    title: "Non-Surgical Rhinoplasty",
    description: "Nose reshaping without surgery",
    images: []
  },
  {
    id: "temple-filler",
    title: "Temple Filler",
    description: "Upper face volume restoration",
    images: []
  },
  {
    id: "facial-lines",
    title: "Facial Lines & Folds",
    description: "Including nasolabial folds, marionette lines, pre-jowl sulcus, and perioral lines",
    images: [
      { src: fillerBA1, alt: "Before and after treatment for facial lines and folds showing softened nasolabial folds", caption: "Nasolabial folds and mid-face volume loss" }
    ]
  }
];

const BeforeAfterDermalFillers = () => {
  const seoData = generateSEOMetadata(
    "Dermal Filler Before & After Results | CosmeDocs Harley Street",
    "View real dermal filler before and after results from our London clinic. Doctor-led treatments for lips, cheeks, jawline, and facial rejuvenation.",
    "/before-after/dermal-fillers/"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://cosmedocs.co.uk/before-after/dermal-fillers/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://cosmedocs.co.uk/before-after/dermal-fillers/" />
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
                "name": "Dermal Filler Before & After Results",
                "description": "Real patient transformations from CosmeDocs Harley Street clinic",
                "url": "https://cosmedocs.co.uk/before-after/dermal-fillers/"
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
                Dermal Filler Before & After Results
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Real patient transformations from our Harley Street clinic. Every result reflects our commitment to natural, doctor-led aesthetic medicine.
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
              {gallerySections.map((section, sectionIndex) => (
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
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Learn More About Our Treatments</h2>
                <p className="text-gray-400">
                  Explore our dermal filler treatments and understand which approach may be right for you.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/treatments/dermal-fillers/"
                  className="group block p-6 bg-black/40 border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C9A050] transition-colors">
                    Dermal Fillers Overview
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Learn about our full-face approach to dermal filler treatment and our medical philosophy.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#C9A050] text-sm font-medium">
                    Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link 
                  to="/treatments/dermal-fillers/areas/"
                  className="group block p-6 bg-black/40 border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C9A050] transition-colors">
                    Facial Areas & Concerns
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Understand why facial changes occur and how they relate to overall facial structure.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#C9A050] text-sm font-medium">
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link 
                  to="/cheek-filler"
                  className="group block p-6 bg-black/40 border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C9A050] transition-colors">
                    Cheek Filler
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Restore mid-face volume and support for natural facial rejuvenation.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#C9A050] text-sm font-medium">
                    View treatment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link 
                  to="/jawline-filler"
                  className="group block p-6 bg-black/40 border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C9A050] transition-colors">
                    Jawline Filler
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Define and contour the jawline for improved lower face structure.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#C9A050] text-sm font-medium">
                    View treatment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Book Your Consultation</h2>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                  Every treatment begins with a comprehensive facial assessment. Our doctors will discuss your concerns and recommend an approach tailored to your facial structure.
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
      </div>
    </>
  );
};

export default BeforeAfterDermalFillers;
