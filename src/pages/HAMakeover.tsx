import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MapPin, Calendar, Users, CheckCircle, Heart, Gem, MousePointerClick, Images } from 'lucide-react';
import { Link } from 'react-router-dom';
import EndolaserSpotlight from '@/components/EndolaserSpotlight';
import TreatmentPaymentInfo from '@/components/TreatmentPaymentInfo';
import liquidFaceliftBA from '@/assets/before-after/liquid-facelift-nose-cheek-ba.jpg';

export default function HAMakeover() {
  const seoData = generateSEOMetadata(
    "Liquid Facelift | Full-Face Rejuvenation | Cosmedocs",
    "Bespoke Liquid Facelift — full-face dermal filler rejuvenation by GMC-registered doctors on Harley Street. Natural results since 2007.",
    "/treatments/ha-makeover/"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "name": "CosmeDocs",
        "description": "Doctor-led aesthetic medicine clinic on Harley Street, London. Established 2007.",
        "url": "https://www.cosmedocs.com/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "8-10 Harley Street",
          "addressLocality": "London",
          "postalCode": "W1G 9PF",
          "addressCountry": "GB"
        },
        
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "10:00", "closes": "18:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "16:00" }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "name": "Liquid Facelift",
        "description": "Full-face dermal filler rejuvenation using hyaluronic acid for structural support, volume restoration, and natural facial balance.",
        "url": "https://www.cosmedocs.com/treatments/ha-makeover/",
        "procedureType": "Non-surgical",
        "followup": "Review appointment at 2-4 weeks"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cosmedocs.com/" },
          { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://www.cosmedocs.com/treatments/" },
          { "@type": "ListItem", "position": 3, "name": "Liquid Facelift", "item": "https://www.cosmedocs.com/treatments/ha-makeover/" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/ha-makeover/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/ha-makeover/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          name: "Liquid Facelift before and after — non-surgical nose refinement and cheek volume restoration",
          description: "Clinical before-and-after photograph of a female patient showing non-surgical nose refinement and mid-face cheek volume restoration with hyaluronic acid dermal fillers as part of a Liquid Facelift at Cosmedocs Harley Street, London. Published with patient consent; individual results vary.",
          contentUrl: "https://www.cosmedocs.com/assets/before-after/liquid-facelift-nose-cheek-ba.jpg",
          representativeOfPage: false,
          creditText: "Cosmedocs · Harley Street",
          copyrightNotice: "© Cosmedocs",
          acquireLicensePage: "https://www.cosmedocs.com/contact/",
          creator: { "@type": "Organization", name: "Cosmedocs" },
          copyrightHolder: { "@type": "Organization", name: "Cosmedocs" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is the HA Makeover at Cosmedocs?", "acceptedAnswer": { "@type": "Answer", "text": "The HA Makeover is our signature multi-point hyaluronic acid filler treatment that rebalances the face in a single session — typically combining cheek, jawline, chin, tear-trough and lip areas for a lifted, refreshed result." } },
            { "@type": "Question", "name": "How long does the HA Makeover last?", "acceptedAnswer": { "@type": "Answer", "text": "Results typically last 12-18 months depending on the filler used, areas treated and individual metabolism. Annual top-ups maintain the result." } },
            { "@type": "Question", "name": "How much does a Full Face HA Makeover cost in London?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing depends on the number of syringes used. The 8-point lift starts from £1,200 and the full 11-point Makeover from £1,800 at our Harley Street clinic." } },
            { "@type": "Question", "name": "Is the HA Makeover painful?", "acceptedAnswer": { "@type": "Answer", "text": "Discomfort is minimal. We use topical anaesthetic and fillers containing lidocaine. Most patients describe it as a brief pinch or pressure." } },
            { "@type": "Question", "name": "Who performs the HA Makeover?", "acceptedAnswer": { "@type": "Answer", "text": "All HA Makeovers at Cosmedocs are performed by GMC-registered doctors led by Dr Ahmed Haq, with over 17 years of facial-balancing experience." } }
          ]
        })}</script>
      </Helmet>

      

      <div className="bg-black text-white">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-black to-black" />
          <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-[#C9A050]/5 rounded-full blur-[120px]" />
          
          <div className="page-container relative z-10">
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-10">
              <Link to="/" className="hover:text-[#C9A050] transition-colors">Home</Link>
              <span>/</span>
              <Link to="/treatments/" className="hover:text-[#C9A050] transition-colors">Treatments</Link>
              <span>/</span>
              <span className="text-gray-300">Liquid Facelift</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <p className="text-[#C9A050] text-sm tracking-[0.2em] uppercase mb-4 font-light">Full-Face Rejuvenation</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-8 leading-tight text-white">
                Liquid Facelift
                <span className="block text-2xl md:text-3xl text-gray-400 mt-3 font-extralight">
                  Full-Face Dermal Filler Rejuvenation
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl font-light">
                A bespoke, anatomy-led approach to full-face rejuvenation using hyaluronic acid dermal fillers. 
                Designed to restore balance, structure, and natural proportion — never to change identity. 
                Every Liquid Facelift is planned and performed by our GMC-registered doctors, Dr Ahmed Haq and Dr Hena, 
                at our Harley Street clinic. Our philosophy is restoring what time has taken — subtly, invisibly, 
                and always with restraint.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust Row */}
        <section className="py-5 border-y border-white/10 bg-black/50">
          <div className="page-container">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {[
                { icon: Shield, text: "GMC-Registered Doctors" },
                { icon: MapPin, text: "Harley Street, London" },
                { icon: Calendar, text: "Established 2007" },
                { icon: Users, text: "1M+ Injections" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-[#C9A050]" />
                  <span className="text-xs text-gray-400 tracking-wide uppercase">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Endolaser Spotlight */}
        <section className="px-6 max-w-4xl mx-auto">
          <EndolaserSpotlight variant="inline" />
        </section>

        {/* What Is a Liquid Facelift? */}
        <section className="py-20">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-8">
                  What Is a Liquid Facelift?
                </h2>
                <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                  <p>
                    A Liquid Facelift is a personalised, full-face treatment plan that addresses ageing 
                    holistically rather than in isolation. Rather than treating one area at a time, 
                    we assess the entire facial structure — temples, cheeks, jawline, chin, tear troughs, 
                    and surrounding support points — to create a cohesive, balanced result.
                  </p>
                  <p>
                    The approach is built around each patient's unique facial anatomy and ageing patterns. 
                    Some faces need volume; others need structural support. Many need both, but in different 
                    proportions and at different anatomical depths. The outcome should be undetectable — 
                    friends notice you look well, not that you've had something done.
                  </p>
                  <p>
                    Using multiple support points across the face, we create gentle lift and restored 
                    proportion without overfilling any single area. The focus is always on structure, 
                    not volume for volume's sake.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 8-Point Facelift Technique (Subsection) */}
        <section className="py-20 bg-neutral-950">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Gem className="w-5 h-5 text-[#C9A050]" />
                  <p className="text-[#C9A050] text-sm tracking-[0.15em] uppercase font-light">Recognised Technique</p>
                </div>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-8">
                  The 8-Point Facelift Technique
                </h2>
                <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                  <p>
                    The 8-Point Facelift is a recognised structural technique within aesthetic medicine. 
                    It targets eight key anatomical support points of the face — areas where precisely 
                    placed dermal filler can create lift, definition, and structural improvement 
                    without surgery.
                  </p>
                  <p>
                    At CosmeDocs, this technique often forms the foundation of a Liquid Facelift treatment. 
                    However, we never apply it rigidly. Every face is different: bone structure, fat pad 
                    distribution, skin quality, and ageing patterns all vary. Our doctors adapt the 
                    principles of the 8-Point technique to each individual patient, adding or modifying 
                    support points as anatomy demands.
                  </p>
                  <p className="text-gray-400 italic border-l-2 border-[#C9A050]/40 pl-6">
                    The 8-Point Facelift is a recognised technique that informs many Liquid Facelift treatments, 
                    but is always adapted rather than followed rigidly.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How a Liquid Facelift Lifts the Face */}
        <section className="py-20">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-8">
                  How a Liquid Facelift Lifts the Face
                </h2>
                <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                  <p>
                    As we age, the face loses structural support at multiple levels: bone resorbs, 
                    fat pads descend, and the skin loses elasticity. These changes work together to 
                    create the visible signs of ageing — hollowing, sagging, and loss of definition.
                  </p>
                  <p>
                    A Liquid Facelift addresses these changes by restoring support where it has been lost. 
                    Strategic placement of hyaluronic acid at deeper structural levels provides a scaffold 
                    that creates indirect lift. Mid-face support can improve the appearance of the lower 
                    face without directly treating it. Cheekbone augmentation can soften tear troughs. 
                    Temple volume can open the eye area.
                  </p>
                  <p>
                    The result is a face that looks rested and balanced — not filled or heavy. Our doctors 
                    are trained to recognise the difference between adding volume and restoring structure. 
                    Overfilling creates distortion; strategic support creates harmony.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-10">
                  {[
                    { icon: CheckCircle, title: "Structural Support", desc: "Deep placement at key anatomical points for foundational lift" },
                    { icon: CheckCircle, title: "Indirect Lift", desc: "Mid-face support improving lower-face appearance naturally" },
                    { icon: CheckCircle, title: "Balanced Proportions", desc: "Restoring harmony between upper, mid, and lower face" },
                    { icon: CheckCircle, title: "No Heaviness", desc: "Precise volumes to avoid overfilled or distorted results" },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="p-5 border border-white/10 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-[#C9A050]" />
                        <span className="text-white text-sm font-medium">{title}</span>
                      </div>
                      <p className="text-gray-400 text-sm font-light">{desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who Is Suitable */}
        <section className="py-20 bg-neutral-950">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-8">
                  Who Is Suitable
                </h2>
                <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                  <p>
                    A Liquid Facelift may be suitable for patients experiencing volume loss, facial 
                    imbalance, or early to moderate signs of ageing who wish to restore a refreshed 
                    appearance without surgery. It is particularly effective for those who notice 
                    changes in multiple areas of the face rather than a single concern.
                  </p>
                  <p>
                    Suitability is always determined during a face-to-face consultation with one of 
                    our doctors. Not every patient is a candidate — and we are comfortable saying no 
                    when a treatment is not appropriate. Our role is to advise honestly, not to sell.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    "Volume loss across the mid-face or temples",
                    "Facial asymmetry or imbalance",
                    "Early to moderate signs of ageing",
                    "Patients seeking a non-surgical alternative to facelift surgery",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A050] mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Results Link */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-6">
                  Liquid Facelift Before &amp; After Results
                </h2>
                <p className="text-gray-300 font-light leading-relaxed mb-6">
                  All images show real patients treated by our doctors at our Harley Street clinic. 
                  Individual results vary depending on facial anatomy, ageing patterns, and treatment plan.
                </p>
                <Link
                  to="/before-after/dermal-fillers/full-face-makeover/"
                  aria-label="Open full Liquid Facelift before and after gallery"
                  className="group relative block rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900 mb-6 ring-1 ring-transparent hover:ring-[#C9A050]/40 focus-visible:ring-[#C9A050]/60 focus:outline-none transition-all"
                >
                  <figure className="m-0">
                    <img
                      src={liquidFaceliftBA}
                      alt="Liquid Facelift before and after — non-surgical nose refinement and cheek volume restoration on a female patient at Cosmedocs Harley Street London"
                      loading="lazy"
                      width={1600}
                      height={900}
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.015]"
                    />
                  </figure>

                  {/* Click-prompt pulse badge (top-right) */}
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-[#C9A050] text-black text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full font-medium shadow-lg shadow-[#C9A050]/30 animate-pulse">
                    <Images className="w-3 h-3" /> View full gallery
                  </span>

                  {/* Small thumbnail strip hint (top-left) */}
                  <span className="absolute top-3 left-3 hidden sm:flex items-center gap-1 bg-black/70 backdrop-blur border border-[#C9A050]/30 rounded-full px-2 py-1.5">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="block w-5 h-5 rounded-sm bg-gradient-to-br from-[#C9A050]/40 to-[#C9A050]/10 border border-[#C9A050]/30"
                        aria-hidden="true"
                      />
                    ))}
                    <span className="text-[10px] tracking-widest uppercase text-[#C9A050] ml-1">+ more</span>
                  </span>

                  {/* Click guide overlay (bottom) */}
                  <span className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-4 py-3 text-xs text-white/85 tracking-wide">
                    <MousePointerClick className="w-4 h-4 text-[#C9A050] animate-pulse" />
                    <span>Tap the image to open the full Liquid Facelift before &amp; after gallery</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C9A050] transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                <p className="text-xs text-white/30 italic mb-4">
                  Real Cosmedocs patient treated at Harley Street — non-surgical nose refinement and mid-face volume restoration with dermal fillers. Published with patient consent. Individual results vary depending on facial anatomy, ageing patterns and treatment plan.
                </p>
                <Link
                  to="/before-after/dermal-fillers/full-face-makeover/"
                  className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#d4af5a] transition-colors text-sm tracking-wide"
                >
                  View full Liquid Facelift before &amp; after gallery
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Doctor-Led Planning Matters */}
        <section className="py-20 bg-neutral-950">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-8">
                  Why Doctor-Led Planning Matters
                </h2>
                <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                  <p>
                    Full-face rejuvenation requires an understanding of facial anatomy that goes far 
                    beyond injection technique. It demands the ability to see the face as a connected 
                    structure — to understand how one area affects another, how ageing progresses at 
                    different rates, and how to plan a treatment that will age gracefully alongside 
                    the patient.
                  </p>
                  <p>
                    Dr Ahmed Haq and Dr Hena have been performing these treatments since 2007. Their 
                    experience spans over a million injections and thousands of full-face rejuvenation 
                    cases. This depth of experience informs every consultation — from the initial 
                    assessment to the final review.
                  </p>
                  <p>
                    Our approach is conservative by design. We plan treatments around anatomy, not 
                    trends. We avoid overfilled or exaggerated results — the hallmarks of poorly 
                    planned filler work. When patients ask for more than their anatomy can support, 
                    we explain why and offer alternatives. Saying "no" when appropriate is part of 
                    responsible practice.
                  </p>
                  <p className="text-gray-400 italic">
                    Our aesthetics is invisible art — bold, natural, always your way.
                  </p>
                </div>

                <div className="mt-10 grid sm:grid-cols-2 gap-6">
                  {[
                    { label: "Dr Ahmed Haq", desc: "Medical Director. Practising since 2007. GMC-registered." },
                    { label: "Dr Hena", desc: "Aesthetic Doctor. Specialist in facial balance and rejuvenation." },
                  ].map(({ label, desc }) => (
                    <div key={label} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                      <p className="text-white font-medium mb-1">{label}</p>
                      <p className="text-gray-400 text-sm font-light">{desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fine Cannula Technique */}
        <section className="py-20 border-t border-white/10">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-xs uppercase tracking-[0.2em] text-[#C9A050] mb-4">The Cosmedocs Technique</div>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mb-8">
                  Fine Cannulas. <span className="text-[#C9A050]">Back to Work the Same Day.</span>
                </h2>
                <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                  <p>
                    The Liquid Facelift is delivered through fine, blunt-tipped cannulas wherever anatomy allows — not sharp needles. This single change in technique is why our patients lift, contour and refresh the entire face yet leave the clinic without the bruises and tell-tale marks usually associated with full-face filler work.
                  </p>
                  <p>
                    The majority of patients walk straight back into their day — work, lunch, school pick-up — with nothing visible. We do ask for a little leeway: a touch of concealer to cover the occasional pinpoint entry mark or mild swelling is wise insurance, but extended downtime is not part of the plan.
                  </p>
                  <p className="text-gray-400 italic">
                    Invisible art — quiet, not loud. Transformation that speaks without saying a word.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="page-container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-[#C9A050] text-sm tracking-[0.2em] uppercase mb-4 font-light">Your Consultation Begins Here</p>
                <p className="text-3xl md:text-4xl font-extralight text-white mb-6">
                  Considering a Full-Face Rejuvenation?
                </p>
                <p className="text-gray-400 font-light mb-10 max-w-xl mx-auto">
                  Considered care from Harley Street doctors. A consultation is required 
                  to assess suitability and create your personalised treatment plan.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/contact/">
                    <Button className="bg-[#C9A050] hover:bg-[#b8913f] text-black px-8 py-6 rounded-full text-sm tracking-wide">
                      Book Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/contact/">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full text-sm tracking-wide">
                      Speak to a Doctor
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <TreatmentPaymentInfo variant="dark" />

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Liquid Facelift Full-Face Dermal Filler Rejuvenation</h2>
          <p>
            The Liquid Facelift at CosmeDocs is a bespoke, full-face dermal filler rejuvenation treatment 
            performed by GMC-registered doctors on Harley Street, London. Using hyaluronic acid fillers, 
            the treatment addresses volume loss, structural decline, and facial imbalance through 
            anatomy-led planning and precise multi-point injection techniques. The 8-Point Facelift is 
            a recognised technique that informs many Liquid Facelift treatments but is always adapted to 
            each patient's unique facial anatomy. CosmeDocs has been established since 2007 with over 
            one million injections performed. Our aesthetics is invisible art — bold, natural, always your way.
          </p>
          <h3>Full-Face Filler Rejuvenation London</h3>
          <p>
            A Liquid Facelift may address temples, <Link to="/treatments/cheek-filler/" className="text-[#C9A050] underline-offset-4 hover:underline">cheeks</Link> (including structural <Link to="/treatments/cheekbone-filler/" className="text-[#C9A050] underline-offset-4 hover:underline">cheekbone filler</Link>), jawline, chin, tear troughs, and surrounding 
            structural points as part of a holistic treatment plan. Results are designed to look natural 
            and undetectable. Dr Ahmed Haq and Dr Hena provide conservative, considered care with a 
            philosophy of restoring what time has taken rather than changing identity.
          </p>
        </div>
      </div>

      
    </>
  );
}
