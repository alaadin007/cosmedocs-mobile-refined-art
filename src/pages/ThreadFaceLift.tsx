import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User, CheckCircle, Star, Calendar, Shield, Award, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BeforeAfterImageViewer from '@/components/BeforeAfterImageViewer';
import PopularTreatments from '@/components/PopularTreatments';
import { generateSEOMetadata } from '@/utils/seo';

const seoData = generateSEOMetadata(
  "PDO Thread Face Lift London | Non-Surgical Facelift - CosmeDocs",
  "Transform your face with PDO Thread Face Lift in London. Non-surgical facelift with natural-looking results. Expert practitioners, 2-3 years results. Book consultation.",
  "/thread-face-lift"
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "PDO Thread Face Lift",
  "description": "Non-surgical thread face lift using PDO threads for skin tightening and face slimming",
  "provider": {
    "@type": "MedicalOrganization",
    "name": "CosmeDocs",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "UK"
    }
  },
  "procedureType": "Non-surgical facelift",
  "bodyLocation": "Face and neck",
  "duration": "PT25M",
  "recovery": "P7D"
};

const treatmentDetails = [
  { icon: Clock, label: "Procedure Time", value: "25-45 mins" },
  { icon: User, label: "Anaesthetic", value: "Local" },
  { icon: Calendar, label: "Results Duration", value: "2-3 Years" },
  { icon: CheckCircle, label: "Back To Work", value: "0-2 Days" },
  { icon: Shield, label: "Full Recovery", value: "One week" },
  { icon: Award, label: "Risk Level", value: "Minimal" }
];

const beforeAfterImages = [
  {
    src: "/placeholder.svg",
    alt: "PDO Thread Lift before and after results",
    caption: "Natural lifting and tightening results"
  },
  {
    src: "/placeholder.svg", 
    alt: "Thread facelift jawline definition",
    caption: "Enhanced jawline definition and neck contour"
  },
  {
    src: "/placeholder.svg",
    alt: "Non-surgical facelift transformation",
    caption: "Subtle yet effective facial rejuvenation"
  }
];

const faqData = [
  {
    question: "How long do PDO thread lift results last?",
    answer: "PDO thread lift results typically last 2-3 years. The threads gradually dissolve over 12-18 months, but the collagen stimulation continues to provide lifting effects for up to 3 years."
  },
  {
    question: "Is PDO thread lift painful?",
    answer: "The procedure is performed under local anaesthetic, so discomfort is minimal. You may experience mild soreness for a few days after treatment, which can be managed with over-the-counter pain relief."
  },
  {
    question: "How soon can I see results from thread face lift?",
    answer: "Results are visible immediately after treatment, with continued improvement over 2-3 months as collagen production increases and swelling subsides."
  },
  {
    question: "What is the recovery time for PDO threads?",
    answer: "Most patients return to work within 0-2 days. Full recovery takes about one week, during which you should avoid strenuous exercise and facial massage."
  },
  {
    question: "Are there any side effects?",
    answer: "Common side effects include mild swelling, bruising, and tenderness at insertion points. Serious complications are rare when performed by qualified practitioners."
  },
  {
    question: "Who is a good candidate for thread face lift?",
    answer: "Ideal candidates are those with mild to moderate skin laxity, typically aged 30-60, who want facial rejuvenation without surgery. A consultation will determine your suitability."
  }
];

const benefits = [
  "Non-surgical alternative to facelift surgery",
  "Immediate visible lifting results",
  "Stimulates natural collagen production",
  "Minimal downtime and recovery",
  "Long-lasting results (2-3 years)",
  "Enhanced facial contours and definition"
];

export function ThreadFaceLift() {
  return (
    <div className="bg-black text-white">
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* Hero Section - Matching LipFillers style */}
      <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
        <div className="page-container relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Expert PDO Thread
              <span className="block text-purple-300">Face Lift</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Non-surgical facial lifting with premium PDO threads
            </p>
            <p className="text-xl mb-2">
              <span className="text-purple-300 font-semibold">Invisible Art</span>
            </p>
            <p className="text-white mb-8">
              Transformation that speaks without saying a word
            </p>
            <p className="text-2xl text-purple-300 font-bold mb-2">Starting from £800</p>
            <p className="text-sm text-gray-300 mb-8">
              #threadlift - Natural lifting results lasting 2-3 years
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 text-lg font-semibold">
                Book Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-4 text-lg font-semibold">
                View Price List
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-accent">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Real Patient Results</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the natural-looking results achieved with our PDO thread face lift treatments
            </p>
          </motion.div>
          
          <BeforeAfterImageViewer images={beforeAfterImages} />
        </div>
      </section>

      {/* Treatment Overview */}
      <section className="py-20">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">What Is PDO Thread Face Lift?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A PDO thread face lift is a non-surgical cosmetic procedure that uses specialized threads 
                  made from polydioxanone (PDO) to lift and tighten sagging skin. These medical-grade threads 
                  are inserted under the skin to create an immediate lifting effect while stimulating natural 
                  collagen production for long-term rejuvenation.
                </p>
                <p>
                  PDO threads have been safely used in surgical procedures for decades and are completely 
                  biocompatible and biodegradable. The treatment is ideal for addressing early signs of aging, 
                  including sagging jowls, loose neck skin, and loss of facial definition.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about PDO thread face lift treatments
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="page-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Appearance?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book your consultation today and discover how PDO thread face lift can help you achieve natural, long-lasting results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Book Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Call: 020 7401 8757
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hidden SEO Content */}
      <div className="hidden">
        <h2>PDO Thread Face Lift London - Expert Non-Surgical Facelift Treatment</h2>
        <p>
          At CosmeDocs, our PDO thread face lift treatments in London offer a revolutionary non-surgical 
          approach to facial rejuvenation. Using advanced polydioxanone threads, our expert practitioners 
          deliver natural-looking lifting results that can last 2-3 years. The PDO thread lift procedure 
          is perfect for patients seeking to address sagging skin, loss of facial definition, and early 
          signs of aging without undergoing invasive surgery. Our Harley Street clinic provides the highest 
          standard of aesthetic medicine, with fully qualified doctors specializing in thread lift techniques. 
          The treatment stimulates natural collagen production while providing immediate lifting effects, 
          making it an ideal choice for facial contouring and skin tightening. With minimal downtime and 
          exceptional safety profile, PDO thread lifts represent the future of non-surgical facial enhancement. 
          Our comprehensive consultation process ensures each patient receives a personalized treatment plan 
          tailored to their unique facial anatomy and aesthetic goals. Experience the art of invisible 
          aesthetics with CosmeDocs' advanced thread lift treatments in the heart of London.
        </p>
      </div>

      <PopularTreatments />
    </div>
  );
}