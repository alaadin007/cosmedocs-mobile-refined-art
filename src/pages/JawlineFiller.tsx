import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, Clock, Calendar, Activity, Syringe, Award, GraduationCap, CheckCircle, Palette, Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import jawlineFiller1ml from "@/assets/jawline-filler-1ml-before-after.png";
import jawlineFiller1mlTransformation from "@/assets/jawline-filler-1ml-transformation.jpg";
import jawlineFiller2ml from "@/assets/jawline-filler-2ml-before-after.png";
import howJawFillerWorks from "@/assets/how-jaw-filler-works-illustration.jpg";
import jawlineGallery1 from "@/assets/jawline-gallery-1.jpg";
import jawlineGallery2 from "@/assets/jawline-gallery-2.jpg";
import jawlineGallery3 from "@/assets/jawline-gallery-3.png";
import jawlineGallery4 from "@/assets/jawline-gallery-4.jpg";
import jawlineGallery5 from "@/assets/jawline-gallery-5.jpg";
import jawlineGallery6 from "@/assets/jawline-gallery-6.jpg";
import jawlineGallery7 from "@/assets/jawline-gallery-7.png";
import jawlineGallery8 from "@/assets/jawline-gallery-8.png";
import jawlineGallery9 from "@/assets/jawline-gallery-9.png";
import jawlineGallery10 from "@/assets/jawline-gallery-10.png";
import jawlineGallery11 from "@/assets/jawline-gallery-11.png";
import jawlineGallery12 from "@/assets/jawline-gallery-12.jpg";

