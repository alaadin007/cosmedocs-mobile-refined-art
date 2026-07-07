import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { generateSEOMetadata } from '@/utils/seo';
import blogCover from '@/assets/blog-cover-daxxify-vs-botox-uk.jpg';

const DaxxifyVsBotoxUK = () => {
  const seoData = generateSEOMetadata(
    "Daxxify vs Botox in the UK: The Honest Doctor's Answer | Cosmedocs",
    "Daxxify claims 6-month results, but Botox isn't reversible — so how can another toxin last longer? A Harley Street doctor explains the real science, the RTP004 peptide, and why UK patients shouldn't panic.",
    "/blog/daxxify-vs-botox-uk"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalScholarlyArticle",
        "@id": "https://www.cosmedocs.com/blog/daxxify-vs-botox-uk/#article",
        "headline": "Daxxify vs Botox in the UK: The Honest Doctor's Answer",
        "description": seoData.description,
        "author": {
          "@type": "Person",
          "name": "Dr Ahmed Haq",
          "jobTitle": "Medical Director & Aesthetic Doctor (GMC registered)",
          "url": "https://www.cosmedocs.com/dr-ahmed-haq/"
        },
        "publisher": {
          "@type": "MedicalBusiness",
          "name": "CosmeDocs",
          "url": "https://www.cosmedocs.com/",
          "logo": { "@type": "ImageObject", "url": "https://www.cosmedocs.com/logo.png" }
        },
        "datePublished": "2026-07-07",
        "dateModified": "2026-07-07",
        "image": `https://www.cosmedocs.com${blogCover}`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.cosmedocs.com/blog/daxxify-vs-botox-uk/"
        },
        "about": [
          { "@type": "Drug", "name": "daxibotulinumtoxinA-lanm (Daxxify)" },
          { "@type": "Drug", "name": "onabotulinumtoxinA (Botox)" }
        ],
        "inLanguage": "en-GB",
        "wordCount": 1800
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.cosmedocs.com/blog/daxxify-vs-botox-uk/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Daxxify available in the UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not yet. As of 2026, Daxxify (daxibotulinumtoxinA-lanm) is approved by the US FDA and used in the United States but has not been licensed by the MHRA for use in the United Kingdom. UK patients cannot legally receive Daxxify from a UK clinic. Any London or UK provider claiming to offer it is either mislabelling another toxin or operating outside the law."
            }
          },
          {
            "@type": "Question",
            "name": "How can Daxxify last longer if Botox is already irreversible?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Botulinum toxin does not reverse — the nerve terminal only recovers by sprouting new terminals over time. Daxxify does not change that biology. Its proprietary RTP004 peptide appears to help deliver more active toxin into the nerve terminal, producing a deeper initial silencing so recovery takes longer. It is a bigger effective dose, not a fundamentally different drug."
            }
          },
          {
            "@type": "Question",
            "name": "Can Botox be made to last as long as Daxxify?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In experienced hands, tailored unit dosing of onabotulinumtoxinA can extend duration meaningfully beyond the standard 3–4 months for suitable patients. The clinical outcome is driven far more by injector expertise, muscle-specific dosing, and placement than by the brand of toxin. Chasing 6-month duration with any toxin also carries a higher risk of heaviness, brow drop and over-freeze."
            }
          },
          {
            "@type": "Question",
            "name": "Should I wait for Daxxify to arrive in the UK before having Botox?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. There is no clinical reason to delay treatment. OnabotulinumtoxinA (Botox), abobotulinumtoxinA (Dysport), incobotulinumtoxinA (Xeomin) and prabotulinumtoxinA (Jeuveau) are all excellent, MHRA-licensed toxins with decades of safety data and a well-mapped learning curve. When Daxxify is eventually licensed here, it will need years of injector experience before UK doctors can reproduce its US duration claims safely."
            }
          },
          {
            "@type": "Question",
            "name": "Does the RTP004 peptide in Daxxify have long-term risks?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The 5-year follow-up data on daxibotulinumtoxinA-lanm is still being collected. Any novel excipient — particularly a positively charged synthetic peptide designed to increase neuronal uptake — has to be watched over time for immunogenicity and neutralising antibody formation. This is a normal part of long-term pharmacovigilance and one of the reasons the MHRA has not yet approved it."
            }
          }
        ]
      }
    ]
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="Daxxify UK, Daxxify London, Daxxify vs Botox, daxibotulinumtoxinA, is Daxxify available in UK, longer lasting Botox, 6 month Botox, RTP004, Botox alternative UK, Harley Street" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://www.cosmedocs.com${blogCover}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">

        {/* Hero */}
        <section className="relative pt-28 pb-16 border-b border-white/[0.06] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={blogCover}
              alt="Editorial macro of a single clear glass vial on a matte black surface — Daxxify vs Botox science explained"
              className="w-full h-full object-cover opacity-40"
              width={1600}
              height={900}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#C9A050] text-xs font-medium tracking-wider uppercase">
                Clinical Insight · Botulinum Toxin Science
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight mt-4 mb-6 leading-[1.15]">
                Daxxify vs Botox in the UK:
                <br />
                <span className="text-[#C9A050] font-light">The Honest </span>
                <span className="text-white/60">Doctor's Answer</span>
              </h1>
              <p className="text-white/50 text-lg font-light leading-relaxed max-w-3xl">
                Daxxify claims six-month results. Botox isn't reversible. So how can one
                irreversible toxin last longer than another? Here is the real science —
                and why UK patients don't need to panic while we wait for it to arrive.
              </p>
              <div className="flex items-center gap-6 mt-8 text-white/30 text-sm font-light">
                <span>Dr Ahmed Haq</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>8 min read</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>July 2026</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Body */}
        <div className="max-w-3xl mx-auto px-4 py-16">
          <article className="space-y-16">

            {/* UK availability up front */}
            <motion.section {...fadeIn}>
              <div className="rounded-xl border border-[#C9A050]/25 bg-[#C9A050]/[0.04] p-6 md:p-8">
                <p className="text-[#C9A050] text-xs uppercase tracking-wider font-medium mb-3">
                  UK Availability — Read This First
                </p>
                <p className="text-white/80 text-base md:text-lg font-light leading-relaxed">
                  <strong className="text-white">Daxxify is not currently licensed by the MHRA</strong> and
                  cannot legally be used in a UK clinic. It is approved in the United States
                  and used there under the name <em>daxibotulinumtoxinA-lanm</em>. Any UK provider
                  advertising Daxxify is either mislabelling another toxin or operating outside
                  the law. This article exists so that patients searching for it in the UK have
                  the honest scientific picture — not a sales pitch.
                </p>
              </div>
            </motion.section>

            {/* Opening */}
            <motion.section {...fadeIn}>
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-6">
                The Daxxify conversation has quietly become one of the most interesting
                scientific questions in aesthetic medicine. The marketing line is simple —
                <em> results last twice as long</em>. The problem with that line is that
                it doesn't quite match the biology. Botulinum toxin, once it is inside a
                nerve terminal, is not <em>reversible</em> in the pharmacological sense.
                It doesn't wash out. It doesn't dissociate from a receptor. So the obvious
                question is the one very few clinics answer honestly:
              </p>
              <p className="text-white text-xl md:text-2xl font-light italic border-l-2 border-[#C9A050] pl-6">
                If recovery depends on the nerve regenerating, how can one irreversible
                toxin last longer than another?
              </p>
            </motion.section>

            {/* How botox actually works */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                How Every Botulinum Toxin Actually Works
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                Botox, Dysport, Xeomin, Jeuveau, Letybo and Daxxify all share the same
                150 kDa neurotoxin core. Once injected they follow an identical sequence:
              </p>
              <ol className="space-y-4 text-white/60 text-lg font-light leading-relaxed">
                <li className="flex gap-5">
                  <span className="text-[#C9A050] font-light w-6 shrink-0">01</span>
                  <span>The toxin binds to the motor nerve terminal supplying the muscle.</span>
                </li>
                <li className="flex gap-5">
                  <span className="text-[#C9A050] font-light w-6 shrink-0">02</span>
                  <span>It is taken up into the nerve by receptor-mediated endocytosis.</span>
                </li>
                <li className="flex gap-5">
                  <span className="text-[#C9A050] font-light w-6 shrink-0">03</span>
                  <span>The light chain cleaves a protein called <strong className="text-white/90">SNAP-25</strong>, blocking acetylcholine release.</span>
                </li>
                <li className="flex gap-5">
                  <span className="text-[#C9A050] font-light w-6 shrink-0">04</span>
                  <span>That nerve terminal becomes functionally silent — the muscle can't contract.</span>
                </li>
                <li className="flex gap-5">
                  <span className="text-[#C9A050] font-light w-6 shrink-0">05</span>
                  <span>Recovery only occurs when the nerve <strong className="text-white/90">sprouts new terminals</strong> and eventually remodels back to its original neuromuscular junction.</span>
                </li>
              </ol>
              <p className="text-white/60 text-lg font-light leading-relaxed mt-6">
                The critical point: the toxin doesn't leave. The nerve simply regrows around
                it. That is why any comparison of duration between toxins has to be a
                comparison of <em>how much silencing was achieved in the first place</em>,
                not how long the drug survives.
              </p>
            </motion.section>

            {/* What Daxxify actually is */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                What Daxxify Actually Is
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                Daxxify (daxibotulinumtoxinA-lanm) contains the same 150 kDa botulinum
                toxin type A that Botox contains. What's different is what it's
                <em> formulated with</em>:
              </p>
              <ul className="space-y-4 text-white/60 text-lg font-light leading-relaxed mb-6">
                <li className="flex gap-4"><span className="text-[#C9A050]">—</span><span>No human serum albumin (the stabiliser used in Botox).</span></li>
                <li className="flex gap-4"><span className="text-[#C9A050]">—</span><span>A proprietary positively charged synthetic peptide called <strong className="text-white/90">RTP004</strong>.</span></li>
              </ul>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                RTP004 is the entire story. Revance's own laboratory work suggests it
                binds electrostatically to the toxin, increases its stability, and
                appears to increase binding and intracellular delivery of the toxin into
                the motor nerve. Notice the wording carefully. Nobody has shown the
                toxin <em>survives longer</em> inside the nerve. What appears to happen
                is that <strong className="text-white">more toxin molecules successfully reach the inside of the
                nerve in the first place</strong> — producing a deeper, more complete
                initial silencing.
              </p>
            </motion.section>

            {/* Sprouting */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                Does Daxxify Stop Nerve Sprouting? No.
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                There is currently no evidence that Daxxify alters the physiology of
                axonal sprouting or nerve regeneration. The recovery mechanism is
                identical to every other toxin: SNAP-25 cleavage → functional
                denervation → sprouting → recovery.
              </p>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                The reason its clinical duration is longer is almost certainly that the
                nerve starts from a deeper state of intoxication. It takes the same
                nerve longer to sprout its way back to normal function because there is
                more damage to remodel around.
              </p>
              <div className="mt-6 rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
                <p className="text-white/70 text-base font-light leading-relaxed italic">
                  "Daxxify doesn't change how botulinum toxin works. It still silences
                  the nerve by cleaving SNAP-25, and recovery still depends on nerve
                  sprouting. Its peptide helps deliver or retain more active toxin at
                  the nerve terminal — producing a deeper denervation, not a different
                  biological recovery mechanism."
                </p>
                <p className="text-white/40 text-xs uppercase tracking-wider mt-4">— Dr Ahmed Haq, Medical Director, Cosmedocs Harley Street</p>
              </div>
            </motion.section>

            {/* The uncomfortable equivalence */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                The Uncomfortable Scientific Equivalence
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                Read the paragraph above carefully and a difficult truth emerges. If the
                longer duration of Daxxify is essentially the result of more toxin
                reaching more nerve terminals, then <strong className="text-white/90">
                the same principle already exists in every experienced injector's toolkit</strong>.
                Adding a small, deliberate increase in units to a suitable patient — placed
                precisely into the target muscle — extends duration in a way that is
                mechanistically similar.
              </p>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                This is not a marketing take. It's simply the biology. The trade-off is
                the same one that has always existed with toxin: chase duration too
                aggressively and you increase the risk of heaviness, brow drop, over-freeze
                and asymmetry. The art of aesthetic medicine is finding the point where
                duration and natural expression cross — the point where a treatment lasts
                well without ever looking treated.
              </p>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                Our aesthetics is invisible art. Bold, natural, always your way — never
                the loudest possible result.
              </p>
            </motion.section>

            {/* Learning curve */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                The Learning Curve Nobody Talks About
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                Every new toxin carries a hidden cost that the launch press release
                never mentions: the injector learning curve. Botox has been used
                cosmetically for around thirty years. Its diffusion characteristics,
                unit-to-effect ratio, onset time, migration behaviour and safety profile
                are known to a decimal place by experienced doctors.
              </p>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                A newer toxin — especially one designed to deliver more toxin more
                efficiently to the nerve — needs <strong className="text-white/90">
                years of accumulated case volume</strong> before the same doctor can
                reproduce ideal outcomes reliably. Different diffusion. Different
                onset. Different overcorrection recovery. Different rescue strategies
                when a brow drops.
              </p>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                This is why the safest injector in London next year will still be the
                one who has been using MHRA-licensed toxins for a decade, not the one
                who switched to whatever is newest. When Daxxify eventually arrives in
                the UK, it will still take time before its subtleties are as well
                mapped as those of the toxins we use today.
              </p>
            </motion.section>

            {/* Clinical trial context — with bar chart */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                What The Trials Actually Show
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                For glabellar (frown) lines, pooled clinical trial data reports the
                following median durations. Bars are drawn to scale — six months is
                exactly twice the length of three.
              </p>

              {/* Duration bar chart */}
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
                <div className="space-y-5">
                  {[
                    { name: "Botox (onaA)", weeks: 14, label: "≈ 3–4 months", tone: "bg-white/40" },
                    { name: "Dysport (aboA)", weeks: 16, label: "≈ 3–4 months", tone: "bg-white/40" },
                    { name: "Xeomin (incoA)", weeks: 14, label: "≈ 3–4 months", tone: "bg-white/40" },
                    { name: "Jeuveau (praboA)", weeks: 15, label: "≈ 3–4 months", tone: "bg-white/40" },
                    { name: "Daxxify (daxiA)", weeks: 24, label: "≈ 6 months (US only)", tone: "bg-[#C9A050]" },
                  ].map((row) => (
                    <div key={row.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-white/80 font-light">{row.name}</span>
                        <span className="text-white/40 font-light">{row.label}</span>
                      </div>
                      <div className="h-2.5 w-full bg-white/[0.04] rounded-full overflow-hidden">
                        <div
                          className={`h-full ${row.tone} rounded-full`}
                          style={{ width: `${(row.weeks / 28) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-[10px] uppercase tracking-wider text-white/25">
                  <span>0 wks</span>
                  <span>7</span>
                  <span>14</span>
                  <span>21</span>
                  <span>28 wks</span>
                </div>
                <p className="text-white/40 text-xs font-light mt-4">
                  Median glabellar-line duration from pooled US pivotal trial data.
                  Real-world duration varies with dose, placement and patient physiology.
                </p>
              </div>

              <p className="text-white/60 text-lg font-light leading-relaxed mt-8">
                Even review articles concede that the precise mechanism responsible for
                the longer clinical duration of Daxxify is not fully characterised. The
                prolonged effect is real and documented; the biological explanation is
                still partly theoretical.
              </p>
            </motion.section>

            {/* Side-by-side comparison table */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                The Six Toxins, Side by Side
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                A quick reference on the six botulinum toxin type A products relevant
                to the UK and US aesthetic market. All share the same 150 kDa neurotoxin
                core; the differences sit in the accessory proteins, stabiliser, and
                licensing status.
              </p>

              <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
                <table className="w-full text-sm text-left">
                  <thead className="bg-white/[0.04] text-[#C9A050] text-[11px] uppercase tracking-wider font-medium">
                    <tr>
                      <th className="px-4 py-3 font-medium">Brand</th>
                      <th className="px-4 py-3 font-medium">Molecule</th>
                      <th className="px-4 py-3 font-medium">Stabiliser</th>
                      <th className="px-4 py-3 font-medium">Onset</th>
                      <th className="px-4 py-3 font-medium">Duration</th>
                      <th className="px-4 py-3 font-medium">UK (MHRA)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70 font-light divide-y divide-white/[0.06]">
                    {[
                      ["Botox", "onabotulinumtoxinA", "Human serum albumin", "3–5 days", "3–4 mo", "✓ Licensed"],
                      ["Dysport", "abobotulinumtoxinA", "Human serum albumin", "2–3 days", "3–4 mo", "✓ Licensed"],
                      ["Xeomin", "incobotulinumtoxinA", "Human serum albumin (no accessory proteins)", "3–5 days", "3–4 mo", "✓ Licensed"],
                      ["Jeuveau", "prabotulinumtoxinA", "Human serum albumin", "3–5 days", "3–4 mo", "✗ Not licensed"],
                      ["Letybo", "letibotulinumtoxinA", "Human serum albumin", "3–5 days", "3–4 mo", "✓ Licensed"],
                      ["Daxxify", "daxibotulinumtoxinA-lanm", "RTP004 peptide (no HSA)", "1–2 days", "≈ 6 mo", "✗ Not licensed"],
                    ].map((row, i) => {
                      const isDax = row[0] === "Daxxify";
                      return (
                        <tr key={row[0]} className={isDax ? "bg-[#C9A050]/[0.06]" : ""}>
                          <td className={`px-4 py-3 ${isDax ? "text-[#C9A050]" : "text-white/90"} font-medium whitespace-nowrap`}>{row[0]}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-white/60">{row[1]}</td>
                          <td className="px-4 py-3 text-white/60">{row[2]}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-white/60">{row[3]}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-white/60">{row[4]}</td>
                          <td className={`px-4 py-3 whitespace-nowrap ${row[5].startsWith("✓") ? "text-white/80" : "text-[#C9A050]/80"}`}>{row[5]}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-white/35 text-xs font-light mt-3">
                Onset and duration are median clinical estimates for glabellar-line
                treatment in healthy adults. Individual response varies.
              </p>
            </motion.section>

            {/* Mechanism flow diagram */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                The Recovery Timeline, Visualised
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                Every botulinum toxin follows the same five-stage arc. Daxxify does not
                skip or shorten any of these stages — it starts from a deeper baseline
                at Stage&nbsp;3, which pushes Stages&nbsp;4 and&nbsp;5 further out in time.
              </p>

              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {[
                    { n: "01", t: "Binding", d: "Toxin latches onto the motor nerve terminal." },
                    { n: "02", t: "Uptake", d: "Receptor-mediated endocytosis into the nerve." },
                    { n: "03", t: "SNAP-25 cleavage", d: "Acetylcholine release blocked. Nerve silenced.", accent: true },
                    { n: "04", t: "Sprouting", d: "New axonal terminals slowly regrow." },
                    { n: "05", t: "Recovery", d: "Original junction remodels. Movement returns." },
                  ].map((s, i, arr) => (
                    <div key={s.n} className="relative">
                      <div className={`rounded-lg p-4 h-full border ${s.accent ? "border-[#C9A050]/40 bg-[#C9A050]/[0.06]" : "border-white/[0.08] bg-white/[0.02]"}`}>
                        <div className={`text-[10px] uppercase tracking-wider font-medium mb-2 ${s.accent ? "text-[#C9A050]" : "text-white/40"}`}>{s.n}</div>
                        <div className="text-white/90 text-sm font-light mb-1">{s.t}</div>
                        <div className="text-white/50 text-xs font-light leading-relaxed">{s.d}</div>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-white/20 z-10" />
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-[#C9A050] text-xs uppercase tracking-wider font-medium mt-6">
                  Where Daxxify differs
                </p>
                <p className="text-white/60 text-sm font-light leading-relaxed mt-2">
                  The RTP004 peptide is thought to increase how much toxin reaches
                  Stage&nbsp;3 — producing a deeper initial silencing. Stages&nbsp;4 and&nbsp;5
                  still occur, they simply take longer to complete.
                </p>
              </div>
            </motion.section>


            {/* Should UK patients panic */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                So — Should UK Patients Panic? No.
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                Nothing about the arrival of Daxxify in the US changes what a well-run
                treatment looks like in the UK. The toxins we use here — Botox, Dysport,
                Xeomin, Jeuveau, Letybo — are MHRA-licensed, decades-mature, and in
                experienced hands produce beautiful, predictable, natural results that
                comfortably reach or exceed the 4-month mark for the right patient.
              </p>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                Duration in aesthetic medicine is <em>never</em> a property of the drug
                alone. It is a product of the drug, the dose, the placement, the muscle
                mass, the patient's metabolism, and the injector's judgement. A
                mediocre injector with Daxxify will still produce a mediocre outcome. A
                thoughtful doctor with Botox produces the sort of result that has
                defined Cosmedocs since 2007.
              </p>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                When Daxxify is licensed in the UK we'll evaluate it, publish an honest
                clinical review, and add it to the toolkit if — and only if — it makes
                sense for our patients. Until then, there is no reason to wait, and no
                reason to feel the UK is behind.
              </p>
            </motion.section>

            {/* CTA */}
            <motion.section {...fadeIn}>
              <div className="rounded-2xl border border-[#C9A050]/25 bg-gradient-to-br from-[#C9A050]/[0.08] to-transparent p-8 md:p-10 text-center">
                <p className="text-[#C9A050] text-xs uppercase tracking-wider font-medium mb-4">
                  Your consultation begins here
                </p>
                <h3 className="text-2xl md:text-3xl font-extralight mb-4">
                  Want the longest-lasting, most natural Botox result the UK can offer?
                </h3>
                <p className="text-white/60 font-light leading-relaxed max-w-xl mx-auto mb-8">
                  Our Harley Street doctors tailor dosing, placement and product
                  selection to your face — not to a marketing claim. Quiet, not loud.
                  Invisible, not exaggerated.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link
                    to="/treatments/botox/"
                    className="inline-block bg-[#C9A050] text-black px-8 py-3 text-sm tracking-wider uppercase font-medium hover:bg-[#C9A050]/90 transition-colors"
                  >
                    Explore Botox at Cosmedocs
                  </Link>
                  <Link
                    to="/contact/"
                    className="inline-block border border-[#C9A050]/60 text-[#C9A050] px-8 py-3 text-sm tracking-wider uppercase font-medium hover:bg-[#C9A050]/10 transition-colors"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </motion.section>

            {/* Reference */}
            <motion.section {...fadeIn}>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-7">
                <p className="text-[#C9A050] text-xs uppercase tracking-wider font-medium mb-3">
                  Clinical Note
                </p>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Reviewed and authored by Dr Ahmed Haq, GMC-registered aesthetic doctor
                  and Medical Director, Cosmedocs Harley Street. Daxxify
                  (daxibotulinumtoxinA-lanm) is a Revance Therapeutics product approved
                  by the US FDA. It is not currently licensed by the UK Medicines and
                  Healthcare products Regulatory Agency (MHRA). This article is for
                  patient education and does not constitute medical advice; a
                  consultation is required before any treatment decision.
                </p>
              </div>
            </motion.section>

          </article>
        </div>
      </div>
    </>
  );
};

export default DaxxifyVsBotoxUK;
