import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   DATA — Treatment categories + their key areas
   ───────────────────────────────────────────── */
interface TreatmentArea {
  label: string;
  path: string;
}

interface TreatmentCategory {
  id: string;
  label: string;
  areas: TreatmentArea[];
}

const categories: TreatmentCategory[] = [
  {
    id: "botox",
    label: "Botox",
    areas: [
      { label: "Forehead Lines", path: "/treatments/botox/forehead/" },
      { label: "Frown Lines", path: "/treatments/botox/frown-lines/" },
      { label: "Crow's Feet", path: "/treatments/botox/crows-feet/" },
      { label: "Masseter (Jaw Slimming)", path: "/treatments/botox/masseter/" },
      { label: "Gummy Smile", path: "/treatments/botox/gummy-smile/" },
    ],
  },
  {
    id: "fillers",
    label: "Dermal Fillers",
    areas: [
      { label: "Lip Filler", path: "/treatments/dermal-fillers/lips/" },
      { label: "Cheek Filler", path: "/treatments/dermal-fillers/cheeks/" },
      { label: "Jawline Filler", path: "/treatments/dermal-fillers/jawline/" },
      { label: "Non-Surgical Nose Job", path: "/treatments/dermal-fillers/nose/" },
      { label: "Tear Trough", path: "/treatments/dermal-fillers/tear-trough/" },
    ],
  },
  {
    id: "skin-boosters",
    label: "Skin Boosters",
    areas: [
      { label: "Profhilo", path: "/treatments/skin-boosters/profhilo/" },
      { label: "Polynucleotides", path: "/treatments/skin-boosters/polynucleotides/" },
      { label: "Skin Boosters Overview", path: "/treatments/skin-boosters/" },
    ],
  },
  {
    id: "medical-botox",
    label: "Medical Botox",
    areas: [
      { label: "Hyperhidrosis", path: "/treatments/botox/hyperhidrosis/" },
      { label: "Bruxism", path: "/treatments/botox/masseter/" },
      { label: "Migraines", path: "/treatments/botox/migraines/" },
    ],
  },
  {
    id: "skin-hair",
    label: "Skin & Hair",
    areas: [
      { label: "PRP Hair Restoration", path: "/treatments/skin-hair/prp-hair/" },
      { label: "Microneedling", path: "/treatments/skin-hair/microneedling/" },
      { label: "Chemical Peels", path: "/treatments/skin-hair/chemical-peels/" },
    ],
  },
  {
    id: "surgery",
    label: "Surgery",
    areas: [
      { label: "Blepharoplasty", path: "/treatments/plastic-surgery/blepharoplasty/" },
      { label: "Rhinoplasty", path: "/treatments/plastic-surgery/rhinoplasty/" },
      { label: "Otoplasty", path: "/treatments/plastic-surgery/otoplasty/" },
    ],
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */
export default function QuickAccessTreatments() {
  const [activeId, setActiveId] = useState("botox");
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeCategory = categories.find((c) => c.id === activeId) ?? categories[0];

  // Scroll active pill into view on mobile
  useEffect(() => {
    const el = document.getElementById(`qat-pill-${activeId}`);
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeId]);

  return (
    <nav
      aria-label="Explore treatments"
      className="relative py-12 md:py-14 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-light mb-3 tracking-tight">
            Explore Our <span className="text-[#C9A050]">Treatments</span>
          </h2>
          <p className="text-white/45 text-sm md:text-base font-light">
            Doctor-led aesthetic treatments, tailored to your concerns.
          </p>
        </div>

        {/* ── SLIDER 1 — Category pills ── */}
        <div
          ref={scrollRef}
          className="flex gap-2 md:gap-3 justify-start md:justify-center overflow-x-auto scrollbar-hide pb-2 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none"
        >
          {categories.map((cat) => {
            const isActive = cat.id === activeId;
            return (
              <button
                id={`qat-pill-${cat.id}`}
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`
                  relative flex-shrink-0 snap-center px-5 py-2.5 rounded-full text-sm font-medium
                  transition-all duration-300 whitespace-nowrap
                  ${
                    isActive
                      ? "bg-[#C9A050]/15 text-[#C9A050] border border-[#C9A050]/40"
                      : "text-white/50 border border-white/[0.08] hover:border-white/20 hover:text-white/70"
                  }
                `}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ── SLIDER 2 — Treatment area links ── */}
        <div className="mt-8 min-h-[56px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex gap-2 md:gap-3 justify-start md:justify-center overflow-x-auto scrollbar-hide pb-2 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none"
            >
              {activeCategory.areas.map((area) => (
                <Link
                  key={area.path}
                  to={area.path}
                  className="
                    flex-shrink-0 snap-center px-5 py-3 rounded-xl text-sm font-light
                    bg-white/[0.04] border border-white/[0.08]
                    hover:border-[#C9A050]/30 hover:bg-[#C9A050]/[0.06] hover:text-[#C9A050]
                    text-white/70 transition-all duration-300 whitespace-nowrap
                  "
                >
                  {area.label}
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
