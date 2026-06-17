import { lazy, Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Sparkles, Search, Brain } from "lucide-react";
import QuickAccessTreatments from "@/components/home/QuickAccessTreatments";
import SmartAestheticsBanner from "@/components/home/SmartAestheticsBanner";
import cosmetalkJawline from "@/assets/cosmetalk-jawline.jpg.asset.json";
import cosmetalkEye from "@/assets/cosmetalk-eye.jpg.asset.json";
import cosmetalkSerum from "@/assets/cosmetalk-serum.jpg.asset.json";

// Lazy load heavy components
const LiquidGlassFacialAssessment = lazy(() => import("@/components/LiquidGlassFacialAssessment"));
const LiquidGlassAllTreatments = lazy(() => import("@/components/LiquidGlassAllTreatments"));
const AestheticAnalysisWizard = lazy(() => import("@/components/AestheticAnalysisWizard"));

const aiTools = [
  { 
    icon: Search, 
    label: "AI Search", 
    description: "Find your perfect treatment",
    action: "search" 
  },
  { 
    icon: Brain, 
    label: "Facial Analysis", 
    description: "AI-powered assessment",
    action: "analysis" 
  },
  { 
    icon: Sparkles, 
    label: "All Treatments", 
    description: "Explore our range",
    action: "treatments" 
  },
];

