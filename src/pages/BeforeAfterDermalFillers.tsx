import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MapPin, Camera, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';

// Area cards with representative images and links
const areaCards = [
  {
    id: "lips",
    title: "Lip Filler",
    subtitle: "Natural enhancement & corrections",
    image: "/images/before-after/dermal-fillers/lips/lip-filler-corners-ratio.jpg",
    link: "/before-after/dermal-fillers/lips/",
    imageCount: 9
  },
  {
    id: "cheeks",
    title: "Cheek Filler",
    subtitle: "Mid-face volume restoration",
    image: "/images/before-after/dermal-fillers/full-face-filler-before-after.jpg",
    link: "/before-after/dermal-fillers/cheeks/",
    imageCount: 0
  },
  {
    id: "jawline",
    title: "Jawline Filler",
    subtitle: "Definition & contouring",
    image: "/images/before-after/dermal-fillers/lips/full-face-filler-rejuvenation.jpg",
    link: "/before-after/dermal-fillers/jawline/",
    imageCount: 0
  },
  {
    id: "chin",
    title: "Chin Filler",
    subtitle: "Projection & lower face balance",
    image: "/images/before-after/dermal-fillers/lips/full-face-rejuvenation.jpg",
    link: "/before-after/dermal-fillers/chin/",
    imageCount: 0
  },
  {
    id: "tear-trough",
    title: "Tear Trough",
    subtitle: "Under-eye hollowing correction",
    image: null,
    link: "/before-after/dermal-fillers/tear-trough/",
    imageCount: 0
  },
  {
    id: "nose",
    title: "Non-Surgical Rhinoplasty",
    subtitle: "Nose reshaping without surgery",
    image: "/images/before-after/dermal-fillers/nose-filler-before-after.jpg",
    link: "/before-after/dermal-fillers/nose/",
    imageCount: 0
  },
  {
    id: "temples",
    title: "Temple Filler",
    subtitle: "Upper face volume restoration",
    image: null,
    link: "/before-after/dermal-fillers/temples/",
    imageCount: 0
  }
];

// Facial lines section — anchor only, no URL
const facialLinesConcerns = [
  "Nasolabial folds",
  "Marionette lines",
  "Pre-jowl sulcus",
  "Perioral lines"
];

