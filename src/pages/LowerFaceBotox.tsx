import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Star, Award, Eye, Zap, ArrowRight, Users, Heart, Shield, Target } from 'lucide-react';
import PopularTreatments from '@/components/PopularTreatments';
import { generateSEOMetadata } from '@/utils/seo';

const LowerFaceBotox = () => {
  const seoData = generateSEOMetadata(
    "Lower Face Botox | Jawline, DAO, Mentalis | Dr. Ahmed Haq | London",
    "Expert lower face Botox treatments by Dr. Ahmed Haq in London. Targets jawline, DAO muscle, and mentalis crease for natural rejuvenation. Book your consultation today.",
    "/lower-face-botox"
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Lower Face Botox Treatment",
    "provider": {
      "@type": "Physician",
      "name": "Dr. Ahmed Haq",
      "specialty": "Aesthetic Medicine",
      "yearsOfExperience": "15+"
    },
    "description": "Expert Botox treatments for lower face rejuvenation including jawline, DAO muscle, and mentalis crease",
    "serviceType": "Botox Treatment",
    "areaServed": ["London", "Birmingham", "Manchester", "Cardiff"],
    "availableLanguage": "English",
    "offers": {
      "@type": "Offer",
      "description": "Comprehensive lower face Botox treatment for natural rejuvenation"
    }
  };

  const treatmentAreas = [
    {
      icon: Target,
      title: "DAO Muscle (Depressor Anguli Oris)",
      description: "Targets muscles that pull down the corners of the mouth",
      benefit: "Lifts downturned mouth corners for a more youthful appearance"
    },
    {
      icon: Shield,
      title: "Mentalis Crease",
      description: "Addresses horizontal lines and dimpling over the chin area",
      benefit: "Smooths chin texture and reduces orange peel appearance"
    },
    {
      icon: Zap,
      title: "Platysma Muscle",
      description: "Relaxes the large neck muscle that creates neck bands",
      benefit: "Defines jawline and reduces appearance of neck aging"
    },
    {
      icon: Heart,
      title: "Jawline Definition",
      description: "Strategic placement to enhance facial contours",
      benefit: "Creates sharper, more defined jawline without surgery"
    }
  ];

  const beforeAfterPoints = [
    "Lifted mouth corners instead of downturned expression",
    "Smooth chin surface without dimpling or creases",
    "Defined jawline with reduced jowling appearance",
    "Reduced neck bands and platysma prominence",
    "Overall more youthful lower face expression",
    "Balanced facial animation between upper and lower face"
  ];

  const whyChoosePoints = [
    {
      title: "15+ Years Expertise",
      description: "Dr. Ahmed Haq's extensive experience in advanced Botox techniques"
    },
    {
      title: "Comprehensive Approach",
      description: "Addresses multiple muscle groups for complete lower face rejuvenation"
    },
    {
      title: "Natural Results",
      description: "Maintains facial expression while improving contours"
    },
    {
      title: "Advanced Training Available",
      description: "We train medical professionals in these advanced techniques"
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
                  Lower Face Botox
                  <span className="block text-primary mt-2">Jawline, DAO, Mentalis</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Dr. Ahmed Haq's expert Botox treatments targeting the jawline, DAO muscle, 
                  and mentalis crease for natural lower face rejuvenation and enhanced facial harmony.
                </p>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>15+ Years Expertise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>30-45 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    <span>Natural Results</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Lower Face Problem */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Lower Face Botox is Essential</h2>
              <Card className="p-8 mb-8">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">The Unbalanced Face Problem</h3>
                      <p className="text-muted-foreground mb-4">
                        Many clients have been receiving upper face Botox for years, but their lower 
                        face remains hyper-animated. This creates an unnatural imbalance where the 
                        upper face is relaxed while the lower face shows excessive movement.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Mentalis crease over the chin from habitual muscle use</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Downturned mouth corners creating sad expression</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Horizontal lines along jawline from muscle tension</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">The Childhood Expression Return</h3>
                      <p className="text-muted-foreground mb-4">
                        Interestingly, the lower face expressions we treat are often the same ones 
                        children use when sad - you'll see 2-4 year olds making these exact facial 
                        movements. After our teens and twenties, these expressions return, often 
                        related to strong platysma muscle activity.
                      </p>
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <p className="text-sm font-medium mb-2">The Solution:</p>
                        <p className="text-sm text-muted-foreground">
                          Strategic lower face Botox creates balance, symmetry, and natural results 
                          by harmonizing upper and lower facial animation.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-16 bg-accent/30">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Comprehensive Treatment Areas</h2>
              <div className="grid md:grid-cols-2 gap-8">
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
                        <area.icon className="h-8 w-8 text-primary mb-4" />
                        <h3 className="text-lg font-semibold mb-3">{area.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{area.description}</p>
                        <div className="bg-accent/50 p-3 rounded text-xs">
                          <span className="font-medium">Benefit: </span>
                          <span className="text-muted-foreground">{area.benefit}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Expectations */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What to Expect After Treatment</h2>
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Star className="h-5 w-5 text-primary" />
                        Visible Improvements
                      </h3>
                      <ul className="space-y-3">
                        {beforeAfterPoints.map((point, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Investment & Value</h3>
                      <div className="space-y-4">
                        <div className="bg-primary/10 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-2">Custom Pricing</div>
                          <p className="text-sm text-muted-foreground">
                            Pricing varies based on individual needs and the extent of treatment required.
                            We tailor each treatment plan to achieve optimal, natural-looking results.
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          <strong>Why Custom Pricing?</strong> Because every face is unique. We focus on
                          harmonizing your features for a balanced and rejuvenated appearance.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Dr. Ahmed Haq */}
        <section className="py-16 bg-accent/30">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Dr. Ahmed Haq</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {whyChoosePoints.map((point, index) => (
                  <Card key={index} className="p-6">
                    <CardContent className="p-0">
                      <h3 className="text-lg font-semibold mb-3">{point.title}</h3>
                      <p className="text-muted-foreground text-sm">{point.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professional Training */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Professional Training Available</h2>
              <Card className="p-8">
                <CardContent className="p-0">
                  <Users className="h-12 w-12 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Learn Advanced Lower Face Techniques</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    For medical professionals looking to master advanced lower face Botox techniques, 
                    we offer comprehensive training through harleystreetinstitute.com and one-to-one 
                    sessions with Dr. Ahmed Haq.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline">
                      Online Training Courses
                    </Button>
                    <Button variant="outline">
                      Book One-to-One Training
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/10">
          <div className="page-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready for Balanced, Natural Results?</h2>
              <p className="text-muted-foreground mb-8">
                Transform your lower face with Dr. Ahmed Haq's expert Botox technique. 
                Follow @Cosmedocs on Instagram to see these procedures in action.
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
          <h2>Lower Face Botox Jawline DAO Muscle Mentalis London Birmingham Manchester Cardiff</h2>
          <p>
            Dr Ahmed Haq lower face botox jawline dao muscle depressor anguli oris mentalis crease 
            platysma muscle botox london birmingham manchester cardiff cosmedocs advanced botox 
            techniques lower face rejuvenation facial balance symmetry natural results aesthetic 
            medicine expert consultation booking custom pricing high dose botox large muscle platysma 
            facial animation balance upper face lower face harmony aesthetic enhancement invisible art 
            philosophy millimeter precision medicine facial optimization expert consultation aesthetic 
            medicine london birmingham manchester cardiff advanced botox consultation booking natural 
            facial enhancement techniques lower face botox treatment expert aesthetic physician 
            consultation facial anatomy expertise aesthetic medicine training physician education 
            advanced aesthetic techniques natural results cosmedocs aesthetic clinic dr ahmed haq 
            consultation booking aesthetic medicine expertise facial rejuvenation techniques advanced 
            consultation millimeter precision aesthetic enhancement natural facial optimization volume 
            restoration techniques expert aesthetic physician consultation facial anatomy expertise 
            aesthetic medicine london birmingham manchester cardiff advanced aesthetic consultation 
            booking natural facial enhancement techniques lower face botox treatment professional 
            training harley street institute online courses one to one training medical professionals 
            aesthetic medicine education advanced botox technique dao muscle mentalis platysma treatment 
            expert aesthetic physician lower face botox treatment natural results cosmedocs.
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

export default LowerFaceBotox;
