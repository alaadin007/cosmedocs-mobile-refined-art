import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronRight, ChevronLeft, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import botox3AreasImg from "@/assets/home3-botox-3areas.jpg";
import botoxLipFlipImg from "@/assets/home3-botox-lip-flip.jpg";
import botoxBrowLiftImg from "@/assets/home3-botox-brow-lift.jpg";
import botoxBunnyImg from "@/assets/home3-botox-bunny-lines.jpg";
import botoxNefertitiImg from "@/assets/home3-botox-nefertiti.jpg";
import botoxGummyImg from "@/assets/home3-botox-gummy-smile.jpg";
import botoxMentalisImg from "@/assets/home3-botox-mentalis.jpg";
import botoxMarionetteImg from "@/assets/home3-botox-marionette.jpg";
import botoxNasalImg from "@/assets/home3-botox-nasal-flaring.jpg";

/* -------------------------------------------------------------------------- */
/*  HOME 3  —  iOS / Apple.co.uk-style category grid                          */
/* -------------------------------------------------------------------------- */

type SubCard = {
  title: string;
  tagline: string;
  href: string;
  bg: string;
  ink?: string;
  badge?: string;
  image?: string;
};

type Category = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  cta: { label: string; href: string };
  cards: SubCard[];
};

/* ---------- Aesthetic Botox — full treatment list ----------------------- */
const botoxAesthetic: SubCard[] = [
  {
    title: "1, 2 or 3 Areas Botox",
    tagline: "Forehead · Frown · Crow's feet — tailored to your face.",
    href: "/treatments/botox/",
    bg: "bg-black",
    image: botox3AreasImg,
    badge: "Signature",
  },
  {
    title: "Brow Lift",
    tagline: "1–2 mm subtle elevation",
    href: "/treatments/botox/",
    bg: "bg-gradient-to-br from-rose-100 to-rose-300",
    ink: "text-zinc-900",
  },
  {
    title: "Bunny Lines",
    tagline: "Nose-bridge crinkles",
    href: "/treatments/botox/",
    bg: "bg-gradient-to-br from-stone-700 to-stone-900",
  },
  {
    title: "Lip Flip",
    tagline: "A whisper of upper-lip lift",
    href: "/treatments/lip-flip/",
    bg: "bg-black",
    image: botoxLipFlipImg,
  },
  {
    title: "Gummy Smile",
    tagline: "Refined upper-lip line",
    href: "/treatments/botox/",
    bg: "bg-black",
    image: botoxGummyImg,
  },
  {
    title: "Mentalis · Chin",
    tagline: "Quiet the chin dimpling",
    href: "/treatments/botox/",
    bg: "bg-black",
    image: botoxMentalisImg,
  },
  {
    title: "Nefertiti Neck Lift",
    tagline: "Sculpt the neck-jaw line",
    href: "/treatments/botox/",
    bg: "bg-black",
    image: botoxNefertitiImg,
  },
  {
    title: "Marionette / DAO",
    tagline: "Lift the corners of the mouth",
    href: "/treatments/botox/",
    bg: "bg-black",
    image: botoxMarionetteImg,
  },
  {
    title: "Brow Lift",
    tagline: "1–2 mm subtle elevation",
    href: "/treatments/botox/",
    bg: "bg-black",
    image: botoxBrowLiftImg,
  },
  {
    title: "Bunny Lines",
    tagline: "Nose-bridge crinkles",
    href: "/treatments/botox/",
    bg: "bg-black",
    image: botoxBunnyImg,
  },
  {
    title: "Smokers Lines",
    tagline: "Soften perioral lip lines",
    href: "/treatments/lip-wrinkles-treatments/",
    bg: "bg-gradient-to-br from-neutral-200 to-neutral-400",
    ink: "text-zinc-900",
  },
  {
    title: "Nasal Flaring",
    tagline: "Calm nostril movement",
    href: "/treatments/nasal-flaring-botox/",
    bg: "bg-black",
    image: botoxNasalImg,
  },
];

