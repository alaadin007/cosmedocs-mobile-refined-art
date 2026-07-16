import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import MedicalArticleSchema from "@/components/seo/MedicalArticleSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import DrAhmedQuote from "@/components/DrAhmedQuote";

const path = "/treatments/endolift-alternative/";
const canonical = `https://www.cosmedocs.com${path}`;

const faqs = [
  {
    question: "Is there a better alternative to Endolift® in the UK?",
    answer:
      "Endolift® pioneered laser fibre lifting in the mid-2010s using a single 1470nm diode. Cosmedocs offers XL Endolaser — a second-generation dual-wavelength (980nm + 1470nm) laser fibre lift delivered under one fibre, doctor-led on Harley Street. It targets the same clinical outcome (skin tightening, jawline definition, sub-mental lift) with deeper collagen contraction per pass and typically longer results.",
  },
  {
    question: "What is the difference between Endolift® and XL Endolaser?",
    answer:
      "Endolift® uses a single 1470nm wavelength. XL Endolaser is a 2G evolution combining 980nm (vascular/adipose) and 1470nm (water/collagen) through the same optical fibre. In practice this means one pass tightens skin AND melts small pockets of stubborn fat — useful for double chin, jowls and pre-jowl sulcus.",
  },
  {
    question: "How much does the Endolift® alternative cost at Cosmedocs?",
    answer:
      "XL Endolaser starts from £450 per zone. Full-face + neck packages are quoted at consultation. Endolift® in the UK typically ranges £1,500–£3,500 per zone; our doctor-led 2G protocol is priced transparently and includes 3-month review.",
  },
  {
    question: "Is XL Endolaser FDA / CE approved?",
    answer:
      "The device carries UKCA and CE marks. It is delivered by Dr Ahmed Haq, Lead Trainer for laser fibre lifting at the Harley Street Institute, in partnership with a CQC-registered clinical facility.",
  },
  {
    question: "Endolift® vs XL Endolaser — which lasts longer?",
    answer:
      "Both stimulate neocollagenesis, so results build over 3–6 months and typically last 18–24 months after a single session. Dual-wavelength protocols show marginally longer retention in our audit because deeper adipose remodelling reduces re-descent of soft tissue.",
  },
  {
    question: "Can I have this treatment instead of Endolift® for double chin?",
    answer:
      "Yes. XL Endolaser is our preferred protocol for sub-mental fullness because the 980nm component addresses the adipose layer while 1470nm tightens the overlying skin — a single-pass solution that Endolift® typically requires layered treatments to match.",
  },
];

const comparisonRows = [
  { attr: "Generation", a: "1G (mid-2010s)", b: "2G — dual-wave evolution" },
  { attr: "Wavelength", a: "1470nm only", b: "980nm + 1470nm (one fibre)" },
  { attr: "Fibre diameter", a: "200–300µm", b: "200µm micro-fibre" },
  { attr: "Primary target", a: "Water / collagen", b: "Water + adipose + collagen" },
  { attr: "Ideal for", a: "Mild laxity, fine tightening", b: "Laxity + jowl + double chin in one pass" },
  { attr: "Downtime", a: "2–3 days", b: "2–3 days" },
  { attr: "Longevity", a: "12–18 months", b: "18–24 months" },
  { attr: "Delivered by", a: "Varies (device-led)", b: "Doctor-led, Lead Trainer" },
  { attr: "Regulatory", a: "CE-marked device", b: "UKCA + CE marked" },
  { attr: "Cost (per zone, UK)", a: "£1,500–£3,500", b: "From £450" },
];

