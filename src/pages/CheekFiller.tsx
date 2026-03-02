import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";
import CheekFillerSidebar from "@/components/cheek-filler/CheekFillerSidebar";
import cheekIllustration from "@/assets/cheek-profile-illustration.png";
import cheekBaPreview from "@/assets/1ml-cheek-fillers-before-after.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CheekFiller = () => {
  const faqs = [
    {
      question: "How long do cheek fillers last?",
      answer: "Cheek filler results typically last 12–18 months depending on the product used, individual metabolism, and lifestyle factors. Premium hyaluronic acid fillers placed in the mid-face tend to have excellent longevity due to the relatively low muscle movement in this area."
    },
    {
      question: "Is cheek filler painful?",
      answer: "Most patients experience only mild discomfort. We apply topical anaesthetic before treatment, and the filler itself contains lidocaine for additional comfort. The sensation is typically described as a brief pressure rather than pain."
    },
    {
      question: "How much filler do I need for my cheeks?",
      answer: "This depends entirely on your anatomy and goals. During consultation, your doctor will assess your facial structure and volume loss to recommend an appropriate amount. Most patients achieve natural results with 1–2ml, though some may benefit from higher volumes for more significant restoration."
    },
    {
      question: "Can cheek filler lift my lower face?",
      answer: "Yes. Strategically placed cheek filler can restore mid-face volume that provides structural support to the lower face. This may help improve the appearance of nasolabial folds and early jowling by restoring the 'scaffolding' that supports the lower facial tissues."
    },
    {
      question: "What is the recovery time?",
      answer: "Most patients return to normal activities the same day. Mild swelling and occasional bruising may last 24–48 hours. We recommend avoiding strenuous exercise and excessive heat for the first 24 hours. Final results settle within 2–3 weeks."
    },
    {
      question: "Do you offer cheek filler for men?",
      answer: "Yes. Male cheek enhancement requires a different approach to maintain masculine facial characteristics. Our doctors understand the anatomical differences and tailor the treatment to preserve angular, structured features whilst addressing volume loss."
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
        name: "Cheek Filler Treatment",
        description: "Non-surgical cheek augmentation and mid-face volume restoration using premium hyaluronic acid dermal fillers. Doctor-led treatment at Harley Street for natural facial contouring.",
        url: "https://www.cosmedocs.com/treatments/cheek-filler/",
        procedureType: "NoninvasiveProcedure",
        bodyLocation: "Cheeks, mid-face, zygomatic region",
        followup: "Review appointment recommended at 2–3 weeks post-treatment.",
        howPerformed: "Hyaluronic acid dermal filler injected into the mid-face using microcannula or needle technique, targeting the zygomatic and submalar regions.",
      },
      {
        "@type": "Offer",
        name: "Cheek Filler Treatment",
        priceCurrency: "GBP",
        price: "350",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "GBP",
          price: "350",
          description: "1ml cheek filler from £350; 2ml from £650; 3ml from £950",
        },
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://www.cosmedocs.com/#clinic" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(faq => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cosmedocs.com/" },
          { "@type": "ListItem", position: 2, name: "Treatments", item: "https://www.cosmedocs.com/treatments/" },
          { "@type": "ListItem", position: 3, name: "Dermal Fillers", item: "https://www.cosmedocs.com/treatments/dermal-fillers/" },
          { "@type": "ListItem", position: 4, name: "Cheek Filler", item: "https://www.cosmedocs.com/treatments/cheek-filler/" },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Cheek Filler Treatment | Mid-Face Volume | Harley Street Doctors</title>
        <meta name="description" content="Doctor-led cheek filler treatment for mid-face volume restoration and facial contouring. Natural, structural results at our Harley Street clinic. Since 2007." />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/cheek-filler/" />
        <meta property="og:title" content="Cheek Filler Treatment | Mid-Face Volume | Harley Street Doctors" />
        <meta property="og:description" content="Doctor-led cheek filler treatment for mid-face volume restoration and facial contouring. Natural, structural results at our Harley Street clinic." />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/cheek-filler/" />
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
              currentPage="Cheek Filler"
            />

            <div className="flex flex-col lg:flex-row items-center justify-between pt-12 pb-4 gap-8">
              {/* Mobile illustration */}
              <motion.div
                className="lg:hidden w-[180px] h-[180px] relative mx-auto"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'radial-gradient(circle at 50% 45%, rgba(201, 160, 80, 0.12) 0%, transparent 60%)' }}
                  animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img
                  src={cheekIllustration}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(201,160,80,0.15)]"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Text */}
              <div className="max-w-2xl text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                    Cheek Filler{" "}
                    <span className="text-[#C9A050] font-light">Treatment</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl mx-auto lg:mx-0">
                    Restoring mid-face volume and enhancing cheek contour with precision-placed dermal filler — natural, structural results tailored to your facial anatomy.
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
                    20–30 Min
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

              {/* Desktop illustration */}
              <motion.div
                className="hidden lg:block flex-shrink-0 w-[280px] h-[320px] relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'radial-gradient(circle at 50% 45%, rgba(201, 160, 80, 0.1) 0%, transparent 60%)' }}
                  animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img
                  src={cheekIllustration}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(201,160,80,0.15)]"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </section>

        {/* ═══════ TWO-COLUMN LAYOUT ═══════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* LEFT — Main Content */}
            <div className="space-y-14">

              {/* Intro */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-white/45 text-sm leading-relaxed font-light space-y-4">
                    <p>
                      Cheek filler treatment addresses one of the most significant signs of facial ageing — the gradual 
                      loss of mid-face volume that occurs as subcutaneous fat pads diminish over time. This volume 
                      depletion can create a flattened appearance, loss of cheekbone definition, and a tired look that 
                      may not reflect how you feel.
                    </p>
                    <p>
                      At CosmeDocs, our doctors use premium hyaluronic acid fillers to restore structural volume to the 
                      cheeks and mid-face. Every treatment is led by GMC-registered doctors at our Harley Street clinic, 
                      with a focus on natural, balanced outcomes that enhance — rather than alter — your facial identity.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* What Cheek Filler Can Improve */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    What Cheek Filler Can <span className="text-[#C9A050] font-light">Improve</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <div className="space-y-3 text-white/45 text-sm leading-relaxed font-light">
                        <p>
                          Cheek filler may help restore mid-face volume, improve facial support structures, and enhance 
                          cheek contour for a more balanced profile. It can also provide a subtle lifting effect to the 
                          lower face.
                        </p>
                      </div>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light mt-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span>Restore mid-face volume lost through natural ageing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span>Improve facial support and structural integrity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span>Enhance cheek contour and cheekbone definition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span>Create a lifting appearance in the lower face</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span>Improve overall facial balance and symmetry</span>
                      </li>
                    </ul>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* How Cheek Filler Works */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    How Cheek Filler <span className="text-[#C9A050] font-light">Works</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Cheek filler uses premium hyaluronic acid — a substance naturally found in the skin — injected 
                        at strategic depths within the mid-face to restore volume and enhance contour.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        During your consultation, your doctor assesses your bone structure, existing volume, and facial 
                        proportions to create a bespoke treatment plan. The filler is placed using either a microcannula 
                        or fine needle, depending on the area and desired outcome.
                      </p>
                      <p>
                        Placement targets the zygomatic arch, malar eminence, and submalar regions — each requiring 
                        different injection depths and volumes. Conservative dosing is prioritised, with the option 
                        to build volume gradually across sessions rather than over-treating in a single appointment.
                      </p>
                      <p>
                        Results are visible immediately and continue to improve as any minor swelling subsides over 
                        the following 2–3 weeks. A full-face assessment ensures that cheek enhancement complements 
                        your overall facial harmony.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Who Is Suitable */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
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
                        <li>• Age-related mid-face volume loss</li>
                        <li>• Flat or hollow cheek appearance</li>
                        <li>• Desire for improved facial contour</li>
                        <li>• Wanting a non-surgical approach to facial rejuvenation</li>
                        <li>• Looking for subtle, natural enhancement</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-white/40" />
                        <p className="text-sm font-medium text-white">May Not Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Unrealistic expectations about outcomes</li>
                        <li>• Active skin infection in the treatment area</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Allergy to hyaluronic acid</li>
                        <li>• Certain autoimmune conditions</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Real Results Preview */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Real Results: <span className="text-[#C9A050] font-light">Cheek Filler Before & After</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    Below is an example of cheek filler used to restore mid-face volume and improve facial 
                    support. Strategic placement enhances contour and lift while maintaining natural 
                    proportions and facial harmony.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900 mb-3">
                    <img
                      src={cheekBaPreview}
                      alt="Before and after cheek filler showing mid-face volume restoration"
                      loading="lazy"
                      className="w-full h-auto block"
                    />
                  </div>
                  <p className="text-white/30 text-xs font-light italic mb-6">
                    All images show real patients treated by our doctors at our Harley Street clinic. Results 
                    vary depending on facial structure and treatment plan.
                  </p>
                  <Link
                    to="/before-after/dermal-fillers/cheeks/"
                    className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#D4AF6A] text-sm font-medium transition-colors"
                  >
                    View real cheek filler before & after results
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-white/30 text-xs font-light mt-2">
                    Includes subtle volume restoration and structural support cases.
                  </p>
                </motion.div>
              </section>

              {/* Safety, Anatomy & Expertise */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Safety, Anatomy &{" "}
                    <span className="text-[#C9A050] font-light">Expertise</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        The mid-face is one of the most anatomically complex areas for dermal filler treatment. 
                        All cheek filler treatments at CosmeDocs are performed exclusively by GMC-registered doctors 
                        with advanced training in facial anatomy.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Our doctors understand the layered anatomy of the cheek — including the relationship between 
                        the zygomatic bone, fat compartments, facial nerve branches, and vascular structures. This 
                        knowledge is essential for safe, precise placement that minimises risk whilst maximising 
                        aesthetic outcome.
                      </p>
                      <p>
                        We take a conservative approach to dosing, preferring to build results gradually rather than 
                        over-treating. Our doctors are also trained to say "no" when a treatment is not appropriate — 
                        whether due to anatomy, unrealistic expectations, or medical contraindications.
                      </p>
                      <p>
                        All treatments are performed in our fully regulated Harley Street clinic using premium, 
                        CE-marked dermal fillers from established manufacturers.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Aftercare & Recovery */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Aftercare &{" "}
                    <span className="text-[#C9A050] font-light">Recovery</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Recovery is minimal. Most patients return to normal activities the same day, with mild 
                        swelling typically subsiding within 24–48 hours.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Immediately after treatment, you may notice mild swelling or tenderness in the treated area. 
                        This is normal and typically resolves within 1–2 days. Occasional bruising can occur but is 
                        usually minor and easily concealed with makeup after 24 hours.
                      </p>
                      <p>
                        We advise avoiding strenuous exercise, excessive heat (saunas, hot baths), and alcohol for 
                        the first 24 hours. Sleeping with your head slightly elevated on the first night can help 
                        minimise swelling. Avoid touching or massaging the treated area unless directed by your doctor.
                      </p>
                      <p>
                        Final results settle within 2–3 weeks. A review appointment is recommended to assess the 
                        outcome and determine whether any refinement is needed.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Why Choose CosmeDocs */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Why Choose{" "}
                    <span className="text-[#C9A050] font-light">CosmeDocs</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { title: "Doctor-Led", desc: "Every treatment performed by GMC-registered doctors, not nurses or beauticians." },
                      { title: "Harley Street", desc: "Established at the heart of London's medical district since 2007." },
                      { title: "Evidence-Based", desc: "Treatment plans guided by facial anatomy assessment and clinical evidence." },
                      { title: "Natural Outcomes", desc: "Our 'invisible art' philosophy ensures results that enhance, never exaggerate." },
                    ].map((item) => (
                      <div key={item.title} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5">
                        <p className="text-sm font-medium text-[#C9A050] mb-1">{item.title}</p>
                        <p className="text-white/40 text-xs leading-relaxed font-light">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* FAQs */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Common <span className="text-[#C9A050] font-light">Questions</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`faq-${index}`}
                        className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-5"
                      >
                        <AccordionTrigger className="text-left text-sm text-white/80 hover:no-underline py-4 font-light">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-white/40 text-sm pb-4 font-light leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>

              {/* CTA */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 text-center"
                >
                  <p className="text-xl font-extralight text-white mb-3">
                    Ready to discuss cheek filler?
                  </p>
                  <p className="text-white/40 text-sm font-light mb-6 max-w-lg mx-auto">
                    Book a consultation with one of our doctors to explore whether cheek filler is right for you.
                  </p>
                  <a
                    href="https://med.as.me/harleystreet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-8 py-3 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A050]/20"
                  >
                    Book Consultation
                  </a>
                </motion.div>
              </section>

            </div>

            {/* RIGHT — Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <CheekFillerSidebar />
              </div>
            </aside>
          </div>
        </div>

        {/* Hidden SEO content */}
        <div aria-hidden="true" role="complementary" aria-label="Additional context for search engines" className="sr-only">
          <p>
            Cheek filler treatment at CosmeDocs Harley Street uses premium hyaluronic acid dermal fillers 
            for mid-face volume restoration and cheek augmentation. Our doctor-led approach ensures safe, 
            natural-looking results tailored to individual facial anatomy. The mid-face is a critical area 
            for facial structure — volume loss here affects not only cheek appearance but also the support 
            structure for the lower face, including nasolabial folds and jowl formation. CosmeDocs has 
            performed over one million aesthetic procedures since 2007, with all treatments administered 
            by GMC-registered doctors at 55 Harley Street, London W1G 8QR. Cheek filler treatments are 
            available from £350 for 1ml, with volumes and products tailored to each patient's needs during 
            consultation. Our invisible art philosophy ensures transformation that speaks without saying a word.
          </p>
        </div>
      </div>
    </>
  );
};

export default CheekFiller;
