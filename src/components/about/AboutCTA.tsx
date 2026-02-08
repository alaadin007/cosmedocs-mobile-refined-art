import { motion } from "framer-motion";

const AboutCTA = () => (
  <section className="relative py-24 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-light mb-6">
          Begin Your Journey <span className="text-[#C9A050]">With Us</span>
        </h2>
        <p className="text-white/60 mb-4 max-w-xl mx-auto">
          We invite you to explore how our treatments can improve your life. Our team 
          supports you every step of the way, from the initial consultation to the 
          tailored treatment plan and follow-up care.
        </p>
        <p className="text-white/50 text-sm italic mb-10 max-w-lg mx-auto">
          Let us help you achieve not just the appearance you desire but also the 
          psychological well-being you deserve.
        </p>
        <a
          href="/contact/"
          className="inline-block bg-[#C9A050] hover:bg-[#B8913F] text-black px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
        >
          Your Consultation Begins Here
        </a>
        <p className="text-white/40 text-xs mt-4 tracking-wider">
          Considered care from Harley Street doctors
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutCTA;
