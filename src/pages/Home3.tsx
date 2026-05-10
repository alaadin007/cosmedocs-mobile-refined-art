import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import {
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
  Sparkles,
  MapPin,
  CalendarCheck,
  MessageCircle,
  ImageIcon,
  Phone,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* Featured AI hero images (premium-generated) */
import heroBotoxAesthetic from "@/assets/home3-feature-botox-aesthetic.jpg";
import heroBotoxMedical from "@/assets/home3-feature-botox-medical.jpg";
import heroFillers from "@/assets/home3-feature-fillers.jpg";
import heroContouring from "@/assets/home3-feature-contouring.jpg";
import heroSkin from "@/assets/home3-feature-skin.jpg";
import heroGallery from "@/assets/home3-feature-gallery.jpg";

/* Real clinical & treatment imagery */
import imgForeheadBA from "@/assets/forehead-botox-results.jpg";
import imgFrownBA from "@/assets/frown-lines-before-after-1.jpg";
import imgCrowsFeet from "@/assets/crows-feet-filler-thumb.jpg";
import imgBunny from "@/assets/bunny-lines-before-after-1.jpg";
import imgMasseter from "@/assets/masseter-botox-bruxism.jpg";
import imgGrinding from "@/assets/botox-for-teeth-grinding.png";
import imgCalf from "@/assets/calf-hero-gold.jpg";
import imgCheek from "@/assets/2ml-cheek-fillers-before-after.png";
import imgJawline from "@/assets/jawline-filler-2ml-before-after.png";
import imgHA from "@/assets/8-point-facelift-before-after-1.jpg";
import imgTearTrough from "@/assets/tear-trough-gallery-3.png";
import imgTemple from "@/assets/before-after-jawline-fillers.jpg";
import imgLip from "@/assets/lip-enhancement-treatment.jpg";
import imgChin from "@/assets/blog-chin-filler-hero.jpg";
import imgNose from "@/assets/arabic-ba-nose-profile.jpg";
import imgPDO from "@/assets/pdo-thread-lift-before-after.jpg";
import imgProfhilo from "@/assets/profhilo-face-before-after.jpg";
import imgPolynuc from "@/assets/before-after-polynucleotide-face.jpg";
import imgSmile from "@/assets/smile-lines-before-after-1.png";

/* Gallery row */
import gJawline from "@/assets/jawline-gallery-1.jpg";
import gTear from "@/assets/tear-trough-gallery-1.jpeg";
import gCheek2 from "@/assets/1ml-cheek-fillers-before-after.png";
import gFullFace from "@/assets/8-point-facelift-before-after-2.jpg";
import gNose from "@/assets/arabic-ba-nose-progression.jpg";
import gLip from "@/assets/blog-lip-filler-ba-natural.png";
import gPolynuc from "@/assets/before-after-polynucleotide-eyes.jpg";
import gProfhilo from "@/assets/profhilo-cheek-before-after.jpg";

/* -------------------------------------------------------------------------- */
/*  HOME 3  —  Apple.co.uk-inspired: featured + peek cards mixed sizes        */
/* -------------------------------------------------------------------------- */

type Size = "feature" | "tall" | "wide" | "square";

type Card = {
  title: string;
  tagline: string;
  href: string;
  img: string;
  size?: Size;
  badge?: string;
  /** force light or dark text */
  ink?: "light" | "dark";
  /** overlay strength 0–100 */
  overlay?: number;
};

type Category = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  cta: { label: string; href: string };
  cards: Card[];
};

