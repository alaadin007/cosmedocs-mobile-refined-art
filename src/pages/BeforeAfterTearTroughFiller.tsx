import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import tearTroughGallery1 from "@/assets/tear-trough-gallery-1.jpeg";
import tearTroughGallery2 from "@/assets/tear-trough-gallery-2.jpeg";
import tearTroughGallery3 from "@/assets/tear-trough-gallery-3.png";
import tearTroughGallery4 from "@/assets/tear-trough-gallery-4.png";
import tearTroughGallery5 from "@/assets/tear-trough-gallery-5.png";
import tearTroughGallery6 from "@/assets/tear-trough-gallery-6.png";
import tearTroughGallery7 from "@/assets/tear-trough-gallery-7.png";

const galleryImages = [
  {
    src: tearTroughGallery1,
    alt: "Before and after tear trough filler showing under-eye volume restoration and dark circle reduction",
    caption: "Under-eye volume restoration with tear trough filler. Visible reduction in dark circles and hollowing, creating a naturally refreshed appearance.",
  },
  {
    src: tearTroughGallery2,
    alt: "Before and after tear trough filler showing 2017 to 2018 transformation with reduced under-eye hollows",
    caption: "Long-term tear trough transformation over one year. Significant improvement in under-eye hollowing, nasolabial folds, and overall facial volume balance.",
  },
  {
    src: tearTroughGallery3,
    alt: "Before and after tear trough filler showing close-up under-eye dark circle correction",
    caption: "Close-up under-eye dark circle correction. Precise filler placement restoring smooth contour between the lower eyelid and upper cheek.",
  },
  {
    src: tearTroughGallery4,
    alt: "Before and after tear trough filler showing profile view of under-eye hollowing improvement",
    caption: "Profile view demonstrating under-eye hollowing improvement. Subtle volume restoration reducing shadow depth and brightening the periorbital area.",
  },
  {
    src: tearTroughGallery5,
    alt: "Treated versus untreated side comparison showing tear trough filler results",
    caption: "Treated vs untreated side comparison. Clear demonstration of volume restoration on the treated side, showing the difference filler makes in reducing under-eye hollows.",
  },
  {
    src: tearTroughGallery6,
    alt: "Before and after tear trough filler showing close-up under-eye smoothing and dark circle reduction",
    caption: "Close-up under-eye smoothing with tear trough filler. Fine-line reduction and volume restoration creating a brighter, more youthful eye area.",
  },
  {
    src: tearTroughGallery7,
    alt: "Before and after tear trough filler showing under-eye rejuvenation and hollow correction",
    caption: "Under-eye rejuvenation through targeted tear trough treatment. Visible improvement in hollowing and dark shadowing beneath both eyes.",
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
      "@id": "https://www.cosmedocs.co.uk/before-after/dermal-fillers/tear-trough/#gallery",
      name: "Tear Trough Filler Before and After Results",
      description:
        "Real patient before and after photographs demonstrating under-eye volume restoration, dark circle reduction, and tear trough correction achieved through dermal filler treatment at CosmeDocs Harley Street.",
      url: "https://www.cosmedocs.co.uk/before-after/dermal-fillers/tear-trough/",
      numberOfItems: galleryImages.length,
      about: {
        "@type": "MedicalProcedure",
        name: "Tear Trough Filler",
        procedureType: "https://schema.org/NoninvasiveProcedure",
        bodyLocation: "Under eye, tear trough region",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.cosmedocs.co.uk/before-after/dermal-fillers/tear-trough/#page",
      name: "Tear Trough Filler Before & After Results | Harley Street",
      description:
        "Real patient before and after results showing under-eye volume restoration and dark circle reduction with tear trough filler. Doctor-led treatment on Harley Street.",
      url: "https://www.cosmedocs.co.uk/before-after/dermal-fillers/tear-trough/",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cosmedocs.co.uk/" },
          { "@type": "ListItem", position: 2, name: "Before & After", item: "https://www.cosmedocs.co.uk/before-after/" },
          { "@type": "ListItem", position: 3, name: "Dermal Fillers", item: "https://www.cosmedocs.co.uk/before-after/dermal-fillers/" },
          { "@type": "ListItem", position: 4, name: "Tear Trough Filler Results", item: "https://www.cosmedocs.co.uk/before-after/dermal-fillers/tear-trough/" },
        ],
      },
    },
  ],
};

const BeforeAfterTearTroughFiller = () => {
  return (
    <>
      <Helmet>
        <title>Tear Trough Filler Before &amp; After | Harley Street</title>
        <meta
          name="description"
          content="Real patient before and after results showing under-eye volume restoration and dark circle reduction with tear trough filler. Doctor-led treatment on Harley Street."
        />
        <link rel="canonical" href="https://www.cosmedocs.co.uk/before-after/dermal-fillers/tear-trough/" />
        <meta property="og:title" content="Tear Trough Filler Before & After Results | Harley Street" />
        <meta property="og:description" content="Real patient before and after results showing under-eye volume restoration and dark circle reduction with tear trough filler. Doctor-led treatment on Harley Street." />
        <meta property="og:url" content="https://www.cosmedocs.co.uk/before-after/dermal-fillers/tear-trough/" />
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
                Tear Trough Filler Before &amp; After Results
              </h1>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Real patient outcomes following tear trough filler treatment at our Harley Street clinic. 
                Each case demonstrates varying degrees of under-eye improvement — from subtle dark circle 
                reduction to more comprehensive volume restoration — achieved through doctor-led treatment 
                tailored to individual periorbital anatomy and skin quality.
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
                  The photographs above illustrate the visible improvement in the under-eye area 
                  that can be achieved through targeted tear trough filler treatment. In each case, 
                  the hollow groove between the lower eyelid and upper cheek is gently restored — 
                  reducing dark shadows, smoothing contours, and brightening the periorbital region 
                  whilst maintaining natural facial expression.
                </p>
                <p>
                  Outcomes include reduced dark circles, improved under-eye volume, smoother 
                  lid-cheek transition, and an overall more refreshed, rested appearance. 
                  Each result reflects a bespoke treatment plan created during consultation.
                </p>
                <p className="text-white/40 text-sm italic border-l-2 border-[#C9A050]/30 pl-4">
                  Results vary depending on facial anatomy, skin quality, and degree of volume loss.
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
                Learn More About Tear Trough Filler
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                A consultation is required to assess suitability and expected outcomes.
              </p>
              <Link
                to="/treatments/tear-trough-filler/"
                className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#D4AF6A] text-sm font-medium transition-colors"
              >
                Learn more about tear trough filler treatment
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
                  { label: "Chin Filler", path: "/before-after/dermal-fillers/chin/" },
                  { label: "Jawline Filler", path: "/before-after/dermal-fillers/jawline/" },
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
            Tear trough filler before and after results gallery from CosmeDocs Harley Street clinic. These 
            real patient photographs demonstrate under-eye volume restoration, dark circle reduction, and 
            tear trough correction achieved through non-invasive dermal filler treatment. The tear trough 
            is the hollow groove between the lower eyelid and upper cheek, an area that loses volume with 
            age or due to genetics, creating shadows that appear as dark circles or a sunken appearance. 
            Tear trough filler treatment at CosmeDocs uses premium hyaluronic acid dermal fillers and 
            advanced cannula techniques to carefully restore under-eye volume. CosmeDocs has performed 
            over one million aesthetic procedures since 2007, with all treatments administered by 
            GMC-registered doctors at 10 Harley Street, London W1G 9PF.
          </p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterTearTroughFiller;
