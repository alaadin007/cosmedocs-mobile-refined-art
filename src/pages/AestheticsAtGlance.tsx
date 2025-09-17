import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Download, BookOpen, Lightbulb, Users, Target, Award } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";

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

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen className="w-8 h-8 text-purple-400" />
            <span className="text-sm uppercase tracking-wide text-gray-400">Free Ebook</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Aesthetics at a Glance
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The complete guide to understanding beautiful skin, from cellular biology to professional treatments
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button onClick={handleShare} variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button onClick={handleDownload} variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6 text-center">
              <Lightbulb className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">3-Step</div>
              <div className="text-sm text-gray-400">Cellular Approach</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">10,000+</div>
              <div className="text-sm text-gray-400">Patients Treated</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">3 Types</div>
              <div className="text-sm text-gray-400">Skin Cells Targeted</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6 text-center">
              <Award className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">20+ Years</div>
              <div className="text-sm text-gray-400">Clinical Experience</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-white">Introduction: When Skin Gets Lazy</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-gray-300 leading-relaxed space-y-6">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl text-purple-400">Step 1: Wake Up Your Keratinocytes (Exfoliation)</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-gray-300 leading-relaxed space-y-6">
              <p>
                Your skin's surface is essentially a brick wall of cells. The bricks are keratinocytes (the main cells in the epidermis) and the mortar is natural oils and lipids. New keratinocytes form in the bottom layer and take about 4 weeks to move up and flake off. When we're young, this process is swift (around 28 days), but it slows with age – by your 50s it might take 50 days or more.
              </p>
              <p>
                As a result, dead cells pile up, making skin look rough, ashy, and "tired". To fix lazy keratinocytes, we need to exfoliate and speed up cell turnover.
              </p>
              <p>
                Chemical exfoliants like AHAs and PHAs are brilliant here. Alpha Hydroxy Acids (AHAs) – such as glycolic, lactic, and mandelic acids – work by loosening the "glue" that holds dull, dead cells on the surface. They reveal fresher skin beneath and can even soften fine lines and uneven pigment.
              </p>
              <p>
                For instance, glycolic acid (the smallest AHA) penetrates quickly and gives fast results, though it can irritate sensitive skin. Others like lactic or mandelic acid are slightly milder but still deliver the glow. Polyhydroxy Acids (PHAs), on the other hand, are like the gentler cousins. Their molecules are larger, so they don't dive as deep – meaning less risk of irritation but a slower, steady smoothing.
              </p>
              <p>
                When choosing an exfoliant, quality matters. Professional brands often label the exact percentage on the bottle – so you know you're getting an effective dose. For example, Neostrata (pioneers in AHA skincare) sells a "Glycolic Renewal Smoothing Lotion" with 10% AHA right on the front. That concentration is strong enough to retexture skin, but still safe for at-home use.
              </p>
              <p>
                Beyond acids, retinoids are another keratinocyte-whisperer. Retinoids (Vitamin A derivatives like retinol or prescription tretinoin) essentially put your skin cells on a workout regimen. They encourage keratinocytes to shed properly and renew, and even bolster the skin's barrier.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl text-pink-400">Step 2: Even Out Your Melanocytes (Pigment Control)</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-gray-300 leading-relaxed space-y-6">
              <p>
                Ever notice how a dull complexion often goes hand-in-hand with uneven tone or lingering spots? That's where your melanocytes come in. Melanocytes are the pigment-producing cells at the base of the epidermis, and they pump out melanin (the stuff that gives our skin its color).
              </p>
              <p>
                They're like tiny in-house paint factories, meant to protect skin from UV rays by tanning it. But various factors (sun exposure, hormones, age, inflammation) can send melanocytes into overdrive or misfire, resulting in hyperpigmentation, sun spots, melasma, or just a generally uneven tone.
              </p>
              <p>
                To rejuvenate, we need to both remove the over-pigmented cells (thank you again, exfoliation from Step 1) and calm down melanin production going forward. One way is through antioxidants. Topical antioxidants like Vitamin C are brightening superstars.
              </p>
              <p>
                Vitamin C (especially the potent form L-ascorbic acid) not only neutralizes skin-damaging free radicals, but also inhibits tyrosinase, an enzyme key to melanin production. In plain terms, vitamin C helps slow the melanin faucet, leading to lighter dark spots over time and a more even, radiant tone.
              </p>
              <p>
                For best results, Vitamin C likes company – notably Vitamin E and ferulic acid. When used together, these three amplify each other's effects and stability. The most famous example is SkinCeuticals C E Ferulic, a cult-favorite serum combining 15% vitamin C, 1% vitamin E, and 0.5% ferulic acid.
              </p>
              <p>
                Next in our pigment-fighting arsenal are targeted lighteners. The most famous (and sometimes infamous) is hydroquinone. Hydroquinone is a prescription-strength ingredient that actually blocks the enzyme tyrosinase quite effectively, so it halts melanin production in problem areas.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl text-blue-400">Step 3: Firm Up Your Fibroblasts (Collagen Stimulation)</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-gray-300 leading-relaxed space-y-6">
              <p>
                Now that the surface is smooth and glowing, let's talk about the supporting framework of your skin. Beneath the epidermis lies the dermis, and its star players are cells called fibroblasts. If keratinocytes are the brick-makers of the epidermis, fibroblasts are the construction workers building the support beams in the dermis – those beams being collagen and elastin fibers.
              </p>
              <p>
                Fibroblasts churn out collagen, elastin, and other matrix components that give skin its firmness, elasticity, and structure. When we're young, fibroblasts are active and our skin is bouncy and thick with collagen (think of a baby's plump cheeks). But as we age (and with cumulative sun damage), fibroblasts get slow and "lazy" too.
              </p>
              <p>
                One way we already mentioned: retinoids. Yes, our hardworking retinol/tretinoin from Step 1 also flexes its muscle down in the dermis. Retinoids have decades of research proving they stimulate fibroblasts to synthesize new collagen fibers and prevent collagen breakdown.
              </p>
              <p>
                Another fantastic fibroblast stimulator is microneedling (also known as collagen induction therapy). This procedure uses a device studded with tiny needles to create microscopic punctures in the skin. Those micro-injuries trigger the skin's natural healing response, flooding the area with growth factors that activate fibroblasts to produce fresh collagen and elastin.
              </p>
              <p>
                Speaking of injections, a newer kid on the block for skin quality is polynucleotide injections (sometimes marketed under names like Nucleofill, or Rejuran in Asia). Polynucleotides are basically DNA fragments that are injected into the skin to stimulate tissue regeneration.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Beyond Skincare */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-br from-green-900/20 to-teal-900/20 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-3xl text-green-400">Beyond Skincare: Movement & Volume – The Botox and Fillers</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-gray-300 leading-relaxed space-y-6">
              <p>
                We've covered the skin's cellular trifecta, but there's more to "anti-aging" or aesthetic rejuvenation than just skin texture and glow. As we age (or even in our late 20s and 30s), two other things often happen: expression lines start etching in, and volume in the face starts diminishing.
              </p>
              <p>
                These aren't issues you can completely fix with creams or serum – this is where cosmetic procedures like Botox and dermal fillers come into play. Let's break it down in a simple way: Botox is for movement-caused wrinkles, and Fillers are for volume loss or static folds.
              </p>
              <p>
                Botox (and similar brands like Dysport, Xeomin, etc.) is a purified neurotoxin (botulinum toxin type A) that, when injected in tiny amounts into specific facial muscles, causes those muscles to relax. Why relax a muscle? Because many wrinkles – think forehead lines, frown lines between the brows, crow's feet by the eyes – are caused by repeated facial expressions folding the skin.
              </p>
              <p>
                Dermal Fillers (most commonly made of hyaluronic acid, a gel-like substance) are used to restore lost volume or fill in deeper lines/folds. As we age, we lose fat in our faces (especially in the cheeks, temples, under-eyes) and also bone recedes a bit. The youthful "triangle" of the face (cheeks high and chin/jaw tight) flips – things can look a bit sunken or droopy.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-white">Conclusion: Your Simple Skin Blueprint</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-gray-300 leading-relaxed space-y-6">
              <p>
                We've covered a lot of ground, from cell turnover to injectables, but it all boils down to a simple philosophy: lazy skin can be coached into active, glowing skin with the right nudges. First, we kickstart the keratinocytes to renew the surface (exfoliate those dead cells and speed up the cycle). Next, we rein in the melanocytes to brighten the tone (fade the excess pigment and protect against new spots). Then, we energize the fibroblasts to rebuild firmness (boost that collagen for smoother, bouncier skin).
              </p>
              <p>
                These are our three foundational steps for skin health and beauty – think of it as resurfacing, rebalancing, and re-firming from the inside out. And for those pesky extras that skincare alone can't fix (the deep furrows or volume loss), we have safe and effective cosmetic tweaks like Botox and fillers to refine the final picture.
              </p>
              <p>
                The best part? This isn't an overnight makeover or a one-time deal – it's a sustainable routine. Skin is a living organ; treat it well and it will respond. By regularly exfoliating (but not overdoing it), you keep signaling your skin to behave youthfully. By using antioxidants and sun protection daily, you prevent a lot of the "damage" that leads to dullness and spots in the first place.
              </p>
              <p>
                Remember, consistency is key. A lazy skin can't be transformed in a single day, just like you can't get six-pack abs from one gym session. But give it a few weeks for that cell turnover to show results, a few months for collagen changes, and you'll be amazed.
              </p>
              <p>
                In a final witty note, think of your rejuvenated skin like a team: Keratinocytes are the offense (they score the glow by renewing faster), Melanocytes are defense (keeping the tone clear and bright), Fibroblasts are the midfield (holding everything together with collagen support). And Botox/fillers? They're like specialized trainers you call in for specific drills when needed.
              </p>
              <p className="text-center text-xl font-semibold text-purple-400 mt-8">
                Your skin's best days are ahead of it, not behind!
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Wake Up Your Skin?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a consultation with our aesthetic experts to create your personalized skin rejuvenation plan
              </p>
              <Button 
                onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
              >
                Book Consultation
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>Comprehensive Guide to Aesthetic Medicine and Skin Care</h2>
        <p>
          This comprehensive ebook covers the essential principles of aesthetic medicine and skin care, focusing on evidence-based treatments for skin rejuvenation. Learn about the three-step cellular approach to beautiful skin, targeting keratinocytes for exfoliation, melanocytes for pigment control, and fibroblasts for collagen stimulation. Discover professional treatments including chemical peels, microneedling, Botox, and dermal fillers. Our aesthetic experts at Cosmedocs share decades of clinical experience in this detailed guide to achieving naturally beautiful, healthy skin through scientific skincare approaches.
        </p>
      </div>
    </div>
  );
};

export default AestheticsAtGlance;