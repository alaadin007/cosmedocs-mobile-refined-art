import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import { ChevronRight, ChevronLeft, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Home2Header from "@/components/home2/Home2Header";
import botox3AreasImg from "@/assets/home3-botox-3areas.jpg";
import botoxLipFlipImg from "@/assets/home3-botox-lip-flip.jpg";
import botoxBrowLiftImg from "@/assets/home3-botox-brow-lift.jpg";
import botoxBunnyImg from "@/assets/home3-botox-bunny-lines.jpg";
import botoxNefertitiImg from "@/assets/home3-botox-nefertiti.jpg";
import botoxGummyImg from "@/assets/home3-botox-gummy-smile.jpg";
import botoxMentalisImg from "@/assets/home3-botox-mentalis.jpg";
import botoxMarionetteImg from "@/assets/home3-botox-marionette.jpg";
import botoxNasalImg from "@/assets/home3-botox-nasal-flaring.jpg";
import medMasseterImg from "@/assets/home3-medical-masseter.jpg";
import masseterBaImg from "@/assets/home3-masseter-botox-ba.jpg";
import medBruxismImg from "@/assets/home3-medical-bruxism.jpg";
import medMigraineImg from "@/assets/home3-medical-migraine.jpg";
import medHyperhidrosisImg from "@/assets/home3-medical-hyperhidrosis.jpg";
import medTrapeziusImg from "@/assets/home3-medical-trapezius.jpg";
import medCalfImg from "@/assets/home3-medical-calf.jpg";
import haMakeoverBaImg from "@/assets/home3-ha-makeover-ba.jpg";
import chinFillerBaImg from "@/assets/home3-chin-filler-ba.jpg";
import cheekFillerBaImg from "@/assets/home3-cheek-filler-ba.jpg";
import jowlJawlineBaImg from "@/assets/home3-jowl-jawline-ba.jpg";
import tearTroughBaImg from "@/assets/home3-tear-trough-ba.jpg";
import botoxFrownBaImg from "@/assets/home3-botox-frown-ba.jpg";
import botoxForeheadBaImg from "@/assets/home3-botox-forehead-ba.jpg";
import templeFillerBaImg from "@/assets/home3-temple-filler-ba.jpg";
import lipFillerBaImg from "@/assets/home3-lip-filler-ba.jpg";
import lipAnatomyImg from "@/assets/home3-lip-gallery.jpg";
import cosmeticUnitsImg from "@/assets/home3-cosmetic-units.jpg";
import noseBaImg from "@/assets/home3-nose-ba.jpg";
import jawlineBaImg from "@/assets/home3-jawline-ba.jpg";
import endolaserBaImg from "@/assets/home3-endolaser-diagram.jpg";

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
  flip?: { back: string; imagePosition?: "top" | "bottom"; image?: string };
  flipImages?: { src: string; alt: string }[];
  flipNote?: string;
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
    flipImages: [
      { src: botoxFrownBaImg, alt: "Frown line softening — before and after, Cosmedocs" },
      { src: botoxForeheadBaImg, alt: "Forehead lines smoothed — before and after, Cosmedocs" },
    ],
    flipNote: "Real, unedited patient results.",
  },
  {
    title: "Brow Lift",
    tagline: "1–2 mm subtle elevation",
    href: "/treatments/botox/",
    bg: "bg-[#f6efe4]",
    ink: "text-zinc-900",
    image: botoxBrowLiftImg,
  },
  {
    title: "Bunny Lines",
    tagline: "Nose-bridge crinkles",
    href: "/treatments/botox/",
    bg: "bg-[#f6efe4]",
    ink: "text-zinc-900",
    image: botoxBunnyImg,
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
    bg: "bg-[#2a2a2a]",
    image: botoxGummyImg,
  },
  {
    title: "Mentalis · Chin",
    tagline: "Quiet the chin dimpling",
    href: "/treatments/botox/",
    bg: "bg-[#2a2a2a]",
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
    bg: "bg-[#2a2a2a]",
    image: botoxMarionetteImg,
  },
  {
    title: "Nasal Flaring",
    tagline: "Calm nostril movement",
    href: "/treatments/nasal-flaring-botox/",
    bg: "bg-[#2a2a2a]",
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
      {
        title: "Masseter Botox",
        tagline: "Slim jaw · Stop grinding",
        href: "/treatments/masseter-botox/",
        bg: "bg-[#0d1218]",
        image: medMasseterImg,
        badge: "Most asked",
        flip: {
          back: "Doctor-led masseter dosing softens a square jaw into an oval silhouette — and quietly resolves the night grinding behind it. A dual-intent treatment: cosmetic refinement above, medical relief below.",
          imagePosition: "top",
          image: masseterBaImg,
        },
      },
      { title: "Bruxism Botox", tagline: "Night clenching, treated", href: "/treatments/bruxism-botox/", bg: "bg-[#0d1218]", image: medBruxismImg },
      { title: "Migraine Botox", tagline: "Chronic migraine protocol", href: "/treatments/migraine-botox/", bg: "bg-[#0d1218]", image: medMigraineImg },
      { title: "Hyperhidrosis", tagline: "Underarm sweat control", href: "/treatments/hyperhidrosis/", bg: "bg-[#0d1218]", image: medHyperhidrosisImg },
      { title: "Trapezius Botox", tagline: "Shoulder slimming · pain", href: "/treatments/trap-botox/", bg: "bg-[#0d1218]", image: medTrapeziusImg },
      { title: "Calf Slimming", tagline: "Athletic-leg refinement", href: "/treatments/calf-slimming-botox/", bg: "bg-[#0d1218]", image: medCalfImg },
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
        tagline: "8 / 11-point lifting",
        href: "/treatments/ha-makeover/",
        bg: "bg-gradient-to-br from-[#1a1a1a] via-[#2a2010] to-[#3a2d10]",
        badge: "Signature",
        image: haMakeoverBaImg,
        flip: {
          back: "A doctor-led architectural reset across cheeks, mid-face, jaw and chin — millimetre-by-millimetre, in a single signature appointment. Volume restored where time has taken it. Results that read as you, only rested.",
        },
      },
      {
        title: "Cheek Filler",
        tagline: "Mid-face lift, no surgery",
        href: "/treatments/cheek-filler/",
        bg: "bg-gradient-to-br from-amber-100 to-orange-200",
        ink: "text-zinc-900",
        image: cheekFillerBaImg,
        badge: "Mid-face",
        flip: {
          back: "Architectural mid-face support — restoring the apex of the cheek to lift the lower face from above. Doctor-led millimetre placement on bone, never bulk. The result reads as restored youth, not added volume.",
          imagePosition: "bottom",
        },
      },
      {
        title: "Jowl & Jawline",
        tagline: "Sharpen the lower face",
        href: "/treatments/jawline-filler/",
        bg: "bg-gradient-to-br from-zinc-800 to-zinc-950",
        badge: "Definition",
        flip: {
          back: "Doctor-led contouring along the mandibular border — softening the jowl, sharpening the angle and re-defining the chin-to-ear line. Bone-deep millimetre placement, never bulk.",
          imagePosition: "top",
          image: jowlJawlineBaImg,
        },
      },
      {
        title: "Tear Trough",
        tagline: "Rested under-eyes",
        href: "/treatments/tear-trough-filler/",
        bg: "bg-gradient-to-br from-rose-100 to-rose-300",
        ink: "text-zinc-900",
        badge: "Under-eye",
        flip: {
          back: "Doctor-led correction of the tear-trough hollow — softening shadows and restoring a rested, awake under-eye. Conservative dosing on the periosteum, never superficial. The result reads as sleep, not filler.",
          imagePosition: "top",
          image: tearTroughBaImg,
        },
      },
      {
        title: "Temple Filler",
        tagline: "Restore the upper-third",
        href: "/treatments/temple-filler/",
        bg: "bg-gradient-to-br from-neutral-200 to-neutral-400",
        ink: "text-zinc-900",
        flip: {
          back: "Doctor-led restoration of the temple hollow — re-establishing the upper-third scaffold that frames the brow and lifts the lateral face. Deep, on-bone placement with conservative volumes. The eye reads rested; the face reads structured, never filled.",
          imagePosition: "top",
          image: templeFillerBaImg,
        },
      },
      {
        title: "Lip Filler",
        tagline: "Natural, never overdone",
        href: "/treatments/lip-fillers/",
        bg: "bg-gradient-to-br from-pink-200 to-rose-400",
        ink: "text-zinc-900",
        flip: {
          back: "Your choice — natural or bold. Doctor-led lip artistry mapped to anatomy: Cupid's bow, vermilion border, tubercles, Glogau-Klein points. Millimetre dosing for a result that reads as you, never overdone.",
          imagePosition: "top",
          image: lipAnatomyImg,
        },
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
        image: chinFillerBaImg,
        badge: "Profile",
        flip: {
          back: "A measured chin projection that re-balances the lower face — softening a recessive jaw, refining the side profile and lifting the chin-neck line. Doctor-led, millimetre dosing for a result that reads as bone, not filler.",
        },
      },
      {
        title: "Non-Surgical Nose",
        tagline: "Liquid rhinoplasty",
        href: "/treatments/nose-filler/",
        bg: "bg-gradient-to-br from-zinc-900 to-zinc-700",
        flip: {
          back: "Doctor-led liquid rhinoplasty — straightening the bridge, refining the tip, rebalancing the profile in minutes, no surgery. This patient came to us after a surgical rhinoplasty had left an irregularity; we corrected it with millimetre filler placement.",
          imagePosition: "top",
          image: noseBaImg,
        },
      },
      {
        title: "Jawline Definition",
        tagline: "Filler & PCL threads",
        href: "/treatments/jawline-filler/",
        bg: "bg-gradient-to-br from-[#1a1a1a] to-[#3a2f10]",
        flip: {
          back: "Doctor-led mandibular contouring — sharpening the gonial angle, lengthening the ramus and lifting the lower face. Filler on bone for structure, PCL threads for soft-tissue support. Definition that reads as bone, never bulk.",
          imagePosition: "top",
          image: jawlineBaImg,
        },
      },
      {
        title: "Endolaser Lift",
        tagline: "Laser fibre tightening",
        href: "/treatments/laser-fibre-lift/",
        bg: "bg-gradient-to-br from-[#C9A050] to-[#8a6d2c]",
        badge: "New",
        flip: {
          back: "Doctor-led dual-wavelength endolaser — a fibre passed beneath the skin to tighten the lower face and neck from within. Mapped, marked and delivered millimetre by millimetre. Real lift, no scalpel, single session.",
          imagePosition: "top",
          image: endolaserBaImg,
        },
      },
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
      { title: "Polynucleotides", tagline: "DNA-level repair", href: "/treatments/polynucleotide-treatment/", bg: "bg-gradient-to-br from-rose-200 to-pink-400", ink: "text-zinc-900", badge: "Regenerative" },
      { title: "Profhilo", tagline: "Bio-remodelling HA", href: "/treatments/profhilo-treatment/", bg: "bg-gradient-to-br from-sky-100 to-sky-300", ink: "text-zinc-900" },
      { title: "Exosomes", tagline: "Next-gen messengers", href: "/treatments/exosomes/", bg: "bg-gradient-to-br from-neutral-200 to-neutral-400", ink: "text-zinc-900" },
      { title: "PRP", tagline: "Your own plasma", href: "/treatments/prp-treatment/", bg: "bg-gradient-to-br from-[#C9A050] to-[#7a5e25]" },
      { title: "Chemical Peels", tagline: "Glycolic · TCA · Salicylic", href: "/treatments/chemical-peels/", bg: "bg-gradient-to-br from-amber-100 to-orange-300", ink: "text-zinc-900" },
      { title: "Microneedling", tagline: "Collagen induction therapy", href: "/treatments/microneedling/", bg: "bg-gradient-to-br from-stone-700 to-stone-900" },
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
  split: "w-full h-full rounded-[28px]",
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

