import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  {
    src: "/images/before-after/dermal-fillers/chin/chin-filler-result-1.jpg",
    alt: "Before and after chin filler showing improved facial balance and lower face definition",
    caption: "Improved facial balance and lower face definition following chin filler treatment.",
  },
  {
    src: "/images/before-after/dermal-fillers/chin/chin-filler-result-2.jpg",
    alt: "Before and after chin filler demonstrating enhanced jawline contour and chin projection",
    caption: "Enhanced jawline contour and chin projection with strategic filler placement.",
  },
  {
    src: "/images/before-after/dermal-fillers/chin/chin-filler-result-3.jpg",
    alt: "Before and after chin filler showing profile harmonisation and improved chin shape",
    caption: "Profile harmonisation and improved chin shape — subtle, natural results.",
  },
  {
    src: "/images/before-after/dermal-fillers/chin/chin-filler-result-4.jpg",
    alt: "Before and after chin filler demonstrating improved profile projection and jawline definition",
    caption: "Improved profile projection and jawline definition through targeted chin augmentation.",
  },
  {
    src: "/images/before-after/dermal-fillers/chin/chin-filler-result-5.jpg",
    alt: "Before and after chin filler showing chin contouring and lower face balance",
    caption: "Chin contouring for improved lower face balance and smoother profile line.",
  },
  {
    src: "/images/before-after/dermal-fillers/chin/chin-filler-result-6.jpg",
    alt: "Before and after chin filler showing V-line chin enhancement and projection",
    caption: "V-line chin enhancement — refined projection whilst maintaining natural facial proportions.",
  },
  {
    src: "/images/before-after/dermal-fillers/chin/chin-filler-result-7.jpg",
    alt: "Before and after chin filler demonstrating facial rejuvenation and chin augmentation",
    caption: "Facial rejuvenation through chin augmentation — a more balanced, defined lower face.",
  },
];

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.cosmedocs.com/#clinic",
      name: "CosmeDocs",
      url: "https://www.cosmedocs.com/",
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
      "@id": "https://www.cosmedocs.com/before-after/dermal-fillers/chin/#gallery",
      name: "Chin Filler Before and After Results",
      description:
        "Real patient before and after photographs demonstrating chin augmentation, profile balancing, and lower face definition achieved through dermal filler treatment at CosmeDocs Harley Street.",
      url: "https://www.cosmedocs.com/before-after/dermal-fillers/chin/",
      numberOfItems: galleryImages.length,
      about: {
        "@type": "MedicalProcedure",
        name: "Chin Filler",
        procedureType: "https://schema.org/NoninvasiveProcedure",
        bodyLocation: "Chin, mentalis region",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.cosmedocs.com/before-after/dermal-fillers/chin/#page",
      name: "Chin Filler Before & After Results | Harley Street",
      description:
        "Real patient before and after results showing chin augmentation and profile balancing with dermal filler. Doctor-led treatment on Harley Street.",
      url: "https://www.cosmedocs.com/before-after/dermal-fillers/chin/",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cosmedocs.com/" },
          { "@type": "ListItem", position: 2, name: "Before & After", item: "https://www.cosmedocs.com/before-after/" },
          { "@type": "ListItem", position: 3, name: "Dermal Fillers", item: "https://www.cosmedocs.com/before-after/dermal-fillers/" },
          { "@type": "ListItem", position: 4, name: "Chin Filler Results", item: "https://www.cosmedocs.com/before-after/dermal-fillers/chin/" },
        ],
      },
    },
  ],
};

