
import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '../utils/seo';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Award, Calendar, Activity, Syringe } from 'lucide-react';

const TriggerPointBotox = () => {
  const seoData = generateSEOMetadata(
    "Trigger Point Botox London - £450 | Muscle Tension Relief | Cosmedocs",
    "Expert trigger point botox injections in London from £450. Relieve chronic muscle tension, pain, and trigger points with precision botox treatments at Cosmedocs Harley Street.",
    "/trigger-point-botox"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Trigger Point Botox Treatment",
    "description": "Professional trigger point botox injections for muscle tension relief and chronic pain management",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Cosmedocs",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10 Harley Street",
        "addressLocality": "London",
        "postalCode": "W1G 9PF",
        "addressCountry": "GB"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "450",
      "priceCurrency": "GBP"
    }
  };

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
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section - Updated to match LipFillers design */}
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
                  <span className="text-purple-300">Trigger Point Botox London</span>
                  <span className="block text-sm mt-4">Invisible art - expert muscle tension relief that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Precision Pain Relief</p>
                  <p className="text-sm text-gray-300">Expert trigger point botox injections for chronic muscle tension - from £450</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                    onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Pricing
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
              <h2 className="text-3xl font-bold mb-8 text-white">Trigger Point Botox Treatment</h2>
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
                <p className="text-gray-300">15-30 minutes depending on areas treated</p>
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
                <p className="text-gray-300">3-6 months of sustained pain relief</p>
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
                <p className="text-gray-300">Minimal downtime, immediate return to activities</p>
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
                <p className="text-gray-300">Local anaesthetic available if needed</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Trigger Point Botox */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-white">What is Trigger Point Botox?</h2>
              <div className="prose prose-lg mx-auto text-gray-300 space-y-6">
                <p>
                  Trigger point botox is a specialized medical treatment that uses botulinum toxin injections to relieve chronic muscle tension, spasms, and pain. Unlike cosmetic botox applications, trigger point botox specifically targets hyperirritable spots in skeletal muscle known as trigger points, which are associated with palpable nodules in taut bands of muscle fibers.
                </p>
                <p>
                  These trigger points can cause significant discomfort, referred pain, and limited range of motion. Our expert practitioners at Cosmedocs use precise injection techniques to deliver botulinum toxin directly into these problematic areas, effectively relaxing the muscle and providing long-lasting relief from chronic pain conditions.
                </p>
                <p>
                  The treatment is particularly effective for conditions such as chronic neck pain, shoulder tension, tension headaches, myofascial pain syndrome, and various musculoskeletal disorders that haven't responded well to conventional treatments.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Benefits of Trigger Point Botox</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Experience targeted muscle tension relief with our specialized trigger point botox treatments.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Long-lasting Relief",
                  description: "Provides 3-6 months of sustained muscle tension relief and pain reduction"
                },
                {
                  icon: Clock,
                  title: "Quick Procedure",
                  description: "Treatment typically takes 15-30 minutes with minimal downtime required"
                },
                {
                  icon: CheckCircle,
                  title: "Targeted Treatment",
                  description: "Precisely targets specific trigger points for maximum therapeutic benefit"
                },
                {
                  icon: Star,
                  title: "Non-surgical",
                  description: "Minimally invasive alternative to surgical interventions for chronic pain"
                },
                {
                  icon: Users,
                  title: "Expert Care",
                  description: "Performed by experienced medical professionals in clinical settings"
                },
                {
                  icon: Award,
                  title: "Proven Results",
                  description: "Clinically proven treatment with high patient satisfaction rates"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center bg-accent border-none h-full">
                    <CardHeader>
                      <benefit.icon className="h-12 w-12 text-purple-300 mx-auto mb-4" />
                      <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-white">Treatment Process</h2>
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Initial Consultation & Assessment</h3>
                    <p className="text-gray-300 mb-4">
                      Our comprehensive consultation begins with a detailed medical history and physical examination. We identify specific trigger points causing your discomfort through palpation and movement assessment. This thorough evaluation ensures we target the correct areas for optimal treatment outcomes.
                    </p>
                    <p className="text-gray-300">
                      During this phase, we also discuss your pain patterns, previous treatments tried, and establish realistic expectations for your trigger point botox therapy. Our medical team will explain the procedure in detail and address any concerns you may have.
                    </p>
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/91daaa52-6dff-448b-b375-8ce52b2d0f41.png" 
                      alt="Medical consultation and trigger point assessment"
                      className="rounded-lg shadow-lg w-full h-80 object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div className="md:order-2">
                    <h3 className="text-2xl font-bold mb-4 text-white">Precision Injection Technique</h3>
                    <p className="text-gray-300 mb-4">
                      Using advanced injection techniques, our practitioners deliver botulinum toxin directly into identified trigger points. The procedure involves multiple small injections using fine needles to ensure precise placement and minimize discomfort. Each injection site is carefully mapped to maximize therapeutic benefit.
                    </p>
                    <p className="text-gray-300">
                      The entire injection process typically takes 15-30 minutes, depending on the number of trigger points being treated. Local anesthetic may be used to enhance comfort during the procedure, though most patients find the injections well-tolerated.
                    </p>
                  </div>
                  <div className="md:order-1">
                    <img 
                      src="/lovable-uploads/cda46474-143e-4d79-ab59-9a967c212d0e.png" 
                      alt="Precise trigger point botox injection procedure"
                      className="rounded-lg shadow-lg w-full h-80 object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Conditions Treated */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-white">Conditions We Treat</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-4 text-white">Primary Conditions</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Chronic neck and shoulder tension</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Myofascial pain syndrome</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Tension-type headaches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Chronic lower back pain</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Fibromyalgia-related muscle pain</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-4 text-white">Secondary Benefits</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Improved range of motion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Enhanced sleep quality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Reduced dependency on pain medications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Better overall quality of life</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>Increased daily activity tolerance</span>
                    </li>
                  </ul>
                </motion.div>
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
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Treatment Pricing</h2>
              <Card className="bg-accent border-none">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">Trigger Point Botox</CardTitle>
                  <CardDescription className="text-gray-300">Professional muscle tension relief treatment</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-5xl font-bold text-purple-300 mb-4">£450</div>
                  <p className="text-gray-300 mb-6">
                    Starting price for trigger point botox treatment including consultation, 
                    assessment, and precision injection therapy.
                  </p>
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200 w-full rounded-full">
                    Book Your Treatment
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Cosmedocs for Trigger Point Botox?</h2>
              <div className="prose prose-lg mx-auto text-gray-300 space-y-6">
                <p>
                  At Cosmedocs, our aesthetics is invisible art - Bold, Natural, Always Your Way. This philosophy extends to our trigger point botox treatments, where we focus on providing genuine relief while maintaining your natural movement and function. Our approach is minimal, quiet, and transformative without being obvious.
                </p>
                <p>
                  With over 17 years of experience and more than 1 million injections performed, our team of medical professionals brings unparalleled expertise to trigger point botox therapy. Located in the prestigious Harley Street medical district, our clinic combines cutting-edge techniques with a comfortable, professional environment.
                </p>
                <p>
                  We understand that chronic pain affects every aspect of your life. Our comprehensive approach addresses not just the immediate symptoms but works toward long-term improvement in your quality of life. Each treatment plan is tailored to your specific needs, ensuring optimal outcomes and patient satisfaction.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">
                    How long does trigger point botox last?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Trigger point botox typically provides relief for 3-6 months. The duration varies depending on individual factors such as muscle activity, severity of trigger points, and dosage administered.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">
                    Is trigger point botox painful?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Most patients experience minimal discomfort during the procedure. We use fine needles and can provide local anaesthetic if needed. The injection itself takes only seconds per trigger point.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">
                    How many trigger points can be treated in one session?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    The number of trigger points treated depends on your specific condition and the areas affected. Typically, we can address multiple trigger points in one session, with treatment plans tailored to your needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">
                    When will I see results from trigger point botox?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Some patients notice improvement within a few days, while full effects typically develop over 1-2 weeks as the muscle tension gradually reduces and pain subsides.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-purple-300">
                    Are there any side effects?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Side effects are generally minimal and may include temporary soreness at injection sites, mild bruising, or temporary weakness in the treated muscle. Serious complications are rare when performed by qualified practitioners.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Experience Pain Relief?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Book your trigger point botox consultation today and take the first step towards chronic pain relief with our expert medical team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold">
                  Book Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold"
                >
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div style={{ position: 'absolute', left: '-9999px', visibility: 'hidden' }}>
          <h3>Comprehensive Trigger Point Botox Information</h3>
          <p>
            Trigger point botox London specialists at Cosmedocs provide advanced muscle tension relief using botulinum toxin injections. Our Harley Street clinic offers expert trigger point therapy for chronic pain management, myofascial pain syndrome, and muscular tension disorders. Professional botox injections for trigger points provide long-lasting relief from chronic muscle spasms and tension headaches.
          </p>
          <p>
            Botulinum toxin trigger point injections represent a revolutionary approach to treating chronic musculoskeletal pain conditions. Our experienced medical practitioners use precision injection techniques to target hyperirritable muscle fibers, providing sustained relief from chronic pain syndromes. Trigger point botox treatment costs from £450 at our London clinic, representing excellent value for professional medical care.
          </p>
          <p>
            Muscle tension relief through trigger point botox offers a non-surgical alternative to traditional pain management approaches. Our clinic specializes in treating fibromyalgia, chronic neck pain, shoulder tension, and tension-type headaches using advanced botulinum toxin therapy. Professional trigger point injections provide 3-6 months of sustained pain relief with minimal side effects.
          </p>
          <p>
            Chronic pain management through trigger point botox therapy has shown excellent clinical results for patients suffering from myofascial pain syndromes. Our Harley Street practitioners combine medical expertise with compassionate care to deliver optimal treatment outcomes. Botox trigger point therapy reduces muscle spasticity and improves range of motion effectively.
          </p>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="page-container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Relief?</h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step toward freedom from chronic muscle tension and pain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Call 0333 0551 503
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TriggerPointBotox;
