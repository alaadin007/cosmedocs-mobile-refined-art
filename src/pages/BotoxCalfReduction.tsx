
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { generateSEOMetadata } from '@/utils/seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BeforeAfterImageViewer from '@/components/BeforeAfterImageViewer';

const BotoxCalfReduction = () => {
  const seoData = generateSEOMetadata(
    "Botox Calf Reduction London | Slim Your Calves | Cosmedocs Harley Street",
    "Professional botox calf reduction treatment in London. Achieve slimmer, more contoured calves with our expert injectable treatments. Book consultation at Cosmedocs.",
    "/botox-calf-reduction"
  );

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/6ab37d8b-70a2-4167-a975-d2c8b7d97b4d.png",
      alt: "Botox calf reduction before and after results showing slimmer calf contours",
      caption: "Remarkable calf reduction results - Bold • Natural • Always Your Way"
    },
    {
      src: "/lovable-uploads/200e347f-34b9-434d-8904-fd6d94765a3e.png",
      alt: "Calf reduction journey showing progressive slimming results",
      caption: "Our invisible art approach to calf contouring delivers natural-looking results"
    },
    {
      src: "/lovable-uploads/c64c87d1-4d95-4691-a433-41e475c92452.png",
      alt: "Botox calf reduction before after comparison showing refined leg silhouette",
      caption: "Professional calf reduction with precise botox injections for elegant leg contours"
    },
    {
      src: "/lovable-uploads/7824e28f-766c-4f96-b021-1a523df8d42b.png",
      alt: "Calf muscle reduction results with botox treatment London",
      caption: "Transformation that speaks without saying a word - minimal, quiet, invisible"
    },
    {
      src: "/lovable-uploads/373586d7-53d2-4bc9-92c5-fc617af6c284.png",
      alt: "Timeline progression of calf reduction treatment results over months",
      caption: "Progressive results over time showing the evolution of refined calf contours"
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
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/6ab37d8b-70a2-4167-a975-d2c8b7d97b4d.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content="/lovable-uploads/6ab37d8b-70a2-4167-a975-d2c8b7d97b4d.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Botox Calf Reduction",
            "description": "Professional botox calf reduction treatment for slimmer, more contoured calves",
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
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-background to-accent/10">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Botox Calf Reduction
                  <span className="block text-3xl md:text-4xl text-muted-foreground mt-2">
                    Sculpt Elegant Leg Contours
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Transform your leg silhouette with our expert botox calf reduction treatment. 
                  Our aesthetics is invisible art - achieving naturally slimmer, more refined calf contours 
                  that enhance your overall leg proportions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full">
                    Book Consultation
                  </Button>
                  <BeforeAfterImageViewer 
                    images={beforeAfterImages}
                    triggerLabel="View Results"
                    title="Calf Reduction Results"
                    description="See real patient transformations"
                    className="border border-border bg-background hover:bg-accent transition-colors rounded-full px-6 py-3"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="/lovable-uploads/6ab37d8b-70a2-4167-a975-d2c8b7d97b4d.png"
                  alt="Botox calf reduction before and after results"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Botox Calf Reduction */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What is Botox Calf Reduction?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Botox calf reduction is an innovative non-surgical treatment that uses botulinum toxin 
                    to relax the gastrocnemius muscle in the calves. This procedure effectively reduces 
                    muscle bulk, creating a slimmer, more feminine leg silhouette.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Unlike surgical procedures, our botox calf reduction offers a minimally invasive 
                    approach to achieving your desired leg contours. The treatment works by temporarily 
                    reducing muscle activity, allowing the calf muscle to gradually decrease in size 
                    over time.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="/lovable-uploads/40254aca-b496-475c-9430-1cd87d088bcb.png"
                    alt="Botox calf reduction injection procedure"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Benefits */}
        <section className="py-16 bg-accent/30">
          <div className="page-container">
            <h2 className="text-3xl font-bold mb-12 text-center">Treatment Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Non-Surgical Solution",
                  description: "Achieve calf reduction without invasive surgery or lengthy recovery periods"
                },
                {
                  title: "Natural-Looking Results",
                  description: "Our invisible art approach ensures subtle, refined changes that look completely natural"
                },
                {
                  title: "Minimal Downtime",
                  description: "Return to daily activities immediately with no significant recovery time required"
                },
                {
                  title: "Gradual Transformation",
                  description: "Results develop progressively over 2-4 weeks, allowing for natural-looking changes"
                },
                {
                  title: "Improved Confidence",
                  description: "Feel more confident in skirts, dresses, and fitted clothing with slimmer leg contours"
                },
                {
                  title: "Reversible Treatment",
                  description: "Effects are temporary, typically lasting 6-12 months, providing flexibility in your aesthetic journey"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">The Treatment Process</h2>
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Comprehensive Consultation",
                    description: "Our expert practitioners assess your calf anatomy, discuss your aesthetic goals, and create a personalized treatment plan tailored to your unique needs."
                  },
                  {
                    step: "2",
                    title: "Precise Injection Technique",
                    description: "Using advanced injection techniques, botox is strategically placed into specific areas of the gastrocnemius muscle to achieve optimal contouring results."
                  },
                  {
                    step: "3",
                    title: "Progressive Results",
                    description: "Over the following 2-4 weeks, you'll notice gradual muscle relaxation and calf slimming, with full results typically visible within 6-8 weeks."
                  },
                  {
                    step: "4",
                    title: "Follow-up Care",
                    description: "We provide comprehensive aftercare guidance and schedule follow-up appointments to monitor your progress and ensure optimal results."
                  }
                ].map((process, index) => (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex gap-6 items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {process.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{process.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Gallery */}
        <section className="py-16 bg-accent/30">
          <div className="page-container">
            <h2 className="text-3xl font-bold mb-12 text-center">Real Patient Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beforeAfterImages.slice(1).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square rounded-lg overflow-hidden bg-accent mb-3">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {image.caption}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Why Choose Cosmedocs for Calf Reduction?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="text-left space-y-4">
                  <h3 className="text-xl font-semibold">Expert Practitioners</h3>
                  <p className="text-muted-foreground">
                    Our team of highly trained medical professionals specializes in advanced 
                    botox techniques, ensuring safe and effective calf reduction treatments.
                  </p>
                </div>
                <div className="text-left space-y-4">
                  <h3 className="text-xl font-semibold">Harley Street Excellence</h3>
                  <p className="text-muted-foreground">
                    Located in the prestigious Harley Street medical district, we maintain 
                    the highest standards of care and treatment quality.
                  </p>
                </div>
                <div className="text-left space-y-4">
                  <h3 className="text-xl font-semibold">Personalized Approach</h3>
                  <p className="text-muted-foreground">
                    Every treatment is tailored to your unique anatomy and aesthetic goals, 
                    ensuring results that complement your natural beauty.
                  </p>
                </div>
                <div className="text-left space-y-4">
                  <h3 className="text-xl font-semibold">Invisible Art Philosophy</h3>
                  <p className="text-muted-foreground">
                    Our aesthetics is invisible art - creating transformations that are 
                    Bold • Natural • Always Your Way.
                  </p>
                </div>
              </div>
              <img
                src="/lovable-uploads/65f0c54f-8234-4b7f-a081-ce20d21df1fb.png"
                alt="Cosmedocs Harley Street clinic exterior"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="page-container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Leg Silhouette?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book your consultation today and discover how botox calf reduction can help you 
              achieve the elegant leg contours you've always desired.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Call 0333 0551 503
              </Button>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Botox Calf Reduction London Harley Street Cosmedocs Treatment Slimmer Calves Leg Contouring</h2>
          <p>
            Botox calf reduction London, calf slimming treatment, leg contouring, gastrocnemius muscle reduction, 
            non-surgical calf reduction, botulinum toxin calf treatment, Harley Street calf reduction, cosmetic 
            calf slimming, aesthetic leg contouring, calf muscle botox, professional calf reduction London, 
            minimally invasive calf treatment, leg silhouette enhancement, calf reshaping, botox for calves, 
            calf reduction specialist, London aesthetic clinic, Cosmedocs calf treatment, invisible art aesthetics, 
            bold natural always your way, refined leg contours, elegant calf shaping, medical aesthetic treatments, 
            expert practitioners Harley Street, safe calf reduction, effective leg contouring, natural looking results, 
            minimal downtime treatment, gradual calf slimming, reversible aesthetic treatment, confidence boosting 
            leg enhancement, personalized calf reduction plan, comprehensive consultation, precise injection technique, 
            progressive results, follow-up care, muscle relaxation therapy, temporary calf reduction, aesthetic medicine 
            London, cosmetic injections, professional medical care, advanced botox techniques, leg aesthetics, 
            calf muscle treatment, non-invasive body contouring, aesthetic transformation, beautiful leg proportions.
          </p>
        </div>
      </div>
    </>
  );
};

export default BotoxCalfReduction;
