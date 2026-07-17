import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import { ChevronRight, ChevronLeft, ArrowUpRight, Sparkles, RotateCw, ScanFace } from "lucide-react";
import { Button } from "@/components/ui/button";
import Home2Header from "@/components/home2/Home2Header";
import DiscretionBadge from "@/components/DiscretionBadge";
import { lazy, Suspense } from "react";
const WebsiteKnowledgeInitializer = lazy(() => import("@/components/WebsiteKnowledgeInitializer"));
import HADropletFace from "@/components/home3/HADropletFace";
import { renderGlossaryText } from "@/components/home3/GlossaryTerm";
import NewsWidget from "@/components/home/NewsWidget";
const ACUITY_URL = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";
import botox3AreasImg from "@/assets/home3-botox-3areas.jpg";
import botoxLipFlipImg from "@/assets/home3-botox-lip-flip.jpg";
import botoxBrowLiftImg from "@/assets/home3-botox-brow-lift.jpg";
import botoxBunnyImg from "@/assets/home3-botox-bunny-lines.jpg";
import botoxNefertitiImg from "@/assets/home3-botox-nefertiti.jpg";
import nefertitiDesignImg from "@/assets/home3-nefertiti-design.jpg";
import pdoThreadsDesignImg from "@/assets/home3-pdo-threads-design.jpg";
import botoxGummyImg from "@/assets/home3-botox-gummy-smile.jpg";
import botoxMentalisImg from "@/assets/home3-botox-mentalis.jpg";
import botoxMarionetteImg from "@/assets/home3-botox-marionette.jpg";
import botoxNasalImg from "@/assets/home3-botox-nasal-flaring.jpg";
import medMasseterImg from "@/assets/home3-medical-masseter.jpg";
import masseterBeforeAfterImg from "@/assets/before-after/masseter-botox-female-asian.jpg";

import calfSlimmingBaImg from "@/assets/before-after/calf-slimming-ba.jpg";
import medBruxismImg from "@/assets/home3-medical-bruxism.jpg";
import medMigraineImg from "@/assets/home3-medical-migraine.jpg";
import medHyperhidrosisImg from "@/assets/home3-medical-hyperhidrosis.jpg";
import medTrapeziusImg from "@/assets/home3-medical-trapezius.jpg";
import medCalfImg from "@/assets/home3-medical-calf.jpg";
import calfSlimmingCardImg from "@/assets/home3-calf-slimming-card.jpg";
import hyperhidrosisCardImg from "@/assets/home3-hyperhidrosis-card.jpg";
import hyperhidrosisCardBackImg from "@/assets/home3-hyperhidrosis-card-back.jpg";
import haMakeoverBaImg from "@/assets/home3-ha-makeover-front.png";
import liquidFaceliftBdaImg from "@/assets/before-after/liquid-facelift-before-during-after.jpg";
import chinFillerBaImg from "@/assets/home3-chin-filler-ba.jpg";
import artChinImg from "@/assets/home3-art-chin.jpg";
import artNoseImg from "@/assets/home3-art-nose.jpg";
import artJawlineImg from "@/assets/home3-art-jawline.jpg";
import artNonSurgicalFaceliftImg from "@/assets/home3-art-non-surgical-facelift.jpg";
import cheekFillerBaImg from "@/assets/home3-cheek-filler-ba.jpg";
import jowlJawlineBaImg from "@/assets/home3-jowl-jawline-ba.jpg";
import tearTroughBaImg from "@/assets/home3-tear-trough-ba.jpg";
import botoxFrownBaImg from "@/assets/home3-botox-frown-ba.jpg";
import botoxForeheadBaImg from "@/assets/home3-botox-forehead-ba.jpg";
import templeFillerBaImg from "@/assets/home3-temple-filler-ba.jpg";
import lipFillerBaImg from "@/assets/home3-lip-filler-ba.jpg";
import lipAnatomyImg from "@/assets/home3-lip-gallery.jpg";
import frontHaImg from "@/assets/home3-front-ha-makeover.jpg";
import frontCheekImg from "@/assets/home3-front-cheek.jpg";
import frontJawImg from "@/assets/home3-front-jaw.jpg";
import frontUndereyeImg from "@/assets/home3-front-undereye.jpg";
import frontTempleImg from "@/assets/home3-front-temple.jpg";
import frontLipsImg from "@/assets/home3-front-lips.jpg";
import teoxaneAwardImg from "@/assets/teoxane-award-cosmedocs.png";
import cosmeticUnitsImg from "@/assets/home3-cosmetic-units-gold.jpg";
import noseBaImg from "@/assets/home3-nose-ba.jpg";
import jawlineBaImg from "@/assets/home3-jawline-ba.jpg";
import endolaserBaImg from "@/assets/home3-endolaser-diagram.jpg";
import endolaserFaceGoldImg from "@/assets/home3-endolaser-face-gold.jpg";
import endolaserBodyGoldImg from "@/assets/home3-endolaser-body-gold.jpg";
import pdoThreadsBaImg from "@/assets/pdo-thread-lift-before-after.jpg";
import pdoThreadsFlipImg from "@/assets/before-after/pdo-thread-lift-ba.jpg";
import nefertitiBaImg from "@/assets/before-after/nefertiti-lift-ba.jpg";
import botoxFineNeedleImg from "@/assets/botox-fine-needle-card.jpg";
import brotoxImg from "@/assets/brotox-mens-botox.jpg";
import brotoxBA from "@/assets/brotox-ba-forehead-frown.jpg";
import heroHarleyStreet from "@/assets/hero/harley-street-cosmedocs.jpg";
import heroMaleTreatment from "@/assets/hero/cosmedocs-male-treatment.jpg";
import DrAhmedQuote from "@/components/DrAhmedQuote";
import { cdnSrc, cdnSrcSet } from "@/lib/cdnImage";

/* -------------------------------------------------------------------------- */
/*  HOME 3 ,  iOS / Apple.co.uk-style category grid                          */
/* -------------------------------------------------------------------------- */

