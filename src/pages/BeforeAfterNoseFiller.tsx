import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MapPin, Calendar, Syringe, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import BeforeAfterGrid from '@/components/BeforeAfterGrid';

const galleryImages = [
  {
    src: "/images/before-after/dermal-fillers/nose/nose-filler-procedure-injection.jpg",
    alt: "Non-surgical nose job procedure showing precise filler injection technique by doctor",
    caption: "Precision injection technique — our doctors use fine needles and cannulae for controlled, safe placement during non-surgical nose reshaping."
  },
  {
    src: "/images/before-after/dermal-fillers/nose/nose-filler-dorsal-hump-female.jpg",
    alt: "Non-surgical nose job before and after showing dorsal hump camouflage in female patient",
    caption: "Dorsal hump camouflage — precise filler placement creates a straighter nasal bridge profile without surgery."
  },
  {
    src: "/images/before-after/dermal-fillers/nose/nose-filler-male-profile.jpg",
    alt: "Male non-surgical rhinoplasty before and after showing profile refinement",
    caption: "Male profile refinement — smoothing the nasal bridge contour whilst maintaining a natural, masculine appearance."
  },
  {
    src: "/images/before-after/dermal-fillers/nose/nose-filler-asian-before.jpg",
    alt: "Asian nose reshaping before treatment showing flat nasal bridge profile",
    caption: (
      <span>
        <strong className="text-[#C9A050]">Before:</strong> Asian nose reshaping — patient seeking improved bridge definition and profile balance whilst respecting natural ethnic features.
      </span>
    )
  },
  {
    src: "/images/before-after/dermal-fillers/nose/nose-filler-asian-after.jpg",
    alt: "Asian nose reshaping after non-surgical rhinoplasty showing enhanced bridge and profile",
    caption: (
      <span>
        <strong className="text-[#C9A050]">After:</strong> Enhanced nasal bridge height and refined contour — subtle, natural improvement that complements the patient's facial harmony.
      </span>
    )
  },
  {
    src: "/images/before-after/dermal-fillers/nose/nose-filler-early-case-2010.jpg",
    alt: "Non-surgical nose reshaping before and immediately after treatment from 2010",
    caption: (
      <span>
        <strong className="text-[#C9A050]">One of our earliest cases (c. 2010):</strong> Before and immediately after non-surgical nose reshaping.
        We were amongst the first UK clinics to offer this treatment — over 17 years of experience in nose filler.
      </span>
    )
  },
  {
    src: "/images/before-after/dermal-fillers/nose/large-nose-dorsal-bump-before.jpg",
    alt: "Large nose with prominent dorsal bump before non-surgical rhinoplasty treatment",
    caption: (
      <span>
        <strong className="text-[#C9A050]">Before:</strong> Prominent dorsal bump on a larger nose.
        Patient preferred a non-surgical approach — reluctant for surgery but unhappy with the bump and overall contour.
      </span>
    )
  },
  {
    src: "/images/before-after/dermal-fillers/nose/large-nose-dorsal-bump-after.jpg",
    alt: "After non-surgical rhinoplasty showing smoothed dorsal bump and improved nasal contour",
    caption: (
      <span>
        <strong className="text-[#C9A050]">After:</strong> Dorsal bump smoothed, overall nose contour more balanced.
        The nose remains its natural size, but improved proportions create the appearance of a more refined, smaller nose.
        A 15-year-old case demonstrating long-term expertise.
      </span>
    )
  },
  {
    src: "/images/before-after/dermal-fillers/nose/nose-filler-before-after.jpg",
    alt: "Non-surgical nose job before and after showing bridge refinement and tip support",
    caption: "Bridge refinement and subtle tip support — achieving a smoother profile with carefully placed hyaluronic acid filler."
  },
];

