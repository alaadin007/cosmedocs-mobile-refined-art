import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Check, Clock, Calendar, Activity, Syringe, CheckCircle, Award, GraduationCap, Palette, Heart } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";

const MigraineBotox = () => {
  const seoData = generateSEOMetadata(
    "Migraine Botox London | Chronic Headache Treatment | Cosmedocs Harley Street",
    "Expert migraine botox treatment in London for chronic headaches and tension relief. Professional therapeutic botox by cosmetic doctors. FDA-approved treatment at Harley Street clinic.",
    "/migraine-botox"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/2d50a34b-eb5c-40fd-849d-79e90a7cf03c.png", alt: "Migraine botox treatment results", caption: "Migraine Botox Treatment: Significant reduction in headache frequency and intensity. Expert therapeutic muscle relaxation - transformation that speaks without saying a word." }
  ];

  const faqs = [
    {
      question: "How does botox help with migraines?",
      answer: "Botox blocks nerve signals that cause muscle contractions and pain transmission. For chronic migraines, it's injected into specific head and neck muscles to prevent headache triggers and reduce migraine frequency and severity."
    },
    {
      question: "How long do migraine botox results last?",
      answer: "Migraine botox results typically last 3-4 months. Many patients experience significant reduction in headache days and intensity. Regular treatments every 12 weeks help maintain optimal migraine prevention."
    },
    {
      question: "Is migraine botox painful?",
      answer: "Migraine botox involves multiple small injections across the head and neck. Most patients describe mild discomfort during the 15-20 minute procedure. Our doctors use fine needles and precise techniques to minimize discomfort."
    },
    {
      question: "What can I expect after migraine botox treatment?",
      answer: "You may experience mild tenderness at injection sites for 24-48 hours. Migraine relief typically begins within 2-4 weeks, with maximum benefits at 12 weeks. You can resume normal activities immediately after treatment."
    },
    {
      question: "Am I a good candidate for migraine botox?",
      answer: "Ideal candidates have chronic migraines (15+ headache days per month) that haven't responded well to other treatments. A detailed medical history and neurological assessment determine if this therapy is suitable for you."
    },
    {
      question: "How much does migraine botox cost?",
      answer: "Migraine botox at Cosmedocs costs £450 per treatment session. This therapeutic treatment requires higher doses than cosmetic botox and is administered every 12 weeks for optimal migraine prevention."
    },
    {
      question: "Can migraine botox be combined with other treatments?",
      answer: "Yes! Migraine botox can be combined with other headache prevention strategies and cosmetic botox treatments. Our doctors coordinate comprehensive treatment plans for both therapeutic and aesthetic benefits."
    },
    {
      question: "How many Botox shots are typically needed to treat chronic migraine headaches?",
      answer: "There are up to 31 possible injection sites in the upper face, temples, neck, and shoulders. The clinician's experience is crucial in determining which trigger points to include, thereby reducing the dose and cost. Botox works to prevent headaches and chronic migraines with different doses depending on whether the individual is experiencing an on or off phase."
    },
    {
      question: "How long does Botox for migraines take to start working?",
      answer: "Injections of Botox work from several days to two weeks however, chronic migraines do take longer to subside. While some patients do not start to see an improvement until after their second treatment 3-4 months later."
    },
    {
      question: "Who makes a good candidate for Botox headache/migraine treatment?",
      answer: "If you are someone who frequently experiences severe migraine headaches, your healthcare provider may recommend Botox injections. However, they will only administer Botox if you have 14 or fewer headache days each month. Consulting with our Botox experts can determine if Botox injections are suitable for chronic headaches."
    },
    {
      question: "How often do I need to receive Botox treatment for migraines?",
      answer: "Generally, the Botox treatment is repeated after every 4-6 months for effective results against spells of chronic migraine."
    },
    {
      question: "Why visit a cosmetic doctor for migraines?",
      answer: "Cosmetic doctors have long used Botox for medical conditions such as bruxism (teeth clenching) and excessive sweating. Cosmedocs offers Botox injections for migraines with extensive experience. We welcome patients and provide the best care at lower costs."
    }
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
        <meta name="keywords" content="migraine botox London, chronic headache treatment, therapeutic botox, migraine prevention, headache relief, Harley Street clinic" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Expert migraine botox treatments in London",
            "url": seoData.canonical,
            "telephone": "0333 0551 503",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "medicalSpecialty": "Cosmetic Medicine",
            "priceRange": "££"
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
                  <span className="text-purple-300">Migraine Botox London</span>
                  <span className="block text-sm mt-4">Invisible art - headache relief that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Chronic Headache Treatment</p>
                  <p className="text-sm text-gray-300">15-20 minutes • Results last 3-4 months</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                    onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                    onClick={() => {
                      const pricingSection = document.getElementById('pricing-section');
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    View Price List
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
              <h2 className="text-3xl font-bold mb-8 text-white">Migraine Botox Treatment</h2>
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
                <p className="text-gray-300">15-20 minutes including consultation</p>
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
                <p className="text-gray-300">3-4 months with regular treatments</p>
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
                <p className="text-gray-300">Immediate return to activities</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Syringe className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Anaesthesia</h3>
                <p className="text-gray-300">Topical anaesthetic if required</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Migraine Botox */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">What is Migraine Botox?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Cosmedocs has been utilizing Botox to achieve aesthetic balance and symmetry for a decade. Although this treatment was initially designed for wrinkle treatment, it was accidentally discovered to be effective in treating migraines. Our invisible art approach provides relief while maintaining natural expressions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-white text-2xl text-center">Understanding Migraines</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
                    Migraines are not just ordinary headaches. They are complex neurological events characterized by intense, debilitating headaches, often accompanied by nausea, vomiting, and sensitivity to light and sound.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
                    People with chronic migraines experience 15 or more headache days per month, with migraines occurring on at least eight days.
                  </p>
                  <div className="bg-purple-900/50 rounded-lg p-6 max-w-2xl mx-auto">
                    <p className="text-purple-200 font-semibold text-center">
                      Did you know that migraine is the 3rd most common illness globally and the 6th most crippling problem for many people worldwide? Moreover, over 190,000 migraine attacks are routinely experienced in England alone.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 max-w-2xl mx-auto">
                <h4 className="text-white text-xl font-bold mb-4">Key Treatment Areas</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-purple-300 font-medium">Forehead Muscles</div>
                  <div className="text-purple-300 font-medium">Temple Areas</div>
                  <div className="text-purple-300 font-medium">Neck Muscles</div>
                  <div className="text-purple-300 font-medium">Shoulder Muscles</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Migraine Triggers */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Triggers for Migraines</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
                It is important to understand that migraines can have various causes. Some of the factors are:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Fatigue",
                "Stress and bright sunlight", 
                "Changes in sleep patterns or diet",
                "Hormones",
                "Oral contraceptives",
                "Strong odours",
                "Nitrates in certain foods or alcohol"
              ].map((trigger, index) => (
                <motion.div
                  key={trigger}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg p-6 border border-purple-500/30"
                >
                  <p className="text-white font-medium text-center">{trigger}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Botox Works */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">How Does Botox Work for Migraines?</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl flex items-center gap-3">
                      <Heart className="text-purple-400" size={24} />
                      FDA-Approved Mechanism
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      Botox works by blocking the release of specific chemicals involved in transmitting pain. When injected into targeted muscles, it enters nerve endings and prevents the release of neurotransmitters that carry pain signals to the brain.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      This creates a protective barrier against migraine triggers, effectively stopping the pain cascade before it begins. The treatment is particularly effective for chronic migraine sufferers who experience frequent, debilitating episodes.
                    </p>
                    <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6 border border-purple-500/30">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="text-purple-400 mt-1" size={20} />
                        <div>
                          <p className="text-purple-200 font-medium mb-2">Johns Hopkins Medicine</p>
                          <p className="text-gray-300 italic text-sm leading-relaxed">
                            "When botulinum toxin is injected into the muscles of the face, neck, and head, the medication relaxes them. Botox for migraine affects the nerves by blocking neurotransmission or pain signals between the brain and nerves."
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl flex items-center gap-3">
                      <Award className="text-purple-400" size={24} />
                      Clinical Protocol
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-purple-900/30 rounded-lg p-4">
                        <h4 className="text-purple-300 font-semibold mb-3">Treatment Specifications</h4>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="text-purple-400 mt-1" size={16} />
                            <span><strong>31 injection sites</strong> across strategic trigger points</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="text-purple-400 mt-1" size={16} />
                            <span><strong>15-minute sessions</strong> with minimal discomfort</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="text-purple-400 mt-1" size={16} />
                            <span><strong>Repeated every 12 weeks</strong> for optimal prevention</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-purple-900/30 rounded-lg p-4">
                        <h4 className="text-purple-300 font-semibold mb-3">Key Benefits</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                            <span>Reduces migraine frequency by up to 50%</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                            <span>Decreases headache intensity and duration</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                            <span>Improves overall quality of life</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                            <span>No systemic side effects</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Types of Headaches */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Different Types of Headaches / Migraine</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Aura Migraine or Complicated Migraine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      During a migraine, sensory and visual problems can occur, known as aura. These problems include:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Difficulty speaking</li>
                      <li>• Seeing black spots and zigzags</li>
                      <li>• Experiencing tingling numbness on one side of the body</li>
                    </ul>
                    <p className="text-purple-300 mt-4 font-medium">
                      Aura typically starts right before or during a migraine and lasts 10 to 30 minutes.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Aura-free Migraine or Common Migraine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Pulsating pain on one side of the head characterizes a headache without an aura. Most patients report symptoms such as:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Sensitivity to light</li>
                      <li>• Sound sensitivity</li>
                      <li>• Pain that becomes worse with strenuous activity</li>
                      <li>• Vomiting or nauseous feeling</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Chronic Migraine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      If you have a headache for more than 15 days in a row over several weeks, it may indicate chronic migraine. Although the intensity of the headache and symptoms may vary, chronic migraines usually follow a pattern.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Cluster Headaches</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Cluster headaches cause excruciating burning and pounding pain on the sides of the head then above the eyes and behind the ears, making them one of the most painful types of headaches.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Botox for Migraine — What to Expect?</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Treatment Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      After a detailed consultation with a headache specialist at Cosmedocs for your migraine headaches, begin your migraine treatment. The doctor uses a very fine needle to inject botulinum toxin into the target muscles under your skin in multiple "trigger points" such as:
                    </p>
                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Face</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Forehead</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Temples</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Neck</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-400" size={16} />
                        <span>Back of the head</span>
                      </li>
                    </ul>
                    <p className="text-purple-300 font-medium">
                      Following the botox treatment you may continue normal daily activities.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Potential Side Effects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      After receiving Botox, it causes minimal to no pain for most people. Medical experts consider it a safe treatment. However, your Botox for migraine treatment may have some slight side effects, such as:
                    </p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Bruising, redness, or swelling around the injection sites</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Dryness in mouth</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Fatigue or tiredness</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Temporary muscle weakness</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Tension or stiffness in the neck</span>
                      </li>
                    </ul>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Migraine Botox Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Personalized treatment plans with competitive pricing for therapeutic migraine botox at our Harley Street clinic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full border-2 border-purple-400">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Migraine Treatment</CardTitle>
                    <div className="text-2xl font-bold text-purple-300">Call for Pricing</div>
                    <div className="text-sm text-purple-400">Personalized Quote</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Up to 31 injection points</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Head & neck areas</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">FDA-approved protocol</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Customized treatment plan</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Follow-up care included</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button 
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full"
                        onClick={() => window.open('tel:0333 0551 503', '_self')}
                      >
                        Call 0333 0551 503
                      </Button>
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
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Expert Consultation</CardTitle>
                    <div className="text-2xl font-bold text-purple-300">£50</div>
                    <div className="text-sm text-purple-400">Initial Assessment</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Detailed medical history</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Headache pattern analysis</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Treatment suitability assessment</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Personalized treatment plan</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">No obligation quote</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button 
                        className="w-full bg-white text-black hover:bg-gray-200 rounded-full"
                        onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                      >
                        Book Consultation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Common questions about migraine botox treatments answered by our expert doctors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 rounded-lg px-6">
                    <AccordionTrigger className="text-white hover:text-purple-300 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Find Migraine Relief?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Book your expert consultation today and discover how therapeutic botox can transform your quality of life.
              </p>
              <Button 
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
              >
                Book Free Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h3>Expert Migraine Botox Treatment in London</h3>
          <p>Cosmedocs offers professional migraine botox treatments for chronic headache relief. Our experienced cosmetic doctors use FDA-approved therapeutic botox protocols to prevent migraines and reduce headache frequency. Located in prestigious Harley Street, our clinic provides comprehensive neurological assessments and personalized migraine prevention plans.</p>
          
          <h4>Why Choose Cosmedocs for Migraine Botox?</h4>
          <p>Our invisible art philosophy ensures effective migraine treatment while maintaining natural facial expressions. We follow strict FDA protocols with precise injection techniques for optimal therapeutic outcomes. Our doctors have extensive experience in neurological conditions and therapeutic botox applications, ensuring safe and effective migraine prevention.</p>
          
          <h4>Understanding Chronic Migraine Treatment</h4>
          <p>Chronic migraines affect daily life with frequent, debilitating headaches. Therapeutic botox treatment targets specific muscle groups in the head and neck that contribute to migraine triggers. Professional treatment follows established medical protocols, providing significant relief for qualifying patients with chronic migraine conditions.</p>
          
          <h4>Treatment Process and Migraine Management</h4>
          <p>Our migraine botox treatment begins with a comprehensive neurological consultation and medical history review. The injection process takes 15-20 minutes using FDA-approved protocols across 31 specific points. Results appear gradually over 2-4 weeks, with optimal effects lasting 3-4 months. We provide ongoing migraine management support and regular follow-up care.</p>
        </div>
      </div>
    </>
  );
};

export default MigraineBotox;