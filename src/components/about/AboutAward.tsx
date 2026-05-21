import { motion } from "framer-motion";
import awardImg from "@/assets/awards/teosyal-outstanding-clinic-award.png";

const AboutAward = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-[#C9A050]/10 blur-2xl" aria-hidden="true" />
              <img
                src={awardImg}
                alt="Teosyal Outstanding Clinic Award — awarded to Cosmedocs"
                width={420}
                height={420}
                loading="lazy"
                className="relative w-64 sm:w-80 md:w-[380px] lg:w-[420px] h-auto drop-shadow-[0_20px_40px_rgba(201,160,80,0.25)]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A050] mb-4 font-light">
              Recognition
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-foreground mb-3 leading-tight">
              Teosyal Outstanding<br />
              <span className="text-[#C9A050] font-light">Clinic Award</span>
            </h2>
            <div className="w-12 h-px bg-[#C9A050]/50 mb-6" />
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed font-light mb-4">
              Awarded by Teoxane — the Swiss manufacturer of Teosyal dermal fillers — for clinical
              excellence, patient outcomes and the artistic, doctor-led use of their portfolio.
            </p>
            <p className="text-foreground/55 text-sm leading-relaxed font-light italic">
              Our aesthetics is invisible art — quiet, not loud. Recognition we wear with quiet pride.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutAward;
