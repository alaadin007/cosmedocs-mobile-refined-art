
import { useState } from "react";
import { motion } from "framer-motion";
import { Percent, Syringe, Calendar, BadgeDollarSign, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Membership() {
  const [treatments, setTreatments] = useState(3);
  const [customValue, setCustomValue] = useState(0);

  // Calculate annual savings
  const calculateSavings = () => {
    const botoxCost = 375; // Average cost of one Botox treatment
    const botoxDiscount = botoxCost * treatments * 0.25; // 25% off
    const monthlyTreatmentValue = 100 * 12; // £100 per treatment, 12 months
    const peelsWithBotoxValue = treatments * 100; // £100 per peel with Botox
    const skincareSavings = customValue * 0.45; // 45% off
    
    return {
      botoxSavings: botoxDiscount,
      treatmentValue: monthlyTreatmentValue,
      peelValue: peelsWithBotoxValue,
      skincareSavings: skincareSavings,
      total: botoxDiscount + monthlyTreatmentValue + peelsWithBotoxValue + skincareSavings
    };
  };
  
  const savings = calculateSavings();
  const annualCost = 95 * 12; // £95 per month for 12 months
  const netSavings = savings.total - annualCost;

  // Benefits data
  const benefits = [
    {
      icon: <Percent className="h-8 w-8 text-white" />,
      title: "25% Off All Injectables",
      description: "Botox, fillers, hyperhidrosis, migraine, TMJ treatments and more."
    },
    {
      icon: <PlusCircle className="h-8 w-8 text-white" />,
      title: "35% Off PDO Threads",
      description: "Professional thread lift treatments at a significant discount."
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: "Monthly Free Treatment",
      description: "Choose from Skin Peel, Microneedling, Botox Facial, or Thread Vein Laser."
    },
    {
      icon: <Syringe className="h-8 w-8 text-white" />,
      title: "Free Peel With Injectables",
      description: "Enhance your results with a complementary peel at every injectable appointment."
    },
    {
      icon: <BadgeDollarSign className="h-8 w-8 text-white" />,
      title: "45% Off Skincare",
      description: "HSF Retinol, Vitamin C, and Advanced barrier support products."
    }
  ];

  // Client journeys
  const journeys = [
    {
      title: "Anti-Ageing & Facial Contouring",
      quote: "I want natural results, not a new face.",
      details: [
        "Botox for dynamic lines",
        "Filler for volume and refinement",
        "Monthly skin treatments to maintain texture and glow",
        "This plan keeps them consistent and natural — not overdone."
      ]
    },
    {
      title: "Anti-Sweat (Hyperhidrosis)",
      quote: "I want freedom from sweat — and better skin, too.",
      details: [
        "Botox for underarms, feet, or hands",
        "Monthly treatments encourage 3x/year frequency",
        "Adds skincare as a confidence bonus"
      ]
    },
    {
      title: "Anti-Aches (Functional Botox)",
      quote: "I need relief from migraines, TMJ, and shoulder tension.",
      details: [
        "Functional Botox at a discount",
        "Monthly treatments support mental well-being and facial calm",
        "Turns a clinical visit into an aesthetic self-care experience"
      ]
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <motion.section 
        className="bg-black text-white py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="page-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">The Cosmedocs Membership</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">Refined Aesthetics, Month by Month</p>
          <p className="max-w-2xl mx-auto mb-8">
            A single, smart membership for clients who want real results — not trends.
            £95/month gives clients consistent skin health, injectable discounts, and expert-led
            aesthetic care backed by 15+ years and 30,000+ patients.
          </p>
          <Button size="lg" className="rounded-full text-lg px-8 py-6 bg-white text-black hover:bg-gray-200">
            Join the Membership
          </Button>
        </div>
      </motion.section>

      {/* Core Benefits Section */}
      <section className="py-16 px-4 bg-accent">
        <div className="page-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Membership Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="bg-black rounded-full p-4 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Join Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="page-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Clients Join
          </h2>

          {/* Desktop Carousel */}
          <div className="hidden md:block mb-12">
            <Carousel className="mx-auto max-w-4xl">
              <CarouselContent>
                {journeys.map((journey, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-secondary border-0">
                      <CardHeader>
                        <CardTitle className="text-2xl">{journey.title}</CardTitle>
                        <CardDescription className="text-xl italic text-gray-300">"{journey.quote}"</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {journey.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6">
                <CarouselPrevious className="relative inset-0 -left-4 translate-y-0" />
                <CarouselNext className="relative inset-0 -right-4 translate-y-0" />
              </div>
            </Carousel>
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden">
            <Accordion type="single" collapsible className="w-full">
              {journeys.map((journey, index) => (
                <AccordionItem key={index} value={`journey-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div>
                      <h3 className="text-xl font-semibold">{journey.title}</h3>
                      <p className="text-sm italic text-gray-400">"{journey.quote}"</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 mt-2">
                      {journey.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-16 px-4">
        <div className="page-container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-center mb-8 text-muted-foreground">
            See how much you can save with the Cosmedocs Membership
          </p>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">
                    How many Botox/injectable treatments do you have per year?
                  </label>
                  <Tabs 
                    defaultValue={treatments.toString()} 
                    onValueChange={(value) => setTreatments(parseInt(value))}
                    className="w-full"
                  >
                    <TabsList className="grid grid-cols-3 w-full">
                      <TabsTrigger value="2">2 times</TabsTrigger>
                      <TabsTrigger value="3">3 times</TabsTrigger>
                      <TabsTrigger value="4">4+ times</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Estimated annual skincare spend (optional)
                  </label>
                  <input
                    type="number"
                    value={customValue}
                    onChange={(e) => setCustomValue(Number(e.target.value))}
                    placeholder="£0"
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="border border-black">
            <CardHeader>
              <CardTitle className="text-2xl">Your Annual Savings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>25% off Botox/injectables ({treatments}x/year):</span>
                  <span className="font-bold">£{savings.botoxSavings.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly skin treatments (12x/year):</span>
                  <span className="font-bold">£{savings.treatmentValue.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Free peels with injectables ({treatments}x/year):</span>
                  <span className="font-bold">£{savings.peelValue.toFixed(2)}</span>
                </div>
                {customValue > 0 && (
                  <div className="flex justify-between">
                    <span>45% savings on skincare:</span>
                    <span className="font-bold">£{savings.skincareSavings.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t pt-4 flex justify-between">
                  <span>Total Value:</span>
                  <span className="font-bold">£{savings.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Annual Membership Cost:</span>
                  <span>£{annualCost.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between">
                  <span className="text-xl font-bold">Your Net Savings:</span>
                  <span className="text-xl font-bold">£{netSavings > 0 ? netSavings.toFixed(2) : '0.00'}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Brand Voice / Quote Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="page-container max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl italic mb-8 text-white">
            "Our aesthetics is invisible art. Refined. Controlled. Precise."
          </h2>
          <p className="text-xl mb-6 text-gray-300">
            Quiet, not loud. Invisible, not exaggerated.
          </p>
          <p className="text-xl text-gray-300">
            It's transformation that speaks — without saying a word.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="page-container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Refined Aesthetics?
          </h2>
          <p className="mb-10 text-xl">
            Join the Cosmedocs Membership today for just £95/month and transform your aesthetic journey.
          </p>
          <Button size="lg" className="rounded-full text-lg px-8 py-6 bg-black hover:bg-gray-800 text-white">
            Become a Member Today
          </Button>
        </div>
      </section>
    </div>
  );
}
