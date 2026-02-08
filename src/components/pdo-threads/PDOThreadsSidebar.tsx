import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Clock, Calendar, Syringe, Activity, ArrowRight, ShieldCheck } from "lucide-react";

const PDOThreadsSidebar = () => {
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
          <GlanceStat icon={<Clock className="w-4 h-4" />} label="Duration" value="30–60 minutes" />
          <GlanceStat icon={<Calendar className="w-4 h-4" />} label="Results last" value="12–24 months" />
          <GlanceStat icon={<Activity className="w-4 h-4" />} label="Recovery" value="3–7 days" />
          <GlanceStat icon={<Syringe className="w-4 h-4" />} label="Anaesthetic" value="Local" />
          <GlanceStat icon={<ShieldCheck className="w-4 h-4" />} label="Collagen boost" value="Up to 3 years" />
        </div>
      </motion.div>

      {/* Pricing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
      >
        <p className="text-sm font-medium text-white/70 mb-3">Indicative Pricing</p>
        <div className="space-y-2">
          {[
            { tier: "Mono Threads", price: "From £350" },
            { tier: "Cog Threads", price: "From £850" },
            { tier: "Full Thread Lift", price: "From £1,500" },
          ].map((item) => (
            <div key={item.tier} className="flex items-center justify-between text-sm">
              <span className="text-white/40">{item.tier}</span>
              <span className="text-[#C9A050] font-medium">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-white/[0.06]">
          <p className="text-xs text-white/25">Final pricing after consultation</p>
        </div>
      </motion.div>

      {/* Doctor Credentials & Partnership */}
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
            Advanced thread lift training
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 rounded-full bg-[#C9A050]/50 mt-1.5 flex-shrink-0" />
            1M+ procedures since 2007
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 rounded-full bg-[#C9A050]/50 mt-1.5 flex-shrink-0" />
            In partnership with PrivaDr
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
            M
          </div>
          <div>
            <p className="text-sm font-medium text-white">Maria T.</p>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-white/60 leading-relaxed italic">
          "The thread lift has taken years off my face. The sagging along my jawline has completely lifted and the results look so natural. I wish I'd done it sooner."
        </p>
        <Link
          to="/testimonials"
          className="inline-flex items-center gap-1 text-xs text-[#C9A050] mt-3 hover:underline"
        >
          More real experiences
          <ArrowRight className="w-3 h-3" />
        </Link>
      </motion.div>

      {/* Related Treatment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-2xl p-5"
      >
        <p className="text-sm text-white/80 mb-2">
          <span className="text-[#C9A050] font-medium">HA Makeover</span> — Combine threads with dermal fillers for comprehensive facial rejuvenation.
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

export default PDOThreadsSidebar;
