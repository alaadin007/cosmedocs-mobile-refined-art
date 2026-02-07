import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Clock, Calendar, Syringe, Activity, ArrowRight, ShieldCheck } from "lucide-react";

const MigraineSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Treatment at a Glance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-black/[0.03] border border-black/[0.08] rounded-2xl p-5"
      >
        <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider mb-4">
          At a Glance
        </h3>
        <div className="space-y-4">
          <GlanceStat icon={<Clock className="w-4 h-4" />} label="Duration" value="15–20 minutes" />
          <GlanceStat icon={<Calendar className="w-4 h-4" />} label="Results last" value="3–4 months" />
          <GlanceStat icon={<Activity className="w-4 h-4" />} label="Recovery" value="Immediate" />
          <GlanceStat icon={<Syringe className="w-4 h-4" />} label="Injection sites" value="Up to 31 points" />
          <GlanceStat icon={<ShieldCheck className="w-4 h-4" />} label="Approval" value="FDA-approved" />
        </div>
      </motion.div>

      {/* Pricing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-black/[0.03] border border-black/[0.08] rounded-2xl p-5"
      >
        <p className="text-sm font-medium text-black/70 mb-3">Treatment Pricing</p>
        <div className="space-y-2">
          {[
            { tier: "Migraine Treatment", price: "From £450" },
            { tier: "Initial Consultation", price: "£50" },
          ].map((item) => (
            <div key={item.tier} className="flex items-center justify-between text-sm">
              <span className="text-black/50">{item.tier}</span>
              <span className="text-[#C9A050] font-medium">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-black/[0.06]">
          <p className="text-xs text-black/30">Every 12 weeks for optimal prevention</p>
        </div>
      </motion.div>

      {/* Injection Areas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="bg-black/[0.03] border border-black/[0.08] rounded-2xl p-5"
      >
        <p className="text-sm font-medium text-black/70 mb-3">Key Injection Areas</p>
        <ul className="space-y-2 text-xs text-black/40">
          {["Forehead muscles", "Temple areas", "Back of head", "Neck muscles", "Shoulder muscles"].map((area) => (
            <li key={area} className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-[#C9A050]/50 mt-1.5 flex-shrink-0" />
              {area}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Review Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-black/[0.03] border border-black/[0.08] rounded-2xl p-5"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-[#C9A050] flex items-center justify-center text-white text-xs font-bold">
            A
          </div>
          <div>
            <p className="text-sm font-medium text-black/80">Anna L.</p>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-black/50 leading-relaxed italic">
          "After years of chronic migraines — 20+ days a month — this treatment gave me my life back. I went from barely functioning to having single-digit headache days."
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
          className="block w-full text-center bg-[#C9A050] hover:bg-[#B8924A] text-white rounded-full py-3 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A050]/20"
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
        <p className="text-xs text-black/35">{label}</p>
        <p className="text-sm text-black/70">{value}</p>
      </div>
    </div>
  );
}

export default MigraineSidebar;
