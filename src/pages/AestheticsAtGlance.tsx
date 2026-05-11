import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Share2, Download, Shield, Palette, Zap, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateSEOMetadata } from "@/utils/seo";

// Reuse Home3 imagery for treatment cards
import botox3AreasImg from "@/assets/home3-botox-3areas.jpg";
import botoxLipFlipImg from "@/assets/home3-botox-lip-flip.jpg";
import botoxBrowLiftImg from "@/assets/home3-botox-brow-lift.jpg";
import botoxBunnyImg from "@/assets/home3-botox-bunny-lines.jpg";
import botoxNefertitiImg from "@/assets/home3-botox-nefertiti.jpg";
import botoxGummyImg from "@/assets/home3-botox-gummy-smile.jpg";
import botoxMentalisImg from "@/assets/home3-botox-mentalis.jpg";
import botoxMarionetteImg from "@/assets/home3-botox-marionette.jpg";
import haMakeoverBaImg from "@/assets/home3-ha-makeover-ba.jpg";
import cheekFillerBaImg from "@/assets/home3-cheek-filler-ba.jpg";
import jowlJawlineBaImg from "@/assets/home3-jowl-jawline-ba.jpg";
import tearTroughBaImg from "@/assets/home3-tear-trough-ba.jpg";
import templeFillerBaImg from "@/assets/home3-temple-filler-ba.jpg";
import lipFillerBaImg from "@/assets/home3-lip-filler-ba.jpg";
import cosmeticUnitsImg from "@/assets/home3-cosmetic-units-gold.jpg";

const seoData = generateSEOMetadata(
  "Aesthetics at a Glance | The Cosmedocs Skin Map",
  "The doctor-led map of beautiful skin: three cells, wrinkles in motion, and volume loss — kept in quiet balance.",
  "/aesthetics-at-a-glance/"
);

/* -------------------- Cell cards (flip) -------------------- */

type CellCard = {
  name: string;
  subtitle: string;
  icon: typeof Shield;
  front: string;
  back: string;
  verb: string;
};

const cellCards: CellCard[] = [
  {
    name: "Keratinocytes",
    subtitle: "The barrier",
    icon: Shield,
    verb: "Remove",
    front: "Skin cells that form the surface barrier — what the world sees and touches.",
    back: "We don't try to wake these. We gently remove the tired, lazy ones — peels, retinoids, resurfacing — so fresh keratinocytes rise to the surface. Smoother skin. Brighter finish.",
  },
  {
    name: "Melanocytes",
    subtitle: "The pigment",
    icon: Palette,
    verb: "Even out",
    front: "Pigment-producing cells that decide your tone — and your sun spots, melasma and uneven patches.",
    back: "We don't remove them. We control their output so it's even — vitamin C, tyrosinase inhibitors, gentle pigment lasers. The goal is uniform tone, never bleach.",
  },
  {
    name: "Fibroblasts",
    subtitle: "The structure",
    icon: Zap,
    verb: "Awaken",
    front: "Deep-dermal cells that produce collagen, elastin and hyaluronic acid — the scaffolding of young skin.",
    back: "By age 30 only a third are still active. We awaken the rest — Profhilo, polynucleotides, PRP, microneedling. Structure rebuilt from within. Bounce restored.",
  },
];

/* -------------------- Treatment cards -------------------- */

type Tx = { title: string; tagline: string; href: string; image: string; badge?: string };

const wrinklesInMotion: Tx[] = [
  { title: "1, 2 or 3 Areas Botox", tagline: "Forehead · Frown · Crow's feet", href: "/treatments/botox/", image: botox3AreasImg, badge: "Signature" },
  { title: "Brow Lift", tagline: "1–2 mm subtle elevation", href: "/treatments/botox/", image: botoxBrowLiftImg },
  { title: "Bunny Lines", tagline: "Nose-bridge crinkles", href: "/treatments/botox/", image: botoxBunnyImg },
  { title: "Lip Flip", tagline: "A whisper of upper-lip lift", href: "/treatments/lip-flip/", image: botoxLipFlipImg },
  { title: "Gummy Smile", tagline: "Refined upper-lip line", href: "/treatments/botox/", image: botoxGummyImg },
  { title: "Mentalis · Chin", tagline: "Quiet the chin dimpling", href: "/treatments/botox/", image: botoxMentalisImg },
  { title: "Nefertiti Neck Lift", tagline: "Sculpt the neck-jaw line", href: "/treatments/botox/", image: botoxNefertitiImg },
  { title: "Marionette / DAO", tagline: "Lift the corners of the mouth", href: "/treatments/botox/", image: botoxMarionetteImg },
];

