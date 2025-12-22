import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { generateSEOMetadata } from "@/utils/seo";
import Breadcrumb from "@/components/Breadcrumb";
import { 
  Sparkles, 
  Shield, 
  Clock, 
  Phone, 
  Mail, 
  Calendar,
  CheckCircle,
  AlertTriangle,
  Sun,
  Droplets,
  Heart,
  Star,
  Users,
  Award,
  Zap,
  Target,
  Activity
} from "lucide-react";

export default function CO2LaserResurfacing() {
  const seoData = generateSEOMetadata(
    "CO2 Laser Resurfacing London | Fully Ablative Skin Rejuvenation | Cosmedocs",
    "CO2 laser resurfacing is the most powerful skin rejuvenation technique available. Completely renew facial skin, tighten laxity, remove wrinkles, improve elasticity and remove precancerous cells at Cosmedocs London.",
    "/co2-laser-resurfacing"
  );

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Treatments", href: "/treatments" },
    { label: "CO2 Laser Resurfacing", href: "/co2-laser-resurfacing" }
  ];

  const treatmentBenefits = [
    {
      icon: Sparkles,
      title: "Complete Skin Renewal",
      description: "Fully ablative CO2 laser removes the entire damaged outer layer of skin, triggering the growth of fresh, healthy tissue from the deeper dermal structures."
    },
    {
      icon: Target,
      title: "Superior Skin Tightening",
      description: "Thermal energy contracts existing collagen fibres whilst stimulating new collagen synthesis, delivering significant reduction in skin laxity."
    },
    {
      icon: Zap,
      title: "Wrinkle Elimination",
      description: "Deep wrinkles, fine lines, and barcode lines around the mouth are dramatically reduced or eliminated through precise tissue vaporisation."
    },
    {
      icon: Activity,
      title: "Improved Elasticity",
      description: "New type III collagen continues to form for up to 6 months post-procedure, progressively improving skin elasticity and thickness."
    },
    {
      icon: Shield,
      title: "Precancerous Cell Removal",
      description: "Actinic keratoses and other precancerous lesions caused by sun damage are effectively removed, significantly reducing skin cancer risk."
    },
    {
      icon: Sun,
      title: "Sun Damage Reversal",
      description: "Decades of sun damage including pigmentation, elastosis, and photoageing are reversed, revealing completely renewed skin."
    }
  ];

  const dayByDayRecovery = [
    {
      day: "Day 0 - Procedure Day",
      title: "The Treatment Experience",
      description: "Your CO2 laser resurfacing journey begins with thorough preparation. Our Cosmedocs team will apply topical anaesthetic gel and may administer additional anaesthetic techniques including nerve blocks for optimal comfort. The procedure typically takes 45-60 minutes depending on the treatment area. During the treatment, you may experience a moderate prickly or burning sensation, typically rated 4-5 out of 10 by patients. Immediately afterwards, your face will feel very hot - similar to moderate sunburn. This is entirely normal and expected.",
      expectations: [
        "Face feels hot and tight immediately after treatment",
        "Skin appears bright red and swollen",
        "Burning sensation similar to sunburn",
        "Barrier cream (Aquaphor or CU3) applied to treated areas",
        "Detailed aftercare instructions provided",
        "You will need someone to drive you home"
      ],
      careInstructions: "Rest with your head elevated. Apply cool compresses if needed (not ice). Take prescribed antiviral and antibiotic medications as directed. Your Cosmedocs skin aesthetician will contact you this evening to check how you are feeling."
    },
    {
      day: "Day 1",
      title: "Peak Swelling Begins",
      description: "The burning sensation from yesterday will begin to subside within the first 24-48 hours. However, swelling will increase significantly and will be most pronounced around the eyes. This is completely normal and expected. Your face will feel tight, and the skin will appear very red. There may be some weeping of clear or yellowish serous fluid - this is your body's natural healing response.",
      expectations: [
        "Swelling peaks, especially around eyes",
        "Face feels very tight and uncomfortable",
        "Weeping of serous fluid begins",
        "Redness intensifies",
        "Burning sensation starts to reduce",
        "Sleeping may be uncomfortable"
      ],
      careInstructions: "Begin twice-daily face washing in the shower with prescribed Dermol cleanser. Apply Aquaphor or Vaseline after each wash. Send selfie photos to our Cosmedocs virtual ward for monitoring. Our skin aesthetician will call you today to assess your progress and answer any questions."
    },
    {
      day: "Day 2",
      title: "Continued Swelling",
      description: "Swelling remains significant, and you may notice your eyes appear almost swollen shut - this is temporary and will improve. The weeping of serous fluid continues. This fluid crystallises into a yellowish crust which is normal. Your face may feel itchy as healing begins. Do not scratch or pick at any crusting. The Cosmedocs team continues daily monitoring to ensure optimal healing.",
      expectations: [
        "Eye swelling may be severe",
        "Continued serous fluid weeping",
        "Crusting begins to form",
        "Itching may commence",
        "Skin feels extremely tight",
        "Rest is essential"
      ],
      careInstructions: "Continue twice-daily face washing and Aquaphor application. Do not pick at crusts - allow them to shed naturally. Stay hydrated and continue medications. Your aesthetician will review your photos and provide personalised guidance."
    },
    {
      day: "Day 3",
      title: "Crusting Develops",
      description: "The serous fluid continues to dry, forming more pronounced crusting across treated areas. Swelling begins to very slowly reduce. The tightness intensifies as the damaged outer skin starts to separate from the healing tissue beneath. Itching may increase as the healing process accelerates. This is often described as one of the more uncomfortable days, but it signifies healthy healing.",
      expectations: [
        "Thicker crusting forms",
        "Swelling starts to reduce slightly",
        "Increased tightness",
        "Itching may intensify",
        "Skin appears darker due to crusting",
        "Sleeping improves slightly"
      ],
      careInstructions: "Gentle face washing removes some loose residue but do not scrub. Continue Aquaphor barrier. If itching is severe, contact the Cosmedocs team - we can advise on management. Daily photos continue to be reviewed by our clinical team."
    },
    {
      day: "Day 4",
      title: "The Itching Peak",
      description: "For many patients, day 4 brings the peak of itching as new skin cells proliferate beneath the crusted outer layer. This can be intensely frustrating but is a positive sign of rapid healing. Some patients describe this as the most challenging day emotionally. The Cosmedocs team is available for support and can provide advice on managing discomfort. Swelling continues to reduce gradually.",
      expectations: [
        "Peak itching for most patients",
        "Crusts begin to loosen at edges",
        "Swelling continues to decrease",
        "New pink skin may be visible at edges",
        "Face feels very dry despite Aquaphor",
        "Emotional support may be needed"
      ],
      careInstructions: "Do not scratch - use gentle patting if absolutely necessary. Cool (not cold) compresses may help. Distraction techniques are valuable. The team will check in to provide encouragement and monitor for any concerns."
    },
    {
      day: "Day 5",
      title: "Crusts Begin to Shed",
      description: "You will start to see crusts naturally separating from the face, revealing fresh pink skin underneath. This is extremely satisfying to witness. Do not pull or peel crusts - allow them to fall away naturally to prevent scarring. The new skin is very delicate and must be protected. Weeping has largely stopped. The transformation begins to become visible.",
      expectations: [
        "Natural shedding of crusts begins",
        "Fresh pink skin revealed underneath",
        "Weeping has stopped",
        "Swelling significantly reduced",
        "Itching begins to decrease",
        "First glimpses of results emerge"
      ],
      careInstructions: "Continue gentle washing but be extra careful with shedding areas. Keep applying Aquaphor to protect new skin. Absolutely no picking at loose crusts. Your aesthetician will discuss progress and what to expect over coming days."
    },
    {
      day: "Day 6-7",
      title: "Active Shedding Phase",
      description: "Days 6 and 7 see the most dramatic shedding of crusted tissue. Large pieces may naturally fall away during face washing. Underneath, bright pink new skin is revealed. This new skin is extremely sensitive and will remain pink for several weeks. You may start to see the remarkable smoothness and texture improvement. The Cosmedocs team will assess whether healing is progressing as expected.",
      expectations: [
        "Major crusting falls away",
        "Significant new skin visible",
        "Bright pink colouration",
        "Dramatically smoother texture",
        "Sensitivity to touch",
        "Reduced tightness"
      ],
      careInstructions: "Continue twice-daily washing and Aquaphor. New skin is extremely sun-sensitive - strict indoor rest continues. The clinical team will confirm healing is on track and discuss the coming week's expectations."
    },
    {
      day: "Day 8-10",
      title: "Final Healing Phase",
      description: "By day 8-10, the majority of crusting has shed and you are left with pink, slightly shiny new skin. There may be small areas still healing, particularly around the mouth or areas of deeper treatment. The skin remains very sensitive. You will notice the remarkable texture improvement and tightening even at this early stage. The Cosmedocs team continues monitoring to ensure complete healing.",
      expectations: [
        "Most crusting complete",
        "Uniform pink appearance",
        "Visible texture improvement",
        "Skin still very sensitive",
        "Tightening effects visible",
        "Feeling more comfortable"
      ],
      careInstructions: "Continue Aquaphor morning and evening. You may gently apply slightly less during the day if desired. Still no makeup, sunscreen or other products. Our team will advise on next steps."
    },
    {
      day: "Day 11-14",
      title: "Early Recovery Complete",
      description: "By two weeks post-treatment, the outer skin has largely healed. Redness remains but is manageable. At this point, you are medically fit for work, though visible redness means many patients prefer additional time at home. The transformation in skin texture, smoothness, and tightening is now clearly evident. This marks the end of intensive aftercare, though the healing and collagen remodelling continues for months.",
      expectations: [
        "Surface healing complete",
        "Persistent pinkness/redness",
        "Medically fit for work",
        "Visible improvement in texture",
        "Skin less sensitive",
        "Beginning of new skincare routine possible"
      ],
      careInstructions: "You may cautiously introduce gentle cleanser and basic moisturiser. Strict sun avoidance continues. No sunscreen yet - too early for chemical agents on new skin. The Cosmedocs team will provide your month 2-3 care protocol."
    },
    {
      day: "Week 3-4",
      title: "Redness Settles",
      description: "Over weeks 3-4, the intense pinkness gradually fades to a more subtle rosy hue. Skin texture continues to improve as collagen remodelling accelerates. You may notice the skin looks somewhat grainy or 'orange peel' texture - this is normal and resolves. Some patients develop post-inflammatory hyperpigmentation (temporary darkening) which will fade over the coming weeks to months.",
      expectations: [
        "Gradual reduction in redness",
        "Possible temporary hyperpigmentation",
        "Grainy texture improving",
        "Collagen production accelerating",
        "Skin strength increasing",
        "More normal lifestyle resuming"
      ],
      careInstructions: "Continue gentle skincare only. At week 4-5, you may cautiously trial sunscreen - stop if any irritation occurs. Continue strict sun avoidance. Monthly check-in with Cosmedocs team."
    },
    {
      day: "Month 2-3",
      title: "Progressive Improvement",
      description: "During months 2 and 3, the remarkable transformation truly reveals itself. Redness continues to fade, hyperpigmentation (if present) improves, and the skin's texture, thickness and elasticity dramatically improve. New collagen continues to form, providing ongoing tightening effects. Most patients can return to normal skincare routines by month 3. The results are permanent - this is your new skin.",
      expectations: [
        "Substantial redness reduction",
        "Hyperpigmentation fading",
        "Texture fully refined",
        "Collagen synthesis ongoing",
        "Normal skincare tolerated",
        "Final results emerging"
      ],
      careInstructions: "Introduce actives cautiously (vitamin C, niacinamide). Use SPF 50 daily. Before and after photos will be taken at month 3 to document your transformation."
    },
    {
      day: "Month 6+",
      title: "Final Results",
      description: "At 6 months post-treatment, collagen remodelling is complete and you are seeing your final results. The skin is completely renewed - firmer, smoother, tighter, and free from sun damage and precancerous lesions. Wrinkles are dramatically reduced or eliminated. The results are permanent and long-lasting. With proper sun protection and skincare, your rejuvenated skin will age naturally from this new baseline.",
      expectations: [
        "Collagen remodelling complete",
        "Maximum tightening achieved",
        "Permanent wrinkle reduction",
        "Renewed skin texture",
        "Natural youthful appearance",
        "Results last for years"
      ],
      careInstructions: "Maintain results with daily SPF 50, antioxidant serums, and good skincare hygiene. Annual skin checks recommended. The Cosmedocs team is always available for ongoing support and future treatments."
    }
  ];

  const complications = [
    {
      title: "Post-Inflammatory Hyperpigmentation",
      severity: "Common",
      description: "Temporary darkening of treated skin, more common in darker skin types. Usually resolves spontaneously within weeks to months. Sun avoidance is critical to prevent this complication.",
      management: "Strict sun avoidance, prescribed lightening agents if needed. Complete resolution expected."
    },
    {
      title: "Pseudo-Hypopigmentation",
      severity: "Common",
      description: "The new skin may appear slightly lighter than surrounding untreated skin. This is often due to increased light reflection from organised collagen rather than true pigment loss.",
      management: "Usually blends naturally over time. Full-face treatment minimises demarcation lines."
    },
    {
      title: "Prolonged Redness (Erythema)",
      severity: "Expected",
      description: "All patients experience redness post-treatment. This typically takes 8-12 weeks to fully settle. Extended redness beyond this timeframe occasionally occurs.",
      management: "Camouflage makeup from week 5 if tolerated. LED therapy may accelerate resolution."
    },
    {
      title: "Infection",
      severity: "Rare",
      description: "Bacterial, viral (HSV) or fungal infections can occur post-treatment. Risk is minimised by prophylactic antibiotics and antivirals prescribed by the Cosmedocs team.",
      management: "Prophylactic medications provided. Early identification through daily monitoring ensures prompt treatment if needed."
    },
    {
      title: "Scarring",
      severity: "Very Rare",
      description: "Hypertrophic or atrophic scarring is exceptionally rare with experienced practitioners. Usually results from uncontrolled infection or failure to follow aftercare instructions.",
      management: "Daily virtual ward monitoring by Cosmedocs team allows early intervention. Strict aftercare adherence is essential."
    },
    {
      title: "Contact Dermatitis",
      severity: "Occasional",
      description: "Increased skin sensitivity post-treatment may cause reactions to previously tolerated products. Presents as burning, itching, and increased redness.",
      management: "Return to Aquaphor/Vaseline only. Gradual reintroduction of products with guidance from the clinical team."
    },
    {
      title: "Ectropion (Eyelid Treatment Only)",
      severity: "Rare",
      description: "Over-tightening of eyelid skin may cause eversion of the lid margin. This is extremely rare with experienced practitioners and careful treatment planning.",
      management: "Thorough pre-treatment assessment. Conservative approach to eyelid treatment areas."
    },
    {
      title: "Demarcation Lines",
      severity: "Possible",
      description: "If only part of the face is treated, there may be a visible line between treated and untreated skin. This is more common with perioral (around mouth) only treatments.",
      management: "The Cosmedocs team typically recommends full-face treatment with variable intensity to achieve seamless blending."
    }
  ];

  const faqs = [
    {
      question: "What makes CO2 laser resurfacing the most powerful skin rejuvenation technique?",
      answer: "CO2 laser resurfacing is unmatched because it completely removes the damaged outer layers of skin (epidermis and superficial dermis) whilst simultaneously delivering controlled thermal injury to the deeper dermis. This triggers complete skin renewal from the ground up, new collagen synthesis, and significant tissue contraction. No other treatment achieves this level of comprehensive rejuvenation in a single procedure. The results are permanent because you are left with entirely new skin."
    },
    {
      question: "How does Cosmedocs ensure safe recovery?",
      answer: "At Cosmedocs, patient safety is paramount. Our unique virtual ward system means our skin aesthetician contacts you daily during the critical first two weeks of recovery. You send selfie photos to our clinical team who monitor your healing in real-time. This allows early identification and treatment of any concerns. You have direct access to our team throughout your recovery journey. Prophylactic antibiotics and antivirals are provided to minimise infection risk."
    },
    {
      question: "Who is a suitable candidate for CO2 laser resurfacing?",
      answer: "Ideal candidates are individuals with moderate to severe sun damage, deep wrinkles, skin laxity, precancerous lesions (actinic keratoses), or those seeking comprehensive facial rejuvenation. All skin types can be treated, though darker skin types require specific protocols to minimise hyperpigmentation risk. During your consultation, the Cosmedocs team will assess your suitability and discuss realistic expectations."
    },
    {
      question: "What is the recovery time?",
      answer: "The initial healing phase takes 10-14 days. During this time, you will need to remain at home and follow strict aftercare protocols. At two weeks, you are medically fit for work, though visible redness persists. Complete settling of redness takes 8-12 weeks. Full collagen remodelling and final results are seen at 6 months. Most patients take 2-3 weeks off work to allow for comfortable social recovery."
    },
    {
      question: "How painful is the procedure?",
      answer: "CO2 laser resurfacing at Cosmedocs is performed under comprehensive local anaesthesia. This includes topical anaesthetic cream applied for 45 minutes, plus additional nerve blocks and tumescent anaesthesia as needed. During treatment, patients typically experience a moderate prickly or burning sensation rated 4-5 out of 10. No patient has ever been unable to complete the procedure due to discomfort. Post-treatment, a sunburn-like sensation lasts 24-48 hours."
    },
    {
      question: "Are the results permanent?",
      answer: "Yes, the results of fully ablative CO2 laser resurfacing are permanent. The old, damaged skin is completely removed and replaced with new, healthy tissue. Wrinkles that are eliminated do not return. The new skin will age naturally from this renewed baseline, but you have essentially reset the clock. With proper sun protection and skincare, results last for many years before any maintenance treatment might be considered."
    },
    {
      question: "Can CO2 laser treat perioral lines (barcode lines/smoker's lines)?",
      answer: "Fully ablative CO2 laser is the definitive treatment for perioral lines (barcode lines or smoker's lines around the mouth). These deep vertical lip lines are notoriously difficult to treat. Dermal fillers provide minimal improvement. Only deep laser resurfacing can truly address this concern by completely removing the abnormal tissue and replacing it with smooth, new skin. Results are permanent and natural because the improvement is intrinsic."
    },
    {
      question: "How does CO2 laser reduce skin cancer risk?",
      answer: "Actinic keratoses are precancerous lesions caused by cumulative sun damage. These rough, scaly patches have the potential to develop into squamous cell carcinoma. Fully ablative CO2 laser completely removes the entire damaged epidermis, including all actinic keratoses. Studies show significant reduction in skin cancer development following treatment. This is a powerful preventative health benefit beyond the cosmetic improvements."
    },
    {
      question: "What is the difference between fully ablative and fractional CO2 laser?",
      answer: "Fractional CO2 laser treats only a percentage of the skin surface, leaving islands of untreated tissue for faster healing. This means less downtime but significantly less impressive results. Fully ablative CO2 laser treats 100% of the skin surface for maximum rejuvenation. The level of skin renewal, tightening, and wrinkle reduction achieved with fully ablative treatment simply cannot be matched by fractional technology. For true transformation, fully ablative is superior."
    },
    {
      question: "How much does CO2 laser resurfacing cost?",
      answer: "CO2 laser resurfacing costs vary depending on the treatment areas and extent of resurfacing required. Full-face treatments range from £3,000-£5,000. Perioral only or eyelid only treatments have lower costs. During your consultation, the Cosmedocs team will provide a detailed quotation based on your specific treatment plan. Given the permanent nature of results, many patients consider this excellent value compared to repeated temporary treatments."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "CO2 Laser Resurfacing",
    "alternateName": ["Fully Ablative Laser Resurfacing", "CO2 Laser Skin Rejuvenation"],
    "description": "CO2 laser resurfacing is the most powerful skin rejuvenation technique available for facial skin. It completely renews facial skin, tightens laxity, removes wrinkles, improves elasticity and skin thickness, removes precancerous cells, and reverses sun damage.",
    "procedureType": "NoninvasiveProcedure",
    "bodyLocation": "Face",
    "preparation": "Consultation with skincare assessment, prophylactic medications prescribed",
    "howPerformed": "Performed under local anaesthesia using surgical-grade CO2 laser to remove damaged skin layers and stimulate collagen production",
    "followup": "14 days of home recovery with daily monitoring by clinical team, full healing at 3 months, final results at 6 months",
    "status": "EventScheduled"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs",
    "url": "https://www.cosmedocs.co.uk",
    "telephone": "+44 20 7036 2076",
    "email": "info@cosmedocs.co.uk",
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "312"
    },
    "medicalSpecialty": "Dermatology",
    "availableService": {
      "@type": "MedicalProcedure",
      "name": "CO2 Laser Resurfacing",
      "description": "Fully ablative CO2 laser for complete facial skin rejuvenation"
    },
    "priceRange": "£££"
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "CO2 Laser Resurfacing Patient Experience",
    "description": "A candid patient testimonial about undergoing CO2 laser resurfacing treatment, covering the procedure, recovery and results.",
    "thumbnailUrl": "https://img.youtube.com/vi/JjHBG6es0UA/maxresdefault.jpg",
    "uploadDate": "2024-01-15",
    "duration": "PT10M",
    "contentUrl": "https://www.youtube.com/watch?v=JjHBG6es0UA",
    "embedUrl": "https://www.youtube.com/embed/JjHBG6es0UA"
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
        <meta property="og:image" content="https://www.cosmedocs.co.uk/images/co2-laser-resurfacing-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="keywords" content="CO2 laser resurfacing, fully ablative laser, skin rejuvenation London, laser skin resurfacing, wrinkle removal, skin tightening, sun damage treatment, precancerous lesions, actinic keratosis treatment, barcode lines treatment, perioral lines, laser surgeon London, Cosmedocs" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(videoSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="container mx-auto px-4">
            <Breadcrumb items={breadcrumbItems} />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center mt-8"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Advanced Laser Surgery
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                CO2 Laser Resurfacing London
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
                The Most Powerful Skin Rejuvenation Technique Available
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                <strong>CO2 laser resurfacing is by far the most powerful skin rejuvenation technique available for facial skin.</strong> At Cosmedocs, our experienced team delivers transformative results with comprehensive daily monitoring throughout your recovery journey.
              </p>

              {/* Quick Links */}
              <nav className="flex flex-wrap justify-center gap-3 mb-8" aria-label="Page navigation">
                <a href="#benefits" className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium">
                  Benefits
                </a>
                <a href="#procedure" className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium">
                  Procedure Details
                </a>
                <a href="#recovery" className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium">
                  Day-by-Day Recovery
                </a>
                <a href="#complications" className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium">
                  Potential Complications
                </a>
                <a href="#aftercare" className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium">
                  Aftercare
                </a>
                <a href="#video" className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium">
                  Patient Video
                </a>
                <a href="#faqs" className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium">
                  FAQs
                </a>
              </nav>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/contact">Book Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <a href="tel:+442070362076">
                    <Phone className="w-5 h-5 mr-2" />
                    020 7036 2076
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Objectives Section */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What CO2 Laser Resurfacing Achieves
              </h2>
              <p className="text-lg text-muted-foreground">
                Fully ablative CO2 laser is performed to achieve comprehensive facial rejuvenation that no other treatment can match. This is transformation that speaks — without saying a word.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {treatmentBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-border/50">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose Fully Ablative CO2 Laser?
                </h2>
              </motion.div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Not all CO2 laser treatments are equal. The term "CO2 laser" encompasses a wide range of devices and treatment intensities, from mild fractional treatments with minimal downtime to fully ablative surgical procedures that deliver transformative results. At Cosmedocs, we offer <strong>fully ablative CO2 laser resurfacing</strong> - the most powerful and effective form of laser skin rejuvenation available today.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">The Science Behind the Transformation</h3>
                <p>
                  Fully ablative CO2 laser works by directing a precise beam of infrared light at the skin surface. This energy is absorbed by water within the skin cells, causing instantaneous vaporisation of the tissue. The entire damaged epidermis (outer skin layer) and superficial dermis are removed in a controlled manner. Simultaneously, thermal energy penetrates deeper into the dermis, causing collagen fibres to contract and stimulating the production of new collagen.
                </p>
                <p>
                  The result is threefold: complete removal of sun-damaged, ageing skin; immediate skin tightening from collagen contraction; and progressive improvement over the following 6 months as new type III collagen forms. This comprehensive mechanism of action is why CO2 laser resurfacing delivers results that simply cannot be achieved by any other treatment.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Permanent Results</h3>
                <p>
                  Perhaps the greatest benefit of fully ablative CO2 laser resurfacing is the permanence of the results. Unlike treatments such as dermal fillers, Botox, or even fractional laser treatments that require repeated sessions, fully ablative resurfacing delivers lasting transformation. Once healing is complete, the skin you are left with is your new skin. Wrinkles that have been eliminated do not return. Sun damage that has been removed is gone permanently. The treated skin will continue to age naturally from this renewed baseline, but you have essentially reset the clock by years or even decades.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">The Cosmedocs Difference</h3>
                <p>
                  At Cosmedocs, our approach to CO2 laser resurfacing sets us apart. Our team includes experienced practitioners who have performed numerous ablative laser procedures. We use surgical-grade CO2 laser equipment capable of delivering the precise energy parameters required for safe, effective fully ablative treatment. Most importantly, we provide comprehensive patient support throughout the recovery process.
                </p>
                <p>
                  Our unique <strong>virtual ward monitoring system</strong> means you are never alone during recovery. Our dedicated skin aesthetician will contact you daily during the first two weeks - the critical healing period. You will send selfie photographs which our clinical team reviews to ensure healing is progressing normally. Any concerns are addressed immediately. This level of monitoring significantly reduces complication risk and provides peace of mind during what can be an intense recovery period.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Procedure Details Section */}
        <section id="procedure" className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Procedure Details
                </h2>
                <p className="text-lg text-muted-foreground">
                  Understanding what to expect on treatment day helps you prepare mentally and practically for your CO2 laser resurfacing experience.
                </p>
              </motion.div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Before Your Procedure</h3>
                <p>
                  Once the Cosmedocs team has assessed your suitability during a detailed consultation, you will be scheduled for treatment. Prior to your procedure date, you will receive a prescription for prophylactic medications including antiviral tablets (to prevent cold sore reactivation) and antibiotics (to minimise bacterial infection risk). These are essential components of safe laser surgery.
                </p>
                <p>
                  You will need to arrange for someone to accompany you home after the procedure - you will not be able to drive yourself. We recommend clearing your schedule for at least 14 days post-treatment to allow for optimal recovery.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Treatment Day</h3>
                <p>
                  On the day of your procedure, the Cosmedocs team will welcome you and take pre-treatment photographs to document your starting point. Your face will be cleansed thoroughly. A topical anaesthetic gel is then applied and left for approximately 45 minutes to ensure numbness of the skin surface.
                </p>
                <p>
                  Depending on the treatment areas, additional anaesthetic techniques may be employed. These can include nerve blocks (injections to numb specific facial nerves) and tumescent anaesthesia (dilute local anaesthetic injected under the skin). These techniques ensure that the procedure is as comfortable as possible.
                </p>
                <p>
                  If treatment around the eyes is included, anaesthetic eye drops will be administered and protective metal contact lens-style shields inserted. For facial-only treatment, adhesive eye shields are placed over the closed eyes.
                </p>
                <p>
                  The laser procedure itself typically takes 45-60 minutes depending on the treatment area. During treatment, the laser is methodically passed across the skin surface, vaporising the damaged outer layers. You will experience a prickly, burning sensation during this phase - most patients rate this as moderate discomfort (around 4-5 out of 10). No patient in our experience has been unable to tolerate the procedure.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Immediately After Treatment</h3>
                <p>
                  Following treatment completion, protective eyewear is removed and a barrier cream (Aquaphor or CU3 copper peptide cream) is applied to the treated skin. This occlusive barrier protects the raw, denuded skin from dehydration and infection.
                </p>
                <p>
                  Your face will feel very hot - similar to moderate sunburn. This burning sensation persists for up to 24-48 hours before gradually subsiding. Swelling will begin to develop and will peak over the following 24-48 hours.
                </p>
                <p>
                  The Cosmedocs team will provide detailed written aftercare instructions covering every aspect of your recovery. You will be given direct contact details for our clinical team and our skin aesthetician will contact you that evening to check on your wellbeing.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Treatment Areas</h3>
                <p>
                  <strong>Full-face treatment</strong> addresses all facial skin including forehead, cheeks, nose, chin, and perioral area. Most patients choosing full-face treatment also incorporate the eyelid area for comprehensive rejuvenation.
                </p>
                <p>
                  <strong>Eyelid treatment</strong> alone is an excellent option for those primarily concerned with eyelid skin laxity and crow's feet. This is the second most effective treatment for eyelid rejuvenation after surgical blepharoplasty, and actually surpasses surgery for improvement of fine lines and skin texture.
                </p>
                <p>
                  <strong>Perioral treatment</strong> targets the area around the mouth, specifically addressing barcode lines (smoker's lines or lip lines). These vertical lines above and below the lips are notoriously difficult to treat with other modalities. Fully ablative CO2 laser is the definitive solution. However, perioral-only treatment carries higher risk of demarcation lines, which is why we often recommend full-face treatment with variable intensity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Day by Day Recovery Section */}
        <section id="recovery" className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Complete Day-by-Day Recovery Guide
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Understanding exactly what to expect during recovery empowers you to navigate the healing process with confidence. Our Cosmedocs skin aesthetician will contact you daily to monitor progress and provide personalised guidance.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {dayByDayRecovery.map((day, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-primary/5 border-b border-border">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-primary">{day.day}</CardTitle>
                          <p className="text-lg font-semibold text-foreground">{day.title}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground mb-6">{day.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5 text-primary" />
                            What to Expect
                          </h4>
                          <ul className="space-y-2">
                            {day.expectations.map((expectation, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                <span>{expectation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-muted/50 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Heart className="w-5 h-5 text-primary" />
                            Care Instructions
                          </h4>
                          <p className="text-muted-foreground text-sm">{day.careInstructions}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Complications Section */}
        <section id="complications" className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Potential Complications
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Full transparency about potential complications is essential. In experienced hands and with strict aftercare adherence, complications are rare. The Cosmedocs team's daily monitoring significantly reduces risk.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {complications.map((complication, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-lg">{complication.title}</CardTitle>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          complication.severity === 'Expected' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                          complication.severity === 'Common' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' :
                          complication.severity === 'Occasional' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                          complication.severity === 'Rare' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                          'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
                        }`}>
                          {complication.severity}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{complication.description}</p>
                      <div className="bg-primary/5 rounded-lg p-3">
                        <p className="text-sm">
                          <strong className="text-foreground">Management:</strong>{' '}
                          <span className="text-muted-foreground">{complication.management}</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Aftercare Section */}
        <section id="aftercare" className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Comprehensive Aftercare Protocol
                </h2>
                <p className="text-lg text-muted-foreground">
                  Strict adherence to aftercare instructions is crucial for optimal results and complication prevention. The Cosmedocs team provides detailed guidance at every stage.
                </p>
              </motion.div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Stage 1: Days 1-28 (Critical Healing Phase)</h3>
                
                <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">Products Allowed</h4>
                <p>
                  <strong>Only two products</strong> should touch your skin during this phase: the prescribed Dermol facewash and Aquaphor (or plain Vaseline). These are the only products proven safe for newly ablated skin. Do not use any other creams, serums, oils, or balms regardless of marketing claims.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">Face Washing Protocol</h4>
                <p>
                  Wash your face exactly twice daily - once in the morning and once before bed. The first wash should be the morning after treatment. Face washing is performed in the shower under running lukewarm water (test temperature on the back of your hand first - it should feel comfortable, not hot).
                </p>
                <p>
                  Apply approximately a tablespoon of Dermol facewash and gently massage across the entire face. Leave on for 60-90 seconds - it will sting and this is normal. Rinse thoroughly with plenty of shower water. Do not use a flannel or sponge. Do not wash more than twice daily as this delays healing.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">Barrier Cream Application</h4>
                <p>
                  Immediately after washing and gentle drying (with disposable paper towel, not a regular towel), apply Aquaphor or Vaseline to all treated areas. Apply enough for complete coverage but thick layers are unnecessary. The greasy appearance is normal and desirable - it maintains the moist healing environment that promotes optimal skin regeneration.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">Strict Sun Avoidance</h4>
                <p>
                  <strong>Sun cream is NOT to be used during the first 4 weeks.</strong> This may seem counterintuitive, but sunscreen is formulated for intact skin with a normal epidermal barrier. Your skin lacks this barrier and sunscreen will cause contact irritant dermatitis, prolonging healing and increasing hyperpigmentation risk. Instead, practice complete sun avoidance - stay indoors during peak hours and wear a wide-brimmed hat if you must go outside.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">Products to Avoid</h4>
                <p>
                  The following must be strictly avoided for the first 3 months: Cicalfate, Bio-Oil, Sudocrem, Bepanthen, Biafine, silicone gels (Strataderm, Kelocote), healing balms, vitamin E oil, essential oils, and any active skincare ingredients. These products, while beneficial for minor wounds, can cause permanent scarring when applied to fully ablated skin.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Stage 2: Weeks 5-12 (Consolidation Phase)</h3>
                <p>
                  From week 5, you may cautiously introduce gentle products. A basic cleanser such as Cetaphil Gentle Cleanser or Avene Cleanance can replace the Dermol wash. You may trial sunscreen - La Roche-Posay Anthelios SPF 50 is generally well tolerated - but discontinue immediately if any irritation occurs.
                </p>
                <p>
                  Continue Aquaphor or Vaseline in the evenings. You may use a gentle moisturiser such as CeraVe Facial Moisturiser in the mornings if tolerated. Camouflage makeup (Lycogel) containing SPF can help manage persistent redness from week 5.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Stage 3: Week 12 Onwards (Maintenance Phase)</h3>
                <p>
                  By 12 weeks, most patients can return to their normal skincare routine. Active ingredients (vitamin C, niacinamide, glycolic acid) can be cautiously reintroduced. Daily SPF 50 is now essential and well tolerated. Before and after photography is performed to document your transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section id="video" className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Patient Experience: An Honest Account
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Watch this candid testimonial from a patient who underwent CO2 laser resurfacing. This authentic account covers the reality of the procedure, recovery process, and ultimate results. We believe in full transparency so you can make an informed decision.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/JjHBG6es0UA?si=TdFFFWNEhVxvIC4b" 
                  title="CO2 Laser Resurfacing Patient Testimonial - Real Experience" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="absolute inset-0"
                  loading="lazy"
                ></iframe>
              </div>
              <p className="text-center text-muted-foreground mt-4 text-sm">
                Note: This video shows a genuine patient experience and includes sensitive recovery footage. Viewer discretion advised.
              </p>
            </div>
          </div>
        </section>

        {/* Cosmedocs Team Approach */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  The Cosmedocs Virtual Ward Experience
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our unique approach to patient care sets Cosmedocs apart. You are never alone during your recovery journey.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>Daily Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our dedicated skin aesthetician contacts you every day during the first two weeks of recovery. This personal touch ensures you feel supported and any concerns are addressed immediately.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>Team Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Your daily selfie photographs are reviewed by our clinical team. This virtual ward round allows expert eyes to monitor your healing and catch any potential issues early before they become problematic.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>Direct Access</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      You receive direct contact details for the Cosmedocs team. If concerns arise between scheduled check-ins, you have immediate access to clinical support. Peace of mind is just a message away.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faqs" className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="bg-card border border-border rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your Skin with CO2 Laser Resurfacing
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Book your consultation with the Cosmedocs team to discover if fully ablative CO2 laser resurfacing is right for you. Bold • Natural • Always Your Way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                  <Link to="/contact">Book Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <a href="tel:+442070362076">
                    <Phone className="w-5 h-5 mr-2" />
                    020 7036 2076
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <a href="mailto:info@cosmedocs.co.uk">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>CO2 Laser Resurfacing London - Comprehensive Treatment Guide</h2>
          <p>
            CO2 laser resurfacing represents the pinnacle of skin rejuvenation technology available in modern aesthetic medicine. At Cosmedocs, our team of experienced practitioners offers fully ablative CO2 laser treatment that delivers transformative results unmatched by any other procedure. This comprehensive treatment guide provides everything you need to know about undergoing CO2 laser resurfacing in London.
          </p>
          <p>
            The science behind fully ablative CO2 laser resurfacing involves the precise delivery of infrared light energy at 10,600 nanometres wavelength. This specific wavelength is absorbed by water molecules within skin cells, causing instantaneous vaporisation of tissue. The controlled removal of the entire epidermis and superficial dermis triggers a comprehensive healing response that results in complete skin renewal.
          </p>
          <p>
            Unlike fractional CO2 laser treatments that only address a percentage of the skin surface, fully ablative resurfacing treats one hundred percent of the treatment area. This results in maximum improvement in skin texture, wrinkles, laxity, and pigmentation. The trade-off is a more intensive recovery period, but for patients seeking the best possible results, fully ablative treatment is the gold standard.
          </p>
          <p>
            CO2 laser resurfacing is particularly effective for treating perioral lines, also known as barcode lines, smoker's lines, or lip lines. These vertical lines around the mouth are among the most challenging aesthetic concerns to address. Dermal fillers provide minimal improvement and often look unnatural. Fractional laser treatments offer only modest benefit. Fully ablative CO2 laser is the definitive treatment, completely eliminating these lines by replacing the abnormal tissue with fresh, smooth skin.
          </p>
          <p>
            The removal of precancerous lesions represents an important but often overlooked benefit of CO2 laser resurfacing. Actinic keratoses are rough, scaly patches caused by cumulative sun damage. These lesions have the potential to progress to squamous cell carcinoma, a form of skin cancer. Fully ablative treatment removes all such lesions from the treated area, significantly reducing future skin cancer risk. This makes CO2 laser resurfacing not just a cosmetic procedure but a genuine investment in long-term skin health.
          </p>
          <p>
            The Cosmedocs approach to CO2 laser resurfacing prioritises patient safety and optimal outcomes. Our unique virtual ward monitoring system ensures that every patient receives daily contact from our dedicated skin aesthetician during the critical two-week recovery period. Patients send selfie photographs which our clinical team reviews to monitor healing progress and identify any concerns early. This level of support significantly reduces complication risk and provides peace of mind during what can be an intense recovery experience.
          </p>
          <p>
            Recovery from fully ablative CO2 laser resurfacing follows a predictable pattern. Days one to three involve peak swelling and the onset of serous fluid weeping. Days four to seven see crusting develop and then begin to shed. By day ten to fourteen, surface healing is largely complete, though redness persists. Complete resolution of redness takes eight to twelve weeks, and collagen remodelling continues for up to six months, at which point final results are visible.
          </p>
          <p>
            The results of fully ablative CO2 laser resurfacing are permanent. This distinguishes the treatment from temporary interventions such as dermal fillers, Botox, or even fractional laser treatments that require repeated sessions. Once healing is complete, the renewed skin is your skin for life. Natural ageing will continue from this improved baseline, but the dramatic improvements in texture, wrinkles, and laxity are lasting.
          </p>
          <p>
            Cosmedocs offers CO2 laser resurfacing at our London clinic, providing patients access to world-class laser treatment with comprehensive aftercare support. Our team philosophy of invisible art guides everything we do - the goal is transformation that speaks without saying a word. Bold, natural results that are always your way.
          </p>
        </div>
      </main>
    </>
  );
}
