import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Clock, Activity, Syringe, ShieldCheck, Sparkles,
  Sparkle, Stethoscope, ListChecks, LineChart, Images,
  PoundSterling, Star, HelpCircle, CalendarCheck, ArrowRight, ChevronDown,
} from "lucide-react";
import portrait from "@/assets/m2-masseter-portrait.jpg";
import masseterAfter2Treatments from "@/assets/before-after/masseter-series/after-2-treatments.jpg";
import masseterOneYearAfter3rd from "@/assets/before-after/masseter-series/one-year-after-3rd.jpg";

/* ───────────────────────── content (mirrors MasseterBotox.tsx) ───────────────────────── */

const GLANCE = [
  { icon: Clock, label: "Duration", value: "15–20 min" },
  { icon: Activity, label: "Recovery", value: "No downtime" },
  { icon: Syringe, label: "Product", value: "Botulinum toxin" },
  { icon: ShieldCheck, label: "Lasts", value: "4–6 months" },
];

const WHY = [
  { t: "Jaw slimming", d: "Softens a square or wide lower face by reducing muscle-driven width at the jaw angle. A more oval, balanced contour — no bone work, no surgery." },
  { t: "Bruxism & TMJ relief", d: "Lowers excessive bite force that drives night-time clenching, jaw fatigue, tension headaches and TMJ strain." },
  { t: "Tooth & enamel protection", d: "Reduced bite force protects fillings, veneers and natural enamel from chip-and-crack cycles caused by chronic grinding." },
  { t: "Doctor-led dosing", d: "Dose and placement matched to muscle size, asymmetry and functional strength — not a flat number from a price list." },
];

const BRUXISM = [
  "Morning jaw ache, tension headaches, temple pressure.",
  "Tooth chipping, enamel wear, cracked fillings or veneers.",
  "Partner-reported night-time grinding or clenching.",
  "Square, bulky lower face from over-developed masseter.",
];

const STEPS = [
  { n: "01", t: "Doctor assessment", d: "Your doctor palpates the masseter while you clench to map the strongest muscle belly, judge density and check for right-left imbalance." },
  { n: "02", t: "Dose planning", d: "Dose is set by muscle volume, gender, bite force, symptoms and whether the aim is slimming, bruxism relief or both — never a flat unit count." },
  { n: "03", t: "Precise placement", d: "Small, deep injections into the safe lower body of the masseter, avoiding superficial smile muscles and the parotid region. 15–20 minutes." },
  { n: "04", t: "Settle & review", d: "Back to normal life immediately. Tension eases in 1–2 weeks. Slimming appears by weeks 3–12. Review at 4–6 weeks." },
];

const RESULTS = [
  { when: "Week 1–2", what: "Jaw tension, clenching and morning headaches begin to ease." },
  { when: "Week 3–4", what: "Early contour change — first signs of softer jaw width." },
  { when: "Week 6–12", what: "Clearer slimming as the muscle reduces in bulk." },
  { when: "4–6 months", what: "Top-up cycle. Cumulative atrophy means many patients move to two sessions per year." },
];

const PRICES = [
  { tier: "Female", price: "£350" },
  { tier: "Male", price: "£400" },
  { tier: "Complex cases", price: "from £450" },
];

const REVIEWS = [
  { n: "Amara T.", q: "My jaw was so square from grinding my teeth. After one session my face looked slimmer and the headaches stopped. Genuinely life-changing." },
  { n: "Priya R.", q: "Stopped waking up with a sore jaw within two weeks. The slimming was a bonus I didn't expect." },
  { n: "James M.", q: "Doctor-led, calm, no pressure. They explained why dosing for me had to be higher and it worked." },
];

