import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { generateSEOMetadata } from "@/utils/seo";
import { Link } from "react-router-dom";
import { Clock, Award, ArrowRight } from "lucide-react";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogAuthorEEAT from "@/components/blog/BlogAuthorEEAT";
import smokersLinesPout from "@/assets/smokers-lines-pouting-expression.jpeg";
import smokersLinesClinical from "@/assets/smokers-lines-clinical.jpeg";

const SmokersLinesWomen = () => {
  const seoData = generateSEOMetadata(
    "Why Women Get Smoker's Lines (Even Without Smoking) | CosmeDocs",
    "Why 99% of smoker's lines patients are women — even non-smokers. The real cause is the pouting expression, not cigarettes. Expert insight from Harley Street doctors.",
    "/blog/smokers-lines-women/"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Why Women Get Smoker's Lines — Even Without Smoking",
    description: seoData.description,
    author: { "@type": "Organization", name: "CosmeDocs", url: "https://www.cosmedocs.co.uk" },
    publisher: { "@type": "Organization", name: "CosmeDocs" },
    datePublished: "2024-01-15",
    dateModified: "2026-02-09",
    mainEntityOfPage: "https://www.cosmedocs.co.uk/blog/smokers-lines-women/",
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.co.uk/blog/smokers-lines-women/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.co.uk/blog/smokers-lines-women/" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-40 right-[-10%] w-[500px] h-[500px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201,160,80,0.05) 0%, transparent 60%)' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-[#C9A050] text-xs font-medium tracking-[0.25em] uppercase">Clinical Insight</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight mt-4 mb-6 leading-[1.15] tracking-tight">
                Why Women Get <span className="text-[#C9A050] font-light">Smoker's Lines</span>
                <br className="hidden sm:block" />
                <span className="text-white/60 text-2xl sm:text-3xl md:text-4xl"> — Even Without Smoking</span>
              </h1>
              <p className="text-white/40 text-lg font-light max-w-2xl mx-auto mb-8">
                The name is misleading. The cause isn't cigarettes — it's an expression. And it's almost exclusively female.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-xs text-white/30">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 7 min read</span>
                <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5" /> Clinical observation</span>
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

                <p className="text-white/45 text-lg font-light leading-relaxed">
                  They're called "smoker's lines." It's one of the most misleading names in aesthetic medicine. Because the overwhelming majority of patients who present with perioral lines — those fine vertical creases that radiate from the upper lip — have never smoked a day in their lives. And almost every single one of them is a woman.
                </p>
                <p className="text-white/45 font-light leading-relaxed">
                  In over 17 years of clinical practice at CosmeDocs, we have rarely — if ever — treated a male patient for isolated perioral lines. Not once for a male non-smoker. That statistic alone should tell you that the cause isn't tobacco. It's biomechanics.
                </p>

                {/* The Real Cause */}
                <div className="pt-6">
                  <div className="w-12 h-px bg-[#C9A050]/40 mb-6" />
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">The Real Cause: <span className="text-[#C9A050] font-light">The Pout</span></h2>
                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    The orbicularis oris — the circular muscle surrounding the mouth — contracts every time you purse your lips. But there's a crucial distinction that explains everything: women <em>pout</em>, men <em>purse</em>.
                  </p>
                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    Pouting involves a specific forward projection of the lips combined with a gentle compression of the upper lip border. It's an expression almost exclusive to women — used in speech, in thought, in reaction, in social signalling. Men, when they do engage the orbicularis oris, tend to purse — a flatter, more horizontal compression that doesn't create the same vertical etching on the skin above the lip.
                  </p>

                  <div className="my-8 rounded-xl overflow-hidden border border-white/[0.08]">
                    <img src={smokersLinesPout} alt="Clinical photograph showing perioral lines caused by repeated pouting expression — vertical creases radiating from the upper lip" className="w-full object-cover max-h-[400px]" loading="lazy" />
                    <div className="px-4 py-3 bg-white/[0.02] border-t border-white/[0.06]">
                      <p className="text-xs text-white/30 font-light italic">Perioral lines visible during orbicularis oris contraction. Note the vertical radiation pattern exclusive to the pouting expression.</p>
                    </div>
                  </div>

                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    This is why non-smoking women develop these lines. It's not about what you inhale — it's about how you <em>move</em>. The muscle contracts, the skin above it folds, and over thousands of repetitions across decades, those folds etch permanently into the dermis.
                  </p>

                  <div className="bg-white/[0.03] border-l-2 border-[#C9A050]/40 p-5 rounded-r-xl mb-6">
                    <p className="text-sm font-medium text-[#C9A050] mb-2">Clinical observation</p>
                    <p className="text-white/40 text-sm font-light leading-relaxed">Male smokers — even heavy, lifelong smokers — rarely present with isolated perioral lines. When they do develop them, the lines tend to be shallower and less defined. The male expression pattern simply doesn't create the same mechanical stress on the upper lip skin.</p>
                  </div>
                </div>

                {/* Straws, Speech & Culture */}
                <div className="pt-6">
                  <div className="w-12 h-px bg-[#C9A050]/40 mb-6" />
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">Straws, Speech & <span className="text-[#C9A050] font-light">Cultural Expression</span></h2>
                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    Once you understand that the cause is the <em>expression</em> rather than the <em>substance</em>, the list of contributing factors expands far beyond cigarettes. Drinking through straws replicates the exact same orbicularis oris contraction pattern. The lip pushes forward, the skin compresses, and the same vertical lines form. One straw a day for twenty years leaves its mark.
                  </p>
                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    But perhaps the most fascinating contributing factor is <strong className="text-white/70">speech pattern</strong>. Certain languages and accents require more frequent engagement of the pouting muscles. French speakers, for example, use pronounced lip rounding for vowels like <em>ou</em>, <em>u</em>, and <em>eu</em> — sounds that don't exist in English and demand significant orbicularis oris activation with every sentence.
                  </p>
                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    We've observed the same pattern in speakers of Portuguese, Italian, and other Romance languages where rounded vowel sounds dominate. The "oui" muscles, as we sometimes call them informally, work harder than their English-speaking equivalents. Over a lifetime of conversation, this linguistic biomechanics contributes meaningfully to perioral line development.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {[
                      { title: "The Pout", desc: "Forward lip projection — kissing, emotional expression, social signalling. Almost exclusively a female movement pattern." },
                      { title: "Straw Drinking", desc: "Identical orbicularis oris contraction as pouting. Daily repetition over years creates cumulative dermal etching." },
                      { title: "Speech Patterns", desc: "Languages requiring rounded vowels (French, Portuguese, Italian) engage the pouting muscles significantly more." },
                      { title: "Musical Instruments", desc: "Wind and brass players — flute, clarinet, trumpet — sustain orbicularis oris contraction for extended periods." },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5">
                        <h3 className="text-sm font-medium text-[#C9A050] mb-2">{item.title}</h3>
                        <p className="text-white/35 text-sm font-light leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Anatomy */}
                <div className="pt-6">
                  <div className="w-12 h-px bg-[#C9A050]/40 mb-6" />
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">Why the Upper Lip Is <span className="text-[#C9A050] font-light">So Vulnerable</span></h2>
                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    The skin of the upper lip is among the thinnest on the face. It sits directly over muscle with very little subcutaneous fat cushioning the impact of repeated contraction. Unlike the cheek or forehead — where fat pads absorb some of the mechanical stress — the upper lip has almost no buffer between the moving muscle and the skin surface.
                  </p>

                  <div className="my-8 rounded-xl overflow-hidden border border-white/[0.08]">
                    <img src={smokersLinesClinical} alt="Clinical photograph showing perioral region at rest — subtle vertical lines visible even without active expression" className="w-full object-cover max-h-[400px]" loading="lazy" />
                    <div className="px-4 py-3 bg-white/[0.02] border-t border-white/[0.06]">
                      <p className="text-xs text-white/30 font-light italic">Perioral region at rest. Established lines remain visible even without active contraction — evidence of permanent dermal etching from repeated expression.</p>
                    </div>
                  </div>

                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    Add to this the natural loss of collagen and elastin that accelerates after 30, and you have a perfect storm: thin skin, high-frequency muscle movement, diminishing structural support, and — in women specifically — the pouting expression pattern that men simply don't replicate.
                  </p>
                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    Oestrogen decline during perimenopause and menopause further compounds the problem. As oestrogen drops, dermal thickness reduces and collagen production slows — precisely when the cumulative damage from decades of expression is becoming visible. The timing is cruel but biologically logical.
                  </p>
                </div>

                {/* Treatment */}
                <div className="pt-6">
                  <div className="w-12 h-px bg-[#C9A050]/40 mb-6" />
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">How We Approach <span className="text-[#C9A050] font-light">Treatment</span></h2>
                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    Understanding the mechanism changes the treatment strategy entirely. If the cause were simply "ageing skin," you'd just resurface. But because perioral lines are expression-driven, effective treatment requires a layered approach that addresses both the muscle behaviour and the skin quality simultaneously.
                  </p>
                  <div className="space-y-4 mb-6">
                    {[
                      { title: "Muscle Relaxation (Botox)", desc: "Small, precise doses of botulinum toxin into the orbicularis oris reduce the intensity of the pouting contraction without affecting speech or expression. Prevention and treatment in one.", link: { text: "Learn more about Botox treatments", path: "/treatments/botox/" } },
                      { title: "Dermal Filler", desc: "Hyaluronic acid filler placed superficially into the lines restores volume that decades of folding have depleted. This isn't about plumping the lips — it's about rebuilding the skin architecture above them.", link: { text: "Explore dermal filler treatments", path: "/treatments/dermal-fillers/" } },
                      { title: "Skin Quality Restoration", desc: "Polynucleotides and skin boosters rebuild the dermis from within — stimulating collagen, improving elasticity, and thickening the skin so it resists future folding. The most underrated part of the protocol.", link: { text: "Discover skin rejuvenation options", path: "/treatments/skin-rejuvenation/" } },
                      { title: "Surface Resurfacing", desc: "Chemical peels and laser treatments smooth existing lines at the epidermal level. They work best as a complement to deeper structural work — not as a standalone solution.", link: null },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5">
                        <h3 className="text-sm font-medium text-[#C9A050] mb-2">{item.title}</h3>
                        <p className="text-white/35 text-sm font-light leading-relaxed">{item.desc}</p>
                        {item.link && (
                          <Link to={item.link.path} className="inline-flex items-center gap-1 text-xs text-[#C9A050]/60 hover:text-[#C9A050] mt-3 transition-colors">
                            {item.link.text} <ArrowRight className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/[0.03] border-l-2 border-[#C9A050]/40 p-5 rounded-r-xl mb-6">
                    <p className="text-sm font-medium text-[#C9A050] mb-2">When not to treat</p>
                    <p className="text-white/40 text-sm font-light leading-relaxed">Very fine lines only visible in extreme close-up or harsh lighting often don't warrant treatment. If they don't bother you at normal conversation distance, we'll tell you that. At CosmeDocs, we're as proud of the treatments we <em>don't</em> do as the ones we do.</p>
                  </div>
                </div>

                {/* Bigger Picture */}
                <div className="pt-6">
                  <div className="w-12 h-px bg-[#C9A050]/40 mb-6" />
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">The Bigger <span className="text-[#C9A050] font-light">Picture</span></h2>
                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    Perioral lines don't exist in isolation. They're part of a broader pattern of lower-face ageing that includes lip volume loss, nasolabial fold deepening, marionette line formation, and chin texture changes. Treating the lines alone without considering the surrounding architecture often produces an incomplete or unnatural result.
                  </p>
                  <p className="text-white/45 font-light leading-relaxed mb-6">
                    That's why a comprehensive <Link to="/treatments/dermal-fillers/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">perioral assessment</Link> matters more than spot-treating individual lines. The lips, the skin above them, the chin below — they function as a unit. Harmony beats precision every time.
                  </p>
                  <p className="text-white/45 font-light leading-relaxed mb-8">
                    For those thinking about long-term care, understanding <Link to="/aesthetic-maintenance-cost-blog" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">how to budget for ongoing aesthetic maintenance</Link> and the <Link to="/long-term-aesthetic-care-blog" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">benefits of practitioner continuity</Link> will help you approach treatment as a plan rather than a purchase. Our aesthetics is invisible art — bold, natural, always your way.
                  </p>

                  {/* CTA */}
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 text-center">
                    <h3 className="text-xl font-extralight mb-3">Concerned About <span className="text-[#C9A050] font-light">Perioral Lines?</span></h3>
                    <p className="text-white/35 text-sm font-light mb-6">Our Harley Street doctors can assess whether treatment is appropriate — or whether it's best left alone.</p>
                    <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C9A050] hover:bg-[#B8913F] text-black px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105">
                      Book Consultation
                    </a>
                  </div>
                </div>

                {/* Author EEAT */}
                <div className="pt-8">
                  <BlogAuthorEEAT doctor="ahmed" articleContext="Dr. Haq has treated thousands of patients for perioral lines over 17+ years, observing the near-exclusive female presentation regardless of smoking history — clinical insight that informs the multi-layered treatment protocols described in this article." />
                </div>

                {/* Related */}
                <div className="pt-8 border-t border-white/[0.06]">
                  <h3 className="text-xs font-medium text-white/40 tracking-wider uppercase mb-4">Continue Reading</h3>
                  <div className="space-y-3">
                    {[
                      { title: "Dermal Filler Treatments", path: "/treatments/dermal-fillers/" },
                      { title: "Skin Rejuvenation & Polynucleotides", path: "/treatments/skin-rejuvenation/" },
                      { title: "Lip Filler Results Explained", path: "/blog/lip-filler-results-explained/" },
                      { title: "Aesthetic Maintenance Costs", path: "/aesthetic-maintenance-cost-blog" },
                      { title: "The Long-Term Benefits of Aesthetic Continuity", path: "/long-term-aesthetic-care-blog" },
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
            <BlogSidebar delay={0.4} />
          </div>
        </section>

        {/* Hidden SEO */}
        <div className="sr-only" aria-hidden="true">
          <h2>Smoker's Lines Treatment Women London CosmeDocs</h2>
          <p>Smoker's lines women non-smokers, perioral lines treatment London, upper lip wrinkles women, orbicularis oris pouting expression, lip lines dermal filler, perioral rejuvenation Harley Street, smoker's lines Botox, polynucleotides perioral lines, skin boosters upper lip, chemical peels smoker's lines, perioral ageing women, lip line treatment non-smoker, French accent lip lines, straw drinking perioral wrinkles. Our aesthetics is invisible art — bold, natural, always your way.</p>
        </div>
      </div>
    </>
  );
};

export default SmokersLinesWomen;
