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
import { Check, Clock, Calendar, Activity, Syringe, CheckCircle, Award, GraduationCap, Palette, Heart } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";

const NasalFlaringBotox = () => {
  const seoData = generateSEOMetadata(
    "Nasal Flaring Botox London | Nostril Reduction",
    "Reduce nostril widening & alar base flaring with botox. Refine dilator naris muscle for controlled nose movement.",
    "/nasal-flaring-botox"
  );

  const beforeAfterImages = [
    { src: "/lovable-uploads/2d50a34b-eb5c-40fd-849d-79e90a7cf03c.png", alt: "Nasal flaring botox before and after treatment", caption: "Nasal Flaring Botox Treatment: Refined nostril contour with controlled flaring response. Expert dilator naris muscle relaxation - transformation that speaks without saying a word." }
  ];

  const faqs = [
    {
      question: "What is nasal flaring and how does botox help?",
      answer: "Nasal flaring occurs when the nostrils widen excessively during breathing, speaking, or emotional expressions. Botox relaxes the dilator naris muscle, reducing excessive nostril widening while maintaining natural breathing function."
    },
    {
      question: "How long do nasal flaring botox results last?",
      answer: "Nasal flaring botox results typically last 3-4 months. The dilator naris muscle gradually regains movement, requiring maintenance treatments to sustain refined nostril appearance and controlled flaring response."
    },
    {
      question: "Is nasal flaring botox painful?",
      answer: "Nasal flaring botox involves minimal discomfort. Most clients describe it as brief pinching sensations at the nostril base. The treatment takes 5-10 minutes with our doctors using precise injection techniques for comfort."
    },
    {
      question: "What can I expect after nasal flaring botox treatment?",
      answer: "You may experience mild swelling or slight redness at injection sites for a few hours. Results begin appearing within 3-7 days, with full effects visible after 2 weeks. Normal breathing and activities can be resumed immediately."
    },
    {
      question: "Am I a good candidate for nasal flaring botox?",
      answer: "Ideal candidates have excessive nostril widening during expressions or breathing, are in good health, and want natural-looking results. A consultation will assess your nasal anatomy and determine treatment suitability."
    },
    {
      question: "How much does nasal flaring botox cost?",
      answer: "Nasal flaring botox at Cosmedocs costs £100 when added to other botox treatments, or £175 as a standalone procedure. We provide transparent pricing during consultation with package discounts available."
    },
    {
      question: "Can nasal flaring botox be combined with other treatments?",
      answer: "Yes! Nasal flaring botox works excellently with bunny lines botox and other facial treatments for comprehensive nasal refinement. Our doctors create personalized combination treatment plans for optimal facial harmony."
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
        <meta name="keywords" content="nasal flaring botox London, nostril reduction treatment, dilator naris muscle botox, alar base reduction, cosmetic botox, Harley Street clinic" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs",
            "description": "Expert nasal flaring botox treatments in London",
            "url": seoData.canonical,
            "telephone": "+44 20 3733 3227",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "addressRegion": "Greater London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5074,
              "longitude": -0.1278
            },
            "priceRange": "££",
            "availableService": {
              "@type": "Service",
              "name": "Nasal Flaring Botox Treatment"
            }
          })}
        </script>
      </Helmet>
      <FAQSchema faqs={faqs} />

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
                  <span className="text-purple-300">Nasal Flaring Botox London</span>
                  <span className="block text-sm mt-4">Invisible art - refined nostrils that speak without words</span>
                </h1>
                <p className="text-sm text-purple-300/60 tracking-widest uppercase mb-4 font-light">Natural · Longer Lasting Results</p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Nostril Reduction Treatment</p>
                  <p className="text-sm text-gray-300">5-10 minutes • Results last 3-4 months</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Nasal Flaring Botox Treatment</h2>
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
                <p className="text-gray-300">5-10 minutes including consultation</p>
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
                <p className="text-gray-300">3-4 months with gradual muscle return</p>
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
              <h2 className="text-3xl font-bold mb-4">Nasal Flaring Botox Before and After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how our expert nasal flaring botox treatments refine nostril contour while maintaining natural breathing function.
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
                      className="relative group cursor-pointer p-2"
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-2 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                      <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                        <p className="text-white text-sm font-medium">{image.caption}</p>
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

        {/* What is Nasal Flaring Botox */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">What is Nasal Flaring Botox?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Nasal flaring botox targets the dilator naris muscle that controls nostril widening during breathing and expressions. 
                Our invisible art approach reduces excessive flaring while maintaining natural breathing function and facial expressions.
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
                  <CardTitle className="text-white text-2xl text-center">Understanding Nasal Flaring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg leading-relaxed text-center">
                    Nasal flaring occurs when the dilator naris muscle contracts excessively, causing nostrils to widen during breathing, speaking, or emotional expressions. 
                    This can affect facial harmony and create an appearance of constant effort or stress.
                  </p>
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
                  <div className="text-purple-300 font-medium">Dilator Naris Muscle</div>
                  <div className="text-purple-300 font-medium">Alar Base</div>
                  <div className="text-purple-300 font-medium">Nostril Width</div>
                  <div className="text-purple-300 font-medium">Flaring Response</div>
                </div>
              </div>
            </motion.div>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Nasal Flaring Botox Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing for professional nasal flaring botox treatments at our Harley Street clinic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Nasal Flaring Only</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£175</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Both nostrils</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Dilator naris muscle</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Expert consultation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full border-2 border-purple-400">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Add-On Treatment</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£100</div>
                    <div className="text-sm text-purple-400">With Other Areas</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Combined with face</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Package discount</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Comprehensive care</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Nasal Package</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£275</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Nasal flaring</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Bunny lines</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Complete nasal care</span>
                      </li>
                    </ul>
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
                Common questions about nasal flaring botox treatments answered by our expert doctors.
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
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Refine Your Nasal Flaring?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Book your expert consultation today and discover how our invisible art approach can enhance your nostril contour naturally.
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
          <h3>Expert Nasal Flaring Botox Treatment in London</h3>
          <p>Cosmedocs offers professional nasal flaring botox treatments targeting excessive nostril widening and alar base concerns. Our experienced cosmetic doctors use advanced botulinum toxin injection techniques to reduce nasal flaring while preserving natural breathing function. Located in prestigious Harley Street, our clinic provides comprehensive nasal assessments and personalized treatment plans.</p>
          
          <h4>Why Choose Cosmedocs for Nasal Flaring Botox?</h4>
          <p>Our invisible art philosophy ensures natural-looking results that enhance your nasal contour without obvious signs of treatment. We specialize in precise dilator naris muscle targeting using the latest injection techniques for optimal outcomes. Our doctors have extensive experience in nasal anatomy and aesthetic medicine, ensuring safe and effective treatments that maintain natural breathing patterns.</p>
          
          <h4>Understanding Nasal Flaring Issues</h4>
          <p>Nasal flaring occurs when the dilator naris muscle contracts excessively, causing nostrils to widen beyond the natural range during breathing, speaking, or expressions. This can affect facial harmony and create an appearance of constant effort. Professional botox treatment relaxes this muscle, reducing excessive flaring while maintaining adequate breathing function.</p>
          
          <h4>Treatment Process and Nasal Care</h4>
          <p>Our nasal flaring botox treatment begins with a detailed nasal consultation and muscle analysis. The injection process takes 5-10 minutes using specialised techniques for the delicate nostril area. Results appear gradually over 3-14 days, with optimal effects lasting 3-4 months. We provide specific nasal aftercare instructions and ongoing support throughout your treatment journey.</p>
          
          <h4>Nasal Flaring Botox Cost and Combination Treatments</h4>
          <p>Nasal flaring botox at Cosmedocs is available as a standalone treatment or as part of our comprehensive nasal package at £275, which includes nasal flaring correction, bunny lines treatment, and nose tip lift. Many patients combine nasal flaring botox with non-surgical rhinoplasty using dermal fillers for complete nasal reshaping without surgery. Our doctors assess your overall nasal aesthetics to recommend the most effective treatment plan for achieving balanced, harmonious results.</p>
          
          <h4>Why Choose Cosmedocs for Nasal Botox Treatments</h4>
          <p>Cosmedocs has performed over one million injections since 2007, with extensive experience in delicate nasal procedures. Our GMC-registered doctors understand the complex anatomy of the nose and the importance of preserving natural breathing function whilst achieving aesthetic improvement. Every nasal flaring treatment follows our invisible art philosophy — subtle refinements that enhance your natural features without obvious signs of treatment. Book your consultation at our Harley Street clinic to discuss your nasal concerns with an experienced aesthetic doctor. Bold, natural, always your way.</p>
        </div>
      </div>
    </>
  );
};

export default NasalFlaringBotox;