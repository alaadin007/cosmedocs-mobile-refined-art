import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Lightbulb, Menu, MessageCircle, Sparkles, Eye, Droplets, Activity, CircleDot, ExternalLink } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import { motion } from "framer-motion";
import SmartAestheticsSidebar from "@/components/smart-aesthetics/SmartAestheticsSidebar";
import PauseAndThink from "@/components/smart-aesthetics/PauseAndThink";
import RelatedTreatments from "@/components/smart-aesthetics/RelatedTreatments";

const principles = [
  { id: "why-treatments-fail", title: "Why Most Treatments Fail", subtitle: "The truth about wasted money" },
  { id: "skin-not-surface", title: "Skin Is Not a Surface", subtitle: "Understanding the layers" },
  { id: "three-cell-philosophy", title: "The 3-Cell Foundation", subtitle: "Keratinocytes, Melanocytes, Fibroblasts" },
  { id: "structure-before-lift", title: "Structure Before Lift", subtitle: "The dermis architecture" },
  { id: "volume-story", title: "The Volume Story", subtitle: "Fat, muscle & first signs of time" },
  { id: "thirties-shift", title: "The Thirties Shift", subtitle: "When structure changes" },
  { id: "forties-lift", title: "The Forties Logic", subtitle: "The era of lift" },
  { id: "fifties-elegance", title: "The Fifties Elegance", subtitle: "Elasticity & energy" },
  { id: "when-not-to-treat", title: "When Not to Treat", subtitle: "The wisdom of restraint" },
  { id: "core-principles", title: "Core Principles", subtitle: "The CosmeDocs philosophy" },
];

// Shared article wrapper — light theme
const PrincipleArticle = ({
  number,
  title,
  subtitle,
  quote,
  children,
}: {
  number: number;
  title: string;
  subtitle: string;
  quote: string;
  children: React.ReactNode;
}) => (
  <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
    <div>
      <span className="text-[#C9A050] text-xs font-medium tracking-[0.25em] uppercase">
        Principle {number}
      </span>
      <h1 className="text-3xl md:text-4xl font-extralight text-gray-900 mt-3 mb-2 tracking-tight">{title}</h1>
      <p className="text-gray-400 text-sm font-light">{subtitle}</p>
    </div>
    <p className="text-xl italic text-gray-300 text-center py-4 font-extralight">"{quote}"</p>
    {children}
  </motion.article>
);

// Reusable styled blocks — light theme
const Insight = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-amber-50 border-l-2 border-[#C9A050]/60 p-5 rounded-r-xl">
    <p className="text-sm font-medium text-[#C9A050] mb-2">Key Insight</p>
    <p className="text-gray-600 text-sm font-light leading-relaxed">{children}</p>
  </div>
);

const GoldBullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span className="text-[#C9A050] mt-1.5 text-xs">●</span>
    <span className="text-gray-600 font-light leading-relaxed">{children}</span>
  </li>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className="w-12 h-px bg-[#C9A050]/40 mt-8 mb-6" />
    <h3 className="text-xl md:text-2xl font-extralight text-gray-900 mb-4">{children}</h3>
  </>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-gray-600 font-light leading-relaxed">{children}</p>
);

