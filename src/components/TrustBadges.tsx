import { Shield, Award, CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "CQC Registered",
      description: "Care Quality Commission approved"
    },
    {
      icon: Award,
      title: "GMC Registered",
      description: "General Medical Council certified practitioners"
    },
    {
      icon: CheckCircle2,
      title: "Insured",
      description: "Full medical indemnity insurance"
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Excellent patient satisfaction"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg border border-purple-300/20"
          >
            <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
              <Icon className="text-purple-600" size={20} />
            </div>
            <h3 className="text-white font-semibold text-sm mb-1">{badge.title}</h3>
            <p className="text-gray-400 text-xs">{badge.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