const categories: Category[] = [
  {
    id: "botox-aesthetic",
    eyebrow: "Botox · Aesthetic",
    title: "Quiet wrinkle care.",
    copy: "Soft, almost-invisible relaxation of the muscles that crease the upper face. Movement preserved. Lines, gone.",
    cta: { label: "All Botox treatments", href: "/treatments/botox/" },
    cards: botoxAesthetic,
  },
  {
    id: "botox-medical",
    eyebrow: "Botox · Medical",
    title: "More than a wrinkle.",
    copy: "Therapeutic Botox for muscle-driven conditions — grinding, jaw ache, migraine, sweating. Doctor-prescribed.",
    cta: { label: "Medical Botox hub", href: "/medical-botox/" },
    cards: [
      { title: "Masseter Botox", tagline: "Slim jaw · Stop grinding", href: "/treatments/masseter-botox/", bg: "bg-gradient-to-br from-[#1a1a1a] to-[#3a2f10]", badge: "Most asked" },
      { title: "Bruxism Botox", tagline: "Night clenching, treated", href: "/treatments/bruxism-botox/", bg: "bg-gradient-to-br from-zinc-800 to-zinc-950" },
      { title: "Migraine Botox", tagline: "Chronic migraine protocol", href: "/treatments/migraine-botox/", bg: "bg-gradient-to-br from-indigo-100 to-indigo-300", ink: "text-zinc-900" },
      { title: "Hyperhidrosis", tagline: "Underarm sweat control", href: "/treatments/hyperhidrosis/", bg: "bg-gradient-to-br from-sky-100 to-sky-300", ink: "text-zinc-900" },
      { title: "Trapezius Botox", tagline: "Shoulder slimming · pain", href: "/treatments/trap-botox/", bg: "bg-gradient-to-br from-stone-700 to-stone-900" },
      { title: "Calf Slimming", tagline: "Athletic-leg refinement", href: "/treatments/calf-slimming-botox/", bg: "bg-gradient-to-br from-neutral-200 to-neutral-400", ink: "text-zinc-900" },
    ],
  },
  {
    id: "fillers-anti-ageing",
    eyebrow: "Dermal Fillers · Anti-ageing",
    title: "Volume, returned.",
    copy: "Where the face has lost structure — cheeks, jowls, mid-face — hyaluronic acid restores it. Quietly. Architecturally.",
    cta: { label: "Dermal Fillers overview", href: "/treatments/dermal-fillers/" },
    cards: [
      { title: "Cheek Filler", tagline: "Mid-face lift, no surgery", href: "/treatments/cheek-filler/", bg: "bg-gradient-to-br from-amber-100 to-orange-200", ink: "text-zinc-900" },
      { title: "Jowl & Jawline", tagline: "Sharpen the lower face", href: "/treatments/jawline-filler/", bg: "bg-gradient-to-br from-zinc-800 to-zinc-950" },
      { title: "HA Makeover", tagline: "8 / 11-point lifting", href: "/treatments/ha-makeover/", bg: "bg-gradient-to-br from-[#C9A050] to-[#8a6d2c]", badge: "Signature" },
      { title: "Tear Trough", tagline: "Rested under-eyes", href: "/treatments/tear-trough-filler/", bg: "bg-gradient-to-br from-rose-100 to-rose-300", ink: "text-zinc-900" },
      { title: "Temple Filler", tagline: "Restore the upper-third", href: "/treatments/temple-filler/", bg: "bg-gradient-to-br from-neutral-200 to-neutral-400", ink: "text-zinc-900" },
      { title: "Lip Filler", tagline: "Natural, never overdone", href: "/treatments/lip-fillers/", bg: "bg-gradient-to-br from-pink-200 to-rose-400", ink: "text-zinc-900" },
    ],
  },
  {
    id: "facial-contouring",
    eyebrow: "Facial Contouring",
    title: "Architecture of the face.",
    copy: "Reshaping — not refilling. The chin, nose, jawline and profile, refined with millimetre precision.",
    cta: { label: "Mini Facelifts hub", href: "/non-surgical-facelift/" },
    cards: [
      { title: "Chin Filler", tagline: "Profile-balancing dose", href: "/treatments/chin-filler/", bg: "bg-gradient-to-br from-stone-200 to-stone-400", ink: "text-zinc-900" },
      { title: "Non-Surgical Nose", tagline: "Liquid rhinoplasty", href: "/treatments/nose-filler/", bg: "bg-gradient-to-br from-zinc-900 to-zinc-700" },
      { title: "Jawline Definition", tagline: "Filler & PCL threads", href: "/treatments/jawline-filler/", bg: "bg-gradient-to-br from-[#1a1a1a] to-[#3a2f10]" },
      { title: "Endolaser Lift", tagline: "Laser fibre tightening", href: "/treatments/laser-fibre-lift/", bg: "bg-gradient-to-br from-[#C9A050] to-[#8a6d2c]", badge: "New" },
      { title: "PDO Threads", tagline: "Cog · Mono lifting", href: "/treatments/pdo-threads/", bg: "bg-gradient-to-br from-amber-50 to-amber-200", ink: "text-zinc-900" },
    ],
  },
  {
    id: "flawless-skin",
    eyebrow: "Flawless Skin Concepts",
    title: "Skin, undone.",
    copy: "Resurfacing, regeneration and barrier care — the medical-aesthetic foundation behind a lit-from-within finish.",
    cta: { label: "Skin Rejuvenation hub", href: "/skin-rejuvenation/" },
    cards: [
      { title: "Chemical Peels", tagline: "Glycolic · TCA · Salicylic", href: "/treatments/chemical-peel/", bg: "bg-gradient-to-br from-amber-100 to-orange-300", ink: "text-zinc-900" },
      { title: "Microneedling", tagline: "Collagen induction therapy", href: "/treatments/microneedling/", bg: "bg-gradient-to-br from-stone-700 to-stone-900" },
      { title: "Polynucleotides", tagline: "DNA-level repair", href: "/treatments/polynucleotide-treatment/", bg: "bg-gradient-to-br from-rose-200 to-pink-400", ink: "text-zinc-900", badge: "Regenerative" },
      { title: "Profhilo", tagline: "Bio-remodelling HA", href: "/treatments/profhilo-treatment/", bg: "bg-gradient-to-br from-sky-100 to-sky-300", ink: "text-zinc-900" },
      { title: "Exosomes", tagline: "Next-gen messengers", href: "/treatments/exosomes/", bg: "bg-gradient-to-br from-neutral-200 to-neutral-400", ink: "text-zinc-900" },
      { title: "PRP", tagline: "Your own plasma", href: "/treatments/prp-treatment/", bg: "bg-gradient-to-br from-[#C9A050] to-[#7a5e25]" },
      { title: "HydraFacial", tagline: "Cleanse · extract · hydrate", href: "/treatments/hydrafacial/", bg: "bg-gradient-to-br from-cyan-100 to-cyan-300", ink: "text-zinc-900" },
    ],
  },
];

