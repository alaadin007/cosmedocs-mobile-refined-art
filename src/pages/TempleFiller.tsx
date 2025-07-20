import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { ArrowRight, Star, CheckCircle, Clock, Heart, Shield, Award, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TempleFiller = () => {
  const seoData = generateSEOMetadata(
    "Temple Filler London | Premium Dermal Filler Treatment | Cosmedocs",
    "Expert temple filler treatments in London. Restore volume, enhance facial symmetry & achieve natural-looking results. Book your consultation with Cosmedocs today.",
    "/temple-filler-london",
    "/lovable-uploads/3bbc1c04-e87d-4253-811d-e71dfa550186.png"
  );

  const beforeAfterImages = [
    // Placeholder for individual before/after images - to be added later
    {
      before: "/placeholder-before.jpg",
      after: "/placeholder-after.jpg",
      alt: "Temple filler before and after results",
      treatment: "Temple volume restoration"
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
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Temple Filler Treatment",
            "description": "Professional temple dermal filler treatment to restore volume and enhance facial symmetry",
            "provider": {
              "@type": "MedicalOrganization",
              "name": "Cosmedocs",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressCountry": "UK"
              }
            },
            "procedureType": "Cosmetic Procedure",
            "bodyLocation": "Temple",
            "preparation": "Consultation required before treatment"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/3bbc1c04-e87d-4253-811d-e71dfa550186.png')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 text-center text-white page-container">
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              Temple Filler
              <span className="block text-3xl md:text-4xl font-normal mt-2">London</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Our aesthetics is invisible art. Restore temple volume with precision and artistry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                View Results
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-secondary/10">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-light mb-8">Temple Filler Treatment in London</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Temple filler represents one of the most sophisticated approaches to facial rejuvenation available in London today. 
                This advanced treatment addresses age-related volume loss in the temporal region, restoring youthful contours and 
                enhancing overall facial harmony through precise dermal filler placement.
              </p>
            </div>
          </div>
        </section>

        {/* Treatment Overview */}
        <section className="py-20">
          <div className="page-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-light mb-6">Understanding Temple Volume Loss</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The temporal region is one of the first areas to show signs of aging, with volume loss typically beginning 
                  in the late twenties. As we age, the natural fat pads in our temples diminish, creating a hollowed appearance 
                  that can make the face appear gaunt, tired, or older than our chronological age.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Temple filler treatment has emerged as the gold standard for addressing this concern in London's aesthetic 
                  medicine landscape. Using premium hyaluronic acid-based dermal fillers, we can restore lost volume, 
                  improve facial proportions, and create a more youthful, refreshed appearance that looks entirely natural.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <Award className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium">Award-winning aesthetic practitioners</span>
                </div>
              </div>
              <div className="space-y-6">
                {[
                  { icon: CheckCircle, title: "Volume Restoration", desc: "Replenish lost temple volume for youthful contours" },
                  { icon: Star, title: "Enhanced Symmetry", desc: "Improve facial balance and proportion" },
                  { icon: Heart, title: "Natural Results", desc: "Subtle enhancement that looks completely natural" },
                  { icon: Shield, title: "Safe & Effective", desc: "Proven techniques with excellent safety profile" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <item.icon className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-20 bg-secondary/10">
          <div className="page-container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-6">The Temple Filler Process</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our temple filler treatment follows a meticulous process designed to ensure optimal results and patient safety. 
                Each step is carefully planned and executed by our experienced aesthetic practitioners.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Comprehensive Consultation",
                  description: "Detailed assessment of facial anatomy, medical history, and aesthetic goals. We use advanced imaging to plan your treatment and discuss realistic expectations."
                },
                {
                  step: "02", 
                  title: "Precision Treatment",
                  description: "Using premium dermal fillers and advanced injection techniques, we carefully restore temple volume. The procedure typically takes 30-45 minutes with minimal discomfort."
                },
                {
                  step: "03",
                  title: "Aftercare & Follow-up",
                  description: "Comprehensive aftercare instructions and follow-up appointments to monitor results. We're available for any questions throughout your healing journey."
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl font-light text-primary mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Results */}
        <section className="py-20">
          <div className="page-container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-light mb-8">Benefits of Temple Filler Treatment</h2>
                <div className="space-y-6">
                  {[
                    "Immediate volume restoration with instant results",
                    "Enhanced facial symmetry and proportion",
                    "Reduction in hollow, sunken temple appearance", 
                    "Improved overall facial harmony",
                    "Minimal downtime with quick recovery",
                    "Long-lasting results (12-18 months)",
                    "Boost in confidence and self-esteem",
                    "Non-surgical alternative to temple implants"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-light mb-8">What to Expect</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Treatment Duration</h3>
                      <p className="text-muted-foreground text-sm">30-45 minutes including consultation and preparation time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Heart className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Comfort Level</h3>
                      <p className="text-muted-foreground text-sm">Minimal discomfort with topical anaesthetic applied before treatment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Star className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Results Timeline</h3>
                      <p className="text-muted-foreground text-sm">Immediate improvement with optimal results visible within 2 weeks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery Section */}
        <section className="py-20 bg-secondary/10">
          <div className="page-container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-6">Temple Filler Results</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                View our collection of temple filler before and after images showcasing the transformative 
                results achieved through our expert treatment approach.
              </p>
            </div>
            
            {/* Individual Before/After Images - Space reserved for future additions */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beforeAfterImages.map((image, index) => (
                <div key={index} className="bg-card rounded-lg overflow-hidden">
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Before & After Image {index + 1}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{image.treatment}</h3>
                    <p className="text-sm text-muted-foreground">Professional temple filler results</p>
                  </div>
                </div>
              ))}
              
              {/* Placeholder for additional before/after images */}
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="bg-card rounded-lg overflow-hidden border-2 border-dashed border-muted">
                  <div className="aspect-square bg-muted/50 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Before & After #{index + 2}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Temple Enhancement</h3>
                    <p className="text-sm text-muted-foreground">Results coming soon</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Cosmedocs */}
        <section className="py-20">
          <div className="page-container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-6">Why Choose Cosmedocs for Temple Fillers</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Bold • Natural • Always Your Way. Our commitment to excellence in aesthetic medicine 
                makes us London's premier destination for temple filler treatments.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Expert Practitioners",
                  description: "Highly trained aesthetic doctors with years of temple filler experience"
                },
                {
                  icon: Shield,
                  title: "Safety First",
                  description: "Stringent safety protocols and premium medical-grade products only"
                },
                {
                  icon: Star,
                  title: "Natural Results",
                  description: "Subtle enhancement that preserves your unique facial characteristics"
                },
                {
                  icon: MapPin,
                  title: "London Location",
                  description: "Convenient central London clinic with excellent transport links"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary/10">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-light text-center mb-16">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {[
                  {
                    question: "How long do temple filler results last?",
                    answer: "Temple filler results typically last 12-18 months, depending on individual factors such as metabolism, lifestyle, and the type of filler used. Regular maintenance treatments help preserve optimal results."
                  },
                  {
                    question: "Is temple filler treatment painful?",
                    answer: "Most patients experience minimal discomfort during temple filler treatment. We apply topical anaesthetic before the procedure, and modern fillers contain lidocaine for additional comfort during injection."
                  },
                  {
                    question: "What is the recovery time for temple fillers?",
                    answer: "Recovery is minimal with temple fillers. You may experience mild swelling or bruising for 24-48 hours. Most patients return to normal activities immediately after treatment."
                  },
                  {
                    question: "Are there any side effects with temple fillers?",
                    answer: "Side effects are rare and typically mild, including temporary swelling, bruising, or redness at injection sites. Serious complications are extremely rare when performed by qualified practitioners."
                  },
                  {
                    question: "How much does temple filler cost in London?",
                    answer: "Temple filler costs vary depending on the amount of product needed and treatment complexity. We provide detailed pricing during your consultation based on your specific requirements."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-border pb-6">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="page-container text-center">
            <h2 className="text-4xl font-light mb-6">Ready to Restore Your Temple Volume?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your appearance with expert temple filler treatment in London. 
              Book your consultation today and discover the difference professional aesthetic medicine can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Call Us Today
              </Button>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Temple Filler London - Expert Aesthetic Treatment</h2>
          <p>
            Temple dermal fillers have become increasingly popular in London's aesthetic medicine scene, offering 
            a non-surgical solution for age-related volume loss in the temporal region. As one of the most 
            sophisticated facial rejuvenation treatments available, temple fillers address the hollowing that 
            occurs naturally with aging, restoring youthful contours and improving overall facial harmony.
          </p>
          <p>
            The procedure involves strategic placement of premium hyaluronic acid-based dermal fillers into 
            the temple area, replenishing lost volume and creating more balanced facial proportions. London 
            patients increasingly choose temple fillers for their ability to deliver natural-looking results 
            with minimal downtime, making it an ideal treatment for busy professionals seeking aesthetic 
            enhancement without surgical intervention.
          </p>
          <p>
            Our London clinic specializes in advanced temple filler techniques, utilizing only medical-grade 
            products and following stringent safety protocols. The treatment process begins with a comprehensive 
            consultation to assess facial anatomy and discuss aesthetic goals, followed by precise injection 
            techniques that ensure optimal results while maintaining facial expression and natural movement.
          </p>
          <p>
            Temple filler benefits extend beyond simple volume restoration, contributing to improved facial 
            symmetry, enhanced cheekbone definition, and a more youthful overall appearance. The treatment 
            is particularly effective for addressing the gaunt, tired look that can develop with age, helping 
            patients achieve a refreshed, revitalized appearance that looks completely natural.
          </p>
        </div>
      </div>
    </>
  );
};

export default TempleFiller;