const Home = () => {
  const [isFacialAssessmentOpen, setIsFacialAssessmentOpen] = useState(false);
  const [isAllTreatmentsOpen, setIsAllTreatmentsOpen] = useState(false);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);

  const handleAIAction = (action: string) => {
    switch (action) {
      case 'search':
        window.dispatchEvent(new CustomEvent('open-search'));
        break;
      case 'analysis':
        setIsAnalysisOpen(true);
        break;
      case 'treatments':
        setIsAllTreatmentsOpen(true);
        break;
    }
  };

  return (
    <>
      <Helmet>
        <title>Cosmedocs | Premium Aesthetic Medicine | Harley Street London</title>
        <meta name="description" content="Doctor-led aesthetic medicine on Harley Street. Botox, dermal fillers, and skin treatments. Our invisible art philosophy delivers natural-looking results." />
        <link rel="canonical" href="https://cosmedocs.com/" />
        <meta property="og:title" content="Cosmedocs | Premium Aesthetic Medicine | Harley Street London" />
        <meta property="og:description" content="Doctor-led aesthetic medicine on Harley Street. Our invisible art philosophy delivers natural-looking results." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        

        {/* Flowing Gold Gradient Orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #C9A050 0%, transparent 70%)',
              filter: 'blur(100px)',
            }}
            animate={{
              x: ['-20%', '10%', '-20%'],
              y: ['-10%', '20%', '-10%'],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, #C9A050 0%, transparent 70%)',
              filter: 'blur(120px)',
            }}
            animate={{
              x: ['20%', '-10%', '20%'],
              y: ['20%', '-10%', '20%'],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-[#C9A050] text-sm tracking-[0.3em] uppercase mb-6">
                Harley Street, London
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight">
                <span className="text-[#C9A050]">cosmedocs</span>
              </h1>
              <p className="text-white/50 text-sm tracking-[0.2em] uppercase mb-8">
                Our aesthetics is invisible art
              </p>
              <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-12">
                Bold • Natural • Always Your Way
              </p>

              {/* AI Tools — Inline Row */}
              <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto mb-10">
                {aiTools.map((tool, i) => (
                  <motion.button
                    key={i}
                    onClick={() => handleAIAction(tool.action)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    className="group flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#C9A050]/50 rounded-full px-4 py-2.5 transition-all duration-300 hover:bg-white/10"
                  >
                    <tool.icon className="h-4 w-4 text-[#C9A050]" />
                    <span className="text-sm text-white/80 font-medium">{tool.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* CosmeTalk — editorial line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-10"
              >
                <Link
                  to="/blog/cosmetalk/"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-white/50 hover:text-[#C9A050] transition-colors"
                >
                  <span className="h-px w-6 bg-[#C9A050]/60" />
                  CosmeTalk · The truth-first edit
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="tel:03330551503"
                  className="bg-[#C9A050] hover:bg-[#B8913F] text-black px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
                >
                  Book Consultation
                </a>
                <Link
                  to="/about"
                  className="border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/5"
                >
                  About Us
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-1.5 bg-[#C9A050] rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* Quick Access Treatments */}
        <SmartAestheticsBanner variant="dark" />
        <QuickAccessTreatments />

        {/* CosmeTalk — Editorial Teaser */}
        <section className="relative py-20 md:py-28 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-end justify-between mb-12 flex-wrap gap-6"
            >
              <div className="max-w-2xl">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A050] font-medium">
                  CosmeTalk
                </span>
                <h2 className="mt-3 text-3xl md:text-5xl font-extralight leading-tight">
                  The truth-first edit.
                  <span className="block text-white/50">Aesthetic medicine, decoded.</span>
                </h2>
                <p className="mt-5 text-white/60 font-light leading-relaxed">
                  Doctor-written essays on what works, what doesn't, and what every clinic should have told you before you booked. No hype. No sales pitch. Just the version we'd give a patient in the consulting room.
                </p>
              </div>
              <Link
                to="/blog/cosmetalk/"
                className="group inline-flex items-center gap-2 text-sm text-[#C9A050] hover:text-white transition-colors border-b border-[#C9A050]/40 hover:border-white pb-1"
              >
                Read CosmeTalk
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  img: cosmetalkJawline.url,
                  tag: "RF Microneedling",
                  title: "Does Morpheus8 actually tighten skin?",
                  blurb: "Yes — modestly, predictably, only for the right candidate. The honest version.",
                  href: "/blog/cosmetalk/does-morpheus8-tighten-skin/",
                  span: "md:col-span-2 md:row-span-2",
                  ratio: "aspect-[16/10] md:aspect-[16/11]",
                  featured: true,
                },
                {
                  img: cosmetalkEye.url,
                  tag: "Coming Soon",
                  title: "Tear troughs: when filler is the wrong answer.",
                  blurb: "Skin quality, fat repositioning, surgery — read before you book.",
                  href: "/blog/cosmetalk/",
                  ratio: "aspect-[4/5]",
                },
                {
                  img: cosmetalkSerum.url,
                  tag: "Coming Soon",
                  title: "Decoding the 'glow' serum claim.",
                  blurb: "What active ingredients earn the word, and what's marketing.",
                  href: "/blog/cosmetalk/",
                  ratio: "aspect-[4/5]",
                },
              ].map((post, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={post.span || ""}
                >
                  <Link
                    to={post.href}
                    className="group block relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#C9A050]/40 transition-all h-full"
                  >
                    <div className={`relative ${post.ratio} overflow-hidden bg-black`}>
                      <img
                        src={post.img}
                        alt={post.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <span className="text-[10px] tracking-[0.24em] uppercase text-[#C9A050] font-medium">
                          {post.tag}
                        </span>
                        <h3 className={`mt-2 font-light text-white leading-tight ${post.featured ? "text-2xl md:text-3xl" : "text-lg"}`}>
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/65 font-light leading-relaxed line-clamp-2">
                          {post.blurb}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="relative py-12 px-6 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#C9A050] text-[#C9A050]" />
                ))}
              </div>
              <p className="text-2xl md:text-3xl font-light mb-4">
                4.9 Average Rating
              </p>
              <p className="text-white/60 mb-8">
                Based on 200+ verified Google reviews
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {[
                  { value: '2007', label: 'Established' },
                  { value: '1M+', label: 'Treatments' },
                  { value: 'GMC', label: 'Registered' },
                  { value: 'Harley St', label: 'Location' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-3xl md:text-4xl font-light text-[#C9A050]">{stat.value}</p>
                    <p className="text-white/50 text-sm mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Teaser */}
        <section className="relative py-14 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <blockquote className="text-2xl md:text-4xl font-light text-white/90 leading-relaxed mb-8">
                "Aesthetic medicine by Cosmedocs is minimal. Quiet, not loud. 
                Invisible, not exaggerated."
              </blockquote>
              <Link
                to="/about"
                className="text-[#C9A050] hover:text-[#B8913F] font-medium inline-flex items-center gap-2 transition-colors"
              >
                Discover Our Philosophy
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-14 px-6 bg-gradient-to-b from-transparent to-[#C9A050]/10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Begin Your Journey
              </h2>
              <p className="text-white/60 mb-10 max-w-xl mx-auto">
                Every transformation starts with a conversation. Book your consultation 
                with our expert practitioners today.
              </p>
              <a
                href="tel:03330551503"
                className="inline-block bg-[#C9A050] hover:bg-[#B8913F] text-black px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Book Consultation
              </a>
            </motion.div>
          </div>
        </section>

        

        {/* Modals */}
        <Suspense fallback={null}>
          <LiquidGlassFacialAssessment 
            isOpen={isFacialAssessmentOpen}
            onClose={() => setIsFacialAssessmentOpen(false)}
          />
          <LiquidGlassAllTreatments 
            isOpen={isAllTreatmentsOpen}
            onClose={() => setIsAllTreatmentsOpen(false)}
          />
          <AestheticAnalysisWizard 
            isOpen={isAnalysisOpen}
            onClose={() => setIsAnalysisOpen(false)}
          />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
