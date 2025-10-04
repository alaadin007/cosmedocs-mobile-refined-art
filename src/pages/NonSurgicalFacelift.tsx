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
import { Link } from "react-router-dom";
import { generateSEOMetadata } from "@/utils/seo";
import { Clock, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Heart, Users, Shield } from "lucide-react";
import faceliftBa1 from "@/assets/facelift-ba-1.jpg";
import faceliftBa2 from "@/assets/facelift-ba-2.jpg";
import faceliftBa3 from "@/assets/facelift-ba-3.jpg";
import faceliftBa4 from "@/assets/facelift-ba-4.jpg";

const NonSurgicalFacelift = () => {
  const seoData = generateSEOMetadata(
    "Non-Surgical Face Lift London | 3-Level Treatment Approach | Cosmedocs",
    "Expert non-surgical face lift London. Tailored treatment for Level 1, 2 & 3 facial sagging. Dermal fillers & PDO threads. Natural results. Book consultation today.",
    "/non-surgical-face-lift"
  );

  const bookingUrl = "https://med.as.me/harleystreet";

  const beforeAfterImages = [
    { 
      src: faceliftBa1, 
      alt: "Mild jowls and loss of jawline definition restored with liquid face lift using dermal fillers and PDO thread", 
      caption: "Mild jowls and loss of jawline definition restored with liquid face lift using dermal fillers and PDO thread to secure and sharpen jawline" 
    },
    { 
      src: faceliftBa2, 
      alt: "Non-surgical face lift over 6 months with fillers, biostimulators and PDO threads", 
      caption: "Face lift non-surgical over 6 months with fillers, biostimulators and PDO threads using special lift-lock techniques" 
    },
    { 
      src: faceliftBa3, 
      alt: "Mild lift and definition of the jawline with non-surgical treatment", 
      caption: "Mild lift and definition of the jawline" 
    },
    { 
      src: faceliftBa4, 
      alt: "Loss of jaw angle leading to jowls, replaced and restored jawangle and jawline definition", 
      caption: "Loss of jaw angle leading to jowls, replaced and restored jaw angle and jawline definition" 
    }
  ];

  const faqs = [
    {
      question: "What is a non-surgical face lift?",
      answer: "A non-surgical face lift uses advanced injectable treatments including dermal fillers and PDO threads to lift, contour, and rejuvenate facial features without surgery. The treatment restores lost volume, lifts sagging tissue, and redefines facial contours naturally."
    },
    {
      question: "Which level of treatment do I need?",
      answer: "Level 1 (ages 30-40) shows mild jowls treated with volume restoration. Level 2 has moderate jowls requiring fillers plus PDO threads. Level 3+ needs surgical options. A consultation determines your optimal approach."
    },
    {
      question: "How long do results last?",
      answer: "Dermal fillers last 12-18 months, whilst PDO threads provide 12-24 months of lifting as they stimulate collagen. Maintenance treatments help sustain results long-term."
    },
    {
      question: "Is there any downtime?",
      answer: "Minimal downtime. You may experience mild swelling or bruising for 3-7 days. Most patients return to work immediately and resume normal activities within 24-48 hours."
    },
    {
      question: "Will it make my face look wider?",
      answer: "No. Strategic volume placement sits behind the jaw muscle, creating a lifting effect without widening. This mimics a surgical facelift demonstration, producing natural contours."
    },
    {
      question: "What are your practitioners' qualifications?",
      answer: "Our expert doctors have trained practitioners internationally in these techniques for over 10 years, specialising in facial anatomy and advanced injection methods for safe, natural results."
    }
  ];

  const treatmentSummary = [
    {
      title: "Level 1: Early Volume Loss",
      subtitle: "Ages 30-40",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Level 2: Moderate Sagging",
      subtitle: "Ages 40-55",
      icon: <Syringe className="w-6 h-6" />,
    },
    {
      title: "Level 3: Advanced Concerns",
      subtitle: "Ages 55+",
      icon: <Shield className="w-6 h-6" />,
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
        <meta property="og:url" content={seoData.canonical} />
        <meta name="keywords" content="non-surgical facelift London, non-surgical face lift, liquid facelift UK, facial rejuvenation, PDO threads London, dermal fillers facelift, jowl treatment, facial volume restoration, anti-aging London, Harley Street facelift" />
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section - Space for hero banner */}
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0"></div>
          
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                  <span className="text-purple-300">Non-Surgical Face Lift</span>
                  <span className="block text-sm mt-4">Our aesthetics is invisible art</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Bold • Natural • Always Your Way</p>
                  <p className="text-sm text-gray-300">Transformation that speaks without saying a word</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => window.open(bookingUrl, "_blank")}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold"
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold"
                    onClick={() => document.getElementById('levels')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Treatment Levels
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="py-8 bg-purple-900/20">
          <div className="page-container">
            <div className="w-full h-48 bg-purple-900/10 rounded-lg border-2 border-purple-500/30 flex items-center justify-center">
              <p className="text-gray-500">Banner Image - To be added</p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-background to-accent">
          <div className="page-container max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                The Art of Non-Surgical Facial Rejuvenation
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-purple-500/20">
                  <Clock className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Minimal Downtime</h3>
                  <p className="text-gray-400 text-sm">Return to normal activities within 24-48 hours</p>
                </div>
                <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-purple-500/20">
                  <Award className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">10+ Years Expertise</h3>
                  <p className="text-gray-400 text-sm">Training doctors internationally in advanced techniques</p>
                </div>
                <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-purple-500/20">
                  <Heart className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Natural Results</h3>
                  <p className="text-gray-400 text-sm">Bold yet invisible—transformation without words</p>
                </div>
              </div>

              <div className="prose prose-lg prose-invert max-w-none space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  At Cosmedocs, we believe aesthetic medicine should be <span className="text-purple-300 font-semibold">minimal, quiet, and invisible</span>. Our non-surgical face lift treatments represent the pinnacle of modern facial rejuvenation—transformation that speaks without saying a word.
                </p>

                <p className="text-lg leading-relaxed">
                  Rather than a one-size-fits-all approach, we've developed a sophisticated <span className="text-purple-300 font-semibold">three-level treatment protocol</span> that addresses facial ageing at every stage, from early signs in your 30s through to more advanced concerns. Our approach doesn't just mask ageing—it restores the architectural foundation of a youthful face.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Levels Summary */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Three Levels of Facial Sagging</h2>
              <p className="text-xl text-gray-300">Personalised treatment approaches for every stage of ageing</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {treatmentSummary.map((level, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-purple-500/30 rounded-lg p-6 hover:border-purple-400/50 transition-all cursor-pointer"
                  onClick={() => document.getElementById(`level-${index + 1}`)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-white">
                      {level.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{level.title}</h3>
                      <p className="text-purple-300 text-sm">{level.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Treatment Levels */}
        <section id="levels" className="py-20 bg-background">
          <div className="page-container">
            {/* Level 1 */}
            <Accordion type="single" collapsible className="mb-6">
              <AccordionItem 
                id="level-1" 
                value="level-1"
                className="bg-card border-2 border-purple-500/30 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-purple-900/10">
                  <div className="flex items-center gap-4 text-left w-full">
                    <span className="bg-purple-600 rounded-full min-w-12 h-12 flex items-center justify-center text-white text-xl font-bold">1</span>
                    <div>
                      <h3 className="text-2xl font-bold text-purple-300">Level One: Early Volume Loss</h3>
                      <p className="text-sm text-gray-400 mt-1">Ages 30-40 • Dermal Fillers</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="space-y-6 pt-4">
                    <div className="bg-purple-900/10 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-purple-400" />
                        Characteristics
                      </h4>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>Subtle loss of jaw angle definition with early jowl formation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>Flattening of outer facial compartment near the ear</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>Mild mid-cheek flattening and visible tear troughs</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-accent/50 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        <Syringe className="w-5 h-5 text-purple-400" />
                        Treatment Approach
                      </h4>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        Strategic volume replacement using premium <Link to="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline font-medium">dermal fillers</Link> in the outer facial compartment behind the masseter muscle creates a natural lifting effect without widening the face.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Conservative mid-cheek and under-eye filler restores youthful contours with subtle, transformative results—our signature "invisible art."
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Level 2 */}
            <Accordion type="single" collapsible className="mb-6">
              <AccordionItem 
                id="level-2" 
                value="level-2"
                className="bg-card border-2 border-purple-500/30 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-purple-900/10">
                  <div className="flex items-center gap-4 text-left w-full">
                    <span className="bg-purple-600 rounded-full min-w-12 h-12 flex items-center justify-center text-white text-xl font-bold">2</span>
                    <div>
                      <h3 className="text-2xl font-bold text-purple-300">Level Two: Moderate Sagging</h3>
                      <p className="text-sm text-gray-400 mt-1">Ages 40-55 • Fillers + PDO Threads</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="space-y-6 pt-4">
                    <div className="bg-purple-900/10 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-purple-400" />
                        Characteristics
                      </h4>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>Moderate, clearly visible jowls with pronounced volume loss</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>Hollowness around chin with apparent marionette lines</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>Facial segmentation with prominent nasolabial folds</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-accent/50 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        <Syringe className="w-5 h-5 text-purple-400" />
                        Treatment Approach
                      </h4>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        Comprehensive strategy combining increased <Link to="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline font-medium">dermal filler</Link> volume with <Link to="/pdo-threads" className="text-purple-300 hover:text-purple-200 underline font-medium">PDO thread</Link> structural support.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Medical-grade threads create a sling-like support system that physically lifts sagging tissue whilst stimulating collagen production. This dual approach achieves dramatic, natural-looking results that previously required surgery.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Level 3 */}
            <Accordion type="single" collapsible>
              <AccordionItem 
                id="level-3" 
                value="level-3"
                className="bg-card border-2 border-purple-500/30 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-purple-900/10">
                  <div className="flex items-center gap-4 text-left w-full">
                    <span className="bg-purple-600 rounded-full min-w-12 h-12 flex items-center justify-center text-white text-xl font-bold">3+</span>
                    <div>
                      <h3 className="text-2xl font-bold text-purple-300">Level Three and Beyond</h3>
                      <p className="text-sm text-gray-400 mt-1">Ages 55+ • Surgical Consultation</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="space-y-6 pt-4">
                    <div className="bg-purple-900/10 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-purple-400" />
                        Honest Assessment
                      </h4>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        Significant facial sagging with heavy jowls, substantial volume loss, and marked tissue descent. At this advanced stage, skin elasticity has often diminished considerably.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        At Cosmedocs, honesty and patient welfare come first. If we determine you present with level three or more advanced facial sagging, we'll have an open discussion about surgical face lift options. Whilst we specialise in non-surgical techniques, we recognise limitations and always recommend the most appropriate treatment for your individual situation.
                      </p>
                    </div>

                    <div className="bg-accent/50 rounded-lg p-6 border-l-4 border-purple-500">
                      <p className="text-gray-300 leading-relaxed">
                        A surgical face lift at this stage provides more comprehensive, longer-lasting results than non-surgical alternatives. We work closely with experienced plastic surgeons and can provide referrals to trusted colleagues who share our philosophy of natural, elegant results.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-background">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Real Patient Transformations</h2>
              <p className="text-xl text-gray-300 mb-8">Authentic results from our 10+ years training doctors internationally</p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {beforeAfterImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2">
                      <Card className="bg-card border-purple-500/30">
                        <CardContent className="p-4">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-auto rounded-lg mb-4"
                            loading="lazy"
                          />
                          <p className="text-sm text-gray-300 text-center">{image.caption}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Why Choose Cosmedocs for Non-Surgical Face Lifts</h2>
              <p className="text-xl text-gray-300">Over a decade of international training and expertise</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-card border-purple-500/30">
                <CardHeader>
                  <GraduationCap className="w-12 h-12 text-purple-400 mb-4" />
                  <CardTitle className="text-xl">International Training Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    We've trained doctors internationally in advanced non-surgical face lift techniques for over 10 years. Our expertise ensures you receive treatment from practitioners at the forefront of aesthetic medicine.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-purple-500/30">
                <CardHeader>
                  <Heart className="w-12 h-12 text-purple-400 mb-4" />
                  <CardTitle className="text-xl">Invisible Art Philosophy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Our aesthetics is invisible art—bold, natural, always your way. We create transformation that speaks without saying a word, never loud or exaggerated.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-purple-500/30">
                <CardHeader>
                  <Shield className="w-12 h-12 text-purple-400 mb-4" />
                  <CardTitle className="text-xl">Honest Assessments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    We provide truthful consultations about which treatment level suits you best, including honest advice about when surgical options may be more appropriate.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="page-container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">Everything you need to know about non-surgical face lifts</p>
            </motion.div>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card/50 backdrop-blur border border-purple-500/20 rounded-xl px-6 hover:border-purple-400/40 transition-colors"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-purple-300 py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed pb-5 pt-1">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Treatment Video Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Watch Our Non-Surgical Face Lift Technique</h2>
              <p className="text-xl text-gray-300">See how we perform the treatment</p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 mb-6">
                <p className="text-yellow-300 font-semibold text-center">⚠️ Caution: Treatment Video Contains Graphic Medical Procedures</p>
              </div>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/mHn0TARBHik?si=5eH2Povt0jlzoH0I" 
                  title="Non-Surgical Face Lift Treatment Video" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Discover Your Treatment Level?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a consultation with our expert practitioners to receive a personalised assessment and treatment plan tailored to your unique facial anatomy.
              </p>
              <Button 
                onClick={() => window.open(bookingUrl, "_blank")}
                className="bg-white text-black hover:bg-gray-200 rounded-full px-12 py-6 text-lg font-semibold"
              >
                Book Your Consultation Today
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="hidden">
          <p>
            Non-surgical facelift London treatments at Cosmedocs Harley Street represent the pinnacle of modern aesthetic medicine, offering comprehensive facial rejuvenation without the need for invasive surgical procedures. Our three-level treatment protocol addresses every stage of facial ageing, from early volume loss in patients aged 30-40 through to moderate sagging requiring combined dermal filler and PDO thread interventions. The science behind our non-surgical face lift approach centres on understanding facial anatomy at an intricate level, recognising that facial ageing occurs through predictable patterns of volume loss in specific fat compartments, descent of facial tissues due to gravitational forces and ligamentous laxity, and degradation of collagen and elastin within the skin matrix itself. At Cosmedocs, we've refined these techniques through over a decade of training medical practitioners internationally, developing protocols that deliver natural, elegant results aligned with our philosophy that aesthetic medicine should be invisible art—transformation that speaks without saying a word. Our Level 1 non-surgical facelift protocol specifically targets early facial ageing presenting between ages 30-40, characterised by subtle loss of jaw angle definition, early jowl formation, mild mid-cheek flattening, and increasingly apparent tear troughs. Treatment involves strategic volume replacement using premium hyaluronic acid dermal fillers placed in the outer facial compartment anterior to the ear, behind the masseter muscle. This precise anatomical placement creates vertical lift without horizontal facial widening, restoring youthful contours through what we term "invisible enhancement." The mid-cheek receives conservative volumisation to restore gentle convexity, whilst minimal filler in the tear trough region refreshes the under-eye area without creating an overfilled appearance. Level 2 treatments address moderate facial sagging typically presenting in the 40-55 age range, requiring more comprehensive intervention combining increased dermal filler volumes with PDO thread lifting technology. At this stage, patients exhibit visible jowls, pronounced marionette lines, hollowing along the chin sides, and segmentation of facial contours with prominent nasolabial folds. Our protocol utilises greater volumes of hyaluronic acid filler strategically placed throughout facial compartments, supplemented by PDO threads that provide structural support, physically repositioning descended tissues whilst stimulating neocollagenesis for long-term improvement. The threads create a supportive mesh that lifts and secures facial tissues, defining the jawline whilst softening jowls, nasolabial folds, and marionette lines through comprehensive mid-face elevation. This combined approach represents the optimal non-surgical solution for moderate facial ageing, achieving results previously possible only through surgical facelift procedures. Level 3 and advanced facial sagging, conversely, typically exceeds the capacity of non-surgical interventions to deliver optimal results. Characterised by heavy jowls, substantial volume loss, and marked tissue descent—particularly in patients who possessed fuller faces in youth—this degree of ageing generally warrants surgical consultation. At Cosmedocs, we prioritise honest patient assessment over treatment sales, providing truthful guidance about when surgical facelift procedures will better serve aesthetic goals than non-surgical alternatives. Our commitment to patient welfare means recommending appropriate interventions regardless of personal financial benefit, maintaining the integrity and trust that defines our Harley Street practice. The dermal fillers utilised in our non-surgical facelift protocols consist of cross-linked hyaluronic acid, a naturally occurring glycosaminoglycan present throughout human connective tissue, particularly concentrated in skin, joints, and eyes. Hyaluronic acid's exceptional hygroscopic properties—capable of binding up to 1000 times its molecular weight in water—make it ideal for restoring facial volume whilst maintaining natural tissue hydration and suppleness. Our selected premium filler products integrate seamlessly with native facial tissues, providing immediate volumisation whilst stimulating fibroblast activity for sustained collagen production. The biocompatibility and biodegradability of hyaluronic acid ensures safe, gradual resorption through enzymatic breakdown, typically over 12-18 months, allowing for natural-looking, temporary results that can be adjusted or refined in subsequent treatments. PDO threads employed in Level 2 protocols consist of polydioxanone, a synthetic absorbable suture material with extensive medical history in cardiovascular and general surgery. These threads physically lift and reposition sagging facial tissues through mechanical anchoring, whilst simultaneously triggering foreign body response mechanisms that stimulate fibroblast proliferation, neocollagenesis, and elastin synthesis. The threads themselves absorb completely over 6-8 months through hydrolysis, yet the biological effects—including improved skin thickness, enhanced collagen density, and tissue tightening—persist for 18-24 months post-treatment. This dual mechanism of immediate physical lift combined with sustained biological regeneration makes PDO threads invaluable for addressing moderate facial sagging where volume restoration alone proves insufficient. Patient selection remains paramount for achieving optimal non-surgical facelift outcomes, requiring comprehensive facial assessment including degree of volume loss, tissue descent severity, skin quality and elasticity evaluation, underlying bone structure analysis, and realistic expectation alignment with achievable results. Cosmedocs consultation process involves detailed discussion of your aesthetic concerns, comprehensive facial examination assessing ageing patterns, determination of appropriate treatment level, explanation of recommended modalities and expected outcomes, and transparent discussion of costs, recovery expectations, and maintenance requirements. This thorough consultation ensures every patient receives personalised treatment precisely matched to their individual anatomy, ageing patterns, and aesthetic goals, embodying our commitment to bespoke aesthetic medicine rather than template-based approaches.
          </p>
        </div>
      </div>
    </>
  );
};

export default NonSurgicalFacelift;