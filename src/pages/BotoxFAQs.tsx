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
        "name": "What is Botox and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Botox (botulinum toxin type A) is a purified protein that temporarily relaxes targeted facial muscles by blocking nerve signals. When injected into specific muscles, it prevents them from contracting, which smooths out dynamic wrinkles caused by repetitive facial expressions. The effects typically last 3-4 months."
        }
      },
      {
        "@type": "Question",
        "name": "Is Botox safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Botox is FDA-approved and has been used safely for over 30 years in both cosmetic and medical applications. When administered by a qualified medical professional, it has an excellent safety profile. Side effects are typically mild and temporary, such as minor bruising or swelling at injection sites."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Botox cost in London?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Cosmedocs Harley Street, Botox treatment starts from £175 per area. Three areas (forehead, frown lines, and crow's feet) are available for £350. Prices vary depending on the treatment area and amount of product required."
        }
      },
      {
        "@type": "Question",
        "name": "How long does Botox last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Botox results typically last 3-4 months, though this can vary between individuals. Factors affecting longevity include metabolism, muscle strength, lifestyle, and the area treated. Regular treatments may help extend the duration of results over time."
        }
      },
      {
        "@type": "Question",
        "name": "Does Botox hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients describe Botox injections as a mild pinch or mosquito bite sensation. The needles used are very fine, and the procedure is quick. Topical numbing cream can be applied beforehand for those who are needle-sensitive."
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
      title: "General Botox Questions",
      icon: HelpCircle,
      faqs: [
        {
          question: "What is Botox and how does it work?",
          answer: "Botox (botulinum toxin type A) is a purified protein that temporarily relaxes targeted facial muscles by blocking nerve signals. When injected into specific muscles, it prevents them from contracting, which smooths out dynamic wrinkles caused by repetitive facial expressions like frowning, squinting, or raising eyebrows. The effects typically last 3-4 months."
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
          question: "Can men get Botox?",
          answer: "Absolutely. 'Brotox' has become increasingly popular, with men seeking natural-looking results to reduce frown lines, forehead creases, and crow's feet. Male faces often require slightly higher doses due to stronger muscle mass, and technique is adjusted to maintain masculine features."
        }
      ]
    },
    {
      title: "Safety & Side Effects",
      icon: Shield,
      faqs: [
        {
          question: "Is Botox safe?",
          answer: "Yes, Botox is FDA-approved and has been used safely for over 30 years in both cosmetic and medical applications. It's one of the most studied aesthetic treatments worldwide. When administered by a qualified medical professional using proper technique and dosing, it has an excellent safety profile."
        },
        {
          question: "What are the common side effects of Botox?",
          answer: "Common side effects are typically mild and temporary, including slight redness, swelling, or bruising at injection sites, minor headache, and temporary tenderness. These usually resolve within a few days. Rare side effects include eyelid drooping (ptosis) or asymmetry, which are temporary and can be minimised by choosing an experienced practitioner."
        },
        {
          question: "Can Botox cause long-term damage?",
          answer: "When administered correctly by qualified practitioners, Botox does not cause long-term damage. The effects are temporary and fully reversible. In fact, regular use may actually help prevent the formation of deeper static wrinkles over time. There's no cumulative toxicity with repeated treatments."
        },
        {
          question: "What happens if I'm allergic to Botox?",
          answer: "True allergies to Botox are extremely rare. If you have a known allergy to any botulinum toxin product or its ingredients (including human albumin), you should not receive treatment. During your consultation, disclose all allergies so your practitioner can assess suitability."
        },
        {
          question: "Can Botox migrate to other parts of the body?",
          answer: "When injected correctly, Botox stays localised to the treatment area. It works within a small radius of where it's injected. Following aftercare instructions (avoiding rubbing the area, staying upright) helps ensure the product remains in the intended location."
        },
        {
          question: "Is Botox linked to cancer?",
          answer: "No. There is no scientific evidence linking Botox to cancer. Botulinum toxin has been extensively studied for decades, and no association with cancer has been found. It does not affect DNA or cell division."
        }
      ]
    },
    {
      title: "Treatment Areas",
      icon: Syringe,
      faqs: [
        {
          question: "What areas can be treated with Botox?",
          answer: "Common treatment areas include forehead lines (horizontal creases), frown lines (glabellar lines between eyebrows), crow's feet (lines around eyes), bunny lines (nose wrinkles), lip lines (smoker's lines), chin dimpling, masseter (jaw slimming), neck bands, and gummy smile. Advanced applications include brow lift, lip flip, and treating excessive sweating."
        },
        {
          question: "What are the '3 areas' commonly treated?",
          answer: "The three most popular areas are the forehead (horizontal lines), the glabella (frown lines between the brows), and crow's feet (lines around the outer eyes). These areas are often treated together for a harmonious, refreshed appearance and are frequently offered as a package deal."
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
      title: "The Treatment Process",
      icon: Clock,
      faqs: [
        {
          question: "What happens during a Botox consultation?",
          answer: "Your consultation includes a full facial assessment, discussion of your concerns and goals, medical history review, explanation of the treatment process, realistic expectation setting, and a personalised treatment plan. This is your opportunity to ask questions and ensure you feel comfortable proceeding."
        },
        {
          question: "How long does a Botox treatment take?",
          answer: "A typical Botox session takes 15-30 minutes, often called a 'lunchtime procedure'. The actual injections take only a few minutes; the rest of the time is spent on preparation, marking injection points, and post-treatment guidance."
        },
        {
          question: "Does Botox hurt?",
          answer: "Most patients describe Botox injections as a mild pinch or mosquito bite sensation. The needles used are extremely fine (similar to acupuncture needles), and discomfort is minimal. Topical numbing cream can be applied beforehand for those who are particularly needle-sensitive."
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
      title: "Results & Longevity",
      icon: Star,
      faqs: [
        {
          question: "When will I see results from Botox?",
          answer: "Initial effects typically appear within 2-3 days, with full results visible at 10-14 days. Some patients notice changes as early as 24-48 hours. The gradual onset allows for natural-looking results that don't appear sudden or obvious."
        },
        {
          question: "How long does Botox last?",
          answer: "Botox results typically last 3-4 months, though this varies between individuals. First-time patients may notice results wearing off sooner (2-3 months), while regular patients often experience longer-lasting effects (up to 4-6 months) as muscles become trained to relax."
        },
        {
          question: "Why does Botox last longer for some people?",
          answer: "Longevity depends on individual factors including metabolism, muscle strength and activity, lifestyle (exercise, stress), the amount of product used, the area treated, and whether you're a new or regular patient. Those who exercise intensely or have faster metabolisms may metabolise Botox more quickly."
        },
        {
          question: "What happens when Botox wears off?",
          answer: "As Botox gradually wears off, muscle movement slowly returns to normal, and wrinkles reappear. Your face returns to its pre-treatment state; it does not worsen or look older than before. Regular maintenance treatments can prevent deep lines from forming."
        },
        {
          question: "Will I look frozen or expressionless?",
          answer: "Not when treated by a skilled practitioner using appropriate doses. Modern Botox technique aims for natural-looking results that preserve facial expression while softening wrinkles. The 'frozen' look comes from over-treatment and is easily avoided with proper technique."
        },
        {
          question: "Can I still move my face after Botox?",
          answer: "Yes. Quality Botox treatment softens movement rather than eliminating it entirely. You'll still be able to smile, frown, and show expression – the lines simply won't be as pronounced. This is the hallmark of expert treatment."
        },
        {
          question: "What if I don't like my results?",
          answer: "Botox is temporary, so any results you're unhappy with will naturally fade within 3-4 months. In some cases, adjustments can be made at a follow-up appointment (usually 2 weeks post-treatment) by adding small amounts to specific areas. This is why we recommend a review appointment."
        }
      ]
    },
    {
      title: "Costs & Considerations",
      icon: CheckCircle,
      faqs: [
        {
          question: "How much does Botox cost in London?",
          answer: "At Cosmedocs Harley Street, Botox treatment starts from £175 per area. Three areas (forehead, frown lines, and crow's feet) are available for £350. Prices vary depending on the treatment area, amount of product required, and practitioner expertise. Beware of extremely cheap offers, which may indicate inferior products or inexperienced providers."
        },
        {
          question: "Is Botox worth the money?",
          answer: "For many patients, the confidence boost and preventative benefits make Botox excellent value. Consider the cost per day (a £350 treatment lasting 4 months works out to under £3 per day) and the fact that maintenance treatments may reduce the need for more invasive procedures later."
        },
        {
          question: "How can I make Botox last longer?",
          answer: "To maximise your results: follow aftercare instructions carefully, protect skin from sun damage, maintain good skincare habits, stay hydrated, manage stress, avoid smoking, and consider using zinc supplements (some studies suggest this may extend efficacy). Regular maintenance treatments before full muscle movement returns may also help."
        },
        {
          question: "Can I get Botox on the NHS?",
          answer: "Botox is available on the NHS for certain medical conditions including chronic migraines, severe hyperhidrosis (excessive sweating), blepharospasm (eyelid spasms), and some forms of muscle spasticity. Cosmetic Botox is not covered by the NHS."
        },
        {
          question: "Should I choose based on price alone?",
          answer: "No. The cheapest option is rarely the best for medical aesthetic treatments. Consider the practitioner's qualifications, experience, the quality of products used, clinic hygiene standards, and aftercare provided. A more experienced practitioner may actually use less product more effectively, providing better value."
        }
      ]
    },
    {
      title: "Before & After Care",
      icon: Calendar,
      faqs: [
        {
          question: "How should I prepare for Botox treatment?",
          answer: "In the days before treatment: avoid blood-thinning medications if possible (aspirin, ibuprofen, fish oil), limit alcohol consumption, stay hydrated, and come with a clean face. Inform your practitioner of all medications and supplements you take. Arnica supplements may help reduce bruising if started a few days before."
        },
        {
          question: "What should I avoid after Botox?",
          answer: "For 4-6 hours after treatment: avoid lying down or bending forward, touching or massaging treated areas, strenuous exercise, alcohol, and hot environments (saunas, hot baths). For 24-48 hours: continue to avoid intense exercise and excessive heat. These precautions help ensure optimal results."
        },
        {
          question: "Can I exercise after Botox?",
          answer: "Wait at least 24 hours before vigorous exercise. Physical activity increases blood flow and body temperature, which could potentially cause the Botox to migrate or increase bruising. Light walking is fine immediately after treatment."
        },
        {
          question: "Can I drink alcohol after Botox?",
          answer: "It's best to avoid alcohol for 24 hours before and after treatment. Alcohol thins the blood, increasing the risk of bruising, and can cause dehydration and inflammation, potentially affecting results."
        },
        {
          question: "Can I fly after Botox?",
          answer: "Yes, flying after Botox is generally safe. However, some practitioners recommend waiting 24-48 hours due to cabin pressure changes and the difficulty of following aftercare instructions during travel. Plan treatments accordingly if you have upcoming flights."
        },
        {
          question: "When should I book my next appointment?",
          answer: "Most patients return for maintenance treatment every 3-4 months. We recommend booking your follow-up before full muscle movement returns to maintain consistent results. Many patients find that with regular treatment, they can gradually extend the time between appointments."
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
          answer: "You should inform your practitioner of all medications, including blood thinners. While Botox can often still be administered, there's an increased risk of bruising. Your practitioner may advise temporary cessation (with your doctor's approval) or take extra precautions during treatment."
        },
        {
          question: "Can I get Botox if I have a cold or infection?",
          answer: "It's best to postpone treatment if you're unwell. Your immune system is already working hard to fight infection, and introducing Botox may not be ideal. Additionally, if you have an infection near the intended injection sites, treatment should definitely be delayed."
        },
        {
          question: "Can Botox interact with other medications?",
          answer: "Yes, certain medications can interact with Botox, particularly aminoglycoside antibiotics, muscle relaxants, and some other medications. Always provide a complete medication list during consultation so your practitioner can assess safety."
        },
        {
          question: "Is Botox suitable for darker skin tones?",
          answer: "Yes, Botox is equally effective and safe for all skin tones. Unlike some treatments, Botox doesn't affect skin pigmentation. It works on the underlying muscles regardless of skin colour, making it an excellent option for patients of all ethnicities."
        },
        {
          question: "Can I get Botox if I've had it elsewhere before?",
          answer: "Yes, you can switch practitioners. Inform your new practitioner about your treatment history, including when you last had Botox, the areas treated, and any issues experienced. This helps them tailor your treatment appropriately."
        }
      ]
    },
    {
      title: "Myths & Misconceptions",
      icon: HelpCircle,
      faqs: [
        {
          question: "Is Botox a poison?",
          answer: "While botulinum toxin is derived from a bacterium, the purified, medical-grade Botox used in cosmetic treatments is entirely safe when administered correctly. The doses used are tiny fractions of what would cause any harm. It's been used safely in medicine for over 30 years."
        },
        {
          question: "Will Botox make my wrinkles worse if I stop?",
          answer: "No. If you stop Botox, your face will gradually return to its pre-treatment state as the product wears off. Your wrinkles won't become worse than they would have been without treatment. In fact, regular Botox may slow wrinkle progression by preventing repetitive muscle movement."
        },
        {
          question: "Is Botox addictive?",
          answer: "Botox is not physically addictive. There's no chemical dependency. Some people enjoy their results and choose to continue treatment, but this is a personal choice, not an addiction. You can stop treatment at any time without withdrawal effects."
        },
        {
          question: "Does Botox make you look older when it wears off?",
          answer: "No. When Botox wears off, you return to how you looked before treatment. There's no 'ageing acceleration'. In fact, by preventing the formation of deep static lines, regular Botox may help you age more gracefully."
        },
        {
          question: "Can you become immune to Botox?",
          answer: "True resistance to Botox is rare but can occur in a small percentage of patients who develop antibodies to the protein. Using the minimum effective dose and not over-treating can help prevent this. If resistance develops, alternative products like Dysport may still be effective."
        },
        {
          question: "Is Baby Botox better than regular Botox?",
          answer: "'Baby Botox' refers to using smaller doses for a more subtle effect, not a different product. It's ideal for those wanting to maintain natural movement or for first-time patients. Whether it's 'better' depends on your goals – some patients prefer more significant relaxation."
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
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-amber-50 via-background to-amber-50/30 dark:from-background dark:via-background dark:to-amber-900/10 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200/20 dark:bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-100/30 dark:bg-amber-600/5 rounded-full blur-3xl" />
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
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4" />
                Expert Guidance
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Botox FAQs: Your Complete Guide to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600">
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
                  className="border-amber-300 dark:border-amber-700 hover:bg-amber-50 dark:hover:bg-amber-900/20"
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
        <section className="py-8 bg-white dark:bg-muted/30 border-y border-border sticky top-0 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {faqCategories.map((category, index) => (
                <a
                  key={index}
                  href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-amber-100 dark:hover:bg-amber-900/30 rounded-full text-sm font-medium transition-colors"
                >
                  <category.icon className="w-4 h-4 text-amber-600" />
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
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/20 rounded-xl">
                      <category.icon className="w-6 h-6 text-amber-700 dark:text-amber-400" />
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
                        className="bg-white dark:bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <AccordionTrigger className="text-left font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-700 dark:hover:text-zinc-300 py-5 [&>svg]:text-amber-600">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-zinc-600 dark:text-zinc-400 pb-5 leading-relaxed">
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
        <section className="py-16 md:py-20 bg-muted/30">
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
                    className="group p-4 bg-white dark:bg-card border border-border rounded-xl hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {link.description}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
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
