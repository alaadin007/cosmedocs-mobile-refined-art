
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Treatments = () => {
  const [activeTab, setActiveTab] = useState("botox");

  const treatments = {
    botox: {
      title: "BOTOX",
      subtitle: "Face, Neck & Body",
      items: [
        "Anti Wrinkle Injections",
        {
          title: "- Frown Lines",
          isSubItem: true
        },
        {
          title: "- Crows Feet",
          isSubItem: true
        },
        {
          title: "- Forehead Lines",
          isSubItem: true
        },
        {
          title: "-Bunny Lines (Nose Wrinkles)",
          isSubItem: true
        },
        "Dimpled Chin",
        "Nasal Flaring",
        "Gummy Smile",
        "Nefertiti Lift (Platysma) & Turkey Neck Bands",
        "T-Zone Oily Skin",
        "Jaw Reduction With Masseter Botox",
        "Calf Reduction Botox",
        "Bruxism / TMJ",
        "Excessive Sweating",
        "Migraines / Headaches",
        "Lip Flip",
        "Trigger Point Release / Shoulder Reduction"
      ]
    },
    fillers: {
      title: "DERMAL FILLERS",
      subtitle: "",
      items: [
        "Dermal Fillers (anti ageing, nose to mouth)",
        "Lip Fillers",
        "Non Surgical Nose Job",
        "Cheek Fillers",
        "Chin Filler",
        "Jawline Filler",
        "Tear Troughs (Under Eye Dark Circles)",
        "Neck Lines",
        "Forehead Filler",
        "8 Point Lift"
      ]
    },
    skinBoosters: {
      title: "SKIN BOOSTERS & REJUVENATION",
      subtitle: "",
      items: [
        "Profhilo",
        "Hydromax",
        "Polynucleotides",
        "Hydrafacial",
        "Chemical Peel (all types)",
        {
          title: "- Peel To Reveal (Popular)",
          isSubItem: true
        },
        "PRP (Vampire Facial Lift)",
        "Prescription Grade Skin Care (Popular)"
      ]
    },
    threads: {
      title: "PDO THREADS",
      subtitle: "",
      items: ["Fat Dissolving"]
    },
    dermatology: {
      title: "COSMEDERM",
      subtitle: "Dermatology Services",
      items: [
        "Acne",
        "Skin Tag",
        "Eczema",
        "Psoriasis",
        "Hyperpigmentation"
      ]
    },
    lifestyle: {
      title: "LIFESTYLE MEDICINE",
      subtitle: "",
      items: [
        "Weight Loss",
        "Private Doctor/GP",
        "Health Screening"
      ]
    }
  };

  return (
    <div className="bg-black text-white py-24">
      <div className="page-container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Treatments</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            At Cosmedocs, we offer a comprehensive range of aesthetic and medical treatments,
            all delivered with our philosophy of refined, controlled, and precise results.
          </p>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <TabsList className="bg-accent mb-8 p-1 flex flex-nowrap min-w-max">
              {Object.entries(treatments).map(([key, treatment]) => (
                <TabsTrigger 
                  key={key}
                  value={key}
                  className="text-sm py-2 px-4 whitespace-nowrap"
                >
                  {treatment.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(treatments).map(([key, treatment]) => (
            <TabsContent key={key} value={key} className="mt-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{treatment.title}</h2>
                {treatment.subtitle && <p className="text-gray-400 mb-6">{treatment.subtitle}</p>}
                
                <div className="mt-8">
                  <Accordion type="single" collapsible className="w-full">
                    {treatment.items.map((item, index) => {
                      if (typeof item === "string") {
                        return (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left hover:text-white py-4">
                              {item}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-400 pb-4 pl-2">
                              This treatment targets {item.toLowerCase()} with our refined approach,
                              ensuring natural-looking results that enhance your features without
                              appearing obvious or exaggerated.
                            </AccordionContent>
                          </AccordionItem>
                        );
                      } else if (item.isSubItem) {
                        return (
                          <div key={index} className="text-sm text-gray-400 py-2 pl-4">
                            {item.title}
                          </div>
                        );
                      }
                      return null;
                    })}
                  </Accordion>
                </div>
                
                <div className="mt-12 text-center">
                  <a href="/booking" className="inline-block bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 transition-colors">
                    Book This Treatment
                  </a>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Treatments;
