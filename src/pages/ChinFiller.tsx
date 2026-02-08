import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";
import ChinFillerSidebar from "@/components/chin-filler/ChinFillerSidebar";
import chinIllustration from "@/assets/jaw-profile-illustration.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ChinFiller = () => {
  const faqs = [
    {
      question: "What is chin injection filler cost in London?",
      answer: "At CosmeDocs Harley Street, chin filler treatments start from £350 for 1.2ml, £650 for 2.4ml, and £850 for 3.6ml. Our pricing varies depending on the amount needed to achieve your desired results."
    },
    {
      question: "How long do chin filler results last?",
      answer: "Chin filler results typically last 12–18 months, sometimes longer, depending on the type and amount of filler used. Dermal fillers in the chin last longer than fillers in the lips due to the viscosity of the material selected."
    },
    {
      question: "Is chin filler safe?",
      answer: "When performed by qualified doctors using premium products, chin filler is a safe procedure. At CosmeDocs, only the finest quality dermal filler products are used and all procedures are carried out by skilled medical practitioners with extensive experience."
    },
    {
      question: "How do chin fillers work?",
      answer: "The process begins with a detailed consultation to examine your unique facial proportions. Treatment involves cleaning and disinfecting the chin area, applying topical numbing cream, then precise injection with a fine needle or cannula. The procedure takes 15–30 minutes to complete."
    },
    {
      question: "What is the chin filler aftercare process?",
      answer: "Apply ice packs for 10–15 minutes every hour for the first 6 hours, avoid touching the treated area, and sleep with your head elevated. You can return to work immediately but avoid strenuous exercise, saunas, and alcohol for 24–48 hours. Final results appear within 2 weeks once swelling subsides."
    },
    {
      question: "Can I have other treatments along with chin fillers?",
      answer: "Yes. Chin filler works beautifully with masseter Botox, jawline filler, lip filler, and non-surgical rhinoplasty. The hyaluronic acid makeover combining cheeks, chin, and jawline is one of our most popular combinations."
    },
    {
      question: "What if I do not like my chin filler results?",
      answer: "Using the hyaluronidase enzyme, your dermal filler can be dissolved as early as within 24 hours, making non-surgical rejuvenation a safer alternative to surgery. We help set realistic expectations beforehand."
    },
    {
      question: "What are the possible side effects?",
      answer: "Typical side effects include swelling, bruising, and a low chance of infection. Swelling in the chin region is not as prominent as in the lips. Using a cannula, we avoid injuring blood vessels, thereby decreasing complications."
    }
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
        name: "Chin Filler Treatment",
        alternateName: "Liquid Mentoplasty",
        description: "Non-surgical chin augmentation using premium hyaluronic acid dermal fillers for profile enhancement, facial balance, and lower face definition.",
        url: "https://www.cosmedocs.co.uk/treatments/chin-filler/",
        procedureType: "NoninvasiveProcedure",
        bodyLocation: "Chin, lower face",
        followup: "Review appointment recommended at 2 weeks post-treatment.",
        howPerformed: "Hyaluronic acid dermal filler injected into strategic points of the chin using fine needle or cannula technique, with topical anaesthetic for comfort.",
      },
      {
        "@type": "Offer",
        name: "Chin Filler Treatment",
        priceCurrency: "GBP",
        price: "350",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "GBP",
          price: "350",
          description: "1.2ml chin filler from £350; 2.4ml from £650; 3.6ml from £850",
        },
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://www.cosmedocs.co.uk/#clinic" },
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
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cosmedocs.co.uk/" },
          { "@type": "ListItem", position: 2, name: "Treatments", item: "https://www.cosmedocs.co.uk/treatments/" },
          { "@type": "ListItem", position: 3, name: "Dermal Fillers", item: "https://www.cosmedocs.co.uk/treatments/dermal-fillers/" },
          { "@type": "ListItem", position: 4, name: "Chin Filler", item: "https://www.cosmedocs.co.uk/treatments/chin-filler/" },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Chin Filler Treatment | Profile Enhancement | Harley Street Doctors</title>
        <meta name="description" content="Doctor-led chin filler treatment from £350. Non-surgical chin augmentation for profile balance and lower face definition at our Harley Street clinic. Since 2007." />
        <link rel="canonical" href="https://www.cosmedocs.co.uk/treatments/chin-filler/" />
        <meta property="og:title" content="Chin Filler Treatment | Profile Enhancement | Harley Street Doctors" />
        <meta property="og:description" content="Doctor-led chin filler treatment from £350. Non-surgical chin augmentation for profile balance and lower face definition at our Harley Street clinic." />
        <meta property="og:url" content="https://www.cosmedocs.co.uk/treatments/chin-filler/" />
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
              currentPage="Chin Filler"
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
                  src={chinIllustration}
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
                    Chin Filler{" "}
                    <span className="text-[#C9A050] font-light">Treatment</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl mx-auto lg:mx-0">
                    Enhancing profile balance and lower face definition with precision-placed dermal filler — natural results that complement your facial harmony.
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
                    15–30 Min
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
                  src={chinIllustration}
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
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <div className="text-white/45 text-sm leading-relaxed font-light space-y-4">
                    <p>
                      Chin filler, also known as liquid mentoplasty, is a non-surgical enhancement procedure that reshapes and projects a weak, short, or retracted chin. Dermal fillers containing hyaluronic acid are directly injected into the chin area to volumise it and project the chin forward, improving overall profile balance.
                    </p>
                    <p>
                      At CosmeDocs, our doctors assess your complete facial structure — considering the relationship between chin, jawline, nose, and cheeks — to create a treatment plan that enhances your natural proportions rather than creating an artificial appearance.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* What Chin Filler Can Improve */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    What Chin Filler Can <span className="text-[#C9A050] font-light">Improve</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Chin filler may help improve profile balance, enhance chin projection, and create better definition between the chin and neck. It can also address receding chins and facial asymmetry.
                      </p>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light mt-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span>Improve chin projection and profile balance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span>Correct a receding or weak chin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span>Reduce the appearance of a double chin through optical refinement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span>Enhance facial harmony between nose, lips, and jawline</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span>Create a more defined lower face and sleeker neck silhouette</span>
                      </li>
                    </ul>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* How It Works */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    How Chin Filler <span className="text-[#C9A050] font-light">Works</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Premium hyaluronic acid is injected at strategic points within the chin to add volume, improve projection, and enhance definition. Treatment takes 15–30 minutes.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        During your consultation, your doctor examines your bone structure and soft tissue density to determine the optimal amount and placement. Most patients achieve natural results with 1–2ml, though some may benefit from higher volumes.
                      </p>
                      <p>
                        The chin and jawline should be considered as one entity. A well-defined chin creates visual harmony between the nose, neck, and cheeks. For round faces, strategic placement creates definition and elongates the face; for square faces, chin enhancement combined with{" "}
                        <Link to="/treatments/masseter-botox/" className="text-[#C9A050] hover:underline">masseter Botox</Link>{" "}
                        can soften angular features into harmonious V-shaped contours.
                      </p>
                      <p>
                        Results are visible immediately and continue to improve as swelling subsides over 1–2 weeks. Using a cannula technique, we minimise bruising and ensure precise product placement.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Suitability */}
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
                        <li>• Weak, receding, or short chin</li>
                        <li>• Desire for improved profile balance</li>
                        <li>• Round face seeking definition</li>
                        <li>• Double chin appearance correction</li>
                        <li>• Wanting a non-surgical approach</li>
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
                        <li>• Allergy to hyaluronic acid or lidocaine</li>
                        <li>• Certain autoimmune conditions</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Real Results Preview */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Real Results: <span className="text-[#C9A050] font-light">Chin Filler Before & After</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    Below is an example of chin filler used to enhance profile balance and improve chin projection. Strategic placement creates a more defined lower face while maintaining natural facial harmony.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900 mb-3">
                    <img
                      src="/lovable-uploads/b6640de3-1759-4566-bbd1-0570a29cbce2.png"
                      alt="Before and after chin filler showing profile enhancement and improved chin projection"
                      loading="lazy"
                      className="w-full h-auto block"
                    />
                  </div>
                  <p className="text-white/30 text-xs font-light italic mb-6">
                    All images show real patients treated by our doctors at our Harley Street clinic. Results vary depending on facial structure and treatment plan.
                  </p>
                  <Link
                    to="/before-after/dermal-fillers/chin/"
                    className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#D4AF6A] text-sm font-medium transition-colors"
                  >
                    View real chin filler before & after results
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-white/30 text-xs font-light mt-2">
                    Includes profile balancing, double chin correction, and jawline harmonisation cases.
                  </p>
                </motion.div>
              </section>

              {/* Surgical vs Non-Surgical */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Genioplasty vs Non-Surgical{" "}
                    <span className="text-[#C9A050] font-light">Enhancement</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Non-surgical chin filler offers significant advantages over surgical genioplasty — including no general anaesthesia, minimal downtime, full reversibility, and a fraction of the cost.
                      </p>
                    }
                  >
                    <div className="grid md:grid-cols-2 gap-5 mt-3">
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5">
                        <p className="text-sm font-medium text-white/70 mb-3">Surgical Genioplasty</p>
                        <ul className="space-y-2 text-white/40 text-xs font-light">
                          <li>• General anaesthesia required</li>
                          <li>• 2–4 weeks recovery</li>
                          <li>• £5,000–£8,000+</li>
                          <li>• Permanent but irreversible</li>
                          <li>• Risk of complications</li>
                        </ul>
                      </div>
                      <div className="bg-white/[0.03] border border-[#C9A050]/20 rounded-2xl p-5">
                        <p className="text-sm font-medium text-[#C9A050] mb-3">Non-Surgical Fillers</p>
                        <ul className="space-y-2 text-white/45 text-xs font-light">
                          <li>• Topical anaesthetic only</li>
                          <li>• 24–48 hours minimal downtime</li>
                          <li>• From £350</li>
                          <li>• 12–18 months duration</li>
                          <li>• Fully reversible</li>
                        </ul>
                      </div>
                    </div>
                  </ExpandableSection>
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
                        The chin requires precise knowledge of underlying vascular anatomy and bone structure. All treatments at CosmeDocs are performed exclusively by GMC-registered doctors with advanced training.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Our doctors understand the layered anatomy of the chin — including the relationship between bone, muscle, fat compartments, and the mental nerve. This knowledge is essential for safe placement that minimises risk whilst maximising aesthetic outcome.
                      </p>
                      <p>
                        We take a conservative, consultation-led approach. Our doctors are trained to say "no" when a treatment is not appropriate — whether due to anatomy, unrealistic expectations, or medical contraindications. All treatments use premium, CE-marked dermal fillers.
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
                        Recovery is minimal. Most patients return to normal activities the same day, with mild swelling typically subsiding within 24–48 hours. Chin swelling is less prominent than with lip treatments.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Apply ice packs for 10–15 minutes every hour for the first 6 hours. Avoid touching the treated area and sleep with your head slightly elevated on the first night.
                      </p>
                      <p>
                        Avoid strenuous exercise, excessive heat (saunas, hot baths), and alcohol for the first 24–48 hours. Final results settle within 2 weeks. A review appointment is recommended to assess the outcome and determine whether any refinement is needed.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Why Choose CosmeDocs */}
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
                      Our invisible art philosophy ensures natural-looking results — chin filler that enhances your existing features without looking overdone. Every treatment includes comprehensive consultation, premium products, and aftercare support.
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

            {/* RIGHT — Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <ChinFillerSidebar />
              </div>
            </aside>
          </div>
        </div>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <article>
            <h2>Comprehensive Guide to Chin Filler Treatments in London</h2>
            <p>
              Chin filler London treatments have revolutionised facial aesthetics, offering patients a non-surgical alternative to traditional chin augmentation surgery. Our Harley Street clinic specialises in advanced liquid mentoplasty procedures using premium hyaluronic acid dermal fillers. With over 15 years of experience, our expert practitioners have performed thousands of successful chin filler treatments, achieving natural-looking results that enhance facial proportions and profile definition.
            </p>
            <p>
              The chin and jawline need to be considered one entity. Using hyaluronic acid-based dermal filler, a well-defined chin can achieve visual harmony between the nose, neck, and cheeks. Female patients benefit from jawline filler and cheek filler to effortlessly achieve softer, heart-shaped, attractive contours. In addition to better aesthetic projection, a stronger and more prominent chin can support voluptuous lips, whether natural or achieved through lip fillers. Book your consultation today to discuss your chin enhancement goals.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default ChinFiller;
