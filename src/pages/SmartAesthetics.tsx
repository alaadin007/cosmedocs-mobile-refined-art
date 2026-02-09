import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Lightbulb, Menu, X, Brain, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateSEOMetadata } from "@/utils/seo";
import { motion, AnimatePresence } from "framer-motion";

interface Principle {
  id: string;
  title: string;
  subtitle: string;
}

// Reframed as Smart Aesthetic Principles - modular thinking blocks
const principles: Principle[] = [
  {
    id: "why-treatments-fail",
    title: "Why Most Treatments Fail",
    subtitle: "The truth about wasted money",
  },
  {
    id: "skin-not-surface",
    title: "Skin Is Not a Surface",
    subtitle: "Understanding the layers",
  },
  {
    id: "structure-before-lift",
    title: "Structure Before Lift",
    subtitle: "The dermis architecture",
  },
  {
    id: "volume-story",
    title: "The Volume Story",
    subtitle: "Fat, muscle & first signs of time",
  },
  {
    id: "thirties-shift",
    title: "The Thirties Shift",
    subtitle: "When structure changes",
  },
  {
    id: "forties-lift",
    title: "The Forties Logic",
    subtitle: "The era of lift",
  },
  {
    id: "fifties-elegance",
    title: "The Fifties Elegance",
    subtitle: "Elasticity & energy",
  },
  {
    id: "when-not-to-treat",
    title: "When Not to Treat",
    subtitle: "The wisdom of restraint",
  },
  {
    id: "core-principles",
    title: "Core Principles",
    subtitle: "The CosmeDocs philosophy",
  },
];

// Interactive quiz questions for "Pause & Think" blocks
interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const quizQuestions: Record<string, QuizQuestion> = {
  "why-treatments-fail": {
    question: "What causes sagging first?",
    options: ["Skin loosening", "Fat loss", "Bone resorption"],
    correctIndex: 2,
    explanation: "Bone resorption begins in your 30s, causing the foundation to shrink. Fat and skin follow gravity once the structure underneath diminishes."
  },
  "skin-not-surface": {
    question: "Where does skin hydration actually come from?",
    options: ["Moisturiser on top", "Water from dermis below", "External humidity"],
    correctIndex: 1,
    explanation: "True hydration rises from the dermis. When dead cells block this pathway, adding more cream on top won't help — you need to unblock first."
  },
  "structure-before-lift": {
    question: "Why do some skin tightening treatments fail?",
    options: ["Wrong device brand", "No volume underneath", "Not enough sessions"],
    correctIndex: 1,
    explanation: "You can't tighten what isn't supported. Without volume beneath, you're pulling on an empty tent."
  },
  "volume-story": {
    question: "What primarily causes under-eye hollows?",
    options: ["Thin skin", "Fat pad descent", "Dark pigment"],
    correctIndex: 1,
    explanation: "The malar fat pad descends and separates from the orbital fat, creating a visible trough. The skin above simply reveals what's happening below."
  },
};

// Treatment links for each principle
const treatmentLinks: Record<string, { title: string; link: string }[]> = {
  "why-treatments-fail": [
    { title: "Free AI Assessment", link: "https://ai.cosmedocs.com" },
    { title: "Book Consultation", link: "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29" },
  ],
  "skin-not-surface": [
    { title: "Chemical Peel", link: "/chemical-peel" },
    { title: "HydraFacial", link: "/hydrafacial" },
    { title: "Prescription Skincare", link: "/prescription-skin-care" },
  ],
  "structure-before-lift": [
    { title: "Profhilo", link: "/profhilo" },
    { title: "Polynucleotides", link: "/polynucleotide-treatment" },
    { title: "Skin Boosters", link: "/skin-boosters" },
  ],
  "volume-story": [
    { title: "Cheek Filler", link: "/cheek-filler" },
    { title: "Tear Trough Filler", link: "/tear-trough-filler" },
    { title: "Non-Surgical Facelift", link: "/non-surgical-facelift" },
  ],
  "thirties-shift": [
    { title: "Preventative Botox", link: "/botox-london" },
    { title: "Jawline Filler", link: "/jawline-filler" },
    { title: "Lip Filler", link: "/lip-fillers" },
  ],
  "forties-lift": [
    { title: "HA Makeover", link: "/treatments/ha-makeover" },
    { title: "PDO Threads", link: "/pdo-threads" },
    { title: "Profhilo", link: "/profhilo" },
  ],
  "fifties-elegance": [
    { title: "Full Face Rejuvenation", link: "/non-surgical-facelift" },
    { title: "Neck Fillers", link: "/neck-fillers" },
    { title: "CO2 Laser", link: "/co2-laser-resurfacing" },
  ],
  "when-not-to-treat": [
    { title: "Chat With AI Doctor", link: "#" },
    { title: "Book Consultation", link: "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29" },
  ],
  "core-principles": [
    { title: "View All Treatments", link: "/treatments" },
    { title: "Meet the Team", link: "/about" },
  ],
};

