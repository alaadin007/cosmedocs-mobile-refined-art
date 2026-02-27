import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";
import TempleFillerSidebar from "@/components/temple-filler/TempleFillerSidebar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TempleFiller = () => {
  const faqs = [
    {
      question: "How long do temple filler results last?",
      answer: "Temple filler results typically last 12–18 months, depending on individual factors such as metabolism, lifestyle, and the type of filler used. Regular maintenance treatments help preserve optimal results."
    },
    {
      question: "Is temple filler treatment painful?",
      answer: "Most patients experience minimal discomfort. We apply topical anaesthetic before the procedure, and modern fillers contain lidocaine for additional comfort during injection."
    },
    {
      question: "What is the recovery time for temple fillers?",
      answer: "Recovery is minimal. You may experience mild swelling or bruising for 24–48 hours. Most patients return to normal activities immediately after treatment."
    },
    {
      question: "Can filler in temples help lift eyes?",
      answer: "Yes, strategic placement of filler in the temples can create a subtle lifting effect that opens up the eye area and reduces the appearance of drooping or heaviness in the upper face."
    },
    {
      question: "Are there any side effects?",
      answer: "Side effects are rare and typically mild, including temporary swelling, bruising, or redness at injection sites. Serious complications are extremely rare when performed by qualified practitioners using premium products."
    },
    {
      question: "How much does temple filler cost in London?",
      answer: "Single temple treatment starts from £400, whilst both temples cost £650. We provide detailed pricing during your consultation based on your specific requirements."
    },
    {
      question: "What causes temple volume loss?",
      answer: "Temple volume loss is a natural part of ageing that typically begins in the late twenties. As we age, the fat pads in our temples diminish, creating a hollowed appearance that can make the face appear gaunt or tired."
    },
    {
      question: "Is temple filler part of a liquid facelift?",
      answer: "Yes, temple fillers are often a key component of a non-surgical liquid facelift. When combined with other dermal fillers and anti-wrinkle treatments, temple fillers contribute to comprehensive facial rejuvenation."
    },
    {
      question: "Can I combine temple fillers with Botox?",
      answer: "Absolutely. Combining temple fillers with Botox provides optimal results. Whilst Botox addresses dynamic wrinkles and can lift the brows, temple fillers restore volume and enhance facial contours."
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
        name: "Temple Filler Treatment",
        description: "Non-surgical temple volume restoration using premium hyaluronic acid dermal fillers. Addresses hollow temples and provides subtle eye-lifting effect.",
        url: "https://www.cosmedocs.com/treatments/temple-filler/",
        procedureType: "NoninvasiveProcedure",
        bodyLocation: "Temples, temporal region",
        followup: "Review appointment recommended at 2 weeks post-treatment.",
        howPerformed: "Hyaluronic acid dermal filler injected into the temporal region using precision needle or cannula technique.",
      },
      {
        "@type": "Offer",
        name: "Temple Filler Treatment",
        priceCurrency: "GBP",
        price: "400",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "GBP",
          price: "400",
          description: "Single temple from £400; both temples £650",
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
          { "@type": "ListItem", position: 4, name: "Temple Filler", item: "https://www.cosmedocs.com/treatments/temple-filler/" },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Temple Filler Treatment | Volume Restoration | Harley Street Doctors</title>
        <meta name="description" content="Doctor-led temple filler treatment from £400. Restore hollow temples, enhance facial symmetry, and achieve a subtle eye-lifting effect at our Harley Street clinic. Since 2007." />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/temple-filler/" />
        <meta property="og:title" content="Temple Filler Treatment | Volume Restoration | Harley Street Doctors" />
        <meta property="og:description" content="Doctor-led temple filler treatment from £400. Restore hollow temples and enhance facial symmetry at our Harley Street clinic." />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/temple-filler/" />
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
              currentPage="Temple Filler"
            />

            <div className="flex items-center justify-between pt-12 pb-4">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                    Temple Filler{" "}
                    <span className="text-[#C9A050] font-light">Treatment</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">
                    Restoring temporal volume to reverse hollowing and enhance facial harmony — with a subtle eye-lifting effect that refreshes the entire upper face.
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
                    30–45 Min
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
                      Temple volume loss is a natural part of ageing that begins as early as the mid-twenties. The temples contain minimal subcutaneous fat, making volume depletion particularly noticeable. This creates a hollowed appearance that can make the face appear gaunt, tired, or prematurely aged.
                    </p>
                    <p>
                      At CosmeDocs, our doctors use premium hyaluronic acid fillers to restore lost temporal volume. Strategically placed filler can also create a subtle lifting effect around the eyes and brows, contributing to a comprehensive non-surgical rejuvenation.
                    </p>
                  </div>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    What Temple Filler Can <span className="text-[#C9A050] font-light">Improve</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Temple filler may help restore lost volume, improve facial symmetry, and create a subtle lifting effect around the eyes and brows for a more youthful, refreshed appearance.
                      </p>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light mt-3">
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>Restore hollowed or sunken temples</span></li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>Enhance overall facial symmetry and balance</span></li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>Subtle eye-lifting and brow-lifting effect</span></li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>Create a more youthful, heart-shaped face</span></li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" /><span>Non-surgical approach to upper face rejuvenation</span></li>
                    </ul>
                  </ExpandableSection>
                </motion.div>
              </section>

              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    How Temple Filler <span className="text-[#C9A050] font-light">Works</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Premium hyaluronic acid is carefully injected into the temporal region to replace lost volume. The procedure takes 30–45 minutes and provides immediate results.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        During consultation, your doctor assesses the degree of volume loss, bone structure, and the relationship between your temples and surrounding facial features. Strategic injection points are marked for precision placement.
                      </p>
                      <p>
                        The filler acts as a non-surgical liquid facelift for the temples, providing immediate volume restoration. When combined with{" "}
                        <Link to="/treatments/botox/" className="text-[#C9A050] hover:underline">anti-wrinkle treatments</Link>{" "}
                        or{" "}
                        <Link to="/treatments/cheek-filler/" className="text-[#C9A050] hover:underline">cheek fillers</Link>, temple filler contributes to comprehensive facial rejuvenation.
                      </p>
                      <p>
                        Results are visible immediately and continue to improve as any minor swelling subsides. The longevity of temple fillers — typically 12–18 months — is influenced by metabolism, lifestyle, and the specific product used.
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
                        <li>• Hollow or sunken temples</li>
                        <li>• Age-related temporal volume loss</li>
                        <li>• Facial asymmetry</li>
                        <li>• Desire for non-surgical upper face rejuvenation</li>
                        <li>• Seeking a subtle eye-lifting effect</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-white/40" />
                        <p className="text-sm font-medium text-white">May Not Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Unrealistic expectations</li>
                        <li>• Active skin infection in the treatment area</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Allergy to hyaluronic acid</li>
                        <li>• Blood clotting disorders</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Real Results */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Real Results: <span className="text-[#C9A050] font-light">Temple Filler Before & After</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    Below is an example of temple filler used to restore volume loss and improve facial contour. Strategic placement replenishes hollowed temples for a more youthful, balanced appearance.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900 mb-3">
                    <img
                      src="/lovable-uploads/2549c031-c4e5-4be1-a708-694953067baf.png"
                      alt="Before and after temple filler showing restored volume and improved facial contour"
                      loading="lazy"
                      className="w-full h-auto block"
                    />
                  </div>
                  <p className="text-white/30 text-xs font-light italic mb-6">
                    All images show real patients treated by our doctors at our Harley Street clinic. Results vary depending on facial structure and degree of volume loss.
                  </p>
                  <Link
                    to="/before-after/dermal-fillers/temple/"
                    className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#D4AF6A] text-sm font-medium transition-colors"
                  >
                    View real temple filler before & after results
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-white/30 text-xs font-light mt-2">
                    Includes mild to severe temple hollowing restoration cases.
                  </p>
                </motion.div>
              </section>

              {/* Safety & Expertise */}
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
                        The temporal region contains critical vascular structures. All treatments at CosmeDocs are performed exclusively by GMC-registered doctors with advanced anatomical training.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Our practitioners follow guidelines from the <a href="https://www.saveface.co.uk" target="_blank" rel="noopener noreferrer" className="text-[#C9A050] hover:underline">Save Face Register</a> for safe aesthetic practice. We use only FDA and CE-approved dermal filler products from established manufacturers.
                      </p>
                      <p>
                        We adhere to the highest medical standards set by UK regulatory bodies, with comprehensive medical insurance and emergency protocols in place. Our doctors receive ongoing training in advanced injection techniques and facial anatomy.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Combination Treatments */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Complementary{" "}
                    <span className="text-[#C9A050] font-light">Treatments</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Temple fillers can be combined with other treatments for comprehensive facial rejuvenation — creating a holistic liquid facelift effect.
                      </p>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light mt-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span>
                          <Link to="/treatments/botox/" className="text-[#C9A050] hover:underline">Anti-wrinkle injections</Link> for upper face wrinkle reduction and brow lifting
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span>
                          <Link to="/treatments/cheek-filler/" className="text-[#C9A050] hover:underline">Cheek fillers</Link> for mid-face volume alongside temple enhancement
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span>
                          <Link to="/treatments/tear-trough-filler/" className="text-[#C9A050] hover:underline">Tear trough fillers</Link> for complete eye area rejuvenation
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span>
                          <Link to="/treatments/lip-fillers/" className="text-[#C9A050] hover:underline">Lip fillers</Link> for comprehensive facial enhancement
                        </span>
                      </li>
                    </ul>
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
                        Recovery is minimal. Most patients return to normal activities immediately, with mild swelling typically subsiding within 24–48 hours.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Avoid strenuous exercise, excessive heat, and alcohol for the first 24 hours. Do not massage or touch the treated area unless directed by your doctor. Sleeping with your head slightly elevated can help minimise swelling.
                      </p>
                      <p>
                        Final results settle within 2–3 weeks. A review appointment is recommended to assess the outcome and ensure you are satisfied with the result.
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
                      Our invisible art philosophy ensures natural-looking results — temple filler that restores volume without looking overdone. Every treatment includes comprehensive consultation, premium products, and aftercare support.
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
                <TempleFillerSidebar />
              </div>
            </aside>
          </div>
        </div>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <article>
            <h2>Temple Filler London — Expert Aesthetic Treatment</h2>
            <p>
              Temple dermal fillers have become increasingly popular, offering a non-surgical solution for age-related volume loss in the temporal region. Our Harley Street clinic specialises in advanced temple filler treatments using premium hyaluronic acid. Temple volume loss begins as early as the mid-twenties, and strategic filler placement can restore youthful proportions whilst providing a subtle eye-lifting effect. Combining temple fillers with Botox and other dermal fillers creates a comprehensive liquid facelift approach for natural-looking rejuvenation.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default TempleFiller;
