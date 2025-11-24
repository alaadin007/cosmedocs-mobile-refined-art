import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Star, Award, Eye, Zap, ArrowRight, Users, BookOpen, Plus, Minus, Calendar, Activity, Syringe, GraduationCap, Palette, Heart, Shield, MapPin } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link } from 'react-router-dom';
import ClientReviews from '@/components/ClientReviews';

const DermalFillerMakeover = () => {
  const seoData = generateSEOMetadata(
    "Dermal Filler Makeover London | Cosmedocs",
    "Complete facial rejuvenation with dermal fillers. Multi-area treatment for harmonious face transformation. Bespoke plans.",
    "/dermal-fillers"
  );

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/64ee3f9e-7616-464d-962f-0a5ba656a82c.png",
      alt: "Dermal filler makeover before and after front view",
      caption: "Full face rejuvenation with dermal fillers - front view transformation"
    },
    {
      src: "/lovable-uploads/7d9d621d-c4ee-4c23-82fb-56ee04ef333f.png",
      alt: "Dermal filler makeover before and after side profile",
      caption: "Enhanced facial contours and profile definition"
    },
    {
      src: "/lovable-uploads/a4df5f90-dda5-48a2-9bd2-19728aa1a275.png",
      alt: "Dermal filler makeover cheek enhancement",
      caption: "Natural cheek enhancement and facial contouring"
    },
    {
      src: "/lovable-uploads/1beab5af-7f27-4505-83ec-b0fab7ef68cc.png",
      alt: "Dermal filler makeover jawline definition",
      caption: "Defined jawline and improved facial structure"
    },
    {
      src: "/lovable-uploads/e3020fef-05e0-4022-b981-0fe5dc9a2c53.png",
      alt: "Dermal filler makeover side profile enhancement",
      caption: "Elegant side profile enhancement with dermal fillers"
    },
    {
      src: "/lovable-uploads/462ae463-011b-428b-9685-1e13d2d061d9.png",
      alt: "Dermal filler makeover male jawline",
      caption: "Masculine jawline enhancement for male clients"
    }
  ];

  const faqItems = [
    {
      question: "What is Hyaluronic Acid and why is it used in dermal fillers?",
      answer: "Hyaluronic acid (HA) is a naturally occurring substance found in your skin, joints, and eyes. It's a powerful humectant that can hold up to 1,000 times its weight in water, making it exceptional for maintaining skin hydration and volume. In dermal fillers, HA provides natural-looking results because it integrates seamlessly with your body's existing hyaluronic acid. This biocompatible substance adds volume, smooths wrinkles, and enhances facial contours while maintaining a natural feel and appearance."
    },
    {
      question: "Am I suitable for dermal fillers?",
      answer: "Most adults over 18 in good general health are suitable for dermal fillers. Ideal candidates are those looking to restore volume, smooth wrinkles, or enhance facial features without surgery. However, dermal fillers may not be suitable if you're pregnant or breastfeeding, have active skin infections, severe allergies, or certain autoimmune conditions. During your consultation, our practitioners will assess your medical history, skin condition, and aesthetic goals to determine if dermal fillers are right for you."
    },
    {
      question: "Do dermal fillers hurt?",
      answer: "Most patients experience minimal discomfort during dermal filler treatments. We use ultra-fine needles and many modern fillers contain lidocaine (a local anaesthetic) to enhance comfort during injection. Additionally, topical numbing cream can be applied before treatment. Most patients describe the sensation as a slight pressure or pinching. The treatment typically takes 15-30 minutes, and any discomfort is brief and manageable."
    },
    {
      question: "What brands of dermal fillers do you use?",
      answer: "At Cosmedocs, we exclusively use premium, FDA-approved dermal filler brands including Juvéderm, Restylane, and Teosyal. These are all hyaluronic acid-based fillers renowned for their safety profile, natural results, and longevity. Each brand offers different formulations designed for specific treatment areas and outcomes. During your consultation, your practitioner will recommend the most appropriate product based on your individual needs and desired results."
    },
    {
      question: "Are dermal fillers FDA approved and safe?",
      answer: "Yes, all dermal fillers used at Cosmedocs are FDA-approved and have undergone rigorous safety testing. Hyaluronic acid fillers have an excellent safety record with millions of treatments performed worldwide annually. As a naturally occurring substance in the body, hyaluronic acid has minimal risk of allergic reactions. Additionally, hyaluronic acid fillers can be dissolved with hyaluronidase if needed, providing an extra safety measure. Our experienced practitioners follow strict safety protocols to minimise risks and ensure optimal outcomes."
    },
    {
      question: "How does hyaluronic acid leave the body naturally?",
      answer: "Hyaluronic acid is completely biodegradable and leaves the body through natural metabolic processes. Your body's enzymes, particularly hyaluronidase, gradually break down the HA molecules over time. The broken-down components are then naturally absorbed and eliminated through your lymphatic system and kidneys. This process typically takes 12-18 months, which is why dermal filler results are temporary and require maintenance treatments. The gradual breakdown ensures a natural fade without sudden changes to your appearance."
    },
    {
      question: "How long do dermal filler makeover results last?",
      answer: "Dermal filler makeover results typically last 12-18 months, depending on the areas treated, the type of filler used, your metabolism, and lifestyle factors. Areas with more movement (like lips) may require touch-ups sooner, while deeper facial areas often maintain results longer. Our expert practitioners use premium hyaluronic acid fillers that provide long-lasting, natural-looking results with optimal longevity."
    },
    {
      question: "Is a dermal filler makeover safe?",
      answer: "Yes, when performed by qualified medical professionals using FDA-approved hyaluronic acid fillers, dermal filler makeovers are very safe. At Cosmedocs, our expert practitioners have extensive training in facial anatomy and injection techniques. We use only premium, medical-grade fillers and follow strict safety protocols. Side effects are typically minimal and temporary, including slight swelling or bruising that resolves within a few days."
    },
    {
      question: "What's the difference between dermal fillers and Botox?",
      answer: "Dermal fillers and Botox work differently to achieve complementary results. Dermal fillers add volume, restore lost facial structure, and enhance contours by filling spaces beneath the skin. Botox relaxes muscles to prevent dynamic wrinkles caused by facial expressions. A comprehensive facial rejuvenation often combines both treatments - fillers for volume restoration and structural enhancement, while Botox addresses expression lines and prevents new wrinkle formation."
    },
    {
      question: "Fillers or Botox - Which is best?",
      answer: "Dermal fillers are just as effective as Botox, but the results will last much longer than other anti-wrinkle treatments. However, the longevity of the effects of dermal fillers can still vary, mostly by the type of filler. Some fillers may last only as long as Botox (3-4 months), while other types of fillers can last for a year or more. The best choice depends on your specific concerns: fillers for volume loss and structural enhancement, Botox for dynamic wrinkles and expression lines. Many patients benefit from combining both treatments for comprehensive facial rejuvenation."
    },
    {
      question: "What is the 8 Point Lift?",
      answer: "The 8 Point Lift is a revolutionary treatment that can give you a youthful-looking glow without invasive cosmetic surgery. This advanced technique involves restoring volume in eight strategic areas of the face, giving lift and support using small amounts of dermal filler. The treatment targets key areas including the cheeks, temples, and jawline to create a natural lifting effect without the discomfort or downtime of a surgical facelift. Results are immediate and can last 12-18 months."
    },
    {
      question: "What are tear trough fillers?",
      answer: "Tear trough fillers are specifically designed to smooth and minimise the appearance of under-eye bags and hollows. This delicate treatment addresses the area between the lower eyelid and upper cheek, where shadows and hollowing can create a tired or aged appearance. By carefully injecting hyaluronic acid filler into this area, we can restore volume, reduce dark circles, and create a fresher, brighter appearance around the eyes. The results are subtle yet transformative, making you look more rested and youthful."
    },
    {
      question: "What are dermal cheek fillers?",
      answer: "Dermal cheek fillers are injectable treatments designed to restore volume to sunken or flat cheeks, which can give a skeletal appearance as we age. The solution is injected into your cheek muscles and acts as a plumping mechanism that creates youthful-looking cheeks. Cheek fillers can enhance cheekbones, lift the mid-face, smooth nasolabial folds, and create better facial proportions. The treatment provides immediate results that look natural and can last 12-18 months."
    },
    {
      question: "What are dermal lip fillers?",
      answer: "Dermal lip fillers are specifically formulated injectable treatments designed to enhance, reshape, and add volume to the lips. Unlike general facial fillers, lip fillers use softer formulations that provide natural movement and a subtle finish. They can address thin lips, asymmetry, loss of definition, and vertical lip lines. The treatment allows for precise control, enabling us to enhance your natural lip shape or create more volume depending on your aesthetic goals. Results are immediate and typically last 6-12 months."
    },
    {
      question: "What is non-surgical nose reshaping?",
      answer: "Non-surgical nose reshaping, also known as liquid rhinoplasty, is an advanced procedure that allows the nose to be reshaped using dermal filler without the need for invasive surgery. This technique can smooth bumps, lift a drooping tip, straighten a crooked nose, and improve overall symmetry. The treatment takes just 15-30 minutes with immediate results and no downtime. While it cannot reduce the size of your nose, it can create the illusion of a more refined shape by adding volume strategically. Results typically last 12-18 months."
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
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
      </Helmet>

      <div className="bg-black text-white">
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
                  <span className="text-purple-300">Dermal Filler Makeover</span>
                  <span className="block text-sm mt-4">Invisible art - natural enhancement that speaks without words</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-purple-300 font-bold">Expert Practitioners</p>
                  <p className="text-sm text-gray-300">Full face rejuvenation with personalized treatment plans and invisible art philosophy</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl" asChild>
                    <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Consultation</a>
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
              <h2 className="text-3xl font-bold mb-8 text-white">Dermal Filler Makeover Treatment</h2>
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
                <p className="text-gray-300">45-60 minutes including consultation</p>
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

        {/* Before & After Carousel */}
        <section className="w-full py-24 bg-gray-900/30">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real Patient <span className="text-purple-300">Transformations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the incredible results achieved through our expert dermal filler makeover treatments
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
          </div>
        </section>

        {/* What is a Dermal Filler Makeover */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold mb-6 text-white">What is a Dermal Filler Makeover?</h2>
                <div className="space-y-6 text-left">
                  <p className="text-gray-300 leading-relaxed">
                    A dermal filler makeover is a comprehensive treatment plan designed to rejuvenate the entire face using a combination of premium hyaluronic acid dermal fillers. This holistic approach addresses multiple areas to create a balanced and harmonious result that enhances your natural features.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    During the treatment, strategic injections are placed in key areas such as cheeks, temples, under-eye area, nasolabial folds, marionette lines, lips, and jawline. Each injection is carefully planned to restore volume, smooth wrinkles, and enhance facial contours for a naturally youthful appearance.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The treatment uses hyaluronic acid, a naturally occurring substance that attracts and retains moisture, providing immediate volume while integrating seamlessly with your existing facial structure for natural-looking, long-lasting results.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Understanding Collagen and Skin Aging */}
        <section className="py-20 bg-gray-900/30">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-white text-center">Understanding Collagen Loss and Natural Ageing</h2>
                
                <div className="space-y-6 text-left">
                  <div className="bg-black/30 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
                      <Activity className="mr-2" size={24} />
                      What Happens as We Age
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      As a person ages, the body begins to lose collagen. Collagen is an important substance that exists in your skin, muscles, bones, and tissues. It's the structural protein that gives your skin its firmness, elasticity, and youthful appearance.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      A decrease in the amount of collagen can cause skin laxity and loss of volume. The skin becomes thinner, loses its elasticity, and starts to sag. This natural ageing process affects everyone differently, but typically becomes more noticeable in our 30s and progresses with each passing decade.
                    </p>
                  </div>

                  <div className="bg-black/30 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
                      <Eye className="mr-2" size={24} />
                      Visible Signs of Collagen Loss
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      As we age, our skin changes and we lose hydration as well as facial fat. Our natural skin elasticity reduces due to the degradation of collagen, and our skin becomes more fragile. Because of these natural skin changes, over time the natural volume of your youthful skin begins to diminish, and wrinkles and folds start to form.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      The more mobile facial areas are the first to be affected by this natural ageing process. Skin will eventually begin to sag, and "expressive" wrinkles will start to appear around the eyes, forehead, and mouth, which are more difficult to smooth out without intervention.
                    </p>
                  </div>

                  <div className="bg-black/30 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
                      <Heart className="mr-2" size={24} />
                      How Dermal Fillers Help
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Dermal fillers work by acting to replace lost collagen in the skin, helping to restore a firm and full structure that effectively lifts sagging skin around the cheeks, chin, and jawline. The hyaluronic acid gel contains a high concentration of moisture-binding molecules, flooding the skin with hydration to boost overall skin quality.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Adding volume to help smooth the texture of the skin's surface can work effectively to soften the look of facial wrinkles, including smile lines and lip lines. As the underlying tissues of the skin regain density, dermal fillers can restore a volumised look to sunken cheeks, tear trough furrows, and hollow temples for a naturally youthful appearance.
                    </p>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-8 text-center"
                  >
                    <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold" asChild>
                      <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                        Book Your Consultation
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comprehensive Treatment Areas */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Comprehensive Treatment Areas</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our dermal filler treatments target multiple facial areas for complete rejuvenation 
                and natural-looking results that enhance your overall facial harmony.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { area: "Cheek Enhancement", description: "Restore youthful volume and create natural lift for defined cheekbones", link: "/cheek-filler" },
                { area: "Nasolabial Folds", description: "Smooth smile lines from nose to mouth corners for a more youthful appearance", link: "/nasolabial-folds" },
                { area: "Marionette Lines", description: "Address downward lines from mouth corners to chin for improved facial contour", link: "/marionette-lines" },
                { area: "Jawline Definition", description: "Create sharp, masculine or feminine jawline definition with strategic placement", link: "/jawline-filler" },
                { area: "Tear Trough", description: "Reduce under-eye hollowing and dark circles for a refreshed, rested look", link: "/tear-trough-filler" },
                { area: "Lip Enhancement", description: "Add volume, shape, and definition to lips for natural or dramatic results", link: "/lip-fillers" },
                { area: "Lip Lines (Perioral Lines)", description: "Smooth vertical lines around the mouth for a more youthful appearance", link: "/lip-fillers" },
                { area: "Temple Hollowing", description: "Restore temple volume lost with aging for improved facial proportions", link: "/temple-filler-london" },
                { area: "Non-Surgical Nose Job", description: "Reshape and refine nose contours without surgery for immediate results", link: "/non-surgical-nose-job" },
                { area: "Chin Augmentation", description: "Enhance chin projection and balance facial proportions for improved profile", link: "/chin-filler" },
                { area: "Forehead Enhancement", description: "Smooth bumps and irregularities for an even, youthful forehead surface", link: "/forehead-fillers" },
                { area: "Hand Rejuvenation", description: "Restore volume to hands, minimising veins and tendons for a youthful appearance", link: "/dermal-fillers" },
                { area: "Neck & Décolletage", description: "Smooth necklines and chest wrinkles for comprehensive facial rejuvenation", link: "/dermal-fillers" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={item.link}>
                    <Card className="bg-black/50 border-gray-700 h-full hover:border-purple-400 transition-colors group cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-white text-lg flex items-start justify-between">
                          <span className="flex items-start space-x-3">
                            <Zap className="text-purple-400 mt-1 shrink-0" size={20} />
                            <span>{item.area}</span>
                          </span>
                          <ArrowRight className="text-purple-400 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Duration Table */}
        <section className="py-20 bg-gray-900/30">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">How Long Do Dermal Fillers Last?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Duration varies by treatment area and individual factors. Here's what you can expect:
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full bg-black/50 rounded-lg overflow-hidden">
                <thead className="bg-purple-900/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Treatment Area</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Typical Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {[
                    { area: "Lip Enhancement", duration: "6-8 months" },
                    { area: "Cheek Enhancement", duration: "6 months to 2 years" },
                    { area: "Jawline Definition", duration: "15-24 months" },
                    { area: "Tear Trough/Under Eyes", duration: "6-18 months" },
                    { area: "Nasolabial Folds", duration: "6-18 months" },
                    { area: "Marionette Lines", duration: "6-12 months" },
                    { area: "Non-Surgical Nose Job", duration: "12-18 months" },
                    { area: "Chin Enhancement", duration: "15-24 months" },
                    { area: "Temple Enhancement", duration: "6-12 months" }
                  ].map((item, index) => (
                    <tr key={index} className="hover:bg-gray-800/30">
                      <td className="px-6 py-4 text-gray-300 font-medium">{item.area}</td>
                      <td className="px-6 py-4 text-purple-300 font-semibold">{item.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <p className="text-gray-300 max-w-3xl mx-auto">
                Results vary based on filler type, injection technique, metabolism, and treatment area. 
                Our expert practitioners will discuss expected duration during your consultation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Factors Affecting Duration */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">6 Key Factors That Affect Filler Duration</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Understanding these factors helps set realistic expectations for your treatment results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Type of Filler Used",
                  description: "Different hyaluronic acid formulations have varying longevity and density",
                  icon: Syringe
                },
                {
                  title: "Amount of Filler",
                  description: "Higher volumes typically provide longer-lasting results",
                  icon: Activity
                },
                {
                  title: "Filler Consistency", 
                  description: "Thicker fillers generally last longer than thinner formulations",
                  icon: Eye
                },
                {
                  title: "Treatment Area",
                  description: "Areas with more movement (lips) break down faster than static areas",
                  icon: Palette
                },
                {
                  title: "Metabolic Rate",
                  description: "Individual metabolism affects how quickly the body breaks down hyaluronic acid",
                  icon: Zap
                },
                {
                  title: "Injection Technique",
                  description: "Expert placement and technique optimize filler longevity and results",
                  icon: GraduationCap
                }
              ].map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black/50 border-gray-700 h-full hover:border-purple-400 transition-colors">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center">
                          <factor.icon className="text-purple-600" size={20} />
                        </div>
                        <CardTitle className="text-white text-lg">{factor.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{factor.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Dermal Fillers Are Popular */}
        <section className="py-20 bg-gray-900/30">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Why Dermal Fillers Are So Popular</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Discover why millions choose dermal fillers for facial rejuvenation worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Little to No Downtime - 'Lunchtime Facelift'",
                  description: "Unlike surgical solutions, dermal fillers require minimal recovery time. Return to work immediately without stitches, bandages, or general anesthesia."
                },
                {
                  title: "Natural-Looking Results",
                  description: "Achieve subtle, natural enhancement that enhances your features without drastic changes or obvious signs of treatment."
                },
                {
                  title: "Boosts Collagen Production",
                  description: "Hyaluronic acid fillers stimulate natural collagen and elastin production, improving skin quality over time."
                },
                {
                  title: "Long-Lasting Effects",
                  description: "Results typically last 6-18 months depending on the treatment area, providing excellent value for investment."
                },
                {
                  title: "Ideal for Scar Improvement",
                  description: "Effectively treat depressed scars by elevating them to skin level, providing relief for long-term scar sufferers."
                },
                {
                  title: "Non-Surgical Solution",
                  description: "Achieve your beauty goals without incisions, scalpels, or anesthesia - making beauty enhancement more accessible."
                },
                {
                  title: "Minimal Risks and Side Effects",
                  description: "When performed by qualified practitioners, dermal fillers have minimal risks with temporary, manageable side effects."
                },
                {
                  title: "Confidence Restoration",
                  description: "Restore lost confidence in your appearance without significant pain, long downtime, or major lifestyle disruption."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black/50 border-gray-700 h-full">
                    <CardHeader>
                      <CardTitle className="text-white text-lg flex items-start space-x-3">
                        <CheckCircle className="text-purple-400 mt-1 shrink-0" size={20} />
                        <span>{benefit.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dermal Fillers vs Botox */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Dermal Fillers vs Botox</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Both are injectable treatments that address aging signs, but they work differently to achieve aesthetic goals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Dermal Fillers</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Add volume and structure to the skin</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Restore lost facial volume</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Smooth wrinkles and enhance contours</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Treat static lines and sagging skin</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Results last 6-18 months</p>
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
                <Card className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border-blue-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Botox</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Relaxes muscles to prevent wrinkles</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Treats dynamic expression lines</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Prevents formation of new wrinkles</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Best for forehead lines and crow's feet</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-300">Results last 3-4 months</p>
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
              className="mt-8 text-center"
            >
              <p className="text-gray-300 max-w-3xl mx-auto">
                Many patients achieve optimal results by combining both treatments. Our expert practitioners 
                can recommend the best approach for your specific aesthetic goals during consultation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Aftercare Instructions */}
        <section className="py-20 bg-gray-900/30">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Dermal Filler Aftercare Guide</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Following proper aftercare ensures optimal results and minimises potential side effects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl flex items-center">
                      <CheckCircle className="text-green-400 mr-2" size={24} />
                      Do's After Treatment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300">Apply ice packs for 10-15 minutes to reduce swelling</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300">Sleep with head elevated for the first 24-48 hours</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300">Drink plenty of water to support hyaluronic acid hydration</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300">Take arnica supplements to minimise bruising</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300">Use gentle, fragrance-free skincare products</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300">Contact clinic immediately if severe pain or unusual symptoms occur</p>
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
                <Card className="bg-black/50 border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl flex items-center">
                      <Shield className="text-red-400 mr-2" size={24} />
                      Don'ts After Treatment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300">Avoid touching or massaging treated areas for 24 hours</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300">No strenuous exercise or heavy lifting for 24-48 hours</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300">Avoid alcohol for 24 hours as it increases bruising risk</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300">No facial treatments, peels, or lasers for 2 weeks</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300">Avoid extreme temperatures (saunas, steam rooms) for 48 hours</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300">Don't wear makeup on treated areas for at least 12 hours</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-20 bg-accent">
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
                  <Users className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">Over 2 million treatments completed</p>
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
                <p className="text-gray-300">Premium FDA-approved fillers only</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Results</h3>
                <p className="text-gray-300">Natural, elegant outcomes</p>
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

        {/* Other Dermal Filler Treatments */}
        <section className="py-20 bg-gray-900/30">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Other Dermal Filler Treatments</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of dermal filler treatments for targeted facial enhancement
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Lip Fillers",
                  description: "Enhanced lip volume and definition with natural-looking results",
                  price: "From £280",
                  link: "/lip-fillers"
                },
                {
                  title: "Cheek Fillers",
                  description: "Restore youthful volume and create defined cheekbones",
                  price: "From £350",
                  link: "/cheek-fillers"
                },
                {
                  title: "Jawline Fillers",
                  description: "Define and sculpt your jawline for enhanced facial structure",
                  price: "From £400",
                  link: "/jawline-fillers"
                },
                {
                  title: "Tear Trough Fillers",
                  description: "Reduce under-eye hollowing and dark circles",
                  price: "From £350",
                  link: "/tear-trough-fillers"
                },
                {
                  title: "Non-Surgical Nose Job",
                  description: "Reshape and refine nose contours without surgery",
                  price: "From £300",
                  link: "/non-surgical-nose-job"
                },
                {
                  title: "Temple Fillers",
                  description: "Restore temple volume for improved facial proportions",
                  price: "From £350",
                  link: "/temple-fillers"
                }
              ].map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black/50 border-gray-700 h-full hover:border-purple-400 transition-colors group">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{treatment.title}</CardTitle>
                      <div className="text-2xl font-bold text-purple-300">{treatment.price}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{treatment.description}</p>
                      <Button 
                        variant="outline" 
                        className="w-full border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white group-hover:scale-105 transition-transform"
                        asChild
                      >
                        <Link to={treatment.link}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
              <h2 className="text-3xl font-bold mb-4 text-white">Dermal Filler Makeover Pricing</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for comprehensive facial rejuvenation treatments
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Essential Refresh</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£350</div>
                    <p className="text-gray-300">1ml dermal filler</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        Single area treatment
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        Premium hyaluronic acid
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        Expert consultation
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-400/50 h-full transform scale-105">
                  <CardHeader>
                    <div className="text-center mb-2">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
                    </div>
                    <CardTitle className="text-white text-xl">Complete Makeover</CardTitle>
                    <div className="text-3xl font-bold text-purple-300">£1,200</div>
                    <p className="text-gray-300">3-4ml dermal filler</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        Multiple area treatment
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        Comprehensive consultation
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        Follow-up appointment
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Premium Experience</CardTitle>
                    <div className="text-3xl font-bold text-green-300">£2,000+</div>
                    <p className="text-gray-300">5+ ml dermal filler</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        Full facial rejuvenation
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        Multiple treatment sessions
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        VIP aftercare package
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border-blue-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Consultation Only</CardTitle>
                    <div className="text-3xl font-bold text-blue-300">£50</div>
                    <p className="text-gray-300">Expert assessment</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        Detailed facial analysis
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        Personalized treatment plan
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        No commitment required
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-6">
                *Consultation fee is deducted from treatment cost if you proceed on the same day
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold" asChild>
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Your Consultation</a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-20 bg-accent">
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
                  <Users className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">2M+ Treatments</h3>
                <p className="text-gray-300">Over 2 million successful treatments</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Practitioners</h3>
                <p className="text-gray-300">Medical doctors and nurses only</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Harley Street</h3>
                <p className="text-gray-300">Prestigious London location</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">5-Star Reviews</h3>
                <p className="text-gray-300">Exceptional patient satisfaction</p>
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
        <section className="w-full py-24 bg-gray-900/30">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about dermal filler makeovers and hyaluronic acid treatments
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <Collapsible key={index}>
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-gray-800/50 p-6 text-left transition-colors hover:bg-gray-700/50">
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <Plus className="h-5 w-5 text-purple-400 shrink-0" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
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
              <h2 className="text-3xl font-bold mb-4">Ready for a Complete Facial Transformation?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your consultation with our expert cosmetic doctors and discover how our dermal filler makeover 
                can enhance your natural beauty with sophisticated, long-lasting results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6" asChild>
                  <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">Book Free Consultation</a>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6" asChild>
                  <a href="tel:03330551503">Call 0333 0551 503</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Client Reviews */}
        <ClientReviews />

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Dermal Filler Makeover London Full Face Rejuvenation Cosmedocs Natural Results Hyaluronic Acid</h2>
          <p>Professional dermal filler makeover treatments in London by expert cosmetic doctors at Cosmedocs. Experience the art of invisible aesthetic medicine with our comprehensive facial rejuvenation using premium hyaluronic acid dermal fillers. Our bespoke treatment plans address multiple facial areas including cheeks, jawline, lips, nasolabial folds, and tear troughs for natural-looking results that enhance your unique features. With over 2 million treatments completed, our Harley Street trained practitioners deliver sophisticated outcomes that speak without saying a word - embodying our philosophy of bold, natural, always your way aesthetic medicine.</p>
        </div>
      </div>
    </>
  );
};

export default DermalFillerMakeover;