/* ----- Category data ----- */
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
        img: heroBotoxAesthetic,
        size: "feature",
        badge: "From £175",
      },
      {
        title: "Forehead",
        tagline: "Smoother brow, kept natural",
        href: "/treatments/botox/",
        img: imgForeheadBA,
        size: "tall",
      },
      {
        title: "Frown (11s)",
        tagline: "Soften the inter-brow",
        href: "/treatments/botox/",
        img: imgFrownBA,
        size: "tall",
      },
      {
        title: "Crow's Feet",
        tagline: "Eye-corner refinement",
        href: "/treatments/botox/",
        img: imgCrowsFeet,
        size: "tall",
      },
      {
        title: "Bunny Lines",
        tagline: "Nose-bridge crinkles",
        href: "/treatments/botox/",
        img: imgBunny,
        size: "tall",
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
        tagline: "Slim the jaw · stop the grind",
        href: "/treatments/masseter-botox/",
        img: heroBotoxMedical,
        size: "feature",
        badge: "Most asked",
      },
      {
        title: "Bruxism",
        tagline: "Night clenching, treated",
        href: "/treatments/bruxism-botox/",
        img: imgGrinding,
        size: "tall",
      },
      {
        title: "Calf Slimming",
        tagline: "Athletic-leg refinement",
        href: "/treatments/calf-slimming-botox/",
        img: imgCalf,
        size: "tall",
        badge: "New",
      },
      {
        title: "Migraine",
        tagline: "Chronic protocol",
        href: "/treatments/migraine-botox/",
        img: imgMasseter,
        size: "tall",
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
        title: "HA Makeover",
        tagline: "8 / 11-point lifting · the signature",
        href: "/treatments/ha-makeover/",
        img: heroFillers,
        size: "feature",
        badge: "Signature",
      },
      {
        title: "Cheek Filler",
        tagline: "Mid-face lift, no surgery",
        href: "/treatments/cheek-filler/",
        img: imgCheek,
        size: "tall",
      },
      {
        title: "Jowl & Jawline",
        tagline: "Sharpen the lower face",
        href: "/treatments/jawline-filler/",
        img: imgJawline,
        size: "tall",
      },
      {
        title: "Tear Trough",
        tagline: "Rested under-eyes",
        href: "/treatments/tear-trough-filler/",
        img: imgTearTrough,
        size: "tall",
      },
      {
        title: "Temple Filler",
        tagline: "Restore the upper-third",
        href: "/treatments/temple-filler/",
        img: imgTemple,
        size: "tall",
      },
      {
        title: "Lip Filler",
        tagline: "Natural, never overdone",
        href: "/treatments/lip-fillers/",
        img: imgLip,
        size: "tall",
      },
      {
        title: "Smile Lines",
        tagline: "Soften the nasolabials",
        href: "/treatments/dermal-fillers/",
        img: imgSmile,
        size: "tall",
      },
      {
        title: "8-Point Facelift",
        tagline: "Architectural lifting",
        href: "/treatments/ha-makeover/",
        img: imgHA,
        size: "tall",
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
        title: "Profile Balancing",
        tagline: "Chin · nose · jawline, in concert",
        href: "/non-surgical-facelift/",
        img: heroContouring,
        size: "feature",
        badge: "Profiloplasty",
      },
      {
        title: "Chin Filler",
        tagline: "Profile-defining dose",
        href: "/treatments/chin-filler/",
        img: imgChin,
        size: "tall",
      },
      {
        title: "Non-Surgical Nose",
        tagline: "Liquid rhinoplasty",
        href: "/treatments/nose-filler/",
        img: imgNose,
        size: "tall",
      },
      {
        title: "Jawline Definition",
        tagline: "Filler & PCL threads",
        href: "/treatments/jawline-filler/",
        img: imgJawline,
        size: "tall",
      },
      {
        title: "PDO Threads",
        tagline: "Cog · mono lifting",
        href: "/treatments/pdo-threads/",
        img: imgPDO,
        size: "tall",
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
        title: "Glass-Skin Protocol",
        tagline: "Peels · microneedling · regeneration",
        href: "/skin-rejuvenation/",
        img: heroSkin,
        size: "feature",
        badge: "Lit from within",
        ink: "dark",
      },
      {
        title: "Chemical Peels",
        tagline: "Glycolic · TCA · Salicylic",
        href: "/treatments/chemical-peel/",
        img: imgSmile,
        size: "tall",
      },
      {
        title: "Microneedling",
        tagline: "Collagen induction",
        href: "/treatments/microneedling/",
        img: imgPolynuc,
        size: "tall",
      },
      {
        title: "Polynucleotides",
        tagline: "DNA-level repair",
        href: "/treatments/polynucleotide-treatment/",
        img: imgPolynuc,
        size: "tall",
        badge: "Regenerative",
      },
      {
        title: "Profhilo",
        tagline: "Bio-remodelling HA",
        href: "/treatments/profhilo-treatment/",
        img: imgProfhilo,
        size: "tall",
      },
    ],
  },
];

/* ---------- Featured + peeks row ---------------------------------------- */

