import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Shield, ArrowRight, BookOpen, Scale } from "lucide-react";
import DiscretionBadge from "@/components/DiscretionBadge";

const CheapBotoxSidebar = () => {
  return (
    <div className="space-y-6">
      {/* At a Glance */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <Scale className="w-4 h-4 text-[#C9A050]/70" />
          <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider">At a Glance</h3>
        </div>
        <div className="space-y-3">
          {[
            { label: "Budget range", value: "£99–£150" },
            { label: "Premium range", value: "£275–£425" },
            { label: "Budget duration", value: "6–8 weeks" },
            { label: "Premium duration", value: "3–6 months" },
            { label: "Recommended units (3 areas)", value: "40–64" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between text-sm">
              <span className="text-white/40">{item.label}</span>
              <span className="text-[#C9A050] font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Key Concepts */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-4 h-4 text-[#C9A050]/70" />
          <p className="text-sm font-medium text-white/70">Key Concepts</p>
        </div>
        <ul className="space-y-1.5 text-xs text-white/40">
          {[
            "Cheap Botox vs expensive comparison",
            "Under-dosing warning signs",
            "Cost per month calculation",
            "Practitioner qualification check",
            "Red flags for budget clinics",
            "Annual cost comparison",
            "Safety and complication risks",
            "Premium treatment inclusions",
          ].map((concept) => (
            <li key={concept} className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-[#C9A050]/50 mt-1.5 shrink-0" />
              {concept}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Review Card */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[#C9A050] text-[#C9A050]" />
          ))}
        </div>
        <p className="text-white/50 text-xs italic leading-relaxed mb-3">
          "I wasted a year going to a budget clinic — results never lasted more than 6 weeks. Since switching to CosmeDocs, my Botox lasts 5 months. I actually spend less annually now."
        </p>
        <p className="text-white/30 text-xs">— Verified patient, 2025</p>
      </motion.div>

      {/* Related Links */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
        <p className="text-sm font-medium text-white/70 mb-3">Related Guides</p>
        <div className="space-y-2">
          {[
            { title: "Botox Cost UK", href: "/botox-cost-uk/" },
            { title: "Units Explained", href: "/botox-units-explained/" },
            { title: "How Long Does Botox Last?", href: "/how-long-does-botox-last/" },
            { title: "Botox Prices London", href: "/botox-price-london/" },
            { title: "View All Prices", href: "/prices/" },
            { title: "Before & After Gallery", href: "/before-after/botox/" },
          ].map((link) => (
            <Link key={link.href} to={link.href} className="flex items-center gap-2 text-white/40 hover:text-[#C9A050] text-xs transition-colors group">
              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              {link.title}
            </Link>
          ))}
        </div>
      </motion.div>

      <DiscretionBadge variant="inline" />

      {/* Book CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
        <Link to="/contact/" className="block w-full bg-[#C9A050] text-black text-center font-semibold py-3 rounded-full hover:bg-[#D4AF61] transition-colors text-sm">
          Book Consultation
        </Link>
      </motion.div>
    </div>
  );
};

export default CheapBotoxSidebar;
