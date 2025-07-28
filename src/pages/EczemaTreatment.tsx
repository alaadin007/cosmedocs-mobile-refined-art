import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateSEOMetadata } from "@/utils/seo";
import CosmeDocsAI from "@/components/CosmeDocs AI";

export default function EczemaTreatment() {
  const seoData = generateSEOMetadata(
    "Eczema Treatment London | Expert Dermatology Care | CosmeDocs",
    "Professional eczema treatment in London. Expert dermatologists offering effective solutions for dry, red, and scaly skin. Reduce inflammation and restore healthy skin.",
    "/eczema-treatment"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Eczema Treatment",
            "description": "Professional eczema treatment for dry, red, and scaly skin conditions",
            "procedureType": "Dermatological Treatment",
            "bodyLocation": "Skin",
            "preparation": "Consultation with qualified dermatologist",
            "followup": "Regular monitoring and skincare regime",
            "howPerformed": "Topical treatments, emollients, and professional dermatological care",
            "provider": {
              "@type": "MedicalOrganization",
              "name": "CosmeDocs",
              "url": "https://www.cosmedocs.com",
              "telephone": "+44-20-7043-0748",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "124 City Road",
                "addressLocality": "London",
                "postalCode": "EC1V 2NX",
                "addressCountry": "GB"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 py-20 lg:py-32 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <motion.h1 
                    className="text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Eczema Treatment
                  </motion.h1>
                  <motion.p 
                    className="text-xl lg:text-2xl text-muted-foreground font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Dry, Red & Scaly Rashes
                  </motion.p>
                  <motion.p 
                    className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Expert treatment for chronic skin conditions with proven methods to reduce inflammation, 
                    control symptoms, and restore healthy skin barrier function.
                  </motion.p>
                </div>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
                  >
                    Call: 020 7043 0748
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                  <div className="aspect-square bg-white/50 rounded-2xl flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Expert Care</h3>
                      <p className="text-muted-foreground">Professional dermatological treatment</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Summary */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-card rounded-3xl p-8 shadow-lg border">
                <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Treatment Summary</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-background rounded-2xl">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Treatment Time</h3>
                    <p className="text-muted-foreground">30-45 minutes consultation</p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-2xl">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Results</h3>
                    <p className="text-muted-foreground">Gradual improvement over weeks</p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-2xl">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Recovery</h3>
                    <p className="text-muted-foreground">No downtime required</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose CosmeDocs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose CosmeDocs?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our aesthetics is invisible art - Bold • Natural • Always Your Way
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Expert Dermatologists",
                  description: "Qualified specialists with extensive experience in eczema treatment",
                  icon: "👨‍⚕️"
                },
                {
                  title: "Personalized Care", 
                  description: "Tailored treatment plans based on your specific skin condition",
                  icon: "🎯"
                },
                {
                  title: "Proven Results",
                  description: "Effective treatments that reduce inflammation and restore skin health",
                  icon: "✨"
                },
                {
                  title: "Ongoing Support",
                  description: "Long-term care and monitoring to maintain healthy skin",
                  icon: "🤝"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-card rounded-2xl shadow-lg border hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="what-is-eczema" className="bg-card border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    What is eczema and what causes it?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    Eczema is a chronic skin condition characterized by dry, red, and scaly rashes. It occurs when the skin struggles to retain moisture, making it more reactive to triggers. Genetics play a significant role, with family history being a strong factor. Environmental triggers include soaps, detergents, cold weather, food allergies, and stress.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="symptoms" className="bg-card border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    What are the main symptoms of eczema?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    Primary symptoms include dry, red, itchy skin, cracked or crusted skin, blisters, oozing or bleeding, sore and swollen areas, and red, purple, or grey patches. Symptoms can range from mild and localized to widespread and severe, often fluctuating between improvements and flare-ups.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="treatment-options" className="bg-card border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    What treatment options are available?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    Key treatments include emollients (daily moisturizers) to prevent skin dryness, topical corticosteroids to reduce swelling and redness during flare-ups, and antihistamines for severe itching relief. Our expert team provides personalized treatment plans that help reduce inflammation without causing skin thinning.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="lifestyle-changes" className="bg-card border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    What lifestyle changes can help manage eczema?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    Lifestyle modifications that can enhance treatment include minimizing scratching of affected areas, avoiding triggers such as heat and irritants like certain soaps and fabrics, and considering dietary changes to limit foods like dairy that may worsen symptoms. Stress management is also important as stress can trigger flare-ups.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="who-suitable" className="bg-card border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    Who is suitable for eczema treatment?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    Treatment is suitable for anyone experiencing eczema symptoms and looking to improve their quality of life. While there's no cure for eczema, many people experience symptom improvement as they grow older. A consultation with our dermatologists will determine the best personalized treatment plan for your specific condition.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pricing" className="bg-card border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    How much does eczema treatment cost?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    Pricing is determined during consultation based on your specific condition and treatment requirements. Our team will provide a detailed treatment plan with transparent pricing after assessing your individual needs. Contact us for a consultation to discuss your treatment options and associated costs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-8"
            >
              <h2 className="text-3xl lg:text-4xl font-bold">Ready to Begin Your Journey?</h2>
              <p className="text-lg text-muted-foreground">
                Take the first step towards healthier skin with our expert eczema treatment. 
                Book your consultation today and discover how we can help restore your skin's natural balance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Book Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
                >
                  Call: 020 7043 0748
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Comprehensive Eczema Treatment in London</h2>
          <p>CosmeDocs offers advanced eczema treatment solutions for patients seeking relief from chronic skin conditions. Our expert dermatologists specialize in managing dry, red, and scaly rashes through evidence-based treatments that address both symptoms and underlying causes.</p>
          
          <h3>Understanding Eczema and Its Impact</h3>
          <p>Eczema affects approximately one in nine people in the UK at some point in their lives. This chronic inflammatory skin condition manifests through various symptoms including redness, swelling, itching, dryness, crusting, flaking, blistering, cracking, oozing, and bleeding. The condition significantly impacts quality of life, causing discomfort and potentially leading to temporary discoloration and scarring from scratching.</p>
          
          <h3>Professional Treatment Approaches</h3>
          <p>Our comprehensive treatment protocols focus on reducing inflammation and controlling symptoms without causing skin thinning. We employ a multi-faceted approach including topical corticosteroids for acute flare-ups, daily emollient therapy to maintain skin barrier function, and antihistamine therapy for severe pruritus management. Each treatment plan is personalized based on individual patient needs and condition severity.</p>
          
          <h3>Advanced Dermatological Care</h3>
          <p>At CosmeDocs, our qualified dermatologists utilize the latest evidence-based treatment modalities to achieve optimal outcomes. We understand that eczema is a fluctuating condition with periods of remission and exacerbation, requiring ongoing management and support. Our invisible art approach ensures natural-looking results while prioritizing patient comfort and long-term skin health.</p>
          
          <h3>Lifestyle Integration and Management</h3>
          <p>Effective eczema management extends beyond clinical treatment to include lifestyle modifications and trigger avoidance. Our specialists provide comprehensive education on environmental trigger identification, proper skincare routines, stress management techniques, and dietary considerations that may influence condition severity. This holistic approach maximizes treatment efficacy and promotes sustained improvement.</p>
        </div>
      </div>
      
      <CosmeDocsAI />
    </>
  );
}