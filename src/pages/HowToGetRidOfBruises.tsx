import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, CheckCircle2, Award, Shield, Calendar as CalendarIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HowToGetRidOfBruises = () => {
  const seoData = generateSEOMetadata(
    "How to Get Rid of Bruises Quickly: Expert Medical Guide | Cosmedocs",
    "Discover expert-approved methods to heal bruises faster. Learn about medical treatments, natural remedies, and prevention strategies from aesthetic medicine specialists.",
    "/blog/how-to-get-rid-of-bruises-quickly"
  );

  const publishDate = "2025-01-20";
  const lastModified = "2025-01-20";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take for a bruise to heal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most bruises heal within 2-3 weeks. The healing time depends on the severity of the bruise, location on the body, and individual healing factors. Bruises typically change colour from red/purple to yellow/green as they heal."
        }
      },
      {
        "@type": "Question",
        "name": "What is the fastest way to get rid of a bruise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The fastest methods include applying ice immediately after injury (first 24-48 hours), keeping the area elevated, using arnica gel or cream, and gentle compression. After 48 hours, applying warm compresses can help speed healing by increasing blood flow."
        }
      },
      {
        "@type": "Question",
        "name": "Can vitamin K cream help bruises heal faster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, topical vitamin K cream may help reduce bruising and speed healing. Vitamin K plays a role in blood clotting and may help the body reabsorb the blood that has pooled under the skin."
        }
      },
      {
        "@type": "Question",
        "name": "When should I see a doctor about a bruise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "See a doctor if: the bruise doesn't improve after 2 weeks, you experience severe pain or swelling, you bruise very easily without known cause, or if you have large bruises that appear without injury. These could indicate underlying medical conditions."
        }
      },
      {
        "@type": "Question",
        "name": "How can I prevent bruising after aesthetic treatments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avoid blood-thinning medications and supplements (aspirin, ibuprofen, fish oil, vitamin E) for 7-10 days before treatment, stay well-hydrated, avoid alcohol before and after treatment, and use arnica tablets or cream as directed by your practitioner."
        }
      }
    ]
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Get Rid of Bruises Quickly: Expert Medical Guide",
    "description": "Discover expert-approved methods to heal bruises faster. Learn about medical treatments, natural remedies, and prevention strategies from aesthetic medicine specialists.",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=630&fit=crop",
    "datePublished": publishDate,
    "dateModified": lastModified,
    "author": {
      "@type": "Organization",
      "name": "Cosmedocs",
      "url": "https://www.cosmedocs.co.uk"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cosmedocs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.cosmedocs.co.uk/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.cosmedocs.co.uk/blog/how-to-get-rid-of-bruises-quickly"
    }
  };

  const relatedPosts = [
    {
      title: "Aesthetic Treatments Made Easy",
      slug: "/aesthetic-treatments-made-easy",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
    },
    {
      title: "Inside the Mind of an Aesthetic Doctor",
      slug: "/inside-mind-aesthetic-doctor-blog",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    },
    {
      title: "Lazy Skin Syndrome: The Hidden Cost",
      slug: "/cosmetalk/lazy-skin-syndrome",
      image: "/src/assets/dehydrated-fingers.jpg"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="how to get rid of bruises, bruise healing, bruise treatment, fast bruise healing, aesthetic bruising, post-treatment bruising, arnica for bruises" />
        <link rel="canonical" href={seoData.canonical} />
        
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=630&fit=crop" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=630&fit=crop" />
        
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(blogPostingSchema)}
        </script>
      </Helmet>

      <article className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
                  <span className="text-sm font-medium text-primary">Medical Guide</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  How to Get Rid of Bruises Quickly
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Expert-approved methods to heal bruises faster with medical treatments, natural remedies, and prevention strategies
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={publishDate}>January 20, 2025</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>8 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Edited by Dr. Ahmed Haq, Dr. Hena Haq</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="container mx-auto px-4 -mt-8 mb-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video"
            >
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=675&fit=crop"
                alt="Medical guide to treating and healing bruises quickly"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  [PLACEHOLDER: Add your original introduction content here. This section should explain what bruises are, why they occur, and what readers will learn from this comprehensive guide.]
                </p>
              </div>

              {/* Section 1 */}
              <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
                Understanding Bruises: What Happens Under Your Skin
              </h2>
              
              <p className="mb-6 text-muted-foreground leading-relaxed">
                [PLACEHOLDER: Add your original content explaining the biology of bruising, how blood vessels break, and the healing stages. Include information about colour changes from purple to yellow/green.]
              </p>

              {/* Subtle CTA Section - After First Major Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="my-12 p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    Concerned About Bruising After Treatments?
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Our expert aesthetic doctors use advanced techniques to minimise bruising and provide comprehensive aftercare guidance.
                  </p>
                  <Button asChild size="lg" className="gap-2">
                    <Link to="/contact">
                      <CalendarIcon className="h-4 w-4" />
                      Book a Consultation
                    </Link>
                  </Button>
                </div>
              </motion.div>

              {/* Section 2 */}
              <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
                Immediate Steps: First 24-48 Hours
              </h2>
              
              <p className="mb-6 text-muted-foreground leading-relaxed">
                [PLACEHOLDER: Add your original content about immediate treatment steps - ice application, elevation, compression, etc.]
              </p>

              {/* Section 3 */}
              <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Medical Treatments That Accelerate Healing
              </h3>
              
              <p className="mb-6 text-muted-foreground leading-relaxed">
                [PLACEHOLDER: Add your original content about medical treatments like vitamin K cream, arnica, bromelain supplements, etc.]
              </p>

              {/* Trust Elements Strip */}
              <div className="my-12 grid md:grid-cols-3 gap-6">
                <Card className="text-center p-6 border-primary/20">
                  <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Expert Practitioners</h4>
                  <p className="text-sm text-muted-foreground">GMC-registered doctors with 15+ years experience</p>
                </Card>
                <Card className="text-center p-6 border-primary/20">
                  <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Advanced Techniques</h4>
                  <p className="text-sm text-muted-foreground">Minimally invasive methods to reduce bruising</p>
                </Card>
                <Card className="text-center p-6 border-primary/20">
                  <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Comprehensive Care</h4>
                  <p className="text-sm text-muted-foreground">Full aftercare support and guidance</p>
                </Card>
              </div>

              {/* Section 4 */}
              <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Natural Remedies and Home Treatments
              </h3>
              
              <p className="mb-6 text-muted-foreground leading-relaxed">
                [PLACEHOLDER: Add your original content about natural remedies, when to apply heat vs. cold, massage techniques, etc.]
              </p>

              {/* Section 5 */}
              <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
                Preventing Bruises: Before and After Aesthetic Treatments
              </h2>
              
              <p className="mb-6 text-muted-foreground leading-relaxed">
                [PLACEHOLDER: Add your original content about prevention strategies, especially relevant for patients undergoing aesthetic procedures.]
              </p>

              {/* Embedded Booking Calendar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="my-16 p-8 bg-muted/30 rounded-2xl"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Book Your Consultation Today
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Speak with our expert team about minimising bruising and ensuring optimal results from your aesthetic treatments.
                  </p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <iframe
                    src="https://med.as.me/harleystreet"
                    title="Book Consultation"
                    className="w-full h-[600px] rounded-lg border-0"
                  />
                </div>
              </motion.div>

              {/* Section 6 */}
              <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                When to Seek Medical Attention
              </h3>
              
              <p className="mb-6 text-muted-foreground leading-relaxed">
                [PLACEHOLDER: Add your original content about warning signs that require medical attention.]
              </p>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-background rounded-lg px-6 border">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    How long does it take for a bruise to heal?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Most bruises heal within 2-3 weeks. The healing time depends on the severity of the bruise, location on the body, and individual healing factors. Bruises typically change colour from red/purple to yellow/green as they heal.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-background rounded-lg px-6 border">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    What is the fastest way to get rid of a bruise?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The fastest methods include applying ice immediately after injury (first 24-48 hours), keeping the area elevated, using arnica gel or cream, and gentle compression. After 48 hours, applying warm compresses can help speed healing by increasing blood flow.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-background rounded-lg px-6 border">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Can vitamin K cream help bruises heal faster?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, topical vitamin K cream may help reduce bruising and speed healing. Vitamin K plays a role in blood clotting and may help the body reabsorb the blood that has pooled under the skin.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-background rounded-lg px-6 border">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    When should I see a doctor about a bruise?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    See a doctor if: the bruise doesn't improve after 2 weeks, you experience severe pain or swelling, you bruise very easily without known cause, or if you have large bruises that appear without injury. These could indicate underlying medical conditions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-background rounded-lg px-6 border">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    How can I prevent bruising after aesthetic treatments?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Avoid blood-thinning medications and supplements (aspirin, ibuprofen, fish oil, vitamin E) for 7-10 days before treatment, stay well-hydrated, avoid alcohol before and after treatment, and use arnica tablets or cream as directed by your practitioner.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Related Articles
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((post, idx) => (
                  <Link
                    key={idx}
                    to={post.slug}
                    className="group"
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default HowToGetRidOfBruises;
