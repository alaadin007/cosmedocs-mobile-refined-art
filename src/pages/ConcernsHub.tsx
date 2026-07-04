import React, { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, ChevronDown, Sparkles, RotateCw } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEOMetadata } from "@/utils/seo";
import { concernsData } from "@/data/concernsData";
import SkinFoundationCTA from "@/components/SkinFoundationCTA";
import EndolaserSpotlight from "@/components/EndolaserSpotlight";

/* ------------------------------------------------------------------ */
/*  Card styling — mirrors Home3 "Apple-style" dark luxury cards       */
/* ------------------------------------------------------------------ */

type ConcernCard = {
  title: string;
  tagline: string;
  href: string;
  badge?: string;
  categoryHeading: string;
  back: string;
  pathwayNote?: string;
};

const cardBgs = [
  "bg-[#0d1218]",
  "bg-[#11161c]",
  "bg-[#0a0f14]",
  "bg-[#141a20]",
];

const Watermark = ({ title }: { title: string }) => (
  <div aria-hidden className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,160,80,0.18),transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,160,80,0.08),transparent_55%)]" />
    <span className="absolute -bottom-6 -right-3 font-serif text-[120px] leading-none text-white/[0.03] select-none whitespace-nowrap">
      {title.split(" ")[0]}
    </span>
  </div>
);

