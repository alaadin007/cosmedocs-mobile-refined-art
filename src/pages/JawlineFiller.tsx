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

const JawlineFiller = () => {
  const seoData = generateSEOMetadata(
    "Jawline Filler London | £950 Natural HD Package | Dr. Ahmed Haq | Harley Street",
    "Expert jawline filler treatments in London's Harley Street. Dr. Ahmed Haq offers Natural HD Jawline Package from £950. Create a jaw-dropping jawline - slimmer, sleeker & sharper.",
    "/jawline-filler"
  );

  const bookingUrl = "https://med.as.me/harleystreet";

  // Before/after images for the viewer - Placeholder for actual jawline images
  const beforeAfterImages = [
    // Note: These images need to be replaced with actual jawline filler before/after photos
    // Current images have been moved to NonSurgicalNoseJob.tsx as they were nose filler results
  ];

  const leftColumnFaqs = [
    {
      question: "How much does jawline filler cost in London?",
      answer: "At Cosmedocs Harley Street, our Natural HD Jawline Package is £950. The consultation fee of £50 is included in the treatment cost if you proceed. Final costs depend on your specific requirements and desired results."
    },
    {
      question: "How long do jawline filler results last?",
      answer: "Jawline filler results typically last 15-18 months. The longevity depends on factors like your metabolism, lifestyle, and the type of dermal filler used. This is longer than most facial fillers due to the jaw area's lower muscle movement."
    },
    {
      question: "Is jawline filler safe?",
      answer: "When performed by Dr. Ahmed Haq at our Harley Street clinic, jawline filler treatments are very safe. We use premium dermal fillers and advanced injection techniques to minimize risks and achieve natural-looking results."
    },
    {
      question: "What's the recovery time for jawline filler?",
      answer: "Recovery is minimal with most patients returning to work immediately after treatment. You may experience mild swelling or redness for 24-48 hours. Full recovery typically occurs within 2-7 days with no significant downtime required."
    },
    {
      question: "Can jawline filler create a more masculine appearance?",
      answer: "Yes, jawline filler is excellent for creating a more defined, masculine jawline. The treatment can enhance jaw angles, create a sharper profile, and provide better facial balance and proportion."
    }
  ];

  const rightColumnFaqs = [
    {
      question: "How painful is jawline filler treatment?",
      answer: "Most patients experience minimal discomfort. We use local anesthetic and the dermal fillers contain lidocaine for additional comfort. The jaw area has fewer nerve endings than other facial areas, making it well-tolerated."
    },
    {
      question: "What makes a jawline attractive?",
      answer: "An attractive jawline is well-defined with clear angles, proper proportion to the face, and smooth contours. A defined jawline signifies youth and adds structure and balance to your facial features, like the perfect frame for a portrait."
    },
    {
      question: "How quickly will I see jawline filler results?",
      answer: "Results are visible immediately after treatment, with final results apparent within 2 weeks once any minor swelling subsides. The jawline will appear more defined and sculpted right away."
    },
    {
      question: "What happens during a jawline consultation at Cosmedocs?",
      answer: "Dr. Ahmed Haq will assess your facial anatomy, discuss your aesthetic goals, explain the Natural HD Jawline technique, and create a personalized treatment plan. You'll see before/after photos and understand the entire process."
    },
    {
      question: "Can jawline filler be reversed if needed?",
      answer: "Yes, hyaluronic acid fillers used in jawline treatments can be dissolved with hyaluronidase if needed. This provides flexibility and peace of mind that surgical jaw enhancement cannot offer."
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
        {/* Hero Section */}
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
                  Jawline Filler
                  <span className="block text-purple-300">London</span>
                  <span className="block text-sm mt-4">£950 Natural HD Package</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  Dr. Ahmed Haq | Harley Street
                  <br />
                  Create a jaw-dropping jawline - slimmer, sleeker & sharper
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Natural HD Package £950</p>
                  <p className="text-sm text-gray-300">Slimmer, sleeker & sharper jawline enhancement</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={bookingUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl inline-flex items-center justify-center"
                  >
                    Book Consultation
                  </a>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    View Results
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
              <h2 className="text-3xl font-bold mb-4">Real Patient Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See the dramatic, natural results achieved with our expert jawline filler treatments. 
                Each patient receives a personalized approach for optimal jaw sculpting.
              </p>
            </motion.div>

            <div className="text-center">
              <div className="bg-purple-900/20 rounded-lg p-8 border border-purple-500/20 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-white mb-4">Before & After Gallery Coming Soon</h3>
                <p className="text-gray-300">
                  We're currently updating our jawline filler before and after gallery with authentic patient results. 
                  These images will showcase natural jawline enhancement transformations achieved with our expert techniques.
                </p>
              </div>
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

        {/* Treatment Journey Section */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Jaw Filler Treatment Journey</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Understanding what to expect during your jawline enhancement treatment at Cosmedocs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Treatment Procedure */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white">Treatment Procedure</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">1</div>
                      <p className="text-gray-300">Topical numbing cream applied to the lower face</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">2</div>
                      <p className="text-gray-300">Expert assessment of facial anatomy and aesthetic goals</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">3</div>
                      <p className="text-gray-300">Use of cannula technique to minimize bruising and discomfort</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">4</div>
                      <p className="text-gray-300">Strategic injection of hyaluronic acid fillers along jawline edges</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Aftercare */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardHeader>
                    <CardTitle className="text-white">Aftercare Instructions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Avoid touching face for 6 hours post-treatment</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Sleep with head elevated for first few days</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Avoid hot showers, saunas, swimming for few days</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Refrain from heavy exercise for several days</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Avoid alcohol, coffee, and fish oil immediately after</p>
                    </div>
                  </CardContent>
                </Card>
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
            Jawline fillers at Cosmedocs Harley Street offer the perfect solution for creating a more defined, masculine facial profile. Our Natural HD Jawline Package provides exceptional value at £950, combining premium dermal fillers with Dr. Ahmed Haq's advanced injection techniques. The treatment enhances facial structure, creating better proportions and a more youthful appearance that lasts 15-18 months.
          </p>
          <p>
            Jawline enhancement using dermal fillers has become increasingly popular among men seeking non-surgical facial sculpting. The treatment targets specific areas of the jaw to create definition, improve angles, and enhance overall facial harmony. At our prestigious Harley Street clinic, we specialize in creating natural-looking results that enhance rather than alter your inherent features.
          </p>
          <p>
            The benefits of choosing jawline fillers include immediate results, minimal downtime, and reversible effects. Unlike surgical jaw enhancement, dermal filler treatments allow for gradual improvements and adjustments over time. Our patients typically return to work the same day, with only mild swelling or redness that subsides within 24-48 hours.
          </p>
          <p>
            Dr. Ahmed Haq brings extensive experience in facial anatomy and aesthetic enhancement to every jawline filler treatment. His understanding of masculine facial proportions and advanced injection techniques ensure optimal results while maintaining natural facial movement and expression. The Natural HD technique creates definition without appearing artificial or overdone.
          </p>
          <p>
            Recovery from jawline filler treatment is straightforward, with most patients experiencing minimal side effects. We provide comprehensive aftercare instructions and follow-up appointments to ensure optimal healing and results. The treatment's longevity makes it an excellent investment in facial enhancement, typically requiring touch-ups only every 15-18 months.
          </p>
        </div>
      </div>
    </>
  );
};

export default JawlineFiller;