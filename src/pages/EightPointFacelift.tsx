import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { generateSEOMetadata } from "@/utils/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Sparkles, Heart, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EightPointFacelift = () => {
  const seoData = generateSEOMetadata(
    "8 Point Facelift - Non-Surgical Face Lift | CosmeDocs London",
    "Revolutionary 8 Point Facelift using advanced dermal fillers. Natural, non-surgical facial rejuvenation targeting 8 key points for a lifted, youthful appearance. Harley Street trained experts.",
    "/8-point-facelift"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "8 Point Facelift",
    "description": "Non-surgical facial rejuvenation using dermal fillers at 8 strategic points",
    "procedureType": "Non-surgical cosmetic procedure",
    "bodyLocation": "Face",
    "benefits": [
      "Natural facelift effect",
      "Restored facial volume",
      "Improved facial contours",
      "Non-surgical approach",
      "Minimal downtime"
    ],
    "provider": {
      "@type": "Organization",
      "name": "CosmeDocs",
      "url": "https://www.cosmedocs.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "UK"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "From £800",
      "priceCurrency": "GBP"
    }
  };

  const eightPoints = [
    {
      number: "1-2",
      title: "Cheekbones & Facial Structure",
      description: "Strategic volume placement enhances cheekbone definition and naturally lifts nasolabial folds",
      icon: "💎"
    },
    {
      number: "3",
      title: "Tear Trough & Under-Eye Area", 
      description: "Reduces tired hollows under eyes, restoring youthful brightness and eliminating dark circles",
      icon: "👁️"
    },
    {
      number: "4",
      title: "Nasolabial Folds",
      description: "Softens nose-to-mouth lines that deepen with age, creating a smoother facial transition",
      icon: "😊"
    },
    {
      number: "5", 
      title: "Mouth Corners",
      description: "Lifts downturned corners to eliminate the 'sad' appearance and restore a natural smile",
      icon: "💋"
    },
    {
      number: "6",
      title: "Pre-Jowl Area",
      description: "Restores volume along the jawline to reduce jowl formation and maintain facial definition",
      icon: "🎯"
    },
    {
      number: "7",
      title: "Jawline Definition",
      description: "Redefines the jaw angle and contour, providing lift and support to the lower face",
      icon: "💪"
    },
    {
      number: "8",
      title: "Lower Cheek/Buccal Area",
      description: "Fills hollow cheeks to eliminate gaunt appearance and restore youthful facial curves",
      icon: "✨"
    }
  ];

  const benefitsData = [
    { icon: Clock, title: "60-90 Minutes", description: "Complete treatment time" },
    { icon: Users, title: "Expert Practitioners", description: "Harley Street trained specialists" },
    { icon: Star, title: "Natural Results", description: "Subtle, age-appropriate enhancement" },
    { icon: Target, title: "Precision Technique", description: "Targeted 8-point approach" }
  ];

  const beforeAfterData = [
    {
      before: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=500&fit=crop",
      after: "https://images.unsplash.com/photo-1594824706977-5bb00e53137a?w=400&h=500&fit=crop",
      caption: "8 Point Facelift transformation - Natural volume restoration"
    }
  ];

  const faqData = [
    {
      question: "Who is suitable for the 8 Point Facelift?",
      answer: "Ideal candidates are those experiencing volume loss, sagging skin, or seeking facial rejuvenation without surgery. Our practitioners assess facial anatomy, aging patterns, and aesthetic goals during consultation to determine suitability."
    },
    {
      question: "How long do results last?",
      answer: "Results typically last 12-18 months, depending on individual factors like metabolism, lifestyle, and product choice. We use premium hyaluronic acid fillers for optimal longevity and natural-looking results."
    },
    {
      question: "Is the treatment painful?",
      answer: "Discomfort is minimal thanks to topical numbing cream and our gentle injection technique. Most patients describe the sensation as mild pressure with occasional pinching. Our practitioners prioritize your comfort throughout the procedure."
    },
    {
      question: "What's the recovery time?",
      answer: "Minimal downtime with most patients returning to normal activities immediately. Mild swelling or bruising may occur for 24-48 hours. We provide comprehensive aftercare instructions for optimal healing."
    },
    {
      question: "How does this compare to surgical facelift?",
      answer: "The 8 Point Facelift offers natural rejuvenation without surgery, scarring, or lengthy recovery. While surgical facelifts provide more dramatic results, our technique delivers subtle, age-appropriate enhancement with immediate results."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="8 point facelift, non-surgical facelift, dermal fillers, facial rejuvenation, liquid facelift, anti-aging, volume restoration, facial contouring, London aesthetic clinic" />
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

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge className="mb-4 bg-primary/10 text-primary">
                  Non-Surgical Excellence
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  8 Point Facelift
                </h1>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Revolutionary non-surgical facial rejuvenation using advanced dermal fillers 
                  at 8 strategic points. Achieve natural lifting and volume restoration without surgery.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {benefitsData.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 bg-card p-3 rounded-lg">
                      <benefit.icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">{benefit.title}</p>
                        <p className="text-xs text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild size="lg">
                    <Link to="/contact">Book Consultation</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/treatments">View All Treatments</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                  <img 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=700&fit=crop"
                    alt="8 Point Facelift results"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The 8 Points Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">The 8 Strategic Points</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our precision approach targets specific facial areas for comprehensive rejuvenation. 
                Each point is carefully selected to create natural lift and restore youthful contours.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eightPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{point.icon}</div>
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                        {point.number}
                      </div>
                      <h3 className="font-semibold mb-3">{point.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">Our Advanced Technique</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The 8 Point Facelift combines precision injection techniques with premium hyaluronic acid fillers 
                  to achieve natural-looking facial rejuvenation. Our approach differs from traditional methods by 
                  targeting specific anatomical points for optimal lift and volume distribution.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Advanced Assessment</h4>
                      <p className="text-muted-foreground">Comprehensive facial analysis using 3D imaging and anatomical mapping</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Precision Injection</h4>
                      <p className="text-muted-foreground">Strategic placement at 8 key points using advanced cannula techniques</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Premium Products</h4>
                      <p className="text-muted-foreground">FDA-approved hyaluronic acid fillers with optimal viscosity for each area</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2 text-primary">CosmeDocs Advantage</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Our Harley Street trained practitioners have developed advanced techniques taught internationally. 
                    With over 15 years of experience, we deliver superior results through precision and artistry.
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    <span>Invisible art • Bold • Natural • Always Your Way</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1594824706977-5bb00e53137a?w=300&h=400&fit=crop"
                      alt="8 Point Facelift technique"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="space-y-4 pt-8">
                    <img 
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop"
                      alt="Facial analysis process"
                      className="rounded-lg shadow-lg"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=250&fit=crop"
                      alt="Premium dermal fillers"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results & Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">What to Expect</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The 8 Point Facelift delivers comprehensive facial rejuvenation with natural-looking results 
                that enhance your unique features while turning back the clock.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-primary/20">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Immediate Results</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Instant volume restoration</li>
                      <li>• Visible lift and contouring</li>
                      <li>• Improved facial symmetry</li>
                      <li>• Enhanced natural beauty</li>
                      <li>• Minimal downtime</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-primary/20">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Targeted Areas</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Cheekbone enhancement</li>
                      <li>• Under-eye rejuvenation</li>
                      <li>• Nasolabial fold softening</li>
                      <li>• Jawline definition</li>
                      <li>• Overall facial lifting</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-primary/20">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Long-Term Benefits</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 12-18 months duration</li>
                      <li>• Collagen stimulation</li>
                      <li>• Improved skin quality</li>
                      <li>• Natural aging prevention</li>
                      <li>• Confidence enhancement</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get answers to common questions about the 8 Point Facelift procedure
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border border-muted hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready for Your 8 Point Transformation?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Experience the artistry of advanced facial rejuvenation with our expert team. 
                Book your consultation today and discover the CosmeDocs difference.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Book Your Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link to="/before-after-gallery">View Results Gallery</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <p>
            The 8 Point Facelift at CosmeDocs represents the pinnacle of non-surgical facial rejuvenation, 
            offering natural results through precision dermal filler placement. Our Harley Street trained 
            practitioners utilize advanced techniques developed over 15+ years of experience, targeting 
            eight strategic facial points for comprehensive lifting and volume restoration. This revolutionary 
            approach enhances cheekbones, reduces nasolabial folds, lifts mouth corners, defines jawlines, 
            and restores youthful facial contours without surgery. Using premium hyaluronic acid fillers, 
            the treatment delivers immediate results lasting 12-18 months with minimal downtime. Our aesthetic 
            philosophy emphasizes invisible art - bold, natural enhancement that celebrates your unique beauty. 
            The 8 Point Facelift addresses volume loss, sagging skin, and facial aging through scientific 
            precision and artistic vision, providing an alternative to surgical facelift procedures. 
            Professional consultation includes 3D facial analysis and personalized treatment planning 
            to ensure optimal results. CosmeDocs practitioners are internationally recognized trainers 
            who teach these advanced techniques to medical professionals worldwide, ensuring you receive 
            the highest standard of care. Experience the transformative power of the 8 Point Facelift 
            in our London, Birmingham, Manchester, or Cardiff clinics.
          </p>
        </div>
      </div>
    </>
  );
};

export default EightPointFacelift;