const FlipTreatmentCard = ({ card, bg }: { card: ConcernCard; bg: string }) => {
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

  return (
    <div
      ref={containerRef}
      className="[perspective:1400px] h-full w-full select-none"
      itemScope
      itemType="https://schema.org/MedicalTherapy"
      onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setFlipped(true); }}
      onMouseLeave={() => { if (window.matchMedia("(hover: hover)").matches) setFlipped(false); }}
    >
      <div
        className="relative w-full h-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] [-webkit-transform-style:preserve-3d] will-change-transform"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)", WebkitTransform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* FRONT */}
        <div
          style={{ transform: "rotateY(0deg)", WebkitTransform: "rotateY(0deg)" }}
          className={`absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] block overflow-hidden rounded-[28px] text-left ${bg} text-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] border border-white/5 ${flipped ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <Watermark title={card.title} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black/55 pointer-events-none" />
          {card.badge && (
            <span className="absolute top-4 left-4 z-10 text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-black/70 text-white/90 backdrop-blur">
              {card.badge}
            </span>
          )}
          <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end pointer-events-none">
            <h3 itemProp="name" className="font-serif text-2xl sm:text-3xl leading-[1.05] tracking-tight max-w-[90%]">
              {card.title}
            </h3>
            <p className="mt-2 text-sm text-white/70 max-w-[88%]">{card.tagline}</p>
            <Link
              to={card.href}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-[#C9A050] pointer-events-auto self-start hover:gap-2.5 transition-all"
            >
              Discover <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <link itemProp="url" href={`https://www.cosmedocs.com${card.href}`} />
          </div>

          {/* Gold corner flip button */}
          <button
            type="button"
            onClick={() => setFlipped(true)}
            aria-label={`${card.title}, reveal pathway detail`}
            className="absolute bottom-4 right-4 z-30 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#C9A050] text-black shadow-[0_0_24px_rgba(201,160,80,0.55)] hover:scale-105 active:scale-95 transition"
          >
            <RotateCw className="w-4 h-4" />
          </button>
        </div>

        {/* BACK */}
        <div
          style={{ transform: "rotateY(180deg)", WebkitTransform: "rotateY(180deg)" }}
          className={`absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] block overflow-hidden rounded-[28px] bg-[#0a0a0a] text-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] border border-[#C9A050]/20 ${flipped ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,160,80,0.14),transparent_60%)]" />
          <button
            type="button"
            onClick={() => setFlipped(false)}
            aria-label="Flip card back"
            className="absolute top-3 right-3 z-30 w-10 h-10 rounded-full bg-[#C9A050] text-black shadow-[0_0_24px_rgba(201,160,80,0.55)] hover:scale-105 active:scale-95 transition flex items-center justify-center"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          <div className="relative z-10 h-full p-6 sm:p-7 flex flex-col">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#C9A050] mb-2">{card.categoryHeading}</p>
            <h3 className="font-serif text-xl sm:text-2xl leading-tight text-[#F0D78C]">{card.title}</h3>
            <p itemProp="description" className="mt-3 text-[13px] sm:text-sm text-white/80 leading-relaxed overflow-hidden">{card.back}</p>
            {card.pathwayNote && (
              <p className="mt-3 text-[11px] italic text-white/50 leading-snug">{card.pathwayNote}</p>
            )}
            <Link
              to={card.href}
              className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A050] self-start"
            >
              Discover {card.title.split(" ")[0]} <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Horizontal Row scroller                                            */
/* ------------------------------------------------------------------ */

type RowData = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  cards: ConcernCard[];
  ctaHref: string;
  ctaLabel: string;
};

const Row = ({ row, index }: { row: RowData; index: number }) => {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <motion.section
      id={row.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.05 * index }}
      className="py-12 sm:py-16 scroll-mt-20"
      aria-labelledby={`${row.id}-title`}
    >
      <div className="px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-7">
          <div className="min-w-0">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C9A050] mb-2">
              {row.eyebrow}
            </p>
            <h2
              id={`${row.id}-title`}
              className="font-serif text-3xl sm:text-5xl text-white leading-tight tracking-tight"
            >
              {row.title}
            </h2>
            <p className="mt-3 text-white/65 text-sm sm:text-base max-w-2xl">
              {row.copy}
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 backdrop-blur flex items-center justify-center text-white/80 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 backdrop-blur flex items-center justify-center text-white/80 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scroller}
        className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 px-5 sm:px-8 overscroll-x-contain [touch-action:pan-x_pan-y] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {row.cards.map((card, i) => (
          <div
            key={card.title + i}
            className="shrink-0 w-[72vw] sm:w-[320px] md:w-[360px] h-[58vh] min-h-[420px] max-h-[560px] sm:h-[64vh] sm:min-h-[480px] sm:max-h-[600px]"
          >
            <FlipTreatmentCard card={card} bg={cardBgs[i % cardBgs.length]} />
          </div>
        ))}
        <Link
          to={row.ctaHref}
          className="group shrink-0 w-[58vw] sm:w-[220px] md:w-[260px] h-[58vh] min-h-[420px] max-h-[560px] sm:h-[64vh] sm:min-h-[480px] sm:max-h-[600px] rounded-[28px] border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur flex flex-col items-center justify-center text-center px-6 transition"
        >
          <div className="w-12 h-12 rounded-full bg-[#C9A050]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <ChevronRight className="w-5 h-5 text-[#C9A050]" />
          </div>
          <p className="text-white text-sm font-medium leading-snug">
            {row.ctaLabel}
          </p>
          <p className="text-white/50 text-xs mt-1">View all</p>
        </Link>
      </div>
    </motion.section>
  );
};

/* ------------------------------------------------------------------ */
/*  Crawlable, visually-collapsed deep-SEO accordion                  */
/*  Content is always in the DOM (kept invisible via max-height)      */
/* ------------------------------------------------------------------ */

const DeepClinicalDepth = ({
  concernTitle,
  paragraphs,
}: {
  concernTitle: string;
  paragraphs: string[];
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-5 sm:px-8 max-w-4xl mx-auto -mt-2 mb-10">
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          open ? "max-h-[3000px]" : "max-h-0"
        }`}
        aria-hidden={!open}
      >
        <div className="text-white/65 text-sm leading-relaxed space-y-4 pt-4 border-t border-white/10">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="mt-4 inline-flex items-center gap-1.5 text-[#C9A050]/80 hover:text-[#C9A050] text-xs uppercase tracking-[0.18em] transition-colors"
        aria-expanded={open}
      >
        {open ? "Show less" : `Read the full clinical note on ${concernTitle.toLowerCase()}`}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Concern → Row mapping                                              */
/* ------------------------------------------------------------------ */

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const TAGLINE_BY_HEADING: Record<string, string> = {
  "Prescription & Medical Skincare": "Doctor-prescribed foundation",
  "Skin Regeneration": "Bio-stimulation, not bulk",
  "Volume & Structural Support": "Architectural restoration",
  "Advanced Rejuvenation": "Multi-modality protocol",
  "Prescription & Preventative Care": "Daily medical regimen",
  "Muscle Modulation": "Quiet wrinkle relaxation",
  "Skin Quality Support": "Hydration · elasticity",
  "Targeted Correction": "Selected static lines",
  "Exfoliation & Resurfacing": "Surface renewal",
  "Collagen Stimulation": "Regeneration from within",
  "Advanced Resurfacing": "Selected indications",
  "Prescription Skincare (Foundation)": "Hydroquinone · retinoids",
  "Skin Renewal": "Melasma-safe protocols",
  "Adjunct Treatments": "Supportive, not primary",
  "Prescription Dermatology": "Acne · scarring control",
  "Active Acne Control": "Inflammation reduced",
  "Scar Remodelling": "Collagen rebuild",
  "Structural Correction (Selected Cases)": "Depressed-scar correction",
  "Structural Tightening": "Threads · microneedling",
  "Supportive Volume": "Lift-vector restoration",
  "Surgical Options (Advanced Laxity)": "Beyond non-surgical",
};

const TREATMENT_BACK: Record<string, string> = {
  "Medical-Grade Skincare (incl. Retinoids)": "Doctor-prescribed retinoids, antioxidants and pigment regulators rebuild the dermis from the inside. This is the daily foundation every pathway sits on — without it, in-clinic results fade quickly.",
  "Pigment-Regulating Skincare": "Targeted topical actives — tranexamic acid, kojic, niacinamide — calibrated to your subtype. Used cyclically alongside SPF 50 to interrupt melanin overproduction without rebound pigmentation.",
  "Polynucleotides": "Salmon-DNA fragments that signal fibroblasts to regenerate. Improves skin quality, elasticity and tear-trough hollowing across 2–3 sessions. Not a filler — a true bio-stimulator.",
  "Profhilo": "Pure stabilised hyaluronic acid that hydrates and lifts at the dermal level. Two sessions, four weeks apart. Quiet glow, no volume distortion.",
  "Microneedling": "Controlled micro-injury triggers collagen remodelling without thermal damage. Safe across all skin types, including melasma-prone Fitzpatrick V–VI.",
  "PRP Treatment": "Platelet-rich plasma drawn from your own blood, spun and reintroduced. Growth factors accelerate tissue repair and skin quality.",
  "Cheek Filler": "Hyaluronic acid placed supraperiosteally to restore the deep medial fat compartment. Architectural lift, not pillow cheek.",
  "Temple Filler": "Conservative volumisation of hollowed temples — one of the earliest signs of facial ageing — to restore the upper-third frame.",
  "Jawline Filler": "Mandibular angle and pre-jowl sculpting to redefine a softening jawline. Lift-vector technique, not bulk.",
  "Chin Filler": "Projection and balance for the lower third. Often the missing piece in profile harmony and feminisation/masculinisation.",
  "Full Face Rejuvenation": "Sequenced multi-modality programme — regenerative, structural and skin-quality treatments staged across months for a cohesive, unread result.",
  "Liquid Facelift": "Our 8 or 11-point lifting protocol. A single doctor-led session that re-establishes mid-face support and jawline definition.",
  "PDO Threads": "Dissolvable cog and mono threads that re-suspend descended tissue and stimulate collagen along thread tracks. No scars, 2–3 year longevity.",
  "Anti-Wrinkle Injections (Botox)": "Micro-dosed botulinum toxin to soften dynamic lines while preserving authentic expression. Smallest effective dose, never the maximum.",
  "Fine-Line Dermal Fillers": "Superficial micro-droplet placement for individual etched static lines that have not responded to skincare and regeneration.",
  "Chemical Peels": "Medical-strength acids selected by skin type — mandelic, Jessner, TCA — to renew the surface and clarify tone without thermal injury.",
  "HydraFacial": "Decongestion, exfoliation and serum infusion in one session. Barrier-friendly, suitable between active treatments.",
  "CO₂ Laser": "Fractional or fully ablative resurfacing for deep textural change. Reserved for selected cases after surface treatments have plateaued.",
  "Hydroquinone Regimens": "Cycled prescription bleaching agent for stubborn pigmentation. Used in defined courses with strict sun protection — never indefinitely.",
  "Azelaic Acid Protocols": "Anti-inflammatory and pigment-regulating, particularly effective in melasma and post-inflammatory hyperpigmentation.",
  "Prescription Acne Regimens": "Tailored topical and oral protocols by acne subtype — comedonal, inflammatory, hormonal — managed by our doctors with regular review.",
  "Acne Treatment": "Multi-stage clinical pathway from active control to scar remodelling, sequenced over months. We treat the disease before the damage.",
  "Dermal Fillers for Depressed Scars": "Hyaluronic acid placed selectively into individual depressed scars by a doctor familiar with the vascular field.",
  "Facelift Surgery": "Surgical referral for advanced laxity beyond non-surgical reach. Honest medicine includes knowing when to refer out.",
};

const buildRows = (): RowData[] =>
  concernsData.map((c, idx) => {
    const cards: ConcernCard[] = [];
    c.categories.forEach((cat) => {
      cat.treatments.forEach((t, ti) => {
        cards.push({
          title: t.name,
          tagline: TAGLINE_BY_HEADING[cat.heading] ?? cat.heading,
          href: t.path,
          badge: ti === 0 && cat.heading.includes("Prescription") ? "Foundation" : undefined,
          categoryHeading: cat.heading,
          back: TREATMENT_BACK[t.name] ?? `Part of the ${cat.heading.toLowerCase()} layer of the ${c.title.toLowerCase()} pathway. Selected and sequenced by your doctor following clinical assessment, not from a menu.`,
          pathwayNote: cat.note,
        });
      });
    });

    const eyebrow = idx === 0 ? "Concern · Most-asked" : `Concern · Pathway ${idx + 1}`;

    return {
      id: slugify(c.title),
      eyebrow,
      title: c.title + ".",
      copy: c.whatsHappening,
      cards,
      ctaHref: "/contact/",
      ctaLabel: `Discuss ${c.title.split(" ")[0].toLowerCase()} with a doctor`,
    };
  });

/* ------------------------------------------------------------------ */
/*  Deep clinical SEO copy (~500 words per concern, always in DOM)    */
/* ------------------------------------------------------------------ */

const DEEP_COPY: Record<string, string[]> = {
  "Facial Ageing & Volume Loss": [
    "Facial ageing is not one process but several happening in parallel. The deep and superficial fat compartments of the cheek, temple and periorbital region descend and atrophy. The bony platform of the maxilla, mandible and orbit resorbs. Collagen and elastin within the dermis decline at roughly one to one-and-a-half percent per year from the late twenties onward. The retaining ligaments that anchor soft tissue to bone weaken, allowing the mid-face to migrate inferiorly. The visible result is hollowing of the temples, flattening of the cheek, deepening of the nasolabial and labiomental folds, jowl formation along a softening jawline, and a thinning of the perioral and periorbital skin envelope.",
    "Doctor-led correction starts with assessment, not a syringe. We map volume loss against bone, identify where the soft-tissue envelope has descended versus deflated, and decide whether the priority is structural support, skin quality, or both. Foundational care is medical-grade and prescription skincare — retinoids, antioxidants, sunscreen — to slow the cellular drivers of ageing. On top of that we layer regenerative treatments such as Profhilo, polynucleotides, microneedling and PRP, which restore extracellular matrix quality and signal fibroblasts to behave as they did a decade earlier. Where bone or fat-pad loss has produced visible hollowing, hyaluronic acid filler is placed in deep, structural planes — supraperiosteal cheek, deep medial fat compartment, mandibular angle — to restore the platform that the overlying tissue rests on.",
    "Advanced cases benefit from combination protocols such as the Liquid Facelift (an eight or eleven-point lifting sequence), PDO threads to re-suspend lax tissue, and full-face rejuvenation programmes that sequence regenerative, structural and skin-quality treatments over several months. The goal is the same throughout: an unread, rested face. No frozen forehead, no pillow cheek, no operated jawline. Just a face that looks like the patient on a good day, ten years ago. Everything we do is reversible, titratable and medically supervised. Realistic timelines, honest limits, doctor-led aftercare. That is what separates restoration from distortion.",
  ],
  "Lines & Wrinkles": [
    "Lines and wrinkles fall into two clinically distinct groups, and treating them as if they were the same is the commonest reason patients are unhappy with their results. Dynamic lines are produced by repeated muscle contraction — frowning, smiling, squinting — and disappear when the face is at rest. They respond predictably to anti-wrinkle injections (botulinum toxin), which selectively relax the responsible muscle without altering expression elsewhere. Static lines remain visible at rest because the dermis underneath has lost collagen and the epidermis has thinned. Botox alone does not erase a static line; the skin itself has to be rebuilt.",
    "Our protocol begins with foundational prescription skincare — clinical-strength retinoids, peptides, antioxidants — which is the only intervention proven to thicken the dermis and improve skin quality long-term. For dynamic lines on the upper face (forehead, glabella, crow's feet) we use micro-dosed Botox at the lowest effective dose to soften the line while preserving authentic expression. For deeper, etched static lines we add skin-quality regenerators such as Profhilo, polynucleotides and microneedling, which recruit fibroblasts to lay down new collagen over eight to twelve weeks. Fine, well-selected dermal filler is reserved for individual static lines that have not responded to the above and is placed superficially, in micro-droplet technique, by a doctor who understands the vascular anatomy of the area.",
    "The patient question we hear most often is whether starting Botox in the late twenties or early thirties prevents future lines. The honest answer, supported by the evidence, is that consistent early intervention does delay the conversion of dynamic lines into static lines, but it cannot stop ageing. We treat early in the spirit of prejuvenation — the smallest effective dose, infrequent intervals, never the maximum the muscle will tolerate. The face should still move, smile, frown, react. Aesthetic medicine should be invisible. If you can tell someone has had it done, it has been done badly.",
  ],
  "Skin Texture & Tone": [
    "Skin texture and tone are governed by three things: the rate at which keratinocytes turn over, the integrity of the lipid barrier, and the quality of the underlying dermal collagen. When any of those three deteriorates — through ultraviolet exposure, pollution, hormonal shifts, or simply time — the surface looks dull, the pores enlarge, the tone becomes uneven, and the skin no longer reflects light cleanly. The fix is sequential, not single-modality. There is no laser, peel or facial that can substitute for a corrected daily regimen.",
    "Foundation work is medical skincare: a prescription retinoid to accelerate cell turnover, a vitamin C antioxidant to neutralise free radicals, a broad-spectrum SPF 50 used daily, and pigment-regulating actives where indicated. On top of that foundation we layer in-clinic exfoliation and resurfacing — chemical peels selected by skin type and Fitzpatrick phototype, HydraFacial for barrier-friendly decongestion, and microneedling to drive controlled wound healing without thermal injury. For deeper textural concerns and selected scarring we add collagen-stimulating treatments such as PRP and polynucleotides, both of which recruit the patient's own regenerative biology.",
    "Advanced resurfacing — fractional or fully ablative CO₂ laser — is reserved for cases where surface-level intervention has been exhausted. We do not lead with laser. We do not laser melasma-prone or Fitzpatrick V–VI skin without specific protocol. And we do not use CO₂ as a one-size-fits-all answer to every textural concern. Skin is an organ, not a canvas. Treat it with the same diagnostic rigour you would apply to any other organ.",
  ],
  "Pigmentation & Discolouration": [
    "Pigmentation is the most over-treated and under-diagnosed concern in aesthetic medicine. Hyperpigmentation, melasma, post-inflammatory hyperpigmentation, sun-induced lentigines and hormonal pigmentation all look superficially similar but respond very differently — and in some cases, opposite — to the same intervention. Aggressive resurfacing or heat-based laser on melasma-prone skin can convert a manageable problem into a permanent one. Diagnosis matters before treatment.",
    "Our pigmentation protocol is built on a foundation of prescription skincare: hydroquinone (cycled, never indefinite) or tranexamic acid as melanin-pathway inhibitors, prescription retinoids to accelerate keratinocyte turnover and clear superficial pigment, azelaic acid for inflammatory and hormonal subtypes, and high-protection daily sunscreen as the single non-negotiable. Without daily SPF 50, no pigmentation treatment will hold.",
    "In-clinic we use melasma-safe chemical peels — typically modified Jessner, mandelic, or low-concentration TCA — and microneedling at conservative depths to disperse pigment without inducing post-inflammatory hyperpigmentation. Polynucleotides are used as an adjunct to support barrier and reduce inflammatory drive, particularly in melasma. Injectables are not a primary treatment for pigmentation; they are supportive. If a clinic offers you filler or Botox to fix pigmentation, walk out. Pigmentation is a dermatological problem and demands a dermatological pathway.",
  ],
  "Acne & Scarring": [
    "Active acne and acne scarring are two separate problems that require two separate treatment plans. Treating scars while acne is still inflamed is futile — new lesions will produce new scars, and resurfacing the surface while the dermis is still inflamed risks worsening pigmentation. The first phase is always control of active disease. The second phase, often months later, is structural correction of the residual damage.",
    "Active control begins with a prescription regimen tailored to acne subtype — comedonal, inflammatory, hormonal, nodulocystic — and severity. Topical retinoids, benzoyl peroxide, topical or oral antibiotics, and in selected cases hormonal modulation or oral isotretinoin under appropriate supervision. In-clinic we use medical chemical peels and HydraFacial to decongest follicles and reduce inflammatory load between regimen reviews. Hormonal assessment is offered for persistent, cyclical, or jawline-distributed acne, particularly in adult female patients.",
    "Once active disease is controlled and the skin has stabilised — typically a window of three to six months — we move to scar remodelling. Microneedling, PRP and polynucleotides drive controlled collagen remodelling for atrophic and rolling scars. Fractional CO₂ laser is reserved for deeper boxcar and ice-pick patterns. Hyaluronic acid dermal filler is used selectively for individual depressed scars, placed by a doctor who understands the vascular field of the area. Subcision releases tethered scar bases. Each tool has its place; none is a universal answer. Honest scar work takes a year or more. Anyone offering a single-session miracle is selling marketing, not medicine.",
  ],
  "Skin Laxity & Sagging": [
    "Laxity is the visible expression of three converging changes: loss of dermal collagen and elastin, weakening of the retaining ligaments that anchor soft tissue to bone, and atrophy of the deep and superficial fat compartments that provide volumetric support. The jawline softens, jowls form, the neck loses definition, and the mid-face descends. Skin-only treatments cannot reverse ligamentous laxity, and volume alone cannot tighten a slack envelope. Honest correction requires a layered approach.",
    "We begin with skin quality. Profhilo and polynucleotides bio-stimulate fibroblasts to improve dermal hydration and elasticity over a series of treatments. Medical-grade prescription skincare — retinoids, peptides, antioxidants — supports the underlying biology day to day. For tightening of the envelope itself we use PDO threads (cog and mono) to re-suspend descended tissue and stimulate collagen along the thread tracks, and microneedling to drive controlled remodelling.",
    "Where laxity is compounded by volume loss — and it almost always is — supportive hyaluronic acid filler is placed in lift vectors at the cheek, jawline and chin to recreate the structural platform the soft tissue once rested on. The combination, sequenced thoughtfully, gives the appearance of a lifted face without surgery. There is, however, a ceiling. When laxity has progressed beyond the reach of non-surgical intervention, the honest recommendation is a surgical consultation — a deep-plane facelift performed by a qualified surgeon. We will say so. Aesthetic medicine done well includes knowing when to refer out.",
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const ConcernsHub = () => {
  const seoData = generateSEOMetadata(
    "Skin & Face Concerns | Doctor-Led Pathways | Cosmedocs Harley Street",
    "Browse skin and face concerns clinically — ageing, lines, texture, pigmentation, acne, laxity. Doctor-led assessment and ordered treatment pathways at Harley Street, London.",
    "/concerns/"
  );

  const rows = buildRows();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://www.cosmedocs.com/#organization",
        name: "Cosmedocs",
        url: "https://www.cosmedocs.com/",
        logo: "https://www.cosmedocs.com/default-og-image.jpg",
        telephone: "+44 20 3733 3227",
        address: {
          "@type": "PostalAddress",
          streetAddress: "10 Harley Street",
          addressLocality: "London",
          postalCode: "W1G 9PF",
          addressCountry: "GB",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2847",
          bestRating: "5",
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://www.cosmedocs.com/concerns/",
        url: "https://www.cosmedocs.com/concerns/",
        name: seoData.title,
        description: seoData.description,
        about: concernsData.map((c) => ({
          "@type": "MedicalCondition",
          name: c.title,
          description: c.whatsHappening,
          possibleTreatment: c.categories
            .flatMap((cat) => cat.treatments)
            .map((t) => ({ "@type": "MedicalTherapy", name: t.name, url: `https://www.cosmedocs.com${t.path}` })),
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cosmedocs.com/" },
          { "@type": "ListItem", position: 2, name: "Concerns", item: "https://www.cosmedocs.com/concerns/" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I know which concern category my skin falls into?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most patients present with overlapping concerns — lines and texture, pigmentation and laxity. A doctor-led consultation maps the dominant driver, sequences treatments, and avoids the common mistake of treating one concern in isolation while another worsens.",
            },
          },
          {
            "@type": "Question",
            name: "Are skin concerns treated medically or cosmetically at Cosmedocs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Both, and always doctor-led. Active acne, eczema, melasma and rosacea are treated dermatologically with prescription regimens. Cosmetic concerns — lines, volume loss, laxity — are addressed with regenerative and structural protocols. The same doctor manages both ends.",
            },
          },
          {
            "@type": "Question",
            name: "Why is prescription skincare positioned as the foundation of every pathway?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Without an active topical regimen — typically a retinoid, antioxidant, sunscreen, and where indicated a pigment regulator — in-clinic interventions deliver short-lived results. Skincare maintains the gains; the clinic accelerates them.",
            },
          },
          {
            "@type": "Question",
            name: "How long do results from a concerns pathway take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Regenerative protocols (Profhilo, polynucleotides, microneedling) show measurable improvement at eight to twelve weeks. Structural treatments (filler, threads) are visible immediately and continue refining over four to six weeks. Active dermatological conditions are reviewed at six and twelve weeks.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} data-rh="true" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="bg-black text-white min-h-screen">
        {/* Hero */}
        <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 px-5 sm:px-8 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,160,80,0.18),transparent_55%)]"
          />
          <div className="relative max-w-7xl mx-auto">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Concerns", href: "/concerns/" },
              ]}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-8 max-w-3xl"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#C9A050] mb-4 inline-flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> Doctor-led · Read clinically
              </p>
              <h1 className="font-serif text-5xl sm:text-7xl leading-[0.95] tracking-tight">
                Concerns,
                <br />
                <span className="text-[#C9A050]">read clinically.</span>
              </h1>
              <p className="mt-6 text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
                Every concern has a sequence. We treat in the order skin biology
                allows — foundation first, regeneration next, structure last.
                Bold, natural, always your way.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact/"
                  className="inline-flex items-center gap-2 bg-[#C9A050] text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#e3c074] transition"
                >
                  Book a doctor-led assessment <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/testapp"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition"
                >
                  Try the AI face scan
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick anchor index */}
        <nav aria-label="Concerns index" className="px-5 sm:px-8 max-w-7xl mx-auto pb-6">
          <ul className="flex flex-wrap gap-2 text-xs">
            {rows.map((r) => (
              <li key={r.id}>
                <a
                  href={`#${r.id}`}
                  className="inline-block px-3 py-1.5 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-[#C9A050]/60 transition"
                >
                  {r.title.replace(/\.$/, "")}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Concern rows */}
        {rows.map((row, i) => (
          <React.Fragment key={row.id}>
            <Row row={row} index={i} />
            <DeepClinicalDepth
              concernTitle={row.title.replace(/\.$/, "")}
              paragraphs={DEEP_COPY[row.title.replace(/\.$/, "")] ?? []}
            />
          </React.Fragment>
        ))}

        {/* Skin foundation cross-sell */}
        <section className="px-5 sm:px-8 py-16">
          <div className="max-w-5xl mx-auto">
            <SkinFoundationCTA variant="general" />
          </div>
        </section>

        {/* Endolaser cross-promote — relevant to skin laxity / ageing concern */}
        <section className="px-5 sm:px-8 pb-16">
          <div className="max-w-5xl mx-auto">
            <EndolaserSpotlight variant="inline" />
          </div>
        </section>

        {/* Closing conversion */}
        <section className="px-5 sm:px-8 py-20 sm:py-28 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#C9A050] mb-4">
              Your consultation begins here
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
              The right pathway is the
              <br />
              <span className="text-[#C9A050]">honest one.</span>
            </h2>
            <p className="mt-5 text-white/65 text-base sm:text-lg leading-relaxed">
              No upselling. No theatre. A doctor maps your concern, explains the
              sequence, and tells you what we will not do as clearly as what we
              will. Aesthetic medicine should be invisible — quiet, not loud.
            </p>
            <Link
              to="/contact/"
              className="mt-8 inline-flex items-center gap-2 bg-[#C9A050] text-black px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#e3c074] transition"
            >
              Book your assessment <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default ConcernsHub;
