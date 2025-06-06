
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Users, Award, Calendar, MapPin, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const NonSurgicalNoseJob = () => {
  const seoData = generateSEOMetadata(
    "Non-Surgical Nose Job London | £450 | Dr. Ahmed Haq | Harley Street",
    "Expert non-surgical nose job treatments in London's Harley Street. Dr. Ahmed Haq offers premium nose reshaping from £450. Book your consultation today.",
    "/non-surgical-nose-job"
  );

  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";

  // Before/after images for the viewer
  const beforeAfterImages = [
    {
      src: "/lovable-uploads/8f741338-3fd5-4feb-9d34-270856fb99c5.png",
      alt: "Non-surgical nose job London progression results by Dr Ahmed Haq at Cosmedocs Harley Street showing gradual improvement",
      caption: "Progressive transformation over 3 years showing natural enhancement with #cosmenose technique"
    },
    {
      src: "/lovable-uploads/16fa7311-00af-4ea7-b353-73f981f6d87c.png",
      alt: "Non-surgical nose job before and after profile view Harley Street London Cosmedocs treatment results",
      caption: "Subtle profile enhancement achieving perfect nasal proportions"
    },
    {
      src: "/lovable-uploads/717753b3-1c9d-43bd-bdc1-ca245fc3c284.png",
      alt: "Non-surgical nose job immediate results London Dr Ahmed Haq Cosmedocs Harley Street dermal filler treatment",
      caption: "Immediate transformation showing refined nasal bridge and tip"
    },
    {
      src: "/lovable-uploads/d5cec131-9f61-4b49-9dba-8658eda2eddf.png",
      alt: "Non-surgical nose job treatment progression at 5 and 10 minutes London Harley Street Cosmedocs",
      caption: "Treatment progression showing results developing over 10 minutes"
    },
    {
      src: "/lovable-uploads/a9ac5188-66f2-420b-9b39-3449dc02ff7b.png",
      alt: "Non-surgical nose job side profile comparison before after London Cosmedocs Harley Street nose filler treatment",
      caption: "Profile view showing enhanced nasal projection and definition"
    },
    {
      src: "/lovable-uploads/97c76ea5-245e-43c2-8b89-533f365f4969.png",
      alt: "Non-surgical nose job technique showing raised bridge concealed bump correction London Harley Street Cosmedocs",
      caption: "Advanced technique demonstrating raised bridge and concealed bump correction"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How much does a non-surgical nose job cost in London?",
      answer: "At Cosmedocs Harley Street, non-surgical nose job treatments start from £450. The final cost depends on the complexity of your case and the amount of dermal filler required to achieve your desired results."
    },
    {
      question: "How long do non-surgical nose job results last?",
      answer: "Results typically last 12-18 months. The longevity depends on factors like your metabolism, the type of filler used, and your lifestyle. Touch-up treatments can help maintain your desired look."
    },
    {
      question: "Is non-surgical nose job safe?",
      answer: "When performed by Dr. Ahmed Haq at our Harley Street clinic, non-surgical nose jobs are very safe. Dr. Haq has been performing these treatments since 2010 and uses advanced injection techniques to minimize risks."
    },
    {
      question: "What's the difference between cannula and needle techniques?",
      answer: "Dr. Ahmed Haq uses both cannula and needle techniques depending on your specific needs. Cannulas reduce bruising and provide smoother filler distribution, while needles offer more precision in targeted areas."
    },
    {
      question: "Can you fix a deviated nose without surgery?",
      answer: "Yes, non-surgical techniques can significantly improve the appearance of deviated noses. Our advanced #cosmenose technique can correct asymmetries and create a more balanced nasal profile without surgery."
    },
    {
      question: "How painful is a non-surgical nose job?",
      answer: "Most patients experience minimal discomfort. We use topical numbing cream and the dermal fillers contain lidocaine for additional comfort. The procedure is generally well-tolerated with minimal downtime."
    },
    {
      question: "What can't be treated with non-surgical nose job?",
      answer: "Non-surgical nose jobs cannot make your nose smaller or treat severe structural issues. They're excellent for smoothing bumps, lifting the tip, improving symmetry, and enhancing overall nasal contours."
    },
    {
      question: "How quickly will I see results?",
      answer: "Results are visible immediately after treatment, with final results apparent within 2 weeks once any minor swelling subsides. You'll see progressive improvement as the filler settles naturally."
    },
    {
      question: "What happens during the consultation at Cosmedocs?",
      answer: "Dr. Ahmed Haq will assess your nasal anatomy, discuss your goals, explain the #cosmenose technique, and create a personalized treatment plan. You'll see before/after photos and understand exactly what to expect."
    },
    {
      question: "Can non-surgical nose job results be reversed?",
      answer: "Yes, hyaluronic acid fillers used in non-surgical nose jobs can be dissolved with hyaluronidase if needed. This provides an added safety net and flexibility that surgical rhinoplasty cannot offer."
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
            "name": "Cosmedocs - Non-Surgical Nose Job",
            "description": "Premium non-surgical nose job treatments in London's Harley Street",
            "url": "https://cosmedocs.com/non-surgical-nose-job",
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
            "priceRange": "£450"
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/lovable-uploads/ac269c72-30b5-4182-a990-857547c55c4f.png')"
            }}
          />
          {/* Elegant overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40" />
          
          <div className="page-container relative z-10">
            <div className="max-w-4xl">
              <motion.div 
                className="text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="block text-white/90">Non-Surgical</span>
                  <span className="block text-white font-medium">Nose</span>
                  <span className="block text-white/80 text-4xl md:text-5xl italic font-light">Refinement</span>
                </motion.h1>
                
                <motion.div 
                  className="mb-12 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
                    Precision artistry that reshapes your profile with subtle, invisible enhancement using advanced cannula & needle techniques
                  </p>
                  <div className="flex items-center space-x-6 text-lg">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                      <span className="text-white font-medium">From £450</span>
                    </div>
                    <div className="text-white/80">
                      <span className="font-light">by </span> 
                      <span className="font-medium">Dr. Ahmed Haq</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <a 
                    href={bookingUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-white/95 backdrop-blur-sm text-black hover:bg-white rounded-full px-10 py-4 inline-flex items-center justify-center text-lg font-medium transition-all duration-300 border border-white/20 hover:scale-105"
                  >
                    Book Consultation
                  </a>
                  <div className="flex items-center gap-2 text-white/80 px-6">
                    <Instagram className="h-5 w-5" />
                    <a 
                      href="https://instagram.com/cosmedocs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors font-light"
                    >
                      Follow our results #cosmenose
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="page-container">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Transformation Gallery
            </motion.h2>
            
            <div className="text-center mb-8">
              <BeforeAfterImageViewer 
                images={beforeAfterImages}
                triggerLabel="View All Results"
                title="Non-Surgical Nose Job Results"
                description="Real patient transformations by Dr. Ahmed Haq"
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 inline-flex items-center justify-center text-lg font-medium transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Dr. Ahmed Haq Section */}
        <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-black">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-center mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Meet Dr. Ahmed Haq
              </motion.h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold mb-6">Leading Expert in Non-Surgical Rhinoplasty</h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Dr. Ahmed Haq has been performing non-surgical nose jobs since 2010, making him one of the UK's most experienced practitioners in this specialized field.
                    </p>
                    <p>
                      As an internationally recognized trainer and conference presenter, Dr. Haq has refined the #cosmenose technique that delivers natural-looking results with minimal downtime.
                    </p>
                    <p>
                      His expertise in facial anatomy and advanced injection techniques ensures safe, predictable outcomes for every patient.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="grid grid-cols-1 gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-accent border-none">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <Calendar className="h-5 w-5 mr-2 text-purple-400" />
                        <span className="font-medium">Experience</span>
                      </div>
                      <p className="text-gray-300">Performing since 2010</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-accent border-none">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <Award className="h-5 w-5 mr-2 text-purple-400" />
                        <span className="font-medium">Recognition</span>
                      </div>
                      <p className="text-gray-300">Conference presenter & international trainer</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-accent border-none">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <Users className="h-5 w-5 mr-2 text-purple-400" />
                        <span className="font-medium">Specialty</span>
                      </div>
                      <p className="text-gray-300">Advanced #cosmenose technique</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Complicated Deviated Nose Correction */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="page-container">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Complex Deviated Nose Corrections
            </motion.h2>
            
            <div className="max-w-4xl mx-auto">
              <motion.p 
                className="text-center text-gray-300 mb-12 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Specialized expertise in correcting even the most challenging deviated nose cases using advanced non-surgical techniques
              </motion.p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <img 
                    src="/lovable-uploads/461ed1b4-14e5-4864-863b-2e30db23adfc.png" 
                    alt="Before non-surgical deviated nose correction London Harley Street Cosmedocs Dr Ahmed Haq complex case treatment"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <p className="text-gray-300 text-sm">Before: Complex deviated nose requiring specialized correction technique</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <img 
                    src="/lovable-uploads/8f4b0286-bd8c-4aaa-8ac1-51ddc5e4c73b.png" 
                    alt="After non-surgical deviated nose correction London Harley Street Cosmedocs Dr Ahmed Haq complex case results"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <p className="text-gray-300 text-sm">After: Remarkable improvement in nasal symmetry and profile using advanced #cosmenose technique</p>
                </motion.div>
              </div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 mb-6">
                  This case demonstrates Dr. Ahmed Haq's expertise in correcting complex deviated noses through strategic dermal filler placement, 
                  achieving significant improvement in nasal symmetry and overall facial harmony without surgical intervention.
                </p>
                <a 
                  href={bookingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 inline-flex items-center justify-center text-lg font-medium transition-colors"
                >
                  Discuss Your Case
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Patient Experience Video */}
        <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-black">
          <div className="page-container">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Real Patient Experience
            </motion.h2>
            
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="relative rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/_yO12RM4-34?start=7"
                    title="Non-Surgical Nose Job Experience at Cosmedocs London Harley Street Dr Ahmed Haq patient testimonial"
                    className="w-full h-full rounded-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
              
              <motion.p 
                className="text-center text-gray-300 mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Watch this honest review from one of our patients sharing her complete journey and results
              </motion.p>
            </div>
          </div>
        </section>

        {/* Treatment Information */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="page-container">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Treatment Details
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "What is it?",
                  content: "A non-surgical nose reshaping procedure using dermal fillers to improve nasal contours, straighten bumps, and enhance the nose profile without surgery."
                },
                {
                  title: "Treatment Time",
                  content: "15-30 minutes with immediate results. The procedure is quick, comfortable, and requires no downtime."
                },
                {
                  title: "Results Duration",
                  content: "Results typically last 12-18 months. Touch-up treatments can maintain and enhance your desired look."
                },
                {
                  title: "Recovery",
                  content: "Minimal downtime. Some temporary swelling may occur for 24-48 hours. You can return to normal activities immediately."
                },
                {
                  title: "Best Candidates",
                  content: "Ideal for those wanting to smooth bumps, lift the tip, or improve symmetry without surgical intervention."
                },
                {
                  title: "Safety",
                  content: "When performed by Dr. Ahmed Haq's expert hands, it's a safe procedure with high satisfaction rates and natural-looking results."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-accent border-none h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{item.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-black">
          <div className="page-container">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Top 10 Frequently Asked Questions
            </motion.h2>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-20 bg-[#111]">
          <div className="page-container">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Visit Us in Harley Street
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-6">London's Premier Medical District</h3>
                <p className="text-gray-300 mb-8">
                  Located in the heart of London's prestigious Harley Street medical district, our clinic offers the highest standards of aesthetic medicine in an elegant, professional environment.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-purple-400" />
                    <span>10 Harley Street, London W1G 9PF</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-purple-400" />
                    <span>0333 0551 503</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-purple-400" />
                    <span>info@cosmedocs.com</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Profile?</h3>
                    <p className="text-gray-300 mb-6">
                      Book a consultation with Dr. Ahmed Haq and discover how the #cosmenose technique can enhance your natural beauty.
                    </p>
                    <a 
                      href={bookingUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 inline-flex items-center justify-center text-lg font-medium transition-colors w-full"
                    >
                      Book Your £450 Consultation
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <h2>Non-Surgical Nose Job Treatment by Cosmedocs London Harley Street</h2>
          <p>
            Non-surgical nose job London Harley Street by Dr. Ahmed Haq at Cosmedocs. Expert non-surgical rhinoplasty treatments from £450 performed at our prestigious 10 Harley Street clinic in London W1G 9PF. Dr. Ahmed Haq has been performing non-surgical nose jobs since 2010, making him one of London's most experienced practitioners in aesthetic medicine. Our Harley Street clinic specializes in non-surgical nose reshaping using advanced dermal filler techniques including both cannula and needle methods for optimal results. The #cosmenose method developed by Dr. Haq at Cosmedocs London delivers natural-looking results with minimal downtime for patients seeking nose enhancement without surgery.
          </p>
          <p>
            Perfect for correcting nose bumps, improving nasal symmetry, lifting the tip, and enhancing overall nasal profile. Cosmedocs London Harley Street offers comprehensive non-surgical rhinoplasty treatments for deviated noses, crooked noses, and aesthetic nose enhancement. Conference presenter and international trainer Dr. Ahmed Haq ensures safe, predictable outcomes using advanced injection techniques at our London clinic. Treatment takes 15-30 minutes with results lasting 12-18 months. Immediate results with no surgery required at Cosmedocs Harley Street London.
          </p>
          <p>
            Book consultation today at London's premier Harley Street aesthetic clinic Cosmedocs. Call 0333 0551 503 or visit cosmedocs.com for non-surgical nose job London. Located at 10 Harley Street, London W1G 9PF, Cosmedocs offers premium aesthetic treatments including non-surgical rhinoplasty, liquid rhinoplasty, nose filler, nose enhancement, and comprehensive facial aesthetic medicine. Dr. Ahmed Haq's expertise in facial anatomy and Harley Street location make Cosmedocs the leading choice for non-surgical nose enhancement in London. Treatment carried out by Cosmedocs in London, Harley Street using premium dermal fillers and advanced techniques for optimal patient satisfaction and natural aesthetic results.
          </p>
        </div>
      </div>
    </>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <Card className="bg-accent border-none hover:bg-accent/80 transition-colors cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-left font-medium text-lg">{question}</h3>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-purple-400 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-400 flex-shrink-0 ml-4" />
                )}
              </div>
            </CardContent>
          </Card>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-6 pb-6">
            <p className="text-gray-300 leading-relaxed">{answer}</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
  );
};

export default NonSurgicalNoseJob;
