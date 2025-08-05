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

      <div className="bg-black text-white">
        {/* Hero Section - Matching Lip Fillers Style */}
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
                  Expert
                  <span className="block text-purple-300">Hyperpigmentation</span>
                  <span className="block text-purple-300">Treatment</span>
                  <span className="block text-sm mt-4">Melasma, Dark Patches & Melanin Irregulation</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Starting from £200</p>
                  <p className="text-sm text-gray-300">Advanced IPL, chemical peels, and medical-grade skincare solutions</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* What is Hyperpigmentation */}
        <section className="py-20 bg-primary/5">
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

        {/* Hyperpigmentation Can Be Treated By */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Hyperpigmentation can be treated by:</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive treatment options available at our clinic for effective hyperpigmentation management.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-background rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Cosmeceuticals & Prescription Skin Care</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Broad Spectrum Sunscreen</h4>
                      <p className="text-sm text-muted-foreground">SPF 30 and above is highly recommended during sun exposure to prevent further skin damage due to UV rays exposure.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Hydroquinone & Kojic Acid</h4>
                      <p className="text-sm text-muted-foreground">Very effective cosmeceutical skin lightener products. Hydroquinone is referred to as the 'Gold Standard' for treating hyperpigmentation. Enhanced when used in combination with antioxidants, hydroxy acids retinoids.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Vitamin A Products</h4>
                      <p className="text-sm text-muted-foreground">Including Retinol and Tretinoin that help in skin rejuvenation and resurfacing and increase cell turnover.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Alpha Hydroxy Acids</h4>
                      <p className="text-sm text-muted-foreground">Exfoliate skin and smooth while increasing cell turnover for even skin tone.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Microdermabrasion</h3>
                  <p className="text-sm text-muted-foreground">
                    For mild pigmentation, microdermabrasion proves to be an effective treatment. It improves rough and sun damaged skin through skin exfoliation and lightens pigmentation. Also aids in diffusing active care products into skin. Highly effective when used in combination with chemical skin peel treatment.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-background rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Skin Peel Treatment</h3>
                  <p className="text-sm text-muted-foreground">
                    Chemical skin peels give improved results when other topical therapies are unable to provide desired results. Essential natural ingredients including Lactic, Salicylic and Glycolic Acid help in skin resurfacing and increase cell turnover. Available in varying depths and strengths to suit different skin types.
                  </p>
                </div>

                <div className="bg-background rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">IPL Treatment</h3>
                  <p className="text-sm text-muted-foreground">
                    Intense Pulse Light uses broad spectrum light contrary to single wavelength lasers. Helps in clearing dark spots, age spots and hyperpigmentation caused by sun damage and ageing. Usually needs 3-6 treatment sessions to clear skin and give even skin tone. No downtime required.
                  </p>
                </div>

                <div className="bg-background rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Dermaroller Treatment</h3>
                  <p className="text-sm text-muted-foreground">
                    Micro-needling uses a special dermaroller device which gently rejuvenates skin and improves pigmentation. Helps in reduction of pigmentation by increasing cell turnover while powerful anti-oxidants and skin brighteners are infused into the skin.
                  </p>
                </div>
              </motion.div>
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