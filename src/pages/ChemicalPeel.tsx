import SkinFoundationCTA from "@/components/SkinFoundationCTA";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, AlertTriangle, ArrowRight, Sparkles, FlaskConical, Beaker } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";
import ChemicalPeelSidebar from "@/components/skin-rejuvenation/ChemicalPeelSidebar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ChemicalPeel = () => {
  const seoData = generateSEOMetadata(
    "Chemical Peels London | Skin Peels From £100 | Cosmedocs Harley Street",
    "Medical-grade skin peels at Harley Street — salicylic, glycolic, lactic acid & TCA peels for acne, pigmentation, melasma. Plus our signature Peel to Reveal cocktail. From £100.",
    "/treatments/chemical-peels/"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/3184a1ab-13a8-4518-9753-e9ad278346e6.png", alt: "Chemical peel before and after skin improvement" },
    { src: "/lovable-uploads/d947c958-7a72-47b1-8681-d32aae21773c.png", alt: "Chemical peel skin rejuvenation results" },
    { src: "/lovable-uploads/5f980404-9482-4c99-aa46-8001ce1495c8.png", alt: "Chemical peel eye area treatment results" },
    { src: "/lovable-uploads/5dfb6e21-7126-47d6-850b-d01c94e0988a.png", alt: "Chemical peel profile view results" },
  ];

  const peelTypes = [
    {
      name: "Salicylic Acid Peel",
      category: "BHA — Oil-Soluble",
      bestFor: "Acne, oily skin, blackheads, congestion",
      depth: "Superficial to medium",
      downtime: "1–3 days",
      price: "From £150",
      link: "/treatments/chemical-peels/salicylic-acid-peel/",
    },
    {
      name: "Glycolic Acid Peel",
      category: "AHA — Water-Soluble",
      bestFor: "Fine lines, dullness, sun damage, texture",
      depth: "Superficial to medium",
      downtime: "1–3 days",
      price: "From £100",
      link: "/treatments/chemical-peels/glycolic-acid-peel/",
    },
    {
      name: "Lactic Acid Peel",
      category: "AHA — Water-Soluble",
      bestFor: "Sensitive skin, hydration, mild pigmentation",
      depth: "Superficial",
      downtime: "Minimal",
      price: "From £100",
      link: "/treatments/chemical-peels/lactic-acid-peel/",
    },
    {
      name: "TCA Peel",
      category: "Trichloroacetic Acid",
      bestFor: "Deep scarring, pigmentation, sun damage",
      depth: "Medium to deep",
      downtime: "5–10 days",
      price: "From £250",
      link: "/treatments/chemical-peels/tca-peel/",
    },
    {
      name: "Peel to Reveal",
      category: "Multi-Acid Cocktail",
      bestFor: "Comprehensive renewal, anti-ageing, radiance",
      depth: "Customised",
      downtime: "3–5 days",
      price: "From £150",
      link: "/peel-to-reveal/",
    },
  ];

  const supportingIngredients = [
    { name: "Mandelic Acid", role: "Gentle exfoliation suitable for darker skin tones; anti-bacterial properties that complement salicylic and glycolic peels." },
    { name: "Azelaic Acid", role: "Targets melasma, rosacea, and post-inflammatory hyperpigmentation. Anti-inflammatory and anti-microbial." },
    { name: "Pyruvic Acid", role: "A keto acid that converts to lactic acid on the skin. Offers deeper penetration with sebum-regulating properties." },
    { name: "Retinol (Vitamin A)", role: "Accelerates cell turnover, boosts collagen synthesis, and enhances peel efficacy when used in pre-treatment protocols." },
    { name: "Antioxidants (Glutathione, Vitamin C, Kojic Acid)", role: "Neutralise free radicals, brighten skin, and protect newly revealed skin layers from oxidative stress." },
  ];

  const treatmentSteps = [
    { step: "01", title: "Skin Assessment", desc: "Thorough consultation to determine the best peel type and strength for your skin concerns, tone, and medical history." },
    { step: "02", title: "Pre-Treatment Preparation", desc: "Gentle cleansing and degreasing of the skin to ensure optimal and even peel penetration." },
    { step: "03", title: "Acid Application", desc: "Careful, layered application of the chosen chemical solution — monitored for optimal timing and response." },
    { step: "04", title: "Neutralisation & Calming", desc: "Safe neutralisation of acids followed by soothing treatments and barrier repair to calm the skin." },
    { step: "05", title: "Aftercare Protocol", desc: "Comprehensive aftercare instructions, SPF guidance, and recommended products to maximise results and healing." },
  ];

  const faqs = [
    { question: "What types of chemical peels does CosmeDocs offer?", answer: "We offer four primary peel types — salicylic acid (BHA), glycolic acid (AHA), lactic acid (AHA), and TCA peels — plus our signature Peel to Reveal multi-acid cocktail. Each is enhanced with supporting agents such as mandelic acid, azelaic acid, pyruvic acid, retinol, and antioxidants tailored to your specific skin concerns." },
    { question: "How much do chemical peels cost at Harley Street?", answer: "All skin peels start from £100 per session. Our Peel to Reveal signature cocktail starts from £150. Course packages offer better value for multiple sessions." },
    { question: "How many peel sessions do I need?", answer: "This depends on your skin concern and peel type. Light peels typically benefit from 4–6 sessions spaced 2–4 weeks apart. Medium peels may need 2–3 sessions. TCA peels may require only 1–2 treatments. Your practitioner will create a personalised plan." },
    { question: "What is Peel to Reveal?", answer: "Peel to Reveal is our signature cocktail peel — a customised fusion of multiple active peeling agents (glycolic, lactic, salicylic, TCA) combined with mandelic acid, azelaic acid, kojic acid, glutathione, and natural extracts. The clinician adjusts the cocktail according to your specific skin concerns." },
    { question: "Is there downtime after a chemical peel?", answer: "Light peels have minimal downtime — slight redness for a few hours. Medium peels may cause peeling for 3–5 days. TCA peels require 5–10 days of recovery. Your practitioner will advise based on your skin type and lifestyle." },
    { question: "Are chemical peels safe for darker skin tones?", answer: "Yes, when performed by experienced practitioners. We carefully select peel types (lactic and mandelic acid peels are particularly well-suited) and concentrations appropriate for your Fitzpatrick skin type to minimise the risk of post-inflammatory hyperpigmentation." },
    { question: "What supporting ingredients do you use with peels?", answer: "Beyond the primary acid, we incorporate mandelic acid, azelaic acid, pyruvic acid, retinol, glutathione, kojic acid, vitamin C, and natural botanical extracts. These supporting agents enhance efficacy, reduce side effects, and accelerate healing." },
    { question: "What skin concerns can chemical peels treat?", answer: "Chemical peels effectively treat acne, acne scarring, hyperpigmentation, melasma, sun damage, fine lines, uneven skin tone, enlarged pores, dull complexion, rosacea, and keratosis." },
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/chemical-peels/" data-rh="true" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/chemical-peels/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org", "@graph": [
            { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } },
            { "@type": "MedicalProcedure", "name": "Chemical Peel Treatments", "alternateName": ["Skin Peel", "Acid Peel", "Medical Peel"], "description": "Medical-grade chemical peels including salicylic, glycolic, lactic acid and TCA peels for skin resurfacing, pigmentation correction, and comprehensive renewal.", "url": "https://www.cosmedocs.com/treatments/chemical-peels/", "procedureType": "NoninvasiveProcedure", "howPerformed": "Controlled application of chemical exfoliating agents to remove damaged outer skin layers and stimulate cellular renewal." },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) },
            { "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Treatments", "item": "https://www.cosmedocs.com/treatments/" },
              { "@type": "ListItem", "position": 2, "name": "Skin Rejuvenation", "item": "https://www.cosmedocs.com/treatments/skin-rejuvenation/" },
              { "@type": "ListItem", "position": 3, "name": "Chemical Peels", "item": "https://www.cosmedocs.com/treatments/chemical-peels/" }
            ]}
          ] })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)' }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ label: 'Treatments', path: '/treatments/' }, { label: 'Skin Rejuvenation', path: '/treatments/skin-rejuvenation/' }]} currentPage="Chemical Peels" />
            <div className="pt-12 pb-4 flex flex-col lg:flex-row items-center gap-10">
              <div className="max-w-2xl">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                     Skin <span className="text-[#C9A050] font-light">Peels</span> London
                   </h1>
                   <p className="text-base md:text-lg text-white/50 leading-relaxed font-light max-w-2xl">
                     A medical facial that removes dead skin cells — the root cause of uneven texture, dull tone, and premature ageing. Fresh, clear skin revealed in one session.
                   </p>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase">
                  <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Skin Specialist-Led</span>
                  <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />20–45 Min</span>
                  <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />From £100</span>
                  <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Harley Street</span>
                </motion.div>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="w-full max-w-xs lg:max-w-sm flex-shrink-0">
                <img src="/images/treatments/skin-peel-dead-skin-diagram.jpg" alt="Clinical diagram showing dead skin cells being removed during a skin peel treatment" className="w-full h-auto rounded-2xl" width={1024} height={640} />
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14">

              {/* Quick Answer */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">What Is a <span className="text-[#C9A050] font-light">Chemical Peel?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/50 text-sm leading-relaxed font-light mb-4">
                    A chemical peel is a controlled medical procedure that uses acid solutions to remove damaged outer skin layers, stimulate collagen production, and accelerate cellular renewal. The result is smoother texture, reduced pigmentation, diminished scarring, and a brighter, more even complexion.
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed font-light">
                    At CosmeDocs Harley Street, we go beyond single-acid peels. Our clinicians combine primary peeling agents — salicylic, glycolic, lactic, and TCA acids — with supporting ingredients such as mandelic acid, azelaic acid, pyruvic acid, retinol, and clinical-grade antioxidants including glutathione, kojic acid, and vitamin C. This multi-active approach ensures each peel is precisely calibrated to your skin type, Fitzpatrick classification, and treatment goals.
                  </p>
                </motion.div>
              </section>

              {/* 4-Year Anti-Ageing Result */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">4 Years of <span className="text-[#C9A050] font-light">Anti-Ageing</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-4" />
                  <p className="text-white/50 text-sm leading-relaxed font-light mb-6">
                    One peel per year. Four years of results. This patient's skin has visibly reversed the signs of ageing — improved tone, refined texture, and a natural glow that speaks for itself.
                  </p>
                  <div className="max-w-lg rounded-2xl overflow-hidden border border-white/[0.08]">
                    <img
                      src="/images/before-after/skin-peel-4-year-anti-ageing.png"
                      alt="Before and after skin peel results over 4 years of annual treatments at CosmeDocs Harley Street"
                      className="w-full h-auto"
                      loading="lazy"
                      width={960}
                      height={960}
                    />
                  </div>
                  <p className="text-xs text-white/20 mt-3 italic">Once-a-year skin peel — 4 years of cumulative anti-ageing results</p>
                </motion.div>
              </section>

              {/* Peel Comparison Table */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Our <span className="text-[#C9A050] font-light">Skin Peels</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/40 text-sm font-light mb-6">Compare our peel types and find the right treatment for your skin concerns.</p>
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-white/[0.08]">
                          <TableHead className="text-[#C9A050] text-xs font-medium uppercase tracking-wider">Peel</TableHead>
                          <TableHead className="text-[#C9A050] text-xs font-medium uppercase tracking-wider hidden md:table-cell">Category</TableHead>
                          <TableHead className="text-[#C9A050] text-xs font-medium uppercase tracking-wider">Best For</TableHead>
                          <TableHead className="text-[#C9A050] text-xs font-medium uppercase tracking-wider hidden sm:table-cell">Depth</TableHead>
                          <TableHead className="text-[#C9A050] text-xs font-medium uppercase tracking-wider hidden lg:table-cell">Downtime</TableHead>
                          <TableHead className="text-[#C9A050] text-xs font-medium uppercase tracking-wider">Price</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {peelTypes.map((peel) => (
                          <TableRow key={peel.name} className="border-white/[0.06] hover:bg-white/[0.04]">
                            <TableCell>
                              <Link to={peel.link} className="text-white hover:text-[#C9A050] transition-colors text-sm font-medium flex items-center gap-1">
                                {peel.name} <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                              </Link>
                            </TableCell>
                            <TableCell className="text-white/40 text-xs hidden md:table-cell">{peel.category}</TableCell>
                            <TableCell className="text-white/50 text-xs">{peel.bestFor}</TableCell>
                            <TableCell className="text-white/40 text-xs hidden sm:table-cell">{peel.depth}</TableCell>
                            <TableCell className="text-white/40 text-xs hidden lg:table-cell">{peel.downtime}</TableCell>
                            <TableCell className="text-[#C9A050] text-xs font-medium">{peel.price}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </motion.div>
              </section>

              {/* Peel Type Cards */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Explore Each <span className="text-[#C9A050] font-light">Peel Type</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: "Salicylic Acid Peel", desc: "The only BHA peel — fat-soluble, penetrating deep into pores to dissolve sebum, clear acne, and reduce oiliness. Enhanced with mandelic and azelaic acid.", link: "/treatments/chemical-peels/salicylic-acid-peel/", icon: <FlaskConical className="w-5 h-5" /> },
                      { title: "Glycolic Acid Peel", desc: "The gold standard AHA with the smallest molecular size for maximum penetration. Targets fine lines, dullness, and sun damage with retinol and antioxidant support.", link: "/treatments/chemical-peels/glycolic-acid-peel/", icon: <Sparkles className="w-5 h-5" /> },
                      { title: "Lactic Acid Peel", desc: "A gentle AHA derived from milk that exfoliates whilst hydrating. Ideal for sensitive skin and mild pigmentation. Paired with azelaic acid for enhanced brightening.", link: "/treatments/chemical-peels/lactic-acid-peel/", icon: <Beaker className="w-5 h-5" /> },
                      { title: "TCA Peel", desc: "Medium-to-deep peel for significant scarring, pigmentation, and sun damage. Combined with retinol pre-treatment and antioxidant recovery for optimal results.", link: "/treatments/chemical-peels/tca-peel/", icon: <FlaskConical className="w-5 h-5" /> },
                    ].map(p => (
                      <Link key={p.title} to={p.link} className="block bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-[#C9A050]/30 transition-all duration-300 group">
                        <div className="text-[#C9A050]/70 mb-3">{p.icon}</div>
                        <p className="text-sm font-medium text-white mb-2 group-hover:text-[#C9A050] transition-colors">{p.title}</p>
                        <p className="text-white/40 text-xs font-light leading-relaxed mb-3">{p.desc}</p>
                        <span className="inline-flex items-center gap-1 text-xs text-[#C9A050] group-hover:gap-2 transition-all">
                          Learn more <ArrowRight className="w-3 h-3" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Peel to Reveal Section */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Peel to Reveal — <span className="text-[#C9A050] font-light">Our Signature Cocktail</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="bg-gradient-to-br from-[#C9A050]/10 to-transparent border border-[#C9A050]/20 rounded-2xl p-6 md:p-8">
                    <p className="text-white/55 text-sm leading-relaxed font-light mb-4">
                      <strong className="text-white/70">Peel to Reveal</strong> is CosmeDocs' proprietary multi-acid cocktail peel — a bespoke fusion of glycolic, lactic, salicylic, and TCA acids combined with mandelic acid, azelaic acid, pyruvic acid, kojic acid, glutathione, and natural botanical extracts including papaya, liquorice, and bearberry.
                    </p>
                    <p className="text-white/45 text-sm leading-relaxed font-light mb-4">
                      Unlike single-acid peels, the Peel to Reveal cocktail is fully customisable by the clinician according to your specific skin concerns. Using our CRES system (Cleanse, Revitalise, Exfoliate, Stimulate), the treatment addresses over a dozen skin issues simultaneously — from acne and pigmentation to fine lines and dullness.
                    </p>
                    <p className="text-white/40 text-sm leading-relaxed font-light mb-6">
                      Results are visible within 10 days. Treatment takes just 10–15 minutes with minimal downtime. Invisible art — transformation that speaks without saying a word.
                    </p>
                    <Link to="/peel-to-reveal/" className="inline-flex items-center gap-2 text-sm text-[#C9A050] hover:underline font-medium">
                      Explore Peel to Reveal <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </section>

              {/* Supporting Ingredients */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Supporting <span className="text-[#C9A050] font-light">Ingredients</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/40 text-sm font-light mb-6">Every CosmeDocs peel is enhanced with clinically proven supporting agents that amplify results and minimise side effects.</p>
                  <div className="space-y-3">
                    {supportingIngredients.map(ing => (
                      <div key={ing.name} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5">
                        <p className="text-sm font-medium text-[#C9A050] mb-1">{ing.name}</p>
                        <p className="text-white/45 text-xs font-light leading-relaxed">{ing.role}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Process */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">The <span className="text-[#C9A050] font-light">Process</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="space-y-3">
                    {treatmentSteps.map(s => (
                      <div key={s.step} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 flex items-start gap-4">
                        <span className="text-[#C9A050] font-light text-lg min-w-[28px]">{s.step}</span>
                        <div>
                          <p className="text-sm font-medium text-white mb-1">{s.title}</p>
                          <p className="text-white/45 text-xs font-light leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Suitability */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Am I <span className="text-[#C9A050] font-light">Suitable?</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><CheckCircle className="w-5 h-5 text-[#C9A050]" /><p className="text-sm font-medium text-white">May Be Suitable</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Hyperpigmentation, melasma, or uneven skin tone</li>
                        <li>• Active acne, congestion, or oily skin</li>
                        <li>• Acne scarring or post-inflammatory marks</li>
                        <li>• Sun-damaged or photo-aged skin</li>
                        <li>• Fine lines, dull complexion, or rough texture</li>
                        <li>• Enlarged pores or blackheads</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-white/40" /><p className="text-sm font-medium text-white">May Not Be Suitable</p></div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Active eczema, psoriasis, or dermatitis</li>
                        <li>• Recent isotretinoin use (within 6 months)</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Active cold sores or bacterial skin infections</li>
                        <li>• Recent sun exposure, sunburn, or laser treatment</li>
                        <li>• History of keloid scarring (for deeper peels)</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Before & After */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Before & <span className="text-[#C9A050] font-light">After</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid grid-cols-2 gap-3">
                    {beforeAfterImages.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900"><img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto block" /></div>
                    ))}
                  </div>
                  <p className="text-xs text-white/30 italic mt-3">Individual results vary. Images show real patients treated at our Harley Street clinic.</p>
                </motion.div>
              </section>

              {/* E-E-A-T Clinical Authority */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Clinical <span className="text-[#C9A050] font-light">Standards</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="text-white/45 text-sm leading-relaxed font-light space-y-4">
                    <p>All chemical peels at CosmeDocs are performed by qualified medical practitioners with extensive training in dermatological procedures. Our Harley Street clinic adheres to CQC-equivalent clinical standards, and every treatment is preceded by a thorough skin assessment including Fitzpatrick skin typing and medical history review.</p>
                    <p>We use only medical-grade, pharmaceutical-quality peeling agents sourced from certified suppliers. Concentrations and pH levels are precisely calibrated — not off-the-shelf formulations. Our practitioners hold postgraduate qualifications in aesthetic medicine and attend regular continuing professional development in chemical exfoliation techniques.</p>
                    <p>Patient safety is paramount. Pre-treatment patch testing is available for sensitive individuals, and detailed written aftercare protocols are provided at every appointment. Our outcomes are documented with standardised clinical photography for objective progress tracking.</p>
                  </div>
                </motion.div>
              </section>

              {/* FAQs */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">Frequently Asked <span className="text-[#C9A050] font-light">Questions</span></h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`item-${i}`} className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-5">
                        <AccordionTrigger className="text-white/70 hover:text-[#C9A050] text-left text-sm font-light py-4">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-white/40 text-sm font-light pb-4">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>

              {/* Internal Links */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h3 className="text-lg font-light text-white/60 mb-4">Related Treatments</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "Skin Rejuvenation", path: "/treatments/skin-rejuvenation/" },
                      { label: "Microneedling", path: "/microneedling/" },
                      { label: "HydraFacial", path: "/hydrafacial/" },
                      { label: "Profhilo", path: "/profhilo/" },
                      { label: "PRP Treatment", path: "/prp-treatment/" },
                      { label: "Polynucleotides", path: "/polynucleotide-treatment/" },
                    ].map(link => (
                      <Link key={link.path} to={link.path} className="text-xs text-white/30 hover:text-[#C9A050] border border-white/[0.08] rounded-full px-3 py-1.5 transition-colors">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </section>
            </div>

            <aside className="hidden lg:block"><div className="sticky top-24"><ChemicalPeelSidebar /></div></aside>
          </div>
        </div>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white">Ready for Clearer <span className="text-[#C9A050]">Skin?</span></h2>
              <p className="text-white/60 mb-8 font-light">Book a skin assessment to find the right peel for your concerns. Our aesthetics is invisible art — bold, natural, always your way.</p>
              <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base">Book Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button>
              </a>
            </motion.div>
          </div>
        </section>

        <section className="lg:hidden py-12 px-4 bg-black"><ChemicalPeelSidebar /></section>

        {/* Visible SEO Content */}
        <section className="py-16 px-4 bg-black border-t border-white/[0.04]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extralight text-white/30 mb-6">Chemical Peels at Harley Street — What You Need to Know</h2>
            <div className="text-white/20 text-xs leading-relaxed font-light space-y-3 columns-1 md:columns-2 gap-8">
              <p>Chemical peels are one of the oldest and most evidence-based skin rejuvenation treatments in dermatology. The principle is straightforward: a controlled acid solution is applied to remove the outer damaged layers of skin, triggering the body's natural healing response and stimulating new collagen and elastin production.</p>
              <p>At CosmeDocs, we classify peels by their primary active ingredient and penetration depth. Alpha hydroxy acids (AHAs) such as glycolic and lactic acid are water-soluble and work on the skin surface to improve texture, tone, and hydration. Beta hydroxy acids (BHAs) like salicylic acid are lipophilic — fat-soluble — allowing them to penetrate into the pore lining and dissolve sebum plugs, making them the treatment of choice for acne-prone and oily skin.</p>
              <p>Trichloroacetic acid (TCA) peels operate at a medium-to-deep level, restructuring the dermal matrix and addressing more significant concerns such as deep acne scarring, photo-ageing, and resistant hyperpigmentation. TCA peels require longer recovery but deliver more dramatic results.</p>
              <p>What distinguishes CosmeDocs is our multi-active approach. No peel is performed in isolation. We augment every primary acid with supporting ingredients — mandelic acid for gentle exfoliation suitable for Fitzpatrick IV–VI skin types, azelaic acid for its anti-inflammatory and anti-melanogenic properties, pyruvic acid for enhanced penetration and sebum regulation, retinol for accelerated cell turnover, and antioxidants including glutathione, kojic acid, and vitamin C for free radical protection and skin brightening.</p>
              <p>Our signature Peel to Reveal treatment represents the culmination of this philosophy — a customisable cocktail fusion of multiple peeling agents, adjusted by the clinician to address your unique combination of skin concerns in a single session. This is invisible art: transformation that speaks without saying a word.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChemicalPeel;
