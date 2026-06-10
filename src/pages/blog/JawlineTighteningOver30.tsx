import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEOMetadata } from "@/utils/seo";
import { ArrowRight, Sparkles, ShieldCheck, Info, CheckCircle2, AlertTriangle, Clock } from "lucide-react";
import pdoThreadVideo from "@/assets/pdo-thread-insertion.mov.asset.json";
import femaleCaseAsset from "@/assets/jawline-over30-female-volume-restore.jpg.asset.json";
import maleCaseAsset from "@/assets/jawline-over30-male-volume-loss.jpg.asset.json";


/**
 * Long-form editorial blog (~2,500 words) targeting
 * "jawline tightening over 30 — filler, threads, or laser"
 * High commercial intent — funnels into the main Endolaser treatment page.
 */
export default function JawlineTighteningOver30() {
  const seo = generateSEOMetadata(
    "Jawline Tightening Over 30: Filler, Threads or Laser? | Cosmedocs",
    "Doctor's guide to jawline tightening after 30. When filler works, when PDO cog threads are right, and when Endolaser is the better fix. Honest, evidence-based, Harley Street.",
    "/blog/jawline-tightening-over-30/"
  );

  const faqs = [
    {
      q: "I'm 32 and my jaw is still sharp — am I too early for any of this?",
      a: "No — early-30s is the most strategic window. A small volume restoration in the mid-face now (1ml or less) can prevent the jowl that would otherwise need cog threads or laser in your 40s. Prevention is cheaper, less invasive and more natural-looking than correction.",
    },
    {
      q: "Will filler give me a sharper jawline or make it heavier?",
      a: "Done correctly, mid-face and chin filler lift the lower face without adding bulk to it. Heavy-looking jawlines usually come from injecting filler directly into the masseter region without addressing the deflated mid-face that caused the descent in the first place.",
    },
    {
      q: "How is Endolaser different to HIFU or radiofrequency microneedling?",
      a: "HIFU and RF microneedling deliver energy through the skin — every photon spends part of itself heating tissue you didn't want heated. Endolaser passes a hair-thin fibre under the skin and delivers laser energy at the exact depth of the fibrous septae anchoring the jowl. The result is more tightening per session, with the same downtime.",
    },
    {
      q: "Do PDO cog threads really lift, or is it marketing?",
      a: "Cog threads lift mechanically on day one — that part is real. What's oversold is duration. Honest results last 9–14 months on average. Threads work best as part of a combination plan (often with filler or Endolaser), not as a standalone facelift substitute.",
    },
    {
      q: "How much downtime should I expect?",
      a: "Filler — 24–72 hours of mild swelling, occasional bruising. PDO cogs — 5–10 days of tightness and possible bruising at insertion points. Endolaser — 3–7 days of mild swelling, sometimes light bruising along the treated lines. None require time off work for most patients.",
    },
    {
      q: "How much does Endolaser for the jawline cost?",
      a: "Pricing depends on the area treated and whether it is combined with other modalities. A typical single-area Endolaser session for jawline tightening starts from £950, performed by our medical doctors on Harley Street. Every treatment includes consultation, the procedure itself, and a review. An exact quote is given after your clinical assessment.",
    },
  ];

  const tldr = [
    { age: "30–35", problem: "Early volume loss, no sagging yet", best: "Filler (mid-face / chin)" },
    { age: "35–42", problem: "Early jowl shadow, jawline softening", best: "Filler + Endolaser" },
    { age: "40–50", problem: "Defined jowl, visible laxity", best: "Endolaser ± PDO cogs" },
    { age: "50+", problem: "Heavy jowl, platysmal banding", best: "Surgery or combination" },
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
        <meta name="keywords" content="jawline tightening, jowl treatment, jawline filler, PDO cog threads, Endolaser, non-surgical facelift, Harley Street, jawline over 30" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalScholarlyArticle",
          headline: "Jawline Tightening Over 30: Filler, Threads or Laser?",
          description: seo.description,
          url: seo.canonical,
          author: { "@type": "Organization", name: "Cosmedocs" },
          publisher: { "@type": "MedicalOrganization", name: "Cosmedocs", url: "https://www.cosmedocs.com" },
          datePublished: "2026-06-10",
          dateModified: "2026-06-10",
          mainEntityOfPage: seo.canonical,
          inLanguage: "en-GB",
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        })}</script>
      </Helmet>

      <main className="bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog/" },
            { label: "Jawline Tightening Over 30" },
          ]} />
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-16">
          {/* Header */}
          <motion.header initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block text-[10px] tracking-[0.24em] uppercase text-[#C9A050] font-medium">
              Doctor's Guide · 11 min read
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extralight leading-[1.1]">
              Jawline tightening over 30 — filler, threads or laser?
            </h1>
            <p className="mt-5 text-lg text-white/65 font-light leading-relaxed">
              The honest decision tree we use on Harley Street. Where most people waste money, what
              the face is actually doing in each decade, and why getting the order of treatments
              right matters more than the brand of any single product.
            </p>
          </motion.header>

          {/* Editorial note */}
          <aside className="mt-8 rounded-2xl border border-[#C9A050]/30 bg-[#C9A050]/[0.05] p-5">
            <div className="flex gap-3">
              <Info className="w-5 h-5 text-[#C9A050] flex-shrink-0 mt-0.5" />
              <div className="text-sm text-white/75 leading-relaxed">
                <strong className="text-white">Editorial note.</strong> Written by the medical team at
                Cosmedocs (Harley Street, London). Every option discussed below — filler, PDO cog threads
                and Endolaser — is performed in-house by GMC-registered doctors. This article is
                educational; outcomes are individual and always require an in-person consultation.
              </div>
            </div>
          </aside>

          {/* TL;DR table */}
          <section className="mt-10">
            <h2 className="text-2xl font-light">The quick answer</h2>
            <p className="mt-2 text-white/60 text-sm">
              If you read nothing else, read this. Use the row that matches your decade — then read the
              section below it for the reasoning.
            </p>
            <div className="mt-5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] text-white/40 bg-white/[0.03] px-4 py-3">
                <div className="col-span-2">Age</div>
                <div className="col-span-6">What's happening</div>
                <div className="col-span-4">Best first step</div>
              </div>
              {tldr.map(r => (
                <div key={r.age} className="grid grid-cols-12 px-4 py-3 text-sm border-t border-white/5">
                  <div className="col-span-2 text-[#C9A050]">{r.age}</div>
                  <div className="col-span-6 text-white/80">{r.problem}</div>
                  <div className="col-span-4 text-white">{r.best}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Body */}
          <section className="prose-invert mt-12 space-y-6 text-white/80 font-light leading-[1.8]">

            <h2 className="text-2xl font-light text-white">1. What actually happens to the jawline after 30</h2>
            <p>
              The face does not simply "drop" with age. It deflates, then descends. In your 20s, the
              mid-face — the fat compartments over your cheekbones and around your nose — is full,
              springy and well-supported by collagen-rich skin. That fullness is doing invisible
              architectural work: it holds the soft tissue of the lower face <em>up</em>. The moment
              that mid-face fullness begins to shrink (typically the early-to-mid 30s for most people,
              earlier for those with a slimmer facial type), gravity gets to work on tissue that was
              never designed to be self-supporting.
            </p>
            <p>
              That is why the first sign of ageing on a 32-year-old jaw isn't usually the jaw at all.
              It is a faint shadow above the corner of the mouth — a half-millimetre of cheek tissue
              that has slipped a little lower than it used to sit. Left untreated for five years, that
              shadow deepens into a defined jowl. The skin overlying it stretches and loses elasticity.
              The fibrous septae — the tiny connective-tissue strings that anchor fat to bone — slacken.
              By 40, the problem is no longer "a little volume loss" — it is a structural, mechanical
              issue, and the treatments needed to reverse it are very different.
            </p>
            <p className="text-white/85 italic border-l-2 border-[#C9A050]/40 pl-4">
              <strong className="not-italic text-white">The principle:</strong> face loses volume → face
              sinks → face sags. Early volume replacement prevents sag. Once jowls are established,
              they're stubborn — and the only modalities that genuinely shift them are mechanical
              (PDO cog threads) or structural (Endolaser, surgery).
            </p>

            <h2 className="text-2xl font-light text-white">2. Why most people waste money on the wrong step</h2>
            <p>
              The two most common mistakes we see on consultations:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong className="text-white">Doing nothing until the jowl is obvious</strong>, then
                expecting a single syringe of filler to "lift" it. Filler does not lift heavy tissue;
                it volumises empty space. Putting it into a sagging jawline at 45 often makes the lower
                face heavier, not sharper.
              </li>
              <li>
                <strong className="text-white">Starting with thread lifts at 33</strong> because an
                Instagram clinic offered a "non-surgical facelift". At 33 there is usually nothing to
                lift. The threads dissolve in 9–14 months and you've paid £1,500 to solve a problem
                you didn't have.
              </li>
            </ul>
            <p>
              The smart approach is to match the treatment to the <em>cause</em> at your specific stage —
              and to combine modalities only when the anatomy genuinely needs more than one.
            </p>

            <h2 className="text-2xl font-light text-white">3. Filler — the prevention tool (30–38)</h2>
            <p>
              When deployed in the early 30s, dermal filler is best understood as <em>structural
              insurance</em>. We are not chasing a look; we are restoring fullness to compartments
              that have started to deflate, so the lower face has no reason to descend.
            </p>
            <p>
              For most patients in this window, the right answer is a small amount of filler in the
              <strong className="text-white"> mid-face</strong> (anterior cheek or zygomatic arch),
              sometimes paired with a touch in the <strong className="text-white">chin</strong> to
              re-balance projection. Total volume is usually 1–2ml across the whole lower-third
              treatment plan, and the goal is that no one can tell you've had anything done.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
              <Stat label="Best for" value="Early volume loss" />
              <Stat label="Lift effect" value="Indirect — via mid-face" />
              <Stat label="Lasts" value="9–18 months" />
            </div>
            <p className="mt-4">
              <strong className="text-white">When filler is the wrong tool:</strong> if you already have
              a defined jowl, visible nasolabial fold collapse and skin that no longer "snaps back"
              when pinched, filler alone will not fix it. You need a structural treatment first
              (Endolaser), and filler second, to refine the result.
            </p>
            <p className="text-sm text-white/55">
              Related reading:{" "}
              <Link to="/treatments/dermal-fillers/" className="text-[#C9A050] underline underline-offset-2">our dermal filler treatments</Link>,{" "}
              <Link to="/treatments/jawline-filler/" className="text-[#C9A050] underline underline-offset-2">jawline filler</Link>,{" "}
              <Link to="/treatments/cheek-filler/" className="text-[#C9A050] underline underline-offset-2">cheek filler</Link>.
            </p>

            <h2 className="text-2xl font-light text-white">4. PDO cog threads — the mechanical lift (35–48)</h2>
            <p>
              PDO (polydioxanone) cog threads are absorbable surgical sutures with tiny barbs
              ("cogs") along their length. When passed under the skin and gently retracted, the cogs
              grip the subcutaneous tissue and physically reposition it upward. Unlike smooth or mono
              threads — which work mainly through collagen stimulation — cog threads produce a
              same-day mechanical lift you can see in the mirror as you walk out of the clinic.
            </p>
            <p>
              The honest version of the cog-thread conversation looks like this:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <Bullet positive title="What they're good at">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Defined early-to-moderate jowl</li>
                  <li>Visible nasolabial-to-jawline laxity</li>
                  <li>Patients not ready for surgery</li>
                  <li>Same-day visible repositioning</li>
                </ul>
              </Bullet>
              <Bullet title="What they're not">
                <ul className="list-disc pl-4 space-y-1">
                  <li>A facelift substitute past 55</li>
                  <li>Permanent — duration is 9–14 months</li>
                  <li>A fix for pure volume loss</li>
                  <li>Risk-free — bruising and palpable threads are common</li>
                </ul>
              </Bullet>
            </div>

            {/* PDO cog thread insertion — clinic footage */}
            <figure className="mt-8 rounded-2xl overflow-hidden border border-[#C9A050]/30 bg-black/60">
              <video
                src={pdoThreadVideo.url}
                controls
                muted
                playsInline
                preload="metadata"
                className="w-full h-auto block"
                aria-label="PDO cog thread insertion procedure at Cosmedocs Harley Street"
              />
              <figcaption className="px-4 py-3 text-xs text-white/60 border-t border-white/10">
                Clinic footage — PDO cog thread insertion along the jawline. Performed under local anaesthetic at Cosmedocs, Harley Street. Bold • Natural • Always Your Way.
              </figcaption>
            </figure>
            <p className="mt-5">
              We almost always combine PDO cogs with one or both of the other two modalities. Threads
              reposition the tissue; filler stabilises the new position; Endolaser tightens the skin
              envelope around it. Used alone, threads can look impressive at week one and disappointing
              by month nine. Used in combination, they buy you 18–24 months of meaningful improvement.
            </p>

            <h2 className="text-2xl font-light text-white">5. Endolaser — the structural fix (38–55+)</h2>
            <p>
              Endolaser is the treatment most people have not heard of and the one that, for the
              right patient, changes everything. A fibre thinner than a human hair is passed under the
              skin and delivers dual-wavelength laser energy (typically 1470nm + 980nm) directly into
              the deep dermis and superficial fat. Two things happen:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                The laser <strong className="text-white">contracts the fibrous septae</strong> — the
                tiny tissue strings that have slackened and allowed the jowl to descend. That
                contraction is immediate and partly responsible for the early "tightening" effect.
              </li>
              <li>
                Over the following 3–6 months, the controlled thermal injury triggers
                <strong className="text-white"> new collagen production</strong>, progressively
                tightening the skin envelope from the inside.
              </li>
            </ol>
            <p>
              Because the energy is delivered <em>at the target depth</em> rather than through the
              surface of the skin, Endolaser achieves more tightening per session than HIFU,
              radiofrequency microneedling or surface lasers — without leaving visible marks on the
              skin. Typical downtime is 3–7 days of mild swelling, occasionally a small bruise along
              one of the entry points.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
              <Stat label="Best for" value="Established jowl / laxity" />
              <Stat label="Lift effect" value="Direct structural" />
              <Stat label="Lasts" value="18–24 months+" />
            </div>
            <p className="mt-4">
              This is the treatment behind our <Link to="/treatments/endolaser/" className="text-[#C9A050] underline underline-offset-2">Endolaser Laser Fibre Lift</Link>.
              It is performed by our medical doctors on Harley Street and is the single most efficient
              treatment we offer for patients in their late 30s through 50s who want jawline definition
              without surgery.
            </p>

            <h2 className="text-2xl font-light text-white">6. The decision, in plain English</h2>
            <p>
              If you take one paragraph away from this article, take this one. <strong className="text-white">In your early 30s</strong>, the right tool is small-volume filler in the mid-face to prevent the jowl ever forming. <strong className="text-white">In your late 30s and early 40s</strong>, once a jowl shadow has formed, Endolaser is the highest-leverage single treatment — often combined with conservative filler. <strong className="text-white">In your mid-40s onward</strong>, when there is mechanical laxity, PDO cog threads earn their place alongside Endolaser. <strong className="text-white">Past the mid-50s</strong>, if the laxity is severe, an honest surgeon's conversation about a deep-plane facelift is the kind thing to have — non-surgical can only do so much, and pretending otherwise wastes your money.
            </p>

            <h2 className="text-2xl font-light text-white">7. What to ask in a consultation</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Will a GMC-registered doctor perform the treatment, or a non-medical practitioner?</li>
              <li>If you're recommending filler, why filler and not a structural treatment?</li>
              <li>If you're recommending threads, what's the combination plan for after they dissolve?</li>
              <li>If you're recommending Endolaser, is the device dual-wavelength and UKCA/CE-marked?</li>
              <li>What is the management plan if I bruise, get a small burn or develop an infection?</li>
              <li>What does success look like at 3, 6 and 12 months — not just at week one?</li>
            </ol>

            <h2 className="text-2xl font-light text-white">8. The Cosmedocs approach</h2>
            <p>
              Our aesthetics is invisible art — bold, natural, always your way. We do not sell single
              treatments; we plan jawlines. A first consultation maps your specific anatomy,
              identifies which decade of change you're in, and matches the smallest possible
              intervention to the largest possible result. Sometimes that's a single syringe of filler.
              Sometimes it's one Endolaser session. Occasionally it's all three modalities,
              sequenced over six months. Whatever it is, you will leave the consultation knowing
              exactly why.
            </p>
          </section>

          {/* Real cases — early-phase volume loss */}
          <section className="mt-14">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#C9A050]" />
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#C9A050] font-medium">
                Real Cosmedocs cases · Phase one
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extralight">
              The first phase: volume loss, before sag sets in
            </h2>
            <p className="mt-3 text-white/65 font-light leading-relaxed">
              The over-30 face does not sag first — it <em>sinks</em> first. Mid-face fat pads deflate,
              the cheek loses projection, and the skin envelope that used to sit over a fuller scaffold
              starts to drift downward. Caught at this phase, a small, precisely-placed volume
              restoration arrests the descent and keeps the jawline crisp — no threads, no laser, no
              downtime. Below are two real Cosmedocs patients photographed at this exact stage.
            </p>

            {/* Case 1 — female */}
            <figure className="mt-8 rounded-2xl overflow-hidden border border-[#C9A050]/25 bg-white/[0.02]">
              <img
                src={femaleCaseAsset.url}
                alt="Female patient in her thirties — before and after small-volume mid-face and cheek filler at Cosmedocs, restoring projection and lifting the lower face without changing identity"
                className="w-full h-auto"
                loading="lazy"
              />
              <figcaption className="px-5 py-4 text-sm text-white/65 leading-relaxed">
                <strong className="text-white">Case one — female, early 30s.</strong> Early mid-face
                volume loss with the beginning of a soft jowl shadow. A conservative volume
                restoration to the cheek and lateral mid-face re-projects the upper structure;
                the lower face lifts <em>as a consequence</em>, not as a target. No filler placed in
                the jawline itself. Identity preserved entirely.
              </figcaption>
            </figure>

            {/* Case 2 — male */}
            <figure className="mt-6 rounded-2xl overflow-hidden border border-[#C9A050]/25 bg-white/[0.02]">
              <img
                src={maleCaseAsset.url}
                alt="Male patient profile — before and after volume restoration at Cosmedocs, demonstrating reduction of lower-face heaviness and improved chin and jawline definition"
                className="w-full h-auto"
                loading="lazy"
              />
              <figcaption className="px-5 py-4 text-sm text-white/65 leading-relaxed">
                <strong className="text-white">Case two — male, 30s.</strong> Volume loss in the
                mid-face with compensatory heaviness accumulating in the front of the lower face —
                a typical male presentation. Re-projection of the chin and angle of the jaw, with
                support to the deflated mid-face, sharpens the profile and reduces the
                pre-jowl fullness. Same face. Better scaffold.
              </figcaption>
            </figure>

            <p className="mt-6 text-xs italic text-white/45 leading-relaxed">
              Real Cosmedocs patients, photographed with consent under standardised lighting.
              Individual results vary. Photographs are clinical records, not retouched marketing imagery.
            </p>
          </section>

          {/* CTA — main Endolaser page */}
          <section className="mt-14 rounded-2xl border border-[#C9A050]/40 bg-gradient-to-br from-black via-[#1a140a] to-black p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#C9A050]" />
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#C9A050] font-medium">
                Doctor-led · Harley Street
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extralight">
              Endolaser Jawline Tightening
            </h3>
            <p className="mt-3 text-white/65 font-light leading-relaxed text-sm sm:text-base">
              Dual-wavelength Endolaser performed by our medical team on Harley Street.
              The structural fix for established jowls and jawline laxity — more tightening per session
              than HIFU or radiofrequency, with 3–7 days downtime.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 items-center">
              <Link
                to="/treatments/endolaser/"
                className="inline-flex items-center gap-2 bg-[#C9A050] text-black font-semibold px-5 py-3 rounded-full hover:scale-[1.03] transition-transform"
              >
                Read the full Endolaser page <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact/" className="text-sm text-white/70 hover:text-[#C9A050]">
                Or book a consultation →
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wider">
              <span className="inline-flex items-center gap-1.5 bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-full px-3 py-1 text-[#C9A050]">
                <ShieldCheck className="w-3 h-3" /> Doctor-led
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/15 rounded-full px-3 py-1 text-white/70">
                <Clock className="w-3 h-3" /> 3–7 days downtime
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/15 rounded-full px-3 py-1 text-white/70">
                18–24 months+ results
              </span>
            </div>
          </section>

          {/* FAQ */}
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

          {/* Further reading */}
          <section className="mt-12 border-t border-white/10 pt-8">
            <h2 className="text-sm uppercase tracking-[0.22em] text-white/40">Continue reading</h2>
            <ul className="mt-4 space-y-2 text-[#C9A050]">
              <li><Link to="/blog/endolift-explained/" className="hover:underline">Endolift® explained — how sub-surface laser lifting actually works</Link></li>
              <li><Link to="/aesthetic-treatments-made-easy/" className="hover:underline">Smart Aesthetics — understand your face before you treat it</Link></li>
              <li><Link to="/treatments/endolaser/" className="hover:underline">Endolaser (Laser Fibre Lift) — full treatment page</Link></li>
            </ul>
          </section>
        </article>
      </main>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="text-[10px] uppercase tracking-[0.22em] text-white/40">{label}</div>
      <div className="mt-1.5 text-white text-sm">{value}</div>
    </div>
  );
}

function Bullet({ title, positive = false, children }: { title: string; positive?: boolean; children: React.ReactNode }) {
  return (
    <div className={`rounded-xl border p-4 ${positive ? "border-[#C9A050]/30 bg-[#C9A050]/[0.04]" : "border-white/10 bg-white/[0.02]"}`}>
      <div className={`flex items-center gap-2 text-sm font-medium ${positive ? "text-[#C9A050]" : "text-white"}`}>
        {positive ? <CheckCircle2 className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
        {title}
      </div>
      <div className="mt-2 text-white/70 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