const Row = ({ category, index }: { category: Category; index: number }) => {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: 0.04 * index }}
      className="py-10 sm:py-16"
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
              className="font-serif text-3xl sm:text-5xl text-white leading-[1.05] tracking-tight"
            >
              {category.title}
            </h2>
            <p className="mt-3 text-white/65 text-sm sm:text-base max-w-xl">
              {category.copy}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollBy(-1)}
              aria-label={`Scroll ${category.title} left`}
              className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/15 backdrop-blur flex items-center justify-center text-white/80 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label={`Scroll ${category.title} right`}
              className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/15 backdrop-blur flex items-center justify-center text-white/80 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroller */}
      <div
        ref={scroller}
        className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-5 sm:px-8 max-w-7xl mx-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {category.cards.map((card) => {
          const isFeature = card.size === "feature";
          // Feature is wider + taller; tall cards are narrower so they "peek"
          const sizeCls = isFeature
            ? "w-[88%] sm:w-[560px] md:w-[640px] aspect-[4/5]"
            : "w-[58%] sm:w-[260px] md:w-[300px] aspect-[3/4]";
          const inkLight = card.ink !== "dark";
          return (
            <Link
              key={card.title}
              to={card.href}
              className={`group snap-start shrink-0 ${sizeCls} rounded-[28px] overflow-hidden relative bg-zinc-900 transition-transform duration-300 hover:-translate-y-1 active:scale-[0.98] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]`}
            >
              <img
                src={card.img}
                alt={card.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover:scale-[1.06] transition-transform duration-700"
              />
              {/* Gradient for legibility */}
              <div
                className={`absolute inset-0 pointer-events-none ${
                  inkLight
                    ? "bg-gradient-to-t from-black/85 via-black/25 to-black/10"
                    : "bg-gradient-to-t from-white/85 via-white/20 to-white/0"
                }`}
              />

              {card.badge && (
                <span
                  className={`absolute top-5 right-5 text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full backdrop-blur ${
                    inkLight
                      ? "bg-black/45 text-white border border-white/15"
                      : "bg-white/70 text-zinc-900 border border-black/10"
                  }`}
                >
                  {card.badge}
                </span>
              )}

              <div
                className={`absolute inset-0 ${
                  isFeature ? "p-7 sm:p-9" : "p-5 sm:p-6"
                } flex flex-col justify-end`}
              >
                <h3
                  className={`font-serif ${
                    isFeature
                      ? "text-3xl sm:text-5xl"
                      : "text-xl sm:text-2xl"
                  } leading-tight tracking-tight ${
                    inkLight ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`mt-2 ${
                    isFeature ? "text-base sm:text-lg" : "text-sm"
                  } ${inkLight ? "text-white/80" : "text-zinc-700"}`}
                >
                  {card.tagline}
                </p>

                <span
                  className={`mt-4 inline-flex items-center gap-1.5 text-sm font-medium w-fit ${
                    inkLight ? "text-white" : "text-zinc-900"
                  } group-hover:gap-2.5 transition-all`}
                >
                  Discover <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          );
        })}

        {/* See-all tile */}
        <Link
          to={category.cta.href}
          className="group snap-start shrink-0 w-[55%] sm:w-[200px] md:w-[230px] aspect-[3/4] rounded-[28px] border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] backdrop-blur flex flex-col items-center justify-center text-center px-6 transition"
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

/* ---------- Before & After gallery row ----------------------------------- */

const galleryItems = [
  { title: "Jawline Definition", img: gJawline, href: "/before-after/jawline-filler/" },
  { title: "Tear Trough", img: gTear, href: "/before-after/tear-trough-filler/" },
  { title: "Cheek Restoration", img: gCheek2, href: "/before-after/cheek-filler/" },
  { title: "Full-Face Makeover", img: gFullFace, href: "/before-after/full-face-makeover/" },
  { title: "Non-Surgical Nose", img: gNose, href: "/before-after/nose-filler/" },
  { title: "Lip Filler", img: gLip, href: "/before-after/lip-filler/" },
  { title: "Polynucleotides", img: gPolynuc, href: "/before-after/polynucleotides/" },
  { title: "Profhilo", img: gProfhilo, href: "/before-after/skin-rejuvenation/" },
];

const GalleryRow = () => {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section className="py-10 sm:py-16" aria-labelledby="ba-title">
      <div className="px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-7">
          <div>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C9A050] mb-2">
              Before & After
            </p>
            <h2 id="ba-title" className="font-serif text-3xl sm:text-5xl text-white leading-[1.05] tracking-tight">
              The work, on record.
            </h2>
            <p className="mt-3 text-white/65 text-sm sm:text-base max-w-xl">
              Real patients. Real results. Browse our verified galleries by treatment.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button onClick={() => scrollBy(-1)} aria-label="Scroll gallery left" className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/15 backdrop-blur flex items-center justify-center text-white/80 transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollBy(1)} aria-label="Scroll gallery right" className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/15 backdrop-blur flex items-center justify-center text-white/80 transition">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scroller}
        className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-5 sm:px-8 max-w-7xl mx-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* Featured */}
        <Link
          to="/before-after/"
          className="group snap-start shrink-0 w-[88%] sm:w-[560px] md:w-[640px] aspect-[4/5] rounded-[28px] overflow-hidden relative bg-zinc-900 transition-transform duration-300 hover:-translate-y-1 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
        >
          <img src={heroGallery} alt="Before and after transformations" loading="lazy" className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover:scale-[1.06] transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
          <span className="absolute top-5 right-5 text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full backdrop-blur bg-[#C9A050] text-black">
            View full gallery
          </span>
          <div className="absolute inset-0 p-7 sm:p-9 flex flex-col justify-end">
            <h3 className="font-serif text-3xl sm:text-5xl leading-tight tracking-tight text-white">
              Quiet, undeniable proof.
            </h3>
            <p className="mt-2 text-white/80 text-base sm:text-lg max-w-md">
              Every result documented under the same studio light. No filters. No retouching.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white">
              Open the gallery <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </Link>

        {galleryItems.map((g) => (
          <Link
            key={g.title}
            to={g.href}
            className="group snap-start shrink-0 w-[58%] sm:w-[260px] md:w-[300px] aspect-[3/4] rounded-[28px] overflow-hidden relative bg-zinc-900 transition-transform duration-300 hover:-translate-y-1 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
          >
            <img src={g.img} alt={`${g.title} before and after`} loading="lazy" className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover:scale-[1.06] transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#C9A050] mb-1">Before · After</p>
              <h3 className="font-serif text-xl text-white leading-tight">{g.title}</h3>
              <span className="mt-2 inline-flex items-center gap-1 text-xs text-white/80">
                View gallery <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

/* ---------- Page --------------------------------------------------------- */

const quickLinks = [
  { label: "Book consultation", icon: CalendarCheck, href: "/contact/" },
  { label: "WhatsApp", icon: MessageCircle, href: "https://wa.me/442036334537" },
  { label: "Find us", icon: MapPin, href: "/locations/" },
  { label: "Galleries", icon: ImageIcon, href: "/before-after/" },
  { label: "Call clinic", icon: Phone, href: "tel:+442036334537" },
  { label: "Meet the doctors", icon: Stethoscope, href: "/about-us/" },
];

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

        {/* Quick Links — Apple style pills */}
        <section aria-label="Quick links" className="px-5 sm:px-8 max-w-7xl mx-auto pb-4">
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/45 mb-4">Quick Links</p>
          <div className="flex flex-wrap gap-2.5">
            {quickLinks.map((q) => {
              const Icon = q.icon;
              const isExternal = q.href.startsWith("http") || q.href.startsWith("tel:");
              const inner = (
                <>
                  <Icon className="w-3.5 h-3.5 text-[#C9A050]" />
                  <span>{q.label}</span>
                </>
              );
              const cls =
                "inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.1] text-white/85 text-sm transition";
              return isExternal ? (
                <a key={q.label} href={q.href} className={cls}>{inner}</a>
              ) : (
                <Link key={q.label} to={q.href} className={cls}>{inner}</Link>
              );
            })}
          </div>
        </section>

        {/* Category rows */}
        <div className="border-t border-white/5 mt-6">
          {categories.map((cat, i) => (
            <div key={cat.id} className="border-b border-white/5">
              <Row category={cat} index={i} />
            </div>
          ))}

          {/* Before & After */}
          <div className="border-b border-white/5">
            <GalleryRow />
          </div>
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
