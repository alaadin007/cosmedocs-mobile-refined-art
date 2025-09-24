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

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-32 lg:py-40 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <Badge className="mb-6 bg-white/10 border-white/20 text-white hover:bg-white/20 px-6 py-2 text-sm backdrop-blur-sm">
                  <Shield className="w-4 h-4 mr-2" />
                  GMC-Registered Doctors
                </Badge>
              </motion.div>
              
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8"
              >
                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                  Get Dermatologist-Grade Skincare,
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Delivered Quarterly
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Clinically proven actives from pharmaceutical giants, tailored to your skin, for just 
                <span className="text-white font-semibold"> £60 every 3 months</span>.
                <span className="block mt-3 text-lg font-medium text-gray-400">
                  No custom compounding - only premium generic formulations.
                </span>
              </motion.p>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-8 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                  onClick={() => setIsConsultationOpen(true)}
                >
                  Start My Consultation
                  <Star className="w-6 h-6 ml-3" />
                </Button>
                
                <Button
                  onClick={() => setIsAnalysisOpen(true)}
                  variant="outline"
                  size="lg"
                  className="bg-white/5 border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-12 py-8 text-xl font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  <Sparkles className="h-6 w-6 mr-3" />
                  AI Skin Analysis
                </Button>
              </motion.div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400"
              >
                <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  No Custom Compounding
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Pharmaceutical Giants Only
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Proven Quality
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* AI Skin Analysis Section */}
        <section className="py-32 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-8"
              >
                <Sparkles className="h-10 w-10 text-white" />
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                AI Skin Analysis for Prescription Planning
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Get a comprehensive AI analysis of your skin to help our doctors create the perfect prescription plan for you
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Brain,
                  title: "Smart Assessment",
                  description: "AI analysis identifies skin concerns that benefit from prescription treatment",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  icon: Heart,
                  title: "Personalized Recommendations", 
                  description: "Get targeted suggestions for prescription actives based on your skin analysis",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Clock,
                  title: "Instant Results",
                  description: "Immediate skin analysis to complement your doctor consultation",
                  gradient: "from-emerald-500 to-teal-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-500 group-hover:scale-105 group-hover:border-white/20">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() => setIsAnalysisOpen(true)}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-16 py-8 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="h-6 w-6 mr-3" />
                Start Your AI Skin Analysis
              </Button>
              <p className="text-lg text-gray-400 mt-6">
                Free assessment • Complements doctor consultation • Instant results
              </p>
            </motion.div>
          </div>
        </section>

        {/* Conditions We Treat */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Conditions We Treat
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
                  <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 group-hover:scale-105 group-hover:border-white/20 hover:shadow-2xl">
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
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${condition.color}`}></div>
                          <span className="text-sm font-medium">{treatment}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                How It Works
              </h2>
              <p className="text-xl text-gray-300">Simple, professional, effective</p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group mb-16 last:mb-0"
                >
                  <div className="flex items-start gap-8 lg:gap-12">
                    <div className="flex-shrink-0 relative">
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${step.color} p-5 shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                      {index < steps.length - 1 && (
                        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-white/20 to-transparent"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                          0{index + 1}
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-lg lg:text-xl">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/10 to-black"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Generic Over Custom Compounded?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12 mt-20">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-3xl p-10 border border-green-400/20 hover:border-green-400/40 transition-all duration-500 hover:scale-105">
                    <div className="absolute -top-6 left-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-8 text-green-300 pt-4">Our Generic Formulations</h3>
                    <ul className="space-y-6 text-left">
                      <li className="flex items-start gap-4 group-hover:translate-x-2 transition-transform duration-300">
                        <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-white text-lg font-medium">Manufactured by pharmaceutical giants</span>
                      </li>
                      <li className="flex items-start gap-4 group-hover:translate-x-2 transition-transform duration-300 delay-100">
                        <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-white text-lg font-medium">Rigorous quality control & testing</span>
                      </li>
                      <li className="flex items-start gap-4 group-hover:translate-x-2 transition-transform duration-300 delay-200">
                        <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-white text-lg font-medium">Proven stability & efficacy</span>
                      </li>
                      <li className="flex items-start gap-4 group-hover:translate-x-2 transition-transform duration-300 delay-300">
                        <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-white text-lg font-medium">Consistent batch-to-batch quality</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-xl rounded-3xl p-10 border border-red-400/20 hover:border-red-400/40 transition-all duration-500 hover:scale-105">
                    <div className="absolute -top-6 left-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                        <span className="text-white text-xl font-bold">×</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-8 text-red-300 pt-4">Custom Compounded Limitations</h3>
                    <ul className="space-y-6 text-left">
                      <li className="flex items-start gap-4 group-hover:translate-x-2 transition-transform duration-300">
                        <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                          <span className="text-white text-sm font-bold">×</span>
                        </div>
                        <span className="text-white text-lg font-medium">Made in small private labs</span>
                      </li>
                      <li className="flex items-start gap-4 group-hover:translate-x-2 transition-transform duration-300 delay-100">
                        <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                          <span className="text-white text-sm font-bold">×</span>
                        </div>
                        <span className="text-white text-lg font-medium">Lower quality base formulations</span>
                      </li>
                      <li className="flex items-start gap-4 group-hover:translate-x-2 transition-transform duration-300 delay-200">
                        <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                          <span className="text-white text-sm font-bold">×</span>
                        </div>
                        <span className="text-white text-lg font-medium">Inconsistent quality between batches</span>
                      </li>
                      <li className="flex items-start gap-4 group-hover:translate-x-2 transition-transform duration-300 delay-300">
                        <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                          <span className="text-white text-sm font-bold">×</span>
                        </div>
                        <span className="text-white text-lg font-medium">Limited stability testing</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </h2>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 shadow-2xl">
                  {/* Floating price badge */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-2xl">
                      <span className="text-sm font-medium uppercase tracking-wider">Best Value</span>
                    </div>
                  </div>
                  
                  <div className="text-center mb-12 mt-8">
                    <div className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                      £60
                    </div>
                    <div className="text-2xl text-gray-300">every 3 months</div>
                  </div>
                  
                  <div className="space-y-6 mb-12">
                    {benefits.map((benefit, index) => (
                      <motion.div 
                        key={benefit} 
                        className="flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                        <span className="text-white text-lg font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 p-6 rounded-2xl mb-12">
                    <p className="text-lg text-center text-white">
                      <span className="font-bold text-red-300">Competitors:</span> £75–90 for the same actives
                    </p>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-8 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                    onClick={() => setIsConsultationOpen(true)}
                  >
                    Start My Consultation Now
                    <Star className="w-6 h-6 ml-3" />
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Your best skin is
                </span>
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  3 months away
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Join thousands who trust pharmaceutical-grade skincare over custom compounding
              </motion.p>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-16 py-8 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                  onClick={() => setIsConsultationOpen(true)}
                >
                  Start My Consultation Now
                  <Clock className="w-6 h-6 ml-3" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h3>Prescription Skincare Service</h3>
          <p>CosmeDocs offers personalised prescription skincare consultations with GMC-registered doctors. Our service focuses on pharmaceutical-grade generic formulations from established pharmaceutical companies, ensuring superior quality compared to custom compounded alternatives manufactured in small private laboratories.</p>
          
          <h4>Treatment Categories</h4>
          <p>We specialise in treating acne, pigmentation disorders, general ageing concerns, photoageing from sun damage, and rosacea using clinically proven active ingredients including tretinoin, adapalene, benzoyl peroxide, azelaic acid, hydroquinone, niacinamide, and metronidazole.</p>
          
          <h4>Quality Assurance</h4>
          <p>Unlike custom compounded medications which are often produced in smaller facilities with variable quality control, we exclusively use generic formulations manufactured by pharmaceutical giants. These products undergo rigorous testing, maintain consistent batch-to-batch quality, and have proven stability profiles.</p>
          
          <h4>Service Process</h4>
          <p>Our three-step process includes an AI-guided online assessment with photo upload, review by a GMC-registered doctor, and quarterly delivery of prescribed medications. Each consultation includes comprehensive follow-up care and monitoring.</p>
          
          <h4>Pricing and Value</h4>
          <p>At £60 every three months, our service includes doctor consultation, prescription, three-month medication supply, postage, and follow-up review. This represents significant value compared to competitors charging £75-90 for similar treatments.</p>
        </div>

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