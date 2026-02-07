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
import ExpandableSection from "@/components/ui/expandable-section";
import LipFillersSidebar from "@/components/lip-fillers/LipFillersSidebar";

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
        <link rel="canonical" href="https://cosmedocs.co.uk/treatments/lip-fillers/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://cosmedocs.co.uk/treatments/lip-fillers/" />
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
                "url": "https://cosmedocs.co.uk/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "10 Harley Street",
                  "addressLocality": "London",
                  "postalCode": "W1G 9PF",
                  "addressCountry": "GB"
                },
                "medicalSpecialty": "Aesthetic Medicine",
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
                "alternateName": "Lip Augmentation",
                "description": "Doctor-led lip augmentation using premium hyaluronic acid dermal fillers to enhance lip volume, shape, and definition with natural-looking results.",
                "url": "https://cosmedocs.co.uk/treatments/lip-fillers/",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Lips",
                "followup": "Results visible immediately, final outcome at 2 weeks. Lasts 6–12 months.",
                "howPerformed": "Premium hyaluronic acid filler injected into strategic points of the lips using fine needles or cannula, with topical anaesthetic and lidocaine for comfort."
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
                    Lip Filler <span className="text-[#C9A050] font-light">Before & After Results</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    Below are real examples of lip filler treatments performed by our doctors at our Harley 
                    Street clinic. Results vary depending on lip anatomy, technique, and desired enhancement 
                    — with a focus on balance, proportion, and natural movement.
                  </p>
                  <Link
                    to="/before-after/dermal-fillers/lips/"
                    className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#D4AF6A] text-sm font-medium transition-colors"
                  >
                    View real lip filler before & after results
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-white/30 text-xs font-light mt-2 italic">
                    All images show real patients treated by our doctors. Individual results vary.
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

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Lip Fillers London | Expert Lip Augmentation Harley Street</h2>
          <p>CosmeDocs offers premium lip filler treatments in London using advanced hyaluronic acid dermal fillers. Our expert cosmetic doctors specialise in natural-looking lip augmentation at our Harley Street clinic. We offer 0.5ml lip filler for subtle enhancement (£300) and 1ml lip filler for bold enhancement (£350), both using FDA-approved products from leading manufacturers including Juvederm, Restylane, and Teoxane. Our aesthetics is invisible art — bold, natural, always your way.</p>

          <h3>Before and After 0.5ml Lip Filler vs 1ml Lip Filler</h3>
          <p>Understanding the difference between before and after 0.5ml lip filler and before and after 1ml lip filler is essential for choosing your treatment. 0.5ml lip filler provides subtle enhancement ideal for thin lips with dense elastin, lasting 6–9 months. 1ml lip filler creates more visible enhancement with defined shape, lasting 9–12 months. Our gallery showcases authentic before and after lip filler results from real patients demonstrating the natural, beautiful enhancement achievable with expert technique.</p>

          <h3>Lip Filler Swelling Stages and Recovery</h3>
          <p>Understanding lip filler swelling stages helps you plan your treatment effectively. Initial swelling peaks at 24–48 hours, then gradually reduces over 1–2 weeks. How to reduce lip injection swelling: apply ice packs carefully, avoid strenuous exercise for 24 hours, sleep elevated, and stay hydrated. Most patients return to normal activities immediately after their lip filler treatment.</p>

          <h3>Lip Filler Cost London | How Much Are Lip Fillers?</h3>
          <p>Lip filler cost at CosmeDocs starts from £300 for 0.5ml and £350 for 1ml. How much is lip filler in London varies between clinics — at CosmeDocs, our transparent pricing includes premium hyaluronic acid filler, consultation, and aftercare support. The consultation fee (£50) is deducted from your treatment cost if you proceed on the same day. We use only premium FDA-approved dermal fillers from Swiss, French, and USA manufacturers for the safest, most natural-looking results.</p>

          <h3>Comprehensive Lip Enhancement Areas</h3>
          <p>Our advanced lip filler treatments target multiple areas: vermilion border definition, Cupid's bow enhancement, upper and lower lip body volume, oral commissure treatment, philtrum ridge definition, and lip symmetry correction. Each treatment area receives precise attention from our GMC-registered doctors who have performed over one million aesthetic injections since 2007.</p>

          <h3>Lip Filler Aftercare and Lip Filler Pain</h3>
          <p>Lip filler pain is minimal with topical anaesthetic and lidocaine-containing filler. Lip filler aftercare includes avoiding touching lips for 24 hours, applying ice packs, daily massage for 7–14 days, and avoiding strenuous exercise. Our comprehensive aftercare guide ensures optimal healing and the best possible results from your lip augmentation treatment. How long lip fillers take to dissolve naturally depends on your metabolism — typically 6–12 months for premium hyaluronic acid products.</p>

          <h3>Natural Looking Lip Enhancement London</h3>
          <p>Our invisible art philosophy ensures natural-looking lip enhancement that complements your facial features. Doctor-led lip filler treatment at our Harley Street clinic uses expert technique for subtle, sophisticated results. Whether you choose 0.5ml for a gentle enhancement or 1ml for more visible transformation, your lips will look naturally beautiful. We also offer lip flip Botox treatment which can be combined with fillers for comprehensive lip enhancement. Book your lip filler consultation today at our Harley Street clinic.</p>
        </div>
      </div>
    </>
  );
};

export default LipFillers;