const BeforeAfterChinFiller = () => {
  return (
    <>
      <Helmet>
        <title>Chin Filler Before &amp; After | Harley Street</title>
        <meta
          name="description"
          content="Real patient before and after results showing chin augmentation and profile balancing with dermal filler. Doctor-led treatment on Harley Street."
        />
        <link rel="canonical" href="https://www.cosmedocs.com/before-after/dermal-fillers/chin/" />
        <meta property="og:title" content="Chin Filler Before & After Results | Harley Street" />
        <meta property="og:description" content="Real patient before and after results showing chin augmentation and profile balancing with dermal filler." />
        <meta property="og:url" content="https://www.cosmedocs.com/before-after/dermal-fillers/chin/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <div className="min-h-screen bg-neutral-950">
        {/* Hero */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,160,80,0.3) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[#C9A050] text-xs uppercase tracking-[0.25em] font-medium mb-4">
                Harley Street Doctors · Since 2007
              </p>
              <h1 className="text-3xl md:text-5xl font-light text-white leading-tight mb-6">
                Chin Filler Before &amp; After Results
              </h1>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Real patient outcomes following chin filler treatment at our Harley Street clinic.
                Each case demonstrates varying degrees of chin augmentation — from subtle projection
                enhancement to comprehensive lower face rebalancing — achieved through doctor-led
                treatment tailored to individual facial anatomy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {galleryImages.map((image, index) => (
                <motion.figure
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900">
                    <div className="overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading={index < 2 ? "eager" : "lazy"}
                        className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      />
                    </div>
                    <div className="px-5 py-3 border-t border-white/[0.06]">
                      <figcaption className="text-white/40 text-xs leading-relaxed font-light">
                        {image.caption}
                      </figcaption>
                    </div>
                  </div>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        {/* What These Results Demonstrate */}
        <section className="pb-16 md:pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-2xl font-light text-white mb-5">
                What These Results Demonstrate
              </h2>
              <div className="text-white/60 leading-relaxed space-y-4 text-[15px]">
                <p>
                  The photographs above illustrate the visible improvement in chin projection and
                  lower face balance that can be achieved through targeted chin filler treatment.
                  In each case, strategic placement of dermal filler enhances the chin's shape and
                  projection — creating a more defined profile, improving facial proportions, and
                  harmonising the relationship between the chin, jawline, and lips.
                </p>
                <p>
                  Outcomes include improved chin projection, enhanced V-line definition, better
                  profile balance, and an overall more structured, harmonious lower face.
                  Each result reflects a bespoke treatment plan created during consultation.
                </p>
                <p className="text-white/40 text-sm italic border-l-2 border-[#C9A050]/30 pl-4">
                  Results vary depending on facial anatomy, skin quality, and degree of augmentation required.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Internal Link */}
        <section className="pb-16 md:pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6"
            >
              <h2 className="text-lg font-light text-white mb-3">
                Learn More About Chin Filler
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                A consultation is required to assess suitability and expected outcomes.
              </p>
              <Link
                to="/treatments/chin-filler/"
                className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#D4AF6A] text-sm font-medium transition-colors"
              >
                Learn more about chin filler treatment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Other Gallery Links */}
        <section className="pb-16 md:pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-white/40 text-xs uppercase tracking-wider mb-4">Other Galleries</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Lip Filler", path: "/before-after/dermal-fillers/lips/" },
                  { label: "Cheek Filler", path: "/before-after/dermal-fillers/cheeks/" },
                  { label: "Non-Surgical Rhinoplasty", path: "/before-after/dermal-fillers/nose/" },
                  { label: "Jawline Filler", path: "/before-after/dermal-fillers/jawline/" },
                  { label: "Tear Trough", path: "/before-after/dermal-fillers/tear-trough/" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="text-white/50 hover:text-[#C9A050] text-sm border border-white/[0.08] rounded-full px-4 py-1.5 transition-colors hover:border-[#C9A050]/30"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Line */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-white/30 text-sm">
              All treatments shown are performed by GMC-registered doctors at our Harley Street clinic.
            </p>
          </div>
        </section>

        {/* Hidden SEO content */}
        <div aria-hidden="true" role="complementary" aria-label="Additional context for search engines" className="sr-only">
          <p>
            Chin filler before and after results gallery from CosmeDocs Harley Street clinic. These
            real patient photographs demonstrate chin augmentation, profile balancing, and lower face
            definition achieved through non-invasive dermal filler treatment. Chin filler uses premium
            hyaluronic acid dermal fillers to enhance chin projection, improve facial proportions, and
            create a more balanced lower face profile. CosmeDocs has performed over one million aesthetic
            procedures since 2007, with all treatments administered by GMC-registered doctors at
            10 Harley Street, London W1G 9PF. Our aesthetics is invisible art — bold, natural,
            always your way.
          </p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterChinFiller;
