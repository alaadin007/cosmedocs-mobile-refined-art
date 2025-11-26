import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Users, 
  TrendingUp, 
  Calendar, 
  Heart, 
  Award,
  CheckCircle2,
  ArrowRight,
  Building2,
  LineChart,
  Globe,
  Zap,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const EmailReveal = () => {
  const [revealed, setRevealed] = useState(false);
  
  const emailParts = ['pashma', '@', 'cosmedocs', '.', 'com'];
  const email = emailParts.join('');
  
  return (
    <div className="flex flex-col items-center gap-3">
      {!revealed ? (
        <Button 
          size="lg" 
          variant="secondary" 
          className="gap-2"
          onClick={() => setRevealed(true)}
        >
          <Mail className="w-4 h-4" />
          Click to Reveal Email
        </Button>
      ) : (
        <a 
          href={`mailto:${email}`}
          className="text-xl font-semibold hover:underline flex items-center gap-2"
        >
          <Mail className="w-5 h-5" />
          {email}
        </a>
      )}
    </div>
  );
};

const Partnerships = () => {
  const benefits = [
    {
      icon: Users,
      title: "Access to Our Entire Client Database",
      description: "Thousands of existing patients who trust CosmeDocs. Step in with a warm, engaged audience ready to book from day one."
    },
    {
      icon: Calendar,
      title: "Fully Managed Booking System",
      description: "We handle bookings, reminders, payments, and admin through Clinic Flow. You focus on delivering brilliant treatments."
    },
    {
      icon: Building2,
      title: "Professional Clinic Rooms",
      description: "No rental costs. Access professional treatment rooms with full hygiene setup, reception support, and medical credibility."
    },
    {
      icon: Globe,
      title: "Website, SEO & Marketing Support",
      description: "Dedicated landing pages, Google ads, SEO optimization, social media, and daily website traffic — all included."
    },
    {
      icon: Sparkles,
      title: "Build Your Personal Brand",
      description: "Professional photos, videos, reels, treatment pages, before/after galleries, and storytelling support."
    },
    {
      icon: TrendingUp,
      title: "Freedom to Grow at Your Pace",
      description: "Choose your own schedule: 1-2 days per week or full-time. No rigid shifts, no micromanagement, total flexibility."
    }
  ];

  const services = [
    "Permanent Makeup (PMU)",
    "Microblading",
    "Ombre & Powder Brows",
    "Lip Blush",
    "Eyeliner Tattooing",
    "Chemical Peels",
    "Microneedling",
    "Advanced Facials",
    "Scalp Micropigmentation (SMP)",
    "Lash Lifts & Brow Lamination",
    "Laser Treatments",
    "Cosmetic Tattooing"
  ];

  const idealPartner = [
    "Skilled and certified",
    "Passionate about aesthetics",
    "Reliable and client-focused",
    "Motivated to build your own career",
    "Professional and quality-driven",
    "Looking for growth, not employment",
    "Ready to expand services",
    "Committed to excellent results"
  ];

  return (
    <>
      <Helmet>
        <title>Partnerships - Join CosmeDocs | PMU Jobs, Microblading Jobs, Aesthetic Careers</title>
        <meta 
          name="description" 
          content="Work with us, not for us. CosmeDocs partnerships for PMU artists, microblading specialists, aesthetic practitioners. Build your own business with our client base, clinic rooms & marketing support." 
        />
        <meta 
          name="keywords" 
          content="PMU jobs London, microblading jobs, permanent makeup artist job, aesthetic practitioner jobs, beauty therapist jobs, SMP jobs, cosmetic tattoo jobs, lip blush technician, brow technician jobs, aesthetic partnerships" 
        />
        <link rel="canonical" href="https://www.cosmedocs.co.uk/partnerships" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Become a CosmeDocs Partner - Aesthetic Careers & PMU Jobs" />
        <meta property="og:description" content="Stop looking for a job. Start building your aesthetic career as a CosmeDocs partner. PMU, microblading, SMP & beauty professionals welcome." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cosmedocs.co.uk/partnerships" />
        <meta property="og:image" content="https://www.cosmedocs.co.uk/partnerships-og.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CosmeDocs Partnerships - Build Your Aesthetic Career" />
        <meta name="twitter:description" content="Work with us, not for us. Partnership opportunities for PMU, microblading & aesthetic professionals." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Aesthetic Partnership Opportunities - PMU, Microblading, Beauty Specialists",
            "description": "CosmeDocs is seeking skilled aesthetic practitioners to join our partnership program. Build your own business with our support.",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "CosmeDocs",
              "sameAs": "https://www.cosmedocs.co.uk"
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressCountry": "GB"
              }
            },
            "employmentType": "CONTRACTOR",
            "baseSalary": {
              "@type": "MonetaryAmount",
              "currency": "GBP",
              "value": {
                "@type": "QuantitativeValue",
                "value": "Unlimited",
                "unitText": "PERCENTAGE"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              className="text-center space-y-6"
              {...fadeIn}
            >
              <Badge variant="secondary" className="mb-4">
                <Sparkles className="w-3 h-3 mr-1" />
                Partnership Opportunities
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Work <span className="text-primary">With</span> Us, Not <span className="text-muted-foreground">For</span> Us
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                A New Career Path for Permanent Makeup Artists, Aesthetic Practitioners & Beauty Professionals
              </p>

              <div className="flex flex-wrap gap-3 justify-center pt-4">
                <Button size="lg" className="gap-2" asChild>
                  <a href="#apply">
                    Become a Partner
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#benefits">Learn More</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search Keywords Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <h2 className="text-3xl font-bold">Are You Searching For...</h2>
              <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
                {[
                  "Permanent Makeup jobs",
                  "Microblading jobs",
                  "Aesthetic practitioner jobs",
                  "Beauty therapist vacancies",
                  "SMP artist opportunities",
                  "Cosmetic tattooing careers",
                  "Lash & brow specialist roles"
                ].map((keyword, index) => (
                  <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                    {keyword}
                  </Badge>
                ))}
              </div>
              
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg max-w-3xl mx-auto mt-8">
                <p className="text-lg font-semibold mb-2">💡 Stop Looking for a Job</p>
                <p className="text-muted-foreground">
                  Instead of applying for a traditional role, become a CosmeDocs partner. Build your own business using our client base, clinic infrastructure, and marketing power.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why We Created This */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Why We Created This Program</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  CosmeDocs has built one of the UK's most respected medical aesthetics brands. We have an established presence in London and beyond, extensive SEO visibility, a large active client list, and a robust booking system integrated into Clinic Flow.
                </p>
                
                <p>
                  Every day we receive enquiries from clients asking: "Do you offer microblading?" "Do you do lip blush?" "Can I get SMP with you?" "Do you have facials or skin therapists?"
                </p>
                
                <p className="font-semibold text-foreground">
                  Until now, we couldn't say yes to everything. But the demand is already here.
                </p>
                
                <p>
                  So instead of hiring employees, we launched a <strong>partner-based model</strong> where skilled practitioners can offer services to our existing clients — with full support from our clinic, marketing, systems and brand.
                </p>
                
                <div className="bg-secondary/20 p-6 rounded-lg border border-secondary/30 mt-6">
                  <p className="text-foreground font-semibold mb-2">The Result:</p>
                  <ul className="space-y-2 text-foreground">
                    <li>✔ Clients get more treatment options</li>
                    <li>✔ CosmeDocs expands its service range</li>
                    <li>✔ You build a profitable, independent career</li>
                  </ul>
                  <p className="mt-4 text-primary font-bold">Everybody wins.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Not a Job Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-secondary/10 to-primary/5">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                This Is Not a Job — This Is Your Own Aesthetic Business
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
                <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/20">
                  <h3 className="font-bold text-lg mb-4 text-destructive">❌ If You Want...</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• A salary</li>
                    <li>• Hourly pay</li>
                    <li>• Set shifts</li>
                    <li>• Traditional employment</li>
                  </ul>
                  <p className="mt-4 font-semibold">— this is not the right opportunity.</p>
                </div>
                
                <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                  <h3 className="font-bold text-lg mb-4 text-primary">✔ If You Want...</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>✔ Independence</li>
                    <li>✔ Ready-made client supply</li>
                    <li>✔ Professional clinic space</li>
                    <li>✔ Marketing without paying for it</li>
                    <li>✔ Growth without overhead</li>
                    <li>✔ Long-term partnership with a leading brand</li>
                  </ul>
                  <p className="mt-4 font-bold text-primary">— you belong here.</p>
                </div>
              </div>
              
              <p className="text-xl font-semibold text-foreground pt-6">
                You bring your craft. We bring everything else.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section id="benefits" className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What CosmeDocs Provides for Partners
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to succeed — clients, systems, space, and support
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <benefit.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Welcome */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Who Should Apply?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We welcome professionals in all aesthetic specialties
                </p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-background p-4 rounded-lg border border-border text-center hover:border-primary/50 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium">{service}</p>
                  </motion.div>
                ))}
              </div>

              <p className="text-center text-muted-foreground italic max-w-2xl mx-auto pt-6">
                Even if your specialty is niche, rare, or emerging — we want to hear from you. We actively want to expand the services we provide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Ideal Partner Profile */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">The Ideal Partner Profile</h2>
                <p className="text-lg text-muted-foreground">
                  We're looking for practitioners who are...
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {idealPartner.map((trait, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="font-medium">{trait}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 text-center">
                <p className="text-lg">
                  <strong>If you already have a small client base</strong> — perfect.<br />
                  <strong>If you're just starting</strong> — our system helps you grow faster than you could alone.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Earnings Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <LineChart className="w-12 h-12 text-primary mx-auto" />
              <h2 className="text-3xl font-bold">How Earnings Work</h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Instead of a salary, you earn a <strong className="text-foreground">percentage-based income</strong> that increases as your demand increases.
              </p>

              <div className="bg-background p-8 rounded-lg border border-border max-w-2xl mx-auto text-left space-y-4">
                <h3 className="font-bold text-xl mb-4">You Can Realistically Earn:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>More than a traditional clinic job</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>More than renting a beauty room</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>More than freelancing independently</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-lg text-primary">
                    Your earning ceiling is determined by your quality and ambition, not by an employer.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How to Join */}
        <section id="apply" className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  How to Join the CosmeDocs Partnership Program
                </h2>
                <p className="text-lg text-muted-foreground">
                  Five simple steps to start building your aesthetic business
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Submit Your Application",
                    description: "Tell us your name, training & certificates, specialty, links/photos of your work, and availability."
                  },
                  {
                    step: "2",
                    title: "Meet the CosmeDocs Team",
                    description: "We schedule a call to get to know you and understand your vision."
                  },
                  {
                    step: "3",
                    title: "Onboarding and Setup",
                    description: "We prepare your booking system, online profile, treatment page, clinic access, marketing plan, and support materials."
                  },
                  {
                    step: "4",
                    title: "Start Taking Clients Immediately",
                    description: "Begin receiving patient referrals, online leads, website traffic, and social media exposure."
                  },
                  {
                    step: "5",
                    title: "Grow, Scale, and Build Your Career",
                    description: "We track your performance and help you expand as fast as you're ready."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary to-primary/80 p-8 md:p-12 rounded-lg text-center text-primary-foreground">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Become a CosmeDocs Partner?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Stop looking for a job. Start building your own aesthetic career.
                </p>
                <EmailReveal />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final Comparison */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-center">
                Why Choose CosmeDocs Instead of Another Clinic?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "We don't 'hire employees.'", subtitle: "We develop partners." },
                  { title: "We don't restrict practitioners.", subtitle: "We empower them." },
                  { title: "We don't offer low starting salaries.", subtitle: "We offer high potential earnings without limits." },
                  { title: "We don't expect you to chase clients.", subtitle: "We deliver clients to you." },
                  { title: "We don't lock you into rigid schedules.", subtitle: "We support your lifestyle and goals." }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-background p-6 rounded-lg border border-border"
                  >
                    <p className="font-semibold mb-2">✔ {item.title}</p>
                    <p className="text-primary font-bold">{item.subtitle}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-primary/10 p-8 rounded-lg border border-primary/20 text-center">
                <p className="text-lg font-semibold mb-4">CosmeDocs is built on:</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  {["Trust", "Quality", "Safety", "Growth", "Professional Excellence"].map((value, index) => (
                    <Badge key={index} variant="secondary" className="text-base py-2 px-4">
                      {value}
                    </Badge>
                  ))}
                </div>
                <p className="text-xl font-bold mt-6 text-primary">
                  You aren't joining a clinic. You're joining an ecosystem for success.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Partnerships;