export default function SmartAesthetics() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPrincipleIndex, setCurrentPrincipleIndex] = useState(-1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSidebarOpen(true);
      else setSidebarOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNav = (index: number) => {
    setCurrentPrincipleIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        <meta name="keywords" content="aesthetic treatments, facial ageing, skin rejuvenation, dermal fillers, botox, non-surgical procedures, cosmetic medicine, aesthetic education, smart aesthetics" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            name: "Smart Aesthetics Series",
            author: { "@type": "Organization", name: "CosmeDocs" },
            description: seo.description,
            articleSection: "Medical Education",
            inLanguage: "en-GB",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#F5F5F3] text-gray-900">
        <div className="flex">
          {/* Mobile overlay */}
          {sidebarOpen && (
            <div className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={() => setSidebarOpen(false)}>
              <div className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white border-r border-gray-200 overflow-y-auto shadow-xl" onClick={(e) => e.stopPropagation()}>
                <SmartAestheticsSidebar principles={principles} currentIndex={currentPrincipleIndex} onSelect={handleNav} onClose={() => setSidebarOpen(false)} isMobile />
              </div>
            </div>
          )}

          {/* Desktop sidebar */}
          <aside className="hidden lg:block lg:w-72 border-r border-gray-200 bg-white sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto z-10">
            <SmartAestheticsSidebar principles={principles} currentIndex={currentPrincipleIndex} onSelect={handleNav} />
          </aside>

          {/* Main content */}
          <main className="flex-1 relative">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden fixed top-28 left-4 z-30 p-2.5 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-amber-50 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4 text-gray-500" />
            </button>

            <div className="max-w-3xl mx-auto px-6 md:px-8 py-12">
              {/* Entry Block */}
              {currentPrincipleIndex === -1 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  {/* Hero */}
                  <div className="text-center mb-12">
                    <span className="text-[#C9A050] text-xs font-medium tracking-[0.25em] uppercase">Smart Aesthetics Series</span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-gray-900 mt-4 mb-4 tracking-tight">
                      Before You Choose a <span className="text-[#C9A050] font-light">Treatment</span>
                    </h1>
                    <p className="text-gray-400 text-lg font-light">Answer one question:</p>
                  </div>

                  {/* Core Question */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 text-center mb-10 shadow-sm">
                    <p className="text-xl md:text-2xl font-extralight text-gray-800 mb-4">
                      What actually changes in the face as we age?
                    </p>
                    <p className="text-gray-400 font-light">
                      Most people guess wrong — and that's why they waste money.
                    </p>
                  </div>

                  {/* Three Actions */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    <button
                      onClick={() => handleNav(0)}
                      className="group flex flex-col items-center gap-3 p-6 bg-white border border-gray-200 hover:border-[#C9A050]/40 rounded-2xl transition-all duration-300 shadow-sm"
                    >
                      <Lightbulb className="w-7 h-7 text-[#C9A050] group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-sm text-gray-800">Read the Thinking</span>
                      <span className="text-xs text-gray-400">Learn the principles</span>
                    </button>
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent("open-chatbot"))}
                      className="group flex flex-col items-center gap-3 p-6 bg-white border border-gray-200 hover:border-[#C9A050]/40 rounded-2xl transition-all duration-300 shadow-sm"
                    >
                      <MessageCircle className="w-7 h-7 text-[#C9A050] group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-sm text-gray-800">Ask Our AI Doctor</span>
                      <span className="text-xs text-gray-400">Get instant answers</span>
                    </button>
                    <a
                      href="https://ai.cosmedocs.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-3 p-6 bg-white border border-gray-200 hover:border-[#C9A050]/40 rounded-2xl transition-all duration-300 shadow-sm"
                    >
                      <Sparkles className="w-7 h-7 text-[#C9A050] group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-sm text-gray-800">Free AI Assessment</span>
                      <span className="text-xs text-gray-400">Analyse your face</span>
                    </a>
                  </div>

                  {/* The Apple Analogy */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 mb-10 shadow-sm">
                    <h2 className="text-2xl md:text-3xl font-extralight text-gray-900 mb-2 tracking-tight">
                      Think of an <span className="text-[#C9A050] font-light">Apple</span>
                    </h2>
                    <p className="text-gray-400 text-sm font-light mb-6">The simplest way to understand your face.</p>

                    <div className="grid md:grid-cols-[280px_1fr] gap-8 items-center mb-8">
                      <div className="mx-auto md:mx-0">
                        <img
                          src="/images/apple-skin-analogy.jpeg"
                          alt="Cross-section of an apple — the red skin represents your skin layers, the yellow flesh represents your fat, muscle, and bone"
                          className="w-56 h-56 object-contain rounded-2xl"
                          loading="eager"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="bg-red-50 border border-red-200/60 rounded-xl p-4">
                          <p className="text-sm font-medium text-red-600 mb-1">🍎 The Red Skin = Your Skin</p>
                          <p className="text-gray-600 text-sm font-light leading-relaxed">
                            That thin outer layer — just the first 2mm. When people talk about "skin treatments," this is what they mean. Microneedling, polynucleotides, Morpheus, chemical peels — they all work here. They can thicken, firm, and brighten your skin. But they <strong className="text-gray-800">cannot lift</strong>.
                          </p>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-200/60 rounded-xl p-4">
                          <p className="text-sm font-medium text-yellow-700 mb-1">🍏 The Yellow Flesh = Your Volume</p>
                          <p className="text-gray-600 text-sm font-light leading-relaxed">
                            Fat pads, muscles, bone — the structure beneath. When this layer shrinks with age, the skin above it sags and falls, creating hollows and concavities. No amount of skin tightening can compensate for volume loss underneath. The apple skin wrinkles because the flesh inside has shrunk.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 border-l-2 border-[#C9A050]/60 p-5 rounded-r-xl">
                      <p className="text-sm font-medium text-[#C9A050] mb-2">The Key Lesson</p>
                      <p className="text-gray-600 text-sm font-light leading-relaxed">
                        That's where dermal fillers come in — there is no replacement. Whether you choose hyaluronic acid, polylactic acid (Sculptra), calcium hydroxylapatite (Radiesse), or even your own fat — volume loss requires volume restoration. Spending money on skin treatments to fix a volume problem is like polishing the apple skin when the flesh inside has withered. Right treatment, right layer, right result.
                      </p>
                    </div>
                  </div>

                  {/* Self-Assessment */}
                  <div className="bg-gradient-to-br from-amber-50 to-white border border-[#C9A050]/20 rounded-2xl p-6 md:p-10 mb-10 shadow-sm">
                    <span className="text-[#C9A050] text-xs font-medium tracking-[0.25em] uppercase">Your Aesthetics Profile</span>
                    <h2 className="text-2xl md:text-3xl font-extralight text-gray-900 mt-3 mb-2 tracking-tight">
                      How to <span className="text-[#C9A050] font-light">Check Your Face</span> Like a Specialist
                    </h2>
                    <p className="text-gray-400 text-sm font-light mb-8">The aim of aesthetics is not to fix everything — it's to find the lowest-hanging fruit.</p>

                    <div className="space-y-4">
                      {/* Tone & Harmony */}
                      <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <div className="flex items-start gap-3">
                          <Eye className="w-5 h-5 text-[#C9A050] mt-0.5 shrink-0" />
                          <div>
                            <h3 className="font-medium text-sm text-gray-800 mb-2">1. Tone & Harmony</h3>
                            <p className="text-gray-600 text-sm font-light leading-relaxed">
                              Does your neck tone match your face? Compare the shade — if your face is darker or redder than your neck, it could indicate sun damage, inflammation, or product build-up. A specialist looks at the face and neck as one unit, not two separate zones.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Texture */}
                      <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <div className="flex items-start gap-3">
                          <CircleDot className="w-5 h-5 text-[#C9A050] mt-0.5 shrink-0" />
                          <div>
                            <h3 className="font-medium text-sm text-gray-800 mb-2">2. Texture</h3>
                            <p className="text-gray-600 text-sm font-light leading-relaxed">
                              Run your fingers across your cheek, then your neck. Is there a difference? Roughness, enlarged pores, or bumpy skin indicates dead cell build-up and congestion — the surface layer is holding onto what it should be shedding.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Hydration */}
                      <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <div className="flex items-start gap-3">
                          <Droplets className="w-5 h-5 text-[#C9A050] mt-0.5 shrink-0" />
                          <div>
                            <h3 className="font-medium text-sm text-gray-800 mb-2">3. Hydration Direction</h3>
                            <p className="text-gray-600 text-sm font-light leading-relaxed">
                              Look at your neck — it's hydrated from <em>below</em>. The skin looks matte, not glossy. That's deep hydration. Now look at your face — if it looks glossy and congested, that's moisture sitting <em>on top</em>, not beneath. Like pouring water on dead grass instead of watering the roots. The fix? Clear the dead layer first. Then hydration reaches where it matters.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Wrinkles in Motion */}
                      <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <div className="flex items-start gap-3">
                          <Activity className="w-5 h-5 text-[#C9A050] mt-0.5 shrink-0" />
                          <div>
                            <h3 className="font-medium text-sm text-gray-800 mb-2">4. Wrinkles in Motion</h3>
                            <p className="text-gray-600 text-sm font-light leading-relaxed">
                              Don't just look at your face at rest — <em>move it</em>. Smile, frown, raise your brows. Now stop. The lines that disappear at rest are dynamic — they're a few years away from becoming permanent. The ones that stay? They're already static. Check the upper <em>and</em> lower face — most people forget the chin, the mouth corners, and the neck. These are your early warning signals.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Volume Loss */}
                      <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <div className="flex items-start gap-3">
                          <span className="text-[#C9A050] mt-0.5 shrink-0 text-lg">◐</span>
                          <div>
                            <h3 className="font-medium text-sm text-gray-800 mb-2">5. Volume Loss</h3>
                            <p className="text-gray-600 text-sm font-light leading-relaxed">
                              Under-eye hollows making you look tired? Sunken cheeks creating a gaunt appearance? Sagging jowls softening your jawline? These aren't skin problems — they're volume problems. The fat pads beneath have deflated, and no cream or laser can replace what's been lost. This is where strategic filler creates the most dramatic, natural improvement.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA to AI Assessment */}
                    <div className="mt-8 bg-white border border-[#C9A050]/30 rounded-xl p-6 text-center shadow-sm">
                      <p className="text-gray-500 font-light text-sm mb-4">
                        Want a detailed analysis? Our free AI facial assessment evaluates your unique aesthetics profile and identifies your personal low-hanging fruit.
                      </p>
                      <a
                        href="https://ai.cosmedocs.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8913F] text-white px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
                      >
                        <Sparkles className="w-4 h-4" />
                        Free AI Facial Assessment
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Philosophy Intro */}
                  <div className="bg-amber-50 border-l-2 border-[#C9A050]/60 p-6 rounded-r-xl mb-10">
                    <p className="text-gray-700 font-light mb-1">Short, intelligent guidance to help you avoid aesthetic mistakes.</p>
                    <p className="text-gray-400 text-sm font-light">Dip in anywhere. Each principle stands alone.</p>
                  </div>

                  <div className="w-12 h-px bg-[#C9A050]/40 mb-6" />
                  <h2 className="text-2xl font-extralight text-gray-900 mb-6">The <span className="text-[#C9A050] font-light">Philosophy</span></h2>

                  <p className="text-xl italic text-gray-300 text-center my-8 font-extralight">
                    "You can't fix what you don't understand."
                  </p>

                  <div className="space-y-5 text-gray-600 font-light leading-relaxed">
                    <p>Every few months, the industry throws another miracle at you — ultrasound this, radiofrequency that, a laser with a colour name to make it sound scientific. They promise lift, glow, youth, redemption.</p>
                    <p>Here's the problem: your skin didn't suddenly forget how to be skin. Biology didn't change — marketing did.</p>
                    <p className="text-gray-800 font-normal">At CosmeDocs, we don't chase trends. We chase truth. Anatomy, not algorithms. Logic, not luck.</p>
                  </div>

                  <div className="mt-12 text-center">
                    <button
                      onClick={() => handleNav(0)}
                      className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8913F] text-white px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
                    >
                      Start Reading the Principles
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Principle 1 */}
              {currentPrincipleIndex === 0 && (
                <PrincipleArticle number={1} title="Why Most Treatments Fail" subtitle="The truth about wasted money" quote="The face isn't a project; it's a relationship.">
                  <P>Aesthetics got complicated. Everything's "natural," yet everyone looks edited. Devices multiply faster than wrinkles.</P>
                  <P>Underneath it all, the same rule still applies: simple works.</P>
                  <P>The face is architecture — bones, ligaments, fat pads, skin — each holding the other up. Lose one, the rest shifts. Patch one, and the crack moves somewhere else. You don't paint over cracks; you fix the foundation.</P>
                  <P>That's why we start with why. Why did it drop, dull, or deepen? Why are you chasing light with a laser when what you lost was volume?</P>
                  <P>The answers live in layers:</P>
                  <ul className="list-none space-y-3 pl-0">
                    <GoldBullet><strong className="text-gray-800">Epidermis</strong> — where renewal happens.</GoldBullet>
                    <GoldBullet><strong className="text-gray-800">Dermis</strong> — where strength lives.</GoldBullet>
                    <GoldBullet><strong className="text-gray-800">Muscle</strong> — the layer of contraction. Repeated expressions etch lines into skin, and over time, chronic contraction shortens the face.</GoldBullet>
                    <GoldBullet><strong className="text-gray-800">Fat pads</strong> — where contour hides.</GoldBullet>
                    <GoldBullet><strong className="text-gray-800">Ligaments</strong> — the truth about lift.</GoldBullet>
                  </ul>
                  <P>Once you know the layers, the rest is common sense dressed as science.</P>
                  <Insight>Trends change every quarter. Anatomy hasn't updated in a few million years.</Insight>
                  <PauseAndThink principleId="why-treatments-fail" />
                  <RelatedTreatments principleId="why-treatments-fail" />
                </PrincipleArticle>
              )}

              {/* Principle 2 */}
              {currentPrincipleIndex === 1 && (
                <PrincipleArticle number={2} title="Skin Is Not a Surface" subtitle="Understanding the layers" quote="The surface may be thin, but it holds the light of youth.">
                  <P>The skin — it's your first defence and your last disguise. The body's largest organ, the one thing you can't hide behind forever. It tells stories: how you sleep, how you eat, what you worry about.</P>
                  <P>The epidermis, that paper-thin outer layer, carries all your secrets. It reflects light, texture, and tone. When it's healthy, even a tired face looks alive. When it's dull, no amount of filler, no fancy device, no miracle serum can fake that light.</P>
                  <SectionHeading>The Layers of Youth</SectionHeading>
                  <P>The epidermis is built from keratinocytes — tiny cells that live fast and die young. They rise to the surface, harden, and form your armour. When you're young, this happens every few weeks, like clockwork. Then life happens. Time slows the cycle. Dead cells hang around longer than they should, muting your glow.</P>
                  <Insight>Think of your skin like glass — clarity depends on turnover, not thickness.</Insight>
                  <P>That's why at CosmeDocs, we don't start with needles; we start with renewal. Peels, retinol, medical-grade skincare — they're not indulgence, they're hygiene for the soul of your skin.</P>
                  <SectionHeading>Where Hydration Really Comes From</SectionHeading>
                  <p className="text-lg italic text-gray-300 font-extralight">"Moisture doesn't come from your cream — it comes from below."</p>
                  <P>Here's the truth nobody likes to hear: most dry skin isn't dehydrated — it's blocked. Dead skin is dry skin. Water doesn't diffuse through dead cell layers — it can't.</P>
                  <P>Your body already knows how to hydrate itself. Water rises from the dermis, through living tissue, to the surface. But when dead cells pile up, they form a wall.</P>
                  <P>The face doesn't get the luxury of natural exfoliation from clothing. It's exposed, unprotected, and accumulates faster than it sheds.</P>
                  <P>That's why at CosmeDocs, we don't just moisturise — we exfoliate. AHAs, chemical peels, medical-grade resurfacing — we clear the dead layer so water can do what it was always meant to do: rise.</P>
                  <PauseAndThink principleId="skin-not-surface" />
                  <RelatedTreatments principleId="skin-not-surface" />
                </PrincipleArticle>
              )}

              {/* Principle 3 — The 3-Cell Foundation */}
              {currentPrincipleIndex === 2 && (
                <PrincipleArticle number={3} title="The 3-Cell Foundation" subtitle="Keratinocytes, Melanocytes, Fibroblasts" quote="Every skin concern traces back to three cells.">
                  <P>Your skin contains over 30 cell types, but three are responsible for the vast majority of visible skin health. At CosmeDocs, we formulate our cosmeceuticals and design our clinical treatments around these three cellular pillars. Every product, every protocol, every recommendation maps back to this framework.</P>

                  <SectionHeading>1. Keratinocytes — The Barrier Builders</SectionHeading>
                  <P>Keratinocytes make up roughly 90% of the epidermis. They produce ceramides, fatty acids, and natural moisturising factors (NMFs). They are the reason your skin keeps moisture in and irritants out.</P>
                  <P>When keratinocyte function is compromised — through sun damage, harsh products, or neglect — you see dehydration, sensitivity, oiliness, and congestion. The barrier breaks down, and everything else follows.</P>
                  <Insight>Most "sensitive skin" isn't a skin type — it's a keratinocyte barrier in distress.</Insight>

                  <SectionHeading>2. Melanocytes — The Pigment Regulators</SectionHeading>
                  <P>Melanocytes live in the basal layer — roughly 5–10% of it — and produce melanin, the pigment that gives skin its colour and provides UV protection. They are exquisitely sensitive.</P>
                  <P>Dysfunction leads to hyperpigmentation, melasma, post-inflammatory marks, and uneven tone. The key insight: melanocyte regulation is dose-sensitive. Aggressive treatments can trigger rebound pigmentation, making things worse.</P>
                  <Insight>The goal is never to destroy melanocytes — it's to regulate them. Gently, consistently, intelligently.</Insight>

                  <SectionHeading>3. Fibroblasts — The Structure Makers</SectionHeading>
                  <P>Fibroblasts live in the dermis and produce the three pillars of youthful skin: collagen (structure), elastin (bounce), and hyaluronic acid (hydration). They are the construction workers of your face.</P>
                  <P>After age 25, fibroblast activity declines by roughly 1% per year. This is why injectable treatments like <Link to="/treatments/profhilo/" className="text-[#C9A050] hover:underline">Profhilo</Link> and <Link to="/treatments/polynucleotides/" className="text-[#C9A050] hover:underline">polynucleotides</Link> work — they directly stimulate dormant fibroblasts back into production.</P>

                  <SectionHeading>Why Target All Three?</SectionHeading>
                  <P>Most skin concerns — ageing, dullness, pigmentation, acne — involve dysfunction in at least two of these cell types. Targeting only one creates incomplete results. A patient with fine lines (fibroblasts) might also have sun spots (melanocytes) and dehydration (keratinocytes). Treating only the wrinkles misses two-thirds of the picture.</P>

                  <div className="overflow-x-auto mt-6">
                    <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="text-left p-3 font-semibold text-gray-700">Concern</th>
                          <th className="text-center p-3 font-semibold text-emerald-700">K</th>
                          <th className="text-center p-3 font-semibold text-purple-700">M</th>
                          <th className="text-center p-3 font-semibold text-cyan-700">F</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600">
                        <tr className="border-t"><td className="p-3">Fine lines & wrinkles</td><td className="p-3 text-center">—</td><td className="p-3 text-center">—</td><td className="p-3 text-center">✓✓</td></tr>
                        <tr className="border-t bg-gray-50/50"><td className="p-3">Hyperpigmentation</td><td className="p-3 text-center">✓</td><td className="p-3 text-center">✓✓</td><td className="p-3 text-center">—</td></tr>
                        <tr className="border-t"><td className="p-3">Acne & congestion</td><td className="p-3 text-center">✓✓</td><td className="p-3 text-center">—</td><td className="p-3 text-center">—</td></tr>
                        <tr className="border-t bg-gray-50/50"><td className="p-3">Dehydration</td><td className="p-3 text-center">✓✓</td><td className="p-3 text-center">—</td><td className="p-3 text-center">✓</td></tr>
                        <tr className="border-t"><td className="p-3">Sagging & laxity</td><td className="p-3 text-center">—</td><td className="p-3 text-center">—</td><td className="p-3 text-center">✓✓</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <SectionHeading>The AM/PM Protocol</SectionHeading>
                  <P>Our two core cosmeceuticals are designed as a complete daily protocol targeting all three cell types:</P>
                  <ul className="list-none space-y-3 pl-0">
                    <GoldBullet><strong className="text-gray-800">Morning — <Link to="/shop/vitamin-c-serum/" className="text-[#C9A050] hover:underline">Revitalise C20</Link>:</strong> 20% L-ascorbic acid protects keratinocyte barriers from oxidative damage, inhibits melanocyte tyrosinase, and provides the cofactor fibroblasts need for collagen synthesis.</GoldBullet>
                    <GoldBullet><strong className="text-gray-800">Evening — <Link to="/shop/retinol-cream/" className="text-[#C9A050] hover:underline">Stimulate RE (Retinol+)</Link>:</strong> Dual retinoids accelerate keratinocyte turnover, normalise melanocyte pigment distribution, and activate fibroblast retinoid receptors for new collagen production.</GoldBullet>
                  </ul>
                  <Insight>Two products. Three cell types. One philosophy. That's the foundation that makes professional treatments last.</Insight>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6 text-center">
                    <p className="text-sm text-gray-500 font-light mb-3">Explore the full 3-Cell Philosophy</p>
                    <Link to="/blog/three-cell-skin-philosophy/" className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#B8913F] font-medium text-sm transition-colors">
                      Read the Deep Dive <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <PauseAndThink principleId="three-cell-philosophy" />
                  <RelatedTreatments principleId="three-cell-philosophy" />
                </PrincipleArticle>
              )}

              {/* Principle 4 */}
              {currentPrincipleIndex === 3 && (
                <PrincipleArticle number={4} title="Structure Before Lift" subtitle="The dermis architecture" quote="Beauty isn't skin deep — it's dermis deep.">
                  <P>If the epidermis is the skin you see in the mirror, the dermis is the one that quietly holds it up. It's the scaffolding under the wallpaper — invisible until it starts to collapse. This is where strength, bounce, and resilience live.</P>
                  <SectionHeading>The Scaffolding Beneath the Smile</SectionHeading>
                  <P>The dermis is where collagen and elastin hang out — the two best friends you took for granted your whole life. Collagen gives firmness. Elastin gives snap. Together, they're the reason a 25-year-old can stay up all night and still look alive in the morning.</P>
                  <P>Then the slow fade begins. By your 30s, collagen starts packing its bags. By your 40s, elastin follows. Sunlight speeds it up. Sugar ruins it. Stress accelerates the exit.</P>
                  <Insight>You don't age. You decompress.</Insight>
                  <SectionHeading>Why Tightening Alone Doesn't Work</SectionHeading>
                  <P>Here's the dirty secret behind "skin tightening": you can't tighten what isn't supported. High-energy devices try to shrink collagen, but if the fat below is gone and the ligaments are loose, all you're doing is pulling on an empty tent.</P>
                  <P>That's why some people chase ultrasound, RF, lasers — and still look hollow. They're fixing the wallpaper when the wall's already crumbling.</P>
                  <p className="text-lg italic text-gray-300 text-center font-extralight">"You can't heat your way out of lost volume."</p>
                  <P>At CosmeDocs, we rebuild from the foundation up. Once the dermis has something to grip again — volume, hydration, structure — it remembers how to hold you up.</P>
                  <PauseAndThink principleId="structure-before-lift" />
                  <RelatedTreatments principleId="structure-before-lift" />
                </PrincipleArticle>
              )}

              {/* Principle 5 */}
              {currentPrincipleIndex === 4 && (
                <PrincipleArticle number={5} title="The Volume Story" subtitle="Fat, muscle & the first signs of time" quote="The third layer tells the truth — softly, then louder.">
                  <P>Beneath the dermis lies the soft layer — subcutaneous fat, fascia, muscle. This is where the real shaping happens. Where your contours are born. Cheekbones don't emerge from bone alone; they rise on pillows of fat that give softness to angles.</P>
                  <P>In youth, fat pads sit high and full — in the cheeks, temples, under the eyes, around the jawline. They make the face look lifted without anyone lifting it.</P>
                  <SectionHeading>What Happens When Fat Shifts</SectionHeading>
                  <P>Fat doesn't just disappear — it migrates. It slides. It pools where gravity calls.</P>
                  <ul className="list-none space-y-3 pl-0">
                    <GoldBullet>Upper cheeks deflate → nasolabial folds deepen</GoldBullet>
                    <GoldBullet>Temples hollow → the forehead looks longer, harder</GoldBullet>
                    <GoldBullet>Jawline fat descends → jowls form, chin softens</GoldBullet>
                    <GoldBullet>Under-eye fat separates → tear troughs appear</GoldBullet>
                  </ul>
                  <Insight>You don't lose youth. You lose distribution.</Insight>
                  <P>This is the layer most treatments ignore. Most lasers can't reach it. Most creams can't rebuild it. Only strategic volumisation — filler placed where structure once was — can reverse the descent.</P>
                  <PauseAndThink principleId="volume-story" />
                  <RelatedTreatments principleId="volume-story" />
                </PrincipleArticle>
              )}

              {/* Principle 5 */}
              {currentPrincipleIndex === 4 && (
                <PrincipleArticle number={5} title="The Thirties Shift" subtitle="When structure changes" quote="The thirties whisper what the forties will say out loud.">
                  <P>The thirties are when the mirror starts telling the truth. Not harshly — just honestly. You wake up with pillow creases that last longer. That line between your brows stopped leaving when you stopped frowning. Something subtle shifted.</P>
                  <SectionHeading>The First Signs</SectionHeading>
                  <ul className="list-none space-y-3 pl-0">
                    <GoldBullet>Collagen production slows by about 1% each year after 25</GoldBullet>
                    <GoldBullet>Bone resorption begins, especially around the eyes and jaw</GoldBullet>
                    <GoldBullet>Fat pads start to separate — the malar pad descends slightly</GoldBullet>
                    <GoldBullet>Expression lines begin etching into the skin permanently</GoldBullet>
                  </ul>
                  <Insight>The thirties aren't about repair. They're about prevention with precision.</Insight>
                  <SectionHeading>The Smart Approach</SectionHeading>
                  <P>This is when "baby Botox" makes sense — small doses to soften, not freeze. Skin boosters to maintain hydration. SPF religiously. Retinol carefully.</P>
                  <P>The goal isn't to stop time. It's to age on your own terms.</P>
                  <RelatedTreatments principleId="thirties-shift" />
                </PrincipleArticle>
              )}

              {/* Principle 6 */}
              {currentPrincipleIndex === 5 && (
                <PrincipleArticle number={6} title="The Forties Logic" subtitle="The era of lift" quote="The forties demand strategy, not just products.">
                  <P>By now, the whispers have become statements. Jowls are forming. The jawline isn't as sharp. Eyelids feel heavier. Nasolabial folds have settled in permanently.</P>
                  <P>This is when the face needs more than surface treatments. It needs architecture — strategic volume, calculated lift, intelligent relaxation of overworked muscles.</P>
                  <SectionHeading>The 40s Treatment Philosophy</SectionHeading>
                  <ul className="list-none space-y-3 pl-0">
                    <GoldBullet><strong className="text-gray-800">1. Restore volume first</strong> — cheeks, temples, under-eyes</GoldBullet>
                    <GoldBullet><strong className="text-gray-800">2. Lift strategically</strong> — threads, targeted filler placement</GoldBullet>
                    <GoldBullet><strong className="text-gray-800">3. Relax selectively</strong> — Botox where tension creates lines</GoldBullet>
                    <GoldBullet><strong className="text-gray-800">4. Rebuild skin quality</strong> — Profhilo, polynucleotides</GoldBullet>
                  </ul>
                  <Insight>The 40s require a plan, not a product. Each treatment should support the next.</Insight>
                  <RelatedTreatments principleId="forties-lift" />
                </PrincipleArticle>
              )}

              {/* Principle 7 */}
              {currentPrincipleIndex === 6 && (
                <PrincipleArticle number={7} title="The Fifties Elegance" subtitle="Elasticity & energy" quote="The fifties are about elegance, not erasure.">
                  <P>By fifty, you know your face. You've lived in it. The question isn't "how do I look younger?" — it's "how do I look like the best version of myself?"</P>
                  <P>Skin laxity is more pronounced. The neck may need attention. Perioral lines appear. Marionette lines deepen. But there's also something beautiful: character, confidence, wisdom lines.</P>
                  <SectionHeading>The 50s Philosophy</SectionHeading>
                  <ul className="list-none space-y-3 pl-0">
                    <GoldBullet><strong className="text-gray-800">Global approach</strong> — treat face, neck, décolletage together</GoldBullet>
                    <GoldBullet><strong className="text-gray-800">Skin resurfacing</strong> — lasers for texture, tone, sun damage</GoldBullet>
                    <GoldBullet><strong className="text-gray-800">Surgical consideration</strong> — when non-surgical reaches its limits</GoldBullet>
                    <GoldBullet><strong className="text-gray-800">Maintenance mindset</strong> — regular touch-ups over dramatic interventions</GoldBullet>
                  </ul>
                  <Insight>The goal is harmony, not youth. Looking refreshed, not changed.</Insight>
                  <RelatedTreatments principleId="fifties-elegance" />
                </PrincipleArticle>
              )}

              {/* Principle 8 */}
              {currentPrincipleIndex === 7 && (
                <PrincipleArticle number={8} title="When Not to Treat" subtitle="The wisdom of restraint" quote="Sometimes the best treatment is no treatment.">
                  <P>This might be the most important principle of all. Not everything needs fixing. Not every line is a problem. Some faces are chased into looking worse by practitioners who can't say no.</P>
                  <SectionHeading>Signs You Don't Need Treatment</SectionHeading>
                  <ul className="list-none space-y-3 pl-0">
                    {["You want to look like someone else", "You're chasing a filter or Photoshop version of yourself", "The \"problem\" only exists in bad lighting or extreme close-ups", "You've had treatment recently and want \"just a little more\"", "You're making the decision emotionally, not rationally"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-red-500 mt-1 text-xs">✗</span>
                        <span className="text-gray-600 font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <SectionHeading>Signs Treatment Might Help</SectionHeading>
                  <ul className="list-none space-y-3 pl-0">
                    {["You look tired when you're not", "Your reflection doesn't match how you feel inside", "You want subtle enhancement, not transformation", "You've researched and understand what's realistic"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#C9A050] mt-1 text-xs">✓</span>
                        <span className="text-gray-600 font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Insight>At CosmeDocs, we're proud of the treatments we don't do as much as the ones we do.</Insight>
                  <RelatedTreatments principleId="when-not-to-treat" />
                </PrincipleArticle>
              )}

              {/* Principle 9 */}
              {currentPrincipleIndex === 8 && (
                <PrincipleArticle number={9} title="Core Principles" subtitle="The CosmeDocs philosophy" quote="Our aesthetics is invisible art.">
                  <P>After everything you've read, here are the principles we live by at CosmeDocs. They're not trends. They're not marketing. They're the foundation of everything we do.</P>
                  <div className="space-y-4 mt-8">
                    {[
                      { n: "1. Anatomy First", d: "Understand the structure before reaching for the syringe." },
                      { n: "2. Depth Matters", d: "The right treatment at the wrong depth is the wrong treatment." },
                      { n: "3. Less is More", d: "Subtlety is a skill. Restraint is a virtue." },
                      { n: "4. Build, Don't Patch", d: "Restore the foundation. The surface will follow." },
                      { n: "5. You, But Refined", d: "The goal is always enhancement, never replacement." },
                    ].map((p, i) => (
                      <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                        <p className="text-sm font-medium text-[#C9A050] mb-1.5">{p.n}</p>
                        <p className="text-gray-500 text-sm font-light">{p.d}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-amber-50 border-l-2 border-[#C9A050]/60 p-5 rounded-r-xl mt-8">
                    <p className="text-gray-500 text-sm font-light italic leading-relaxed">
                      "Quiet, not loud. Invisible, not exaggerated. Transformation that speaks — without saying a word."
                    </p>
                  </div>
                  <RelatedTreatments principleId="core-principles" />
                </PrincipleArticle>
              )}

              {/* Navigation */}
              {currentPrincipleIndex >= 0 && (
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
                  <button
                    onClick={() => handleNav(currentPrincipleIndex - 1)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 hover:border-[#C9A050]/60 rounded-full text-sm text-gray-500 hover:text-[#C9A050] transition-all"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    {currentPrincipleIndex === 0 ? "Back to Start" : "Previous"}
                  </button>
                  {currentPrincipleIndex < principles.length - 1 && (
                    <button
                      onClick={() => handleNav(currentPrincipleIndex + 1)}
                      className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8913F] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                    >
                      Next Principle
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}
            </div>
          </main>
        </div>

        {/* Hidden SEO */}
        <div className="sr-only" aria-hidden="true">
          <p>Smart aesthetics series CosmeDocs Harley Street aesthetic education facial ageing skin rejuvenation dermal fillers botox non-surgical procedures cosmetic medicine anti-ageing treatments. Our aesthetics is invisible art — bold, natural, always your way.</p>
        </div>
      </div>
    </>
  );
}
