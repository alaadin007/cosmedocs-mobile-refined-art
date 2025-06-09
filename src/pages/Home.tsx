
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { TooltipProvider } from "@/components/ui/tooltip";
import PopularTreatments from "@/components/PopularTreatments";
import AnimatedDots from "@/components/AnimatedDots";
import LiquidGlassFacialAssessment from "@/components/LiquidGlassFacialAssessment";
import LiquidGlassAllTreatments from "@/components/LiquidGlassAllTreatments";

const Home = () => {
  const [isFacialAssessmentOpen, setIsFacialAssessmentOpen] = useState(false);
  const [isAllTreatmentsOpen, setIsAllTreatmentsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <TooltipProvider>
      <div className="bg-black text-white">
        <header>
          {/* SEO optimized hidden heading for crawlers */}
          <h1 className="sr-only">Cosmedocs - Premium Aesthetic Medicine Treatments | Botox, Dermal Fillers in London Harley Street</h1>
        </header>
        
        {/* Hero Section */}
        <section className="relative h-screen flex items-center" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
          <AnimatedDots />
          <div className="page-container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6
              }}>
                <div className="relative mb-6">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold" id="hero-heading">
                    cosmedocs
                  </h2>
                </div>
              </motion.div>
              
              <motion.p className="text-lg md:text-xl italic mb-6" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.5,
              duration: 0.6
            }}>
                *Our aesthetics is invisible art
              </motion.p>
              <motion.div className="mb-8 max-w-xl mx-auto" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.7,
              duration: 0.6
            }}>
                <p className="text-gray-300 mb-1">art • science • bit of magic</p>
                <p className="text-gray-400 text-sm mt-4">
                  Aesthetic medicine by Cosmedocs is minimal.<br />
                  Quiet, not loud.<br />
                  Invisible, not exaggerated.<br />
                  It's transformation that speaks — without saying a word.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Main Action Buttons Section */}
        <section className="py-20 bg-gradient-to-b from-black to-[#0A0A0A]" aria-labelledby="actions-heading">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.h2 id="actions-heading" className="sr-only">Main Actions</motion.h2>
              
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} transition={{
              delay: 0.2,
              duration: 0.6
            }} viewport={{
              once: true
            }}>
                {/* All Treatments Button */}
                <motion.button
                  onClick={() => setIsAllTreatmentsOpen(true)}
                  className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/30 rounded-3xl p-8 text-left transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-4">All Treatments</h3>
                  <p className="text-gray-300 mb-4">
                    Explore our comprehensive range of aesthetic treatments, from popular procedures to specialized services.
                  </p>
                  <div className="text-purple-400 font-medium">Browse All Treatments →</div>
                </motion.button>

                {/* CosmeDocs Facial Assessment Button */}
                <motion.button
                  onClick={() => setIsFacialAssessmentOpen(true)}
                  className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 border border-blue-500/30 rounded-3xl p-8 text-left transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-4">CosmeDocs Facial Assessment</h3>
                  <p className="text-gray-300 mb-4">
                    Every transformation begins with understanding. Our systematic approach evaluates four key aging factors.
                  </p>
                  <div className="text-blue-400 font-medium">View Assessment Details →</div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Treatments Section */}
        <PopularTreatments />

        {/* Hidden SEO content for search engines */}
        <div className="sr-only">
          <p>
            Cosmedocs is London's premier aesthetic medicine clinic located on prestigious Harley Street, offering advanced cosmetic treatments since 2007. Our expert practitioners specialize in Botox injections, dermal fillers, lip enhancement, non-surgical nose jobs, skin boosters, and comprehensive facial rejuvenation treatments. With over 1 million injections performed, we are recognized leaders in aesthetic medicine, providing natural-looking results through our invisible art philosophy. Our clinic offers consultation services, advanced anti-aging treatments, facial contouring, and personalized aesthetic solutions. We pride ourselves on subtle enhancement that speaks without saying a word, ensuring every client receives transformative results tailored to their individual needs. Our comprehensive approach addresses skin quality, wrinkle reduction, volume restoration, and facial harmonization using the latest techniques and premium products. Located at 10 Harley Street, London W1G 9PF, we serve clients seeking the highest standard of aesthetic medicine in the heart of London's medical district. Contact us at 0333 0551 503 or info@cosmedocs.com to begin your aesthetic journey with London's most trusted cosmetic medicine specialists.
          </p>
        </div>

        {/* Liquid Glass Modals */}
        <LiquidGlassFacialAssessment 
          isOpen={isFacialAssessmentOpen}
          onClose={() => setIsFacialAssessmentOpen(false)}
        />

        <LiquidGlassAllTreatments 
          isOpen={isAllTreatmentsOpen}
          onClose={() => setIsAllTreatmentsOpen(false)}
        />
      </div>
    </TooltipProvider>
  );
};

export default Home;
