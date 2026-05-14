import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEOMetadata } from "@/utils/seo";
import { ArrowRight, Sparkles, ShieldCheck, Info } from "lucide-react";

/**
 * Educational blog targeting "Endolift" search intent.
 * Endolift® is a trademarked device by Eufoton — Cosmedocs does NOT use the Endolift®
 * branded device. We perform an equivalent dual-wavelength laser fibre lift treatment
 * (Endolaser) using a UKCA & CE-marked alternative platform.
 *
 * This page is informational, comparing the technology category and routing intent
 * to our Endolaser (Laser Fibre Lift) treatment.
 */
export default function EndoliftExplained() {
  const seo = generateSEOMetadata(
    "Endolift® Explained: How Sub-Surface Laser Lifting Works | Cosmedocs",
    "Plain-English doctor's guide to Endolift® and intra-tissue laser lifting. How it works, candidacy, alternatives, and what we offer at Cosmedocs (Endolaser).",
    "/blog/endolift-explained/"
  );

  const faqs = [
    { q: "What is Endolift®?", a: "Endolift® is a trademarked device manufactured by Eufoton (Italy) that uses a fine optical fibre passed under the skin to deliver laser energy directly to the dermis and superficial fat. The technology category is intra-tissue laser lifting, sometimes called sub-surface laser or laser fibre lift." },
    { q: "Do you offer Endolift® at Cosmedocs?", a: "We do not use the Endolift® branded device. We perform an equivalent intra-tissue laser lifting treatment using a different UKCA and CE-marked dual-wavelength platform — we call ours Endolaser. The clinical principle is identical; the device manufacturer differs." },
    { q: "Is one device better than the other?", a: "Outcomes from doctor-led intra-tissue laser lifting are driven primarily by the operator and the treatment plan, not by which manufacturer made the laser fibre. Wavelength selection (1470nm vs 980nm), fibre size, energy settings and clinician experience matter far more than the brand on the box." },
    { q: "Is intra-tissue laser lifting safe?", a: "When performed by a properly trained doctor on appropriate candidates, yes — it has an excellent safety profile. The most common side effects are bruising, mild swelling and transient numbness for a few days. Serious complications are rare but require medical management — which is why doctor-led delivery matters." },
    { q: "Who is a good candidate?", a: "Patients with mild-to-moderate skin laxity in the lower face, neck or jawline who want a non-surgical lift without threads or filler. Severe sagging is better served by a surgical lower face or neck lift." },
    { q: "How long do results last?", a: "Most patients see continued tightening over 3–6 months as new collagen is laid down. A single treatment typically lasts 18–24 months. Maintenance once every two years is common." },
  ];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" data-rh="true" href={seo.canonical} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalScholarlyArticle",
          headline: "Endolift® Explained: How Sub-Surface Laser Lifting Works",
          description: seo.description,
          url: seo.canonical,
          author: { "@type": "Organization", name: "Cosmedocs" },
          publisher: { "@type": "MedicalOrganization", name: "Cosmedocs", url: "https://www.cosmedocs.com" },
          datePublished: "2026-05-14",
          mainEntityOfPage: seo.canonical,
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        })}</script>
      </Helmet>

      <main className="bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Endolift® Explained" }]} />
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-16">
          <motion.header initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block text-[10px] tracking-[0.24em] uppercase text-[#C9A050] font-medium">Doctor's Guide · 7 min read</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extralight leading-[1.1]">
              Endolift® explained — how sub-surface laser lifting actually works
            </h1>
            <p className="mt-5 text-lg text-white/65 font-light leading-relaxed">
              You've seen the before-and-afters. You've seen the price tag. You've also seen at least three completely different explanations of what Endolift® <em>is</em>. Here's the doctor's version — what's happening under the skin, who it suits, and what to ask before booking it anywhere.
            </p>
          </motion.header>

          {/* Editorial disclosure card */}
          <aside className="mt-8 rounded-2xl border border-[#C9A050]/30 bg-[#C9A050]/[0.05] p-5">
            <div className="flex gap-3">
              <Info className="w-5 h-5 text-[#C9A050] flex-shrink-0 mt-0.5" />
              <div className="text-sm text-white/75 leading-relaxed">
                <strong className="text-white">Editorial note.</strong> Endolift® is a registered trademark of Eufoton. Cosmedocs does not use the Endolift® branded device. We perform an equivalent dual-wavelength intra-tissue laser lifting treatment on a different UKCA &amp; CE-marked platform — we refer to ours as{" "}
                <Link to="/treatments/endolaser/" className="text-[#C9A050] underline underline-offset-2">Endolaser (Laser Fibre Lift)</Link>. This article is purely educational.
              </div>
            </div>
          </aside>

          <section className="prose-invert mt-10 space-y-6 text-white/80 font-light leading-[1.8]">
            <h2 className="text-2xl font-light text-white !mt-0">1. The category, in one sentence</h2>
            <p>
              All of these treatments — Endolift®, Endolaser, intra-tissue laser, sub-surface laser, laser fibre lift — describe the same idea: <strong className="text-white">an optical fibre thinner than a hair is passed underneath the skin, and laser energy is delivered directly into the deep dermis and superficial fat.</strong> The skin tightens because (a) the laser shrinks fibrous septae and (b) it triggers months of new collagen production.
            </p>

            <h2 className="text-2xl font-light text-white">2. Why "under the skin" matters</h2>
            <p>
              Surface lasers (CO₂, fractional, IPL) deliver energy <em>through</em> the skin. They work, but every photon spends energy heating tissue you don't want heated. An intra-tissue fibre delivers energy <em>at the target depth</em> — typically 1–4mm under the surface. The result is more tightening per millijoule, with less surface downtime.
            </p>

            <h2 className="text-2xl font-light text-white">3. Wavelengths — the part most articles skip</h2>
            <p>
              Most modern intra-tissue laser systems use either <strong className="text-white">1470nm</strong> (water-absorbed, excellent for collagen contraction in the dermis) or <strong className="text-white">980nm</strong> (haemoglobin-absorbed, useful for the fibrous septae anchoring fat). The best modern devices, including the platform we use, are dual-wavelength — meaning the doctor can switch between targets within a single treatment.
            </p>

            <h2 className="text-2xl font-light text-white">4. What it's good for</h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Mild-to-moderate jawline laxity and early jowling</li>
              <li>Submental fullness ("double chin") with skin laxity</li>
              <li>Lower-face skin quality and pore refinement</li>
              <li>Selected upper-arm and inner-thigh laxity</li>
            </ul>

            <h2 className="text-2xl font-light text-white">5. What it is <em>not</em> good for</h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Severe sagging or platysmal banding (needs surgery)</li>
              <li>Pure volume loss without laxity (needs filler, not laser)</li>
              <li>Patients with active infection in the treatment area</li>
              <li>Patients with unrealistic "facelift result" expectations</li>
            </ul>

            <h2 className="text-2xl font-light text-white">6. The questions to ask any clinic</h2>
            <ol className="space-y-2 list-decimal pl-5">
              <li>Is the device UKCA &amp; CE marked? (You want yes.)</li>
              <li>Will a doctor perform the treatment, or a non-medical practitioner?</li>
              <li>How many cases has the operator done?</li>
              <li>Is the device single-wavelength or dual-wavelength?</li>
              <li>What's the management plan if I bruise or develop a small burn?</li>
            </ol>
          </section>

          {/* CTA to Endolaser */}
          <section className="mt-12 rounded-2xl border border-[#C9A050]/40 bg-gradient-to-br from-black via-[#1a140a] to-black p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#C9A050]" />
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#C9A050] font-medium">What we offer at Cosmedocs</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extralight">
              Endolaser <span className="text-[#C9A050]">(Laser Fibre Lift)</span>
            </h3>
            <p className="mt-3 text-white/65 font-light leading-relaxed text-sm sm:text-base">
              Doctor-led, dual-wavelength (1470 + 980nm), performed by the Lead Trainer for this device at the Harley Street Institute. UKCA &amp; CE-marked platform. From £450.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 items-center">
              <Link to="/treatments/endolaser/" className="inline-flex items-center gap-2 bg-[#C9A050] text-black font-semibold px-5 py-3 rounded-full hover:scale-[1.03] transition-transform">
                See the Endolaser page <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/treatments/endolift-london/" className="text-sm text-white/70 hover:text-[#C9A050]">
                Or our full Endolift London authority page →
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wider">
              <span className="inline-flex items-center gap-1.5 bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-full px-3 py-1 text-[#C9A050]">
                <ShieldCheck className="w-3 h-3" /> UKCA &amp; CE
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/15 rounded-full px-3 py-1 text-white/70">
                Doctor-led · Harley Street
              </span>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-light">Common questions</h2>
            <div className="mt-4 divide-y divide-white/10">
              {faqs.map(f => (
                <details key={f.q} className="py-4 group">
                  <summary className="cursor-pointer font-medium list-none flex justify-between items-center text-white">
                    {f.q}
                    <span className="text-[#C9A050] group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-white/65 text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
