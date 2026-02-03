import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

// Gallery sections with anchors for Botox treatments
const gallerySections = [
  {
    id: "forehead-lines",
    title: "Forehead Lines",
    description: "Horizontal forehead line smoothing",
    images: [
      { src: "/lovable-uploads/062e112b-382a-4f69-a659-07824545dd80.png", alt: "Forehead Botox before and after showing smoothed horizontal lines", caption: "Forehead line treatment" }
    ]
  },
  {
    id: "frown-lines",
    title: "Frown Lines (Glabella)",
    description: "Vertical lines between the eyebrows",
    images: [
      { src: "/lovable-uploads/062e112b-382a-4f69-a659-07824545dd80.png", alt: "Frown line Botox before and after showing reduced glabella lines", caption: "Frown line relaxation" }
    ]
  },
  {
    id: "crows-feet",
    title: "Crow's Feet",
    description: "Lines around the outer corners of eyes",
    images: []
  },
  {
    id: "bunny-lines",
    title: "Bunny Lines",
    description: "Lines on the bridge of the nose",
    images: []
  },
  {
    id: "gummy-smile",
    title: "Gummy Smile",
    description: "Reducing excessive gum show when smiling",
    images: []
  },
  {
    id: "masseter",
    title: "Masseter (Jawline Slimming)",
    description: "Facial slimming and teeth grinding treatment",
    images: []
  },
  {
    id: "neck-bands",
    title: "Neck Bands (Platysmal Bands)",
    description: "Vertical neck bands and Nefertiti lift",
    images: []
  }
];

const BeforeAfterBotox = () => {
  const seoData = generateSEOMetadata(
    "Botox Before & After Results | CosmeDocs Harley Street London",
    "View real Botox before and after results from our London clinic. See forehead lines, frown lines, crow's feet, and jawline slimming transformations.",
    "/before-after/botox/"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://cosmedocs.co.uk/before-after/botox/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://cosmedocs.co.uk/before-after/botox/" />
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
                "name": "Botox Before & After Results",
                "description": "Real patient Botox transformations from CosmeDocs Harley Street clinic",
                "url": "https://cosmedocs.co.uk/before-after/botox/"
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
                Botox Before & After Results
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Real patient transformations showcasing the subtle, natural results of expert Botox treatment from our Harley Street clinic.
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
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Learn More About Botox</h2>
                <p className="text-gray-400">
                  Explore our Botox treatments and understand which areas may benefit you.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/treatments/botox/"
                  className="group block p-6 bg-black/40 border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C9A050] transition-colors">
                    Face Botox Overview
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Learn about our comprehensive approach to facial Botox treatment.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#C9A050] text-sm font-medium">
                    Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link 
                  to="/treatments/masseter-botox/"
                  className="group block p-6 bg-black/40 border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C9A050] transition-colors">
                    Masseter Botox
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Facial slimming and teeth grinding treatment with Botox.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#C9A050] text-sm font-medium">
                    View treatment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link 
                  to="/treatments/frown-line-botox/"
                  className="group block p-6 bg-black/40 border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C9A050] transition-colors">
                    Frown Line Botox
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Smooth vertical lines between the eyebrows (glabella lines).
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Book Your Consultation</h2>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                  Every treatment begins with a comprehensive facial assessment. Our doctors will discuss your concerns and recommend an approach tailored to your unique features.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-6 rounded-full text-lg w-full sm:w-auto">
                      Book Consultation
                    </Button>
                  </Link>
                  <Link to="/treatments/botox/">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg w-full sm:w-auto">
                      Learn About Botox
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Botox Before & After Gallery - Real Results</h2>
          <p>View authentic Botox before and after photos from our Harley Street clinic. Our expert doctors have performed over 1 million injections since 2007, achieving natural-looking results for patients seeking wrinkle reduction.</p>
          
          <h3>Upper Face Botox Results</h3>
          <p>Browse forehead line, frown line, and crow's feet Botox results. Our subtle approach ensures natural movement while significantly reducing the appearance of dynamic wrinkles.</p>
          
          <h3>Lower Face & Specialised Botox</h3>
          <p>Explore masseter Botox for facial slimming, gummy smile correction, and Nefertiti lift results. Each treatment is tailored to complement your unique facial structure.</p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterBotox;
