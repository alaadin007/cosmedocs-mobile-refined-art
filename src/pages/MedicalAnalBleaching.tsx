
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/App";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from "@/components/ui/table";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { ArrowRight, Clock, Star, CheckCircle, Sparkles } from "lucide-react";

const MedicalAnalBleaching = () => {
  const seoData = generateSEOMetadata(
    "Medical Anal Bleaching London | Professional Intimate Skin Whitening",
    "Professional medical anal bleaching treatments using customized chemical peels. Safe, effective intimate area whitening for anal region, groin, and underarms at our London Harley Street clinic.",
    "/medical-anal-bleaching"
  );

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/87e6188b-21ad-477c-8f6f-bfe0b7206e4d.png",
      alt: "Professional intimate area bleaching before and after results",
      caption: "Professional medical-grade anal bleaching treatment results showing significant lightening"
    },
    {
      src: "/lovable-uploads/c77267b3-4f58-4e3b-9623-b0d3dc18d413.png",
      alt: "Groin area whitening transformation",
      caption: "Groin area whitening with customized chemical peel cocktail for even skin tone"
    },
    {
      src: "/lovable-uploads/1ca9c29b-82b1-4429-9ddf-f08494f8c796.png",
      alt: "Underarm bleaching treatment results",
      caption: "Underarm bleaching showing dramatic improvement in skin tone and texture"
    },
    {
      src: "/lovable-uploads/81d85516-1ea5-4cab-a62a-559c2d4de0ef.png",
      alt: "Complete intimate area transformation",
      caption: "Complete intimate area transformation using our specialized peel bar formulations"
    }
  ];

  const treatmentAreas = [
    {
      area: "Anal Bleaching",
      description: "Professional medical-grade lightening for anal region",
      icon: "🎯"
    },
    {
      area: "Groin Area Whitening",
      description: "Even skin tone for intimate groin areas",
      icon: "✨"
    },
    {
      area: "Underarm Bleaching",
      description: "Professional whitening for underarm darkness",
      icon: "💎"
    },
    {
      area: "Bikini Line Enhancement",
      description: "Smooth, even-toned bikini line treatment",
      icon: "🌟"
    },
    {
      area: "Custom Peel Cocktails",
      description: "Personalized chemical peel formulations",
      icon: "🧪"
    }
  ];

  const benefits = [
    "Medical-grade professional treatment",
    "Customized chemical peel cocktails",
    "Safe and effective intimate area whitening",
    "Minimal downtime with maximum results",
    "Boosts confidence and self-esteem",
    "FDA-approved ingredients and methods"
  ];

  const treatmentBreakdown = [
    {
      treatment: "Anal Bleaching (Single Session)",
      product: "Custom Peel Cocktail",
      cost: 450
    },
    {
      treatment: "Groin Area Whitening",
      product: "Medical-Grade Bleaching Agents",
      cost: 350
    },
    {
      treatment: "Underarm Bleaching Treatment",
      product: "Specialized Lightening Formula",
      cost: 275
    },
    {
      treatment: "Complete Package (All Areas)",
      product: "Full Intimate Area Treatment",
      cost: 950
    }
  ];

  const totalCost = 950; // Package price

  const recommendedProducts = [
    {
      phase: "Pre-Treatment",
      products: [
        "Gentle Intimate Cleanser",
        "pH Balancing Prep Solution",
        "Pre-Peel Conditioning Cream"
      ]
    },
    {
      phase: "Post-Treatment",
      products: [
        "Soothing Recovery Balm",
        "Melanin Inhibitor Serum",
        "Protective Barrier Cream",
        "Maintenance Lightening Lotion"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:type" content="article" />
        
        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        
        {/* Additional SEO keywords */}
        <meta name="keywords" content="anal bleaching London, intimate area whitening, groin bleaching, underarm whitening, chemical peels intimate areas, medical skin lightening, Harley Street intimate treatments, professional anal bleaching, bikini area whitening, intimate skin care" />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "name": "Medical Anal Bleaching",
              "description": "Professional medical-grade anal bleaching and intimate area whitening treatments",
              "procedureType": "Cosmetic dermatological treatment",
              "bodyLocation": "Intimate areas",
              "preparation": "Consultation and skin assessment",
              "followup": "Post-treatment care and monitoring",
              "medicineSystem": "Aesthetic Dermatology",
              "performer": {
                "@type": "MedicalBusiness",
                "name": "Cosmedocs",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Harley Street",
                  "addressLocality": "London",
                  "addressCountry": "UK"
                }
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hidden SEO Content - 500 words relevant to medical anal bleaching */}
      <div className="sr-only" aria-hidden="true">
        <h2>Comprehensive Guide to Medical Anal Bleaching and Intimate Area Whitening in London</h2>
        <p>
          Medical anal bleaching represents a specialized branch of aesthetic dermatology that addresses hyperpigmentation in intimate areas through professional-grade chemical peels and whitening treatments. At our prestigious Harley Street clinic in London, we offer comprehensive intimate area whitening services that include anal bleaching, groin area lightening, and underarm whitening using medical-grade formulations designed specifically for sensitive intimate skin.
        </p>
        <p>
          Our innovative peel bar approach allows for customized chemical peel cocktails tailored to individual skin conditions and pigmentation levels. These specialized formulations combine proven lightening agents such as hydroquinone, kojic acid, glycolic acid, and vitamin C derivatives in precise concentrations to achieve optimal results while maintaining skin safety and integrity.
        </p>
        <p>
          The medical anal bleaching process begins with a thorough consultation and intimate area assessment to determine the most appropriate treatment protocol. Our experienced practitioners evaluate skin type, pigmentation patterns, and sensitivity levels to create personalized treatment plans that address specific concerns while ensuring patient comfort and safety throughout the procedure.
        </p>
        <p>
          Chemical peels for intimate area whitening require specialized knowledge of sensitive skin physiology and careful selection of appropriate acids and concentrations. Our medical-grade treatments utilize FDA-approved ingredients in controlled clinical environments, ensuring both efficacy and safety for delicate intimate areas including the anal region, groin, bikini line, and underarms.
        </p>
        <p>
          Post-treatment care protocols include specially formulated products designed to enhance healing, prevent complications, and maintain treatment results. Our comprehensive aftercare regimen includes gentle cleansers, pH-balancing solutions, melanin inhibitor serums, and protective barrier creams specifically formulated for intimate area skin care.
        </p>
        <p>
          Patient education forms a crucial component of our intimate area whitening services, with detailed instructions on pre-treatment preparation, post-treatment care, and long-term maintenance strategies. Our approach emphasizes not only achieving desired aesthetic outcomes but also promoting overall intimate area skin health and confidence enhancement for our patients.
        </p>
      </div>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="page-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Medical Anal Bleaching: 
                  <span className="text-purple-400"> Professional Intimate </span>
                  Whitening Treatments
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Experience safe, effective medical-grade anal bleaching and intimate area whitening 
                  using our custom peel bar formulations. Professional treatments for anal region, 
                  groin areas, and underarms at London's premier Harley Street clinic.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
                    Book Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <BeforeAfterImageViewer 
                    images={beforeAfterImages}
                    triggerLabel="View Treatment Results"
                    title="Medical Anal Bleaching Results"
                    description="Real patient results from our professional intimate area whitening treatments"
                    className="text-lg border border-white/20 rounded-full px-6 py-3 hover:bg-white/10 transition-colors"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl p-8">
                  <img 
                    src="/lovable-uploads/87e6188b-21ad-477c-8f6f-bfe0b7206e4d.png"
                    alt="Professional medical anal bleaching before and after results"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white text-black rounded-full p-4 shadow-lg">
                    <Sparkles className="h-8 w-8 fill-purple-400 text-purple-400" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Information Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Custom Peel Bar: Personalized Chemical Cocktails
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our innovative peel bar approach allows us to create customized chemical peel cocktails 
                tailored to your specific skin condition, sensitivity, and desired results.
              </p>
            </motion.div>

            {/* Treatment Breakdown Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Treatment Options & Investment</h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-gray-600">
                          <TableHead className="text-gray-300 font-semibold">Treatment Area</TableHead>
                          <TableHead className="text-gray-300 font-semibold">Technique Used</TableHead>
                          <TableHead className="text-gray-300 font-semibold text-right">Cost</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {treatmentBreakdown.map((item, index) => (
                          <TableRow key={index} className="border-gray-600">
                            <TableCell className="font-medium text-white">{item.treatment}</TableCell>
                            <TableCell className="text-gray-300">{item.product}</TableCell>
                            <TableCell className="text-right text-white font-medium">£{item.cost}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableFooter>
                        <TableRow className="border-gray-600">
                          <TableCell colSpan={2} className="font-bold text-lg text-white">Best Value Package</TableCell>
                          <TableCell className="text-right font-bold text-lg text-purple-400">£{totalCost}</TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </div>
                  <p className="text-sm text-gray-400 mt-4 text-center">
                    All treatments performed using medical-grade ingredients in sterile clinical environment
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Specialized Treatment Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our medical-grade intimate area whitening treatments address all areas of concern 
                with customized formulations designed for sensitive skin.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-colors h-full">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{area.icon}</div>
                      <h3 className="text-xl font-bold mb-3">{area.area}</h3>
                      <p className="text-gray-400">{area.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Products Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="page-container">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Professional Care Protocol
                </h2>
                
                <div className="prose prose-lg text-gray-300 mb-8">
                  <p className="mb-6">
                    Our comprehensive approach to <strong className="text-white">medical anal bleaching</strong> 
                    includes carefully selected pre and post-treatment products designed specifically for 
                    intimate area care. Each product is chosen to enhance treatment results while 
                    maintaining skin health and comfort.
                  </p>
                  
                  <p className="mb-6">
                    The <strong className="text-white">custom peel bar formulations</strong> combine 
                    proven ingredients like hydroquinone, kojic acid, and alpha hydroxy acids in 
                    precise concentrations. Our practitioners adjust the cocktail strength and 
                    ingredients based on your skin's response and desired outcomes.
                  </p>

                  <p className="mb-6">
                    <strong className="text-white">Professional-grade intimate area treatments</strong> 
                    require specialized aftercare to ensure optimal healing and maintain results. 
                    Our recommended product regimen supports the skin's natural healing process 
                    while preventing complications and enhancing treatment effectiveness.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Recommended Products</h3>
                <div className="space-y-8">
                  {recommendedProducts.map((phase, index) => (
                    <Card key={index} className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold mb-4 text-purple-400">{phase.phase}</h4>
                        <ul className="space-y-2">
                          {phase.products.map((product, productIndex) => (
                            <li key={productIndex} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300">{product}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl">
                  <h4 className="text-xl font-bold mb-4">Treatment Benefits</h4>
                  <div className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Professional Intimate Area Whitening?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience the confidence that comes with professional medical-grade anal bleaching 
                and intimate area treatments. Book your confidential consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
                  Book Confidential Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  View All Treatments
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MedicalAnalBleaching;