const EndoliftAlternative = () => {
  return (
    <>
      <Helmet>
        <title>Endolift Alternative UK — XL Endolaser (2G) at Harley Street | Cosmedocs</title>
        <meta
          name="description"
          content="Looking for an Endolift® alternative in the UK? XL Endolaser is the second-generation dual-wavelength laser fibre lift — doctor-led at Harley Street. From £450."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" data-rh="true" href={canonical} />
        <meta property="og:title" content="Endolift Alternative — XL Endolaser 2G | Cosmedocs" />
        <meta property="og:description" content="The second-generation dual-wavelength laser fibre lift, doctor-led at Harley Street." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
      </Helmet>

      <MedicalArticleSchema
        path={path}
        headline="Endolift® Alternative UK — XL Endolaser (2G Dual-Wavelength Laser Fibre Lift)"
        description="Second-generation dual-wavelength laser fibre lift, doctor-led at Harley Street. Trademark-safe clinical comparison."
        datePublished="2026-07-15"
        dateModified="2026-07-15"
        speakableSelectors={["h1", "[data-speakable]"]}
      />
      <FAQSchema faqs={faqs} />

      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
          <Breadcrumb items={[{ label: "Treatments", path: "/treatments" }]} currentPage="Endolift Alternative" />
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div aria-hidden className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#C9A050]/10 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#C9A050]/5 blur-3xl" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A050] text-black text-[10px] font-bold uppercase tracking-[0.24em] mb-6">
              <Sparkles className="w-3 h-3" /> Second-Generation Laser Fibre Lift
            </div>
            <h1
              className="text-4xl md:text-6xl font-extralight leading-[1.05] tracking-tight mb-6"
              data-speakable
            >
              The <span className="text-[#C9A050]">Endolift® alternative</span> — evolved.
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
              Endolift® pioneered laser fibre lifting in the mid-2010s. <strong className="text-white">XL Endolaser</strong> is the
              second-generation evolution — dual 980nm + 1470nm delivered under one fibre, doctor-led on Harley Street,
              with deeper collagen contraction per pass.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-full px-3 py-1 text-[11px] text-[#C9A050] uppercase tracking-wide">
                <BadgeCheck className="w-3.5 h-3.5" /> UKCA &amp; CE
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/15 rounded-full px-3 py-1 text-[11px] text-white/70 uppercase tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5" /> CQC-registered partner
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/15 rounded-full px-3 py-1 text-[11px] text-white/70 uppercase tracking-wide">
                From £450 · Doctor-led
              </span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/treatments/endolaser/"
                className="inline-flex items-center gap-2 bg-[#C9A050] text-black font-semibold px-6 py-3 rounded-full hover:scale-[1.03] transition-transform"
              >
                Discover XL Endolaser <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact/"
                className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-6 py-3 rounded-full hover:border-[#C9A050] hover:text-[#C9A050] transition"
              >
                Book a consultation
              </Link>
            </div>
          </div>
        </section>

        {/* TOP ANSWER */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <div className="bg-white/[0.03] border-l-4 border-[#C9A050] p-6 md:p-8 rounded-r-lg">
            <p className="text-xs tracking-[0.2em] uppercase text-[#C9A050] mb-3 font-medium">The short answer</p>
            <p className="text-base md:text-lg text-white/85 leading-relaxed" data-speakable>
              If you're searching for an Endolift® alternative in the UK, XL Endolaser is the second-generation
              equivalent: same intra-tissue lifting principle, upgraded with dual 980nm + 1470nm wavelengths in one
              micro-fibre. It's doctor-led by Dr Ahmed Haq (Lead Trainer, Harley Street Institute), UKCA &amp; CE-marked,
              and priced from £450 per zone versus £1,500+ for legacy Endolift®.
            </p>
          </div>
        </section>

        {/* GENERATION STORY */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <h2 className="text-3xl md:text-4xl font-extralight mb-8 tracking-tight">The two generations of laser fibre lifting</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-white/50 mb-2">First generation · c. 2015</p>
              <h3 className="text-2xl font-light text-white mb-3">Endolift®</h3>
              <p className="text-white/70 leading-relaxed text-sm">
                A genuine breakthrough. Eufoton introduced the concept of delivering a 1470nm diode laser directly through
                a fine optical fibre inserted under the skin — no scalpel, minimal downtime, real collagen contraction.
                It defined the category and remains a respected device internationally.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1a140a] to-black border border-[#C9A050]/40 rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-[#C9A050] mb-2">Second generation · today</p>
              <h3 className="text-2xl font-light text-white mb-3">XL Endolaser</h3>
              <p className="text-white/80 leading-relaxed text-sm">
                Combines <strong>980nm</strong> (targets adipose &amp; vasculature) with <strong>1470nm</strong> (targets water
                &amp; collagen) through a single 200µm micro-fibre. One pass tightens skin AND remodels small fat pockets —
                especially valuable for double chin, jowls and pre-jowl definition. Delivered doctor-led on Harley Street.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="bg-white/[0.02] border-y border-white/10 py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-extralight mb-8 tracking-tight">Side-by-side: Endolift® vs XL Endolaser</h2>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead className="bg-white/[0.04]">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium text-white/60">Attribute</th>
                    <th className="text-left px-4 py-3 font-medium text-white/60">Endolift®</th>
                    <th className="text-left px-4 py-3 font-medium text-[#C9A050]">XL Endolaser (2G)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((r, i) => (
                    <tr key={i} className="border-t border-white/5">
                      <td className="px-4 py-3 text-white/90 font-medium">{r.attr}</td>
                      <td className="px-4 py-3 text-white/60">{r.a}</td>
                      <td className="px-4 py-3 text-white/90">{r.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-white/40 mt-4 italic">
              Endolift® is a registered trademark of Eufoton s.r.l. This comparison is provided for patient information
              and does not imply endorsement by, or affiliation with, the trademark holder.
            </p>
          </div>
        </section>

        {/* WHEN WE CHOOSE */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extralight mb-8 tracking-tight">When XL Endolaser is the better choice</h2>
          <div className="space-y-4">
            {[
              "Double chin with mild-to-moderate skin laxity (dual-wave handles both in one pass)",
              "Jowl re-descent in the 35–55 bracket wanting a non-surgical alternative to a mini facelift",
              "Pre-jowl sulcus definition where filler alone would over-volumise",
              "Neck laxity with early platysmal banding (paired with anti-wrinkle injections)",
              "Patients previously treated with 1G Endolift® seeking a top-up with deeper adipose remodelling",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-4">
                <CheckCircle2 className="w-5 h-5 text-[#C9A050] flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <DrAhmedQuote />
        </div>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <h2 className="text-3xl md:text-4xl font-extralight mb-8 tracking-tight">Frequently asked</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white/[0.03] border border-white/10 rounded-xl p-5 group">
                <summary className="cursor-pointer font-medium text-white flex items-center justify-between">
                  {f.question}
                  <ArrowRight className="w-4 h-4 text-[#C9A050] group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* RELATED */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
          <h2 className="text-xl font-light text-white/80 mb-4">Continue reading</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              { l: "XL Endolaser — full treatment page", p: "/treatments/endolaser/" },
              { l: "Endolift London — the 1G authority page", p: "/treatments/endolift-london/" },
              { l: "Endolift alternative in London (local)", p: "/treatments/endolift-alternative-london/" },
              { l: "Laser Fibre Lift vs Endolift — head-to-head", p: "/treatments/laser-fibre-lift-vs-endolift/" },
              { l: "Better than Endolift? The 2G evolution explained", p: "/blog/better-than-endolift/" },
              { l: "Second-generation Endolift — the science", p: "/blog/endolift-second-generation/" },
            ].map((l) => (
              <li key={l.p}>
                <Link
                  to={l.p}
                  className="flex items-center gap-2 bg-white/[0.03] border border-white/10 rounded-xl p-4 hover:border-[#C9A050]/50 transition text-sm text-white/80"
                >
                  <ArrowRight className="w-4 h-4 text-[#C9A050]" /> {l.l}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-b from-black to-[#0a0805] py-16 border-t border-white/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4">Your consultation begins here</h2>
            <p className="text-white/60 mb-8">
              Doctor-led · Harley Street · UKCA &amp; CE-marked · From £450 per zone
            </p>
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 bg-[#C9A050] text-black font-semibold px-8 py-3 rounded-full hover:scale-[1.03] transition-transform"
            >
              Book your XL Endolaser consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default EndoliftAlternative;
