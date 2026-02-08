import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import jawlineGallery1 from "@/assets/jawline-gallery-1.jpg";
import jawlineGallery2 from "@/assets/jawline-gallery-2.jpg";
import jawlineGallery3 from "@/assets/jawline-gallery-3.png";
import jawlineGallery4 from "@/assets/jawline-gallery-4.jpg";
import jawlineGallery5 from "@/assets/jawline-gallery-5.jpg";
import jawlineGallery6 from "@/assets/jawline-gallery-6.jpg";
import jawlineFiller1ml from "@/assets/jawline-filler-1ml-before-after.png";
import jawlineFiller2ml from "@/assets/jawline-filler-2ml-before-after.png";

const galleryImages = [
  {
    src: jawlineGallery1,
    alt: "Before and after jawline filler showing enhanced lower face definition",
    caption: "Enhanced jawline definition through strategic filler placement. Natural contouring preserving facial balance and proportion.",
  },
  {
    src: jawlineFiller1ml,
    alt: "Before and after 1ml jawline filler showing subtle enhancement",
    caption: "Subtle jawline enhancement with 1ml dermal filler. Ideal for first-time patients seeking natural definition without dramatic change.",
  },
  {
    src: jawlineGallery2,
    alt: "Before and after jawline filler demonstrating jaw contour improvement",
    caption: "Improved jaw contour and lower face structure. Tailored treatment addressing volume loss and early jowl formation.",
  },
  {
    src: jawlineFiller2ml,
    alt: "Before and after 2ml jawline filler showing defined sculpting",
    caption: "Defined jawline sculpting with 2ml dermal filler. Stronger jaw angles and visible structural enhancement for a more contoured profile.",
  },
  {
    src: jawlineGallery3,
    alt: "Before and after jawline filler showing masculine jaw enhancement",
    caption: "Masculine jaw enhancement creating sharper angles and improved facial structure. Precision placement along the mandibular border.",
  },
  {
    src: jawlineGallery4,
    alt: "Before and after jawline filler showing jowl correction",
    caption: "Jowl correction and jawline restoration addressing age-related volume loss. Natural-looking lift to the lower face.",
  },
  {
    src: jawlineGallery5,
    alt: "Before and after jawline contouring with dermal filler",
    caption: "Comprehensive jawline contouring demonstrating balanced volume placement. Refined lower face proportions and improved chin-to-jaw transition.",
  },
  {
    src: jawlineGallery6,
    alt: "Before and after jawline filler showing facial slimming effect",
    caption: "Jawline definition creating a naturally slimmer, more sculpted facial appearance through strategic filler placement along the jaw border.",
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
      "@id": "https://www.cosmedocs.co.uk/before-after/dermal-fillers/jawline/#gallery",
      name: "Jawline Filler Before and After Results",
      description:
        "Real patient before and after photographs demonstrating jawline definition, jowl correction, and lower face contouring achieved through dermal filler treatment at CosmeDocs Harley Street.",
      url: "https://www.cosmedocs.co.uk/before-after/dermal-fillers/jawline/",
      numberOfItems: galleryImages.length,
      about: {
        "@type": "MedicalProcedure",
        name: "Jawline Filler",
        procedureType: "https://schema.org/NoninvasiveProcedure",
        bodyLocation: "Jawline, mandibular border, lower face",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.cosmedocs.co.uk/before-after/dermal-fillers/jawline/#page",
      name: "Jawline Filler Before & After Results | Harley Street Clinic",
      description:
        "Real patient before and after results showing jawline definition and lower face contouring with dermal filler. Doctor-led treatment on Harley Street.",
      url: "https://www.cosmedocs.co.uk/before-after/dermal-fillers/jawline/",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cosmedocs.co.uk/" },
          { "@type": "ListItem", position: 2, name: "Before & After", item: "https://www.cosmedocs.co.uk/before-after/" },
          { "@type": "ListItem", position: 3, name: "Dermal Fillers", item: "https://www.cosmedocs.co.uk/before-after/dermal-fillers/" },
          { "@type": "ListItem", position: 4, name: "Jawline Filler Results", item: "https://www.cosmedocs.co.uk/before-after/dermal-fillers/jawline/" },
        ],
      },
    },
  ],
};

const BeforeAfterJawlineFiller = () => {
  return (
    <>
      <Helmet>
        <title>Jawline Filler Before &amp; After Results | Harley Street Clinic</title>
        <meta
          name="description"
          content="Real patient before and after results showing jawline definition and lower face contouring with dermal filler. Doctor-led treatment on Harley Street."
        />
        <link rel="canonical" href="https://www.cosmedocs.co.uk/before-after/dermal-fillers/jawline/" />
        <meta property="og:title" content="Jawline Filler Before & After Results | Harley Street Clinic" />
        <meta property="og:description" content="Real patient before and after results showing jawline definition and lower face contouring with dermal filler. Doctor-led treatment on Harley Street." />
        <meta property="og:url" content="https://www.cosmedocs.co.uk/before-after/dermal-fillers/jawline/" />
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
                Jawline Filler Before &amp; After Results
              </h1>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Real patient outcomes following jawline filler treatment at our Harley Street clinic. 
                Each case demonstrates varying degrees of lower face definition — from subtle contouring 
                to more sculpted jaw enhancement — achieved through doctor-led treatment 
                tailored to individual facial anatomy and natural proportion.
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
                  The photographs above illustrate the visible improvement in lower face definition 
                  that can be achieved through targeted jawline filler treatment. In each case, the 
                  jaw area transitions from a softer, less defined profile towards sharper, more 
                  sculpted contours — whilst preserving the patient's natural facial identity and 
                  gender-appropriate proportions.
                </p>
                <p>
                  Outcomes include enhanced jaw angles, improved mandibular border definition, 
                  correction of early jowl formation, and overall improved lower face balance. 
                  Each result reflects a bespoke treatment plan created during consultation.
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
                Learn More About Jawline Filler
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                A consultation is required to assess suitability and expected outcomes.
              </p>
              <Link
                to="/treatments/jawline-filler/"
                className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#D4AF6A] text-sm font-medium transition-colors"
              >
                Learn more about jawline filler treatment
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
            Jawline filler before and after results gallery from CosmeDocs Harley Street clinic. These 
            real patient photographs demonstrate jawline definition, lower face contouring, jowl 
            correction, and mandibular border enhancement achieved through non-invasive dermal filler 
            treatment. The jawline is one of the most impactful areas for facial rejuvenation, as 
            age-related bone resorption and soft tissue descent create a softer, less defined lower 
            face. Jawline filler treatment at CosmeDocs uses premium hyaluronic acid dermal fillers to 
            restore structural support, define jaw angles, and improve overall lower face harmony. 
            CosmeDocs has performed over one million aesthetic procedures since 2007, with all 
            treatments administered by GMC-registered doctors at 10 Harley Street, London W1G 9PF.
          </p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterJawlineFiller;
