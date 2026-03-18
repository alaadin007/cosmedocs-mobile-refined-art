import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { generateSEOMetadata } from "@/utils/seo";
import { ArrowRight, Shield, Award, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ClientReviews from "@/components/ClientReviews";

const bookingUrl = "https://med.as.me/harleystreet";

const treatments = [
  {
    title: "Nefertiti Botox Lift",
    path: "/treatments/nefertiti-lift/",
    intensity: "Level 1 — Subtle Refinement",
    description:
      "The lightest form of a non-surgical lift. Botox is placed along the jawline and platysmal bands to release downward-pulling muscles, creating a naturally sharper jaw and smoother neck contour. Ideal as a standalone refresher or the perfect complement to an HA Makeover for enhanced lower-face definition.",
    bestFor: "Early jowling, neck bands, jawline softening",
    downtime: "None — return to normal activities immediately",
    results: "Visible within 7–14 days, lasting 3–4 months",
    price: "From £250",
  },
  {
    title: "HA Makeover",
    path: "/treatments/ha-makeover/",
    intensity: "Level 2 — Volumetric Restoration",
    description:
      "Our signature full-face rejuvenation using hyaluronic acid dermal fillers strategically placed across 8 to 11 points. The HA Makeover restores lost volume in the temples, cheeks, jawline, and chin — creating a lifted, harmonious facial framework. Frequently combined with Botox for a comprehensive liquid facelift that addresses both volume loss and dynamic muscle pull.",
    bestFor: "Volume loss, midface descent, hollow temples, weak jawline",
    downtime: "Mild swelling for 2–3 days",
    results: "Immediate improvement, optimal at 2 weeks, lasting 12–18 months",
    price: "From £800",
  },
  {
    title: "PDO Thread Lift",
    path: "/treatments/pdo-threads/",
    intensity: "Level 3 — Mechanical Lift",
    description:
      "Polydioxanone absorbable sutures are placed beneath the skin to physically reposition sagging tissue. PDO threads provide a genuine mechanical lift of the midface, jowls, and brows — something neither Botox nor fillers can achieve alone. At Cosmedocs, threads are almost always combined with the HA Makeover to create a multi-modality approach: fillers restore volume while threads secure and elevate the lower face for a result that is greater than the sum of its parts.",
    bestFor: "Moderate jowling, midface descent, brow ptosis, neck laxity",
    downtime: "3–5 days of mild swelling and tenderness",
    results: "Immediate lift with continued improvement over 3 months, lasting 12–18 months",
    price: "From £800",
  },
  {
    title: "Laser Fibre Lift",
    path: "/treatments/endolaser/",
    intensity: "Level 4 — Tissue Remodelling",
    description:
      "The most advanced non-surgical lift in our portfolio. The Laser Fibre Lift delivers laser energy beneath the skin via a micro-fibre optic cannula, simultaneously tightening skin, dissolving small pockets of stubborn fat, and stimulating deep collagen remodelling. At Cosmedocs, we have refined our approach: rather than a general all-over treatment, we target specific zones — jowls, under-eye bags, eyebrow lifting, double chin — complementing your existing filler work without dissolving it. Performed in partnership with our specialist clinic, Priva Dr.",
    bestFor: "Skin laxity, jowls, under-eye bags, double chin, brow ptosis",
    downtime: "4–5 days average swelling",
    results: "Progressive improvement over 3–6 months as collagen remodels, lasting 2–3 years",
    price: "From £450",
  },
];

const faqs = [
  {
    q: "What is the best non-surgical facelift treatment?",
    a: "There is no single 'best' treatment — the ideal approach depends on your anatomy, degree of ageing, and goals. Mild early ageing may only need a Nefertiti Botox Lift, whilst moderate volume loss responds beautifully to an HA Makeover. For genuine tissue repositioning, PDO threads or the Laser Fibre Lift provide mechanical and thermal lifting respectively. Our doctors frequently combine modalities for optimal, natural results.",
  },
  {
    q: "Can non-surgical facelift treatments be combined?",
    a: "Absolutely — and at Cosmedocs, combination is our preferred approach. The Nefertiti Lift pairs naturally with an HA Makeover. PDO threads are almost always combined with fillers for lower-face rejuvenation. The Laser Fibre Lift complements existing filler work without dissolving it. Your doctor will design a bespoke treatment plan during your consultation.",
  },
  {
    q: "How long do non-surgical facelift results last?",
    a: "Results vary by modality: Botox-based lifts last 3–4 months, HA Makeover results last 12–18 months, PDO threads provide lift for 12–18 months, and Laser Fibre Lift results can last 2–3 years as collagen continues to remodel. Maintenance treatments extend longevity significantly.",
  },
  {
    q: "Is there any downtime with a non-surgical facelift?",
    a: "Downtime depends on the treatment chosen. The Nefertiti Lift has no downtime. HA Makeover involves mild swelling for 2–3 days. PDO threads require 3–5 days of recovery. The Laser Fibre Lift typically involves 4–5 days of swelling. All are significantly less invasive than surgical alternatives.",
  },
  {
    q: "Who performs non-surgical facelifts at Cosmedocs?",
    a: "All non-surgical facelift treatments at Cosmedocs are performed by GMC-registered doctors with advanced training in facial anatomy. Our lead practitioner is the lead trainer for the Harley Street Institute and has over 17 years of experience in aesthetic medicine. Laser Fibre Lift treatments are performed in partnership with our specialist clinic, Priva Dr.",
  },
  {
    q: "How much does a non-surgical facelift cost in London?",
    a: "Prices start from £250 for a Nefertiti Botox Lift, from £800 for an HA Makeover or PDO Thread Lift, and from £450 for targeted Laser Fibre Lift treatment. A full bespoke combination plan is discussed and priced during your consultation at our Harley Street clinic.",
  },
  {
    q: "What is the Laser Fibre Lift and how does it differ from HIFU?",
    a: "The Laser Fibre Lift delivers laser energy directly beneath the skin via a micro-fibre optic cannula, providing precise skin tightening, fat reduction, and collagen stimulation. Unlike HIFU, which works from outside the skin with focused ultrasound, the Laser Fibre Lift acts from within — offering more targeted results with fewer sessions. It is particularly effective for jowls, under-eye bags, and double chin reduction.",
  },
  {
    q: "Will a non-surgical facelift look natural?",
    a: "At Cosmedocs, natural results are our defining principle — our aesthetics is invisible art. Every treatment plan is designed to enhance your features without altering your identity. We believe transformation should speak without saying a word.",
  },
];

const NonSurgicalFaceliftHub = () => {
  const seoData = generateSEOMetadata(
    "Non-Surgical Facelift London | Laser Fibre Lift & Threads",
    "Expert non-surgical facelift London. Nefertiti Botox, HA Makeover, PDO thread lift & Laser Fibre Lift. Doctor-led at Harley Street. Natural lifting results. Book today.",
    "/treatments/non-surgical-facelift"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={seoData.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: "Non-Surgical Facelift London",
            description: seoData.description,
            url: seoData.canonical,
            provider: {
              "@type": "MedicalBusiness",
              name: "CosmeDocs",
              address: {
                "@type": "PostalAddress",
                streetAddress: "8-10 Harley Street",
                addressLocality: "London",
                postalCode: "W1G 9PF",
                addressCountry: "GB",
              },
            },
            mainEntity: treatments.map((t) => ({
              "@type": "MedicalProcedure",
              name: t.title,
              description: t.description,
              url: `https://www.cosmedocs.com${t.path}`,
            })),
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C9A050]/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#C9A050]/3 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#C9A050] text-sm uppercase tracking-[0.2em] mb-6 font-light"
            >
              Harley Street · Doctor-Led · Since 2007
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight mb-8 leading-[1.1]"
            >
              Non-Surgical{" "}
              <span className="text-[#C9A050]">Facelift</span>
              <br />
              <span className="text-2xl md:text-3xl text-white/50 font-light">London</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 font-extralight max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Four doctor-led modalities — from the lightest Botox refinement to deep
              laser fibre tissue remodelling — combined to lift, restore, and rejuvenate
              without surgery.
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.15em] text-white/35 mb-10"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A050]" />
                GMC-Registered Doctors
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A050]" />
                17+ Years Experience
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A050]" />
                Harley Street Institute Lead Trainer
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                asChild
                className="bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-10 py-6 text-base font-medium"
              >
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                  Book Your Consultation
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ── PHILOSOPHY ── */}
        <section className="py-16 md:py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extralight mb-8 tracking-tight">
              Our Approach to <span className="text-[#C9A050]">Facial Lifting</span>
            </h2>
            <div className="space-y-6 text-white/65 font-extralight text-base md:text-lg leading-relaxed">
              <p>
                At Cosmedocs, we believe a truly effective non-surgical facelift is never a single treatment — it is a strategy. Facial ageing affects multiple tissue layers simultaneously: muscles pull downward, volume depletes, skin loses elasticity, and stubborn fat pockets form beneath the chin and along the jowls. No single device or injectable addresses every layer.
              </p>
              <p>
                That is why we have developed a multi-modality approach, combining four distinct lifting techniques — each addressing a different aspect of facial ageing. From the subtle muscle relaxation of a Nefertiti Botox Lift to the deep tissue remodelling of the Laser Fibre Lift, our doctors design bespoke treatment plans that work synergistically, delivering results that are greater than the sum of their parts.
              </p>
              <p>
                Our aesthetics is invisible art. Bold, natural, always your way. Transformation that speaks — without saying a word.
              </p>
            </div>
          </div>
        </section>

        {/* ── TREATMENT MODALITIES ── */}
        <section className="py-16 md:py-24 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extralight mb-4 tracking-tight text-center">
              Four Levels of <span className="text-[#C9A050]">Non-Surgical Lifting</span>
            </h2>
            <p className="text-center text-white/45 font-light text-sm mb-14 max-w-2xl mx-auto">
              From the lightest Botox refinement to deep laser tissue remodelling —
              each modality targets a different layer of facial ageing.
            </p>

            <div className="space-y-8">
              {treatments.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 hover:border-[#C9A050]/20 transition-colors duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <p className="text-[#C9A050] text-xs uppercase tracking-[0.2em] mb-2 font-medium">
                        {t.intensity}
                      </p>
                      <h3 className="text-xl md:text-2xl font-light mb-4">{t.title}</h3>
                      <p className="text-white/60 font-extralight leading-relaxed mb-6">
                        {t.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div>
                          <p className="text-white/35 text-xs uppercase tracking-wider mb-1">Best For</p>
                          <p className="text-white/70 text-sm font-light">{t.bestFor}</p>
                        </div>
                        <div>
                          <p className="text-white/35 text-xs uppercase tracking-wider mb-1">Downtime</p>
                          <p className="text-white/70 text-sm font-light">{t.downtime}</p>
                        </div>
                        <div>
                          <p className="text-white/35 text-xs uppercase tracking-wider mb-1">Results</p>
                          <p className="text-white/70 text-sm font-light">{t.results}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3 md:min-w-[160px]">
                      <p className="text-[#C9A050] text-lg font-light">{t.price}</p>
                      <Link
                        to={t.path}
                        className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#C9A050] transition-colors"
                      >
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMBINATION STRATEGY ── */}
        <section className="py-16 md:py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extralight mb-8 tracking-tight">
              Why We <span className="text-[#C9A050]">Combine</span> Treatments
            </h2>
            <div className="space-y-6 text-white/65 font-extralight text-base md:text-lg leading-relaxed">
              <p>
                The most natural, long-lasting non-surgical facelift results come from treating multiple tissue layers simultaneously. At Cosmedocs, our doctors routinely combine modalities in a single treatment session or across a phased plan:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6">
                  <h3 className="text-white font-light mb-3">Botox + HA Makeover</h3>
                  <p className="text-white/55 text-sm font-extralight leading-relaxed">
                    The Nefertiti Lift relaxes downward-pulling platysmal muscles while the HA Makeover replaces lost volume in the midface, jawline, and temples. Together, they create a comprehensive liquid facelift that addresses both dynamic muscle pull and static volume loss — the two primary drivers of lower-face ageing.
                  </p>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6">
                  <h3 className="text-white font-light mb-3">PDO Threads + HA Makeover</h3>
                  <p className="text-white/55 text-sm font-extralight leading-relaxed">
                    PDO threads provide genuine mechanical lift — physically repositioning sagging tissue — whilst fillers restore the volumetric scaffold that holds everything in place. This combination is our go-to for moderate-to-advanced lower-face ageing, particularly jowls and nasolabial depth.
                  </p>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6">
                  <h3 className="text-white font-light mb-3">Endolaser + Fillers</h3>
                  <p className="text-white/55 text-sm font-extralight leading-relaxed">
                    At Cosmedocs, we have learned to replace volume, tighten skin, and reduce excess fat in a targeted, zone-specific manner. Unlike a general all-over Endolift, our approach does not dissolve your existing fillers — it complements them. Endolaser addresses the skin and fat layers while fillers maintain the volumetric framework beneath.
                  </p>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6">
                  <h3 className="text-white font-light mb-3">Full Multi-Modality Plan</h3>
                  <p className="text-white/55 text-sm font-extralight leading-relaxed">
                    For comprehensive rejuvenation, a phased approach over 3–6 months combining all four modalities delivers the most dramatic yet natural transformation. Your doctor designs a bespoke timeline based on your anatomy, skin quality, and aesthetic goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHO IS IT FOR ── */}
        <section className="py-16 md:py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extralight mb-8 tracking-tight">
              Is a Non-Surgical Facelift <span className="text-[#C9A050]">Right for You?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-light mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#C9A050]" />
                  Ideal Candidates
                </h3>
                <ul className="space-y-3 text-white/60 font-extralight text-sm">
                  <li>• Early to moderate signs of facial sagging and jowling</li>
                  <li>• Volume loss in cheeks, temples, or jawline</li>
                  <li>• Neck bands or platysmal banding</li>
                  <li>• Under-eye bags or hollowing</li>
                  <li>• Double chin or submental fat</li>
                  <li>• Brow ptosis or hooded appearance</li>
                  <li>• Those seeking natural results without surgery or general anaesthesia</li>
                  <li>• Patients wanting minimal downtime (return to work within days)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-light mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#C9A050]" />
                  What to Expect
                </h3>
                <ul className="space-y-3 text-white/60 font-extralight text-sm">
                  <li>• Thorough consultation with a GMC-registered doctor</li>
                  <li>• Bespoke treatment plan tailored to your anatomy</li>
                  <li>• Treatments performed at our Harley Street clinic</li>
                  <li>• Local anaesthesia — no general anaesthetic required</li>
                  <li>• Recovery measured in days, not weeks</li>
                  <li>• Natural, harmonious results that enhance — never alter — your identity</li>
                  <li>• Follow-up review appointments included</li>
                  <li>• Laser Fibre Lift treatments in partnership with Priva Dr</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRACTITIONER CREDENTIALS ── */}
        <section className="py-16 md:py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extralight mb-8 tracking-tight">
              Your <span className="text-[#C9A050]">Doctor</span>
            </h2>
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10">
              <div className="space-y-4 text-white/65 font-extralight leading-relaxed">
                <p>
                  Non-surgical facelifts demand an intimate understanding of facial anatomy, tissue biomechanics, and aesthetic proportion. At Cosmedocs, every treatment is performed by a GMC-registered doctor with advanced training in injectable techniques, thread lifting, and laser-assisted procedures.
                </p>
                <p>
                  Our lead practitioner serves as the <strong className="text-white/90 font-light">lead trainer for the Harley Street Institute</strong>, training the next generation of aesthetic doctors in advanced lifting techniques including the Laser Fibre Lift. With over 17 years of clinical experience and tens of thousands of procedures performed, you are in the hands of one of London's most experienced non-surgical facelift practitioners.
                </p>
                <p>
                  It is not just the device that produces the results — it is the hands behind it. A powerful treatment needs to be done in the right hands.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <span className="text-xs uppercase tracking-wider text-[#C9A050]/70 bg-[#C9A050]/10 px-3 py-1.5 rounded-full">
                  GMC Registered
                </span>
                <span className="text-xs uppercase tracking-wider text-[#C9A050]/70 bg-[#C9A050]/10 px-3 py-1.5 rounded-full">
                  Harley Street Institute Lead Trainer
                </span>
                <span className="text-xs uppercase tracking-wider text-[#C9A050]/70 bg-[#C9A050]/10 px-3 py-1.5 rounded-full">
                  17+ Years Experience
                </span>
                <span className="text-xs uppercase tracking-wider text-[#C9A050]/70 bg-[#C9A050]/10 px-3 py-1.5 rounded-full">
                  Priva Dr Partner
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 md:py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extralight mb-10 tracking-tight text-center">
              Frequently Asked <span className="text-[#C9A050]">Questions</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white/[0.02] border border-white/[0.06] rounded-xl overflow-hidden"
                >
                  <summary className="cursor-pointer px-6 py-5 text-white/90 font-light text-base list-none flex items-center justify-between hover:bg-white/[0.03] transition-colors">
                    {faq.q}
                    <span className="text-[#C9A050] text-xl ml-4 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-white/55 font-extralight text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
            {/* FAQ Schema */}
            <Helmet>
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.q,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: faq.a,
                    },
                  })),
                })}
              </script>
            </Helmet>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section className="py-16 md:py-24 px-6 border-t border-white/5">
          <ClientReviews />
        </section>

        {/* ── CTA ── */}
        <section className="py-20 md:py-28 px-6 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-extralight mb-6 tracking-tight">
              Ready to Explore Your{" "}
              <span className="text-[#C9A050]">Lifting Options?</span>
            </h2>
            <p className="text-white/50 font-extralight mb-10 max-w-xl mx-auto">
              Book a consultation with our Harley Street doctors to discuss which non-surgical
              facelift approach — or combination — is right for your anatomy and goals.
            </p>
            <Button
              asChild
              className="bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-12 py-6 text-base font-medium"
            >
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Book Consultation
              </a>
            </Button>
          </div>
        </section>

        {/* ── HIDDEN SEO CONTENT ── */}
        <div className="sr-only" aria-hidden="true">
          <h2>Non-Surgical Facelift London — Comprehensive Guide</h2>
          <p>
            Cosmedocs offers the most comprehensive range of non-surgical facelift treatments in London, performed by GMC-registered doctors at our Harley Street clinic. Our multi-modality approach combines Nefertiti Botox lifting, hyaluronic acid dermal filler makeovers, PDO thread lifts, and Laser Fibre Lift technology to address every layer of facial ageing without surgery or general anaesthesia.
          </p>
          <p>
            The Nefertiti Botox Lift is the lightest form of non-surgical facial lifting available. Named after the Egyptian queen famed for her elegant neck and jawline, this treatment uses botulinum toxin to relax the platysmal bands — the muscles that pull the lower face downward as we age. By releasing this downward tension, the jawline appears sharper, the neck smoother, and the overall facial contour more refined. The Nefertiti Lift is frequently combined with an HA Makeover for patients who want both muscle relaxation and volumetric restoration in a single appointment.
          </p>
          <p>
            The HA Makeover is our signature full-face rejuvenation treatment using hyaluronic acid dermal fillers strategically placed across 8 to 11 facial points. This technique restores lost volume in the temples, cheeks, chin, and jawline — recreating the scaffolding that supports youthful facial proportions. The HA Makeover addresses the fundamental cause of midface descent: volumetric depletion. When combined with Botox, the result is a comprehensive liquid facelift that treats both the volumetric and muscular components of facial ageing simultaneously.
          </p>
          <p>
            PDO thread lifts provide genuine mechanical lifting of sagging tissue — something that neither Botox nor dermal fillers can achieve alone. Polydioxanone absorbable sutures are inserted beneath the skin to physically reposition descended tissue in the midface, jowls, and brow area. At Cosmedocs, PDO threads are almost always combined with the HA Makeover for lower-face rejuvenation: the fillers restore volume while the threads secure and elevate the tissue, creating a result that is significantly more effective than either treatment alone.
          </p>
          <p>
            The Laser Fibre Lift represents the most advanced non-surgical lifting technology in our portfolio. A micro-fibre optic laser cannula is inserted beneath the skin to deliver precise thermal energy that simultaneously tightens the skin, dissolves small pockets of stubborn fat, and stimulates deep collagen remodelling. At Cosmedocs, we have refined the Laser Fibre Lift technique to target specific facial zones — jowls, under-eye bags, eyebrow lifting, and double chin — rather than performing a general all-over treatment. This targeted approach complements existing filler work without dissolving it, and is performed in partnership with our specialist clinic Priva Dr.
          </p>
          <p>
            Our lead practitioner is the lead trainer for the Harley Street Institute, training doctors across the UK in advanced aesthetic techniques including Endolaser. With over 17 years of clinical experience and a philosophy rooted in natural, invisible results, Cosmedocs has established itself as one of London's leading non-surgical facelift clinics. We believe that a powerful treatment needs to be done in the right hands — it is not just the device that produces the results.
          </p>
          <p>
            Non-surgical facelift alternatives to consider include HIFU (high-intensity focused ultrasound), Morpheus8 radiofrequency microneedling, and Ultherapy. While these treatments offer skin tightening benefits, they work from outside the skin rather than from within. Endolaser's subdermal delivery mechanism provides more targeted and precise results. When combined with the volumetric restoration of an HA Makeover and the mechanical lift of PDO threads, the multi-modality Cosmedocs approach delivers superior outcomes compared to any single-modality treatment.
          </p>
          <p>
            Recovery from non-surgical facelift treatments at Cosmedocs varies by modality. The Nefertiti Botox Lift requires no downtime. The HA Makeover involves mild swelling for 2-3 days. PDO thread lifts require 3-5 days of recovery with mild swelling and tenderness. Endolaser treatment typically involves 4-5 days of swelling on average. All modalities are significantly less invasive than surgical facelift alternatives, with recovery measured in days rather than weeks.
          </p>
          <p>
            Prices for non-surgical facelift treatments at our London Harley Street clinic start from £250 for a Nefertiti Botox Lift, from £800 for an HA Makeover or PDO Thread Lift, and from £450 for targeted Endolaser treatment of specific zones including eyebrow lift, jawline and jowls, cheeks and nasolabial folds, and chin tightening for double chin reduction.
          </p>
        </div>
      </div>
    </>
  );
};

export default NonSurgicalFaceliftHub;
