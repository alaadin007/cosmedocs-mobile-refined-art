import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { generateSEOMetadata } from '@/utils/seo';
import { Clock, Shield, Calendar, Activity, Heart, Users, CheckCircle, Diamond, Eye, Smile, Gem, Droplets, Sparkles } from 'lucide-react';

export default function EightPointFacelift() {
  const seoData = generateSEOMetadata(
    "8 Point Face Lift London | Non-Surgical Facelift | Cosmedocs",
    "Transform your appearance with our 8 Point Face Lift treatment in London. Non-surgical facelift using dermal fillers to restore volume and lift. Book your consultation today.",
    "/8-point-facelift"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "8 Point Face Lift",
    "description": "Non-surgical facelift treatment using dermal fillers strategically placed at 8 key points to restore volume and lift the face",
    "procedureType": "Minimally Invasive",
    "bodyLocation": "Face",
    "preparation": "Consultation with qualified practitioner",
    "followup": "Follow-up appointment if required",
    "howPerformed": "Strategic injection of dermal fillers at 8 key facial points",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Cosmedocs",
      "url": "https://www.cosmedocs.com"
    }
  };

  const treatmentInfo = [
    {
      icon: Shield,
      title: "Anaesthetic",
      value: "Local",
      description: "Comfortable treatment with local anaesthetic"
    },
    {
      icon: Calendar,
      title: "Results",
      value: "Immediate | 12-15 Months",
      description: "Immediate visible results lasting up to 15 months"
    },
    {
      icon: Clock,
      title: "Procedure Time",
      value: "10-25 mins",
      description: "Quick and efficient treatment session"
    },
    {
      icon: Activity,
      title: "Risk & Complications",
      value: "Minimal",
      description: "Very low risk with minimal side effects"
    },
    {
      icon: Heart,
      title: "Full Recovery",
      value: "1 Week",
      description: "Complete recovery within one week"
    },
    {
      icon: Users,
      title: "Back To Work",
      value: "Immediately",
      description: "Resume work activities right after treatment"
    }
  ];

  const eightPoints = [
    {
      number: "01",
      title: "Cheek Structure",
      description: "Restore volume to cheek structure for enhanced definition",
      icon: Diamond,
      iconColor: "text-blue-400"
    },
    {
      number: "02", 
      title: "Cheek Volume & Definition",
      description: "Add volume and create beautiful cheek definition",
      icon: Diamond,
      iconColor: "text-blue-400"
    },
    {
      number: "03",
      title: "Under Eye Hollows",
      description: "Address dark circles and under eye hollows effectively",
      icon: Eye,
      iconColor: "text-orange-400"
    },
    {
      number: "04",
      title: "Smile Enhancement",
      description: "Lift downward smile lines for a more youthful appearance",
      icon: Smile,
      iconColor: "text-yellow-400"
    },
    {
      number: "05",
      title: "Jawline Definition",
      description: "Create a more defined and sculpted jawline",
      icon: Gem,
      iconColor: "text-cyan-400"
    },
    {
      number: "06",
      title: "Jowl Area",
      description: "Reduce the appearance of jowls and sagging",
      icon: Diamond,
      iconColor: "text-orange-500"
    },
    {
      number: "07",
      title: "Nose to Mouth Contours",
      description: "Smooth nose to mouth lines and contours",
      icon: Sparkles,
      iconColor: "text-yellow-300"
    },
    {
      number: "08",
      title: "Tear Troughs",
      description: "Address tear troughs that contribute to tired appearance",
      icon: Droplets,
      iconColor: "text-blue-300"
    }
  ];

  const faqData = [
    {
      question: "What Is Involved In 8 Point Facelift Procedure?",
      answer: "8 point facelift treatment makes use of dermal fillers injected at 8 key points on the face to give volume and rejuvenate the facial appearance. It gives immediate and natural results."
    },
    {
      question: "What Is A Suitable Age For 8 Point Facelift Treatment?",
      answer: "Patients who are in their late 30s and early 40s with mild skin laxity can undertake this non-invasive facelift treatment. If there is severe skin laxity, desired results can be achieved but more quantity of dermal fillers will be required."
    },
    {
      question: "What Are The Possible Side Effects?",
      answer: "No or very few side effects have been observed in majority of the patients. However, there can be mild swelling and bruising which normally subsides in few days."
    },
    {
      question: "What Is The Downtime Of The Treatment?",
      answer: "There is no downtime of this non-surgical facelift treatment. Patients can go back to their work instantly after getting the treatment."
    },
    {
      question: "How Long Lasting Are The Effects Of 8 Point Facelift Treatment?",
      answer: "The treatment gives instant improvement in the facial appearance however the full results of this non-surgical facelift treatment can be seen after about 1-2 weeks when the minor swelling and bruising subsides. The results keep on improving for 2-3 months. The effect of the results lasts for almost 12-18 months."
    }
  ];

  const benefits = [
    "Immediate visible results",
    "Non-surgical approach",
    "Minimal downtime",
    "Natural-looking enhancement", 
    "Long-lasting effects (12-18 months)",
    "Customized to your needs"
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section - Matching LipFillers exact style */}
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
                  8 Point
                  <span className="block text-purple-300">Face Lift</span>
                  <span className="block text-sm mt-4">Elevate, Enhance, and Embrace Youthful Radiance!</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Starting from £800</p>
                  <p className="text-sm text-gray-300">Non-surgical facelift using dermal fillers at 8 strategic points</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    Call: 0207 435 7521
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
              <h2 className="text-3xl font-bold mb-8 text-white">8 Point Face Lift Treatment</h2>
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
                  <Clock className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Treatment Duration</h3>
                <p className="text-gray-300">10-25 minutes depending on areas treated</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Results Duration</h3>
                <p className="text-gray-300">Immediate results lasting 12-18 months</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Activity className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Recovery Time</h3>
                <p className="text-gray-300">Minimal downtime, return to work immediately</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Anaesthesia</h3>
                <p className="text-gray-300">Local anaesthetic for comfort</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Objective */}
        <section className="py-20 px-6 bg-accent">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                8 Point Face Lift Treatment Objective
              </h2>
              <p className="text-xl text-primary font-semibold mb-6">
                Replace lost volume in 8 key points contributing to a sunken and tired appearance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ageing takes its toll on us through the progressive loss of collagen, elastin, and subcutaneous fats. 
                This brings about continuous changes in our facial profile in the form of facial volume loss, lines and wrinkles, 
                folds, and sagging facial skin. The 8 point face lift treatment is designed to restore lost volume and lift the face. 
                This non-surgical facelift treatment is also called 'liquid facelift treatment' because dermal fillers are used 
                strategically to give volume to the face and create a lifting impact for a completely rejuvenated appearance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The 8 Points */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Strategic 8 Points
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each point is carefully selected to restore volume and create a lifting effect for natural-looking rejuvenation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eightPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                     <CardHeader className="text-center pb-4">
                       <point.icon className={`w-8 h-8 mx-auto mb-2 ${point.iconColor}`} />
                       <div className="text-3xl font-bold text-primary mb-2">
                        {point.number}
                      </div>
                      <CardTitle className="text-lg">{point.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-center">
                        {point.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal Candidates & Results */}
        <section className="py-20 px-6 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">Ideal Candidates</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      The 8 point face lift treatment is ideal for patients in their late 30s and early 40s who have 
                      decreased facial volume with mild jowling. In the case of heavy jowls, PDO thread lift treatment 
                      is recommended, as this non-surgical facelift treatment will not improve them significantly.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Perfect for:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Late 30s to early 40s age group</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Decreased facial volume</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Mild jowling concerns</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Desire for non-surgical solution</span>
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
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">Results & Recovery</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Results Timeline:</h4>
                      <p className="text-muted-foreground">
                        The 8 Point facelift treatment gives immediate results that last for about 12-18 months. 
                        Full results are visible after 1-2 weeks when minor swelling and bruising subsides.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Recovery & Downtime:</h4>
                      <p className="text-muted-foreground">
                        There is no or little downtime. Routine activities can be resumed immediately after treatment. 
                        Minor bruising and swelling may occur but are temporary and fade within a few days.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing-section" className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">8 Point Face Lift Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for non-surgical 8 Point Face Lift treatments. All prices include consultation, 
                treatment, and comprehensive aftercare support from our expert practitioners.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-purple-500 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Basic Package</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£800</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Essential 8 point face lift treatment</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium dermal fillers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Aftercare support</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-purple-600 border-purple-400 h-full text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-semibold">RECOMMENDED</span>
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-white text-2xl">Complete Package</CardTitle>
                    <div className="text-white text-4xl font-bold">£1200</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Comprehensive facial rejuvenation treatment</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Extended treatment session</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Premium quality fillers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Extended aftercare support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Follow-up appointments</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-700 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Consultation Only</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£50</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Professional facial assessment and treatment planning</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Comprehensive facial analysis</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Treatment recommendations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Deducted from treatment cost</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-6">
                *Consultation fee is deducted from treatment cost if you proceed on the same day
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold">
                Book Your Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Cosmedocs?</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Experience</h3>
                <p className="text-gray-300">Over 1 million injections performed since 2007</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Training</h3>
                <p className="text-gray-300">
                  <a 
                    href="https://www.harleystreetinstitute.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-purple-200 underline"
                  >
                    Harley Street Institute
                  </a> trainers
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quality</h3>
                <p className="text-gray-300">Premium FDA-approved dermal fillers only</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Diamond className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Philosophy</h3>
                <p className="text-gray-300">'Invisible art' for natural results</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Smile className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Aftercare</h3>
                <p className="text-gray-300">Comprehensive aftercare and follow-up</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Get answers to common questions about 8 Point Face Lift treatment
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-primary/20 rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Why CosmeDocs */}
        <section className="py-20 px-6 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose CosmeDocs?
              </h2>
              <p className="text-lg text-muted-foreground">
                <strong>CosmeDocs</strong> is a renowned name in the industry of cosmetics. Our clinics located in 
                Harley Street (London), Derby, Nottingham, and Portsmouth are well equipped and modern practices. 
                CosmeDocs are also well-known trainers to physicians from around the globe.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Our aesthetics is invisible art - Bold • Natural • Always Your Way
              </p>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Transform Your Appearance?
              </h2>
              <p className="text-xl text-muted-foreground">
                Book your consultation today and discover how the 8 Point Face Lift can help you achieve natural, youthful results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Book Consultation Now
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Call: 0207 435 7521
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <p>
            The 8 Point Face Lift at CosmeDocs London represents the pinnacle of non-surgical facial rejuvenation techniques. 
            This innovative liquid facelift procedure strategically targets eight crucial areas of the face using premium dermal fillers 
            to restore volume, enhance contours, and create a natural lifting effect. Located in prestigious Harley Street, our clinic 
            offers this transformative treatment to clients seeking to combat the signs of aging without the need for invasive surgery.
          </p>
          <p>
            Our approach focuses on the middle face, facial contours, and lower face regions, addressing concerns such as volume loss, 
            sagging skin, and the development of jowls. The treatment is particularly effective for individuals in their late thirties 
            and early forties who are beginning to notice the effects of collagen and elastin depletion. By precisely injecting 
            dermal fillers at the eight strategic points, we can restore the youthful architecture of the face while maintaining 
            completely natural-looking results.
          </p>
          <p>
            The eight points targeted in this comprehensive facial rejuvenation treatment include the cheek structure and volume, 
            under-eye hollows and tear troughs, jawline definition, jowl area improvement, nose-to-mouth contour enhancement, 
            and smile line correction. Each injection point is carefully selected based on individual facial anatomy and aesthetic goals, 
            ensuring optimal results that complement the patient's natural features.
          </p>
          <p>
            At CosmeDocs, we pride ourselves on our expertise in aesthetic medicine and our commitment to safety and natural results. 
            Our practitioners are highly trained professionals who understand the importance of precision and artistry in cosmetic treatments. 
            The 8 Point Face Lift procedure typically takes between 10-25 minutes to complete, with immediate results that continue to 
            improve over the following weeks as any minor swelling subsides.
          </p>
          <p>
            The longevity of results from the 8 Point Face Lift treatment is impressive, with effects lasting between 12-18 months 
            depending on individual factors such as metabolism, lifestyle, and the specific dermal fillers used. This makes it an 
            excellent investment for those seeking long-term facial rejuvenation without the commitment and risks associated with surgical procedures.
          </p>
        </div>
      </div>
    </>
  );
}