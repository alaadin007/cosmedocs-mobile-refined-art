import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateSEOMetadata } from "@/utils/seo";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface Chapter {
  id: string;
  title: string;
  subtitle: string;
}

const allSections = [
  { id: "preface", title: "Preface", subtitle: "The Art of Depth", type: "preface" },
];

const chapters: Chapter[] = [
  {
    id: "chapter-1",
    title: "Chapter 1",
    subtitle: "The Epidermis: The Foundation of All Skin Health",
  },
  { id: "chapter-2", title: "Chapter 2", subtitle: "The Dermis: The Architecture of Youth" },
  
  {
    id: "chapter-3",
    title: "Chapter 3",
    subtitle: "The Subcutaneous Layer: Fat, Muscle & the First Signs of Time",
  },
  {
    id: "chapter-4",
    title: "Chapter 4",
    subtitle: "The Thirties: The Age of Shift and Structure",
  },
  { id: "chapter-5", title: "Chapter 5", subtitle: "The Forties: The Era of Lift and Logic" },
  { id: "chapter-6", title: "Chapter 6", subtitle: "The Fifties: Elegance, Elasticity & Energy" },
  {
    id: "epilogue",
    title: "Epilogue",
    subtitle: "The Philosophy of Aesthetics: What We Learned from Faces",
  },
  {
    id: "postscript",
    title: "Postscript",
    subtitle: "The Core Principles of Aesthetic Medicine",
  },
  {
    id: "about-author",
    title: "About the Author",
    subtitle: "The Philosophy of Cosmedocs",
  },
];

