
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Star, Award, Eye, Zap, ArrowRight, Users, BookOpen } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const DermalFillerMakeover = () => {
  const seoData = generateSEOMetadata(
    "Dermal Filler Makeover London | Full Face Rejuvenation | Cosmedocs",
    "Expert dermal filler makeover in London for full face rejuvenation. Achieve natural-looking results with our personalized treatment plans. Book your consultation today.",
    "/dermal-filler-makeover"
  );

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/64ee3f9e-7616-464d-962f-0a5ba656a82c.png",
      alt: "Dermal filler makeover before and after front view",
      caption: "Full face rejuvenation with dermal fillers - front view transformation"
    },
    {
      src: "/lovable-uploads/7d9d621d-c4ee-4c23-82fb-56ee04ef333f.png",
      alt: "Dermal filler makeover before and after side profile",
      caption: "Enhanced facial contours and profile definition"
    },
    {
      src: "/lovable-uploads/a4df5f90-dda5-48a2-9bd2-19728aa1a275.png",
      alt: "Dermal filler makeover cheek enhancement",
      caption: "Natural cheek enhancement and facial contouring"
    },
    {
      src: "/lovable-uploads/1beab5af-7f27-4505-83ec-b0fab7ef68cc.png",
      alt: "Dermal filler makeover jawline definition",
      caption: "Defined jawline and improved facial structure"
    },
    {
      src: "/lovable-uploads/e3020fef-05e0-4022-b981-0fe5dc9a2c53.png",
      alt: "Dermal filler makeover side profile enhancement",
      caption: "Elegant side profile enhancement with dermal fillers"
    },
    {
      src: "/lovable-uploads/462ae463-011b-428b-9685-1e13d2d061d9.png",
      alt: "Dermal filler makeover male jawline",
      caption: "Masculine jawline enhancement for male clients"
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
        {/* Hero Section - Full Width Style */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                  Dermal Filler
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Makeover
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Transform your appearance with our expert dermal filler makeover treatments. 
                  Achieve natural, rejuvenated results with personalized treatment plans.
                </p>

                <p className="text-lg text-blue-400 italic">
                  Our aesthetics is invisible art • Bold • Natural • Always Your Way
                </p>

                <div className="flex flex-wrap justify-center gap-8 text-white/80">
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-blue-400" />
                    <span className="text-lg">Expert Practitioners</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Eye className="h-6 w-6 text-purple-400" />
                    <span className="text-lg">Natural Results</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-blue-400" />
                    <span className="text-lg">Personalized Plans</span>
                  </div>
                </div>

                <div className="pt-8">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full"
                  >
                    Book Your Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
        </section>

        {/* Before & After Carousel */}
        <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Real Patient <span className="text-blue-600">Transformations</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See the incredible results achieved through our expert dermal filler makeover treatments
              </p>
            </motion.div>

            <div className="relative w-full">
              <Carousel 
                className="w-full max-w-6xl mx-auto"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {beforeAfterImages.map((image, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
                        <div className="aspect-square w-full">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <p className="text-gray-600 text-center leading-relaxed">
                            {image.caption}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 hover:bg-white border-2 border-gray-200" />
                <CarouselNext className="hidden md:flex -right-12 bg-white/90 hover:bg-white border-2 border-gray-200" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Treatment Details */}
        <section className="w-full py-24 bg-gray-50">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Treatment Details</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to know about our dermal filler makeover treatments
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 bg-white shadow-lg">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">What is a Dermal Filler Makeover?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A dermal filler makeover is a comprehensive treatment plan designed to rejuvenate the entire face using a combination of dermal fillers.
                    It addresses multiple areas to create a balanced and harmonious result that enhances your natural features.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 bg-white shadow-lg">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">What Areas Can Be Treated?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Common treatment areas include cheeks, temples, under-eye area, nasolabial folds, marionette lines, lips, and jawline.
                    The specific areas treated will depend on your individual needs and aesthetic goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="w-full py-24 bg-white">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits of a Dermal Filler Makeover</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the transformative benefits of our comprehensive facial rejuvenation approach
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 bg-gray-50 border-0">
                <CardContent className="p-0 text-center">
                  <CheckCircle className="h-12 w-12 text-blue-600 mb-6 mx-auto" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Full Facial Rejuvenation</h3>
                  <p className="text-gray-600 leading-relaxed">Addresses multiple areas for a comprehensive and balanced result.</p>
                </CardContent>
              </Card>
              
              <Card className="p-8 bg-gray-50 border-0">
                <CardContent className="p-0 text-center">
                  <Eye className="h-12 w-12 text-purple-600 mb-6 mx-auto" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Natural-Looking Results</h3>
                  <p className="text-gray-600 leading-relaxed">Enhances your features without appearing overdone or artificial.</p>
                </CardContent>
              </Card>
              
              <Card className="p-8 bg-gray-50 border-0">
                <CardContent className="p-0 text-center">
                  <Zap className="h-12 w-12 text-blue-600 mb-6 mx-auto" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Personalized Treatment Plans</h3>
                  <p className="text-gray-600 leading-relaxed">Tailored to your unique facial structure and aesthetic goals.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-24 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready for Your Transformation?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Book your consultation today and discover how a dermal filler makeover can help you achieve a more youthful and refreshed appearance.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold"
              >
                Book Your Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Dermal Filler Makeover London Full Face Rejuvenation Cosmedocs Natural Results</h2>
          <p>
            Dermal filler makeover London, full face rejuvenation, Cosmedocs, dermal fillers, facial enhancement, natural results, personalized treatment plans, expert practitioners, cheek fillers, temple fillers, under-eye fillers, nasolabial folds, marionette lines, lip fillers, jawline fillers, youthful appearance, refreshed appearance, invisible art, bold natural always your way, aesthetic medicine, minimal transformation, quiet enhancement, before after results, patient transformations.
          </p>
        </div>
      </div>
    </>
  );
};

export default DermalFillerMakeover;
