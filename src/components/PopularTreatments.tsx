
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import AutoLinkedText from "./AutoLinkedText";

interface Treatment {
  title: string;
  description: string;
  link?: string;
  hasBeforeAfter?: boolean;
}

interface PopularTreatmentsProps {
  title?: string;
  treatments?: Treatment[];
  className?: string;
  showBeforeAfter?: boolean;
}

const PopularTreatments = ({ 
  title = "Popular Treatments and Indications",
  treatments,
  className = "",
  showBeforeAfter = false
}: PopularTreatmentsProps) => {

  const defaultTreatments: Treatment[] = [
    {
      title: "Botox – The Art of a Natural Pause in Ageing",
      description: "Subtle muscle relaxation for a refreshed, rested look.\n\n• Frown lines (glabellar lines)\n• Forehead lines\n• Crow's feet (eye wrinkles)\n• Brow lift (non-surgical)\n• Gummy smile correction\n• Jawline slimming (masseter reduction)\n• Excessive sweating (hyperhidrosis)",
      link: "/botox-london"
    },
    {
      title: "Dermal Fillers – Restore Balance, Contour & Confidence",
      description: "Volume where it matters, definition where it's needed.\n\n• Cheek enhancement & contouring\n• Post-weight loss volume restoration\n• Sunken or hollow cheeks\n• Tear trough (under-eye hollows)\n• Temple hollow correction\n• Nose reshaping (liquid rhinoplasty)\n• Smile line (nasolabial folds) softening\n• Marionette line rejuvenation\n• Jawline & chin sculpting\n• Full-face rejuvenation & makeover",
      link: "/dermal-filler-makeover"
    },
    {
      title: "Non-Surgical Face Lift – Instant Lift, Zero Downtime",
      description: "Advanced thread lifting and strategic volume restoration.\n\n• Sagging jowls & jawline\n• Neck laxity\n• Cheek drooping\n• Brow ptosis\n• Nasolabial fold deepening\n• Marionette lines\n• Loss of facial contour",
      link: "/non-surgical-face-lift"
    },
    {
      title: "Lip Fillers – Elegance in Every Curve",
      description: "Subtle enhancement, never exaggerated.\n\n• Natural volume restoration\n• Cupid's bow & lip border definition\n• Correcting asymmetry\n• Hydration for smoother, softer lips",
      link: "/lip-fillers"
    },
    {
      title: "Non-Surgical Nose Job – Refined Harmony Without Surgery",
      description: "Reshape in minutes, no downtime.\n\n• Straighten small bumps\n• Lift drooping nasal tip\n• Correct minor asymmetry\n• Enhance nasal bridge",
      link: "/non-surgical-nose-job"
    },
    {
      title: "Skin Boosters – Radiance From Within",
      description: "Hydration, glow, and prevention in one.\n\n• Dry, dehydrated skin\n• Fine lines & crepiness\n• Sun-damaged skin\n• Loss of elasticity\n• Tired, dull complexion\n• Preventative anti-ageing",
      link: "/skin-boosters"
    }
  ];

  const treatmentsList = treatments || defaultTreatments;

  return (
    <section className={`py-20 bg-black ${className}`} aria-labelledby="treatments-heading">
      <div className="page-container">
        <h2 id="treatments-heading" className="text-3xl font-bold mb-12 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatmentsList.map((treatment, index) => (
            <motion.div 
              key={treatment.title} 
              className="bg-accent rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">{treatment.title}</h3>
              <div className="text-gray-400 text-sm mb-4 whitespace-pre-line">
                <AutoLinkedText>{treatment.description}</AutoLinkedText>
              </div>
              {treatment.link ? (
                <Link 
                  to={treatment.link}
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                >
                  Learn more →
                </Link>
              ) : (
                <div className="text-purple-400 hover:text-purple-300 text-sm font-medium cursor-pointer">
                  Learn more →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTreatments;
