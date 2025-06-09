
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Clock, Star } from 'lucide-react';
import PopularTreatments from '@/components/PopularTreatments';
import { generateSEOMetadata } from '@/utils/seo';

const MedicalAnalBleaching = () => {
  const seoData = generateSEOMetadata(
    "Medical Anal Bleaching London | Expert Hyperpigmentation Treatment",
    "Safe and effective medical anal bleaching in London. Expert treatment for hyperpigmentation with guaranteed results. Book your consultation at our discreet Harley Street clinic.",
    "/medical-anal-bleaching"
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Medical Anal Bleaching",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Cosmedocs",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Harley Street",
        "addressLocality": "London",
        "addressCountry": "UK"
      }
    },
    "description": "Safe and effective medical anal bleaching treatment for hyperpigmentation",
    "serviceType": "Cosmetic Dermatology",
    "areaServed": "UK"
  };

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
                  Medical Anal Bleaching
                  <span className="block text-primary mt-2">Professional Hyperpigmentation Treatment</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Safe, effective, and discreet medical treatment for anal hyperpigmentation. 
                  Our expert physicians use advanced techniques for natural-looking results.
                </p>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Medical Grade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>45 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    <span>Discreet Treatment</span>
                  </div>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Do something here
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Overview */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Treatment Overview</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold mb-4">What is Medical Anal Bleaching?</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Medical anal bleaching is a safe, professional treatment designed to reduce hyperpigmentation 
                      in the anal area. This common cosmetic concern affects many individuals and can be effectively 
                      addressed through our advanced medical techniques.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Our aesthetics is invisible art - creating natural-looking results that enhance your confidence 
                      while maintaining complete discretion throughout the treatment process.
                    </p>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Cosmedocs?</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">Expert medical professionals</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">Complete privacy and discretion</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">Medical-grade treatments</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">Natural-looking results</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">Aftercare support included</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/10">
          <div className="page-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Take the first step towards addressing your concerns with our professional, 
                discreet medical anal bleaching treatment. Bold. Natural. Always Your Way.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Do something here
              </Button>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Medical Anal Bleaching London Birmingham Manchester Cardiff</h2>
          <p>
            Medical anal bleaching London hyperpigmentation treatment safe effective discreet Harley Street 
            clinic professional physicians advanced techniques natural results cosmedocs aesthetic medicine 
            anal lightening treatment medical grade bleaching anal skin discoloration treatment intimate 
            area lightening London birmingham manchester cardiff anal hyperpigmentation removal professional 
            anal bleaching clinic medical anal lightening treatment safe anal bleaching London expert 
            physicians intimate skin treatment anal area enhancement cosmetic dermatology anal region 
            treatment professional medical bleaching anal skin tone correction intimate area aesthetics 
            medical anal enhancement treatment discreet intimate treatment London anal skin lightening 
            medical hyperpigmentation treatment anal area cosmetic treatment professional intimate care 
            anal bleaching specialists London medical intimate enhancement anal skin improvement treatment 
            safe medical anal lightening cosmetic anal treatment professional anal aesthetics medical 
            grade anal bleaching intimate skin enhancement London anal hyperpigmentation specialists 
            medical intimate treatment professional anal skin care anal area medical treatment cosmedocs 
            anal bleaching clinic London Birmingham Manchester Cardiff professional medical anal treatment.
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

export default MedicalAnalBleaching;
