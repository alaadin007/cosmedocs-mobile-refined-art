
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Treatments = () => {
  const [activeTab, setActiveTab] = useState("injectables");

  const treatments = {
    injectables: {
      title: "INJECTABLES",
      subtitle: "Injectable treatments for facial rejuvenation",
      description: "As highly experienced injectors in London since 2007, we specialize in carefully administering high doses of botox safely providing longevity. We have developed many new techniques with dermal fillers over the last decade now taught to professionals internationally. Our team of experts are also trainers for the prestigious Harley Street Institute. Trust us for safe, effective and natural-looking results.",
      items: [
        {
          title: "INJECTABLE CONSULTATION",
          price: "£50 (Off Any Treatment)",
          description: "Initial consultation to discuss your needs and treatment options"
        },
        {
          title: "FACE BOTOX / AZZALURE / DYSPORT",
          prices: [
            { name: "1 Area", price: "£175" },
            { name: "2 Area", price: "£275" },
            { name: "3 Area", price: "£350" },
            { name: "*Men supplement", price: "£50", note: "If Combined With Any 1,2,3 Main Areas" }
          ],
          link: "visit page"
        },
        {
          title: "Chin",
          price: "£50",
          link: "visit page"
        },
        {
          title: "Brow Lift",
          price: "£50",
          link: "visit page"
        },
        {
          title: "Gummy Smile",
          price: "£50",
          link: "visit page"
        },
        {
          title: "Bunny Lines",
          price: "£50",
          link: "visit page"
        },
        {
          title: "Lip Flip",
          price: "£175",
          link: "visit page"
        },
        {
          title: "Nefertiti Face Lift (neck bands/platysma)",
          price: "£300",
          link: "visit page"
        },
        {
          title: "Jelly Roll Botox",
          price: "£175"
        },
        {
          title: "Full Face Natural Botox",
          price: "£500",
          description: "Including all the above areas (3 areas plus the lower face)",
          link: "visit page"
        },
        {
          title: "Dermal Filler For Deep Lines",
          price: "£200",
          description: "When complimenting with Botox Treatment",
          link: "visit page"
        },
        {
          title: "Masseter (Jawline Slimming, Bruxism Teeth Grinding)",
          price: "£350",
          link: "visit page"
        },
        {
          title: "Migraines / Headaches",
          price: "£450-550"
        },
        {
          title: "Trigger Point Botox",
          price: "£350–£550",
          link: "visit page"
        },
        {
          title: "Full Barbie Botox (Shoulder Reduction)",
          price: "£450",
          link: "visit page"
        },
        {
          title: "Rosacea & Blushing",
          price: "£350- 450"
        }
      ]
    },
    sweattox: {
      title: "SWEAT-TOX | FLUSHING",
      subtitle: "BOTOX / AZZALURE / DYSPORT",
      description: "Treatments for excessive sweating and facial flushing",
      link: "visit page",
      items: [
        {
          title: "Underarms Advanced Treatments",
          price: "£550"
        },
        {
          title: "Palms",
          price: "£550"
        },
        {
          title: "Forehead",
          price: "£350"
        },
        {
          title: "Scalp",
          price: "£600"
        },
        {
          title: "Nose",
          price: "£200"
        },
        {
          title: "Cheeks",
          price: "£200"
        }
      ]
    },
    fillers: {
      title: "DERMAL FILLERS",
      subtitle: "Consultation £50 (off any treatment)",
      description: "Our dermal filler treatments enhance facial features and restore volume loss",
      items: [
        {
          subtitle: "ANTI-AGEING",
          isSubcategory: true,
          subitems: [
            {
              title: "Marionette Lines",
              price: "£325/ml",
              link: "visit page"
            },
            {
              title: "Nasolabial Folds",
              price: "£325/ml",
              link: "visit page"
            },
            {
              title: "Jawline (High Def/Jowls)",
              price: "£350/ml",
              link: "visit page"
            },
            {
              title: "Cheek volume",
              price: "£350/ml",
              link: "visit page"
            },
            {
              title: "Tear Trough / Under Eye Circles",
              price: "£425",
              link: "visit page"
            },
            {
              title: "Profhilo",
              price: "£350 (package price available)",
              link: "visit page"
            },
            {
              title: "Polynucleotide",
              link: "visit page"
            }
          ]
        },
        {
          subtitle: "FACIAL CONTOURING",
          isSubcategory: true,
          subitems: [
            {
              title: ".5ml Lip Filler (Natural)",
              price: "£300",
              link: "visit page"
            },
            {
              title: "1ml Lip Filler (Bold & Plump)",
              price: "£350"
            },
            {
              title: "1.5 Lip Filler",
              price: "£400"
            },
            {
              title: "Non Surgical Nose Job",
              price: "£450",
              link: "visit page"
            },
            {
              title: "Nose Filler Maintenance",
              price: "£400"
            },
            {
              title: "Forehead Filler Bumps & Dips",
              price: "£400",
              link: "visit page"
            },
            {
              title: "Temples Hollowing",
              price: "£350/ml",
              link: "visit page"
            },
            {
              title: "Redensity 1",
              price: "£250/ml"
            },
            {
              title: "Aqualyx Fat Dissolving",
              price: "POC"
            },
            {
              title: "PDO Threads",
              link: "Visit Page"
            }
          ]
        }
      ]
    },
    hyaluronic: {
      title: "HYALURONIC MAKEOVER (HA MAKEOVER)",
      description: "With HYALURONIC MAKEOVER (HAMO), you can achieve a youthful and refreshed look without invasive procedures. Our skilled practitioners will work with you to create a customized treatment plan that addresses your unique concerns and delivers natural-looking results at the cost of having the fillers separately.",
      link: "visit page",
      items: [
        {
          title: "HAMA 1",
          syringes: "3 Syringes",
          price: "£1250",
          age: "32-45 Slim Face"
        },
        {
          title: "HAMA 2",
          syringes: "4 Syringes",
          price: "£1500",
          age: "45-65 Slim Face"
        }
      ],
      note: "Contact us today to learn more about our HYALURONIC MAKEOVER and to schedule a consultation with one of our experienced professionals"
    },
    medspa: {
      title: "MED-SPA SKIN TREATMENTS",
      items: [
        {
          subtitle: "SKIN PEELING SYSTEMS",
          isSubcategory: true,
          subitems: [
            {
              title: "1. Light Peels (no obvious flaking or dryness)",
              description: "Glycolic, Lactic, Pyruvic, Salycylic",
              price: "£125"
            },
            {
              title: "2. Medium Grade Peels (little flaking and dryness for 1 week)",
              description: "Peel To Reveal (most popular)",
              price: "£250"
            },
            {
              title: "3. Deep Tissue Grade Peel",
              description: "Phenol",
              price: "£1000"
            }
          ]
        },
        {
          subtitle: "MICRONEEDLING (NATURAL COLLAGEN INDUCTION)",
          isSubcategory: true,
          subitems: [
            {
              title: "1 Session",
              price: "£150"
            },
            {
              title: "3 Session",
              price: "£350 + Complimentary Retinol (RRP £50)"
            }
          ]
        },
        {
          subtitle: "PRP (AKA Vampire Facelift)",
          isSubcategory: true,
          subitems: [
            {
              title: "1 Session",
              price: "£500"
            },
            {
              title: "3 Session",
              price: "£1500 + Complimentary Vitamin C12% & Retinol (RRP £50)"
            }
          ]
        },
        {
          title: "ACNE TREATMENT",
          price: "POC"
        },
        {
          title: "FACIAL THREAD VEINS",
          price: "FROM £75"
        },
        {
          title: "PRESCRIPTION SKIN CARE",
          price: "POC"
        },
        {
          title: "LEG VEINS / SPIDER VEINS",
          price: "£400 PER LEG"
        },
        {
          title: "SKIN TAG REMOVAL",
          price: "£100 FOR 5 TAGS"
        },
        {
          title: "SEMI PERMANENT MAKEUP",
          price: "POC"
        },
        {
          title: "IPL/LASER HAIR REMOVAL",
          price: "POC"
        }
      ]
    }
  };

  return (
    <div className="bg-black text-white py-24">
      <div className="page-container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Treatments & Prices</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            As highly experienced injectors in London since 2007, we specialize in carefully administering high doses of botox 
            safely providing longevity. We have developed many new techniques with dermal fillers over the last decade 
            now taught to professionals internationally. Our team of experts are also trainers for the prestigious 
            Harley Street Institute. Trust us for safe, effective and natural-looking results.
          </p>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <TabsList className="bg-accent mb-8 p-1 flex flex-nowrap min-w-max">
              <TabsTrigger value="injectables">Injectables</TabsTrigger>
              <TabsTrigger value="sweattox">Sweat-Tox</TabsTrigger>
              <TabsTrigger value="fillers">Dermal Fillers</TabsTrigger>
              <TabsTrigger value="hyaluronic">HA Makeover</TabsTrigger>
              <TabsTrigger value="medspa">Med-Spa</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="injectables" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-2">{treatments.injectables.title}</h2>
              <p className="text-gray-400 mb-6">{treatments.injectables.subtitle}</p>
              
              <div className="mt-8">
                {treatments.injectables.items.map((item, index) => (
                  <Card key={index} className="mb-4 bg-accent text-white border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          {item.description && <p className="text-sm text-gray-400">{item.description}</p>}
                        </div>
                        <div className="text-right">
                          {item.price && <p className="font-bold">{item.price}</p>}
                          {item.prices && (
                            <div className="space-y-1">
                              {item.prices.map((price, i) => (
                                <div key={i} className="flex justify-between gap-4 text-sm">
                                  <span>{price.name}</span>
                                  <span className="font-bold">{price.price}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      {item.link && (
                        <div className="mt-2 text-right">
                          <Button variant="link" className="p-0 h-auto text-white hover:text-gray-300">
                            Learn more →
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="sweattox" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-2">{treatments.sweattox.title}</h2>
              <p className="text-gray-400 mb-6">{treatments.sweattox.subtitle}</p>
              
              <div className="mt-8">
                {treatments.sweattox.items.map((item, index) => (
                  <Card key={index} className="mb-4 bg-accent text-white border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="font-bold">{item.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {treatments.sweattox.link && (
                <div className="mt-4 text-center">
                  <Button variant="link" className="text-white hover:text-gray-300">
                    Learn more about Sweat-Tox treatments →
                  </Button>
                </div>
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="fillers" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-2">{treatments.fillers.title}</h2>
              <p className="text-gray-400 mb-6">{treatments.fillers.subtitle}</p>
              
              <div className="mt-8">
                {treatments.fillers.items.map((category, index) => (
                  <div key={index} className="mb-8">
                    {category.isSubcategory && (
                      <h3 className="text-xl font-semibold mb-4 text-white/90">{category.subtitle}</h3>
                    )}
                    
                    {category.subitems && category.subitems.map((item, idx) => (
                      <Card key={idx} className="mb-4 bg-accent text-white border-0">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <h4 className="font-semibold">{item.title}</h4>
                            {item.price && <p className="font-bold">{item.price}</p>}
                          </div>
                          {item.link && (
                            <div className="mt-2 text-right">
                              <Button variant="link" className="p-0 h-auto text-white hover:text-gray-300">
                                Learn more →
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="hyaluronic" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">{treatments.hyaluronic.title}</h2>
              <p className="text-gray-400 mb-6">{treatments.hyaluronic.description}</p>
              
              <div className="overflow-x-auto mt-8 mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-2">Options</th>
                      <th className="text-left py-3 px-2">Syringes</th>
                      <th className="text-left py-3 px-2">Price</th>
                      <th className="text-left py-3 px-2">General Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    {treatments.hyaluronic.items.map((item, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="py-3 px-2 font-semibold">{item.title}</td>
                        <td className="py-3 px-2">{item.syringes}</td>
                        <td className="py-3 px-2 font-bold">{item.price}</td>
                        <td className="py-3 px-2">{item.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {treatments.hyaluronic.note && (
                <p className="text-gray-400 text-sm mt-4">{treatments.hyaluronic.note}</p>
              )}
              
              {treatments.hyaluronic.link && (
                <div className="mt-6 text-center">
                  <Button variant="link" className="text-white hover:text-gray-300">
                    Learn more about HA Makeover →
                  </Button>
                </div>
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="medspa" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">{treatments.medspa.title}</h2>
              
              <div className="mt-8">
                {treatments.medspa.items.map((item, index) => {
                  if (item.isSubcategory) {
                    return (
                      <div key={index} className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">{item.subtitle}</h3>
                        
                        {item.subitems && item.subitems.map((subitem, idx) => (
                          <Card key={idx} className="mb-4 bg-accent text-white border-0">
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-semibold">{subitem.title}</h4>
                                  {subitem.description && <p className="text-sm text-gray-400">{subitem.description}</p>}
                                </div>
                                <p className="font-bold">{subitem.price}</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    );
                  } else {
                    return (
                      <Card key={index} className="mb-4 bg-accent text-white border-0">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="font-bold">{item.price}</p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  }
                })}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
            Book a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
