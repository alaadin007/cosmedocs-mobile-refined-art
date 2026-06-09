import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Download, MapPin, ShieldCheck } from "lucide-react";
import ad1 from "@/assets/endolaser-ad-1.jpg.asset.json";
import ad2 from "@/assets/endolaser-ad-2.jpg.asset.json";
import ad3 from "@/assets/endolaser-ad-3.jpg.asset.json";

const slides = [
  {
    eyebrow: "Over 30 · Jawline Definition",
    headline: "Quietly redefine your jawline.",
    body: "A precision laser fibre treatment for mild jowl softening and subtle jawline tightening — invisible art, not an obvious tweak.",
    image: ad1.url,
    cta: "See if you qualify",
  },
  {
    eyebrow: "Doctor-Led · Harley Street",
    headline: "Performed only by experienced medical doctors.",
    body: "Dual-wavelength 980nm + 1470nm laser fibre, delivered under local anaesthetic in a CQC-regulated Harley Street facility.",
    image: ad2.url,
    cta: "Meet the doctors",
  },
  {
    eyebrow: "Flat Offer · £950",
    headline: "Jawline & Jowls — £950 flat.",
    body: "Book with a small deposit, send a clear photograph, attend your in-person review. If you're not suitable, your deposit is refunded in full.",
    image: ad3.url,
    cta: "Book & pay deposit",
  },
];

const downloads = [
  { label: "Slide 1 — Jawline", url: ad1.url, file: "endolaser-ad-1.jpg" },
  { label: "Slide 2 — Doctor-Led", url: ad2.url, file: "endolaser-ad-2.jpg" },
  { label: "Slide 3 — £950 Offer", url: ad3.url, file: "endolaser-ad-3.jpg" },
];

const faqs = [
  {
    q: "What does the £950 include?",
    a: "A full Jawline & Jowls Endolaser treatment with an experienced medical doctor at our Harley Street facility, including local anaesthetic, the procedure itself and your aftercare review.",
  },
  {
    q: "How does the deposit work?",
    a: "You book and pay a small deposit online to secure your slot. You then send us a clear front-and-side photograph. If our doctor confirms you're a suitable candidate, the deposit comes off your £950. If you're not suitable, the deposit is refunded in full — no quibble.",
  },
  {
    q: "Who is it for?",
    a: "Best suited to patients over 30 with mild to moderate jowling and softening of the jawline who want a subtle, natural-looking definition — not a surgical change.",
  },
  {
    q: "Is there downtime?",
    a: "Expect 4–5 days of swelling and mild bruising under the jaw. Most patients return to work within a week. Final result settles over 8–12 weeks and continues to refine for several months.",
  },
  {
    q: "How long does it last?",
    a: "Results typically last 2–3 years or longer. A single session is usually enough; a 50% repeat-area discount is available after 6 months if further refinement is desired.",
  },
  {
    q: "Why is this doctor-led?",
    a: "Endolaser is a controlled thermal procedure performed under the skin. At Cosmedocs it is only delivered by medical doctors experienced with the device — never by non-medical injectors.",
  },
];

