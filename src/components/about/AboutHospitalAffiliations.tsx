import { motion } from "framer-motion";

const hospitals = [
  { name: "The Welbeck Hospital", location: "Marylebone, London" },
  { name: "Highgate Hospital", location: "North London" },
  { name: "BMI Healthcare", location: "Nationwide UK Group" },
];

const AboutHospitalAffiliations = () => (
  <section className="relative py-20 px-6 bg-black border-t border-[#C9A050]/10">
    <div className="max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[#C9A050] text-sm tracking-[0.3em] uppercase mb-3">
          Surgical Hospital Affiliations
        </p>
        <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
          Where our surgeons operate.
        </h3>
        <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-12">
          Our consultant surgeons hold operating privileges at leading private hospitals across London,
          ensuring every surgical procedure is performed within fully accredited theatre environments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C9A050]/15 border border-[#C9A050]/15 rounded-2xl overflow-hidden">
          {hospitals.map((h, i) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-black px-6 py-10 flex flex-col items-center justify-center"
            >
              <p
                className="text-[#C9A050] tracking-[0.15em] uppercase text-base md:text-lg font-light"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
              >
                {h.name}
              </p>
              <p className="text-white/40 text-[11px] tracking-[0.2em] uppercase mt-2">
                {h.location}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-white/30 text-[11px] tracking-[0.15em] uppercase mt-8">
          All surgical procedures performed in CQC-regulated, fully accredited private hospitals.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutHospitalAffiliations;
