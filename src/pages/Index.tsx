import { useState, lazy, Suspense, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { TooltipProvider } from "@/components/ui/tooltip";
import AnimatedDots from "@/components/AnimatedDots";
import DiscretionBadge from "@/components/DiscretionBadge";
import { generateSEOMetadata } from '@/utils/seo';
import aiAssessmentIcon from "@/assets/icons/ai-assessment-icon.webp";
import smartAestheticsIcon from "@/assets/icons/smart-aesthetics-icon.webp";
import aiDoctorChatIcon from "@/assets/icons/ai-doctor-chat-icon.webp";
import smartAestheticsHero from "@/assets/smart-aesthetics-hero.jpg";

// Lazy load heavy components
const PopularTreatments = lazy(() => import("@/components/PopularTreatments"));
const BeforeAfterCarousel = lazy(() => import("@/components/BeforeAfterCarousel"));
const AestheticAnalysisWizard = lazy(() => import("@/components/AestheticAnalysisWizard"));
const RaffleChatbot = lazy(() => import("@/components/RaffleChatbot"));
const WebsiteKnowledgeInitializer = lazy(() => import("@/components/WebsiteKnowledgeInitializer"));


// Memoized section placeholder
const SectionPlaceholder = memo(() => (
  <div className="py-16 bg-background">
    <div className="h-64 skeleton rounded-xl mx-auto max-w-6xl" />
  </div>
));

const Index = () => {
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const seoData = generateSEOMetadata("Cosmedocs London | Aesthetic Medicine | Harley Street", "Harley Street aesthetic clinic by Dr. Ahmed Haq. Botox, fillers & skin treatments. Invisible art • Bold • Natural.", "/");
  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";

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
        <meta name="keywords" content="Cosmedocs, Harley Street clinic, Doctor-led aesthetic clinic, cosmedics harley street, Cosmetic treatments London, Anti-ageing treatments London, Non-surgical aesthetic clinic, Aesthetic medicine experts" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://cosmedocs.com/#organization",
            "name": "Cosmedocs",
            "url": "https://cosmedocs.com",
            "logo": "https://cosmedocs.com/logo.png",
            "description": "Doctor-led aesthetic clinic on Harley Street offering cosmetic treatments, anti-ageing solutions and non-surgical procedures.",
            "telephone": "+44 333 0551 503",
            "email": "info@cosmedocs.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "8-10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+44 333 0551 503",
              "contactType": "customer service",
              "availableLanguage": ["English"]
            },
            "sameAs": [
              "https://www.instagram.com/cosmedocs",
              "https://www.facebook.com/cosmedocs"
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "@id": "https://cosmedocs.com/#clinic",
            "name": "Cosmedocs - Harley Street Clinic",
            "image": "https://cosmedocs.com/images/clinic-exterior.jpg",
            "url": "https://cosmedocs.com",
            "telephone": "+44 333 0551 503",
            "priceRange": "££",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "8-10 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5177,
              "longitude": -0.1461
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "16:00"
              }
            ],
            
            "availableService": [
              {
                "@type": "MedicalProcedure",
                "name": "Botox Injections",
                "procedureType": "NoninvasiveProcedure"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Dermal Fillers",
                "procedureType": "NoninvasiveProcedure"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Anti-ageing Treatments",
                "procedureType": "NoninvasiveProcedure"
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What treatments does Cosmedocs offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cosmedocs offers a wide range of non-surgical aesthetic treatments including Botox injections, dermal fillers, lip fillers, anti-wrinkle treatments, skin rejuvenation, and advanced anti-ageing procedures. All treatments are performed by qualified medical professionals."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Cosmedocs located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cosmedocs is located at 8-10 Harley Street, London W1G 9PF. Our Harley Street clinic is easily accessible and offers a premium, private setting for all aesthetic consultations and treatments."
                }
              },
              {
                "@type": "Question",
                "name": "How do I book a consultation at Cosmedocs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can book a consultation by calling us on 0333 0551 503, emailing info@cosmedocs.com, or using our online booking system. We offer both in-person consultations at our Harley Street clinic and virtual consultations."
                }
              },
              {
                "@type": "Question",
                "name": "Are Cosmedocs practitioners qualified doctors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Cosmedocs is a doctor-led aesthetic clinic. All our practitioners are qualified medical professionals with extensive training in aesthetic medicine. Dr. Ahmed Haq leads our team with over 17 years of experience."
                }
              },
              {
                "@type": "Question",
                "name": "What is the Cosmedocs approach to aesthetics?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our philosophy is 'invisible art' — we believe in subtle, natural-looking results that enhance your features without looking overdone. We focus on bold, natural transformations that are always tailored to your individual goals."
                }
              }
            ]
          })}
        </script>
        <html lang="en-GB" />
      </Helmet>

      <TooltipProvider>
        <div className="bg-background text-foreground">
          <header>
            <h1 className="sr-only">Cosmedocs - Premium Aesthetic Medicine Treatments | Botox, Dermal Fillers in London Harley Street</h1>
          </header>
          
          {/* Hero Section - No framer-motion, CSS animations only */}
          <section className="relative min-h-[80vh] md:min-h-screen flex items-center pt-20 md:pt-28 pb-8 md:pb-0" aria-labelledby="hero-heading">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-muted/30 via-black/90 to-black"></div>
            <AnimatedDots />
            <div className="page-container relative z-10">
              <div className="max-w-5xl mx-auto text-center">
                <div>
                  <div className="relative mb-3 md:mb-6">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold" id="hero-heading">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-amber-400 to-amber-600">cosmedocs</span>
                    </h2>
                  </div>
                </div>

                {/* Smart Aesthetics Hero Visual */}
                <div className="mb-4 md:mb-8 max-w-xs md:max-w-2xl mx-auto">
                  <img
                    src={smartAestheticsHero}
                    alt="Smart Aesthetics — clinical facial mapping by Cosmedocs Harley Street doctors"
                    className="w-full h-auto rounded-xl md:rounded-2xl border border-[#C9A050]/20 shadow-[0_20px_60px_-20px_rgba(201,160,80,0.35)]"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width={1200}
                    height={800}
                  />
                </div>
                
                <p className="text-base md:text-xl italic mb-3 md:mb-6">
                  Our aesthetics is invisible art
                </p>
                
                <div className="mb-5 md:mb-8 max-w-xl mx-auto">
                  <p className="text-muted-foreground mb-3 md:mb-4 text-sm md:text-base">art • science • a touch of magic</p>
                  <div className="flex justify-center mb-3 md:mb-4">
                    <DiscretionBadge />
                  </div>
                  <p className="hidden md:block text-muted-foreground/70 text-sm leading-relaxed">
                    All done with the finest needles imported,<br />
                    because every detail matters.
                  </p>
                  <p className="hidden md:block text-muted-foreground/70 text-sm mt-6 leading-relaxed">
                   At CosmeDocs, aesthetics is more than treatment — it's a philosophy.<br />
                    Quiet, not loud. Subtle, not exaggerated.<br />
                    Transformations that whisper rather than shout.
                  </p>
                  <a href="https://www.instagram.com/cosmedocs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs md:text-sm text-[#C9A050] hover:text-[#B8924A] mt-3 md:mt-4 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    Get to know us better →
                  </a>
                </div>
                
                {/* AI Quick Links Grid — compact 3-in-a-row on mobile, full cards on desktop */}
                <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-4xl mx-auto">
                  <a
                    href="https://ai.cosmedocs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-secondary hover:bg-purple-muted/30 border border-border hover:border-purple/50 rounded-xl md:rounded-2xl p-2 md:p-6 transition-all duration-300 text-center flex flex-col items-center"
                  >
                    <img src={aiAssessmentIcon} alt="AI Assessment" className="w-8 h-8 md:w-16 md:h-16 mb-1 md:mb-4 group-hover:scale-110 transition-transform duration-300" loading="lazy" width={64} height={64} />
                    <h3 className="text-[10px] md:text-lg font-semibold leading-tight md:mb-2">AI Assessment</h3>
                    <p className="hidden md:block text-sm text-muted-foreground">Face • Hair • Skin Lesions</p>
                  </a>

                  <a
                    href="/aesthetic-treatments-made-easy"
                    className="group bg-secondary hover:bg-purple-muted/30 border border-border hover:border-purple/50 rounded-xl md:rounded-2xl p-2 md:p-6 transition-all duration-300 text-center flex flex-col items-center"
                  >
                    <img src={smartAestheticsIcon} alt="Smart Aesthetics" className="w-8 h-8 md:w-16 md:h-16 mb-1 md:mb-4 group-hover:scale-110 transition-transform duration-300" loading="lazy" width={64} height={64} />
                    <h3 className="text-[10px] md:text-lg font-semibold leading-tight md:mb-2">Smart Aesthetics</h3>
                    <p className="hidden md:block text-sm text-muted-foreground">Avoid aesthetic mistakes</p>
                  </a>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                    className="group bg-secondary hover:bg-purple-muted/30 border border-border hover:border-purple/50 rounded-xl md:rounded-2xl p-2 md:p-6 transition-all duration-300 text-center w-full flex flex-col items-center"
                  >
                    <img src={aiDoctorChatIcon} alt="AI Doctor Chat" className="w-8 h-8 md:w-16 md:h-16 mb-1 md:mb-4 group-hover:scale-110 transition-transform duration-300" loading="lazy" width={64} height={64} />
                    <h3 className="text-[10px] md:text-lg font-semibold leading-tight md:mb-2">
                      <span className="md:hidden">AI Doctor</span>
                      <span className="hidden md:inline">Chat With Our <span className="text-purple">AI</span>esthetics Doctor</span>
                    </h3>
                    <p className="hidden md:block text-sm text-muted-foreground">Ask anything about treatments</p>
                  </button>
                </div>
              </div>
            </div>
          </section>
                  <img
                    src={smartAestheticsHero}
                    alt="Smart Aesthetics — clinical facial mapping by Cosmedocs Harley Street doctors"
                    className="w-full h-auto rounded-2xl border border-[#C9A050]/20 shadow-[0_20px_60px_-20px_rgba(201,160,80,0.35)]"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width={1200}
                    height={800}
                  />
                </div>
                
                <p className="text-lg md:text-xl italic mb-6">
                  Our aesthetics is invisible art
                </p>
                
                <div className="mb-8 max-w-xl mx-auto">
                  <p className="text-muted-foreground mb-4">art • science • a touch of magic</p>
                  <div className="flex justify-center mb-4">
                    <DiscretionBadge />
                  </div>
                  <p className="text-muted-foreground/70 text-sm leading-relaxed">
                    All done with the finest needles imported,<br />
                    because every detail matters.
                  </p>
                  <p className="text-muted-foreground/70 text-sm mt-6 leading-relaxed">
                   At CosmeDocs, aesthetics is more than treatment — it's a philosophy.<br />
                    Quiet, not loud. Subtle, not exaggerated.<br />
                    Transformations that whisper rather than shout.
                  </p>
                  <a href="https://www.instagram.com/cosmedocs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#C9A050] hover:text-[#B8924A] mt-4 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    Get to know us better →
                  </a>
                </div>
                
                {/* AI Quick Links Grid — compact 3-in-a-row on mobile, full cards on desktop */}
                <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto">
                  <a
                    href="https://ai.cosmedocs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-secondary hover:bg-purple-muted/30 border border-border hover:border-purple/50 rounded-2xl p-3 md:p-6 transition-all duration-300 text-center flex flex-col items-center"
                  >
                    <img src={aiAssessmentIcon} alt="AI Assessment" className="w-10 h-10 md:w-16 md:h-16 mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300" loading="lazy" width={64} height={64} />
                    <h3 className="text-[11px] md:text-lg font-semibold leading-tight md:mb-2">Free AI Assessment</h3>
                    <p className="hidden md:block text-sm text-muted-foreground">Face • Hair • Skin Lesions</p>
                  </a>

                  <a
                    href="/aesthetic-treatments-made-easy"
                    className="group bg-secondary hover:bg-purple-muted/30 border border-border hover:border-purple/50 rounded-2xl p-3 md:p-6 transition-all duration-300 text-center flex flex-col items-center"
                  >
                    <img src={smartAestheticsIcon} alt="Smart Aesthetics" className="w-10 h-10 md:w-16 md:h-16 mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300" loading="lazy" width={64} height={64} />
                    <h3 className="text-[11px] md:text-lg font-semibold leading-tight md:mb-2">Smart Aesthetics</h3>
                    <p className="hidden md:block text-sm text-muted-foreground">Avoid aesthetic mistakes</p>
                  </a>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                    className="group bg-secondary hover:bg-purple-muted/30 border border-border hover:border-purple/50 rounded-2xl p-3 md:p-6 transition-all duration-300 text-center w-full flex flex-col items-center"
                  >
                    <img src={aiDoctorChatIcon} alt="AI Doctor Chat" className="w-10 h-10 md:w-16 md:h-16 mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300" loading="lazy" width={64} height={64} />
                    <h3 className="text-[11px] md:text-lg font-semibold leading-tight md:mb-2">
                      <span className="md:hidden">AI Doctor Chat</span>
                      <span className="hidden md:inline">Chat With Our <span className="text-purple">AI</span>esthetics Doctor</span>
                    </h3>
                    <p className="hidden md:block text-sm text-muted-foreground">Ask anything about treatments</p>
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Lazy loaded sections */}
          <Suspense fallback={<SectionPlaceholder />}>
            <PopularTreatments />
          </Suspense>

          <Suspense fallback={<SectionPlaceholder />}>
            <BeforeAfterCarousel />
          </Suspense>

          {/* FAQ Section */}
          <section className="py-20 bg-background" aria-labelledby="faq-heading">
            <div className="page-container">
              <div className="max-w-4xl mx-auto">
                <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-amber-400 to-amber-600">Frequently Asked Questions</span>
                </h2>
                <div className="space-y-6">
                  <details className="group bg-secondary rounded-xl p-6 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg list-none">
                      What treatments does Cosmedocs offer?
                      <span className="ml-4 text-primary group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      Cosmedocs offers a wide range of non-surgical aesthetic treatments including Botox injections, dermal fillers, lip fillers, anti-wrinkle treatments, skin rejuvenation, and advanced anti-ageing procedures. All treatments are performed by qualified medical professionals.
                    </p>
                  </details>
                  
                  <details className="group bg-secondary rounded-xl p-6 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg list-none">
                      Where is Cosmedocs located?
                      <span className="ml-4 text-primary group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      Cosmedocs is located at 8-10 Harley Street, London W1G 9PF. Our Harley Street clinic is easily accessible and offers a premium, private setting for all aesthetic consultations and treatments.
                    </p>
                  </details>
                  
                  <details className="group bg-secondary rounded-xl p-6 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg list-none">
                      How do I book a consultation at Cosmedocs?
                      <span className="ml-4 text-primary group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      You can book a consultation by calling us on 0333 0551 503, emailing info@cosmedocs.com, or using our online booking system. We offer both in-person consultations at our Harley Street clinic and virtual consultations.
                    </p>
                  </details>
                  
                  <details className="group bg-secondary rounded-xl p-6 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg list-none">
                      Are Cosmedocs practitioners qualified doctors?
                      <span className="ml-4 text-primary group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      Yes, Cosmedocs is a doctor-led aesthetic clinic. All our practitioners are qualified medical professionals with extensive training in aesthetic medicine. Dr. Ahmed Haq leads our team with over 17 years of experience.
                    </p>
                  </details>
                  
                  <details className="group bg-secondary rounded-xl p-6 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg list-none">
                      What is the Cosmedocs approach to aesthetics?
                      <span className="ml-4 text-primary group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      Our philosophy is 'invisible art' — we believe in subtle, natural-looking results that enhance your features without looking overdone. We focus on bold, natural transformations that are always tailored to your individual goals.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-[#111]" aria-labelledby="cta-heading">
            <div className="page-container">
              <div className="bg-accent rounded-2xl p-8 md:p-12 text-center">
                <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-amber-400 to-amber-600">Ready to discover your refined aesthetic?</span></h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Book a consultation with our expert practitioners and begin your journey toward subtle, controlled transformation.
                </p>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 inline-flex items-center justify-center text-sm font-medium transition-colors">
                  Book Now
                </a>
              </div>
            </div>
          </section>

          {/* Hidden SEO content for search engines */}
          <div className="sr-only">
            <p>
              Cosmedocs is a doctor-led aesthetic clinic located on prestigious Harley Street, London. As aesthetic medicine experts, we specialise in cosmetic treatments London clients trust for natural, refined results. Our non-surgical aesthetic clinic offers comprehensive anti-ageing treatments London patients seek, including Botox, dermal fillers, and advanced skin rejuvenation. Since 2007, our Harley Street clinic has performed over 1 million injections, establishing Cosmedocs as leaders in cosmetic medicine. We believe in invisible art — subtle enhancement that speaks without saying a word. Every treatment is tailored to achieve bold, natural results that are always your way. Located at 8-10 Harley Street, London W1G 9PF, contact us at 0333 0551 503 or info@cosmedocs.com.
            </p>
          </div>
        </div>

        {/* Lazy loaded modals */}
        <Suspense fallback={null}>
          <AestheticAnalysisWizard isOpen={isAnalysisOpen} onClose={() => setIsAnalysisOpen(false)} />
        </Suspense>

        <Suspense fallback={null}>
          <RaffleChatbot />
        </Suspense>
        
        <Suspense fallback={null}>
          <WebsiteKnowledgeInitializer />
        </Suspense>
      </TooltipProvider>
    </>
  );
};

export default Index;