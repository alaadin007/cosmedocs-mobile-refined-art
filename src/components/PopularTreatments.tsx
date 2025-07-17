
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import AutoLinkedText from "./AutoLinkedText";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface Treatment {
  title: string;
  description: string;
  link?: string;
  hasBeforeAfter?: boolean;
}

interface TreatmentCategory {
  title: string;
  image: string;
  treatments: Treatment[];
}

interface PopularTreatmentsProps {
  title?: string;
  treatments?: Treatment[];
  className?: string;
  showBeforeAfter?: boolean;
}

const PopularTreatments = ({ 
  title = "Treatments",
  treatments,
  className = "",
  showBeforeAfter = false
}: PopularTreatmentsProps) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const treatmentCategories: TreatmentCategory[] = [
    {
      title: "Dermal Filler",
      image: "/lovable-uploads/7d4c3660-f75d-4b75-a6ab-3e0d88f14627.png",
      treatments: [
        { title: "Cheek Filler", description: "Restore volume and enhance cheekbones", link: "/cheek-filler" },
        { title: "Chin & Jawline Filler", description: "Define and contour facial structure", link: "/chin-filler" },
        { title: "Hand Filler", description: "Restore youthful appearance to hands", link: "/dermal-fillers" },
        { title: "Hip Dip Filler", description: "Smooth hip contours", link: "/dermal-fillers" },
        { title: "Lip Filler", description: "Natural-looking lip enhancement", link: "/lip-fillers" },
        { title: "Liquid Facelift", description: "Non-surgical facial rejuvenation", link: "/non-surgical-facelift" },
        { title: "Marionette Line Filler", description: "Smooth lines around mouth", link: "/marionette-lines" },
        { title: "Nasolabial Fold Filler", description: "Reduce smile lines", link: "/nasolabial-folds" },
        { title: "Neck Filler", description: "Rejuvenate neck area", link: "/dermal-fillers" },
        { title: "Non Surgical Rhinoplasty", description: "Reshape nose without surgery", link: "/non-surgical-nose-job" },
        { title: "Tear Trough Filler", description: "Reduce under-eye bags", link: "/tear-trough-filler" },
        { title: "Temple Tear Trough Filler", description: "Restore temple volume", link: "/tear-trough-filler" }
      ]
    },
    {
      title: "Botox",
      image: "/lovable-uploads/b3cdcef2-fb83-43e7-b48b-5c6eff677086.png",
      treatments: [
        { title: "Forehead Botox", description: "Smooth forehead lines", link: "/face-botox-areas" },
        { title: "Crow's Feet Botox", description: "Reduce eye wrinkles", link: "/face-botox-areas" },
        { title: "Frown Lines Botox", description: "Soften between-brow lines", link: "/face-botox-areas" },
        { title: "Bunny Lines Botox", description: "Smooth nose wrinkles", link: "/face-botox-areas" },
        { title: "Gummy Smile Botox", description: "Reduce excessive gum show", link: "/gummy-smile-botox" },
        { title: "Jaw Botox", description: "Slim jawline and reduce grinding", link: "/face-botox-areas" },
        { title: "Neck Botox", description: "Smooth neck bands", link: "/face-botox-areas" },
        { title: "Nefertiti Botox", description: "Lift and contour neck", link: "/nefertiti-botox-facelift" },
        { title: "Chin Botox", description: "Smooth chin dimpling", link: "/chin-botox" },
        { title: "Lip Flip Botox", description: "Enhance upper lip appearance", link: "/face-botox-areas" }
      ]
    }
  ];

  const otherTreatments: Treatment[] = [
    {
      title: "Clinical Concepts to Flawless Skin",
      description: "Revolutionary 9-step protocol for achieving perfect skin health",
      link: "/clinical-concepts-to-flawless-skin"
    },
    {
      title: "HydraFacial",
      description: "Deep cleansing and hydration treatment",
      link: "/hydrafacial"
    },
    {
      title: "Chemical Peels",
      description: "Exfoliate and rejuvenate your skin",
      link: "/chemical-peel"
    },
    {
      title: "Profhilo",
      description: "Bio-remodeling skin treatment",
      link: "/profhilo-treatment"
    }
  ];

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategory(expandedCategory === categoryTitle ? null : categoryTitle);
  };

  return (
    <section className={`py-20 bg-black ${className}`} aria-labelledby="treatments-heading">
      <div className="page-container">
        <h2 id="treatments-heading" className="text-3xl font-bold mb-12 text-center text-white">{title}</h2>
        
        {/* Main Treatment Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {treatmentCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => toggleCategory(category.title)}
            >
              {/* Main Category Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-700">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={category.image} 
                    alt={`${category.title} treatments`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <motion.div
                      animate={{ rotate: expandedCategory === category.title ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-2"
                    >
                      <Plus className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Expanded Treatment List */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedCategory === category.title ? "auto" : 0,
                  opacity: expandedCategory === category.title ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden bg-gray-900 border border-gray-700 border-t-0 rounded-b-2xl"
              >
                <div className="p-6 space-y-3">
                  {category.treatments.map((treatment, treatmentIndex) => (
                    <Link
                      key={treatment.title}
                      to={treatment.link || "#"}
                      className="block p-4 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors group/item"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-medium group-hover/item:text-blue-400 transition-colors">
                            {treatment.title}
                          </h4>
                          <p className="text-gray-400 text-sm mt-1">{treatment.description}</p>
                        </div>
                        <div className="text-blue-400 opacity-0 group-hover/item:opacity-100 transition-opacity">
                          →
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Other Treatments */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Other Treatments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link
                  to={treatment.link || "#"}
                  className="block p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <h4 className="text-white font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {treatment.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    <AutoLinkedText>{treatment.description}</AutoLinkedText>
                  </p>
                  <div className="text-blue-400 text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more →
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularTreatments;
