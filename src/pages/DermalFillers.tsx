import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Star, Award, Eye, Zap, ArrowRight, Users, BookOpen, Plus, Minus } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link } from 'react-router-dom';

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

  const faqItems = [
    {
      question: "What is Hyaluronic Acid and why is it used in dermal fillers?",
      answer: "Hyaluronic acid (HA) is a naturally occurring substance found in your skin, joints, and eyes. It's a powerful humectant that can hold up to 1,000 times its weight in water, making it exceptional for maintaining skin hydration and volume. In dermal fillers, HA provides natural-looking results because it integrates seamlessly with your body's existing hyaluronic acid. This biocompatible substance adds volume, smooths wrinkles, and enhances facial contours while maintaining a natural feel and appearance."
    },
    {
      question: "How does hyaluronic acid leave the body naturally?",
      answer: "Hyaluronic acid is completely biodegradable and leaves the body through natural metabolic processes. Your body's enzymes, particularly hyaluronidase, gradually break down the HA molecules over time. The broken-down components are then naturally absorbed and eliminated through your lymphatic system and kidneys. This process typically takes 12-18 months, which is why dermal filler results are temporary and require maintenance treatments. The gradual breakdown ensures a natural fade without sudden changes to your appearance."
    },
    {
      question: "How long do dermal filler makeover results last?",
      answer: "Dermal filler makeover results typically last 12-18 months, depending on the areas treated, the type of filler used, your metabolism, and lifestyle factors. Areas with more movement (like lips) may require touch-ups sooner, while deeper facial areas often maintain results longer. Our expert practitioners use premium hyaluronic acid fillers that provide long-lasting, natural-looking results with optimal longevity."
    },
    {
      question: "Is a dermal filler makeover safe?",
      answer: "Yes, when performed by qualified medical professionals using FDA-approved hyaluronic acid fillers, dermal filler makeovers are very safe. At Cosmedocs, our expert practitioners have extensive training in facial anatomy and injection techniques. We use only premium, medical-grade fillers and follow strict safety protocols. Side effects are typically minimal and temporary, including slight swelling or bruising that resolves within a few days."
    },
    {
      question: "What's the difference between dermal fillers and Botox?",
      answer: "Dermal fillers and Botox work differently to achieve complementary results. Dermal fillers add volume, restore lost facial structure, and enhance contours by filling spaces beneath the skin. Botox relaxes muscles to prevent dynamic wrinkles caused by facial expressions. A comprehensive facial rejuvenation often combines both treatments - fillers for volume restoration and structural enhancement, while Botox addresses expression lines and prevents new wrinkle formation."
    }
  ];

  const antiAgeingTreatments = [
    {
      title: "Marionette Lines",
      price: "£325/ml",
      description: "Smooth vertical lines from mouth corners to chin for a more youthful appearance.",
      features: ["Long-lasting results", "Natural appearance", "Minimal downtime"]
    },
    {
      title: "Nasolabial Folds",
      price: "£325/ml",
      description: "Reduce smile lines for a smoother transition from nose to mouth.",
      features: ["Instant results", "12-18 months duration", "Natural enhancement"]
    },
    {
      title: "Jawline (High Def/Jowls)",
      price: "£350/ml",
      description: "Define and contour jawline while addressing jowl sagging.",
      features: ["Sculpted definition", "Youthful contour", "Professional technique"]
    },
    {
      title: "Cheek Volume",
      price: "£350/ml",
      description: "Restore youthful cheek fullness and enhance facial proportions.",
      features: ["Natural volume", "Lifted appearance", "Long-lasting results"]
    },
    {
      title: "Tear Trough / Under Eye",
      price: "£425",
      description: "Address under-eye hollowing and dark circles for refreshed eyes.",
      features: ["Refreshed look", "Reduced shadows", "Expert technique required"]
    },
    {
      title: "Profhilo",
      price: "£350",
      description: "Bio-remodelling treatment for skin hydration and firmness.",
      features: ["Skin bio-remodelling", "Hydration boost", "Natural glow"]
    }
  ];

  const facialContouringTreatments = [
    {
      title: "0.5ml Lip Filler (Natural)",
      price: "£300",
      description: "Subtle lip enhancement for naturally fuller lips.",
      features: ["Natural enhancement", "Subtle volume", "Perfect proportions"]
    },
    {
      title: "1ml Lip Filler (Bold & Plump)",
      price: "£350",
      description: "More dramatic lip enhancement for fuller, plumper lips.",
      features: ["Bold results", "Dramatic volume", "Long-lasting effect"]
    },
    {
      title: "Non Surgical Nose Job",
      price: "£450",
      description: "Reshape and refine nose contours without surgery.",
      features: ["No surgery required", "Immediate results", "Reversible treatment"]
    },
    {
      title: "Forehead Filler",
      price: "£400",
      description: "Smooth forehead bumps and dips for an even surface.",
      features: ["Smooth surface", "Natural appearance", "Expert precision"]
    },
    {
      title: "Temples Hollowing",
      price: "£350/ml",
      description: "Restore temple volume for a more youthful facial shape.",
      features: ["Youthful restoration", "Natural volume", "Facial harmony"],
      link: "/temple-filler-london"
    },
    {
      title: "Redensity 1",
      price: "£250/ml",
      description: "Skin quality improvement with micro-injections.",
      features: ["Skin quality boost", "Hydration enhancement", "Natural glow"]
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

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section - Matching Face Botox Style */}
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center bg-black">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  Dermal Filler
                  <span className="block text-purple-300">Makeover</span>
                  <span className="block text-sm mt-4">Professional treatment for natural-looking results</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Expert Practitioners</span>
                  <br />
                  Full face rejuvenation with personalized treatment plans and invisible art philosophy
                </p>

                {/* Animated Tagline */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-lg md:text-xl text-gray-400 mb-8 relative"
                >
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-pulse">
                      art • science • bit of magic
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 blur-sm rounded-lg animate-pulse opacity-50"></span>
                  </span>
                </motion.p>

                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">From £350</p>
                  <p className="text-sm text-gray-300">45-60 minutes • Results last 12-18 months</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold" asChild>
                    <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Consultation</a>
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold">
                    View Price List
                  </Button>
                </div>
              </motion.div>

              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Before & After Carousel */}
        <section className="w-full py-24 bg-gray-900/30">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real Patient <span className="text-purple-300">Transformations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                      <div className="bg-gray-800/50 rounded-2xl shadow-lg overflow-hidden h-full">
                        <div className="aspect-square w-full">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <p className="text-gray-300 text-center leading-relaxed">
                            {image.caption}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12 bg-white/10 hover:bg-white/20 border-2 border-gray-600 text-white" />
                <CarouselNext className="hidden md:flex -right-12 bg-white/10 hover:bg-white/20 border-2 border-gray-600 text-white" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Treatment Details */}
        <section className="w-full py-24 bg-gray-900/50">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Treatment Details</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about our dermal filler makeover treatments
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 bg-gray-800/50 shadow-lg border-gray-700">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold mb-6 text-white">What is a Dermal Filler Makeover?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A dermal filler makeover is a comprehensive treatment plan designed to rejuvenate the entire face using a combination of dermal fillers.
                    It addresses multiple areas to create a balanced and harmonious result that enhances your natural features.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gray-800/50 shadow-lg border-gray-700">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold mb-6 text-white">What Areas Can Be Treated?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Common treatment areas include cheeks, temples, under-eye area, nasolabial folds, marionette lines, lips, and jawline.
                    The specific areas treated will depend on your individual needs and aesthetic goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-24 bg-gray-900/30">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about dermal filler makeovers and hyaluronic acid treatments
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqItems.map((faq, index) => (
                <Collapsible key={index} className="bg-gray-800/50 rounded-2xl border border-gray-700">
                  <CollapsibleTrigger className="flex w-full items-center justify-between p-6 text-left hover:bg-gray-700/30 transition-colors rounded-2xl">
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <Plus className="h-5 w-5 text-purple-400 shrink-0" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </section>

        {/* Other Dermal Filler Treatments */}
        <section className="w-full py-24 bg-gray-900/50">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Other Dermal Filler Treatments</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your natural beauty with specialized dermal filler treatments for individual facial areas
              </p>
            </div>

            {/* Consultation Info */}
            <div className="text-center mb-12">
              <Card className="inline-block bg-purple-600/20 border-purple-500/30 p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-white mb-2">Consultation</h3>
                  <p className="text-2xl font-bold text-purple-300">£50</p>
                  <p className="text-sm text-gray-300">(off any treatment)</p>
                </CardContent>
              </Card>
            </div>

            {/* Anti-Ageing Treatments */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Anti-Ageing Treatments</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {antiAgeingTreatments.map((treatment, index) => (
                  <Card key={index} className="p-6 bg-gray-800/50 border-gray-700 hover:bg-gray-700/30 transition-colors">
                    <CardContent className="p-0">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-semibold text-white">{treatment.title}</h4>
                        <span className="text-xl font-bold text-yellow-400">{treatment.price}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{treatment.description}</p>
                      <div className="space-y-2 mb-4">
                        {treatment.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 shrink-0" />
                            <span className="text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Facial Contouring Treatments */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Facial Contouring</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {facialContouringTreatments.map((treatment, index) => {
                  const CardComponent = (
                    <Card key={index} className="p-6 bg-gray-800/50 border-gray-700 hover:bg-gray-700/30 transition-colors">
                      <CardContent className="p-0">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-lg font-semibold text-white">{treatment.title}</h4>
                          <span className="text-xl font-bold text-yellow-400">{treatment.price}</span>
                        </div>
                        <p className="text-gray-300 text-sm mb-4">{treatment.description}</p>
                        <div className="space-y-2 mb-4">
                          {treatment.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 shrink-0" />
                              <span className="text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  );

                  return treatment.link ? (
                    <Link key={index} to={treatment.link} className="block hover:no-underline">
                      {CardComponent}
                    </Link>
                  ) : (
                    CardComponent
                  );
                })}
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 text-lg font-semibold">
                View All Dermal Filler Treatments
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="w-full py-24 bg-gray-900/30">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Benefits of a Dermal Filler Makeover</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the transformative benefits of our comprehensive facial rejuvenation approach
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 bg-gray-800/50 border-gray-700">
                <CardContent className="p-0 text-center">
                  <CheckCircle className="h-12 w-12 text-purple-400 mb-6 mx-auto" />
                  <h3 className="text-xl font-semibold mb-4 text-white">Full Facial Rejuvenation</h3>
                  <p className="text-gray-300 leading-relaxed">Addresses multiple areas for a comprehensive and balanced result.</p>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gray-800/50 border-gray-700">
                <CardContent className="p-0 text-center">
                  <Eye className="h-12 w-12 text-purple-400 mb-6 mx-auto" />
                  <h3 className="text-xl font-semibold mb-4 text-white">Natural-Looking Results</h3>
                  <p className="text-gray-300 leading-relaxed">Enhances your features without appearing overdone or artificial.</p>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gray-800/50 border-gray-700">
                <CardContent className="p-0 text-center">
                  <Zap className="h-12 w-12 text-purple-400 mb-6 mx-auto" />
                  <h3 className="text-xl font-semibold mb-4 text-white">Personalized Treatment Plans</h3>
                  <p className="text-gray-300 leading-relaxed">Tailored to your unique facial structure and aesthetic goals.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-24 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready for Your Transformation?</h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Book your consultation today and discover how a dermal filler makeover can help you achieve a more youthful and refreshed appearance.
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold"
                asChild
              >
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                  Book Your Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Dermal Filler Makeover London Full Face Rejuvenation Cosmedocs Natural Results Hyaluronic Acid</h2>
          <p>
            Dermal filler makeover London, full face rejuvenation, Cosmedocs, dermal fillers, facial enhancement, natural results, personalized treatment plans, expert practitioners, cheek fillers, temple fillers, under-eye fillers, nasolabial folds, marionette lines, lip fillers, jawline fillers, youthful appearance, refreshed appearance, invisible art, bold natural always your way, aesthetic medicine, minimal transformation, quiet enhancement, before after results, patient transformations, hyaluronic acid, HA fillers, biodegradable fillers, natural breakdown, lymphatic system, enzyme breakdown, hyaluronidase, facial contouring, anti-ageing treatments, consultation, professional medical treatment, FDA approved fillers, safety protocols, facial anatomy, injection techniques, premium fillers, medical grade, side effects, temporary results, maintenance treatments, facial rejuvenation, volume restoration, structural enhancement, biocompatible substance, humectant properties, skin hydration, wrinkle smoothing, facial proportions, natural integration.
          </p>
        </div>
      </div>
    </>
  );
};

export default DermalFillerMakeover;
