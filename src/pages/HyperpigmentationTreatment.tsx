import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Clock, ShieldCheck, Award, Users } from "lucide-react";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateSEOMetadata } from "@/utils/seo";

const seoData = generateSEOMetadata(
  "Hyperpigmentation Treatment London | Melasma & Dark Patches | Cosmedocs",
  "Expert hyperpigmentation treatment in London. Effective solutions for melasma, dark patches, and melanin irregulation using advanced IPL, chemical peels, and prescription skincare.",
  "/hyperpigmentation-treatment"
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Hyperpigmentation Treatment",
  "description": "Professional treatment for melasma, dark patches, and melanin irregulation using advanced techniques",
  "provider": {
    "@type": "MedicalOrganization",
    "name": "Cosmedocs",
    "url": "https://www.cosmedocs.com"
  }
};

const beforeAfterImages = [
  { 
    src: "/lovable-uploads/0573fff6-1f9b-4393-a953-0c3f4b654eed.png", 
    alt: "Pigmentation treatment before and after", 
    caption: "Significant improvement in hyperpigmentation and skin evenness" 
  },
  { 
    src: "/lovable-uploads/4d5e6f7a-8b9c-1d2e-3f4a-5b6c7d8e9f0a.png", 
    alt: "Melasma treatment results", 
    caption: "Dramatic reduction in melasma patches" 
  }
];

const treatmentDetails = [
  { icon: Clock, label: "Treatment Time", value: "30-60 minutes" },
  { icon: ShieldCheck, label: "Anaesthetic", value: "Topical if required" },
  { icon: Users, label: "Return to Work", value: "Same day" },
  { icon: Award, label: "Results Duration", value: "Long-lasting with maintenance" }
];

const faqData = [
  {
    question: "What is hyperpigmentation?",
    answer: "Hyperpigmentation is a skin condition causing darkening of certain areas due to overproduction of melanin, the skin pigment. It's common across all ethnicities but particularly noticeable in lighter complexions."
  },
  {
    question: "What treatment options are available?",
    answer: "We offer multiple treatments including IPL therapy, chemical peels, microdermabrasion, dermaroller treatment, and prescription skincare with hydroquinone and kojic acid."
  },
  {
    question: "How many treatments will I need?",
    answer: "This depends on the severity of your hyperpigmentation. Most patients see 40-50% improvement after the first session, with significant reduction after 2-3 treatments."
  },
  {
    question: "Do these treatments completely cure hyperpigmentation?",
    answer: "While treatments don't completely eliminate hyperpigmentation, they significantly lighten it to become almost invisible. Results vary based on individual skin condition and type."
  },
  {
    question: "What are the side effects?",
    answer: "Common side effects include mild redness, slight itching, and temporary discomfort. In professional hands at Cosmedocs, side effects are minimal."
  },
  {
    question: "Is there any downtime?",
    answer: "Most hyperpigmentation treatments have minimal to no downtime. Patients can typically resume daily activities immediately after treatment."
  }
];

const treatmentMethods = [
  {
    title: "IPL Treatment",
    description: "Intense Pulsed Light uses broad spectrum light to clear dark spots, age spots, and sun damage. Typically requires 3-6 sessions with no downtime.",
    icon: "💡"
  },
  {
    title: "Chemical Peels",
    description: "Professional peels with glycolic, lactic, and salicylic acids help resurface skin and increase cell turnover for improved pigmentation.",
    icon: "🧪"
  },
  {
    title: "Prescription Skincare",
    description: "Medical-grade products including hydroquinone (the 'Gold Standard'), kojic acid, and vitamin A products for targeted treatment.",
    icon: "💊"
  },
  {
    title: "Microdermabrasion",
    description: "Effective for mild pigmentation, improving rough and sun-damaged skin through gentle exfoliation and enhanced product absorption.",
    icon: "✨"
  }
];

