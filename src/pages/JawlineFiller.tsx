import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, Clock, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Palette, Heart } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { generateSEOMetadata } from "@/utils/seo";
import ClientReviews from '@/components/ClientReviews';
import { ArrowRight } from "lucide-react";
import jawlineFiller1ml from "@/assets/jawline-filler-1ml-before-after.png";
import jawlineFiller2ml from "@/assets/jawline-filler-2ml-before-after.png";
import jawlineGallery2 from "@/assets/jawline-gallery-2.jpg";

const JawlineFiller = () => {
  const seoData = generateSEOMetadata(
    "Jawline Filler London | £950 | Dr. Ahmed Haq",
    "Sculpt a chiseled, defined jawline with dermal filler. HD Jawline Package creates sharp, masculine contours from £950.",
    "/jawline-filler"
  );

  const bookingUrl = "https://med.as.me/harleystreet";


  const leftColumnFaqs = [
    {
      question: "How much do jawline fillers cost in London?",
      answer: "At Cosmedocs Harley Street, our Natural HD Jawline Package is £950. Individual 1ml jawline filler costs £350, while 2ml jawline filler costs £650. The jaw fillers cost includes consultation fee which is deducted from treatment if you proceed. Final jawline filler cost depends on your specific requirements and desired results."
    },
    {
      question: "How long do jaw fillers last?",
      answer: "Jaw filler results typically last 15-18 months, making them longer-lasting than most facial fillers. How long jaw fillers last depends on factors like your metabolism, lifestyle, and the type of dermal filler used. The jawline area has less muscle movement, which helps extend durability."
    },
    {
      question: "What does jaw filler do for different face shapes?",
      answer: "Jaw filler can transform various face shapes - from chubby face 1ml jawline filler for subtle definition to 2ml jawline filler for dramatic sculpting. Filler for jawline creates structure, reduces double chin appearance with double chin filler techniques, and enhances weak chins using fillers for chin projection. Jawline injections can also address jowls, provide pre jowl filler support, and create chin shadow filler effects for comprehensive facial contouring."
    },
    {
      question: "What's the recovery time for jaw line treatment?",
      answer: "Recovery from jawline treatment is minimal with most patients returning to work immediately after jaw injections. You may experience mild swelling or redness for 24-48 hours. Full recovery typically occurs within 2-7 days with no significant downtime required."
    },
    {
      question: "Can jawline filler for jowls help with sagging?",
      answer: "Yes, jawline filler for jowls is highly effective. Pre jowl filler and jowl filler treatments can significantly improve sagging and create better jaw definition. Jowl fillers before and after photos show remarkable improvements in facial contours, and before and after jowl fillers demonstrate how effectively we can reduce the appearance of early jowl formation whilst enhancing overall jawline structure."
    }
  ];

  const rightColumnFaqs = [
    {
      question: "How painful are jawline injections?",
      answer: "Most patients experience minimal discomfort during jaw injections. We use local anesthetic and the dermal fillers contain lidocaine for additional comfort. The jaw area has fewer nerve endings than other facial areas, making filler jawline treatments well-tolerated."
    },
    {
      question: "Can I see jawline before and after results?",
      answer: "Absolutely! We have extensive jawline before and after galleries showing 1ml jawline filler before and after results, 2ml jawline filler transformations, and jaw filler before and after comparisons. These jawline fillers before and after photos demonstrate the natural enhancement possible with our treatments."
    },
    {
      question: "What about chin and jawline filler combinations?",
      answer: "Chin and jawline filler treatments work beautifully together. We often combine jaw and chin filler for comprehensive lower face enhancement using chin and jaw filler techniques. 1 ml chin filler with jaw line treatment creates balanced proportions. Chin line filler addresses the mandibular border whilst chin crease filler smooths perioral lines. Fillers for chin projection combined with jawline injections enhance overall facial definition for harmonious results."
    },
    {
      question: "How long does chin filler last compared to jaw filler?",
      answer: "How long does chin filler last is similar to jaw fillers - typically 12-18 months. Chin and jaw filler combinations provide long-lasting results. The longevity of fillers for chin and jawline areas is excellent due to less muscle movement in these regions."
    },
    {
      question: "Can jawline chin filler be reversed if needed?",
      answer: "Yes, hyaluronic acid fillers used in jawline chin filler treatments can be dissolved with hyaluronidase if needed. This applies to all our jaw and chin filler treatments, providing flexibility and peace of mind that surgical jaw enhancement cannot offer."
    },
    {
      question: "What aftercare is required following jawline filler treatment?",
      answer: "Post-treatment care includes: avoid touching your face for 6 hours, sleep with head elevated for first few days, avoid hot showers/saunas/swimming for a few days, refrain from heavy exercise for several days, and avoid alcohol, coffee, and fish oil immediately after treatment. These instructions help minimize swelling and ensure optimal results."
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
        <meta property="og:image" content={seoData.image} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        
        {/* Local SEO */}
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        
        {/* Enhanced MedicalBusiness Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs - Jawline Filler London",
            "description": "Premium jawline filler treatments in London's Harley Street by Dr. Ahmed Haq",
            "url": "https://www.cosmedocs.co.uk/jawline-filler",
            "telephone": "+44 20 3733 3227",
            "email": "info@cosmedocs.com",
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
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "16:00"
              }
            ],
            "priceRange": "£350-£950",
            "areaServed": {
              "@type": "City",
              "name": "London"
            },
            "sameAs": [
              "https://www.instagram.com/cosmedocs",
              "https://www.facebook.com/cosmedocs"
            ]
          })}
        </script>


        {/* Offer Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Natural HD Jawline Package",
            "description": "Comprehensive jawline sculpting treatment package",
            "price": "950",
            "priceCurrency": "GBP",
            "availability": "https://schema.org/InStock",
            "url": "https://www.cosmedocs.co.uk/jawline-filler",
            "priceValidUntil": "2025-12-31",
            "seller": {
              "@type": "MedicalClinic",
              "name": "Cosmedocs",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Harley Street",
                "addressLocality": "London",
                "addressRegion": "Greater London",
                "postalCode": "W1G 9PF",
                "addressCountry": "GB"
              }
            }
          })}
        </script>

        {/* FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              ...leftColumnFaqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              })),
              ...rightColumnFaqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            ]
          })}
        </script>

        {/* VideoObject Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Jawline Filler Treatment Process",
            "description": "Watch the professional jawline filler treatment technique used at Cosmedocs",
            "thumbnailUrl": "https://img.youtube.com/vi/Y3gCG1n2ioo/maxresdefault.jpg",
            "uploadDate": "2024-01-01",
            "contentUrl": "https://www.youtube.com/watch?v=Y3gCG1n2ioo",
            "embedUrl": "https://www.youtube.com/embed/Y3gCG1n2ioo",
            "duration": "PT30M"
          })}
        </script>

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Jawline Filler Treatment",
            "provider": {
              "@type": "MedicalClinic",
              "name": "Cosmedocs",
              "url": "https://www.cosmedocs.co.uk",
              "telephone": "+44 20 3733 3227",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Harley Street",
                "addressLocality": "London",
                "addressRegion": "Greater London",
                "postalCode": "W1G 9PF",
                "addressCountry": "GB"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "London"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Jawline Filler Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "1ml Jawline Filler"
                  },
                  "price": "350",
                  "priceCurrency": "GBP"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Natural HD Jawline Package"
                  },
                  "price": "950",
                  "priceCurrency": "GBP"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <div className="page-container pt-4">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Treatments", href: "/treatments" },
              { label: "Jawline Filler" }
            ]}
          />
        </div>

        {/* Hero Section - Matching ThreadFaceLift style */}
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Jawline
                <span className="block text-purple-300">Filler London</span>
              </h1>
              <p className="text-xl text-white mb-8">
                a jaw-dropping jawline - slimmer, sleeker & sharper
              </p>
              <p className="text-xl mb-2">
                <span className="text-purple-300 font-semibold">Invisible Art</span>
              </p>
              <p className="text-white mb-8">
                Jaw sculpting transformation that speaks without saying a word
              </p>
              <p className="text-sm text-gray-300 mb-8">
                #cosmejaw #jawlinefiller #jawsculpting - Expert jaw sculpting with natural enhancement results
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.open(bookingUrl, "_blank")}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 text-lg font-semibold"
                >
                  Book Consultation
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing-section');
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-4 text-lg font-semibold"
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
              <h2 className="text-3xl font-bold mb-8 text-white">Jawline Filler Treatment</h2>
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
                <p className="text-gray-300">15-18 months with premium dermal fillers</p>
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
                <p className="text-gray-300">Local anaesthetic + lidocaine in filler</p>
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
                  Real Results: <span className="text-[#C9A050] font-light">Jawline Filler Before & After</span>
                </h2>
                <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                  Below is an example of jawline filler used to restore lower face definition and enhance jaw contour. 
                  Strategic placement creates a sharper, more sculpted jawline while maintaining natural facial balance and proportion.
                </p>
                <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900 mb-3">
                  <img
                    src={jawlineGallery2}
                    alt="Before and after jawline filler showing lower face rejuvenation and enhanced jaw contour"
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                </div>
                <p className="text-white/30 text-xs font-light italic mb-6">
                  All images show real patients treated by our doctors at our Harley Street clinic. Individual results vary depending on facial structure and treatment plan.
                </p>
                <Link
                  to="/before-after/dermal-fillers/jawline/"
                  className="inline-flex items-center gap-2 text-[#C9A050] text-sm font-medium hover:underline"
                >
                  View real jawline filler before & after results
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-white/30 text-xs font-light mt-2">
                  Includes subtle definition, jowl correction, and comprehensive jawline sculpting cases.
                </p>
              </motion.div>
            </div>
          </div>
        </section>


        {/* What Is Jawline Filler Section */}
        <section className="py-20">
          <div className="page-container">
            {/* Main Heading and Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6">What Is Jawline Filler?</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Jaw fillers provide a safe, non-surgical solution for achieving a youthful, defined jawline. 
                The treatment involves injecting <strong>hyaluronic acid (HA)-based dermal fillers</strong> to enhance structure, 
                hydration, and contour in the jawline area. Similar to{" "}
                <Link to="/dermal-fillers" className="text-purple-400 hover:text-purple-300 underline font-medium">
                  dermal filler treatments
                </Link>
                , jawline fillers use premium FDA-approved products.
              </p>
            </motion.div>

            {/* Two Column Layout: Concerns & Key Facts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Common Concerns */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-purple-900/20 rounded-xl p-8 border border-purple-500/20 h-full">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">Common Jawline Concerns</h3>
                  <p className="text-gray-300 mb-6">
                    Patients seek jawline filler treatments for various aesthetic concerns:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="text-purple-400 mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-white">Weak or Undefined Jawlines</strong>
                        <p className="text-gray-300 text-sm mt-1">Lacking natural definition and structure</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-purple-400 mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-white">Age-Related Volume Loss</strong>
                        <p className="text-gray-300 text-sm mt-1">Causing jowl formation and sagging appearance</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-purple-400 mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-white">Round or Soft Face Shapes</strong>
                        <p className="text-gray-300 text-sm mt-1">Seeking more angular, sculpted contours</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-purple-400 mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-white">Asymmetrical Jawlines</strong>
                        <p className="text-gray-300 text-sm mt-1">Requiring balance and proportion correction</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Treatment Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-8 border border-purple-500/20">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Jawline Signifies Youth</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A defined jawline is like the perfect frame for a portrait—it adds structure and balance 
                    to your face. The jawline filler before and after results are stunning, restoring volume, 
                    correcting asymmetry, and creating a beautifully contoured look.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-8 border border-purple-500/20">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Precise Results</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Just <strong className="text-purple-300">1ml of filler</strong> — about 1/5 of a teaspoon — can make a noticeable 
                    difference, delivering precise, long-lasting results for a beautifully sculpted lower face.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Many patients combine this with{" "}
                    <Link to="/chin-filler" className="text-purple-400 hover:text-purple-300 underline font-medium">
                      chin filler treatments
                    </Link>{" "}
                    for comprehensive lower face enhancement.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Golden Ratio Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl p-10 border border-purple-500/30 text-center">
                <h3 className="text-2xl font-semibold mb-6 text-white">The Golden Ratio Face</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Aesthetic experts at Cosmedocs often use the <strong className="text-purple-300">"Golden Ratio" (1:1.618)</strong> to create facial harmony. 
                  This means the distance from the centre of your lips to your chin should be about 1.618 times 
                  that from your nose to your lips.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  At Cosmedocs, we use this principle to enhance both the chin and jawline, giving you a more 
                  balanced, youthful profile with beautifully natural results.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Jaw Filler Benefits</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                At Cosmedocs, jaw fillers offer multiple benefits for both men and women seeking facial enhancement. 
                Clinical research demonstrates impressive longevity, with{" "}
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/38934231/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-purple-400 hover:text-purple-300 underline font-medium"
                >
                  studies showing positive outcomes
                </a>{" "}
                lasting 6-12 months, and in many cases extending beyond 48 weeks, particularly with advanced filler formulations and appropriate retreatment schedules.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Define the Jawline",
                  description: "Create clear definition and enhance your lower face structure"
                },
                {
                  title: "Reduce Double Chin Appearance",
                  description: "Minimize the look of double chin through better facial contouring"
                },
                {
                  title: "Boost Natural Collagen",
                  description: "Stimulate your skin's natural collagen production for lasting results"
                },
                {
                  title: "Rejuvenate Facial Volume",
                  description: "Restore age-related volume loss for a more youthful appearance"
                },
                {
                  title: "Enhance Weak Chin",
                  description: "Strengthen and project a receding or weak chin area"
                },
                {
                  title: "Lift Sagging Jowls",
                  description: "Improve the appearance of early jowl formation and sagging skin"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black rounded-lg p-6 border border-gray-800 hover:border-purple-500/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-500/20 max-w-2xl mx-auto">
                <p className="text-gray-300">
                  The most important benefit of jawline filler treatment at our London clinic is improving 
                  patients' self-confidence at the best jawline filler cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Does Jaw Filler Work Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">How Does Jaw Filler Work?</h2>
              <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                Jaw filler enhances volume and definition, creating a sharper jawline tailored to your features. At Cosmedocs, we use <strong>specialised hyaluronic acid (HA) fillers</strong> specifically formulated for jawline enhancement. These advanced fillers feature a <strong>thicker, more cohesive gel structure</strong> compared to standard facial fillers, providing superior structural support and projection whilst maintaining natural movement and flexibility.
              </p>
              
              <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-500/20 mb-6 text-left">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Why Hyaluronic Acid for Jawlines?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="text-purple-400 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span><strong>Biodegradable & Safe:</strong> HA is naturally found in your skin, making it biocompatible and fully biodegradable over time</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-purple-400 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span><strong>Dense Formulation:</strong> Thicker, more robust HA gel provides structural lift and definition essential for jawline contouring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-purple-400 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span><strong>Reversible Results:</strong> Can be safely dissolved if needed, providing peace of mind and flexibility</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-purple-400 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span><strong>Long-lasting:</strong> Premium HA formulations designed for structural support last 15-18 months in the jawline area</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                Jawline injections using hyaluronic acid address concerns from double chin filler needs to comprehensive contouring. According to the <a href="https://baaps.org.uk/media/press_releases/1891/cosmetic_surgery_trends_2024_facial_rejuvenation_surges_while_mens_procedures_decline?" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">British Association of Aesthetic Plastic Surgeons</a>, dermal filler treatments show remarkable before and after jawline filler results.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Jaw line treatment defines your jaw angle, enhances receding chins with jawline chin filler and chin line filler, and reduces jowls. Fillers for chin enhancement combined with chin crease filler create lower face rejuvenation. Our jawline filler London treatments deliver beautifully contoured jaw fillers before and after effects. Combine with <a href="/masseter-botox" className="text-purple-300 hover:underline">masseter Botox</a> or <a href="/botox-london" className="text-purple-300 hover:underline">anti-wrinkle treatments</a> for comprehensive results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 1ml vs 2ml Jawline Filler Comparison */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">1ml vs 2ml Jawline Filler</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Choose the perfect volume for your desired transformation. From subtle enhancement to dramatic sculpting.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* 1ml Option */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-full inline-block mb-4">
                    <span className="text-2xl font-bold">1ml Jawline Filler</span>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-6">Subtle Enhancement</h3>
                </div>
                
                <div className="relative">
                  <img 
                    src={jawlineFiller1ml} 
                    alt="1ml jawline filler before after results London Harley Street subtle enhancement"
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-sm text-gray-300 mt-3 text-center">
                    Natural jawline definition with 1ml enhancement - perfect for first-time patients
                  </p>
                </div>
              </motion.div>

              {/* 2ml Option */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full inline-block mb-4">
                    <span className="text-2xl font-bold">2ml Jawline Filler</span>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-6">Dramatic Transformation</h3>
                </div>
                
                <div className="relative">
                  <img 
                    src={jawlineFiller2ml} 
                    alt="2ml jawline filler before after results London Harley Street dramatic transformation"
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-sm text-gray-300 mt-3 text-center">
                    Strong, defined jaw angles with 2ml enhancement - ideal for significant sculpting
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-16">
              <div className="bg-purple-900/20 rounded-lg p-8 border border-purple-500/20 max-w-3xl mx-auto">
                <h4 className="text-white text-xl font-semibold mb-4">Not sure which option is right for you?</h4>
                <p className="text-gray-300">
                  Our expert team will assess your facial anatomy, discuss your aesthetic goals, and recommend 
                  the optimal treatment volume during your consultation.
                </p>
              </div>
            </div>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Jawline Filler Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for premium jawline enhancement treatments. All prices include consultation, 
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
                    <CardTitle className="text-white text-2xl">1ml Jawline Filler</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£350</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Perfect for subtle enhancement and first-time treatments</p>
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
                    <CardTitle className="text-white text-2xl">Natural HD Package</CardTitle>
                    <div className="text-white text-4xl font-bold">£950</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Comprehensive jawline sculpting for dramatic results</p>
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
              
              <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-500/20 max-w-3xl mx-auto mt-8">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-purple-300">Individual Results May Vary:</strong> Treatment outcomes depend on individual factors including facial anatomy, skin quality, metabolism, lifestyle, and adherence to aftercare instructions. The results shown in before-and-after images are specific to those patients and may not represent typical results. Your practitioner will discuss realistic expectations during your consultation based on your unique facial structure and aesthetic goals.
                </p>
              </div>
            </motion.div>
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
                <h3 className="text-lg font-semibold text-white mb-2">Aesthetic</h3>
                <p className="text-gray-300">'Invisible art' philosophy for natural results</p>
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


        {/* Video Section */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Watch Jawline Filler Treatment</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See the jawline filler treatment process and understand what to expect during your appointment.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-2xl overflow-hidden bg-black"
              >
                <iframe
                  src="https://www.youtube.com/embed/Y3gCG1n2ioo"
                  title="Jawline Filler Treatment Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
              
              <div className="text-center mt-8">
                <p className="text-gray-300 mb-4">
                  This video demonstrates the professional jawline filler technique used at Cosmedocs, 
                  showing the precision and care taken during each treatment.
                </p>
                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/20 inline-block">
                  <p className="text-purple-300 font-semibold">
                    Treatment Time: 30 minutes | Results Last: 15-18 months
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
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
                Get answers to common questions about jawline filler treatments at our London clinic.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-4">
                  {leftColumnFaqs.map((faq, index) => (
                    <div key={index} className="bg-black rounded-lg border-gray-800 border">
                      <details className="group">
                        <summary className="flex justify-between items-center px-6 py-4 cursor-pointer list-none hover:bg-gray-900 rounded-lg">
                          <span className="text-white font-medium">{faq.question}</span>
                          <span className="transition-transform group-open:rotate-180">
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          </span>
                        </summary>
                        <div className="px-6 pb-4 text-gray-300">
                          {faq.answer}
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
                
                {/* Right Column */}
                <div className="space-y-4">
                  {rightColumnFaqs.map((faq, index) => (
                    <div key={index} className="bg-black rounded-lg border-gray-800 border">
                      <details className="group">
                        <summary className="flex justify-between items-center px-6 py-4 cursor-pointer list-none hover:bg-gray-900 rounded-lg">
                          <span className="text-white font-medium">{faq.question}</span>
                          <span className="transition-transform group-open:rotate-180">
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          </span>
                        </summary>
                        <div className="px-6 pb-4 text-gray-300">
                          {faq.answer}
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
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
              <h2 className="text-3xl font-bold mb-4">Ready for a Jaw-Dropping Jawline?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with Dr. Ahmed Haq and discover how jawline fillers 
                can enhance your natural features with sophisticated, masculine results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={bookingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 inline-flex items-center justify-center font-semibold"
                >
                  Book Free Consultation
                </a>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Client Reviews */}
        <ClientReviews />
      </div>
    </>
  );
};

export default JawlineFiller;