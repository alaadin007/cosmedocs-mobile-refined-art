
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BeforeAfterImageViewer from '@/components/BeforeAfterImageViewer';
import AutoLinkedText from '@/components/AutoLinkedText';
import Breadcrumb from '@/components/Breadcrumb';
import { generateSEOMetadata } from '@/utils/seo';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, Calendar, Activity, Syringe, Award, GraduationCap, Palette, Heart, MapPin, Phone } from 'lucide-react';
import ClientReviews from '@/components/ClientReviews';

const MarionnetteLines = () => {
  const seoData = generateSEOMetadata(
    "Marionette Lines Filler London | Cosmedocs",
    "Expert marionette lines filler treatment in London. See before and after results. Best dermal fillers for marionette lines. Book consultation.",
    "/marionette-lines"
  );

  const beforeAfterImages = [
    { 
      src: "/lovable-uploads/7f71ff8d-e186-45d8-a20f-70564764b7ae.png", 
      alt: "Cheek volume enhancement before and after to improve nasolabial folds", 
      caption: "Cheek volume restoration improving nasolabial fold appearance" 
    },
    { 
      src: "/lovable-uploads/765101d1-1ff9-4425-9d8a-da5eb0bcaa17.png", 
      alt: "Marionette lines before and after dermal filler treatment", 
      caption: "Dramatic improvement in marionette lines with expert filler placement" 
    },
    { 
      src: "/lovable-uploads/010185b4-89b2-4e8b-b94b-8187262a436e.png", 
      alt: "Nasolabial folds before and after dermal filler treatment", 
      caption: "Complete transformation of nasolabial folds and smile lines" 
    },
    { 
      src: "/lovable-uploads/d13762c3-0f5e-437a-adb7-7ddf89fcf2e5.png", 
      alt: "Nasolabial creases and folds before after comparison", 
      caption: "Before and after: Comprehensive nasolabial area rejuvenation" 
    }
  ];

  const faqs = [
    {
      question: "What are marionette lines and how do they develop?",
      answer: "Marionette lines are vertical creases that extend from the corners of the mouth down towards the chin, resembling the lines on a marionette puppet's face. These lines develop due to natural ageing, volume loss in the cheeks, decreased collagen production, and repetitive facial expressions. They can make you appear sad or aged, even when you're feeling happy."
    },
    {
      question: "Can I use Botox on marionette lines or do I need fillers?",
      answer: "While Botox for marionette lines can help with some muscle activity, dermal filler treatment is generally more effective. Marionette lines Botox may provide limited results as these are primarily caused by volume loss rather than muscle activity. Filler marionette lines treatment is the gold standard as it directly addresses the structural changes causing these lines."
    },
    {
      question: "How to get rid of marionette lines effectively?",
      answer: "The best treatment for marionette lines is dermal filler. Our expert practitioners use premium hyaluronic acid fillers for marionette lines to restore volume and smooth these lines. This treatment can dramatically reduce their appearance and is considered the most effective way to remove marionette lines non-surgically. How to remove marionette lines successfully depends on expert filler placement and the right product selection."
    },
    {
      question: "Is marionette line treatment part of a liquid facelift?",
      answer: "Yes, treatment is often a key component of our liquid facelift procedures, especially for younger individuals in their 30s. The liquid facelift combines multiple dermal filler treatments to address various signs of ageing without surgery, including nasolabial folds, cheek volume loss, and lip enhancement."
    },
    {
      question: "How long do marionette line filler results last?",
      answer: "Results typically last 12-18 months, depending on the type of filler used, your individual metabolism, lifestyle factors, and the depth of the original lines. The strategic placement of fillers in deeper layers often provides longer-lasting results compared to surface treatments."
    },
    {
      question: "What's the difference between treating creases and folds in the nasolabial area?",
      answer: "Nasolabial creases are typically surface-level lines caused by repeated smiling and facial expressions, while nasolabial folds are deeper and result from volume loss in the cheeks causing skin to sag. Creases require more superficial filler placement, while folds need deeper volume restoration. Our expert practitioners assess your individual needs to determine the optimal treatment approach."
    },
    {
      question: "Can marionette line treatment be combined with other procedures?",
      answer: "Absolutely! The treatment works excellently in combination with cheek volume enhancement, filler for nasolabial folds and marionette lines, and <Link to='/lip-fillers' className='text-purple-300 hover:text-purple-200 underline'>lip hydration</Link> treatments. Filler for jowls and marionette lines can be combined in one session for comprehensive lower face rejuvenation. This approach addresses multiple aspects of facial ageing for more harmonious and natural-looking results."
    },
    {
      question: "What is the recovery time for marionette line fillers?",
      answer: "There's minimal downtime with most patients returning to normal activities immediately. Some temporary swelling, redness, or minor bruising may occur but typically resolves within 3-7 days. We recommend avoiding strenuous exercise for 24-48 hours post-treatment."
    },
    {
      question: "How much does marionette lines filler cost UK treatment?",
      answer: "Marionette lines filler cost UK treatment starts from £325 per ml at our London clinic. The exact cost depends on the amount of filler needed and whether additional treatments are combined. During your consultation, we'll provide a detailed treatment plan with transparent pricing."
    }
  ];

  // Structured Data Schemas
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Cosmedocs",
    "url": "https://www.cosmedocs.co.uk",
    "logo": "https://www.cosmedocs.co.uk/cosmedocs-logo.png",
    "description": "Expert aesthetic medicine clinic in London specialising in marionette lines treatment and liquid facelifts",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Harley Street",
      "addressLocality": "London",
      "postalCode": "W1G 9PF",
      "addressCountry": "GB"
    },
    "telephone": "0333 0551 503",
    "openingHours": "Mo-Fr 09:00-18:00",
    "medicalSpecialty": "Aesthetic Medicine",
    "priceRange": "££",
    "founder": {
      "@type": "Person",
      "name": "Dr. Ahmed Haq"
    }
  };

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Ahmed Haq",
    "jobTitle": "Medical Director & Lead Aesthetic Practitioner",
    "description": "15+ years experience training physicians in advanced aesthetic medicine. Specialist in millimetre-precision facial optimisation.",
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "Cosmedocs"
    }
  };

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Marionette Lines Filler Treatment",
    "description": "Non-surgical marionette lines treatment using premium hyaluronic acid dermal fillers for facial rejuvenation",
    "procedureType": "Cosmetic",
    "bodyLocation": "Face - lower facial third",
    "preparation": "Consultation and facial assessment",
    "followup": "2-week follow-up appointment included",
    "howPerformed": "Strategic dermal filler placement using ultra-fine needles with topical anaesthetic",
    "status": "Active"
  };

  const faqSchema = {
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
  };

  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Marionette Lines Before and After Results",
    "description": "Real patient results from marionette lines filler treatments at Cosmedocs",
    "image": beforeAfterImages.map(img => ({
      "@type": "ImageObject",
      "url": `https://www.cosmedocs.co.uk${img.src}`,
      "description": img.alt,
      "caption": img.caption
    }))
  };

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Marionette Lines Filler Treatment",
    "description": "Professional marionette lines treatment with premium hyaluronic acid fillers",
    "price": "325",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock",
    "url": seoData.canonical,
    "seller": {
      "@type": "MedicalOrganization",
      "name": "Cosmedocs"
    }
  };

  const testimonialSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "MedicalClinic",
      "name": "Cosmedocs"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Jessica L."
    },
    "reviewBody": "The marionette lines treatment has completely transformed my appearance. I genuinely look 10 years younger and the results are so natural. Dr. Haq's precision and artistry are exceptional."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.cosmedocs.co.uk/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Dermal Fillers",
        "item": "https://www.cosmedocs.co.uk/dermal-fillers"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Marionette Lines Treatment",
        "item": "https://www.cosmedocs.co.uk/marionette-lines"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Marionette Lines Filler Treatment",
    "description": "Expert marionette lines treatment using premium hyaluronic acid dermal fillers. Non-surgical liquid facelift approach for facial rejuvenation in London.",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Cosmedocs",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10 Harley Street",
        "addressLocality": "London",
        "postalCode": "W1G 9PF",
        "addressCountry": "GB"
      },
      "telephone": "0333 0551 503"
    },
    "areaServed": {
      "@type": "City",
      "name": "London"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.cosmedocs.co.uk/marionette-lines",
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": "0333 0551 503",
        "contactType": "Customer Service"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "325",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "url": "https://www.cosmedocs.co.uk/marionette-lines"
    },
    "category": "Aesthetic Medicine"
  };

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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <meta name="keywords" content="marionette lines filler London, liquid facelift, 10 years younger, nasolabial folds, dermal fillers, anti-aging treatment, Harley Street clinic" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="author" content="Dr. Ahmed Haq, Cosmedocs Medical Director" />
        <meta name="last-modified" content="2025-10-04" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(physicianSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(procedureSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(imageGallerySchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(offerSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(testimonialSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Breadcrumb Navigation */}
        <div className="page-container pt-4">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Dermal Fillers", href: "/dermal-fillers" },
            { label: "Marionette Lines" }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-black"></div>
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-2xl">
                  Marionette Lines Filler Treatment London — Look 10 Years Younger
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl drop-shadow-lg">
                </p>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold drop-shadow-lg">marionette line treatment with dermal fillers</p>
                  <p className="text-sm text-gray-300 drop-shadow-lg">30-45 minutes • Results last 12-18 months • Instant transformation</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
                  onClick={() => window.open('https://med.as.me/harleystreet', '_blank')}
                >
                  Book Free Consultation
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
              <h2 className="text-3xl font-bold mb-8 text-white">Marionette Lines Treatment</h2>
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
              <h2 className="text-4xl font-bold mb-6">Marionette Lines Before and After Results</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                See the dramatic before and after marionette lines improvements achieved through our expert filler for marionette lines treatments and liquid facelift procedures. Real results from marionette lines filler before and after treatments at our London clinic.
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
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6">What are Marionette Lines?</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Marionette lines on face are the vertical creases that extend from the corners of your mouth down towards your chin, creating a downturned expression that can make you appear sad or older than you feel. These marionettes lines develop due to natural aging processes, volume loss in the facial tissues, and repetitive facial expressions over time. Understanding what is marionette lines helps determine the best treatment for marionette lines for your individual needs.
              </p>
              
              <Card className="bg-black border-purple-500 border-2 p-6">
                <CardContent className="p-0">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Our <Link to="/non-surgical-facelift" className="text-purple-300 hover:text-purple-200 underline">liquid facelift</Link> approach is particularly effective for younger individuals in their 30s, offering a non-surgical solution that can take 10 years off your appearance through strategic dermal filler marionette lines placement. This treatment addresses marionette line concerns while maintaining natural facial harmony.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Marionette Lines Filler Section */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Marionette Lines Filler: The Solution</h2>
              <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
                Marionette lines fillers treatment is the gold standard for addressing these ageing concerns. Using premium <Link to="/dermal-fillers" className="text-purple-300 hover:text-purple-200 underline">hyaluronic acid-based dermal fillers</Link>, we restore lost volume and smooth the vertical lines that run from the corners of your mouth to your chin. Filler in marionette lines provides natural-looking results that enhance your facial contours. <a href="https://pubmed.ncbi.nlm.nih.gov/35718985/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">Clinical studies published in the Journal of Cosmetic Dermatology</a> demonstrate impressive results, with 94% of patients showing improvement at 3 weeks and 88% maintaining excellent outcomes at 18 months with favourable safety profiles.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* How Marionette Lines Fillers Work */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-purple-500 border-2 h-full">
                  <CardHeader>
                    <CardTitle className="text-purple-300 text-2xl flex items-center gap-2">
                      <Syringe size={24} />
                      How Marionette Lines Fillers Work
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Dermal fillers for marionette lines work by replenishing lost volume in the deeper layers of your skin. Our expert practitioners strategically inject premium <Link to="/profhilo-treatment" className="text-purple-300 hover:text-purple-200 underline">hyaluronic acid</Link> fillers marionette lines along the creases and in the surrounding areas to:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="text-white font-semibold mb-1">Restore Volume</h4>
                          <p className="text-gray-300 text-sm">Replace lost collagen and fat that causes sagging and creasing</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="text-white font-semibold mb-1">Lift and Support</h4>
                          <p className="text-gray-300 text-sm">Provide structural support to lift sagging skin and reduce fold depth</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="text-white font-semibold mb-1">Smooth Creases</h4>
                          <p className="text-gray-300 text-sm">Fill in the vertical lines for a smoother, more youthful appearance</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="text-white font-semibold mb-1">Stimulate Collagen</h4>
                          <p className="text-gray-300 text-sm">Hyaluronic acid encourages natural collagen production for lasting benefits</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Types of Fillers Used */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-purple-500 border-2 h-full">
                  <CardHeader>
                    <CardTitle className="text-purple-300 text-2xl flex items-center gap-2">
                      <Award size={24} />
                      Premium Fillers We Use
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      At Cosmedocs, we exclusively use FDA-approved, premium hyaluronic acid fillers that are specifically designed for marionette line treatment:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="text-white font-semibold mb-1">Juvéderm Voluma</h4>
                          <p className="text-gray-300 text-sm">High G-prime filler for deep volume restoration and structural support</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="text-white font-semibold mb-1">Restylane Lyft</h4>
                          <p className="text-gray-300 text-sm">Ideal for mid-to-deep injection to lift and contour the lower face</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="text-white font-semibold mb-1">Teosyal Ultra Deep</h4>
                          <p className="text-gray-300 text-sm">Long-lasting filler for severe marionette lines and deep folds</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="text-white font-semibold mb-1">Belotero Volume</h4>
                          <p className="text-gray-300 text-sm">Provides natural-looking volume with excellent integration</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-purple-900/20 rounded-lg border border-purple-500/30">
                      <p className="text-purple-200 text-sm">
                        <strong>Expert Selection:</strong> Our practitioners assess your individual needs and select the optimal filler type, viscosity, and injection technique for your unique facial anatomy.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Liquid Facelift Explanation */}
        <section className="py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">The Liquid Facelift Advantage</h2>
              <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
                Our marionette line treatment is often part of a comprehensive <Link to="/non-surgical-facelift" className="text-purple-300 hover:text-purple-200 underline">liquid facelift</Link> approach, designed specifically for younger individuals who want to address early signs of ageing without surgery. This non-invasive procedure combines multiple dermal filler treatments to restore facial volume, smooth lines, and enhance natural contours.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                {/* What is a Liquid Facelift */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900 border-purple-500 border-2 h-full">
                    <CardHeader>
                      <CardTitle className="text-purple-300 text-2xl">What is a Liquid Facelift?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300">
                        A liquid facelift is a revolutionary non-surgical cosmetic procedure that uses strategic dermal filler placement to restore youthful facial contours without the need for invasive surgery, <Link to="/advanced-consultation" className="text-purple-300 hover:text-purple-200 underline">anaesthesia</Link>, or lengthy recovery times.
                      </p>
                      <p className="text-gray-300">
                        Unlike traditional surgical facelifts that require incisions and tissue manipulation, the liquid facelift achieves remarkable rejuvenation through precise injection of hyaluronic acid-based fillers into targeted areas of the face.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={18} />
                          <p className="text-gray-300 text-sm">Addresses multiple facial areas in one session</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={18} />
                          <p className="text-gray-300 text-sm">Customised treatment plan for each patient</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={18} />
                          <p className="text-gray-300 text-sm">Immediate visible results with no surgery</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={18} />
                          <p className="text-gray-300 text-sm">Perfect for patients aged 30-50</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Treatment Areas */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900 border-purple-500 border-2 h-full">
                    <CardHeader>
                      <CardTitle className="text-purple-300 text-2xl">Areas Treated in a Liquid Facelift</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1">Marionette Lines</h4>
                          <p className="text-gray-300 text-sm">Vertical lines from mouth corners to chin</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1">
                            <Link to="/nasolabial-folds" className="text-purple-300 hover:text-purple-200 underline">Nasolabial Folds</Link>
                          </h4>
                          <p className="text-gray-300 text-sm">Smile lines running from nose to mouth corners</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1">
                            <Link to="/cheek-filler" className="text-purple-300 hover:text-purple-200 underline">Cheek Volume</Link>
                          </h4>
                          <p className="text-gray-300 text-sm">Restores youthful cheek fullness and lift</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1">Tear Troughs</h4>
                          <p className="text-gray-300 text-sm">Under-eye hollowing for refreshed appearance</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1">
                            <Link to="/chin-filler" className="text-purple-300 hover:text-purple-200 underline">Jawline & Jowls</Link>
                          </h4>
                          <p className="text-gray-300 text-sm">Defines and contours the lower face</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1">
                            <Link to="/temple-filler-london" className="text-purple-300 hover:text-purple-200 underline">Temples</Link>
                          </h4>
                          <p className="text-gray-300 text-sm">Fills temple hollowing for facial harmony</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1">
                            <Link to="/lip-filler" className="text-purple-300 hover:text-purple-200 underline">Lips</Link>
                          </h4>
                          <p className="text-gray-300 text-sm">Enhances volume and corrects asymmetry</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits and Aftercare */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Marionette Lines Benefits & Aftercare</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Understand the benefits of marionette line treatment and important aftercare guidelines for optimal results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Benefits Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-purple-500 border-2 h-full">
                  <CardHeader>
                    <CardTitle className="text-purple-300 text-2xl">Treatment Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Volume Restoration</h4>
                        <p className="text-gray-300 text-sm">Replenishes lost facial volume for natural lift and rejuvenation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Instant Results</h4>
                        <p className="text-gray-300 text-sm">Visible improvement immediately after treatment</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Natural Appearance</h4>
                        <p className="text-gray-300 text-sm">Maintains facial expressions while reducing lines</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Long-lasting Results</h4>
                        <p className="text-gray-300 text-sm">Results last 12-18 months with premium fillers</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Minimal Downtime</h4>
                        <p className="text-gray-300 text-sm">Return to normal activities immediately</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Non-surgical Solution</h4>
                        <p className="text-gray-300 text-sm">Achieve facelift-like results without surgery</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Reversible Treatment</h4>
                        <p className="text-gray-300 text-sm">Can be dissolved if desired using hyaluronidase</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Aftercare Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-purple-500 border-2 h-full">
                  <CardHeader>
                    <CardTitle className="text-purple-300 text-2xl">Aftercare Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Clock className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-white font-semibold mb-1">First 24 Hours</h4>
                        <p className="text-gray-300 text-sm">Avoid strenuous exercise and excessive heat</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Activity className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-white font-semibold mb-1">First 48 Hours</h4>
                        <p className="text-gray-300 text-sm">Avoid alcohol, aspirin, and blood-thinning medications</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Syringe className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Gentle Skincare</h4>
                        <p className="text-gray-300 text-sm">Use gentle products and avoid harsh scrubbing</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Calendar className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Follow-up Care</h4>
                        <p className="text-gray-300 text-sm">2-week follow-up appointment to assess results</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Ice Application</h4>
                        <p className="text-gray-300 text-sm">Apply ice packs for 10-15 minutes to reduce swelling</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Professional Support</h4>
                        <p className="text-gray-300 text-sm">24/7 aftercare support from our medical team</p>
                      </div>
                    </div>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Marionette Lines Pricing London</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for premium marionette line treatments. All prices include consultation, 
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
                <Card className="bg-black border-purple-500 h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Marionette Lines Only</CardTitle>
                    <div className="text-purple-300 text-4xl font-bold">£325</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Perfect for targeted marionette line treatment</p>
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
                    <CardTitle className="text-white text-2xl">Liquid Facelift</CardTitle>
                    <div className="text-white text-4xl font-bold">£650</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-100">Comprehensive treatment including marionette lines + nasolabial folds</p>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Comprehensive consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={16} />
                        <span className="text-purple-100 text-sm">Multiple areas treated</span>
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
                <Card className="bg-black border-gray-700 h-full text-center">
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
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold">
                Book Your Consultation
              </Button>
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
              <div className="flex items-center justify-center gap-4 text-gray-300 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-purple-300" />
                  <span>10 Harley Street, London W1G 9PF</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-purple-300" />
                  <span>Open Monday-Friday, 9am-6pm</span>
                </div>
              </div>
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

        {/* Patient Testimonials */}
        <section className="py-20 bg-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Patient Testimonials</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Real results from real patients who've experienced the transformative effects of our marionette lines treatment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-gray-900 border-purple-500">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "The marionette lines treatment has completely transformed my appearance. I genuinely look 10 years younger and the results are so natural. Dr. Haq's precision and artistry are exceptional."
                  </p>
                  <p className="text-purple-300 font-semibold">Jessica L.</p>
                  <p className="text-gray-400 text-sm">Verified Patient</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-purple-500">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "I was nervous about fillers but the team at Cosmedocs made me feel completely at ease. The liquid facelift approach is brilliant — the lines have vanished and I still look like me, just refreshed."
                  </p>
                  <p className="text-purple-300 font-semibold">Amanda K.</p>
                  <p className="text-gray-400 text-sm">Verified Patient</p>
                </CardContent>
              </Card>
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
                Get expert answers about marionette line treatments and liquid facelifts from our experienced practitioners.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-black rounded-lg border-gray-800" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-900 rounded-lg">
                      <span className="text-white font-medium" itemProp="name">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-300" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <div itemProp="text">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center mt-8"
              >
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <GraduationCap size={16} />
                  Medically reviewed by Dr. Ahmed Haq, Medical Director
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Last updated: 4th October 2025
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Other Dermal Filler Treatments */}
        <section className="w-full py-24 bg-gray-900/50">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Other Dermal Filler Treatments</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your natural beauty with specialized dermal filler treatments for individual facial areas
              </p>
            </div>

            {/* Anti-Ageing Treatments */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold text-white text-center mb-12">Anti-Ageing Treatments</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Nasolabial Folds",
                    price: "£325/ml",
                    description: "Reduce smile lines for a smoother transition from nose to mouth.",
                    features: ["Instant results", "12-18 months duration", "Natural enhancement"],
                    link: "/nasolabial-folds"
                  },
                  {
                    title: "Jawline (High Def/Jowls)",
                    price: "£350/ml",
                    description: "Define and contour jawline while addressing jowl sagging.",
                    features: ["Sculpted definition", "Youthful contour", "Professional technique"]
                  },
                  {
                    title: "Cheek Volume",
                    price: "£350/ml",
                    description: "Restore youthful cheek fullness and enhance facial proportions.",
                    features: ["Natural volume", "Lifted appearance", "Long-lasting results"]
                  },
                  {
                    title: "Tear Trough / Under Eye",
                    price: "£425",
                    description: "Address under-eye hollowing and dark circles for refreshed eyes.",
                    features: ["Refreshed look", "Reduced shadows", "Expert technique required"]
                  },
                  {
                    title: "Profhilo",
                    price: "£350",
                    description: "Bio-remodelling treatment for skin hydration and firmness.",
                    features: ["Skin bio-remodelling", "Hydration boost", "Natural glow"]
                  }
                ].map((treatment, index) => {
                  const CardComponent = (
                    <Card key={index} className="p-6 bg-gray-800/50 border-gray-700 hover:bg-gray-700/30 transition-colors">
                      <CardContent className="p-0">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-lg font-semibold text-white">{treatment.title}</h4>
                          <span className="text-xl font-bold text-yellow-400">{treatment.price}</span>
                        </div>
                        <p className="text-gray-300 text-sm mb-4">{treatment.description}</p>
                        <div className="space-y-2 mb-4">
                          {treatment.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 shrink-0" />
                              <span className="text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  );

                  return treatment.link ? (
                    <Link key={index} to={treatment.link} className="block hover:no-underline">
                      {CardComponent}
                    </Link>
                  ) : (
                    CardComponent
                  );
                })}
              </div>
            </div>

            {/* Facial Contouring Treatments */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold text-white text-center mb-12">Facial Contouring</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "0.5ml Lip Filler (Natural)",
                    price: "£300",
                    description: "Subtle lip enhancement for naturally fuller lips.",
                    features: ["Natural enhancement", "Subtle volume", "Perfect proportions"]
                  },
                  {
                    title: "1ml Lip Filler (Bold & Plump)",
                    price: "£350",
                    description: "More dramatic lip enhancement for fuller, plumper lips.",
                    features: ["Bold results", "Dramatic volume", "Long-lasting effect"]
                  },
                  {
                    title: "Non Surgical Nose Job",
                    price: "£450",
                    description: "Reshape and refine nose contours without surgery.",
                    features: ["No surgery required", "Immediate results", "Reversible treatment"]
                  },
                  {
                    title: "Forehead Filler",
                    price: "£400",
                    description: "Smooth forehead bumps and dips for an even surface.",
                    features: ["Smooth surface", "Natural appearance", "Expert precision"]
                  },
                  {
                    title: "Temples Hollowing",
                    price: "£350/ml",
                    description: "Restore temple volume for a more youthful facial shape.",
                    features: ["Youthful restoration", "Natural volume", "Facial harmony"],
                    link: "/temple-filler-london"
                  },
                  {
                    title: "Redensity 1",
                    price: "£250/ml",
                    description: "Skin quality improvement with micro-injections.",
                    features: ["Skin quality boost", "Hydration enhancement", "Natural glow"]
                  }
                ].map((treatment, index) => {
                  const CardComponent = (
                    <Card key={index} className="p-6 bg-gray-800/50 border-gray-700 hover:bg-gray-700/30 transition-colors">
                      <CardContent className="p-0">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-lg font-semibold text-white">{treatment.title}</h4>
                          <span className="text-xl font-bold text-yellow-400">{treatment.price}</span>
                        </div>
                        <p className="text-gray-300 text-sm mb-4">{treatment.description}</p>
                        <div className="space-y-2 mb-4">
                          {treatment.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 shrink-0" />
                              <span className="text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  );

                  return treatment.link ? (
                    <Link key={index} to={treatment.link} className="block hover:no-underline">
                      {CardComponent}
                    </Link>
                  ) : (
                    CardComponent
                  );
                })}
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
              <h2 className="text-3xl font-bold mb-4">Ready to Look 10 Years Younger?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how marionette line treatment 
                can transform your appearance with our liquid facelift approach.
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

        {/* Hidden SEO content */}
        <div className="sr-only">
          <h3>Expert Marionette Lines Treatment and Liquid Facelift in London</h3>
          <p>
            Cosmedocs offers advanced marionette line dermal filler treatments and liquid facelift procedures at our prestigious Harley Street clinic in London. Our experienced cosmetic doctors specialize in the "10 years younger" transformation, particularly for younger individuals in their 30s seeking non-surgical facial rejuvenation. Marionette lines are vertical creases extending from mouth corners to the chin, often making patients appear sad or aged. These lines develop through natural aging, volume loss, decreased collagen production, and repetitive facial expressions. Our comprehensive liquid facelift approach addresses marionette lines alongside nasolabial folds, understanding that nasolabial creases result from repeated smiling while nasolabial folds stem from cheek volume loss causing skin sagging. The treatment uses premium hyaluronic acid dermal fillers strategically placed to restore volume and smooth lines. Our liquid facelift combines multiple treatments including marionette line correction, cheek volume restoration, nasolabial fold smoothing, and lip enhancement for harmonious results. The procedure takes 30-45 minutes with immediate visible improvements lasting 12-18 months. We use ultra-fine needles and premium fillers containing lidocaine for comfort. Recovery involves minimal downtime with most patients returning to activities immediately. Our consultation includes comprehensive facial assessment to determine optimal treatment approach. We achieve natural-looking results that maintain emotional expression while dramatically reducing signs of aging. Book your consultation today for expert marionette line treatment.
          </p>
        </div>
      </div>
    </>
  );
};

export default MarionnetteLines;