/* ---------- Flippable card (simple front, image back) ------------------ */

const FaceMark = ({ area }: { area?: string }) => {
  // Highlight coordinates per treatment area on a 64x64 schematic face
  const accents: Record<string, JSX.Element> = {
    "HA Makeover": (
      <>
        <circle cx="22" cy="30" r="3.2" />
        <circle cx="42" cy="30" r="3.2" />
        <path d="M24 42c4 3 12 3 16 0" />
      </>
    ),
    "Cheek Filler": (
      <>
        <path d="M19 30c2 4 4 6 7 7" />
        <path d="M45 30c-2 4-4 6-7 7" />
      </>
    ),
    "Jowl & Jawline": (
      <path d="M16 36c2 8 8 14 16 14s14-6 16-14" />
    ),
    "Tear Trough": (
      <>
        <path d="M19 30c2 2 6 2 8 0" />
        <path d="M37 30c2 2 6 2 8 0" />
      </>
    ),
    "Temple Filler": (
      <>
        <path d="M14 22c2-3 4-4 7-4" />
        <path d="M50 22c-2-3-4-4-7-4" />
      </>
    ),
    "Chin Filler": (
      <path d="M26 46c1.5 3 4.5 4.5 6 4.5s4.5-1.5 6-4.5" />
    ),
    "Lip Filler": (
      <path d="M24 40c2-2 6-2 8 0 2-2 6-2 8 0-2 2-6 3-8 3s-6-1-8-3Z" />
    ),
  };
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 sm:w-20 sm:h-20" aria-hidden="true">
      <path d="M32 6c10 0 18 8 18 20v8c0 13-8 24-18 24S14 47 14 34v-8C14 14 22 6 32 6Z" />
      <path d="M22 30c1.5-1 3-1 4.5 0M37.5 30c1.5-1 3-1 4.5 0" />
      <path d="M32 32v8M28 44c2 1.5 6 1.5 8 0" />
      {area && accents[area] && (
        <g stroke="#C9A050" strokeWidth="2" opacity="0.95">{accents[area]}</g>
      )}
    </svg>
  );
};

