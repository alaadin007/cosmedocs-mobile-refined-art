import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Star, Award, Eye, Zap } from 'lucide-react';
import PopularTreatments from '@/components/PopularTreatments';
import { generateSEOMetadata } from '@/utils/seo';

const AdvancedConsultation = () => {
  const seoData = generateSEOMetadata(
    "Advanced Aesthetic Consultation with Dr. Ahmed Haq | Cosmedocs",
    "Experience millimeter-precision aesthetic refinements with Dr. Ahmed Haq. Expert consultations for subtle facial optimization, addressing temporal hollowing, lip corner enhancement, and volumizing techniques. 15+ years training physicians in advanced aesthetic medicine.",
    "/advanced-consultation"
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Advanced Aesthetic Consultation",
    "provider": {
      "@type": "Physician",
      "name": "Dr. Ahmed Haq",
      "specialty": "Aesthetic Medicine",
      "yearsOfExperience": "15+"
    },
    "description": "Millimeter-precision aesthetic refinements and facial optimization consultations",
    "serviceType": "Aesthetic Medicine Consultation",
    "areaServed": "UK",
    "availableLanguage": "English",
    "offers": {
      "@type": "Offer",
      "description": "Advanced consultation for facial optimization and aesthetic refinements"
    }
  };

  const refinementTechniques = [
    {
      title: "Lip Corner Lifting",
      description: "Precise millimeter adjustments to lift downturned mouth corners, creating a more youthful and approachable expression"
    },
    {
      title: "Temporal Hollowing Correction",
      description: "Addressing temporal depression that occurs with age, restoring natural facial volume and contour"
    },
    {
      title: "Chin Volumization",
      description: "Strategic placement to enhance chin projection and balance facial proportions"
    },
    {
      title: "Jawline Definition",
      description: "Subtle contouring to create defined jawlines without obvious enhancement"
    },
    {
      title: "Perioral Enhancement",
      description: "Addressing lip lines and mouth area aging with precision techniques"
    },
    {
      title: "Midface Restoration",
      description: "Reversing midface volume loss that causes sagging and jowl formation"
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
                  Advanced Aesthetic Consultation
                  <span className="block text-primary mt-2">with Dr. Ahmed Haq</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Experience the superior edge of millimeter-precision aesthetic medicine. 
                  Subtle refinements that restore youthfulness to your face without anyone noticing.
                </p>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>15+ Years Training Physicians</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    <span>Millimeter Precision</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>Invisible Art</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 bg-accent/30">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">The Science of Subtle Enhancement</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold mb-4">Why Millimeter Changes Matter</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The influx of mass industry growth in aesthetic medicine means more practitioners than ever. 
                      While this increases accessibility, the expertise required for truly natural results cannot be rushed.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      What an experienced physician can achieve with one syringe is vastly different from someone 
                      with five years experience. Millimeter adjustments require years of training and understanding 
                      of facial anatomy.
                    </p>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold mb-4">The Apple Analogy</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Consider an apple: the skin represents your facial skin (1-2mm thick), while the core 
                      represents your underlying fat, muscle, and bone structure. When aging occurs, you lose 
                      volume in the "core" - not just skin thickness.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      This is why radio frequency and ultrasound devices, which only tighten skin, cannot address 
                      the root cause of facial aging. True rejuvenation requires restoring lost volume.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Refinement Techniques */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Millimeter-Precision Refinements</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {refinementTechniques.map((technique, index) => (
                  <motion.div
                    key={technique.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <h3 className="text-lg font-semibold mb-3">{technique.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{technique.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Age Range & Expectations */}
        <section className="py-16 bg-accent/30">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Optimal Treatment Window</h2>
              <Card className="p-8">
                <CardContent className="p-0 text-center">
                  <div className="flex items-center justify-center mb-6">
                    <Clock className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">30-60 Years: The Golden Age for Optimization</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    If you come to me within the 30-60 age range, I will be able to help you achieve optimal results. 
                    After 60, treatment becomes more challenging and depends on your facial structure and lifestyle factors 
                    such as sun exposure over your lifetime.
                  </p>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>The Face Sinks, Then Sags:</strong> By stopping the sinking process through strategic volume restoration, 
                      sagging reverses naturally. We can reverse mild to moderate jowls (grade one) effectively.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Investment in Quality */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Investment in Excellence</h2>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-0">
                  <Star className="h-12 w-12 text-primary mx-auto mb-6" />
                  <blockquote className="text-xl font-medium mb-6">
                    "Good aesthetics is not cheap, and cheap aesthetics is not good."
                  </blockquote>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    While industry pricing is typically per milliliter (based on manufacturing), our rejuvenation 
                    plans focus on the small bits required for optimal results. Trying to save money in aesthetic 
                    medicine often costs more in the long run.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="font-semibold">Precision Planning</p>
                      <p className="text-sm text-muted-foreground">Tailored to your needs</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="font-semibold">Expert Technique</p>
                      <p className="text-sm text-muted-foreground">15+ years experience</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="font-semibold">Natural Results</p>
                      <p className="text-sm text-muted-foreground">Invisible enhancement</p>
                    </div>
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
              <h2 className="text-3xl font-bold mb-6">Ready for Your Consultation?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Experience the Cosmedocs difference with Dr. Ahmed Haq's millimeter-precision approach 
                to aesthetic medicine. Bold. Natural. Always Your Way.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book Your Advanced Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Advanced Aesthetic Medicine Consultation London Birmingham Manchester Cardiff</h2>
          <p>
            Dr Ahmed Haq aesthetic medicine consultation advanced techniques millimeter precision facial optimization 
            temporal hollowing lip corner enhancement chin volumization expert aesthetic physician 15 years experience 
            training doctors aesthetic medicine london birmingham manchester cardiff cosmedocs natural results 
            invisible enhancement facial rejuvenation volume restoration jowl reversal midface lifting perioral 
            enhancement jawline definition aesthetic consultation booking expert aesthetic physician advanced training 
            natural facial enhancement subtle aesthetic improvements millimeter adjustments facial volume restoration 
            age reversal techniques 30-60 optimal treatment window facial anatomy expertise aesthetic medicine science 
            volume loss correction sagging reversal expert consultation aesthetic medicine training physician education 
            advanced aesthetic techniques natural facial rejuvenation invisible art aesthetic philosophy millimeter 
            precision medicine facial optimization expert consultation aesthetic medicine london aesthetic physician 
            training advanced techniques facial enhancement natural results cosmedocs aesthetic clinic dr ahmed haq 
            consultation booking aesthetic medicine expertise facial rejuvenation techniques advanced consultation 
            millimeter precision aesthetic enhancement natural facial optimization volume restoration techniques 
            expert aesthetic physician consultation facial anatomy expertise aesthetic medicine london birmingham 
            manchester cardiff advanced aesthetic consultation booking natural facial enhancement techniques.
          </p>
        </div>

        <PopularTreatments 
          title="Complementary Treatments"
          className="bg-black"
        />
      </div>
    </>
  );
};

export default AdvancedConsultation;