const FAQS = [
  { q: "How long does masseter Botox last?", a: "Usually 4–6 months. In larger masseters the first year may need closer maintenance. Once cumulative atrophy is achieved, many patients move to two sessions a year." },
  { q: "Slimming or grinding — which is it for?", a: "Both. Cosmetically it reduces bulky masseter for a softer lower face. Medically it reduces bite force, clenching, TMJ strain and bruxism-related headaches." },
  { q: "How much does it cost?", a: "£350 for female patients, £400 for male patients. Male or very strong masseters often need higher dosing because the muscle is denser." },
  { q: "Will it affect chewing or my smile?", a: "The aim is partial relaxation, not paralysis. Some temporary chewing fatigue with tough foods is possible for a few days; normal eating, speech and expression are preserved." },
  { q: "When will I see slimming?", a: "Tension eases in 7–14 days. Contour change by weeks 3–4, clearer reduction by weeks 6–12, especially after repeat cycles." },
  { q: "What are the side effects?", a: "Mild tenderness, small bruises, temporary chewing fatigue. Uncommon: smile asymmetry, under-treatment, paradoxical bulging — minimised by doctor-led anatomical dosing." },
];

/* ───────────────────────── node config ───────────────────────── */

type SectionId =
  | "overview" | "why" | "bruxism" | "procedure"
  | "results" | "gallery" | "pricing" | "reviews" | "faq";

const NODES: { id: SectionId; label: string; icon: any }[] = [
  { id: "overview",  label: "Overview",   icon: Sparkle },
  { id: "why",       label: "Why",        icon: Sparkles },
  { id: "bruxism",   label: "Bruxism",    icon: Stethoscope },
  { id: "procedure", label: "Procedure",  icon: ListChecks },
  { id: "results",   label: "Results",    icon: LineChart },
  { id: "gallery",   label: "Before/After", icon: Images },
  { id: "pricing",   label: "Pricing",    icon: PoundSterling },
  { id: "reviews",   label: "Reviews",    icon: Star },
  { id: "faq",       label: "FAQ",        icon: HelpCircle },
];

/* Place nodes around a circle (degrees). 9 evenly spaced. */
const RING = NODES.map((n, i) => ({
  ...n,
  angle: -90 + (360 / NODES.length) * i, // start at top
}));

/* ───────────────────────── page ───────────────────────── */

const BOOK_URL = "https://med.as.me/harleystreet";

const SECTION_IDS: SectionId[] = NODES.map((n) => n.id);

export default function MasseterM2() {

  const [active, setActive] = useState<SectionId | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const on = () => setIsDesktop(mq.matches);
    on(); mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  useEffect(() => {
    document.body.style.background = "#0a0a0a";
    return () => { document.body.style.background = ""; };
  }, []);

  return (
    <>
      <Helmet>
        <title>Masseter · CosmeDocs M2</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/masseter-botox/" data-rh="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1" />
      </Helmet>

      {isDesktop && <DesktopNotice />}

      <main
        className="fixed inset-0 overflow-hidden text-white"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 35%, rgba(201,160,80,0.18) 0%, rgba(10,10,10,0) 55%), #0a0a0a",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif",
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 text-[11px] tracking-[0.18em] uppercase text-white/50">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A050] animate-pulse" />
            Cosmedocs
          </span>
          <span>Masseter · M2</span>
        </div>

        {/* Title */}
        <div className="px-6 pt-3 pb-1 text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A050]/80">
            Doctor-led · Harley Street
          </p>
          <h1 className="font-light text-[26px] leading-tight mt-1">
            Masseter <span className="text-[#C9A050]">Botox</span>
          </h1>
        </div>

        {/* Compass */}
        <Compass onPick={setActive} />

        {/* Sticky CTA */}
        <div
          className="absolute left-0 right-0 px-5"
          style={{ bottom: `calc(env(safe-area-inset-bottom) + 14px)` }}
        >
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-full bg-[#C9A050] text-black font-medium py-3.5 shadow-[0_10px_30px_-10px_rgba(201,160,80,0.6)] active:scale-[0.98] transition"
          >
            <CalendarCheck className="w-4 h-4" />
            Book consultation
          </a>
          <p className="text-center text-[10px] text-white/40 mt-2">
            Our aesthetics is invisible art · Tap a node to explore
          </p>
        </div>
        {/* Sheets */}
        <AnimatePresence>
          {active && (
            <Sheet
              id={active}
              onClose={() => setActive(null)}
              onNavigate={(dir) => {
                const i = SECTION_IDS.indexOf(active);
                const next = dir === "next"
                  ? SECTION_IDS[(i + 1) % SECTION_IDS.length]
                  : SECTION_IDS[(i - 1 + SECTION_IDS.length) % SECTION_IDS.length];
                setActive(next);
              }}
            />
          )}
        </AnimatePresence>
      </main>
    </>
  );
}



