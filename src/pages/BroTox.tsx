import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  CheckCircle, ArrowRight, Shield, Clock, Star, Award, MapPin, Activity, Syringe, Stethoscope, Users, RotateCw
} from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import Breadcrumb from "@/components/Breadcrumb";
import brotoxImg from "@/assets/brotox-mens-botox.jpg";
import brotoxBA from "@/assets/brotox-ba-forehead-frown.jpg";
import baFrown1 from "@/assets/before-after/brotox-frown-glabella-male-1.jpg";
import baForeheadH from "@/assets/before-after/brotox-forehead-horizontal-lines-male.jpg";
import baForeheadBrow from "@/assets/before-after/brotox-forehead-brow-male.jpg";
import baGummy from "@/assets/before-after/brotox-gummy-smile-male.jpg";
import baFrown2 from "@/assets/before-after/brotox-glabella-frown-male-2.jpg";
import baMasseter from "@/assets/before-after/brotox-masseter-jaw-slimming-male.jpg";
import MasseterProgressionSeries from "@/components/masseter/MasseterProgressionSeries";

const BroTox = () => {
  const [flipped, setFlipped] = useState(false);
  const baImageUrl = "https://www.cosmedocs.com/assets/brotox-ba-forehead-frown.jpg";
  const seoData = generateSEOMetadata(
    "BroTox London | Men's Botox & Anti-Wrinkle Treatment | Harley Street",
    "BroTox London — doctor-led men's Botox on Harley Street. Higher dosing for stronger male muscles, brow kept low and masculine. From £225 at Cosmedocs since 2007.",
    "/treatments/brotox/"
  );

  const faqs = [
    {
      question: "What is BroTox?",
      answer: "BroTox is men's Botox — anti-wrinkle treatment specifically dosed and mapped for male facial anatomy. Male muscles are typically 25–40% stronger and denser than female muscles, so a man treated with a 'female' protocol either looks frozen, feminised, or sees the result fade in weeks. At Cosmedocs, BroTox is delivered by male doctors who have treated male faces for 17+ years on Harley Street."
    },
    {
      question: "How much does BroTox cost in London?",
      answer: "BroTox at Cosmedocs starts from £225 for one area, £275 for two areas and £325 for three areas (the standard men's package). When combined with another treatment, additional areas are £50 each. All prices include doctor consultation, follow-up review and any micro-adjustment in the first three weeks."
    },
    {
      question: "How is men's Botox different from women's Botox?",
      answer: "Three differences: dose (men need 25–40% more product per area for equivalent muscle relaxation), placement (the male brow must stay low and flat — never lifted, never arched), and goal (men want to look less tired, not younger). Done correctly, colleagues notice you look refreshed but cannot identify why."
    },
    {
      question: "Will BroTox make me look feminised or frozen?",
      answer: "Not when it is dosed for male anatomy. Feminisation almost always comes from over-lifting the brow tail or treating the forehead in isolation without balancing the glabella. Our protocol preserves a strong, flat male brow line and natural micro-movement — the giveaway every man wants to avoid is exactly what we are trained to prevent."
    },
    {
      question: "How long does BroTox last for men?",
      answer: "Typically 3–4 months for men, compared with 4–6 months for women — male muscle bulk metabolises the product faster. Most male patients settle into a 3-treatment-per-year rhythm, often timed around work, travel or significant events."
    },
    {
      question: "Is BroTox safe?",
      answer: "When delivered by a GMC-registered doctor in a CQC-aligned clinical setting, Botox is one of the most studied aesthetic treatments in the world. We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  };

  const areas = [
    { title: "Forehead Lines", desc: "Horizontal lines from raised brows. Lighter dose to avoid heaviness — the male forehead carries character." },
    { title: "Glabella (Frown)", desc: "The '11s' between the brows. Higher units here — the corrugator is the strongest pull on the male face." },
    { title: "Crow's Feet", desc: "Lateral eye lines. Treated with restraint so a genuine smile still creases naturally at the outer corner." },
    { title: "Jawline & Masseter", desc: "Softens an over-bulked jaw from clenching or grinding — popular with desk-bound, high-stress male patients." },
    { title: "Neck (Platysma)", desc: "Vertical neck bands and a softening jawline. The male answer to the Nefertiti Lift." },
    { title: "Underarms (Hyperhidrosis)", desc: "Stops excessive underarm sweating — a quiet life-changer for suit-wearing professionals." }
  ];

  const baseUrl = "https://www.cosmedocs.com";
  const gallery = [
    { src: baFrown1, file: "brotox-frown-glabella-male-1.jpg", area: "Glabella · Frown lines (11s)", caption: "Deep '11s' between the brows softened — corrugator dosed for male muscle bulk. Brow line kept low and horizontal.", alt: "BroTox before and after — deep glabella '11' frown lines softened in male patient, doctor-led men's anti-wrinkle treatment Cosmedocs Harley Street London" },
    { src: baForeheadH, file: "brotox-forehead-horizontal-lines-male.jpg", area: "Forehead · Horizontal lines", caption: "Stacked horizontal forehead lines smoothed without dropping the brow — frontalis lightly treated to preserve a masculine expression.", alt: "BroTox before and after — horizontal forehead lines smoothed in male patient with brow position preserved, men's Botox Cosmedocs Harley Street London" },
    { src: baForeheadBrow, file: "brotox-forehead-brow-male.jpg", area: "Forehead & brow", caption: "Forehead refreshed, brow kept strong and flat — no feminising lift, no frozen look, natural micro-movement retained.", alt: "BroTox before and after — male forehead refreshed with flat masculine brow preserved, anti-wrinkle treatment Cosmedocs Harley Street London" },
    { src: baGummy, file: "brotox-gummy-smile-male.jpg", area: "Gummy smile · Lip elevators", caption: "Excessive gum show on smiling reduced with micro-dosing of the lip elevators — natural smile dynamics preserved.", alt: "BroTox before and after — gummy smile reduced in male patient with natural smile dynamics retained, Cosmedocs Harley Street London" },
    { src: baFrown2, file: "brotox-glabella-frown-male-2.jpg", area: "Glabella · Second case", caption: "Heavy resting frown released — patient looks approachable rather than tense, with full brow movement retained.", alt: "BroTox before and after — heavy resting frown released in second male patient case, doctor-led men's Botox Cosmedocs Harley Street London" },
    { src: baMasseter, file: "brotox-masseter-jaw-slimming-male.jpg", area: "BroMasseter · Jawline slimming", caption: "Bulky masseter softened with BroMasseter — a wide, square male lower face refined into a leaner, more defined jawline. Also relieves clench, grind and morning jaw ache.", alt: "BroMasseter before and after — bulky male masseter softened and jawline slimmed, men's masseter Botox at Cosmedocs Harley Street London" }
  ];
  const galleryImageSchema = gallery.map((g) => ({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name: `BroTox before and after — ${g.area}`,
    description: `${g.caption} Published with patient consent; individual results vary.`,
    contentUrl: `${baseUrl}/assets/before-after/${g.file}`,
    creditText: "Cosmedocs · Harley Street",
    copyrightNotice: "© Cosmedocs",
    acquireLicensePage: `${baseUrl}/contact/`,
    creator: { "@type": "Organization", name: "Cosmedocs" },
    copyrightHolder: { "@type": "Organization", name: "Cosmedocs" }
  }));

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" data-rh="true" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={brotoxImg} />
        <meta name="keywords" content="brotox, men's botox london, male botox, mens anti wrinkle treatment, harley street brotox, botox for men" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          name: "BroTox before and after — forehead lines & frown (glabella) anti-wrinkle treatment for men",
          description: "Clinical before-and-after photograph of a male patient showing softened forehead and frown (glabella) lines after BroTox men's anti-wrinkle treatment at Cosmedocs Harley Street, London. Brow kept low and masculine. Published with patient consent; individual results vary.",
          contentUrl: baImageUrl,
          representativeOfPage: false,
          creditText: "Cosmedocs · Harley Street",
          copyrightNotice: "© Cosmedocs",
          acquireLicensePage: "https://www.cosmedocs.com/contact/",
          creator: { "@type": "Organization", name: "Cosmedocs" },
          copyrightHolder: { "@type": "Organization", name: "Cosmedocs" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "BroTox before & after gallery — men's Botox at Cosmedocs Harley Street, London",
          description: "Clinical before-and-after photographs of male patients treated with BroTox (men's anti-wrinkle treatment) at Cosmedocs Harley Street, London. All images published with written patient consent; individual results vary.",
          image: galleryImageSchema
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-black overflow-x-hidden text-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/20 to-transparent" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.07) 0%, transparent 60%)' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[-20%] left-[-5%] w-[420px] h-[420px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.04) 0%, transparent 60%)' }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[
                { label: 'Treatments', path: '/treatments/' },
                { label: 'Botox Treatments', path: '/treatments/botox/' }
              ]}
              currentPage="BroTox — Men's Botox"
            />
            <Link to="/treatments/botox/" className="inline-flex items-center gap-2 text-xs text-[#C9A050]/80 hover:text-[#C9A050] tracking-widest uppercase mt-4 transition-colors">
              <ArrowRight className="w-3 h-3 rotate-180" /> Botox London — view all treatments
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center pt-12 pb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#C9A050]/30 rounded-full text-xs text-[#C9A050]/90 tracking-widest uppercase mb-6">
                  <MapPin className="w-3 h-3" /> Harley Street, London W1G 9PF
                </div>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white/90 leading-[1.05] tracking-tight mb-6">
                  BroTox
                  <span className="block text-[#C9A050] font-light">Men&rsquo;s Botox, treated as male</span>
                </h1>
                <p className="text-sm text-[#C9A050]/60 tracking-widest uppercase mb-4 font-light">Bold · Natural · Always Your Way</p>
                <p className="text-lg md:text-xl text-white/45 leading-relaxed font-extralight max-w-xl mb-8">
                  The male face is not a smaller female face. Different muscle bulk, different brow shape, different goals.
                  BroTox at Cosmedocs is dosed and mapped for male anatomy — refreshed, never feminised, never frozen.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <a
                    href="https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black px-7 py-4 rounded-full text-sm font-medium transition-colors"
                  >
                    Book BroTox Consultation <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    to="/treatments/botox/"
                    className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-[#C9A050]/50 text-white/70 hover:text-white px-7 py-4 rounded-full text-sm font-light transition-colors"
                  >
                    All <span className="underline underline-offset-4 decoration-[#C9A050]/40">Botox London</span> treatments
                  </Link>
                </div>

                <div className="flex flex-wrap gap-6 text-xs text-white/40 tracking-wider uppercase">
                  <span className="flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-[#C9A050]/70" /> GMC Doctors</span>
                  <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[#C9A050]/70" /> Since 2007</span>
                  <span className="flex items-center gap-2"><Star className="w-3.5 h-3.5 text-[#C9A050]/70 fill-[#C9A050]/70" /> 4.9 Rating</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative"
              >
                <button
                  type="button"
                  onClick={() => setFlipped((v) => !v)}
                  aria-pressed={flipped}
                  aria-label={flipped ? "Show BroTox portrait" : "Show BroTox before and after"}
                  className="group relative block w-full aspect-[4/5] [perspective:1400px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A050]/60 rounded-3xl"
                >
                  <div
                    className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
                    style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                  >
                    {/* FRONT */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden border border-[#C9A050]/15 bg-gradient-to-br from-[#0a0a0a] via-[#15110a] to-[#1f1810] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                      <img
                        src={brotoxImg}
                        alt="BroTox London — men's Botox treatment at Cosmedocs Harley Street"
                        className="w-full h-full object-cover opacity-90"
                        loading="eager"
                      />
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-black/70 backdrop-blur border border-[#C9A050]/40 text-[10px] text-[#C9A050] tracking-widest uppercase px-3 py-1.5 rounded-full">
                        <RotateCw className="w-3 h-3" /> Tap for before / after
                      </span>
                    </div>

                    {/* BACK — Before & After */}
                    <figure className="absolute inset-0 rounded-3xl overflow-hidden border border-[#C9A050]/30 bg-black [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] flex flex-col">
                      <div className="relative flex-1 min-h-0">
                        <img
                          src={brotoxBA}
                          alt="BroTox before and after — forehead lines and frown (glabella) softened in a male patient, anti-wrinkle treatment at Cosmedocs Harley Street London"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <span className="absolute top-3 left-3 bg-[#C9A050]/95 text-black text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full font-medium">Before</span>
                        <span className="absolute bottom-1/2 left-3 translate-y-2 bg-[#C9A050]/95 text-black text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full font-medium">After</span>
                        <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-black/70 backdrop-blur border border-[#C9A050]/40 text-[10px] text-[#C9A050] tracking-widest uppercase px-3 py-1.5 rounded-full">
                          <RotateCw className="w-3 h-3" /> Flip back
                        </span>
                      </div>
                      <figcaption className="bg-black/90 border-t border-[#C9A050]/20 px-4 py-3 text-left space-y-1.5">
                        <p className="text-[11px] text-[#C9A050]/90 tracking-widest uppercase font-medium">
                          BroTox · Forehead &amp; Frown · 2 weeks post-treatment
                        </p>
                        <p className="text-[10px] text-white/45 leading-relaxed font-light">
                          <strong className="text-white/65">Individual results disclaimer:</strong> results vary between patients and depend on anatomy, muscle bulk and dosing. Image shown is of a single male patient and is not a guarantee of outcome.
                          <span className="block mt-1"><strong className="text-white/65">Patient consent:</strong> published with the patient's written, informed consent. Cosmedocs · Harley Street.</span>
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </button>
                <div className="absolute -bottom-4 -left-4 bg-black border border-[#C9A050]/30 rounded-2xl px-5 py-4 shadow-xl">
                  <p className="text-[10px] text-[#C9A050]/70 tracking-widest uppercase mb-1">From</p>
                  <p className="text-2xl font-light text-[#C9A050]">£225</p>
                  <p className="text-[10px] text-white/40 tracking-wider">single area</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHY MEN ARE DIFFERENT */}
        <section className="relative py-20 px-4 sm:px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs text-[#C9A050]/70 tracking-[0.25em] uppercase mb-3">The Male Face</p>
              <h2 className="text-3xl md:text-5xl font-extralight text-white/90 leading-tight mb-4 max-w-3xl">
                Why men need a <span className="text-[#C9A050] font-light">different protocol</span>
              </h2>
              <div className="w-12 h-px bg-[#C9A050]/50 mb-10" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: <Activity className="w-5 h-5 text-[#C9A050]" />,
                  title: "Stronger muscle pull",
                  body: "Male facial muscles are up to twice as dense as female muscles. Under-dosing is the single most common mistake — the result fades in 4–6 weeks and patients assume Botox 'doesn't work on them'."
                },
                {
                  icon: <Syringe className="w-5 h-5 text-[#C9A050]" />,
                  title: "Mapped for male anatomy",
                  body: "The male brow sits lower and flatter than the female brow. We place units to relax, not lift — preserving the strong, horizontal masculine brow line that defines a male face."
                },
                {
                  icon: <Stethoscope className="w-5 h-5 text-[#C9A050]" />,
                  title: "Goal: refreshed, not younger",
                  body: "Most male patients want to stop looking tired, stressed or angry. BroTox is dosed to soften the giveaway lines while keeping every micro-expression that makes you you."
                }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-2 mb-3">{item.icon}<p className="text-sm font-medium text-white/85">{item.title}</p></div>
                  <p className="text-white/55 text-sm leading-relaxed font-light">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TREATMENT AREAS */}
        <section className="relative py-20 px-4 sm:px-6 border-t border-white/5 bg-gradient-to-b from-black via-[#0a0805] to-black">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs text-[#C9A050]/70 tracking-[0.25em] uppercase mb-3">Areas We Treat</p>
              <h2 className="text-3xl md:text-5xl font-extralight text-white/90 leading-tight mb-4 max-w-3xl">
                BroTox <span className="text-[#C9A050] font-light">treatment areas</span>
              </h2>
              <div className="w-12 h-px bg-[#C9A050]/50 mb-10" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {areas.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-[#C9A050]/30 transition-colors"
                >
                  <p className="text-sm font-medium text-white/85 mb-2">{a.title}</p>
                  <p className="text-xs text-white/45 leading-relaxed font-light">{a.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              <Link to="/treatments/masseter-botox/" className="px-4 py-2 border border-white/10 rounded-full text-xs text-white/60 hover:text-[#C9A050] hover:border-[#C9A050]/40 transition-colors">Masseter Botox</Link>
              <Link to="/treatments/bruxism-botox/" className="px-4 py-2 border border-white/10 rounded-full text-xs text-white/60 hover:text-[#C9A050] hover:border-[#C9A050]/40 transition-colors">Bruxism & TMJ</Link>
              <Link to="/treatments/nefertiti-botox-facelift/" className="px-4 py-2 border border-white/10 rounded-full text-xs text-white/60 hover:text-[#C9A050] hover:border-[#C9A050]/40 transition-colors">Nefertiti Lift</Link>
              <Link to="/treatments/trap-botox/" className="px-4 py-2 border border-white/10 rounded-full text-xs text-white/60 hover:text-[#C9A050] hover:border-[#C9A050]/40 transition-colors">Trap Tox</Link>
              <Link to="/botox-price-london/" className="px-4 py-2 border border-white/10 rounded-full text-xs text-white/60 hover:text-[#C9A050] hover:border-[#C9A050]/40 transition-colors">BroTox prices London</Link>
            </div>
          </div>
        </section>

        {/* BEFORE & AFTER GALLERY */}
        <section className="relative py-20 px-4 sm:px-6 border-t border-white/5 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs text-[#C9A050]/70 tracking-[0.25em] uppercase mb-3">Real Male Patients</p>
              <h2 className="text-3xl md:text-5xl font-extralight text-white/90 leading-tight mb-4 max-w-3xl">
                BroTox <span className="text-[#C9A050] font-light">before &amp; after</span>
              </h2>
              <div className="w-12 h-px bg-[#C9A050]/50 mb-6" />
              <p className="text-sm text-white/50 leading-relaxed font-light max-w-2xl mb-12">
                Doctor-led men's Botox at Cosmedocs Harley Street. Every case below is a real Cosmedocs male patient — never stock,
                never AI, never a model. Published with written, informed patient consent.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {gallery.map((g, i) => (
                <motion.figure
                  key={g.file}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-2xl overflow-hidden border border-[#C9A050]/15 bg-gradient-to-b from-[#0a0a0a] to-black flex flex-col"
                >
                  <div className="relative aspect-square">
                    <img
                      src={g.src}
                      alt={g.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-[#C9A050]/95 text-black text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full font-medium">Before</span>
                    <span className="absolute bottom-1/2 left-3 translate-y-2 bg-[#C9A050]/95 text-black text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full font-medium">After</span>
                  </div>
                  <figcaption className="p-4 space-y-2 flex-1 flex flex-col">
                    <p className="text-[11px] text-[#C9A050]/90 tracking-widest uppercase font-medium">{g.area}</p>
                    <p className="text-sm text-white/65 font-light leading-relaxed">{g.caption}</p>
                    <p className="text-[10px] text-white/40 leading-relaxed font-light pt-2 mt-auto border-t border-white/5">
                      <strong className="text-white/60">Individual results disclaimer:</strong> results vary between patients. Image shown is of a single male patient and is not a guarantee of outcome.
                      <span className="block mt-1"><strong className="text-white/60">Patient consent:</strong> published with the patient's written, informed consent. Cosmedocs · Harley Street.</span>
                    </p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>

            <p className="text-xs text-white/40 leading-relaxed font-light max-w-3xl mt-10">
              Our aesthetics is invisible art — bold, natural, always your way. Every BroTox case is dosed for male anatomy:
              stronger units where the muscle is, lighter where it shouldn't lift, brow kept low and masculine. We work with
              PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments.
            </p>
          </div>
        </section>

        {/* BROMASSETER EDUCATIVE PROGRESSION SERIES */}
        <MasseterProgressionSeries
          headline="BroMasseter — the educative four-stage progression"
          intro="BroMasseter is the most technically demanding men's Botox treatment we deliver. Below is the real four-stage journey of a male patient at Cosmedocs Harley Street — from baseline asymmetric hypertrophy graded on the HSI Masseter Scale, through three carefully spaced sessions, to a maintained, refined, masculine jawline. Read more about full BroMasseter treatment in the link below."
          showBroTeaser
        />
        <div className="bg-black px-4 sm:px-6 pb-12 -mt-4">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/treatments/masseter-botox/"
              className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#D4AF6A] text-sm font-medium transition-colors"
            >
              Read more about full BroMasseter treatment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>



        {/* PRICING */}
        <section className="relative py-20 px-4 sm:px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs text-[#C9A050]/70 tracking-[0.25em] uppercase mb-3">Transparent Pricing</p>
              <h2 className="text-3xl md:text-5xl font-extralight text-white/90 leading-tight mb-4 max-w-3xl">
                How much does <span className="text-[#C9A050] font-light">BroTox cost in London?</span>
              </h2>
              <div className="w-12 h-px bg-[#C9A050]/50 mb-10" />
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { area: "1 Area", price: "£225" },
                { area: "2 Areas", price: "£275" },
                { area: "3 Areas (Men)", price: "£325" },
                { area: "Masseter (Jaw)", price: "From £400" }
              ].map((p) => (
                <div key={p.area} className="bg-white/[0.03] border border-[#C9A050]/15 rounded-2xl p-5">
                  <p className="text-xs text-white/45 mb-1 tracking-wider uppercase">{p.area}</p>
                  <p className="text-2xl font-light text-[#C9A050]">{p.price}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/40 leading-relaxed font-light max-w-3xl">
              Add-on areas from £50 each when combined with another treatment. Every price includes the doctor consultation,
              follow-up review and any micro-adjustment in the first three weeks. We work with PrivaDr Ltd, 10 Harley Street,
              London W1G 9PF for all CQC required treatments.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="relative py-20 px-4 sm:px-6 border-t border-white/5 bg-gradient-to-b from-black via-[#0a0805] to-black">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs text-[#C9A050]/70 tracking-[0.25em] uppercase mb-3">Questions, answered</p>
              <h2 className="text-3xl md:text-4xl font-extralight text-white/90 leading-tight mb-4">
                BroTox <span className="text-[#C9A050] font-light">FAQs</span>
              </h2>
              <div className="w-12 h-px bg-[#C9A050]/50 mb-10" />
            </motion.div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white/[0.03] border border-white/10 rounded-2xl px-5">
                  <AccordionTrigger className="text-white/85 text-left text-sm font-light hover:text-[#C9A050] hover:no-underline">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/55 text-sm font-light leading-relaxed">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 px-4 sm:px-6 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-extralight text-white/90 mb-4">
                Your BroTox consultation <span className="text-[#C9A050] font-light">begins here</span>
              </h2>
              <p className="text-white/50 text-base font-light max-w-xl mx-auto mb-8">
                Considered care from male, doctor-led practitioners on Harley Street since 2007.
              </p>
              <a
                href="https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black px-10 py-4 rounded-full text-sm font-medium transition-colors"
              >
                Book BroTox at Harley Street <ArrowRight className="w-4 h-4" />
              </a>
              <div className="mt-8">
                <Link to="/treatments/botox/" className="text-xs text-[#C9A050]/70 hover:text-[#C9A050] tracking-widest uppercase transition-colors">
                  ← Explore all Botox London treatments
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default BroTox;
