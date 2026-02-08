import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { ArrowRight, Star, CheckCircle, Clock, Heart, Shield, Award, MapPin, GraduationCap, Palette, Calendar, Activity, Syringe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import ClientReviews from '@/components/ClientReviews';

const TempleFiller = () => {
  const seoData = generateSEOMetadata(
    "Temple Filler London | Cosmedocs",
    "Restore hollow temples with dermal filler. Reverse volume loss for youthful facial proportions & enhanced symmetry.",
    "/temple-filler-london",
    "/lovable-uploads/3bbc1c04-e87d-4253-811d-e71dfa550186.png"
  );


  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />

        {/* Structured Data - LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs - Temple Filler London",
            "image": seoData.image,
            "description": "Expert temple filler treatments in London. Restore volume, enhance facial symmetry & achieve natural-looking results.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "addressRegion": "Greater London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5074,
              "longitude": -0.1278
            },
            "telephone": "+44 20 3733 3227",
            "url": "https://www.cosmedocs.com/temple-filler-london",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "priceRange": "££"
          })}
        </script>

        {/* Structured Data - FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long do temple filler results last?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Temple filler results typically last 12-18 months, depending on individual factors such as metabolism, lifestyle, and the type of filler used. Regular maintenance treatments help preserve optimal results."
                }
              },
              {
                "@type": "Question",
                "name": "Is temple filler treatment painful?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most patients experience minimal discomfort during temple filler treatment. We apply topical anaesthetic before the procedure, and modern fillers contain lidocaine for additional comfort during injection."
                }
              },
              {
                "@type": "Question",
                "name": "What is the recovery time for temple fillers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Recovery is minimal with temple fillers. You may experience mild swelling or bruising for 24-48 hours. Most patients return to normal activities immediately after treatment."
                }
              },
              {
                "@type": "Question",
                "name": "How much does temple filler cost in London?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Temple filler costs vary depending on the amount of product needed and treatment complexity. Single temple treatment starts from £400, while both temples cost £650."
                }
              },
              {
                "@type": "Question",
                "name": "What causes temple volume loss?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Temple volume loss is a natural part of aging that typically begins in the late twenties. As we age, the fat pads in our temples diminish, creating a hollowed appearance that can make the face appear gaunt or tired."
                }
              }
            ]
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.cosmedocs.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Treatments",
                "item": "https://www.cosmedocs.com/treatments"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Dermal Fillers",
                "item": "https://www.cosmedocs.com/dermal-fillers"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Temple Filler London",
                "item": "https://www.cosmedocs.com/temple-filler-london"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-accent/50 border-b border-border/50" aria-label="Breadcrumb">
          <div className="page-container py-3">
            <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors" itemProp="item">
                  <span itemProp="name">Home</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <span className="text-muted-foreground">/</span>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href="/treatments" className="text-muted-foreground hover:text-primary transition-colors" itemProp="item">
                  <span itemProp="name">Treatments</span>
                </a>
                <meta itemProp="position" content="2" />
              </li>
              <span className="text-muted-foreground">/</span>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href="/dermal-fillers" className="text-muted-foreground hover:text-primary transition-colors" itemProp="item">
                  <span itemProp="name">Dermal Fillers</span>
                </a>
                <meta itemProp="position" content="3" />
              </li>
              <span className="text-muted-foreground">/</span>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="text-primary font-medium" itemProp="name">Temple Filler London</span>
                <meta itemProp="position" content="4" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section - Updated to match LipFillers design */}
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
                  <span className="text-purple-300">Temple Filler London</span>
                  <span className="block text-sm mt-4">Invisible art - restore temple volume with precision and artistry</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Temple Enhancement</p>
                  <p className="text-sm text-gray-300">#cosmetemple - Check out our IG for authentic temple restoration transformations</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                    onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                    onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Price List
                  </Button>
                </div>
              </motion.div>
              
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Treatment Summary */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Temple Filler Treatment</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Treatment Duration</h3>
                <p className="text-gray-300">30-45 minutes including consultation</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Results Duration</h3>
                <p className="text-gray-300">12-18 months with premium hyaluronic acid</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Activity className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Recovery Time</h3>
                <p className="text-gray-300">Minimal downtime, return to work same day</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Syringe className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Anaesthesia</h3>
                <p className="text-gray-300">Topical anaesthetic + lidocaine in filler</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Real Results: Single B&A Preview */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                  Real Results: <span className="text-[#C9A050] font-light">Temple Filler Before & After</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                  Below is an example of temple filler used to restore volume loss and improve facial contour. 
                  Strategic placement replenishes hollowed temples, creating a more youthful, balanced appearance 
                  while maintaining natural facial proportions.
                </p>
                <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900 mb-3">
                  <img
                    src="/lovable-uploads/2549c031-c4e5-4be1-a708-694953067baf.png"
                    alt="Before and after temple filler showing restored volume and improved facial contour"
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                </div>
                <p className="text-white/30 text-xs font-light italic mb-6">
                  All images show real patients treated by our doctors at our Harley Street clinic. Individual results vary depending on facial structure and degree of volume loss.
                </p>
                <a
                  href="/before-after/dermal-fillers/temple/"
                  className="inline-flex items-center gap-2 text-[#C9A050] text-sm font-medium hover:underline"
                >
                  View real temple filler before & after results
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-white/30 text-xs font-light mt-2">
                  Includes mild to severe temple hollowing restoration cases.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Understanding Temple Volume Loss */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Understanding Temple Volume Loss</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover the causes of temple hollowing and how it affects facial appearance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-500/20 rounded-full p-3">
                      <Activity className="text-purple-300" size={24} />
                    </div>
                    <CardTitle className="text-2xl text-white">What Causes Temple Volume Loss?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    Temple volume loss is a natural part of ageing that begins as early as our mid-20s. The temples contain 
                    minimal subcutaneous fat, making volume depletion particularly noticeable in this area. Fillers in the temples 
                    can effectively address this concern and even help lift the eye area.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Loss of facial fat pads and bone remodelling creates hollow temples</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Collagen breakdown reduces skin elasticity and support</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Genetics and lifestyle factors accelerate the ageing process</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Creates an aged, tired appearance affecting facial harmony</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Filler in temples to lift eyes is a popular non-surgical approach to rejuvenation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Temple Fillers & Benefits */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Temple Fillers & Benefits</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover how temple filler treatments restore volume and deliver transformative benefits.
              </p>
            </motion.div>
            
            {/* Two Column Layout for Fillers and Benefits */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Temple Filler Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-purple-500/20 rounded-full p-3">
                        <Syringe className="text-purple-300" size={24} />
                      </div>
                      <CardTitle className="text-2xl text-white">Temple Filler Treatment</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 text-gray-300">
                    <p className="leading-relaxed">
                      Temple dermal filler is a non-surgical cosmetic treatment using premium hyaluronic acid-based injectable 
                      fillers to restore lost volume in the temporal region. This treatment provides immediate results, acting 
                      as a liquid facelift for the temples.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Premium Hyaluronic Acid:</strong> We use only the highest quality temple fillers for optimal results</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Precision Injection:</strong> Strategic placement ensures natural-looking temple filler before and after results</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Eye Lifting Effect:</strong> Filler in temples to lift eyes provides subtle brow elevation</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Quick Procedure:</strong> Treatment takes 30-45 minutes with minimal downtime</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Temple Filler Benefits Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-green-900/20 to-teal-900/20 border-green-500/20 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-green-500/20 rounded-full p-3">
                        <Star className="text-green-300" size={24} />
                      </div>
                      <CardTitle className="text-2xl text-white">Temple Filler Benefits</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 text-gray-300">
                    <p className="leading-relaxed">
                      Temple dermal filler treatment offers immediate and long-lasting rejuvenation, restoring youthful 
                      facial proportions with natural-looking results. This treatment acts as a non-surgical liquid facelift, 
                      providing volume restoration without the need for invasive procedures.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                        <p><strong>Instant Volume Restoration:</strong> Immediate correction of temple hollowing with injectable fillers</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                        <p><strong>Enhanced Facial Symmetry:</strong> Improved overall facial balance and harmony</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                        <p><strong>Eye Lifting Effect:</strong> Filler in temples to lift eyes creates a more youthful, refreshed appearance</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                        <p><strong>Long-lasting Results:</strong> How long does filler last? Effects typically last 12-18 months with premium fillers</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                        <p><strong>Minimal Downtime:</strong> Quick treatment with immediate return to activities</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                        <p><strong>Natural Results:</strong> Subtle enhancement that looks authentically you</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                        <p><strong>Combines with Botox:</strong> Can be paired with face lift with Botox for comprehensive rejuvenation</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How Temple Fillers Work */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">How Temple Fillers Work</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Understanding the science and procedure behind temple filler treatments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-indigo-500/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-indigo-500/20 rounded-full p-3">
                      <Syringe className="text-indigo-300" size={24} />
                    </div>
                    <CardTitle className="text-2xl text-white">The Temple Filler Process</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 text-gray-300">
                  <p className="leading-relaxed">
                    Temple fillers work by using hyaluronic acid-based injectable fillers to restore lost volume in the temporal region. 
                    This non-surgical liquid facelift approach provides immediate results with minimal downtime, making it an increasingly 
                    popular alternative to traditional surgical procedures.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <CheckCircle className="text-indigo-400" size={18} />
                        The Treatment Process
                      </h3>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-400 mt-1">•</span>
                          <span>Comprehensive consultation and facial assessment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-400 mt-1">•</span>
                          <span>Strategic injection points marked for precision</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-400 mt-1">•</span>
                          <span>Premium hyaluronic acid filler carefully placed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-400 mt-1">•</span>
                          <span>Immediate volume restoration visible after treatment</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <Activity className="text-indigo-400" size={18} />
                        How Long Do Injectable Fillers Last?
                      </h3>
                      <p className="text-sm leading-relaxed">
                        The longevity of temple fillers depends on several factors including the type of filler used, individual metabolism, 
                        and lifestyle factors. Premium hyaluronic acid fillers typically last 12-18 months in the temple area.
                      </p>
                      <p className="text-sm leading-relaxed">
                        How long does filler last can vary between individuals - those with faster metabolisms may see results fade sooner, 
                        whilst others may enjoy results beyond 18 months. Regular maintenance treatments ensure consistent, optimal results over time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Combination & Complementary Treatments */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Combination & Complementary Treatments</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Enhance your results by combining temple fillers with other facial rejuvenation treatments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border-teal-500/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-teal-500/20 rounded-full p-3">
                      <Palette className="text-teal-300" size={24} />
                    </div>
                    <CardTitle className="text-2xl text-white">Complete Facial Rejuvenation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 text-gray-300">
                  <p className="leading-relaxed">
                    Temple fillers can be combined with other treatments for comprehensive facial rejuvenation, creating a 
                    harmonious liquid facelift effect. This holistic approach addresses multiple areas of concern simultaneously 
                    for optimal aesthetic results.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <CheckCircle className="text-teal-400" size={18} />
                        Popular Treatment Combinations
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <span className="text-teal-400 mt-1">•</span>
                          <div>
                            <a href="/botox-london" className="text-purple-300 hover:text-purple-200 underline font-medium">
                              Face Lift with Botox
                            </a>
                            <p className="text-sm mt-1">Combine temple fillers with Botox for wrinkle reduction and comprehensive upper face rejuvenation</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-400 mt-1">•</span>
                          <div>
                            <a href="/cheek-fillers" className="text-purple-300 hover:text-purple-200 underline font-medium">
                              Cheek Fillers
                            </a>
                            <p className="text-sm mt-1">Restore mid-face volume alongside temple enhancement for balanced facial proportions</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <CheckCircle className="text-teal-400" size={18} />
                        Additional Complementary Treatments
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <span className="text-teal-400 mt-1">•</span>
                          <div>
                            <a href="/tear-trough-filler" className="text-purple-300 hover:text-purple-200 underline font-medium">
                              Tear Trough Fillers
                            </a>
                            <p className="text-sm mt-1">Address under-eye hollowing for a complete eye area rejuvenation</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-400 mt-1">•</span>
                          <div>
                            <a href="/lip-filler" className="text-purple-300 hover:text-purple-200 underline font-medium">
                              Lip Fillers
                            </a>
                            <p className="text-sm mt-1">Complete your transformation with enhanced lip volume and definition</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-teal-500/10 rounded-lg p-4 border border-teal-500/20 mt-6">
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Heart className="text-teal-400" size={16} />
                      The Liquid Facelift Approach
                    </h4>
                    <p className="text-sm leading-relaxed">
                      By strategically combining temple fillers with other injectable treatments, we can achieve comprehensive facial 
                      rejuvenation without surgery. This liquid facelift approach delivers natural-looking results with minimal downtime, 
                      addressing multiple signs of ageing simultaneously for a harmonious, youthful appearance.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>



        {/* Pricing Section */}
        <section id="pricing-section" className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Temple Filler Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for premium temple enhancement treatments. All prices include consultation, 
                treatment, and aftercare support from our expert medical team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-purple-500 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Single Temple</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£400</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Perfect for minor volume loss or asymmetry correction</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Premium hyaluronic acid</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Aftercare support</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-purple-600 border-purple-400 h-full text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-semibold">POPULAR</span>
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-white text-2xl">Both Temples</CardTitle>
                    <div className="text-white text-4xl font-bold">£650</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Complete bilateral temple enhancement for balanced results</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Premium hyaluronic acid</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Extended aftercare support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">2-week follow-up</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-gray-700 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Consultation Only</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£50</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Professional assessment and treatment planning</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Full facial assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Treatment recommendations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500" size={16} />
                        <span className="text-gray-300 text-sm">Deducted from treatment cost</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-6">
                *Consultation fee is deducted from treatment cost if you proceed on the same day
              </p>
              <Button 
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold"
                onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
              >
                Book Your Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Video Section - Educational Content */}

        {/* Medical Authority & Research Section */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Evidence-Based Treatment Approach</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our temple filler treatments are based on established medical research and industry best practices.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-indigo-500/20 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-indigo-500/20 rounded-full p-3">
                        <GraduationCap className="text-indigo-300" size={24} />
                      </div>
                      <CardTitle className="text-2xl text-white">Clinical Evidence</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 text-gray-300">
                    <p className="leading-relaxed">
                      Temple filler treatments are supported by extensive clinical research demonstrating safety and efficacy. 
                      Hyaluronic acid dermal fillers have been studied extensively for facial volume restoration.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-indigo-400 mt-1 flex-shrink-0" size={16} />
                        <p className="text-sm">
                          <a 
                            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5300704/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-300 hover:text-purple-200 underline"
                          >
                            Clinical studies on hyaluronic acid safety
                          </a> published in peer-reviewed journals
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-indigo-400 mt-1 flex-shrink-0" size={16} />
                        <p className="text-sm">
                          Treatments follow guidelines from the <a 
                            href="https://www.saveface.co.uk" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-300 hover:text-purple-200 underline"
                          >
                            Save Face Register
                          </a> for safe aesthetic practice
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-indigo-400 mt-1 flex-shrink-0" size={16} />
                        <p className="text-sm">FDA and CE-approved dermal filler products used exclusively</p>
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
                <Card className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border-teal-500/20 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-teal-500/20 rounded-full p-3">
                        <Shield className="text-teal-300" size={24} />
                      </div>
                      <CardTitle className="text-2xl text-white">Medical Standards</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 text-gray-300">
                    <p className="leading-relaxed">
                      We adhere to the highest medical standards set by leading UK regulatory bodies, ensuring safe, 
                      effective temple dermal filler treatments with predictable, natural-looking results.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={16} />
                        <p className="text-sm">
                          Registered with the <a 
                            href="https://www.cqc.org.uk" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-300 hover:text-purple-200 underline"
                          >
                            Care Quality Commission (CQC)
                          </a> for patient safety
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={16} />
                        <p className="text-sm">Comprehensive medical insurance and emergency protocols in place</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={16} />
                        <p className="text-sm">Ongoing training in advanced injection techniques and facial anatomy</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={16} />
                        <p className="text-sm">Member of professional aesthetic medicine organisations</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Cosmedocs?</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Experience</h3>
                <p className="text-gray-300">Over 1 million injections performed since 2007</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Training</h3>
                <p className="text-gray-300">
                  <a 
                    href="https://www.harleystreetinstitute.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-purple-200 underline"
                  >
                    Harley Street Institute
                  </a> trainers
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quality</h3>
                <p className="text-gray-300">Premium FDA-approved dermal fillers only</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Philosophy</h3>
                <p className="text-gray-300">'Invisible art' for natural results</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Aftercare</h3>
                <p className="text-gray-300">Comprehensive aftercare and follow-up</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about temple filler treatments at our London clinic.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "How long do temple filler results last?",
                    answer: "Temple filler results typically last 12-18 months, depending on individual factors such as metabolism, lifestyle, and the type of filler used. How long does filler last varies between individuals, but regular maintenance treatments help preserve optimal results."
                  },
                  {
                    question: "Is temple filler treatment painful?",
                    answer: "Most patients experience minimal discomfort during temple filler treatment. We apply topical anaesthetic before the procedure, and modern fillers contain lidocaine for additional comfort during injection."
                  },
                  {
                    question: "What is the recovery time for temple fillers?",
                    answer: "Recovery is minimal with temple fillers. You may experience mild swelling or bruising for 24-48 hours. Most patients return to normal activities immediately after treatment."
                  },
                  {
                    question: "Can filler in temples help lift eyes?",
                    answer: "Yes, strategic placement of filler in temples to lift eyes is a popular technique. By restoring volume in the temporal region, we can create a subtle lifting effect that opens up the eye area and reduces the appearance of drooping or heaviness in the upper face."
                  },
                  {
                    question: "Are there any side effects with temple fillers?",
                    answer: "Side effects are rare and typically mild, including temporary swelling, bruising, or redness at injection sites. Serious complications are extremely rare when performed by qualified practitioners using premium injectable fillers."
                  },
                  {
                    question: "How much does temple filler cost in London?",
                    answer: "Temple filler costs vary depending on the amount of product needed and treatment complexity. Single temple treatment starts from £400, whilst both temples cost £650. We provide detailed pricing during your consultation based on your specific requirements."
                  },
                  {
                    question: "What causes temple volume loss?",
                    answer: "Temple volume loss is a natural part of ageing that typically begins in the late twenties. As we age, the fat pads in our temples diminish, creating a hollowed appearance that can make the face appear gaunt or tired."
                  },
                  {
                    question: "How long do injectable fillers last in the temple area?",
                    answer: "How long do injectable fillers last depends on the type of filler used and individual factors. Premium hyaluronic acid fillers in the temples typically last 12-18 months. Factors affecting longevity include metabolism, lifestyle, and the specific product used."
                  },
                  {
                    question: "Is temple filler part of a liquid facelift?",
                    answer: "Yes, temple fillers are often a key component of a liquid facelift - a non-surgical approach to facial rejuvenation. When combined with other dermal fillers and anti-wrinkle treatments, temple fillers contribute to comprehensive facial enhancement without surgery."
                  },
                  {
                    question: "Can I combine temple fillers with Botox for a face lift effect?",
                    answer: "Absolutely. Combining temple fillers with a face lift with Botox provides optimal results. Whilst Botox addresses dynamic wrinkles and can lift the brows, temple fillers restore volume and enhance facial contours, creating a comprehensive non-surgical rejuvenation."
                  },
                  {
                    question: "Who is a good candidate for temple fillers?",
                    answer: "Good candidates include individuals experiencing temple volume loss, facial asymmetry, or those seeking non-surgical facial rejuvenation. A consultation will determine if temple dermal filler treatment is right for you."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-black rounded-lg border-gray-800">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-900 rounded-lg">
                      <span className="text-white font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Ready for Beautiful, Natural Temple Enhancement?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how temple fillers 
                can restore volume and enhance your natural beauty with subtle, sophisticated results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                >
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Client Reviews */}
        <ClientReviews />

        {/* Enhanced SEO Content with Image References and Keywords */}
        <div className="sr-only">
          <h2>Temple Filler London - Expert Aesthetic Treatment with Real Temple Filler Before and After Results</h2>
          <p>
            Temple dermal fillers have become increasingly popular in London's aesthetic medicine scene, offering 
            a non-surgical solution for age-related volume loss in the temporal region. Our featured temple filler before and after 
            case study demonstrates the remarkable transformation possible with professional temple filler treatment, showing 
            before, during, and after images that highlight the expertise and artistry involved in this sophisticated procedure. 
            Fillers in the temples are now recognised as an essential component of comprehensive facial rejuvenation, particularly 
            for patients seeking natural temple enhancement in London clinics.
          </p>
          <p>
            The before treatment images clearly show the common signs of temple volume loss - hollowed areas, 
            sunken appearance, and loss of youthful facial contours. During the treatment phase, our qualified 
            aesthetic practitioners use advanced injection techniques with medical-grade hyaluronic acid fillers 
            to precisely restore volume. Filler in temples to lift eyes is a particularly sought-after technique, 
            creating a subtle lifting effect that rejuvenates the entire upper face. The filler temples before after 
            results showcase significant improvement in facial harmony, restored temple volume, and a more youthful, refreshed appearance. 
            Many London patients specifically request temple filler to address signs of ageing in the upper face region.
          </p>
          <p>
            This comprehensive temple filler case study represents typical results achievable at our London clinic, 
            where we specialise in natural-looking enhancements using only premium dermal filler products. The 
            treatment process involves strategic placement of injectable fillers to address volume loss whilst maintaining 
            facial expression and natural movement, ensuring results that enhance rather than alter the patient's 
            natural beauty. Many patients ask "how long does filler last?" and we're pleased to report that temple fillers 
            typically provide results lasting 12-18 months with premium hyaluronic acid formulations. Understanding how long do injectable fillers last 
            helps patients plan their aesthetic maintenance schedule effectively.
          </p>
          <p>
            Temple filler before and after photography demonstrates the effectiveness of this treatment for addressing 
            age-related changes in the temporal region. Our London patients consistently achieve excellent results 
            through our combination of expert technique, premium products, and personalised treatment planning. 
            The transformation shown in these images represents the gold standard of temple dermal filler treatment available 
            in London's aesthetic medicine landscape. Temple fillers are often incorporated into a liquid facelift approach, 
            combined with other treatments for comprehensive facial rejuvenation without surgery. The liquid facelift technique using 
            strategic dermal filler placement has become the preferred non-surgical alternative to traditional facelifts for many London patients.
          </p>
          <p>
            Understanding how long do injectable fillers last is crucial for treatment planning. While individual results vary, 
            temple fillers typically maintain their effectiveness for 12-18 months, after which maintenance treatments can 
            preserve your results. The versatility of fillers in the temples means they can address multiple concerns - from 
            simple volume restoration to using filler in temples to lift eyes for a more open, youthful gaze. Many patients 
            combine temple fillers with a face lift with Botox approach, using anti-wrinkle injections to address dynamic lines 
            whilst dermal fillers restore lost volume, creating a comprehensive non-surgical rejuvenation strategy. This combination of 
            face lift with Botox and temple fillers provides optimal facial rejuvenation results.
          </p>
          <p>
            The liquid facelift concept has revolutionised non-surgical facial rejuvenation, with temple fillers playing a central 
            role alongside other strategic filler placements. This approach offers natural-looking results without the downtime, 
            risks, or costs associated with traditional surgical procedures. Our expert practitioners carefully assess each patient's 
            unique facial anatomy to create a customised treatment plan that may include temple dermal filler as part of a 
            comprehensive aesthetic strategy, ensuring harmonious, balanced, and natural-looking results that enhance your 
            inherent beauty. Temple filler treatment in London continues to grow in popularity as patients discover the transformative 
            yet natural results achievable with this sophisticated treatment.
          </p>
          <p>
            For patients considering temple enhancement, it's important to understand the full scope of temple filler benefits. 
            Not only do temple fillers restore lost volume, but strategic placement of filler in temples to lift eyes can create 
            a significant rejuvenating effect on the entire upper face. The temple filler before and after results we achieve 
            demonstrate how this treatment addresses multiple ageing concerns simultaneously - from hollowed temples to drooping 
            brows and tired-looking eyes. When incorporated into a comprehensive liquid facelift strategy, temple fillers work 
            synergistically with other treatments to create balanced, natural facial rejuvenation.
          </p>
          <p>
            Patients frequently enquire about how long do injectable fillers last, particularly when planning their aesthetic journey. 
            With temple dermal filler treatments, longevity depends on various factors including the type of hyaluronic acid used, 
            individual metabolism, lifestyle factors, and injection technique. Premium temple fillers in London typically last 12-18 months, 
            offering excellent value for this transformative treatment. Understanding how long does filler last helps patients make 
            informed decisions about their aesthetic maintenance schedule and budget accordingly.
          </p>
          <p>
            The combination of temple fillers with face lift with Botox represents the pinnacle of non-surgical facial rejuvenation. 
            Whilst Botox addresses dynamic wrinkles caused by muscle movement, temple fillers restore structural volume loss, creating 
            comprehensive upper face rejuvenation. This dual approach mirrors the effects of a traditional surgical facelift but without 
            incisions, general anaesthesia, or extended recovery periods. Many London patients appreciate this sophisticated non-surgical 
            alternative that delivers natural-looking results aligned with our philosophy of invisible art in aesthetic medicine.
          </p>
          
          {/* SEO Image Schema */}
          <div itemScope itemType="https://schema.org/ImageGallery" className="hidden">
            <h3 itemProp="name">Temple Filler Before & After Results</h3>
            <p itemProp="description">Real temple filler results showing volume restoration performed at our Harley Street clinic</p>
            <div itemScope itemType="https://schema.org/ImageObject">
              <img src="/lovable-uploads/2549c031-c4e5-4be1-a708-694953067baf.png" alt="Temple filler before and after showing volume restoration" itemProp="contentUrl" className="hidden" />
              <span itemProp="caption">Temple filler before and after — side profile showing dramatic volume restoration and improved facial contours</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempleFiller;