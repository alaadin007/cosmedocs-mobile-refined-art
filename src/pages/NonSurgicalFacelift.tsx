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
        <section className="py-16 bg-background">
          <div className="page-container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 text-center">The Art of Non-Surgical Facial Rejuvenation</h2>
              
              <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  At Cosmedocs, we believe aesthetic medicine should be minimal, quiet, and invisible. Our non-surgical face lift treatments represent the pinnacle of modern facial rejuvenation—transformation that speaks without saying a word. Rather than a one-size-fits-all approach, we've developed a sophisticated three-level treatment protocol that addresses facial ageing at every stage, from early signs in your 30s through to more advanced concerns.
                </p>

                <p className="text-lg leading-relaxed">
                  The secret to natural-looking facial rejuvenation lies in understanding facial anatomy at a profound level. Over our 10+ years training doctors internationally in advanced injectable techniques, we've perfected the art of strategic volume replacement and tissue repositioning. Our approach doesn't just mask ageing—it restores the architectural foundation of a youthful face.
                </p>

                <p className="text-lg leading-relaxed">
                  What sets our non-surgical face lift apart is precision. We don't simply fill lines or add volume indiscriminately. Instead, we analyse your unique facial structure, identify specific compartments that have lost volume, and develop a bespoke treatment plan tailored to your level of facial sagging. This intelligent, anatomically-informed approach delivers results that are bold yet natural, visible yet invisible—the essence of our philosophy at Cosmedocs.
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
            <Card id="level-1" className="bg-card border-purple-500/30 mb-8">
              <CardHeader>
                <CardTitle className="text-3xl text-purple-300 flex items-center gap-3">
                  <span className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl">1</span>
                  Level One: Early Volume Loss (Ages 30-40)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-2xl font-semibold text-white mb-4">Characteristics of Level 1 Facial Sagging</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Level one sagging typically emerges between the ages of 30 to 40, marking the beginning of visible facial volume loss. At this stage, you'll notice a subtle loss of definition along the jaw angle, with early jowls beginning to form. This presentation is often more pronounced in females than males due to differences in facial fat distribution and hormonal factors affecting collagen production.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    The hallmark sign of level one ageing is the flattening of the outer facial compartment near the ear. This specific area, often overlooked in traditional treatments, is crucial for maintaining youthful facial contours. As volume depletes here, the face loses its natural lift, causing tissues to descend and creating the appearance of early jowls. Simultaneously, the mid-cheek area becomes slightly flatter, and the tear trough under the eye becomes more apparent.
                  </p>

                  <h3 className="text-2xl font-semibold text-white mb-4 mt-6">Level 1 Treatment Approach</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our treatment for level one facial sagging focuses on strategic volume replacement using premium <Link to="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal fillers</Link>. The cornerstone of this approach involves carefully placing filler in the outer compartment of the face, right in front of the ear, behind the masseter (jaw) muscle. This precise placement is critical—it creates a lifting effect similar to when you place your hands in front of your ears to demonstrate a facelift.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    Contrary to what many patients fear, this volume placement does not make your face look wider. Because the filler sits behind the jaw muscle in a specific anatomical plane, it creates vertical lift rather than horizontal expansion. The result is a naturally defined jawline with improved contours, as if the tissues have been gently lifted upward.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    Additionally, we address the mild flattening in the mid-cheek area with conservative filler placement. The goal isn't to create prominent, over-projected cheeks, but rather to restore the gentle convexity that characterises youthful facial contours. A small amount of carefully placed filler in the under-eye area softens the tear trough, creating a refreshed appearance without looking overdone.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    The projection achieved in these areas is subtle but transformative—your face regains its natural forward projection rather than the flat, descended appearance that characterises early ageing. At Cosmedocs, we call this "invisible art"—changes that your friends notice without being able to identify what's different.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Level 2 */}
            <Card id="level-2" className="bg-card border-purple-500/30 mb-8">
              <CardHeader>
                <CardTitle className="text-3xl text-purple-300 flex items-center gap-3">
                  <span className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl">2</span>
                  Level Two: Moderate Sagging (Ages 40-55)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-2xl font-semibold text-white mb-4">Characteristics of Level 2 Facial Sagging</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Level two facial sagging represents a more advanced stage of ageing, typically presenting in the 40s to mid-50s. At this stage, volume loss becomes more pronounced around the angle of the mandible (jaw), with moderate, clearly visible jowls. The sides of the chin begin to develop hollowness, and marionette lines—those vertical lines running from the corners of the mouth downward—become apparent.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    The face at level two starts to segment into distinct compartments, with the nasolabial folds (lines from nose to mouth corners) becoming more prominent. This segmentation occurs because multiple facial fat pads have descended and deflated, creating visible boundaries between different areas of the face. The overall effect is a heavier, more aged appearance with loss of the smooth, continuous contours of youth.
                  </p>

                  <h3 className="text-2xl font-semibold text-white mb-4 mt-6">Level 2 Treatment Approach</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Level two facial sagging requires a more comprehensive treatment strategy combining increased <Link to="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal filler</Link> volume with the structural support of <Link to="/pdo-threads" className="text-purple-300 hover:text-purple-200 underline">PDO threads</Link>. Filler alone, whilst effective for level one, cannot provide sufficient lifting and support for moderate jowls and tissue descent.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    We begin by volumising more extensively than in level one treatment, placing greater amounts of filler in the outer facial compartment and mid-cheek area. This increased volume helps counteract the more significant fat loss and provides a foundation for the lifting effect. Strategic placement along the jawline and in the pre-jowl sulcus (the depression in front of the jowl) helps smooth the jaw contour.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    The game-changer at level two is the insertion of PDO threads. These medical-grade threads, made from polydioxanone, are carefully placed beneath the skin to physically lift and secure sagging tissue. The threads have tiny cones or barbs that anchor into the tissue, allowing us to reposition descended fat pads and skin back to a more youthful position. Over time, the threads stimulate collagen production, further improving skin quality and firmness.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    For the jawline specifically, we use PDO threads to create a sling-like support system that defines the jaw angle and lifts jowls. Combined with the volumising effect of fillers, this dual approach achieves remarkable rejuvenation without surgery. The nasolabial folds soften as mid-face tissues are lifted, and marionette lines improve as the lower face regains support.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    Level two treatments represent the sweet spot where non-surgical techniques can achieve dramatic, natural-looking results that previously required surgical intervention. Our decade of experience training international practitioners in these advanced techniques ensures optimal, safe outcomes tailored to your unique facial anatomy.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Level 3 */}
            <Card id="level-3" className="bg-card border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-3xl text-purple-300 flex items-center gap-3">
                  <span className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl">3</span>
                  Level Three and Beyond: Advanced Sagging
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed">
                    Level three and above represents significant facial sagging characterised by heavy jowls, substantial volume loss, and marked tissue descent. This level of ageing is most commonly seen in patients who had fuller faces in their youth—when facial fat pads are larger to begin with, their descent creates a heavier, more pronounced fall that proves challenging to address with non-surgical methods alone.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    At this advanced stage, the skin itself has often lost considerable elasticity, and the degree of tissue descent exceeds what fillers and threads can adequately correct. Attempting non-surgical treatments at level three may yield disappointing results or require excessive product, leading to an unnatural appearance.
                  </p>

                  <h3 className="text-2xl font-semibold text-white mb-4 mt-6">Honest Assessment and Surgical Referral</h3>
                  <p className="text-gray-300 leading-relaxed">
                    At Cosmedocs, honesty and patient welfare come before everything. If during your consultation we determine that you present with level three or more advanced facial sagging, we will have an open discussion about surgical face lift options. Whilst we specialise in non-surgical techniques and are passionate about what can be achieved without surgery, we recognise the limitations and will always recommend the most appropriate treatment for your individual situation.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    A surgical face lift at this stage will provide more comprehensive, longer-lasting results than non-surgical alternatives. We work closely with experienced plastic surgeons and can provide referrals to trusted colleagues who share our philosophy of natural, elegant results. Your journey to facial rejuvenation should always be guided by what will truly serve your aesthetic goals, not by pushing treatments beyond their appropriate scope.
                  </p>
                </div>
              </CardContent>
            </Card>
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

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-purple-500/30 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-purple-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
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