const FlipCard = ({ card }: { card: SubCard }) => {
  const inkLight = !card.ink;
  const [flipped, setFlipped] = useState(false);
  const gestureStart = useRef<{ x: number; y: number } | null>(null);
  const isTapGesture = (event: React.PointerEvent) => {
    const start = gestureStart.current;
    if (!start) return true;
    const movedX = Math.abs(event.clientX - start.x);
    const movedY = Math.abs(event.clientY - start.y);
    return movedX < 10 && movedY < 10;
  };

  return (
    <div className="[perspective:1400px] h-full w-full select-none" style={{ touchAction: "pan-x pan-y" }}>
      <div
        className={`relative w-full h-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] will-change-transform ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        {/* FRONT — tap to flip (does not navigate) */}
        <button
          type="button"
          onPointerDown={(event) => {
            gestureStart.current = { x: event.clientX, y: event.clientY };
          }}
          onPointerUp={(event) => {
            if (isTapGesture(event)) setFlipped(true);
            gestureStart.current = null;
          }}
          onPointerCancel={() => {
            gestureStart.current = null;
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") setFlipped(true);
          }}
          aria-label={`${card.title} — reveal results`}
          className={`absolute inset-0 [backface-visibility:hidden] block overflow-hidden rounded-[28px] text-left ${card.bg} ${card.ink ?? "text-white"} shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] ${flipped ? "pointer-events-none" : ""}`}
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-transparent to-black/15" />

          {card.badge && (
            <span className={`absolute top-5 left-5 z-20 text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full font-semibold ${inkLight ? "bg-white/20 backdrop-blur text-white" : "bg-[#C9A050] text-black"}`}>
              {card.badge}
            </span>
          )}

          <div className="absolute inset-0 p-7 sm:p-9 flex flex-col">
            <div className={`flex-1 flex items-center justify-center ${card.ink ? "text-zinc-900/70" : "text-white/80"}`}>
              <FaceMark area={card.title} />
            </div>
            <div>
              <p className={`text-[10px] uppercase tracking-[0.24em] mb-2 ${card.ink ? "text-zinc-900/70" : "text-white/80"}`}>Signature</p>
              <h3 className="font-serif text-3xl sm:text-4xl leading-[1.05] tracking-tight">{card.title}</h3>
              <p className={`mt-2 text-sm ${card.ink ? "text-zinc-700" : "text-white/75"}`}>{card.tagline}</p>
              <span className={`mt-4 inline-flex items-center gap-1.5 text-xs ${card.ink ? "text-zinc-900/70" : "text-white/70"}`}>
                Tap to see results <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </button>

        {/* BACK — full before/after image + caption. Tap empty area to flip back. */}
        <div
          className={`absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] block overflow-hidden rounded-[28px] bg-[#0a0a0a] text-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] ${flipped ? "" : "pointer-events-none"}`}
        >
          {/* Tap-to-flip-back layer (sits behind interactive elements) */}
          <button
            type="button"
            onPointerDown={(event) => {
              gestureStart.current = { x: event.clientX, y: event.clientY };
            }}
            onPointerUp={(event) => {
              if (isTapGesture(event)) setFlipped(false);
              gestureStart.current = null;
            }}
            onPointerCancel={() => {
              gestureStart.current = null;
            }}
            aria-label="Flip card back"
            className="absolute inset-0 z-0 cursor-pointer"
          />

          {/* Flip-back chip */}
          <button
            type="button"
            onClick={() => setFlipped(false)}
            aria-label="Flip card back"
            className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center text-white/85"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className={`absolute inset-0 z-10 p-4 sm:p-5 flex flex-col min-h-0 gap-3 pointer-events-none ${card.flip?.imagePosition === "bottom" ? "flex-col-reverse" : ""}`}>
            {/* Image — fixed proportion so all card backs share the same rhythm */}
            {(card.flip?.image ?? card.image) && (
              <div className="relative rounded-2xl p-[2px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(201,160,80,0.55)] flex-shrink-0 basis-[44%] h-[44%] flex">
                <div
                  aria-hidden
                  className="absolute -inset-[60%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,rgba(201,160,80,0.0)_25%,#C9A050_45%,#F0D78C_50%,#C9A050_55%,rgba(201,160,80,0.0)_75%,transparent_100%)]"
                />
                <div className="relative rounded-2xl overflow-hidden bg-black w-full h-full flex items-center justify-center">
                  <img
                    src={card.flip?.image ?? card.image}
                    alt={`${card.title} before and after — Cosmedocs`}
                    className="block w-full h-full object-contain"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_35%,rgba(0,0,0,0)_65%,rgba(201,160,80,0.10)_100%)]" />
                </div>
              </div>
            )}

            {/* Caption — uniform compact typography across all card backs */}
            <div className="flex-1 min-h-0 flex flex-col justify-start overflow-hidden">
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#C9A050] mb-1.5">Before · After</p>
              <h3 className="font-serif text-xl sm:text-2xl leading-[1.1] tracking-tight">{card.title}</h3>
              <p className="mt-2 text-[13px] leading-snug text-white/75 max-w-md line-clamp-5 sm:line-clamp-6">{card.flip?.back}</p>
              <Link
                to={card.href}
                className="mt-auto pt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#C9A050] pointer-events-auto self-start"
              >
                Discover {card.title} <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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
        className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-proximity scroll-smooth pb-4 px-5 sm:px-8 overscroll-x-contain [touch-action:pan-x_pan-y] [-webkit-overflow-scrolling:touch] [scroll-padding-inline:1.25rem] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {category.cards.map((card) => {
          const isBig = !!card.flip;
          const widthCls = isBig
            ? "w-[72vw] sm:w-[380px] md:w-[420px]"
            : "w-[58vw] sm:w-[300px] md:w-[330px]";
          const heightCls = "h-[58vh] min-h-[440px] max-h-[680px] sm:h-[72vh] sm:min-h-[540px] sm:max-h-[760px]";
          return (
            <div key={card.title} className={`shrink-0 snap-start scroll-mx-5 ${widthCls} ${heightCls}`}>
              {card.flip ? <FlipCard card={card} /> : <TreatmentCard card={card} size="split" />}
            </div>
          );
        })}
        <Link
          to={category.cta.href}
          className="group snap-start scroll-mx-5 shrink-0 w-[58vw] sm:w-[220px] md:w-[260px] h-[58vh] min-h-[440px] max-h-[680px] sm:h-[72vh] sm:min-h-[540px] sm:max-h-[760px] rounded-[28px] border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur flex flex-col items-center justify-center text-center px-6 transition"
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

  const front = (
    <Link
      to={card.href}
      className={`group relative isolate overflow-hidden block ${card.bg} ${card.ink ?? "text-white"} rounded-[28px] h-full w-full transition-transform duration-300 hover:-translate-y-1 active:scale-[0.99] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]`}
    >
      {card.image && (
        <img src={card.image} alt={card.title} loading="lazy" className="absolute inset-0 z-0 w-full h-full object-cover" />
      )}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-transparent to-black/60 pointer-events-none" />
      {card.badge && (
        <span className={`absolute top-5 left-5 z-[2] text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full backdrop-blur ${inkLight ? "bg-white/15 text-white" : "bg-black/70 text-white"}`}>
          {card.badge}
        </span>
      )}
      <div className="absolute inset-0 z-[2] p-7 sm:p-9 flex flex-col justify-end">
        <h3 className="font-serif text-3xl sm:text-4xl leading-[1.05] tracking-tight max-w-[88%]">{card.title}</h3>
        <p className={`mt-2 text-sm sm:text-base ${card.ink ? "text-zinc-700" : "text-white/80"} max-w-[88%]`}>{card.tagline}</p>
        <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-medium ${card.ink ? "text-zinc-900" : "text-white"} group-hover:gap-2.5 transition-all`}>
          {card.flipImages || card.flip ? "Hover to see results" : "Discover"} <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );

  // Pretty single-image flip (uses card.flip)
  if (card.flip && (!card.flipImages || card.flipImages.length === 0)) {
    const flipImg = card.flip.image ?? card.image;
    const imageBottom = card.flip.imagePosition === "bottom";
    return (
      <div className="group [perspective:1400px] h-full w-full">
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 [backface-visibility:hidden]">{front}</div>
          <Link
            to={card.href}
            aria-label={`${card.title} — before and after`}
            className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] block overflow-hidden rounded-[28px] bg-[#0a0a0a] text-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]"
          >
            <div className={`absolute inset-0 p-5 sm:p-6 flex flex-col ${imageBottom ? "flex-col-reverse" : ""}`}>
              {flipImg && (
                <div className="relative rounded-2xl p-[2px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(201,160,80,0.55)]">
                  <div
                    aria-hidden
                    className="absolute -inset-[60%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,rgba(201,160,80,0.0)_25%,#C9A050_45%,#F0D78C_50%,#C9A050_55%,rgba(201,160,80,0.0)_75%,transparent_100%)]"
                  />
                  <div className="relative rounded-2xl overflow-hidden bg-black">
                    <img src={flipImg} alt={`${card.title} before and after — Cosmedocs`} className="block w-full h-auto" />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_35%,rgba(0,0,0,0)_65%,rgba(201,160,80,0.10)_100%)]" />
                  </div>
                </div>
              )}
              <div className={`flex-1 flex flex-col ${imageBottom ? "justify-start pb-4 sm:pb-5" : "justify-end pt-4 sm:pt-5"}`}>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#C9A050] mb-2">Before · After</p>
                <h3 className="font-serif text-2xl sm:text-3xl leading-[1.1] tracking-tight">{card.title}</h3>
                <p className="mt-2 text-sm text-white/75 max-w-md">{card.flip.back}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#C9A050]">
                  Discover {card.title} <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }

  if (!card.flipImages || card.flipImages.length === 0) return front;

  return (
    <div className="group [perspective:1400px] h-full w-full">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 [backface-visibility:hidden]">
          {front}
        </div>
        <Link
          to={card.href}
          aria-label={`${card.title} — real patient results`}
          className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] block overflow-hidden rounded-[28px] bg-[#0a0a0a] text-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]"
        >
          <div className="flex flex-col h-full">
            <div className="h-2/3 p-4 sm:p-5">
              <div className="relative h-full rounded-2xl p-[2px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(201,160,80,0.55)]">
                <div
                  aria-hidden
                  className="absolute -inset-[60%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,rgba(201,160,80,0.0)_25%,#C9A050_45%,#F0D78C_50%,#C9A050_55%,rgba(201,160,80,0.0)_75%,transparent_100%)]"
                />
                <div className="relative h-full grid grid-rows-2 gap-1 rounded-2xl overflow-hidden bg-black">
                  {card.flipImages.map((img) => (
                    <div key={img.src} className="relative overflow-hidden bg-black">
                      <img src={img.src} alt={img.alt} loading="lazy" className="absolute inset-0 w-full h-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="h-1/3 p-6 sm:p-7 flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#C9A050] mb-2">Real results</p>
              <h3 className="font-serif text-2xl sm:text-3xl leading-tight tracking-tight">Unedited. Unfiltered.</h3>
              <p className="mt-2 text-sm text-white/70">{card.flipNote ?? "Real patient outcomes."}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#C9A050]">
                Book your assessment <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};


type Column =
  | { kind: "big"; card: SubCard }
  | { kind: "stack"; cards: SubCard[] }
  | { kind: "grid"; cards: SubCard[] }
  | { kind: "list"; cards: SubCard[]; title?: string; eyebrow?: string };

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

  // Hero spotlight + a single thin column listing every other refined area.
  // Marketing cards can be slotted in afterwards.
  const otherAreas = [
    get("Brow Lift"),
    get("Bunny Lines"),
    get("Lip Flip"),
    get("Gummy Smile"),
    get("Mentalis · Chin"),
    get("Nefertiti Neck Lift"),
    get("Marionette / DAO"),
    get("Nasal Flaring"),
  ].filter(Boolean);

  const columns: Column[] = [
    { kind: "big",  card: get("1, 2 or 3 Areas Botox") },
    { kind: "list", cards: otherAreas, eyebrow: "Refined Areas", title: "Every other detail" },
  ];

  // Column widths — keep big card narrow enough on mobile so the next column peeks in
  const widthBig   = "w-[72vw] sm:w-[380px] md:w-[420px]";
  const widthStack = "w-[58vw] sm:w-[300px] md:w-[330px]";
  const widthGrid  = "w-[80vw] sm:w-[460px] md:w-[520px]";
  const colHeight  = "h-[58vh] min-h-[440px] max-h-[680px] sm:h-[72vh] sm:min-h-[540px] sm:max-h-[760px]";

  return (
    <motion.section
      id={category.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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
        className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-proximity scroll-smooth pb-4 px-5 sm:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {columns.map((col, idx) => {
          if (col.kind === "big") {
            return (
              <div key={idx} className={`shrink-0 snap-start scroll-mx-5 ${widthBig} ${colHeight}`}>
                <SpotlightCard card={col.card} />
              </div>
            );
          }
          if (col.kind === "stack") {
            return (
              <div key={idx} className={`shrink-0 snap-start scroll-mx-5 ${widthStack} ${colHeight} flex flex-col gap-4 sm:gap-5`}>
                {col.cards.map((c) => <TileCard key={c.title} card={c} />)}
              </div>
            );
          }
          if (col.kind === "list") {
            return (
              <div
                key={idx}
                className={`shrink-0 snap-start scroll-mx-5 ${widthStack} ${colHeight} rounded-[28px] bg-gradient-to-b from-[#171717] to-black border border-white/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] flex flex-col`}
              >
                <div className="px-6 pt-7 pb-5 border-b border-white/8">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A050] mb-2">{col.eyebrow ?? "More Areas"}</p>
                  <h3 className="font-serif text-2xl text-white leading-tight tracking-tight">{col.title ?? "Every other detail"}</h3>
                </div>
                <ul className="flex-1 overflow-y-auto px-2 py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  {col.cards.map((c) => (
                    <li key={c.title}>
                      <Link
                        to={c.href}
                        className="group flex items-start justify-between gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition"
                      >
                        <div className="min-w-0">
                          <p className="font-serif text-[15px] text-white leading-snug truncate">{c.title}</p>
                          <p className="text-[11px] text-white/55 mt-0.5 truncate">{c.tagline}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#C9A050] mt-1 shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
          // 2x2 grid for the 4 minor areas
          return (
            <div key={idx} className={`shrink-0 snap-start scroll-mx-5 ${widthGrid} ${colHeight} grid grid-cols-2 grid-rows-2 gap-4 sm:gap-5`}>
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
          className={`group shrink-0 snap-start scroll-mx-5 ${widthStack} ${colHeight} rounded-[28px] border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur flex flex-col items-center justify-center text-center px-6 transition`}
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

/* ---------- Medical Botox — all large spotlight cards in a row ---------- */

const MedicalBotoxSection = ({ category }: { category: Category }) => {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  const widthBig  = "w-[78vw] sm:w-[380px] md:w-[420px]";
  const colHeight = "h-[58vh] min-h-[440px] max-h-[680px] sm:h-[72vh] sm:min-h-[540px] sm:max-h-[760px]";

  return (
    <motion.section
      id={category.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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
        className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-proximity scroll-smooth pb-4 px-5 sm:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* Hero spotlight: first card (Masseter) */}
        {category.cards[0] && (
          <div className={`shrink-0 snap-start scroll-mx-5 ${widthBig} ${colHeight}`}>
            <SpotlightCard card={category.cards[0]} />
          </div>
        )}

        {/* Thin list column: every other medical Botox treatment */}
        {category.cards.length > 1 && (
          <div className={`shrink-0 snap-start scroll-mx-5 w-[58vw] sm:w-[300px] md:w-[330px] ${colHeight} rounded-[28px] bg-gradient-to-b from-[#171717] to-black border border-white/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] flex flex-col`}>
            <div className="px-6 pt-7 pb-5 border-b border-white/8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A050] mb-2">Therapeutic Botox</p>
              <h3 className="font-serif text-2xl text-white leading-tight tracking-tight">All medical areas</h3>
            </div>
            <ul className="flex-1 overflow-y-auto px-2 py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {category.cards.slice(1).map((c) => (
                <li key={c.title}>
                  <Link
                    to={c.href}
                    className="group flex items-start justify-between gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition"
                  >
                    <div className="min-w-0">
                      <p className="font-serif text-[15px] text-white leading-snug truncate">{c.title}</p>
                      <p className="text-[11px] text-white/55 mt-0.5 truncate">{c.tagline}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#C9A050] mt-1 shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          to={category.cta.href}
          className={`group shrink-0 snap-start scroll-mx-5 w-[58vw] sm:w-[300px] md:w-[330px] ${colHeight} rounded-[28px] border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur flex flex-col items-center justify-center text-center px-6 transition`}
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

/* ---------- Flawless Skin — alternating stack(2) / single columns ------ */

const FlawlessSkinSection = ({ category }: { category: Category }) => {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  const cols: { kind: "stack" | "big"; cards: SubCard[] }[] = [];
  let i = 0;
  let takeStack = true;
  while (i < category.cards.length) {
    if (takeStack && i + 1 < category.cards.length) {
      cols.push({ kind: "stack", cards: [category.cards[i], category.cards[i + 1]] });
      i += 2;
    } else {
      cols.push({ kind: "big", cards: [category.cards[i]] });
      i += 1;
    }
    takeStack = !takeStack;
  }

  const widthBig   = "w-[72vw] sm:w-[360px] md:w-[400px]";
  const widthStack = "w-[58vw] sm:w-[290px] md:w-[320px]";
  const colHeight  = "h-[58vh] min-h-[440px] max-h-[680px] sm:h-[72vh] sm:min-h-[540px] sm:max-h-[760px]";

  return (
    <motion.section
      id={category.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="py-12 sm:py-16 scroll-mt-20"
      aria-labelledby={`${category.id}-title`}
    >
      <div className="px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-7">
          <div className="min-w-0">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C9A050] mb-2">{category.eyebrow}</p>
            <h2 id={`${category.id}-title`} className="font-serif text-3xl sm:text-5xl text-white leading-tight tracking-tight">{category.title}</h2>
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
        className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-proximity scroll-smooth pb-4 px-5 sm:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {cols.map((col, idx) =>
          col.kind === "big" ? (
            <div key={idx} className={`shrink-0 snap-start scroll-mx-5 ${widthBig} ${colHeight}`}>
              <SpotlightCard card={col.cards[0]} />
            </div>
          ) : (
            <div key={idx} className={`shrink-0 snap-start scroll-mx-5 ${widthStack} ${colHeight} flex flex-col gap-4 sm:gap-5`}>
              {col.cards.map((c) => <TileCard key={c.title} card={c} />)}
            </div>
          )
        )}

        <Link
          to={category.cta.href}
          className={`group shrink-0 snap-start scroll-mx-5 ${widthStack} ${colHeight} rounded-[28px] border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur flex flex-col items-center justify-center text-center px-6 transition`}
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

/* ---------- Cosmetic Units feature (full-bleed editorial) -------------- */

const CosmeticUnitsFeature = () => (
  <section
    aria-labelledby="cosmetic-units-title"
    className="relative overflow-hidden bg-[#080808] text-white"
  >
    {/* Soft ambient glow */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,160,80,0.18),transparent_60%),radial-gradient(ellipse_at_80%_80%,rgba(201,160,80,0.10),transparent_55%)]"
    />
    <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      {/* Image */}
      <div className="lg:col-span-6 relative">
        <div className="relative rounded-[28px] p-[1.5px] overflow-hidden shadow-[0_50px_120px_-40px_rgba(201,160,80,0.45)]">
          <div
            aria-hidden
            className="absolute -inset-[60%] animate-[spin_12s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,rgba(201,160,80,0)_30%,#C9A050_48%,#F0D78C_50%,#C9A050_52%,rgba(201,160,80,0)_70%,transparent_100%)] opacity-70"
          />
          <div className="relative rounded-[26px] overflow-hidden bg-black">
            <img
              src={cosmeticUnitsImg}
              alt="Cosmetic units of the face — anatomical map of forehead, temple, cheek, jaw, lip and chin"
              loading="lazy"
              className="block w-full h-auto"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_60%,rgba(0,0,0,0.45)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_45%,rgba(0,0,0,0)_60%,rgba(201,160,80,0.08)_100%)]" />
          </div>
        </div>
        <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-[#C9A050]/80">
          The Cosmetic Units of the Face
        </p>
      </div>

      {/* Words of wisdom */}
      <div className="lg:col-span-6">
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-[#C9A050] mb-4">
          Anatomy · Words of Wisdom
        </p>
        <h2
          id="cosmetic-units-title"
          className="font-serif text-3xl sm:text-5xl leading-[1.05] tracking-tight"
        >
          One face,
          <br />
          <span className="italic text-[#C9A050]">many quiet rooms.</span>
        </h2>

        <div className="mt-8 space-y-5 text-white/75 text-base sm:text-lg leading-relaxed max-w-xl">
          <p>
            The face is not a single canvas — it is a mosaic of <em>cosmetic units</em>:
            forehead, temple, cheek, mid-face, jaw, lip, chin. In youth, light flows
            from one into the next without interruption.
          </p>
          <p>
            With time, fat pads descend, ligaments tighten, bone resorbs. The units
            begin to <span className="text-white">compartmentalise</span> — small valleys
            cast shadows, edges sharpen, the line breaks.
          </p>
          <p className="text-white">
            Doctor-led aesthetics restores the bridge between units — re-establishing
            flow, never adding bulk. Volume, returned. Architecture, intact.
          </p>
        </div>

        {/* Three pillars */}
        <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-xl">
          {[
            { k: "Map", v: "Unit by unit" },
            { k: "Bridge", v: "Flow restored" },
            { k: "Quiet", v: "Never bulk" },
          ].map((p) => (
            <div
              key={p.k}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-4 py-4"
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A050]">{p.k}</p>
              <p className="mt-1 text-sm text-white/85">{p.v}</p>
            </div>
          ))}
        </div>

        <Link
          to="/treatments/dermal-fillers/"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#C9A050] hover:text-[#F0D78C] transition-colors"
        >
          Discover the architectural approach <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);



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
        <Home2Header />

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

        {/* Quick Links moved to bottom of page */}

        {/* Category sections */}
        <div className="border-t border-white/5 mt-8">
          {categories.map((cat, i) => (
            <div key={cat.id} className="border-b border-white/5">
              {cat.id === "botox-aesthetic" ? (
                <BotoxAestheticSection category={cat} />
              ) : cat.id === "botox-medical" ? (
                <MedicalBotoxSection category={cat} />
              ) : cat.id === "flawless-skin" ? (
                <FlawlessSkinSection category={cat} />
              ) : (
                <Row category={cat} index={i} />
              )}
              {cat.id === "fillers-anti-ageing" && <CosmeticUnitsFeature />}
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

        {/* Quick Links — pill nav at the bottom for fast jumping back up */}
        <section aria-label="Quick links" className="px-5 sm:px-8 max-w-7xl mx-auto pb-16 border-t border-white/5 pt-12">
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