type SubCard = {
  title: string;
  tagline: string;
  href: string;
  bg: string;
  ink?: string;
  badge?: string;
  image?: string;
  frontImage?: string;
  /** How the front image should fit. Defaults to 'contain' (preserves ratio); use 'cover' for editorial face crops. */
  frontImageFit?: "cover" | "contain";
  /** Multiple front images rendered as a collage, ratios preserved. Overrides single front image. */
  frontImages?: { src: string; alt?: string }[];
  flip?: { back: React.ReactNode; imagePosition?: "top" | "bottom"; image?: string; largeText?: boolean; eyebrow?: string; bullets?: React.ReactNode[]; slides?: { eyebrow?: string; title?: string; body: string }[] };
  /** When true, render `image` (or `flip.image`) as the card's front photo, suppressing the SVG mosaic. */
  imageOnFront?: boolean;
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

/* ---------- Aesthetic Botox, full treatment list ----------------------- */
const botoxAesthetic: SubCard[] = [
  {
    title: "BroTox",
    tagline: "Men-tox · The male face, treated as male",
    href: "/treatments/brotox/",
    bg: "bg-gradient-to-br from-[#0a0a0a] via-[#15110a] to-[#1f1810]",
    image: brotoxImg,
    badge: "For Men",
    flip: {
      eyebrow: "Why men need a different Botox",
      back: "Male muscles are bigger, denser and pull harder. Wrong dose, wrong placement and the brow drops, the face feminises, the look is flat and frozen — the giveaway every man wants to avoid. Our lead doctors are male, have treated male faces for 17+ years, and dose for male anatomy: stronger units where the muscle is, lighter where it shouldn't lift, brow kept low and masculine, expression preserved. Refreshed, never feminised.",
      largeText: true,
      bullets: [
        "Male muscle = up to 2× stronger pull",
        "Higher units, mapped to male anatomy",
        "Brow kept low — never feminised",
        "Forehead, glabella, crow's feet · tailored",
        "17+ years treating male faces",
      ],
      image: brotoxBA,
      imagePosition: "top",
    },
  },
  {
    title: "The Finest Needle",
    tagline: "We don't cut corners — only needle gauge. 32G micro-needles, barely a whisper on the skin.",
    href: "/treatments/botox/",
    bg: "bg-black",
    image: botoxFineNeedleImg,
    badge: "Almost Painless",
  },
  {
    title: "1, 2 or 3 Areas Botox",
    tagline: "Forehead · Frown · Crow's feet, tailored to your face.",
    href: "/treatments/botox/",
    bg: "bg-black",
    image: botox3AreasImg,
    badge: "Signature",
    flipImages: [
      { src: botoxFrownBaImg, alt: "Frown line softening, before and after, Cosmedocs" },
      { src: botoxForeheadBaImg, alt: "Forehead lines smoothed, before and after, Cosmedocs" },
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

/* ---------- Shared: Non-Surgical Facelift journey card ----------------- */
/* One card, multiple rows. Front tells the patient journey (relax → restore → tighten); back routes to each component treatment. */
const nonSurgicalFaceliftCard: SubCard = {
  title: "Non-Surgical Facelift",
  tagline: "Relax · Restore · Tighten — your three-step lift",
  href: "/treatments/non-surgical-facelift/",
  bg: "bg-gradient-to-br from-[#1a1410] via-[#2a1d10] to-[#3a2810]",
  badge: "Signature Journey",
  image: artNonSurgicalFaceliftImg,
  frontImage: artNonSurgicalFaceliftImg,
  frontImageFit: "cover",
  flip: {
    eyebrow: "The Journey · Mild to lifted",
    largeText: true,
    back: "Rather than choosing one treatment, we sequence three. Botox Nefertiti relaxes the muscles pulling the lower face down. Liquid Facelift restores the volume that holds the architecture up — the keystone of the lift. Endolaser or PDO threads tighten the skin from within. Doctor-led, doctor-sequenced, in your time.",
    bullets: [
      <Link key="nef" to="/treatments/botox/" className="text-[#C9A050] underline-offset-4 hover:underline">1 · Relax — Nefertiti Botox →</Link>,
      <Link key="ha" to="/treatments/ha-makeover/" className="text-[#C9A050] underline-offset-4 hover:underline">2 · Restore volume — Liquid Facelift →</Link>,
      <Link key="endo" to="/treatments/endolaser/" className="text-[#C9A050] underline-offset-4 hover:underline">3 · Tighten — Endolaser (Laser Fibre Lift) →</Link>,
      <Link key="pdo" to="/treatments/pdo-threads/" className="text-[#C9A050] underline-offset-4 hover:underline">3 · Tighten — PDO Thread Lift →</Link>,
      <Link key="brow" to="/treatments/eyebrow-lift-endolaser/" className="text-[#C9A050] underline-offset-4 hover:underline">+ Endolaser Brow Lift (non-surgical) →</Link>,
      <Link key="hub" to="/treatments/non-surgical-facelift/" className="text-white/80 underline-offset-4 hover:underline">Mini Facelifts hub →</Link>,
    ],
  },
};

const categories: Category[] = [
  {
    id: "flawless-skin",
    eyebrow: "Flawless Skin Concepts",
    title: "Skin, undone.",
    copy: "Resurfacing, regeneration and barrier care, the medical-aesthetic foundation behind a lit-from-within finish.",
    cta: { label: "Skin Rejuvenation hub", href: "/treatments/skin-rejuvenation/" },
    cards: [
      { title: "Polynucleotides", tagline: "DNA-level repair", href: "/treatments/polynucleotides/", bg: "bg-gradient-to-br from-rose-200 to-pink-400", ink: "text-zinc-900", badge: "Regenerative" },
      { title: "Profhilo", tagline: "Bio-remodelling HA", href: "/treatments/profhilo/", bg: "bg-gradient-to-br from-sky-100 to-sky-300", ink: "text-zinc-900" },
      { title: "Exosomes", tagline: "Next-gen messengers", href: "/treatments/exosomes/", bg: "bg-gradient-to-br from-neutral-200 to-neutral-400", ink: "text-zinc-900" },
      { title: "PRP", tagline: "Your own plasma", href: "/treatments/prp/", bg: "bg-gradient-to-br from-[#C9A050] to-[#7a5e25]" },
      { title: "Chemical Peels", tagline: "Glycolic · TCA · Salicylic", href: "/treatments/chemical-peels/", bg: "bg-gradient-to-br from-amber-100 to-orange-300", ink: "text-zinc-900" },
      { title: "PP Glow", tagline: "Polynucleotides + Peel — 3 sessions for £1,250. Normally over £1,500. Think of your skin like a wall: the peel strips away old paint, then polynucleotides improve the plaster so the finish looks its best. Limited time.", href: "/treatments/skin-rejuvenation/", bg: "bg-gradient-to-br from-[#C9A050] via-[#B8924A] to-[#2a1d10]", badge: "Special Offer" },
      { title: "ScarTox — Scar Repair", tagline: "Tummy tuck · C-section · mommy makeover · breast scars. Multi-modality protocol: ScarTox (botulinum), RF microneedling and polynucleotides — softening, flattening and fading in one clinical pathway.", href: "/treatments/scartox/", bg: "bg-gradient-to-br from-[#1a1a1a] via-[#2a1d10] to-[#3a2d10]", badge: "New" },
      { title: "Microneedling", tagline: "Collagen induction therapy", href: "/treatments/microneedling/", bg: "bg-gradient-to-br from-stone-700 to-stone-900" },
      { title: "HydraFacial", tagline: "Cleanse · extract · hydrate", href: "/treatments/hydrafacial/", bg: "bg-gradient-to-br from-cyan-100 to-cyan-300", ink: "text-zinc-900" },
    ],
  },
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
    copy: "Therapeutic Botox for muscle-driven conditions, grinding, jaw ache, migraine, sweating. Doctor-prescribed.",
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
          image: masseterBeforeAfterImg,
          back: "Doctor-led masseter dosing softens a square jaw into an oval silhouette, and quietly resolves the night grinding behind it. A dual-intent treatment: cosmetic refinement above, medical relief below.",
        },
      },
      { title: "Bruxism Botox", tagline: "Night clenching, treated", href: "/treatments/bruxism-botox/", bg: "bg-[#0d1218]", image: medBruxismImg },
      { title: "Migraine Botox", tagline: "Chronic migraine protocol", href: "/treatments/migraine-botox/", bg: "bg-[#0d1218]", image: medMigraineImg },
      {
        title: "Hyperhidrosis",
        tagline: "Underarm sweat control",
        href: "/medical/botox-for-hyperhidrosis/",
        bg: "bg-[#0d1218]",
        image: hyperhidrosisCardImg,
        badge: "Most asked",
        flip: {
          back: "Targeted micro-doses neutralise the sweat glands of the underarm — silk shirts, summer suits and stage lights, without the second-guessing. Results settle in under a week and hold for 6–9 months.",
          imagePosition: "top",
          image: hyperhidrosisCardBackImg,
        },
      },
      { title: "Trapezius Botox", tagline: "Shoulder slimming · pain", href: "/treatments/trap-botox/", bg: "bg-[#0d1218]", image: medTrapeziusImg },
      {
        title: "Calf Slimming",
        tagline: "Athletic-leg refinement · since 2010",
        href: "/treatments/calf-slimming-botox/",
        bg: "bg-[#0d1218]",
        image: calfSlimmingCardImg,
        badge: "Since 2010",
        flip: {
          back: "One of the first UK clinics to offer non-surgical calf slimming — refined since 2010. Partial-dose Botox into the gastrocnemius softens athletic bulk into a longer, leaner silhouette. Soleus untouched, function preserved. Results emerge over 6–12 weeks.",
          imagePosition: "top",
          image: calfSlimmingBaImg,
        },
      },
    ],
  },
  {
    id: "fillers-anti-ageing",
    eyebrow: "Dermal Fillers · Anti-ageing & Facial Contouring",
    title: "Volume, returned.",
    copy: "Where the face has lost structure — cheeks, jowls, mid-face, chin, nose, jawline — hyaluronic acid restores it. Quietly. Architecturally.",
    cta: { label: "Mini Facelifts hub", href: "/treatments/non-surgical-facelift/" },
    cards: [
      {
        title: "Liquid Facelift",
        tagline: "Full-face hyaluronic acid rejuvenation",
        href: "/treatments/ha-makeover/",
        bg: "bg-gradient-to-br from-[#1a1a1a] via-[#2a2010] to-[#3a2d10]",
        badge: "Signature",
        image: liquidFaceliftBdaImg,
        frontImage: frontHaImg,
        frontImageFit: "cover",
        flip: {
          back: "When ageing fragments the face, the cosmetic units stop reading as one. The Liquid Facelift gently re-bridges every unit — forehead, temple, cheek, mid-face, jaw, chin, lip — so the face flows again as a single, continuous surface.",
          image: liquidFaceliftBdaImg,
          largeText: true,
          eyebrow: "Continuity · The aim",
          slides: [
            { eyebrow: "Step 1 · Diagnosis", title: "Read the whole face", body: "We map the cosmetic units — forehead, temple, cheek, mid-face, jaw, chin, lip — and identify where volume loss and tone shifts have fragmented continuity. The face is read as one architecture, never one wrinkle at a time." },
            { eyebrow: "Step 2 · Architecture", title: "Rebuild from the bone", body: "Deep, on-periosteum placement restores the structural scaffold first — temple, cheek and jaw — so the mid-face is lifted from above. Bone-deep support, never superficial bulk." },
            { eyebrow: "Step 3 · Continuity", title: "Re-bridge every unit", body: "Each cosmetic unit is gently re-bridged so the face reads as one continuous surface again. Tear trough into cheek, cheek into jaw, jaw into chin — the seams disappear." },
            { eyebrow: "Step 4 · The result", title: "Reads as you, only rested", body: "A single signature visit, doctor-led, millimetre by millimetre. Volume returned, architecture intact. Invisible art — bold, natural, always your way." },
          ],
          bullets: [
            "Youth = one continuous face; age fragments it",
            "Re-bridge every unit in a single signature visit",
            "Replace what time took, never add bulk",
            "Doctor-led, millimetre by millimetre",
            "Reads as you, only rested",
          ],
        },
      },
      {
        title: "Cheek Filler",
        tagline: "The keystone unit, re-bridged",
        href: "/treatments/cheek-filler/",
        bg: "bg-gradient-to-br from-[#1a1a1a] via-[#2a1810] to-[#3a2010]",
        image: cheekFillerBaImg,
        frontImage: frontCheekImg,
        frontImageFit: "cover",
        badge: "Mid-face",
        flip: {
          back: "The cheek is the keystone unit — when it deflates, the mid-face collapses and the units below lose their bridge. Restoring its forward-projecting silhouette lifts the lower face from above and re-establishes continuity through the centre of the face.",
          image: cheekFillerBaImg,
          largeText: true,
          eyebrow: "Continuity · The aim",
          bullets: [
            "Youth projects forward; age sinks the mid-face",
            "Rebuild the keystone of the cosmetic units",
            "Lift the lower face from above, not below",
            "Bone-deep, on-periosteum placement",
            "Restored projection, never added bulk",
          ],
        },
      },
      {
        title: "Jowl & Jawline",
        tagline: "The lower border, redrawn",
        href: "/treatments/jawline-filler/",
        bg: "bg-gradient-to-br from-[#0e0e0e] via-[#1a1410] to-[#2a1c10]",
        badge: "Definition",
        image: jowlJawlineBaImg,
        frontImage: frontJawImg,
        frontImageFit: "cover",
        flip: {
          back: "When the mandibular border softens, the jaw unit blurs into the neck and the lower face loses its frame. Doctor-led contouring re-draws the chin-to-ear line, lifts the jowl and restores continuity between the cheek, jaw and chin units.",
          image: jowlJawlineBaImg,
          largeText: true,
          eyebrow: "Continuity · The aim",
          bullets: [
            "Youth has a clean lower border; age blurs it",
            "Lift and soften the jowl",
            "Sharpen the gonial angle and re-frame the jaw",
            "Re-bridge the cheek-to-jaw-to-chin flow",
            "Bone-deep placement, never bulk",
          ],
        },
      },
      {
        title: "Tear Trough",
        tagline: "The eye unit, re-flowed into the cheek",
        href: "/treatments/tear-trough-filler/",
        bg: "bg-gradient-to-br from-[#1a1a1a] via-[#2a1810] to-[#3a2010]",
        badge: "Under-eye",
        image: tearTroughBaImg,
        frontImage: frontUndereyeImg,
        frontImageFit: "cover",
        flip: {
          back: "In youth, the eye unit transitions seamlessly into the cheek. Volume loss breaks that bridge into a shadow — the tear-trough hollow. Conservative on-bone correction softens the step so the eye reads rested, not treated.",
          image: tearTroughBaImg,
          largeText: true,
          eyebrow: "Continuity · The aim",
          bullets: [
            "Youth = a smooth eye-to-cheek transition",
            "Soften the shadow that breaks the bridge",
            "Restore a rested, awake under-eye",
            "On-periosteum, never superficial",
            "Reads as sleep, not filler",
          ],
        },
      },
      {
        title: "Temple Filler",
        tagline: "The upper-third scaffold, restored",
        href: "/treatments/temple-filler/",
        bg: "bg-gradient-to-br from-[#0e0e0e] via-[#1a1410] to-[#2a1c10]",
        image: templeFillerBaImg,
        frontImage: frontTempleImg,
        frontImageFit: "cover",
        flip: {
          back: "When the temple hollows, the upper-third unit collapses and the brow, cheek and lateral face lose their scaffold. Re-establishing temple volume rebuilds the bridge between forehead, brow and mid-face — continuity restored from the top down.",
          image: templeFillerBaImg,
          largeText: true,
          eyebrow: "Continuity · The aim",
          bullets: [
            "Youth = a full, continuous upper-third",
            "Rebuild the scaffold the brow sits on",
            "Re-bridge forehead, temple and cheek units",
            "Deep, on-bone placement",
            "Structured, never filled",
          ],
        },
      },
      {
        title: "Lip Filler",
        tagline: "The lip unit, in your control",
        href: "/treatments/lip-fillers/",
        bg: "bg-gradient-to-br from-[#1a0e10] via-[#2a1418] to-[#3a1c20]",
        image: lipAnatomyImg,
        frontImage: frontLipsImg,
        frontImageFit: "cover",
        flip: {
          back: "Lips lose volume and definition as the perioral unit ages, breaking the flow between nose, lip and chin. Doctor-led artistry replaces what time has taken — or builds the lip you've always wanted — restoring continuity through the lower face.",
          image: lipAnatomyImg,
          largeText: true,
          eyebrow: "Continuity · The aim",
          bullets: [
            "Youth = full, defined lips; age flattens them",
            "Replace volume lost, or build size and shape",
            "Re-bridge the nose-lip-chin flow",
            "Mapped to Cupid's bow, vermilion, tubercles",
            "Natural or bold — all in your control",
          ],
        },
      },
      {
        title: "Chin Filler",
        tagline: "Profile-balancing dose",
        href: "/treatments/chin-filler/",
        bg: "bg-gradient-to-br from-[#1a1410] via-[#2a1d10] to-[#3a2810]",
        image: chinFillerBaImg,
        frontImage: artChinImg,
        frontImageFit: "cover",
        badge: "Profile",
        flip: {
          back: "A measured chin projection that re-balances the lower face, softening a recessive jaw, refining the side profile and lifting the chin-neck line. Doctor-led, millimetre dosing for a result that reads as bone, not filler.",
          imagePosition: "top",
          image: chinFillerBaImg,
          largeText: true,
        },
      },
      {
        title: "Non-Surgical Nose",
        tagline: "Liquid rhinoplasty",
        href: "/treatments/nose-filler/",
        bg: "bg-gradient-to-br from-[#0e0e0e] via-[#1a1410] to-[#2a1c10]",
        frontImage: artNoseImg,
        frontImageFit: "cover",
        flip: {
          back: "Doctor-led liquid rhinoplasty, straightening the bridge, refining the tip, rebalancing the profile in minutes, no surgery. This patient came to us after a surgical rhinoplasty had left an irregularity; we corrected it with millimetre filler placement.",
          imagePosition: "top",
          image: noseBaImg,
          largeText: true,
        },
      },
      {
        title: "Jawline Definition",
        tagline: "Filler & PCL threads",
        href: "/treatments/jawline-filler/",
        bg: "bg-gradient-to-br from-[#1a1a1a] to-[#3a2f10]",
        frontImage: artJawlineImg,
        frontImageFit: "cover",
        flip: {
          back: "Doctor-led mandibular contouring, sharpening the gonial angle, lengthening the ramus and lifting the lower face. Filler on bone for structure, PCL threads for soft-tissue support. Definition that reads as bone, never bulk.",
          imagePosition: "top",
          image: jawlineBaImg,
          largeText: true,
        },
      },
      {
        title: "Swiss science. French artistry. American innovation.",
        tagline: "Pedigree · Product Story",
        href: "/treatments/dermal-fillers/",
        bg: "bg-gradient-to-b from-[#F0D78C] via-[#E8C97A] to-[#C9A050]",
        ink: "text-zinc-900",
        badge: "Pedigree",
        flip: {
          eyebrow: "Pedigree · Product Story",
          largeText: true,
          back: "We use only top-tier hyaluronic acid from regulated Swiss, French and US laboratories — Teoxane, Juvéderm, Restylane, Belotero, Filorga and Vivacy. Cosmedocs was awarded Teoxane's Outstanding Clinic Award (Q2 2017) for safety, results and ongoing training.",
          image: teoxaneAwardImg,
          bullets: [
            "🇨🇭 Teoxane · Swiss",
            "🇨🇭 Restylane · Swiss",
            "🇫🇷 Filorga · French",
            "🇫🇷 Vivacy · French",
            "🇺🇸 Juvéderm · USA",
            "🇩🇪 Belotero · German",
          ],
        },
      },
      nonSurgicalFaceliftCard,
    ],
  },
  {
    id: "facial-contouring",
    eyebrow: "Non-Surgical Facelift & Body Contouring",
    title: "Lift. Contour. Redefine.",
    copy: "Reshaping, not refilling. Lift the face from within and refine the body with the Endo family — no surgery, no scars.",
    cta: { label: "Mini Facelifts hub", href: "/treatments/non-surgical-facelift/" },
    cards: [
      nonSurgicalFaceliftCard,
      {
        title: "Nefertiti Lift",
        tagline: "Botox neck-jaw lift",
        href: "/treatments/nefertiti-lift/",
        bg: "bg-gradient-to-br from-[#0e0e0e] via-[#1a1410] to-[#2a1c10]",
        image: nefertitiDesignImg,
        frontImage: nefertitiDesignImg,
        frontImageFit: "cover",
        badge: "Lift",
        flip: {
          back: "Targeted micro-doses along the platysma release the downward pull on the lower face. The result is a softer neck-jaw line and a quietly lifted lower third — no scalpel, no downtime.",
          imagePosition: "top",
          image: nefertitiBaImg,
        },
      },
      {
        title: "PDO Threads",
        tagline: "Soft-tissue lift · scaffold",
        href: "/treatments/pdo-threads/",
        bg: "bg-gradient-to-br from-[#1a1410] via-[#2a1d10] to-[#3a2810]",
        image: pdoThreadsDesignImg,
        frontImage: pdoThreadsDesignImg,
        frontImageFit: "cover",
        badge: "Scaffold",
        flip: {
          back: "Absorbable PDO threads create an internal scaffold that lifts the cheek, jaw and brow tissues — and stimulates fresh collagen as they dissolve. A doctor-led mid-step between filler and surgery.",
          imagePosition: "top",
          image: pdoThreadsFlipImg,
        },
      },
      {
        title: "Liquid Facelift",
        tagline: "Lift the lower face from above",
        href: "/treatments/ha-makeover/",
        bg: "bg-gradient-to-br from-[#1a1a1a] via-[#2a2010] to-[#3a2d10]",
        badge: "Signature",
        image: liquidFaceliftBdaImg,
        frontImage: frontHaImg,
        frontImageFit: "cover",
        flip: {
          back: "Bone-deep hyaluronic acid placement at temple, cheek and jaw rebuilds the structural scaffold of the face — so the mid-face lifts from above, not below. The keystone of the non-surgical facelift.",
          imagePosition: "top",
          image: liquidFaceliftBdaImg,
        },
      },
      {
        title: "Endolaser Fibre Lift",
        tagline: "Dual-wavelength intra-tissue laser",
        href: "/treatments/endolaser/",
        bg: "bg-gradient-to-br from-black via-[#1a140a] to-black",
        image: endolaserFaceGoldImg,
        frontImage: endolaserFaceGoldImg,
        frontImageFit: "cover",
        badge: "Now featured",
        flip: {
          back: "The only UKCA & CE-marked dual-wavelength Endolaser at Harley Street, performed by the Lead Trainer for this device at the Harley Street Institute. Lifts, tightens and refines from inside the tissue — single session, 18–24 month longevity.",
          imagePosition: "top",
          image: endolaserFaceGoldImg,
          largeText: true,
        },
      },
      {
        title: "Endolaser Body",
        tagline: "Fat reduction & skin tightening",
        href: "/treatments/endolaser-body/",
        bg: "bg-gradient-to-br from-[#0a0a0a] via-[#15110a] to-black",
        image: endolaserBodyGoldImg,
        frontImage: endolaserBodyGoldImg,
        frontImageFit: "cover",
        badge: "New",
        flip: {
          back: "The same dual-wavelength fibre, applied to the body — sub-mental, flanks, inner thigh, knees, bra-line. The 1470 nm wavelength emulsifies stubborn adipose pockets while the 980 nm contracts the overlying skin. Doctor-led, single-session, walk-in walk-out.",
          imagePosition: "top",
          image: endolaserBodyGoldImg,
          largeText: true,
        },
      },
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

/* ---------- Subtle watermark motif per treatment ---------------------- */
const CardWatermark = ({ title, dark }: { title: string; dark: boolean }) => {
  const t = title.toLowerCase();
  const stroke = dark ? "rgba(255,255,255,0.22)" : "rgba(20,20,20,0.22)";
  const accent = dark ? "rgba(201,160,80,0.55)" : "rgba(201,160,80,0.45)";
  const common = {
    fill: "none" as const,
    stroke,
    strokeWidth: 1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  type Motif = "dna" | "molecule" | "needle" | "collagen" | "droplet" | "wave" | "lip" | "face" | "hex" | "thread" | "sun" | "muscle";
  const pick = (): Motif => {
    if (/polynucleotide|dna|exosome|prp|stem/.test(t)) return "dna";
    if (/profhilo|sunekos|jalupro|lumi|skin booster|hydrat|mesotherap/.test(t)) return "molecule";
    if (/microneedl|mesotherapy|injection|filler|botox|anti-wrinkle|toxin/.test(t)) return "needle";
    if (/collagen|rejuven|peel|glow|facial|hydrafacial/.test(t)) return "collagen";
    if (/lip/.test(t)) return "lip";
    if (/laser|pico|ipl|endolaser|hair removal/.test(t)) return "wave";
    if (/thread|pdo|pcl|nefertiti|jowl|jawline/.test(t)) return "thread";
    if (/cheek|chin|temple|tear|nose|brow|frown|forehead|bunny|gummy|marionette|mentalis/.test(t)) return "face";
    if (/migraine|bruxism|masseter|trapezius|calf|hyperhidrosis|nasal|medical/.test(t)) return "muscle";
    if (/serum|vitamin|retinol|cream|drop/.test(t)) return "droplet";
    if (/sun|spf|pigment|melasma/.test(t)) return "sun";
    return "hex";
  };

  const motif = pick();

  const motifs: Record<Motif, JSX.Element> = {
    dna: (
      <g {...common}>
        {[0, 1, 2, 3, 4].map((i) => {
          const y = 30 + i * 36;
          return (
            <g key={i}>
              <path d={`M30 ${y} Q90 ${y - 20} 150 ${y} T270 ${y}`} />
              <path d={`M30 ${y + 12} Q90 ${y + 32} 150 ${y + 12} T270 ${y + 12}`} />
              {[0, 1, 2, 3, 4, 5].map((j) => (
                <line key={j} x1={40 + j * 40} y1={y + 2} x2={40 + j * 40} y2={y + 10} stroke={accent} />
              ))}
            </g>
          );
        })}
      </g>
    ),
    molecule: (
      <g {...common}>
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 8 }).map((_, c) => {
            const x = 30 + c * 35;
            const y = 35 + r * 35 + (c % 2 ? 17 : 0);
            return (
              <g key={`${r}-${c}`}>
                <circle cx={x} cy={y} r={2.6} fill={c % 5 === 0 ? accent : stroke} stroke="none" />
                {c < 7 && <line x1={x} y1={y} x2={x + 35} y2={y + ((c + 1) % 2 ? 17 : -17)} />}
                {r < 5 && <line x1={x} y1={y} x2={x} y2={y + 35} />}
              </g>
            );
          })
        )}
      </g>
    ),
    needle: (
      <g {...common}>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const x = 30 + i * 45;
          return (
            <g key={i} transform={`rotate(${-18 + i * 6} ${x} 130) translate(${x} 30)`}>
              <line x1="0" y1="0" x2="0" y2="160" />
              <path d="M-3 0 L0 -8 L3 0 Z" fill={accent} stroke="none" />
              <circle cx="0" cy="170" r="2" fill={accent} stroke="none" />
            </g>
          );
        })}
      </g>
    ),
    collagen: (
      <g {...common}>
        {Array.from({ length: 14 }).map((_, i) => (
          <path key={`a${i}`} d={`M0 ${20 + i * 15} Q75 ${10 + i * 15} 150 ${20 + i * 15} T300 ${20 + i * 15}`} />
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <path key={`b${i}`} d={`M0 ${20 + i * 15} Q75 ${30 + i * 15} 150 ${20 + i * 15} T300 ${20 + i * 15}`} stroke={accent} opacity="0.5" />
        ))}
      </g>
    ),
    droplet: (
      <g {...common}>
        {Array.from({ length: 18 }).map((_, i) => {
          const x = 25 + (i % 6) * 45;
          const y = 30 + Math.floor(i / 6) * 60;
          return <path key={i} d={`M${x} ${y} C${x + 12} ${y + 14} ${x + 8} ${y + 28} ${x} ${y + 28} C${x - 8} ${y + 28} ${x - 12} ${y + 14} ${x} ${y}Z`} stroke={i % 4 === 0 ? accent : stroke} />;
        })}
      </g>
    ),
    wave: (
      <g {...common}>
        {[0, 1, 2].map((c) => (
          <g key={c} transform={`translate(${60 + c * 100} 130)`}>
            {[12, 26, 42, 60, 80].map((r, i) => (
              <circle key={r} cx="0" cy="0" r={r} stroke={i === 2 ? accent : stroke} />
            ))}
          </g>
        ))}
      </g>
    ),
    lip: (
      <g {...common}>
        {Array.from({ length: 6 }).map((_, i) => {
          const y = 40 + i * 38;
          return (
            <g key={i}>
              <path d={`M30 ${y} Q90 ${y - 18} 150 ${y} T270 ${y}`} />
              <path d={`M30 ${y} Q90 ${y + 22} 150 ${y} T270 ${y}`} stroke={i % 2 ? accent : stroke} />
            </g>
          );
        })}
      </g>
    ),
    face: (
      <g {...common}>
        {[0, 1, 2].map((col) => (
          <g key={col} transform={`translate(${60 + col * 90} 130)`}>
            {[18, 30, 44, 60, 78].map((r, i) => (
              <ellipse key={r} cx="0" cy="0" rx={r * 0.78} ry={r} stroke={i === 2 ? accent : stroke} />
            ))}
          </g>
        ))}
      </g>
    ),
    hex: (
      <g {...common}>
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 6 }).map((_, c) => {
            const x = 35 + c * 50 + (r % 2 ? 25 : 0);
            const y = 40 + r * 44;
            const pts = Array.from({ length: 6 })
              .map((_, k) => {
                const a = (Math.PI / 3) * k - Math.PI / 6;
                return `${x + Math.cos(a) * 22},${y + Math.sin(a) * 22}`;
              })
              .join(" ");
            return <polygon key={`${r}-${c}`} points={pts} stroke={(r + c) % 4 === 0 ? accent : stroke} />;
          })
        )}
      </g>
    ),
    thread: (
      <g {...common}>
        {Array.from({ length: 9 }).map((_, i) => {
          const y = 30 + i * 24;
          return (
            <g key={i}>
              <path d={`M10 ${y} Q150 ${y - 12} 290 ${y}`} stroke={i % 3 === 0 ? accent : stroke} />
              {Array.from({ length: 14 }).map((_, k) => (
                <line key={k} x1={20 + k * 20} y1={y - 3} x2={26 + k * 20} y2={y + 3} />
              ))}
            </g>
          );
        })}
      </g>
    ),
    sun: (
      <g {...common}>
        <circle cx="150" cy="130" r="40" stroke={accent} />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (Math.PI * 2 * i) / 24;
          return <line key={i} x1={150 + Math.cos(a) * 56} y1={130 + Math.sin(a) * 56} x2={150 + Math.cos(a) * 96} y2={130 + Math.sin(a) * 96} />;
        })}
      </g>
    ),
    muscle: (
      <g {...common}>
        {Array.from({ length: 8 }).map((_, i) => {
          const y = 30 + i * 28;
          return (
            <path key={i} d={`M0 ${y} C75 ${y - 10} 150 ${y + 14} 225 ${y - 6} S330 ${y + 8} 360 ${y}`} stroke={i % 2 ? accent : stroke} />
          );
        })}
      </g>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 260"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none opacity-90"
    >
      {motifs[motif]}
    </svg>
  );
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
          src={cdnSrc(card.image, 800, 68)}
          srcSet={cdnSrcSet(card.image, [420, 640, 800, 1000])}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
          alt={card.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {!card.image && <CardWatermark title={card.title} dark={!card.ink} />}
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
  // A unique abstract line-glyph per treatment — no faces, no repetition.
  // Each glyph nods to the anatomy / mechanism of action.
  const glyph = (key: string) => {
    switch (key) {
      // Lip — abstract Cupid's bow
      case "Lip Filler":
        return (
          <>
            <path d="M10 32c4-6 10-6 14 0 4-6 10-6 14 0 4-6 10-6 14 0" />
            <path d="M10 32c6 8 16 12 22 12s16-4 22-12" stroke="#C9A050" />
          </>
        );
      // Chin — profile arc
      case "Chin Filler":
        return (
          <>
            <path d="M14 16c0 12 4 22 10 30 4 6 10 6 16 2" />
            <circle cx="40" cy="48" r="3" fill="#C9A050" stroke="none" />
          </>
        );
      // Cheeks — twin orbs
      case "Cheek Filler":
        return (
          <>
            <circle cx="22" cy="32" r="9" />
            <circle cx="42" cy="32" r="9" />
            <circle cx="22" cy="32" r="2" fill="#C9A050" stroke="none" />
            <circle cx="42" cy="32" r="2" fill="#C9A050" stroke="none" />
          </>
        );
      // Jowl & jawline — angular jaw line
      case "Jowl & Jawline":
        return (
          <>
            <path d="M10 22 L20 40 L32 48 L44 40 L54 22" />
            <path d="M20 40 L44 40" stroke="#C9A050" strokeDasharray="2 3" />
          </>
        );
      // Tear trough — almond + tear
      case "Tear Trough":
        return (
          <>
            <path d="M10 32c8-10 36-10 44 0-8 10-36 10-44 0Z" />
            <circle cx="32" cy="32" r="4" />
            <path d="M32 40c-2 4-2 8 0 10 2-2 2-6 0-10Z" fill="#C9A050" stroke="none" />
          </>
        );
      // Temple — concave hollow with arrow
      case "Temple Filler":
        return (
          <>
            <path d="M14 18c8 4 8 22 0 28" />
            <path d="M50 18c-8 4-8 22 0 28" />
            <path d="M22 32h20M36 28l6 4-6 4" stroke="#C9A050" />
          </>
        );
      // Liquid Facelift — 8-point compass
      case "Liquid Facelift":
        return (
          <>
            <circle cx="32" cy="32" r="20" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
              const r = (a * Math.PI) / 180;
              const x1 = 32 + Math.cos(r) * 14;
              const y1 = 32 + Math.sin(r) * 14;
              const x2 = 32 + Math.cos(r) * 20;
              const y2 = 32 + Math.sin(r) * 20;
              return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C9A050" />;
            })}
            <circle cx="32" cy="32" r="2" fill="#C9A050" stroke="none" />
          </>
        );
      // Nose — bridge + tip
      case "Non-Surgical Nose":
      case "Nose Filler":
      case "Nose":
        return (
          <>
            <path d="M30 14 L26 44 L32 50 L38 44 L34 14" />
            <path d="M26 44c2 3 8 3 12 0" stroke="#C9A050" />
          </>
        );
      // Forehead / brow lift — horizontal lines softening
      case "Forehead":
      case "Brow Lift":
        return (
          <>
            <path d="M12 22h40" />
            <path d="M14 30h36" opacity="0.7" />
            <path d="M18 38h28" opacity="0.5" />
            <path d="M16 14c4-2 12-2 16 0 4-2 12-2 16 0" stroke="#C9A050" />
          </>
        );
      // Threads — woven mesh
      case "PDO Threads":
      case "Thread Lift":
        return (
          <>
            <path d="M10 18 L54 46" />
            <path d="M10 32 L54 32" stroke="#C9A050" />
            <path d="M10 46 L54 18" />
          </>
        );
      // Endolaser — wave + dot
      case "Endolaser":
      case "Laser":
        return (
          <>
            <path d="M8 32q8-12 16 0t16 0 16 0" />
            <circle cx="32" cy="32" r="2.5" fill="#C9A050" stroke="none" />
          </>
        );
      // Skin / glow — radiating sun
      case "Skin Rejuvenation":
      case "Polynucleotides":
      case "Profhilo":
        return (
          <>
            <circle cx="32" cy="32" r="8" />
            {[0, 60, 120, 180, 240, 300].map((a) => {
              const r = (a * Math.PI) / 180;
              return (
                <line
                  key={a}
                  x1={32 + Math.cos(r) * 14}
                  y1={32 + Math.sin(r) * 14}
                  x2={32 + Math.cos(r) * 22}
                  y2={32 + Math.sin(r) * 22}
                  stroke="#C9A050"
                />
              );
            })}
          </>
        );
      default:
        // Default — minimal hex glyph (never reused as a face)
        return (
          <>
            <path d="M32 8 L52 20 L52 44 L32 56 L12 44 L12 20 Z" />
            <circle cx="32" cy="32" r="3" fill="#C9A050" stroke="none" />
          </>
        );
    }
  };

  // Choose key by exact match first, otherwise by keyword in the area string
  const k = (() => {
    if (!area) return "";
    const known = [
      "Lip Filler", "Chin Filler", "Cheek Filler", "Jowl & Jawline",
      "Tear Trough", "Temple Filler", "Liquid Facelift",
      "Non-Surgical Nose", "Nose Filler", "Nose",
      "Forehead", "Brow Lift",
      "PDO Threads", "Thread Lift",
      "Endolaser", "Laser",
      "Skin Rejuvenation", "Polynucleotides", "Profhilo",
    ];
    const exact = known.find((n) => area === n);
    if (exact) return exact;
    return known.find((n) => area.toLowerCase().includes(n.toLowerCase())) ?? "";
  })();

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-16 h-16 sm:w-20 sm:h-20"
      aria-hidden="true"
    >
      {glyph(k)}
    </svg>
  );
};


