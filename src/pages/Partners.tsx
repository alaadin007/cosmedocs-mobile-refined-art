import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Instagram, ExternalLink, Mail } from "lucide-react";
import AISearchBar from "@/components/AISearchBar";

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

const HeroSection = () => (
  <section className="pt-28 pb-16 px-4 md:px-8 text-center relative bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/a972bf35-cab4-4f83-b655-228b98f0ba9f.png')`
  }}>
    <motion.div className="max-w-5xl mx-auto relative z-10" initial="hidden" animate="visible" variants={fadeIn} transition={{
      duration: 0.5
    }}>
      <div className="mb-6">
        <span className="text-amber-400 text-sm font-medium tracking-wide uppercase">Revolutionary Franchise Model</span>
      </div>
      
      {/* CosmeDoc Motto */}
      <div className="mb-8 p-6 bg-black/60 rounded-lg border border-amber-500/30">
        <h2 className="text-2xl md:text-3xl font-light mb-4 text-amber-300">CosmeDoc</h2>
        <p className="text-lg md:text-xl italic mb-4 text-white">*Our aesthetics is invisible art</p>
        <div className="text-gray-200">
          <p className="mb-2">Aesthetic medicine by Cosmedocs is minimal.</p>
          <p className="mb-2">Quiet, not loud.</p>
          <p className="mb-2">Invisible, not exaggerated.</p>
          <p className="text-amber-300 font-medium">It's transformation that speaks — without saying a word.</p>
        </div>
      </div>

      {/* Harley Street Institute Partnership Badge */}
      <div className="mb-8 p-6 bg-blue-600/10 rounded-lg border border-blue-500/30 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-blue-200 font-medium mb-2">Sister Company of</p>
            <img 
              src="/lovable-uploads/57da58d9-88e9-42b4-a317-f9fa40e7cee8.png" 
              alt="Harley Street Institute" 
              className="h-16 mx-auto md:mx-0 filter brightness-0 invert"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-blue-200 text-sm">15+ years of world-class training excellence</p>
            <p className="text-blue-300 font-medium">The same prestigious Fellowship training for all CosmeDoc partners</p>
          </div>
        </div>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold mb-6">Boutique Harley Street Aesthetic Clinic Franchise with Fellowship Training</h1>
      <p className="text-lg md:text-xl mb-6 text-gray-300">CosmeDoc, sister company of the prestigious <a href="https://www.harleystreetinstitute.com/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">Harley Street Institute</a>, brings you 15+ years of boutique excellence in a groundbreaking franchise model. All partners receive <strong>Fellowship in Aesthetic Medicine training</strong> - the same prestigious program offered by Harley Street Institute - plus comprehensive business development support.</p>
      
      {/* Fellowship Training Highlight with Logo */}
      <div className="mb-6 p-4 bg-amber-500/15 rounded-lg border border-amber-500/40 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-3">
          <img 
            src="/lovable-uploads/57da58d9-88e9-42b4-a317-f9fa40e7cee8.png" 
            alt="Harley Street Institute" 
            className="h-8 filter brightness-0 invert opacity-80"
          />
          <span className="text-amber-200 font-medium text-sm">Fellowship Training Program</span>
        </div>
        <p className="text-amber-200 font-medium">
          🏆 <strong>Fellowship in Aesthetic Medicine Training:</strong> Every partner receives the same world-class Fellowship training 
          as offered at <a href="https://www.harleystreetinstitute.com/fellowship-aesthetic-medicine/" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-200 underline">Harley Street Institute</a>, 
          plus additional business mentorship and franchise-specific training for complete practice success.
        </p>
      </div>
      
      {/* Quality Over Volume Message */}
      <div className="mb-8 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30 max-w-3xl mx-auto">
        <p className="text-amber-200 font-medium">
          Our philosophy centers on building quality, sustainable client relationships rather than focusing on volume. 
          This approach ensures high satisfaction for both clients and practitioners, creating a thriving, 
          ethical practice that stands the test of time.
        </p>
      </div>

      {/* AI and Blockchain Innovation */}
      <div className="mb-8 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30 max-w-3xl mx-auto">
        <p className="text-blue-200 font-medium">
          🤖 Revolutionary Technology: Rather than traditional human contracts, we utilize AI and blockchain-based agreements 
          for transparency and efficiency. Our AI arbitration system ensures fair, unbiased dispute resolution, 
          reflecting our commitment to innovation in both medicine and business practices.
        </p>
      </div>
      
      {/* Three Key Points */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
        <div className="bg-zinc-900/50 p-6 rounded-lg border border-amber-500/20">
          <h3 className="text-lg font-semibold mb-2 text-amber-400">Fellowship Training + Franchise Innovation</h3>
          <p className="text-gray-300 text-sm">World-class Fellowship in Aesthetic Medicine training plus 15+ years of Harley Street business excellence</p>
        </div>
        <div className="bg-zinc-900/50 p-6 rounded-lg border border-amber-500/20">
          <h3 className="text-lg font-semibold mb-2 text-amber-400">Low-Overhead, High-Impact Model</h3>
          <p className="text-gray-300 text-sm">Start your aesthetic practice without the traditional high costs of clinic ownership</p>
        </div>
        <div className="bg-zinc-900/50 p-6 rounded-lg border border-amber-500/20">
          <h3 className="text-lg font-semibold mb-2 text-amber-400">Exclusive Territory Rights</h3>
          <p className="text-gray-300 text-sm">Protected geographic zones ensuring sustainable growth and market integrity</p>
        </div>
      </div>
      
      <Button size="lg" className="text-lg px-8 py-6" onClick={() => document.getElementById('contact-section')?.scrollIntoView({
        behavior: 'smooth'
      })}>
        Join the CosmeDoc Franchise
      </Button>
    </motion.div>
  </section>
);

