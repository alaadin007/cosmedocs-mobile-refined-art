import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import masseterBa1 from "@/assets/before-after/masseter-ba-1.png";
import masseterBa2 from "@/assets/before-after/masseter-ba-2.jpg";
import masseterBa3 from "@/assets/before-after/masseter-ba-3.jpg";
import masseterBa4 from "@/assets/before-after/masseter-ba-4.jpg";
import masseterBa5 from "@/assets/before-after/masseter-ba-5.jpg";
import masseterBa6 from "@/assets/before-after/masseter-ba-6.jpg";

const galleryImages = [
  {
    src: masseterBa1,
    alt: "Before and after masseter Botox showing reduced jaw muscle bulk from angled view",
    caption: "Reduction in jaw muscle bulk creating a softer lower-face contour. Angled view highlights improved jaw angle proportions.",
  },
  {
    src: masseterBa2,
    alt: "Masseter Botox before and after comparison from side and front profile",
    caption: "Gradual facial slimming following masseter treatment. Side-by-side comparison demonstrates natural narrowing of the lower face.",
  },
  {
    src: masseterBa3,
    alt: "Before and after split view showing jawline slimming with masseter Botox",
    caption: "Split-view comparison showing refined lower-face proportions. The jawline transitions from a wider profile to a more tapered contour.",
  },
  {
    src: masseterBa4,
    alt: "Masseter Botox progressive results showing facial slimming over time",
    caption: "Progressive facial slimming visible over a sustained treatment period. Improved facial harmony with natural balance preserved.",
  },
  {
    src: masseterBa5,
    alt: "Long-term masseter Botox results with facial contouring improvement",
    caption: "Long-term contouring outcome with visible reduction in masseter muscle prominence. Natural facial structure maintained throughout treatment.",
  },
  {
    src: masseterBa6,
    alt: "Before and after masseter Botox showing face shape transition from square to oval",
    caption: "Transition from a square lower-face profile to a softer oval contour. Demonstrates the range of visible change achievable with targeted treatment.",
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
      logo: "https://www.cosmedocs.com/logo.png",
      image: "https://www.cosmedocs.com/og-masseter-ba.jpg",
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
      "@id": "https://www.cosmedocs.com/before-after/botox/masseter/#gallery",
      name: "Masseter Botox Before and After Results",
      description:
        "Real patient before and after photographs demonstrating jawline slimming and facial contouring achieved through masseter Botox treatment at CosmeDocs Harley Street.",
      url: "https://www.cosmedocs.com/before-after/botox/masseter/",
      numberOfItems: 6,
      isPartOf: {
        "@type": "WebPage",
        "@id": "https://www.cosmedocs.com/before-after/botox/masseter/#page",
      },
      about: {
        "@type": "MedicalProcedure",
        name: "Masseter Botox",
        procedureType: "https://schema.org/NoninvasiveProcedure",
        bodyLocation: "Masseter muscle, lower face",
        followup: "Review appointment recommended",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.cosmedocs.com/before-after/botox/masseter/#page",
      name: "Masseter Botox Before & After Results | Harley Street Clinic",
      description:
        "Real patient before and after results showing facial slimming with masseter Botox. Subtle, doctor-led treatment on Harley Street.",
      url: "https://www.cosmedocs.com/before-after/botox/masseter/",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.cosmedocs.com/#website",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.cosmedocs.com/og-masseter-ba.jpg",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.cosmedocs.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Before & After",
            item: "https://www.cosmedocs.com/before-after/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Botox Results",
            item: "https://www.cosmedocs.com/before-after/botox/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Masseter Botox Results",
            item: "https://www.cosmedocs.com/before-after/botox/masseter/",
          },
        ],
      },
    },
    {
      "@type": "VideoObject",
      name: "Masseter Botox Injection Technique — Practitioner Training",
      description:
        "Educational video demonstrating masseter Botox injection technique for healthcare practitioners. Learn advanced jawline contouring methods through the CosmeDocs online training course.",
      thumbnailUrl: "https://img.youtube.com/vi/5ZRGFLus2SQ/maxresdefault.jpg",
      uploadDate: "2024-01-15",
      contentUrl: "https://www.youtube.com/watch?v=5ZRGFLus2SQ",
      embedUrl: "https://www.youtube.com/embed/5ZRGFLus2SQ",
      publisher: {
        "@type": "Organization",
        name: "CosmeDocs",
        url: "https://www.cosmedocs.com/",
      },
    },
  ],
};