const FlipCard = ({ card }: { card: SubCard }) => {
  const inkLight = !card.ink;
  const [flipped, setFlipped] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const slides = card.flip?.slides;
  const slideCount = slides?.length ?? 0;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (!entry.isIntersecting) { setFlipped(false); setSlideIdx(0); } },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const goPrev = () => setSlideIdx((i) => (i - 1 + slideCount) % slideCount);
  const goNext = () => setSlideIdx((i) => (i + 1) % slideCount);
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) { dx < 0 ? goNext() : goPrev(); }
    touchStartX.current = null;
  };

  return (
    <div
      ref={containerRef}
      className="[perspective:1400px] h-full w-full select-none"
      itemScope
      itemType="https://schema.org/MedicalProcedure"
      data-treatment={card.title}
      onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setFlipped(true); }}
      onMouseLeave={() => { if (window.matchMedia("(hover: hover)").matches) setFlipped(false); }}
    >
      <div
        className="relative w-full h-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] [-webkit-transform-style:preserve-3d] will-change-transform"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)", WebkitTransform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* FRONT, passive layer; only the gold corner button flips */}
        <div
          style={{ transform: "rotateY(0deg)", WebkitTransform: "rotateY(0deg)" }}
          className={`absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] block overflow-hidden rounded-[28px] text-left ${card.bg} ${card.ink ?? "text-white"} shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] ${flipped ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-transparent to-black/15" />

          {card.frontImages && card.frontImages.length > 0 && (
            <>
              <div aria-hidden className="absolute inset-0 bg-black" />
              <div
                className={`absolute inset-0 grid gap-[2px] ${
                  card.frontImages.length === 2 ? "grid-cols-2" :
                  card.frontImages.length === 3 ? "grid-cols-2 grid-rows-2" :
                  card.frontImages.length === 4 ? "grid-cols-2 grid-rows-2" :
                  "grid-cols-3 grid-rows-2"
                }`}
              >
                {card.frontImages.map((im, i) => (
                  <div
                    key={i}
                    className={`relative overflow-hidden bg-black ${
                      card.frontImages!.length === 3 && i === 0 ? "row-span-2" : ""
                    }`}
                  >
                    <img
                      src={cdnSrc(im.src, 700, 68)}
                      srcSet={cdnSrcSet(im.src, [360, 540, 700, 900])}
                      sizes="(max-width: 640px) 50vw, 350px"
                      alt={im.alt ?? card.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
              <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-[#C9A050]/30 rounded-[28px]" />
            </>
          )}

          {!card.frontImages && card.frontImage && (
            <>
              <div aria-hidden className="absolute inset-0 bg-black" />
              <img
                src={cdnSrc(card.frontImage, 900, 68)}
                srcSet={cdnSrcSet(card.frontImage, [480, 720, 900, 1200])}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 600px"
                alt={card.title}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 w-full h-full ${card.frontImageFit === "cover" ? "object-cover" : "object-contain"}`}
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
              <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-[#C9A050]/30 rounded-[28px]" />
            </>
          )}

          {!card.frontImages && !card.frontImage && card.imageOnFront && (card.image || card.flip?.image) && (
            <>
              <div aria-hidden className="absolute inset-0 bg-black" />
              <img
                src={cdnSrc((card.image ?? card.flip?.image)!, 900, 68)}
                srcSet={cdnSrcSet((card.image ?? card.flip?.image)!, [480, 720, 900, 1200])}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 600px"
                alt={card.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-contain"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
              <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-[#C9A050]/30 rounded-[28px]" />
            </>
          )}

          {!card.frontImages && !card.frontImage && !card.imageOnFront && <CardWatermark title={card.title} dark={!card.ink} />}

          {card.badge && (
            <span className={`absolute top-5 left-5 z-20 text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full font-semibold ${inkLight ? "bg-white/20 backdrop-blur text-white" : "bg-[#C9A050] text-black"}`}>
              {card.badge}
            </span>
          )}

          <div className="absolute inset-0 p-7 sm:p-9 flex flex-col pointer-events-none">
            {!card.frontImage && !card.frontImages && !card.imageOnFront && (
              <div className={`flex-1 flex items-center justify-center ${card.ink ? "text-zinc-900/70" : "text-white/80"}`}>
                {card.title === "Liquid Facelift"
                  ? <HADropletFace />
                  : (card.title === "Volume, returned." || card.title === "Architecture of the face.")
                    ? null
                    : <FaceMark area={card.title} />}
              </div>
            )}
            {(card.frontImage || card.frontImages || card.imageOnFront) && <div className="flex-1" />}
            <div>
              <p className={`text-[10px] uppercase tracking-[0.24em] mb-2 ${card.frontImage || card.frontImages || card.imageOnFront ? "text-[#C9A050]" : card.ink ? "text-zinc-900/70" : "text-white/80"}`}>{card.frontImage ? "Cosmetic Units" : ((card.frontImages || card.imageOnFront) ? (card.badge ?? "Signature") : "Signature")}</p>
              <h3 itemProp="name" className={`font-serif leading-[1.05] tracking-tight ${card.frontImage || card.frontImages || card.imageOnFront ? "text-3xl sm:text-4xl text-[#F0D78C]" : "text-3xl sm:text-4xl"}`}>{card.title}</h3>
              <p itemProp="description" className={`mt-2 text-sm ${card.frontImage || card.frontImages || card.imageOnFront ? "text-white/80" : card.ink ? "text-zinc-700" : "text-white/75"}`}>{card.tagline}</p>
              <link itemProp="url" href={`https://www.cosmedocs.com${card.href}`} />
              {(card.image || card.frontImage) && <meta itemProp="image" content={card.frontImage ?? card.image ?? ""} />}
            </div>
          </div>

          {/* Gold corner flip button */}
          <button
            type="button"
            onClick={() => setFlipped(true)}
            aria-label={`${card.title}, reveal results`}
            className="absolute bottom-4 right-4 z-30 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#C9A050] text-black shadow-[0_0_24px_rgba(201,160,80,0.55)] hover:scale-105 active:scale-95 transition"
          >
            <RotateCw className="w-4 h-4" />
          </button>
        </div>

        {/* BACK, full before/after image + caption. Corner chip flips back. */}
        <div
          style={{ transform: "rotateY(180deg)", WebkitTransform: "rotateY(180deg)" }}
          className={`absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] block overflow-hidden rounded-[28px] bg-[#0a0a0a] text-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] ${flipped ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          {/* Flip-back chip */}
          <button
            type="button"
            onClick={() => setFlipped(false)}
            aria-label="Flip card back"
            className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-[#C9A050] text-black shadow-[0_0_24px_rgba(201,160,80,0.55)] hover:scale-105 active:scale-95 transition flex items-center justify-center"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          <div className={`absolute inset-0 z-10 p-4 sm:p-5 flex flex-col min-h-0 gap-3 pointer-events-none ${card.flip?.imagePosition === "bottom" ? "flex-col-reverse" : ""}`}>
            {/* Before/after image — always shown so the back proves the result */}
            {(card.flip?.image ?? card.image) && (
              <div className={`relative rounded-2xl p-[2px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(201,160,80,0.55)] flex-shrink-0 flex ${card.flip?.largeText ? "basis-[34%] h-[34%]" : "basis-[44%] h-[44%]"}`}>
                <div
                  aria-hidden
                  className="absolute -inset-[60%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,rgba(201,160,80,0.0)_25%,#C9A050_45%,#F0D78C_50%,#C9A050_55%,rgba(201,160,80,0.0)_75%,transparent_100%)]"
                />
                <div className="relative rounded-2xl overflow-hidden bg-black w-full h-full flex items-center justify-center">
                  <img
                    src={card.flip?.image ?? card.image}
                    alt={`${card.title} before and after, Cosmedocs`}
                    className="block max-w-full max-h-full w-auto h-auto object-contain"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_35%,rgba(0,0,0,0)_65%,rgba(201,160,80,0.10)_100%)]" />
                </div>
              </div>
            )}

            {/* Caption: carousel mode if slides provided, otherwise static */}
            {slides && slideCount > 0 ? (
              <div
                className="flex-1 min-h-0 flex flex-col justify-start overflow-hidden pointer-events-auto"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <p className="uppercase tracking-[0.24em] text-[#C9A050] text-[11px] sm:text-xs">
                    {slides[slideIdx].eyebrow ?? card.flip?.eyebrow}
                  </p>
                  <span className="text-[10px] tracking-[0.2em] text-white/50 font-mono">
                    {String(slideIdx + 1).padStart(2, "0")} / {String(slideCount).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-serif leading-[1.05] tracking-tight text-2xl sm:text-3xl text-[#F0D78C]">
                  {slides[slideIdx].title ?? card.title}
                </h3>
                <p className="mt-2 text-white/85 max-w-md text-[14px] sm:text-[15px] leading-relaxed flex-1 overflow-hidden">
                  {renderGlossaryText(slides[slideIdx].body)}
                </p>

                {/* Controls */}
                <div className="mt-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSlideIdx(i)}
                        aria-label={`Go to step ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all ${i === slideIdx ? "w-6 bg-[#C9A050]" : "w-1.5 bg-white/30 hover:bg-white/50"}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={goPrev}
                      aria-label="Previous step"
                      className="w-8 h-8 rounded-full border border-[#C9A050]/40 text-[#C9A050] flex items-center justify-center hover:bg-[#C9A050]/10 transition"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 -rotate-[135deg]" />
                    </button>
                    {slideIdx === slideCount - 1 ? (
                      <Link
                        to={card.href}
                        className="inline-flex items-center gap-1.5 px-3 h-8 rounded-full bg-[#C9A050] text-black text-[12px] font-semibold hover:scale-[1.03] transition"
                      >
                        Discover <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={goNext}
                        aria-label="Next step"
                        className="relative w-9 h-9 rounded-full bg-[#C9A050] text-black flex items-center justify-center hover:scale-[1.06] transition shadow-[0_0_0_0_rgba(201,160,80,0.7)] animate-[pulse-glow_1.8s_ease-in-out_infinite]"
                        style={{ animation: "pulse-glow 1.8s ease-in-out infinite" }}
                      >
                        <span aria-hidden className="absolute inset-0 rounded-full bg-[#C9A050]/60 animate-ping" />
                        <ArrowUpRight className="relative w-4 h-4 rotate-45" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 min-h-0 flex flex-col justify-start overflow-y-auto overscroll-contain pointer-events-auto pr-1">
                <p className={`uppercase tracking-[0.24em] text-[#C9A050] mb-1.5 ${card.flip?.largeText ? "text-[10px] sm:text-xs" : "text-[9px]"}`}>{card.flip?.eyebrow ?? "Before · After"}</p>
                <h3 className={`font-serif leading-[1.05] tracking-tight ${card.flip?.largeText ? "text-2xl sm:text-4xl text-[#F0D78C]" : "text-xl sm:text-2xl"}`}>{card.title}</h3>
                <p className={`mt-2 text-white/85 max-w-md ${card.flip?.largeText ? "text-[13px] sm:text-base leading-relaxed" : "text-[13px] leading-snug line-clamp-5 sm:line-clamp-6"}`}>
                  {typeof card.flip?.back === "string" ? renderGlossaryText(card.flip.back) : card.flip?.back}
                </p>
                {card.flip?.bullets && card.flip.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {card.flip.bullets.map((b) => (
                      <li key={typeof b === "string" ? b : String(b)} className="flex gap-2.5 text-[13px] sm:text-[14px] text-white/90 leading-snug">
                        <span aria-hidden className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#C9A050] shrink-0" />
                        <span>{typeof b === "string" ? renderGlossaryText(b) : b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  to={card.href}
                  className={`mt-auto pt-3 inline-flex items-center gap-1.5 font-semibold text-[#C9A050] pointer-events-auto self-start ${card.flip?.largeText ? "text-sm" : "text-[13px]"}`}
                >
                  Discover {card.title} <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


/* ---------- Tiny decorative SVG icon per treatment area --------------- */
/* Minimal gold line glyphs that hint at the treatment area, helping users
   scan the overview list at a glance. */
const TreatmentGlyph = ({ title }: { title: string }) => {
  const t = title.toLowerCase();
  // common props
  const p = "stroke-[#C9A050]";
  if (/lip/.test(t))
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 ${p}`} strokeWidth="1.5">
        <path d="M3 12c2-3 5-3 9 0 4-3 7-3 9 0-2 3-5 4-9 4s-7-1-9-4z" />
      </svg>
    );
  if (/cheek|mid-?face/.test(t))
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 ${p}`} strokeWidth="1.5">
        <path d="M5 14c2-6 12-6 14 0" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    );
  if (/jaw|masseter/.test(t))
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 ${p}`} strokeWidth="1.5">
        <path d="M4 7v6c0 4 4 7 8 7s8-3 8-7V7" />
      </svg>
    );
  if (/chin|profile|profilo/.test(t))
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 ${p}`} strokeWidth="1.5">
        <path d="M6 5v8c0 4 3 6 6 6s6-2 6-6" />
      </svg>
    );
  if (/nose|nasal/.test(t))
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 ${p}`} strokeWidth="1.5">
        <path d="M12 4c0 5-2 7-3 10 0 1.5 1.5 2 3 2s3-.5 3-2c-1-3-3-5-3-10z" />
      </svg>
    );
  if (/temple/.test(t))
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 ${p}`} strokeWidth="1.5">
        <path d="M4 8c4-4 12-4 16 0" />
        <path d="M5 14c4-3 10-3 14 0" />
      </svg>
    );
  if (/tear|under.?eye|eye/.test(t))
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 ${p}`} strokeWidth="1.5">
        <path d="M12 5c2 4 4 6 4 9a4 4 0 11-8 0c0-3 2-5 4-9z" />
      </svg>
    );
  if (/brow|forehead|migraine/.test(t))
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 ${p}`} strokeWidth="1.5">
        <path d="M4 10c4-3 12-3 16 0" />
      </svg>
    );
  if (/neck|trap|nefertiti/.test(t))
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 ${p}`} strokeWidth="1.5">
        <path d="M6 4c2 4 2 8 0 12M18 4c-2 4-2 8 0 12M6 16h12" />
      </svg>
    );
  if (/calf|leg/.test(t))
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 ${p}`} strokeWidth="1.5">
        <path d="M10 3c-1 5 1 8 1 12s-2 5-2 6M14 3c1 5-1 8-1 12s2 5 2 6" />
      </svg>
    );
  if (/sweat|hyperhidrosis|underarm|axilla/.test(t))
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 ${p}`} strokeWidth="1.5">
        <path d="M12 4c2 4 5 7 5 11a5 5 0 11-10 0c0-4 3-7 5-11z" />
      </svg>
    );
  if (/bruxism|grind|tooth/.test(t))
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 ${p}`} strokeWidth="1.5">
        <rect x="5" y="9" width="3.5" height="6" rx="1" />
        <rect x="10.25" y="9" width="3.5" height="6" rx="1" />
        <rect x="15.5" y="9" width="3.5" height="6" rx="1" />
      </svg>
    );
  if (/makeover|full.?face|ha\b/.test(t))
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 ${p}`} strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="6" ry="8" />
        <circle cx="9.5" cy="11" r=".8" fill="currentColor" />
        <circle cx="14.5" cy="11" r=".8" fill="currentColor" />
        <path d="M9.5 15c1 1 4 1 5 0" />
      </svg>
    );
  // default: small gold dot
  return (
    <svg viewBox="0 0 24 24" className={`w-4 h-4 ${p}`} fill="currentColor">
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};

/* Decorative face-map header used inside the overview card */
const FaceMapHeader = () => (
  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" aria-hidden>
    <ellipse cx="60" cy="60" rx="34" ry="44" stroke="#C9A050" strokeOpacity="0.45" strokeWidth="1.2" />
    <path d="M40 50c5-3 10-3 15 0M65 50c5-3 10-3 15 0" stroke="#C9A050" strokeOpacity="0.55" strokeWidth="1" />
    <path d="M60 58v10M54 76c2 2 10 2 12 0" stroke="#C9A050" strokeOpacity="0.5" strokeWidth="1" />
    {[
      [42, 46], [78, 46], [38, 64], [82, 64], [50, 78], [70, 78], [60, 90], [60, 38],
    ].map(([cx, cy], i) => (
      <g key={i}>
        <circle cx={cx} cy={cy} r="2" fill="#C9A050" />
        <circle cx={cx} cy={cy} r="5" stroke="#C9A050" strokeOpacity="0.35" />
      </g>
    ))}
  </svg>
);

/* ---------- Overview card: full list of treatments in the row ---------- */
const OverviewCard = ({
  cards,
  eyebrow,
  title,
  heightCls,
  widthCls,
}: {
  cards: SubCard[];
  eyebrow: string;
  title: string;
  heightCls: string;
  widthCls: string;
}) => (
  <div
    className={`shrink-0 ${widthCls} ${heightCls} rounded-[28px] bg-gradient-to-b from-[#171717] to-black border border-[#C9A050]/20 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] flex flex-col`}
  >
    <div className="px-5 sm:px-6 pt-4 pb-3 border-b border-white/8">
      <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A050] mb-1">{eyebrow}</p>
      <h3 className="font-serif text-lg sm:text-xl text-white leading-tight tracking-tight">{title}</h3>
    </div>
    <ul className="flex-1 overflow-y-auto px-2 py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {cards.map((c) => (
        <li key={c.title}>
          <Link
            to={c.href}
            className="group flex items-start gap-3 px-3 py-2.5 rounded-2xl hover:bg-white/5 transition"
          >
            <span className="mt-1 shrink-0">
              <TreatmentGlyph title={c.title} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-serif text-[14px] sm:text-[15px] text-white leading-snug truncate">{c.title}</p>
              <p className="text-[11px] text-white/55 mt-0.5 truncate">{c.tagline}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#C9A050] mt-1.5 shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

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
        className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 px-5 sm:px-8 overscroll-x-contain [touch-action:pan-x_pan-y] [-webkit-overflow-scrolling:touch] [scroll-behavior:smooth] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {(category.id === "facial-contouring" || category.id === "fillers-anti-ageing") && (
          <OverviewCard
            cards={category.cards}
            eyebrow={category.eyebrow}
            title={category.id === "fillers-anti-ageing" ? "All volume & filler areas" : "All contouring areas"}
            heightCls="h-[58vh] min-h-[440px] max-h-[680px] sm:h-[72vh] sm:min-h-[540px] sm:max-h-[760px]"
            widthCls="w-[72vw] sm:w-[320px] md:w-[360px]"
          />
        )}
        {category.cards.map((card) => {
          const isBig = !!card.flip;
          const widthCls = isBig
            ? "w-[72vw] sm:w-[380px] md:w-[420px]"
            : "w-[58vw] sm:w-[300px] md:w-[330px]";
          const heightCls = "h-[58vh] min-h-[440px] max-h-[680px] sm:h-[72vh] sm:min-h-[540px] sm:max-h-[760px]";
          return (
            <div key={card.title} className={`shrink-0 ${widthCls} ${heightCls}`}>
              {card.flip ? <FlipCard card={card} /> : <TreatmentCard card={card} size="split" />}
            </div>
          );
        })}
        <Link
          to={category.cta.href}
          className="group shrink-0 w-[58vw] sm:w-[220px] md:w-[260px] h-[58vh] min-h-[440px] max-h-[680px] sm:h-[72vh] sm:min-h-[540px] sm:max-h-[760px] rounded-[28px] border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur flex flex-col items-center justify-center text-center px-6 transition"
        >
          <div className="w-12 h-12 rounded-full bg-[#C9A050]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <ChevronRight className="w-5 h-5 text-[#C9A050]" />
          </div>
          <p className="text-white text-sm font-medium leading-snug">{category.cta.label}</p>
          <p className="text-white/50 text-xs mt-1">View all</p>
        </Link>
      </div>

      {/* Swiss · French · American pedigree now lives as the closing flip card in the anti-ageing carousel */}
    </motion.section>
  );
};

