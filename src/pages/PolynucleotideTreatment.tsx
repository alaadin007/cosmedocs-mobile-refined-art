import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, Star, CheckCircle, Syringe, Heart, Zap, Users } from "lucide-react";
import PopularTreatments from "@/components/PopularTreatments";
import AutoLinkedText from "@/components/AutoLinkedText";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";

const PolynucleotideTreatment = () => {
  const seoData = generateSEOMetadata(
    "Polynucleotide Treatment London | Regenerative DNA Skin Therapy",
    "Advanced Polynucleotide DNA therapy for skin regeneration, anti-aging, and hair restoration. Harness the healing power of natural DNA fragments for visible skin transformation.",
    "/polynucleotide-treatment"
  );

  const treatmentStats = [
    { label: "Anaesthetic", value: "Local numbing cream", icon: Syringe },
    { label: "Treatment Time", value: "20 minutes", icon: Clock },
    { label: "Results Duration", value: "6-9 months improvement", icon: Star },
    { label: "Recovery Time", value: "Immediate return to work", icon: Heart },
    { label: "Risk Level", value: "Minimal side effects", icon: Shield },
    { label: "Sessions Needed", value: "3 sessions recommended", icon: Zap }
  ];

  const treatmentAreas = [
    "Under-eye rejuvenation",
    "Fine lines and wrinkles",
    "Skin texture improvement",
    "Hair loss and thinning",
    "Neck and décolletage",
    "Hand rejuvenation",
    "Acne scarring",
    "Skin elasticity",
    "Collagen stimulation",
    "Facial contouring",
    "Scalp health",
    "Dark circles"
  ];

  const idealCandidates = [
    "Early signs of aging",
    "Collagen deficiency concerns",
    "Sun-damaged skin",
    "Sagging skin areas",
    "Hair loss conditions",
    "Dry, damaged skin",
    "Acne scarring",
    "Uneven skin tone"
  ];

  const results = [
    "Deep skin nourishment",
    "Age-defying radiance",
    "Enhanced collagen production",
    "Improved skin firmness",
    "Hair follicle regeneration",
    "Reduced fine lines",
    "Better skin texture",
    "Natural glow restoration"
  ];

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/dd86f9a2-6530-4c94-8776-c6ede86882bb.png",
      alt: "Before and after polynucleotide treatment - lip rejuvenation",
      caption: "Polynucleotide treatment showing enhanced lip texture and reduced fine lines around the mouth area - 3 months result"
    },
    {
      src: "/lovable-uploads/e328b8fe-f278-418a-b7d5-fa2992d038e0.png", 
      alt: "Before and after polynucleotide treatment - under eye rejuvenation",
      caption: "Under-eye polynucleotide therapy demonstrating dramatic reduction in dark circles and improved skin texture"
    },
    {
      src: "/lovable-uploads/7bef47b3-8c8f-42e2-b301-cff179a7c8bf.png",
      alt: "Before and after polynucleotide treatment - eyebrow area improvement",
      caption: "Eyebrow area polynucleotide treatment showing improved skin texture and reduced fine lines"
    },
    {
      src: "/lovable-uploads/159173ee-5192-416f-af16-0b7d13fce18d.png",
      alt: "Before and after polynucleotide treatment - hair restoration results",
      caption: "Scalp polynucleotide treatment showing significant hair density improvement and follicle regeneration after treatment course"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Polynucleotide Treatment",
    "alternateName": "DNA Regenerative Therapy",
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
    "description": "Advanced polynucleotide DNA therapy for skin regeneration, anti-aging, and hair restoration using natural DNA fragments",
    "serviceType": "Aesthetic Medicine",
    "areaServed": ["London", "Birmingham", "Manchester", "Cardiff"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Polynucleotide Treatment Options",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Single Polynucleotide Treatment",
            "price": "450",
            "priceCurrency": "GBP"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "3-Session Polynucleotide Package",
            "price": "1200",
            "priceCurrency": "GBP"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="polynucleotide treatment London, DNA therapy, skin regeneration, anti-aging, hair restoration, collagen stimulation, aesthetic medicine, Harley Street" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cosmedocs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-cosmedocs-black via-gray-900 to-cosmedocs-black">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white"
              >
                <Badge className="bg-yellow-400 text-cosmedocs-black mb-6 text-sm px-4 py-2">
                  Regenerative DNA Therapy
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Polynucleotide Treatment
                  <span className="block text-yellow-400 mt-2">
                    Harness the Healing Power of DNA
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  <AutoLinkedText>
                    Revolutionary regenerative medicine for skin, eyes, and hair using natural DNA fragments. 
                    Our aesthetics is invisible art - transformation that speaks without saying a word. 
                    Experience the power of cellular renewal with our advanced polynucleotide therapy.
                  </AutoLinkedText>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://med.as.me/schedule/0cc7d92b" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4">
                      Book Consultation
                    </Button>
                  </a>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cosmedocs-black">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Stats */}
        <section className="py-16 bg-background">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {treatmentStats.map((stat, index) => (
                  <Card key={stat.label} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="bg-yellow-400/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <stat.icon className="h-8 w-8 text-yellow-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                      <p className="text-muted-foreground">{stat.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Are Polynucleotides */}
        <section className="py-16 bg-gradient-to-br from-cosmedocs-black via-gray-900 to-cosmedocs-black text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">What Are Polynucleotides?</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    <AutoLinkedText>
                      Polynucleotide treatment is transforming skincare in the UK, offering a natural way 
                      to refresh and restore your skin. Backed by over 30 years of research, it uses DNA 
                      fragments from salmon or trout to work with your body's natural processes.
                    </AutoLinkedText>
                  </p>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    <AutoLinkedText>
                      This revolutionary treatment repairs and revitalizes the skin by supporting cellular 
                      regeneration, collagen production, and natural healing. Our aesthetics is invisible 
                      art - creating transformations that enhance your natural beauty boldly and naturally, 
                      always your way.
                    </AutoLinkedText>
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-yellow-400" />
                      <span>Natural DNA fragments from marine sources</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-yellow-400" />
                      <span>30+ years of scientific research</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-yellow-400" />
                      <span>Biocompatible and safe for all skin types</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-yellow-400/10 rounded-lg p-8">
                    <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Polynucleotides are injected into target areas where they stimulate cellular repair, 
                      boost collagen synthesis, and enhance skin hydration. This gentle, non-invasive approach 
                      offers superior results compared to chemical peels or laser therapy, restoring your 
                      skin's natural glow and elasticity from within.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-16 bg-background">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Treatment Areas</h2>
                <p className="text-muted-foreground text-lg">
                  Comprehensive regenerative therapy for multiple areas of concern
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {treatmentAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                          <span className="font-medium">{area}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Targeted Treatments */}
        <section className="py-16 bg-primary/10">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Targeted Polynucleotide Treatments</h2>
                <p className="text-muted-foreground text-lg">
                  Specialized applications for specific aesthetic concerns
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">Under-Eye Rejuvenation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Target the delicate under-eye area to reduce dark circles, minimize puffiness, 
                      and smooth fine lines for a more youthful appearance.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm">Reduces dark circles</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm">Minimizes puffiness</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm">Improves skin texture</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">Skin Booster Treatment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Enhance your skin's natural repair mechanisms to reduce fine lines, 
                      improve texture, and stimulate collagen production.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm">Stimulates collagen production</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm">Deep hydration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm">Reduces fine lines</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">Hair Loss Treatment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Stimulate hair growth and restore scalp health for those experiencing 
                      hair thinning or loss with natural regenerative therapy.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm">Hair follicle regeneration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm">Improves scalp health</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm">Reduces hair loss</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Before & After Results */}
        <section className="py-16 bg-gradient-to-br from-cosmedocs-black via-gray-900 to-cosmedocs-black text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Before & After Results</h2>
                <p className="text-gray-300 text-lg">
                  Witness the transformative power of polynucleotide DNA therapy. Our aesthetics is invisible art - 
                  creating natural, bold transformations that speak without saying a word.
                </p>
              </div>
              <BeforeAfterGrid images={beforeAfterImages} />
              <div className="text-center mt-8">
                <p className="text-gray-400 text-sm">
                  Individual results may vary. Results shown after 3 treatment sessions spaced 3 weeks apart. 
                  Full effects visible in 6-9 months.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gradient-to-br from-cosmedocs-black via-gray-900 to-cosmedocs-black text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-8">Investment in Your Transformation</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Single Treatment</h3>
                    <div className="text-4xl font-bold text-yellow-400 mb-4">£450</div>
                    <p className="text-gray-300 mb-6">
                      Perfect for first-time clients or maintenance sessions
                    </p>
                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                      Book Single Session
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/50 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-yellow-400 text-cosmedocs-black">Most Popular</Badge>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">3-Session Package</h3>
                    <div className="text-4xl font-bold text-yellow-400 mb-2">£1,200</div>
                    <div className="text-sm text-green-400 mb-4">Save £150</div>
                    <p className="text-gray-300 mb-6">
                      Recommended course for optimal and lasting results
                    </p>
                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                      Book Package Deal
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <p className="text-gray-300 mt-8 text-sm">
                ⭐ Sessions spaced 3 weeks apart • Full effects visible in 6-9 months • 
                Combines beautifully with other treatments
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground text-lg">
                  Everything you need to know about polynucleotide treatment
                </p>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Is Polynucleotide Treatment safe?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <AutoLinkedText>
                      Yes, Polynucleotide Treatment is considered safe and is suitable for all skin types. 
                      It uses biocompatible and naturally occurring DNA fragments, which minimizes the risk 
                      of adverse allergic reactions. At Cosmedocs, treatments are performed by highly trained 
                      professionals to ensure both safety and optimal results. Our aesthetics is invisible 
                      art - safe, natural transformation.
                    </AutoLinkedText>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    How many sessions are typically required?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <AutoLinkedText>
                      While noticeable improvements can be seen after one session, a series of 2-3 sessions 
                      spaced a few weeks apart is recommended for optimal and long-lasting results. 
                      Maintenance sessions can be scheduled every few months to maintain your transformation.
                    </AutoLinkedText>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    What areas can be treated with Polynucleotide Injections?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <AutoLinkedText>
                      Commonly treated areas include the under-eye area for puffiness and dark circles, 
                      as well as the face for comprehensive facial rejuvenation treatments. Additionally, 
                      the neck is treated for tightening, the hands for hydration, and the scalp for 
                      addressing hair thinning or hair loss.
                    </AutoLinkedText>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    How long does each session last?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Each session typically lasts about 20 minutes, though this can vary depending on the 
                    treatment area. Our efficient approach ensures minimal disruption to your day.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    What can I expect after the treatment?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <AutoLinkedText>
                      You may experience mild redness or swelling post-treatment, which usually subsides 
                      within a few hours to a day. However, there is minimal downtime, allowing you to 
                      resume most daily activities immediately. This aligns with our philosophy of bold, 
                      natural results that don't disrupt your lifestyle.
                    </AutoLinkedText>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Is there any aftercare needed?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <AutoLinkedText>
                      Yes, keeping sensitive skin around the treated area clean and moisturized is important. 
                      Additionally, avoid direct sunlight and use sunscreen to protect the skin. 
                      Furthermore, detailed aftercare instructions will be provided by your clinician 
                      to ensure optimal results.
                    </AutoLinkedText>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    When will I see the results?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <AutoLinkedText>
                      Improvements can be noticed within a few weeks, with more significant changes 
                      occurring over the following months. Full effects are typically visible in 
                      6-9 months as your skin naturally produces collagen and elastin.
                    </AutoLinkedText>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Are there any side effects?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Polynucleotide treatments are generally safe with minimal side effects. Some clients 
                    may experience temporary bruising or swelling at the injection site, which typically 
                    resolves quickly.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Can Polynucleotide Treatment help with hair loss?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <AutoLinkedText>
                      Yes, polynucleotide treatment for hair loss is highly effective. In addition, 
                      the injections improve scalp health, stimulate hair follicles, and promote hair growth, 
                      making it an excellent option for those experiencing thinning hair or the early 
                      stages of hair loss.
                    </AutoLinkedText>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    What is the cost of Polynucleotide Treatment in London?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <AutoLinkedText>
                      At Cosmedocs, a single session costs £450, and a package deal for three syringes 
                      is available at £400 each, providing a total saving of £150. This pricing ensures 
                      both affordability and access to premium-quality treatments with our invisible 
                      art approach to aesthetics.
                    </AutoLinkedText>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/10">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Skin?</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                <AutoLinkedText>
                  Experience the power of regenerative DNA therapy. Book your consultation and discover 
                  how polynucleotides can naturally restore your skin's youth and vitality. 
                  Our aesthetics is invisible art • Bold • Natural • Always Your Way
                </AutoLinkedText>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/schedule/0cc7d92b" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                    Book Consultation
                  </Button>
                </a>
                <Button size="lg" variant="outline">
                  Download Treatment Guide
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Polynucleotide Treatment London Birmingham Manchester Cardiff DNA Therapy</h2>
          <p>
            Polynucleotide treatment London regenerative medicine skin rejuvenation DNA therapy anti-aging 
            collagen stimulation hair restoration Harley Street aesthetic clinic natural skin boosters 
            under eye treatment fine lines wrinkles cellular repair salmon DNA fragments marine collagen 
            professional aesthetic physicians Birmingham Manchester Cardiff cosmetic medicine invisible 
            art bold natural always your way polynucleotides skin health restoration facial rejuvenation 
            non-surgical aesthetic treatments advanced injectable procedures Cosmedocs London clinic.
          </p>
          <p>
            Advanced polynucleotide DNA therapy utilizes natural biocompatible fragments extracted from 
            salmon trout sperm promote cellular regeneration enhance collagen elastin production improve 
            skin texture firmness hydration reduce fine lines wrinkles target hair loss androgenic alopecia 
            stimulate follicle growth scalp health under eye rejuvenation dark circles puffiness skin 
            texture improvement acne scarring hyperpigmentation uneven tone professional medical grade 
            treatments aesthetic medicine regenerative therapy.
          </p>
          <p>
            Polynucleotide treatment pricing single session £450 three session package £1200 savings £150 
            optimal results minimum three treatments spaced three weeks apart full effects visible six nine 
            months natural collagen elastin production combines beautifully microneedling PRP Profhilo 
            botox dermal fillers enhanced aesthetic outcomes professional consultation Harley Street London 
            Birmingham Manchester Cardiff aesthetic clinics experienced physicians invisible art philosophy 
            bold natural always your way Cosmedocs.
          </p>
        </div>

        <PopularTreatments 
          title="Related Regenerative Treatments"
          className="bg-background"
        />
      </div>
    </>
  );
};

export default PolynucleotideTreatment;