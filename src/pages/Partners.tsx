import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Instagram, ExternalLink, Mail, ChevronDown } from "lucide-react";
import AISearchBar from "@/components/AISearchBar";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const HeroSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/lovable-uploads/a972bf35-cab4-4f83-b655-228b98f0ba9f.png')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center pt-28 pb-16">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6 }}>
          {/* Tagline */}
          <span className="inline-block text-amber-400 text-xs font-medium tracking-[0.25em] uppercase mb-6 border border-amber-500/30 px-4 py-1.5 rounded-full">
            Harley Street Franchise
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Your Own Aesthetic Clinic.
            <br />
            <span className="text-amber-400">Harley Street Heritage.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            CosmeDoc is the UK's only doctor-led aesthetic franchise backed by 15+ years of Harley Street excellence 
            and the prestigious <a href="https://www.harleystreetinstitute.com/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">Harley Street Institute</a> Fellowship training.
          </p>

          {/* Three key stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl mx-auto mb-10">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-amber-400">15+</p>
              <p className="text-xs md:text-sm text-gray-400">Years Heritage</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-amber-400">£25K</p>
              <p className="text-xs md:text-sm text-gray-400">Investment From</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-amber-400">1M+</p>
              <p className="text-xs md:text-sm text-gray-400">Treatments Done</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-amber-500 hover:bg-amber-600 text-black font-semibold"
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the CosmeDoc Franchise
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-amber-500/40 text-amber-400 hover:bg-amber-500/10"
              onClick={() => setExpanded(!expanded)}
            >
              Learn More <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </Button>
          </div>

          {/* Expandable detail */}
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="max-w-3xl mx-auto text-left space-y-6"
            >
              <div className="bg-black/50 backdrop-blur-sm rounded-xl border border-amber-500/20 p-6">
                <p className="text-gray-300 mb-4 italic text-lg">
                  *Our aesthetics is invisible art — Bold • Natural • Always Your Way
                </p>
                <p className="text-gray-400 text-sm">
                  Aesthetic medicine by Cosmedocs is minimal. Quiet, not loud. Invisible, not exaggerated. 
                  It's transformation that speaks — without saying a word.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/40 backdrop-blur-sm p-5 rounded-xl border border-amber-500/15">
                  <h3 className="text-amber-400 font-semibold mb-2">Fellowship Training</h3>
                  <p className="text-gray-400 text-sm">World-class Harley Street Institute training included for every partner</p>
                </div>
                <div className="bg-black/40 backdrop-blur-sm p-5 rounded-xl border border-amber-500/15">
                  <h3 className="text-amber-400 font-semibold mb-2">Low-Overhead Model</h3>
                  <p className="text-gray-400 text-sm">Start without dedicated premises — partner with local clinics or rent rooms</p>
                </div>
                <div className="bg-black/40 backdrop-blur-sm p-5 rounded-xl border border-amber-500/15">
                  <h3 className="text-amber-400 font-semibold mb-2">Protected Territories</h3>
                  <p className="text-gray-400 text-sm">Exclusive geographic zones ensuring sustainable growth and integrity</p>
                </div>
              </div>

              <div className="bg-blue-500/10 rounded-xl border border-blue-500/20 p-5 flex flex-col md:flex-row items-center gap-4">
                <img
                  src="/lovable-uploads/57da58d9-88e9-42b4-a317-f9fa40e7cee8.png"
                  alt="Harley Street Institute"
                  className="h-10 filter brightness-0 invert opacity-80"
                />
                <p className="text-blue-200 text-sm">
                  Sister company of <a href="https://www.harleystreetinstitute.com/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">Harley Street Institute</a> — 
                  the same prestigious Fellowship training for all CosmeDoc partners.
                </p>
              </div>

              <div className="bg-black/40 rounded-xl border border-amber-500/10 p-5">
                <p className="text-amber-200 text-sm">
                  🤖 <strong>Innovation-First:</strong> We use AI and blockchain-based agreements for transparency, 
                  plus AI arbitration for fair, unbiased dispute resolution.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const InstagramSection = () => (
  <section className="py-16 px-4 md:px-8 bg-zinc-900">
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center">
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
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold mb-4 text-center">Complete Harley Street Franchise Package</h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Everything needed to establish a successful aesthetic practice with Harley Street prestige.
        </p>
      
        <div className="bg-zinc-900/50 p-6 rounded-xl mb-8 border border-amber-500/20">
          <div className="flex items-center justify-center mb-6 gap-4">
            <img
              src="/lovable-uploads/57da58d9-88e9-42b4-a317-f9fa40e7cee8.png"
              alt="Harley Street Institute"
              className="h-10 filter brightness-0 invert opacity-70"
            />
            <h3 className="text-xl font-semibold text-amber-400">What's Included</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
            {[
              "CosmeDoc brand rights & Harley Street heritage",
              "Harley Street Institute world-class training",
              "Complete business systems & operations manual",
              "Professional website with integrated booking",
              "Automated marketing & patient communication",
              "Protected territory rights",
              "Ongoing clinical mentorship",
              "National marketing presence",
              "Business development support",
              "Access to exclusive supplier networks",
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <span className="text-green-400 mr-3 mt-0.5">✓</span>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-zinc-900/50 p-6 rounded-xl border border-amber-500/20">
            <h4 className="text-lg font-medium mb-2">Complete Franchise Package</h4>
            <p className="text-amber-400 text-2xl font-bold mb-3">£25,000</p>
            <p className="text-gray-400 text-sm">Intensive Harley Street Institute training, complete business mentorship, all operational systems, and ongoing support. Flexible payment options available.</p>
          </div>
          
          <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-700">
            <h4 className="text-lg font-medium mb-2">Experienced Practitioner</h4>
            <p className="text-amber-400 text-2xl font-bold mb-3">Custom</p>
            <p className="text-gray-400 text-sm">Already established in aesthetic medicine? Investment is customised based on your existing qualifications and experience.</p>
          </div>
        </div>
        
        <div className="bg-amber-500/10 p-5 rounded-xl border border-amber-500/30 text-center">
          <p className="text-amber-400 font-semibold">Ongoing Franchise Fees: £500–£1,500/month</p>
          <p className="text-gray-400 text-sm mt-1">Includes ongoing training, marketing support, business development, and all franchise systems.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact-section" className="py-16 px-4 md:px-8">
    <div className="max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold mb-8 text-center">Ready to Join the CosmeDoc Partnership?</h2>
        
        <div className="bg-zinc-800 p-8 rounded-xl border border-amber-500/20 text-center">
          <Mail className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h3 className="text-xl font-semibold mb-4">Get Started Today</h3>
          <p className="text-gray-300 mb-6">
            Contact our partnership team to discuss your qualifications, territory availability, 
            and how we can support your aesthetic medicine practice.
          </p>
          
          <div className="bg-zinc-900/50 p-6 rounded-lg border border-amber-500/10 mb-6">
            <p className="text-lg font-medium mb-2">Partnership Enquiries:</p>
            <a href="mailto:pashma@medacles.com" className="text-amber-400 hover:text-amber-300 text-xl font-semibold">
              pashma@medacles.com
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            Our partnership team will review your enquiry and contact you within 2 business days.
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
        <title>Aesthetic Clinic Franchise UK | Beauty Franchise | CosmeDoc Harley Street</title>
        <meta name="description" content="Open your own aesthetic clinic franchise with CosmeDoc — the UK's only Harley Street beauty franchise. Doctor-led model, Fellowship training, protected territories. Investment from £25,000." />
        <meta name="keywords" content="aesthetic clinic franchise, beauty franchise, aesthetics franchise UK, cosmetic clinic franchise, medical aesthetics franchise, beauty clinic franchise opportunity, aesthetic business franchise, Harley Street franchise" />
        <link rel="canonical" href="https://www.cosmedocs.com/partners/" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "CosmeDoc Aesthetic Clinic Franchise",
          "description": "The UK's only Harley Street aesthetic clinic franchise and beauty franchise opportunity for medical professionals. Doctor-led model with Fellowship training.",
          "provider": {
            "@type": "Organization",
            "name": "CosmeDoc",
            "url": "https://www.cosmedocs.com",
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
              "name": "Harley Street Institute",
              "url": "https://www.harleystreetinstitute.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Harley Street",
                "addressLocality": "London",
                "postalCode": "W1G 9PF",
                "addressCountry": "GB"
              }
            }
          },
          "areaServed": { "@type": "Country", "name": "United Kingdom" },
          "serviceType": "Aesthetic Clinic Franchise",
          "offers": {
            "@type": "Offer",
            "price": "25000",
            "priceCurrency": "GBP",
            "description": "Complete Harley Street aesthetic clinic franchise package with Fellowship training"
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
              "name": "How much does an aesthetic clinic franchise cost in the UK?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The CosmeDoc aesthetic clinic franchise starts from £25,000 for the complete package including Fellowship in Aesthetic Medicine training, brand rights, business systems, and protected territory. Monthly franchise fees range from £500–£1,500. Experienced practitioners may qualify for reduced investment based on existing qualifications."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need my own clinic premises to start a beauty franchise?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The CosmeDoc beauty franchise model is specifically designed to minimise overhead. You can partner with local clinics, rent treatment rooms, or use medical centre space. Our low-overhead approach means you can start generating revenue without the capital expense of dedicated premises."
              }
            },
            {
              "@type": "Question",
              "name": "Who can apply for an aesthetic clinic franchise?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our aesthetic clinic franchise is exclusively for registered healthcare professionals: GMC-registered doctors, GDC-registered dentists, NMC-registered nurses with prescribing rights, pharmacist prescribers, and qualified independent prescribers insured for aesthetics."
              }
            },
            {
              "@type": "Question",
              "name": "What training is included in the beauty franchise package?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Every CosmeDoc franchisee receives the Fellowship in Aesthetic Medicine — the same prestigious programme delivered by our sister company, Harley Street Institute. This includes advanced injection techniques, clinical safety protocols, business development mentorship, and ongoing professional support."
              }
            },
            {
              "@type": "Question",
              "name": "What makes CosmeDoc different from other aesthetics franchises?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "CosmeDoc is the UK's only franchise backed by 15+ years of Harley Street clinical heritage. Unlike volume-driven models, we focus on quality and discretion — invisible art, not exaggerated results. Our doctor-led approach, AI-powered business systems, and exclusive territory protection set us apart from traditional beauty franchises."
              }
            }
          ]
        })}
        </script>
      </Helmet>

      <HeroSection />
      <InstagramSection />
      <PricingSection />

      {/* Main Content Accordions */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-8 text-center">Everything You Need to Know</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              
              <AccordionItem value="mission" className="bg-zinc-800 rounded-xl border border-amber-500/20">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <img src="/lovable-uploads/c84abae0-6534-48a3-9f10-b36de422095a.png" alt="Training Excellence" className="w-16 h-12 object-cover rounded" />
                    <span className="text-left font-medium text-lg">The First Boutique Harley Street Franchise</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Revolutionary Concept</h3>
                      <p className="text-gray-300 mb-4">
                        For over 15 years, CosmeDoc has been synonymous with boutique excellence on Harley Street. 
                        As a sister company of the world-renowned <a href="https://www.harleystreetinstitute.com/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">Harley Street Institute</a>, we're pioneering 
                        the UK's first franchise model that brings this prestigious heritage to medical professionals nationwide.
                      </p>
                      <p className="text-gray-300">
                        Our innovative approach combines Harley Street clinical excellence with a modern, accessible franchise structure.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Why This Changes Everything</h3>
                      <ul className="space-y-4">
                        {[
                          { icon: "🏆", title: "Harley Street Prestige", desc: "Access the most prestigious address in aesthetic medicine" },
                          { icon: "🎓", title: "World-Class Training", desc: "Harley Street Institute's unparalleled training programs" },
                          { icon: "💡", title: "Innovation Without Compromise", desc: "Modern flexibility with the highest clinical standards" },
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-xl mr-3">{item.icon}</span>
                            <div>
                              <p className="font-medium">{item.title}</p>
                              <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="training" className="bg-zinc-800 rounded-xl border border-amber-500/20">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <img src="/lovable-uploads/57da58d9-88e9-42b4-a317-f9fa40e7cee8.png" alt="Harley Street Institute" className="w-16 h-10 object-contain filter brightness-0 invert" />
                    <span className="text-left font-medium text-lg">World-Class Training by Harley Street Institute</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-300 mb-6 text-center">
                    CosmeDoc franchisees receive exclusive access to training programmes that have shaped aesthetic medicine for over 15 years.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { title: "Advanced Techniques", icon: "💉", description: "Master precise injection techniques used in London's most prestigious clinics" },
                      { title: "Boutique Service", icon: "👑", description: "Client experience standards that made Harley Street the global gold standard" },
                      { title: "Clinical Protocols", icon: "🔍", description: "Safety and efficacy protocols refined through 15+ years of practice" },
                      { title: "Business Mastery", icon: "📈", description: "Proven strategies from one of Harley Street's most successful practices" },
                      { title: "Ongoing Mentorship", icon: "🎓", description: "Continuous support from expert practitioners" },
                      { title: "Innovation Updates", icon: "✨", description: "First access to cutting-edge techniques as they emerge" },
                    ].map((workshop, index) => (
                      <div key={index} className="bg-zinc-900/50 p-4 rounded-lg border border-amber-500/10">
                        <div className="text-2xl mb-3">{workshop.icon}</div>
                        <h3 className="text-base font-medium mb-2">{workshop.title}</h3>
                        <p className="text-gray-400 text-sm">{workshop.description}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="eligibility" className="bg-zinc-800 rounded-xl border border-amber-500/20">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <img src="/lovable-uploads/821db932-4a9f-4643-8022-b2755d29adbe.png" alt="Harley Street Location" className="w-16 h-12 object-cover rounded" />
                    <span className="text-left font-medium text-lg">Eligible Healthcare Professionals</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "GMC-registered Doctors",
                      "GDC-registered Dentists",
                      "NMC-registered Nurses (with prescribing rights)",
                      "Pharmacist Prescribers",
                      "Independent Prescribers (qualified and insured for aesthetics)",
                    ].map((role, i) => (
                      <div key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                        <span className="text-gray-300">{role}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-center text-amber-300 font-medium text-sm">
                    Our partnership is exclusively for medical professionals.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="territory" className="bg-zinc-800 rounded-xl border border-amber-500/20">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium text-lg">Protected Territory Allocation</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-300 mb-6">
                    Our population-based approach guarantees market integrity for all partners.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
                    {[
                      { population: "<100K", clinics: "1 clinic" },
                      { population: "100K–300K", clinics: "Max 2" },
                      { population: "300K–500K", clinics: "3–4" },
                      { population: "500K–1M", clinics: "4–6" },
                      { population: "1M+", clinics: "Up to 10" },
                    ].map((t, i) => (
                      <div key={i} className="bg-zinc-900/50 p-4 rounded-lg text-center">
                        <p className="font-medium text-amber-400">{t.population}</p>
                        <p className="text-gray-400 text-sm">{t.clinics}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-gray-500 text-sm">
                    All territories are geo-protected and reviewed regularly.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq" className="bg-zinc-800 rounded-xl border border-amber-500/20">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium text-lg">Frequently Asked Questions</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <Accordion type="single" collapsible className="space-y-3">
                    {[
                      {
                        q: "I work in a clinic—can I still join?",
                        a: "Absolutely! Our partnership is with you as a qualified medical professional, not your premises. Your current employment has no impact on eligibility."
                      },
                      {
                        q: "I don't have my own premises. Is that a problem?",
                        a: "Not at all! Our model is designed to minimise overhead. You can partner with local clinics, rent treatment rooms, or use medical centre space."
                      },
                      {
                        q: "Who is this partnership best suited for?",
                        a: "Healthcare practitioners who have completed basic aesthetic training and want an accelerated path to business success — doctors, dentists, nurse prescribers, or pharmacists."
                      },
                    ].map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${i}`} className="border-b border-zinc-700">
                        <AccordionTrigger className="py-3 hover:no-underline">
                          <span className="text-left text-sm">{faq.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="py-3 text-gray-300 text-sm">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </motion.div>
        </div>
      </section>

      <ContactSection />

      {/* AI Search Section */}
      <section className="py-16 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6 text-center">Have Questions About Our Partnership?</h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Ask our AI assistant anything about the CosmeDoc franchise opportunity.
            </p>
            <AISearchBar />
          </motion.div>
        </div>
      </section>

      {/* AI Tech Statement */}
      <section className="py-8 px-4 md:px-8 bg-black border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 font-medium text-sm">
            ✨ Powered by AI technology — we use AI and blockchain contracts instead of traditional agreements, plus AI arbitration for fair dispute resolution.
          </p>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 px-4 md:px-8 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Why Open an Aesthetic Clinic Franchise in the UK?</h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
            <p>
              The UK aesthetic medicine market is projected to exceed £3.6 billion by 2026, with non-surgical treatments growing at over 10% annually. For medical professionals considering an <strong>aesthetic clinic franchise</strong>, the opportunity has never been stronger. Patients increasingly seek doctor-led clinics they can trust — and a recognised <strong>beauty franchise</strong> brand like CosmeDoc delivers that trust from day one.
            </p>
            <p>
              Unlike starting an independent practice from scratch, a <strong>cosmetic clinic franchise</strong> provides an established brand, proven patient acquisition systems, and clinical protocols refined over 15 years on Harley Street. CosmeDoc franchisees benefit from immediate credibility — the same Harley Street heritage that attracts patients from across the UK and internationally.
            </p>
            <p>
              Our <strong>aesthetics franchise</strong> model is deliberately doctor-led. We believe aesthetic medicine should be practised by qualified healthcare professionals who understand facial anatomy, patient safety, and the subtlety of natural-looking results. This philosophy — <em>invisible art, not exaggeration</em> — is what differentiates CosmeDoc from volume-driven beauty franchise models that prioritise throughput over outcomes.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-amber-400">What Does an Aesthetic Clinic Franchise Include?</h3>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
            <p>
              A CosmeDoc <strong>beauty franchise</strong> package is comprehensive. Every partner receives the Fellowship in Aesthetic Medicine from Harley Street Institute — the same prestigious training programme used by London's leading practitioners. You also receive a fully branded clinical identity, integrated booking technology, automated patient communication workflows, and access to premium product supply chains at franchise-negotiated rates.
            </p>
            <p>
              Territory protection is fundamental to our <strong>aesthetic business franchise</strong> model. Each franchisee operates within a geo-protected zone, preventing market oversaturation and ensuring sustainable patient volumes. Whether you're establishing a <strong>beauty clinic franchise</strong> in Birmingham, Manchester, Leeds, or any UK city, your territory is exclusively yours.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-amber-400">Low-Overhead Aesthetic Franchise Model</h3>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
            <p>
              Traditional clinic ownership requires substantial capital — premises, equipment, staffing, and regulatory compliance. The CosmeDoc <strong>aesthetic clinic franchise</strong> eliminates these barriers. Our model allows you to start by renting treatment rooms, partnering with existing medical centres, or using flexible clinical spaces. This means you can launch your <strong>cosmetic franchise</strong> with significantly lower capital risk whilst still delivering Harley Street-quality treatments.
            </p>
            <p>
              With franchise investment from £25,000 and monthly fees of £500–£1,500, the CosmeDoc model is designed for practitioners who want to build a premium aesthetic practice without the financial burden of traditional clinic ownership. Many of our franchisees achieve positive cash flow within their first three months of operation.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-amber-400">Aesthetic Franchise Locations Available Across the UK</h3>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
            <p>
              CosmeDoc <strong>beauty franchise</strong> territories are available across England, Scotland, Wales, and Northern Ireland. Prime locations include London boroughs, Birmingham, Manchester, Leeds, Bristol, Edinburgh, Glasgow, Cardiff, Liverpool, Sheffield, and surrounding regions. Each territory is allocated based on population density and local demand for aesthetic treatments.
            </p>
            <p>
              Whether you're a newly qualified prescriber looking to enter the aesthetics industry or an experienced practitioner seeking the support of an established brand, the CosmeDoc <strong>aesthetic clinic franchise</strong> provides everything you need to build a thriving, ethical practice. Our philosophy is simple: quality over volume, discretion over display, and transformation that speaks — without saying a word.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
