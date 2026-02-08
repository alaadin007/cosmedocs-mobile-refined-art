import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { generateSEOMetadata } from "@/utils/seo";
import BlogSidebar from "@/components/blog/BlogSidebar";
import harleyStreetImg from "@/assets/blog-clinic-harley-street.jpg";
import phoneSearchImg from "@/assets/blog-clinic-phone-search.jpg";
import receptionImg from "@/assets/blog-clinic-reception.jpg";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const ArticleImage = ({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) => (
  <motion.figure
    variants={fade}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="my-10 flex flex-col items-center"
  >
    <img
      src={src}
      alt={alt}
      className="rounded-xl max-w-md w-full object-contain"
      loading="lazy"
      decoding="async"
    />
    <figcaption className="mt-3 text-sm text-white/40 font-light italic text-center max-w-md">
      {caption}
    </figcaption>
  </motion.figure>
);

const ClinicNameConfusion = () => {
  const seoData = generateSEOMetadata(
    "How to Make Sure You're Booking the Correct CosmeDocs Clinic",
    "Patients sometimes tell us they've booked the wrong clinic by mistake. Here's how to ensure you're booking the original CosmeDocs on Harley Street.",
    "/blog/cosmedocs-vs-similarly-named-clinics"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "How to Make Sure You're Booking the Correct CosmeDocs Clinic",
    description: seoData.description,
    author: {
      "@type": "Organization",
      name: "CosmeDocs",
      address: {
        "@type": "PostalAddress",
        streetAddress: "8-10 Harley Street",
        addressLocality: "London",
        addressRegion: "Greater London",
        postalCode: "W1G 9PF",
        addressCountry: "GB",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "CosmeDocs",
      logo: {
        "@type": "ImageObject",
        url: "https://www.cosmedocs.com/logo.png",
      },
    },
    datePublished: "2026-02-08",
    dateModified: "2026-02-08",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.cosmedocs.co.uk/blog/cosmedocs-vs-similarly-named-clinics/",
    },
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      

      <main className="min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#C9A050]/5 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#C9A050] text-xs tracking-[0.25em] uppercase font-medium"
            >
              Patient Guidance
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-3xl md:text-5xl font-extralight mt-4 leading-tight"
            >
              How to Make Sure You're Booking the{" "}
              <span className="text-[#C9A050]">Correct</span> CosmeDocs Clinic
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white/50 text-sm mt-4 font-light"
            >
              Published 8 February 2026 · 5 min read
            </motion.p>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12">
            {/* Article */}
            <article className="space-y-0">
              {/* Intro */}
              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <p className="text-white/70 font-light leading-relaxed text-lg">
                  CosmeDocs has been practising aesthetic medicine on Harley
                  Street since 2007. We are a doctor-led, GMC-regulated clinic
                  with a reputation built over nearly two decades of careful,
                  considered care.
                </p>
                <p className="text-white/70 font-light leading-relaxed">
                  Over the years, some patients have told us they accidentally
                  booked with a different clinic that has a similar-sounding
                  name. It's an understandable mistake — and one we'd like to
                  help you avoid. This short guide explains how to confirm
                  you're booking with the correct CosmeDocs.
                </p>
              </motion.div>

              <ArticleImage
                src={harleyStreetImg}
                alt="Georgian entrance on Harley Street, London — home to CosmeDocs since 2007"
                caption="Our home on Harley Street — where we've practised since 2007."
              />

              {/* Why Confusion Happens */}
              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-extralight text-white mt-6">
                  Why Clinic Name Confusion Sometimes Happens
                </h2>
                <p className="text-white/70 font-light leading-relaxed">
                  The aesthetic medicine sector has grown enormously over the
                  past decade, and with that growth comes a natural overlap in
                  clinic names. Many practices use similar-sounding branding,
                  which can be confusing — especially when you're searching
                  quickly on a mobile phone.
                </p>
                <p className="text-white/70 font-light leading-relaxed">
                  Paid advertisements, directory listings, and Google Maps
                  results can sometimes appear above organic search results.
                  This means a different clinic may show up first, even when you
                  intended to find us. It's nobody's fault — it's simply how
                  modern search works.
                </p>
              </motion.div>

              <ArticleImage
                src={phoneSearchImg}
                alt="Person searching for a clinic on their mobile phone"
                caption="Quick mobile searches can sometimes lead to accidental bookings with the wrong clinic."
              />

              {/* How to Identify */}
              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-extralight text-white mt-6">
                  How to Identify the Correct CosmeDocs
                </h2>
                <p className="text-white/70 font-light leading-relaxed">
                  To make sure you're booking with us, look for the following
                  details:
                </p>
                <ul className="space-y-3 text-white/70 font-light leading-relaxed pl-1">
                  {[
                    ["Clinic name", "CosmeDocs"],
                    ["Location", "8–10 Harley Street, London W1G 9PF"],
                    ["Established", "2007"],
                    ["Doctors", "GMC-registered medical doctors"],
                    [
                      "Website",
                      "cosmedocs.com or cosmedocs.co.uk",
                    ],
                    [
                      "Brand",
                      "Doctor-led, regulated aesthetic medicine",
                    ],
                  ].map(([label, value]) => (
                    <li key={label} className="flex items-start gap-3">
                      <span className="text-[#C9A050] mt-1.5 text-xs">●</span>
                      <span>
                        <strong className="text-white/90 font-normal">
                          {label}:
                        </strong>{" "}
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-white/70 font-light leading-relaxed">
                  If any of these details don't match, you may be looking at a
                  different clinic. We always recommend double-checking before
                  confirming a booking.
                </p>
              </motion.div>

              {/* What Patients Have Told Us */}
              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4 mt-10"
              >
                <h2 className="text-2xl font-extralight text-white">
                  What Patients Have Told Us
                </h2>
                <p className="text-white/70 font-light leading-relaxed">
                  From time to time, patients arrive at another clinic expecting
                  to see our doctors — Dr Haq or Dr Hena — only to realise the
                  clinic is different. They've described the experience as
                  frustrating and inconvenient, especially when they've taken
                  time off work or travelled to attend.
                </p>
                <p className="text-white/70 font-light leading-relaxed">
                  We understand that frustration entirely. It's the reason we've
                  put together this guide — to save you time and ensure your
                  experience begins on the right note.
                </p>
              </motion.div>

              <ArticleImage
                src={receptionImg}
                alt="Warm, welcoming private clinic reception area"
                caption="A warm welcome awaits — just make sure it's the right door."
              />

              {/* Why We're Sharing */}
              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-extralight text-white mt-6">
                  Why We're Sharing This
                </h2>
                <p className="text-white/70 font-light leading-relaxed">
                  We believe in transparency. Our patients deserve a
                  stress-free experience from the moment they search for us
                  online. Publishing this guide is our way of respecting your
                  time and making the booking process as clear as possible.
                </p>
                <p className="text-white/70 font-light leading-relaxed">
                  We aren't here to criticise anyone. We simply want to make it
                  easy for you to find us.
                </p>
              </motion.div>

              {/* Thank You */}
              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4 mt-10"
              >
                <h2 className="text-2xl font-extralight text-white">
                  Thank You to Our Patients
                </h2>
                <p className="text-white/70 font-light leading-relaxed">
                  To those of you who have been with us for years — and to those
                  discovering us for the first time — thank you. Your trust is
                  something we never take for granted. It's the foundation of
                  everything we do.
                </p>
                <p className="text-white/70 font-light leading-relaxed">
                  We are proud of the relationships we've built since 2007, and
                  we remain committed to delivering aesthetic medicine with
                  restraint, precision, and integrity — always.
                </p>

                {/* Brand quote */}
                <blockquote className="border-l-2 border-[#C9A050]/40 pl-5 my-8">
                  <p className="text-white/50 font-light italic leading-relaxed">
                    "Our aesthetics is invisible art — bold, natural, always
                    your way."
                  </p>
                  <cite className="text-white/30 text-sm font-light mt-2 block not-italic">
                    — CosmeDocs, since 2007
                  </cite>
                </blockquote>
              </motion.div>

              {/* CTA */}
              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-12 p-6 rounded-xl bg-white/[0.03] border border-white/[0.08]"
              >
                <p className="text-white/80 font-light text-lg mb-4">
                  Booking with CosmeDocs
                </p>
                <p className="text-white/60 font-light leading-relaxed mb-6">
                  Ready to book a consultation? Here are the quickest ways to
                  reach us:
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/"
                    className="text-sm text-[#C9A050] hover:text-[#C9A050]/80 transition-colors font-light underline underline-offset-4"
                  >
                    Visit our homepage
                  </Link>
                  <Link
                    to="/contact/"
                    className="text-sm text-[#C9A050] hover:text-[#C9A050]/80 transition-colors font-light underline underline-offset-4"
                  >
                    Contact us
                  </Link>
                  <Link
                    to="/our-team/"
                    className="text-sm text-[#C9A050] hover:text-[#C9A050]/80 transition-colors font-light underline underline-offset-4"
                  >
                    Meet our doctors
                  </Link>
                  <a
                    href="https://maps.google.com/?q=CosmeDocs+Harley+Street+London"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#C9A050] hover:text-[#C9A050]/80 transition-colors font-light underline underline-offset-4"
                  >
                    Find us on Google Maps
                  </a>
                </div>
              </motion.div>
            </article>

            {/* Sidebar */}
            <BlogSidebar delay={0.4} />
          </div>
        </section>
      </main>

      
    </>
  );
};

export default ClinicNameConfusion;
