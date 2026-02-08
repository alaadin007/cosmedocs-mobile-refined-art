import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, MapPin, Camera, Award, Star, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Breadcrumb from '@/components/Breadcrumb';

const areaCards = [
  {
    id: "forehead-lines",
    title: "Forehead Lines",
    description: "Smoothing horizontal forehead lines for a refreshed, natural appearance.",
    image: "/images/before-after/botox/forehead-lines-before-after-preview.jpg",
    link: "#forehead-lines",
    imageCount: 1,
    treatments: ["Horizontal Lines", "Frontalis Muscle"]
  },
  {
    id: "frown-lines",
    title: "Frown Lines",
    description: "Softening glabella wrinkles between the brows for a calmer, more relaxed look.",
    image: "/images/before-after/botox/frown-lines-before-after-preview.jpg",
    link: "#frown-lines",
    imageCount: 1,
    treatments: ["Glabella Lines", "11 Lines"]
  },
  {
    id: "crows-feet",
    title: "Crow's Feet",
    description: "Reducing fine lines around the outer eye corners whilst maintaining natural expression.",
    image: null,
    link: "#crows-feet",
    imageCount: 0,
    treatments: ["Lateral Canthal Lines", "Eye Area"]
  },
  {
    id: "masseter",
    title: "Masseter (Jawline Slimming)",
    description: "Facial slimming and bruxism treatment through targeted masseter muscle reduction.",
    image: null,
    link: "/before-after/botox/masseter/",
    imageCount: 0,
    treatments: ["Jaw Slimming", "Bruxism", "TMJ"]
  },
  {
    id: "lip-flip",
    title: "Lip Flip",
    description: "Subtle upper lip enhancement using precise Botox placement along the lip border.",
    image: null,
    link: "/before-after/botox/lip-flip/",
    imageCount: 0,
    treatments: ["Upper Lip", "Subtle Enhancement"]
  },
  {
    id: "gummy-smile",
    title: "Gummy Smile",
    description: "Reducing excessive gum show when smiling for a more balanced, confident smile.",
    image: null,
    link: "#gummy-smile",
    imageCount: 0,
    treatments: ["Gum Show Reduction", "Smile Correction"]
  },
  {
    id: "bunny-lines",
    title: "Bunny Lines",
    description: "Smoothing diagonal lines on the bridge of the nose that appear when scrunching.",
    image: null,
    link: "#bunny-lines",
    imageCount: 0,
    treatments: ["Nose Bridge Lines", "Nasalis Muscle"]
  },
  {
    id: "neck-bands",
    title: "Neck Bands",
    description: "Treating platysmal bands and achieving a Nefertiti lift for a smoother neck profile.",
    image: null,
    link: "#neck-bands",
    imageCount: 0,
    treatments: ["Platysmal Bands", "Nefertiti Lift"]
  },
];

