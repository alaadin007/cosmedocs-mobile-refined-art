import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Shield, 
  AlertTriangle,
  Stethoscope,
  PoundSterling,
  Star,
  Phone,
  Info,
  Syringe,
  Activity,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// SEO-optimized structured data
const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Scar Reduction Treatment London",
  "description": "Advanced injectable scar reduction treatments including steroid injections, 5-FU, and botulinum toxin therapy for keloid and hypertrophic scars at Harley Street, London.",
  "procedureType": "NoninvasiveProcedure",
  "bodyLocation": "Skin",
  "preparation": "Initial consultation to assess scar type and treatment plan",
  "followup": "Multiple sessions typically required, 4-6 weeks apart",
  "howPerformed": "Injectable treatments delivered directly into scar tissue",
  "status": "http://schema.org/ActiveActionStatus"
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Cosmedocs Scar Reduction Clinic",
  "url": "https://www.cosmedocs.com/scar-reduction/",
  "telephone": "+44 20 3733 3227",
  "priceRange": "£200-£300",
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
    "latitude": 51.5174,
    "longitude": -0.1468
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "17:00"
    }
  ],
  
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does scar reduction treatment cost in London?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At Cosmedocs Harley Street, scar reduction treatments start from £200 per session for scars up to 10cm. Larger scars such as C-section scars are £300 per session. Multiple sessions are typically required for optimal results."
      }
    },
    {
      "@type": "Question",
      "name": "What treatments are available for keloid and hypertrophic scars?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer steroid injections (triamcinolone), 5-Fluorouracil (5-FU), and botulinum toxin therapy. These can be used individually or in combination based on your practitioner's assessment of your scar type and response to treatment."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a shortage of steroid injections for scar treatment in the UK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the UK is experiencing a significant shortage of Kenalog (triamcinolone) due to manufacturing facility closures. The NHS no longer routinely supplies this medication. Private clinics like Cosmedocs import triamcinolone from specialist pharmaceutical suppliers to ensure continued treatment availability."
      }
    },
    {
      "@type": "Question",
      "name": "How many scar reduction sessions will I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most patients require 3-6 sessions spaced 4-6 weeks apart. The exact number depends on scar size, type, age, and individual response to treatment. Your practitioner will create a personalised treatment plan during consultation."
      }
    },
    {
      "@type": "Question",
      "name": "Will scar reduction treatment completely remove my scar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Injectable scar treatments aim to significantly reduce scar appearance, not completely eliminate scars. Results vary between individuals. Most patients see noticeable improvements in scar height, colour, texture, and associated symptoms like itching or pain. No treatment can guarantee complete scar removal."
      }
    }
  ]
};

