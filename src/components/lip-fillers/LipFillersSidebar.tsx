import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Clock, Calendar, Syringe, Activity, ArrowRight, ShieldCheck } from "lucide-react";

const LipFillersSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Treatment at a Glance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5"
      >
        <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider mb-4">
          At a Glance
        </h3>
        <div className="space-y-4">
          <GlanceStat icon={<Clock className="w-4 h-4" />} label="Duration" value="30–45 minutes" />
          <GlanceStat icon={<Calendar className="w-4 h-4" />} label="Results last" value="6–12 months" />
          <GlanceStat icon={<Activity className="w-4 h-4" />} label="Recovery" value="Minimal downtime" />
          <GlanceStat icon={<Syringe className="w-4 h-4" />} label="Product" value="Hyaluronic acid" />
          <GlanceStat icon={<ShieldCheck className="w-4 h-4" />} label="Anaesthesia" value="Topical + lidocaine" />
        </div>
      </motion.div>

      {/* Pricing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5"
      >
        <p className="text-sm font-medium text-white/70 mb-3">Treatment Pricing</p>
        <div className="space-y-2">
          {[
            { tier: "0.5ml Lip Filler", price: "£300" },
            { tier: "1ml Lip Filler", price: "£350" },
            { tier: "Consultation", price: "£50" },
          ].map((item) => (
            <div key={item.tier} className="flex items-center justify-between text-sm">
              <span className="text-white/40">{item.tier}</span>
              <span className="text-[#C9A050] font-medium">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-white/[0.06]">
          <p className="text-xs text-white/25">Consultation fee deducted from treatment cost</p>
        </div>
      </motion.div>

      {/* Before & After Teaser */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5"
      >
        <p className="text-sm font-medium text-white/70 mb-3">Before & After</p>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            "/lovable-uploads/a9533a9b-0dd5-4e65-8c88-8e415e07f1ff.png",
            "/lovable-uploads/0fc2f9cc-be54-45a6-b6ac-11c1f0dc04ad.png",
            "/lovable-uploads/ca0d519c-295a-47a5-ad68-27462c0fa778.png",
          ].map((src) => (
            <div key={src} className="rounded-lg overflow-hidden border border-white/[0.06]">
              <img
                src={src}
                alt="Lip filler before and after result"
                loading="lazy"
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>
        <Link
          to="/before-after/dermal-fillers/lips/"
          className="inline-flex items-center gap-2 text-xs text-[#C9A050] hover:underline"
        >
          View full gallery
          <ArrowRight className="w-3 h-3" />
        </Link>
      </motion.div>

      {/* Real Review */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-[#C9A050] flex items-center justify-center text-white text-xs font-bold">
            S
          </div>
          <div>
            <p className="text-sm font-medium text-white/80">Sarah</p>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-white/45 leading-relaxed italic">
          "Had my lips done here twice now and everytime they come out looking so natural. The doctor really listens to what you want and dosnt over do it. Best decision I made."
        </p>
        <Link
          to="/testimonials"
          className="inline-flex items-center gap-1 text-xs text-[#C9A050] mt-3 hover:underline"
        >
          Real experiences. Real outcomes.
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
        <p className="text-xs text-white/30">{label}</p>
        <p className="text-sm text-white/70">{value}</p>
      </div>
    </div>
  );
}

export default LipFillersSidebar;
