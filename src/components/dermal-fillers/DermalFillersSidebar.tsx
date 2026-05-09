import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Clock, Calendar, Syringe, Activity, ArrowRight } from "lucide-react";
import PricingWidget from "@/components/PricingWidget";

const DermalFillersSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Treatment at a Glance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
      >
        <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider mb-4">
          At a Glance
        </h3>
        <div className="space-y-4">
          <GlanceStat icon={<Clock className="w-4 h-4" />} label="Duration" value="30–60 minutes" />
          <GlanceStat icon={<Calendar className="w-4 h-4" />} label="Results last" value="12–18 months" />
          <GlanceStat icon={<Activity className="w-4 h-4" />} label="Recovery" value="Minimal downtime" />
          <GlanceStat icon={<Syringe className="w-4 h-4" />} label="Product" value="Hyaluronic acid" />
        </div>
      </motion.div>

      {/* Pricing Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <PricingWidget
          categories={["fillers-antiageing", "fillers-contouring"]}
          title="Filler Prices"
          compact
          variant="light"
        />
      </motion.div>

      {/* Review Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-[#C9A050] flex items-center justify-center text-black text-xs font-bold">
            R
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Rachel L.</p>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          "The results are so natural — people say I look refreshed but can't work out what's different. That's exactly what I wanted."
        </p>
        <Link
          to="/testimonials"
          className="inline-flex items-center gap-1 text-xs text-[#C9A050] mt-3 hover:underline"
        >
          More real experiences
          <ArrowRight className="w-3 h-3" />
        </Link>
      </motion.div>

      {/* HA Makeover Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="bg-[#C9A050]/10 border border-[#C9A050]/40 rounded-2xl p-5"
      >
        <p className="text-sm text-gray-700 mb-2">
          <span className="text-[#C9A050] font-semibold">HA Makeover</span> — Full-face rejuvenation packages with multiple syringes.
        </p>
        <Link
          to="/treatments/ha-makeover/"
          className="inline-flex items-center gap-2 text-sm text-[#C9A050] hover:underline font-medium"
        >
          Learn more
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      {/* Sticky CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <a
          href="https://med.as.me/harleystreet"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full py-3 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A050]/30"
        >
          Book Consultation
        </a>
      </motion.div>
    </div>
  );
};

function GlanceStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-[#C9A050]">{icon}</div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm text-gray-800 font-medium">{value}</p>
      </div>
    </div>
  );
}

export default DermalFillersSidebar;
