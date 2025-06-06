
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Star, Award, Eye, Zap, ArrowRight, Users, Heart, Shield, Target, AlertCircle } from 'lucide-react';
import PopularTreatments from '@/components/PopularTreatments';
import { generateSEOMetadata } from '@/App';

const LowerFaceBotox = () => {
  const seoData = generateSEOMetadata(
    "Lower Face Botox | Advanced Lower Face Treatment | Dr. Ahmed Haq | London",
    "Expert lower face Botox treatment by Dr. Ahmed Haq. Balance hyper-animated lower face expressions including mentalis crease, DAO muscle, and jawline tension. Complete facial harmony with advanced techniques in London.",
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
    "description": "Advanced lower face Botox for balanced facial animation including mentalis crease and DAO muscle treatment",
    "serviceType": "Lower Face Botox Injection",
    "areaServed": ["London", "Birmingham", "Manchester", "Cardiff"],
    "availableLanguage": "English",
    "offers": {
      "@type": "Offer",
      "price": "150-250",
      "priceCurrency": "GBP",
      "description": "Lower face Botox treatment from basic to comprehensive"
    }
  };

  const problemAreas = [
    {
      icon: Target,
      title: "Mentalis Crease",
      location: "Over the chin area",
      description: "Horizontal lines and dimpling that appear over the chin from habitual muscle use",
      solution: "Strategic Botox placement to relax the mentalis muscle"
    },
    {
      icon: Heart,
      title: "DAO Muscle (Depressor Anguli Oris)", 
      location: "Corners of the mouth",
      description: "Lines pointing the corners of the lips downward, creating a sad expression",
      solution: "Targeted injections to lift downturned mouth corners"
    },
    {
      icon: Shield,
      title: "Jawline Tension Lines",
      location: "Along the jawline",
      description: "Horizontal lines following the jawline parallel, from jaw clenching or tension",
      solution: "Muscle relaxation to smooth jawline appearance"
    },
    {
      icon: Zap,
      title: "Platysma Bands",
      location: "Neck area",
      description: "Related to strong platysma muscle causing neck bands and facial imbalance",
      solution: "May require Nefertiti Botox facelift technique"
    }
  ];

  const whyLowerFaceMatters = [
    "Most clients have been receiving upper face Botox for years",
    "Lower face remains hyper-animated creating facial imbalance",
    "Upper face is relaxed while lower face shows excessive movement",
    "Creates unnatural appearance without lower face treatment",
    "Balance and symmetry are essential for natural results",
    "Small investment with significant aesthetic impact"
  ];

  const childhoodConnection = [
    "Lower face expressions mirror those children use when sad",
    "2-4 year olds commonly make these facial movements",
    "We stop using these expressions during teens and twenties",
    "Expressions return later in life, often stronger",
    "May be related to increased platysma muscle activity",
    "Treating these restores youthful facial balance"
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
                  <span className="block text-primary mt-2">Complete Facial Balance & Harmony</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Dr. Ahmed Haq's expert approach to lower face Botox treatment. Addressing the 
                  hyper-animated lower face that many long-term Botox clients experience while 
                  creating natural balance with their relaxed upper face.
                </p>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>From £150</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>15-30 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    <span>Natural Balance</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Unbalanced Face Problem */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">The Hidden Problem: Unbalanced Face Animation</h2>
              <Card className="p-8 mb-8">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <AlertCircle className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-4">The Decade-Long Botox Paradox</h3>
                      <p className="text-muted-foreground mb-4">
                        Most people we see have been having Botox for almost a decade, but many 
                        have never had their lower face injected. This creates poor aesthetic 
                        management where the upper face is beautifully relaxed while the lower 
                        face remains hyper-animated.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {whyLowerFaceMatters.map((point, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <Heart className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-4">Why Doctors Skip Lower Face</h3>
                      <p className="text-muted-foreground mb-4">
                        Upper face Botox is the first course we teach doctors and medical 
                        professionals. Lower face is considered more advanced, but that doesn't 
                        mean practitioners shouldn't start once they're comfortable with upper 
                        face techniques.
                      </p>
                      <div className="bg-accent/50 p-4 rounded-lg">
                        <p className="text-sm font-medium mb-2">The Reality:</p>
                        <p className="text-sm text-muted-foreground">
                          A tiny bit of extra cost for lower face Botox goes far in creating 
                          balance, symmetry, and natural results. It's vital for complete 
                          facial harmony.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Problem Areas */}
        <section className="py-16 bg-accent/30">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Common Lower Face Problem Areas</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {problemAreas.map((area, index) => (
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
                        <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                        <p className="text-sm text-primary font-medium mb-3">{area.location}</p>
                        <p className="text-muted-foreground text-sm mb-4">{area.description}</p>
                        <div className="bg-primary/10 p-3 rounded text-xs">
                          <span className="font-medium">Treatment: </span>
                          <span className="text-muted-foreground">{area.solution}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Childhood Connection */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">The Fascinating Childhood Connection</h2>
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        When We First Learn These Expressions
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Interestingly, the lower face expressions we treat are the same ones 
                        children use when they're sad. You'll see 2-4 year olds making these 
                        exact facial movements - the mentalis crease, downturned mouth corners, 
                        and jawline tension.
                      </p>
                      <ul className="space-y-2 text-sm">
                        {childhoodConnection.map((point, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">The Pattern Recognition</h3>
                      <p className="text-muted-foreground mb-4">
                        After our teens and twenties, these expressions return - often stronger 
                        than before. Sometimes this is related to increased platysma muscle 
                        activity, which is where our Nefertiti Botox facelift becomes invaluable.
                      </p>
                      <div className="space-y-4">
                        <div className="bg-accent/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Self-Assessment Check:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Can you see a line over your chin? (Mentalis crease)</li>
                            <li>• Do corners of your lips point downward?</li>
                            <li>• Are there horizontal lines along your jawline?</li>
                          </ul>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          If you can make these expressions and see lines, you use those 
                          muscles often and would benefit from lower face Botox.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment Investment */}
        <section className="py-16 bg-accent/30">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Treatment Investment & Value</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary mb-2">£150</div>
                    <h3 className="font-semibold mb-3">Basic Lower Face</h3>
                    <p className="text-sm text-muted-foreground">
                      Essential areas including mentalis crease and DAO muscle for facial balance.
                    </p>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary mb-2">£200</div>
                    <h3 className="font-semibold mb-3">Comprehensive</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete lower face treatment including jawline tension areas.
                    </p>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary mb-2">£250</div>
                    <h3 className="font-semibold mb-3">Nefertiti Lift</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced technique including platysma muscle for complete facial rejuvenation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Dr. Ahmed Haq */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Advanced Lower Face Expertise</h2>
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">15+ Years of Experience</h3>
                      <p className="text-muted-foreground mb-4">
                        Dr. Ahmed Haq has been training physicians in advanced Botox techniques 
                        for over 15 years. Lower face treatment requires understanding of complex 
                        muscle interactions and careful dosing.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Advanced anatomical knowledge</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Precision injection techniques</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Natural-looking results</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Complete Facial Approach</h3>
                      <p className="text-muted-foreground mb-4">
                        We don't just treat individual areas - we consider your entire facial 
                        animation to create harmony between upper and lower face movements. 
                        This comprehensive approach sets our results apart.
                      </p>
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <p className="text-sm font-medium mb-2">Our Philosophy:</p>
                        <p className="text-sm text-muted-foreground">
                          "Bold • Natural • Always Your Way" - achieving balance through 
                          minimal intervention with maximum impact.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 bg-primary/10">
          <div className="page-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready for Complete Facial Balance?</h2>
              <p className="text-muted-foreground mb-8">
                Don't let an unbalanced face hold back your confidence. Complete your Botox 
                journey with expert lower face treatment. For advanced cases, ask about our 
                Nefertiti Botox facelift technique.
              </p>
              <div className="flex justify-center gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book Lower Face Consultation
                </Button>
                <Button size="lg" variant="outline">
                  Learn About Nefertiti Lift <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Follow @Cosmedocs on Instagram to see these techniques in action
              </p>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Lower Face Botox Treatment Mentalis Crease DAO Muscle Jawline Botox London Birmingham Manchester Cardiff</h2>
          <p>
            Dr Ahmed Haq lower face botox treatment mentalis crease dao muscle depressor anguli oris 
            jawline botox tension lines platysma muscle london birmingham manchester cardiff cosmedocs 
            advanced botox techniques facial balance symmetry natural results aesthetic medicine expert 
            consultation booking lower face animation hyper animated face upper face botox imbalance 
            decade long botox clients facial harmony aesthetic enhancement invisible art philosophy 
            millimeter precision medicine facial optimization expert consultation aesthetic medicine 
            london birmingham manchester cardiff advanced botox consultation booking natural facial 
            enhancement techniques lower face botox treatment expert aesthetic physician consultation 
            facial anatomy expertise aesthetic medicine training physician education advanced aesthetic 
            techniques natural results cosmedocs aesthetic clinic dr ahmed haq consultation booking 
            aesthetic medicine expertise facial rejuvenation techniques advanced consultation millimeter 
            precision aesthetic enhancement natural facial optimization lower face treatment techniques 
            expert aesthetic physician consultation facial anatomy expertise aesthetic medicine london 
            birmingham manchester cardiff advanced aesthetic consultation booking natural facial 
            enhancement techniques lower face botox mentalis dao muscle platysma treatment childhood 
            expressions facial patterns muscle memory aesthetic medicine london birmingham manchester 
            cardiff expert physician consultation facial balance harmony natural results cosmedocs.
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
