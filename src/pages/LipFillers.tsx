import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, AlertTriangle, Heart, ArrowRight } from "lucide-react";
import lipIllustration from "@/assets/lip-profile-illustration.png";
import { generateSEOMetadata } from "@/utils/seo";
import Breadcrumb from "@/components/Breadcrumb";
// Lip Fillers page renders all content visible by default (SEO: avoid hiding primary copy behind toggles)
const ExpandableSection = ({ preview, children }: { preview: React.ReactNode; children: React.ReactNode; label?: string; collapseLabel?: string }) => (
  <div className="space-y-4">{preview}<div>{children}</div></div>
);
import LipFillersSidebar from "@/components/lip-fillers/LipFillersSidebar";
import SkinFoundationCTA from "@/components/SkinFoundationCTA";
import TreatmentPaymentInfo from '@/components/TreatmentPaymentInfo';

const LipFillers = () => {
  const seoData = generateSEOMetadata(
    "Lip Fillers London | Natural Lip Augmentation | Harley Street Doctors",
    "Doctor-led lip filler injections from £300. Natural-looking lip augmentation using premium hyaluronic acid at our Harley Street clinic. 0.5ml & 1ml options.",
    "/treatments/lip-fillers/"
  );

  const faqs = [
    {
      question: "How long do lip fillers last?",
      answer: "Lip filler results typically last 6–12 months depending on the product used, your metabolism, and the volume injected. 0.5ml treatments tend to last 6–9 months, whilst 1ml treatments can last up to 12 months. Premium hyaluronic acid fillers used at CosmeDocs provide long-lasting results that gradually and naturally dissolve."
    },
    {
      question: "How much do lip fillers cost in London?",
      answer: "At CosmeDocs, lip fillers start from £300 for 0.5ml and £350 for 1ml. This includes consultation, premium hyaluronic acid filler, and aftercare support. The consultation fee (£50) is deducted if you proceed on the same day."
    },
    {
      question: "Do lip fillers hurt?",
      answer: "Discomfort is minimal. We apply topical anaesthetic before treatment and use premium fillers containing lidocaine for additional comfort. Most patients describe the sensation as mild pressure rather than pain. The procedure takes 30–45 minutes including consultation."
    },
    {
      question: "What is the difference between 0.5ml and 1ml lip filler?",
      answer: "0.5ml provides subtle, natural enhancement — ideal for thin lips and first-time treatments. 1ml creates more visible fullness and defined shape. Your doctor will assess your lip anatomy and recommend the optimal volume during consultation."
    },
    {
      question: "What are the lip filler swelling stages?",
      answer: "Swelling peaks at 24–48 hours, then gradually reduces over 1–2 weeks. Apply ice packs, avoid strenuous exercise for 24 hours, sleep elevated, and stay hydrated. Final results are visible after 2 weeks once swelling fully subsides."
    },
    {
      question: "Can lip fillers look natural?",
      answer: "Absolutely. Our invisible art philosophy ensures natural-looking results. We enhance your existing lip shape and proportions rather than creating an artificial appearance. Doctor-led assessment ensures your enhancement suits your facial harmony."
    },
    {
      question: "What are the risks of lip fillers?",
      answer: "When performed by qualified doctors using premium products, risks are minimal. Possible temporary side effects include swelling, bruising, tenderness, or mild asymmetry. Serious complications are extremely rare with experienced practitioners."
    },
    {
      question: "Which lip filler volume should I choose?",
      answer: "For thin lips with dense elastin, we recommend starting with 0.5ml. For medium to large lips or those wanting more noticeable change, 1ml is ideal. Your doctor will assess your lip anatomy during consultation and recommend the optimal volume."
    },
    {
      question: "When will I see final lip filler results?",
      answer: "Initial results are visible immediately, but final results appear after 2 weeks once swelling subsides. The filler continues to integrate with your tissues over this period for optimal, natural-looking results."
    },
    {
      question: "Can lip fillers be dissolved?",
      answer: "Yes. Hyaluronic acid lip fillers can be safely dissolved using hyaluronidase if you're unhappy with results or wish to return to your natural lip shape. This is one advantage of HA-based fillers over permanent alternatives."
    },
    {
      question: "What's the difference between a lip flip and lip filler?",
      answer: "A lip flip uses Botox to relax muscles and reveal more lip tissue — no volume is added. Lip fillers physically add volume using hyaluronic acid. They serve different purposes and can be combined. See our lip flip page for more details."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/lip-fillers/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/lip-fillers/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "name": "CosmeDocs",
                "description": "Doctor-led aesthetic medicine clinic on Harley Street, London. Established 2007.",
                "url": "https://www.cosmedocs.com/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "10 Harley Street",
                  "addressLocality": "London",
                  "postalCode": "W1G 9PF",
                  "addressCountry": "GB"
                },
                
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "243"
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                ]
              },
              {
                "@type": "MedicalProcedure",
                "name": "Lip Filler Treatment",
                "alternateName": ["Lip Augmentation", "Natural Lip Job", "Lip Injections", "Lip Enlargement"],
                "description": "Doctor-led lip augmentation using premium hyaluronic acid dermal fillers to enhance lip volume, shape, and definition with natural-looking results.",
                "url": "https://www.cosmedocs.com/treatments/lip-fillers/",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Lips",
                "followup": "Results visible immediately, final outcome at 2 weeks. Lasts 6–12 months.",
                "howPerformed": "Premium hyaluronic acid filler injected into strategic points of the lips using fine needles or cannula, with topical anaesthetic and lidocaine for comfort.",
                "cost": {
                  "@type": "MonetaryAmount",
                  "currency": "GBP",
                  "minValue": 300,
                  "maxValue": 350
                },
                "author": {
                  "@type": "Person",
                  "name": "Dr Ahmed Haq",
                  "jobTitle": "Medical Director, Cosmetic Doctor",
                  "url": "https://www.cosmedocs.com/team/dr-ahmed-haq/",
                  "identifier": "GMC 6151301"
                },
                "reviewedBy": {
                  "@type": "Person",
                  "name": "Dr Hena Haq",
                  "jobTitle": "Aesthetic Doctor",
                  "url": "https://www.cosmedocs.com/team/dr-hena-haq/",
                  "identifier": "GMC 7034321"
                },
                "provider": {
                  "@type": "MedicalBusiness",
                  "name": "CosmeDocs",
                  "url": "https://www.cosmedocs.com/"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cosmedocs.com/" },
                  { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://www.cosmedocs.com/treatments/" },
                  { "@type": "ListItem", "position": 3, "name": "Dermal Fillers", "item": "https://www.cosmedocs.com/treatments/dermal-fillers/" },
                  { "@type": "ListItem", "position": 4, "name": "Lip Fillers", "item": "https://www.cosmedocs.com/treatments/lip-fillers/" }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How Lip Filler Treatment Is Performed",
                "description": "Step-by-step doctor-led lip filler treatment at CosmeDocs Harley Street.",
                "totalTime": "PT45M",
                "step": [
                  { "@type": "HowToStep", "position": 1, "name": "Consultation & assessment", "text": "Your doctor reviews lip anatomy, medical history and aesthetic goals to recommend volume and product." },
                  { "@type": "HowToStep", "position": 2, "name": "Topical anaesthesia", "text": "Numbing cream is applied for 15 minutes; lidocaine in the filler adds further comfort." },
                  { "@type": "HowToStep", "position": 3, "name": "Layered injection", "text": "Premium HA filler is placed via fine needle or cannula across vermilion border, body, philtrum ridges and Cupid's bow." },
                  { "@type": "HowToStep", "position": 4, "name": "Shape & review", "text": "Doctor sculpts in real time, reviews symmetry and finalises the shape with the patient." },
                  { "@type": "HowToStep", "position": 5, "name": "Aftercare & two-week review", "text": "Aftercare guidance issued; complimentary 2-week review to assess final settled result." }
                ]
              },
              {
                "@type": "ImageGallery",
                "name": "Lip Filler Before & After — Real Patients",
                "url": "https://www.cosmedocs.com/before-after/dermal-fillers/lips/",
                "image": [
                  "https://www.cosmedocs.com/images/before-after/dermal-fillers/lips/lip-filler-natural-enhancement.jpg",
                  "https://www.cosmedocs.com/images/before-after/dermal-fillers/lips/lip-augmentation-profile.jpg",
                  "https://www.cosmedocs.com/images/before-after/dermal-fillers/lips/lip-filler-side-profile.jpg"
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              },
              {
                "@type": "Offer",
                "name": "Lip Filler Treatment",
                "priceCurrency": "GBP",
                "price": "300",
                "url": "https://www.cosmedocs.com/treatments/lip-fillers/",
                "priceValidUntil": "2026-12-31",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "GBP",
                  "minPrice": "300",
                  "maxPrice": "350"
                },
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "MedicalBusiness",
                  "name": "CosmeDocs"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black overflow-x-hidden">
        {/* ═══════════════════════════════════════════
            HERO — Dark luxury
        ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[-20%] left-[-5%] w-[400px] h-[400px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.04) 0%, transparent 60%)' }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[
                { label: 'Treatments', path: '/treatments/' },
                { label: 'Dermal Fillers', path: '/treatments/dermal-fillers/' }
              ]}
              currentPage="Lip Fillers"
            />

            <div className="flex flex-col lg:flex-row items-center justify-between pt-12 pb-4 gap-8">
              {/* Mobile: Lip illustration above text */}
              <motion.div
                className="lg:hidden w-[180px] h-[180px] relative mx-auto"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 50% 45%, rgba(201, 160, 80, 0.12) 0%, transparent 60%)',
                  }}
                  animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img
                  src={lipIllustration}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(201,160,80,0.15)]"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Left: Text */}
              <div className="max-w-2xl text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white/90 leading-[1.1] tracking-tight mb-6">
                    Lip Fillers{" "}
                    <span className="text-[#C9A050] font-light">London</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl mx-auto lg:mx-0">
                    Doctor-led lip augmentation using premium hyaluronic acid — natural volume, refined shape, and subtle definition tailored to your features.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-white/25 tracking-wide uppercase"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    Doctor-Led
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    From £300
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    Since 2007
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    Harley Street
                  </span>
                </motion.div>
              </div>

              {/* Right: Lip illustration — desktop */}
              <motion.div
                className="hidden lg:block flex-shrink-0 w-[280px] h-[320px] relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 50% 45%, rgba(201, 160, 80, 0.1) 0%, transparent 60%)',
                  }}
                  animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img
                  src={lipIllustration}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(201,160,80,0.15)]"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        </section>

        {/* ═══════════════════════════════════════════
            TWO-COLUMN LAYOUT
        ═══════════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14">

              {/* What Are Lip Fillers */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    What Are <span className="text-[#C9A050] font-light">Lip Fillers?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Lip fillers are injectable treatments using hyaluronic acid (HA) to add volume, shape, and definition to the lips. As a naturally occurring substance in the body, HA integrates seamlessly with lip tissue — delivering results that look and feel natural.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Unlike surgical lip augmentation, injectable fillers are minimally invasive with no general anaesthesia required. The treatment takes 30–45 minutes and results are visible immediately, with final outcomes settling after approximately two weeks.
                      </p>
                      <p>
                        At CosmeDocs, we use only premium FDA-approved hyaluronic acid fillers from leading manufacturers including Juvederm, Restylane, and Teoxane. Each product is selected based on your specific lip anatomy and aesthetic goals.
                      </p>
                      <p>
                        According to{" "}
                        <a href="https://pubmed.ncbi.nlm.nih.gov/40979310/" target="_blank" rel="noopener noreferrer" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">prospective safety studies</a>,
                        modern hyaluronic acid lip fillers demonstrate excellent efficacy and safety profiles when administered by qualified practitioners.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* How It Works */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    How the Treatment <span className="text-[#C9A050] font-light">Works</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Your doctor begins with a detailed facial assessment, discussing your goals and recommending the optimal volume and product. Topical anaesthetic is applied before precise injections are placed at strategic points across the lips.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Using fine needles or micro-cannula, hyaluronic acid is carefully deposited into multiple lip zones — the vermilion border, Cupid's bow, lip body, and philtrum ridges. Each area receives a tailored amount to create harmonious enhancement.
                      </p>
                      <p>
                        The filler contains lidocaine for additional comfort during treatment. Your doctor sculpts the lip shape in real-time, allowing you to provide input throughout the process. Results are immediate, though mild swelling may temporarily exaggerate the final outcome.
                      </p>
                      <p>
                        Hyaluronic acid attracts and binds water molecules, which means the filler continues to hydrate and integrate with your lip tissue over the following days — creating a soft, natural feel.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Our Secret Cocktail */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Our Secret <span className="text-[#C9A050] font-light">Filler Cocktail</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Not all lip fillers are created equal — and neither are all lips. Over 20 years of injecting, we've developed a proprietary cocktail approach that most clinics simply don't offer. The result? Lips that look <em>and feel</em> like your own.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        What most patients don't realise is that every filler brand — Juvederm, Restylane, Teoxane — carries a dozen or more products, each with a different consistency, elasticity, and molecular weight. Choosing the right <em>combination</em> for your unique lip anatomy is everything. It's the difference between lips that feel stiff and unnatural, and lips that move, hydrate, and feel indistinguishable from your own tissue.
                      </p>
                      <p>
                        Our doctors use an exclusive blend of Swiss and French hyaluronic acid fillers — carefully selected for their complementary properties. One for deep structural volume. Another for superficial hydration and softness. The precise ratio is tailored to your lip tissue, existing volume, and desired outcome.
                      </p>
                      <div className="grid grid-cols-2 gap-3 my-4">
                        {[
                          { label: "Swiss HA", detail: "Structural support & longevity" },
                          { label: "French HA", detail: "Hydration & natural softness" },
                          { label: "Volume layer", detail: "Body & projection" },
                          { label: "Hydration layer", detail: "Suppleness & lip feel" },
                        ].map((item) => (
                          <div key={item.label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 text-center">
                            <p className="text-[#C9A050]/70 text-xs font-medium mb-1">{item.label}</p>
                            <p className="text-white/40 text-[11px]">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                      <p>
                        This layered cocktail technique is something we've refined over two decades and over a million injections. It's why our patients consistently describe their results as "feeling like my own lips" — because the filler integrates with your tissue rather than sitting on top of it.
                      </p>
                      <div className="p-5 bg-white/[0.03] border border-white/[0.06] rounded-xl">
                        <p className="text-white/40 text-xs leading-relaxed font-light">
                          <strong className="text-[#C9A050]/80">Why it matters:</strong> A single filler product gives you one texture, one behaviour. Our cocktail approach layers multiple consistencies — volume where you need projection, hydration where you need softness — so your lips don't just look natural, they <em>feel</em> natural. That's the invisible art.
                        </p>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Natural Lip Job */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    The <span className="text-[#C9A050] font-light">Natural Lip Job</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="space-y-4 text-white/55 text-sm leading-relaxed font-light">
                    <p>
                      A <strong className="text-white/75">natural lip job</strong> isn't a single product or trend — it's a philosophy. At CosmeDocs it means honouring your existing lip ratio, respecting the lower-third proportions of your face, and refusing the over-projected, top-heavy look that has dominated the past decade. The goal is lips that look like <em>better-rested versions of your own</em>, not someone else's.
                    </p>
                    <p>
                      Our doctors achieve this through three principles: <strong className="text-white/75">conservative dosing</strong> (often starting at 0.5ml), <strong className="text-white/75">multi-product layering</strong> (soft HA for hydration, structural HA only where projection is genuinely needed), and <strong className="text-white/75">profile-first injection</strong> — assessing the lip from the side, not just front-on, to keep forward projection in check.
                    </p>
                    <p>
                      If you've been told elsewhere that you "need 1ml" before any assessment, that's a red flag. A natural lip job is doctor-led, anatomy-led, and almost always begins quieter than patients expect.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Lip Enlargement Cost — Transparent Pricing */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Lip Enlargement <span className="text-[#C9A050] font-light">Cost in London</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    Transparent, all-inclusive pricing — no hidden top-up fees, no pressure to upsize. Lip injections price reflects product, doctor time, and your complimentary two-week review.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { tier: "0.5ml Lip Filler", price: "£300", note: "First-time / subtle enhancement" },
                      { tier: "1ml Lip Filler", price: "£350", note: "Full volume restoration" },
                      { tier: "Lip Flip (Botox)", price: "£175", note: "Muscle-based, no volume added" },
                    ].map((item) => (
                      <div key={item.tier} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                        <p className="text-sm text-white/70 font-medium mb-1">{item.tier}</p>
                        <p className="text-2xl text-[#C9A050] font-light mb-2">{item.price}</p>
                        <p className="text-xs text-white/40 font-light">{item.note}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 p-5 bg-white/[0.03] border border-white/[0.06] rounded-xl">
                    <p className="text-white/45 text-xs leading-relaxed font-light">
                      <strong className="text-[#C9A050]/80">What's included:</strong> doctor consultation (£50, deducted from treatment), premium FDA-approved HA filler, topical anaesthetic, and a complimentary two-week review. Compare with our{" "}
                      <Link to="/treatments/lip-filler-0-5ml-vs-1ml/" className="text-[#C9A050]/80 hover:text-[#C9A050] underline underline-offset-2">0.5ml vs 1ml breakdown</Link>.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* 0.5ml vs 1ml */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    0.5ml vs 1ml <span className="text-[#C9A050] font-light">Lip Filler</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Choosing the right volume depends on your natural lip anatomy and desired outcome. Both options deliver beautiful, natural results — the difference is in the degree of enhancement.
                      </p>
                    }
                  >
                    <div className="grid md:grid-cols-2 gap-5 mt-2">
                      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                        <p className="text-sm font-medium text-[#C9A050] mb-3">0.5ml — Subtle Enhancement</p>
                        <ul className="space-y-2 text-white/45 text-xs font-light">
                          <li>• Ideal for thin lips and first-timers</li>
                          <li>• Gentle fullness with minimal swelling</li>
                          <li>• Results last 6–9 months</li>
                          <li>• £300</li>
                          <li>• Perfect starting point</li>
                        </ul>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                        <p className="text-sm font-medium text-white/60 mb-3">1ml — Bold Enhancement</p>
                        <ul className="space-y-2 text-white/45 text-xs font-light">
                          <li>• Visible enhancement for medium–large lips</li>
                          <li>• Defined shape and contour</li>
                          <li>• Results last 9–12 months</li>
                          <li>• £350</li>
                          <li>• Noticeable transformation</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-5 bg-white/[0.03] border border-white/[0.06] rounded-xl">
                      <p className="text-white/40 text-xs leading-relaxed font-light">
                        <strong className="text-[#C9A050]/80">Doctor's note:</strong> Thin lips with dense elastin respond best to gradual volume increases starting with 0.5ml. Your doctor will assess your tissue quality and recommend the safest, most effective approach for your unique anatomy.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Treatment Areas */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Lip Enhancement <span className="text-[#C9A050] font-light">Areas</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Vermilion border", "Cupid's bow", "Upper & lower lip body",
                      "Oral commissures", "Philtrum ridges", "Lip symmetry correction"
                    ].map((area) => (
                      <div key={area} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 text-center">
                        <p className="text-white/55 text-xs font-light">{area}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Swelling & Recovery */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Swelling Stages & <span className="text-[#C9A050] font-light">Recovery</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Swelling is normal and peaks at 24–48 hours. Your lips will appear larger than the final result during this period. Most patients return to normal activities immediately.
                      </p>
                    }
                  >
                    <div className="space-y-3 text-white/45 text-sm leading-relaxed font-light">
                      {[
                        { stage: "First 24–48 hours", detail: "Initial swelling begins. Lips may feel tender and appear larger than the final result." },
                        { stage: "48–72 hours", detail: "Peak swelling period. Lips reach maximum size before beginning to settle naturally." },
                        { stage: "1–2 weeks", detail: "Gradual reduction. True results emerge as the filler integrates with your lip tissue." },
                      ].map((item) => (
                        <div key={item.stage} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                          <p className="text-white/60 text-xs font-medium mb-1">{item.stage}</p>
                          <p className="text-xs">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Lip Filler Before & After Results */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Real Results: <span className="text-[#C9A050] font-light">Lip Filler Before & After</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    Below is an example of lip filler treatment performed by our doctors at our Harley 
                    Street clinic. Results vary depending on lip anatomy, technique, and desired enhancement 
                    — with a focus on balance, proportion, and natural movement.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                    {[
                      { src: "/images/before-after/dermal-fillers/lips/lip-filler-natural-enhancement.jpg", alt: "Before and after lip filler showing natural volume enhancement" },
                      { src: "/images/before-after/dermal-fillers/lips/lip-augmentation-profile.jpg", alt: "Lip augmentation before and after — profile view showing balanced projection" },
                      { src: "/images/before-after/dermal-fillers/lips/lip-filler-side-profile.jpg", alt: "Lip filler side profile before and after — natural lip shape" },
                    ].map((img) => (
                      <div key={img.src} className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900">
                        <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto block" />
                      </div>
                    ))}
                  </div>
                  <p className="text-white/30 text-xs font-light italic mb-6">
                    All images show real patients treated by our doctors at our Harley Street clinic. Individual results vary.
                  </p>
                  <Link
                    to="/before-after/dermal-fillers/lips/"
                    className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#D4AF6A] text-sm font-medium transition-colors"
                  >
                    View real lip filler before & after results
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-white/30 text-xs font-light mt-2">
                    Includes subtle enhancement, corrections, and complication management cases.
                  </p>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Am I <span className="text-[#C9A050] font-light">Suitable?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="w-5 h-5 text-[#C9A050]" />
                        <p className="text-sm font-medium text-white/80">May Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Thin or naturally flat lips</li>
                        <li>• Asymmetric lip shape</li>
                        <li>• Age-related lip volume loss</li>
                        <li>• Desire for defined lip borders</li>
                        <li>• Over 18 years of age</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-white/30" />
                        <p className="text-sm font-medium text-white/80">May Not Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Active cold sores or lip infections</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Allergy to hyaluronic acid</li>
                        <li>• Blood clotting disorders</li>
                        <li>• Unrealistic expectations</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Lip Filler vs Lip Flip */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Lip Filler vs <span className="text-[#C9A050] font-light">Lip Flip</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Lip fillers add physical volume with hyaluronic acid, whilst a{" "}
                        <Link to="/treatments/lip-flip/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">lip flip</Link>{" "}
                        uses Botox to relax muscles and reveal more lip tissue. They serve different purposes and can be combined.
                      </p>
                    }
                  >
                    <div className="grid md:grid-cols-2 gap-5 mt-2">
                      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                        <p className="text-sm font-medium text-[#C9A050] mb-3">Lip Filler (HA)</p>
                        <ul className="space-y-2 text-white/45 text-xs font-light">
                          <li>• Adds hyaluronic acid volume</li>
                          <li>• 30–45 minute procedure</li>
                          <li>• Results last 6–12 months</li>
                          <li>• From £300</li>
                          <li>• Shapes and defines contour</li>
                        </ul>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                        <p className="text-sm font-medium text-white/60 mb-3">Lip Flip (Botox)</p>
                        <ul className="space-y-2 text-white/45 text-xs font-light">
                          <li>• Relaxes muscles — no volume added</li>
                          <li>• 10-minute procedure</li>
                          <li>• Results last 2–3 months</li>
                          <li>• £175</li>
                          <li>• Subtle, natural enhancement</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-5 bg-white/[0.03] border border-white/[0.06] rounded-xl">
                      <p className="text-white/40 text-xs leading-relaxed font-light">
                        <strong className="text-[#C9A050]/80">Combined approach:</strong> Many patients achieve optimal results by combining both —{" "}
                        <Link to="/treatments/lip-flip/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">lip flip</Link>{" "}
                        for upper lip muscle relaxation alongside filler for volume and definition.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Aftercare */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Aftercare & <span className="text-[#C9A050] font-light">Recovery</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Minimal downtime required. Most patients return to normal activities the same day. A few simple precautions ensure optimal healing and the best possible results.
                      </p>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light">
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Avoid touching or applying makeup to lips for 24 hours</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Apply ice packs carefully to reduce swelling</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Massage lips firmly for 7–14 days to prevent lumps</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Avoid strenuous exercise and hot drinks for 24 hours</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Sleep elevated to minimise overnight swelling</li>
                      <li className="flex items-start gap-3"><Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />Contact us if you experience any unusual symptoms</li>
                    </ul>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Why CosmeDocs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Why <span className="text-[#C9A050] font-light">CosmeDocs?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ul className="space-y-3">
                    {[
                      "Doctor-led — all treatments by GMC-registered doctors",
                      "Harley Street Institute trainers — established 2007",
                      "Over 1 million treatments performed",
                      "Premium FDA-approved fillers exclusively",
                      "Personalised treatment plans for every patient",
                      "Our aesthetics is invisible art"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/50 font-light">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </section>

              {/* FAQs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Frequently Asked <span className="text-[#C9A050] font-light">Questions</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-5">
                        <AccordionTrigger className="text-white/70 hover:text-[#C9A050] text-left text-sm font-light py-4">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-white/40 text-sm font-light pb-4">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24"><LipFillersSidebar /></div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-black to-black/95">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white/85">
                Ready for Natural, <span className="text-[#C9A050]">Beautiful Lips?</span>
              </h2>
              <p className="text-white/50 mb-8 font-light">
                A consultation with our doctors will assess your lip anatomy and create a personalised enhancement plan — subtle or bold, always natural.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                  <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-white font-medium px-8 py-5 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20 w-full sm:w-auto">
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="ghost" className="border border-white/15 text-white/60 hover:text-white hover:bg-white/5 px-8 py-5 rounded-full text-base w-full sm:w-auto">
                    Speak to a Doctor
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile Sidebar */}
        <section className="lg:hidden py-12 px-4 bg-black/95">
          <LipFillersSidebar />
        </section>

        {/* Related Treatments — internal cluster linking */}
        <section className="py-16 px-4 bg-black border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A050]/70 mb-3">Explore the lip cluster</p>
            <h2 className="text-2xl md:text-3xl font-extralight text-white/85 mb-8">
              Continue reading on <span className="text-[#C9A050] font-light">lip enhancement</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { to: "/treatments/lip-filler-0-5ml-vs-1ml/", tag: "Volume guide", title: "0.5ml vs 1ml Lip Filler", desc: "Which volume suits your lip anatomy — and how long each lasts." },
                { to: "/treatments/lip-flip/", tag: "Alternative", title: "Lip Flip (Botox)", desc: "Subtle muscle-relaxant alternative — or combination partner." },
                { to: "/treatments/lip-filler-dissolve/", tag: "Correction", title: "Lip Filler Dissolving", desc: "Hyalase protocols for unhappy or migrated lip filler." },
                { to: "/blog/lip-filler-results-explained", tag: "Editorial", title: "Lip Filler Results, Explained", desc: "Doctor-written guide to timelines, swelling and longevity." },
                { to: "/before-after/dermal-fillers/lips/", tag: "Gallery", title: "Real Lip Filler Before & After", desc: "Verified patient photographs from our Harley Street clinic." },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="group flex items-start gap-4 p-5 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:border-[#C9A050]/30 hover:bg-white/[0.05] transition-all"
                >
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-wider text-[#C9A050]/70 mb-1">{l.tag}</p>
                    <p className="text-white/85 text-sm font-medium mb-1">{l.title}</p>
                    <p className="text-white/45 text-xs font-light">{l.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C9A050]/50 group-hover:text-[#C9A050] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>

      <TreatmentPaymentInfo variant="dark" />

      {/* Skin Foundation CTA */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <SkinFoundationCTA variant="anti-ageing" />
        </div>
      </section>
      {/* More before & after */}
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <a href="/before-after/lip-filler-subtle/" className="inline-flex items-center gap-2 text-sm text-[#C9A050] hover:text-[#C9A050]/80 border-b border-[#C9A050]/40 hover:border-[#C9A050] pb-0.5 transition-colors">
            See subtle lip filler before &amp; after results →
          </a>
        </div>
      </section>
    </>
  );
};

export default LipFillers;