export default function AestheticTreatmentsMadeEasy() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const allChapterSections = [...allSections, ...chapters];

  // Close sidebar on mobile by default, open on desktop
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
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentChapterIndex < allChapterSections.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentSection = allChapterSections[currentChapterIndex];

  const seo = generateSEOMetadata(
    "Aesthetic Treatments Made Easy - CosmeDocs Educational Guide",
    "Comprehensive guide to aesthetic treatments and facial anatomy. Learn the science behind skin rejuvenation, dermal fillers, and non-surgical procedures from leading aesthetic practitioners.",
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
        
        {/* Additional SEO keywords */}
        <meta name="keywords" content="aesthetic treatments, aesthetic procedures, facial anatomy, skin rejuvenation, dermal fillers, non-surgical procedures, cosmetic medicine, aesthetic education, beauty treatments, anti-ageing treatments" />
        
        {/* Structured data for educational content */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: "Aesthetic Treatments Made Easy",
            author: {
              "@type": "Organization",
              name: "CosmeDocs",
            },
            description: seo.description,
            genre: "Medical Education",
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
                    <BookOpen className="h-5 w-5 text-gray-700" />
                    <h2 className="font-semibold text-lg text-gray-900">Aesthetic Talk</h2>
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

                {/* Preface Section */}
                <button
                  onClick={() => {
                    setCurrentChapterIndex(0);
                    setSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${
                    currentChapterIndex === 0
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                >
                  <div>
                    <div className="font-semibold">Preface</div>
                    <div className="text-xs opacity-80">The Art of Depth</div>
                  </div>
                </button>

                {/* Chapters */}
                <div className="space-y-1 mt-4">
                  {chapters.map((chapter, idx) => (
                    <button
                      key={chapter.id}
                      data-section={chapter.id}
                      onClick={() => {
                        setCurrentChapterIndex(1 + idx);
                        setSidebarOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        currentChapterIndex === 1 + idx
                          ? "bg-gray-200 text-gray-900"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <div className="font-semibold text-sm">{chapter.title}</div>
                      <div className="text-xs text-gray-600 mt-1">
                        {chapter.subtitle}
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
          className="hidden md:block md:w-64 border-r border-gray-200 bg-gray-50 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="p-4">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-5 w-5 text-gray-700" />
              <h2 className="font-semibold text-lg text-gray-900">Aesthetic Talk</h2>
            </div>

            {/* Preface Section */}
            <button
              onClick={() => setCurrentChapterIndex(0)}
              className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${
                currentChapterIndex === 0
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              }`}
            >
              <div>
                <div className="font-semibold">Preface</div>
                <div className="text-xs opacity-80">The Art of Depth</div>
              </div>
            </button>

            {/* Chapters */}
            <div className="space-y-1 mt-4">
              {chapters.map((chapter, idx) => (
                <button
                  key={chapter.id}
                  data-section={chapter.id}
                  onClick={() => setCurrentChapterIndex(1 + idx)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    currentChapterIndex === 1 + idx
                      ? "bg-gray-200 text-gray-900"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <div className="font-semibold text-sm">{chapter.title}</div>
                  <div className="text-xs text-gray-600 mt-1">
                    {chapter.subtitle}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white relative">
          {/* Sidebar Toggle Button - Only on mobile */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden fixed top-20 left-4 z-50 p-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg hover:bg-orange-600 transition-colors"
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          >
            <Menu className="h-5 w-5 text-white" />
          </button>

          <div className="max-w-4xl mx-auto px-8 py-12">
            {/* Back Button */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Link>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Aesthetic Treatments Made Easy
            </h1>
            <p className="text-xl text-gray-600 italic mb-6">
              Don't believe advice, trust education
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
              <span>By Dr. Ahmed Haq & Ai Team</span>
              <span>•</span>
              <span>Educational Guide</span>
              <span>•</span>
              <span>15 min read</span>
            </div>

            {/* Chapter Navigation */}
            <div className="flex items-center justify-between mb-8">
              <Button
                onClick={handlePrevious}
                disabled={currentChapterIndex === 0}
                variant="outline"
                className="gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <span className="text-sm text-gray-600">
                {currentChapterIndex + 1} of {allChapterSections.length}
              </span>

              <Button
                onClick={handleNext}
                disabled={currentChapterIndex === allChapterSections.length - 1}
                variant="outline"
                className="gap-2"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Content */}
            <article className="prose prose-gray prose-lg max-w-none">
              {currentChapterIndex === 0 && (
              <>
              <section id="preface" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Preface</h2>
                <p className="text-gray-600 italic">The Art of Depth</p>
              </section>
              
              <section id="preface-intro" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  The Philosophy — Why You Need to Read This
                </h2>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-xl text-center italic text-gray-600">
                    🖤 "You can't fix what you don't understand."
                  </p>

                  <p>
                    Every few months, the industry throws another miracle at you — ultrasound this, radiofrequency that, a laser with a colour name to make it sound scientific.
                    They promise lift, glow, youth, redemption.
                  </p>

                  <p>
                    Here's the problem: your skin didn't suddenly forget how to be skin.
                    Biology didn't change — marketing did.
                  </p>

                  <p>
                    If you don't know what sits under your skin, you'll keep buying what sparkles.
                    But when you do know, you start to see the patterns — where time took, what never needed fixing, and what you've been trying to replace with hashtags.
                  </p>

                  <p className="font-semibold text-gray-900">
                    At CosmeDocs, we don't chase trends. We chase truth.
                    <br />
                    Anatomy, not algorithms. Logic, not luck.
                  </p>

                  <p>
                    This isn't a manual about treatments. It's a field guide to understanding yourself before someone sells you yourself back.
                  </p>

                  <p>
                    So, take a breath. Forget the noise.
                    <br />
                    Let's start with what's real.
                  </p>
                </div>
              </section>

              <section id="art-of-depth" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  The Modern Face of Aesthetics
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-xl text-center italic text-gray-600">
                    💬 "The face isn't a project; it's a relationship."
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
                      <span className="text-gray-900 font-bold text-xl">•</span>
                      <span><strong className="text-gray-900">Epidermis</strong> — where renewal happens.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold text-xl">•</span>
                      <span><strong className="text-gray-900">Dermis</strong> — where strength lives.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold text-xl">•</span>
                      <span><strong className="text-gray-900">Fat pads</strong> — where contour hides.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold text-xl">•</span>
                      <span><strong className="text-gray-900">Ligaments</strong> — the truth about lift.</span>
                    </li>
                  </ul>

                  <p>
                    Once you know the layers, the rest is common sense dressed as science.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Sticky Thought:</p>
                    <p className="text-gray-700 mt-1">
                      Trends change every quarter. Anatomy hasn't updated in a few million years.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Beyond Marketing, Back to Medicine
                  </h3>

                  <p>
                    Medicine is supposed to heal, not entertain.
                    Yet half the industry sells adrenaline instead of anatomy.
                    We'd rather stay boring — grounded in what works.
                  </p>

                  <p>
                    At CosmeDocs, we don't worship the syringe or the laser.
                    We respect the biology they serve.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Promise of This Journey
                  </h3>

                  <p>
                    You'll start to see how everything connects — how folds come from cheeks, how eye bags come from ligaments, how "texture" often just means tired cells.
                    And sometimes, the most intelligent move is doing nothing at all.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                  🖤 "Sometimes the best treatment is restraint."
                  </p>
                </div>
              </section>

              <section id="apple-analogy" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  The Art of Depth — Why Depth Defines Natural Results
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    When people talk about ageing, they point at the surface.
                    Lines, texture, shadows.
                    But the surface is just the mirror — the story's written underneath.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Apple Analogy
                  </h3>

                  <p className="text-xl italic text-gray-600">
                    🍎 "Your face is an apple — the secret's in the flesh, not the peel."
                  </p>

                  <p>
                    Picture an apple.
                    The skin is your face — two millimetres of truth.
                    Beneath it is the yellow part — fat, fascia, the soft stuff that keeps you round and alive.
                    The core is your bone structure and ligaments — the frame.
                  </p>

                  <p>
                    When the apple's full, the skin is tight and shiny.
                    As it dehydrates, the skin wrinkles.
                    You can polish it, heat it, laser it — it'll still sink, because what's gone is inside.
                  </p>

                  <p className="font-semibold text-gray-900">
                    That's the whole game of ageing.
                    Lose the yellow, the red caves in.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Post-It Thought:</p>
                    <p className="text-gray-700 mt-1">
                      Lasers treat the peel. Fillers rebuild the fruit. Wisdom knows which one you need.
                    </p>
                  </div>
                </div>
              </section>

              <section id="energy-devices" className="mb-16">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  When Energy Devices Help — and When They Don't
                </h3>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    If your problem's on the surface, sure — laser away.
                    But when your volume's gone, no energy from above is going to refill what gravity stole.
                    That's not cynicism; that's anatomy.
                  </p>

                  <p>
                    At CosmeDocs, we treat by depth, not by brand name.
                    Every tool has a layer.
                    Use the wrong depth, and you're fighting the wrong war.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    ⚖️ "Depth decides everything — beauty, safety, and sanity."
                  </p>
                </div>
              </section>

              <section id="balance" className="mb-16">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  The Balance Between Skin and Structure
                </h3>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Good results are like good writing — balanced, unforced, layered.
                    The skin glows because the foundation's steady.
                    The filler looks natural because the skin above it's alive.
                  </p>

                  <p>
                    Most "overdone" faces happen when people chase lift at the wrong level —
                    filling where they should rebuild, lasering what never needed fixing.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Sticky Note:</p>
                    <p className="text-gray-700 mt-1">
                      Restore first. Refine next. Respect always.
                    </p>
                  </div>
                </div>
              </section>

              <section id="simpler-words" className="mb-16">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  In Simpler Words
                </h3>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-xl italic text-gray-600 text-center">
                    If the skin is the story,<br />
                    the depth is the truth.
                  </p>

                  <p>
                    We work bottom-up.
                    No cream, no gadget, no hype replaces lost foundation.
                    Rebuild intelligently and the skin finds its way home.
                  </p>

                  <blockquote className="border-l-4 border-gray-900 pl-6 italic text-xl my-8 text-gray-800">
                    "You cannot restore what you do not understand."
                  </blockquote>
                </div>
              </section>
              </>
              )}

              {/* Chapter 1 - Full Content */}
              {currentChapterIndex === 1 && (
              <section id="chapter-1" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Chapter 1 — The Epidermis: The Foundation of All Skin Health
                </h2>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                  <p className="text-2xl text-center italic text-gray-600">
                    🌙 "The surface may be thin, but it holds the light of youth."
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

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Post-It Tip:</p>
                    <p className="text-gray-700 mt-1">
                      Think of your skin like glass — clarity depends on turnover, not thickness.
                    </p>
                  </div>

                  <p>
                    That's why at CosmeDocs, we don't start with needles; we start with renewal.
                    Peels, retinol, medical-grade skincare — they're not indulgence, they're hygiene for the soul of your skin.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Melanocytes — The Artists of the Epidermis
                  </h3>

                  <p className="text-xl italic text-gray-600">
                    🎨 "Every skin tone is a painting; melanocytes hold the brush."
                  </p>

                  <p>
                    These tiny cells decide how you face the world.
                    When they're calm, they paint evenly.
                    When they panic — from sun, stress, hormones, heat — they blot, stain, and smudge.
                    You see it as uneven tone, dark spots, that post-inflammatory memory your skin refuses to forget.
                  </p>

                  <p>
                    For darker or mixed skin tones, we play it slow.
                    We calm the artists before handing them the brush.
                    Kojic acid, hydroquinone, retinol — gentle persuasion before the heavy machinery comes in.
                  </p>

                  <p>
                    Because quick results? They burn bright and fade fast.
                    Cellular calm — that's where the long game lives.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Epidermis and Osmosis — Where Water Lives
                  </h3>

                  <p className="text-xl italic text-gray-600">
                    💧 "Moisture doesn't come from your cream — it comes from below."
                  </p>

                  <p>
                    Here's the truth nobody likes to hear:
                    Most dry skin isn't dehydrated — it's blocked.
                    When dead cells pile up, water from the dermis can't reach the surface.
                    So you keep adding more moisturiser, and the skin keeps ignoring you.
                  </p>

                  <p>
                    At CosmeDocs, we take a different route — we clear the traffic.
                    We gently strip the barrier, allowing the water to flow up again.
                    Real hydration happens when the skin starts breathing.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Post-It Tip:</p>
                    <p className="text-gray-700 mt-1">
                      Don't just add — unblock.
                      Renewal brings more hydration than any heavy cream.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Our Philosophy — Treat the Surface with Respect
                  </h3>

                  <p>
                    A luminous face isn't born from volume; it's born from vitality.
                    Light reflects off skin that's alive, not stuffed.
                    Before we lift, before we fill, before we even think about tightening — we honour the canvas.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    ✨ "Before the art, honour the canvas."
                  </p>

                  <p>
                    Because when the surface is breathing, every deeper treatment performs better and looks more like you — just a version that remembered how to glow.
                  </p>
                </div>
              </section>
              )}

              {/* Chapter 2 - Full Content */}
              {currentChapterIndex === 2 && (
              <section id="chapter-2" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Chapter 2 — The Dermis: The Architecture of Youth
                </h2>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                  <p className="text-2xl text-center italic text-gray-600">
                    🏗️ "Beauty isn't skin deep — it's dermis deep."
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

                  <p>
                    You don't feel it happening — until one day your reflection looks tired, even when you're not.
                    That's not emotion. That's architecture.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Post-It Thought:</p>
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
                    💬 "You can't heat your way out of lost volume."
                  </p>

                  <p>
                    At CosmeDocs, we rebuild from the foundation up.
                    Once the dermis has something to grip again — volume, hydration, structure —
                    it remembers how to hold you up.
                  </p>

                  <p>
                    That's what "lifting" really is.
                    Not pulling tighter, but rebuilding smarter.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Collagen — The Builder
                  </h3>

                  <p>
                    Collagen's a bit like trust — hard to earn, easy to lose.
                    You can't trick your body into making it overnight.
                    You have to give it reason and resources.
                    Vitamin C, retinol, peptides, and a clean dermis to work in —
                    that's how collagen gets the memo.
                  </p>

                  <p>
                    It's not about "stimulating" it once with a fancy device.
                    It's about feeding the system that makes it every day.
                    You don't go to the gym once and call it fitness.
                    Same logic applies here.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Post-It Tip:</p>
                    <p className="text-gray-700 mt-1">
                      Collagen doesn't need noise. It needs consistency.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Elastin — The Forgotten Hero
                  </h3>

                  <p>
                    Collagen gets the headlines, but elastin is the quiet genius.
                    It's what lets your skin stretch when you laugh and snap back when you stop.
                    When elastin breaks down, faces don't fall — they melt.
                    The cheeks drift south, the jawline softens, the neck forgets its line.
                  </p>

                  <p>
                    Most devices promise to "boost elastin."
                    Few actually can.
                    The best way to protect it?
                    Don't destroy it in the first place.
                    That means: less sun, less smoke, less chaos.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💭 "If collagen is the beam, elastin is the spring."
                  </p>

                  <p>
                    Lose either, and the house doesn't collapse — it just starts to sigh.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Blood Flow — The Forgotten Symphony
                  </h3>

                  <p>
                    The dermis is also where your blood supply lives —
                    tiny capillaries carrying oxygen, warmth, and colour.
                    That pink, healthy glow? That's blood, not makeup.
                    Lose circulation, and everything dulls — skin tone, healing, even mood.
                  </p>

                  <p>
                    We often underestimate how much lifestyle writes itself onto your dermis.
                    Good sleep, good food, low stress — cliché, yes, but anatomy doesn't lie.
                    You can't out-inject bad circulation.
                    You can only live better skin from the inside out.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Sticky Note:</p>
                    <p className="text-gray-700 mt-1">
                      Your face doesn't glow from skincare. It glows from oxygen.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Quiet Truth
                  </h3>

                  <p>
                    The dermis isn't glamorous.
                    It's not where filters live.
                    It's where the truth of your skin hides.
                  </p>

                  <p>
                    Every time you break it, stretch it, stress it, or starve it — it remembers.
                    Every time you feed it, heal it, or protect it — it forgives.
                  </p>

                  <p>
                    That's the contract.
                    That's the architecture of youth.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    ✨ "Treat your dermis like you treat your character — build it quietly, strengthen it daily, and it will hold you when everything else sags."
                  </p>
                </div>
              </section>
              )}

              {/* Chapter 3 - Full Content */}
              {currentChapterIndex === 3 && (
              <section id="chapter-3" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Chapter 3 — The Subcutaneous Layer: Fat, Muscle & the First Signs of Time
                </h2>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                  <p className="text-2xl text-center italic text-gray-600">
                    🔥 "You don't wake up old. It happens slowly, quietly — like a song fading out."
                  </p>

                  <p>
                    After your twenties, things start to shift — not enough to panic, but enough to notice.
                    One morning, your skin feels the same, but makeup doesn't sit right.
                    Your reflection looks familiar, but something's off.
                    That's not imagination. That's biology catching up.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Fibroblast Slowdown
                  </h3>

                  <p>
                    Here's the part no one tells you in your early twenties:
                    you start using collagen faster than you make it.
                    Your fibroblasts — the little engines that build collagen and elastin — slow down like an overworked band after the encore.
                    By your mid-twenties, they're running at one-third of their teenage rhythm.
                  </p>

                  <p>
                    That's when lines that used to vanish when you relaxed start hanging around.
                    The frown, the forehead, the crow's feet — they start writing permanent notes on your skin.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "Sometimes it's only a year or two between temporary and permanent."
                  </p>

                  <p>
                    This is where Botox earns its reputation — not as vanity, but as strategy.
                    If lines appear only with movement, Botox is prevention.
                    If they stay when you're still, it's treatment.
                  </p>

                  <p>
                    It doesn't freeze expression; it just gives your skin a break.
                    Think of it as a reset for the upper and lower face — frown, crow's feet, forehead, chin, mouth corners — letting your skin remember smooth again.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Post-It Tip:</p>
                    <p className="text-gray-700 mt-1">
                      Botox isn't freezing time. It's slowing it to your rhythm.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Fibroblast Reactivation — Retinol & Tretinoin
                  </h3>

                  <p>
                    If Botox calms the muscles, retinoids wake the builders.
                    Retinol and tretinoin — vitamin A's smarter cousins — don't fill, peel, or fake.
                    They retrain fibroblasts to work like they used to.
                  </p>

                  <p>
                    Used consistently, they help skin remember how to make new collagen and elastin, refine texture, and smooth fine lines from within.
                    It's not a quick win — it's cellular discipline.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "Retinoids don't work fast; they work forever."
                  </p>

                  <p>
                    Go slow, start light, stay steady.
                    That's how you keep fibroblasts alive and loyal long after your twenties clock out.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Post-It Thought:</p>
                    <p className="text-gray-700 mt-1">
                      Feed the fibroblasts; don't frighten them.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Fat: The Silent Sculptor
                  </h3>

                  <p>
                    Your face isn't flat — it's a 3-D landscape built on fat compartments.
                    Each one gives contour, balance, and softness.
                    In youth, they're firm, round, sitting exactly where nature intended.
                    By your late twenties, they start to shrink and shift.
                  </p>

                  <p>
                    The under-eye hollows, the cheeks deflate, and the lid-cheek junction widens.
                    That shadow under your eye? It's not fatigue.
                    It's support loss.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Sticky Thought:</p>
                    <p className="text-gray-700 mt-1">
                      You didn't get older. You lost scaffolding.
                    </p>
                  </div>

                  <p>
                    That's where fillers come in — not to change you, but to quietly replace structure.
                    A touch in the cheeks restores lift; a whisper in the lips brings back hydration and shape.
                    Lips are fullest between 16 and 18 — after that, volume slips away.
                    We don't inflate them; we just rewind them a little.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "Filler done right doesn't add — it reminds."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Filler Migration — The Social Media Myth
                  </h3>

                  <p>
                    Let's talk about the elephant in your algorithm.
                    Filler didn't "migrate" to your temple overnight.
                    It was put in the wrong place.
                  </p>

                  <p>
                    Fat compartments are like rooms with walls.
                    Inject too much, too deep, or outside the room, and filler finds the path of least resistance — gravity and pressure do the rest.
                    That's not migration; that's bad mapping.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Post-It Truth:</p>
                    <p className="text-gray-700 mt-1">
                      Good filler doesn't move — bad judgement does.
                    </p>
                  </div>

                  <p>
                    At CosmeDocs, we don't chase hollows. We follow anatomy.
                    That's why our results look natural six months later — not swollen, not strange, just balanced.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Muscle: The Repetitive Artist
                  </h3>

                  <p>
                    While fat fades, muscle remembers.
                    Every smile, frown, squint, pout — repetition carves memory into motion.
                    Over time, the upper face writes fine lines from emotion; the lower face writes them from gravity and habit.
                  </p>

                  <p>
                    You're not "ageing." You're repeating.
                  </p>

                  <p>
                    Botox breaks the loop — softens the upper face (frown, crow's feet, forehead) and calms the lower face (chin dimples, downturning corners).
                    Muscles relax, skin heals, filler lasts longer, and the face stops looking tense for no reason.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Post-It Tip:</p>
                    <p className="text-gray-700 mt-1">
                      If you can't stop frowning, teach your muscles to forget.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Truth About Fillers — The Tool, Not the Villain
                  </h3>

                  <p className="text-xl italic text-gray-600">
                    💉 "Fillers aren't the problem. Bad hands are."
                  </p>

                  <p>
                    Let's stop pretending filler is evil.
                    It's not.
                    It's Hyaluronic Acid — a soft, natural sugar gel that lives in your own skin.
                    It attracts water, restores shape, and when used right, it's actually softer than fat.
                  </p>

                  <p>
                    So why the horror stories?
                    Because bad injectors chase trends instead of proportion.
                    They pump too much into the lips, overload the cheeks, and forget the jawline.
                    You end up with a face that's 25 up top and 45 down below.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Post-It Thought:</p>
                    <p className="text-gray-700 mt-1">
                      For every bad filler face you've seen, ten thousand good ones walked right past you.
                    </p>
                  </div>

                  <p>
                    The problem isn't filler.
                    It's maths — wrong ratios, wrong balance.
                    True artistry lives in micromillimetres: the quiet corrections around the mouth, jaw, and temple that make a face look alive again.
                    Get those right, and the whole face shifts from tired to timeless.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "It's not about how much you add. It's about where you stop."
                  </p>

                  <p>
                    A great injector doesn't fill — they sculpt.
                    They restore direction, not just volume.
                    The aim is harmony, not hype.
                    That's why filler at CosmeDocs doesn't look "done."
                    It looks right.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "Good filler doesn't change who you are — it reminds you who you were."
                  </p>

                  <p>
                    So don't cancel the tool because someone used it wrong.
                    You wouldn't blame a scalpel for a bad scar.
                    Blame the surgeon.
                    Sometimes, yes, blame the patient too — the one who asked for "more" when "enough" was already beautiful.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    ✨ "In the right hands, filler isn't vanity. It's precision."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Skin: The Mirror Between Fat & Feeling
                  </h3>

                  <p>
                    As all this happens underneath, the skin above starts whispering for help.
                    Texture roughens, tone dulls, sensitivity creeps in.
                    You start noticing that your neck looks better than your face — because the neck stayed out of the sun and drama.
                  </p>

                  <p>
                    Most people respond with more makeup.
                    But what hides your glow isn't pigment — it's dead skin.
                    Exfoliate it off, let the epidermis breathe again, and suddenly your reflection catches the light the way it used to.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "Youth isn't something you add. It's what appears when you stop hiding behind damage."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Goal
                  </h3>

                  <p>
                    Your twenties aren't about transformation — they're about preservation.
                    Keep fibroblasts alive with retinoids.
                    Keep muscles relaxed with Botox.
                    Keep volume honest with subtle filler.
                    Keep skin fresh with renewal, not disguise.
                  </p>

                  <p>
                    We're not trying to make you look eighteen again.
                    We're helping you look mid-twenties for longer — quietly, naturally, logically.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    ✨ "Stay subtle. Stay soft. Stay twenty-something longer than nature planned."
                  </p>
                </div>
              </section>
              )}

              {/* Chapter 4 - Full Content */}
              {currentChapterIndex === 4 && (
              <section id="chapter-4" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Chapter 4 — The Thirties: The Age of Shift and Structure
                </h2>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                  <p className="text-2xl text-center italic text-gray-600">
                    ⚖️ "Your twenties were about holding the line. Your thirties are about redrawing it."
                  </p>

                  <p>
                    This is the decade where gravity starts whispering, collagen gives up negotiations, and restraint becomes your new best friend.
                    You still look good — you just don't wake up automatically good anymore.
                    It's the age where skincare stops being a hobby and starts being strategy.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Face Starts Talking Back
                  </h3>

                  <p>
                    You can't treat all faces the same anymore — because not all faces age the same.
                    Now we start to look deeper, analytically.
                    Is the face oval and slim, or round and heavy?
                    Because what you lose and what you need depends entirely on your shape.
                  </p>

                  <p>
                    Slim, oval faces — they sink.
                    Volume loss shows early. The mid-face flattens, under-eyes hollow, temples thin out.
                    These faces age like paper — delicate, detailed, and quick to show change.
                  </p>

                  <p>
                    Round, heavier faces — they sag.
                    Fat is still there, but gravity starts to pull the scaffolding south.
                    You get softness, droop, early jowls, and blurred contours.
                    They age slower at first — but when the drop happens, it's fast.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Post-It Thought:</p>
                    <p className="text-gray-700 mt-1">
                      Slim faces fall in love with volume.
                      Round faces fall out with gravity.
                    </p>
                  </div>

                  <p>
                    Both shapes have advantages.
                    Smaller faces might look a touch older when they're young, but they stay like that for a long time.
                    Heavier faces look youthful early on — then wake up one day and realise everything slid half an inch lower.
                    The trick isn't fighting it. It's understanding it.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Skin in Its Thirties — The Quiet Rebel
                  </h3>

                  <p>
                    In your thirties, skin becomes stubborn.
                    The renewal rate drops again. Pores get louder. Pigmentation gets bolder.
                    This is where microneedling, skin peels, and strong retinoids stop being options — they become maintenance tools.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "By thirty, your skin doesn't need more makeup. It needs more discipline."
                  </p>

                  <p>
                    We push the skin harder now — deeper exfoliation, collagen stimulation, and cellular turnover.
                    Tretinoin becomes the gold standard — the real deal of vitamin A.
                    It keeps fibroblasts active, rebuilds collagen, and pushes skin to behave like it did a decade ago.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Post-It Tip:</p>
                    <p className="text-gray-700 mt-1">
                      Retinol was your warm-up. Tretinoin is your training.
                    </p>
                  </div>

                  <p>
                    Microneedling wakes up the dermis from below; peels clear the epidermis from above.
                    Together, they remind the skin that it still knows how to heal.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Sensitised Skin — When Too Much Becomes the Problem
                  </h3>

                  <p>
                    This is also the decade when everyone becomes a skincare expert — or so Instagram says.
                    You've tried everything: the "glow" serums, the miracle foundations, hydrating masks, vitamin C's from five different brands, and a moisturiser that costs more than rent.
                    Maybe even that tiny jar of Crème de la Mer you bought in a moment of faith and fear.
                  </p>

                  <p>
                    And now? The skin's not glowing — it's reacting.
                    Tingling, flushing, redness, tightness — not real sensitivity, but sensitised skin.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "Your skin's not delicate — it's exhausted."
                  </p>

                  <p>
                    It's not born sensitive. It's been irritated into fragility by hundreds of chemicals layered over time.
                    Too much exfoliation. Too much perfume. Too much "science."
                    You tried to fix your skin with everything, and now it just wants silence.
                  </p>

                  <p>
                    We know how to fix that too.
                    We strip it back to basics: no fragrance, no scrubs, no actives for a few weeks.
                    We calm the barrier, feed the microbiome, rebuild its trust.
                    Then — and only then — we reintroduce what truly matters: retinoids, hydration, and protection.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Post-It Reminder:</p>
                    <p className="text-gray-700 mt-1">
                      Good skin isn't built by more products. It's built by smarter restraint.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Volume, Angles, and the Law of Proportion
                  </h3>

                  <p>
                    By your thirties, volume restoration becomes about architecture, not filler.
                    We're no longer just replacing fat — we're redesigning the frame.
                  </p>

                  <p>
                    The midface still leads the story.
                    A touch to the cheekbones can lift everything below — the under-eyes, the nasolabial folds, even the mouth corners.
                    But now we start paying attention to the jawline — because this is where balance starts to slip.
                  </p>

                  <p>
                    Slim faces need softer volume, to replace what time has borrowed.
                    Round faces need sharper contour, to redefine what gravity has softened.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "At thirty, filler stops being about fullness. It starts being about flow."
                  </p>

                  <p>
                    Overdo one area, and you distort the balance.
                    Leave one neglected, and you drag the whole composition down.
                    That's where artistry separates itself from injection.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Myth of More
                  </h3>

                  <p>
                    This is the decade where you learn a hard truth:
                    More filler doesn't mean younger.
                    Sometimes it means swollen, distorted, or just wrong.
                    Because ageing isn't uniform — it's asymmetric, emotional, and personal.
                    That's why "one syringe each side" is not a plan. It's a guess.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Sticky Note:</p>
                    <p className="text-gray-700 mt-1">
                      You don't fight time with volume. You negotiate with proportion.
                    </p>
                  </div>

                  <p>
                    Less, placed precisely, beats more, spread blindly.
                    That's how we keep the face readable, not rewritten.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Jawline — The Unspoken Hero
                  </h3>

                  <p>
                    Remember the cheeks you loved filling in your twenties?
                    Now meet their rival: the jawline.
                  </p>

                  <p>
                    As ligaments loosen and fat pads slide, the jaw starts losing definition.
                    That's why so many faces in their thirties look "tired" — not because of wrinkles, but because the frame is melting.
                    A touch of structure here restores the entire lower third of the face.
                    Cheeks lift; marionette lines relax; the whole face feels lighter.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "A strong jawline doesn't make you younger — it makes you believable."
                  </p>

                  <p>
                    At CosmeDocs, we treat the jawline not as an afterthought, but as an anchor.
                    Because when the border's sharp, the rest of the picture makes sense.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Restraint Becomes the New Luxury
                  </h3>

                  <p>
                    In your twenties, the goal was glow.
                    In your thirties, it's credibility.
                    You want to look good without looking done, fresh without looking fixed.
                    That's where restraint becomes the highest form of artistry.
                  </p>

                  <p>
                    The face in its thirties doesn't need a full makeover — it needs management.
                    Micro-adjustments. Honest proportions. Smarter habits.
                    You're not chasing youth; you're curating it.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    ✨ "The best work is the work no one notices — not even you."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Skin Routine That Works
                  </h3>

                  <ul className="list-none space-y-3 my-6 pl-0">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold text-xl">•</span>
                      <span><strong className="text-gray-900">Cleanse less, renew more.</strong> Don't strip; resurface.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold text-xl">•</span>
                      <span><strong className="text-gray-900">Microneedling every few months.</strong> Collagen therapy disguised as texture refinement.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold text-xl">•</span>
                      <span><strong className="text-gray-900">Medical peels seasonally.</strong> Shed the buildup, reveal the clarity.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold text-xl">•</span>
                      <span><strong className="text-gray-900">Tretinoin 2–3 nights a week.</strong> Your cellular insurance policy.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold text-xl">•</span>
                      <span><strong className="text-gray-900">SPF daily.</strong> Every UV hit is a withdrawal from your collagen bank.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold text-xl">•</span>
                      <span><strong className="text-gray-900">Hydration inside out.</strong> Water, diet, sleep — the original skincare trio.</span>
                    </li>
                  </ul>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Post-It Reminder:</p>
                    <p className="text-gray-700 mt-1">
                      You can't fix your skin if you don't respect your biology.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    In The End
                  </h3>

                  <p>
                    Your thirties aren't a crisis. They're a checkpoint.
                    The decade where prevention graduates into planning.
                    Where the goal shifts from chasing glow to preserving structure.
                  </p>

                  <p>
                    You start to understand that everything — skin, fat, bone, muscle — is a conversation.
                    You can't just inject one layer and expect harmony.
                    It's a symphony, and your injector is the conductor.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "The goal isn't to stop ageing — it's to age in high definition."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Good News
                  </h3>

                  <p>
                    The good news?
                    Though it may feel like everything is falling apart, it isn't.
                    A tiny, precise tweak to each area — a drop in the right cheek, a micro-dose in the right muscle, a skin reboot at the right time — can restore your face for another 20 hours of life.
                  </p>

                  <p>
                    That's the magic of anatomy-led aesthetics — not transformation, just calibration.
                    And if you ever find yourself torn between buying that designer bag or investing in your skin,
                    choose your face.
                    The bag won't smile back — but your mirror will.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    ✨ "Happiness looks better on your skin than it does on your arm."
                  </p>
                </div>
              </section>
              )}

              {/* Chapter 5 - Full Content */}
              {currentChapterIndex === 5 && (
              <section id="chapter-5" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Chapter 5 — The Forties: The Era of Lift and Logic
                </h2>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                  <p className="text-2xl text-center italic text-gray-600">
                    🕰️ "Your forties aren't falling apart — they're just asking for structure."
                  </p>

                  <p>
                    Welcome to the decade where the rules finally change.
                    The easy fixes of your thirties start needing a little reinforcement.
                    Gravity has done its homework, collagen's gone part-time, and the face — well, it's negotiating for better support.
                  </p>

                  <p>
                    If your thirties were about maintenance, your forties are about management and mechanics.
                    You don't just chase glow anymore. You chase geometry.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Reality Check
                  </h3>

                  <p>
                    Let's be honest — if you were good to your face in your thirties, you're cruising into your forties with grace.
                    But if you skipped the small stuff, now's the time for slightly more than a tweak.
                    Don't panic — this isn't about "change."
                    It's about quiet reinforcement.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "If your thirties were prevention, your forties are precision."
                  </p>

                  <p>
                    And here's the beautiful irony:
                    when done right, no one really knows what you did.
                    Your husband won't notice.
                    Your kids won't care.
                    But your best friend and your mum — they'll know something's different.
                    Not changed — restored.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The New Equation — Lift Over Volume
                  </h3>

                  <p>
                    This is when ligaments — those tiny bands that hold everything up — start loosening their grip.
                    Fat pads shift south, volume migrates, and the face becomes less about fullness and more about support.
                  </p>

                  <p>
                    We used to chase plumpness.
                    Now, we chase vectors — lines of lift and tension that hold the face upright.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "Youth isn't fullness. It's direction."
                  </p>

                  <p>
                    That's why filler placement in your forties is strategic, not cosmetic.
                    A few millimetres in the right spot can pull up the entire lower face —
                    the same way one well-placed beam holds up a ceiling.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    When Threads Join the Story
                  </h3>

                  <p>
                    Threads have evolved.
                    They're no longer the crude "fishhooks" from a decade ago.
                    Modern threads are dissolvable scaffolds — collagen-stimulating sutures that lift now and build later.
                    Think of them as architectural reinforcements — like invisible strings holding the midface, jawline, and brows exactly where they belong.
                  </p>

                  <p>
                    They don't replace filler.
                    They work with it — one for lift, one for shape, one for light.
                    And when used correctly, you don't look "pulled."
                    You just look like you slept really well, for the first time in a decade.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Post-It Tip:</p>
                    <p className="text-gray-700 mt-1">
                      Threads lift. Fillers refine. Together, they rewrite gravity.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Enter the Biostimulators
                  </h3>

                  <p>
                    At this age, you stop renting collagen and start building it again.
                    That's where biostimulators like Sculptra and Radiesse come in —
                    they don't just fill space; they tell your body to do the work itself.
                  </p>

                  <p>
                    Over a few months, they stimulate fibroblasts, rebuild internal scaffolding, and restore firmness from within.
                    You don't wake up different. You wake up stronger.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "You don't add youth. You earn it back."
                  </p>

                  <p>
                    The results are slow, graceful, and long-lasting —
                    like ageing in reverse, but politely.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Regenerative Fillers — The New Frontier
                  </h3>

                  <p>
                    Welcome to the decade of hybrid injectables —
                    fillers that not only fill, but heal.
                    Polynucleotides, exosomes, PRF, even diluted hyaluronic acid cocktails —
                    this is where rejuvenation meets biochemistry.
                  </p>

                  <p>
                    These aren't the big lifts. These are the quiet revolutions.
                    They restore hydration, texture, and elasticity from deep within the dermis,
                    the way nature intended — just with a little nudge from science.
                  </p>

                  <p>
                    At CosmeDocs, we combine these with skin boosters and collagen inducers to rebuild glow, density, and bounce.
                    Because the surface doesn't shine if the foundation's gone soft.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Post-It Reminder:</p>
                    <p className="text-gray-700 mt-1">
                      The future of beauty isn't filler or Botox. It's regeneration.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Cost of Subtlety
                  </h3>

                  <p>
                    Now, let's talk about the unspoken truth: the investment.
                    If your thirties were a few hundred here and there,
                    your forties might ask for a little more — say around £3-4 for a complete, full-face restoration over a year or more.
                  </p>

                  <p>
                    That includes soft filler, biostimulators, and maybe a thread or two to keep gravity guessing.
                    Still subtle. Still you.
                    You could easily spend that on a designer bag —
                    but only one of these things will look better on you every day.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "If Hermès sold faces, we'd have a waiting list."
                  </p>

                  <p>
                    Because honestly, if someone told you there's something that can rewind your reflection for another five years —
                    and it costs less than what you spent on handbags you forgot about —
                    you'd call that a fair trade.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-semibold text-gray-900">🗒️ Post-It Truth:</p>
                    <p className="text-gray-700 mt-1">
                      The bag holds your stuff. The face holds your story.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Why It Still Feels Natural
                  </h3>

                  <p>
                    The trick to looking natural in your forties isn't less work — it's smarter work.
                    Subtle layering. Deep understanding of anatomy. Respect for proportion.
                    No one needs to know what you did — only that you look like yourself again.
                  </p>

                  <p>
                    Your husband won't notice.
                    Your colleagues might think you've changed your haircut or colour kit.
                    But your best friend will grin and say,
                    "You look amazing — what are you doing?"
                  </p>

                  <p>
                    That's when you know it worked.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    ✨ "The secret to natural beauty isn't hiding it. It's editing it."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Logic of Lift
                  </h3>

                  <p>
                    Your forties aren't about chasing youth — they're about lifting logic back into your face.
                    Anchoring sagging tissue. Restoring lost vectors.
                    Respecting anatomy and balance.
                  </p>

                  <p>
                    Because when your face makes sense again, everything else falls into place —
                    your expressions, your makeup, your confidence, your mirror.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "A good lift doesn't erase time. It just stops it from bossing you around."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Good News
                  </h3>

                  <p>
                    The good news is: you're not broken.
                    You just need a tune-up.
                    A micro-lift here, a collagen boost there, a little refill where time took too much.
                    Each tweak buys you another few years of freshness — not hours, years.
                  </p>

                  <p>
                    And the best part?
                    It's still subtle. Still believable.
                    You'll feel like yourself again — just sharper, clearer, calmer.
                  </p>

                  <p>
                    So skip the next handbag. Invest in your reflection.
                    Because a face that glows with quiet confidence?
                    That's the ultimate luxury.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    ✨ "The Hermès bag sits in the wardrobe.<br />
                    Your face walks into the room."
                  </p>
                </div>
              </section>
              )}

              {/* Chapter 6: The Fifties */}
              {currentChapterIndex === 6 && (
              <section id="chapter-6" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Chapter 6: The Fifties: Elegance, Elasticity & Energy
                </h2>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-xl italic text-gray-600 text-center my-6">
                    🕰️ "This is where medicine meets its edge — and mastery begins."
                  </p>

                  <p>
                    Welcome to the decade where we arrive at the fine line between aesthetic medicine and plastic surgery.
                    It's not the end of the road — it's just where the tools need sharper thinking, steadier hands, and clearer purpose.
                  </p>

                  <p>
                    The fifties aren't about chasing youth anymore.
                    They're about keeping grace alive in motion.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    When Time Gets Structural
                  </h3>

                  <p>
                    By fifty, the face has rewritten its architecture.
                    Ligaments have loosened their hold.
                    Fat has descended from its original postcode.
                    The skin has thinned, folded, and etched in the story of everything you've lived.
                  </p>

                  <p>
                    If you've been with us for ten or fifteen years, congratulations — you've aged in slow motion.
                    You shouldn't look fifty.
                    You should look like the biological version of yourself from your late thirties.
                    Not frozen. Not re-inflated. Just untouched by panic.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "Consistency beats correction."
                  </p>

                  <p>
                    But if you're walking in at fifty for the first time — don't worry.
                    There's still plenty we can do.
                    It's just that now, we're no longer tweaking.
                    We're rebuilding structure from the bottom up.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Rule of Light and Shadow
                  </h3>

                  <p>
                    At this stage, it's not just volume loss. It's shape distortion.
                    The heaviest giveaway of age isn't wrinkles — it's shadows.
                    They appear under the eyes, beside the mouth, across the jawline, and around the temples.
                    The face goes from reflecting light to breaking it.
                  </p>

                  <p>
                    Our mission now is to erase the shadows, not to fill everything that moves.
                  </p>

                  <p>
                    That's why in your fifties, I don't start with the cheeks.
                    I start with structure.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "If you lift the base, the light comes back on its own."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Jawline First Philosophy
                  </h3>

                  <p>
                    The first step is the jawline — the anchor of the face.
                    We rebuild the angle of the jaw, the mandibular line, and the corners of the mouth.
                    When the jawline is clean and the mouth corners turn upwards, the entire face looks lighter.
                  </p>

                  <p>
                    Only then do we move upward — to the cheeks, under-eyes, and temples — restoring balance rather than distortion.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-medium text-gray-900">
                      🗒️ Post-It Truth:
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      The face should read top to bottom like a story, not a typo.
                    </p>
                  </div>

                  <p>
                    The goal is no age mismatch.
                    Too often, you see women (and men) with cheeks that look twenty-five — but jawlines that look sixty-five.
                    The result? A visual contradiction that fools no one.
                  </p>

                  <p>
                    It's not their fault.
                    It's the industry's habit.
                    Too many practitioners practice what they know — or worse, what they were last taught — instead of reading the face in front of them.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Era of Skin Work
                  </h3>

                  <p>
                    By now, the real battlefront is the skin itself.
                    Collagen and elastin production are at historic lows.
                    The dermis is thinner, drier, and slower to heal.
                    So we stop trying to fill everything and start regenerating.
                  </p>

                  <p className="font-medium">This is where we go heavy on:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Tretinoin</strong> for deep resurfacing and renewal.</li>
                    <li><strong>Microneedling with biostimulators</strong> to thicken dermis and rebuild texture.</li>
                    <li><strong>PRF (Platelet-Rich Fibrin)</strong> to reintroduce growth factors.</li>
                    <li><strong>Polynucleotides & Exosomes</strong> to boost cell repair and energy.</li>
                    <li><strong>Energy-based devices</strong> (radiofrequency, fractional lasers, ultrasound) — carefully used, not overused.</li>
                  </ul>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "At fifty, the skin isn't tired. It's just waiting for orders."
                  </p>

                  <p>
                    The goal here isn't tightening — it's retraining the skin to act young again.
                    We treat it like muscle memory — because that's exactly what it is.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Regeneration Over Replacement
                  </h3>

                  <p>
                    At Cosmedocs, our philosophy evolves with your biology.
                    In your twenties, we preserved.
                    In your thirties, we planned.
                    In your forties, we lifted.
                    Now, in your fifties, we regenerate.
                  </p>

                  <p>
                    Filler alone can't fight this stage.
                    We bring in bio-stimulators, collagen inducers, and regenerative injectables to rebuild the tissue from within.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-medium text-gray-900">
                      🗒️ Post-It Tip:
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      In your fifties, less filling — more healing.
                    </p>
                  </div>

                  <p>
                    The approach is subtle but profound.
                    You're not just "holding back time" — you're quietly rewriting it.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Biological vs. Chronological Age
                  </h3>

                  <p>
                    When we track our long-term patients — those who started early and stayed consistent — the difference is astonishing.
                    They don't just look younger. They are younger.
                    Biologically, metabolically, dermally — they've reversed the wear.
                  </p>

                  <p>
                    A face that's been maintained for fifteen years isn't fifty.
                    It's biologically closer to thirty-five.
                    The collagen, the elasticity, the hydration — everything is preserved by years of micro-intervention.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "The reward for consistency isn't looking good. It's never looking tired."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Truth About Late Starters
                  </h3>

                  <p>
                    For those who discover aesthetic medicine at fifty — it's never too late.
                    You just need a little more structure, patience, and a realistic roadmap.
                  </p>

                  <p>
                    We start with light, not filler — by lifting shadows through jawline restoration, mouth-corner correction, and redefining borders.
                    Once the framework is reestablished, we work upwards to replace volume, restore balance, and reintroduce softness.
                  </p>

                  <p>
                    It's like renovating a house — you start with the foundation, not the curtains.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "Don't fill the cheeks before fixing the floor."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Logic of Balance
                  </h3>

                  <p>
                    The key word now is coherence.
                    Every millimetre matters.
                    Every area must match its neighbour.
                  </p>

                  <p>
                    If the jawline looks sixty but the cheeks look twenty-five, the illusion breaks.
                    We want harmony, not highlights.
                  </p>

                  <p>
                    That's why in your fifties, artistry becomes everything.
                    Because science can't teach judgment — and judgment is the only thing that keeps beauty believable.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-medium text-gray-900">
                      🗒️ Post-It Wisdom:
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      Youth is a look. Balance is a feeling.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Good News
                  </h3>

                  <p>
                    The good news is — there's still so much that can be done.
                    The tools are smarter. The results are subtler.
                    And if you've invested in your face for a decade or two, you've already won half the battle.
                  </p>

                  <p>
                    Each little tweak — a bio-stimulator here, a jawline lift there, a deep peel once or twice a year —
                    adds years of vitality back to your reflection.
                  </p>

                  <p>
                    You'll look in the mirror and think, "I still recognise that person."
                    And that's the goal.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "At fifty, beauty isn't about pretending. It's about remembering."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Final Thought
                  </h3>

                  <p>
                    If aesthetic medicine were music, this would be the slow jazz phase — subtle, layered, elegant.
                    Everything is about tempo, tone, and restraint.
                    The instruments are the same — filler, threads, retinoids, energy — but the melody has matured.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    ✨ "We're not chasing youth anymore.<br />
                    We're perfecting grace."
                  </p>
                </div>
              </section>
              )}

              {/* Epilogue: The Philosophy of Aesthetics */}
              {currentChapterIndex === 7 && (
              <section id="epilogue" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Epilogue: The Philosophy of Aesthetics: What We Learned from Faces
                </h2>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-xl italic text-gray-600 text-center my-6">
                    🌙 "Perfection was never the goal. Harmony was."
                  </p>

                  <p>
                    After all these years — faces, treatments, trends, and philosophies — here's what we've learned:
                    Beauty is asymmetry.
                    It's the slight tilt of one brow, the uneven curve of a smile, the imperfection that gives identity.
                    It's the tension between balance and individuality that makes a face feel alive.
                  </p>

                  <p>
                    And yet, many chase something else — a kind of ethnic neutrality, a smoothed-out sameness shaped by algorithms and filters.
                    That's why if you look at every Miss Universe from every nation, they start to look almost identical.
                    Different passports, same proportions.
                    Different countries, same template.
                  </p>

                  <p>
                    That's not beauty. That's symmetry without soul.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "Faces aren't meant to match. They're meant to move you."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Philosophy We Practice
                  </h3>

                  <p>
                    At Cosmedocs, our job isn't to change who you are — it's to preserve who you are well.
                    We're not here for one-off treatments or TikTok trends.
                    We're here to be your GP for your skin health, walking alongside you for ten or fifteen years, not ten or fifteen minutes.
                  </p>

                  <p>
                    We believe in the old techniques done meticulously well —
                    the tried, tested, and safe approaches that have earned their reputation through time, not marketing.
                    Because while the industry is busy inventing new names for old mistakes,
                    we're quietly refining what already works.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "Old doesn't mean outdated. It means proven."
                  </p>

                  <p>
                    There is still no replacement for retinol —
                    no matter how many shiny new serums appear with lab-made promises.
                    We know its chemistry. We know its concentration.
                    We know how to use it with respect, not aggression.
                  </p>

                  <p>
                    And when it comes to injectables, we use only dissolvable hyaluronic acid fillers —
                    because reversibility isn't optional; it's responsibility.
                    Our aim is for you to leave the clinic looking fresher, not different —
                    to go back to work without anyone noticing anything except that something quietly fits again.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Truth About Complications
                  </h3>

                  <p>
                    We also don't pretend this is magic.
                    Complications exist. They always will.
                    The majority are minor — a little swelling, mild bruising, temporary tenderness.
                    These are not failures. They're the biology of healing.
                  </p>

                  <p>
                    But in recent years, social media has given birth to new kinds of fear —
                    the biggest one being migration.
                    It's the word that's suddenly everywhere, whispered like a scandal.
                  </p>

                  <p>
                    Here's the truth: in seventeen years of practice, I've rarely seen true migration.
                    What I have seen, far too often, is misplacement.
                    Filler injected into the wrong anatomical plane —
                    it looks perfect for a few months, then drifts subtly off because it was never anchored correctly.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "It's not that filler moves — it's that it was put where it didn't belong."
                  </p>

                  <p>
                    That's not migration. That's poor mapping disguised as a mystery.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Industry's Growing Pains
                  </h3>

                  <p>
                    We're living in a world where every beauty salon owner wants to become an aesthetic practitioner overnight.
                    They finish a two-day course, learn how to identify gram-positive and gram-negative bacteria,
                    and believe that's what infection control means.
                  </p>

                  <p>
                    The truth is, that's not medical practice.
                    That's memorisation without understanding.
                    A face isn't a patch of skin — it's a living network of arteries, veins, fascia, and expression.
                    It's the sum of your biology, your culture, your identity.
                    To treat it well, you need more than a certificate. You need respect.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "The needle is easy to hold. The responsibility is not."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Balance of Art and Safety
                  </h3>

                  <p>
                    So, we stay grounded.
                    We don't chase new names or untested toys.
                    We perfect the foundations —
                    old products, stable formulations, known anatomy, precise hands.
                  </p>

                  <p>
                    Because medicine isn't fashion.
                    And faces aren't experiments.
                  </p>

                  <p>
                    We exist in that fine, sacred space where art meets accountability —
                    where subtlety matters more than speed, and long-term trust matters more than short-term applause.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-medium text-gray-900">
                      🗒️ Post-It Wisdom:
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      In a world full of trends, stay timeless.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    What We Learned
                  </h3>

                  <p>
                    In the end, the philosophy of aesthetics isn't about the face at all.
                    It's about understanding time — and learning how to move with it instead of against it.
                    Every wrinkle tells a story, every shadow hints at strength, every asymmetry reveals authenticity.
                  </p>

                  <p>
                    And our job?
                    Not to erase.
                    Not to imitate.
                    But to guide time gently — with precision, logic, and respect.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "Because beauty isn't what you add. It's what you preserve."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Legacy
                  </h3>

                  <p>
                    If you remember one thing from this book, let it be this:
                    We don't fix faces. We steward them.
                    Over years, not sessions.
                    Through science, not slogans.
                    With experience, not ego.
                  </p>

                  <p>
                    So when the next miracle treatment appears on your feed,
                    take a breath.
                    Ask your face what it really needs — not what's being sold to it.
                  </p>

                  <p>
                    And if we've done our job right,
                    your reflection will still feel like you —
                    just a little calmer, a little clearer, a little more timeless.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    ✨ "In the end, the goal was never to chase youth.<br />
                    It was to age with intelligence."
                  </p>
                </div>
              </section>
              )}

              {/* Postscript: Core Principles */}
              {currentChapterIndex === 8 && (
              <section id="postscript" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Postscript: The Core Principles of Aesthetic Medicine
                </h2>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-xl italic text-gray-600 text-center my-6">
                    "A face should be studied, not sold."
                  </p>

                  <p>
                    After decades of practice, refinement, and reflection, we've learned that a beautiful result doesn't come from a syringe — it comes from a system.
                    Every face deserves a structured plan — not a shopping list.
                    That plan rests on three pillars of consultation:
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-lg font-medium">
                    <li>The Skin</li>
                    <li>The Wrinkles in Motion</li>
                    <li>The Volume of the Face</li>
                  </ul>

                  <p>
                    Each must be observed, understood, and restored — slowly, intelligently, and in sequence.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    1. The Skin — The Canvas of Light
                  </h3>

                  <p>
                    When we first meet a face, we look at the surface: pores, tone, and texture.
                    This is your skin's handwriting — and it tells us everything about your history, habits, and health.
                  </p>

                  <p className="font-medium">In your 20s, the foundation is simple:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Vitamin C</strong> in the morning to protect and brighten.</li>
                    <li><strong>Retinol</strong> at night to renew and rebuild.</li>
                  </ul>

                  <p>
                    Sometimes we'll use prescription retinoids for faster cellular turnover and true collagen stimulation.
                    When combined with skin peels, these two ingredients alone can transform your texture into what we call "glass skin."
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "Skincare isn't a luxury; it's a discipline."
                  </p>

                  <p>
                    In your 30s, we add microneedling — a controlled injury to wake the dermis and keep collagen alert.
                    By your late 30s and beyond, we may introduce polynucleotides — regenerative injectables that repair DNA and restore radiance from within.
                  </p>

                  <p>
                    This sequence — Vitamin C, Retinol, Microneedling, Polynucleotides —
                    is the backbone of modern skin health.
                    It's not glamorous, but it works. Always has.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-medium text-gray-900">
                      🗒️ Post-It Tip:
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      Don't complicate your skincare — commit to it.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    2. Wrinkles in Motion — The Language of Expression
                  </h3>

                  <p>
                    Next, we study the muscles — the ones that move your story.
                    Wrinkles aren't the enemy. They're evidence of a life lived.
                    But when movement becomes memory — when lines start staying at rest — it's time to guide the muscles, not fight them.
                  </p>

                  <p>
                    We start with the upper face — forehead, frown lines, crow's feet.
                    But many practitioners stop there, ignoring the lower face, where real emotion hides.
                  </p>

                  <p>
                    The sad corners of the mouth begin in the mid-30s — driven by a small but powerful muscle that pulls the lips downward when we express frustration or disappointment.
                    You can see it in children when they don't get what they want — that subtle pout.
                    As adults, we don't notice we're doing it, but over time it leaves permanent shadows and mouth-corner lines.
                  </p>

                  <p>
                    The chin joins in too, contracting constantly with speech, expression, and tension.
                    That's what creates the little crease above the chin — the mental crease — which deepens with time, especially in photos you never meant to take.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "Every emotion writes something on your face.<br />
                    Botox just edits it lightly."
                  </p>

                  <p>
                    Softening these lower-face muscles is not vanity; it's balance.
                    A relaxed chin, a softened mouth corner, and a calmer frown make the whole face breathe again.
                    We teach this only to advanced injectors — because the lower face is the hardest to master, and the most transformative when done right.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    3. Volume — The Architecture Beneath
                  </h3>

                  <p>
                    Finally, we study volume — the most underestimated part of facial ageing.
                    It's not just about filler; it's about reading the terrain.
                  </p>

                  <p className="font-medium">In your late 20s, subtle volume loss starts to appear as:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Early tear troughs</li>
                    <li>Slight upper cheek flattening</li>
                    <li>Mild lip dehydration and fine creasing</li>
                  </ul>

                  <p className="font-medium">By your early 30s, the changes spread to:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>The jawline, where mild jowls begin to form</li>
                    <li>The chin, where heaviness appears</li>
                    <li>The marionette shadows, cutting lines from mouth to jaw</li>
                    <li>The cheeks, which are no longer "sunken," but not projecting forward either</li>
                  </ul>

                  <p>
                    These are the first signs of architectural fatigue — not ageing, just structural tiredness.
                    Our goal is to restore, not inflate.
                    A touch to each zone, placed in harmony, can rebuild youth without betraying age.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "Good filler doesn't fill. It replaces the story you lost."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Consultation Philosophy
                  </h3>

                  <p>
                    When we assess your face, we don't chase trends.
                    We trace connections.
                    Every pore, wrinkle, and shadow speaks to another.
                    We plan your journey over years, not sessions — because that's how real results last.
                  </p>

                  <p className="font-medium">We respect the classics:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Retinol over reinvention.</li>
                    <li>Hyaluronic acid that dissolves, not one that lingers dangerously.</li>
                    <li>Safe, clean formulations that honour anatomy, not marketing.</li>
                  </ul>

                  <p>
                    And above all — we aim for zero downtime, quiet recovery, and a result that makes people think, "She looks amazing," not, "She had something done."
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-sm font-medium text-gray-900">
                      🗒️ Post-It Wisdom:
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      The best aesthetic plan isn't rushed. It's rehearsed.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    What We Stand For
                  </h3>

                  <p className="font-medium">Longevity, not novelty.</p>
                  <p>We refine proven methods — not chase the next viral trend.</p>

                  <p className="font-medium">Balance, not symmetry.</p>
                  <p>Perfect symmetry is lifeless. Beauty lives in nuance.</p>

                  <p className="font-medium">Safety, not shortcuts.</p>
                  <p>We use only dissolvable, reversible fillers — because your safety comes before your selfie.</p>

                  <p className="font-medium">Partnership, not procedure.</p>
                  <p>We don't "fix" you once. We walk with you — through decades, not days.</p>

                  <p className="font-medium">Experience, not ego.</p>
                  <p>The older the face, the steadier the hand required. Precision, patience, and planning matter more than products.</p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "We don't change faces. We maintain stories."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    In the End
                  </h3>

                  <p>
                    Aesthetic medicine was never meant to erase time — only to guide it.
                    Every era of your face — 20s, 30s, 40s, 50s, 60s — has its own rhythm, its own light.
                    Our job is to keep that rhythm in tune, softly, faithfully, one subtle correction at a time.
                  </p>

                  <p>
                    Because when balance is restored —
                    when the light flows from the eyes to the jaw,
                    when texture reflects health, and motion reflects calm —
                    you don't look "done."
                    You look complete.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    ✨ "This is not about changing who you are.<br />
                    It's about remembering who you were — and carrying it forward, gracefully."
                  </p>
                </div>
              </section>
              )}

              {/* About the Author & The Philosophy of Cosmedocs */}
              {currentChapterIndex === 9 && (
              <section id="about-author" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  About the Author & The Philosophy of Cosmedocs
                </h2>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-xl italic text-gray-600 text-center my-6">
                    "Medicine gave me science. Faces taught me truth."
                  </p>

                  <p>
                    Dr. Ahmed Haq's philosophy is simple: aesthetic medicine is not about changing faces — it's about preserving humanity.
                    For over seventeen years, he has worked across every layer of the face — from skin to soul — refining a method that values balance over exaggeration, and logic over fashion.
                  </p>

                  <p>
                    He believes that aesthetic medicine should be a long-term relationship, not a one-night miracle.
                    That real beauty isn't instant; it's sustained.
                    His patients stay with him for decades, not sessions — because what he builds isn't just symmetry, it's trust.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "We are not in the business of transformation.<br />
                    We are in the craft of restoration."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    The Philosophy of Cosmedocs
                  </h3>

                  <p>
                    At Cosmedocs, we see ourselves as GPs for your skin and structure — not quick-fix injectors, but custodians of your face over time.
                    Every plan is written like a medical roadmap — combining anatomy, psychology, and longevity.
                  </p>

                  <p>
                    We don't chase trends.<br />
                    We refine classics.<br />
                    We don't experiment with your face.<br />
                    We honour it.
                  </p>

                  <p className="font-medium">We believe in:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Old techniques done meticulously well</strong> — because safety never goes out of style.</li>
                    <li><strong>Dissolvable hyaluronic acid fillers only</strong> — reversible, safe, and predictable.</li>
                    <li><strong>Minimal downtime, maximum subtlety</strong> — you return to work, not recovery.</li>
                    <li><strong>Longevity of relationship</strong> — we learn your face as it evolves, not as it ages.</li>
                    <li><strong>Education over marketing</strong> — because intelligence always outlasts illusion.</li>
                  </ul>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    💬 "Our art is quiet, but it lasts longer than the noise."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    On Faces and Philosophy
                  </h3>

                  <p>
                    Every face tells a story — of culture, ancestry, laughter, and survival.
                    We do not seek to neutralise those stories with trends or filters.
                    We work with them — to protect, to elevate, to respect.
                  </p>

                  <p>
                    Because in the end, beauty is not a finish line.
                    It's a lifelong dialogue between time and technique.
                    And we are just the translators — helping your face speak clearly, honestly, and with grace.
                  </p>

                  <p className="text-xl italic text-gray-600 text-center my-6">
                    ✨ "The greatest compliment to an aesthetic doctor isn't that their work is seen — it's that it isn't."
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                    Closing Thought
                  </h3>

                  <p>
                    After years of watching faces evolve — in clinics, in mirrors, in life —
                    one truth remains:
                  </p>

                  <p>
                    Perfection is static. Beauty is alive.
                    And our only job, as practitioners and as humans,
                    is to keep it breathing.
                  </p>
                </div>
              </section>
              )}
            </article>

            {/* Bottom Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
              <Button
                onClick={handlePrevious}
                disabled={currentChapterIndex === 0}
                variant="outline"
                className="gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <span className="text-sm text-gray-600">
                {currentChapterIndex + 1} of {allChapterSections.length}
              </span>

              <Button
                onClick={handleNext}
                disabled={currentChapterIndex === allChapterSections.length - 1}
                variant="outline"
                className="gap-2"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* SEO Hidden Content */}
            <div className="sr-only">
                <h2>Comprehensive Guide to Aesthetic Treatments</h2>
                <p>
                  Understanding aesthetic treatments begins with a solid foundation in facial anatomy and skin physiology. This educational guide covers everything from basic skin layers to advanced non-surgical aesthetic procedures. Whether you're considering dermal fillers, anti-wrinkle treatments, or skin rejuvenation therapies, understanding the science behind these treatments is essential for making informed decisions.
                </p>
                <h3>Essential Knowledge for Aesthetic Treatment Patients</h3>
                <p>
                  Modern aesthetic medicine offers numerous treatment options for facial rejuvenation, including Botox injections, hyaluronic acid fillers, polynucleotide treatments, and advanced skin boosters. Each treatment targets specific layers of the skin and underlying tissues. The epidermis provides the protective barrier, whilst the dermis contains collagen and elastin fibres that maintain skin firmness. Deeper still, subcutaneous fat pads provide facial volume and contour.
                </p>
                <h3>Non-Surgical Aesthetic Procedures Explained</h3>
                <p>
                  Non-surgical facial treatments have revolutionised aesthetic medicine. From non-surgical rhinoplasty to liquid facelifts, these procedures offer natural-looking results without the downtime of surgery. Understanding the anatomy of facial fat compartments, ligamentous structures, and muscle dynamics is crucial for achieving optimal aesthetic outcomes. Treatments such as tear trough filler, cheek augmentation, and jawline contouring require precise anatomical knowledge to ensure both safety and efficacy.
                </p>
                <h3>The Science of Skin Rejuvenation</h3>
                <p>
                  Skin rejuvenation treatments work at multiple levels. Chemical peels target the epidermis, microneedling stimulates dermal collagen production, and injectable treatments restore volume in deeper tissue planes. Medical-grade skincare products containing retinoids, vitamin C, and peptides complement these treatments by improving skin texture and tone. Understanding how these treatments interact with your skin's natural healing processes helps you maintain long-term aesthetic results.
                </p>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