export default function HyperpigmentationTreatment() {
  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section - Matching Lip Fillers Style */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent">
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent z-10" />
          
          <div className="page-container relative z-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Hyperpigmentation
                  <span className="block text-primary">Treatment</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-4">
                  Melasma, Dark Patches & Melanin Irregulation
                </p>
                <p className="text-base text-muted-foreground mb-8 max-w-lg">
                  Expert treatment for skin discoloration using advanced techniques including IPL, chemical peels, and medical-grade skincare for even, radiant skin.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Consultation
                  </Button>
                  <Button variant="outline" size="lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {treatmentDetails.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <detail.icon className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">{detail.label}</p>
                        <p className="text-xs text-muted-foreground">{detail.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl" />
                  <div className="relative text-center">
                    <div className="text-6xl mb-4">🌟</div>
                    <h3 className="text-2xl font-semibold mb-4">Transform Your Skin</h3>
                    <p className="text-muted-foreground mb-6">
                      Professional hyperpigmentation treatment for even, radiant complexion
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">95%</div>
                        <div className="text-sm text-muted-foreground">Patient Satisfaction</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">2-3</div>
                        <div className="text-sm text-muted-foreground">Sessions Typical</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">0</div>
                        <div className="text-sm text-muted-foreground">Days Downtime</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Real Patient Results</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See the transformative results achieved through our expert hyperpigmentation treatment protocols.
              </p>
            </motion.div>

            <div className="text-center">
              <BeforeAfterImageViewer 
                images={beforeAfterImages}
                triggerLabel="View All Before & After Photos"
                title="Hyperpigmentation Treatment Results Gallery"
                description="Comprehensive gallery of our hyperpigmentation treatment outcomes"
              />
            </div>
          </div>
        </section>

        {/* What is Hyperpigmentation */}
        <section className="py-20">
          <div className="page-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">What is Hyperpigmentation?</h2>
                <p className="text-muted-foreground mb-6">
                  Hyperpigmentation is a skin condition that causes darkening of certain areas due to the overproduction of melanin, the skin pigment. This condition is quite common across all genders and ethnic groups, particularly noticeable in those with lighter complexions.
                </p>
                <p className="text-muted-foreground mb-6">
                  While hyperpigmentation is usually harmless, it can sometimes be a symptom of underlying conditions. Most people seek treatment due to aesthetic concerns, as it can cause stress and affect confidence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <p className="text-sm">Common in all ethnicities, especially lighter complexions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <p className="text-sm">Usually harmless but aesthetically concerning</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <p className="text-sm">Caused by melanin overproduction</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-accent/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Does Hyperpigmentation Occur?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      <p className="text-sm">High concentrations of melanocytes (melanin-producing cells)</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      <p className="text-sm">Hyperactivation of existing melanocytes</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Our Philosophy</h3>
                  <p className="text-sm text-muted-foreground italic">
                    "Our aesthetics is invisible art. Bold • Natural • Always Your Way. 
                    Transformation that speaks — without saying a word."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Methods */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Treatment Options</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer a comprehensive range of advanced treatments tailored to your specific pigmentation concerns.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatmentMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{method.title}</h3>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Common questions about hyperpigmentation treatment answered by our experts.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Skin?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Book your consultation today and discover how our expert hyperpigmentation treatments can restore your confidence with beautifully even skin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 020 7385 5880
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <section className="sr-only" aria-hidden="true">
          <h2>Hyperpigmentation Treatment London SEO Content</h2>
          <p>
            Cosmedocs offers comprehensive hyperpigmentation treatment in London using advanced medical techniques and cutting-edge technology. Our expert practitioners specialize in treating melasma, dark patches, age spots, sun damage, and various forms of melanin irregulation affecting patients across London, Birmingham, Manchester, and Cardiff. Professional hyperpigmentation treatment addresses skin discoloration through multiple evidence-based approaches including IPL intense pulsed light therapy, medical-grade chemical peels, microdermabrasion, dermaroller micro-needling, and prescription skincare formulations containing hydroquinone and kojic acid. Our London clinic provides personalized treatment plans tailored to individual skin types and pigmentation severity levels. Hyperpigmentation treatment benefits include significant lightening of dark patches, improved skin tone evenness, reduced appearance of age spots, enhanced skin texture, and restored confidence. Treatment sessions typically last 30-60 minutes with minimal downtime, allowing patients to resume normal activities immediately. Our comprehensive approach combines multiple treatment modalities for optimal results, with most patients experiencing 40-50% improvement after initial sessions and significant reduction after 2-3 treatments. Professional consultation ensures appropriate treatment selection based on skin type, pigmentation depth, and individual goals.
          </p>
        </section>
      </div>
    </>
  );
}