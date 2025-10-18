import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Eye, Droplets, Sun, Zap, Microscope, Shield, Sparkles, Activity, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const FlawlessSkin = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Flawless Skin Naturally | Anti-Ageing Tips | Cosmedocs</title>
        <meta name="description" content="Discover expert-backed skincare strategies to reverse ageing, reduce pigmentation, shrink pores, and achieve flawless, hydrated, even-toned skin—naturally." />
        <meta name="keywords" content="how to get flawless skin, reverse skin ageing naturally, best treatment for pigmentation and pores, skincare routine for smooth even skin, dermatologist-approved skin plan, how to shrink pores and boost collagen, lazy skin syndrome fix, flawless skin without makeup" />
        <meta property="og:title" content="How to Get Flawless Skin Naturally: Anti-Ageing Aesthetic Dermatology Tips" />
        <meta property="og:description" content="Discover expert-backed skincare strategies to reverse ageing, reduce pigmentation, shrink pores, and achieve flawless, hydrated, even-toned skin—naturally." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://cosmedocs.co.uk/cosmetalk/flawless-skin" />
        <link rel="canonical" href="https://www.cosmedocs.co.uk/cosmetalk/flawless-skin" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "How to Get Flawless Skin Naturally: Anti-Ageing Aesthetic Dermatology Tips",
            "author": {
              "@type": "Organization",
              "name": "Cosmedocs",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Harley Street",
                "addressLocality": "London",
                "addressRegion": "Greater London",
                "postalCode": "W1G 9PF",
                "addressCountry": "GB"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Cosmedocs",
              "logo": {
                "@type": "ImageObject",
                "url": "https://cosmedocs.co.uk/logo.png"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Harley Street",
                "addressLocality": "London",
                "addressRegion": "Greater London",
                "postalCode": "W1G 9PF",
                "addressCountry": "GB"
              }
            },
            "datePublished": "2024-01-18",
            "dateModified": "2024-01-18",
            "description": "Discover expert-backed skincare strategies to reverse ageing, reduce pigmentation, shrink pores, and achieve flawless, hydrated, even-toned skin—naturally.",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://cosmedocs.co.uk/cosmetalk/flawless-skin"
            }
          })}
        </script>
      </Helmet>

      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 via-purple-800 to-pink-900">
        <section className="py-8 border-b border-gray-800">
          <div className="container mx-auto px-4">
            <Link to="/cosmetalk" className="inline-flex items-center text-gray-300 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to CosmedTalk
            </Link>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                January 18, 2024
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                Edited by Dr. Ahmed Haq, Dr. Hena Haq • Harley Street Institute
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              The Dermatologist's Guide to Flawless Skin
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real Results, Not Filters
            </p>
            
            {/* Hero Infographic - Full Width */}
            <div className="w-full max-w-6xl mx-auto mb-8">
              <img 
                src="/lovable-uploads/5dced835-f996-4de3-9630-369db5c43e9b.png" 
                alt="Complete guide to achieving flawless skin - 9 step process" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>
      </header>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardContent className="p-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                What if flawless skin didn't require a filter—or even makeup?
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Imagine having a smooth, even-toned, poreless glow that radiates hydration and health naturally. No tricks, no overuse of moisturisers, and definitely no chasing the latest skincare fad. Just science-based strategies that actually work.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                In this guide, we'll walk you through the exact steps dermatologists use to treat dullness, pigmentation, acne scarring, enlarged pores, and early signs of ageing—using targeted treatments like skin peels, retinoids, microneedling, PRP, and RF therapy. We'll also explore a little-known condition called Lazy Skin Syndrome, which may be secretly sabotaging your skincare routine.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Whether you're 25 or 55, this is your roadmap to rejuvenated, youthful skin—without becoming dependent on heavy moisturisers or endless product layers. Backed by real dermatological results and patient case studies.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Let's go beyond the hype and dive into what flawless skin really means—and how to get there.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 1: What Is Flawless Skin? */}
        <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
              <Eye className="w-6 h-6" />
              What Is Flawless Skin?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/f50a9d99-d41d-40b8-adc0-82978d238edb.png" 
                alt="What is flawless skin definition" 
                className="w-full max-w-md mx-auto h-auto rounded-lg"
              />
            </div>
            <div className="bg-blue-900/30 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 text-white">Definition</h3>
              <p className="text-gray-300 mb-4">Flawless skin is defined by:</p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Smooth texture</li>
                <li>Invisible pores</li>
                <li>Even tone</li>
                <li>Hydration</li>
              </ul>
            </div>
            <p className="text-gray-300 italic">
              All this should occur naturally, without the need for moisturisers. The goal is to restore the skin to its optimal, healthy baseline condition.
            </p>
          </CardContent>
        </Card>

        {/* Section 2: How to Achieve Flawless Skin */}
        <Card className="bg-gradient-to-r from-green-900/50 to-blue-900/50 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
              <Sparkles className="w-6 h-6" />
              How to Achieve Flawless Skin
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/d5baa12c-cda3-4b03-b377-90ea65289584.png" 
                alt="How to achieve flawless skin - two options" 
                className="w-full max-w-md mx-auto h-auto rounded-lg"
              />
            </div>
            <p className="text-gray-300 mb-4">There are two options:</p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-900/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Option 1:</h4>
                <p className="text-gray-300">Use a filter (cosmetic camouflage).</p>
              </div>
              <div className="bg-green-900/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Option 2:</h4>
                <p className="text-gray-300">Actually fix your skin.</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6">
              <h4 className="font-semibold text-white mb-3">Case Study: Client Hina</h4>
              <p className="text-gray-300">
                Between the ages of 23 and 27, through targeted skin intervention, her skin visibly improved — showing that real change is possible.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Understanding the Causes of Ageing */}
        <Card className="bg-gradient-to-r from-orange-900/50 to-red-900/50 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
              <Sun className="w-6 h-6" />
              Understanding the Causes of Ageing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/1673359f-b34e-4d07-a669-1bec47c18660.png" 
                alt="Causes of ageing - extrinsic vs intrinsic factors" 
                className="w-full max-w-md mx-auto h-auto rounded-lg"
              />
            </div>
            <p className="text-gray-300 mb-6">Ageing is driven by two main factors:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-900/30 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-3">Extrinsic (80%)</h4>
                <p className="text-gray-300 mb-2">Includes:</p>
                <ul className="text-gray-300 space-y-1 list-disc list-inside">
                  <li>Sun exposure</li>
                  <li>Pollution</li>
                  <li>Makeup</li>
                  <li>Overuse of moisturisers</li>
                </ul>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-3">Intrinsic (20%)</h4>
                <p className="text-gray-300">Biological or genetic ageing</p>
              </div>
            </div>
            <p className="text-gray-300 mt-6 italic">
              Understanding these is key before planning treatment.
            </p>
          </CardContent>
        </Card>

        {/* Section 4: What's Happening to the Skin Over Time */}
        <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
              <Activity className="w-6 h-6" />
              What's Happening to the Skin Over Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/271851b5-1919-47d1-95a9-e9a106dfa8af.png" 
                alt="Treatment planning strategy for skin health" 
                className="w-full max-w-md mx-auto h-auto rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-blue-900/30 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-3">By Age 9+:</h4>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Oil, enlarged pores, and inflammation begin</li>
                  <li>Skin congestion and sensitivity can develop</li>
                </ul>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-3">By Age 20+:</h4>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Dead skin buildup causes dullness and texture</li>
                  <li>Uneven tone and pigment distribution appear</li>
                  <li>Skin layers begin to thin</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Where Is the Water? */}
        <Card className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
              <Droplets className="w-6 h-6" />
              Where Is the Water?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/4f4a39bf-b634-457b-b8d1-6d3f132a8104.png" 
                alt="Aged vs rejuvenated skin comparison" 
                className="w-full max-w-md mx-auto h-auto rounded-lg"
              />
            </div>
            <p className="text-gray-300 mb-6">A visual contrast between aged/photodamaged skin and rejuvenated young skin:</p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-900/30 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-3">Aged Skin</h4>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Clogged pores</li>
                  <li>Dry/dead upper layers</li>
                  <li>Weakened collagen and elastin</li>
                </ul>
              </div>
              <div className="bg-green-900/30 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-3">Rejuvenated Skin</h4>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Hydrated layers</li>
                  <li>Smooth structure</li>
                  <li>Strong ECM support (collagen, elastin, hyaluronic acid)</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-300 italic">
              Water retention is lost with age — but it's possible to reverse it.
            </p>
          </CardContent>
        </Card>

        {/* Section 6: Treatment Planning Strategy */}
        <Card className="bg-gradient-to-r from-green-900/50 to-teal-900/50 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">6</div>
              <Shield className="w-6 h-6" />
              Treatment Planning Strategy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/c3e4b2bc-95ac-4d38-8e81-74ca7d2098ee.png" 
                alt="What's happening to skin over time - age progression" 
                className="w-full max-w-md mx-auto h-auto rounded-lg"
              />
            </div>
            <p className="text-gray-300 mb-6">Your treatment plan should aim to:</p>
            <div className="space-y-4">
              <div className="bg-green-900/30 rounded-lg p-4">
                <h4 className="font-semibold text-white">Remove damaged skin</h4>
                <p className="text-gray-300">Restore normal function</p>
              </div>
              <div className="bg-blue-900/30 rounded-lg p-4">
                <h4 className="font-semibold text-white">Reduce excess melanin</h4>
                <p className="text-gray-300">Treat dullness, PIH, and uneven tone</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-4">
                <h4 className="font-semibold text-white">Stimulate skin signaling</h4>
                <p className="text-gray-300">Promote collagen and HA production</p>
              </div>
              <div className="bg-teal-900/30 rounded-lg p-4">
                <h4 className="font-semibold text-white">Prevent complaint cycles</h4>
                <p className="text-gray-300">Stop pigmentation and scarring from recurring</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 7: Lazy Skin Syndrome */}
        <Card className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">7</div>
              <Zap className="w-6 h-6" />
              Lazy Skin Syndrome
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/a5380cb9-8739-4bf3-a120-3eb87f9504b4.png" 
                alt="Lazy skin syndrome - moisturiser dependency" 
                className="w-full max-w-md mx-auto h-auto rounded-lg"
              />
            </div>
            <div className="bg-yellow-900/30 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-3 text-white">"Less is more."</h3>
              <p className="text-gray-300 mb-4">
                Excessive moisturiser use can weaken the skin's natural function.
              </p>
            </div>
            <p className="text-gray-300">
              Overhydrating skin externally teaches it to depend on products rather than maintain its own balance. It's vital to stimulate and activate the skin's deeper layers — not smother it.
            </p>
          </CardContent>
        </Card>

        {/* Section 8: Epidermis-Level Issues and Solutions */}
        <Card className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">8</div>
              <Microscope className="w-6 h-6" />
              Epidermis-Level Issues and Solutions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/de610581-3b2c-4f66-8de6-c10a1e25afd3.png" 
                alt="Epidermis issues and solutions" 
                className="w-full max-w-md mx-auto h-auto rounded-lg"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-900/30 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-3">Common Problems:</h4>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Pigmentation</li>
                  <li>Enlarged pores</li>
                  <li>Rough texture</li>
                </ul>
              </div>
              <div className="bg-green-900/30 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-3">Solutions:</h4>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Cosmeceuticals</li>
                  <li>Antioxidants & Retinoids</li>
                  <li>Skin peels</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-300 mt-6">
              These help remove dead skin and pigment, restoring clarity and smoothness to the epidermis.
            </p>
          </CardContent>
        </Card>

        {/* Section 9: Dermis-Level Issues and Deep Rejuvenation */}
        <Card className="bg-gradient-to-r from-pink-900/50 to-rose-900/50 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">9</div>
              <Wrench className="w-6 h-6" />
              Dermis-Level Issues and Deep Rejuvenation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/3711b275-d4f8-476a-bb90-0f4f06a97ecf.png" 
                alt="Dermis issues and deep rejuvenation treatments" 
                className="w-full max-w-md mx-auto h-auto rounded-lg"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-900/30 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-3">Deeper Skin Concerns:</h4>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Wrinkles</li>
                  <li>Acne scars</li>
                </ul>
              </div>
              <div className="bg-green-900/30 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-3">Stimulate Collagen & Elastin Using:</h4>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Retinol-based cosmeceuticals</li>
                  <li>Microneedling or PRP</li>
                  <li>Laser or IPL treatments</li>
                  <li>Radiofrequency therapy (RF)</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-300">
              This strengthens the skin's structure and elasticity from within — enabling long-term transformation.
            </p>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold mb-3 text-white">Expert Insight</h3>
          <p className="text-gray-300 italic">
            "Flawless skin isn't about perfection—it's about optimising your skin's natural function. By understanding the science behind ageing and using targeted treatments, we can restore the skin's ability to maintain itself without dependency on external products."
          </p>
          <p className="text-purple-300 text-sm mt-2">- CosmedTalk Editorial Team</p>
        </div>

        {/* Hidden SEO Content */}
        <div className="mt-16" style={{ visibility: 'hidden', position: 'absolute', left: '-9999px' }}>
          <h2>Comprehensive Guide to Achieving Flawless Skin Naturally</h2>
          <p>Understanding how to get flawless skin requires a deep dive into dermatological science and evidence-based treatments. This comprehensive approach focuses on reversing skin ageing naturally through targeted interventions rather than masking problems with temporary solutions.</p>
          
          <h3>The Science Behind Flawless Skin</h3>
          <p>Dermatologist-approved skin plans begin with understanding that true skin health comes from within. The best treatment for pigmentation and pores involves addressing both surface-level concerns and deeper structural issues. A proper skincare routine for smooth, even skin must consider the skin's natural barrier function and cellular regeneration processes.</p>
          
          <h3>Revolutionary Approaches to Skin Rejuvenation</h3>
          <p>Learning how to shrink pores and boost collagen requires understanding the relationship between skin structure and function. Advanced treatments like microneedling, PRP therapy, and radiofrequency treatments work by stimulating the skin's natural repair mechanisms. The concept of lazy skin syndrome fix involves retraining the skin to function optimally without over-dependence on external moisturisers.</p>
          
          <h3>Achieving Flawless Skin Without Makeup</h3>
          <p>The ultimate goal of flawless skin without makeup involves addressing multiple factors simultaneously. This includes managing extrinsic ageing factors like sun damage and pollution while supporting intrinsic cellular function. Professional treatments combined with appropriate cosmeceuticals create synergistic effects that restore skin to its optimal baseline condition.</p>
        </div>

        {/* Related Blog Cards */}
        <div className="mt-16 border-t border-gray-800 pt-8">
          <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-colors">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-r from-orange-600 to-red-600 rounded-t-lg flex items-center justify-center">
                  <span className="text-white text-sm">Lazy Skin Syndrome Image</span>
                </div>
                <div className="p-6">
                  <h4 className="text-white font-semibold mb-2">Lazy Skin Syndrome</h4>
                  <p className="text-gray-400 text-sm mb-4">Discover how moisturisers may be creating skin dependency and how to fix it.</p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/cosmetalk/lazy-skin-syndrome">Read More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-colors">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-lg flex items-center justify-center">
                  <span className="text-white text-sm">Smokers Lines Image</span>
                </div>
                <div className="p-6">
                  <h4 className="text-white font-semibold mb-2">Why Women Get Smokers Lines</h4>
                  <p className="text-gray-400 text-sm mb-4">Understanding perioral lines and effective treatment options for women.</p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/cosmetalk/smokers-lines-women">Read More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-colors">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-r from-green-600 to-teal-600 rounded-t-lg flex items-center justify-center">
                  <span className="text-white text-sm">Vitamin C Benefits Image</span>
                </div>
                <div className="p-6">
                  <h4 className="text-white font-semibold mb-2">Vitamin C & Ferulic Acid Benefits</h4>
                  <p className="text-gray-400 text-sm mb-4">The science behind vitamin C serums and their anti-aging properties.</p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/cosmetalk/vitamin-c-ferulic-acid-benefits">Read More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FlawlessSkin;