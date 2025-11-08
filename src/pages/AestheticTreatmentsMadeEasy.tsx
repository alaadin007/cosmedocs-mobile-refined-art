import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
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

const prefaceSubchapters = [
  { id: "preface-intro", title: "Introduction" },
  { id: "art-of-depth", title: "The Art of Depth" },
  { id: "apple-analogy", title: "The Apple Analogy" },
  { id: "energy-devices", title: "When Energy Devices Help" },
  { id: "balance", title: "The Balance Between Skin and Structure" },
  { id: "simpler-words", title: "In Simpler Words" },
];

const chapters: Chapter[] = [
  {
    id: "chapter-1",
    title: "Chapter 1",
    subtitle: "The Epidermis: The Foundation of All Skin Health",
  },
  { id: "chapter-2", title: "Chapter 2", subtitle: "The Dermis: The Architecture of Youth" },
  { id: "chapter-3", title: "Chapter 3", subtitle: "The Dermis" },
  {
    id: "chapter-4",
    title: "Chapter 4",
    subtitle: "The Subcutaneous Layer",
  },
  { id: "chapter-5", title: "Chapter 5", subtitle: "Medical Rhinoplasty" },
  { id: "chapter-6", title: "Chapter 6", subtitle: "Tear Trough" },
  {
    id: "chapter-7",
    title: "Chapter 7",
    subtitle: "The Cheek — The Power Below the Trough",
  },
];

export default function AestheticTreatmentsMadeEasy() {
  const [activeSection, setActiveSection] = useState("preface-intro");
  const [prefaceOpen, setPrefaceOpen] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Auto-scroll sidebar and update active section based on content scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        ...prefaceSubchapters.map(sub => sub.id),
        ...chapters.map(ch => ch.id)
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with offset for header)
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll sidebar to active section
  useEffect(() => {
    const activeButton = document.querySelector(`[data-section="${activeSection}"]`);
    if (activeButton && sidebarRef.current) {
      activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeSection]);

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
        {/* Sidebar */}
        <aside ref={sidebarRef} className="w-64 border-r border-gray-200 bg-white sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-5 w-5 text-gray-700" />
              <h2 className="font-semibold text-lg text-gray-900">Aesthetic Talk</h2>
            </div>

            {/* Preface Section */}
            <Collapsible open={prefaceOpen} onOpenChange={setPrefaceOpen}>
              <CollapsibleTrigger asChild>
                <button
                  className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${
                    prefaceSubchapters.some(sub => sub.id === activeSection)
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Preface</div>
                      <div className="text-xs opacity-80">The Art of Depth</div>
                    </div>
                    {prefaceOpen ? (
                      <ChevronLeft className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </div>
                </button>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="space-y-1 ml-2">
                  {prefaceSubchapters.map((subchapter) => (
                    <button
                      key={subchapter.id}
                      data-section={subchapter.id}
                      onClick={() => {
                        setActiveSection(subchapter.id);
                        document.getElementById(subchapter.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                        activeSection === subchapter.id
                          ? "bg-gray-200 text-gray-900 font-medium"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {subchapter.title}
                    </button>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Chapters */}
            <div className="space-y-1 mt-4">
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  data-section={chapter.id}
                  onClick={() => {
                    setActiveSection(chapter.id);
                    document.getElementById(chapter.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === chapter.id
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
        <main className="flex-1 bg-white">
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

            {/* Preface Content */}
            <article className="prose prose-gray prose-lg max-w-none">
              <section id="preface-intro" className="mb-16 scroll-mt-20">
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

              <section id="art-of-depth" className="mb-16 scroll-mt-20">
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

              <section id="apple-analogy" className="mb-16 scroll-mt-20">
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

              <section id="energy-devices" className="mb-16 scroll-mt-20">
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

              <section id="balance" className="mb-16 scroll-mt-20">
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

              <section id="simpler-words" className="mb-16 scroll-mt-20">
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

              {/* Chapter 1 - Full Content */}
              <section id="chapter-1" className="mb-16 scroll-mt-20">
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

              {/* Chapter 2 - Full Content */}
              <section id="chapter-2" className="mb-16 scroll-mt-20">
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

              {/* Placeholder for remaining chapters */}
              {chapters.slice(2).map((chapter) => (
                <section key={chapter.id} id={chapter.id} className="mb-16 scroll-mt-20">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">
                    {chapter.title}: {chapter.subtitle}
                  </h2>
                  <p className="text-gray-600 italic">Content coming soon...</p>
                </section>
              ))}

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
            </article>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
              <Button variant="outline" disabled className="border-gray-300 text-gray-400">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                Next Chapter
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
