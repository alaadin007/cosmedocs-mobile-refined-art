import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

interface TreatmentLink {
  name: string;
  path: string;
}

interface TreatmentCategory {
  heading: string;
  treatments: TreatmentLink[];
  note?: string;
}

interface ConcernData {
  title: string;
  whatsHappening: string;
  categories: TreatmentCategory[];
}

interface ConcernCardProps {
  concern: ConcernData;
  index: number;
}

const ConcernCard = ({ concern, index }: ConcernCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="border-b border-white/10 pb-10 last:border-b-0"
    >
      {/* Concern heading */}
      <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
        {concern.title}
      </h3>

      {/* What's happening */}
      <div className="mb-6">
        <p className="text-xs text-[#C9A050] uppercase tracking-wider mb-2">What's happening</p>
        <p className="text-white/60 leading-relaxed font-light">{concern.whatsHappening}</p>
      </div>

      {/* Preview — first category always visible */}
      <div className="mb-4">
        <p className="text-xs text-white/40 uppercase tracking-wider mb-3">Recommended Treatments</p>
        <CategoryBlock category={concern.categories[0]} />
      </div>

      {/* Expandable — remaining categories */}
      <AnimatePresence initial={false}>
        {isExpanded && concern.categories.length > 1 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-5 pt-2">
              {concern.categories.slice(1).map((cat, i) => (
                <CategoryBlock key={i} category={cat} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {concern.categories.length > 1 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 inline-flex items-center gap-1.5 text-[#C9A050]/80 hover:text-[#C9A050] text-xs tracking-wide uppercase transition-colors duration-200"
        >
          {isExpanded ? "Show less" : `View all ${concern.categories.length} treatment categories`}
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.span>
        </button>
      )}
    </motion.article>
  );
};

function CategoryBlock({ category }: { category: TreatmentCategory }) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
      <p className="text-sm font-medium text-[#C9A050]/90 mb-3">{category.heading}</p>
      <div className="flex flex-wrap gap-2">
        {category.treatments.map((t) => (
          <Link
            key={t.path}
            to={t.path}
            className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-[#C9A050] bg-white/[0.04] hover:bg-[#C9A050]/10 border border-white/[0.08] hover:border-[#C9A050]/30 rounded-full px-3 py-1.5 transition-all duration-200"
          >
            {t.name}
            <ArrowRight className="w-3 h-3 opacity-50" />
          </Link>
        ))}
      </div>
      {category.note && (
        <p className="text-xs text-white/40 mt-3 italic">{category.note}</p>
      )}
    </div>
  );
}

export default ConcernCard;
