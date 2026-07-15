import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import MedicalArticleSchema from "@/components/seo/MedicalArticleSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import DrAhmedQuote from "@/components/DrAhmedQuote";

const path = "/treatments/endolift-alternative-london/";
const canonical = `https://www.cosmedocs.com${path}`;

const faqs = [
  {
    question: "Where can I get an Endolift® alternative in London?",
    answer:
      "Cosmedocs — 8–10 Harley Street, London W1G 9PF — offers Endolaser Excel, the second-generation dual-wavelength laser fibre lift. Delivered by Dr Ahmed Haq, Lead Trainer for laser fibre lifting at the Harley Street Institute. Consultation and treatment both take place at Harley Street.",
  },
  {
    question: "Is there an Endolift near me in central London?",
    answer:
      "Our Harley Street clinic is a 4-minute walk from Regent's Park (Bakerloo), 6 minutes from Great Portland Street (Circle, Metropolitan, Hammersmith &amp; City) and 8 minutes from Oxford Circus. Weekend consultations available for London and international patients.",
  },
  {
    question: "How much does the Endolift® alternative cost in London?",
    answer:
      "Endolaser Excel starts from £450 per zone at our Harley Street clinic. Full-face and neck packages are quoted after in-person or video consultation. Cost includes doctor-led delivery, topical anaesthesia and 3-month clinical review — no hidden fees.",
  },
  {
    question: "Who performs the treatment?",
    answer:
      "All Endolaser Excel treatments at Cosmedocs London are delivered by Dr Ahmed Haq (GMC-registered), Lead Trainer for laser fibre lifting at the Harley Street Institute. We do not delegate this treatment to nurses or non-medical practitioners.",
  },
  {
    question: "How does it compare to Endolift® clinics in London?",
    answer:
      "Most London Endolift® providers use the 1G single-wavelength (1470nm) system. Endolaser Excel adds a 980nm channel through the same fibre, targeting adipose and vasculature alongside collagen — one pass rather than layered sessions. Doctor-led, UKCA &amp; CE-marked, priced from £450 per zone.",
  },
];

