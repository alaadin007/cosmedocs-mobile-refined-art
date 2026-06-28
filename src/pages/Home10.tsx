import { lazy, Suspense, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Sparkles, Search, Brain } from "lucide-react";
import DecadeConstellation from "@/components/home/DecadeConstellation";
import SmartAestheticsBanner from "@/components/home/SmartAestheticsBanner";

const LiquidGlassFacialAssessment = lazy(() => import("@/components/LiquidGlassFacialAssessment"));
const LiquidGlassAllTreatments = lazy(() => import("@/components/LiquidGlassAllTreatments"));
const AestheticAnalysisWizard = lazy(() => import("@/components/AestheticAnalysisWizard"));

const aiTools = [
  { icon: Search, label: "AI Search", action: "search" },
  { icon: Brain, label: "Facial Analysis", action: "analysis" },
  { icon: Sparkles, label: "All Treatments", action: "treatments" },
];

const Home10 = () => {
  const [isAllTreatmentsOpen, setIsAllTreatmentsOpen] = useState(false);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const [isFacialAssessmentOpen, setIsFacialAssessmentOpen] = useState(false);

  const handleAIAction = (action: string) => {
    switch (action) {
      case "search":
        window.dispatchEvent(new CustomEvent("open-search"));
        break;
      case "analysis":
        setIsAnalysisOpen(true);
        break;
      case "treatments":
        setIsAllTreatmentsOpen(true);
        break;
    }
  };

  return (
    <>
      <Helmet>
        <title>Cosmedocs | Aesthetic Medicine By Your Decade | Harley Street</title>
        <meta name="description" content="Doctor-led aesthetic medicine on Harley Street. Discover the treatments most relevant to your decade — 20s through 50s — with our invisible art philosophy." />
        <link rel="canonical" href="https://cosmedocs.com/home10" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <p className="text-[#C9A050] text-sm tracking-[0.3em] uppercase mb-6">Harley Street, London</p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight">
                <span className="text-[#C9A050]">cosmedocs</span>
              </h1>
              <p className="text-white/50 text-sm tracking-[0.2em] uppercase mb-8">Our aesthetics is invisible art</p>
              <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-12">
                Bold • Natural • Always Your Way
              </p>

              <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto mb-10">
                {aiTools.map((tool, i) => (
                  <button
                    key={i}
                    onClick={() => handleAIAction(tool.action)}
                    className="group flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#C9A050]/50 rounded-full px-4 py-2.5 transition-all duration-300 hover:bg-white/10"
                  >
                    <tool.icon className="h-4 w-4 text-[#C9A050]" />
                    <span className="text-sm text-white/80 font-medium">{tool.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:03330551503" className="bg-[#C9A050] hover:bg-[#B8913F] text-black px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105">
                  Book Consultation
                </a>
                <Link to="/about" className="border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/5">
                  About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <SmartAestheticsBanner variant="dark" />

        {/* The replacement: Decade constellation instead of popular treatments */}
        <DecadeConstellation />

        {/* Trust */}
        <section className="relative py-12 px-6 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#C9A050] text-[#C9A050]" />
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-light mb-4">4.9 Average Rating</p>
            <p className="text-white/60 mb-8">Based on 200+ verified Google reviews</p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="relative py-14 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-4xl font-light text-white/90 leading-relaxed mb-8">
              "Aesthetic medicine by Cosmedocs is minimal. Quiet, not loud. Invisible, not exaggerated."
            </blockquote>
            <Link to="/about" className="text-[#C9A050] hover:text-[#B8913F] font-medium inline-flex items-center gap-2 transition-colors">
              Discover Our Philosophy <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-14 px-6 bg-gradient-to-b from-transparent to-[#C9A050]/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Begin Your Journey</h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">
              Every transformation starts with a conversation. Book your consultation with our expert practitioners today.
            </p>
            <a href="tel:03330551503" className="inline-block bg-[#C9A050] hover:bg-[#B8913F] text-black px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105">
              Book Consultation
            </a>
          </div>
        </section>

        <Suspense fallback={null}>
          <LiquidGlassFacialAssessment isOpen={isFacialAssessmentOpen} onClose={() => setIsFacialAssessmentOpen(false)} />
          <LiquidGlassAllTreatments isOpen={isAllTreatmentsOpen} onClose={() => setIsAllTreatmentsOpen(false)} />
          <AestheticAnalysisWizard isOpen={isAnalysisOpen} onClose={() => setIsAnalysisOpen(false)} />
        </Suspense>
      </div>
    </>
  );
};

export default Home10;
