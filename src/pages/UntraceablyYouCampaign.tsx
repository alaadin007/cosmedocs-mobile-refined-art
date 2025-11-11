import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { generateSEOMetadata } from "@/utils/seo";
import { Link } from "react-router-dom";
import { Download, CheckCircle2 } from "lucide-react";
import campaignImage1 from "@/assets/campaign-before-after-1.jpeg";
import campaignImage2 from "@/assets/campaign-before-after-2.jpeg";

export default function UntraceablyYouCampaign() {
  const seoData = generateSEOMetadata(
    "Untraceably You Campaign - Look 5-10 Years Younger Naturally | Cosmedocs",
    "Turn back time so subtly, not even your closest will notice. Exclusive Cosmedocs campaign: guaranteed natural results, 5-10 years younger without anyone knowing. Harley Street expertise.",
    "/untraceably-you"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Untraceably You - The Natural Anti-Aging Revolution",
    "image": [campaignImage1, campaignImage2],
    "datePublished": "2025-01-11",
    "author": {
      "@type": "Organization",
      "name": "Cosmedocs"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cosmedocs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.cosmedocs.co.uk/logo.png"
      }
    }
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
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-24 pb-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-medium text-primary">Limited Campaign Launch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Untraceably You
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Look 5–10 years younger — naturally.
            </p>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Turn back time so subtly, not even your closest will notice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/book">Book Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/ads">
                  <Download className="w-5 h-5 mr-2" />
                  Download Campaign Flyer
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Before/After Images */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={campaignImage1} 
                alt="Natural facial rejuvenation before and after - Untraceably You treatment"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm">Natural volume restoration & skin texture improvement</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={campaignImage2} 
                alt="Subtle anti-aging results - Untraceably You before and after"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm">Wrinkle softening & natural facial rejuvenation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Message */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">We don't change faces.<br />We refine them.</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your signature aesthetic — clean, natural, Harley Street credibility.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Guarantee</h3>
              <p className="text-lg text-foreground/90 leading-relaxed">
                You'll look 5 to 10 years younger without anyone knowing you've had work done. 
                Not your friends. Not your parents. Just compliments — no questions.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Campaign Pricing</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-2xl p-8 shadow-xl">
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold">5 Years Younger</h3>
                  <div className="text-5xl font-bold text-primary">£500</div>
                  <p className="text-muted-foreground">Comprehensive rejuvenation package</p>
                </div>
                <ul className="space-y-3 mt-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span>Skin texture improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span>Uneven tone correction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span>Pore refinement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span>Mild wrinkle softening</span>
                  </li>
                </ul>
                <Button className="w-full mt-8" size="lg" asChild>
                  <Link to="/book">Book Consultation</Link>
                </Button>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-2xl p-8 shadow-xl relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold">10 Years Younger</h3>
                  <div className="text-5xl font-bold text-primary">£1,000</div>
                  <p className="text-muted-foreground">Complete transformation package</p>
                </div>
                <ul className="space-y-3 mt-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span>All 5-year package benefits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span>Volume replacement therapy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span>Advanced wrinkle treatment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span>Facial contouring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span>Bespoke treatment plan</span>
                  </li>
                </ul>
                <Button className="w-full mt-8" size="lg" asChild>
                  <Link to="/book">Book Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* MedSpa Membership */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-secondary/20 to-accent/20 border border-border rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MedSpa Membership</h2>
            <div className="text-5xl md:text-6xl font-bold text-primary mb-4">£25/month</div>
            <p className="text-xl text-muted-foreground mb-8">
              Get 50% OFF all treatments including laser, peels, microneedling, and boosters
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/book">Join MedSpa Programme</Link>
            </Button>
          </div>
        </section>

        {/* Harley Street Trust */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Harley Street Expertise</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Scientifically refined injectables & skin therapies delivered by experienced cosmetic doctors. 
              Bespoke rejuvenation plans designed specifically for your age and skin type, with guaranteed 
              results you'll see but no one else will notice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button variant="outline" size="lg" asChild>
                <Link to="/ads">
                  <Download className="w-5 h-5 mr-2" />
                  Download Campaign Details
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Natural Anti-Aging Treatments at Cosmedocs</h2>
          <p>
            The Untraceably You campaign represents Cosmedocs' commitment to natural, subtle aesthetic 
            enhancements that turn back time without anyone noticing. Our Harley Street clinic specialises 
            in invisible art aesthetics - bold, natural results that are always your way. With packages 
            starting at £500 for 5 years younger appearance and £1,000 for 10 years younger results, 
            our expert cosmetic doctors provide bespoke rejuvenation plans tailored to your unique facial 
            structure and skin concerns. Treatments include wrinkle softening, volume replacement, skin 
            texture improvement, tone correction, and pore refinement using scientifically proven injectables 
            and advanced skin therapies. Join our MedSpa membership for just £25/month and receive 50% off 
            all treatments including laser therapy, chemical peels, microneedling, and skin boosters. 
            Experience the Cosmedocs difference where transformation speaks without saying a word.
          </p>
        </div>
      </div>
    </>
  );
}
