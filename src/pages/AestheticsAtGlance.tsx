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
  "Aesthetics at a Glance | Beautiful Skin | Cosmedocs",
  "Discover the science behind beautiful skin. Learn about lazy skin syndrome, cell rejuvenation and professional treatments. Free ebook download.",
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
          </div>
        </div>

        {/* Supermodel Case Study - Treatment Journey Style */}
        <section className="py-20 bg-gradient-to-r from-amber-50/5 to-yellow-50/5 mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-light mb-6 text-amber-400">Supermodel Case Study</h2>
                <p className="text-amber-200 max-w-3xl mx-auto leading-relaxed">
                  Witness the complete transformation process of a supermodel over one year of treatment. 
                  This comprehensive case study showcases the precision and artistry of our aesthetic approach combining skin rejuvenation, wrinkle treatment, and volume restoration.
                </p>
              </motion.div>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Before Treatment */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-amber-900/30 to-red-900/20 rounded-xl overflow-hidden shadow-xl border border-amber-500/30">
                  <div className="p-6 border-b border-amber-500/30">
                    <div className="bg-amber-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Target className="text-amber-300" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-amber-300">Initial Assessment</h3>
                    <p className="text-amber-200 text-sm">Before any treatment began</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                      <img 
                        src={supermodelBefore} 
                        alt="Initial consultation showing natural aging signs"
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-sm text-amber-200 leading-relaxed">
                      Initial consultation showing natural aging signs and areas for enhancement. Even supermodels benefit from professional aesthetic care.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-amber-500/10">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-1 rounded-full">Baseline Assessment</span>
                      <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-1 rounded-full">Natural Aging</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Progress - 6 Months */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/20 rounded-xl overflow-hidden shadow-xl border border-blue-500/30">
                  <div className="p-6 border-b border-blue-500/30">
                    <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="text-blue-300" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-blue-300">Mid-Treatment</h3>
                    <p className="text-blue-200 text-sm">6 months progress review</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                      <img 
                        src={supermodelProgress}
                        alt="Mid-treatment progress - 6 months in"
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-sm text-blue-200 leading-relaxed">
                      Mid-treatment progress showing significant improvement in skin quality, texture, and overall facial harmony after 6 months of treatment.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-blue-500/10">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">Progressive Results</span>
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">6 Month Mark</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Final Results 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 rounded-xl overflow-hidden shadow-xl border border-green-500/30">
                  <div className="p-6 border-b border-green-500/30">
                    <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Award className="text-green-300" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-green-300">Final Results</h3>
                    <p className="text-green-200 text-sm">One year transformation</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                      <img 
                        src={supermodelAfter1}
                        alt="Final results - enhanced volume and contour"
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-sm text-green-200 leading-relaxed">
                      Final results showing enhanced volume and contour restoration. Natural-looking enhancement that maintains facial harmony and authenticity.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-500/10">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">Volume Restored</span>
                      <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">Natural Results</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Final Results 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 rounded-xl overflow-hidden shadow-xl border border-purple-500/30">
                  <div className="p-6 border-b border-purple-500/30">
                    <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="text-purple-300" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-purple-300">Aesthetic Perfection</h3>
                    <p className="text-purple-200 text-sm">Complete transformation</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                      <img 
                        src={supermodelAfter2}
                        alt="Natural enhancement maintaining facial harmony"
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-sm text-purple-200 leading-relaxed">
                      Natural enhancement maintaining perfect facial harmony. The epitome of invisible art - bold, natural, and always authentically beautiful.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-purple-500/10">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">Invisible Art</span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">Perfect Harmony</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Treatment Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="bg-gradient-to-r from-amber-900/10 to-yellow-900/10 rounded-2xl p-8 border border-amber-500/20">
                <div className="text-center mb-8">
                  <div className="bg-amber-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Award className="text-amber-400" size={32} />
                  </div>
                  <h3 className="text-3xl font-light mb-4 text-amber-400">Complete Transformation Summary</h3>
                  <p className="text-amber-200 max-w-2xl mx-auto">
                    One year journey showcasing the power of comprehensive aesthetic medicine combining skin rejuvenation, wrinkle treatment, and volume restoration
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-amber-500/10">
                    <h4 className="text-xl font-semibold mb-4 flex items-center text-amber-300">
                      <Sparkles className="text-amber-400 mr-3" size={20} />
                      Skin Quality
                    </h4>
                    <div className="space-y-2 text-sm text-amber-200">
                      <p>• Enhanced texture and luminosity</p>
                      <p>• Improved hydration levels</p>
                      <p>• Reduced fine lines and wrinkles</p>
                      <p>• Overall skin rejuvenation</p>
                    </div>
                  </div>
                  
                  <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-amber-500/10">
                    <h4 className="text-xl font-semibold mb-4 flex items-center text-amber-300">
                      <Heart className="text-amber-400 mr-3" size={20} />
                      Volume Restoration
                    </h4>
                    <div className="space-y-2 text-sm text-amber-200">
                      <p>• Strategic volume enhancement</p>
                      <p>• Natural facial contouring</p>
                      <p>• Maintained facial proportions</p>
                      <p>• Age-appropriate results</p>
                    </div>
                  </div>
                  
                  <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-amber-500/10">
                    <h4 className="text-xl font-semibold mb-4 flex items-center text-amber-300">
                      <Award className="text-amber-400 mr-3" size={20} />
                      Our Philosophy
                    </h4>
                    <div className="space-y-2 text-sm text-amber-200">
                      <p>• Invisible art aesthetic</p>
                      <p>• Bold yet natural results</p>
                      <p>• Always authentically you</p>
                      <p>• Transformation that speaks</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 pb-12">
          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-gray-900/50 to-black/30 border-gray-500/30">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Skin?</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  This guide is just the beginning. While good skincare can work wonders, sometimes you need professional help to achieve your aesthetic goals. At Cosmedocs, our expert practitioners combine the latest scientific knowledge with artistic precision to help you achieve the beautiful, natural-looking results you deserve.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => window.open('tel:02071830250', '_self')}
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                    onClick={handleShare}
                  >
                    Share This Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Comprehensive Aesthetic Medicine Guide</h2>
          <p>This comprehensive guide to aesthetics covers everything from lazy skin syndrome to professional cosmetic treatments. Understanding how your skin works at a cellular level is crucial for maintaining healthy, beautiful skin throughout your life.</p>
          
          <h3>Understanding Lazy Skin Syndrome</h3>
          <p>Lazy skin syndrome occurs when your skin becomes dependent on heavy products and stops functioning optimally on its own. This phenomenon is well-documented in dermatological literature and affects millions of people worldwide who over-moisturize or use occlusive products that prevent natural skin renewal.</p>
          
          <h3>The Three-Step Cellular Approach</h3>
          <p>Our evidence-based three-step approach targets the three main cell types in your skin: keratinocytes for surface renewal, melanocytes for even pigmentation, and fibroblasts for structural support. This scientifically-backed method has helped thousands of patients achieve healthier, more radiant skin.</p>
          
          <h3>Professional Treatment Options</h3>
          <p>While home skincare is important, professional treatments like dermal fillers, Botox, and advanced skin rejuvenation procedures can address concerns that topical products cannot. Our clinic has performed over 1 million injections and treated more than 30,000 patients with outstanding results.</p>
          
          <h3>Supermodel Case Study Results</h3>
          <p>The supermodel case study featured in this guide demonstrates the remarkable results possible with comprehensive aesthetic treatment. Over the course of one year, combining skin quality improvement, volume restoration, and wrinkle reduction, this client achieved natural-looking enhancement that maintained perfect facial harmony.</p>
          
          <h3>Evidence-Based Aesthetic Medicine</h3>
          <p>All treatments mentioned in this guide are backed by extensive clinical research and performed by qualified medical professionals. From AHA exfoliation to hyaluronic acid fillers, every recommendation is based on peer-reviewed studies and years of clinical experience.</p>
          
          <h3>The Cosmedocs Philosophy</h3>
          <p>Our aesthetics is invisible art - bold, natural, and always your way. We believe in transformation that speaks without saying a word, creating results that enhance your natural beauty rather than changing who you are.</p>
        </div>
      </div>
    </div>
  );
};

export default AestheticsAtGlance;