import { motion } from "framer-motion";
import { Scissors, Sparkles, GraduationCap, Sun } from "lucide-react";

const brands = [
  {
    icon: Scissors,
    name: "CosmeSurg",
    label: "Surgical",
    description: "Advanced surgical procedures performed by experienced surgeons.",
  },
  {
    icon: Sparkles,
    name: "Harley Street Formulations",
    label: "Skin Care",
    description: "Medical-grade skincare developed by our practitioners.",
  },
  {
    icon: GraduationCap,
    name: "Harley Street Institute",
    label: "Professional Education",
    description: "Training the next generation of aesthetic practitioners.",
  },
  {
    icon: Sun,
    name: "Glow & Go",
    label: "Skin Bar Clinic",
    description: "Accessible skin treatments in a relaxed environment.",
  },
];

const AboutBrands = () => (
  <section className="relative py-20 px-6 bg-white/[0.02]">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-center text-[#C9A050] text-sm tracking-[0.3em] uppercase mb-3">
          Our Ecosystem
        </p>
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
          Our Brands & <span className="text-[#C9A050]">Services</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, i) => {
            const Icon = brand.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-[#C9A050]/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#C9A050]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-[#C9A050]" />
                </div>
                <h3 className="text-white font-medium text-sm mb-1">{brand.name}</h3>
                <p className="text-[#C9A050] text-xs tracking-wider uppercase mb-3">{brand.label}</p>
                <p className="text-white/50 text-xs leading-relaxed">{brand.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutBrands;
