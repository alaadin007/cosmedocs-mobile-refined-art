import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Star, Award, Eye, Zap, ArrowRight, Users, BookOpen } from 'lucide-react';
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";

const DermalFillerMakeover = () => {
  const seoData = generateSEOMetadata(
    "Dermal Filler Makeover London | Full Face Rejuvenation | Cosmedocs",
    "Expert dermal filler makeover in London for full face rejuvenation. Achieve natural-looking results with our personalized treatment plans. Book your consultation today.",
    "/dermal-filler-makeover"
  );

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/01999999-9999-9999-9999-999999999999.png",
      alt: "Dermal filler makeover before and after",
      caption: "Comprehensive facial rejuvenation with dermal fillers"
    },
    {
      src: "/lovable-uploads/11111111-1111-1111-1111-111111111111.png",
      alt: "Dermal filler makeover results",
      caption: "Natural-looking results achieved with expert technique"
    },
    {
      src: "/lovable-uploads/22222222-2222-2222-2222-222222222222.png",
      alt: "Dermal filler makeover transformation",
      caption: "Subtle yet significant transformation with dermal fillers"
    },
    {
      src: "/lovable-uploads/33333333-3333-3333-3333-333333333333.png",
      alt: "Dermal filler makeover side profile",
      caption: "Enhanced facial contours and profile with dermal fillers"
    },
    {
      src: "/lovable-uploads/44444444-4444-4444-4444-444444444444.png",
      alt: "Dermal filler makeover close up",
      caption: "Close-up view of dermal filler makeover results"
    },
    {
      src: "/lovable-uploads/55555555-5555-5555-5555-555555555555.png",
      alt: "Dermal filler makeover full face",
      caption: "Full face rejuvenation with dermal fillers"
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
                  Dermal Filler Makeover
                  <span className="block text-primary mt-2">Full Face Rejuvenation</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Achieve a natural-looking, rejuvenated appearance with our expert dermal filler makeover in London.
                  Personalized treatment plans for comprehensive facial enhancement.
                </p>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Expert Practitioners</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    <span>Natural Results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>Personalized Plans</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-16">
          <div className="page-container">
            <h2 className="text-3xl font-bold mb-8 text-center">Real Patient Results</h2>
            <BeforeAfterImageViewer images={beforeAfterImages} />
          </div>
        </section>

        {/* Treatment Details */}
        <section className="py-16 bg-accent/30">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Treatment Details</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold mb-4">What is a Dermal Filler Makeover?</h3>
                    <p className="text-muted-foreground">
                      A dermal filler makeover is a comprehensive treatment plan designed to rejuvenate the entire face using a combination of dermal fillers.
                      It addresses multiple areas to create a balanced and harmonious result.
                    </p>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold mb-4">What Areas Can Be Treated?</h3>
                    <p className="text-muted-foreground">
                      Common treatment areas include cheeks, temples, under-eye area, nasolabial folds, marionette lines, lips, and jawline.
                      The specific areas treated will depend on your individual needs and goals.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Benefits of a Dermal Filler Makeover</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <CheckCircle className="h-6 w-6 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Full Facial Rejuvenation</h3>
                    <p className="text-muted-foreground">Addresses multiple areas for a comprehensive result.</p>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardContent className="p-0">
                    <CheckCircle className="h-6 w-6 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Natural-Looking Results</h3>
                    <p className="text-muted-foreground">Enhances your features without appearing overdone.</p>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardContent className="p-0">
                    <CheckCircle className="h-6 w-6 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Personalized Treatment Plans</h3>
                    <p className="text-muted-foreground">Tailored to your unique facial structure and goals.</p>
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
              <h2 className="text-3xl font-bold mb-6">Ready for a Full Face Rejuvenation?</h2>
              <p className="text-muted-foreground mb-8">
                Book your consultation today and discover how a dermal filler makeover can help you achieve a more youthful and refreshed appearance.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book Your Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Dermal Filler Makeover London Full Face Rejuvenation Cosmedocs</h2>
          <p>
            Dermal filler makeover London, full face rejuvenation, Cosmedocs, dermal fillers, facial enhancement, natural results, personalized treatment plans, expert practitioners, cheek fillers, temple fillers, under-eye fillers, nasolabial folds, marionette lines, lip fillers, jawline fillers, youthful appearance, refreshed appearance.
          </p>
        </div>
      </div>
    </>
  );
};

export default DermalFillerMakeover;
