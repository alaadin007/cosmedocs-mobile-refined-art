import { motion } from "framer-motion";

const AboutHero = () => (
  <section className="relative pt-32 pb-20 px-6">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[#C9A050] text-sm tracking-[0.3em] uppercase mb-4">
          Harley Street Boutique Practice Since 2007
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
          About <span className="text-[#C9A050]">Us</span>
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Doctor-led aesthetic medicine rooted in honesty, excellence, and respect.
          Our aesthetics is invisible art — bold, natural, always your way.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutHero;
