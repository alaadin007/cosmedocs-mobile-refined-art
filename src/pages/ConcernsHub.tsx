import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MapPin, Shield, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import ExpandableSection from "@/components/ui/expandable-section";
import ConcernsHubSidebar from '@/components/concerns/ConcernsHubSidebar';
import ConcernCard from '@/components/concerns/ConcernCard';
import { concernsData } from '@/data/concernsData';
import SkinFoundationCTA from "@/components/SkinFoundationCTA";

const ConcernsHub = () => {
  const seoData = generateSEOMetadata(
    "Skin Concerns | Doctor-Led Assessment & Treatment | Cosmedocs",
    "Explore common skin and facial concerns including ageing, volume loss, pigmentation, acne, and skin laxity. Doctor-led assessment and clinically ordered treatment pathways at Harley Street.",
    "/concerns/"
  );

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://www.cosmedocs.com/#organization",
        "name": "Cosmedocs",
        "url": "https://www.cosmedocs.com/",
        "logo": "https://www.cosmedocs.com/default-og-image.jpg",
        "telephone": "+44 20 3733 3227",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10 Harley Street",
          "addressLocality": "London",
          "postalCode": "W1G 9PF",
          "addressCountry": "GB"
        },
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "10:00", "closes": "16:00" }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "2847",
          "bestRating": "5"
        }
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://www.cosmedocs.com/concerns/",
        "url": "https://www.cosmedocs.com/concerns/",
        "name": seoData.title,
        "description": seoData.description,
        "isPartOf": { "@id": "https://www.cosmedocs.com/#website" },
        "about": {
          "@type": "MedicalCondition",
          "name": "Dermatological and Aesthetic Concerns",
          "associatedAnatomy": { "@type": "AnatomicalStructure", "name": "Face and Skin" }
        },
        "mainEntity": concernsData.map(c => ({
          "@type": "MedicalCondition",
          "name": c.title,
          "description": c.whatsHappening
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cosmedocs.com/" },
          { "@type": "ListItem", "position": 2, "name": "Concerns", "item": "https://www.cosmedocs.com/concerns/" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="keywords" content="skin concerns, facial ageing, volume loss, wrinkles, pigmentation, acne scarring, skin laxity, aesthetic concerns london, dermatology harley street, skin treatment pathways" />
        <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      </Helmet>

      <div className="bg-black overflow-x-hidden">
        {/* ═══════════════════════════════════════════
            HERO — Two-column, matching Dermal Fillers hub
        ═══════════════════════════════════════════ */}
        <section className="relative flex items-center overflow-hidden pb-16 pt-0">
          {/* Flowing gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201,160,80,0.12) 0%, rgba(201,160,80,0.04) 40%, transparent 70%)' }}
              animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -30, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/3 -left-60 w-[500px] h-[500px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(201,160,80,0.06) 50%, transparent 70%)' }}
              animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="mb-6">
              <Breadcrumb items={[]} currentPage="Concerns" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left — Content */}
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm text-white/70 mb-6 border border-white/10">
                    <MapPin className="h-4 w-4 text-[#C9A050]" />
                    8-10 Harley Street, London W1G 9PF
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-[1.1] tracking-tight">
                    Understanding your
                    <span className="block font-semibold text-[#C9A050]">skin concerns</span>
                  </h1>

                  <p className="text-lg md:text-xl text-white/60 mb-4 max-w-xl leading-relaxed font-light">
                    Before considering any treatment, it's essential to understand what's actually happening beneath the surface. Our doctors assess the cause — not just the symptom.
                  </p>
                  <p className="text-base text-white/50 mb-10 max-w-xl leading-relaxed font-light">
                    Each concern below follows a medically ordered pathway: from cosmeceuticals through to advanced procedures. This progression mirrors how our doctors think and how treatment plans develop in consultation.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                    className="group bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20"
                  >
                    Book Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                    className="text-white/80 hover:text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-medium border border-white/20"
                  >
                    <Sparkles className="mr-2 h-4 w-4 text-[#C9A050]" /> Ask AI Doctor
                  </Button>
                </motion.div>

                {/* Trust indicators */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-16 flex flex-wrap gap-8 text-sm text-white/50">
                  <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#C9A050]/70" /> Doctor-Led Assessment</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#C9A050]/70" /> Since 2007</span>
                  <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#C9A050]/70 fill-[#C9A050]/70" /> 4.9 Rating</span>
                </motion.div>
              </div>

              {/* Right — Abstract visual */}
              <motion.div className="hidden lg:block relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                <div className="relative aspect-square">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 500 500" className="w-[460px] h-[460px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Organic flowing layers — representing skin layers */}
                      {[
                        { d: "M100 250 Q150 100, 250 80 Q350 60, 400 200 Q450 340, 250 420 Q50 380, 100 250", opacity: 0.06, delay: 0 },
                        { d: "M130 250 Q170 130, 250 115 Q330 100, 370 220 Q410 340, 250 390 Q90 360, 130 250", opacity: 0.08, delay: 0.5 },
                        { d: "M160 250 Q190 160, 250 150 Q310 140, 340 240 Q370 340, 250 360 Q130 340, 160 250", opacity: 0.1, delay: 1 },
                        { d: "M190 250 Q210 190, 250 185 Q290 180, 310 250 Q330 320, 250 330 Q170 320, 190 250", opacity: 0.12, delay: 1.5 },
                      ].map((shape, i) => (
                        <motion.path
                          key={i}
                          d={shape.d}
                          stroke="#C9A050"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          opacity={shape.opacity}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: shape.opacity }}
                          transition={{ duration: 2.5, delay: shape.delay * 0.3, ease: "easeOut" }}
                        />
                      ))}
                      {/* Diagnostic lines */}
                      {[
                        { d: "M250 250 Q180 160, 120 130", opacity: 0.05, delay: 2 },
                        { d: "M250 250 Q320 160, 380 130", opacity: 0.05, delay: 2.3 },
                        { d: "M250 250 Q160 300, 80 350", opacity: 0.05, delay: 2.6 },
                        { d: "M250 250 Q340 300, 420 350", opacity: 0.05, delay: 2.9 },
                      ].map((line, i) => (
                        <motion.path
                          key={`line-${i}`}
                          d={line.d}
                          stroke="#C9A050"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeDasharray="4 8"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: line.opacity }}
                          transition={{ duration: 1.5, delay: line.delay, ease: "easeOut" }}
                        />
                      ))}
                      {/* Centre assessment point */}
                      <motion.circle cx="250" cy="250" r="6" fill="#C9A050" opacity={0.3}
                        initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.6, delay: 3.2 }}
                      />
                      <motion.circle cx="250" cy="250" r="20" stroke="#C9A050" strokeWidth="0.5" opacity={0.15}
                        initial={{ scale: 0 }} animate={{ scale: [0, 1.3, 1] }}
                        transition={{ duration: 0.8, delay: 3.4 }}
                      />
                    </svg>
                  </div>

                  {/* Floating labels */}
                  {[
                    { label: "Texture", x: "10%", y: "25%", delay: 3.5 },
                    { label: "Volume", x: "75%", y: "20%", delay: 3.7 },
                    { label: "Laxity", x: "5%", y: "70%", delay: 3.9 },
                    { label: "Tone", x: "78%", y: "72%", delay: 4.1 },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-[10px] tracking-[0.2em] uppercase text-[#C9A050]/40"
                      style={{ left: item.x, top: item.y }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: item.delay }}
                    >
                      {item.label}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            MAIN CONTENT — Two-column layout
        ═══════════════════════════════════════════ */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* Left — Main Content */}
            <div>
              {/* Intro Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                  A problem-first <span className="text-[#C9A050]">approach</span>
                </h2>
                <ExpandableSection
                  preview={
                    <p className="text-white/60 leading-relaxed font-light">
                      At Cosmedocs, we believe that effective aesthetic medicine begins with understanding — not selling.
                      Before any treatment is discussed, our doctors assess the underlying cause of your concern. This
                      diagnostic-first philosophy ensures that recommendations are clinically appropriate, medically ordered,
                      and tailored to your individual anatomy and goals.
                    </p>
                  }
                  label="Read more about our approach"
                  collapseLabel="Show less"
                >
                  <div className="space-y-4 text-white/60 leading-relaxed font-light">
                    <p>
                      Each concern below is presented with treatments ordered from least invasive to most advanced —
                      the same progression a doctor follows in clinical practice. Topicals and cosmeceuticals form
                      the foundation, followed by device-based skin renewal, then injectables for targeted correction,
                      and finally structural or surgical procedures where appropriate.
                    </p>
                    <p>
                      This isn't a menu to pick from — it's a framework for understanding how different treatments
                      work together. Many patients benefit from combining approaches across categories for comprehensive,
                      natural-looking improvement that develops gradually over time.
                    </p>
                    <p>
                      Our aesthetics is invisible art. Bold, natural, always your way. Transformation that speaks —
                      without saying a word.
                    </p>
                  </div>
                </ExpandableSection>
              </motion.div>

              {/* Treatment Pathway Explanation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6"
              >
                <p className="text-xs text-[#C9A050] uppercase tracking-wider mb-4">How to read these pathways</p>
                <div className="grid sm:grid-cols-4 gap-4">
                  {[
                    { step: "01", label: "Cosmeceuticals", desc: "Prescription skincare" },
                    { step: "02", label: "Devices & Renewal", desc: "Peels, needling, lasers" },
                    { step: "03", label: "Injectables", desc: "Botox, fillers, boosters" },
                    { step: "04", label: "Advanced / Surgical", desc: "Threads, surgery" },
                  ].map((item) => (
                    <div key={item.step} className="text-center sm:text-left">
                      <p className="text-[#C9A050] text-lg font-light mb-1">{item.step}</p>
                      <p className="text-sm text-white/80 font-medium">{item.label}</p>
                      <p className="text-xs text-white/40 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ═══════════════════════════════════════════
                  CONCERN CARDS
              ═══════════════════════════════════════════ */}
              <div className="space-y-12">
                {concernsData.map((concern, i) => (
                  <ConcernCard key={concern.title} concern={concern} index={i} />
                ))}
              </div>

              {/* Global Disclaimer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 bg-white/[0.03] border border-[#C9A050]/20 rounded-2xl p-6"
              >
                <p className="text-white/50 text-sm leading-relaxed">
                  Treatment plans are individualised and often involve a combination of approaches.
                  Not all treatments are suitable for every patient or concern. A consultation with
                  our doctors will help determine the most appropriate pathway for your specific needs,
                  anatomy, and goals.
                </p>
              </motion.div>

              {/* Assessment CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 text-center lg:text-left"
              >
                <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                  Not sure where to <span className="text-[#C9A050]">start?</span>
                </h2>
                <p className="text-white/60 mb-8 max-w-xl leading-relaxed font-light">
                  A consultation with our doctors will help identify the underlying causes of your
                  concerns and determine whether treatment is appropriate for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/advanced-consultation/"
                    className="inline-flex items-center justify-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#C9A050]/20"
                  >
                    Book Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/treatments/"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
                  >
                    Browse All Treatments
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right — Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <ConcernsHubSidebar />
              </div>
            </aside>
          </div>

          {/* Mobile sidebar content */}
          <div className="lg:hidden mt-16">
            <ConcernsHubSidebar />
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            HIDDEN SEO CONTENT — ~500 words
        ═══════════════════════════════════════════ */}
        <div className="sr-only" aria-hidden="true">
          <h2>Understanding Skin and Facial Concerns at Cosmedocs Harley Street</h2>
          <p>
            Cosmedocs is a doctor-led aesthetic clinic on Harley Street, London, offering comprehensive
            assessment and treatment for a wide range of skin and facial concerns. Our approach prioritises
            diagnosis and understanding over treatment selection, ensuring that every recommendation is
            clinically appropriate and medically ordered.
          </p>
          <p>
            Facial ageing and volume loss are among the most common concerns we address. As the face ages,
            natural fat pads shift and diminish, collagen production slows, and bone remodelling occurs.
            These changes lead to temple hollowing, mid-face volume loss, deepening nasolabial folds,
            and loss of jawline definition. Our treatment pathways begin with prescription skincare and
            progress through skin regeneration treatments like Profhilo and polynucleotides, structural
            fillers for cheeks, temples, jawline, and chin, and advanced rejuvenation options including
            HA Makeover packages and PDO thread lifts.
          </p>
          <p>
            Lines and wrinkles develop from repeated facial expressions — frowning, squinting, and smiling
            create dynamic lines that eventually become static wrinkles visible at rest. Anti-wrinkle
            injections with botulinum toxin remain the gold standard for dynamic lines, supported by
            skin quality treatments like Profhilo and microneedling for overall improvement.
          </p>
          <p>
            Skin texture and tone concerns include enlarged pores, dullness, roughness, and uneven skin
            surface. These conditions respond well to chemical peels, HydraFacial treatments, and collagen
            stimulation through microneedling and PRP therapy. Advanced cases may benefit from CO2 laser
            resurfacing.
          </p>
          <p>
            Pigmentation and discolouration including melasma, post-inflammatory hyperpigmentation, and
            age spots require careful assessment as treatment approaches vary significantly based on type
            and cause. Prescription skincare forms the foundation, with chemical peels and melasma-safe
            microneedling protocols providing controlled improvement.
          </p>
          <p>
            Acne and scarring management requires distinct strategies for active breakouts versus residual
            scarring. Prescription dermatology addresses active acne, while microneedling, PRP, and
            polynucleotides support scar remodelling. Structural correction with fillers or laser is
            considered only after active disease is controlled.
          </p>
          <p>
            Skin laxity and sagging result from collagen and elastin degradation combined with
            gravitational changes. Profhilo and polynucleotides support skin quality, PDO threads
            provide structural tightening, and strategic filler placement in lift vectors complements
            these approaches. Surgical options including facelift and neck lift surgery are discussed
            when non-surgical approaches reach their limit.
          </p>
          <p>
            All treatments at Cosmedocs are delivered by GMC-registered doctors with over 17 years of
            experience and more than one million treatments performed since 2007. Our philosophy of
            invisible art ensures that results are natural, subtle, and aligned with each patient's
            individual aesthetic goals. We believe in education before intervention and assessment
            before treatment selection.
          </p>
        </div>

        
      </div>

      {/* Skin Foundation CTA */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <SkinFoundationCTA variant="general" />
        </div>
      </section>
    </>
  );
};

export default ConcernsHub;
