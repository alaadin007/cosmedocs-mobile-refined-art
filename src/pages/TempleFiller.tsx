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

  const beforeAfterImages = {
    before: [
      {
        src: "/lovable-uploads/6ed7822c-5e7e-4482-a672-0c24c0861794.png",
        alt: "Temple volume loss before dermal filler treatment - side profile view showing hollowed temple area",
        caption: "Before Treatment: Visible temple volume loss creating a sunken, aged appearance"
      },
      {
        src: "/lovable-uploads/19872114-4efb-4e4a-b4be-bfbf424fbe20.png", 
        alt: "Temple hollowing before treatment - frontal view showing bilateral temple depression",
        caption: "Before Treatment: Frontal view highlighting bilateral temple depression and volume loss"
      },
      {
        src: "/lovable-uploads/d84c901e-c124-44be-961a-345eb5133271.png",
        alt: "Temple area before filler injection showing natural aging process and volume depletion",
        caption: "Before Treatment: Close-up view of temple area showing natural aging and volume depletion"
      }
    ],
    during: {
      src: "/lovable-uploads/3b70fd8c-c9b5-4e7c-bc2e-3b7d12779116.png",
      alt: "Professional temple filler injection procedure being performed by qualified aesthetic practitioner",
      caption: "During Treatment: Precision temple filler injection using advanced techniques and premium dermal fillers"
    },
    after: [
      {
        src: "/lovable-uploads/987195e3-5c3c-4605-9160-0f4c4f8631de.png",
        alt: "Temple filler results immediately after treatment showing restored volume and improved facial harmony",
        caption: "After Treatment: Immediate results showing restored temple volume and improved facial balance"
      },
      {
        src: "/lovable-uploads/2549c031-c4e5-4be1-a708-694953067baf.png",
        alt: "Temple filler before and after comparison - side profile showing dramatic volume restoration",
        caption: "After Treatment: Side profile view demonstrating significant temple volume restoration and youthful contours"
      },
      {
        src: "/lovable-uploads/48325025-1ed1-494c-9fb0-ecbb3e5d3195.png",
        alt: "Final temple filler results showing natural-looking enhancement and facial rejuvenation",
        caption: "After Treatment: Final results showcasing natural-looking temple enhancement and overall facial rejuvenation"
      }
    ]
  };

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

        {/* Before & During & After Gallery Section */}
        <section className="py-20 bg-secondary/10">
          <div className="page-container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-6">Temple Filler Treatment Journey</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Witness the complete transformation process from initial consultation through to final results. 
                This comprehensive case study showcases the precision and artistry of professional temple filler treatment.
              </p>
            </div>
            
            {/* Before Images */}
            <div className="mb-16">
              <h3 className="text-3xl font-light text-center mb-8">Before Treatment</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {beforeAfterImages.before.map((image, index) => (
                  <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold mb-2 text-lg">Before Assessment #{index + 1}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{image.caption}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-xs bg-secondary/20 px-2 py-1 rounded">Temple Volume Loss</span>
                        <span className="text-xs bg-secondary/20 px-2 py-1 rounded">Facial Aging</span>
                        <span className="text-xs bg-secondary/20 px-2 py-1 rounded">Before Photos</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* During Treatment */}
            <div className="mb-16">
              <h3 className="text-3xl font-light text-center mb-8">During Treatment</h3>
              <div className="max-w-2xl mx-auto">
                <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={beforeAfterImages.during.src}
                      alt={beforeAfterImages.during.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold mb-2 text-xl">Professional Treatment Process</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">{beforeAfterImages.during.caption}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-primary/20 px-2 py-1 rounded">Professional Injection</span>
                      <span className="text-xs bg-primary/20 px-2 py-1 rounded">Medical Grade Fillers</span>
                      <span className="text-xs bg-primary/20 px-2 py-1 rounded">Expert Technique</span>
                      <span className="text-xs bg-primary/20 px-2 py-1 rounded">Safe Procedure</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After Results */}
            <div className="mb-8">
              <h3 className="text-3xl font-light text-center mb-8">After Treatment Results</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {beforeAfterImages.after.map((image, index) => (
                  <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold mb-2 text-lg">Result View #{index + 1}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{image.caption}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-xs bg-green-500/20 px-2 py-1 rounded">Volume Restored</span>
                        <span className="text-xs bg-green-500/20 px-2 py-1 rounded">Natural Results</span>
                        <span className="text-xs bg-green-500/20 px-2 py-1 rounded">After Photos</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment Summary */}
            <div className="bg-card rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-light mb-6 text-center">Treatment Summary & Results</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Treatment Details</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Treatment:</strong> Temple Dermal Filler Enhancement</li>
                    <li>• <strong>Product Used:</strong> Premium Hyaluronic Acid Filler</li>
                    <li>• <strong>Technique:</strong> Multi-point Precision Injection</li>
                    <li>• <strong>Duration:</strong> 45 minutes including consultation</li>
                    <li>• <strong>Anaesthetic:</strong> Topical numbing applied</li>
                    <li>• <strong>Recovery:</strong> Minimal downtime, immediate return to activities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Results Achieved</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Significant temple volume restoration</li>
                    <li>• Enhanced facial symmetry and proportion</li>
                    <li>• Reduced appearance of temple hollowing</li>
                    <li>• More youthful, refreshed facial contours</li>
                    <li>• Natural-looking enhancement</li>
                    <li>• Improved overall facial harmony</li>
                  </ul>
                </div>
              </div>
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

        {/* Enhanced SEO Content with Image References */}
        <div className="sr-only">
          <h2>Temple Filler London - Expert Aesthetic Treatment with Real Results</h2>
          <p>
            Temple dermal fillers have become increasingly popular in London's aesthetic medicine scene, offering 
            a non-surgical solution for age-related volume loss in the temporal region. Our featured case study 
            demonstrates the remarkable transformation possible with professional temple filler treatment, showing 
            before, during, and after images that highlight the expertise and artistry involved in this sophisticated procedure.
          </p>
          <p>
            The before treatment images clearly show the common signs of temple volume loss - hollowed areas, 
            sunken appearance, and loss of youthful facial contours. During the treatment phase, our qualified 
            aesthetic practitioners use advanced injection techniques with medical-grade hyaluronic acid fillers 
            to precisely restore volume. The after treatment results showcase significant improvement in facial 
            harmony, restored temple volume, and a more youthful, refreshed appearance.
          </p>
          <p>
            This comprehensive temple filler case study represents typical results achievable at our London clinic, 
            where we specialize in natural-looking enhancements using only premium dermal filler products. The 
            treatment process involves strategic placement of fillers to address volume loss while maintaining 
            facial expression and natural movement, ensuring results that enhance rather than alter the patient's 
            natural beauty.
          </p>
          <p>
            Temple filler before and after photography demonstrates the effectiveness of this treatment for addressing 
            age-related changes in the temporal region. Our London patients consistently achieve excellent results 
            through our combination of expert technique, premium products, and personalized treatment planning. 
            The transformation shown in these images represents the gold standard of temple filler treatment available 
            in London's aesthetic medicine landscape.
          </p>
          
          {/* Additional SEO metadata for images */}
          <div itemScope itemType="https://schema.org/ImageGallery">
            <h3 itemProp="name">Temple Filler Before During After Image Gallery</h3>
            <p itemProp="description">Comprehensive visual documentation of temple filler treatment process showing before, during treatment, and after results</p>
            
            {/* Before images metadata */}
            {beforeAfterImages.before.map((image, index) => (
              <div key={index} itemScope itemType="https://schema.org/ImageObject">
                <img src={image.src} alt={image.alt} itemProp="contentUrl" className="hidden" />
                <span itemProp="caption">{image.caption}</span>
                <span itemProp="description">Temple filler before treatment documentation showing volume loss and aging concerns</span>
              </div>
            ))}
            
            {/* During treatment metadata */}
            <div itemScope itemType="https://schema.org/ImageObject">
              <img src={beforeAfterImages.during.src} alt={beforeAfterImages.during.alt} itemProp="contentUrl" className="hidden" />
              <span itemProp="caption">{beforeAfterImages.during.caption}</span>
              <span itemProp="description">Professional temple filler injection procedure documentation</span>
            </div>
            
            {/* After images metadata */}
            {beforeAfterImages.after.map((image, index) => (
              <div key={index} itemScope itemType="https://schema.org/ImageObject">
                <img src={image.src} alt={image.alt} itemProp="contentUrl" className="hidden" />
                <span itemProp="caption">{image.caption}</span>
                <span itemProp="description">Temple filler after treatment results showing volume restoration and facial enhancement</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TempleFiller;