const volumeLost: Tx[] = [
  { title: "HA Makeover", tagline: "8 / 11-point lifting", href: "/treatments/ha-makeover/", image: haMakeoverBaImg, badge: "Signature" },
  { title: "Cheek Filler", tagline: "Mid-face lift, no surgery", href: "/treatments/cheek-filler/", image: cheekFillerBaImg },
  { title: "Jowl & Jawline", tagline: "Sharpen the lower face", href: "/treatments/jawline-filler/", image: jowlJawlineBaImg },
  { title: "Tear Trough", tagline: "Rested under-eyes", href: "/treatments/tear-trough-filler/", image: tearTroughBaImg },
  { title: "Temple Filler", tagline: "Restore the upper-third", href: "/treatments/temple-filler/", image: templeFillerBaImg },
  { title: "Lip Filler", tagline: "Natural, never overdone", href: "/treatments/lip-fillers/", image: lipFillerBaImg },
  { title: "Cosmetic Units", tagline: "The anatomical map", href: "/aesthetics-at-a-glance/", image: cosmeticUnitsImg, badge: "Anatomy" },
];

/* -------------------- Components -------------------- */

const CellFlipCard = ({ card, index }: { card: CellCard; index: number }) => {
  const [flipped, setFlipped] = useState(false);
  const Icon = card.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative h-[420px] [perspective:1200px]"
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-[28px] bg-gradient-to-br from-[#0d0d0d] via-[#141008] to-[#1f1809] border border-[#C9A050]/25 p-7 flex flex-col shadow-[0_30px_60px_-30px_rgba(201,160,80,0.35)]">
          <div className="w-12 h-12 rounded-full bg-[#C9A050]/15 border border-[#C9A050]/40 flex items-center justify-center">
            <Icon className="w-5 h-5 text-[#C9A050]" />
          </div>
          <span className="mt-6 text-[10px] uppercase tracking-[0.25em] text-[#C9A050]">{card.subtitle}</span>
          <h3 className="mt-2 font-serif text-3xl sm:text-4xl leading-[1.05] text-white">{card.name}</h3>
          <p className="mt-4 text-white/70 text-[15px] leading-relaxed flex-1">{card.front}</p>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C9A050]/80">Our approach · {card.verb}</span>
            <button
              onClick={() => setFlipped(true)}
              aria-label="Flip card"
              className="w-10 h-10 rounded-full bg-[#C9A050] text-black flex items-center justify-center shadow-[0_0_24px_rgba(201,160,80,0.55)] hover:scale-105 transition"
            >
              <RotateCw className="w-4 h-4" />
            </button>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-[28px] bg-gradient-to-br from-[#1f1809] via-[#141008] to-[#0d0d0d] border border-[#C9A050]/40 p-7 flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A050]">{card.verb} · {card.name}</span>
          <p className="mt-4 text-white text-lg sm:text-xl leading-[1.45] font-light flex-1">{card.back}</p>
          <button
            onClick={() => setFlipped(false)}
            className="mt-6 self-end w-10 h-10 rounded-full bg-[#C9A050] text-black flex items-center justify-center shadow-[0_0_24px_rgba(201,160,80,0.55)]"
            aria-label="Flip back"
          >
            <RotateCw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const TxCard = ({ card }: { card: Tx }) => (
  <Link
    to={card.href}
    className="group relative block overflow-hidden rounded-[24px] aspect-[4/5] bg-black ring-1 ring-white/10 hover:ring-[#C9A050]/60 transition-all duration-300 hover:-translate-y-1"
  >
    <img src={card.image} alt={card.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
    {card.badge && (
      <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-[#C9A050]/90 text-black font-medium">
        {card.badge}
      </span>
    )}
    <div className="absolute inset-x-0 bottom-0 p-5">
      <h3 className="font-serif text-xl sm:text-2xl text-white leading-tight">{card.title}</h3>
      <p className="mt-1.5 text-white/75 text-xs sm:text-sm">{card.tagline}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#C9A050] group-hover:gap-2 transition-all">
        Discover <ArrowUpRight className="w-3.5 h-3.5" />
      </span>
    </div>
  </Link>
);

const SectionHead = ({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) => (
  <div className="max-w-2xl mb-10 sm:mb-14">
    <p className="text-[11px] uppercase tracking-[0.3em] text-[#C9A050] mb-3">{eyebrow}</p>
    <h2 className="font-serif text-3xl sm:text-5xl leading-[1.05] text-white">{title}</h2>
    <p className="mt-4 text-white/65 text-[15px] sm:text-base leading-relaxed">{copy}</p>
  </div>
);

/* -------------------- Page -------------------- */

const AestheticsAtGlance = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: "Aesthetics at a Glance — Cosmedocs", url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} data-rh="true" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,160,80,0.18),transparent_60%)]" />
        <div className="container mx-auto px-5 max-w-5xl relative">
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-[11px] uppercase tracking-[0.3em] text-[#C9A050]">
            The Cosmedocs Skin Map
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-serif text-4xl sm:text-6xl leading-[1.02] tracking-tight"
          >
            Aesthetics, <span className="text-[#C9A050]">at a glance.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-2xl text-white/70 text-base sm:text-lg leading-relaxed"
          >
            Three cells beneath the skin. Wrinkles that move on the surface. Volume that quietly leaves with time.
            Keep all three in balance — the face stays unmistakably you.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap gap-3">
            <Button onClick={handleShare} variant="outline" className="border-[#C9A050]/40 bg-transparent text-white hover:bg-[#C9A050]/10 hover:text-white">
              <Share2 className="w-4 h-4 mr-2" /> Share
            </Button>
            <Button onClick={() => window.print()} className="bg-[#C9A050] text-black hover:bg-[#b89040]">
              <Download className="w-4 h-4 mr-2" /> Download PDF
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 1 — Your Skin */}
      <section className="py-16 sm:py-24 border-t border-white/5">
        <div className="container mx-auto px-5 max-w-6xl">
          <SectionHead
            eyebrow="01 · Your Skin"
            title="Three cells. One surface."
            copy="Every visible skin concern traces back to three cell types working together. We don't treat all three the same way."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cellCards.map((c, i) => (
              <CellFlipCard key={c.name} card={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Wrinkles in Motion */}
      <section className="py-16 sm:py-24 border-t border-white/5 bg-gradient-to-b from-black to-[#0a0805]">
        <div className="container mx-auto px-5 max-w-6xl">
          <SectionHead
            eyebrow="02 · Wrinkles in Motion"
            title="Where the muscle creases the skin."
            copy="Forehead, frown, crow's feet, lip lines, jaw — soft, doctor-led Botox quietens the muscles that fold the skin. Movement preserved. Lines, gone."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {wrinklesInMotion.map((c) => (
              <TxCard key={c.title} card={c} />
            ))}
          </div>
          <div className="mt-10">
            <Link to="/treatments/botox/" className="inline-flex items-center gap-2 text-[#C9A050] hover:gap-3 transition-all text-sm uppercase tracking-[0.2em]">
              All Botox treatments <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3 — Volume Loss */}
      <section className="py-16 sm:py-24 border-t border-white/5">
        <div className="container mx-auto px-5 max-w-6xl">
          <SectionHead
            eyebrow="03 · Volume Loss"
            title="Where time has taken structure."
            copy="Cheeks, mid-face, jaw, temples, lips — hyaluronic acid restores the architecture, millimetre by millimetre. Quietly. Never bulk."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {volumeLost.map((c) => (
              <TxCard key={c.title} card={c} />
            ))}
          </div>
          <div className="mt-10">
            <Link to="/treatments/dermal-fillers/" className="inline-flex items-center gap-2 text-[#C9A050] hover:gap-3 transition-all text-sm uppercase tracking-[0.2em]">
              Dermal Fillers overview <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Balance closing */}
      <section className="py-20 sm:py-28 border-t border-[#C9A050]/20 bg-gradient-to-b from-[#0a0805] to-black">
        <div className="container mx-auto px-5 max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#C9A050] mb-4">The Balance</p>
          <h2 className="font-serif text-3xl sm:text-5xl leading-[1.05]">
            Skin. Wrinkles. Volume.
            <br />
            <span className="text-[#C9A050]">Kept in quiet balance.</span>
          </h2>
          <p className="mt-6 text-white/70 text-base sm:text-lg leading-relaxed">
            When all three are looked after — the cells beneath, the lines on top, the structure underneath — the face is
            optimised, never overdone. Bold. Natural. Always your way.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact/">
              <Button className="bg-[#C9A050] text-black hover:bg-[#b89040] px-6">Book a consultation</Button>
            </Link>
            <Link to="/aesthetic-intelligence/">
              <Button variant="outline" className="border-[#C9A050]/40 bg-transparent text-white hover:bg-[#C9A050]/10 hover:text-white px-6">
                Free AI Face Scan <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
          <p className="mt-10 text-xs text-white/40 italic">Our aesthetics is invisible art.</p>
        </div>
      </section>
    </div>
  );
};

export default AestheticsAtGlance;
