import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MapPin, Camera, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';

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
    imageCount: 6
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

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        {/* Compact Hero — matches Home2 aesthetic */}
        <section className="relative overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-neutral-800 pt-0 pb-16">
          {/* Flowing gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(201, 160, 80, 0.12) 0%, rgba(201, 160, 80, 0.04) 40%, transparent 70%)',
              }}
              animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -20, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, rgba(201, 160, 80, 0.06) 50%, transparent 70%)',
              }}
              animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[{ label: 'Before & After', path: '/before-after/' }]}
              currentPage="Dermal Fillers"
            />

            <div className="max-w-3xl pt-6 pb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-5xl font-light text-white mb-5 leading-tight tracking-tight">
                  Dermal Filler{" "}
                  <span className="font-semibold text-[#C9A050]">Before & After</span>
                </h1>
                <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl font-light">
                  Real patient transformations from our Harley Street clinic. Every result reflects our
                  commitment to natural, doctor-led aesthetic medicine.
                </p>
              </motion.div>

              {/* Trust indicators — same style as Home2 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-8 text-sm text-white/40"
              >
                <span className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#C9A050]/70" />
                  Real Unedited Photos
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#C9A050]/70" />
                  Harley Street, London
                </span>
                <span className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" />
                  Doctor-Led Results
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Area Cards Grid */}
        <section className="relative py-20 bg-gradient-to-b from-neutral-800/50 to-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-2xl md:text-3xl font-light text-white mb-2">
                Browse by <span className="font-semibold text-[#C9A050]">Treatment Area</span>
              </p>
              <p className="text-white/40 max-w-xl font-light">
                Select an area to view detailed before and after galleries.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {areaCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={card.link}
                    className="group block relative bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-[#C9A050]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#C9A050]/5"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden bg-neutral-800/50 relative">
                      {card.image ? (
                        <img
                          src={card.image}
                          alt={`${card.title} before and after results`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Camera className="w-8 h-8 text-white/20" />
                        </div>
                      )}
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {card.imageCount > 0 && (
                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white/80 text-xs px-2.5 py-1 rounded-full border border-white/10">
                          {card.imageCount} photos
                        </div>
                      )}

                      {card.imageCount === 0 && card.image && (
                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white/40 text-xs px-2.5 py-1 rounded-full border border-white/10">
                          Coming soon
                        </div>
                      )}

                      {/* Bottom content overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-lg font-semibold text-white group-hover:text-[#C9A050] transition-colors duration-300">
                          {card.title}
                        </p>
                        <p className="text-sm text-white/50 mt-0.5">{card.subtitle}</p>
                      </div>
                    </div>

                    {/* Hover arrow bar */}
                    <div className="px-5 py-3 flex items-center justify-between border-t border-white/[0.06]">
                      <span className="text-xs text-white/30 font-light">View gallery</span>
                      <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-[#C9A050] group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Facial Lines & Folds — Anchor section */}
        <section id="facial-lines" className="relative py-20 scroll-mt-20 bg-neutral-900">
          {/* Subtle orb */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)',
              }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <p className="text-2xl md:text-3xl font-light text-white mb-2">
                  Facial Lines <span className="font-semibold text-[#C9A050]">& Folds</span>
                </p>
                <p className="text-white/40 font-light leading-relaxed">
                  Results for nasolabial folds, marionette lines, pre-jowl sulcus, and perioral lines —
                  grouped here as these concerns are addressed within our full-face treatment approach.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-2 mb-10"
              >
                {facialLinesConcerns.map((concern) => (
                  <span
                    key={concern}
                    className="px-4 py-2 text-sm text-white/50 bg-white/[0.04] border border-white/[0.08] rounded-full"
                  >
                    {concern}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-10 text-center"
              >
                <Camera className="w-7 h-7 text-white/15 mx-auto mb-4" />
                <p className="text-white/40 mb-1 font-light">Gallery images coming soon</p>
                <p className="text-white/25 text-sm font-light">
                  Contact us to see examples during your consultation
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 border-t border-white/[0.06] bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-center text-white/25 text-xs max-w-3xl mx-auto leading-relaxed font-light">
              Individual results may vary. All images show real patients treated at CosmeDocs.
              Photos are unretouched and taken under consistent clinical conditions.
              A consultation is required before any treatment.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <p className="text-xl font-light text-white">Learn More</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  to="/treatments/dermal-fillers/"
                  className="group flex items-center justify-between p-5 bg-white/[0.03] border border-white/[0.08] rounded-xl hover:border-[#C9A050]/30 transition-all duration-300"
                >
                  <div>
                    <p className="font-medium text-white group-hover:text-[#C9A050] transition-colors">Dermal Fillers Overview</p>
                    <p className="text-sm text-white/30 mt-1 font-light">Our philosophy, approach, and safety</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#C9A050] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>

                <Link
                  to="/treatments/dermal-fillers/areas/"
                  className="group flex items-center justify-between p-5 bg-white/[0.03] border border-white/[0.08] rounded-xl hover:border-[#C9A050]/30 transition-all duration-300"
                >
                  <div>
                    <p className="font-medium text-white group-hover:text-[#C9A050] transition-colors">Facial Areas & Concerns</p>
                    <p className="text-sm text-white/30 mt-1 font-light">Understanding facial changes and structure</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#C9A050] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-white/50 text-base mb-8 leading-relaxed font-light">
                  Every treatment begins with a comprehensive facial assessment. Our doctors will
                  discuss your concerns and recommend an approach tailored to your facial structure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20 w-full sm:w-auto">
                      Book Consultation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/before-after/">
                    <Button variant="ghost" className="border border-white/20 text-white/70 hover:text-white hover:bg-white/10 px-8 py-5 rounded-full text-base w-full sm:w-auto">
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
