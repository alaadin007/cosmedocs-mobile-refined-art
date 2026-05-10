import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronRight, ChevronLeft, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

/* -------------------------------------------------------------------------- */
/*  HOME 3  —  iOS / Apple.co.uk-style category grid                          */
/*  Vertical stack of categories. Each row scrolls horizontally to the right  */
/*  to reveal sub-treatment cards. Mobile-first, premium, quiet, invisible.   */
/* -------------------------------------------------------------------------- */

type SubCard = {
  title: string;
  tagline: string;
  href: string;
  /** tailwind background classes for the card */
  bg: string;
  /** text colour utility */
  ink?: string;
  badge?: string;
};

type Category = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  cta: { label: string; href: string };
  cards: SubCard[];
};

const categories: Category[] = [
  {
    id: "botox-aesthetic",
    eyebrow: "Botox · Aesthetic",
    title: "Quiet wrinkle care.",
    copy: "Soft, almost-invisible relaxation of the muscles that crease the upper face. Movement preserved. Lines, gone.",
    cta: { label: "All Botox treatments", href: "/treatments/botox/" },
    cards: [
      {
        title: "Three-Area Botox",
        tagline: "Forehead · Frown · Crow's feet",
        href: "/treatments/botox/",
        bg: "bg-gradient-to-br from-zinc-900 to-zinc-700",
        badge: "from £175",
      },
      {
        title: "Forehead Botox",
        tagline: "Smoother brow, kept natural",
        href: "/treatments/botox/",
        bg: "bg-gradient-to-br from-stone-200 to-stone-400",
        ink: "text-zinc-900",
      },
      {
        title: "Frown Lines (11s)",
        tagline: "Soften the inter-brow",
        href: "/treatments/botox/",
        bg: "bg-gradient-to-br from-amber-50 to-amber-200",
        ink: "text-zinc-900",
      },
      {
        title: "Crow's Feet",
        tagline: "Eye-corner refinement",
        href: "/treatments/botox/",
        bg: "bg-gradient-to-br from-neutral-800 to-black",
      },
      {
        title: "Brow Lift",
        tagline: "1–2 mm subtle elevation",
        href: "/treatments/botox/",
        bg: "bg-gradient-to-br from-rose-100 to-rose-300",
        ink: "text-zinc-900",
      },
    ],
  },
  {
    id: "botox-medical",
    eyebrow: "Botox · Medical",
    title: "More than a wrinkle.",
    copy: "Therapeutic Botox for muscle-driven conditions — grinding, jaw ache, migraine, sweating. Doctor-prescribed.",
    cta: { label: "Medical Botox hub", href: "/medical-botox/" },
    cards: [
      {
        title: "Masseter Botox",
        tagline: "Slim jaw · Stop grinding",
        href: "/treatments/masseter-botox/",
        bg: "bg-gradient-to-br from-[#1a1a1a] to-[#3a2f10]",
        badge: "Most asked",
      },
      {
        title: "Bruxism Botox",
        tagline: "Night clenching, treated",
        href: "/treatments/bruxism-botox/",
        bg: "bg-gradient-to-br from-zinc-800 to-zinc-950",
      },
      {
        title: "Migraine Botox",
        tagline: "Chronic migraine protocol",
        href: "/treatments/migraine-botox/",
        bg: "bg-gradient-to-br from-indigo-100 to-indigo-300",
        ink: "text-zinc-900",
      },
      {
        title: "Hyperhidrosis",
        tagline: "Underarm sweat control",
        href: "/treatments/hyperhidrosis/",
        bg: "bg-gradient-to-br from-sky-100 to-sky-300",
        ink: "text-zinc-900",
      },
      {
        title: "Trapezius Botox",
        tagline: "Shoulder slimming · pain",
        href: "/treatments/trap-botox/",
        bg: "bg-gradient-to-br from-stone-700 to-stone-900",
      },
      {
        title: "Calf Slimming",
        tagline: "Athletic-leg refinement",
        href: "/treatments/calf-slimming-botox/",
        bg: "bg-gradient-to-br from-neutral-200 to-neutral-400",
        ink: "text-zinc-900",
      },
    ],
  },
  {
    id: "fillers-anti-ageing",
    eyebrow: "Dermal Fillers · Anti-ageing",
    title: "Volume, returned.",
    copy: "Where the face has lost structure — cheeks, jowls, mid-face — hyaluronic acid restores it. Quietly. Architecturally.",
    cta: { label: "Dermal Fillers overview", href: "/treatments/dermal-fillers/" },
    cards: [
      {
        title: "Cheek Filler",
        tagline: "Mid-face lift, no surgery",
        href: "/treatments/cheek-filler/",
        bg: "bg-gradient-to-br from-amber-100 to-orange-200",
        ink: "text-zinc-900",
      },
      {
        title: "Jowl & Jawline",
        tagline: "Sharpen the lower face",
        href: "/treatments/jawline-filler/",
        bg: "bg-gradient-to-br from-zinc-800 to-zinc-950",
      },
      {
        title: "HA Makeover",
        tagline: "8 / 11-point lifting",
        href: "/treatments/ha-makeover/",
        bg: "bg-gradient-to-br from-[#C9A050] to-[#8a6d2c]",
        badge: "Signature",
      },
      {
        title: "Tear Trough",
        tagline: "Rested under-eyes",
        href: "/treatments/tear-trough-filler/",
        bg: "bg-gradient-to-br from-rose-100 to-rose-300",
        ink: "text-zinc-900",
      },
      {
        title: "Temple Filler",
        tagline: "Restore the upper-third",
        href: "/treatments/temple-filler/",
        bg: "bg-gradient-to-br from-neutral-200 to-neutral-400",
        ink: "text-zinc-900",
      },
      {
        title: "Lip Filler",
        tagline: "Natural, never overdone",
        href: "/treatments/lip-fillers/",
        bg: "bg-gradient-to-br from-pink-200 to-rose-400",
        ink: "text-zinc-900",
      },
    ],
  },
  {
    id: "facial-contouring",
    eyebrow: "Facial Contouring",
    title: "Architecture of the face.",
    copy: "Reshaping — not refilling. The chin, nose, jawline and profile, refined with millimetre precision.",
    cta: { label: "Mini Facelifts hub", href: "/non-surgical-facelift/" },
    cards: [
      {
        title: "Chin Filler",
        tagline: "Profile-balancing dose",
        href: "/treatments/chin-filler/",
        bg: "bg-gradient-to-br from-stone-200 to-stone-400",
        ink: "text-zinc-900",
      },
      {
        title: "Non-Surgical Nose",
        tagline: "Liquid rhinoplasty",
        href: "/treatments/nose-filler/",
        bg: "bg-gradient-to-br from-zinc-900 to-zinc-700",
      },
      {
        title: "Jawline Definition",
        tagline: "Filler & PCL threads",
        href: "/treatments/jawline-filler/",
        bg: "bg-gradient-to-br from-[#1a1a1a] to-[#3a2f10]",
      },
      {
        title: "Endolaser Lift",
        tagline: "Laser fibre tightening",
        href: "/treatments/laser-fibre-lift/",
        bg: "bg-gradient-to-br from-[#C9A050] to-[#8a6d2c]",
        badge: "New",
      },
      {
        title: "PDO Threads",
        tagline: "Cog · Mono lifting",
        href: "/treatments/pdo-threads/",
        bg: "bg-gradient-to-br from-amber-50 to-amber-200",
        ink: "text-zinc-900",
      },
    ],
  },
  {
    id: "flawless-skin",
    eyebrow: "Flawless Skin Concepts",
    title: "Skin, undone.",
    copy: "Resurfacing, regeneration and barrier care — the medical-aesthetic foundation behind a lit-from-within finish.",
    cta: { label: "Skin Rejuvenation hub", href: "/skin-rejuvenation/" },
    cards: [
      {
        title: "Chemical Peels",
        tagline: "Glycolic · TCA · Salicylic",
        href: "/treatments/chemical-peel/",
        bg: "bg-gradient-to-br from-amber-100 to-orange-300",
        ink: "text-zinc-900",
      },
      {
        title: "Microneedling",
        tagline: "Collagen induction therapy",
        href: "/treatments/microneedling/",
        bg: "bg-gradient-to-br from-stone-700 to-stone-900",
      },
      {
        title: "Polynucleotides",
        tagline: "DNA-level repair",
        href: "/treatments/polynucleotide-treatment/",
        bg: "bg-gradient-to-br from-rose-200 to-pink-400",
        ink: "text-zinc-900",
        badge: "Regenerative",
      },
      {
        title: "Profhilo",
        tagline: "Bio-remodelling HA",
        href: "/treatments/profhilo-treatment/",
        bg: "bg-gradient-to-br from-sky-100 to-sky-300",
        ink: "text-zinc-900",
      },
      {
        title: "Exosomes",
        tagline: "Next-gen messengers",
        href: "/treatments/exosomes/",
        bg: "bg-gradient-to-br from-neutral-200 to-neutral-400",
        ink: "text-zinc-900",
      },
      {
        title: "PRP",
        tagline: "Your own plasma",
        href: "/treatments/prp-treatment/",
        bg: "bg-gradient-to-br from-[#C9A050] to-[#7a5e25]",
      },
      {
        title: "HydraFacial",
        tagline: "Cleanse · extract · hydrate",
        href: "/treatments/hydrafacial/",
        bg: "bg-gradient-to-br from-cyan-100 to-cyan-300",
        ink: "text-zinc-900",
      },
    ],
  },
];

