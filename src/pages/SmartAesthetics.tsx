import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Lightbulb, Menu, MessageCircle, Sparkles } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import { motion } from "framer-motion";
import SmartAestheticsSidebar from "@/components/smart-aesthetics/SmartAestheticsSidebar";
import PauseAndThink from "@/components/smart-aesthetics/PauseAndThink";
import RelatedTreatments from "@/components/smart-aesthetics/RelatedTreatments";

const principles = [
  { id: "why-treatments-fail", title: "Why Most Treatments Fail", subtitle: "The truth about wasted money" },
  { id: "skin-not-surface", title: "Skin Is Not a Surface", subtitle: "Understanding the layers" },
  { id: "structure-before-lift", title: "Structure Before Lift", subtitle: "The dermis architecture" },
  { id: "volume-story", title: "The Volume Story", subtitle: "Fat, muscle & first signs of time" },
  { id: "thirties-shift", title: "The Thirties Shift", subtitle: "When structure changes" },
  { id: "forties-lift", title: "The Forties Logic", subtitle: "The era of lift" },
  { id: "fifties-elegance", title: "The Fifties Elegance", subtitle: "Elasticity & energy" },
  { id: "when-not-to-treat", title: "When Not to Treat", subtitle: "The wisdom of restraint" },
  { id: "core-principles", title: "Core Principles", subtitle: "The CosmeDocs philosophy" },
];

// Shared article wrapper for dark-theme principle content
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
      <h1 className="text-3xl md:text-4xl font-extralight mt-3 mb-2 tracking-tight">{title}</h1>
      <p className="text-white/30 text-sm font-light">{subtitle}</p>
    </div>
    <p className="text-xl italic text-white/30 text-center py-4 font-extralight">"{quote}"</p>
    {children}
  </motion.article>
);

// Reusable styled blocks
const Insight = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white/[0.03] border-l-2 border-[#C9A050]/40 p-5 rounded-r-xl">
    <p className="text-sm font-medium text-[#C9A050] mb-2">Key Insight</p>
    <p className="text-white/40 text-sm font-light leading-relaxed">{children}</p>
  </div>
);

const GoldBullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span className="text-[#C9A050] mt-1.5 text-xs">●</span>
    <span className="text-white/45 font-light leading-relaxed">{children}</span>
  </li>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className="w-12 h-px bg-[#C9A050]/40 mt-8 mb-6" />
    <h3 className="text-xl md:text-2xl font-extralight mb-4">{children}</h3>
  </>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-white/45 font-light leading-relaxed">{children}</p>
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

      <div className="min-h-screen bg-black text-white">
        <div className="flex">
          {/* Mobile overlay */}
          {sidebarOpen && (
            <div className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setSidebarOpen(false)}>
              <div className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-black/95 border-r border-white/[0.06] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <SmartAestheticsSidebar principles={principles} currentIndex={currentPrincipleIndex} onSelect={handleNav} onClose={() => setSidebarOpen(false)} isMobile />
              </div>
            </div>
          )}

          {/* Desktop sidebar */}
          <aside className="hidden lg:block lg:w-72 border-r border-white/[0.06] bg-black sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto">
            <SmartAestheticsSidebar principles={principles} currentIndex={currentPrincipleIndex} onSelect={handleNav} />
          </aside>

          {/* Main content */}
          <main className="flex-1 relative">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden fixed top-28 left-4 z-30 p-2.5 bg-white/[0.05] border border-white/[0.1] rounded-xl backdrop-blur-sm hover:bg-[#C9A050]/20 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4 text-white/60" />
            </button>

            <div className="max-w-3xl mx-auto px-6 md:px-8 py-12">
              {/* Entry Block */}
              {currentPrincipleIndex === -1 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  {/* Hero */}
                  <div className="text-center mb-12">
                    <span className="text-[#C9A050] text-xs font-medium tracking-[0.25em] uppercase">Smart Aesthetics Series</span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight mt-4 mb-4 tracking-tight">
                      Before You Choose a <span className="text-[#C9A050] font-light">Treatment</span>
                    </h1>
                    <p className="text-white/40 text-lg font-light">Answer one question:</p>
                  </div>

                  {/* Core Question */}
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 md:p-12 text-center mb-10">
                    <p className="text-xl md:text-2xl font-extralight text-white/80 mb-4">
                      What actually changes in the face as we age?
                    </p>
                    <p className="text-white/30 font-light">
                      Most people guess wrong — and that's why they waste money.
                    </p>
                  </div>

                  {/* Three Actions */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    <button
                      onClick={() => handleNav(0)}
                      className="group flex flex-col items-center gap-3 p-6 bg-white/[0.03] border border-white/[0.08] hover:border-[#C9A050]/40 rounded-2xl transition-all duration-300"
                    >
                      <Lightbulb className="w-7 h-7 text-[#C9A050] group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-sm text-white/80">Read the Thinking</span>
                      <span className="text-xs text-white/30">Learn the principles</span>
                    </button>
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent("open-chatbot"))}
                      className="group flex flex-col items-center gap-3 p-6 bg-white/[0.03] border border-white/[0.08] hover:border-[#C9A050]/40 rounded-2xl transition-all duration-300"
                    >
                      <MessageCircle className="w-7 h-7 text-[#C9A050] group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-sm text-white/80">Ask Our AI Doctor</span>
                      <span className="text-xs text-white/30">Get instant answers</span>
                    </button>
                    <a
                      href="https://ai.cosmedocs.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-3 p-6 bg-white/[0.03] border border-white/[0.08] hover:border-[#C9A050]/40 rounded-2xl transition-all duration-300"
                    >
                      <Sparkles className="w-7 h-7 text-[#C9A050] group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-sm text-white/80">Free AI Assessment</span>
                      <span className="text-xs text-white/30">Analyse your face</span>
                    </a>
                  </div>

                  {/* Philosophy Intro */}
                  <div className="bg-white/[0.03] border-l-2 border-[#C9A050]/40 p-6 rounded-r-xl mb-10">
                    <p className="text-white/70 font-light mb-1">Short, intelligent guidance to help you avoid aesthetic mistakes.</p>
                    <p className="text-white/30 text-sm font-light">Dip in anywhere. Each principle stands alone.</p>
                  </div>

                  <div className="w-12 h-px bg-[#C9A050]/40 mb-6" />
                  <h2 className="text-2xl font-extralight mb-6">The <span className="text-[#C9A050] font-light">Philosophy</span></h2>

                  <p className="text-xl italic text-white/25 text-center my-8 font-extralight">
                    "You can't fix what you don't understand."
                  </p>

                  <div className="space-y-5 text-white/45 font-light leading-relaxed">
                    <p>Every few months, the industry throws another miracle at you — ultrasound this, radiofrequency that, a laser with a colour name to make it sound scientific. They promise lift, glow, youth, redemption.</p>
                    <p>Here's the problem: your skin didn't suddenly forget how to be skin. Biology didn't change — marketing did.</p>
                    <p className="text-white/60 font-normal">At CosmeDocs, we don't chase trends. We chase truth. Anatomy, not algorithms. Logic, not luck.</p>
                  </div>

                  <div className="mt-12 text-center">
                    <button
                      onClick={() => handleNav(0)}
                      className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8913F] text-black px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
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
                    <GoldBullet><strong className="text-white/70">Epidermis</strong> — where renewal happens.</GoldBullet>
                    <GoldBullet><strong className="text-white/70">Dermis</strong> — where strength lives.</GoldBullet>
                    <GoldBullet><strong className="text-white/70">Muscle</strong> — the layer of contraction. Repeated expressions etch lines into skin, and over time, chronic contraction shortens the face.</GoldBullet>
                    <GoldBullet><strong className="text-white/70">Fat pads</strong> — where contour hides.</GoldBullet>
                    <GoldBullet><strong className="text-white/70">Ligaments</strong> — the truth about lift.</GoldBullet>
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
                  <p className="text-lg italic text-white/25 font-extralight">"Moisture doesn't come from your cream — it comes from below."</p>
                  <P>Here's the truth nobody likes to hear: most dry skin isn't dehydrated — it's blocked. Dead skin is dry skin. Water doesn't diffuse through dead cell layers — it can't.</P>
                  <P>Your body already knows how to hydrate itself. Water rises from the dermis, through living tissue, to the surface. But when dead cells pile up, they form a wall.</P>
                  <P>The face doesn't get the luxury of natural exfoliation from clothing. It's exposed, unprotected, and accumulates faster than it sheds.</P>
                  <P>That's why at CosmeDocs, we don't just moisturise — we exfoliate. AHAs, chemical peels, medical-grade resurfacing — we clear the dead layer so water can do what it was always meant to do: rise.</P>
                  <PauseAndThink principleId="skin-not-surface" />
                  <RelatedTreatments principleId="skin-not-surface" />
                </PrincipleArticle>
              )}

              {/* Principle 3 */}
              {currentPrincipleIndex === 2 && (
                <PrincipleArticle number={3} title="Structure Before Lift" subtitle="The dermis architecture" quote="Beauty isn't skin deep — it's dermis deep.">
                  <P>If the epidermis is the skin you see in the mirror, the dermis is the one that quietly holds it up. It's the scaffolding under the wallpaper — invisible until it starts to collapse. This is where strength, bounce, and resilience live.</P>
                  <SectionHeading>The Scaffolding Beneath the Smile</SectionHeading>
                  <P>The dermis is where collagen and elastin hang out — the two best friends you took for granted your whole life. Collagen gives firmness. Elastin gives snap. Together, they're the reason a 25-year-old can stay up all night and still look alive in the morning.</P>
                  <P>Then the slow fade begins. By your 30s, collagen starts packing its bags. By your 40s, elastin follows. Sunlight speeds it up. Sugar ruins it. Stress accelerates the exit.</P>
                  <Insight>You don't age. You decompress.</Insight>
                  <SectionHeading>Why Tightening Alone Doesn't Work</SectionHeading>
                  <P>Here's the dirty secret behind "skin tightening": you can't tighten what isn't supported. High-energy devices try to shrink collagen, but if the fat below is gone and the ligaments are loose, all you're doing is pulling on an empty tent.</P>
                  <P>That's why some people chase ultrasound, RF, lasers — and still look hollow. They're fixing the wallpaper when the wall's already crumbling.</P>
                  <p className="text-lg italic text-white/25 text-center font-extralight">"You can't heat your way out of lost volume."</p>
                  <P>At CosmeDocs, we rebuild from the foundation up. Once the dermis has something to grip again — volume, hydration, structure — it remembers how to hold you up.</P>
                  <PauseAndThink principleId="structure-before-lift" />
                  <RelatedTreatments principleId="structure-before-lift" />
                </PrincipleArticle>
              )}

              {/* Principle 4 */}
              {currentPrincipleIndex === 3 && (
                <PrincipleArticle number={4} title="The Volume Story" subtitle="Fat, muscle & the first signs of time" quote="The third layer tells the truth — softly, then louder.">
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
                    <GoldBullet><strong className="text-white/70">1. Restore volume first</strong> — cheeks, temples, under-eyes</GoldBullet>
                    <GoldBullet><strong className="text-white/70">2. Lift strategically</strong> — threads, targeted filler placement</GoldBullet>
                    <GoldBullet><strong className="text-white/70">3. Relax selectively</strong> — Botox where tension creates lines</GoldBullet>
                    <GoldBullet><strong className="text-white/70">4. Rebuild skin quality</strong> — Profhilo, polynucleotides</GoldBullet>
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
                    <GoldBullet><strong className="text-white/70">Global approach</strong> — treat face, neck, décolletage together</GoldBullet>
                    <GoldBullet><strong className="text-white/70">Skin resurfacing</strong> — lasers for texture, tone, sun damage</GoldBullet>
                    <GoldBullet><strong className="text-white/70">Surgical consideration</strong> — when non-surgical reaches its limits</GoldBullet>
                    <GoldBullet><strong className="text-white/70">Maintenance mindset</strong> — regular touch-ups over dramatic interventions</GoldBullet>
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
                        <span className="text-red-400/70 mt-1 text-xs">✗</span>
                        <span className="text-white/45 font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <SectionHeading>Signs Treatment Might Help</SectionHeading>
                  <ul className="list-none space-y-3 pl-0">
                    {["You look tired when you're not", "Your reflection doesn't match how you feel inside", "You want subtle enhancement, not transformation", "You've researched and understand what's realistic"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#C9A050] mt-1 text-xs">✓</span>
                        <span className="text-white/45 font-light leading-relaxed">{item}</span>
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
                      <div key={i} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5">
                        <p className="text-sm font-medium text-[#C9A050] mb-1.5">{p.n}</p>
                        <p className="text-white/40 text-sm font-light">{p.d}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/[0.03] border-l-2 border-[#C9A050]/40 p-5 rounded-r-xl mt-8">
                    <p className="text-white/40 text-sm font-light italic leading-relaxed">
                      "Quiet, not loud. Invisible, not exaggerated. Transformation that speaks — without saying a word."
                    </p>
                  </div>
                  <RelatedTreatments principleId="core-principles" />
                </PrincipleArticle>
              )}

              {/* Navigation */}
              {currentPrincipleIndex >= 0 && (
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/[0.06]">
                  <button
                    onClick={() => handleNav(currentPrincipleIndex - 1)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/[0.1] hover:border-[#C9A050]/40 rounded-full text-sm text-white/50 hover:text-[#C9A050] transition-all"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    {currentPrincipleIndex === 0 ? "Back to Start" : "Previous"}
                  </button>
                  {currentPrincipleIndex < principles.length - 1 && (
                    <button
                      onClick={() => handleNav(currentPrincipleIndex + 1)}
                      className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8913F] text-black px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                    >
                      Next Principle
                      <ChevronRight className="h-4 w-4" />
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
