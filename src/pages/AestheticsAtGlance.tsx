import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Share2, Download, Shield, Palette, Zap, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateSEOMetadata } from "@/utils/seo";

import botox3AreasImg from "@/assets/home3-botox-3areas.jpg";
import haMakeoverBaImg from "@/assets/home3-ha-makeover-ba.jpg";
import cosmeticUnitsImg from "@/assets/home3-cosmetic-units-gold.jpg";

const seoData = generateSEOMetadata(
  "Aesthetics at a Glance | The Cosmedocs Skin Map",
  "The doctor-led map of beautiful skin: cosmetic units, three cells, wrinkles in motion, and volume loss — kept in quiet balance.",
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
    front: "Surface skin cells. As they age they pile up like dead grass — dull, dry, opaque — sitting on top of the healthy, hydrated skin underneath.",
    back: "Dead is dead. We don't wake them — we remove them. Medical peels, microdermabrasion and laser resurfacing lift the dry, lifeless layer and expose the living tissue beneath, hydrated from below. Brighter. Softer. Real.",
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
      className="relative h-[440px] w-[78vw] sm:w-[340px] shrink-0 snap-center [perspective:1200px]"
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
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

/* -------------------- Big single Tx flip card -------------------- */

type BigTx = {
  eyebrow: string;
  title: string;
  tagline: string;
  image: string;
  back: string;
  href: string;
  cta: string;
};

const BigFlipCard = ({ data }: { data: BigTx }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="relative aspect-[3/4] sm:aspect-[4/5] [perspective:1400px]">
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front — image-led */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-[32px] overflow-hidden ring-1 ring-[#C9A050]/30 shadow-[0_40px_80px_-30px_rgba(201,160,80,0.4)]">
          <img src={data.image} alt={data.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          {/* Top eyebrow */}
          <div className="absolute top-5 left-5 sm:top-7 sm:left-8">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#C9A050] bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#C9A050]/30">
              {data.eyebrow}
            </span>
          </div>
          {/* Flip button top-right */}
          <button
            onClick={() => setFlipped(true)}
            aria-label="Flip card"
            className="absolute top-5 right-5 sm:top-7 sm:right-8 w-11 h-11 rounded-full bg-[#C9A050] text-black flex items-center justify-center shadow-[0_0_24px_rgba(201,160,80,0.55)] hover:scale-105 active:scale-95 transition"
          >
            <RotateCw className="w-4 h-4" />
          </button>
          {/* Bottom title only */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.02] max-w-2xl">
              {data.title}
            </h3>
          </div>
        </div>
        {/* Back — explanation */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-[32px] bg-gradient-to-br from-[#1f1809] via-[#141008] to-black border border-[#C9A050]/40 p-7 sm:p-12 flex flex-col">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#C9A050]">{data.eyebrow}</span>
          <h3 className="mt-3 font-serif text-2xl sm:text-4xl text-white leading-[1.05]">{data.title}</h3>
          <p className="mt-5 text-white/90 text-lg sm:text-2xl lg:text-3xl leading-[1.5] font-light flex-1 max-w-3xl">
            {data.back}
          </p>
          <div className="mt-6 flex items-center justify-between">
            <Link
              to={data.href}
              className="inline-flex items-center gap-2 bg-[#C9A050] text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#b89040] transition"
            >
              {data.cta} <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setFlipped(false)}
              aria-label="Flip back"
              className="w-10 h-10 rounded-full border border-[#C9A050]/50 text-[#C9A050] flex items-center justify-center hover:bg-[#C9A050]/10 transition"
            >
              <RotateCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const wrinklesCard: BigTx = {
  eyebrow: "02 · Wrinkles in Motion · Muscles",
  title: "1, 2 or 3 Areas Botox.",
  tagline: "Forehead lines · Frown · Crow's feet — softened, never frozen.",
  image: botox3AreasImg,
  back: "Every line that appears when you smile, frown or raise your brow is a muscle creasing the skin above it. We quiet those muscles — softly, doctor-led — in 1, 2 or 3 areas. The expression stays. The fold doesn't. Movement preserved, lines gone.",
  href: "/treatments/botox/",
  cta: "Discover Botox",
};

const volumeCard: BigTx = {
  eyebrow: "03 · Volume Loss · Architecture",
  title: "The HA Makeover.",
  tagline: "8 / 11-point lifting with hyaluronic acid — the architecture restored.",
  image: haMakeoverBaImg,
  back: "Time quietly takes structure from the cheeks, mid-face, jaw, temples and lips. The HA Makeover restores it — millimetre by millimetre, point by point — with hyaluronic acid placed deep against the bone. Quiet lift. No bulk. No surgery. The face you remember, returned.",
  href: "/treatments/ha-makeover/",
  cta: "HA Makeover",
};

/* -------------------- Section helpers -------------------- */

const SectionLabel = ({ n, label }: { n: string; label: string }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="font-serif text-[#C9A050] text-2xl">{n}</span>
    <span className="h-px flex-1 bg-gradient-to-r from-[#C9A050]/60 to-transparent" />
    <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A050]">{label}</span>
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
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden">
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-7 flex flex-wrap gap-3">
            <Button onClick={handleShare} variant="outline" className="border-[#C9A050]/40 bg-transparent text-white hover:bg-[#C9A050]/10 hover:text-white">
              <Share2 className="w-4 h-4 mr-2" /> Share
            </Button>
            <Button onClick={() => window.print()} className="bg-[#C9A050] text-black hover:bg-[#b89040]">
              <Download className="w-4 h-4 mr-2" /> Download PDF
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Cosmetic Units of the Face — directly under hero */}
      <section className="pb-16 sm:pb-20">
        <div className="container mx-auto px-5 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[32px] overflow-hidden ring-1 ring-[#C9A050]/30 bg-gradient-to-br from-[#0d0d0d] to-[#1a1408]"
          >
            <div className="grid lg:grid-cols-[1.05fr_1fr]">
              <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[520px]">
                <img
                  src={cosmeticUnitsImg}
                  alt="The cosmetic units of the face — anatomical map in gold"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
              </div>
              <div className="p-7 sm:p-12 flex flex-col justify-center">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#C9A050]">Anatomy · The Map</span>
                <h2 className="mt-3 font-serif text-3xl sm:text-5xl leading-[1.03] text-white">
                  The Cosmetic Units <br className="hidden sm:block" />
                  <span className="text-[#C9A050]">of the Face.</span>
                </h2>
                <p className="mt-5 text-white/75 text-base sm:text-lg leading-relaxed">
                  The face isn't one canvas — it's a collection of small, distinct units: forehead, brow, temple, cheek,
                  nose, lip, chin, jaw. Each unit meets the next at a quiet edge.
                </p>
                <p className="mt-4 text-white/75 text-base sm:text-lg leading-relaxed">
                  When skin flow breaks at one of those edges — a line, a lost millimetre of volume, an uneven patch of
                  tone — the eye catches a shadow. That shadow is what reads as <em className="text-[#C9A050] not-italic">tired, older, off</em>.
                </p>
                <p className="mt-4 text-white/85 text-base sm:text-lg leading-relaxed">
                  Our work is invisible: we read each cosmetic unit, soften the edges between them, and let the light
                  flow uninterrupted across the face.
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {["Lines", "Volume loss", "Uneven tone"].map((t) => (
                    <span key={t} className="text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-[#C9A050]/40 text-[#C9A050]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1 — Your Skin */}
      <section className="py-16 sm:py-24 border-t border-[#C9A050]/15 bg-gradient-to-b from-black via-[#080604] to-black">
        <div className="container mx-auto px-5 max-w-6xl">
          <SectionLabel n="01" label="Your Skin · Three Cells" />
          <div className="max-w-2xl mb-10 sm:mb-14">
            <h2 className="font-serif text-3xl sm:text-5xl leading-[1.05] text-white">
              Three cells. <span className="text-[#C9A050]">One surface.</span>
            </h2>
            <p className="mt-4 text-white/65 text-[15px] sm:text-base leading-relaxed">
              Every visible skin concern traces back to three cell types working together. We don't treat all three the same way.
            </p>
          </div>
          <div className="-mx-5 px-5 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-5 pb-2 pr-5">
              {cellCards.map((c, i) => (
                <CellFlipCard key={c.name} card={c} index={i} />
              ))}
            </div>
          </div>
          <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-[#C9A050]/70 sm:hidden">Swipe →</p>
        </div>
      </section>

      {/* Section 2 — Wrinkles in Motion */}
      <section className="py-16 sm:py-24 border-t border-[#C9A050]/15">
        <div className="container mx-auto px-5 max-w-6xl">
          <SectionLabel n="02" label="Wrinkles in Motion · Muscles" />
          <div className="max-w-2xl mb-10 sm:mb-14">
            <h2 className="font-serif text-3xl sm:text-5xl leading-[1.05] text-white">
              Where the muscle <span className="text-[#C9A050]">creases the skin.</span>
            </h2>
            <p className="mt-4 text-white/65 text-[15px] sm:text-base leading-relaxed">
              Forehead, frown, crow's feet, lip lines, jaw — soft, doctor-led Botox quietens the muscles that fold the skin. Movement preserved. Lines, gone.
            </p>
          </div>
          <BigFlipCard data={wrinklesCard} />
          <div className="mt-8">
            <Link to="/treatments/botox/" className="inline-flex items-center gap-2 text-[#C9A050] hover:gap-3 transition-all text-sm uppercase tracking-[0.2em]">
              All Botox treatments <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3 — Volume Loss */}
      <section className="py-16 sm:py-24 border-t border-[#C9A050]/15 bg-gradient-to-b from-black via-[#080604] to-black">
        <div className="container mx-auto px-5 max-w-6xl">
          <SectionLabel n="03" label="Volume Loss · Architecture" />
          <div className="max-w-2xl mb-10 sm:mb-14">
            <h2 className="font-serif text-3xl sm:text-5xl leading-[1.05] text-white">
              Where time has <span className="text-[#C9A050]">taken structure.</span>
            </h2>
            <p className="mt-4 text-white/65 text-[15px] sm:text-base leading-relaxed">
              Cheeks, mid-face, jaw, temples, lips — hyaluronic acid restores the architecture, millimetre by millimetre. Quietly. Never bulk.
            </p>
          </div>
          <BigFlipCard data={volumeCard} />
          <div className="mt-8">
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