const BeforeAfterNoseFiller = () => {
  const seoData = generateSEOMetadata(
    "Non-Surgical Nose Job Before & After | CosmeDocs",
    "View real non-surgical rhinoplasty before and after results. Nose filler for dorsal hump camouflage, profile refinement, and ethnic nose reshaping since 2010.",
    "/before-after/dermal-fillers/nose/"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://cosmedocs.co.uk/before-after/dermal-fillers/nose/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://cosmedocs.co.uk/before-after/dermal-fillers/nose/" />
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
                "name": "Non-Surgical Nose Job Before & After Results",
                "description": "Real nose filler patient transformations from CosmeDocs Harley Street",
                "url": "https://cosmedocs.co.uk/before-after/dermal-fillers/nose/"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        {/* Compact Hero — Home2 style */}
        <section className="relative overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-neutral-800 pt-0 pb-14">
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
              items={[
                { label: 'Before & After', path: '/before-after/' },
                { label: 'Dermal Fillers', path: '/before-after/dermal-fillers/' }
              ]}
              currentPage="Non-Surgical Rhinoplasty"
            />

            <div className="max-w-3xl pt-6 pb-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-5xl font-light text-white mb-5 leading-tight tracking-tight">
                  Non-Surgical Nose Job{" "}
                  <span className="font-semibold text-[#C9A050]">Before & After</span>
                </h1>
                <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl font-light">
                  Real nose reshaping results using hyaluronic acid filler. Profile refinement, dorsal hump
                  camouflage, and contour correction — without surgery.
                </p>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-8 text-sm text-white/40"
              >
                <span className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#C9A050]/70" />
                  Unretouched Photos
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#C9A050]/70" />
                  Harley Street, London
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#C9A050]/70" />
                  Performing Since 2010
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="relative py-16 bg-gradient-to-b from-neutral-800/50 to-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <BeforeAfterGrid images={galleryImages} initialDisplay={4} loadMoreIncrement={4} />
            </div>
          </div>
        </section>

        {/* Expertise Callouts — two cards side by side */}
        <section className="py-16 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
              {/* Ethnic Noses */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Globe className="w-5 h-5 text-[#C9A050] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base font-medium text-white">Asian & Ethnic Nose Reshaping</p>
                    <p className="text-xs text-white/30 mt-0.5">Since 2010</p>
                  </div>
                </div>
                <p className="text-white/45 text-sm leading-relaxed font-light">
                  We have extensive experience reshaping Asian and ethnic noses, where anatomy and
                  aesthetic goals differ from Caucasian noses. Our doctors understand the nuances of
                  nasal bridge height, tip projection, and skin thickness across different ethnicities.
                </p>
              </motion.div>

              {/* Technique */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Syringe className="w-5 h-5 text-[#C9A050] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base font-medium text-white">Needle, Cannula, or Both</p>
                    <p className="text-xs text-white/30 mt-0.5">Tailored technique</p>
                  </div>
                </div>
                <p className="text-white/45 text-sm leading-relaxed font-light">
                  We use needle, cannula, or a combination of both depending on the anatomy and desired
                  result. A one-point nose job may be appropriate for some patients. See our Instagram
                  for actual procedure videos demonstrating our technique.
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
              Non-surgical rhinoplasty is a medical procedure — a consultation is required to assess suitability.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <p className="text-xl font-light text-white">Explore More Results</p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: "Lip Filler", path: "/before-after/dermal-fillers/lips/" },
                  { label: "Cheek Filler", path: "/before-after/dermal-fillers/cheeks/" },
                  { label: "Jawline Filler", path: "/before-after/dermal-fillers/jawline/" },
                  { label: "Chin Filler", path: "/before-after/dermal-fillers/chin/" },
                  { label: "Tear Trough", path: "/before-after/dermal-fillers/tear-trough/" },
                  { label: "All Filler Results", path: "/before-after/dermal-fillers/" }
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="group flex items-center justify-between p-4 bg-white/[0.03] border border-white/[0.08] rounded-xl hover:border-[#C9A050]/30 transition-all duration-300"
                  >
                    <span className="text-sm font-medium text-white group-hover:text-[#C9A050] transition-colors">
                      {link.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#C9A050] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-white/45 text-sm mb-6 leading-relaxed font-light">
                  Learn more about our approach to non-surgical nose reshaping, including what
                  improvements are achievable and what nose filler cannot do.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20 w-full sm:w-auto">
                      Book Consultation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/treatments/dermal-fillers/">
                    <Button variant="ghost" className="border border-white/20 text-white/70 hover:text-white hover:bg-white/10 px-8 py-5 rounded-full text-base w-full sm:w-auto">
                      About Dermal Fillers
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Non-Surgical Nose Job Before and After Gallery</h2>
          <p>
            View authentic non-surgical rhinoplasty before and after results from CosmeDocs Harley Street.
            Our gallery showcases dorsal hump camouflage, profile refinement, nasal tip support, and contour
            correction using hyaluronic acid dermal filler. We have performed non-surgical nose reshaping
            since 2010, with expertise in both Caucasian and ethnic nose anatomy.
          </p>
          <h3>Asian and Ethnic Nose Reshaping</h3>
          <p>
            CosmeDocs has specialised in Asian and ethnic nose reshaping since 2010. We understand the
            anatomical differences — including skin thickness, bridge height, and tip projection — that
            require a tailored approach. Our doctors use needle, cannula, or a combination of both for
            optimal results, including the one-point nose job technique where appropriate.
          </p>
          <h3>Over 15 Years of Nose Filler Experience</h3>
          <p>
            We were amongst the first UK clinics to offer non-surgical rhinoplasty. Our gallery includes
            cases from 2010 onwards, demonstrating consistent, natural results over more than 15 years.
            Our aesthetics is invisible art — bold, natural, always your way.
          </p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterNoseFiller;
