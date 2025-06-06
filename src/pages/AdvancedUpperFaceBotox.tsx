
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Star, Award, Eye, Zap, ArrowRight, Users, BookOpen } from 'lucide-react';
import PopularTreatments from '@/components/PopularTreatments';
import { generateSEOMetadata } from '@/App';

const AdvancedUpperFaceBotox = () => {
  const seoData = generateSEOMetadata(
    "Advanced Upper Face Botox & Dermal Filler Combination | Dr. Ahmed Haq",
    "Revolutionary approach to treating deep upper face wrinkles. Dr. Ahmed Haq combines advanced Botox techniques with precise dermal fillers for lasting results. Learn about the science behind why traditional Botox alone isn't enough for deep lines.",
    "/advanced-upper-face-botox"
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Advanced Upper Face Botox Treatment",
    "provider": {
      "@type": "Physician",
      "name": "Dr. Ahmed Haq",
      "specialty": "Aesthetic Medicine",
      "yearsOfExperience": "15+"
    },
    "description": "Advanced Botox and dermal filler combination for deep upper face wrinkles",
    "serviceType": "Botox and Dermal Filler Treatment",
    "areaServed": "UK",
    "availableLanguage": "English",
    "offers": {
      "@type": "Offer",
      "description": "Combined Botox and dermal filler treatment for superior wrinkle correction"
    }
  };

  const treatmentAreas = [
    {
      title: "Frown Lines",
      description: "Deep vertical lines between eyebrows require combination therapy for optimal results",
      technique: "Botox + light dermal filler with advanced cross-linking"
    },
    {
      title: "Forehead Lines",
      description: "Horizontal forehead wrinkles that persist despite regular Botox treatments",
      technique: "Strategic filler placement to fill lines halfway, allowing natural collagen stimulation"
    },
    {
      title: "Crow's Feet",
      description: "Periorbital region where Botox alone may not address deeper etched lines",
      technique: "Soft-grade fillers combined with precise Botox placement"
    },
    {
      title: "Spock Eyebrow",
      description: "Unnatural eyebrow elevation requiring balanced approach",
      technique: "Dermal filler to balance rather than excessive Botox dosing"
    },
    {
      title: "Periorbital Region",
      description: "Eye area where crepey skin develops at outer eyebrow corners",
      technique: "Soft-grade fillers with strategic Botox for comprehensive treatment"
    },
    {
      title: "Upper Eyelid Hooding",
      description: "Excess skin requiring careful balance of treatments",
      technique: "Precise filler placement to avoid complications while maintaining natural look"
    }
  ];

  const botoxTimeline = [
    { month: 1, percentage: 20, description: "Botox begins wearing off" },
    { month: 2, percentage: 40, description: "Lines start reappearing for deep wrinkles" },
    { month: 3, percentage: 60, description: "Significant movement returns" },
    { month: 4, percentage: 80, description: "Most effect worn off" },
    { month: 5, percentage: 100, description: "Complete wear-off" }
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Advanced Upper Face Botox
                  <span className="block text-primary mt-2">Beyond Traditional Treatment</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Why deep wrinkles need more than Botox alone. Dr. Ahmed Haq's revolutionary 
                  approach combines advanced Botox techniques with precise dermal fillers for 
                  lasting, natural results.
                </p>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>15+ Years Innovation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    <span>Combined Modalities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>Superior Results</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Problem with Traditional Botox */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Botox Alone Isn't Enough for Deep Lines</h2>
              <Card className="p-8 mb-8">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">The Botox Wear-Off Timeline</h3>
                      <p className="text-muted-foreground mb-4">
                        Botox wears off approximately 20% per month. For people with deep wrinkles, 
                        this creates a frustrating cycle where lines reappear at 2-3 months.
                      </p>
                      <div className="space-y-3">
                        {botoxTimeline.map((item) => (
                          <div key={item.month} className="flex items-center gap-3">
                            <div className="w-16 text-sm font-medium">Month {item.month}:</div>
                            <div className="flex-1">
                              <div className="bg-accent rounded-full h-2 relative overflow-hidden">
                                <div 
                                  className="bg-primary h-full transition-all duration-500"
                                  style={{ width: `${100 - item.percentage}%` }}
                                />
                              </div>
                            </div>
                            <div className="text-sm text-muted-foreground">{item.percentage}% worn off</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Deep Wrinkle Reality</h3>
                      <p className="text-muted-foreground mb-4">
                        When you have deep, etched lines, the skin continues to crinkle in the area 
                        of the line even with partial Botox effect. This makes it seem like Botox 
                        is wearing off quicker, but the reality is more complex.
                      </p>
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <p className="text-sm font-medium mb-2">The Solution:</p>
                        <p className="text-sm text-muted-foreground">
                          Combining Botox with carefully placed dermal fillers addresses both 
                          muscle movement AND fills the established crease for comprehensive treatment.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Advanced Technique */}
        <section className="py-16 bg-accent/30">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">The Advanced Combination Approach</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold mb-4">Strategic Filler Placement</h3>
                    <p className="text-muted-foreground mb-4">
                      We use light dermal filler with advanced cross-linking technology to:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Fill lines halfway for natural appearance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Stimulate natural collagen production</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Provide stable, long-lasting results</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Reduce treatment frequency needs</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold mb-4">Cost-Effective Long-Term</h3>
                    <p className="text-muted-foreground mb-4">
                      While the initial investment may seem higher, the mathematics work in your favor:
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center p-3 bg-background rounded">
                        <span>Traditional Botox every 4 months</span>
                        <span className="font-medium">3x per year</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-primary/10 rounded">
                        <span>Combined treatment duration</span>
                        <span className="font-medium">18-24 months</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      "A stitch in time saves nine" - addressing the root cause reduces long-term 
                      costs and client frustration.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Comprehensive Upper Face Treatment Areas</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {treatmentAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <h3 className="text-lg font-semibold mb-3">{area.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{area.description}</p>
                        <div className="bg-accent/50 p-3 rounded text-xs">
                          <span className="font-medium">Technique: </span>
                          <span className="text-muted-foreground">{area.technique}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Complementary Retinol */}
        <section className="py-16 bg-accent/30">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">The Power of Retinol Enhancement</h2>
              <Card className="p-8">
                <CardContent className="p-0">
                  <Star className="h-12 w-12 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Complimentary Travel-Size Retinol</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Every treatment includes a complimentary travel-size slow-release retinol 
                    that lasts 1-2 months. This is invaluable for improving collagen production 
                    and enhancing your treatment results over time.
                  </p>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Why Retinol Matters:</strong> Retinol stimulates natural collagen production, 
                      working synergistically with your filler treatment to maximize and extend results. 
                      This combination approach is what sets our treatment protocol apart.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Training & Education */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Professional Training Available</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <BookOpen className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Online Courses</h3>
                    <p className="text-muted-foreground mb-4">
                      For medical professionals practicing dermal fillers, we offer comprehensive 
                      online courses through harleystreetinstitute.com
                    </p>
                    <Button variant="outline" className="w-full">
                      Learn More About Online Training
                    </Button>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardContent className="p-0">
                    <Users className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-4">One-to-One Training</h3>
                    <p className="text-muted-foreground mb-4">
                      Book personalized training sessions to learn these advanced procedures 
                      that will significantly increase your client satisfaction rates.
                    </p>
                    <Button variant="outline" className="w-full">
                      Book Personal Training
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center mt-8">
                <p className="text-muted-foreground italic">
                  "These treatments take hours to teach, but decades to master. The depth of knowledge 
                  and technique refinement comes with years of dedicated practice and innovation."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 bg-primary/10">
          <div className="page-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">See the Technique in Action</h2>
              <p className="text-muted-foreground mb-8">
                Follow @Cosmedocs on Instagram to see these advanced techniques being performed 
                and learn more about our innovative approach to aesthetic medicine.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book Your Consultation
                </Button>
                <Button size="lg" variant="outline">
                  View Instagram <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Eye className="h-4 w-4" />
                  <span>Bold • Natural • Always Your Way</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Advanced Upper Face Botox Dermal Filler Combination Treatment London Birmingham Manchester Cardiff</h2>
          <p>
            Dr Ahmed Haq advanced upper face botox dermal filler combination deep wrinkles frown lines forehead 
            crow feet treatment london birmingham manchester cardiff cosmedocs botox wear off timeline deep 
            wrinkle treatment advanced botox techniques dermal filler botox combination therapy spock eyebrow 
            treatment periorbital wrinkles upper eyelid hooding botox filler combination advanced aesthetic 
            medicine botox dermal filler training courses harley street institute online training one to one 
            training medical professionals aesthetic medicine education botox technique advanced cross linking 
            dermal filler hyaluronic acid collagen stimulation retinol treatment aesthetic medicine london 
            expert botox practitioner 15 years experience botox filler combination cost effective treatment 
            long lasting results natural aesthetic enhancement invisible art aesthetic philosophy millimeter 
            precision medicine facial optimization expert consultation aesthetic medicine london birmingham 
            manchester cardiff advanced botox consultation booking natural facial enhancement techniques 
            upper face rejuvenation botox filler combination treatment expert aesthetic physician consultation 
            facial anatomy expertise aesthetic medicine training physician education advanced aesthetic 
            techniques natural results cosmedocs aesthetic clinic dr ahmed haq consultation booking 
            aesthetic medicine expertise facial rejuvenation techniques advanced consultation millimeter 
            precision aesthetic enhancement natural facial optimization volume restoration techniques 
            expert aesthetic physician consultation facial anatomy expertise aesthetic medicine london 
            birmingham manchester cardiff advanced aesthetic consultation booking natural facial 
            enhancement techniques upper face botox dermal filler combination treatment.
          </p>
        </div>

        <PopularTreatments 
          title="Related Treatments"
          className="bg-black"
        />
      </div>
    </>
  );
};

export default AdvancedUpperFaceBotox;
