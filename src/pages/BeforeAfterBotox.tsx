import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MapPin, Star, Camera, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';

const areaCards = [
  {
    id: "forehead-lines",
    title: "Forehead Lines",
    subtitle: "Horizontal line smoothing",
    image: "/lovable-uploads/062e112b-382a-4f69-a659-07824545dd80.png",
    link: "#forehead-lines",
    imageCount: 1,
  },
  {
    id: "frown-lines",
    title: "Frown Lines",
    subtitle: "Glabella wrinkle reduction",
    image: "/lovable-uploads/062e112b-382a-4f69-a659-07824545dd80.png",
    link: "#frown-lines",
    imageCount: 1,
  },
  {
    id: "crows-feet",
    title: "Crow's Feet",
    subtitle: "Lines around the outer eye corners",
    image: null,
    link: "#crows-feet",
    imageCount: 0,
  },
  {
    id: "masseter",
    title: "Masseter (Jawline Slimming)",
    subtitle: "Facial slimming & bruxism treatment",
    image: null,
    link: "/before-after/botox/masseter/",
    imageCount: 0,
  },
  {
    id: "lip-flip",
    title: "Lip Flip",
    subtitle: "Subtle upper lip enhancement",
    image: null,
    link: "/before-after/botox/lip-flip/",
    imageCount: 0,
  },
  {
    id: "gummy-smile",
    title: "Gummy Smile",
    subtitle: "Reducing excessive gum show",
    image: null,
    link: "#gummy-smile",
    imageCount: 0,
  },
  {
    id: "bunny-lines",
    title: "Bunny Lines",
    subtitle: "Lines on the bridge of the nose",
    image: null,
    link: "#bunny-lines",
    imageCount: 0,
  },
  {
    id: "neck-bands",
    title: "Neck Bands",
    subtitle: "Platysmal bands & Nefertiti lift",
    image: null,
    link: "#neck-bands",
    imageCount: 0,
  },
];

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.cosmedocs.co.uk/#clinic",
      name: "CosmeDocs",
      url: "https://www.cosmedocs.co.uk/",
      telephone: "+442071231123",
      address: {
        "@type": "PostalAddress",
        streetAddress: "10 Harley Street",
        addressLocality: "London",
        postalCode: "W1G 9PF",
        addressCountry: "GB",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "2387",
        bestRating: "5",
      },
    },
    {
      "@type": "ImageGallery",
      "@id": "https://www.cosmedocs.co.uk/before-after/botox/#gallery",
      name: "Botox Before and After Results",
      description:
        "Real patient before and after photographs demonstrating wrinkle reduction, forehead smoothing, and facial rejuvenation achieved through Botox treatment at CosmeDocs Harley Street.",
      url: "https://www.cosmedocs.co.uk/before-after/botox/",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.cosmedocs.co.uk/before-after/botox/#page",
      name: "Botox Before & After Results | Harley Street Clinic",
      description:
        "Real patient before and after results showing wrinkle reduction, forehead smoothing, and crow's feet correction with Botox. Doctor-led treatment on Harley Street.",
      url: "https://www.cosmedocs.co.uk/before-after/botox/",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cosmedocs.co.uk/" },
          { "@type": "ListItem", position: 2, name: "Before & After", item: "https://www.cosmedocs.co.uk/before-after/" },
          { "@type": "ListItem", position: 3, name: "Botox Results", item: "https://www.cosmedocs.co.uk/before-after/botox/" },
        ],
      },
    },
  ],
};

const BeforeAfterBotox = () => {
  return (
    <>
      <Helmet>
        <title>Botox Before &amp; After Results | Harley Street Clinic</title>
        <meta
          name="description"
          content="Real patient before and after results showing wrinkle reduction, forehead smoothing, and crow's feet correction with Botox. Doctor-led treatment on Harley Street."
        />
        <link rel="canonical" href="https://www.cosmedocs.co.uk/before-after/botox/" />
        <meta property="og:title" content="Botox Before & After Results | Harley Street Clinic" />
        <meta property="og:description" content="Real patient before and after results showing wrinkle reduction and facial rejuvenation with Botox. Doctor-led treatment on Harley Street." />
        <meta property="og:url" content="https://www.cosmedocs.co.uk/before-after/botox/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-neutral-800 pt-0 pb-16">
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
              currentPage="Botox"
            />

            <div className="max-w-3xl pt-6 pb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-5xl font-light text-white mb-5 leading-tight tracking-tight">
                  Botox{" "}
                  <span className="font-semibold text-[#C9A050]">Before & After</span>
                </h1>
                <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl font-light">
                  Real patient results from our Harley Street clinic. Each outcome demonstrates 
                  the subtle, natural wrinkle reduction achievable through expert, doctor-led 
                  Botox treatment tailored to individual facial anatomy.
                </p>
              </motion.div>

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
                Select an area to view detailed before and after results.
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {card.imageCount > 0 && (
                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white/80 text-xs px-2.5 py-1 rounded-full border border-white/10">
                          {card.imageCount} photos
                        </div>
                      )}

                      {card.imageCount === 0 && (
                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white/40 text-xs px-2.5 py-1 rounded-full border border-white/10">
                          Coming soon
                        </div>
                      )}

                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-lg font-semibold text-white group-hover:text-[#C9A050] transition-colors duration-300">
                          {card.title}
                        </p>
                        <p className="text-sm text-white/50 mt-0.5">{card.subtitle}</p>
                      </div>
                    </div>

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
                  to="/treatments/botox/"
                  className="group flex items-center justify-between p-5 bg-white/[0.03] border border-white/[0.08] rounded-xl hover:border-[#C9A050]/30 transition-all duration-300"
                >
                  <div>
                    <p className="font-medium text-white group-hover:text-[#C9A050] transition-colors">Botox Overview</p>
                    <p className="text-sm text-white/30 mt-1 font-light">Our philosophy, approach, and safety</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#C9A050] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>

                <Link
                  to="/treatments/botox/medical/"
                  className="group flex items-center justify-between p-5 bg-white/[0.03] border border-white/[0.08] rounded-xl hover:border-[#C9A050]/30 transition-all duration-300"
                >
                  <div>
                    <p className="font-medium text-white group-hover:text-[#C9A050] transition-colors">Medical Botox</p>
                    <p className="text-sm text-white/30 mt-1 font-light">Migraine, bruxism, and hyperhidrosis</p>
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
        <div aria-hidden="true" role="complementary" aria-label="Additional context for search engines" className="sr-only">
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