/* ---------- Horizontal scroller ----------------------------------------- */

const Row = ({ category, index }: { category: Category; index: number }) => {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.05 * index }}
      className="py-10 sm:py-14"
      aria-labelledby={`${category.id}-title`}
    >
      <div className="px-5 sm:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-6">
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
            <p className="mt-3 text-white/65 text-sm sm:text-base max-w-xl">
              {category.copy}
            </p>
          </div>

          {/* Desktop arrows */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollBy(-1)}
              aria-label={`Scroll ${category.title} left`}
              className="w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 backdrop-blur flex items-center justify-center text-white/80 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label={`Scroll ${category.title} right`}
              className="w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 backdrop-blur flex items-center justify-center text-white/80 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hint for mobile */}
        <p className="sm:hidden text-[11px] text-white/40 mb-3 flex items-center gap-1">
          Swipe <ChevronRight className="w-3 h-3" />
        </p>
      </div>

      {/* Scroller */}
      <div
        ref={scroller}
        className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-5 sm:px-8 max-w-7xl mx-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {category.cards.map((card) => (
          <Link
            key={card.title}
            to={card.href}
            className={`group snap-start shrink-0 w-[78%] sm:w-[300px] md:w-[340px] aspect-[3/4] rounded-[28px] overflow-hidden relative ${card.bg} ${
              card.ink ?? "text-white"
            } transition-transform duration-300 hover:-translate-y-1 active:scale-[0.98] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]`}
          >
            {/* Subtle inner light */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/30 pointer-events-none" />

            {card.badge && (
              <span className="absolute top-5 right-5 text-[10px] uppercase tracking-[0.18em] bg-black/40 backdrop-blur text-white px-3 py-1.5 rounded-full">
                {card.badge}
              </span>
            )}

            <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl leading-tight tracking-tight">
                  {card.title}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    card.ink ? "text-zinc-700" : "text-white/75"
                  }`}
                >
                  {card.tagline}
                </p>
              </div>

              <span
                className={`inline-flex items-center gap-1.5 text-sm font-medium ${
                  card.ink ? "text-zinc-900" : "text-white"
                } group-hover:gap-2.5 transition-all`}
              >
                Discover <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}

        {/* Last "see all" tile */}
        <Link
          to={category.cta.href}
          className="group snap-start shrink-0 w-[60%] sm:w-[220px] md:w-[260px] aspect-[3/4] rounded-[28px] border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur flex flex-col items-center justify-center text-center px-6 transition"
        >
          <div className="w-12 h-12 rounded-full bg-[#C9A050]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <ChevronRight className="w-5 h-5 text-[#C9A050]" />
          </div>
          <p className="text-white text-sm font-medium leading-snug">
            {category.cta.label}
          </p>
          <p className="text-white/50 text-xs mt-1">View all</p>
        </Link>
      </div>
    </motion.section>
  );
};

/* ---------- Page --------------------------------------------------------- */

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
            <Link to="/" className="font-serif text-lg tracking-tight">
              Cosmedocs
            </Link>
            <nav className="hidden sm:flex items-center gap-7 text-sm text-white/70">
              <Link to="/treatments/" className="hover:text-white transition">
                Treatments
              </Link>
              <Link to="/before-after/" className="hover:text-white transition">
                Results
              </Link>
              <Link to="/about-us/" className="hover:text-white transition">
                About
              </Link>
              <Link to="/contact/" className="hover:text-white transition">
                Contact
              </Link>
            </nav>
            <Button
              asChild
              size="sm"
              className="rounded-full bg-white text-black hover:bg-white/90 text-xs font-semibold"
            >
              <Link to="/contact/">Book</Link>
            </Button>
          </div>
        </header>

        {/* Hero */}
        <section className="relative px-5 sm:px-8 pt-14 pb-12 sm:pt-24 sm:pb-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-[11px] uppercase tracking-[0.22em] text-white/70">
              <Sparkles className="w-3 h-3 text-[#C9A050]" /> Doctor-led · London
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight mb-6">
              Our aesthetics
              <br />
              <span className="text-[#C9A050]">is invisible art.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl">
              Bold. Natural. Always your way. Browse our medical-aesthetic
              treatments — quiet, not loud. Transformation that speaks without
              saying a word.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-[#C9A050] hover:bg-[#b78f44] text-black font-semibold h-12 px-7"
              >
                <Link to="/contact/">Book a consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/25 text-white hover:bg-white/10 h-12 px-7 bg-transparent"
              >
                <Link to="/treatments/">Explore all treatments</Link>
              </Button>
            </div>
          </motion.div>

          {/* glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-0 w-[640px] h-[640px] rounded-full blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(closest-side, rgba(201,160,80,0.45), transparent)",
            }}
          />
        </section>

        {/* Category rows */}
        <div className="border-t border-white/5">
          {categories.map((cat, i) => (
            <div key={cat.id} className="border-b border-white/5">
              <Row category={cat} index={i} />
            </div>
          ))}
        </div>

        {/* Closing motto */}
        <section className="px-5 sm:px-8 py-24 max-w-4xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#C9A050] mb-5">
            The Cosmedocs ethos
          </p>
          <h2 className="font-serif text-4xl sm:text-6xl leading-tight tracking-tight">
            Quiet, not loud.
            <br />
            Invisible, not exaggerated.
          </h2>
          <p className="mt-6 text-white/65 text-lg max-w-xl mx-auto">
            Aesthetic medicine should never announce itself. It should simply
            let you look — and feel — more like you.
          </p>
          <Button
            asChild
            className="mt-10 rounded-full bg-white text-black hover:bg-white/90 h-12 px-8 font-semibold"
          >
            <Link to="/contact/">Begin your consultation</Link>
          </Button>
        </section>

        {/* Footer mini */}
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
