import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star, Clock, Shield, Users } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import LiquidGlassRelatedTreatments from "@/components/LiquidGlassRelatedTreatments";

export default function NefertitiBotoxFacelift() {
  const [isRelatedTreatmentsOpen, setIsRelatedTreatmentsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const seoData = generateSEOMetadata(
    "Nefertiti Lift - Non-Surgical Jawline & Neck Contouring | Cosmedocs",
    "Redefine your jawline with precision using the Nefertiti Lift. Non-surgical Botox treatment for sharper jawlines, improved neck contour & reduced neck bands. Book consultation.",
    "/nefertiti-botox-face-jaw-lift"
  );

  const beforeAfterImages = [
    {
      src: "/lovable-uploads/9c7fac37-e442-4d67-bb1b-f3f79c67e279.png",
      alt: "Nefertiti Lift before and after results showing improved neck contour",
      caption: "Before & After: Significant improvement in neck bands and jawline definition"
    },
    {
      src: "/lovable-uploads/e09a9811-f63b-493e-9c69-78f715481f5c.png", 
      alt: "Nefertiti Lift side profile showing enhanced jawline definition",
      caption: "Side Profile: Enhanced jawline definition and smoother neck contour"
    }
  ];

  const relatedTreatments = [
    { name: "Face Botox Areas", price: "£200-400", link: "/face-botox-areas" },
    { name: "Lower Face Botox", price: "£250-350", link: "/lower-face-botox" },
    { name: "Chin Botox", price: "£200-300", link: "/chin-botox" },
    { name: "Non-Surgical Facelift", price: "£800-1200", link: "/non-surgical-facelift" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === beforeAfterImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [beforeAfterImages.length]);

  const nextImage = () => {
    setCurrentImageIndex(currentImageIndex === beforeAfterImages.length - 1 ? 0 : currentImageIndex + 1);
  };

  const prevImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? beforeAfterImages.length - 1 : currentImageIndex - 1);
  };

  const faqs = [
    {
      question: "What is the Nefertiti Lift and how does it work?",
      answer: "The Nefertiti Lift is a non-surgical treatment using Botox injections to relax the platysma muscle in the neck. This muscle naturally pulls downward on the lower face, and by relaxing it, we allow the natural lifting muscles of the jaw to rebalance facial tension, creating a more defined jawline and smoother neck contour."
    },
    {
      question: "How long do Nefertiti Lift results last?",
      answer: "Results typically last 3-4 months, similar to other Botox treatments. The longevity can vary based on individual factors such as muscle strength, metabolism, and lifestyle. Regular maintenance treatments can help maintain optimal results."
    },
    {
      question: "Is the Nefertiti Lift painful?",
      answer: "The treatment involves minimal discomfort. Most patients describe it as small pinpricks. A topical numbing cream can be applied before treatment to enhance comfort. The entire procedure typically takes 15-20 minutes."
    },
    {
      question: "What areas does the Nefertiti Lift target?",
      answer: "The Nefertiti Lift specifically targets the platysma muscle bands in the neck, the jawline area, and the transition zone between the face and neck. This creates a lifting effect that defines the jawline and smooths neck bands."
    },
    {
      question: "When will I see results from the Nefertiti Lift?",
      answer: "Initial results can be seen within 3-5 days, with full results visible after 2 weeks. The gradual onset allows for natural-looking enhancement of your jawline and neck contour."
    },
    {
      question: "Who is a good candidate for the Nefertiti Lift?",
      answer: "Ideal candidates are those with mild to moderate neck bands, loss of jawline definition, or early signs of neck aging. A consultation will determine if this treatment is suitable for your specific concerns and aesthetic goals."
    },
    {
      question: "Are there any side effects?",
      answer: "Side effects are typically minimal and may include temporary redness, slight swelling, or mild bruising at injection sites. These usually resolve within 24-48 hours. Serious complications are rare when performed by qualified practitioners."
    },
    {
      question: "How much does the Nefertiti Lift cost?",
      answer: "Treatment typically ranges from £300-500 depending on the number of units required and individual needs. A detailed quote will be provided during your consultation based on your specific treatment plan."
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 text-sm font-medium">
                Non-Surgical Jawline Enhancement
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                Nefertiti Lift
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Redefine Your Jawline with Precision
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
                The Nefertiti Lift is a modern, non-surgical technique that subtly lifts and redefines the jawline and neck using targeted Botox injections. Inspired by Queen Nefertiti's legendary profile, this treatment restores elegance and confidence—without surgery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setIsRelatedTreatmentsOpen(true)}
                >
                  View Related Treatments
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Cards */}
        <section className="py-16 bg-background/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Treatment Time</h3>
                  <p className="text-muted-foreground text-sm">15-20 minutes</p>
                </CardContent>
              </Card>
              <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Downtime</h3>
                  <p className="text-muted-foreground text-sm">None required</p>
                </CardContent>
              </Card>
              <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <Star className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Results</h3>
                  <p className="text-muted-foreground text-sm">3-5 days onset</p>
                </CardContent>
              </Card>
              <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Duration</h3>
                  <p className="text-muted-foreground text-sm">3-4 months</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How the Nefertiti Lift Works</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  By relaxing the platysma muscle—a thin sheet of muscle that pulls downward on the lower face—we allow the natural lifting muscles of the jaw to rebalance facial tension. This creates a smoother, more youthful silhouette from the jaw to the collarbone.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-foreground">Benefits of the Nefertiti Lift:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                        <span>Sharper, more defined jawline</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                        <span>Improved neck contour</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                        <span>Reduction in neck bands and sagging</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                        <span>Subtle lift with no downtime</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-foreground">Treatment Process:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Badge variant="outline" className="text-xs">1</Badge>
                        <p className="text-sm">Comprehensive consultation and facial assessment</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Badge variant="outline" className="text-xs">2</Badge>
                        <p className="text-sm">Precise mapping of injection points</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Badge variant="outline" className="text-xs">3</Badge>
                        <p className="text-sm">Strategic Botox placement along neck muscles</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Badge variant="outline" className="text-xs">4</Badge>
                        <p className="text-sm">Immediate return to daily activities</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  At Cosmedocs, our aesthetic philosophy is invisible art—transformation that speaks without saying a word. The Nefertiti Lift embodies this principle perfectly, delivering natural-looking enhancement that defines your features while maintaining the authentic you. Bold yet natural, always your way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-16 bg-background/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Before & After Results</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-primary/20">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={beforeAfterImages[currentImageIndex].src}
                        alt={beforeAfterImages[currentImageIndex].alt}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                    </div>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/90 px-4 py-2 rounded-full">
                      <p className="text-sm text-center">{beforeAfterImages[currentImageIndex].caption}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex justify-center gap-2 mt-6">
                {beforeAfterImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-primary' : 'bg-primary/30'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Treatment Investment</h2>
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Nefertiti Lift</h3>
                    <div className="text-4xl font-bold text-primary mb-4">£300-500</div>
                    <p className="text-muted-foreground mb-6">
                      Complete jawline and neck contouring treatment
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 mb-8">
                      <li>• Comprehensive consultation included</li>
                      <li>• Precise Botox placement</li>
                      <li>• 3-4 months duration</li>
                      <li>• No downtime required</li>
                    </ul>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Book Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
                    <Accordion key={index} type="single" collapsible>
                      <AccordionItem value={`item-${index}`} className="border-primary/20">
                        <AccordionTrigger className="text-left hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
                <div className="space-y-4">
                  {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
                    <Accordion key={index + Math.ceil(faqs.length / 2)} type="single" collapsible>
                      <AccordionItem value={`item-${index + Math.ceil(faqs.length / 2)}`} className="border-primary/20">
                        <AccordionTrigger className="text-left hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Redefine Your Jawline?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience the elegance of Queen Nefertiti with our precision Botox technique. 
                Book your consultation today and discover how the Nefertiti Lift can enhance your natural beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book Free Consultation
                </Button>
                <Button variant="outline" size="lg">
                  Call 020 7234 5678
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h3>Nefertiti Lift London - Advanced Jawline Contouring</h3>
          <p>
            The Nefertiti Lift at Cosmedocs London combines advanced Botox techniques with artistic precision to create stunning jawline definition. 
            Our experienced practitioners use strategic platysma muscle relaxation to achieve natural-looking neck lift results without surgery. 
            Book your Nefertiti Lift consultation in London today for expert jawline enhancement and neck contouring.
          </p>
        </div>
      </div>

      <LiquidGlassRelatedTreatments
        isOpen={isRelatedTreatmentsOpen}
        onClose={() => setIsRelatedTreatmentsOpen(false)}
        treatments={relatedTreatments}
      />
    </>
  );
}