import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import FAQSchema from '@/components/seo/FAQSchema';
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
import { Clock, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Heart, Users, Shield, Zap } from "lucide-react";
import ClientReviews from '@/components/ClientReviews';
import faceliftBa1 from "@/assets/facelift-ba-1.jpg";
import faceliftBa2 from "@/assets/facelift-ba-2.jpg";
import faceliftBa3 from "@/assets/facelift-ba-3.jpg";
import faceliftBa4 from "@/assets/facelift-ba-4.jpg";

const NonSurgicalFacelift = () => {
  const seoData = generateSEOMetadata(
    "Non-Surgical Facelift London | Cosmedocs",
    "Expert non-surgical face lift London. Tailored treatment for Level 1, 2 & 3 facial sagging. Dermal fillers & PDO threads. Natural results. Book consultation today.",
    "/non-surgical-facelift"
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
                  <span className="text-purple-300">Non-Surgical Face Lift</span>
                  <span className="block text-sm mt-4">Invisible art - transformation that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Facial Rejuvenation</p>
                  <p className="text-sm text-gray-300">10+ years training doctors internationally in advanced non-surgical facelift techniques</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => window.open(bookingUrl, "_blank")}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                    onClick={() => document.getElementById('treatment-levels')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Treatment Levels
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
              <h2 className="text-3xl font-bold mb-8 text-white">Non-Surgical Facelift Treatment</h2>
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
                <p className="text-gray-300">45-90 minutes depending on level</p>
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
                <p className="text-gray-300">2 to 3 years with mild maintenance sometimes required</p>
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
                <p className="text-gray-300">Minimal downtime, 3-7 days mild swelling</p>
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
                <p className="text-gray-300">Topical anaesthetic + lidocaine</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Real Patient Transformations</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Authentic results from our expert non-surgical facelift treatments using dermal fillers and PDO threads
              </p>
            </motion.div>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {beforeAfterImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-2"
                    >
                      <div className="bg-gray-900 rounded-lg overflow-hidden">
                        <div className="aspect-square relative">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-full object-contain bg-black"
                          />
                        </div>
                        <div className="p-4 bg-gray-900">
                          <p className="text-white text-sm font-medium">{image.caption}</p>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-white border-white hover:bg-white hover:text-black" />
              <CarouselNext className="text-white border-white hover:bg-white hover:text-black" />
            </Carousel>
          </div>
        </section>

        {/* What is Non-Surgical Facelift */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white text-center">The Art of Non-Surgical Facial Rejuvenation</h2>
                
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

                <div className="space-y-6 text-left">
                  <p className="text-gray-300 leading-relaxed">
                    At Cosmedocs, we believe aesthetic medicine should be <span className="text-purple-300 font-semibold">minimal, quiet, and invisible</span>. Our non-surgical face lift treatments represent the pinnacle of modern facial rejuvenation—transformation that speaks without saying a word.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Rather than a one-size-fits-all approach, we've developed a sophisticated <span className="text-purple-300 font-semibold">three-level treatment protocol</span> that addresses facial ageing at every stage, from early signs in your 30s through to more advanced concerns. Our approach doesn't just mask ageing—it restores the architectural foundation of a youthful face.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Using advanced injectable treatments including <Link to="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal fillers</Link> and <Link to="/pdo-threads" className="text-purple-300 hover:text-purple-200 underline">PDO threads</Link>, we lift, contour, and rejuvenate facial features without surgery. The treatment restores lost volume, lifts sagging tissue, and redefines facial contours naturally.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Three Levels of Treatment */}
        <section id="treatment-levels" className="py-20 bg-gray-900/30">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Three Levels of Facial Sagging</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Personalised treatment approaches for every stage of ageing - from early volume loss to advanced concerns
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-6">
              {/* Level 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-gray-700 hover:border-purple-400 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                        1
                      </div>
                      <div>
                        <CardTitle className="text-white text-2xl">Level One: Early Volume Loss</CardTitle>
                        <p className="text-purple-300 text-sm mt-1">Ages 30-40 • Dermal Fillers</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-purple-900/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
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
                          <span>Mild mid-cheek flattening and visible <Link to="/tear-trough-filler" className="text-purple-300 hover:text-purple-200 underline">tear troughs</Link></span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-accent/50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Syringe className="w-5 h-5 text-purple-400" />
                        Treatment Approach
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        Strategic volume replacement using premium <Link to="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal fillers</Link> in the outer facial compartment behind the masseter muscle creates a natural lifting effect without widening the face. Conservative mid-cheek and under-eye filler restores youthful contours with subtle, transformative results—our signature "invisible art."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Level 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-gray-700 hover:border-purple-400 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                        2
                      </div>
                      <div>
                        <CardTitle className="text-white text-2xl">Level Two: Moderate Sagging</CardTitle>
                        <p className="text-purple-300 text-sm mt-1">Ages 40-55 • Fillers + PDO Threads</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-purple-900/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
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
                          <span>Hollowness around chin with apparent <Link to="/marionette-lines" className="text-purple-300 hover:text-purple-200 underline">marionette lines</Link></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>Facial segmentation with prominent <Link to="/nasolabial-folds" className="text-purple-300 hover:text-purple-200 underline">nasolabial folds</Link></span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-accent/50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Syringe className="w-5 h-5 text-purple-400" />
                        Treatment Approach
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        Comprehensive strategy combining increased <Link to="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal filler</Link> volume with <Link to="/pdo-threads" className="text-purple-300 hover:text-purple-200 underline">PDO thread</Link> structural support. Medical-grade threads create a sling-like support system that physically lifts sagging tissue whilst stimulating collagen production. This dual approach achieves dramatic, natural-looking results that previously required surgery.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Level 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-gray-700 hover:border-purple-400 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                        3+
                      </div>
                      <div>
                        <CardTitle className="text-white text-2xl">Level Three and Beyond</CardTitle>
                        <p className="text-purple-300 text-sm mt-1">Ages 55+ • Surgical Consultation</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-purple-900/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
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
                  </CardContent>
                </Card>
              </motion.div>
            </div>
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
                  <Award className="text-purple-600" size={24} />
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
                  <GraduationCap className="text-purple-600" size={24} />
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
                  <Heart className="text-purple-600" size={24} />
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
                  <Shield className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Aftercare</h3>
                <p className="text-gray-300">Comprehensive aftercare and follow-up</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Video Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Watch Our Non-Surgical Face Lift Technique</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                See how we perform advanced non-surgical facelift treatments using dermal fillers and PDO threads
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
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

        {/* FAQ Section */}
        <section className="py-20 bg-accent">
          <div className="page-container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-300">Everything you need to know about non-surgical face lifts</p>
            </motion.div>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-black/50 border border-gray-700 rounded-xl px-6 hover:border-purple-400 transition-colors"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-white hover:text-purple-300 py-5 hover:no-underline">
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

        {/* Client Reviews */}
        <section className="py-20 bg-black">
          <ClientReviews />
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Treatment Level?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert practitioners and receive a personalised assessment 
                and treatment plan tailored to your unique facial anatomy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open(bookingUrl, "_blank")}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                >
                  Book Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6"
                  onClick={() => window.open('tel:03330551503')}
                >
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Non-Surgical Facelift London — Liquid Facelift at Harley Street</h2>
          <p>
            Non-surgical facelift London treatments at Cosmedocs offer advanced facial rejuvenation without surgery. Our expert practitioners specialise in liquid facelift techniques using premium dermal fillers and PDO threads to lift, contour, and restore youthful facial features. With over 15 years of experience training doctors internationally, we provide personalised treatment plans for Level 1, 2, and 3 facial sagging.
          </p>
          <h3>Understanding Facial Ageing Levels</h3>
          <p>
            Our non-surgical face lift approach uses a clinical grading system to assess facial ageing and recommend the most appropriate treatment. Level one involves early signs of volume loss and mild jowling — fully treatable with strategic filler placement. Level two presents moderate sagging with noticeable jowls and deeper folds — a combination of fillers and PDO threads delivers optimal results. Level three involves significant tissue descent where surgical referral may be more appropriate.
          </p>
          <h3>Treatment Options for Non-Surgical Facial Rejuvenation</h3>
          <p>
            Our liquid facelift combines multiple treatments including cheek volume restoration with dermal fillers, jawline contouring and definition, nasolabial fold and marionette line correction, temple hollowing treatment, tear trough rejuvenation, and PDO thread lifting for skin tightening. Each treatment plan is customised to address your specific concerns and facial anatomy, ensuring natural-looking results that maintain your authentic appearance.
          </p>
          <h3>Non-Surgical Facelift Cost and Consultation</h3>
          <p>
            Non-surgical facelift costs at Cosmedocs vary depending on the combination of treatments required. During your consultation, our doctors will assess your facial anatomy, discuss your goals, and provide transparent pricing for your personalised treatment plan. Our invisible art philosophy means we prioritise natural, refined results — transformation that speaks without saying a word. Bold, natural, always your way. Book your consultation at our Harley Street clinic today.
          </p>
        </div>
      </div>
    </>
  );
};

export default NonSurgicalFacelift;