const BeforeAfterDermalFillers = () => {
  const seoData = generateSEOMetadata(
    "Dermal Filler Before & After Results | CosmeDocs",
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
        {/* Hero */}
        <section className="relative pt-0 pb-16 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
          {/* Subtle gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C9A050]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#C9A050]/3 rounded-full blur-3xl" />
          </div>

          <div className="page-container relative z-10">
            <Breadcrumb
              items={[{ label: 'Before & After', path: '/before-after/' }]}
              currentPage="Dermal Fillers"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center mt-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Dermal Filler{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A050] to-amber-400">
                  Before & After
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Real patient transformations from our Harley Street clinic. Every result reflects our 
                commitment to natural, doctor-led aesthetic medicine.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#C9A050] to-transparent mx-auto mt-8" />
            </motion.div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-5 border-y border-white/10 bg-black/50">
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
                <Star className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-gray-400">Doctor-Led Results</span>
              </div>
            </div>
          </div>
        </section>

        {/* Area Cards Grid */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="text-2xl md:text-3xl font-bold text-white mb-3">Browse by Treatment Area</p>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Select an area to view detailed before and after galleries for each dermal filler treatment.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {areaCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={card.link}
                    className="group block bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-[#C9A050]/40 hover:bg-white/[0.06] transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden bg-gray-900/50 relative">
                      {card.image ? (
                        <img
                          src={card.image}
                          alt={`${card.title} before and after results`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Camera className="w-10 h-10 text-gray-700" />
                        </div>
                      )}
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {card.imageCount > 0 && (
                        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                          {card.imageCount} photos
                        </div>
                      )}
                      
                      {card.imageCount === 0 && card.image && (
                        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-gray-400 text-xs px-2.5 py-1 rounded-full">
                          Coming soon
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <p className="text-lg font-semibold text-white group-hover:text-[#C9A050] transition-colors mb-1">
                        {card.title}
                      </p>
                      <p className="text-sm text-gray-500 mb-3">{card.subtitle}</p>
                      <span className="inline-flex items-center gap-1 text-[#C9A050] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View gallery <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Facial Lines & Folds — Anchor section, not a URL */}
        <section id="facial-lines" className="py-16 bg-accent/30 scroll-mt-20">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <p className="text-2xl md:text-3xl font-bold text-white mb-3">Facial Lines & Folds</p>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Results for nasolabial folds, marionette lines, pre-jowl sulcus, and perioral lines — 
                  grouped here as these concerns are addressed within our full-face treatment approach.
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-3 justify-center mb-10">
                {facialLinesConcerns.map((concern) => (
                  <span
                    key={concern}
                    className="px-4 py-2 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-full"
                  >
                    {concern}
                  </span>
                ))}
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 text-center">
                <Camera className="w-8 h-8 text-gray-700 mx-auto mb-4" />
                <p className="text-gray-500 mb-2">Gallery images coming soon</p>
                <p className="text-gray-600 text-sm">
                  Contact us to see examples during your consultation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 border-t border-white/10">
          <div className="page-container">
            <p className="text-center text-gray-500 text-xs max-w-3xl mx-auto leading-relaxed">
              Individual results may vary. All images show real patients treated at CosmeDocs. 
              Photos are unretouched and taken under consistent clinical conditions. 
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
                <p className="text-2xl font-bold text-white mb-3">Learn More</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  to="/treatments/dermal-fillers/"
                  className="group flex items-center justify-between p-5 bg-black/40 border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-colors"
                >
                  <div>
                    <p className="font-semibold text-white group-hover:text-[#C9A050] transition-colors">Dermal Fillers Overview</p>
                    <p className="text-sm text-gray-500 mt-1">Our philosophy, approach, and safety</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#C9A050] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>

                <Link
                  to="/treatments/dermal-fillers/areas/"
                  className="group flex items-center justify-between p-5 bg-black/40 border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-colors"
                >
                  <div>
                    <p className="font-semibold text-white group-hover:text-[#C9A050] transition-colors">Facial Areas & Concerns</p>
                    <p className="text-sm text-gray-500 mt-1">Understanding facial changes and structure</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#C9A050] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="page-container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Every treatment begins with a comprehensive facial assessment. Our doctors will 
                  discuss your concerns and recommend an approach tailored to your facial structure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button className="bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base w-full sm:w-auto">
                      Book Consultation
                    </Button>
                  </Link>
                  <Link to="/before-after/">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-5 rounded-full text-base w-full sm:w-auto">
                      Back to Gallery
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Dermal Filler Before and After Gallery</h2>
          <p>
            Browse authentic dermal filler before and after results from CosmeDocs Harley Street clinic. 
            Our visual proof hub covers lip filler, cheek filler, jawline filler, chin filler, tear trough, 
            non-surgical rhinoplasty, temple filler, and facial lines including nasolabial folds, 
            marionette lines, pre-jowl sulcus, and perioral lines.
          </p>
          <h3>Doctor-Led Dermal Filler Results London</h3>
          <p>
            Every dermal filler treatment at CosmeDocs is performed by qualified doctors using a full-face 
            assessment approach. Our before and after gallery demonstrates the natural, balanced results 
            achievable through expert injection technique and anatomical understanding.
          </p>
          <p>
            Our aesthetics is invisible art — bold, natural, always your way. CosmeDocs has performed 
            over one million treatments since 2007, establishing a reputation for subtle, refined 
            aesthetic medicine on Harley Street, London.
          </p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterDermalFillers;
