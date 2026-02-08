import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Sparkles, Stethoscope, Users, Shield } from "lucide-react";

const ConcernsHubSidebar = () => {
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
          Why Cosmedocs
        </h3>
        <div className="space-y-4">
          <GlanceStat icon={<Stethoscope className="w-4 h-4" />} label="Approach" value="Doctor-led assessment" />
          <GlanceStat icon={<Users className="w-4 h-4" />} label="Experience" value="1M+ treatments since 2007" />
          <GlanceStat icon={<Shield className="w-4 h-4" />} label="Practitioners" value="GMC-registered doctors" />
          <GlanceStat icon={<Star className="w-4 h-4" />} label="Rating" value="4.9 / 5.0 average" />
        </div>
      </motion.div>

      {/* Philosophy Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-2xl p-5"
      >
        <p className="text-sm text-white/80 leading-relaxed italic mb-3">
          "Assessment matters more than treatment selection. Understanding why a concern exists is the first step toward addressing it appropriately."
        </p>
        <p className="text-xs text-[#C9A050] tracking-wider uppercase">The Cosmedocs Philosophy</p>
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
          "They didn't just suggest a treatment — they explained what was actually happening with my skin. I felt educated and confident before anything was done."
        </p>
        <Link
          to="/testimonials/"
          className="inline-flex items-center gap-1 text-xs text-[#C9A050] mt-3 hover:underline"
        >
          More real experiences
          <ArrowRight className="w-3 h-3" />
        </Link>
      </motion.div>

      {/* Sub-concern Pages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
      >
        <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider mb-4">
          Explore by Concern
        </h3>
        <div className="space-y-2">
          {[
            { label: "Acne & Breakouts", path: "/concerns/acne/" },
            { label: "Hyperpigmentation", path: "/concerns/hyperpigmentation/" },
            { label: "Eczema & Dermatitis", path: "/concerns/eczema/" },
            { label: "Anti-Ageing", path: "/concerns/anti-ageing/" },
            { label: "Non-Surgical Facelift", path: "/concerns/non-surgical-facelift/" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <span className="text-sm text-white/70 group-hover:text-white transition-colors">{item.label}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C9A050]/50 group-hover:text-[#C9A050] transition-colors" />
            </Link>
          ))}
        </div>
      </motion.div>

      {/* AI Doctor CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="space-y-3"
      >
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
          className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full py-3 font-medium text-sm transition-all duration-300"
        >
          <Sparkles className="w-4 h-4 text-[#C9A050]" />
          Ask AI Doctor
        </button>
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

export default ConcernsHubSidebar;