/* ───────────────────────── Compass ───────────────────────── */

function Compass({ onPick }: { onPick: (id: SectionId) => void }) {
  return (
    <div className="relative mx-auto mt-1" style={{ width: "min(86vw, 380px)", aspectRatio: "1 / 1" }}>

      {/* portrait */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden border border-[#C9A050]/40"
        style={{
          width: "52%",
          height: "52%",
          boxShadow: "0 0 60px rgba(201,160,80,0.25), inset 0 0 30px rgba(0,0,0,0.6)",
        }}
      >
        <img
          src={portrait}
          alt="Refined jawline portrait"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </motion.div>

      {/* gold orbit ring */}
      <div
        className="absolute inset-[10%] rounded-full border border-[#C9A050]/20 pointer-events-none"
        aria-hidden
      />

      {/* nodes */}
      {RING.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180;
        const r = 46; // % from centre
        const x = 50 + r * Math.cos(rad);
        const y = 50 + r * Math.sin(rad);
        const Icon = n.icon;
        return (
          <motion.button
            key={n.id}
            onClick={() => onPick(n.id)}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.05, duration: 0.4, ease: "easeOut" }}
            whileTap={{ scale: 0.9 }}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span className="flex flex-col items-center gap-1">
              <span
                className="w-12 h-12 rounded-full grid place-items-center bg-black/70 backdrop-blur border border-[#C9A050]/50"
                style={{ boxShadow: "0 4px 18px rgba(0,0,0,0.5)" }}
              >
                <Icon className="w-[18px] h-[18px] text-[#C9A050]" />
              </span>
              <span className="text-[9.5px] uppercase tracking-[0.14em] text-white/65">
                {n.label}
              </span>
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}

/* ───────────────────────── Sheet ───────────────────────── */

function Sheet({ id, onClose }: { id: SectionId; onClose: () => void }) {
  const node = NODES.find((n) => n.id === id)!;
  const Icon = node.icon;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40"
      />
      <motion.section
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 320 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.4 }}
        onDragEnd={(_, info) => { if (info.offset.y > 120) onClose(); }}
        className="absolute left-0 right-0 bottom-0 z-50 rounded-t-[28px] bg-[#111]/95 backdrop-blur-xl border-t border-[#C9A050]/25 overflow-hidden flex flex-col"
        style={{
          height: "88vh",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <div className="pt-2 pb-1 grid place-items-center">
          <span className="w-10 h-1 rounded-full bg-white/20" />
        </div>
        <header className="flex items-center justify-between px-5 pt-2 pb-3 border-b border-white/5">
          <span className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-full grid place-items-center bg-[#C9A050]/15 border border-[#C9A050]/40">
              <Icon className="w-4 h-4 text-[#C9A050]" />
            </span>
            <span>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/40">Section</p>
              <p className="text-[15px] font-medium">{node.label}</p>
            </span>
          </span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-full grid place-items-center bg-white/5 hover:bg-white/10 active:scale-95"
          >
            <X className="w-4 h-4" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-5 text-white/85 text-[14.5px] leading-relaxed">
          <SheetBody id={id} />
          <div className="h-20" />
        </div>

        <div className="px-5 pt-3 pb-3 border-t border-white/5 bg-[#0d0d0d]">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-full bg-[#C9A050] text-black font-medium py-3 active:scale-[0.98] transition"
          >
            Book consultation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.section>
    </>
  );
}

function SheetBody({ id }: { id: SectionId }) {
  switch (id) {
    case "overview":
      return (
        <div className="space-y-4">
          <p>
            Doctor-led masseter Botox at our Harley Street clinic — for a softer
            lower face, less night-time grinding and a quieter jaw. Bold, natural,
            always your way.
          </p>
          <div className="grid grid-cols-2 gap-2.5 pt-2">
            {GLANCE.map(({ icon: I, label, value }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <I className="w-4 h-4 text-[#C9A050] mb-2" />
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/40">{label}</p>
                <p className="text-[14px] text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "why":
      return (
        <ul className="space-y-3">
          {WHY.map((w) => (
            <li key={w.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[#C9A050] text-[13px] font-medium mb-1">{w.t}</p>
              <p>{w.d}</p>
            </li>
          ))}
        </ul>
      );
    case "bruxism":
      return (
        <div className="space-y-4">
          <p>
            Bruxism and TMJ tension are medical, not cosmetic. We treat the same
            muscle, but the goal shifts: quieten night-time clenching, ease morning
            headaches, protect enamel and veneers from chip cycles.
          </p>
          <p className="text-[#C9A050] text-[12px] uppercase tracking-[0.18em] pt-1">
            Signs to discuss
          </p>
          <ul className="space-y-2">
            {BRUXISM.map((b) => (
              <li key={b} className="flex gap-2 items-start">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A050] flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "procedure":
      return (
        <ol className="space-y-3">
          {STEPS.map((s) => (
            <li key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex gap-3">
              <span className="text-[#C9A050] text-[11px] font-medium tracking-widest pt-0.5">{s.n}</span>
              <span>
                <p className="text-white text-[14px] font-medium mb-1">{s.t}</p>
                <p>{s.d}</p>
              </span>
            </li>
          ))}
        </ol>
      );
    case "results":
      return (
        <ul className="space-y-3">
          {RESULTS.map((r) => (
            <li key={r.when} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#C9A050] mb-1">{r.when}</p>
              <p>{r.what}</p>
            </li>
          ))}
        </ul>
      );
    case "gallery":
      return (
        <div className="space-y-4">
          <p>Real Cosmedocs patient before-and-after photographs.</p>
          <div className="grid grid-cols-2 gap-2.5">
            <img src={masseterAfter2Treatments} alt="Masseter Botox after two treatments" loading="lazy" className="rounded-2xl aspect-[4/5] object-cover w-full" />
            <img src={masseterOneYearAfter3rd} alt="One year after third masseter Botox session" loading="lazy" className="rounded-2xl aspect-[4/5] object-cover w-full" />
          </div>
          <a
            href="/before-after/botox/masseter/"
            className="flex items-center justify-center gap-2 w-full rounded-2xl border border-[#C9A050]/40 text-[#C9A050] py-3 text-[13px] font-medium active:scale-[0.98]"
          >
            View full gallery <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      );
    case "pricing":
      return (
        <div className="space-y-3">
          {PRICES.map((p) => (
            <div key={p.tier} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
              <span className="text-white/70">{p.tier}</span>
              <span className="text-[#C9A050] text-[16px] font-medium">{p.price}</span>
            </div>
          ))}
          <p className="text-[12px] text-white/40 pt-1">Includes consultation & follow-up. Final dose is doctor-judged at assessment.</p>
        </div>
      );
    case "reviews":
      return (
        <ul className="space-y-3">
          {REVIEWS.map((r) => (
            <li key={r.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C9A050] text-[#C9A050]" />
                ))}
              </div>
              <p className="italic text-white/80">"{r.q}"</p>
              <p className="text-[12px] text-[#C9A050] mt-2">{r.n}</p>
            </li>
          ))}
        </ul>
      );
    case "faq":
      return (
        <ul className="space-y-2.5">
          {FAQS.map((f) => (
            <li key={f.q}>
              <details className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-white text-[14px] font-medium pr-3">{f.q}</span>
                  <ChevronDown className="w-4 h-4 text-[#C9A050] transition group-open:rotate-180 flex-shrink-0" />
                </summary>
                <p className="mt-2.5 text-white/75">{f.a}</p>
              </details>
            </li>
          ))}
        </ul>
      );
  }
}

/* ───────────────────────── Desktop notice ───────────────────────── */

function DesktopNotice() {
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-[#0a0a0a] text-white text-center px-8">
      <div className="max-w-sm">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A050] mb-3">Cosmedocs · M2 Staging</p>
        <h2 className="text-2xl font-light mb-3">Open this on your phone</h2>
        <p className="text-white/60 text-[14px] leading-relaxed">
          /m2 is a mobile-only experience — a one-screen app-style preview of the
          Masseter Botox page. Resize your browser below 900px or open on a phone.
        </p>
      </div>
    </div>
  );
}
