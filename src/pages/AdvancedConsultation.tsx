
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
import { generateSEOMetadata } from "@/utils/seo";
import { Clock, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Palette, Heart, Eye, Zap, Star } from "lucide-react";

const AdvancedConsultation = () => {
  const seoData = generateSEOMetadata(
    "Advanced Aesthetic Consultation with Dr. Ahmed Haq | Cosmedocs",
    "Experience millimeter-precision aesthetic refinements with Dr. Ahmed Haq. Expert consultations for subtle facial optimization, addressing temporal hollowing, lip corner enhancement, and volumizing techniques. 15+ years training physicians in advanced aesthetic medicine.",
    "/advanced-consultation"
  );

  const refinementTechniques = [
    {
      title: "Lip Corner Lifting",
      description: "Precise millimeter adjustments to lift downturned mouth corners, creating a more youthful and approachable expression"
    },
    {
      title: "Temporal Hollowing Correction",
      description: "Addressing temporal depression that occurs with age, restoring natural facial volume and contour"
    },
    {
      title: "Chin Volumization",
      description: "Strategic placement to enhance chin projection and balance facial proportions"
    },
    {
      title: "Jawline Definition",
      description: "Subtle contouring to create defined jawlines without obvious enhancement"
    },
    {
      title: "Perioral Enhancement",
      description: "Addressing lip lines and mouth area aging with precision techniques"
    },
    {
      title: "Midface Restoration",
      description: "Reversing midface volume loss that causes sagging and jowl formation"
    }
  ];

  const faqs = [
    {
      question: "What makes Dr. Ahmed Haq's consultation approach different?",
      answer: "Dr. Ahmed Haq brings 15+ years of experience training physicians in advanced aesthetic medicine. His millimeter-precision approach focuses on subtle refinements that restore youthfulness without anyone noticing the enhancement."
    },
    {
      question: "What is the optimal age range for advanced aesthetic consultation?",
      answer: "The golden age for optimization is 30-60 years. Within this range, Dr. Haq can achieve optimal results. After 60, treatment becomes more challenging and depends on facial structure and lifestyle factors such as sun exposure."
    },
    {
      question: "How does the consultation process work?",
      answer: "Dr. Haq conducts a comprehensive facial analysis, discussing your concerns and goals. He explains the science behind facial aging and creates a personalized treatment plan using millimeter-precision techniques."
    },
    {
      question: "What areas can be addressed in the consultation?",
      answer: "The consultation covers lip corner lifting, temporal hollowing correction, chin volumization, jawline definition, perioral enhancement, and midface restoration - all using subtle, natural enhancement techniques."
    },
    {
      question: "Why is the 'apple analogy' important in facial aging?",
      answer: "The skin (1-2mm thick) is like an apple's skin, while the core represents underlying fat, muscle, and bone. Aging causes volume loss in the 'core', which is why surface treatments alone cannot address the root cause of facial aging."
    },
    {
      question: "What is meant by 'invisible art' in aesthetic medicine?",
      answer: "Invisible art means creating enhancement so natural that others notice you look refreshed but can't identify what's changed. It's transformation that speaks without saying a word - our aesthetic philosophy."
    },
    {
      question: "How does millimeter precision differ from standard treatments?",
      answer: "Millimeter adjustments require years of training and deep understanding of facial anatomy. What an experienced physician achieves with precision is vastly different from standard approaches - focusing on optimal results with minimal product."
    },
    {
      question: "Can mild to moderate jowls be addressed?",
      answer: "Yes, by stopping the sinking process through strategic volume restoration, sagging reverses naturally. We can effectively reverse mild to moderate jowls (grade one) using the principle that 'the face sinks, then sags'."
    },
    {
      question: "What is the investment for advanced consultation treatments?",
      answer: "Our rejuvenation plans focus on precision rather than quantity. Good aesthetics is not cheap, and cheap aesthetics is not good. Investment varies based on your personalized treatment plan during consultation."
    },
    {
      question: "How long do results from advanced aesthetic treatments last?",
      answer: "Results vary by treatment area and technique used. Dr. Haq's precision approach often provides longer-lasting results due to strategic placement and optimal product selection for each individual case."
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
        <meta name="keywords" content="advanced aesthetic consultation London, Dr Ahmed Haq, millimeter precision aesthetic medicine, facial optimization, temporal hollowing, lip corner enhancement, chin volumization, expert aesthetic physician, advanced consultation booking, Harley Street" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs",
            "description": "Advanced aesthetic consultation with Dr. Ahmed Haq - millimeter-precision facial optimization",
            "url": seoData.canonical,
            "telephone": "0333 0551 503",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "medicalSpecialty": "Aesthetic Medicine",
            "priceRange": "£££"
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
                  <span className="text-purple-300">Advanced Aesthetic Consultation</span>
                  <span className="block text-sm mt-4">Millimeter-precision aesthetic refinements with Dr. Ahmed Haq</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Superior Edge of Aesthetic Medicine</p>
                  <p className="text-sm text-gray-300">Subtle refinements that restore youthfulness without anyone noticing</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                    onClick={() => document.getElementById('techniques-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Techniques
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
              <h2 className="text-3xl font-bold mb-8 text-white">Advanced Consultation Overview</h2>
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
                <h3 className="text-lg font-semibold text-white mb-2">Consultation Duration</h3>
                <p className="text-gray-300">60-90 minutes comprehensive assessment</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Experience</h3>
                <p className="text-gray-300">15+ years training physicians</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Precision</h3>
                <p className="text-gray-300">Millimeter-level adjustments</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Philosophy</h3>
                <p className="text-gray-300">Invisible art enhancement</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Science of Subtle Enhancement */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">The Science of Subtle Enhancement</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Understanding why millimeter changes matter and the expertise required for truly natural results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Why Millimeter Changes Matter</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      The influx of mass industry growth in aesthetic medicine means more practitioners than ever. 
                      While this increases accessibility, the expertise required for truly natural results cannot be rushed.
                    </p>
                    <p className="text-gray-300">
                      What an experienced physician can achieve with one syringe is vastly different from someone 
                      with five years experience. Millimeter adjustments require years of training and understanding 
                      of facial anatomy.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">The Apple Analogy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Consider an apple: the skin represents your facial skin (1-2mm thick), while the core 
                      represents your underlying fat, muscle, and bone structure. When aging occurs, you lose 
                      volume in the "core" - not just skin thickness.
                    </p>
                    <p className="text-gray-300">
                      This is why radio frequency and ultrasound devices, which only tighten skin, cannot address 
                      the root cause of facial aging. True rejuvenation requires restoring lost volume.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Millimeter-Precision Refinements */}
        <section id="techniques-section" className="py-20 bg-accent text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Millimeter-Precision Refinements</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Advanced techniques that address specific areas of facial aging with surgical precision and artistic vision.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {refinementTechniques.map((technique, index) => (
                <motion.div
                  key={technique.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black border-purple-400 h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3 text-white">{technique.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{technique.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Optimal Treatment Window */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Optimal Treatment Window</h2>
              <Card className="bg-accent border-purple-400">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-6">
                    <Clock className="h-12 w-12 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">30-60 Years: The Golden Age for Optimization</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    If you come to me within the 30-60 age range, I will be able to help you achieve optimal results. 
                    After 60, treatment becomes more challenging and depends on your facial structure and lifestyle factors 
                    such as sun exposure over your lifetime.
                  </p>
                  <div className="bg-purple-400/10 p-4 rounded-lg">
                    <p className="text-sm text-gray-300">
                      <strong className="text-purple-300">The Face Sinks, Then Sags:</strong> By stopping the sinking process through strategic volume restoration, 
                      sagging reverses naturally. We can reverse mild to moderate jowls (grade one) effectively.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Investment in Excellence */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-white">Investment in Excellence</h2>
              <Card className="bg-black border-purple-400">
                <CardContent className="p-8">
                  <Star className="h-12 w-12 text-purple-400 mx-auto mb-6" />
                  <blockquote className="text-xl font-medium mb-6 text-white">
                    "Good aesthetics is not cheap, and cheap aesthetics is not good."
                  </blockquote>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    While industry pricing is typically per milliliter (based on manufacturing), our rejuvenation 
                    plans focus on the small bits required for optimal results. Trying to save money in aesthetic 
                    medicine often costs more in the long run.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <CheckCircle className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                      <p className="font-semibold text-white">Precision Planning</p>
                      <p className="text-sm text-gray-300">Tailored to your needs</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                      <p className="font-semibold text-white">Expert Technique</p>
                      <p className="text-sm text-gray-300">15+ years experience</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                      <p className="font-semibold text-white">Natural Results</p>
                      <p className="text-sm text-gray-300">Invisible enhancement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Dr. Ahmed Haq */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Dr. Ahmed Haq?</h2>
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
                <h3 className="text-lg font-semibold text-white mb-2">Expert Training</h3>
                <p className="text-gray-300">15+ years training physicians in advanced aesthetic medicine</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Precision</h3>
                <p className="text-gray-300">Millimeter-level adjustments for natural-looking results</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Science-Based</h3>
                <p className="text-gray-300">Evidence-based approach to facial anatomy and aging</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Invisible Art</h3>
                <p className="text-gray-300">Natural enhancement that speaks without saying a word</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Personalised Care</h3>
                <p className="text-gray-300">Comprehensive consultation tailored to your facial structure</p>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Learn more about Dr. Ahmed Haq's advanced aesthetic consultation approach and treatment philosophy.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-black rounded-lg border-gray-800">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-900 rounded-lg">
                      <span className="text-white font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
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
              <h2 className="text-3xl font-bold mb-4">Ready for Advanced Aesthetic Consultation?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience Dr. Ahmed Haq's millimeter-precision approach to aesthetic medicine. 
                Discover how subtle refinements can restore youthfulness naturally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                >
                  Book Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6"
                >
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Advanced Aesthetic Medicine Consultation London Birmingham Manchester Cardiff</h2>
          <p>
            Dr Ahmed Haq aesthetic medicine consultation advanced techniques millimeter precision facial optimization 
            temporal hollowing lip corner enhancement chin volumization expert aesthetic physician 15 years experience 
            training doctors aesthetic medicine london birmingham manchester cardiff cosmedocs natural results 
            invisible enhancement facial rejuvenation volume restoration jowl reversal midface lifting perioral 
            enhancement jawline definition aesthetic consultation booking expert aesthetic physician advanced training 
            natural facial enhancement subtle aesthetic improvements millimeter adjustments facial volume restoration 
            age reversal techniques 30-60 optimal treatment window facial anatomy expertise aesthetic medicine science 
            volume loss correction sagging reversal expert consultation aesthetic medicine training physician education 
            advanced aesthetic techniques natural facial rejuvenation invisible art aesthetic philosophy millimeter 
            precision medicine facial optimization expert consultation aesthetic medicine london aesthetic physician 
            training advanced techniques facial enhancement natural results cosmedocs aesthetic clinic dr ahmed haq 
            consultation booking aesthetic medicine expertise facial rejuvenation techniques advanced consultation 
            millimeter precision aesthetic enhancement natural facial optimization volume restoration techniques 
            expert aesthetic physician consultation facial anatomy expertise aesthetic medicine london birmingham 
            manchester cardiff advanced aesthetic consultation booking natural facial enhancement techniques.
          </p>
        </div>
      </div>
    </>
  );
};

export default AdvancedConsultation;
