import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEOMetadata } from "@/utils/seo";
import { ArrowRight, ShieldCheck, Quote, Sparkles } from "lucide-react";

/**
 * CosmeTalk — Truth-first editorial hub.
 * A branded section of the Cosmedocs blog. Myth-busting, plain-English,
 * doctor-led answers to the questions patients actually type into Google.
 * Lives at /blog/cosmetalk/ so its SEO authority compounds with the rest
 * of the domain rather than splitting onto a subdomain.
 */
export default function CosmetalkHub() {
  const seo = generateSEOMetadata(
    "CosmeTalk — The Truth-First Aesthetic Series | Cosmedocs",
    "CosmeTalk is the no-spin editorial series from Cosmedocs. Plain-English, doctor-led answers about what aesthetic treatments actually do — and what they don't.",
    "/blog/cosmetalk/"
  );

  const articles = [
    {
      slug: "/blog/cosmetalk/does-morpheus8-tighten-skin/",
      kicker: "RF Microneedling",
      title: "Does Morpheus8 tighten skin? A doctor's honest answer.",
      excerpt: "Short answer: yes — modestly, predictably, only for the right candidate. The long version is the one most clinics won't put in writing.",
      readTime: "6 min read",
      date: "16 June 2026",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" data-rh="true" href={seo.canonical} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.canonical} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "CosmeTalk",
          alternateName: "CosmeTalk by Cosmedocs",
          description: seo.description,
          url: seo.canonical,
          publisher: { "@type": "MedicalOrganization", name: "Cosmedocs", url: "https://www.cosmedocs.com" },
          blogPost: articles.map(a => ({
            "@type": "BlogPosting",
            headline: a.title,
            url: `https://www.cosmedocs.com${a.slug}`,
            datePublished: "2026-06-16",
          })),
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cosmedocs.com/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.cosmedocs.com/blog/" },
            { "@type": "ListItem", position: 3, name: "CosmeTalk", item: "https://www.cosmedocs.com/blog/cosmetalk/" },
          ],
        })}</script>
      </Helmet>

      <main className="bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog/" },
            { label: "CosmeTalk" },
          ]} />
        </div>

        {/* Hero / Manifesto */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-14 md:pt-14 md:pb-20">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-[10px] tracking-[0.28em] uppercase text-[#C9A050] font-medium">
              An editorial series by Cosmedocs
            </span>
            <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-extralight leading-[0.95] tracking-tight">
              Cosme<span className="text-[#C9A050]">Talk</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-xl sm:text-2xl font-extralight text-white/75 leading-snug">
              The questions patients actually type into Google — answered the way we'd answer them in clinic. No hype. No hedging. Just the realistic truth.
            </p>
          </motion.div>

          {/* Manifesto card */}
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10 rounded-2xl border border-[#C9A050]/30 bg-gradient-to-br from-[#1a140a]/60 via-black to-black p-6 sm:p-8"
          >
            <div className="flex items-start gap-3">
              <Quote className="w-5 h-5 text-[#C9A050] flex-shrink-0 mt-1" />
              <div>
                <p className="text-white/85 font-light leading-relaxed text-base sm:text-lg">
                  Most aesthetic content is written to sell. CosmeTalk is written to inform — including the bits a clinic would rather you didn't ask about. If a device has a ceiling, we'll name it. If a before-and-after is doing more work than the device that earned it, we'll say so. If the right answer is "don't do this treatment", that's the answer you'll read here.
                </p>
                <p className="mt-4 text-white/55 font-light text-sm leading-relaxed">
                  Our aesthetics is invisible art. Bold • Natural • Always your way. The same philosophy applies to how we write about it.
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wider">
              <span className="inline-flex items-center gap-1.5 bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-full px-3 py-1 text-[#C9A050]">
                <ShieldCheck className="w-3 h-3" /> Doctor-authored
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/15 rounded-full px-3 py-1 text-white/70">
                Evidence-based · ASA/CAP compliant
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/15 rounded-full px-3 py-1 text-white/70">
                Updated as the science updates
              </span>
            </div>
          </motion.aside>
        </section>

        {/* Editorial principles */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-2xl sm:text-3xl font-extralight">The four rules of CosmeTalk</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[
              { n: "01", t: "Name the ceiling", b: "Every device has a limit. We'll tell you where it is before you book — not after." },
              { n: "02", t: "Decode the photo", b: "When a before-and-after is doing more than the treatment can credibly do alone, we'll explain what's really in the frame." },
              { n: "03", t: "Compare honestly", b: "We critique categories, not named clinics. UK advertising rules matter; integrity matters more." },
              { n: "04", t: "Route to the right answer", b: "Sometimes the honest recommendation isn't our treatment. Sometimes it's surgery. Sometimes it's nothing. We'll say." },
            ].map(p => (
              <div key={p.n} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[#C9A050] text-xs tracking-[0.2em] font-medium">{p.n}</div>
                <h3 className="mt-2 text-lg font-light text-white">{p.t}</h3>
                <p className="mt-2 text-sm text-white/65 font-light leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Article grid */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-extralight">In the series</h2>
            <Link to="/blog/" className="text-xs text-white/50 hover:text-[#C9A050] uppercase tracking-wider">
              All articles →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {articles.map(a => (
              <Link
                key={a.slug}
                to={a.slug}
                className="group block rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 hover:border-[#C9A050]/50 transition-colors"
              >
                <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#C9A050] font-medium">
                  <span>{a.kicker}</span>
                  <span className="text-white/40">{a.readTime}</span>
                </div>
                <h3 className="mt-3 text-2xl font-extralight leading-tight text-white group-hover:text-[#C9A050] transition-colors">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-white/65 font-light leading-relaxed">{a.excerpt}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-white/40">{a.date}</span>
                  <span className="inline-flex items-center gap-1 text-xs text-[#C9A050]">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}

            {/* Coming-soon placeholder maintains the grid + signals depth */}
            <div className="rounded-2xl border border-dashed border-white/10 bg-transparent p-6 flex flex-col justify-center">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-medium">Coming next</span>
              <p className="mt-3 text-lg text-white/55 font-light leading-snug">
                The realistic truth about tear-trough filler, lip filler longevity, polynucleotides vs Profhilo, and whether thread lifts ever really lift.
              </p>
            </div>
          </div>
        </section>

        {/* Conversion CTA — light touch, in keeping with the series voice */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <div className="rounded-2xl border border-[#C9A050]/40 bg-gradient-to-br from-black via-[#1a140a] to-black p-6 sm:p-10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C9A050]" />
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#C9A050] font-medium">Your consultation begins here</span>
            </div>
            <h3 className="mt-3 text-3xl sm:text-4xl font-extralight">
              Read first. <span className="text-[#C9A050]">Decide slowly.</span> Book only when it's right.
            </h3>
            <p className="mt-4 max-w-2xl text-white/65 font-light leading-relaxed">
              CosmeTalk exists so you can arrive at a Cosmedocs consultation already knowing the trade-offs. We'd rather you ask a difficult question than book the wrong treatment.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact/" className="inline-flex items-center gap-2 bg-[#C9A050] text-black font-semibold px-6 py-3 rounded-full hover:scale-[1.03] transition-transform">
                Book a consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/treatments/" className="text-sm text-white/70 hover:text-[#C9A050] self-center">
                Or explore treatments →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
