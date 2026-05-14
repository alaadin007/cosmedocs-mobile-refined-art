import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Syringe, ArrowRight, BookOpen } from "lucide-react";
import DiscretionBadge from "@/components/DiscretionBadge";

interface QuickRefRow {
  area: string;
  value: string;
}

interface DosageSidebarProps {
  /** Title for the quick reference card (e.g. "Lip Filler Quick Guide") */
  title: string;
  rows: QuickRefRow[];
  /** Key concept bullet points for the article */
  concepts: string[];
  /** Related guide links shown at bottom */
  related?: { label: string; path: string }[];
  /** Patient quote */
  reviewer?: { initial: string; name: string; quote: string };
}

const DEFAULT_RELATED = [
  { label: "Botox Cost UK — Pricing Guide", path: "/botox-cost-uk/" },
  { label: "Botox Units Explained", path: "/botox-units-explained/" },
  { label: "Dermal Fillers Treatments", path: "/treatments/dermal-fillers/" },
  { label: "Botox Treatments", path: "/treatments/botox/" },
  { label: "Before & After Gallery", path: "/before-after/" },
];

const DEFAULT_REVIEWER = {
  initial: "S",
  name: "Sophie L.",
  quote:
    "The doctor took time to explain volumes, anatomy, and what would actually suit my face — not just sell me a syringe. I left understanding the plan.",
};

const DosageSidebar = ({
  title,
  rows,
  concepts,
  related = DEFAULT_RELATED,
  reviewer = DEFAULT_REVIEWER,
}: DosageSidebarProps) => {
  return (
    <div className="space-y-6">
      {/* Quick Reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
      >
        <div className="flex items-center gap-2 mb-4">
          <Syringe className="w-4 h-4 text-[#C9A050]/70" />
          <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider">
            {title}
          </h3>
        </div>
        <div className="space-y-3">
          {rows.map((item) => (
            <div key={item.area} className="flex items-center justify-between text-sm gap-3">
              <span className="text-white/40">{item.area}</span>
              <span className="text-[#C9A050] font-medium text-right">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Key Concepts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5"
      >
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-4 h-4 text-[#C9A050]/70" />
          <p className="text-sm font-medium text-white/70">Key Concepts</p>
        </div>
        <ul className="space-y-1.5 text-xs text-white/40">
          {concepts.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-[#C9A050]/40 mt-1.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Review */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-[#C9A050] flex items-center justify-center text-black text-xs font-bold">
            {reviewer.initial}
          </div>
          <div>
            <p className="text-sm font-medium text-white">{reviewer.name}</p>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">"{reviewer.quote}"</p>
        <Link
          to="/testimonials/"
          className="inline-flex items-center gap-1 text-xs text-[#C9A050] mt-3 hover:underline"
        >
          More reviews
          <ArrowRight className="w-3 h-3" />
        </Link>
      </motion.div>

      {/* Related links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5"
      >
        <p className="text-sm font-medium text-white/70 mb-3">Related Guides</p>
        <div className="space-y-2">
          {related.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="flex items-center gap-2 text-xs text-white/40 hover:text-[#C9A050] transition-colors"
            >
              <ArrowRight className="w-3 h-3" />
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        <DiscretionBadge variant="inline" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <a
          href="https://med.as.me/harleystreet"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full py-3 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A050]/20"
        >
          Book Consultation
        </a>
      </motion.div>
    </div>
  );
};

export default DosageSidebar;