const BeforeAfterBotoxMasseter = () => {
  return (
    <>
      <Helmet>
        <title>Masseter Botox Before &amp; After Results | Harley Street Clinic</title>
        <meta
          name="description"
          content="Real patient before and after results showing facial slimming with masseter Botox. Subtle, doctor-led treatment on Harley Street."
        />
        <link rel="canonical" href="https://www.cosmedocs.com/before-after/botox/masseter/" />
        <meta property="og:title" content="Masseter Botox Before & After Results | Harley Street Clinic" />
        <meta
          property="og:description"
          content="Real patient before and after results showing facial slimming with masseter Botox. Subtle, doctor-led treatment on Harley Street."
        />
        <meta property="og:url" content="https://www.cosmedocs.com/before-after/botox/masseter/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <div className="min-h-screen bg-neutral-950">
        {/* Hero Section */}
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
                Masseter Botox Before &amp; After Results
              </h1>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Real patient outcomes following masseter Botox treatment at our Harley Street clinic. 
                Each case demonstrates varying degrees of jawline reduction — from moderate muscle 
                refinement to more pronounced facial slimming — achieved through doctor-led treatment 
                tailored to individual facial anatomy and natural balance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
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
                    {/* Caption overlay */}
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
                  The photographs above illustrate the visible reduction in masseter muscle bulk 
                  that can occur following targeted treatment. In each case, the lower face 
                  transitions from a wider, more angular profile towards softer, more balanced 
                  proportions — while preserving the patient's natural facial structure.
                </p>
                <p>
                  Outcomes vary depending on individual muscle strength, facial anatomy, 
                  and the treatment plan agreed upon during consultation. These images represent 
                  a range of results and are shown to provide an honest view of what may be achieved.
                </p>
                <p className="text-white/40 text-sm italic border-l-2 border-[#C9A050]/30 pl-4">
                  Results vary depending on muscle strength, facial anatomy, and treatment plan.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Practitioner Training Video */}
        <section className="pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 md:p-8">
                <p className="text-[#C9A050] text-xs uppercase tracking-[0.2em] font-medium mb-3">
                  For Practitioners
                </p>
                <h2 className="text-xl md:text-2xl font-light text-white mb-3">
                  Masseter Botox Injection Technique
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-2xl">
                  Healthcare professionals can explore our advanced masseter injection technique 
                  through our online training programme. This educational resource covers 
                  anatomical landmarks, injection protocols, and dosing considerations 
                  for jawline contouring.
                </p>
                <div className="relative rounded-xl overflow-hidden aspect-video border border-white/[0.06]">
                  <iframe
                    src="https://www.youtube.com/embed/5ZRGFLus2SQ?si=PQvoQvcDXltfBaMC"
                    title="Masseter Botox injection technique — practitioner training by CosmeDocs"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                </div>
                <p className="text-white/30 text-xs mt-4">
                  This video is intended for qualified healthcare practitioners only.
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
                Learn More About Masseter Botox
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                A consultation is required to assess suitability and expected outcomes.
              </p>
              <Link
                to="/treatments/masseter-botox/"
                className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#D4AF6A] text-sm font-medium transition-colors"
              >
                Learn more about masseter Botox treatment
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
            Masseter Botox before and after results gallery from CosmeDocs Harley Street clinic. 
            These real patient photographs demonstrate jawline slimming and facial contouring 
            outcomes achieved through non-invasive masseter muscle reduction. The masseter muscle 
            is one of the strongest muscles in the human body, responsible for jaw clenching and 
            chewing. When enlarged through habitual clenching, bruxism, or natural anatomy, the 
            masseter muscle can create a wider, more angular lower face appearance.
          </p>
          <p>
            Masseter Botox treatment at CosmeDocs involves targeted injections to the masseter 
            muscle to reduce its bulk over time. Results shown include patients with moderate 
            masseter hypertrophy through to more severe cases requiring comprehensive treatment 
            plans. Each patient's outcome reflects their individual muscle mass, facial bone 
            structure, and treatment protocol. CosmeDocs has performed over one million aesthetic 
            procedures since 2007, with all masseter treatments administered by GMC-registered 
            doctors at 55 Harley Street, London W1G 8QR.
          </p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterBotoxMasseter;
