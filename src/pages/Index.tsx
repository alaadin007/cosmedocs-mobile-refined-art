import { useState, lazy, Suspense, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { TooltipProvider } from "@/components/ui/tooltip";
import AnimatedDots from "@/components/AnimatedDots";
import { generateSEOMetadata } from '@/utils/seo';
import aiAssessmentIcon from "@/assets/icons/ai-assessment-icon.png";
import smartAestheticsIcon from "@/assets/icons/smart-aesthetics-icon.png";
import aiDoctorChatIcon from "@/assets/icons/ai-doctor-chat-icon.png";

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
      </Helmet>

      <TooltipProvider>
        <div className="bg-background text-foreground">
          <header>
            <h1 className="sr-only">Cosmedocs - Premium Aesthetic Medicine Treatments | Botox, Dermal Fillers in London Harley Street</h1>
          </header>
          
          {/* Hero Section - No framer-motion, CSS animations only */}
          <section className="relative h-screen flex items-center" aria-labelledby="hero-heading">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
            <AnimatedDots />
            <div className="page-container relative z-10">
              <div className="max-w-5xl mx-auto text-center">
                <div className="animate-fade-in">
                  <div className="relative mb-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold" id="hero-heading">
                      cosmedocs
                    </h2>
                  </div>
                </div>
                
                <p className="text-lg md:text-xl italic mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  Our aesthetics is invisible art
                </p>
                
                <div className="mb-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <p className="text-muted-foreground mb-4">art • science • a touch of magic</p>
                  <p className="text-muted-foreground/70 text-sm leading-relaxed">
                    All done with the finest needles imported,<br />
                    because every detail matters.
                  </p>
                  <p className="text-muted-foreground/70 text-sm mt-6 leading-relaxed">
                    At CosmeDocs, aesthetics is more than treatment — it's a philosophy.<br />
                    Quiet, not loud. Subtle, not exaggerated.<br />
                    Transformations that whisper rather than shout.
                  </p>
                </div>
                
                {/* AI Quick Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  <a href="https://ai.cosmedocs.com" target="_blank" rel="noopener noreferrer" className="group bg-secondary hover:bg-accent border border-border hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 text-center">
                    <img src={aiAssessmentIcon} alt="AI Assessment" className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                    <h3 className="text-lg font-semibold mb-2">Free AI Assessment</h3>
                    <p className="text-sm text-muted-foreground">Face • Hair • Skin Lesions</p>
                  </a>
                  
                  <a href="/aesthetic-treatments-made-easy" className="group bg-secondary hover:bg-accent border border-border hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 text-center">
                    <img src={smartAestheticsIcon} alt="Smart Aesthetics" className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                    <h3 className="text-lg font-semibold mb-2">Smart Aesthetics</h3>
                    <p className="text-sm text-muted-foreground">Stop Wasting Money</p>
                  </a>
                  
                  <button 
                    onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                    className="group bg-secondary hover:bg-accent border border-border hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 text-center w-full"
                  >
                    <img src={aiDoctorChatIcon} alt="AI Doctor Chat" className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                    <h3 className="text-lg font-semibold mb-2">
                      Chat With Our <span className="text-primary">AI</span>esthetics Doctor
                    </h3>
                    <p className="text-sm text-muted-foreground">Ask anything about treatments</p>
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


          {/* CTA Section */}
          <section className="py-20 bg-[#111]" aria-labelledby="cta-heading">
            <div className="page-container">
              <div className="bg-accent rounded-2xl p-8 md:p-12 text-center">
                <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold mb-4">Ready to discover your refined aesthetic?</h2>
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
              Cosmedocs is London's premier aesthetic medicine clinic located on prestigious Harley Street, offering advanced cosmetic treatments since 2007. Our expert practitioners specialize in Botox injections, dermal fillers, lip enhancement, non-surgical nose jobs, skin boosters, and comprehensive facial rejuvenation treatments. With over 1 million injections performed, we are recognized leaders in aesthetic medicine, providing natural-looking results through our invisible art philosophy. Our clinic offers consultation services, advanced anti-aging treatments, facial contouring, and personalized aesthetic solutions. We pride ourselves on subtle enhancement that speaks without saying a word, ensuring every client receives transformative results tailored to their individual needs. Our comprehensive approach addresses skin quality, wrinkle reduction, volume restoration, and facial harmonization using the latest techniques and premium products. Located at 10 Harley Street, London W1G 9PF, we serve clients seeking the highest standard of aesthetic medicine in the heart of London's medical district. Contact us at 0333 0551 503 or info@cosmedocs.com to begin your aesthetic journey with London's most trusted cosmetic medicine specialists.
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