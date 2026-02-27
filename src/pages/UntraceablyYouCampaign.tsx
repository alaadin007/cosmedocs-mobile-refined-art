import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { generateSEOMetadata } from "@/utils/seo";
import { Link } from "react-router-dom";
import { Clock, Award, ArrowRight } from "lucide-react";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogAuthorEEAT from "@/components/blog/BlogAuthorEEAT";
import campaignImage1 from "@/assets/campaign-before-after-1.jpeg";
import campaignImage2 from "@/assets/campaign-before-after-2.jpeg";

export default function UntraceablyYouCampaign() {
  const seoData = generateSEOMetadata(
    "Untraceably You: How to Look 5–10 Years Younger Naturally | CosmeDocs",
    "The philosophy behind looking younger without anyone knowing. Why invisible results require more skill than dramatic ones — and how Harley Street doctors approach subtle rejuvenation.",
    "/untraceably-you/"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Untraceably You — How to Look 5–10 Years Younger Without Anyone Knowing",
    description: seoData.description,
    author: { "@type": "Organization", name: "CosmeDocs", url: "https://www.cosmedocs.com" },
    publisher: { "@type": "Organization", name: "CosmeDocs" },
    datePublished: "2025-01-11",
    dateModified: "2026-02-09",
    mainEntityOfPage: "https://www.cosmedocs.com/untraceably-you/",
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/untraceably-you/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/untraceably-you/" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-40 left-[-10%] w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201,160,80,0.04) 0%, transparent 60%)' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-[#C9A050] text-xs font-medium tracking-[0.25em] uppercase">Clinical Philosophy</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight mt-4 mb-6 leading-[1.15] tracking-tight">
                <span className="text-[#C9A050] font-light">Untraceably You</span>
                <br className="hidden sm:block" />
                <span className="text-white/60 text-2xl sm:text-3xl md:text-4xl">Look 5–10 Years Younger Without Anyone Knowing</span>
              </h1>
              <p className="text-white/40 text-lg font-light max-w-2xl mx-auto mb-8">
                The hardest result in aesthetic medicine isn't dramatic. It's invisible. Here's why.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-xs text-white/30">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 8 min read</span>
                <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5" /> Doctor-led insight</span>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-[#C9A050]/40" />
        </section>

        {/* Content + Sidebar */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-[1fr_240px] gap-12">
            <article className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-8">

                {/* Opening */}
                <p className="text-white/45 text-lg font-light leading-relaxed">
                  There's a paradox at the heart of aesthetic medicine that most clinics never talk about. The patients who look the best after treatment are the ones nobody suspects have had anything done. And achieving that — true undetectability — is exponentially harder than producing a visible result.
                </p>
                <p className="text-white/45 font-light leading-relaxed">
                  Anyone with a syringe can add volume. It takes a doctor who understands facial architecture, light physics, and the psychology of perception to take five or ten years off someone's face and leave no trace. That's the philosophy behind "Untraceably You" — not a package, but a principle.
                </p>

                {/* Clinical Image 1 */}
                <div className="my-8 rounded-xl overflow-hidden border border-white/[0.08]">
                  <img src={campaignImage1} alt="Natural facial rejuvenation showing subtle volume restoration — patient appears refreshed without visible signs of treatment" className="w-full object-cover max-h-[420px]" loading="lazy" />
                  <div className="px-4 py-3 bg-white/[0.02] border-t border-white/[0.06]">
                    <p className="text-xs text-white/30 font-light italic">Subtle volume restoration and skin quality improvement. The goal: you look rested, not treated.</p>
                  </div>
                </div>

                {/* Why Invisible Is Harder */}
                <div className="pt-6">
                  <div className="w-12 h-px bg-[#C9A050]/40 mb-6" />
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">Why Invisible Is <span className="text-[#C9A050] font-light">Harder</span></h2>

                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    When someone walks into a room and looks "done," that's a failure of subtlety, not a success of treatment. The human eye is extraordinarily sensitive to facial asymmetry, unnatural volume distribution, and surface irregularity. We evolved to read faces — it's one of our most sophisticated cognitive skills. Fooling that system requires precision that most practitioners underestimate.
                  </p>
                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    The difference between "you look amazing" and "have you had work done?" is measured in tenths of a millilitre. It's the difference between placing filler on top of bone versus within soft tissue. Between treating the right layer and the wrong one. Between understanding what a face needs and giving it what the patient asks for — which are often two entirely different things.
                  </p>

                  <div className="bg-white/[0.03] border-l-2 border-[#C9A050]/40 p-5 rounded-r-xl mb-6">
                    <p className="text-sm font-medium text-[#C9A050] mb-2">Clinical principle</p>
                    <p className="text-white/40 text-sm font-light leading-relaxed">
                      The most natural results come from treating the cause of ageing, not its symptoms. We don't chase wrinkles — we restore the architecture that once prevented them.
                    </p>
                  </div>
                </div>

                {/* The Three Pillars */}
                <div className="pt-6">
                  <div className="w-12 h-px bg-[#C9A050]/40 mb-6" />
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">The Three Pillars of <span className="text-[#C9A050] font-light">Invisible Rejuvenation</span></h2>

                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    After 17 years and over a million injections, we've distilled the art of undetectable results into three interconnected pillars. Miss one, and the illusion breaks.
                  </p>

                  <div className="space-y-4 mb-6">
                    {[
                      {
                        title: "1. Structural Restoration",
                        desc: "The face ages in layers — bone recedes, fat pads descend, ligaments loosen, skin loses elasticity. Visible ageing is the cumulative effect of all four. Treating only the surface is like repainting a house with crumbling foundations. We start deep: restoring the scaffolding that once held everything in place. When the foundation is right, the surface follows naturally.",
                        link: { text: "How structural ageing works", path: "/aesthetic-treatments-made-easy" },
                      },
                      {
                        title: "2. Skin Quality",
                        desc: "Volume without skin quality looks wrong. The light doesn't bounce the same way off dehydrated, textured skin — regardless of how well the underlying structure is restored. Collagen stimulation, skin boosters, and targeted resurfacing create the canvas that makes everything else believable. This is the step most clinics skip, and it's why their results look 'done.'",
                        link: { text: "Explore skin rejuvenation", path: "/treatments/skin-rejuvenation/" },
                      },
                      {
                        title: "3. Expression Harmony",
                        desc: "A face that can't move looks treated. A face that moves naturally — with subtle muscle relaxation where tension creates ageing — looks refreshed. The goal isn't to freeze expression but to soften the mechanics that etch lines into the skin over time. This requires precision dosing: enough to prevent damage, not enough to flatten personality.",
                        link: { text: "Understanding muscle relaxation", path: "/treatments/botox/" },
                      },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5">
                        <h3 className="text-sm font-medium text-[#C9A050] mb-2">{item.title}</h3>
                        <p className="text-white/35 text-sm font-light leading-relaxed">{item.desc}</p>
                        <Link to={item.link.path} className="inline-flex items-center gap-1 text-xs text-[#C9A050]/60 hover:text-[#C9A050] mt-3 transition-colors">
                          {item.link.text} <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clinical Image 2 */}
                <div className="my-8 rounded-xl overflow-hidden border border-white/[0.08]">
                  <img src={campaignImage2} alt="Before and after subtle anti-ageing treatment — wrinkle softening and natural facial rejuvenation with no visible signs of intervention" className="w-full object-cover max-h-[420px]" loading="lazy" />
                  <div className="px-4 py-3 bg-white/[0.02] border-t border-white/[0.06]">
                    <p className="text-xs text-white/30 font-light italic">Wrinkle softening and contour refinement. The patient looks like themselves — just rested.</p>
                  </div>
                </div>

                {/* Who This Is For */}
                <div className="pt-6">
                  <div className="w-12 h-px bg-[#C9A050]/40 mb-6" />
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">Who This <span className="text-[#C9A050] font-light">Philosophy Suits</span></h2>

                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    Not everyone wants invisible results. Some patients want visible change — a more defined jawline, fuller lips, a sculpted look. That's valid, and we do that too. But the "Untraceably You" philosophy is for a specific kind of patient: someone who values subtlety over statement. Someone who'd rather hear "you look well" than "who did your lips?"
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {[
                      { title: "You look tired — but you're not", desc: "Friends comment on how tired you look when you're actually sleeping well. The face is losing its resting vitality." },
                      { title: "You photograph differently now", desc: "Photos from five years ago show a different contour. Not dramatically — just enough that you notice the shift." },
                      { title: "You want prevention, not correction", desc: "You'd rather maintain what you have than chase what you've lost. Gradual, planned, intelligent." },
                      { title: "You value discretion", desc: "Your professional or personal life requires that treatment remains private. No questions. Just quiet improvement." },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5">
                        <h3 className="text-sm font-medium text-[#C9A050] mb-2">{item.title}</h3>
                        <p className="text-white/35 text-sm font-light leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* The Consultation Difference */}
                <div className="pt-6">
                  <div className="w-12 h-px bg-[#C9A050]/40 mb-6" />
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">Why the Consultation <span className="text-[#C9A050] font-light">Changes Everything</span></h2>

                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    The single biggest determinant of whether you'll get a natural result isn't the product, the technique, or the technology. It's the conversation before any of that happens. A proper consultation is where the doctor assesses not just your face but your expectations, your lifestyle, your tolerance for change, and your definition of "natural."
                  </p>
                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    At CosmeDocs, consultations are conducted by the treating doctor — not a coordinator, not an aesthetician, not a sales team. The person assessing you is the person injecting you. This matters because the assessment and the execution are inseparable. A doctor who hasn't assessed your face shouldn't be treating it.
                  </p>
                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    We may recommend a combination of approaches — perhaps{" "}
                    <Link to="/treatments/dermal-fillers/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">subtle volume restoration</Link>,{" "}
                    <Link to="/treatments/skin-rejuvenation/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">skin quality treatment</Link>, and{" "}
                    <Link to="/treatments/botox/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">targeted muscle relaxation</Link>{" "}
                    — staged over several appointments rather than done all at once. Gradual change is undetectable change. Rush it, and the illusion breaks.
                  </p>

                  <div className="bg-white/[0.03] border-l-2 border-[#C9A050]/40 p-5 rounded-r-xl mb-6">
                    <p className="text-sm font-medium text-[#C9A050] mb-2">When we say no</p>
                    <p className="text-white/40 text-sm font-light leading-relaxed">
                      If the result you want can't be achieved subtly, we'll tell you. If what you're asking for would look obvious, we'll explain why. The treatments we decline define us as much as the ones we perform. Our aesthetics is invisible art — bold, natural, always your way.
                    </p>
                  </div>
                </div>

                {/* The Long Game */}
                <div className="pt-6">
                  <div className="w-12 h-px bg-[#C9A050]/40 mb-6" />
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">Playing the <span className="text-[#C9A050] font-light">Long Game</span></h2>

                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    The patients who look the best at 55 are the ones who started thinking about maintenance at 35. Not aggressively — just intelligently. A skin booster here, a touch of relaxation there, the occasional volume top-up to counter the slow descent of fat pads. Each appointment is a small recalibration rather than a dramatic intervention.
                  </p>
                  <p className="text-white/45 font-light leading-relaxed mb-8">
                    This is why{" "}
                    <Link to="/long-term-aesthetic-care-blog" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">practitioner continuity</Link>{" "}
                    matters. A doctor who's been watching your face evolve over years can calibrate with a precision that a first-time visit can't replicate. Understanding{" "}
                    <Link to="/aesthetic-maintenance-cost-blog" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">how to budget for long-term care</Link>{" "}
                    turns aesthetic medicine from an expense into a strategy.
                  </p>

                  {/* CTA */}
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 text-center">
                    <h3 className="text-xl font-extralight mb-3">Ready to Look Like <span className="text-[#C9A050] font-light">Yourself — Refreshed?</span></h3>
                    <p className="text-white/35 text-sm font-light mb-6">Book a consultation with one of our Harley Street doctors. No pressure. Just an honest assessment of what's possible — and what's wise.</p>
                    <a
                      href="https://med.as.me/harleystreet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#C9A050] hover:bg-[#B8913F] text-black px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
                    >
                      Book Consultation
                    </a>
                  </div>
                </div>

                {/* Author EEAT */}
                <div className="pt-8">
                  <BlogAuthorEEAT doctor="ahmed" articleContext="Dr. Haq pioneered the 'Untraceably You' philosophy based on 17+ years of clinical observation — the principle that the most technically demanding result in aesthetic medicine is the one nobody detects." />
                </div>

                {/* Related */}
                <div className="pt-8 border-t border-white/[0.06]">
                  <h3 className="text-xs font-medium text-white/40 tracking-wider uppercase mb-4">Continue Reading</h3>
                  <div className="space-y-3">
                    {[
                      { title: "Smart Aesthetics: Before You Choose a Treatment", path: "/aesthetic-treatments-made-easy" },
                      { title: "The Long-Term Benefits of Aesthetic Continuity", path: "/long-term-aesthetic-care-blog" },
                      { title: "Aesthetic Maintenance Costs", path: "/aesthetic-maintenance-cost-blog" },
                      { title: "Why Women Get Smoker's Lines", path: "/blog/smokers-lines-women" },
                    ].map((article, i) => (
                      <Link key={i} to={article.path} className="flex items-center justify-between py-3 border-b border-white/[0.04] last:border-0 group">
                        <span className="text-sm text-white/60 font-light group-hover:text-[#C9A050] transition-colors">{article.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-[#C9A050] transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </article>

            {/* Sidebar */}
            <BlogSidebar delay={0.4} />
          </div>
        </section>

        {/* Hidden SEO */}
        <div className="sr-only" aria-hidden="true">
          <h2>Untraceably You Natural Rejuvenation CosmeDocs Harley Street</h2>
          <p>Look 5 to 10 years younger naturally without anyone knowing, subtle anti-ageing Harley Street, invisible aesthetic results London, natural facial rejuvenation doctor-led, undetectable cosmetic treatments, gradual ageing prevention, structural restoration dermal filler, skin quality polynucleotides skin boosters, expression harmony botox, consultation-first aesthetic medicine. Our aesthetics is invisible art — bold, natural, always your way.</p>
        </div>
      </div>
    </>
  );
}
