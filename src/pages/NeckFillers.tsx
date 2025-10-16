import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { generateSEOMetadata } from "@/utils/seo";
import { Clock, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Palette, Heart, Shield } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ClientReviews from "@/components/ClientReviews";

const NeckFillers = () => {
  const seoData = generateSEOMetadata(
    "Neck Fillers London | Say Bye to Sag | Cosmedocs Harley Street",
    "Neck fillers London - treat wrinkly neck, horizontal neck lines & botox for neck lines. See neck fillers before and after results.",
    "/neck-fillers"
  );

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const beforeAfterImages = [
    { src: "/lovable-uploads/bb3c489c-72d1-457d-b7f8-297e490cd639.png", alt: "Neck fillers before and after results showing dramatic reduction in horizontal neck lines and wrinkly neck", caption: "Neck fillers before and after - see how to get rid of neck lines with professional treatment" },
    { src: "/lovable-uploads/3ab5c4cb-18a8-491d-a52e-ad5ce159af83.png", alt: "Neck filler treatment results showing smoother lines on neck and reduced neck folds", caption: "Professional neck lines treatment results showing enhanced neck profile and reduced neck wrinkles" },
  ];

  const faqs = [
    {
      question: "How long do neck fillers last?",
      answer: "Neck fillers typically last 6-12 months, depending on the type of hyaluronic acid filler used, your metabolism, and lifestyle factors. Regular maintenance sessions help maintain optimal results."
    },
    {
      question: "Are neck fillers painful?",
      answer: "Most patients report minimal discomfort during neck filler injections. We use topical numbing cream or ice packs to minimise any potential pain during the procedure, ensuring a comfortable experience."
    },
    {
      question: "Can neck fillers treat tech neck lines and horizontal neck lines?",
      answer: "Yes, neck fillers are excellent for treating tech neck lines caused by repetitive movements from looking down at devices. The treatment smooths horizontal neck lines and improves skin texture, effectively addressing lines on neck from daily habits."
    },
    {
      question: "What's the recovery time after neck fillers?",
      answer: "There's minimal downtime with neck filler treatment. You may experience mild swelling, redness, or bruising for a few days. Avoid strenuous activities and excessive sun exposure for 24 hours."
    },
    {
      question: "Can neck fillers help with sagging skin?",
      answer: "Neck fillers are effective for mild to moderate skin laxity and sagging. For more advanced cases like pronounced turkey neck, additional treatments such as a neck lift surgery or skin-tightening procedures might be more appropriate."
    },
    {
      question: "What neck lines and neck folds can neck fillers address?",
      answer: "Neck fillers can address horizontal neck lines (necklace lines), tech neck lines caused by device use, neck folds and loose skin, neck wrinkles and neck creases, neckline wrinkles, and loss of volume in wrinkly neck skin. This non surgical neck lift procedure is ideal for those seeking how to get rid of necklace lines, how to eliminate wrinkles on neck, or wondering how do I get rid of neck wrinkles without the face and neck lift cost UK associated with surgery."
    },
    {
      question: "Who is a good candidate for neck fillers?",
      answer: "Neck fillers are ideal for patients with mild to moderate neck wrinkles, people experiencing 'tech neck', those with crepey or thin neck skin, individuals with sun-damaged neck skin, patients with slight skin laxity, and anyone seeking a non-surgical option for neck enhancement."
    },
    {
      question: "How much do neck fillers cost?",
      answer: "Neck filler treatments at Cosmedocs start from £325 per ml. The final cost depends on the amount of product needed and your specific treatment requirements."
    },
    {
      question: "When will I see results from neck fillers?",
      answer: "Results are typically visible immediately after the procedure. However, minor swelling may temporarily obscure final results. Once swelling subsides—usually within a few days to a week—you'll notice a rejuvenated, smoother neck profile. Full results become apparent within 1-2 weeks."
    },
    {
      question: "What are the risks of neck fillers?",
      answer: "While neck filler injections are generally safe, potential risks include infection, allergic reaction, asymmetry, lumpiness, and migration of the filler. Our aesthetic doctor will thoroughly discuss these risks before your procedure."
    },
    {
      question: "Can neck fillers be reversed?",
      answer: "Yes, hyaluronic acid fillers used for neck injections are reversible. If you're not satisfied with results or encounter complications, the filler can be dissolved using hyaluronidase, ensuring flexibility and peace of mind."
    },
    {
      question: "What treatments can be combined with neck filler for optimal neck line results?",
      answer: "Neck filler works excellently with botox for neck lines to relax platysmal bands and reduce horizontal neck lines, skin boosters for deep hydration, Profhilo for enhanced skin quality, and PDO threads for a neck lift non surgical procedure effect. This combination approach represents the best non surgical procedure for neck tightening, offering comprehensive neck lines treatment and turkey neck treatment without surgery. The results rival a lower face and neck lift but without the face and neck lift cost UK or recovery time."
    },
    {
      question: "What should I do before my neck filler treatment?",
      answer: "Avoid blood-thinning agents like aspirin for two weeks before treatment, wean off retinoid products two days prior, stay out of the sun to minimize complications, and follow all pre-treatment instructions provided."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <meta name="keywords" content="neck fillers before and after, botox for neck lines, neck filler, neck lines treatment, neck fillers, horizontal neck lines, neck folds, neck line, how to get rid of neck lines, wrinkly neck, neck lift non surgical procedure, neck lines, neck on the line, lines on neck, neck wrinkles, face and neck lift, lower face and neck lift, non surgical neck lift, non surgery neck lift, non surgical neck lift uk, non surgical neck lift before and after, best non surgical procedure for neck tightening, non surgical chin lift, turkey neck treatment without surgery, face and neck lift cost uk, lower face and neck lift cost uk, neck creases, neckline wrinkles, how to eliminate neck lines, how to get rid of creases in neck, how to get rid of necklace lines, how to eliminate wrinkles on neck, how to remove neck lines, neck wrinkle treatment, why do i have lines on my neck, why do i have lines on my neck teenager, how to reduce neck wrinkles" />
        
        {/* Structured Data - MedicalProcedure */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Neck Filler Treatment",
            "description": "Professional neck filler treatment to smooth horizontal neck lines, vertical neck lines, and tech neck wrinkles using premium hyaluronic acid fillers",
            "procedureType": "Cosmetic dermal filler injection",
            "bodyLocation": "Neck",
            "preparation": "Avoid blood-thinning medications, stay hydrated, avoid sun exposure",
            "followup": "Minimal downtime, avoid strenuous exercise for 24 hours",
            "howPerformed": "Injectable hyaluronic acid fillers administered by expert cosmetic doctors",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "847",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": {
              "@type": "Offer",
              "price": "325",
              "priceCurrency": "GBP",
              "priceValidUntil": "2025-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://www.cosmedocs.co.uk/neck-fillers"
            }
          })}
        </script>

        {/* Structured Data - LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs",
            "description": "Expert neck filler treatments in London - smooth neck lines and wrinkles with premium dermal fillers",
            "url": seoData.canonical,
            "telephone": "+44 20 3733 3227",
            "priceRange": "££",
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
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
          })}
        </script>

        {/* Structured Data - FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>

        {/* Structured Data - BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://cosmedocs.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Neck Fillers",
                "item": seoData.canonical
              }
            ]
          })}
        </script>

        {/* Structured Data - ImageGallery */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Neck Filler Before and After Results",
            "description": "Real patient results from neck filler treatments at Cosmedocs London",
            "image": beforeAfterImages.map(img => ({
              "@type": "ImageObject",
              "url": img.src,
              "description": img.alt,
              "caption": img.caption
            }))
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <div className="page-container pt-20">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Neck Fillers' }
            ]} 
          />
        </div>

        {/* Hero Section - Updated to match TempleFiller design */}
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
                  <span className="text-purple-300">Neck Fillers London</span>
                  <span className="block text-sm mt-4">Invisible art - say bye to sag with smooth neck lines & tech neck treatment</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Neck Enhancement</p>
                  <p className="text-sm text-gray-300">#cosmeneck - Check out our IG for hundreds more authentic looking neck enhancement transformations</p>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Neck Filler Treatment</h2>
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
                <p className="text-gray-300">6-12 months with premium hyaluronic acid</p>
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

        {/* Neck Filler Before & After */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Neck Filler Before & After</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See the transformative results achieved with our expert neck filler treatments. 
                Each patient receives personalized care for optimal neck contouring outcomes.
              </p>
            </motion.div>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {beforeAfterImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                     <motion.div
                       initial={{ opacity: 0, scale: 0.9 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 0.5, delay: index * 0.1 }}
                       viewport={{ once: true }}
                       className="relative group cursor-pointer p-2"
                       onClick={() => setSelectedImageIndex(index)}
                     >
                       <img 
                         src={image.src} 
                         alt={image.alt}
                         loading="lazy"
                         className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                       />
                      <div className="absolute inset-2 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                      <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                        <p className="text-white text-sm font-medium">{image.caption}</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-white border-white hover:bg-white hover:text-black" />
              <CarouselNext className="text-white border-white hover:bg-white hover:text-black" />
            </Carousel>

          </div>
        </section>

        {/* Treatment Overview */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">Neckline Filler Treatment</h2>
              <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
                Neck fillers, also known as <a href="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">neck injections</a> or neck contouring, are a <a href="/non-surgical-treatments" className="text-purple-300 hover:text-purple-200 underline">non-surgical cosmetic procedure</a> designed to improve the overall look of the neck. This treatment targets neck wrinkles, neck lines, and sagging skin, providing a smoother, more youthful look by stimulating collagen and elastin production. Whether you're dealing with horizontal neck lines, neck creases, neckline wrinkles, or wondering how to get rid of neck lines, our expert team can help you achieve natural, beautiful results.
              </p>
              <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mt-4">
                Research published in the <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/jocd.15539" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">Journal of Cosmetic Dermatology</a> has demonstrated the efficacy of hyaluronic acid fillers for neck rejuvenation, confirming their safety and effectiveness in addressing age-related changes in the neck area whilst maintaining natural-looking results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* What Causes Neck Wrinkles */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-300">What Causes Neck Wrinkles?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      Necklines, often referred to as neck wrinkles or neck creases, are creases or folds that develop on the neck skin. These lines can appear as horizontal neck lines (often called necklace lines) or vertical neck lines, varying in depth and severity. Many patients ask "why do I have lines on my neck?" or "how to get rid of neck lines?" - understanding the causes is the first step.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Ageing</h4>
                          <p className="text-gray-400 text-sm">Natural loss of collagen and elasticity leading to wrinkly neck and neck folds</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Sun Exposure</h4>
                          <p className="text-gray-400 text-sm">UV damage accelerates neckline wrinkles and lines on neck formation</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Tech Neck</h4>
                          <p className="text-gray-400 text-sm">Looking down at devices creates horizontal neck lines and neck creases</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Genetics & Lifestyle</h4>
                          <p className="text-gray-400 text-sm">Even teenagers wonder "why do I have lines on my neck teenager" - genetics play a role</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* How Neck Fillers Work */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-300">How Neck Fillers Work</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      Neck fillers work by using premium hyaluronic acid to provide an effective neck wrinkle treatment and answer to how to eliminate neck lines without surgery. This non surgical neck lift procedure delivers natural-looking results for those wondering how to get rid of necklace lines and how to remove neck lines.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Volume Restoration</h4>
                          <p className="text-gray-400 text-sm">Hyaluronic acid replenishes lost volume and addresses how to get rid of creases in neck by plumping the skin from beneath</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Smoothing Horizontal Neck Lines</h4>
                          <p className="text-gray-400 text-sm">Strategically injected filler smooths horizontal neck lines and shows how to eliminate wrinkles on neck effectively</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Collagen Stimulation</h4>
                          <p className="text-gray-400 text-sm">The best non surgical procedure for neck tightening - stimulates natural collagen production for long-term texture improvement</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Natural Rejuvenation</h4>
                          <p className="text-gray-400 text-sm">Turkey neck treatment without surgery for natural-looking rejuvenation, avoiding the face and neck lift cost UK</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits and Aftercare Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Benefits of Neck Fillers */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
              <h3 className="text-3xl font-bold mb-6 text-white">Benefits of Neck Fillers</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Experience the transformative benefits of professional neck lines treatment at Cosmedocs. Our non surgical neck lift procedure offers a safe alternative to traditional face and neck lift surgery, with none of the lower face and neck lift cost UK concerns.
                </p>
                
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Non Surgical Neck Lift UK - No Downtime",
                    "Improves Wrinkly Neck Appearance",
                    "Smooths Neck Folds and Neckline Wrinkles",
                    "Reduces Horizontal Neck Lines Instantly",
                    "Treats Tech Neck and Neck Creases",
                    "Stimulates Collagen for Long-Term Results",
                    "Immediate, Visible Improvement",
                    "Safe, Reversible Treatment"
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-purple-900/30 to-transparent rounded-lg p-4 border border-purple-500/20 flex items-center space-x-4"
                    >
                      <CheckCircle className="text-purple-400 flex-shrink-0" size={24} />
                      <h4 className="text-white font-medium">{benefit}</h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Aftercare */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-6 text-white">Aftercare</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Follow these essential aftercare guidelines to ensure optimal results and minimize any potential side effects.
                </p>
                
                <div className="space-y-4">
                  <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">Immediate Aftercare (24-48 hours)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">Apply ice packs for 10-15 minutes to reduce swelling</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">Avoid strenuous exercise and excessive heat</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">Sleep with your head elevated</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">Avoid touching or massaging the treated area</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">First Week</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">Use gentle skincare products</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">Avoid saunas, steam rooms, and prolonged sun exposure</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">Stay hydrated and maintain a healthy diet</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">Contact clinic if you experience unusual symptoms</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Pricing Section */}
        <section id="pricing-section" className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Neck Filler Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                Transparent pricing for premium neck enhancement treatments. All prices include consultation, 
                treatment, and aftercare support from our expert medical team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20 h-full hover:border-purple-400/40 transition-all">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-white text-xl mb-4">Single Neck Area</CardTitle>
                    <div className="text-purple-300 text-5xl font-bold mb-2">£325</div>
                    <p className="text-gray-400 text-sm">per ml</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-center mb-6">Perfect for targeted neck line treatment</p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-300 text-sm">Consultation included</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-300 text-sm">Premium hyaluronic acid</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={18} />
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
                <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-purple-400 h-full relative shadow-2xl shadow-purple-500/20">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-purple-600 px-6 py-2 rounded-full text-sm font-bold shadow-lg">MOST POPULAR</span>
                  </div>
                  <CardHeader className="text-center pb-4 pt-8">
                    <CardTitle className="text-white text-xl mb-4">Full Neck Treatment</CardTitle>
                    <div className="text-white text-5xl font-bold mb-2">£425</div>
                    <p className="text-purple-100 text-sm">comprehensive treatment</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-50 text-center mb-6">Comprehensive neck enhancement with multiple injection points</p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-white flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-purple-50 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-white flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-purple-50 text-sm">Premium hyaluronic acid</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-white flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-purple-50 text-sm">Extended aftercare support</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-white flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-purple-50 text-sm">2-week follow-up</span>
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
                <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20 h-full hover:border-purple-400/40 transition-all">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-white text-xl mb-4">Consultation Only</CardTitle>
                    <div className="text-purple-300 text-5xl font-bold mb-2">£50</div>
                    <p className="text-gray-400 text-sm">redeemable</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-center mb-6">Professional assessment and treatment planning</p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-300 text-sm">Full neck assessment</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-300 text-sm">Treatment recommendations</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={18} />
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
              <p className="text-gray-400 mb-8 text-sm">
                *Consultation fee is deducted from treatment cost if you proceed on the same day
              </p>
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-gray-200 rounded-full px-10 py-6 text-lg font-semibold shadow-xl"
                onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
              >
                Book Your Consultation
              </Button>
            </motion.div>
          </div>
        </section>


        {/* Medical Authority & Research Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Medical Authority & Research</h2>
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our neck filler treatments are backed by extensive medical research and endorsed by leading aesthetic medicine authorities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20">
                <CardHeader>
                  <Shield className="text-purple-400 mb-2" size={32} />
                  <CardTitle className="text-white text-lg">Clinical Evidence</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 text-sm">
                  <p>Research published in <a href="https://www.ncbi.nlm.nih.gov" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">NCBI</a> demonstrates the safety and efficacy of hyaluronic acid fillers for neck rejuvenation.</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20">
                <CardHeader>
                  <Award className="text-purple-400 mb-2" size={32} />
                  <CardTitle className="text-white text-lg">Professional Bodies</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 text-sm">
                  <p>Aligned with standards set by <a href="https://www.bapras.org.uk" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">BAPRAS</a> for aesthetic procedures.</p>
                </CardContent>
              </Card>


              <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20">
                <CardHeader>
                  <GraduationCap className="text-purple-400 mb-2" size={32} />
                  <CardTitle className="text-white text-lg">Regulatory Compliance</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 text-sm">
                  <p>Fully compliant with <a href="https://www.cqc.org.uk" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">CQC</a> standards for patient safety and care quality.</p>
                </CardContent>
              </Card>
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
                Get answers to common questions about neck filler treatments at our London clinic.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
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
        <section className="py-20 bg-accent">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12 border border-purple-500/20"
            >
              <h2 className="text-3xl font-bold mb-6">Ready for a Smoother, Younger Neck?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Book your consultation with our expert cosmetic doctors and discover how neck fillers 
                can smooth away neck lines for a more youthful appearance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-10 py-6 text-lg font-semibold"
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                >
                  Book Free Consultation
                </Button>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-10 py-6 text-lg font-semibold"
                  onClick={() => window.open('tel:03330551503')}
                >
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Client Reviews */}
        <ClientReviews />

        {/* Hidden SEO content for search engines */}
        <div className="sr-only">
          <h2>Comprehensive Guide to Neck Fillers: Non-Surgical Neck Lift Solutions</h2>
          <p>
            Neck fillers before and after results demonstrate the transformative power of this non-surgical neck lift procedure. If you're wondering how to get rid of neck lines, neck fillers offer an effective solution without the extensive recovery time or face and neck lift cost UK associated with traditional surgery. Our neck filler treatments specifically target horizontal neck lines, neckline wrinkles, neck creases, and neck folds that develop over time.
          </p>
          
          <h3>Understanding Neck Lines Treatment Options</h3>
          <p>
            Many patients ask "why do I have lines on my neck?" or even "why do I have lines on my neck teenager?" The answer lies in multiple factors including genetics, sun exposure, and repetitive movements. Lines on neck can appear as horizontal neck lines (often called necklace lines), vertical neck lines, or neck folds. A wrinkly neck can age your appearance significantly, which is why our neck lines treatment has become increasingly popular as the best non surgical procedure for neck tightening.
          </p>
          
          <h3>Non Surgical Neck Lift UK: The Modern Alternative</h3>
          <p>
            Our non surgical neck lift represents a revolutionary approach to neck rejuvenation. Unlike a traditional face and neck lift or lower face and neck lift, our non surgery neck lift requires no incisions, no general anaesthesia, and minimal downtime. The non surgical neck lift UK procedure has gained immense popularity because it delivers impressive results without the lower face and neck lift cost UK or extensive recovery period. Non surgical neck lift before and after photos showcase natural-looking improvements that help patients understand how to eliminate neck lines effectively.
          </p>
          
          <h3>How to Get Rid of Neck Lines: Treatment Approaches</h3>
          <p>
            For those searching for how to remove neck lines or how to eliminate wrinkles on neck, we offer multiple solutions. Neck filler combined with botox for neck lines provides comprehensive results. Botox for neck lines works by relaxing the platysmal bands that cause horizontal neck lines, whilst fillers restore lost volume and smooth neck creases. This combination represents turkey neck treatment without surgery that delivers natural, long-lasting results. Patients wondering how do I get rid of neck wrinkles or how to get rid of creases in neck find this dual approach particularly effective.
          </p>
          
          <h3>Neck Filler Before and After: What to Expect</h3>
          <p>
            Our neck fillers before and after gallery demonstrates real patient transformations. The neck filler treatment smooths neckline wrinkles, reduces horizontal neck lines, and improves overall neck contour. Whether you're dealing with a wrinkly neck, prominent neck line, or neck on the line concerns, our expertly administered neck filler delivers visible improvements. The treatment works as a non surgical chin lift as well, enhancing the jawline and creating a more defined neck-to-chin transition.
          </p>
          
          <h3>Advanced Neck Lines Treatment Techniques</h3>
          <p>
            Our approach to how to reduce neck wrinkles combines cutting-edge techniques with premium products. We use carefully selected hyaluronic acid fillers that provide natural-looking volume whilst stimulating collagen production for long-term skin quality improvement. This neck wrinkle treatment addresses both superficial neckline wrinkles and deeper neck creases. For patients seeking how to get rid of necklace lines specifically, we employ specialised injection techniques that target these horizontal neck lines with precision.
          </p>
          
          <h3>Cost-Effective Alternative to Surgical Procedures</h3>
          <p>
            When comparing face and neck lift cost UK to our non surgical neck lift procedure, the difference is substantial. Traditional lower face and neck lift cost UK can run into thousands of pounds with extended recovery times. Our neck filler treatment provides a cost-effective, accessible solution with immediate results and minimal disruption to your daily life. The treatment serves as an excellent non surgical chin lift alternative, delivering enhancement without surgical intervention.
          </p>
          
          <h3>Comprehensive Neck Rejuvenation at Cosmedocs</h3>
          <p>
            At our Harley Street clinic, we've perfected the art of neck lines treatment through over 1 million injections since 2007. Whether you're seeking to understand how to eliminate neck lines, looking for the best non surgical procedure for neck tightening, or wanting turkey neck treatment without surgery, our expert team delivers natural, beautiful results. Our 'invisible art' philosophy ensures that your neck filler before and after transformation looks completely natural, never overdone.
          </p>
        </div>
      </div>
    </>
  );
};

export default NeckFillers;