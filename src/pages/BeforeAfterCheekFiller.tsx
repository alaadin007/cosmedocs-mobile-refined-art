import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import oneMLImage from "@/assets/1ml-cheek-fillers-before-after.png";
import twoMLImage from "@/assets/2ml-cheek-fillers-before-after.png";
import menCheekImage from "@/assets/cheek-filler-treatment-man.png";

const galleryImages = [
  {
    src: oneMLImage,
    alt: "Before and after 1ml cheek filler showing subtle mid-face volume restoration",
    caption: "Subtle volume restoration to the mid-face with 1ml dermal filler. Natural contour enhancement preserving overall facial balance.",
  },
  {
    src: twoMLImage,
    alt: "Before and after 2ml cheek filler demonstrating cheekbone definition",
    caption: "Improved cheekbone definition and mid-face projection following 2ml cheek filler treatment. Structural enhancement maintaining natural proportions.",
  },
  {
    src: menCheekImage,
    alt: "Male cheek filler before and after showing angular contour improvement",
    caption: "Masculine cheek enhancement addressing volume loss whilst preserving angular facial structure. Tailored approach for male facial anatomy.",
  },
  {
    src: "/lovable-uploads/95608275-de36-4458-901d-2cc2ce2136de.png",
    alt: "Before and after cheek enhancement showing sculpted cheekbones",
    caption: "Sculpted cheekbone contour achieved through strategic filler placement. Visible improvement in mid-face projection and facial harmony.",
  },
  {
    src: "/lovable-uploads/4bb9f7fc-8d28-4ce9-b09e-7ee91adbe38c.png",
    alt: "Before and after cheek filler showing natural feminine enhancement",
    caption: "Natural feminine cheek enhancement creating soft fullness and improved facial proportions. Results demonstrate gradual, balanced volume restoration.",
  },
  {
    src: "/lovable-uploads/1e8bac0a-c2b4-4629-b56e-cce71b126dfe.png",
    alt: "Before and after cheek volume restoration addressing hollow cheeks",
    caption: "Correction of mid-face hollowing with visible restoration of cheek volume and improved facial support. Natural-looking outcome addressing age-related volume loss.",
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
        streetAddress: "55 Harley Street",
        addressLocality: "London",
        postalCode: "W1G 8QR",
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
      "@id": "https://www.cosmedocs.co.uk/before-after/dermal-fillers/cheeks/#gallery",
      name: "Cheek Filler Before and After Results",
      description:
        "Real patient before and after photographs demonstrating mid-face volume restoration and cheek contouring achieved through dermal filler treatment at CosmeDocs Harley Street.",
      url: "https://www.cosmedocs.co.uk/before-after/dermal-fillers/cheeks/",
      numberOfItems: 6,
      about: {
        "@type": "MedicalProcedure",
        name: "Cheek Filler",
        procedureType: "https://schema.org/NoninvasiveProcedure",
        bodyLocation: "Cheeks, mid-face, zygomatic region",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.cosmedocs.co.uk/before-after/dermal-fillers/cheeks/#page",
      name: "Cheek Filler Before & After Results | Harley Street Clinic",
      description:
        "Real patient before and after results showing mid-face volume restoration with cheek filler. Subtle, doctor-led treatment on Harley Street.",
      url: "https://www.cosmedocs.co.uk/before-after/dermal-fillers/cheeks/",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cosmedocs.co.uk/" },
          { "@type": "ListItem", position: 2, name: "Before & After", item: "https://www.cosmedocs.co.uk/before-after/" },
          { "@type": "ListItem", position: 3, name: "Dermal Fillers", item: "https://www.cosmedocs.co.uk/before-after/dermal-fillers/" },
          { "@type": "ListItem", position: 4, name: "Cheek Filler Results", item: "https://www.cosmedocs.co.uk/before-after/dermal-fillers/cheeks/" },
        ],
      },
    },
  ],
};

const BeforeAfterCheekFiller = () => {
  return (
    <>
      <Helmet>
        <title>Cheek Filler Before &amp; After Results | Harley Street Clinic</title>
        <meta
          name="description"
          content="Real patient before and after results showing mid-face volume restoration with cheek filler. Subtle, doctor-led treatment on Harley Street."
        />
        <link rel="canonical" href="https://www.cosmedocs.co.uk/before-after/dermal-fillers/cheeks/" />
        <meta property="og:title" content="Cheek Filler Before & After Results | Harley Street Clinic" />
        <meta property="og:description" content="Real patient before and after results showing mid-face volume restoration with cheek filler. Subtle, doctor-led treatment on Harley Street." />
        <meta property="og:url" content="https://www.cosmedocs.co.uk/before-after/dermal-fillers/cheeks/" />
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
                Cheek Filler Before &amp; After Results
              </h1>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Real patient outcomes following cheek filler treatment at our Harley Street clinic. 
                Each case demonstrates varying degrees of mid-face volume restoration — from subtle 
                enhancement to more pronounced cheek contouring — achieved through doctor-led treatment 
                tailored to individual facial anatomy and natural balance.
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
                  <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading={index < 2 ? "eager" : "lazy"}
                      className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-16 pb-4 px-5">
                      <figcaption className="text-white/60 text-sm leading-relaxed font-light">
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
                  The photographs above illustrate the visible restoration of mid-face volume that can 
                  occur following targeted cheek filler treatment. In each case, the cheek area transitions 
                  from a flatter, more hollow profile towards fuller, more supported proportions — while 
                  preserving the patient's natural facial structure and identity.
                </p>
                <p>
                  Outcomes include improved cheekbone definition, restored facial support, subtle lifting 
                  of the lower face, and overall improved facial balance. Each result reflects a bespoke 
                  treatment plan created during consultation.
                </p>
                <p className="text-white/40 text-sm italic border-l-2 border-[#C9A050]/30 pl-4">
                  Results vary depending on facial anatomy, degree of volume loss, and treatment plan.
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
                Learn More About Cheek Filler
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                A consultation is required to assess suitability and expected outcomes.
              </p>
              <Link
                to="/treatments/cheek-filler/"
                className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#D4AF6A] text-sm font-medium transition-colors"
              >
                Learn more about cheek filler treatment
                <ArrowRight className="w-4 h-4" />
              </Link>
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
            Cheek filler before and after results gallery from CosmeDocs Harley Street clinic. These 
            real patient photographs demonstrate mid-face volume restoration, cheek augmentation, and 
            facial contouring outcomes achieved through non-invasive dermal filler treatment. The cheek 
            area is one of the first regions to show age-related volume loss, as subcutaneous fat pads 
            diminish and facial support structures weaken. Cheek filler treatment at CosmeDocs uses 
            premium hyaluronic acid dermal fillers to restore this lost volume, enhance cheekbone 
            definition, and improve overall facial harmony. CosmeDocs has performed over one million 
            aesthetic procedures since 2007, with all treatments administered by GMC-registered doctors 
            at 55 Harley Street, London W1G 8QR.
          </p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterCheekFiller;
