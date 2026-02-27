import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";
import TearTroughFillerSidebar from "@/components/tear-trough/TearTroughFillerSidebar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import tearTroughPreview from "@/assets/tear-trough-gallery-2.jpeg";

const TearTroughFiller = () => {
  const faqs = [
    {
      question: "What is a tear trough filler?",
      answer: "Tear trough filler is a minimally invasive treatment using hyaluronic acid-based dermal fillers to restore volume, reduce dark circles, and minimise under-eye puffiness. It targets the hollow area between your lower eyelids and upper cheek."
    },
    {
      question: "How long does tear trough filler last?",
      answer: "Results typically last 12–18 months depending on individual factors such as metabolism and lifestyle. Maintenance treatments are needed to sustain results."
    },
    {
      question: "Does tear trough filler hurt?",
      answer: "Most patients experience little to no pain due to expert injection techniques and use of topical anaesthetic numbing cream. Any discomfort is minimal and brief."
    },
    {
      question: "What's the recovery time and aftercare?",
      answer: "Recovery is typically swift with immediate visible results. You may experience swelling and slight bruising for a few days. Proper aftercare includes avoiding excessive touching and following our post-treatment guidelines. Most patients return to normal activities immediately."
    },
    {
      question: "What types of under-eye treatments do you offer?",
      answer: "We offer comprehensive solutions including tear trough dermal filler for volume restoration, fillers for dark circles to address pigmentation, eye bag reduction for puffiness, and specialised polynucleotide treatments for skin rejuvenation."
    },
    {
      question: "Who is a good candidate for tear trough fillers?",
      answer: "Ideal candidates have realistic expectations and experience genetic discolouration, volume loss under the eyes, or early signs of ageing. Not suitable for pregnant or breastfeeding individuals or those with lidocaine allergies."
    },
    {
      question: "What are the possible side effects?",
      answer: "Main side effects include mild swelling or bruising around injection sites that resolve naturally. Lumpy filler complications are rare when performed by experienced professionals using quality products."
    },
    {
      question: "Can tear trough fillers be combined with other treatments?",
      answer: "Yes, they work well with Botox for crow's feet, cheek fillers, and other facial treatments. We often recommend combining treatments for comprehensive under-eye rejuvenation."
    },
    {
      question: "What is the tear trough filler price?",
      answer: "Tear trough filler starts from £425. We also offer polynucleotide treatments at £450 per session with package deals available."
    }
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
        medicalSpecialty: "Aesthetic Medicine",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2387",
          bestRating: "5",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
      },
      {
        "@type": "MedicalProcedure",
        name: "Tear Trough Filler Treatment",
        alternateName: "Under Eye Filler",
        description: "Minimally invasive under-eye treatment using premium hyaluronic acid to restore volume, reduce dark circles, and minimise puffiness.",
        url: "https://www.cosmedocs.com/treatments/tear-trough-filler/",
        procedureType: "NoninvasiveProcedure",
        bodyLocation: "Under eye, tear trough region",
        followup: "Review appointment recommended at 2 weeks post-treatment.",
        howPerformed: "Premium hyaluronic acid filler carefully injected into the tear trough area using cannula or needle technique, with topical anaesthetic for comfort.",
      },
      {
        "@type": "Offer",
        name: "Tear Trough Filler Treatment",
        priceCurrency: "GBP",
        price: "425",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "GBP",
          price: "425",
          description: "Tear trough filler from £425; Polynucleotide from £450",
        },
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://www.cosmedocs.com/#clinic" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(faq => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cosmedocs.com/" },
          { "@type": "ListItem", position: 2, name: "Treatments", item: "https://www.cosmedocs.com/treatments/" },
          { "@type": "ListItem", position: 3, name: "Dermal Fillers", item: "https://www.cosmedocs.com/treatments/dermal-fillers/" },
          { "@type": "ListItem", position: 4, name: "Tear Trough Filler", item: "https://www.cosmedocs.com/treatments/tear-trough-filler/" },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Tear Trough Filler Treatment | Under Eye | Harley Street Doctors</title>
        <meta name="description" content="Doctor-led tear trough filler from £425. Reduce dark circles, under-eye hollows, and eye bags at our Harley Street clinic. Natural results since 2007." />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/tear-trough-filler/" />
        <meta property="og:title" content="Tear Trough Filler Treatment | Under Eye | Harley Street Doctors" />
        <meta property="og:description" content="Doctor-led tear trough filler from £425. Reduce dark circles and under-eye hollows at our Harley Street clinic." />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/tear-trough-filler/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        {/* ═══════ HERO ═══════ */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[
                { label: 'Treatments', path: '/treatments/' },
                { label: 'Dermal Fillers', path: '/treatments/dermal-fillers/' }
              ]}
              currentPage="Tear Trough Filler"
            />

            <div className="flex items-center justify-between pt-12 pb-4">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                    Tear Trough{" "}
                    <span className="text-[#C9A050] font-light">Filler</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">
                    Restoring under-eye volume to reduce dark circles, minimise hollowing, and brighten the eye area — for a naturally refreshed appearance.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    Doctor-Led
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    10–25 Min
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
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </section>

        {/* ═══════ TWO-COLUMN LAYOUT ═══════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14">

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <div className="text-white/45 text-sm leading-relaxed font-light space-y-4">
                    <p>
                      The tear trough is the hollow groove between your lower eyelid and upper cheek. As we age — or due to genetics — this area loses volume, creating shadows that appear as dark circles, tired eyes, or a sunken appearance. The skin around the eyes is up to 10 times more fragile than the rest of the face, requiring specialist expertise.
                    </p>
                    <p>
                      At CosmeDocs, our doctors use premium hyaluronic acid fillers and advanced cannula techniques to carefully restore under-eye volume. The goal is subtle, natural correction that brightens and refreshes — not overfills — the delicate eye area.
                    </p>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Understanding Under-Eye{" "}
                    <span className="text-[#C9A050] font-light">Concerns</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        It's important to distinguish between tear troughs, dark circles, and eye bags — each has different causes and may require different treatment approaches.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light mt-3">
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                        <p className="text-white/70 font-medium text-xs uppercase tracking-wider mb-2">Tear Troughs</p>
                        <p>A deep groove between the lower eyelid and upper cheek. Can cast shadows giving a tired, aged appearance. Often hereditary.</p>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                        <p className="text-white/70 font-medium text-xs uppercase tracking-wider mb-2">Dark Circles</p>
                        <p>Visible discolouration caused by iron deposits (bluish hue), pigmentation (brownish hue), or genetic predisposition. May involve fillers alongside combination treatments.</p>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                        <p className="text-white/70 font-medium text-xs uppercase tracking-wider mb-2">Eye Bags</p>
                        <p>Small bulges or pouches underneath the eyes. Can be hereditary or caused by lifestyle factors, thyroid issues, or natural ageing.</p>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    What Tear Trough Filler Can <span className="text-[#C9A050] font-light">Improve</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Tear trough filler may help reduce dark circles, restore under-eye volume, minimise hollowing, and create a brighter, more refreshed appearance.
                      </p>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light mt-3">
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>Reduce dark circles and under-eye shadows</span></li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>Restore volume to hollow tear troughs</span></li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>Smooth the transition between lower eyelid and cheek</span></li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>Brighten and refresh the eye area</span></li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>Improve skin quality with polynucleotide options</span></li>
                    </ul>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    How Tear Trough Filler <span className="text-[#C9A050] font-light">Works</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Premium hyaluronic acid is carefully injected beneath the skin using advanced cannula or needle techniques. The procedure takes 10–25 minutes with immediate visible results.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Your treatment begins with a comprehensive facial assessment to evaluate your under-eye concerns, discuss expectations, and create a personalised plan. The treatment area is cleansed and topical anaesthetic applied for comfort.
                      </p>
                      <p>
                        Using advanced cannula or needle techniques, premium hyaluronic acid filler is carefully placed into the tear trough area. After injection, gentle massage ensures smooth, even distribution — preventing any unevenness. According to research published in the <a href="https://pubmed.ncbi.nlm.nih.gov/32022863/" target="_blank" rel="noopener noreferrer" className="text-[#C9A050] hover:underline">Aesthetic Surgery Journal</a>, tear trough filler achieves 80–95% patient satisfaction.
                      </p>
                      <p>
                        For comprehensive results, many patients combine tear trough filler with{" "}
                        <Link to="/treatments/cheek-filler/" className="text-[#C9A050] hover:underline">cheek fillers</Link>{" "}
                        or{" "}
                        <Link to="/treatments/botox/" className="text-[#C9A050] hover:underline">anti-wrinkle injections</Link> for crow's feet.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Who Is <span className="text-[#C9A050] font-light">Suitable</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="w-5 h-5 text-[#C9A050]" />
                        <p className="text-sm font-medium text-white">May Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Genetic dark circles or discolouration</li>
                        <li>• Volume loss under the eyes</li>
                        <li>• Hollow tear trough appearance</li>
                        <li>• Early signs of under-eye ageing</li>
                        <li>• Realistic expectations about outcomes</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-white/40" />
                        <p className="text-sm font-medium text-white">May Not Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Significant fat herniation (surgical bags)</li>
                        <li>• Active skin infection near the eyes</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Allergy to hyaluronic acid or lidocaine</li>
                        <li>• Very thin skin with visible veins</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Real Results */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Real Results: <span className="text-[#C9A050] font-light">Tear Trough Before & After</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    Below is an example of tear trough filler used to restore under-eye volume and reduce dark circles. Precise, conservative placement creates a brighter, more refreshed appearance.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900 mb-3">
                    <img
                      src={tearTroughPreview}
                      alt="Before and after tear trough filler showing 2017 to 2018 transformation with reduced under-eye hollows"
                      loading="lazy"
                      className="w-full h-auto block"
                    />
                  </div>
                  <p className="text-white/30 text-xs font-light italic mb-6">
                    All images show real patients treated by our doctors at our Harley Street clinic. Results vary depending on anatomy, skin quality, and degree of volume loss.
                  </p>
                  <Link
                    to="/before-after/dermal-fillers/tear-trough/"
                    className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#D4AF6A] text-sm font-medium transition-colors"
                  >
                    View real tear trough filler before & after results
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-white/30 text-xs font-light mt-2">
                    Includes dark circle correction, volume restoration, and under-eye brightening cases.
                  </p>
                </motion.div>
              </section>

              {/* Causes */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    What Causes Dark Circles &{" "}
                    <span className="text-[#C9A050] font-light">Eye Bags</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Under-eye concerns have multiple causes — from natural ageing and genetics to lifestyle factors. Understanding the root cause helps us provide the most effective treatment approach.
                      </p>
                    }
                  >
                    <div className="grid md:grid-cols-2 gap-5 mt-3">
                      <div className="space-y-3 text-white/45 text-sm font-light">
                        <p className="text-white/60 font-medium text-xs uppercase tracking-wider">Common Causes</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C9A050]/40 rounded-full mt-1.5 flex-shrink-0" /><span>Natural volume loss and bone resorption with ageing</span></li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C9A050]/40 rounded-full mt-1.5 flex-shrink-0" /><span>Inherited facial structure and skin thickness</span></li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C9A050]/40 rounded-full mt-1.5 flex-shrink-0" /><span>Sleep deprivation, dehydration, and screen time</span></li>
                        </ul>
                      </div>
                      <div className="space-y-3 text-white/45 text-sm font-light">
                        <p className="text-white/60 font-medium text-xs uppercase tracking-wider">Anatomical Changes</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C9A050]/40 rounded-full mt-1.5 flex-shrink-0" /><span>Collagen breakdown making blood vessels more visible</span></li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C9A050]/40 rounded-full mt-1.5 flex-shrink-0" /><span>Fat pad displacement creating hollowing</span></li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C9A050]/40 rounded-full mt-1.5 flex-shrink-0" /><span>Weakening of the orbicularis oculi muscle</span></li>
                        </ul>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Safety */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Safety, Anatomy &{" "}
                    <span className="text-[#C9A050] font-light">Expertise</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        The under-eye area is one of the most delicate and anatomically complex regions for treatment. All tear trough procedures at CosmeDocs are performed exclusively by GMC-registered doctors.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Our doctors understand the layered anatomy of the periorbital region — including fat compartments, the orbicularis muscle, and vascular structures. This knowledge is essential for safe, precise placement that avoids complications.
                      </p>
                      <p>
                        We take an ultra-conservative approach to under-eye treatments, preferring to under-treat and review rather than risk over-correction. All treatments use premium, CE-marked dermal fillers from established manufacturers.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Aftercare */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Aftercare &{" "}
                    <span className="text-[#C9A050] font-light">Recovery</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Recovery is swift with immediate visible results. Mild swelling and occasional bruising may last a few days. Most patients return to normal activities immediately.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Avoid touching or rubbing the treated area. Apply cold compresses gently if needed. Sleep with your head slightly elevated for the first night. Avoid strenuous exercise, excessive heat, and alcohol for 24–48 hours.
                      </p>
                      <p>
                        Full swelling resolution typically takes 1–2 weeks, after which final results become apparent. A complimentary follow-up appointment at 2 weeks allows your doctor to assess the outcome and make any refinements if needed.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Why CosmeDocs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Why Choose{" "}
                    <span className="text-[#C9A050] font-light">CosmeDocs</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="text-white/45 text-sm leading-relaxed font-light space-y-4">
                    <p>
                      With over 1 million procedures performed since 2007, CosmeDocs is one of the UK's most experienced aesthetic medicine clinics. Our doctors are also trainers at the{" "}
                      <a href="https://www.harleystreetinstitute.com" target="_blank" rel="noopener noreferrer" className="text-[#C9A050] hover:underline">
                        Harley Street Institute
                      </a>, teaching the next generation of practitioners.
                    </p>
                    <p>
                      Our invisible art philosophy is especially important for tear trough treatments — where subtlety is everything. We enhance your natural appearance without creating an overdone or artificial look. Every treatment includes comprehensive consultation, premium products, and aftercare support.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* FAQs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Frequently Asked{" "}
                    <span className="text-[#C9A050] font-light">Questions</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="space-y-2">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`} className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-5">
                        <AccordionTrigger className="text-sm text-white/80 font-light hover:no-underline py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-white/40 text-sm font-light leading-relaxed pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>

            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TearTroughFillerSidebar />
              </div>
            </aside>
          </div>
        </div>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <article>
            <h2>Comprehensive Guide to Tear Trough Filler Treatments in London</h2>
            <p>
              Tear trough filler treatments have revolutionised under-eye rejuvenation, offering patients a non-surgical solution for dark circles, hollow tear troughs, and under-eye bags. Our Harley Street clinic specialises in advanced tear trough dermal filler techniques using premium hyaluronic acid. With over 15 years of experience, our expert practitioners achieve natural-looking results that brighten the eye area and restore youthful volume. Whether addressing genetic dark circles, age-related volume loss, or lifestyle-related under-eye concerns, our personalised approach delivers safe, effective results with minimal downtime.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default TearTroughFiller;
