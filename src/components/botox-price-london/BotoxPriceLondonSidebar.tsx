import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, MapPin, ArrowRight, BookOpen, PoundSterling } from "lucide-react";
import DiscretionBadge from "@/components/DiscretionBadge";

const BotoxPriceLondonSidebar = () => {
  return (
    <div className="space-y-6">
      {/* London Quick Pricing */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <PoundSterling className="w-4 h-4 text-[#C9A050]/70" />
          <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider">CosmeDocs Pricing</h3>
        </div>
        <div className="space-y-3">
          {[
            { area: "1 Area (Women)", price: "£275" },
            { area: "2 Areas (Women)", price: "£325" },
            { area: "3 Areas (Women)", price: "£395" },
            { area: "3 Areas (Men)", price: "£425" },
            { area: "Masseter", price: "From £350" },
          ].map((item) => (
            <div key={item.area} className="flex items-center justify-between text-sm">
              <span className="text-white/40">{item.area}</span>
              <span className="text-[#C9A050] font-medium">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs text-white/30">
            <MapPin className="w-3 h-3" />
            3 Harley Street, London W1G 9QD
          </div>
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
            "Botox prices by London area",
            "Harley Street vs outer boroughs",
            "London vs rest of UK pricing",
            "CosmeDocs transparent pricing",
            "CQC-registered clinic checklist",
            "Per-unit vs per-area pricing",
            "NHS Botox eligibility",
          ].map((concept) => (
            <li key={concept} className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-[#C9A050]/50 mt-1.5 shrink-0" />
              {concept}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Review */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[#C9A050] text-[#C9A050]" />
          ))}
        </div>
        <p className="text-white/50 text-xs italic leading-relaxed mb-3">
          "I compared prices across London before choosing CosmeDocs. The Harley Street setting, doctor-led approach, and transparent pricing made it an easy decision. My results have been consistently excellent."
        </p>
        <p className="text-white/30 text-xs">— Verified patient, Central London</p>
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
            { title: "Cheap vs Expensive Botox", href: "/cheap-botox-vs-expensive/" },
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

export default BotoxPriceLondonSidebar;