/* ---------- Card primitive --------------------------------------------- */

type CardSize = "feature" | "full" | "split";

const cardSizeClasses: Record<CardSize, string> = {
  // Apple-card feel: taller, more presence
  feature: "w-full h-[78vh] min-h-[560px] max-h-[780px] rounded-[32px]",
  full: "w-full h-[60vh] min-h-[460px] max-h-[640px] rounded-[32px]",
  split: "shrink-0 snap-start w-[82%] sm:w-[46%] lg:w-[44%] h-[60vh] min-h-[460px] max-h-[640px] rounded-[28px]",
};

const TreatmentCard = ({ card, size }: { card: SubCard; size: CardSize }) => {
  const inkLight = !card.ink; // light text on dark bg
  return (
    <Link
      to={card.href}
      className={`group block relative overflow-hidden ${card.bg} ${cardSizeClasses[size]} ${
        card.ink ?? "text-white"
      } transition-transform duration-300 hover:-translate-y-1 active:scale-[0.99] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]`}
    >
      {card.image && (
        <img
          src={card.image}
          alt={card.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {/* Inner light + bottom shade for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/55 pointer-events-none" />

      {card.badge && (
        <span
          className={`absolute top-5 left-5 z-10 text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full backdrop-blur ${
            inkLight ? "bg-white/15 text-white" : "bg-black/70 text-white"
          }`}
        >
          {card.badge}
        </span>
      )}

      <div className="absolute inset-0 p-7 sm:p-9 flex flex-col justify-end">
        <h3 className="font-serif text-3xl sm:text-4xl leading-[1.05] tracking-tight max-w-[88%]">
          {card.title}
        </h3>
        <p className={`mt-2 text-sm sm:text-base ${card.ink ? "text-zinc-700" : "text-white/80"} max-w-[88%]`}>
          {card.tagline}
        </p>

        <span
          className={`mt-5 inline-flex items-center gap-1.5 text-sm font-medium ${
            card.ink ? "text-zinc-900" : "text-white"
          } group-hover:gap-2.5 transition-all`}
        >
          Discover <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
};

/* ---------- Horizontal scroller (used by non-aesthetic rows) ----------- */

const Row = ({ category, index }: { category: Category; index: number }) => {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <motion.section
      id={category.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.05 * index }}
      className="py-12 sm:py-16 scroll-mt-20"
      aria-labelledby={`${category.id}-title`}
    >
      <div className="px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-7">
          <div className="min-w-0">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C9A050] mb-2">
              {category.eyebrow}
            </p>
            <h2
              id={`${category.id}-title`}
              className="font-serif text-3xl sm:text-5xl text-white leading-tight tracking-tight"
            >
              {category.title}
            </h2>
            <p className="mt-3 text-white/65 text-sm sm:text-base max-w-xl">{category.copy}</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button onClick={() => scrollBy(-1)} aria-label="Scroll left" className="w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 backdrop-blur flex items-center justify-center text-white/80 transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollBy(1)} aria-label="Scroll right" className="w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 backdrop-blur flex items-center justify-center text-white/80 transition">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scroller}
        className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-5 sm:px-8 max-w-7xl mx-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {category.cards.map((card) => (
          <div key={card.title} className="shrink-0 snap-start w-[82%] sm:w-[46%] lg:w-[34%]">
            <TreatmentCard card={card} size="split" />
          </div>
        ))}
        <Link
          to={category.cta.href}
          className="group snap-start shrink-0 w-[60%] sm:w-[220px] md:w-[260px] h-[60vh] min-h-[460px] max-h-[640px] rounded-[28px] border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur flex flex-col items-center justify-center text-center px-6 transition"
        >
          <div className="w-12 h-12 rounded-full bg-[#C9A050]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <ChevronRight className="w-5 h-5 text-[#C9A050]" />
          </div>
          <p className="text-white text-sm font-medium leading-snug">{category.cta.label}</p>
          <p className="text-white/50 text-xs mt-1">View all</p>
        </Link>
      </div>
    </motion.section>
  );
};

/* ---------- Aesthetic Botox bento — one horizontal row ----------------- */
/* Pattern of columns (scroll →):
   [Big feature] [2 stacked] [Big] [2 stacked] [Big] [2 stacked] [Big] [2×2 minors] [CTA]
*/

// Small "tile" card used inside stacked / grid columns — shorter height.
const TileCard = ({ card }: { card: SubCard }) => {
  const inkLight = !card.ink;
  return (
    <Link
      to={card.href}
      className={`group relative overflow-hidden block ${card.bg} ${card.ink ?? "text-white"} rounded-[24px] flex-1 min-h-0 transition-transform duration-300 hover:-translate-y-1 active:scale-[0.99] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]`}
    >
      {card.image && (
        <img src={card.image} alt={card.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/55 pointer-events-none" />
      {card.badge && (
        <span className={`absolute top-4 left-4 z-10 text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full backdrop-blur ${inkLight ? "bg-white/15 text-white" : "bg-black/70 text-white"}`}>
          {card.badge}
        </span>
      )}
      <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
        <h3 className="font-serif text-xl sm:text-2xl leading-[1.1] tracking-tight">{card.title}</h3>
        <p className={`mt-1.5 text-xs sm:text-sm ${card.ink ? "text-zinc-700" : "text-white/75"}`}>{card.tagline}</p>
        <span className={`mt-3 inline-flex items-center gap-1 text-xs font-medium ${card.ink ? "text-zinc-900" : "text-white"} group-hover:gap-2 transition-all`}>
          Discover <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
};

// Tall "spotlight" card used as a column on its own.
const SpotlightCard = ({ card }: { card: SubCard }) => {
  const inkLight = !card.ink;
  return (
    <Link
      to={card.href}
      className={`group relative overflow-hidden block ${card.bg} ${card.ink ?? "text-white"} rounded-[28px] h-full transition-transform duration-300 hover:-translate-y-1 active:scale-[0.99] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]`}
    >
      {card.image && (
        <img src={card.image} alt={card.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 pointer-events-none" />
      {card.badge && (
        <span className={`absolute top-5 left-5 z-10 text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full backdrop-blur ${inkLight ? "bg-white/15 text-white" : "bg-black/70 text-white"}`}>
          {card.badge}
        </span>
      )}
      <div className="absolute inset-0 p-7 sm:p-9 flex flex-col justify-end">
        <h3 className="font-serif text-3xl sm:text-4xl leading-[1.05] tracking-tight max-w-[88%]">{card.title}</h3>
        <p className={`mt-2 text-sm sm:text-base ${card.ink ? "text-zinc-700" : "text-white/80"} max-w-[88%]`}>{card.tagline}</p>
        <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-medium ${card.ink ? "text-zinc-900" : "text-white"} group-hover:gap-2.5 transition-all`}>
          Discover <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
};

type Column =
  | { kind: "big"; card: SubCard }
  | { kind: "stack"; cards: SubCard[] }
  | { kind: "grid"; cards: SubCard[] };

const BotoxAestheticSection = ({ category }: { category: Category }) => {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  // Cards by title for explicit composition
  const byTitle = Object.fromEntries(category.cards.map((c) => [c.title, c]));
  const get = (t: string) => byTitle[t];

  const columns: Column[] = [
    { kind: "big",   card: get("1, 2 or 3 Areas Botox") },
    { kind: "big",   card: get("Lip Flip") },
    { kind: "stack", cards: [get("Brow Lift"), get("Bunny Lines")] },
    { kind: "big",   card: get("Nefertiti Neck Lift") },
    { kind: "grid",  cards: [get("Gummy Smile"), get("Mentalis · Chin"), get("Marionette / DAO"), get("Nasal Flaring")] },
  ];

  // Column widths
  const widthBig   = "w-[82vw] sm:w-[380px] md:w-[420px]";
  const widthStack = "w-[64vw] sm:w-[300px] md:w-[330px]";
  const widthGrid  = "w-[88vw] sm:w-[460px] md:w-[520px]";
  const colHeight  = "h-[72vh] min-h-[540px] max-h-[760px]";

  return (
    <motion.section
      id={category.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="py-12 sm:py-16 scroll-mt-20"
      aria-labelledby={`${category.id}-title`}
    >
      <div className="px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-7">
          <div className="min-w-0">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C9A050] mb-2">{category.eyebrow}</p>
            <h2 id={`${category.id}-title`} className="font-serif text-3xl sm:text-5xl text-white leading-tight tracking-tight">
              {category.title}
            </h2>
            <p className="mt-3 text-white/65 text-sm sm:text-base max-w-xl">{category.copy}</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button onClick={() => scrollBy(-1)} aria-label="Scroll left" className="w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 backdrop-blur flex items-center justify-center text-white/80 transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollBy(1)} aria-label="Scroll right" className="w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 backdrop-blur flex items-center justify-center text-white/80 transition">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scroller}
        className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-5 sm:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {columns.map((col, idx) => {
          if (col.kind === "big") {
            return (
              <div key={idx} className={`shrink-0 snap-start ${widthBig} ${colHeight}`}>
                <SpotlightCard card={col.card} />
              </div>
            );
          }
          if (col.kind === "stack") {
            return (
              <div key={idx} className={`shrink-0 snap-start ${widthStack} ${colHeight} flex flex-col gap-4 sm:gap-5`}>
                {col.cards.map((c) => <TileCard key={c.title} card={c} />)}
              </div>
            );
          }
          // 2x2 grid for the 4 minor areas
          return (
            <div key={idx} className={`shrink-0 snap-start ${widthGrid} ${colHeight} grid grid-cols-2 grid-rows-2 gap-4 sm:gap-5`}>
              {col.cards.map((c) => (
                <Link
                  key={c.title}
                  to={c.href}
                  className={`group relative overflow-hidden block ${c.bg} ${c.ink ?? "text-white"} rounded-[22px] transition-transform duration-300 hover:-translate-y-1 active:scale-[0.99] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/55 pointer-events-none" />
                  <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
                    <h3 className="font-serif text-lg sm:text-xl leading-[1.1] tracking-tight">{c.title}</h3>
                    <p className={`mt-1 text-[11px] sm:text-xs ${c.ink ? "text-zinc-700" : "text-white/75"}`}>{c.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          );
        })}

        {/* CTA column at end of row */}
        <Link
          to={category.cta.href}
          className={`group shrink-0 snap-start ${widthStack} ${colHeight} rounded-[28px] border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur flex flex-col items-center justify-center text-center px-6 transition`}
        >
          <div className="w-12 h-12 rounded-full bg-[#C9A050]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <ChevronRight className="w-5 h-5 text-[#C9A050]" />
          </div>
          <p className="text-white text-sm font-medium leading-snug">{category.cta.label}</p>
          <p className="text-white/50 text-xs mt-1">View all</p>
        </Link>
      </div>
    </motion.section>
  );
};

/* ---------- Quick Links ------------------------------------------------- */

const quickLinks = categories.map((c) => ({ id: c.id, label: c.eyebrow.replace(" · ", " ") }));

const handleQuickJump = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
};

/* ---------- Page -------------------------------------------------------- */

const Home3 = () => {
  return (
    <>
      <Helmet>
        <title>Cosmedocs · Aesthetic Medicine, App-Style</title>
        <meta
          name="description"
          content="An iOS-style view of every Cosmedocs treatment. Browse Botox, dermal fillers, contouring and skin concepts as quietly elegant cards — built for thumb-scrolling."
        />
        <link rel="canonical" href="https://www.cosmedocs.com/home3/" data-rh="true" />
        <meta name="theme-color" content="#000000" />
      </Helmet>

      <main className="min-h-screen bg-black text-white selection:bg-[#C9A050]/40 antialiased">
        {/* App-style top bar */}
        <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/60 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
            <Link to="/" className="font-serif text-lg tracking-tight">Cosmedocs</Link>
            <nav className="hidden sm:flex items-center gap-7 text-sm text-white/70">
              <Link to="/treatments/" className="hover:text-white transition">Treatments</Link>
              <Link to="/before-after/" className="hover:text-white transition">Results</Link>
              <Link to="/about-us/" className="hover:text-white transition">About</Link>
              <Link to="/contact/" className="hover:text-white transition">Contact</Link>
            </nav>
            <Button asChild size="sm" className="rounded-full bg-white text-black hover:bg-white/90 text-xs font-semibold">
              <Link to="/contact/">Book</Link>
            </Button>
          </div>
        </header>

        {/* Hero */}
        <section className="relative px-5 sm:px-8 pt-14 pb-10 sm:pt-24 sm:pb-16 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-[11px] uppercase tracking-[0.22em] text-white/70">
              <Sparkles className="w-3 h-3 text-[#C9A050]" /> Doctor-led · London
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight mb-6">
              Our aesthetics
              <br />
              <span className="text-[#C9A050]">is invisible art.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl">
              Bold. Natural. Always your way. Browse our medical-aesthetic treatments — quiet, not loud. Transformation that speaks without saying a word.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-[#C9A050] hover:bg-[#b78f44] text-black font-semibold h-12 px-7">
                <Link to="/contact/">Book a consultation</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/25 text-white hover:bg-white/10 h-12 px-7 bg-transparent">
                <Link to="/treatments/">Explore all treatments</Link>
              </Button>
            </div>
          </motion.div>

          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-0 w-[640px] h-[640px] rounded-full blur-3xl opacity-30"
            style={{ background: "radial-gradient(closest-side, rgba(201,160,80,0.45), transparent)" }}
          />
        </section>

        {/* Quick Links — pill nav that scrolls smoothly to each section */}
        <section aria-label="Quick links" className="px-5 sm:px-8 max-w-7xl mx-auto pb-2">
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-4">Quick Links</h2>
          <div className="flex flex-wrap gap-2.5">
            {quickLinks.map((q) => (
              <a
                key={q.id}
                href={`#${q.id}`}
                onClick={handleQuickJump(q.id)}
                className="px-5 py-2.5 rounded-full border border-white/20 text-white/85 hover:text-white hover:border-white/60 hover:bg-white/5 text-sm transition"
              >
                {q.label}
              </a>
            ))}
            <Link
              to="/contact/"
              className="px-5 py-2.5 rounded-full border border-[#C9A050]/40 text-[#C9A050] hover:bg-[#C9A050]/10 text-sm transition"
            >
              Book consultation
            </Link>
          </div>
        </section>

        {/* Category sections */}
        <div className="border-t border-white/5 mt-8">
          {categories.map((cat, i) => (
            <div key={cat.id} className="border-b border-white/5">
              {cat.id === "botox-aesthetic" ? (
                <BotoxAestheticSection category={cat} />
              ) : (
                <Row category={cat} index={i} />
              )}
            </div>
          ))}
        </div>

        {/* Closing motto */}
        <section className="px-5 sm:px-8 py-24 max-w-4xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#C9A050] mb-5">The Cosmedocs ethos</p>
          <h2 className="font-serif text-4xl sm:text-6xl leading-tight tracking-tight">
            Quiet, not loud.
            <br />
            Invisible, not exaggerated.
          </h2>
          <p className="mt-6 text-white/65 text-lg max-w-xl mx-auto">
            Aesthetic medicine should never announce itself. It should simply let you look — and feel — more like you.
          </p>
          <Button asChild className="mt-10 rounded-full bg-white text-black hover:bg-white/90 h-12 px-8 font-semibold">
            <Link to="/contact/">Begin your consultation</Link>
          </Button>
        </section>

        <footer className="border-t border-white/10 py-10 px-5 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-xs text-white/40">
            <p>© {new Date().getFullYear()} Cosmedocs. Doctor-led aesthetic medicine.</p>
            <div className="flex gap-5">
              <Link to="/about-us/" className="hover:text-white">About</Link>
              <Link to="/contact/" className="hover:text-white">Contact</Link>
              <Link to="/" className="hover:text-white">Classic site</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home3;
