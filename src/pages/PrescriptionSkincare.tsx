import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AestheticAnalysisWizard from "@/components/AestheticAnalysisWizard";
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

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge variant="secondary" className="mb-6">
                <Shield className="w-4 h-4 mr-2" />
                GMC-Registered Doctors
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Get Dermatologist-Grade Skincare,
                <span className="block">Delivered Quarterly</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Clinically proven actives from pharmaceutical giants, tailored to your skin, for just £60 every 3 months.
                <span className="block mt-2 font-medium">No custom compounding - only premium generic formulations.</span>
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-6 text-lg mr-4"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              >
                Start My Consultation
                <Star className="w-5 h-5 ml-2" />
              </Button>
              
              <Button
                onClick={() => setIsAnalysisOpen(true)}
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/40 px-8 py-6 text-lg"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                AI Skin Analysis
              </Button>
              
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  No Custom Compounding
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Pharmaceutical Giants Only
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Proven Quality
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Skin Analysis Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <Sparkles className="inline-block h-8 w-8 mr-3 text-primary" />
                AI Skin Analysis for Prescription Planning
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get a comprehensive AI analysis of your skin to help our doctors create the perfect prescription plan for you
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Brain,
                  title: "Smart Assessment",
                  description: "AI analysis identifies skin concerns that benefit from prescription treatment"
                },
                {
                  icon: Heart,
                  title: "Personalized Recommendations", 
                  description: "Get targeted suggestions for prescription actives based on your skin analysis"
                },
                {
                  icon: Clock,
                  title: "Instant Results",
                  description: "Immediate skin analysis to complement your doctor consultation"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() => setIsAnalysisOpen(true)}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-12 py-6 text-lg"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Start Your AI Skin Analysis
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Free assessment • Complements doctor consultation • Instant results
              </p>
            </motion.div>
          </div>
        </section>

        {/* Conditions We Treat */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Conditions We Treat</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our GMC-registered doctors prescribe proven treatments using pharmaceutical-grade generic formulations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conditions.map((condition, index) => (
                <motion.div
                  key={condition.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${condition.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <condition.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3">{condition.title}</h3>
                      <p className="text-muted-foreground mb-4">{condition.focus}</p>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-primary">Treatments Available:</p>
                        {condition.treatments.map((treatment) => (
                          <div key={treatment} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {treatment}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">Simple, professional, effective</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start gap-6 mb-12 last:mb-0"
                >
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} p-4 shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-primary">0{index + 1}</span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Generic Over Custom Compounded?</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6 border-green-200 bg-green-50">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Our Generic Formulations</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Manufactured by pharmaceutical giants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Rigorous quality control & testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Proven stability & efficacy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Consistent batch-to-batch quality</span>
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6 border-red-200 bg-red-50">
                  <h3 className="text-xl font-semibold mb-4 text-red-800">Custom Compounded Limitations</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-red-600 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center">
                        <span className="text-white text-xs">×</span>
                      </div>
                      <span>Made in small private labs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-red-600 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center">
                        <span className="text-white text-xs">×</span>
                      </div>
                      <span>Lower quality base formulations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-red-600 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center">
                        <span className="text-white text-xs">×</span>
                      </div>
                      <span>Inconsistent quality between batches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-red-600 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center">
                        <span className="text-white text-xs">×</span>
                      </div>
                      <span>Limited stability testing</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
              
              <Card className="p-8 border-2 border-primary/20 shadow-xl">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-primary mb-2">£60</div>
                  <div className="text-lg text-muted-foreground">every 3 months</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-center">
                    <span className="font-medium">Competitors:</span> £75–90 for the same actives
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                >
                  Start My Consultation Now
                  <Star className="w-5 h-5 ml-2" />
                </Button>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your best skin is 3 months away
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands who trust pharmaceutical-grade skincare over custom compounding
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-12 py-6 text-lg"
              >
                Start My Consultation Now
                <Clock className="w-5 h-5 ml-2" />
              </Button>
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
      </div>
    </>
  );
};

export default PrescriptionSkincare;