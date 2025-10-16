import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Award, Clock, DollarSign, Users, Star, Shield } from "lucide-react";

const BotoxPriceLondon = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Botox Price London: Complete Guide to Costs & Expert Treatment in 2024",
    "description": "Discover comprehensive Botox prices in London. Learn why master injectors offer better value despite higher costs, with expert insights on safety and results.",
    "author": {
      "@type": "Organization",
      "name": "Cosmedocs",
      "url": "https://cosmedocs.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10 Harley Street",
        "addressLocality": "London",
        "addressRegion": "Greater London",
        "postalCode": "W1G 9PF",
        "addressCountry": "GB"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cosmedocs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cosmedocs.com/logo.png"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10 Harley Street",
        "addressLocality": "London",
        "addressRegion": "Greater London",
        "postalCode": "W1G 9PF",
        "addressCountry": "GB"
      }
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://cosmedocs.com/botox-price-london"
    },
    "articleSection": "Aesthetic Medicine",
    "keywords": "botox price london, botox cost london, botulinum toxin london, anti-wrinkle injections london"
  };

  const priceComparisonData = [
    {
      area: "Forehead Lines",
      beginner: "£150-200",
      experienced: "£250-350",
      master: "£400-500",
      units: "10-20 units"
    },
    {
      area: "Crow's Feet",
      beginner: "£120-180",
      experienced: "£200-300",
      master: "£350-450",
      units: "12-24 units"
    },
    {
      area: "Frown Lines",
      beginner: "£180-220",
      experienced: "£280-380",
      master: "£450-550",
      units: "20-30 units"
    },
    {
      area: "Full Face",
      beginner: "£400-500",
      experienced: "£600-800",
      master: "£900-1200",
      units: "50-80 units"
    }
  ];

  const botoxBrandComparison = [
    {
      brand: "Botox (Allergan)",
      origin: "USA",
      duration: "3-4 months",
      priceRange: "£8-15 per unit"
    },
    {
      brand: "Azzalure (Dysport)",
      origin: "UK/France",
      duration: "3-4 months",
      priceRange: "£3-6 per unit"
    },
    {
      brand: "Bocouture (Xeomin)",
      origin: "Germany",
      duration: "3-4 months",
      priceRange: "£4-8 per unit"
    },
    {
      brand: "Letybo",
      origin: "South Korea",
      duration: "3-4 months",
      priceRange: "£3-7 per unit"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Botox Price London: Complete Guide to Costs & Expert Treatment 2024</title>
        <meta 
          name="description" 
          content="Comprehensive Botox prices London. Why master injectors offer better value, costs by experience level, and expert insights on safety."
        />
        <meta name="keywords" content="botox price london, botox cost london, botulinum toxin london, anti-wrinkle injections london, botox treatment london" />
        <link rel="canonical" href="https://cosmedocs.com/botox-price-london" />
        <meta property="og:title" content="Botox Price London: Complete Guide to Costs & Expert Treatment 2024" />
        <meta property="og:description" content="Discover comprehensive Botox prices in London. Learn why master injectors offer better value despite higher costs." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://cosmedocs.com/botox-price-london" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        {/* SEO-optimized Hidden Content */}
        <div className="sr-only">
          <h1>Botox Price London - Complete Guide to Costs and Expert Treatment</h1>
          <p>Comprehensive guide to Botox prices in London, including cost comparisons, expert vs beginner practitioners, safety considerations, and guaranteed satisfaction treatments. Learn about botulinum toxin costs across London clinics and why master injectors provide superior value despite higher initial investment.</p>
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-accent via-accent/90 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent"></div>
          <div className="page-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Botox Price London: <span className="text-purple-300">Complete Cost Guide</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover transparent Botox pricing in London. Learn why master injectors offer superior value, 
                despite higher costs, and why guaranteed satisfaction makes all the difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-purple-600/30 px-4 py-2 rounded-full">Updated 2024</span>
                <span className="bg-purple-600/30 px-4 py-2 rounded-full">Expert Analysis</span>
                <span className="bg-purple-600/30 px-4 py-2 rounded-full">Price Comparisons</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Price Overview Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Botox Price London: What You Need to Know</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Botox prices in London vary dramatically - from £150 to £1200+ for full face treatment. 
                Understanding these price differences could save you money and ensure better results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-purple-500/20 h-full">
                  <CardHeader className="text-center">
                    <DollarSign className="w-12 h-12 mx-auto text-purple-400 mb-4" />
                    <CardTitle className="text-white">Average Botox Cost</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-purple-300 mb-2">£250-450</div>
                    <p className="text-gray-300">Per treatment area in London</p>
                    <p className="text-sm text-gray-400 mt-2">Varies by practitioner experience</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-purple-500/20 h-full">
                  <CardHeader className="text-center">
                    <Clock className="w-12 h-12 mx-auto text-purple-400 mb-4" />
                    <CardTitle className="text-white">Treatment Duration</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-purple-300 mb-2">3-4 Months</div>
                    <p className="text-gray-300">Results typically last</p>
                    <p className="text-sm text-gray-400 mt-2">With expert injection technique</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-purple-500/20 h-full">
                  <CardHeader className="text-center">
                    <Users className="w-12 h-12 mx-auto text-purple-400 mb-4" />
                    <CardTitle className="text-white">Experience Matters</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-purple-300 mb-2">1M+</div>
                    <p className="text-gray-300">Injections by master practitioners</p>
                    <p className="text-sm text-gray-400 mt-2">Years of specialized training</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detailed Price Comparison Table */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Botox Price Comparison by Practitioner Level</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Understanding price differences between beginner, experienced, and master injectors helps you make informed decisions about your treatment.
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full bg-black border border-purple-500/20 rounded-lg overflow-hidden">
                <thead className="bg-purple-600">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Treatment Area</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Beginner (0-2 years)</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Experienced (3-7 years)</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Master (8+ years)</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Typical Units</th>
                  </tr>
                </thead>
                <tbody>
                  {priceComparisonData.map((row, index) => (
                    <tr key={index} className="border-t border-purple-500/20">
                      <td className="px-6 py-4 text-white font-medium">{row.area}</td>
                      <td className="px-6 py-4 text-gray-300">{row.beginner}</td>
                      <td className="px-6 py-4 text-gray-300">{row.experienced}</td>
                      <td className="px-6 py-4 text-purple-300 font-semibold">{row.master}</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">{row.units}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-purple-600/20 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">💡 Price Analysis Insight</h3>
              <p className="text-gray-300 mb-3">
                While master injectors charge premium prices, they often use higher doses strategically, 
                achieving more natural-looking results that last longer. This counterintuitive approach 
                means better value despite higher upfront costs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300 text-sm">Master injectors: Higher doses, more natural results</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300 text-sm">Better muscle understanding = longer-lasting effects</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Piano Analogy Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Botox: Easy to Learn, Difficult to Master
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Like learning piano, anyone can inject Botox after basic training. However, mastering the art 
                  of natural-looking results requires years of dedicated practice and deep understanding of facial anatomy.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-accent border-l-4 border-purple-500 p-4 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">The Master's Touch</h3>
                    <p className="text-gray-300 text-sm">
                      Master injectors understand facial muscles at the fiber level. With over a million injections 
                      of experience, they know exactly where and how much to inject for optimal results.
                    </p>
                  </div>
                  
                  <div className="bg-accent border-l-4 border-purple-500 p-4 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">The Paradox of Higher Doses</h3>
                    <p className="text-gray-300 text-sm">
                      Ironically, master practitioners often use higher doses than beginners, yet achieve more 
                      natural results. This is because they understand muscle interaction and can prevent 
                      the "frozen" look through strategic placement.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-purple-500/20">
                  <CardHeader>
                    <CardTitle className="text-white text-xl text-center">You Know You're with a Master When:</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Star className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="text-white font-medium">Minimal Pain</h4>
                          <p className="text-gray-300 text-sm">Advanced injection techniques reduce discomfort significantly</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Clock className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="text-white font-medium">Quick Treatment</h4>
                          <p className="text-gray-300 text-sm">Efficient, precise injections completed in minutes</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Award className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="text-white font-medium">Fantastic Results</h4>
                          <p className="text-gray-300 text-sm">Natural enhancement that looks like "you, but better"</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Shield className="text-green-400 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="text-white font-medium">Low Complications</h4>
                          <p className="text-gray-300 text-sm">Extensive experience minimizes risk of side effects</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Botox Brand Comparison */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Botulinum Toxin Brands: Quality Matters</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                All quality botulinum toxin brands from USA, UK, and Germany deliver excellent results. 
                The key difference lies in the practitioner's expertise, not the brand choice.
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full bg-black border border-purple-500/20 rounded-lg overflow-hidden">
                <thead className="bg-purple-600">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Brand</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Origin</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Duration</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Price Range per Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {botoxBrandComparison.map((brand, index) => (
                    <tr key={index} className="border-t border-purple-500/20">
                      <td className="px-6 py-4 text-white font-medium">{brand.brand}</td>
                      <td className="px-6 py-4 text-gray-300">{brand.origin}</td>
                      <td className="px-6 py-4 text-gray-300">{brand.duration}</td>
                      <td className="px-6 py-4 text-purple-300">{brand.priceRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-blue-600/20 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">ℹ️ Important Note</h3>
              <p className="text-gray-300">
                While price per unit varies between brands, the total treatment cost depends more on the practitioner's 
                technique and dosing strategy than the brand used. Quality practitioners achieve excellent results 
                with any of these established brands.
              </p>
            </div>
          </div>
        </section>

        {/* Why Cheap Botox Costs More */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Why Cheap Botox Actually Costs More</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Hard to believe, but Botox prices in London vary dramatically based on practitioner experience. 
                New practitioners often charge less but use conservative doses, leading to poor results and more frequent treatments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-red-900/20 border-red-500/30 h-full">
                  <CardHeader>
                    <AlertTriangle className="w-12 h-12 text-red-400 mb-4" />
                    <CardTitle className="text-white text-xl">Budget Botox Hidden Costs</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-white font-medium">Under-dosing</h4>
                          <p className="text-gray-300 text-sm">Conservative doses lead to minimal results</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-white font-medium">Frequent Top-ups</h4>
                          <p className="text-gray-300 text-sm">Multiple sessions needed for desired effect</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-white font-medium">Shorter Duration</h4>
                          <p className="text-gray-300 text-sm">Results fade faster with improper technique</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-white font-medium">No Guarantees</h4>
                          <p className="text-gray-300 text-sm">Most clinics don't offer satisfaction guarantees</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-green-900/20 border-green-500/30 h-full">
                  <CardHeader>
                    <Award className="w-12 h-12 text-green-400 mb-4" />
                    <CardTitle className="text-white text-xl">Expert Botox Value</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-white font-medium">Optimal Dosing</h4>
                          <p className="text-gray-300 text-sm">Perfect balance for natural, effective results</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-white font-medium">Single Session Success</h4>
                          <p className="text-gray-300 text-sm">Achieve desired results in one treatment</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-white font-medium">Extended Duration</h4>
                          <p className="text-gray-300 text-sm">Results last 4-6 months with expert technique</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-white font-medium">Guaranteed Satisfaction</h4>
                          <p className="text-gray-300 text-sm">We offer what no one else does - guaranteed results</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Guaranteed Satisfaction Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Guaranteed Satisfaction Promise</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                We're confident in our master-level expertise. That's why we offer what virtually no other clinic does - 
                a complete satisfaction guarantee on all Botox treatments.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-purple-600 to-blue-600 border-none">
                <CardContent className="p-8 text-center">
                  <Shield className="w-16 h-16 mx-auto text-white mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">100% Satisfaction Guarantee</h3>
                  <p className="text-purple-100 text-lg mb-6">
                    If you're not completely satisfied with your Botox results, we'll make it right - no questions asked.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <CheckCircle className="w-8 h-8 mx-auto text-white mb-2" />
                      <h4 className="text-white font-semibold mb-1">Free Touch-ups</h4>
                      <p className="text-purple-100 text-sm">Within 2 weeks if needed</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="w-8 h-8 mx-auto text-white mb-2" />
                      <h4 className="text-white font-semibold mb-1">Full Refund Option</h4>
                      <p className="text-purple-100 text-sm">If results don't meet expectations</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="w-8 h-8 mx-auto text-white mb-2" />
                      <h4 className="text-white font-semibold mb-1">No Questions Asked</h4>
                      <p className="text-purple-100 text-sm">Your satisfaction is our priority</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Summary and CTA */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6">Ready for Expert Botox Treatment?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Don't compromise on quality when it comes to your face. Our master injectors combine years of experience 
                with guaranteed satisfaction - ensuring you get the natural, beautiful results you deserve.
              </p>
              
              <div className="bg-accent border border-purple-500/20 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Key Takeaways: Botox Price London</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-300 text-sm">Master injectors offer better value despite higher costs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-300 text-sm">Higher doses can create more natural results</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-300 text-sm">Quality brands from USA/UK/Germany all work excellently</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-300 text-sm">Guaranteed satisfaction is rare but valuable</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:02071180700"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
                >
                  Book Consultation - 020 7118 0700
                </a>
                <a
                  href="/consultation"
                  className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
                >
                  Online Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Botox Price London - Frequently Asked Questions</h2>
          <div>
            <h3>How much does Botox cost in London?</h3>
            <p>Botox prices in London range from £150-500 per area depending on practitioner experience. Master injectors charge £400-500 but often provide better value through superior technique and guaranteed satisfaction.</p>
            
            <h3>Why do master injectors charge more for Botox in London?</h3>
            <p>Master injectors have performed over a million injections, understand facial muscles at fiber level, and achieve more natural results. Their expertise justifies higher Botox prices through better outcomes and lower complication rates.</p>
            
            <h3>Which Botox brand is best in London?</h3>
            <p>All quality botulinum toxin brands from USA (Botox), UK (Azzalure), and Germany (Bocouture) deliver excellent results. The practitioner's skill matters more than the brand choice for optimal Botox outcomes in London.</p>
            
            <h3>Do any London clinics offer Botox satisfaction guarantees?</h3>
            <p>Very few London clinics offer Botox satisfaction guarantees. Cosmedocs provides guaranteed satisfaction with free touch-ups or full refunds if results don't meet expectations - a unique offering in London's Botox market.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BotoxPriceLondon;