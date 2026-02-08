import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Clock, Calendar, Activity, ArrowRight, Sparkles, Droplets } from "lucide-react";

const HydraFacialSidebar = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
      >
        <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider mb-4">At a Glance</h3>
        <div className="space-y-4">
          <GlanceStat icon={<Clock className="w-4 h-4" />} label="Duration" value="30–45 minutes" />
          <GlanceStat icon={<Calendar className="w-4 h-4" />} label="Recommended" value="Monthly" />
          <GlanceStat icon={<Activity className="w-4 h-4" />} label="Recovery" value="No downtime" />
          <GlanceStat icon={<Droplets className="w-4 h-4" />} label="Type" value="Multi-step facial" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
      >
        <Sparkles className="w-5 h-5 text-[#C9A050] mb-2" />
        <p className="text-sm font-medium text-white/70 mb-3">Treatment Pricing</p>
        <div className="space-y-2">
          {[
            { tier: "Signature", price: "£199" },
            { tier: "Platinum", price: "£299" },
          ].map((item) => (
            <div key={item.tier} className="flex items-center justify-between text-sm">
              <span className="text-white/40">{item.tier}</span>
              <span className="text-[#C9A050] font-medium">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-white/[0.06]">
          <p className="text-xs text-white/25">Includes consultation & aftercare</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-[#C9A050] flex items-center justify-center text-black text-xs font-bold">E</div>
          <div>
            <p className="text-sm font-medium text-white">Emma P.</p>
            <div className="flex gap-0.5">{[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />))}</div>
          </div>
        </div>
        <p className="text-sm text-white/60 leading-relaxed italic">
          "The best facial I've ever had. My skin was glowing for days afterwards. The Platinum HydraFacial is absolutely worth it."
        </p>
        <Link to="/testimonials" className="inline-flex items-center gap-1 text-xs text-[#C9A050] mt-3 hover:underline">
          More real experiences <ArrowRight className="w-3 h-3" />
        </Link>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
        <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer"
          className="block w-full text-center bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full py-3 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A050]/20">
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

export default HydraFacialSidebar;