const EndoliftAlternativeLondon = () => {
  return (
    <>
      <Helmet>
        <title>Endolift Alternative London — Endolaser Excel at Harley Street | Cosmedocs</title>
        <meta
          name="description"
          content="Looking for an Endolift® alternative in London? Endolaser Excel (2G dual-wavelength laser fibre lift) — doctor-led at 8–10 Harley Street. From £450."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" data-rh="true" href={canonical} />
        <meta property="og:title" content="Endolift Alternative London — Endolaser Excel | Cosmedocs" />
        <meta property="og:description" content="Doctor-led second-generation laser fibre lift on Harley Street." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
      </Helmet>

      <MedicalArticleSchema
        path={path}
        headline="Endolift® Alternative London — Endolaser Excel at Harley Street"
        description="The second-generation dual-wavelength laser fibre lift, doctor-led on Harley Street."
        datePublished="2026-07-15"
        dateModified="2026-07-15"
      />
      <FAQSchema faqs={faqs} />

      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
          <Breadcrumb items={[{ label: "Treatments", path: "/treatments" }]} currentPage="Endolift Alternative London" />
        </div>

        <section className="relative overflow-hidden py-16 md:py-24">
          <div aria-hidden className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#C9A050]/10 blur-3xl" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs text-white/70 mb-6">
              <MapPin className="w-3.5 h-3.5 text-[#C9A050]" /> 8–10 Harley Street, London W1G 9PF
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A050] text-black text-[10px] font-bold uppercase tracking-[0.24em] mb-6">
              <Sparkles className="w-3 h-3" /> Second-Generation Laser Fibre Lift
            </div>
            <h1 className="text-4xl md:text-6xl font-extralight leading-[1.05] tracking-tight mb-6" data-speakable>
              Endolift<span className="text-[#C9A050]">®</span> alternative — <span className="text-[#C9A050]">London</span>.
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
              Endolaser Excel is the second-generation dual-wavelength laser fibre lift — doctor-led on Harley Street,
              UKCA &amp; CE-marked, and priced from £450 per zone.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-full px-3 py-1 text-[11px] text-[#C9A050] uppercase tracking-wide">
                <BadgeCheck className="w-3.5 h-3.5" /> Doctor-led
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/15 rounded-full px-3 py-1 text-[11px] text-white/70 uppercase tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5" /> CQC-registered partner
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/15 rounded-full px-3 py-1 text-[11px] text-white/70 uppercase tracking-wide">
                Weekend appointments
              </span>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/treatments/endolaser/" className="inline-flex items-center gap-2 bg-[#C9A050] text-black font-semibold px-6 py-3 rounded-full hover:scale-[1.03] transition-transform">
                Discover Endolaser Excel <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact/" className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-6 py-3 rounded-full hover:border-[#C9A050] hover:text-[#C9A050] transition">
                Book on Harley Street
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <div className="bg-white/[0.03] border-l-4 border-[#C9A050] p-6 md:p-8 rounded-r-lg">
            <p className="text-xs tracking-[0.2em] uppercase text-[#C9A050] mb-3 font-medium">The short answer</p>
            <p className="text-base md:text-lg text-white/85 leading-relaxed" data-speakable>
              The best Endolift® alternative in London is Endolaser Excel at Cosmedocs, 8–10 Harley Street. It's the
              second-generation dual-wavelength (980nm + 1470nm) laser fibre lift — same intra-tissue lifting principle
              as Endolift®, upgraded with an adipose-targeting wavelength through the same micro-fibre. Doctor-led by
              Dr Ahmed Haq, from £450 per zone, with weekend availability for London and international patients.
            </p>
          </div>
        </section>

        {/* WHY LONDON PICKS US */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <h2 className="text-3xl md:text-4xl font-extralight mb-8 tracking-tight">Why London patients choose Endolaser Excel</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { k: "One pass, two wavelengths", v: "980nm adipose remodelling + 1470nm collagen contraction — no layered sessions." },
              { k: "Doctor-led delivery", v: "Performed by Dr Ahmed Haq, Lead Trainer at the Harley Street Institute." },
              { k: "Priced from £450", v: "Transparent per-zone pricing versus £1,500+ for legacy Endolift® in London." },
              { k: "Harley Street address", v: "8–10 Harley Street, W1G 9PF — CQC-registered partner clinic." },
              { k: "Weekend availability", v: "Saturday consultations for London and international patients." },
              { k: "3-month review included", v: "Every treatment includes clinical review at the collagen-peak mark." },
            ].map((s) => (
              <div key={s.k} className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                <div className="text-[#C9A050] text-sm font-medium mb-2">{s.k}</div>
                <p className="text-white/70 text-sm leading-relaxed">{s.v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LOCATION */}
        <section className="bg-white/[0.02] border-y border-white/10 py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-extralight mb-6 tracking-tight">Finding us</h2>
            <div className="grid md:grid-cols-2 gap-8 text-white/80">
              <div>
                <p className="text-sm text-white/60 mb-2">Address</p>
                <p className="text-lg font-light mb-4">
                  Cosmedocs<br />
                  8–10 Harley Street<br />
                  London W1G 9PF
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC-required treatments.
                </p>
              </div>
              <div>
                <p className="text-sm text-white/60 mb-2">Nearest tube</p>
                <ul className="text-sm space-y-1">
                  <li>Regent's Park (Bakerloo) — 4 min walk</li>
                  <li>Great Portland Street (Circle / Met / H&amp;C) — 6 min</li>
                  <li>Oxford Circus (Central / Bakerloo / Victoria) — 8 min</li>
                  <li>Bond Street (Central / Jubilee / Elizabeth) — 10 min</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <DrAhmedQuote />
        </div>

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

        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
          <h2 className="text-xl font-light text-white/80 mb-4">Related reading</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              { l: "Endolaser Excel — full treatment page", p: "/treatments/endolaser/" },
              { l: "Endolift alternative UK (overview)", p: "/treatments/endolift-alternative/" },
              { l: "Laser Fibre Lift vs Endolift — head-to-head", p: "/treatments/laser-fibre-lift-vs-endolift/" },
              { l: "Better than Endolift? The 2G evolution", p: "/blog/better-than-endolift/" },
            ].map((l) => (
              <li key={l.p}>
                <Link to={l.p} className="flex items-center gap-2 bg-white/[0.03] border border-white/10 rounded-xl p-4 hover:border-[#C9A050]/50 transition text-sm text-white/80">
                  <ArrowRight className="w-4 h-4 text-[#C9A050]" /> {l.l}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="max-w-4xl mx-auto px-4 sm:px-6 pb-8 text-xs text-white/40 italic">
          Endolift® is a registered trademark of Eufoton s.r.l. Cosmedocs is not affiliated with or endorsed by the trademark holder.
        </p>
      </div>
    </>
  );
};

export default EndoliftAlternativeLondon;