const JawlineFiller = () => {
  const seoData = generateSEOMetadata(
    "Jawline Filler London | £950 Natural HD Package | Dr. Ahmed Haq | Harley Street",
    "Expert jawline filler treatments in London's Harley Street. Dr. Ahmed Haq offers Natural HD Jawline Package from £950. Create a jaw-dropping jawline - slimmer, sleeker & sharper.",
    "/jawline-filler"
  );

  const bookingUrl = "https://med.as.me/harleystreet";

  // Before/after images for the viewer - Real jawline filler results from #cosmejaw gallery
  const beforeAfterImages = [
    {
      src: jawlineFiller1mlTransformation,
      alt: "Jawline filler 1ml before after profile view Harley Street London Cosmedocs treatment results subtle enhancement",
      caption: "Subtle 1ml jawline enhancement achieving natural profile improvement"
    },
    {
      src: jawlineGallery1,
      alt: "Comparison image of jawline and chin before and after filler treatments London Harley Street Cosmedocs",
      caption: "Jawline and chin enhancements with fillers - comprehensive lower face transformation"
    },
    {
      src: jawlineGallery2,
      alt: "Lower face rejuvenation featuring chin, lips, and jawline fillers London Cosmedocs results",
      caption: "Lower face rejuvenation: chin, lips, and jawline fillers for complete facial harmony"
    },
    {
      src: jawlineGallery3,
      alt: "Jawline filler before and after London Harley Street jaw enhancement with fillers",
      caption: "Jaw enhancement with jawline filler - natural definition and improved contours"
    },
    {
      src: jawlineGallery4,
      alt: "Before and after photo showcasing filler enhancements in the jawline, lips, chin and tear trough London",
      caption: "Full face makeover: tear trough, lips, chin and jaw filler transformation"
    },
    {
      src: jawlineGallery5,
      alt: "Jawline and chin fillers before and after London Cosmedocs lower face enhancement dermal fillers",
      caption: "Jawline and chin fillers transformation - lower face enhancement using dermal fillers"
    },
    {
      src: jawlineGallery6,
      alt: "Jawline filler before and after 1ml jaw line filler per side London Harley Street",
      caption: "1ml jawline filler per side - precise enhancement for natural definition"
    },
    {
      src: jawlineGallery7,
      alt: "Jawline filler with chin enhancement before and after London Cosmedocs combined treatment",
      caption: "Jawline filler with chin enhancement - combined treatment for optimal facial balance"
    },
    {
      src: jawlineGallery8,
      alt: "Jawline and chin fillers before and after transformation London Harley Street Cosmedocs",
      caption: "Jawline & chin fillers transformation - expert technique for natural results"
    },
    {
      src: jawlineGallery9,
      alt: "Before and after of jaw filler London jawline enhancement with fillers Cosmedocs",
      caption: "Jawline enhancement with fillers - dramatic improvement in facial structure"
    },
    {
      src: jawlineGallery10,
      alt: "Jawline filler before and after London Harley Street jawline refinement with fillers",
      caption: "Jawline refinement with fillers - subtle yet impactful enhancement"
    },
    {
      src: jawlineGallery11,
      alt: "Before and after photos showcasing the enhancement of the lower facial profile with jawline and chin fillers London",
      caption: "Improved jawline with fillers - enhanced lower facial profile and definition"
    },
    {
      src: jawlineGallery12,
      alt: "A dramatic before and after showcase of jawline and chin angle enhancement with fillers London Cosmedocs",
      caption: "Jawline reimagined: enhanced angles and definition with expert filler placement"
    }
  ];

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
      answer: "Jaw filler can transform various face shapes - from chubby face 1ml jawline filler for subtle definition to 2ml jawline filler for dramatic sculpting. Filler for jawline creates structure, reduces double chin appearance, and enhances weak chins. Jawline injections can also address jowls and provide chin shadow filler effects."
    },
    {
      question: "What's the recovery time for jaw line treatment?",
      answer: "Recovery from jawline treatment is minimal with most patients returning to work immediately after jaw injections. You may experience mild swelling or redness for 24-48 hours. Full recovery typically occurs within 2-7 days with no significant downtime required."
    },
    {
      question: "Can jawline filler for jowls help with sagging?",
      answer: "Yes, jawline filler for jowls is highly effective. Pre jowl filler and jowl filler treatments can significantly improve sagging and create better jaw definition. Before and after jowl fillers show remarkable improvements in facial contours and can reduce the appearance of early jowl formation."
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
      answer: "Chin and jawline filler treatments work beautifully together. We often combine jaw and chin filler for comprehensive lower face enhancement. 1 ml chin filler with jawline treatment creates balanced proportions. Chin line filler and chin crease filler can address specific concerns while jaw fillers enhance overall definition."
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
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs - Jawline Filler",
            "description": "Premium jawline filler treatments in London's Harley Street",
            "url": "https://cosmedocs.com/jawline-filler",
            "telephone": "0333 0551 503",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5074,
              "longitude": -0.1278
            },
            "medicalSpecialty": "Cosmetic Surgery",
            "priceRange": "£950"
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section - Updated to match PDO Thread design */}
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
                  Expert Jawline
                  <span className="block text-purple-300">Filler London</span>
                  <span className="block text-sm mt-4">#cosmejaw</span>
                </h1>
                <p className="text-xl text-purple-300 mb-8 font-semibold">
                  a jaw-dropping jawline - slimmer, sleeker & sharper
                </p>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Natural HD Package £950</p>
                  <p className="text-sm text-gray-300">Expert jaw sculpting • CQC Registered • Natural enhancement results</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => window.open(bookingUrl, "_blank")}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                  >
                    Book Consultation
                  </Button>
                  <BeforeAfterImageViewer 
                    images={beforeAfterImages}
                    triggerLabel="View Results"
                    title="Jawline Filler Before and After"
                    description="Real patient transformations with our expert jawline filler treatments"
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm border-2"
                  />
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

        {/* Before & After Gallery */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Jawline Filler Before and After</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Discover how our patients transformed their confidence with expert jawline filler treatments. 
                Each journey is unique, with personalized approaches that enhance natural features and create beautiful, lasting results.
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
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
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

            <div className="text-center mt-12">
              <BeforeAfterImageViewer 
                images={beforeAfterImages}
                triggerLabel="View All Before & After Photos"
                title="Jawline Filler Results Gallery"
                description="Comprehensive gallery of our jawline enhancement treatments"
              />
            </div>
          </div>
        </section>


        {/* What Is Jawline Filler Section */}
        <section className="py-20">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">What Is Jawline Filler?</h2>
                <p className="text-gray-300 mb-6">
                  Jaw fillers provide a safe, non-surgical solution for achieving a youthful, defined jawline. 
                  The treatment involves injecting hyaluronic acid-based dermal fillers to enhance structure, 
                  hydration, and contour in the jawline area.
                </p>
                <p className="text-gray-300 mb-6">
                  Just <strong>1ml of filler</strong> — about 1/5 of a teaspoon — can make a noticeable 
                  difference, delivering precise, long-lasting results for a beautifully sculpted lower face.
                </p>
                <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-500/20">
                  <h3 className="text-xl font-semibold mb-3 text-purple-300">Jawline Signifies Youth</h3>
                  <p className="text-gray-300">
                    A defined jawline is like the perfect frame for a portrait—it adds structure and balance 
                    to your face. The jawline filler before and after results are stunning, restoring volume, 
                    correcting asymmetry, and creating a beautifully contoured look.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Golden Ratio Face</h3>
                  <p className="text-gray-300 mb-4">
                    Aesthetic experts at Cosmedocs often use the "Golden Ratio" (1:1.618) to create facial harmony. 
                    This means the distance from the center of your lips to your chin should be about 1.618 times 
                    that from your nose to your lips.
                  </p>
                  <p className="text-gray-300">
                    At Cosmedocs, we use this principle to enhance both the chin and jawline, giving you a more 
                    balanced, youthful profile with beautifully natural results.
                  </p>
                </div>
              </motion.div>
            </div>
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
                Jaw filler works by enhancing volume and definition, creating a clear separation between your face and neck. 
                The filler jawline treatment sculpts the natural bone structure for a sharper, more defined jawline tailored to your unique features. Before and after jawline filler results show remarkable transformations.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                Jawline treatment can define your jaw angle, enhance a receding chin with chin and jawline filler, and reduce sagging jowls. 
                Whether you need 1ml jawline filler for subtle enhancement or 2ml jawline filler for dramatic sculpting, the treatment gives 
                projection to weak jawlines and creates stunning jawline before and after results.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Just 1ml jawline filler per side combined with chin and jaw filler can deliver natural, transformative results. 
                Our jawline filler london treatments create beautifully contoured profiles with long-lasting jaw fillers before and after effects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 1ml vs 2ml Jawline Filler Comparison */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">1ml vs 2ml Jawline Filler</h2>
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
                  <h3 className="text-xl text-purple-300 mb-6">Subtle Enhancement</h3>
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
                  <h3 className="text-xl text-purple-300 mb-6">Dramatic Transformation</h3>
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

        {/* Hidden SEO content for search engines */}
        <div className="sr-only">
          <p>
            Jawline filler London treatments at Cosmedocs Harley Street offer the perfect solution for creating a jaw-dropping jawline. Our 1ml jawline filler costs £350 while 2ml jawline filler costs £650, with our Natural HD Package at £950 combining premium dermal fillers with Dr. Ahmed Haq's advanced jawline injections techniques. Jaw filler before and after results show dramatic improvements lasting 15-18 months.
          </p>
          <p>
            Before and after jaw filler galleries showcase incredible transformations using 1ml jawline filler before and after comparisons and 2ml jawline filler results. Our jawline treatment enhances facial structure for chubby face 1ml jawline filler solutions and dramatic jaw and chin filler combinations. Jawline fillers before and after photos demonstrate natural-looking results at our prestigious Harley Street clinic.
          </p>
          <p>
            The benefits of choosing jaw fillers include immediate jawline before and after results, minimal downtime, and reversible effects. Filler for jawline treatments allow gradual improvements with chin and jawline filler combinations. Our patients see instant before and after jawline filler results, returning to work the same day with only mild swelling from the jaw line treatment.
          </p>
          <p>
            Dr. Ahmed Haq specializes in jawline filler for jowls, pre jowl filler, and jowl filler before and after transformations. His expertise in chin shadow filler, chin line filler, and chin crease filler ensures optimal jawline chin filler results. The jawline injections technique creates definition using 1 ml chin filler and comprehensive jaw and chin filler approaches.
          </p>
          <p>
            What does jaw filler do? It creates structure, reduces double chin filler concerns, and provides stunning jowl fillers before and after results. How long does chin filler last? Our chin and jaw filler treatments typically last 15-18 months. The jaw fillers cost includes comprehensive aftercare, making it an excellent investment with remarkable before and after jowl fillers transformations requiring touch-ups only every 15-18 months.
          </p>
        </div>
      </div>
    </>
  );
};

export default JawlineFiller;