export default function EndolaserJawlineAd() {
  return (
    <>
      <Helmet>
        <title>Endolaser Jawline £950 · Harley Street | Cosmedocs</title>
        <meta
          name="description"
          content="Doctor-led Endolaser jawline & jowls treatment at Harley Street. Flat £950 offer. Book with deposit — refunded in full if you're not suitable."
        />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://www.cosmedocs.com/ads/endolaser-jawline/" />
      </Helmet>

      <main className="bg-black text-white">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24 text-center">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#C9A050] mb-5">
              Meta Ad Series · Endolaser Jawline
            </p>
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight leading-[1.05] max-w-3xl mx-auto">
              Invisible art for the lower face.
            </h1>
            <p className="mt-6 text-white/55 text-base sm:text-lg max-w-xl mx-auto font-light">
              Three slides. One offer. Built so patients can book without calling, messaging or quibbling.
            </p>
          </div>
        </section>

        {/* Slides */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24 space-y-16 sm:space-y-24">
          {slides.map((slide, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid md:grid-cols-2 gap-8 sm:gap-12 items-center ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/[0.08] bg-black">
                <img
                  src={slide.image}
                  alt={slide.headline}
                  width={1088}
                  height={1088}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] text-[#C9A050]/80 bg-black/40 backdrop-blur px-2.5 py-1 rounded-full border border-[#C9A050]/20">
                  Slide {i + 1} / 3
                </span>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#C9A050] mb-4">{slide.eyebrow}</p>
                <h2 className="text-3xl sm:text-4xl font-light leading-tight tracking-tight">
                  {slide.headline}
                </h2>
                <p className="mt-5 text-white/55 text-base sm:text-lg font-light leading-relaxed">
                  {slide.body}
                </p>
                <a
                  href="https://med.as.me/harleystreet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#C9A050] border-b border-[#C9A050]/40 pb-1 hover:border-[#C9A050] transition-colors"
                >
                  {slide.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </section>

        {/* Offer block */}
        <section className="border-y border-white/[0.06] bg-gradient-to-b from-[#C9A050]/[0.04] to-transparent">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#C9A050] mb-5">
              The Offer
            </p>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight">£950 flat</h2>
            <p className="mt-3 text-white/60 text-base sm:text-lg">
              Jawline &amp; Jowls Endolaser · Harley Street · Doctor-led
            </p>

            <ol className="mt-10 grid sm:grid-cols-4 gap-4 sm:gap-6 text-left">
              {[
                "Book online & pay deposit",
                "Send us a clear photograph",
                "Attend your in-person review",
                "Not suitable? Deposit refunded",
              ].map((step, i) => (
                <li
                  key={i}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5"
                >
                  <span className="text-[#C9A050] text-xs font-medium tracking-widest">
                    STEP {i + 1}
                  </span>
                  <p className="mt-2 text-white/85 text-sm leading-snug font-light">{step}</p>
                </li>
              ))}
            </ol>

            <a
              href="https://med.as.me/harleystreet"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center justify-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-9 py-4 font-medium text-sm tracking-wide transition-all hover:shadow-lg hover:shadow-[#C9A050]/20"
            >
              Book &amp; pay deposit
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/40">
              <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Harley Street, London</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Doctor-led · CQC partner</span>
              <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Deposit fully refundable</span>
            </div>
            <p className="mt-6 text-[11px] text-white/30 max-w-xl mx-auto">
              We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC-required treatments.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#C9A050] mb-5 text-center">
            Read before booking
          </p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-center">
            Frequently asked
          </h2>
          <div className="mt-10 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <span className="text-white/85 text-base font-light leading-snug">{f.q}</span>
                  <span className="text-[#C9A050] text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-white/55 text-sm leading-relaxed font-light">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/treatments/endolaser/"
              className="text-sm text-[#C9A050] hover:underline inline-flex items-center gap-1"
            >
              View full Endolaser treatment page <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Internal downloads */}
        <section className="border-t border-white/[0.06] bg-white/[0.02]">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm uppercase tracking-[0.25em] text-white/50">Ad creative · 1:1 (1088×1088)</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {downloads.map((d) => (
                <a
                  key={d.file}
                  href={d.url}
                  download={d.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-black border border-white/[0.08] rounded-xl overflow-hidden hover:border-[#C9A050]/40 transition-colors"
                >
                  <img src={d.url} alt={d.label} width={1088} height={1088} loading="lazy" className="w-full aspect-square object-cover" />
                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="text-xs text-white/70">{d.label}</span>
                    <Download className="w-3.5 h-3.5 text-[#C9A050]" />
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-5 text-[11px] text-white/30">
              Right-click → Save As, or tap-and-hold on mobile, to download for Meta Ads Manager.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
