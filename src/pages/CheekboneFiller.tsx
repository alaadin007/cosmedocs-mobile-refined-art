import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import cheekIllustration from "@/assets/cheek-profile-illustration.png";
import cheekBaPreview from "@/assets/1ml-cheek-fillers-before-after.png";

const CheekboneFiller = () => {
  const faqs = [
    {
      question: "What is cheekbone filler?",
      answer:
        "Cheekbone filler is the deep, on-bone placement of structural hyaluronic acid (such as Swiss Teoxane Ultradeep) directly onto the zygomatic arch and lateral malar bone. It builds projection and definition along the upper cheek — distinct from soft mid-face cheek filler, which restores volume in the apple of the cheek.",
    },
    {
      question: "Cheekbone filler vs cheek filler — what's the difference?",
      answer:
        "Cheek filler restores lost volume in the mid-face apple. Cheekbone filler enhances or sharpens the zygomatic ridge for a more sculpted, structural look. The first softens; the second defines. Many patients combine both for full mid-face architecture.",
    },
    {
      question: "Is cheekbone filler suitable for men?",
      answer:
        "Yes — cheekbone filler is one of the most-requested male treatments at Cosmedocs. Placement is more lateral and angular for men to preserve masculine bone structure, with units of structural HA placed on-periosteum to project the upper cheek without rounding the face.",
    },
    {
      question: "How long does cheekbone filler last?",
      answer:
        "On-bone structural placement typically lasts 18–24 months. Because the zygomatic region has very little muscle activity, structural HA integrates and metabolises slowly.",
    },
    {
      question: "How much does cheekbone filler cost in London?",
      answer:
        "From £350 for 1.2ml of Swiss Teoxane Ultradeep, £500 for 1.8ml, and £700 for 2.4ml — the same transparent tiered pricing as our cheek-filler treatment. Most cheekbone definition cases use 1.8–2.4ml.",
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
        "@type": "MedicalProcedure",
        name: "Cheekbone Filler",
        alternateName: "Zygomatic Filler",
        description:
          "Structural, on-bone hyaluronic acid placement to enhance or restore zygomatic projection and lateral cheek definition. Doctor-led at Harley Street.",
        url: "https://www.cosmedocs.com/treatments/cheekbone-filler/",
        procedureType: "NoninvasiveProcedure",
        bodyLocation: "Zygomatic arch, lateral malar region",
        howPerformed:
          "Swiss Teoxane Ultradeep hyaluronic acid placed on-periosteum at the zygomatic arch using a sharp needle bolus technique under doctor-led mapping.",
      },
      {
        "@type": "Offer",
        name: "Cheekbone Filler — Swiss Teoxane Ultradeep",
        priceCurrency: "GBP",
        price: "350",
        priceSpecification: [
          { "@type": "PriceSpecification", priceCurrency: "GBP", price: "350", description: "1.2ml" },
          { "@type": "PriceSpecification", priceCurrency: "GBP", price: "500", description: "1.8ml" },
          { "@type": "PriceSpecification", priceCurrency: "GBP", price: "700", description: "2.4ml" },
        ],
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://www.cosmedocs.com/#clinic" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cosmedocs.com/" },
          { "@type": "ListItem", position: 2, name: "Treatments", item: "https://www.cosmedocs.com/treatments/" },
          { "@type": "ListItem", position: 3, name: "Dermal Fillers", item: "https://www.cosmedocs.com/treatments/dermal-fillers/" },
          { "@type": "ListItem", position: 4, name: "Cheekbone Filler", item: "https://www.cosmedocs.com/treatments/cheekbone-filler/" },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Cheekbone Filler London — Structural Zygomatic Definition | Cosmedocs</title>
        <meta
          name="description"
          content="Doctor-led cheekbone filler in London. On-bone Swiss Teoxane Ultradeep for sculpted zygomatic definition — structural, masculine-friendly placement. From £350. Harley Street since 2007."
        />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/cheekbone-filler/" />
        <meta property="og:title" content="Cheekbone Filler London — Structural Zygomatic Definition | Cosmedocs" />
        <meta
          property="og:description"
          content="On-bone cheekbone filler with Swiss Teoxane Ultradeep — sculpted, structural definition. Doctor-led at Harley Street."
        />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/cheekbone-filler/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        {/* HERO */}
        <section className="relative overflow-hidden bg-black pt-0 pb-16">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[
                { label: "Treatments", path: "/treatments/" },
                { label: "Dermal Fillers", path: "/treatments/dermal-fillers/" },
              ]}
              currentPage="Cheekbone Filler"
            />
            <div className="flex flex-col lg:flex-row items-center justify-between pt-12 pb-4 gap-8">
              <motion.div
                className="lg:hidden w-[180px] h-[180px] relative mx-auto"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <img src={cheekIllustration} alt="" aria-hidden="true" className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(201,160,80,0.15)]" />
              </motion.div>

              <div className="max-w-2xl text-center lg:text-left">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#C9A050]/70 mb-4">Structural · On-bone · Doctor-led</p>
                  <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                    Cheekbone <span className="text-[#C9A050] font-light">Filler</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/40 leading-relaxed font-extralight max-w-xl mx-auto lg:mx-0">
                    Sculpted zygomatic definition through deep, on-bone placement of Swiss Teoxane Ultradeep — the structural HA built for the upper cheek.
                    Distinct from soft mid-face <Link to="/treatments/cheek-filler/" className="text-[#C9A050]/80 underline-offset-4 hover:underline">cheek filler</Link>.
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="hidden lg:block flex-shrink-0 w-[280px] h-[320px] relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                <img src={cheekIllustration} alt="" aria-hidden="true" className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(201,160,80,0.15)]" />
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-14">
          {/* TOP-ANSWER */}
          <section>
            <div className="bg-gradient-to-br from-[#C9A050]/[0.08] via-[#C9A050]/[0.03] to-transparent border border-[#C9A050]/20 rounded-2xl p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A050]/70 mb-3">The honest answer</p>
              <h2 className="text-xl md:text-2xl font-light text-white leading-snug mb-4">
                What is the difference between cheek filler and cheekbone filler?
              </h2>
              <p className="text-white/70 text-base leading-relaxed font-light">
                <span className="text-white/85">Cheek filler</span> restores volume in the apple of the cheek (soft, lifting,
                anti-ageing). <span className="text-white/85">Cheekbone filler</span> places structural HA directly on the
                zygomatic arch to project and define the upper cheek (sculpting, contouring, often male). Same product family
                — different anatomical target, different intent.
              </p>
            </div>
          </section>

          {/* WHO IT'S FOR */}
          <section>
            <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">
              Who chooses <span className="text-[#C9A050] font-light">cheekbone filler?</span>
            </h2>
            <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
            <ul className="space-y-3 text-white/55 text-sm font-light">
              {[
                "Men wanting sharper, more angular zygomatic projection",
                "Patients with naturally flat or low-set cheekbones",
                "Post weight-loss restoration of upper-cheek architecture",
                "Anyone after a sculpted, contoured look — not soft volume",
                "Patients combining with jawline filler for full facial structure",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* PRICING */}
          <section>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A050]/70 mb-2">Pricing</p>
            <h2 className="text-2xl md:text-3xl font-extralight text-white mb-2">
              Swiss Teoxane <span className="text-[#C9A050] font-light">Ultradeep</span>
            </h2>
            <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
            <p className="text-white/55 text-sm font-light leading-relaxed mb-5">
              We use only Swiss Teoxane Ultradeep — the structural HA designed for deep, on-bone placement.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { vol: "1.2ml", price: "£350", note: "Subtle definition" },
                { vol: "1.8ml", price: "£500", note: "Most common", featured: true },
                { vol: "2.4ml", price: "£700", note: "Full sculpt" },
              ].map((tier) => (
                <div
                  key={tier.vol}
                  className={`rounded-xl p-5 border ${
                    tier.featured ? "border-[#C9A050]/40 bg-[#C9A050]/[0.06]" : "border-white/[0.08] bg-white/[0.02]"
                  }`}
                >
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">{tier.vol}</p>
                  <p className="text-2xl text-white font-extralight mb-1">{tier.price}</p>
                  <p className="text-white/45 text-xs">{tier.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* B&A */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extralight text-white mb-4">
              Cheek & cheekbone <span className="text-[#C9A050] font-light">before & after</span>
            </h2>
            <Link
              to="/before-after/dermal-fillers/cheeks/"
              className="block group rounded-2xl overflow-hidden border border-white/[0.06] hover:border-[#C9A050]/30 transition-all"
            >
              <img
                src={cheekBaPreview}
                alt="Cheekbone filler before and after — Swiss Teoxane Ultradeep, doctor-led at Cosmedocs Harley Street"
                loading="lazy"
                className="w-full h-auto"
              />
            </Link>
            <p className="text-white/40 text-xs mt-3">
              See the{" "}
              <Link to="/before-after/dermal-fillers/cheeks/" className="text-[#C9A050] underline-offset-4 hover:underline">
                full cheek-filler gallery
              </Link>
              .
            </p>
          </section>

          {/* CORRECTION */}
          <section>
            <div className="bg-black/40 border border-white/[0.06] rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-[#C9A050]/70 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C9A050]/70 mb-1">Over-filled cheekbones?</p>
                  <h2 className="text-xl md:text-2xl font-light text-white leading-snug">
                    Dissolving and rebuilding correctly
                  </h2>
                </div>
              </div>
              <p className="text-white/55 text-sm font-light leading-relaxed mb-4">
                Migrated or stacked cheekbone filler can be safely dissolved with Hyalase under doctor supervision, then
                rebuilt on the bone where it belongs.
              </p>
              <Link
                to="/treatments/filler-dissolving/"
                className="inline-flex items-center gap-1.5 text-sm text-[#C9A050] border border-[#C9A050]/40 hover:bg-[#C9A050]/10 px-4 py-2 rounded-full transition-all"
              >
                Filler dissolving (Hyalase) <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extralight text-white mb-6">
              Frequently <span className="text-[#C9A050] font-light">asked</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.question} className="group bg-white/[0.02] border border-white/[0.06] rounded-xl overflow-hidden">
                  <summary className="flex justify-between items-center p-5 cursor-pointer list-none">
                    <h3 className="text-white/85 text-base font-light pr-4">{f.question}</h3>
                    <span className="text-[#C9A050]/70 text-xs group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-5 pb-5 text-white/55 text-sm leading-relaxed font-light">{f.answer}</div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center pt-8">
            <h2 className="text-3xl font-extralight text-white mb-4">
              Your consultation <span className="text-[#C9A050] font-light">begins here</span>
            </h2>
            <p className="text-white/55 mb-6 font-light">Doctor-led structural assessment at our Harley Street clinic.</p>
            <a
              href="https://med.as.me/harleystreet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C9A050] hover:bg-[#B8913F] text-black px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              Book Consultation
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default CheekboneFiller;
