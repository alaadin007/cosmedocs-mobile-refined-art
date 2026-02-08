import { motion } from "framer-motion";

const signals = [
  "GMC Registered",
  "CQC Compliant",
  "Save Face Accredited",
  "Fully Insured",
  "BACD Members",
  "Royal College of Physicians",
  "British Association of Dermatologists",
];

const AboutTrustSignals = () => (
  <section className="relative py-16 px-6 bg-white/[0.02]">
    <div className="max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[#C9A050] text-sm tracking-[0.3em] uppercase mb-6">
          Regulatory Standards & Accreditations
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {signals.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white/5 backdrop-blur-sm border border-[#C9A050]/30 rounded-full px-5 py-2.5"
            >
              <span className="text-[#C9A050] text-xs tracking-wider">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutTrustSignals;
