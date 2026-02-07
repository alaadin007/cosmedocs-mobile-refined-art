import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Clock, Calendar, Syringe, Activity, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

const TrapBotoxSidebar = () => {
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
          <GlanceStat icon={<Clock className="w-4 h-4" />} label="Duration" value="15–20 minutes" />
          <GlanceStat icon={<Calendar className="w-4 h-4" />} label="Results last" value="4–6 months" />
          <GlanceStat icon={<Activity className="w-4 h-4" />} label="Recovery" value="No downtime" />
          <GlanceStat icon={<Syringe className="w-4 h-4" />} label="Product" value="Botulinum toxin" />
          <GlanceStat icon={<ShieldCheck className="w-4 h-4" />} label="Benefit" value="Slimming & pain relief" />
        </div>
      </motion.div>

      {/* Pricing */}
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
            { tier: "Trap Botox", price: "£350" },
            { tier: "Full Barbie Botox", price: "£450" },
          ].map((item) => (
            <div key={item.tier} className="flex items-center justify-between text-sm">
              <span className="text-white/40">{item.tier}</span>
              <span className="text-[#C9A050] font-medium">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-white/[0.06]">
          <p className="text-xs text-white/25">Includes consultation & follow-up</p>
        </div>
      </motion.div>

      {/* Doctor Credentials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
      >
        <p className="text-sm font-medium text-white/70 mb-3">Your Practitioner</p>
        <ul className="space-y-2 text-xs text-white/50 font-light">
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 rounded-full bg-[#C9A050]/50 mt-1.5 flex-shrink-0" />
            GMC-registered doctors
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 rounded-full bg-[#C9A050]/50 mt-1.5 flex-shrink-0" />
            Harley Street Institute trainers
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 rounded-full bg-[#C9A050]/50 mt-1.5 flex-shrink-0" />
            1M+ procedures since 2007
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 rounded-full bg-[#C9A050]/50 mt-1.5 flex-shrink-0" />
            CQC-registered clinic
          </li>
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
            L
          </div>
          <div>
            <p className="text-sm font-medium text-white">Laura M.</p>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-white/60 leading-relaxed italic">
          "My shoulders were so bulky from stress and gym work. After trap botox my neck looks longer and the chronic tension headaches have gone. I feel so much more feminine."
        </p>
        <Link
          to="/testimonials"
          className="inline-flex items-center gap-1 text-xs text-[#C9A050] mt-3 hover:underline"
        >
          More real experiences
          <ArrowRight className="w-3 h-3" />
        </Link>
      </motion.div>

      {/* Sticky CTA */}
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

export default TrapBotoxSidebar;
