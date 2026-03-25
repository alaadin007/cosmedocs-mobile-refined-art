import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Clock, Calendar, Syringe, Activity, ArrowRight } from "lucide-react";
import PricingWidget from "@/components/PricingWidget";

const BotoxSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Treatment at a Glance */}
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
          <GlanceStat icon={<Syringe className="w-4 h-4" />} label="Onset" value="3–5 days" />
        </div>
      </motion.div>

      {/* Pricing Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <PricingWidget
          categories={["botox-face", "botox-contouring", "botox-sweattox"]}
          title="Botox Prices"
          compact
        />
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
          to="/testimonials"
          className="inline-flex items-center gap-1 text-xs text-[#C9A050] mt-3 hover:underline"
        >
          More real experiences
          <ArrowRight className="w-3 h-3" />
        </Link>
      </motion.div>


      {/* Pricing Guide Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-2xl p-5"
      >
        <p className="text-sm text-white/80 mb-2">
          <span className="text-[#C9A050] font-medium">Botox Pricing Explained</span> — Understand units, dosing, and what affects cost.
        </p>
        <Link
          to="/botox-cost-uk/"
          className="inline-flex items-center gap-2 text-sm text-[#C9A050] hover:underline font-medium"
        >
          Read pricing guide
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      {/* Medical Botox Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-2xl p-5"
      >
        <p className="text-sm text-white/80 mb-2">
          <span className="text-[#C9A050] font-medium">Medical Botox</span> — Treatments for migraines, bruxism, and excessive sweating.
        </p>
        <Link
          to="/treatments/botox/medical/"
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
          className="block w-full text-center bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full py-3 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A050]/20"
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
      <div className="text-[#C9A050]/70">{icon}</div>
      <div>
        <p className="text-xs text-white/40">{label}</p>
        <p className="text-sm text-white/80">{value}</p>
      </div>
    </div>
  );
}

export default BotoxSidebar;