const ScarReduction = () => {
  return (
    <>
      <Helmet>
        <title>Scar Reduction Treatment London | Keloid & Hypertrophic Scar Injections Harley Street | Cosmedocs</title>
        <meta 
          name="description" 
          content="Expert scar reduction treatments in London from £200. Steroid injections, 5-FU & botulinum toxin for keloid and hypertrophic scars. Private clinic on Harley Street. Book consultation today." 
        />
        <meta name="keywords" content="scar reduction London, keloid treatment London, hypertrophic scar treatment, steroid injection scar, 5-FU scar treatment, Kenalog injection London, scar injection therapy, C-section scar treatment London, Harley Street scar clinic, triamcinolone injection UK" />
        <link rel="canonical" href="https://www.cosmedocs.com/scar-reduction/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Scar Reduction Treatment London | Keloid & Hypertrophic Scar Injections" />
        <meta property="og:description" content="Advanced injectable scar reduction from £200. Expert treatment for keloid, hypertrophic and surgical scars at Harley Street, London." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cosmedocs.com/scar-reduction/" />
        <meta property="og:locale" content="en_GB" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Scar Reduction Treatment London | Cosmedocs Harley Street" />
        <meta name="twitter:description" content="Expert scar reduction treatments from £200. Keloid, hypertrophic & surgical scar injections." />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="author" content="Cosmedocs" />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(medicalProcedureSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(medicalBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Noscript fallback for SEO */}
      <noscript>
        <div className="p-8 max-w-4xl mx-auto">
          <h1>Scar Reduction Treatment London - Cosmedocs Harley Street</h1>
          <p>Expert scar reduction treatments including steroid injections, 5-FU, and botulinum toxin therapy for keloid and hypertrophic scars. Prices from £200 per session. Call +44 20 3733 3227 to book.</p>
        </div>
      </noscript>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <header className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber-500/5" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="secondary" className="px-4 py-2">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  Medical Treatment
                </Badge>
                <Badge variant="outline" className="px-4 py-2 border-amber-500 text-amber-600">
                  Private Supply Available
                </Badge>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                <span className="text-foreground">Scar Reduction </span>
                <span className="bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">Treatment London</span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-3xl"
              >
                Advanced injectable treatments for keloid, hypertrophic, and surgical scars. 
                Steroid injections, 5-FU, and botulinum toxin therapy delivered by experienced 
                medical practitioners on Harley Street.
              </motion.p>

              <motion.p 
                variants={fadeInUp}
                className="text-lg text-muted-foreground/80 mb-8 max-w-2xl italic"
              >
                Our aesthetics is invisible art — subtle, natural scar improvement that speaks without saying a word.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="group" asChild>
                  <Link to="/contact/">
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+442037333227">
                    <Phone className="mr-2 h-4 w-4" />
                    020 3733 3227
                  </a>
                </Button>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-6 pt-6 border-t border-border/50"
              >
                <div className="flex items-center gap-2">
                  <PoundSterling className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">From £200/session</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">15-30 min procedure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Medical practitioners</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </header>

        {/* Supply Notice Banner */}
        <section className="bg-amber-500/10 border-y border-amber-500/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-start gap-4">
              <Info className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-semibold text-foreground mb-1">Important: UK Medication Shortage Update</h2>
                <p className="text-muted-foreground">
                  Due to the nationwide shortage of Kenalog (triamcinolone), the NHS no longer routinely 
                  supplies steroid injections for scar treatment. At Cosmedocs, we import pharmaceutical-grade 
                  triamcinolone from specialist suppliers to ensure continued treatment availability for our patients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">Understanding Scar Reduction Treatment</h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Scars are a natural part of the body&apos;s healing process, but for many people, 
                  particularly those with keloid or hypertrophic scars, they can become a source of 
                  significant physical discomfort and emotional distress. At Cosmedocs on Harley Street, 
                  London, our experienced medical practitioners offer advanced injectable treatments 
                  designed to reduce scar visibility, flatten raised tissue, and alleviate symptoms 
                  such as itching, tightness, and pain.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Unlike cosmetic procedures that promise dramatic transformations, scar reduction 
                  treatment is a medical intervention focused on gradual, measurable improvement. 
                  We believe in setting realistic expectations: our treatments aim to significantly 
                  reduce scar appearance and associated symptoms, not to eliminate scars entirely. 
                  Results vary between individuals depending on scar type, age, location, and 
                  individual healing response.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our approach reflects the Cosmedocs philosophy of invisible artistry — subtle, 
                  natural improvement that enhances your confidence without obvious intervention. 
                  Bold results, natural appearance, always your way.
                </p>
              </div>
            </motion.section>

            <Separator className="my-12" />

            {/* Scar Types Section */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">Types of Scars We Treat</h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Our injectable scar reduction treatments are most effective for raised scars that 
                extend above the skin surface. Understanding your scar type helps us create the 
                most appropriate treatment plan.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      Keloid Scars
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Keloid scars grow beyond the boundaries of the original wound, forming 
                      raised, often shiny tissue that can continue expanding over time. They 
                      are particularly common in individuals with darker skin tones and tend 
                      to develop on the chest, shoulders, earlobes, and jawline.
                    </p>
                    <ul className="space-y-2">
                      {["Grows beyond original wound", "May continue expanding", "Often itchy or painful", "Can restrict movement"].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-amber-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      Hypertrophic Scars
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Hypertrophic scars remain within the boundaries of the original wound 
                      but are raised and thickened. They typically develop within weeks of 
                      injury and may improve naturally over one to two years, though treatment 
                      can accelerate this process significantly.
                    </p>
                    <ul className="space-y-2">
                      {["Stays within wound boundaries", "Often improves over time", "Red or pink coloration", "Responds well to treatment"].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-amber-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-muted md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                      Surgical & Traumatic Scars
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Scars resulting from surgery (including caesarean sections, appendectomy, 
                      and cosmetic procedures) or traumatic injuries can benefit from injectable 
                      treatment, particularly if they have become raised, tight, or symptomatic. 
                      Early intervention within the first year often yields the best results.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["C-section scars", "Appendectomy scars", "Injury scars", "Burn scars", "Acne scars (raised)"].map((item) => (
                        <Badge key={item} variant="secondary">{item}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            <Separator className="my-12" />

            {/* Treatment Options */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Our Scar Reduction Treatments</h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Following careful assessment of your scar, our practitioners will recommend 
                single-agent or combination therapy based on scar characteristics, your 
                treatment goals, and previous response to therapy. All treatments are delivered 
                by qualified medical professionals in our Harley Street clinic.
              </p>

              {/* Treatment 1: Steroid Injections */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Syringe className="h-6 w-6 text-primary" />
                  Intralesional Steroid Injections
                </h3>
                
                <div className="bg-muted/30 rounded-2xl p-6 mb-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    Corticosteroid injections, typically using triamcinolone acetonide (Kenalog), 
                    remain the gold standard first-line treatment for keloid and hypertrophic scars. 
                    The medication is injected directly into the scar tissue, where it reduces 
                    inflammation, inhibits collagen synthesis, and promotes scar flattening.
                  </p>
                  
                  <h4 className="font-semibold mb-3">How Steroid Injections Work</h4>
                  <p className="text-muted-foreground mb-4">
                    Triamcinolone is a potent anti-inflammatory corticosteroid that acts on 
                    fibroblasts — the cells responsible for producing collagen within scar tissue. 
                    By reducing fibroblast activity and breaking down existing collagen bonds, 
                    the injection helps flatten raised scars, soften hard tissue, and reduce redness.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-sm mb-2">Benefits</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-primary" />
                          Flattens raised scar tissue
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-primary" />
                          Reduces redness and inflammation
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-primary" />
                          Softens hard, fibrous tissue
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-primary" />
                          Alleviates itching and discomfort
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm mb-2">Treatment Protocol</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          Sessions every 4-6 weeks
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          Typically 3-6 sessions required
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          Results visible after 2-3 sessions
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          No downtime required
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Shortage Notice */}
                <Card className="border-amber-500/30 bg-amber-500/5 mb-6">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">UK Kenalog Shortage: What This Means for Patients</h4>
                        <p className="text-muted-foreground text-sm mb-3">
                          The UK is currently experiencing a significant shortage of Kenalog 
                          (triamcinolone acetonide) following the closure of the primary Irish 
                          manufacturing facility. The NHS no longer routinely supplies this 
                          medication, and wholesale prices have increased substantially.
                        </p>
                        <p className="text-muted-foreground text-sm">
                          At Cosmedocs, we have established relationships with specialist 
                          pharmaceutical importers to ensure continued access to high-quality 
                          triamcinolone for our patients. Unlike many clinics that have 
                          discontinued scar treatments or significantly increased prices, 
                          we remain committed to accessible, fairly-priced care.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Treatment 2: 5-FU */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Activity className="h-6 w-6 text-primary" />
                  5-Fluorouracil (5-FU) Injections
                </h3>
                
                <div className="bg-muted/30 rounded-2xl p-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    5-Fluorouracil is an antimetabolite medication that inhibits rapidly 
                    dividing cells, including the overactive fibroblasts responsible for 
                    excessive collagen production in keloid scars. When injected directly 
                    into scar tissue, 5-FU reduces scar volume and prevents further growth.
                  </p>
                  
                  <h4 className="font-semibold mb-3">How 5-FU Works</h4>
                  <p className="text-muted-foreground mb-4">
                    Originally developed as a chemotherapy agent, 5-FU has proven highly 
                    effective at much lower doses for scar treatment. It works by interfering 
                    with DNA synthesis in rapidly dividing fibroblast cells, effectively 
                    slowing collagen overproduction without affecting normal surrounding tissue.
                  </p>

                  <h4 className="font-semibold mb-3">When 5-FU Is Recommended</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Scars that have not responded adequately to steroid injections alone</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>As combination therapy with steroids for enhanced efficacy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Patients experiencing steroid side effects (skin thinning, telangiectasia)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Large or resistant keloid scars requiring aggressive treatment</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Treatment 3: Botulinum Toxin */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Syringe className="h-6 w-6 text-primary" />
                  Botulinum Toxin for Scar Treatment
                </h3>
                
                <div className="bg-muted/30 rounded-2xl p-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    Botulinum toxin (commonly known as Botox) represents an innovative 
                    approach to scar treatment. By reducing muscle tension around healing 
                    wounds and directly inhibiting fibroblast activity, botulinum toxin 
                    can improve scar appearance and prevent excessive scarring.
                  </p>
                  
                  <h4 className="font-semibold mb-3">How Botulinum Toxin Helps Scars</h4>
                  <div className="grid sm:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h5 className="font-medium text-sm mb-2">Tension Reduction</h5>
                      <p className="text-sm text-muted-foreground">
                        By paralysing muscles adjacent to scars, botulinum toxin reduces 
                        the mechanical tension that can cause scars to widen or thicken. 
                        This is particularly effective for facial scars and scars over joints.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm mb-2">Anti-Fibrotic Effect</h5>
                      <p className="text-sm text-muted-foreground">
                        Research indicates that botulinum toxin directly inhibits fibroblast 
                        proliferation and collagen production, reducing the formation of 
                        hypertrophic scar tissue at a cellular level.
                      </p>
                    </div>
                  </div>

                  <h4 className="font-semibold mb-3">Ideal Candidates for Botulinum Toxin Scar Treatment</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>New surgical wounds (prophylactic treatment to prevent excessive scarring)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Scars in high-tension areas (forehead, jaw, chest)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Patients with history of keloid formation undergoing new surgery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Combination therapy with steroid and/or 5-FU for resistant scars</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Combination Therapy */}
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Combination Therapy: Tailored to Your Scar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For many patients, particularly those with resistant or extensive scars, 
                    our practitioners may recommend combination therapy using two or more 
                    treatment modalities. This approach often yields superior results compared 
                    to single-agent treatment.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Common combinations include steroid with 5-FU (reducing required steroid 
                    dose and associated side effects), or steroid with botulinum toxin for 
                    scars in high-tension areas. Your treatment plan will be customised 
                    following thorough assessment during your consultation.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Treatment selection is based on clinical assessment. Your practitioner 
                    will explain all options and make recommendations based on your specific 
                    scar characteristics and goals.
                  </p>
                </CardContent>
              </Card>
            </motion.section>

            <Separator className="my-12" />

            {/* Pricing Section */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">Scar Reduction Treatment Pricing London</h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Our pricing is transparent and straightforward. Unlike many London clinics 
                that have significantly increased prices due to the Kenalog shortage, we 
                have maintained accessible pricing by absorbing increased import costs.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-primary/30">
                  <CardHeader className="pb-4">
                    <Badge className="w-fit mb-2">Standard</Badge>
                    <CardTitle className="text-2xl">Standard Scar Treatment</CardTitle>
                    <p className="text-muted-foreground">For scars up to 10cm in length</p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary mb-4">£200</div>
                    <p className="text-sm text-muted-foreground mb-4">per session</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Medical consultation included
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        All injectable medications included
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Aftercare advice provided
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Photography for progress tracking
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-amber-500/30">
                  <CardHeader className="pb-4">
                    <Badge variant="secondary" className="w-fit mb-2 bg-amber-500/10 text-amber-600">Extended</Badge>
                    <CardTitle className="text-2xl">Extended Scar Treatment</CardTitle>
                    <p className="text-muted-foreground">For larger scars (e.g., C-section)</p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-amber-600 mb-4">£300</div>
                    <p className="text-sm text-muted-foreground mb-4">per session</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500" />
                        Suitable for C-section scars
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500" />
                        Large surgical scars
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500" />
                        Multiple injection sites as needed
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500" />
                        Extended consultation time
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-muted/30">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Important:</strong> Most patients 
                    require 3-6 sessions for optimal results, with sessions typically 
                    scheduled 4-6 weeks apart. During your consultation, your practitioner 
                    will provide an estimated treatment timeline based on your specific scar.
                  </p>
                </CardContent>
              </Card>
            </motion.section>

            <Separator className="my-12" />

            {/* What to Expect */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">What to Expect During Treatment</h2>
              
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Consultation & Assessment</h3>
                    <p className="text-muted-foreground">
                      Your practitioner will examine your scar, discuss your medical history, 
                      and determine the most appropriate treatment approach. Photographs may 
                      be taken for progress monitoring. We&apos;ll explain all options and answer 
                      your questions before proceeding.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Treatment Procedure</h3>
                    <p className="text-muted-foreground">
                      The treatment area may be numbed with topical anaesthetic or ice. 
                      Medication is then injected directly into the scar tissue using a 
                      fine needle. You may feel pressure or mild discomfort during injection. 
                      The procedure typically takes 15-30 minutes depending on scar size.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Aftercare & Recovery</h3>
                    <p className="text-muted-foreground">
                      Most patients experience minimal downtime. Mild swelling, bruising, 
                      or temporary colour changes at the injection site are normal. You 
                      can typically resume normal activities immediately. We provide 
                      detailed aftercare instructions and are available for follow-up queries.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Follow-Up Sessions</h3>
                    <p className="text-muted-foreground">
                      Progress is typically assessed at each session. Your treatment plan 
                      may be adjusted based on response. Most patients see noticeable 
                      improvement after 2-3 sessions, with continued enhancement through 
                      the full treatment course.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            <Separator className="my-12" />

            {/* Medical Disclaimer */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-16"
            >
              <Card className="border-muted bg-muted/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-3">Important Medical Information</h3>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <p>
                          <strong className="text-foreground">Results Disclaimer:</strong> Scar 
                          reduction treatments aim to improve scar appearance, not eliminate 
                          scars completely. Results vary significantly between individuals based 
                          on scar type, age, location, genetics, and treatment response. We do 
                          not guarantee specific outcomes.
                        </p>
                        <p>
                          <strong className="text-foreground">Medical Treatment:</strong> These 
                          are medical procedures performed by qualified practitioners. All 
                          treatments carry potential risks and side effects which will be 
                          explained during consultation. You must provide accurate medical 
                          history information.
                        </p>
                        <p>
                          <strong className="text-foreground">Individual Variation:</strong> The 
                          number of sessions required, degree of improvement achievable, and 
                          treatment timeline vary between patients. Your practitioner will 
                          provide realistic expectations based on clinical assessment.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            <Separator className="my-12" />

            {/* FAQ Section */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How much does scar reduction treatment cost in London?</AccordionTrigger>
                  <AccordionContent>
                    At Cosmedocs Harley Street, scar reduction treatments start from £200 per 
                    session for scars up to 10cm. Larger scars such as C-section scars are 
                    £300 per session. Multiple sessions are typically required for optimal 
                    results, usually 3-6 sessions spaced 4-6 weeks apart.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>What treatments are available for keloid and hypertrophic scars?</AccordionTrigger>
                  <AccordionContent>
                    We offer three main injectable treatments: steroid injections (triamcinolone), 
                    5-Fluorouracil (5-FU), and botulinum toxin therapy. These can be used 
                    individually or in combination based on your practitioner&apos;s assessment of 
                    your scar type, size, location, and response to treatment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Is there a shortage of steroid injections for scar treatment in the UK?</AccordionTrigger>
                  <AccordionContent>
                    Yes, the UK is experiencing a significant shortage of Kenalog (triamcinolone) 
                    due to manufacturing facility closures in Ireland. The NHS no longer 
                    routinely supplies this medication for scar treatment. At Cosmedocs, we 
                    import pharmaceutical-grade triamcinolone from specialist suppliers to 
                    ensure continued treatment availability.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How many scar reduction sessions will I need?</AccordionTrigger>
                  <AccordionContent>
                    Most patients require 3-6 sessions spaced 4-6 weeks apart. The exact 
                    number depends on scar size, type, age, and individual response to 
                    treatment. Keloid scars often require more sessions than hypertrophic 
                    scars. Your practitioner will create a personalised treatment plan 
                    during consultation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Will scar reduction treatment completely remove my scar?</AccordionTrigger>
                  <AccordionContent>
                    Injectable scar treatments aim to significantly reduce scar appearance, 
                    not completely eliminate scars. Results vary between individuals. Most 
                    patients see noticeable improvements in scar height, colour, texture, 
                    and associated symptoms like itching or pain. No treatment can guarantee 
                    complete scar removal.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Is scar injection treatment painful?</AccordionTrigger>
                  <AccordionContent>
                    Most patients describe the sensation as mild to moderate discomfort. 
                    We can apply topical numbing cream or use ice before injection to 
                    minimise discomfort. Keloid and hypertrophic scar tissue is often 
                    less sensitive than normal skin. Any discomfort during injection 
                    is brief and subsides quickly.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>Can C-section scars be treated?</AccordionTrigger>
                  <AccordionContent>
                    Yes, C-section scars respond well to injectable treatment, particularly 
                    if they have become raised, thick, or symptomatic. We recommend waiting 
                    at least 3 months after surgery before beginning treatment to allow 
                    initial healing. C-section scar treatment is priced at £300 per session 
                    due to the larger treatment area.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>Are there any side effects from scar injections?</AccordionTrigger>
                  <AccordionContent>
                    Common temporary side effects include localised swelling, bruising, 
                    and temporary colour changes at the injection site. Steroid injections 
                    may occasionally cause skin thinning or visible blood vessels if used 
                    repeatedly. Your practitioner will discuss all potential risks and 
                    monitor for any adverse effects.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.section>

            {/* CTA Section */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-amber-500/10 border border-primary/20 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
                  <Star className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Harley Street, London</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Begin Your Scar Reduction Journey?
                </h2>
                
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Book a consultation with our experienced medical practitioners to discuss 
                  your scar and explore treatment options. No obligation, just honest advice 
                  tailored to your needs.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="group" asChild>
                    <Link to="/contact/">
                      Book Consultation
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+442037333227">
                      <Phone className="mr-2 h-4 w-4" />
                      020 3733 3227
                    </a>
                  </Button>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>From £200 per session</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Private supply guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Medical practitioners</span>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </article>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Comprehensive Scar Reduction Treatment Information for London Patients</h2>
          <p>
            Cosmedocs offers professional scar reduction treatment in London at our Harley Street 
            clinic. Our expert medical practitioners provide injectable treatments for keloid scars, 
            hypertrophic scars, surgical scars including C-section scars, and traumatic injury scars. 
            Treatment options include intralesional steroid injections using triamcinolone acetonide, 
            5-Fluorouracil (5-FU) therapy, and botulinum toxin injections. Prices start from £200 per 
            session for scars up to 10cm and £300 for larger scars such as caesarean section scars.
          </p>
          <p>
            The UK is currently experiencing a significant Kenalog shortage due to manufacturing 
            facility closures in Ireland. The NHS no longer routinely supplies triamcinolone for 
            scar treatment, leading many patients to seek private treatment options. Cosmedocs 
            maintains access to pharmaceutical-grade triamcinolone through specialist importers, 
            ensuring continued treatment availability for patients across London and the UK. Our 
            commitment to accessible pricing means we absorb increased import costs rather than 
            passing them on to patients.
          </p>
          <p>
            Keloid treatment London is one of our specialist services. Keloid scars form when the 
            body produces excessive collagen during wound healing, resulting in raised, often itchy 
            or painful tissue that extends beyond the original injury site. Steroid injections work 
            by reducing fibroblast activity, breaking down collagen bonds, and flattening raised 
            scar tissue. Most patients require 3-6 treatment sessions spaced 4-6 weeks apart for 
            optimal results.
          </p>
          <p>
            Hypertrophic scar treatment uses similar injectable modalities to keloid treatment. 
            Hypertrophic scars remain within wound boundaries but are raised and thickened. These 
            scars often respond well to steroid injections, with many patients seeing significant 
            improvement within 2-3 sessions. 5-FU and botulinum toxin may be added for resistant 
            scars or those that have not responded adequately to steroid monotherapy.
          </p>
          <p>
            C-section scar treatment London is a common request at our clinic. Caesarean section 
            scars can become raised, thick, or symptomatic, causing discomfort or aesthetic concern. 
            We recommend waiting at least 3 months after surgery before beginning injectable treatment. 
            The extended scar treatment option at £300 per session accommodates the larger treatment 
            area required for C-section scars.
          </p>
          <p>
            Botulinum toxin for scar treatment represents an innovative approach that reduces muscle 
            tension around healing wounds and directly inhibits fibroblast activity. This treatment 
            is particularly effective for scars in high-tension areas such as the forehead, jaw, 
            and chest. Botulinum toxin can also be used prophylactically in patients with keloid 
            tendency undergoing new surgery.
          </p>
          <p>
            Scar injection therapy near me searches often lead patients to our Harley Street clinic 
            in central London. We are easily accessible from across London and the UK, with the 
            clinic located at 10 Harley Street, W1G 9PF. Our experienced practitioners include 
            doctors trained in aesthetic medicine and dermatological procedures.
          </p>
          <p>
            Important disclaimer: Scar reduction treatment aims to improve scar appearance, not 
            eliminate scars completely. Results vary between individuals based on scar type, age, 
            location, genetics, and treatment response. All medical treatments carry potential risks 
            and side effects. These will be explained during consultation. We provide honest, 
            realistic expectations based on clinical assessment.
          </p>
        </div>
      </main>
    </>
  );
};

export default ScarReduction;