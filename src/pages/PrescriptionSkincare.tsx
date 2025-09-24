import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AestheticAnalysisWizard from "@/components/AestheticAnalysisWizard";
import AIConsultationWidget from "@/components/AIConsultationWidget";
import { 
  Heart, 
  Shield, 
  Clock, 
  Star, 
  CheckCircle, 
  Upload, 
  UserCheck, 
  Package,
  Sparkles,
  Sun,
  Zap,
  Eye,
  Brain
} from "lucide-react";
import { motion } from "framer-motion";

const PrescriptionSkincare = () => {
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const seoData = generateSEOMetadata(
    "Personalised Prescription Skincare – CosmeDocs | £60 Every 3 Months",
    "Get dermatologist-grade skincare with clinically proven actives. Generic formulations from pharma giants, tailored to your skin for just £60 every 3 months.",
    "/prescription-skincare"
  );

  const conditions = [
    {
      title: "Acne (Mild to Moderate)",
      icon: Zap,
      treatments: ["Tretinoin", "Adapalene + Benzoyl Peroxide", "Azelaic Acid"],
      focus: "Reduce breakouts, unclog pores, prevent scarring",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Pigmentation",
      icon: Sun,
      treatments: ["Hydroquinone (supervised)", "Azelaic Acid", "Tretinoin"],
      focus: "Lighten dark patches, even skin tone",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "General Ageing & Dullness",
      icon: Sparkles,
      treatments: ["Tretinoin", "Niacinamide", "Antioxidant blends"],
      focus: "Smoother skin, restore natural glow",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Photoageing (Sun Damage)",
      icon: Eye,
      treatments: ["Tretinoin", "Azelaic Acid", "Combination antioxidants"],
      focus: "Repair fine lines, texture, UV-caused pigmentation",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Rosacea",
      icon: Heart,
      treatments: ["Metronidazole", "Azelaic Acid"],
      focus: "Reduce redness, sensitivity, prevent flare-ups",
      color: "from-rose-500 to-red-500"
    }
  ];

  const steps = [
    {
      icon: Upload,
      title: "Complete Your Online Assessment",
      description: "AI-guided chat collects your age, skin history, allergies, and past treatments. Upload photos of your skin for comprehensive analysis.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: UserCheck,
      title: "Doctor Reviews Your Case",
      description: "AI summarises your history for a GMC-registered doctor who confirms the best evidence-based treatment plan for your skin.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Package,
      title: "Receive Your 3-Month Pack (£60)",
      description: "Get premium generic medications from pharmaceutical giants, plus consultation, postage, and follow-up review after 3 months.",
      color: "from-pink-500 to-amber-500"
    }
  ];

  const benefits = [
    "Doctor consultation & prescription",
    "3-month supply of premium generic medications",
    "Postage & handling included",
    "Follow-up review after 3 months",
    "Pharmaceutical-grade formulations",
    "No custom compounding - proven quality"
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.image} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "CosmeDocs Prescription Skincare",
            "description": "Personalised prescription skincare with pharmaceutical-grade generic formulations",
            "url": seoData.canonical,
            "telephone": "0800 8600 178",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Harley Street",
              "addressLocality": "London",
              "addressCountry": "UK"
            },
            "medicalSpecialty": "Dermatology",
            "serviceType": "Prescription Skincare"
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  <span className="text-purple-300">Personalised Prescription Skincare</span>
                  <span className="block text-sm mt-4">Invisible art - dermatologist-grade skincare that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">£60 Every 3 Months</p>
                  <p className="text-sm text-gray-300">Clinically proven actives from pharmaceutical giants</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => setIsConsultationOpen(true)}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                  >
                    Start My Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                    onClick={() => setIsAnalysisOpen(true)}
                  >
                    AI Skin Analysis
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Treatment Summary */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Prescription Skincare Service</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Package className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Service Duration</h3>
                <p className="text-gray-300">Quarterly 3-month packs</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Results Timeline</h3>
                <p className="text-gray-300">4-12 weeks improvement</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Doctor Oversight</h3>
                <p className="text-gray-300">GMC-registered supervision</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quality Assurance</h3>
                <p className="text-gray-300">Pharmaceutical-grade formulations</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Prescription Skincare - Two Column Layout */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">What is Prescription Skincare?</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 backdrop-blur-sm border-purple-500/20 h-full hover:border-purple-500/40 transition-colors">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white mb-4">Professional-Grade Formulations</h3>
                      <p className="text-gray-300">
                        Prescription skincare uses clinically proven actives that are only available through medical supervision. 
                        These pharmaceutical-grade ingredients are significantly more potent than over-the-counter alternatives.
                      </p>
                      <p className="text-gray-300">
                        Our approach includes:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Doctor consultation & prescription</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">3-month supply of premium generic medications</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">Follow-up review after 3 months</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300">No custom compounding - proven quality</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 backdrop-blur-sm border-purple-500/20 h-full hover:border-purple-500/40 transition-colors">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white mb-4">Why Choose Our Service?</h3>
                      <p className="text-gray-300 mb-4">
                        We use premium generic formulations from pharmaceutical giants - not custom compounding. This ensures consistent quality and proven efficacy.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <div>
                            <span className="text-white font-medium">£60 Every 3 Months:</span>
                            <span className="text-gray-300"> All-inclusive pricing with no hidden costs</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <div>
                            <span className="text-white font-medium">Pharmaceutical Quality:</span>
                            <span className="text-gray-300"> Generic medications from established pharmaceutical companies</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <div>
                            <span className="text-white font-medium">Expert Supervision:</span>
                            <span className="text-gray-300"> GMC-registered doctors oversee all prescriptions</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <div>
                            <span className="text-white font-medium">Convenient Service:</span>
                            <span className="text-gray-300"> Delivered quarterly with follow-up reviews</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Conditions We Treat */}
        <section className="py-20">
          <div className="page-container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl font-bold mb-6">Conditions We Treat</h2>
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our GMC-registered doctors prescribe proven treatments using pharmaceutical-grade generic formulations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conditions.map((condition, index) => (
                <motion.div
                  key={condition.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="bg-black/50 backdrop-blur-sm border-purple-500/20 h-full hover:border-purple-500/40 transition-colors group-hover:scale-105">
                    <CardContent className="p-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${condition.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <condition.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-white">{condition.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed text-lg">{condition.focus}</p>
                      
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Treatments Available:</p>
                        {condition.treatments.map((treatment, treatmentIndex) => (
                          <motion.div 
                            key={treatment} 
                            className="flex items-center gap-3 text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: treatmentIndex * 0.1 }}
                          >
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm">{treatment}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Analysis Wizard */}
        <AestheticAnalysisWizard 
          isOpen={isAnalysisOpen} 
          onClose={() => setIsAnalysisOpen(false)} 
        />

        {/* AI Consultation Widget */}
        <AIConsultationWidget 
          isOpen={isConsultationOpen} 
          onClose={() => setIsConsultationOpen(false)} 
        />
      </div>
    </>
  );
};

export default PrescriptionSkincare;