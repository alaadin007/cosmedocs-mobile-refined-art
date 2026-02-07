import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Clock, Calendar, Syringe, Activity, ArrowRight, Sparkles } from "lucide-react";
import lipFlipImage1 from "@/assets/before-after/lip-flip-1.jpg";
import lipFlipImage2 from "@/assets/before-after/lip-flip-2.jpg";
import lipFlipImage3 from "@/assets/before-after/lip-flip-3.jpg";

const sidebarImages = [
  {
    src: lipFlipImage1,
    alt: "Lip flip injection points diagram showing botox placement",
  },
  {
    src: lipFlipImage2,
    alt: "Lip flip before and after natural enhancement",
  },
  {
    src: lipFlipImage3,
    alt: "Non-invasive lip enhancement results",
  },
];

const LipFlipSidebar = () => {
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
          <GlanceStat icon={<Clock className="w-4 h-4" />} label="Duration" value="10–15 minutes" />
          <GlanceStat icon={<Calendar className="w-4 h-4" />} label="Results last" value="2–3 months" />
          <GlanceStat icon={<Activity className="w-4 h-4" />} label="Recovery" value="Immediate" />
          <GlanceStat icon={<Syringe className="w-4 h-4" />} label="Product" value="Botulinum toxin" />
        </div>
      </motion.div>

      {/* Before & After Teaser Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
      >
        <Sparkles className="w-5 h-5 text-[#C9A050] mb-2" />
        <p className="text-sm text-white/70 mb-3 font-medium">Real Patient Results</p>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {sidebarImages.map((img) => (
            <div key={img.src} className="rounded-lg overflow-hidden border border-white/[0.06]">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>
        <Link
          to="/before-after/botox/lip-flip/"
          className="inline-flex items-center gap-2 text-sm text-[#C9A050] hover:underline font-medium"
        >
          View full gallery
          <ArrowRight className="w-4 h-4" />
        </Link>
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
            J
          </div>
          <div>
            <p className="text-sm font-medium text-white">Jessica R.</p>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-white/60 leading-relaxed italic">
          "I wanted something subtle — just a bit more lip showing when I smile. The lip flip was perfect. Quick, painless, and completely natural."
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

export default LipFlipSidebar;
