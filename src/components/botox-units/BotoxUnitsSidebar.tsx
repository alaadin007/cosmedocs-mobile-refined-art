import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Syringe, ArrowRight, BookOpen } from "lucide-react";
import DiscretionBadge from "@/components/DiscretionBadge";

const BotoxUnitsSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Dosing Quick Reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
      >
        <div className="flex items-center gap-2 mb-4">
          <Syringe className="w-4 h-4 text-[#C9A050]/70" />
          <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider">
            Quick Unit Guide
          </h3>
        </div>
        <div className="space-y-3">
          {[
            { area: "Forehead", units: "10–30" },
            { area: "Frown lines", units: "10–25" },
            { area: "Crow's feet", units: "12–24" },
            { area: "Masseter", units: "40–60" },
            { area: "Lip flip", units: "4–6" },
          ].map((item) => (
            <div key={item.area} className="flex items-center justify-between text-sm">
              <span className="text-white/40">{item.area}</span>
              <span className="text-[#C9A050] font-medium">{item.units} units</span>
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
          {[
            "What a Botox 'unit' actually measures",
            "Area-by-area dosing for men & women",
            "Why under-dosing causes poor results",
            "Gender differences in Botox dosing",
            "Common dosing mistakes to avoid",
            "First-time patient expectations",
          ].map((item) => (
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
            J
          </div>
          <div>
            <p className="text-sm font-medium text-white">James T.</p>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          "Dr Haq explained exactly how many units I needed and why. My previous clinic used half the dose — no wonder it only lasted a few weeks. Huge difference."
        </p>
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
          {[
            { label: "Botox Cost UK — Pricing Guide", path: "/botox-cost-uk/" },
            { label: "Botox treatments", path: "/treatments/botox/" },
            { label: "Before & after Botox", path: "/before-after/botox/" },
            { label: "Botox FAQs", path: "/botox-faqs/" },
          ].map((link) => (
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

      {/* Discretion Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        <DiscretionBadge variant="inline" />
      </motion.div>

      {/* Book CTA */}
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

export default BotoxUnitsSidebar;
