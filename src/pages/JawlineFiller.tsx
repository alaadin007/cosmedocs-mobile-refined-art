import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";

const JawlineFiller = () => {
  const seoData = generateSEOMetadata(
    "Jawline Filler London | £950 Natural HD Package | Dr. Ahmed Haq | Harley Street",
    "Expert jawline filler treatments in London's Harley Street. Dr. Ahmed Haq offers Natural HD Jawline Package from £950. Create a jaw-dropping jawline - slimmer, sleeker & sharper.",
    "/jawline-filler"
  );

  const bookingUrl = "https://med.as.me/schedule.php?appointmentType=17376873";

  // Before/after images for the viewer
  const beforeAfterImages = [
    {
      src: "/lovable-uploads/8f741338-3fd5-4feb-9d34-270856fb99c5.png",
      alt: "Jawline filler London progression results by Dr Ahmed Haq at Cosmedocs Harley Street showing gradual jaw enhancement",
      caption: "Progressive jawline transformation over 3 months showing natural enhancement"
    },
    {
      src: "/lovable-uploads/16fa7311-00af-4ea7-b353-73f981f6d87c.png",
      alt: "Jawline filler before and after profile view Harley Street London Cosmedocs treatment results",
      caption: "Dramatic profile enhancement achieving perfect jaw definition"
    },
    {
      src: "/lovable-uploads/717753b3-1c9d-43bd-bdc1-ca245fc3c284.png",
      alt: "Jawline filler immediate results London Dr Ahmed Haq Cosmedocs Harley Street dermal filler treatment",
      caption: "Immediate transformation showing sculpted jawline and enhanced definition"
    },
    {
      src: "/lovable-uploads/d5cec131-9f61-4b49-9dba-8658eda2eddf.png",
      alt: "Jawline filler treatment progression London Harley Street Cosmedocs jaw sculpting results",
      caption: "Treatment progression showing results developing over time"
    },
    {
      src: "/lovable-uploads/a9ac5188-66f2-420b-9b39-3449dc02ff7b.png",
      alt: "Jawline filler side profile comparison before after London Cosmedocs Harley Street jaw enhancement",
      caption: "Side profile showing enhanced jawline projection and masculine definition"
    },
    {
      src: "/lovable-uploads/97c76ea5-245e-43c2-8b89-533f365f4969.png",
      alt: "Jawline filler technique showing jaw sculpting correction London Harley Street Cosmedocs",
      caption: "Advanced technique demonstrating jaw contouring and facial harmony"
    }
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
                  Expert Jawline
                  <span className="block text-purple-300">Sculpting</span>
                  <span className="block text-sm mt-4">Natural HD jawline enhancement for perfect proportions</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  <span className="text-purple-300 font-semibold">Invisible Art</span>
                  <br />
                  Transformation that speaks without saying a word
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

        {/* Before & After Gallery */}
        <section className="py-20 bg-accent">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beforeAfterImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                </motion.div>
              ))}
            </div>

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

        {/* Treatment Summary */}
        <section className="py-20">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Jawline Filler Treatment Summary</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Treatment Duration</h3>
                    <p className="text-gray-300">30-45 minutes including consultation</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Results Duration</h3>
                    <p className="text-gray-300">15-18 months with premium dermal fillers</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Recovery Time</h3>
                    <p className="text-gray-300">Minimal downtime, return to work same day</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Anaesthesia</h3>
                    <p className="text-gray-300">Local anaesthetic + lidocaine in filler</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none">
                  <CardHeader>
                    <CardTitle className="text-white">Why Choose Cosmedocs?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Over 1 million injections performed since 2007</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">
                        <a 
                          href="https://www.harleystreetinstitute.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-300 hover:text-purple-200 underline"
                        >
                          Harley Street Institute
                        </a> trainers - we are the trainers
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Premium FDA-approved dermal fillers only</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">'Invisible art' philosophy for natural results</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Comprehensive aftercare and follow-up</p>
                    </div>
                  </CardContent>
                </Card>
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