// Quiz component for interactive learning
const PauseAndThink = ({ principleId }: { principleId: string }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const quiz = quizQuestions[principleId];

  if (!quiz) return null;

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setRevealed(true);
  };

  return (
    <div className="my-10 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <Brain className="w-6 h-6 text-amber-600" />
        <span className="font-semibold text-amber-800">Pause & Think</span>
      </div>
      
      <p className="text-lg font-medium text-gray-900 mb-6">{quiz.question}</p>
      
      <div className="space-y-3">
        {quiz.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={revealed}
            className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
              revealed
                ? index === quiz.correctIndex
                  ? "bg-green-100 border-green-500 text-green-800"
                  : selectedAnswer === index
                  ? "bg-red-100 border-red-500 text-red-800"
                  : "bg-gray-100 border-gray-200 text-gray-500"
                : "bg-white border-gray-200 hover:border-amber-400 hover:bg-amber-50"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 p-4 bg-white/80 rounded-xl border border-amber-200"
          >
            <p className="text-gray-700 leading-relaxed">{quiz.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Treatment links component
const RelatedTreatments = ({ principleId }: { principleId: string }) => {
  const treatments = treatmentLinks[principleId];
  if (!treatments) return null;

  return (
    <div className="mt-10 pt-8 border-t border-gray-200">
      <p className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">Where this matters clinically</p>
      <div className="flex flex-wrap gap-3">
        {treatments.map((treatment, index) => (
          <Link
            key={index}
            to={treatment.link}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-700 rounded-full text-sm font-medium transition-all duration-300"
          >
            {treatment.title}
            <ArrowRight className="w-3 h-3" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function SmartAesthetics() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPrincipleIndex, setCurrentPrincipleIndex] = useState(-1); // -1 for entry block
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevious = () => {
    if (currentPrincipleIndex > -1) {
      setCurrentPrincipleIndex(currentPrincipleIndex - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPrincipleIndex < principles.length - 1) {
      setCurrentPrincipleIndex(currentPrincipleIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const seo = generateSEOMetadata(
    "Smart Aesthetics Series - Avoid Aesthetic Mistakes | CosmeDocs",
    "Short, intelligent guidance to help you avoid aesthetic mistakes. Learn what actually changes in the face as we age, and why most treatments fail.",
    "/aesthetic-treatments-made-easy"
  );

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="keywords" content="aesthetic treatments, facial ageing, skin rejuvenation, dermal fillers, botox, non-surgical procedures, cosmetic medicine, aesthetic education, anti-ageing treatments, smart aesthetics" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            name: "Smart Aesthetics Series",
            author: {
              "@type": "Organization",
              name: "CosmeDocs",
            },
            description: seo.description,
            articleSection: "Medical Education",
            inLanguage: "en-GB",
          })}
        </script>
      </Helmet>

      <div className="flex min-h-screen bg-gray-50">
        {/* Mobile Popup Menu */}
        {sidebarOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          >
            <div 
              className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-gray-50 overflow-y-auto shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-amber-600" />
                    <h2 className="font-semibold text-lg text-gray-900">Smart Aesthetics</h2>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSidebarOpen(false)}
                    className="h-8 w-8 hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Entry Block Nav */}
                <button
                  onClick={() => {
                    setCurrentPrincipleIndex(-1);
                    setSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg mb-4 transition-colors ${
                    currentPrincipleIndex === -1
                      ? "bg-amber-500 text-white"
                      : "bg-amber-100 hover:bg-amber-200 text-amber-900"
                  }`}
                >
                  <div>
                    <div className="font-semibold">Start Here</div>
                    <div className="text-xs opacity-80">The entry point</div>
                  </div>
                </button>

                {/* Principles */}
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide px-4 mb-2">Principles</p>
                <div className="space-y-1">
                  {principles.map((principle, idx) => (
                    <button
                      key={principle.id}
                      onClick={() => {
                        setCurrentPrincipleIndex(idx);
                        setSidebarOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        currentPrincipleIndex === idx
                          ? "bg-gray-200 text-gray-900"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <div className="font-semibold text-sm">{principle.title}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {principle.subtitle}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Sidebar */}
        <aside
          ref={sidebarRef}
          className="hidden md:block md:w-72 border-r border-gray-200 bg-gray-50 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="p-4">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="h-5 w-5 text-amber-600" />
              <h2 className="font-semibold text-lg text-gray-900">Smart Aesthetics</h2>
            </div>

            {/* Entry Block Nav */}
            <button
              onClick={() => setCurrentPrincipleIndex(-1)}
              className={`w-full text-left px-4 py-3 rounded-lg mb-4 transition-colors ${
                currentPrincipleIndex === -1
                  ? "bg-amber-500 text-white"
                  : "bg-amber-100 hover:bg-amber-200 text-amber-900"
              }`}
            >
              <div>
                <div className="font-semibold">Start Here</div>
                <div className="text-xs opacity-80">The entry point</div>
              </div>
            </button>

            {/* Principles */}
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide px-4 mb-2">Principles</p>
            <div className="space-y-1">
              {principles.map((principle, idx) => (
                <button
                  key={principle.id}
                  onClick={() => setCurrentPrincipleIndex(idx)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    currentPrincipleIndex === idx
                      ? "bg-gray-200 text-gray-900"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <div className="font-semibold text-sm">{principle.title}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {principle.subtitle}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white relative">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden fixed top-20 left-4 z-50 p-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg hover:bg-amber-600 transition-colors"
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          >
            <Menu className="h-5 w-5 text-white" />
          </button>

          <div className="max-w-4xl mx-auto px-6 md:px-8 py-12">
            {/* Back Button */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Link>

            {/* Entry Block - The Smart Entry Layer */}
            {currentPrincipleIndex === -1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Hero Entry Block */}
                <div className="text-center mb-12">
                  <p className="text-sm font-medium text-amber-600 uppercase tracking-wide mb-4">Smart Aesthetics Series</p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                    Before You Choose a Treatment
                  </h1>
                  <p className="text-xl text-gray-600 mb-2">Answer one question:</p>
                </div>

                {/* The Core Question */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center mb-10">
                  <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                    What actually changes in the face as we age?
                  </p>
                  <p className="text-gray-400 text-lg">
                    Most people guess wrong — and that's why they waste money.
                  </p>
                </div>

                {/* Three Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                  <button
                    onClick={() => setCurrentPrincipleIndex(0)}
                    className="group flex flex-col items-center gap-3 p-6 bg-white border-2 border-gray-200 hover:border-amber-500 rounded-2xl transition-all duration-300 hover:shadow-lg"
                  >
                    <Lightbulb className="w-8 h-8 text-amber-500 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-gray-900">Read the Thinking</span>
                    <span className="text-sm text-gray-500">Learn the principles</span>
                  </button>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                    className="group flex flex-col items-center gap-3 p-6 bg-white border-2 border-gray-200 hover:border-purple-500 rounded-2xl transition-all duration-300 hover:shadow-lg"
                  >
                    <MessageCircle className="w-8 h-8 text-purple-500 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-gray-900">Ask Our AI Doctor</span>
                    <span className="text-sm text-gray-500">Get instant answers</span>
                  </button>

                  <a
                    href="https://ai.cosmedocs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-3 p-6 bg-white border-2 border-gray-200 hover:border-green-500 rounded-2xl transition-all duration-300 hover:shadow-lg"
                  >
                    <Sparkles className="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-gray-900">Free AI Assessment</span>
                    <span className="text-sm text-gray-500">Analyse your face</span>
                  </a>
                </div>

                {/* Philosophy Intro */}
                <div className="prose prose-gray prose-lg max-w-none">
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl mb-8">
                    <p className="text-lg font-medium text-gray-900 mb-2">Short, intelligent guidance to help you avoid aesthetic mistakes.</p>
                    <p className="text-gray-600 m-0">Dip in anywhere. Each principle stands alone.</p>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">The Philosophy</h2>
                  
                  <p className="text-xl italic text-gray-600 text-center my-6">
                    "You can't fix what you don't understand."
                  </p>

                  <p>
                    Every few months, the industry throws another miracle at you — ultrasound this, radiofrequency that, a laser with a colour name to make it sound scientific.
                    They promise lift, glow, youth, redemption.
                  </p>

                  <p>
                    Here's the problem: your skin didn't suddenly forget how to be skin.
                    Biology didn't change — marketing did.
                  </p>

                  <p className="font-semibold text-gray-900">
                    At CosmeDocs, we don't chase trends. We chase truth.
                    <br />
                    Anatomy, not algorithms. Logic, not luck.
                  </p>

                  <div className="mt-10 pt-8 border-t border-gray-200 text-center">
                    <Button
                      onClick={() => setCurrentPrincipleIndex(0)}
                      className="bg-gray-900 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-xl"
                    >
                      Start Reading the Principles
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Principle 1: Why Most Treatments Fail */}
            {currentPrincipleIndex === 0 && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-gray prose-lg max-w-none"
              >
                <p className="text-sm font-medium text-amber-600 uppercase tracking-wide mb-2">Principle 1</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Why Most Treatments Fail
                </h1>
                <p className="text-gray-500 mb-8">The truth about wasted money</p>

                <p className="text-xl italic text-gray-600 text-center my-8">
                  "The face isn't a project; it's a relationship."
                </p>

                <p>
                  Aesthetics got complicated.
                  Everything's "natural," yet everyone looks edited.
                  Devices multiply faster than wrinkles.
                </p>

                <p>
                  Underneath it all, the same rule still applies: simple works.
                </p>

                <p>
                  The face is architecture — bones, ligaments, fat pads, skin — each holding the other up.
                  Lose one, the rest shifts. Patch one, and the crack moves somewhere else.
                  You don't paint over cracks; you fix the foundation.
                </p>

                <p>
                  That's why we start with why.
                  Why did it drop, dull, or deepen?
                  Why are you chasing light with a laser when what you lost was volume?
                </p>

                <p>The answers live in layers:</p>

                <ul className="list-none space-y-3 my-6 pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">•</span>
                    <span><strong className="text-gray-900">Epidermis</strong> — where renewal happens.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">•</span>
                    <span><strong className="text-gray-900">Dermis</strong> — where strength lives.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">•</span>
                    <span><strong className="text-gray-900">Muscle</strong> — the layer of contraction. Repeated expressions etch lines into skin, and over time, chronic contraction shortens the face. The frown pulls the brows down; the mentalis and DAO push upward — both forces compressing the mid-face, reshaping you from the inside out.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">•</span>
                    <span><strong className="text-gray-900">Fat pads</strong> — where contour hides.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">•</span>
                    <span><strong className="text-gray-900">Ligaments</strong> — the truth about lift.</span>
                  </li>
                </ul>

                <p>
                  Once you know the layers, the rest is common sense dressed as science.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 not-prose">
                  <p className="text-sm font-semibold text-gray-900">💡 Key Insight:</p>
                  <p className="text-gray-700 mt-1">
                    Trends change every quarter. Anatomy hasn't updated in a few million years.
                  </p>
                </div>

                <PauseAndThink principleId="why-treatments-fail" />
                <RelatedTreatments principleId="why-treatments-fail" />
              </motion.article>
            )}

            {/* Principle 2: Skin Is Not a Surface */}
            {currentPrincipleIndex === 1 && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-gray prose-lg max-w-none"
              >
                <p className="text-sm font-medium text-amber-600 uppercase tracking-wide mb-2">Principle 2</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Skin Is Not a Surface
                </h1>
                <p className="text-gray-500 mb-8">Understanding the layers</p>

                <p className="text-xl italic text-gray-600 text-center my-8">
                  "The surface may be thin, but it holds the light of youth."
                </p>

                <p>
                  The skin — it's your first defence and your last disguise.
                  The body's largest organ, the one thing you can't hide behind forever.
                  It tells stories: how you sleep, how you eat, what you worry about.
                </p>

                <p>
                  The epidermis, that paper-thin outer layer, carries all your secrets.
                  It reflects light, texture, and tone.
                  When it's healthy, even a tired face looks alive.
                  When it's dull, no amount of filler, no fancy device, no miracle serum can fake that light.
                </p>

                <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                  The Layers of Youth
                </h3>

                <p>
                  The epidermis is built from keratinocytes — tiny cells that live fast and die young.
                  They rise to the surface, harden, and form your armour.
                  When you're young, this happens every few weeks, like clockwork.
                  Then life happens. Time slows the cycle.
                  Dead cells hang around longer than they should, muting your glow.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 not-prose">
                  <p className="text-sm font-semibold text-gray-900">💡 Key Insight:</p>
                  <p className="text-gray-700 mt-1">
                    Think of your skin like glass — clarity depends on turnover, not thickness.
                  </p>
                </div>

                <p>
                  That's why at CosmeDocs, we don't start with needles; we start with renewal.
                  Peels, retinol, medical-grade skincare — they're not indulgence, they're hygiene for the soul of your skin.
                </p>

                <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                  Where Hydration Really Comes From
                </h3>

                <p className="text-xl italic text-gray-600">
                  "Moisture doesn't come from your cream — it comes from below."
                </p>

                <p>
                  Here's the truth nobody likes to hear:
                  Most dry skin isn't dehydrated — it's blocked.
                  Dead skin is dry skin. Water doesn't diffuse through dead cell layers — it can't.
                  Think of it like dead grass: you don't water it and hope for the best — you cut it off so new growth can breathe.
                </p>

                <p>
                  Your body already knows how to hydrate itself. Water rises from the dermis, through living tissue, to the surface.
                  But when dead cells pile up, they form a wall. You keep layering on moisturiser, and the skin keeps ignoring you —
                  because the moisture has nowhere to go and nowhere to come from.
                </p>

                <p>
                  The rest of your body handles this naturally. Clothes against the skin gently exfoliate as you move —
                  your arms, your legs, your torso — they shed dead cells constantly without you thinking about it.
                  The face doesn't get that luxury. It's exposed, unprotected, and accumulates faster than it sheds.
                </p>

                <p>
                  That's why at CosmeDocs, we don't just moisturise — we exfoliate.
                  AHAs, chemical peels, medical-grade resurfacing — we clear the dead layer so water can do what it was always meant to do: rise.
                  Real hydration starts when you stop blocking it.
                </p>

                <PauseAndThink principleId="skin-not-surface" />
                <RelatedTreatments principleId="skin-not-surface" />
              </motion.article>
            )}

            {/* Principle 3: Structure Before Lift */}
            {currentPrincipleIndex === 2 && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-gray prose-lg max-w-none"
              >
                <p className="text-sm font-medium text-amber-600 uppercase tracking-wide mb-2">Principle 3</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Structure Before Lift
                </h1>
                <p className="text-gray-500 mb-8">The dermis architecture</p>

                <p className="text-xl italic text-gray-600 text-center my-8">
                  "Beauty isn't skin deep — it's dermis deep."
                </p>

                <p>
                  If the epidermis is the skin you see in the mirror, the dermis is the one that quietly holds it up.
                  It's the scaffolding under the wallpaper — invisible until it starts to collapse.
                  This is where strength, bounce, and resilience live.
                  Lose this layer, and the surface starts begging for help.
                </p>

                <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                  The Scaffolding Beneath the Smile
                </h3>

                <p>
                  The dermis is where collagen and elastin hang out — the two best friends you took for granted your whole life.
                  Collagen gives firmness. Elastin gives snap.
                  Together, they're the reason a 25-year-old can stay up all night and still look alive in the morning.
                </p>

                <p>
                  Then the slow fade begins.
                  By your 30s, collagen starts packing its bags.
                  By your 40s, elastin follows.
                  Sunlight speeds it up. Sugar ruins it. Stress accelerates the exit.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 not-prose">
                  <p className="text-sm font-semibold text-gray-900">💡 Key Insight:</p>
                  <p className="text-gray-700 mt-1">
                    You don't age. You decompress.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                  Why Tightening Alone Doesn't Work
                </h3>

                <p>
                  Here's the dirty secret behind "skin tightening":
                  you can't tighten what isn't supported.
                  High-energy devices try to shrink collagen,
                  but if the fat below is gone and the ligaments are loose,
                  all you're doing is pulling on an empty tent.
                </p>

                <p>
                  That's why some people chase ultrasound, RF, lasers — and still look hollow.
                  They're fixing the wallpaper when the wall's already crumbling.
                </p>

                <p className="text-xl italic text-gray-600 text-center my-6">
                  "You can't heat your way out of lost volume."
                </p>

                <p>
                  At CosmeDocs, we rebuild from the foundation up.
                  Once the dermis has something to grip again — volume, hydration, structure —
                  it remembers how to hold you up.
                </p>

                <PauseAndThink principleId="structure-before-lift" />
                <RelatedTreatments principleId="structure-before-lift" />
              </motion.article>
            )}

            {/* Principle 4: The Volume Story */}
            {currentPrincipleIndex === 3 && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-gray prose-lg max-w-none"
              >
                <p className="text-sm font-medium text-amber-600 uppercase tracking-wide mb-2">Principle 4</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  The Volume Story
                </h1>
                <p className="text-gray-500 mb-8">Fat, muscle & the first signs of time</p>

                <p className="text-xl italic text-gray-600 text-center my-8">
                  "The third layer tells the truth — softly, then louder."
                </p>

                <p>
                  Beneath the dermis lies the soft layer — subcutaneous fat, fascia, muscle.
                  This is where the real shaping happens. Where your contours are born.
                  Cheekbones don't emerge from bone alone; they rise on pillows of fat that give softness to angles.
                </p>

                <p>
                  In youth, fat pads sit high and full — in the cheeks, temples, under the eyes, around the jawline.
                  They make the face look lifted without anyone lifting it.
                  The temples are plump. The under-eyes are seamless. The jawline flows without shadows.
                </p>

                <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                  What Happens When Fat Shifts
                </h3>

                <p>
                  Fat doesn't just disappear — it migrates. It slides. It pools where gravity calls.
                </p>

                <ul className="list-none space-y-3 my-6 pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">•</span>
                    <span>Upper cheeks deflate → nasolabial folds deepen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">•</span>
                    <span>Temples hollow → the forehead looks longer, harder</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">•</span>
                    <span>Jawline fat descends → jowls form, chin softens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">•</span>
                    <span>Under-eye fat separates → tear troughs appear</span>
                  </li>
                </ul>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 not-prose">
                  <p className="text-sm font-semibold text-gray-900">💡 Key Insight:</p>
                  <p className="text-gray-700 mt-1">
                    You don't lose youth. You lose distribution.
                  </p>
                </div>

                <p>
                  This is the layer most treatments ignore. Most lasers can't reach it. Most creams can't rebuild it.
                  Only strategic volumisation — filler placed where structure once was — can reverse the descent.
                </p>

                <PauseAndThink principleId="volume-story" />
                <RelatedTreatments principleId="volume-story" />
              </motion.article>
            )}

            {/* Principle 5: The Thirties Shift */}
            {currentPrincipleIndex === 4 && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-gray prose-lg max-w-none"
              >
                <p className="text-sm font-medium text-amber-600 uppercase tracking-wide mb-2">Principle 5</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  The Thirties Shift
                </h1>
                <p className="text-gray-500 mb-8">When structure changes</p>

                <p className="text-xl italic text-gray-600 text-center my-8">
                  "The thirties whisper what the forties will say out loud."
                </p>

                <p>
                  The thirties are when the mirror starts telling the truth.
                  Not harshly — just honestly.
                  You wake up with pillow creases that last longer. That line between your brows stopped leaving when you stopped frowning.
                  Something subtle shifted.
                </p>

                <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                  The First Signs
                </h3>

                <ul className="list-none space-y-3 my-6 pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">•</span>
                    <span>Collagen production slows by about 1% each year after 25</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">•</span>
                    <span>Bone resorption begins, especially around the eyes and jaw</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">•</span>
                    <span>Fat pads start to separate — the malar pad descends slightly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">•</span>
                    <span>Expression lines begin etching into the skin permanently</span>
                  </li>
                </ul>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 not-prose">
                  <p className="text-sm font-semibold text-gray-900">💡 Key Insight:</p>
                  <p className="text-gray-700 mt-1">
                    The thirties aren't about repair. They're about prevention with precision.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                  The Smart Approach
                </h3>

                <p>
                  This is when "baby Botox" makes sense — small doses to soften, not freeze.
                  Skin boosters to maintain hydration. SPF religiously. Retinol carefully.
                </p>

                <p>
                  The goal isn't to stop time. It's to age on your own terms.
                </p>

                <RelatedTreatments principleId="thirties-shift" />
              </motion.article>
            )}

            {/* Principle 6: The Forties Logic */}
            {currentPrincipleIndex === 5 && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-gray prose-lg max-w-none"
              >
                <p className="text-sm font-medium text-amber-600 uppercase tracking-wide mb-2">Principle 6</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  The Forties Logic
                </h1>
                <p className="text-gray-500 mb-8">The era of lift</p>

                <p className="text-xl italic text-gray-600 text-center my-8">
                  "The forties demand strategy, not just products."
                </p>

                <p>
                  By now, the whispers have become statements.
                  Jowls are forming. The jawline isn't as sharp.
                  Eyelids feel heavier. Nasolabial folds have settled in permanently.
                </p>

                <p>
                  This is when the face needs more than surface treatments.
                  It needs architecture — strategic volume, calculated lift, intelligent relaxation of overworked muscles.
                </p>

                <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                  The 40s Treatment Philosophy
                </h3>

                <ul className="list-none space-y-3 my-6 pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">1.</span>
                    <span><strong>Restore volume first</strong> — cheeks, temples, under-eyes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">2.</span>
                    <span><strong>Lift strategically</strong> — threads, targeted filler placement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">3.</span>
                    <span><strong>Relax selectively</strong> — Botox where tension creates lines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">4.</span>
                    <span><strong>Rebuild skin quality</strong> — Profhilo, polynucleotides</span>
                  </li>
                </ul>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 not-prose">
                  <p className="text-sm font-semibold text-gray-900">💡 Key Insight:</p>
                  <p className="text-gray-700 mt-1">
                    The 40s require a plan, not a product. Each treatment should support the next.
                  </p>
                </div>

                <RelatedTreatments principleId="forties-lift" />
              </motion.article>
            )}

            {/* Principle 7: The Fifties Elegance */}
            {currentPrincipleIndex === 6 && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-gray prose-lg max-w-none"
              >
                <p className="text-sm font-medium text-amber-600 uppercase tracking-wide mb-2">Principle 7</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  The Fifties Elegance
                </h1>
                <p className="text-gray-500 mb-8">Elasticity & energy</p>

                <p className="text-xl italic text-gray-600 text-center my-8">
                  "The fifties are about elegance, not erasure."
                </p>

                <p>
                  By fifty, you know your face. You've lived in it.
                  The question isn't "how do I look younger?" — it's "how do I look like the best version of myself?"
                </p>

                <p>
                  Skin laxity is more pronounced. The neck may need attention.
                  Perioral lines appear. Marionette lines deepen.
                  But there's also something beautiful: character, confidence, wisdom lines.
                </p>

                <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                  The 50s Philosophy
                </h3>

                <ul className="list-none space-y-3 my-6 pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">•</span>
                    <span><strong>Global approach</strong> — treat face, neck, décolletage together</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">•</span>
                    <span><strong>Skin resurfacing</strong> — lasers for texture, tone, sun damage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">•</span>
                    <span><strong>Surgical consideration</strong> — when non-surgical reaches its limits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">•</span>
                    <span><strong>Maintenance mindset</strong> — regular touch-ups over dramatic interventions</span>
                  </li>
                </ul>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 not-prose">
                  <p className="text-sm font-semibold text-gray-900">💡 Key Insight:</p>
                  <p className="text-gray-700 mt-1">
                    The goal is harmony, not youth. Looking refreshed, not changed.
                  </p>
                </div>

                <RelatedTreatments principleId="fifties-elegance" />
              </motion.article>
            )}

            {/* Principle 8: When Not to Treat */}
            {currentPrincipleIndex === 7 && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-gray prose-lg max-w-none"
              >
                <p className="text-sm font-medium text-amber-600 uppercase tracking-wide mb-2">Principle 8</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  When Not to Treat
                </h1>
                <p className="text-gray-500 mb-8">The wisdom of restraint</p>

                <p className="text-xl italic text-gray-600 text-center my-8">
                  "Sometimes the best treatment is no treatment."
                </p>

                <p>
                  This might be the most important principle of all.
                  Not everything needs fixing. Not every line is a problem.
                  Some faces are chased into looking worse by practitioners who can't say no.
                </p>

                <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                  Signs You Don't Need Treatment
                </h3>

                <ul className="list-none space-y-3 my-6 pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl">✗</span>
                    <span>You want to look like someone else</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl">✗</span>
                    <span>You're chasing a filter or Photoshop version of yourself</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl">✗</span>
                    <span>The "problem" only exists in bad lighting or extreme close-ups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl">✗</span>
                    <span>You've had treatment recently and want "just a little more"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl">✗</span>
                    <span>You're making the decision emotionally, not rationally</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                  Signs Treatment Might Help
                </h3>

                <ul className="list-none space-y-3 my-6 pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-xl">✓</span>
                    <span>You look tired when you're not</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-xl">✓</span>
                    <span>Your reflection doesn't match how you feel inside</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-xl">✓</span>
                    <span>You want subtle enhancement, not transformation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-xl">✓</span>
                    <span>You've researched and understand what's realistic</span>
                  </li>
                </ul>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 not-prose">
                  <p className="text-sm font-semibold text-gray-900">💡 Key Insight:</p>
                  <p className="text-gray-700 mt-1">
                    At CosmeDocs, we're proud of the treatments we don't do as much as the ones we do.
                  </p>
                </div>

                <RelatedTreatments principleId="when-not-to-treat" />
              </motion.article>
            )}

            {/* Principle 9: Core Principles */}
            {currentPrincipleIndex === 8 && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-gray prose-lg max-w-none"
              >
                <p className="text-sm font-medium text-amber-600 uppercase tracking-wide mb-2">Principle 9</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Core Principles
                </h1>
                <p className="text-gray-500 mb-8">The CosmeDocs philosophy</p>

                <p className="text-xl italic text-gray-600 text-center my-8">
                  "Our aesthetics is invisible art."
                </p>

                <p>
                  After everything you've read, here are the principles we live by at CosmeDocs.
                  They're not trends. They're not marketing. They're the foundation of everything we do.
                </p>

                <div className="space-y-6 my-10">
                  <div className="bg-gray-900 text-white p-6 rounded-xl">
                    <p className="text-amber-400 font-semibold mb-2">1. Anatomy First</p>
                    <p className="text-gray-300 m-0">Understand the structure before reaching for the syringe.</p>
                  </div>
                  
                  <div className="bg-gray-900 text-white p-6 rounded-xl">
                    <p className="text-amber-400 font-semibold mb-2">2. Depth Matters</p>
                    <p className="text-gray-300 m-0">The right treatment at the wrong depth is the wrong treatment.</p>
                  </div>
                  
                  <div className="bg-gray-900 text-white p-6 rounded-xl">
                    <p className="text-amber-400 font-semibold mb-2">3. Less is More</p>
                    <p className="text-gray-300 m-0">Subtlety is a skill. Restraint is a virtue.</p>
                  </div>
                  
                  <div className="bg-gray-900 text-white p-6 rounded-xl">
                    <p className="text-amber-400 font-semibold mb-2">4. Build, Don't Patch</p>
                    <p className="text-gray-300 m-0">Restore the foundation. The surface will follow.</p>
                  </div>
                  
                  <div className="bg-gray-900 text-white p-6 rounded-xl">
                    <p className="text-amber-400 font-semibold mb-2">5. You, But Refined</p>
                    <p className="text-gray-300 m-0">The goal is always enhancement, never replacement.</p>
                  </div>
                </div>

                <blockquote className="border-l-4 border-amber-500 pl-6 italic text-xl my-8 text-gray-800">
                  "Quiet, not loud. Invisible, not exaggerated. Transformation that speaks — without saying a word."
                </blockquote>

                <RelatedTreatments principleId="core-principles" />
              </motion.article>
            )}

            {/* Navigation - Only show when viewing principles */}
            {currentPrincipleIndex >= 0 && (
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
                <Button
                  onClick={handlePrevious}
                  variant="outline"
                  className="gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  {currentPrincipleIndex === 0 ? "Back to Start" : "Previous"}
                </Button>

                {currentPrincipleIndex < principles.length - 1 && (
                  <Button
                    onClick={handleNext}
                    className="gap-2 bg-gray-900 hover:bg-amber-600"
                  >
                    Next Principle
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
