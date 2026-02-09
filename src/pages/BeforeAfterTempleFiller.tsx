import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MapPin, Calendar, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';

const BeforeAfterTempleFiller = () => {
  const seoData = generateSEOMetadata(
    "Temple Filler Before & After Results | CosmeDocs Harley Street",
    "View real temple filler before and after results from our Harley Street clinic. Doctor-led upper face volume restoration for natural, balanced outcomes.",
    "/before-after/dermal-fillers/temples/"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.co.uk/before-after/dermal-fillers/temples/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.co.uk/before-after/dermal-fillers/temples/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "name": "CosmeDocs",
                "description": "Doctor-led aesthetic medicine clinic on Harley Street",
                "url": "https://www.cosmedocs.co.uk/",
                "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" },
                "medicalSpecialty": "Aesthetic Medicine"
              },
              {
                "@type": "ImageGallery",
                "name": "Temple Filler Before & After Results",
                "description": "Real patient temple filler transformations from CosmeDocs Harley Street clinic",
                "url": "https://www.cosmedocs.co.uk/before-after/dermal-fillers/temples/"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        <section className="relative overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-neutral-800 pt-0 pb-16">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[
                { label: 'Before & After', path: '/before-after/' },
                { label: 'Dermal Fillers', path: '/before-after/dermal-fillers/' }
              ]}
              currentPage="Temple Filler"
            />
            <div className="max-w-3xl pt-6 pb-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <h1 className="text-4xl md:text-5xl font-light text-white mb-5 leading-tight tracking-tight">
                  Temple Filler <span className="font-semibold text-[#C9A050]">Before & After</span>
                </h1>
                <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl font-light">
                  Real patient results showing upper face volume restoration. Temple hollowing is one of the earliest signs of facial ageing — and one of the most transformative areas to treat.
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

        <section className="py-20 bg-neutral-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-10 text-center"
            >
              <Camera className="w-7 h-7 text-white/15 mx-auto mb-4" />
              <p className="text-white/40 mb-1 font-light">Gallery images coming soon</p>
              <p className="text-white/25 text-sm font-light">Contact us to see examples during your consultation</p>
            </motion.div>
          </div>
        </section>

        <section className="py-8 border-t border-white/[0.06] bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-center text-white/25 text-xs max-w-3xl mx-auto leading-relaxed font-light">
              Individual results may vary. All images show real patients treated at CosmeDocs. Photos are unretouched and taken under consistent clinical conditions. A consultation is required before any treatment.
            </p>
          </div>
        </section>

        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <p className="text-white/50 text-base mb-8 leading-relaxed font-light">
                  Every treatment begins with a comprehensive facial assessment. Our doctors will discuss your concerns and recommend an approach tailored to your facial structure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base transition-all duration-300 w-full sm:w-auto">
                      Book Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/before-after/dermal-fillers/">
                    <Button variant="ghost" className="border border-white/20 text-white/70 hover:text-white hover:bg-white/10 px-8 py-5 rounded-full text-base w-full sm:w-auto">
                      Back to Dermal Fillers
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="sr-only">
          <h2>Temple Filler Before and After Gallery</h2>
          <p>Browse authentic temple filler before and after results from CosmeDocs Harley Street. Temple volume restoration addresses upper face hollowing, one of the earliest visible signs of facial ageing. Our aesthetics is invisible art — bold, natural, always your way.</p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterTempleFiller;
