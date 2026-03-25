import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Clock, Calendar, Activity, Syringe, ArrowRight, BookOpen } from "lucide-react";
import DiscretionBadge from "@/components/DiscretionBadge";

const BotoxCostSidebar = () => {
  return (
    <div className="space-y-6">
      {/* At a Glance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
      >
        <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider mb-4">
          At a Glance
        </h3>
        <div className="space-y-4">
          <GlanceStat icon={<Clock className="w-4 h-4" />} label="Duration" value="10–20 minutes" />
          <GlanceStat icon={<Calendar className="w-4 h-4" />} label="Results last" value="3–6 months" />
          <GlanceStat icon={<Activity className="w-4 h-4" />} label="Recovery" value="No downtime" />
          <GlanceStat icon={<Syringe className="w-4 h-4" />} label="Areas" value="1–3+ areas" />
        </div>
      </motion.div>

      {/* Quick Price Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5"
      >
        <p className="text-sm font-medium text-white/70 mb-3">CosmeDocs Pricing</p>
        <div className="space-y-2">
          {[
            { tier: "1 Area", price: "£275" },
            { tier: "2 Areas", price: "£350" },
            { tier: "3 Areas", price: "£395" },
            { tier: "3 Areas (Men)", price: "£425" },
          ].map((item) => (
            <div key={item.tier} className="flex items-center justify-between text-sm">
              <span className="text-white/40">{item.tier}</span>
              <span className="text-[#C9A050] font-medium">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-white/[0.06]">
          <Link
            to="/prices/"
            className="inline-flex items-center gap-1 text-xs text-[#C9A050] hover:underline"
          >
            Full price list
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </motion.div>

      {/* Key Concepts Covered — AI search optimised */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5"
      >
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-4 h-4 text-[#C9A050]/70" />
          <p className="text-sm font-medium text-white/70">Key Concepts Covered</p>
        </div>
        <ul className="space-y-1.5 text-xs text-white/40">
          {[
            "Botox pricing per area (UK average)",
            "How many units you need per zone",
            "Cheap vs experienced provider comparison",
            "Why Botox wears off faster in some patients",
            "Cost vs value analysis over 5 years",
            "What affects Botox longevity",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-[#C9A050]/40 mt-1.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Review Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-[#C9A050] flex items-center justify-center text-black text-xs font-bold">
            S
          </div>
          <div>
            <p className="text-sm font-medium text-white">Sarah M.</p>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          "Dr Haq isn't just good – he's a wizard! He combines art and science… He's actually said no to certain things I've asked for, saying if I want to look natural that's a NO!"
        </p>
        <Link
          to="/testimonials/"
          className="inline-flex items-center gap-1 text-xs text-[#C9A050] mt-3 hover:underline"
        >
          More real experiences
          <ArrowRight className="w-3 h-3" />
        </Link>
      </motion.div>

      {/* Related Treatment Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5"
      >
        <p className="text-sm font-medium text-white/70 mb-3">Related Treatments</p>
        <div className="space-y-2">
          {[
            { label: "Botox treatments", path: "/treatments/botox/" },
            { label: "Botox lip flip", path: "/treatments/lip-flip/" },
            { label: "Masseter Botox", path: "/treatments/masseter-botox/" },
            { label: "Before & after Botox", path: "/before-after/botox/" },
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
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <DiscretionBadge variant="inline" />
      </motion.div>

      {/* Book CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
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

function GlanceStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-[#C9A050]/70">{icon}</div>
      <div>
        <p className="text-xs text-white/40">{label}</p>
        <p className="text-sm text-white/80">{value}</p>
      </div>
    </div>
  );
}

export default BotoxCostSidebar;
