import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar, Award, BookOpen, ShieldCheck, Sparkles } from "lucide-react";
import drAhmedHaq from "@/assets/dr-ahmed-haq.png";

const GOLD = "#C9A050";

/* ─────────────────────────────────────────────
   1. "IS THIS ME?" SELF-IDENTIFICATION STRIP
   Highest-converting element on a treatment page —
   lets visitors self-diagnose in 3 seconds.
───────────────────────────────────────────── */
export const IsThisMeStrip: React.FC = () => {
  const items = [
    {
      title: "Soft jawline",
      body: "Your face used to have a defined edge. Now it blurs into your neck when photographed side-on.",
    },
    {
      title: "Double chin that won't budge",
      body: "Small submental pocket that stays no matter how lean you get — a genetic fat pad, not weight.",
    },
    {
      title: "Early jowl",
      body: "Skin has started to descend past the jawline. Filler alone would over-inflate; you need lift, not volume.",
    },
  ];

  return (
    <section aria-labelledby="is-this-me" className="relative bg-black py-14 md:py-20 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A050] mb-3">Is this me?</p>
          <h2 id="is-this-me" className="text-2xl md:text-4xl font-extralight text-white/90 leading-tight">
            Three faces XL Endolaser was <span className="text-[#C9A050] font-light">built for.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] hover:border-[#C9A050]/40 rounded-2xl p-6 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#C9A050]/15 border border-[#C9A050]/30 flex items-center justify-center text-[10px] text-[#C9A050] font-medium">
                  {i + 1}
                </span>
                <h3 className="text-sm md:text-base font-light text-white/85">{it.title}</h3>
              </div>
              <p className="text-white/50 text-sm font-light leading-relaxed">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   2. SPEAKABLE TOP-ANSWER (40–60 words)
   For Google AI Overviews & ChatGPT extraction.
───────────────────────────────────────────── */
export const SpeakableAnswer: React.FC = () => (
  <section aria-labelledby="top-answer" className="relative bg-gradient-to-b from-black to-[#0a0805] py-12 md:py-16">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
      <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A050] mb-4">In 40 seconds</p>
      <h2 id="top-answer" className="sr-only">What is XL Endolaser?</h2>
      <p data-speakable="true" className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
        <strong className="text-white font-normal">XL Endolaser</strong> is a doctor-led, minimally invasive laser fibre lift for the jawline, jowls, chin, cheeks and brows. A 200µm fibre delivers dual-wavelength energy — <span className="text-[#C9A050]">980nm melts small fat pockets, 1470nm tightens skin</span> — beneath the surface, in one pass, under local anaesthetic. UKCA and CE-marked. Results in 4–6 weeks. Lasts 2–3+ years.
      </p>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   3. DOCTOR AUTHORITY BLOCK (E-E-A-T load-bearing wall)
───────────────────────────────────────────── */
export const DoctorAuthorityBlock: React.FC = () => (
  <section aria-labelledby="doctor-authority" className="relative bg-black py-16 md:py-24 border-y border-[#C9A050]/15 overflow-hidden">
    <div aria-hidden className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#C9A050]/[0.05] blur-3xl pointer-events-none" />
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-center">
        <div className="mx-auto md:mx-0">
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden ring-1 ring-[#C9A050]/30 shadow-[0_30px_80px_-20px_rgba(201,160,80,0.35)]">
            <img
              src={drAhmedHaq}
              alt="Dr Ahmed Haq, Lead Trainer for the Endolaser device at the Harley Street Institute"
              width={512}
              height={512}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A050] mb-3">The clinician</p>
          <h2 id="doctor-authority" className="text-2xl md:text-4xl font-extralight text-white/90 leading-tight">
            Dr Ahmed Haq <span className="text-[#C9A050] font-light">— Lead Trainer, Harley Street Institute</span>
          </h2>
          <p className="mt-4 text-white/60 font-light leading-relaxed text-sm md:text-base max-w-2xl">
            Every XL Endolaser at Cosmedocs is performed by Dr Haq — GMC-registered, the appointed Lead Trainer for this device, and a peer-reviewed author in <em>Aesthetic Surgery Journal</em> and the <em>Journal of the American Academy of Dermatology</em>. He trains the doctors who then treat patients in other UK clinics.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: ShieldCheck, label: "GMC Registered" },
              { icon: Award, label: "Lead Trainer HSI" },
              { icon: BookOpen, label: "PubMed Author" },
              { icon: Sparkles, label: "Since 2007" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2.5">
                <Icon className="w-4 h-4 text-[#C9A050]" />
                <span className="text-[11px] md:text-xs text-white/70 font-light">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/about/dr-ahmed-haq/"
              className="inline-flex items-center gap-2 text-sm text-[#C9A050] hover:text-[#E2BE6E] transition"
            >
              Full bio & publications <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   4. RELATED READING RAIL (Endolift cluster)
───────────────────────────────────────────── */
export const RelatedReadingRail: React.FC = () => {
  const items = [
    {
      to: "/blog/why-fibre-laser-over-endolift/",
      tag: "Editorial",
      title: "Why we chose fibre-laser tech over the original Endolift device",
      meta: "Dr Ahmed Haq · 12 min read",
    },
    {
      to: "/treatments/laser-fibre-lift-vs-endolift/",
      tag: "Comparison",
      title: "Laser Fibre Lift vs Endolift® — head-to-head",
      meta: "Wavelengths · price · sessions",
    },
    {
      to: "/treatments/endolift-alternative/",
      tag: "Hub",
      title: "Endolift® Alternative UK — the 2G category",
      meta: "Category overview",
    },
    {
      to: "/blog/endolift-second-generation/",
      tag: "Science",
      title: "The 2G science — dual wavelength explained",
      meta: "Clinical mechanism",
    },
  ];

  return (
    <section aria-labelledby="related-reading" className="relative bg-black py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A050] mb-2">Go deeper</p>
            <h2 id="related-reading" className="text-2xl md:text-3xl font-extralight text-white/85">
              Related reading
            </h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="group block bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.06] hover:border-[#C9A050]/40 rounded-xl p-5 transition-colors"
            >
              <span className="inline-block text-[9px] tracking-[0.24em] uppercase text-[#C9A050]/80 mb-3">
                {it.tag}
              </span>
              <h3 className="text-sm font-light text-white/85 leading-snug group-hover:text-[#C9A050] transition-colors">
                {it.title}
              </h3>
              <p className="mt-3 text-[11px] text-white/40 font-light">{it.meta}</p>
              <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#C9A050] group-hover:translate-x-1 transition-all mt-4" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   5. STICKY MOBILE CTA BAR (>70% traffic is mobile)
───────────────────────────────────────────── */
export const StickyMobileCTA: React.FC = () => (
  <div
    className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-[#C9A050]/25 bg-black/95 backdrop-blur-md"
    style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
  >
    <div className="grid grid-cols-2 gap-2 p-2.5">
      <a
        href="https://wa.me/message/244RYZTKFLQMC1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-white/[0.05] border border-white/15 text-white text-sm font-medium py-3 rounded-full active:scale-95 transition"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </a>
      <a
        href="https://med.as.me/harleystreet"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#C9A050] text-black text-sm font-semibold py-3 rounded-full active:scale-95 transition"
      >
        <Calendar className="w-4 h-4" />
        Book Consultation
      </a>
    </div>
  </div>
);
