
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
  title = "Popular Treatments",
  treatments,
  className = "",
  showBeforeAfter = false
}: PopularTreatmentsProps) => {

  const defaultTreatments: Treatment[] = [
    {
      title: "Botox",
      description: "Anti-wrinkle injections for frown lines, crows feet & forehead lines",
      link: "/face-botox-areas"
    },
    {
      title: "Dermal Fillers",
      description: "Restore volume and enhance facial features. Pioneer of full face makeover & rejuvenation",
      link: "/dermal-filler-makeover"
    },
    {
      title: "Clinical Concepts to Flawless Skin",
      description: "Revolutionary 9-step protocol for achieving perfect skin health and treating lazy skin syndrome",
      link: "/clinical-concepts-to-flawless-skin"
    },
    {
      title: "Lip Fillers",
      description: "Subtle enhancement for natural-looking fullness",
      link: "/lip-fillers"
    },
    {
      title: "Non-Surgical Nose Job",
      description: "Reshape without surgery",
      link: "/non-surgical-nose-job"
    },
    {
      title: "Skin Boosters",
      description: "Deep hydration and rejuvenation",
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
              <p className="text-gray-400 text-sm mb-4">
                <AutoLinkedText>{treatment.description}</AutoLinkedText>
              </p>
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
