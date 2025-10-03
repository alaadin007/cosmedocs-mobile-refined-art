import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { RafflePopup } from "@/components/RafflePopup";
import { Gift, Sparkles, Award } from "lucide-react";

const PopupOffer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const offers = [
    {
      type: 'UK - Treatment Offers',
      items: [
        '20% Off First Botox Treatment (Value: £80-120)',
        '£100 Off Premium Dermal Fillers',
        'Complimentary Skin Analysis + 15% Off Treatment (Value: £150)',
        'Medical-Grade Acne Treatment Package (Value: £200)',
        '£200 Off PDO Thread Lift',
        'Non-Surgical Nose Job - £100 Off',
      ]
    },
    {
      type: 'International - Product Offers',
      items: [
        'Premium Retinol Starter Kit - FREE (Value: £45)',
        'Vitamin C Brightening Set - Complimentary (Value: £50)',
        'Medical-Grade Acne Care Kit - FREE (Value: £55)',
        'Intense Hydration Bundle - Complimentary (Value: £48)',
        'Eye Rejuvenation Kit - FREE (Value: £42)',
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Secret Raffle Offers | CosmeDocs</title>
        <meta name="description" content="Exclusive welcome gifts and personalised aesthetic offers at CosmeDocs. Get special discounts on treatments and complimentary premium skincare products." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        <div className="page-container py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gift className="h-12 w-12 text-primary" />
              <Sparkles className="h-10 w-10 text-primary animate-pulse" />
              <Award className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Secret Raffle <span className="text-primary">Offers</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Welcome to CosmeDocs! Share your aesthetic concerns and receive a personalised gift tailored just for you
            </p>
            <Button 
              onClick={() => setShowPopup(true)}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto"
            >
              <Gift className="mr-2 h-5 w-5" />
              Claim Your Gift
            </Button>
          </div>

          {/* How It Works */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Share Your Concerns</h3>
                <p className="text-muted-foreground">Tell us about your aesthetic goals and skin concerns</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Provide Details</h3>
                <p className="text-muted-foreground">Quick form with your name, email, and location</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Your Offer</h3>
                <p className="text-muted-foreground">Receive a personalised gift tailored to your needs</p>
              </div>
            </div>
          </div>

          {/* Available Offers */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Available Offers</h2>
            <p className="text-center text-muted-foreground mb-12">
              Our AI intelligently matches your concerns with the perfect offer
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {offers.map((category, idx) => (
                <div 
                  key={idx} 
                  className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-2xl font-bold mb-6 text-primary">{category.type}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-accent/10 rounded-lg border border-border">
                <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Personalised</h4>
                <p className="text-sm text-muted-foreground">AI-matched offers based on your unique concerns</p>
              </div>
              <div className="p-6 bg-accent/10 rounded-lg border border-border">
                <Gift className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Exclusive</h4>
                <p className="text-sm text-muted-foreground">First-time visitor offers only</p>
              </div>
              <div className="p-6 bg-accent/10 rounded-lg border border-border">
                <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Location-Smart</h4>
                <p className="text-sm text-muted-foreground">Treatments for UK, products for international</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg border border-primary/20 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Claim Your Gift?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands who've already received their personalised offers
              </p>
              <Button 
                onClick={() => setShowPopup(true)}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto"
              >
                <Gift className="mr-2 h-5 w-5" />
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <RafflePopup open={showPopup} onOpenChange={setShowPopup} />
    </>
  );
};

export default PopupOffer;
