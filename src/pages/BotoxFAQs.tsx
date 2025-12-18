import React from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateSEOMetadata } from '@/utils/seo';
import { Phone, Calendar, MessageCircle, HelpCircle, Syringe, Clock, Shield, Star, ChevronRight, CheckCircle } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';

export default function BotoxFAQs() {
  const seoData = generateSEOMetadata(
    "Botox FAQs | Your Complete Guide to Botox Questions Answered",
    "Get answers to all your Botox FAQs. Expert guidance on safety, results, costs, aftercare and more from Harley Street specialists. 50+ questions answered.",
    "/botox-faqs"
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Botox?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Botox is the brand name for a purified form of botulinum toxin type A. In cosmetic medicine, it is used in very small, controlled doses to temporarily relax specific facial muscles. This helps soften fine lines and wrinkles caused by repeated facial expressions."
        }
      },
      {
        "@type": "Question",
        "name": "How does Botox work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Botox works by blocking nerve signals to targeted muscles, preventing them from contracting fully. When the muscle relaxes, the overlying skin smooths out, reducing expression lines such as forehead creases, frown lines, and crow's feet."
        }
      },
      {
        "@type": "Question",
        "name": "Is Botox safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, when administered by a qualified medical professional. Botox has over 20 years of clinical use and a strong safety profile. It's one of the most studied aesthetic treatments worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Botox cost in London?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Cosmedocs Harley Street, Botox treatment starts from £175 per area. Three areas (forehead, frown lines, and crow's feet) are available for £350."
        }
      },
      {
        "@type": "Question",
        "name": "How long does Botox last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Results typically last 3-4 months, though this varies by individual and treatment area. Most patients repeat Botox every 3-4 months to maintain results."
        }
      },
      {
        "@type": "Question",
        "name": "Does Botox hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients describe Botox injections as a mild pinch or sting. Discomfort is minimal and short-lived. Numbing cream or ice can be used if needed."
        }
      },
      {
        "@type": "Question",
        "name": "What areas can Botox treat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common cosmetic treatment areas include forehead lines, frown lines, crow's feet, brow lift, bunny lines, lip flip and smoker's lines, chin dimpling, jawline and masseter muscles, and neck bands."
        }
      },
      {
        "@type": "Question",
        "name": "Is Botox the same as dermal fillers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Botox relaxes muscles to reduce wrinkles caused by movement, while dermal fillers add volume to areas that have lost fullness, such as the cheeks or lips. They are often used together as part of a comprehensive facial rejuvenation plan."
        }
      },
      {
        "@type": "Question",
        "name": "Who can legally provide Botox in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Botox is prescription-only in the UK, meaning it must be prescribed by a qualified medical professional. For safety, it should also be administered by an experienced medical injector with appropriate training."
        }
      },
      {
        "@type": "Question",
        "name": "Will Botox make my face look frozen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. When done correctly by a skilled practitioner, Botox looks natural and preserves facial expression. The 'frozen' look is usually due to over-treatment."
        }
      }
    ]
  };

  const medicalClinicSchema = {
    "@context": "https://schema.org",
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
    },
    "priceRange": "££",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "287"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.cosmedocs.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Botox London",
        "item": "https://www.cosmedocs.co.uk/botox-london"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Botox FAQs",
        "item": "https://www.cosmedocs.co.uk/botox-faqs"
      }
    ]
  };

  // FAQ Categories with questions
  const faqCategories = [
    {
      title: "Botox Basics",
      icon: HelpCircle,
      faqs: [
        {
          question: "What is Botox?",
          answer: "Botox is the brand name for a purified form of botulinum toxin type A. In cosmetic medicine, it is used in very small, controlled doses to temporarily relax specific facial muscles. This helps soften fine lines and wrinkles caused by repeated facial expressions. When administered by a qualified medical professional, Botox is safe, well-researched, and widely used worldwide."
        },
        {
          question: "How does Botox work?",
          answer: "Botox works by blocking nerve signals to targeted muscles, preventing them from contracting fully. When the muscle relaxes, the overlying skin smooths out, reducing expression lines such as forehead creases, frown lines, and crow's feet. Botox remains localised to the treated area and does not affect the rest of the body."
        },
        {
          question: "What types of wrinkles can Botox treat?",
          answer: "Botox is most effective for dynamic wrinkles — lines caused by muscle movement, such as frown lines, forehead lines, and crow's feet. It is less effective for deep static wrinkles or sagging skin, which may require dermal fillers or skin resurfacing treatments."
        },
        {
          question: "Is Botox the same as dermal fillers?",
          answer: "No. Botox relaxes muscles to reduce wrinkles caused by movement, while dermal fillers add volume to areas that have lost fullness, such as the cheeks or lips. They work through entirely different mechanisms and are often used together as part of a comprehensive facial rejuvenation plan."
        },
        {
          question: "What is the difference between Botox, Dysport, and other brands?",
          answer: "Botox, Dysport, Azzalure, Bocouture, and Xeomin are all brand names for botulinum toxin type A. While they work similarly, they differ slightly in formulation, diffusion properties, and onset time. Botox is the most well-known brand with the longest track record. Your practitioner can advise which product best suits your needs."
        },
        {
          question: "Who is a good candidate for Botox?",
          answer: "Ideal candidates are adults aged 18-65 with dynamic wrinkles (lines that appear with facial movement), realistic expectations, and no contraindications. Botox works best for those looking to prevent or soften expression lines. It's not suitable for pregnant or breastfeeding women, those with neuromuscular disorders, or individuals with infections at injection sites."
        },
        {
          question: "At what age should I start getting Botox?",
          answer: "There's no universal 'right age' to start Botox. Many patients begin in their late 20s to early 30s as a preventative measure, while others start when they notice static lines forming. The best approach is to consult with a qualified practitioner who can assess your individual needs and goals."
        },
        {
          question: "Is Botox only for older people?",
          answer: "No. Botox is used both to treat existing wrinkles and prevent new ones from forming, making it suitable for adults of various ages. Many younger patients use 'preventative Botox' to stop deep lines from developing in the first place."
        },
        {
          question: "Can men get Botox?",
          answer: "Absolutely. 'Brotox' has become increasingly popular, with men seeking natural-looking results to reduce frown lines, forehead creases, and crow's feet. Male faces often require slightly higher doses due to stronger muscle mass, and technique is adjusted to maintain masculine features."
        }
      ]
    },
    {
      title: "Cosmetic Uses of Botox",
      icon: Syringe,
      faqs: [
        {
          question: "What areas can Botox treat?",
          answer: "Common cosmetic treatment areas include: forehead lines, frown lines (between the eyebrows), crow's feet, brow lift, bunny lines on the nose, lip flip and smoker's lines, chin dimpling, jawline and masseter muscles, and neck bands (Nefertiti lift)."
        },
        {
          question: "What are the '3 areas' commonly treated?",
          answer: "The three most popular areas are the forehead (horizontal lines), the glabella (frown lines between the brows), and crow's feet (lines around the outer eyes). These areas are often treated together for a harmonious, refreshed appearance and are frequently offered as a package deal."
        },
        {
          question: "Are there advanced or lesser-known uses of Botox?",
          answer: "Yes. Advanced techniques include brow lifting, gummy smile correction, jaw slimming (masseter), trapezius slimming for shoulder contouring, calf contouring, and micro-Botox for oil control and pore refinement. These are off-label uses and should only be performed by experienced injectors."
        },
        {
          question: "Can Botox lift my eyebrows?",
          answer: "Yes, a Botox brow lift is achieved by strategically relaxing the muscles that pull the brow down, allowing the muscles that lift the brow to work more effectively. This creates a subtle lift and opens up the eye area. Results are natural-looking and complement upper face treatment."
        },
        {
          question: "Can Botox slim my face or jawline?",
          answer: "Yes, masseter Botox is highly effective for jaw slimming. By relaxing the masseter muscles (the chewing muscles at the jaw angle), the face takes on a softer, more V-shaped contour. This treatment is also beneficial for teeth grinding (bruxism) and jaw tension."
        },
        {
          question: "Can Botox help with a gummy smile?",
          answer: "Yes, small doses of Botox injected into the muscles that elevate the upper lip can reduce the amount of gum shown when smiling. This creates a more balanced smile without affecting your ability to smile naturally."
        },
        {
          question: "Can Botox be used on the neck?",
          answer: "Yes, the Nefertiti Lift uses Botox to define the jawline and reduce neck bands (platysmal bands). It creates a more youthful neck-jaw contour by relaxing the platysma muscle that pulls the lower face downward."
        }
      ]
    },
    {
      title: "Medical Uses of Botox",
      icon: Shield,
      faqs: [
        {
          question: "Is Botox used for medical conditions?",
          answer: "Yes. Botox has long been used medically to treat conditions such as chronic migraines, excessive sweating (hyperhidrosis), muscle spasms and dystonia, TMJ and jaw clenching, certain pain conditions, and overactive bladder. These treatments are prescribed and administered by medical specialists."
        },
        {
          question: "Can Botox treat chronic migraines?",
          answer: "Yes, Botox is NICE-approved for chronic migraines (15+ headache days per month). It's injected into specific points around the head and neck every 12 weeks. Many patients experience significant reduction in migraine frequency and severity."
        },
        {
          question: "Can Botox stop excessive sweating?",
          answer: "Yes, Botox is highly effective for hyperhidrosis (excessive sweating). It blocks the nerve signals that trigger sweat glands, providing relief for 6-12 months per treatment. Common areas include underarms, palms, and feet."
        },
        {
          question: "Can Botox help with teeth grinding or jaw pain?",
          answer: "Yes, masseter Botox relaxes the jaw muscles, reducing grinding (bruxism) and associated jaw pain, headaches, and tooth wear. It also helps with TMJ dysfunction and tension in the jaw area."
        },
        {
          question: "Can I get medical Botox on the NHS?",
          answer: "Botox is available on the NHS for certain medical conditions including chronic migraines, severe hyperhidrosis, blepharospasm (eyelid spasms), and some forms of muscle spasticity. Cosmetic Botox is not covered by the NHS."
        }
      ]
    },
    {
      title: "The Treatment Experience",
      icon: Clock,
      faqs: [
        {
          question: "What happens during a Botox appointment?",
          answer: "A Botox appointment typically takes 20–30 minutes. After consultation and facial assessment, small amounts of Botox are injected using a fine needle. The procedure is quick, requires no anaesthesia for most patients, and you can resume normal activities immediately afterward."
        },
        {
          question: "Does Botox hurt?",
          answer: "Most patients describe Botox injections as a mild pinch or sting. Discomfort is minimal and short-lived. Numbing cream or ice can be used if needed. The needles are extremely fine, similar to acupuncture needles."
        },
        {
          question: "Is there downtime after Botox?",
          answer: "No significant downtime is required. Mild redness or small bumps may appear briefly but usually resolve within hours. Most people return to work or social activities the same day."
        },
        {
          question: "How many injections will I need?",
          answer: "The number of injections depends on the treatment areas and your anatomy. For example, treating the forehead typically involves 4-8 injection points, frown lines require 5-7 points, and crow's feet need 2-4 points per side. Your practitioner will determine the optimal placement during your assessment."
        },
        {
          question: "Can I drive after Botox?",
          answer: "Yes, you can drive immediately after your treatment. Botox doesn't affect your vision, reflexes, or cognitive function. Most people return to normal activities straight away."
        },
        {
          question: "Can I wear makeup after Botox?",
          answer: "It's advisable to wait at least 4 hours before applying makeup to allow the injection sites to close and reduce infection risk. When you do apply makeup, use clean brushes and avoid heavy pressure on treated areas."
        }
      ]
    },
    {
      title: "Aftercare & Results",
      icon: Star,
      faqs: [
        {
          question: "What should I avoid after Botox?",
          answer: "Key aftercare instructions: Do not rub or massage treated areas for 4 hours. Stay upright for 4 hours. Avoid strenuous exercise for 24 hours. Avoid alcohol on the day of treatment. Avoid hot environments (saunas, hot baths) for 24-48 hours."
        },
        {
          question: "When will I see results from Botox?",
          answer: "Initial effects appear within 2–3 days, with full results visible at 7–14 days. Some patients notice changes as early as 24-48 hours. The gradual onset allows for natural-looking results."
        },
        {
          question: "How long does Botox last?",
          answer: "Results typically last 3–4 months, though this varies by individual and treatment area. First-time patients may notice results wearing off sooner (2-3 months), while regular patients often experience longer-lasting effects."
        },
        {
          question: "How often should Botox be repeated?",
          answer: "Most patients repeat Botox every 3–4 months to maintain results. Over time, some may extend intervals between treatments as muscles become trained to relax."
        },
        {
          question: "Why does Botox last longer for some people?",
          answer: "Longevity depends on individual factors including metabolism, muscle strength and activity, lifestyle (exercise, stress), the amount of product used, the area treated, and whether you're a new or regular patient."
        },
        {
          question: "What happens when Botox wears off?",
          answer: "As Botox gradually wears off, muscle movement slowly returns to normal, and wrinkles reappear. Your face returns to its pre-treatment state; it does not worsen or look older than before."
        },
        {
          question: "What if I don't like my results?",
          answer: "Botox is temporary, so any results you're unhappy with will naturally fade within 3-4 months. In some cases, adjustments can be made at a follow-up appointment (usually 2 weeks post-treatment) by adding small amounts to specific areas."
        }
      ]
    },
    {
      title: "Safety & Side Effects",
      icon: Shield,
      faqs: [
        {
          question: "Is Botox safe?",
          answer: "Yes, when administered by a qualified medical professional. Botox has over 20 years of clinical use and a strong safety profile. It's one of the most studied aesthetic treatments worldwide."
        },
        {
          question: "What are the possible side effects?",
          answer: "Common side effects are mild and temporary and may include minor bruising, redness or swelling, and headache or tightness. Rare side effects include eyelid drooping or asymmetry, which are temporary."
        },
        {
          question: "Who should not get Botox?",
          answer: "Botox is not recommended for: pregnant or breastfeeding individuals, those with certain neuromuscular disorders (such as myasthenia gravis), active skin infections at the injection site, or those with known allergies to botulinum toxin products."
        },
        {
          question: "Can Botox cause long-term damage?",
          answer: "When administered correctly by qualified practitioners, Botox does not cause long-term damage. The effects are temporary and fully reversible. There's no cumulative toxicity with repeated treatments."
        },
        {
          question: "Can Botox migrate to other parts of the body?",
          answer: "When injected correctly, Botox stays localised to the treatment area. Following aftercare instructions (avoiding rubbing the area, staying upright) helps ensure the product remains in the intended location."
        },
        {
          question: "Can Botox interact with other medications?",
          answer: "Yes, certain medications can interact with Botox, particularly aminoglycoside antibiotics, muscle relaxants, and some other medications. Always provide a complete medication list during consultation."
        }
      ]
    },
    {
      title: "Choosing a Botox Provider",
      icon: CheckCircle,
      faqs: [
        {
          question: "Who can legally provide Botox in the UK?",
          answer: "Botox is prescription-only in the UK, meaning it must be prescribed by a qualified medical professional (doctor, dentist, nurse prescriber, or pharmacist prescriber). For safety, it should also be administered by an experienced medical injector with appropriate training and insurance."
        },
        {
          question: "How do I choose a reputable clinic?",
          answer: "Look for: medical qualifications and registration (GMC, NMC, GDC), a clinical setting with proper hygiene standards, transparent pricing with no hidden costs, thorough consultation process, clear aftercare and follow-up support, and genuine Botox products from licensed suppliers."
        },
        {
          question: "What questions should I ask my injector?",
          answer: "Ask about their qualifications and training, how many Botox treatments they perform, which brand of product they use, what results you can realistically expect, potential risks and how they manage complications, and their aftercare policy."
        },
        {
          question: "Why should I avoid very cheap Botox?",
          answer: "Extremely cheap Botox should be approached with caution. It may indicate diluted products, non-authentic or grey market Botox, inexperienced practitioners, or inadequate clinical settings. Quality treatment from qualified professionals is an investment in your safety."
        }
      ]
    },
    {
      title: "Botox Pricing",
      icon: CheckCircle,
      faqs: [
        {
          question: "How much does Botox cost in London?",
          answer: "At Cosmedocs Harley Street, Botox treatment starts from £175 per area. Three areas (forehead, frown lines, and crow's feet) are available for £350. Prices vary depending on areas treated, dosage, and clinic expertise."
        },
        {
          question: "Is Botox worth it?",
          answer: "Patient satisfaction rates are high. When performed correctly, Botox offers reliable, temporary wrinkle reduction with minimal downtime and a strong safety record. Consider the cost per day – a £350 treatment lasting 4 months works out to under £3 per day."
        },
        {
          question: "How can I make Botox last longer?",
          answer: "To maximise results: follow aftercare instructions carefully, protect skin from sun damage, maintain good skincare habits, stay hydrated, manage stress, avoid smoking, and consider regular maintenance treatments before full muscle movement returns."
        },
        {
          question: "Are there any payment plans available?",
          answer: "Many clinics offer payment plans or finance options for cosmetic treatments. Ask about available options during your consultation. At Cosmedocs, we can discuss flexible payment arrangements."
        }
      ]
    },
    {
      title: "Botox Myths",
      icon: HelpCircle,
      faqs: [
        {
          question: "Will Botox make my face look frozen?",
          answer: "No. When done correctly by a skilled practitioner, Botox looks natural and preserves facial expression. The 'frozen' look is usually due to over-treatment and is easily avoided with proper technique and appropriate dosing."
        },
        {
          question: "Will my wrinkles get worse if I stop Botox?",
          answer: "No. Wrinkles gradually return to their original state once Botox wears off. Botox does not worsen ageing – in fact, regular treatments may help slow wrinkle progression by preventing repetitive muscle movement."
        },
        {
          question: "Is Botox a poison?",
          answer: "While botulinum toxin is derived from a bacterium, the purified, medical-grade Botox used in cosmetic treatments is entirely safe when administered correctly. The doses used are tiny fractions of what would cause any harm."
        },
        {
          question: "Is Botox addictive?",
          answer: "Botox is not physically addictive. There's no chemical dependency. Some people enjoy their results and choose to continue treatment, but this is a personal choice, not an addiction. You can stop at any time."
        },
        {
          question: "Can you become immune to Botox?",
          answer: "True resistance to Botox is rare but can occur in a small percentage of patients who develop antibodies. Using the minimum effective dose and not over-treating can help prevent this. If resistance develops, alternative products may still be effective."
        },
        {
          question: "Does Botox make you look older when it wears off?",
          answer: "No. When Botox wears off, you return to how you looked before treatment. There's no 'ageing acceleration'. By preventing deep static lines, regular Botox may actually help you age more gracefully."
        }
      ]
    },
    {
      title: "Special Circumstances",
      icon: HelpCircle,
      faqs: [
        {
          question: "Can I get Botox while pregnant or breastfeeding?",
          answer: "No. Botox is not recommended during pregnancy or breastfeeding as a precautionary measure. There's insufficient research to confirm safety during these periods. Wait until you've finished breastfeeding before resuming treatment."
        },
        {
          question: "Can I get Botox if I'm on blood thinners?",
          answer: "You should inform your practitioner of all medications, including blood thinners. While Botox can often still be administered, there's an increased risk of bruising. Your practitioner may advise temporary cessation (with your doctor's approval) or take extra precautions."
        },
        {
          question: "Can I get Botox if I have a cold or infection?",
          answer: "It's best to postpone treatment if you're unwell. Your immune system is already working hard, and if you have an infection near the intended injection sites, treatment should definitely be delayed."
        },
        {
          question: "Is Botox suitable for all skin types and tones?",
          answer: "Yes, Botox is equally effective and safe for all skin tones. Unlike some treatments, Botox doesn't affect skin pigmentation. It works on the underlying muscles regardless of skin colour, making it suitable for patients of all ethnicities."
        },
        {
          question: "Can I get Botox if I've had it elsewhere before?",
          answer: "Yes, you can switch practitioners. Inform your new practitioner about your treatment history, including when you last had Botox, the areas treated, and any issues experienced. This helps them tailor your treatment appropriately."
        }
      ]
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
        <meta property="og:image" content={seoData.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="keywords" content="Botox FAQs, botox questions, botox side effects, how long does botox last, is botox safe, botox cost london, botox aftercare, anti-wrinkle injections FAQ" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(medicalClinicSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-background overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <Breadcrumb 
              items={[
                { label: "Home", href: "/" },
                { label: "Botox London", href: "/botox-london" },
                { label: "Botox FAQs" }
              ]} 
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto mt-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-900/30 text-amber-300 rounded-full text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4" />
                Expert Guidance
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Botox FAQs: Your Complete Guide to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  Anti-Wrinkle Injections
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Everything you need to know about Botox treatment, answered by our Harley Street specialists. 
                Over 50 commonly asked questions about safety, results, costs, and aftercare.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg"
                >
                  <Link to="/botox-london">
                    <Syringe className="w-5 h-5 mr-2" />
                    View Botox Treatments
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline"
                  className="border-amber-700 text-foreground hover:bg-amber-900/20"
                >
                  <Link to="/contact">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 bg-muted/30 border-y border-border sticky top-0 z-40 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {faqCategories.map((category, index) => (
                <a
                  key={index}
                  href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card hover:bg-amber-900/30 rounded-full text-sm font-medium transition-colors text-foreground"
                >
                  <category.icon className="w-4 h-4 text-amber-500" />
                  {category.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  id={category.title.toLowerCase().replace(/\s+/g, '-')}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="mb-16 scroll-mt-32"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-12 rounded-full bg-gradient-to-b from-purple-500 to-purple-700" />
                      <div className="p-3 bg-gradient-to-br from-purple-900/30 via-amber-900/30 to-amber-800/20 rounded-xl">
                        <category.icon className="w-6 h-6 text-amber-400" />
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {category.title}
                    </h2>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="bg-card border border-border rounded-xl px-6 hover:border-amber-700/50 transition-all"
                      >
                        <AccordionTrigger className="text-left font-semibold text-foreground hover:text-amber-400 py-5 [&>svg]:text-amber-500">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Have Questions About Botox?
              </h2>
              <p className="text-lg text-amber-100 mb-8 max-w-2xl mx-auto">
                Our expert team at Harley Street is here to answer any additional questions 
                and help you make an informed decision about your treatment.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-amber-700 hover:bg-amber-50"
                >
                  <Link to="/contact">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Free Consultation
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <a href="tel:+442037333227">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 020 3733 3227
                  </a>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <a href="https://wa.me/447788366400" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 md:py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Explore Botox Treatments
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Botox London", href: "/botox-london", description: "Our main Botox treatment page" },
                  { title: "Forehead Lines", href: "/forehead-lines-botox", description: "Smooth horizontal forehead creases" },
                  { title: "Frown Lines", href: "/frown-line-botox", description: "Reduce the '11 lines' between brows" },
                  { title: "Crow's Feet", href: "/crows-feet-botox", description: "Soften lines around the eyes" },
                  { title: "Masseter Botox", href: "/masseter-botox", description: "Jaw slimming & teeth grinding" },
                  { title: "Botox Cost", href: "/botox-cost-london", description: "Pricing & package deals" },
                ].map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="group p-4 bg-card border border-border rounded-xl hover:border-amber-700 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-amber-400 transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {link.description}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <p>
            Comprehensive Botox FAQs covering all aspects of botulinum toxin treatment in London. 
            This guide answers the most commonly asked questions about Botox injections, including 
            how Botox works by blocking acetylcholine release at the neuromuscular junction, temporarily 
            paralysing targeted muscles to reduce the appearance of dynamic wrinkles and expression lines.
          </p>
          <p>
            Cosmedocs Harley Street provides expert Botox treatment from £175 per area, with three-area 
            packages available for £350. Our medical professionals have extensive experience in facial 
            aesthetics, ensuring natural-looking results that preserve facial expression whilst effectively 
            reducing wrinkles on the forehead, around the eyes, and between the brows.
          </p>
          <p>
            Safety information about Botox confirms it is FDA-approved with over 30 years of clinical use 
            in both cosmetic and therapeutic applications. Common side effects are mild and temporary, 
            including minor bruising, redness, and slight swelling at injection sites. Rare complications 
            such as eyelid ptosis can be minimised by choosing experienced practitioners who understand 
            facial anatomy and proper injection technique.
          </p>
          <p>
            Treatment longevity typically ranges from 3-4 months, with factors including individual metabolism, 
            muscle strength, treatment area, and whether the patient has had previous Botox treatments affecting 
            duration. Regular maintenance treatments may help extend results and prevent the formation of deep 
            static lines that occur from repeated muscle movement over time.
          </p>
          <p>
            Aftercare recommendations include avoiding lying down for 4 hours post-treatment, refraining from 
            touching or massaging treated areas, avoiding strenuous exercise for 24 hours, and staying away from 
            excessive heat including saunas and hot baths. These precautions help ensure the Botox remains in 
            the intended location and produces optimal results.
          </p>
        </div>
      </main>
    </>
  );
}