/* ---------- Aesthetic Botox bento, one horizontal row ----------------- */
/* Pattern of columns (scroll →):
   [Big feature] [2 stacked] [Big] [2 stacked] [Big] [2 stacked] [Big] [2×2 minors] [CTA]
*/

// Small "tile" card used inside stacked / grid columns, shorter height.
const TileCard = ({ card }: { card: SubCard }) => {
  const inkLight = !card.ink;
  return (
    <Link
      to={card.href}
      className={`group relative overflow-hidden block ${card.bg} ${card.ink ?? "text-white"} rounded-[24px] flex-1 min-h-0 transition-transform duration-300 hover:-translate-y-1 active:scale-[0.99] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]`}
    >
      {card.image && (
        <img src={cdnSrc(card.image, 600, 68)} srcSet={cdnSrcSet(card.image, [320, 480, 600, 800])} sizes="(max-width: 640px) 50vw, 300px" alt={card.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
      )}
      {!card.image && <CardWatermark title={card.title} dark={!card.ink} />}
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
  const hasFlip = !!card.flip || (card.flipImages && card.flipImages.length > 0);

  const [flipped, setFlipped] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (!entry.isIntersecting) setFlipped(false); },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const frontInner = (
    <>
      {card.image && (
        <img
          src={card.image}
          alt={card.title}
          loading="lazy"
          className="absolute inset-0 z-0 w-full h-full object-cover [filter:brightness(0.86)_saturate(0.88)]"
        />
      )}
      {!card.image && <CardWatermark title={card.title} dark={!card.ink} />}
      {/* Softer top vignette + gentler bottom scrim for legibility without weight */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/25 via-black/0 to-black/40 pointer-events-none" />
      {/* Subtle gold inset ring — quiet, in keeping with Volume Returned */}
      <div className="absolute inset-0 z-[1] rounded-[28px] ring-1 ring-inset ring-[#C9A050]/10 pointer-events-none" />
      {card.badge && (
        <span className={`absolute top-5 left-5 z-[2] text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full backdrop-blur ${inkLight ? "bg-white/15 text-white" : "bg-black/55 text-white/90"}`}>
          {card.badge}
        </span>
      )}
      <div className="absolute inset-0 z-[2] p-7 sm:p-9 flex flex-col justify-end pointer-events-none">
        <h3 className="font-serif text-3xl sm:text-4xl leading-[1.05] tracking-tight max-w-[88%] text-white/95">{card.title}</h3>
        <p className={`mt-2 text-sm sm:text-base ${card.ink ? "text-zinc-700" : "text-white/70"} max-w-[88%]`}>{card.tagline}</p>
      </div>
    </>
  );

  // Plain non-flip card → navigate on tap
  if (!hasFlip) {
    return (
      <Link
        to={card.href}
        className={`group relative isolate overflow-hidden block ${card.bg} ${card.ink ?? "text-white"} rounded-[28px] h-full w-full transition-transform duration-300 hover:-translate-y-1 active:scale-[0.99] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]`}
      >
        {frontInner}
        <span className={`absolute bottom-5 right-5 z-[3] inline-flex items-center gap-1.5 text-sm font-medium ${card.ink ? "text-zinc-900" : "text-white"} pointer-events-none`}>
          Discover <ArrowUpRight className="w-4 h-4" />
        </span>
      </Link>
    );
  }

  const flipImg = card.flip?.image ?? card.image;
  const imageBottom = card.flip?.imagePosition === "bottom";

  return (
    <div
      ref={containerRef}
      className="[perspective:1400px] h-full w-full select-none"
      onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setFlipped(true); }}
      onMouseLeave={() => { if (window.matchMedia("(hover: hover)").matches) setFlipped(false); }}
    >
      <div
        className="relative w-full h-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] [-webkit-transform-style:preserve-3d] will-change-transform"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)", WebkitTransform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* FRONT, passive layer; only the gold corner button flips */}
        <div
          style={{ transform: "rotateY(0deg)", WebkitTransform: "rotateY(0deg)" }}
          className={`absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] block overflow-hidden rounded-[28px] text-left ${card.bg} ${card.ink ?? "text-white"} shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] ${flipped ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          {frontInner}

          {/* Gold corner flip button */}
          <button
            type="button"
            onClick={() => setFlipped(true)}
            aria-label={`${card.title}, reveal results`}
            className="absolute bottom-4 right-4 z-30 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#C9A050] text-black shadow-[0_0_24px_rgba(201,160,80,0.55)] hover:scale-105 active:scale-95 transition"
          >
            <RotateCw className="w-4 h-4" />
          </button>
        </div>

        {/* BACK */}
        <div
          style={{ transform: "rotateY(180deg)", WebkitTransform: "rotateY(180deg)" }}
          className={`absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] block overflow-hidden rounded-[28px] bg-[#0a0a0a] text-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] ${flipped ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          {/* Flip-back chip */}
          <button
            type="button"
            onClick={() => setFlipped(false)}
            aria-label="Flip card back"
            className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-[#C9A050] text-black shadow-[0_0_24px_rgba(201,160,80,0.55)] hover:scale-105 active:scale-95 transition flex items-center justify-center"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          {card.flip ? (
            <div className={`pointer-events-none absolute inset-0 z-[1] p-5 sm:p-6 flex flex-col ${imageBottom ? "flex-col-reverse" : ""}`}>
              {flipImg && (
                <div className="relative rounded-2xl p-[2px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(201,160,80,0.55)]">
                  <div
                    aria-hidden
                    className="absolute -inset-[60%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,rgba(201,160,80,0.0)_25%,#C9A050_45%,#F0D78C_50%,#C9A050_55%,rgba(201,160,80,0.0)_75%,transparent_100%)]"
                  />
                  <div className="relative rounded-2xl overflow-hidden bg-black">
                    <img src={flipImg} alt={`${card.title} before and after, Cosmedocs`} className="block w-full h-auto" />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_35%,rgba(0,0,0,0)_65%,rgba(201,160,80,0.10)_100%)]" />
                  </div>
                </div>
              )}
              <div className={`flex-1 flex flex-col ${imageBottom ? "justify-start pb-4 sm:pb-5" : "justify-end pt-4 sm:pt-5"}`}>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#C9A050] mb-2">Before · After</p>
                <h3 className="font-serif text-2xl sm:text-3xl leading-[1.1] tracking-tight">{card.title}</h3>
                <p className="mt-2 text-sm text-white/75 max-w-md">{card.flip.back}</p>
                <Link
                  to={card.href}
                  className="pointer-events-auto mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#C9A050] hover:text-[#e3c074] self-start"
                >
                  Discover {card.title} <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="relative z-[1] pointer-events-none flex flex-col h-full">
              <div className="h-2/3 p-4 sm:p-5">
                <div className="relative h-full rounded-2xl p-[2px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(201,160,80,0.55)]">
                  <div
                    aria-hidden
                    className="absolute -inset-[60%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,rgba(201,160,80,0.0)_25%,#C9A050_45%,#F0D78C_50%,#C9A050_55%,rgba(201,160,80,0.0)_75%,transparent_100%)]"
                  />
                  <div className="relative h-full grid grid-rows-2 gap-1 rounded-2xl overflow-hidden bg-black">
                    {card.flipImages!.map((img) => (
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
                <Link
                  to={card.href}
                  className="pointer-events-auto mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#C9A050] hover:text-[#e3c074] self-start"
                >
                  Book your assessment <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


type Column =
  | { kind: "big"; card: SubCard }
  | { kind: "stack"; cards: SubCard[] }
  | { kind: "grid"; cards: SubCard[] }
  | { kind: "list"; cards: SubCard[]; title?: string; eyebrow?: string }
  | { kind: "philosophy"; eyebrow: string; title: string; intro: string; bullets: { h: string; s: string }[]; footer?: string };

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

  const rawColumns: (Column | null)[] = [
    { kind: "big",  card: get("1, 2 or 3 Areas Botox") },
    {
      kind: "philosophy",
      eyebrow: "The Aim",
      title: "Why we treat.",
      intro: "Botox, the doctor-led way — preventative, not performative.",
      bullets: [
        { h: "Soften hyperkinetic expression", s: "Calm overactive muscles, never freeze the face." },
        { h: "Stop the deep crease", s: "Prevent repeated folding that breaks collagen." },
        { h: "Give skin time to heal", s: "Allow the dermis to repair between expressions." },
        { h: "Preserve the natural you", s: "Neutral, unexaggerated, unmistakably yours." },
      ],
      footer: "Invisible art. Always your way.",
    },
    get("BroTox") ? { kind: "big", card: get("BroTox") } : null,
    { kind: "list", cards: otherAreas, eyebrow: "Refined Areas", title: "Every other detail" },
  ];
  const columns: Column[] = rawColumns.filter((c): c is Column => c !== null);

  // Column widths, keep big card narrow enough on mobile so the next column peeks in
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
        className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 px-5 sm:px-8 overscroll-x-contain [touch-action:pan-x_pan-y] [-webkit-overflow-scrolling:touch] [scroll-behavior:smooth] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {columns.map((col, idx) => {
          if (col.kind === "big") {
            return (
              <div key={idx} className={`shrink-0 ${widthBig} ${colHeight}`}>
                <SpotlightCard card={col.card} />
              </div>
            );
          }
          if (col.kind === "stack") {
            return (
              <div key={idx} className={`shrink-0 ${widthStack} ${colHeight} flex flex-col gap-4 sm:gap-5`}>
                {col.cards.map((c) => <TileCard key={c.title} card={c} />)}
              </div>
            );
          }
          if (col.kind === "list") {
            return (
              <div
                key={idx}
                className={`shrink-0 ${widthStack} ${colHeight} rounded-[28px] bg-gradient-to-b from-[#171717] to-black border border-white/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] flex flex-col`}
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
          if (col.kind === "philosophy") {
            return (
              <div
                key={idx}
                className={`shrink-0 ${widthStack} ${colHeight} rounded-[28px] bg-gradient-to-b from-[#F0D78C] via-[#E8C97A] to-[#C9A050] text-zinc-900 shadow-[0_30px_60px_-30px_rgba(201,160,80,0.6)] flex flex-col p-6 sm:p-7`}
              >
                <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-900/70 mb-2">{col.eyebrow}</p>
                <h3 className="font-serif text-2xl sm:text-[28px] leading-[1.05] tracking-tight">{col.title}</h3>
                <p className="mt-2 text-[13px] text-zinc-900/75 leading-relaxed">{col.intro}</p>
                <ul className="mt-5 space-y-3.5 flex-1 overflow-y-auto pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  {col.bullets.map((b, i) => (
                    <li key={b.h} className="flex gap-3">
                      <span className="mt-[6px] w-6 h-6 rounded-full bg-zinc-900 text-[#F0D78C] text-[10px] font-medium flex items-center justify-center shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <p className="font-serif text-[15px] leading-snug text-zinc-900">{b.h}</p>
                        <p className="text-[12px] text-zinc-900/70 leading-snug mt-0.5">{b.s}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                {col.footer && (
                  <p className="mt-5 pt-4 border-t border-zinc-900/15 text-[11px] uppercase tracking-[0.22em] text-zinc-900/70">
                    {col.footer}
                  </p>
                )}
              </div>
            );
          }
          // 2x2 grid for the 4 minor areas
          return (
            <div key={idx} className={`shrink-0 ${widthGrid} ${colHeight} grid grid-cols-2 grid-rows-2 gap-4 sm:gap-5`}>
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
          className={`group shrink-0 ${widthStack} ${colHeight} rounded-[28px] border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur flex flex-col items-center justify-center text-center px-6 transition`}
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

/* ---------- Medical Botox, all large spotlight cards in a row ---------- */

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
        className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 px-5 sm:px-8 overscroll-x-contain [touch-action:pan-x_pan-y] [-webkit-overflow-scrolling:touch] [scroll-behavior:smooth] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* Overview list FIRST: every medical Botox area, scannable at a glance */}
        {category.cards.length > 0 && (
          <OverviewCard
            cards={category.cards}
            eyebrow="Therapeutic Botox"
            title="All medical areas"
            heightCls={colHeight}
            widthCls="w-[72vw] sm:w-[320px] md:w-[360px]"
          />
        )}

        {/* Hero spotlight: first card (Masseter) */}
        {category.cards[0] && (
          <div className={`shrink-0 ${widthBig} ${colHeight}`}>
            <SpotlightCard card={category.cards[0]} />
          </div>
        )}

        {/* Second spotlight: Calf Slimming (signature, since 2010) */}
        {(() => {
          const calf = category.cards.find((c) => /calf/i.test(c.title));
          return calf ? (
            <div className={`shrink-0 ${widthBig} ${colHeight}`}>
              <SpotlightCard card={calf} />
            </div>
          ) : null;
        })()}

        {/* Third spotlight: Hyperhidrosis (most asked) */}
        {(() => {
          const hyper = category.cards.find((c) => /hyperhidrosis/i.test(c.title));
          return hyper ? (
            <div className={`shrink-0 ${widthBig} ${colHeight}`}>
              <SpotlightCard card={hyper} />
            </div>
          ) : null;
        })()}

        <Link
          to={category.cta.href}
          className={`group shrink-0 w-[58vw] sm:w-[300px] md:w-[330px] ${colHeight} rounded-[28px] border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur flex flex-col items-center justify-center text-center px-6 transition`}
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

/* ---------- Flawless Skin, alternating stack(2) / single columns ------ */

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
        className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 px-5 sm:px-8 overscroll-x-contain [touch-action:pan-x_pan-y] [-webkit-overflow-scrolling:touch] [scroll-behavior:smooth] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {cols.map((col, idx) =>
          col.kind === "big" ? (
            <div key={idx} className={`shrink-0 ${widthBig} ${colHeight}`}>
              <SpotlightCard card={col.cards[0]} />
            </div>
          ) : (
            <div key={idx} className={`shrink-0 ${widthStack} ${colHeight} flex flex-col gap-4 sm:gap-5`}>
              {col.cards.map((c) => <TileCard key={c.title} card={c} />)}
            </div>
          )
        )}

        <Link
          to={category.cta.href}
          className={`group shrink-0 ${widthStack} ${colHeight} rounded-[28px] border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur flex flex-col items-center justify-center text-center px-6 transition`}
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
              alt="Cosmetic units of the face, anatomical map of forehead, temple, cheek, jaw, lip and chin"
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
            The face is not a single canvas, it is a mosaic of <em>cosmetic units</em>:
            forehead, temple, cheek, mid-face, jaw, lip, chin. In youth, light flows
            from one into the next without interruption.
          </p>
          <p>
            With time, fat pads descend, ligaments tighten, bone resorbs. The units
            begin to <span className="text-white">compartmentalise</span>, small valleys
            cast shadows, edges sharpen, the line breaks.
          </p>
          <p className="text-white">
            Doctor-led aesthetics restores the bridge between units, re-establishing
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

const HERO_SLIDES = [
  {
    src: heroHarleyStreet,
    alt: "Cosmedocs doctor on Harley Street, City of Westminster, London W1",
    eyebrow: "Harley Street · W1",
    caption: "Doctor-led aesthetic medicine, since 2007",
  },
  {
    src: heroMaleTreatment,
    alt: "Cosmedocs doctor performing a precise injectable treatment on a male patient",
    eyebrow: "Bold · Natural · Always Your Way",
    caption: "Aesthetics for men — invisible, never exaggerated",
  },
];

const Home3 = () => {
  const [heroIdx, setHeroIdx] = useState(0);
  const [heroMounted, setHeroMounted] = useState(false);
  useEffect(() => {
    // Delay mounting secondary slides until browser is idle to protect LCP
    const idle = (window as any).requestIdleCallback
      ? (window as any).requestIdleCallback(() => setHeroMounted(true), { timeout: 2500 })
      : window.setTimeout(() => setHeroMounted(true), 2000);
    const id = setInterval(() => {
      setHeroMounted(true);
      setHeroIdx((i) => (i + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => {
      clearInterval(id);
      if ((window as any).cancelIdleCallback && typeof idle === "number") (window as any).cancelIdleCallback(idle);
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>Cosmedocs · Aesthetic Medicine, App-Style</title>
        <meta
          name="description"
          content="An iOS-style view of every Cosmedocs treatment. Browse Botox, dermal fillers, contouring and skin concepts as quietly elegant cards, built for thumb-scrolling."
        />
        <link rel="canonical" href="https://www.cosmedocs.com/" data-rh="true" />
        <meta name="theme-color" content="#000000" />

        {/* Hreflang alternates — international SEO for the homepage */}
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/" data-rh="true" />
        <link rel="alternate" hrefLang="en" href="https://www.cosmedocs.com/" data-rh="true" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/" data-rh="true" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/" data-rh="true" />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/" data-rh="true" />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/" data-rh="true" />
        <link rel="alternate" hrefLang="ja" href="https://www.cosmedocs.com/ja/" data-rh="true" />
        <link rel="alternate" hrefLang="de" href="https://www.cosmedocs.com/de/" data-rh="true" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/" data-rh="true" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cosmedocs" />
        <meta property="og:url" content="https://www.cosmedocs.com/" />
        <meta property="og:title" content="Cosmedocs · Aesthetic Medicine, App-Style" />
        <meta property="og:description" content="Browse every Cosmedocs treatment as quietly elegant cards. Doctor-led aesthetic medicine on Harley Street, London." />
        <meta property="og:image" content="https://www.cosmedocs.com/og/cosmedocs-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cosmedocs" />
        <meta name="twitter:title" content="Cosmedocs · Aesthetic Medicine, App-Style" />
        <meta name="twitter:description" content="Doctor-led aesthetic medicine on Harley Street. Botox, dermal fillers, contouring and skin, in one app-style view." />
        <meta name="twitter:image" content="https://www.cosmedocs.com/og/cosmedocs-default.jpg" />

        {/* Per-card OG previews (consumed by crawlers that read alternate og:image tags) */}
        {categories.flatMap((cat) =>
          cat.cards
            .filter((c) => c.image)
            .map((c) => (
              <meta key={`og-card-${c.title}`} property="og:image:alt" content={`${c.title} — ${cat.title} at Cosmedocs`} />
            ))
        )}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Cosmedocs Treatments",
            itemListElement: categories.flatMap((cat, ci) =>
              cat.cards.map((card, idx) => ({
                "@type": "ListItem",
                position: ci * 100 + idx + 1,
                item: {
                  "@type": "MedicalProcedure",
                  name: card.title,
                  description: card.flip?.back || card.tagline,
                  url: `https://www.cosmedocs.com${card.href}`,
                  ...(card.image ? { image: `https://www.cosmedocs.com${card.image}` } : {}),
                  category: cat.title,
                },
              }))
            ),
          })}
        </script>

        {/* Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.cosmedocs.com/#organization",
            name: "Cosmedocs",
            url: "https://www.cosmedocs.com",
            logo: "https://www.cosmedocs.com/logo.png",
            description: "Doctor-led aesthetic clinic on Harley Street offering cosmetic treatments, anti-ageing solutions and non-surgical procedures.",
            telephone: "+44 333 0551 503",
            email: "info@cosmedocs.com",
            address: { "@type": "PostalAddress", streetAddress: "8-10 Harley Street", addressLocality: "London", postalCode: "W1G 9PF", addressCountry: "GB" },
            sameAs: ["https://www.instagram.com/cosmedocs", "https://www.facebook.com/cosmedocs"],
          })}
        </script>

        {/* MedicalClinic */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "@id": "https://www.cosmedocs.com/#clinic",
            name: "Cosmedocs - Harley Street Clinic",
            image: "https://www.cosmedocs.com/og/cosmedocs-default.jpg",
            url: "https://www.cosmedocs.com",
            telephone: "+44 333 0551 503",
            priceRange: "££",
            address: { "@type": "PostalAddress", streetAddress: "8-10 Harley Street", addressLocality: "London", postalCode: "W1G 9PF", addressCountry: "GB" },
            geo: { "@type": "GeoCoordinates", latitude: 51.5177, longitude: -0.1461 },
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "16:00" },
            ],
            availableService: [
              { "@type": "MedicalProcedure", name: "Anti-Wrinkle Treatment", procedureType: "NoninvasiveProcedure" },
              { "@type": "MedicalProcedure", name: "Dermal Fillers", procedureType: "NoninvasiveProcedure" },
              { "@type": "MedicalProcedure", name: "Anti-ageing Treatments", procedureType: "NoninvasiveProcedure" },
            ],
          })}
        </script>

        {/* FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "What treatments does Cosmedocs offer?", acceptedAnswer: { "@type": "Answer", text: "Cosmedocs offers a wide range of non-surgical aesthetic treatments including anti-wrinkle injections, dermal fillers, lip fillers, skin rejuvenation and advanced anti-ageing procedures, all performed by qualified medical professionals." } },
              { "@type": "Question", name: "Where is Cosmedocs located?", acceptedAnswer: { "@type": "Answer", text: "Cosmedocs is located at 8-10 Harley Street, London W1G 9PF — a premium, private setting for all aesthetic consultations and treatments." } },
              { "@type": "Question", name: "How do I book a consultation at Cosmedocs?", acceptedAnswer: { "@type": "Answer", text: "Book by calling 0333 0551 503, emailing info@cosmedocs.com, or using our online booking system. Both in-person and virtual consultations are available." } },
              { "@type": "Question", name: "Are Cosmedocs practitioners qualified doctors?", acceptedAnswer: { "@type": "Answer", text: "Yes. Cosmedocs is doctor-led — every practitioner is a qualified medical professional with extensive aesthetic-medicine training. Dr. Ahmed Haq leads the team with over 17 years of experience." } },
              { "@type": "Question", name: "What is the Cosmedocs approach to aesthetics?", acceptedAnswer: { "@type": "Answer", text: "Our philosophy is invisible art — subtle, natural-looking results that enhance your features without looking overdone. Bold, natural, always your way." } },
            ],
          })}
        </script>

        <html lang="en-GB" />
      </Helmet>


      <main className="min-h-screen bg-black text-white selection:bg-[#C9A050]/40 antialiased">
        <Home2Header />

        {/* Hero */}
        <section className="relative px-5 sm:px-8 pt-24 pb-10 sm:pt-28 sm:pb-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight mb-6">
                Our aesthetics
                <br />
                <span className="text-[#C9A050]">is invisible art.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/70 max-w-2xl">
                Bold. Natural. Always your way. Browse our medical-aesthetic treatments, quiet, not loud. Transformation that speaks without saying a word.
              </p>

              <div className="mt-8 flex flex-col items-start gap-3">
                <Button asChild className="rounded-full bg-[#C9A050] hover:bg-[#b78f44] text-black font-semibold h-12 px-7">
                  <Link to="/contact/">Book a consultation</Link>
                </Button>
                <Link
                  to="/testapp"
                  className="group inline-flex items-center gap-2.5 pl-2 pr-4 py-2 rounded-full bg-gradient-to-r from-[#C9A050]/20 to-[#C9A050]/5 border border-[#C9A050]/40 text-[12px] font-medium text-[#F0D78C] hover:from-[#C9A050]/30 hover:to-[#C9A050]/10 transition shadow-[0_0_24px_-4px_rgba(201,160,80,0.5)]"
                >
                  <span className="relative inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#C9A050] text-black">
                    <ScanFace className="w-4 h-4 animate-pulse" />
                    <span className="absolute inset-0 rounded-full ring-2 ring-[#C9A050]/60 animate-ping" />
                  </span>
                  <span className="tracking-wide">Free AI Face Scan</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* Quiet trust row — Discretion + Instagram */}
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-white/55">
                <DiscretionBadge />
                <a
                  href="https://www.instagram.com/cosmedocs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#C9A050]/80 hover:text-[#C9A050] transition"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  @cosmedocs
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-[#C9A050]/20">
                <div className="relative aspect-[4/5] md:aspect-[5/6] w-full">
                  {HERO_SLIDES.map((slide, i) => {
                    // Only mount slide 1 initially — mount later slides after first paint
                    if (i > 0 && heroIdx < i && !heroMounted) return null;
                    return (
                      <img
                        key={slide.src}
                        src={cdnSrc(slide.src, 800, 72)}
                        srcSet={cdnSrcSet(slide.src, [420, 640, 800, 1000])}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 520px"
                        alt={slide.alt}
                        width={1920}
                        height={1280}
                        loading={i === 0 ? "eager" : "lazy"}
                        fetchPriority={i === 0 ? "high" : "low"}
                        decoding={i === 0 ? "sync" : "async"}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
                          i === heroIdx ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    );
                  })}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div className="text-white">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#C9A050]">{HERO_SLIDES[heroIdx].eyebrow}</p>
                    <p className="text-sm md:text-base font-light">{HERO_SLIDES[heroIdx].caption}</p>
                  </div>
                  <div className="flex gap-1.5" aria-hidden="true">
                    {HERO_SLIDES.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1 rounded-full transition-all duration-500 ${
                          i === heroIdx ? "w-6 bg-[#C9A050]" : "w-2 bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-0 w-[640px] h-[640px] rounded-full blur-3xl opacity-30"
            style={{ background: "radial-gradient(closest-side, rgba(201,160,80,0.45), transparent)" }}
          />
        </section>


        {/* Section navigator — sticky jump bar to each treatment row */}
        <nav
          aria-label="Treatment categories"
          className="sticky top-16 z-30 border-y border-[#C9A050]/15 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/55"
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6">
            <ul className="flex gap-1.5 sm:gap-2 overflow-x-auto py-2.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {quickLinks.map((q) => (
                <li key={q.id} className="shrink-0">
                  <a
                    href={`#${q.id}`}
                    onClick={handleQuickJump(q.id)}
                    className="inline-flex items-center text-[11px] sm:text-xs uppercase tracking-[0.18em] text-white/70 hover:text-[#F0D78C] border border-white/10 hover:border-[#C9A050]/50 bg-white/[0.03] hover:bg-[#C9A050]/10 rounded-full px-3.5 py-1.5 transition"
                  >
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Category sections — alternating tonal bands break the visual rhythm */}
        <div className="border-t border-white/5">
          {categories.map((cat, i) => {
            // Cycle: black → warm charcoal → near-black with gold sheen → cool slate
            const bands = [
              "bg-black",
              "bg-[#0e0c0a] [background-image:radial-gradient(ellipse_at_top,rgba(201,160,80,0.05),transparent_60%)]",
              "bg-[#111111]",
              "bg-[#0a0d12] [background-image:radial-gradient(ellipse_at_bottom_right,rgba(201,160,80,0.04),transparent_55%)]",
            ];
            const band = bands[i % bands.length];
            return (
              <div key={cat.id} className={`${band} border-b border-white/5`}>
                {cat.id === "botox-aesthetic" ? (
                  <BotoxAestheticSection category={cat} />
                ) : cat.id === "botox-medical" ? (
                  <MedicalBotoxSection category={cat} />
                ) : cat.id === "flawless-skin" ? (
                  <FlawlessSkinSection category={cat} />
                ) : (
                  <Row category={cat} index={i} />
                )}
              </div>
            );
          })}
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
            Aesthetic medicine should never announce itself. It should simply let you look, and feel, more like you.
          </p>
          <Button asChild className="mt-10 rounded-full bg-white text-black hover:bg-white/90 h-12 px-8 font-semibold">
            <Link to="/contact/">Begin your consultation</Link>
          </Button>
          <div className="mt-4">
            <a
              href={ACUITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-white/45 hover:text-[#C9A050] underline-offset-4 hover:underline transition"
            >
              Or book online instantly →
            </a>
          </div>
        </section>

        {/* FAQ — collapsed by default, indexable for SEO */}
        <section aria-labelledby="home3-faq" className="px-5 sm:px-8 max-w-3xl mx-auto pb-16">
          <h2 id="home3-faq" className="font-serif text-2xl sm:text-3xl text-white/90 mb-5">Frequently asked</h2>
          <div className="space-y-2">
            {[
              { q: "What treatments does Cosmedocs offer?", a: "A full range of non-surgical aesthetic treatments — anti-wrinkle injections, dermal fillers, lip fillers, skin rejuvenation and advanced anti-ageing — all performed by qualified medical doctors." },
              { q: "Where is Cosmedocs located?", a: "8-10 Harley Street, London W1G 9PF — a private, premium setting for consultations and treatments." },
              { q: "How do I book a consultation?", a: "Call 0333 0551 503, email info@cosmedocs.com, or use our online booking. Both in-person and virtual consultations are available." },
              { q: "Are practitioners qualified doctors?", a: "Yes. Cosmedocs is doctor-led — every practitioner is a qualified medical professional. Dr. Ahmed Haq leads the team with 17+ years of experience." },
              { q: "What is the Cosmedocs philosophy?", a: "Invisible art — subtle, natural-looking results. Bold, natural, always your way." },
            ].map((f) => (
              <details key={f.q} className="group rounded-lg border border-white/10 bg-white/[0.02] open:bg-white/[0.04] transition">
                <summary className="cursor-pointer list-none px-4 py-3 text-sm text-white/80 hover:text-white flex items-center justify-between gap-3">
                  <span>{f.q}</span>
                  <span className="text-[#C9A050] text-xs group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="px-4 pb-4 pt-1 text-[13px] leading-relaxed text-white/60">{f.a}</p>
              </details>
            ))}
          </div>
        </section>


        {/* Quick Links, pill nav at the bottom for fast jumping back up */}
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

        <NewsWidget />

        <section className="px-5 sm:px-8 py-12 border-t border-white/[0.06]">
          <DrAhmedQuote />
        </section>

        <footer className="border-t border-white/10 py-10 px-5 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-xs text-white/40">
            <p>© {new Date().getFullYear()} Cosmedocs. Doctor-led aesthetic medicine.</p>
            <div className="flex gap-5">
              <Link to="/about-us/" className="hover:text-white">About</Link>
              <Link to="/contact/" className="hover:text-white">Contact</Link>
            </div>
          </div>
        </footer>

        <Suspense fallback={null}>
          <WebsiteKnowledgeInitializer />
        </Suspense>
      </main>
    </>
  );
};

export default Home3;
