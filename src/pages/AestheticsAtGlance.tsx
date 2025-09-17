import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Download, BookOpen, Lightbulb, Users, Target, Award, Sparkles, Zap, Heart } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import heroBanner from "@/assets/aesthetics-hero-banner.jpg";
import supermodelBefore from "@/assets/supermodel-before.jpg";
import supermodelProgress from "@/assets/supermodel-progress.jpg";
import supermodelAfter1 from "@/assets/supermodel-after-1.jpg";
import supermodelAfter2 from "@/assets/supermodel-after-2.jpg";

const seoData = generateSEOMetadata(
  "Aesthetics at a Glance: The Complete Guide to Beautiful Skin | Cosmedocs",
  "Discover the science behind beautiful skin with our comprehensive ebook. Learn about lazy skin syndrome, cell rejuvenation, and professional treatments. Free download from Cosmedocs aesthetic experts.",
  "/aesthetics-at-glance"
);

const AestheticsAtGlance = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Aesthetics at a Glance - Cosmedocs',
        text: 'Discover the science behind beautiful skin with this comprehensive guide',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="aesthetics guide, skin care, lazy skin syndrome, dermatology, cosmedocs ebook, anti-aging, skincare routine, professional treatments" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content="Cosmedocs" />
        <meta property="article:published_time" content="2024-01-01" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            "name": "Aesthetics at a Glance",
            "description": seoData.description,
            "author": {
              "@type": "Organization",
              "name": "Cosmedocs"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Cosmedocs"
            },
            "url": seoData.canonical,
            "datePublished": "2024-01-01",
            "inLanguage": "en",
            "genre": "Medical/Health"
          })}
        </script>
      </Helmet>

      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-96 md:h-[500px] overflow-hidden"
      >
        <img
          src={heroBanner}
          alt="Aesthetic Medicine Guide - Beautiful Skin"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-6 h-6 text-purple-400" />
                <span className="text-sm uppercase tracking-wide text-gray-300">Free Ebook</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Aesthetics at a Glance
              </h1>
              <p className="text-lg text-gray-200 mb-6">
                The complete guide to understanding beautiful skin, from cellular biology to professional treatments
              </p>
              <div className="flex items-center gap-4">
                <Button onClick={handleShare} variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button onClick={handleDownload} variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-purple-500/30 hover:border-purple-400/50 transition-colors">
            <CardContent className="p-6 text-center">
              <Sparkles className="w-10 h-10 text-purple-300 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">3-Step</div>
              <div className="text-sm text-purple-200">Cellular Approach</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border-pink-500/30 hover:border-pink-400/50 transition-colors">
            <CardContent className="p-6 text-center">
              <Users className="w-10 h-10 text-pink-300 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">30,000+</div>
              <div className="text-sm text-pink-200">Patients Treated</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-500/30 hover:border-blue-400/50 transition-colors">
            <CardContent className="p-6 text-center">
              <Zap className="w-10 h-10 text-blue-300 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">3 Types</div>
              <div className="text-sm text-blue-200">Skin Cells Targeted</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-green-500/30 hover:border-green-400/50 transition-colors">
            <CardContent className="p-6 text-center">
              <Heart className="w-10 h-10 text-green-300 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">1M+</div>
              <div className="text-sm text-green-200">Injections</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Content Grid - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Introduction: When Skin Gets Lazy</CardTitle>
                </CardHeader>
                <CardContent className="p-6 text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Have you noticed how your fingers become wrinkly in the pool? It's not just waterlogging – it's your body actually responding. Immersing in water triggers nerves to constrict blood vessels, slowing the delivery of moisture and nutrients to the skin, which causes that pruney look. In a similar way, our skin can become "lazy" in its daily upkeep if it always gets things handed to it.
                  </p>
                  <p>
                    Overusing heavy moisturizers, for example, can form an occlusive film on the skin and slow down its natural renewal. Dermatologists call this "lazy skin syndrome" – signs include dullness, dryness, congestion and even breakouts, all because old cells hang around on the surface instead of shedding.
                  </p>
                  <p>
                    But don't worry: just like a good workout can get a lazy person back in shape, the right skincare steps can "wake up" your skin. In this eBook, we'll introduce a simple 3-step approach targeting the three key cell types in your skin – keratinocytes, melanocytes, and fibroblasts – plus a bonus step for deeper fixes. It's everything you need for healthy, glowing skin, explained in plain English (with a dash of wit) for the everyday layperson. Let's dive in!
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-purple-500/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-purple-500/20 rounded-full">
                      <Sparkles className="w-6 h-6 text-purple-300" />
                    </div>
                    <CardTitle className="text-2xl text-purple-300">Step 1: Wake Up Your Keratinocytes</CardTitle>
                  </div>
                  <p className="text-purple-200 text-sm">(Exfoliation)</p>
                </CardHeader>
                <CardContent className="p-6 text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Your skin's surface is essentially a brick wall of cells. The bricks are keratinocytes (the main cells in the epidermis) and the mortar is natural oils and lipids. New keratinocytes form in the bottom layer and take about 4 weeks to move up and flake off. When we're young, this process is swift (around 28 days), but it slows with age – by your 50s it might take 50 days or more.
                  </p>
                  <p>
                    As a result, dead cells pile up, making skin look rough, ashy, and "tired". To fix lazy keratinocytes, we need to exfoliate and speed up cell turnover.
                  </p>
                  <p>
                    Chemical exfoliants like AHAs and PHAs are brilliant here. Alpha Hydroxy Acids (AHAs) – such as glycolic, lactic, and mandelic acids – work by loosening the "glue" that holds dull, dead cells on the surface. They reveal fresher skin beneath and can even soften fine lines and uneven pigment.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-500/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-500/20 rounded-full">
                      <Zap className="w-6 h-6 text-blue-300" />
                    </div>
                    <CardTitle className="text-2xl text-blue-300">Step 3: Firm Up Your Fibroblasts</CardTitle>
                  </div>
                  <p className="text-blue-200 text-sm">(Collagen Stimulation)</p>
                </CardHeader>
                <CardContent className="p-6 text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Now that the surface is smooth and glowing, let's talk about the supporting framework of your skin. Beneath the epidermis lies the dermis, and its star players are cells called fibroblasts. If keratinocytes are the brick-makers of the epidermis, fibroblasts are the construction workers building the support beams in the dermis – those beams being collagen and elastin fibers.
                  </p>
                  <p>
                    Fibroblasts churn out collagen, elastin, and other matrix components that give skin its firmness, elasticity, and structure. When we're young, fibroblasts are active and our skin is bouncy and thick with collagen (think of a baby's plump cheeks). But as we age (and with cumulative sun damage), fibroblasts get slow and "lazy" too.
                  </p>
                  <p>
                    One way we already mentioned: retinoids. Yes, our hardworking retinol/tretinoin from Step 1 also flexes its muscle down in the dermis. Retinoids have decades of research proving they stimulate fibroblasts to synthesize new collagen fibers and prevent collagen breakdown.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border-pink-500/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-pink-500/20 rounded-full">
                      <Heart className="w-6 h-6 text-pink-300" />
                    </div>
                    <CardTitle className="text-2xl text-pink-300">Step 2: Even Out Your Melanocytes</CardTitle>
                  </div>
                  <p className="text-pink-200 text-sm">(Pigment Control)</p>
                </CardHeader>
                <CardContent className="p-6 text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Ever notice how a dull complexion often goes hand-in-hand with uneven tone or lingering spots? That's where your melanocytes come in. Melanocytes are the pigment-producing cells at the base of the epidermis, and they pump out melanin (the stuff that gives our skin its color).
                  </p>
                  <p>
                    They're like tiny in-house paint factories, meant to protect skin from UV rays by tanning it. But various factors (sun exposure, hormones, age, inflammation) can send melanocytes into overdrive or misfire, resulting in hyperpigmentation, sun spots, melasma, or just a generally uneven tone.
                  </p>
                  <p>
                    To rejuvenate, we need to both remove the over-pigmented cells (thank you again, exfoliation from Step 1) and calm down melanin production going forward. One way is through antioxidants. Topical antioxidants like Vitamin C are brightening superstars.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Beyond Skincare */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="bg-gradient-to-br from-green-900/20 to-teal-900/20 border-green-500/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-400">Beyond Skincare: Movement & Volume</CardTitle>
                  <p className="text-green-200 text-sm">The Botox and Fillers</p>
                </CardHeader>
                <CardContent className="p-6 text-gray-300 leading-relaxed space-y-4">
                  <p>
                    We've covered the skin's cellular trifecta, but there's more to "anti-aging" or aesthetic rejuvenation than just skin texture and glow. As we age (or even in our late 20s and 30s), two other things often happen: expression lines start etching in, and volume in the face starts diminishing.
                  </p>
                  <p>
                    These aren't issues you can completely fix with creams or serum – this is where cosmetic procedures like Botox and dermal fillers come into play. Let's break it down in a simple way: Botox is for movement-caused wrinkles, and Fillers are for volume loss or static folds.
                  </p>
                  <p>
                    Botox (and similar brands like Dysport, Xeomin, etc.) is a purified neurotoxin (botulinum toxin type A) that, when injected in tiny amounts into specific facial muscles, causes those muscles to relax.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Supermodel Case Study */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-500/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-400">Supermodel Case Study</CardTitle>
                  <p className="text-amber-200 text-sm">One Year Journey: Skin, Wrinkles & Volume</p>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Follow the remarkable transformation of a supermodel over one year of treatment. This case study demonstrates the power of our comprehensive approach to skin rejuvenation, combining advanced treatments for optimal results.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <img 
                        src={supermodelBefore} 
                        alt="Before treatment" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <p className="text-xs text-amber-200 text-center">Before Treatment</p>
                    </div>
                    <div className="space-y-2">
                      <img 
                        src={supermodelProgress} 
                        alt="Mid-treatment progress" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <p className="text-xs text-amber-200 text-center">6 Month Progress</p>
                    </div>
                    <div className="space-y-2">
                      <img 
                        src={supermodelAfter1} 
                        alt="After treatment - result 1" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <p className="text-xs text-amber-200 text-center">12 Month Results</p>
                    </div>
                    <div className="space-y-2">
                      <img 
                        src={supermodelAfter2} 
                        alt="After treatment - result 2" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <p className="text-xs text-amber-200 text-center">Final Results</p>
                    </div>
                  </div>

                  <div className="bg-amber-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-300 mb-2">Treatment Summary:</h4>
                    <ul className="text-sm text-amber-100 space-y-1">
                      <li>• Comprehensive skin rejuvenation protocol</li>
                      <li>• Strategic volume restoration</li>
                      <li>• Advanced wrinkle reduction techniques</li>
                      <li>• Personalized maintenance program</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-white">Conclusion: Your Simple Skin Blueprint</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-gray-300 leading-relaxed space-y-6">
              <p>
                In this guide, we've walked through the simple 3-step approach to healthier, more vibrant skin by targeting the three key cellular players: keratinocytes (with exfoliation), melanocytes (with brightening), and fibroblasts (with collagen stimulation). We've also touched on the role of professional treatments like Botox and fillers for addressing movement and volume concerns that topical products alone can't tackle.
              </p>
              <p>
                Remember, skin improvement is a journey, not a sprint. Start with one step at a time, be consistent, and give your skin time to respond. Most importantly, always consult with a qualified dermatologist or aesthetic practitioner before starting any new treatment regimen, especially if you have sensitive skin or specific concerns.
              </p>
              <p>
                At Cosmedocs, our aesthetics is invisible art – bold, natural, always your way. We believe in transformation that speaks without saying a word, helping you achieve your most confident, radiant self through evidence-based treatments and personalized care.
              </p>
              
              <div className="bg-purple-900/30 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Ready to Start Your Journey?</h3>
                <p className="text-gray-300 mb-4">
                  Book a consultation with our expert team to create your personalized treatment plan.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Book Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Hidden SEO Content */}
        <div className="hidden">
          <p>Discover the comprehensive guide to aesthetic medicine and skin care with Cosmedocs' expert insights. Our aesthetics at a glance ebook covers everything from lazy skin syndrome to advanced cellular rejuvenation techniques. Learn about keratinocytes, melanocytes, and fibroblasts - the three key cell types that determine your skin's health and appearance. This professional guide includes detailed information about chemical exfoliation with AHAs and PHAs, pigment control with vitamin C and antioxidants, and collagen stimulation through retinoids and professional treatments. Understanding the science behind beautiful skin helps you make informed decisions about your skincare routine and aesthetic treatments. From microneedling and polynucleotide injections to Botox and dermal fillers, we explain when and why each treatment is beneficial. Our evidence-based approach ensures you receive the most effective treatments for your specific skin concerns. Whether you're dealing with fine lines, hyperpigmentation, acne scars, or volume loss, this guide provides the knowledge you need to achieve your aesthetic goals safely and effectively.</p>
        </div>
      </div>
    </div>
  );
};

export default AestheticsAtGlance;