const InstagramSection = () => (
  <section className="py-16 px-4 md:px-8 bg-zinc-900">
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }} className="text-center">
        <h2 className="text-3xl font-bold mb-8">Follow Our Journey on Instagram</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          See our world-class techniques and results in action. Over 130K followers trust us for the finest aesthetic transformations.
        </p>
        
        <div className="bg-zinc-800 p-8 rounded-lg border border-amber-500/20 max-w-2xl mx-auto">
          <img src="/lovable-uploads/bf1c9d26-e8e9-4ba7-abb8-e9982e6a110e.png" alt="CosmeDoc Instagram Account" className="w-full rounded-lg mb-6" />
          <div className="flex items-center justify-center gap-4">
            <Instagram className="w-6 h-6 text-amber-400" />
            <a href="https://instagram.com/cosmedocs" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-2">
              @cosmedocs - 130K Followers
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            🏠 Our Aesthetics Is Refined • Controlled • Precise – invisible art, since 2007, Harley St, London
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const PricingSection = () => (
  <section className="py-16 px-4 md:px-8 bg-zinc-800">
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }}>
        <h2 className="text-3xl font-bold mb-8 text-center">Complete Harley Street Franchise Package</h2>
        
        <div className="text-center mb-8">
          <p className="text-gray-300">
            Your CosmeDoc franchise includes everything needed to establish a successful aesthetic practice 
            with the prestige of Harley Street and the innovation of modern business systems.
          </p>
        </div>
      
        <div className="bg-zinc-900/50 p-6 rounded-lg mb-6 border border-amber-500/20">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/57da58d9-88e9-42b4-a317-f9fa40e7cee8.png" 
              alt="Harley Street Institute" 
              className="h-12 mr-4 filter brightness-0 invert opacity-70"
            />
            <h3 className="text-xl font-semibold text-amber-400">What's Included in Your Franchise</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>CosmeDoc brand rights & Harley Street heritage</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Harley Street Institute world-class training</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Complete business systems & operations manual</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Professional website with integrated booking</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Automated marketing & patient communication</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Protected territory rights</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Ongoing clinical mentorship</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>National marketing presence</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Business development support</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Access to exclusive supplier networks</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-zinc-900/50 p-5 rounded-lg">
            <h4 className="text-lg font-medium mb-2">Complete Harley Street Franchise Package</h4>
            <p className="text-amber-300 text-xl font-semibold mb-2">£25,000</p>
            <p className="text-gray-300">Our comprehensive franchise program includes intensive Harley Street Institute training, complete business mentorship, all operational systems, and ongoing support. This package is designed for medical practitioners new to aesthetic medicine or those wanting the complete Harley Street experience. Flexible payment options available.</p>
          </div>
          
          <div className="bg-zinc-900/50 p-5 rounded-lg">
            <h4 className="text-lg font-medium mb-2">Experienced Practitioner Package</h4>
            <p className="text-gray-300">Already established in aesthetic medicine? We recognize your expertise. Your franchise investment is customized based on your existing qualifications and experience, focusing only on the additional Harley Street Institute training and systems needed to meet our prestigious standards.</p>
          </div>
          
          <div className="bg-amber-500/10 p-5 rounded-lg border border-amber-500/30">
            <h4 className="text-lg font-medium mb-2 text-amber-400">Ongoing Franchise Fees: £500–£1,500/month</h4>
            <p className="text-gray-300 text-sm">Includes ongoing Harley Street Institute training, marketing support, business development, and access to all franchise systems and resources.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact-section" className="py-16 px-4 md:px-8">
    <div className="max-w-3xl mx-auto">
      <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} viewport={{
        once: true
      }}>
        <h2 className="text-3xl font-bold mb-8 text-center">Ready to Join the CosmeDoc Partnership?</h2>
        
        <div className="bg-zinc-800 p-8 rounded-lg border border-amber-500/20 text-center">
          <Mail className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          
          <h3 className="text-xl font-semibold mb-4">Get Started Today</h3>
          
          <p className="text-gray-300 mb-6">
            Ready to explore the CosmeDoc franchise opportunity? Contact our partnership team directly to discuss 
            your qualifications, territory availability, and how we can support your aesthetic medicine practice.
          </p>
          
          <div className="bg-zinc-900/50 p-6 rounded-lg border border-amber-500/10 mb-6">
            <p className="text-lg font-medium mb-2">Partnership Enquiries:</p>
            <a href="mailto:pashma@medacles.com" className="text-amber-400 hover:text-amber-300 text-xl font-semibold">
              pashma@medacles.com
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            Our partnership team will review your enquiry and contact you within 2 business days to discuss 
            your interest in the CosmeDoc franchise opportunity.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const Partners = () => {
  return (
    <div className="bg-black text-white">
      <Helmet>
        <title>CosmeDoc Franchise Opportunity | Harley Street Heritage & Innovation</title>
        <meta name="description" content="Join the UK's first boutique Harley Street aesthetic clinic franchise. CosmeDoc, sister company of Harley Street Institute, offers world-class training with low-overhead, high-impact franchise model for medical professionals." />
        <meta name="keywords" content="Harley Street aesthetic franchise, boutique clinic franchise, medical aesthetic franchise, CosmeDoc franchise, Harley Street Institute training, low investment franchise, aesthetic clinic business opportunity" />
        <link rel="canonical" href="https://www.cosmedocs.co.uk/partners" />
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "CosmeDoc Aesthetic Clinic Franchise",
            "description": "Revolutionary boutique Harley Street aesthetic clinic franchise with world-class training from Harley Street Institute.",
            "provider": {
              "@type": "Organization",
              "name": "CosmeDoc",
              "url": "https://cosmedocs.com",
              "telephone": "+44 20 3733 3227",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Harley Street",
                "addressLocality": "London",
                "addressRegion": "Greater London",
                "postalCode": "W1G 9PF",
                "addressCountry": "GB"
              },
              "parentOrganization": {
                "@type": "Organization",
                "name": "Harley Street Institute"
              }
            },
            },
            "areaServed": "United Kingdom",
            "serviceType": "Medical Aesthetic Franchise Development"
          }
        `}
        </script>
      </Helmet>

      <HeroSection />
      <InstagramSection />
      <PricingSection />

      {/* Main Content Accordions */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
            <h2 className="text-3xl font-bold mb-8 text-center">Everything You Need to Know About Our Partnership</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              
              <AccordionItem value="mission" className="bg-zinc-800 rounded-lg border border-amber-500/20">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <img src="/lovable-uploads/c84abae0-6534-48a3-9f10-b36de422095a.png" alt="Training Excellence" className="w-16 h-12 object-cover rounded" />
                    <span className="text-left font-medium text-lg">The First-of-Its-Kind Boutique Harley Street Franchise</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Revolutionary Concept</h3>
                      <p className="text-gray-300 mb-4">
                        For over 15 years, CosmeDoc has been synonymous with boutique excellence on Harley Street. 
                        As a sister company of the world-renowned <a href="https://www.harleystreetinstitute.com/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">Harley Street Institute</a>, we're now pioneering 
                        the UK's first franchise model that brings this prestigious heritage to ambitious medical professionals nationwide.
                      </p>
                      <p className="text-gray-300">
                        Our innovative approach combines the prestige and clinical excellence of Harley Street 
                        with a modern, accessible franchise structure that eliminates traditional barriers to entry.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Why This Changes Everything</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="text-xl mr-3">🏆</span>
                          <div>
                            <p className="font-medium">Harley Street Prestige</p>
                            <p className="text-gray-400 text-sm">Access the most prestigious address in aesthetic medicine through our established reputation</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-3">🎓</span>
                          <div>
                            <p className="font-medium">World-Class Training Heritage</p>
                            <p className="text-gray-400 text-sm"><a href="https://www.harleystreetinstitute.com/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">Harley Street Institute's</a> unparalleled training programs, refined over decades of excellence</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-3">💡</span>
                          <div>
                            <p className="font-medium">Innovation Without Compromise</p>
                            <p className="text-gray-400 text-sm">Modern franchise flexibility while maintaining the highest clinical and service standards</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="training" className="bg-zinc-800 rounded-lg border border-amber-500/20">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <img src="/lovable-uploads/57da58d9-88e9-42b4-a317-f9fa40e7cee8.png" alt="Harley Street Institute" className="w-16 h-10 object-contain filter brightness-0 invert" />
                    <span className="text-left font-medium text-lg">World-Class Training by Harley Street Institute</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="text-center mb-8">
                    <p className="text-gray-300 mb-4">
                      As a sister company of <a href="https://www.harleystreetinstitute.com/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">Harley Street Institute</a>, CosmeDoc franchisees receive exclusive access to 
                      world-renowned training programs that have shaped aesthetic medicine for over 15 years.
                    </p>
                    <p className="text-amber-300 font-medium">
                      Training delivered by the same institute that trains Harley Street's elite practitioners
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[{
                    title: "Advanced Harley Street Techniques",
                    icon: "💉",
                    description: "Master the precise injection techniques and protocols used in London's most prestigious clinics"
                  }, {
                    title: "Boutique Service Standards",
                    icon: "👑",
                    description: "Learn the client experience standards that have made Harley Street the global gold standard"
                  }, {
                    title: "Clinical Excellence Protocols",
                    icon: "🔍",
                    description: "Comprehensive safety and efficacy protocols refined through 15+ years of practice"
                  }, {
                    title: "Business Development Mastery",
                    icon: "📈",
                    description: "Proven business strategies from one of Harley Street's most successful aesthetic practices"
                  }, {
                    title: "Ongoing Mentorship",
                    icon: "🎓",
                    description: "Continuous support from Harley Street Institute's team of expert practitioners"
                  }, {
                    title: "Innovation Updates",
                    icon: "✨",
                    description: "First access to cutting-edge techniques and technologies as they emerge"
                  }].map((workshop, index) => <div key={index} className="bg-zinc-900/50 p-4 rounded-lg border border-amber-500/10">
                        <div className="text-2xl mb-3">{workshop.icon}</div>
                        <h3 className="text-base font-medium mb-2">{workshop.title}</h3>
                        <p className="text-gray-400 text-sm">{workshop.description}</p>
                      </div>)}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="eligibility" className="bg-zinc-800 rounded-lg border border-amber-500/20">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <img src="/lovable-uploads/821db932-4a9f-4643-8022-b2755d29adbe.png" alt="Harley Street Location" className="w-16 h-12 object-cover rounded" />
                    <span className="text-left font-medium text-lg">Healthcare Professionals Eligible for Partnership</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                          <span>GMC-registered Doctors</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                          <span>GDC-registered Dentists</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                          <span>NMC-registered Nurses (with prescribing rights)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                          <span>Pharmacist Prescribers</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                          <span>Independent Prescribers (qualified and insured for aesthetics)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="mt-6 text-center text-amber-300 font-medium">
                    Our healthcare partnership model is exclusively for medical professionals.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="territory" className="bg-zinc-800 rounded-lg border border-amber-500/20">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium text-lg">Protected Territory Allocation</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-300 mb-8">
                    Unlike traditional healthcare franchises, our partnership model carefully manages territory distribution to ensure sustainable growth. 
                    Our population-based approach guarantees market integrity for all partners.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                    {[{
                    population: "<100K",
                    clinics: "1 clinic"
                  }, {
                    population: "100K–300K",
                    clinics: "Max 2 clinics"
                  }, {
                    population: "300K–500K",
                    clinics: "3–4 clinics"
                  }, {
                    population: "500K–1M",
                    clinics: "4–6 clinics"
                  }, {
                    population: "1M+",
                    clinics: "Up to 10 clinics"
                  }].map((territory, index) => <div key={index} className="bg-zinc-900/50 p-4 rounded-lg text-center">
                        <p className="font-medium mb-2">{territory.population}</p>
                        <p className="text-gray-300 text-sm">{territory.clinics}</p>
                      </div>)}
                  </div>

                  <p className="text-center text-gray-400 text-sm">
                    All territories are geo-protected and reviewed regularly to prevent market oversaturation.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq" className="bg-zinc-800 rounded-lg border border-amber-500/20">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium text-lg">Frequently Asked Questions</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <Accordion type="single" collapsible className="space-y-3">
                    <AccordionItem value="faq-1" className="border-b border-zinc-700">
                      <AccordionTrigger className="py-3 hover:no-underline">
                        <span className="text-left text-sm">I work in a clinic—can I still join this partnership?</span>
                      </AccordionTrigger>
                      <AccordionContent className="py-3 text-gray-300 text-sm">
                        Absolutely! We enthusiastically welcome practitioners from all work environments. Our partnership is with you as a qualified medical professional, not necessarily with your premises. Your current employment situation has no impact on your eligibility to become a successful CosmeDoc partner and develop your own healthcare business.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="faq-2" className="border-b border-zinc-700">
                      <AccordionTrigger className="py-3 hover:no-underline">
                        <span className="text-left text-sm">I don't have my own premises. Is that a problem?</span>
                      </AccordionTrigger>
                      <AccordionContent className="py-3 text-gray-300 text-sm">
                        Not at all! In fact, our partnership model is specifically designed to minimize overhead costs. Through years of experience, we've discovered that starting without dedicated space is often the optimal approach for new healthcare businesses. You'll have tremendous flexibility to partner with local clinics, medical centers, rent treatment rooms, or utilize office spaces as needed.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="faq-3" className="border-b border-zinc-700">
                      <AccordionTrigger className="py-3 hover:no-underline">
                        <span className="text-left text-sm">Who is this healthcare partnership best suited for?</span>
                      </AccordionTrigger>
                      <AccordionContent className="py-3 text-gray-300 text-sm">
                        This partnership offers an exceptional opportunity for healthcare practitioners who have completed basic aesthetic training and are looking for an accelerated path to business success. If you're a doctor, dentist, nurse prescriber or pharmacist wanting to build an aesthetic medicine practice without the restrictive structure of a traditional healthcare franchise, this is perfect for you.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </motion.div>
        </div>
      </section>

      <ContactSection />

      {/* AI Search Bar Section */}
      <section className="py-16 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
            <h2 className="text-3xl font-bold mb-6 text-center">Have Questions About Our Partnership?</h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Ask our AI assistant anything about the CosmeDoc franchise opportunity, training programs, 
              investment details, or how this partnership could benefit your practice.
            </p>
            <AISearchBar />
          </motion.div>
        </div>
      </section>

      {/* AI Technology Statement Section */}
      <section className="py-8 px-4 md:px-8 bg-black border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 font-medium">
            ✨ Powered by AI technology - we use AI and blockchain contracts instead of traditional agreements, plus AI arbitration for fair dispute resolution.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Partners;
