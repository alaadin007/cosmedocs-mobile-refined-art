import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
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
import { Check, Clock, Calendar, Activity, Syringe, CheckCircle, Award, GraduationCap, Palette, Heart } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import Breadcrumb from "@/components/Breadcrumb";

const BruxismBotox = () => {
  const seoData = generateSEOMetadata(
    "Bruxism Botox London | TMJ Treatment | Cosmedocs",
    "Expert bruxism botox treatment in London for teeth grinding and TMJ disorders. Botox for clenched jaw and jaw pain. Professional masseter botox by cosmetic doctors at Harley Street.",
    "/bruxism-botox"
  );

  const beforeAfterImages = [
    { src: "/src/assets/masseter-botox-bruxism.jpg", alt: "Before and after photos of masseter Botox for bruxism, showing significant muscle reduction", caption: "Note the remarkable difference in the jawline angle and muscle size before and after masseter Botox treatment." },
    { src: "/src/assets/botox-for-teeth-grinding.png", alt: "A doctor marking the masseter muscle on a patient's jawline in preparation for Botox treatment", caption: "TMJ Botox: Our doctor marks the masseter muscle for precise Botox for Bruxism treatment." }
  ];

  const faqs = [
    {
      question: "How does botox help with bruxism and TMJ?",
      answer: "Botox relaxes the masseter muscles responsible for jaw clenching and teeth grinding. This reduces muscle tension, alleviates TMJ pain, and prevents dental damage while creating a slimmer jawline as a cosmetic benefit."
    },
    {
      question: "How long do bruxism botox results last?",
      answer: "Bruxism botox results typically last 4-6 months. The masseter muscles gradually regain strength, requiring maintenance treatments to sustain therapeutic benefits and prevent return of grinding symptoms."
    },
    {
      question: "Is bruxism botox painful?",
      answer: "Bruxism botox involves moderate discomfort due to the thick masseter muscles. Most patients describe it as pressure sensations during injection. The treatment takes 10-15 minutes with our doctors using specialized techniques."
    },
    {
      question: "What can I expect after bruxism botox treatment?",
      answer: "You may experience mild jaw tenderness for 24-48 hours. Grinding reduction begins within 1-2 weeks, with maximum benefits at 4-6 weeks. Jawline slimming becomes noticeable after 6-8 weeks of treatment."
    },
    {
      question: "Am I a good candidate for bruxism botox?",
      answer: "Ideal candidates have teeth grinding, jaw clenching, TMJ pain, or enlarged masseter muscles. A consultation will assess your jaw function and determine if this therapeutic treatment is appropriate for your condition."
    },
    {
      question: "How much does bruxism botox cost?",
      answer: "Bruxism botox at Cosmedocs costs £300-450 depending on the severity and muscle size. This therapeutic treatment requires higher doses than cosmetic botox for effective muscle relaxation and symptom relief."
    },
    {
      question: "Can bruxism botox be combined with other treatments?",
      answer: "Yes! Bruxism botox can be combined with cosmetic facial botox and dermal fillers for comprehensive aesthetic and therapeutic benefits. Our doctors create personalized treatment plans addressing both concerns."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <meta name="keywords" content="bruxism botox, TMJ botox, teeth grinding treatment, botox for clenched jaw, botox and teeth grinding, botox for jaw pain, botox for tmj, botox to stop teeth grinding, bruxism treatment, jaw clenching, teeth grinding botox, masseter botox, Harley Street clinic" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Cosmedocs",
            "description": "Expert bruxism botox and TMJ treatments in London",
            "url": seoData.canonical,
            "telephone": "+44 20 3733 3227",
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
            "priceRange": "££",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "132"
            },
            "availableService": {
              "@type": "MedicalProcedure",
              "name": "Bruxism Botox Treatment"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Bruxism Botox Treatment",
            "alternateName": ["TMJ Botox", "Teeth Grinding Treatment", "Botox for Jaw Clenching", "Masseter Botox"],
            "description": "Professional bruxism botox treatment for teeth grinding, jaw clenching, and TMJ disorders using botulinum toxin injections in masseter muscles.",
            "procedureType": "Therapeutic and Cosmetic",
            "bodyLocation": "Jaw and Masseter Muscles",
            "preparation": "Avoid blood thinners 24 hours before treatment",
            "followup": "2-4 week assessment",
            "howPerformed": "Precision injection of botulinum toxin into masseter and temporalis muscles using specialized techniques",
            "provider": {
              "@type": "MedicalOrganization",
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
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Bruxism Botox Treatment",
            "description": "Therapeutic botox treatment for bruxism and TMJ - £350-£450",
            "price": "350",
            "priceCurrency": "GBP",
            "availability": "https://schema.org/InStock",
            "url": seoData.canonical,
            "priceValidUntil": "2025-12-31",
            "seller": {
              "@type": "MedicalOrganization",
              "name": "Cosmedocs"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How does botox help with bruxism and TMJ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Botox relaxes the masseter muscles responsible for jaw clenching and teeth grinding. This reduces muscle tension, alleviates TMJ pain, and prevents dental damage while creating a slimmer jawline as a cosmetic benefit."
                }
              },
              {
                "@type": "Question",
                "name": "How long do bruxism botox results last?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bruxism botox results typically last 4-6 months. The masseter muscles gradually regain strength, requiring maintenance treatments to sustain therapeutic benefits and prevent return of grinding symptoms."
                }
              },
              {
                "@type": "Question",
                "name": "How much does bruxism botox cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bruxism botox at Cosmedocs costs £300-450 depending on the severity and muscle size. This therapeutic treatment requires higher doses than cosmetic botox for effective muscle relaxation and symptom relief."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb */}
        <div className="page-container pt-20">
          <Breadcrumb 
            items={[
              { label: 'Treatments', path: '/treatments' },
              { label: 'Botox Treatments', path: '/botox-london' }
            ]}
            currentPage="Bruxism Botox"
          />
        </div>

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
                  <span className="text-purple-300">Bruxism Botox London</span>
                  <span className="block text-sm mt-4">Expert treatment for teeth grinding, jaw clenching, and TMJ disorders</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">TMJ Botox & Teeth Grinding Treatment</p>
                  <p className="text-lg text-gray-300 mb-4">
                    Botox for clenched jaw and jaw pain relief. Professional bruxism treatment at Harley Street clinic.
                  </p>
                  <p className="text-sm text-gray-300">10-15 minutes • Results last 4-6 months • £350-£450</p>
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
                    onClick={() => {
                      const pricingSection = document.getElementById('pricing-section');
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
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
              <h2 className="text-3xl font-bold mb-8 text-white">Bruxism Botox Treatment</h2>
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
                <p className="text-gray-300">10-15 minutes including consultation</p>
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
                <p className="text-gray-300">4-6 months with gradual muscle return</p>
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
                <p className="text-gray-300">Immediate return to activities</p>
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
                <p className="text-gray-300">Topical anaesthetic if required</p>
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
              <h2 className="text-3xl font-bold mb-4">Bruxism Botox Before and After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how our expert bruxism botox treatments reduce jaw tension while creating a slimmer, more defined jawline.
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
                        loading="lazy"
                        width="400"
                        height="256"
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

        {/* What is Bruxism Botox */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">TMJ Botox & Bruxism Treatment</h2>
              <div className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
                <p>
                  <strong>Botox for TMJ</strong> and <strong>bruxism botox</strong> works by gently relaxing the overactive jaw muscles responsible for <strong>teeth grinding</strong>, <strong>jaw clenching</strong>, and jaw tension. 
                  According to the <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3893479/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">National Institutes of Health</a>, 
                  bruxism affects approximately 8-31% of the general population and can lead to significant dental damage if left untreated.
                  By reducing strain on the <Link to="/masseter-botox" className="text-purple-300 hover:text-purple-200 underline">masseter</Link> and surrounding muscles, this <strong>teeth grinding treatment</strong> provides both functional relief and subtle aesthetic benefits. 
                  Our expert <strong>botox for clenched jaw</strong> therapy targets <strong>bruxism teeth grinding symptoms</strong> while naturally slimming the jawline. 
                  This proven <strong>bruxism treatment</strong> helps patients who <strong>grind teeth</strong> at night or experience <strong>symptoms of clenched jaw</strong> during the day.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-white text-2xl text-center">Understanding Bruxism and TMJ</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                    <p>
                      <strong className="text-white">Bruxism Botox & Botox for Teeth Grinding:</strong> <strong>Botox to stop teeth grinding</strong> helps prevent teeth damage, reduces <strong>jaw teeth grinding</strong> frequency, and may create a softer, more refined <strong>bruxism jawline</strong>. 
                      This effective <strong>treatment of teeth grinding</strong> addresses <strong>bruxism teeth</strong> wear and <strong>teeth clenching</strong> habits. Many patients combine this with <Link to="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">dermal fillers</Link> for comprehensive facial rejuvenation.
                    </p>
                    
                    <p>
                      <strong className="text-white">TMJ Botox & Botox for Jaw Pain:</strong> Relieves <strong>jaw pain</strong>, headaches, and stiffness linked to temporomandibular joint disorder. 
                      Our <strong>botox jaw clenching</strong> treatment effectively manages <strong>clench jaw symptoms</strong> and <strong>clenching jaw</strong> tension. 
                      Many patients searching "how I cured my bruxism" discover <strong>botox and teeth grinding</strong> treatment as an effective solution, often pairing it with <Link to="/chin-filler" className="text-purple-300 hover:text-purple-200 underline">chin enhancement</Link> for balanced facial aesthetics.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 max-w-2xl mx-auto">
                <p className="text-gray-300 text-center">
                  Safe, minimally invasive, and effective, <strong>teeth grinding botox</strong> targets the root cause of jaw discomfort — offering long-lasting relief and improved quality of life. 
                  <a href="https://www.plasticsurgery.org/cosmetic-procedures/botulinum-toxin" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline"> Research from the American Society of Plastic Surgeons</a> confirms 
                  that botulinum toxin has an outstanding safety record with minimal side effects when administered by qualified practitioners.
                  Understanding <strong>bruxism signs and symptoms</strong> is crucial for effective <strong>bruxism treatments</strong> and finding the right <strong>bruxism cure</strong>.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Causes of Bruxism */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Causes of Bruxism Disease</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                <strong>Bruxism</strong> (also known as <strong>bruxismo</strong> or <strong>bruxims</strong>), commonly known as <strong>teeth grinding</strong> and <strong>jaw grinding</strong>, can be caused by several factors. 
                Understanding <strong>bruxism teeth grinding symptoms</strong> and <strong>teeth grinding symptoms</strong> is crucial for effectively managing this <strong>bruxism disease</strong> and finding appropriate <strong>bruxism treatments</strong> to <strong>treat teeth grinding</strong>.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/src/assets/bruxism-effects.jpg" 
                  alt="Bruxism teeth grinding long term effects showing teeth wear, jaw clenching damage and symptoms of clenched jaw"
                  className="w-full rounded-lg shadow-2xl"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <p className="text-gray-400 text-sm mt-2 text-center">
                  <strong>Botox for bruxism grinding</strong> reduces the pressure on the teeth, preventing long-term wear and tear from <strong>bruxism teeth</strong> damage and <strong>clenching teeth</strong>.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Primary Causes:</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                        <span><strong>Stress and Anxiety:</strong> Major contributors leading to involuntary jaw clenching and grinding, especially during sleep</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                        <span><strong>Misaligned Teeth:</strong> Can disrupt normal jaw alignment and function</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                        <span><strong>Lifestyle Habits:</strong> Smoking, heavy alcohol consumption, and excessive caffeine</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                        <span><strong>Medications:</strong> Certain medications and medical conditions can predispose individuals to bruxism</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TMJ Botox Helps */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">TMJ Botox & Botox TMJ Treatment Helps With:</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                <strong>Jaw grinding</strong> and <strong>bruxism grinding</strong> can enlarge the masseter muscle, which is responsible for chewing. 
                A <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5870198/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">clinical study published in the Journal of Oral Rehabilitation</a> demonstrated 
                that botulinum toxin injections significantly reduce bruxism symptoms with minimal adverse effects.
                Our therapeutic <Link to="/botox-london" className="text-purple-300 hover:text-purple-200 underline">botox</Link> provides relief from multiple <strong>symptoms of clenched jaw</strong> and <strong>clench jaw symptoms</strong>.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Check className="w-6 h-6" />, title: "Headaches and Migraines", description: "Reduce tension-related headaches", link: "/migraine-botox" },
                { icon: <Check className="w-6 h-6" />, title: "Earaches", description: "Relieve referred ear pain" },
                { icon: <Check className="w-6 h-6" />, title: "Facial Pain", description: "Alleviate jaw and facial discomfort" },
                { icon: <Check className="w-6 h-6" />, title: "Neck Pain", description: "Reduce tension in neck muscles" },
                { icon: <Check className="w-6 h-6" />, title: "Chipped Teeth & Sensitivity", description: "Prevent dental damage" },
                { icon: <Check className="w-6 h-6" />, title: "Chewed Tissue", description: "Protect inside of mouth" },
                { icon: <Check className="w-6 h-6" />, title: "Jaw Stiffness", description: "Improve jaw movement" },
                { icon: <Check className="w-6 h-6" />, title: "Sleep Disturbance", description: "Reduce sleep bruxism", link: "/profhilo-treatment" },
                { icon: <Check className="w-6 h-6" />, title: "Shoulder Tension", description: "Relieve muscle tightness" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="bg-purple-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <div className="text-purple-400">{item.icon}</div>
                      </div>
                      <h3 className="text-white font-semibold mb-2">
                        {item.link ? (
                          <Link to={item.link} className="hover:text-purple-300 transition-colors">{item.title}</Link>
                        ) : (
                          item.title
                        )}
                      </h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Understanding the Muscles of Mastication */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Understanding the Muscles of Mastication</h2>
              <h3 className="text-xl text-purple-300 mb-4">Size and Relevance to TMJ, Bruxism and Botox</h3>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                The muscles of mastication are key players in jaw movement and are directly involved in conditions like TMJ and bruxism.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Muscles That Botox Treatments Commonly Target</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-4 border-purple-400 pl-4">
                      <h4 className="text-white font-semibold mb-2">1. Masseter Muscle</h4>
                      <p className="text-gray-300 text-sm">
                        This is the largest and most powerful muscle of mastication. It plays a significant role in clenching the jaw and is often involved in bruxism. Botox injections in the masseter muscle can also be used for cosmetic jawline slimming.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-4">
                      <h4 className="text-white font-semibold mb-2">2. Temporalis Muscle</h4>
                      <p className="text-gray-300 text-sm">
                        Located over the temples, the temporalis assists in closing the jaw and clenching. If symptoms indicate, administering Botox injections in the temporalis muscle can also effectively treat bruxism (e.g. associated headaches).
                      </p>
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
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Muscles That Botox Treatments Seldom Target</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-4 border-gray-400 pl-4">
                      <h4 className="text-white font-semibold mb-2">1. Medial Pterygoid</h4>
                      <p className="text-gray-300 text-sm">
                        This muscle, while smaller than the masseter and temporalis, assists in elevating the jaw and plays a role in grinding movements from side to side. It can be involved in TMJ disorders by contributing to uneven jaw movements and strain.
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-400 pl-4">
                      <h4 className="text-white font-semibold mb-2">2. Lateral Pterygoid</h4>
                      <p className="text-gray-300 text-sm">
                        The smallest of the mastication muscles, the lateral pterygoid helps open the jaw and move it from side to side. Its function is crucial in the mechanics of the TMJ and can be a source of dysfunction in TMJ disorders.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Video Demonstration */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Treatment Video Demonstration</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Watch our expert demonstration of professional bruxism botox treatment techniques.
              </p>
            </motion.div>

            {/* Treatment Video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube-nocookie.com/embed/5ZRGFLus2SQ"
                    title="Botox for bruxism treatment demonstration"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <p className="text-gray-300 text-sm mt-4">
                  Botox for bruxism effectively targets the muscles responsible for jaw tension and teeth grinding. We primarily inject the masseter and/or temporalis muscles.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* High Risk Group for Teeth Grinding */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">High Risk Group for Teeth Grinding</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Some groups of people are more susceptible to bruxism than others. Those at the highest risk include:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Individuals with Other Sleep Disorders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Snoring</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Obstructive sleep apnea</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Sleep talking</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Violent behaviour during sleep</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Sleep paralysis</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Hypnagogic/hypnopompic hallucinations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Individuals Leading Stressful Lifestyles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Smokers</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>People with high alcohol consumption</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Patients consuming 6+ cups of tea or coffee daily</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>People taking medication for sleep, depression, and/or anxiety</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Energetic personality types</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>Those with family history of bruxism</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Reviews */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Client Reviews</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Hear from our satisfied clients about their bruxism botox experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <CheckCircle key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">
                      "I've had three facial areas treated with Anti-Wrinkle Injection at CosmeDocs in recent years, and find the treatment swift, thorough and effective. Also, Dr Haq's pleasant and friendly manner makes the treatment as painless as possible!"
                    </p>
                    <p className="text-purple-300 font-semibold">- Verified Client</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <CheckCircle key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">
                      "I had a facial aesthetic treatment with CosmeDocs. I found the price very reasonable. Even better the results were excellent. I will definitely use this service again."
                    </p>
                    <p className="text-purple-300 font-semibold">- Verified Client</p>
                  </CardContent>
                </Card>
              </motion.div>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Bruxism Botox Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Transparent pricing for therapeutic bruxism botox treatments at our Harley Street clinic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Standard Treatment</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£350</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Both masseter muscles</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Lower dose treatment</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Expert consultation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full border-2 border-purple-400">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">For Both Male & Female</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£350</div>
                    <div className="text-sm text-purple-400">Standard Price</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Both masseter muscles</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Standard dose</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">TMJ relief</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Jawline slimming</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">Complex Cases</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£450</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Both masseter muscles</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Higher dose treatment</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Maximum relief</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="text-purple-400" size={16} />
                        <span className="text-gray-300">Ongoing support</span>
                      </li>
                    </ul>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Common questions about bruxism botox treatments answered by our expert doctors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 rounded-lg px-6">
                    <AccordionTrigger className="text-white hover:text-purple-300 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="page-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Relieve Your Jaw Tension?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your expert consultation today and discover how therapeutic botox can transform your comfort and appearance with natural, long-lasting relief.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                >
                  Book Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-semibold"
                  onClick={() => window.location.href = 'tel:03330551503'}
                >
                  Call 0333 0551 503
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Expert Bruxism Botox Treatment London | TMJ Botox | Teeth Grinding Cure</h2>
          <p>
            Cosmedocs offers professional <strong>bruxism botox</strong> and <strong>TMJ botox</strong> treatments for <strong>teeth grinding</strong> and <strong>jaw clenching</strong>. 
            Our experienced cosmetic doctors use advanced <strong>botox for teeth grinding</strong> and <strong>botox for clenched jaw</strong> techniques to provide effective relief. 
            <strong>Botox and teeth grinding</strong> treatment targets the masseter and temporalis muscles, offering a proven <strong>bruxism cure</strong> and <strong>teeth grinding treatment</strong>.
            Located in prestigious Harley Street, London, our clinic provides comprehensive jaw assessments and personalized <strong>bruxism treatments</strong> for optimal results.
          </p>
          
          <h3>Botox for Jaw Pain & TMJ Treatment London</h3>
          <p>
            <strong>Botox for jaw pain</strong> and <strong>botox for tmj</strong> (temporomandibular joint disorder) effectively relieves <strong>symptoms of clenched jaw</strong> and reduces <strong>jaw grinding</strong> intensity. 
            Our <strong>botox TMJ</strong> treatment addresses <strong>clench jaw symptoms</strong> including headaches, facial pain, and dental damage from <strong>bruxism teeth</strong> wear. 
            <strong>Botox to stop teeth grinding</strong> works by relaxing overactive jaw muscles, preventing unconscious <strong>clenching teeth</strong> and <strong>teeth clenching</strong> behaviours. 
            This therapeutic approach provides long-lasting relief from <strong>bruxism disease</strong> and <strong>jaw teeth grinding</strong> symptoms.
          </p>

          <h3>Understanding Bruxism Signs and Symptoms | Bruxism Teeth Grinding</h3>
          <p>
            <strong>Bruxism signs and symptoms</strong> include unconscious <strong>grind teeth</strong> behaviour, <strong>jaw clenching</strong>, morning headaches, and <strong>teeth grinding symptoms</strong> like tooth sensitivity and enamel wear. 
            <strong>Bruxism teeth grinding symptoms</strong> often present as <strong>clenching jaw</strong> tension, TMJ pain, and worn dental surfaces from chronic <strong>bruxism grinding</strong>. 
            Many patients experience <strong>symptoms of clenched jaw</strong> including facial muscle fatigue, earaches, and disturbed sleep patterns. 
            <strong>Bruxism teeth</strong> damage can lead to chipped teeth, receding gums, and increased tooth sensitivity requiring professional <strong>treatment of teeth grinding</strong>.
          </p>

          <h3>Bruxism Treatment Options | How I Cured My Bruxism</h3>
          <p>
            Patients often ask "how I cured my bruxism" - and <strong>teeth grinding botox</strong> represents one of the most effective modern <strong>bruxism treatments</strong> available. 
            <strong>Botox jaw clenching</strong> therapy targets the masseter muscles responsible for <strong>jaw grinding</strong> and <strong>clenching teeth</strong>. 
            This innovative <strong>bruxism treatment</strong> offers superior results compared to traditional mouth guards for managing <strong>bruxismo</strong> (the medical term for teeth grinding). 
            Our expert practitioners specialize in <strong>treat teeth grinding</strong> using precise botulinum toxin injections that relax jaw muscles whilst preserving normal chewing function.
          </p>

          <h3>Comprehensive Teeth Grinding Treatment & Bruxism Cure</h3>
          <p>
            Our comprehensive <strong>teeth grinding treatment</strong> approach combines <strong>botox and teeth grinding</strong> therapy with lifestyle management strategies. 
            <strong>Botox for bruxism</strong> provides 4-6 months of relief from <strong>jaw teeth grinding</strong> and <strong>teeth clenching</strong> symptoms. 
            The treatment effectively addresses both daytime <strong>clenching jaw</strong> habits and nocturnal <strong>bruxism teeth grinding</strong>. 
            As a recognized <strong>bruxism cure</strong>, this therapy prevents further <strong>bruxism teeth</strong> damage whilst improving sleep quality and reducing tension headaches associated with chronic <strong>jaw clenching</strong>.
          </p>

          <h3>Botox Jaw Clenching Treatment & Bruxism Jawline Benefits</h3>
          <p>
            <strong>Botox jaw clenching</strong> treatment offers dual benefits - therapeutic relief and aesthetic <strong>bruxism jawline</strong> refinement. 
            By relaxing enlarged masseter muscles from chronic <strong>grinding teeth</strong>, patients achieve a slimmer, more feminine jaw contour. 
            This <strong>treatment for teeth grinding</strong> reduces muscle bulk whilst maintaining natural jaw movement and chewing function. 
            The resulting <strong>bruxism jawline</strong> transformation complements the therapeutic benefits of reduced <strong>jaw grinding</strong> and <strong>teeth grinding symptoms</strong>.
          </p>

          <h3>Expert TMJ Botox & Bruxism Treatment at Harley Street</h3>
          <p>
            Our Harley Street clinic offers expert <strong>TMJ botox</strong> and <strong>bruxism botox</strong> administered by experienced cosmetic doctors specializing in jaw disorders. 
            We use premium botulinum toxin for <strong>botox to stop teeth grinding</strong> and alleviate <strong>symptoms of clenched jaw</strong>. 
            Each <strong>teeth grinding treatment</strong> begins with comprehensive assessment of <strong>bruxism signs and symptoms</strong> to create personalized treatment plans. 
            Our practitioners stay current with latest research on <strong>botox and teeth grinding</strong>, including insights from experts like Luke Cascarini in maxillofacial medicine.
          </p>

          <h3>Why Choose Our Bruxism Treatment & Teeth Grinding Botox</h3>
          <p>
            Cosmedocs provides the leading <strong>bruxism treatment</strong> in London with proven results for <strong>botox for clenched jaw</strong> and <strong>jaw clenching</strong> relief. 
            Our invisible art philosophy ensures effective therapeutic <strong>treatment of teeth grinding</strong> whilst providing aesthetic <strong>bruxism jawline</strong> slimming. 
            We specialize in precise masseter muscle targeting using advanced <strong>botox for teeth grinding</strong> injection techniques for optimal outcomes. 
            Our doctors have extensive experience with <strong>botox TMJ</strong> applications and jaw anatomy, ensuring safe and effective <strong>bruxism treatments</strong> that address both <strong>teeth clenching</strong> and aesthetic concerns.
          </p>

          <h3>Treatment Process for Botox for Jaw Pain & Bruxism Grinding</h3>
          <p>
            Our <strong>bruxism botox</strong> treatment begins with comprehensive jaw assessment reviewing <strong>bruxism teeth grinding symptoms</strong> and medical history. 
            The <strong>teeth grinding botox</strong> injection process takes 10-15 minutes using specialized techniques for thick masseter muscles. 
            <strong>Botox for jaw pain</strong> results appear gradually over 1-4 weeks as muscles relax, with optimal <strong>TMJ botox</strong> effects lasting 4-6 months. 
            We provide ongoing support to <strong>treat teeth grinding</strong> effectively and regular follow-up care to monitor <strong>jaw grinding</strong> reduction and <strong>clench jaw symptoms</strong> improvement.
          </p>

          <h3>Bruxism Disease Management & Long-term Teeth Grinding Treatment</h3>
          <p>
            Managing <strong>bruxism disease</strong> requires understanding that <strong>bruxism</strong> (<strong>bruxismo</strong>) is a chronic neuromuscular condition affecting jaw muscles. 
            Our <strong>teeth grinding treatment</strong> using <strong>botox and teeth grinding</strong> therapy provides effective long-term management of <strong>bruxism teeth grinding</strong>. 
            Regular maintenance treatments every 4-6 months prevent return of <strong>grinding teeth</strong> behaviour and protect against further <strong>bruxism teeth</strong> damage. 
            Combined with stress management and lifestyle modifications, <strong>botox jaw clenching</strong> treatment offers comprehensive relief from <strong>jaw teeth grinding</strong> and associated <strong>symptoms of clenched jaw</strong>.
          </p>
        </div>
      </div>
    </>
  );
};

export default BruxismBotox;