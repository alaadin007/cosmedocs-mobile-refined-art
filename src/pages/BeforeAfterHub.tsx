import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, MapPin, Camera, Award, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Gallery category data
const galleryCategories = [
  {
    id: "botox",
    title: "Botox Results",
    description: "View real Botox before & after results including forehead lines, crow's feet, frown lines, and more.",
    link: "/before-after/botox/",
    image: "/lovable-uploads/062e112b-382a-4f69-a659-07824545dd80.png",
    treatments: ["Forehead Lines", "Frown Lines", "Crow's Feet", "Bunny Lines", "Gummy Smile"]
  },
  {
    id: "dermal-fillers",
    title: "Dermal Filler Results",
    description: "Explore natural lip filler, cheek filler, jawline, and facial rejuvenation transformations.",
    link: "/before-after/dermal-fillers/",
    image: "/lovable-uploads/729455dc-8926-4c98-9c54-10530134f7f3.png",
    treatments: ["Lip Filler", "Cheek Filler", "Jawline Filler", "Tear Trough", "Non-Surgical Rhinoplasty"]
  },
  {
    id: "skin-rejuvenation",
    title: "Skin Rejuvenation Results",
    description: "See the transformative power of Profhilo, Polynucleotides, and advanced skin treatments.",
    link: "/before-after/skin-rejuvenation/",
    image: "/lovable-uploads/c5117df6-2f03-4565-8ede-2a7fa83bb2fe.png",
    treatments: ["Profhilo", "Polynucleotides", "Microneedling", "Chemical Peels", "PRP"]
  }
];

// Featured transformations for the hero section
const featuredTransformations = [
  { src: "/lovable-uploads/729455dc-8926-4c98-9c54-10530134f7f3.png", alt: "Lip enhancement before and after", treatment: "Lip Enhancement" },
  { src: "/lovable-uploads/def5f295-bb56-4f08-9271-7e38269dffc8.png", alt: "Non-surgical rhinoplasty results", treatment: "Nose Reshaping" },
  { src: "/lovable-uploads/cbb65a65-f2dc-4d3b-a5ae-7f2596f129f4.png", alt: "Facial contouring transformation", treatment: "Facial Contouring" },
  { src: "/lovable-uploads/04ac4a20-e938-4966-8d5b-cdba7b58908f.png", alt: "Microneedling skin improvement", treatment: "Skin Rejuvenation" }
];

const BeforeAfterHub = () => {
  const seoData = generateSEOMetadata(
    "Before & After Gallery - Real Patient Results | CosmeDocs Harley Street",
    "View real before and after results from our Harley Street clinic. Authentic patient transformations with Botox, dermal fillers, and skin rejuvenation treatments.",
    "/before-after/"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://cosmedocs.co.uk/before-after/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://cosmedocs.co.uk/before-after/" />
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
                "description": "Doctor-led aesthetic medicine clinic on Harley Street, London",
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
                "name": "Before & After Results Gallery",
                "description": "Real patient before and after transformations from CosmeDocs Harley Street",
                "url": "https://cosmedocs.co.uk/before-after/"
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white">
                Before & After{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A050] to-amber-400">
                  Gallery
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                Real patient transformations from our Harley Street clinic. Our aesthetics is invisible art — 
                bold, natural, always your way.
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

        {/* Featured Transformations Grid */}
        <section className="py-16">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Featured Transformations</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A glimpse into the natural, refined results our patients achieve.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featuredTransformations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-gray-900"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">{item.treatment}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Categories */}
        <section className="py-16 bg-accent/30">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Browse by Treatment</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore our galleries organised by treatment type to see results relevant to your concerns.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {galleryCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={category.link}
                    className="group block bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C9A050]/30 transition-all duration-300"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#C9A050] transition-colors flex items-center gap-2">
                        <Camera className="w-5 h-5" />
                        {category.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.treatments.slice(0, 3).map((treatment) => (
                          <span
                            key={treatment}
                            className="text-xs px-2 py-1 bg-white/5 text-gray-300 rounded-full"
                          >
                            {treatment}
                          </span>
                        ))}
                        {category.treatments.length > 3 && (
                          <span className="text-xs px-2 py-1 text-gray-500">
                            +{category.treatments.length - 3} more
                          </span>
                        )}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Ready for Your Transformation?
                </h2>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                  Book a consultation with our expert doctors and discover how we can help you achieve 
                  natural, beautiful results tailored to your unique features.
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
          <h2>Real Patient Results Gallery</h2>
          <p>View authentic before and after photos from our Harley Street clinic. Our patients have achieved natural, beautiful results with Botox, dermal fillers, lip enhancement, non-surgical nose jobs, and facial rejuvenation treatments.</p>
          
          <h3>Botox Before & After Results</h3>
          <p>Browse our Botox gallery showcasing forehead line treatment, crow's feet reduction, frown line smoothing, bunny lines correction, and gummy smile treatment results from our London clinic.</p>
          
          <h3>Dermal Filler Before & After Results</h3>
          <p>Explore natural lip filler transformations, cheek enhancement, jawline contouring, tear trough correction, and non-surgical rhinoplasty results achieved by our expert doctors.</p>
          
          <h3>Skin Rejuvenation Before & After</h3>
          <p>See the power of Profhilo, Polynucleotides, microneedling, chemical peels, and PRP treatments in our skin rejuvenation gallery. Real improvements in skin texture, hydration, and overall radiance.</p>
          
          <h3>CosmeDocs Harley Street Since 2007</h3>
          <p>With over 1 million treatments performed since 2007, CosmeDocs has established itself as a leading aesthetic medicine clinic. Our before and after gallery demonstrates our commitment to natural-looking results and aesthetic excellence.</p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterHub;
