import { motion } from "framer-motion";
import { Brain, ShieldCheck } from "lucide-react";

const AboutHolisticApproach = () => (
  <section className="relative py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-16 items-start"
      >
        {/* Holistic Approach */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#C9A050]/10 flex items-center justify-center">
              <Brain className="w-5 h-5 text-[#C9A050]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light">
              Our Holistic <span className="text-[#C9A050]">Approach</span>
            </h2>
          </div>
          <div className="space-y-5 text-white/65 leading-relaxed text-sm">
            <p>
              At Cosmedocs, we transcend the traditional boundaries of beauty clinics by 
              focusing on treatments designed for both medical and psychological purposes. 
              We understand that physical appearance can profoundly impact one's mental 
              health and overall psychological well-being.
            </p>
            <p>
              That's why we are not a high-street beauty clinic; we are a medical clinic 
              committed to enhancing mental and emotional health through comprehensive, 
              medically-informed treatments.
            </p>
            <p>
              CosmeDocs offers a comprehensive range of surgical and non-surgical solutions 
              for concerns including ageing, hair loss, acne, and more. Each treatment is 
              meticulously evaluated for safety and efficacy before being introduced. Our 
              minimally invasive procedures ensure remarkable results with minimal downtime.
            </p>
          </div>
        </div>

        {/* Important Notice + CTA */}
        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-sm border border-[#C9A050]/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-5 h-5 text-[#C9A050]" />
              <p className="text-[#C9A050] text-sm tracking-wider uppercase font-medium">
                Important Notice
              </p>
            </div>
            <p className="text-white/60 leading-relaxed text-sm">
              Our clinic accepts patients with legitimate psychological needs to undergo 
              treatments rather than solely for aesthetic enhancements or to improve 
              appearance. Every consultation is doctor-led to ensure appropriate care.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-light text-[#C9A050]">2007</p>
              <p className="text-white/50 text-xs mt-2">Established</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-light text-[#C9A050]">1M+</p>
              <p className="text-white/50 text-xs mt-2">Injections Since 2007</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-light text-[#C9A050]">GMC</p>
              <p className="text-white/50 text-xs mt-2">Registered</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-light text-[#C9A050]">4.9★</p>
              <p className="text-white/50 text-xs mt-2">Patient Rating</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutHolisticApproach;