const BeforeAfterBotox = () => {
  const seoData = generateSEOMetadata(
    "Botox Before & After Results | Harley Street Clinic",
    "Real patient before and after results showing wrinkle reduction, forehead smoothing, and crow's feet correction with Botox. Doctor-led treatment on Harley Street.",
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
                "@id": "https://www.cosmedocs.co.uk/#clinic",
                "name": "CosmeDocs",
                "url": "https://www.cosmedocs.co.uk/",
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
                "@id": "https://www.cosmedocs.co.uk/before-after/botox/#gallery",
                "name": "Botox Before and After Results",
                "description": "Real patient before and after photographs demonstrating wrinkle reduction, forehead smoothing, and facial rejuvenation achieved through Botox treatment at CosmeDocs Harley Street.",
                "url": "https://www.cosmedocs.co.uk/before-after/botox/"
              },
              {
                "@type": "WebPage",
                "@id": "https://www.cosmedocs.co.uk/before-after/botox/#page",
                "name": "Botox Before & After Results | Harley Street Clinic",
                "description": "Real patient before and after results showing wrinkle reduction, forehead smoothing, and crow's feet correction with Botox. Doctor-led treatment on Harley Street.",
                "url": "https://www.cosmedocs.co.uk/before-after/botox/",
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cosmedocs.co.uk/" },
                    { "@type": "ListItem", "position": 2, "name": "Before & After", "item": "https://www.cosmedocs.co.uk/before-after/" },
                    { "@type": "ListItem", "position": 3, "name": "Botox Results", "item": "https://www.cosmedocs.co.uk/before-after/botox/" }
                  ]
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
          <div className="page-container relative z-10">
            <Breadcrumb
              items={[{ label: 'Before & After', path: '/before-after/' }]}
              currentPage="Botox"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center pt-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white">
                Botox{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A050] to-amber-400">
                  Before & After
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                Real patient results from our Harley Street clinic. Each outcome demonstrates
                the subtle, natural wrinkle reduction achievable through expert, doctor-led
                Botox treatment tailored to individual facial anatomy.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#C9A050] to-transparent mx-auto"></div>
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-6 border-y border-white/10 bg-black/50">
          <div className="page-container">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-gray-400">Real Unedited Photos</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-gray-400">Harley Street, London</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-gray-400">1M+ Treatments Since 2007</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-gray-400">Doctor-Led Clinic</span>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Area Cards */}
        <section className="py-16 bg-accent/30">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Browse by Treatment Area</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore our Botox galleries organised by treatment area to see results relevant to your concerns.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {areaCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.07 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={card.link}
                    className="group block bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C9A050]/30 transition-all duration-300"
                  >
                    <div className="overflow-hidden bg-gray-900">
                      {card.image ? (
                        <img
                          src={card.image}
                          alt={`${card.title} before and after results`}
                          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center relative">
                          <Camera className="w-8 h-8 text-white/15" />
                          {card.imageCount === 0 && (
                            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white/40 text-xs px-2.5 py-1 rounded-full border border-white/10">
                              Coming soon
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#C9A050] transition-colors flex items-center gap-2">
                        <Camera className="w-5 h-5" />
                        {card.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {card.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {card.treatments.map((treatment) => (
                          <span
                            key={treatment}
                            className="text-xs px-2 py-1 bg-white/5 text-gray-300 rounded-full"
                          >
                            {treatment}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[#C9A050] text-sm font-medium">
                        View Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-xl font-bold text-white">Learn More</h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  to="/treatments/botox/"
                  className="group flex items-center justify-between p-5 bg-black/40 border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-all duration-300"
                >
                  <div>
                    <p className="font-medium text-white group-hover:text-[#C9A050] transition-colors">Botox Overview</p>
                    <p className="text-sm text-gray-500 mt-1">Our philosophy, approach, and safety</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#C9A050] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>

                <Link
                  to="/treatments/botox/medical/"
                  className="group flex items-center justify-between p-5 bg-black/40 border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-all duration-300"
                >
                  <div>
                    <p className="font-medium text-white group-hover:text-[#C9A050] transition-colors">Medical Botox</p>
                    <p className="text-sm text-gray-500 mt-1">Migraine, bruxism, and hyperhidrosis</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#C9A050] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="page-container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Ready for Your Transformation?
                </h2>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
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
        <section className="py-8 border-t border-white/10 bg-black">
          <div className="page-container">
            <p className="text-center text-gray-600 text-xs max-w-3xl mx-auto leading-relaxed">
              Individual results may vary. All images show real patients treated at CosmeDocs.
              Photos are unretouched and taken under consistent clinical conditions.
              A consultation is required before any treatment.
            </p>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Botox Before & After Results Gallery</h2>
          <p>
            Botox before and after results gallery from CosmeDocs Harley Street clinic. These
            real patient photographs demonstrate wrinkle reduction, forehead line smoothing,
            frown line correction, crow's feet treatment, and facial slimming achieved through
            expert Botox treatment. Botox (botulinum toxin) works by temporarily relaxing
            targeted facial muscles, reducing the appearance of dynamic wrinkles whilst
            preserving natural facial expression. CosmeDocs has performed over one million
            aesthetic procedures since 2007, with all treatments administered by GMC-registered
            doctors at 10 Harley Street, London W1G 9PF.
          </p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterBotox;
