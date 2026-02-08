import { motion } from "framer-motion";
import { Heart, Award, Users, ShieldCheck, HandHeart } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Honesty",
    description: "We will always be open and honest about a client's options, whether they include our services or not.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Our doctors are the finest in the UK, each with over a decade of experience, and we consistently provide the highest quality treatments.",
  },
  {
    icon: Users,
    title: "Respect",
    description: "Clients and employees are treated with the same respect and dignity, allowing us to maintain relationships built on a desire to help people.",
  },
  {
    icon: ShieldCheck,
    title: "Prudence",
    description: "We understand that every procedure is medical in nature and should not be undertaken lightly. Every effort is made to execute only the treatments necessary to achieve the goals agreed upon by the client and medical staff.",
  },
  {
    icon: HandHeart,
    title: "Community",
    description: "We care about our clients as individuals, and the community as a whole. While our procedures enhance natural beauty, we also bring beauty to the community through multiple charity partnerships.",
  },
];

const AboutValues = () => (
  <section className="relative py-20 px-6 bg-white/[0.02]">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-center text-[#C9A050] text-sm tracking-[0.3em] uppercase mb-3">
          What We Stand For
        </p>
        <h2 className="text-3xl md:text-4xl font-light mb-14 text-center">
          Cosmedocs <span className="text-[#C9A050]">Values</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#C9A050]/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#C9A050]/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#C9A050]" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{value.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutValues;
