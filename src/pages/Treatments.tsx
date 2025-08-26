import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";
import { Link } from "react-router-dom";

const Treatments = () => {
  const [activeTab, setActiveTab] = useState("botox");

  const skinBoosterBeforeAfterImages = [
    {
      src: "/lovable-uploads/67e6b1a0-9230-467a-baf0-dd5778c41d45.png",
      alt: "Skin Booster before treatment",
      caption: "Before: Skin showing signs of dehydration and texture issues"
    },
    {
      src: "/lovable-uploads/b4aef6ba-b935-4242-95c1-9cc11e153c84.png",
      alt: "Skin Booster after treatment",
      caption: "After: Restored skin barrier function with improved hydration and vitality"
    },
    {
      src: "/lovable-uploads/fca71683-2bd7-438f-b37d-750080620e09.png",
      alt: "Skin rejuvenation treatment before and after",
      caption: "Targeted skin rejuvenation showing significant improvement in skin texture and quality"
    },
    {
      src: "/lovable-uploads/06cf90cf-537d-4b6e-9365-7fc638ee6fcb.png",
      alt: "Skin barrier restoration treatment before and after",
      caption: "Skin barrier restoration with improved complexion and natural glow"
    }
  ];

  const treatments = {
    botox: {
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
          description: "Choose from: Frown Area, Forehead Area, Crows Feet",
          prices: [
            { name: "1 Area", price: "£175" },
            { name: "2 Areas", price: "£275" },
            { name: "3 Areas", price: "£350" },
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
          title: "Migraines / Headaches",
          price: "£450-550"
        },
        {
          title: "Trigger Point Botox",
          price: "£350–£550",
          link: "visit page"
        },
        {
          title: "Rosacea & Blushing",
          price: "£350- 450"
        }
      ],
      contouringItems: [
        {
          title: "Masseter (Jawline Slimming, Bruxism Teeth Grinding)",
          price: "£350",
          link: "visit page"
        },
        {
          title: "Full Barbie Botox (Shoulder Reduction)",
          price: "£450",
          link: "visit page"
        },
        {
          title: "Botox Calf Reduction",
          price: "£750",
          link: "/botox-calf-reduction"
        }
      ],
      sweattoxItems: [
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
              title: "8 Point Facelift",
              price: "From £800",
              description: "Comprehensive non-surgical facelift targeting 8 key facial points",
              link: "visit page"
            },
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
              link: "/lip-fillers"
            },
            {
              title: "1ml Lip Filler (Bold & Plump)",
              price: "£350",
              link: "/lip-fillers"
            },
            {
              title: "1.5 Lip Filler",
              price: "£400",
              link: "/lip-fillers"
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
            },
            {
              title: "Ear Lobe Rejuvenation",
              price: "From £500",
              description: "Rejuvenation, new collagen, plumping using hyaluronic acid that stimulates your own collagen",
              link: "/ear-lobe-rejuvenation"
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
      title: "SKIN & HAIR MEDICINE",
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
          link: "/microneedling",
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
    },
    skinBoosters: {
      title: "SKIN BOOSTERS",
      subtitle: "Advanced hydration and skin rejuvenation",
      description: "Our premium skin boosters provide deep hydration, improve skin quality and texture while restoring your skin's natural radiance. These treatments enhance collagen production, delivering long-lasting results for a healthier, more youthful complexion.",
      items: [
        {
          title: "PROFHILO",
          price: "£350 per session",
          description: "Bio-remodeling hyaluronic acid treatment for skin laxity and hydration",
          hasBeforeAfter: true
        },
        {
          title: "POLYNUCLEOTIDES",
          price: "£300 per session",
          description: "DNA-based regenerative treatment to stimulate cellular renewal"
        },
        {
          title: "REDENSITY 1",
          price: "£250 per session",
          description: "Targeted skin quality enhancer for face, neck, and décolletage"
        },
        {
          title: "JALUPRO",
          price: "£275 per session",
          description: "Amino acid complex for deep skin restructuring"
        },
        {
          title: "SUNEKOS",
          price: "£275 per session",
          description: "Hyaluronic acid and amino acid treatment for periorbital areas"
        },
        {
          title: "MICRONEEDLING",
          price: "£250 per session",
          description: "Advanced collagen induction therapy for flawless skin rejuvenation",
          link: "/microneedling"
        }
      ]
    },
    plasticsurgeon: {
      title: "PLASTIC SURGEON SERVICES",
      subtitle: "Expert cosmetic surgery procedures",
      description: "Our experienced plastic surgeons provide comprehensive cosmetic surgery procedures with the highest standards of care. From consultation to recovery, we ensure natural-looking results that enhance your confidence.",
      items: [
        {
          title: "CONSULTATION",
          price: "£150",
          description: "Comprehensive surgical consultation and assessment"
        },
        {
          title: "RHINOPLASTY (NOSE SURGERY)",
          price: "From £6,000",
          description: "Surgical nose reshaping for improved aesthetics and function"
        },
        {
          title: "BREAST AUGMENTATION",
          price: "From £5,500",
          description: "Breast enhancement with implants"
        },
        {
          title: "BREAST REDUCTION",
          price: "From £7,000",
          description: "Reduction mammoplasty for comfort and proportion"
        },
        {
          title: "FACELIFT",
          price: "From £8,000",
          description: "Comprehensive facial rejuvenation surgery"
        },
        {
          title: "TUMMY TUCK",
          price: "From £6,500",
          description: "Abdominoplasty for flatter, firmer abdomen"
        },
        {
          title: "LIPOSUCTION",
          price: "From £3,500",
          description: "Fat removal for body contouring"
        },
        {
          title: "BLEPHAROPLASTY",
          price: "From £3,000",
          description: "Eyelid surgery for refreshed appearance"
        }
      ]
    },
    dermatology: {
      title: "DERMATOLOGY SERVICES",
      subtitle: "Medical and aesthetic dermatology",
      description: "Our qualified dermatologists provide comprehensive skin health services, treating both medical conditions and aesthetic concerns with evidence-based treatments for optimal skin health.",
      items: [
        {
          title: "DERMATOLOGY CONSULTATION",
          price: "£200",
          description: "Comprehensive skin health assessment and treatment planning"
        },
        {
          title: "MOLE & SKIN TAG REMOVAL",
          price: "From £150",
          description: "Safe removal of benign skin lesions",
          link: "/mole-skin-tag-removal"
        },
        {
          title: "ACNE TREATMENT",
          price: "From £250",
          description: "Comprehensive acne management and treatment",
          link: "/acne-treatment"
        },
        {
          title: "ECZEMA TREATMENT",
          price: "From £200",
          description: "Specialized treatment for eczema and dermatitis",
          link: "/eczema-treatment"
        },
        {
          title: "PSORIASIS TREATMENT",
          price: "From £250",
          description: "Advanced psoriasis management and therapy",
          link: "/psoriasis-treatment"
        },
        {
          title: "HYPERPIGMENTATION TREATMENT",
          price: "From £300",
          description: "Treatment for dark spots and uneven skin tone",
          link: "/hyperpigmentation-treatment"
        },
        {
          title: "SKIN CANCER SCREENING",
          price: "£300",
          description: "Comprehensive skin cancer detection and monitoring"
        },
        {
          title: "ROSACEA TREATMENT",
          price: "From £200",
          description: "Management of rosacea and facial redness"
        },
        {
          title: "PRESCRIPTION SKINCARE",
          price: "From £100",
          description: "Medical-grade skincare prescriptions",
          link: "/prescription-skin-care"
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
              <TabsTrigger value="botox">Botox</TabsTrigger>
              <TabsTrigger value="fillers">Dermal Fillers</TabsTrigger>
              <TabsTrigger value="hyaluronic">HA Makeover</TabsTrigger>
              <TabsTrigger value="skinBoosters">Skin Boosters</TabsTrigger>
              <TabsTrigger value="medspa">Skin & Hair Medicine</TabsTrigger>
              <TabsTrigger value="plasticsurgeon">Plastic Surgeon</TabsTrigger>
              <TabsTrigger value="dermatology">Dermatology</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="botox" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-2 text-amber-400">{treatments.botox.title}</h2>
              <p className="text-gray-400 mb-6">{treatments.botox.subtitle}</p>
              
              <div className="mt-8">
                {treatments.botox.items.map((item, index) => (
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

              {/* Botox Contouring Section */}
              <div className="mt-12">
                <div className="flex items-center mb-6">
                  <div className="flex-1 h-px bg-gradient-to-r from-amber-400/50 to-amber-600/50"></div>
                  <h3 className="text-xl font-bold text-amber-400 px-6">BOTOX CONTOURING</h3>
                  <div className="flex-1 h-px bg-gradient-to-l from-amber-400/50 to-amber-600/50"></div>
                </div>
                <p className="text-gray-400 mb-6 text-center">Advanced Botox treatments for body contouring and precise facial shaping</p>
                
                {treatments.botox.contouringItems.map((item, index) => (
                  <Card key={index} className="mb-4 bg-accent text-white border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{item.price}</p>
                        </div>
                      </div>
                      {item.link && (
                        <div className="mt-2 text-right">
                          {item.link.startsWith('/') ? (
                            <Link to={item.link}>
                              <Button variant="link" className="p-0 h-auto text-white hover:text-gray-300">
                                Learn more →
                              </Button>
                            </Link>
                          ) : (
                            <Button variant="link" className="p-0 h-auto text-white hover:text-gray-300">
                              Learn more →
                            </Button>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Sweat-Tox Section */}
              <div className="mt-12">
                <div className="flex items-center mb-6">
                  <div className="flex-1 h-px bg-gradient-to-r from-amber-400/50 to-amber-600/50"></div>
                  <h3 className="text-xl font-bold text-amber-400 px-6">SWEAT-TOX | FLUSHING</h3>
                  <div className="flex-1 h-px bg-gradient-to-l from-amber-400/50 to-amber-600/50"></div>
                </div>
                <p className="text-gray-400 mb-6 text-center">Treatments for excessive sweating and facial flushing</p>
                
                {treatments.botox.sweattoxItems.map((item, index) => (
                  <Card key={index} className="mb-4 bg-accent text-white border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="font-bold">{item.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
                              {item.link.startsWith('/') ? (
                                <Link to={item.link}>
                                  <Button variant="link" className="p-0 h-auto text-white hover:text-gray-300">
                                    Learn more →
                                  </Button>
                                </Link>
                              ) : (
                                <Button variant="link" className="p-0 h-auto text-white hover:text-gray-300">
                                  Learn more →
                                </Button>
                              )}
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
              
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/2">
                  <p className="text-gray-400 mb-6">{treatments.hyaluronic.description}</p>
                
                  <div className="overflow-x-auto mt-4">
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
                </div>
                
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/08578c07-c2c7-43fd-a3c3-d44e6594913c.png" 
                      alt="HA Makeover Before and After" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
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

          <TabsContent value="skinBoosters" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-2">{treatments.skinBoosters.title}</h2>
              <p className="text-gray-400 mb-6">{treatments.skinBoosters.subtitle}</p>
              <p className="text-gray-300 mb-6">{treatments.skinBoosters.description}</p>
              
              <div className="flex justify-center mb-8">
                <BeforeAfterImageViewer 
                  images={skinBoosterBeforeAfterImages}
                  triggerLabel="View Before & After Results"
                  title="Skin Boosters Before & After"
                  description="Real results from our advanced skin booster treatments"
                  className="text-base"
                />
              </div>
              
              <div className="mt-6">
                {treatments.skinBoosters.items.map((item, index) => (
                  <Card key={index} className="mb-4 bg-accent text-white border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          {item.description && <p className="text-sm text-gray-400">{item.description}</p>}
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{item.price}</p>
                          {item.hasBeforeAfter && (
                            <div className="mt-1">
                              <Button variant="link" className="p-0 h-auto text-purple-400 hover:text-purple-300 text-sm">
                                View Results →
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                      {item.link && (
                        <div className="mt-2 text-right">
                          <Link to={item.link}>
                            <Button variant="link" className="p-0 h-auto text-white hover:text-gray-300">
                              Learn more →
                            </Button>
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
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
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl font-semibold">{item.subtitle}</h3>
                          {item.link && (
                            <Link to={item.link}>
                              <Button variant="link" className="p-0 h-auto text-purple-400 hover:text-purple-300">
                                Learn more →
                              </Button>
                            </Link>
                          )}
                        </div>
                        
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

          <TabsContent value="plasticsurgeon" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-2">{treatments.plasticsurgeon.title}</h2>
              <p className="text-gray-400 mb-6">{treatments.plasticsurgeon.subtitle}</p>
              <p className="text-gray-300 mb-6">{treatments.plasticsurgeon.description}</p>
              
              <div className="mt-8">
                {treatments.plasticsurgeon.items.map((item, index) => (
                  <Card key={index} className="mb-4 bg-accent text-white border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          {item.description && <p className="text-sm text-gray-400">{item.description}</p>}
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{item.price}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="dermatology" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-2">{treatments.dermatology.title}</h2>
              <p className="text-gray-400 mb-6">{treatments.dermatology.subtitle}</p>
              <p className="text-gray-300 mb-6">{treatments.dermatology.description}</p>
              
              <div className="mt-8">
                {treatments.dermatology.items.map((item, index) => (
                  <Card key={index} className="mb-4 bg-accent text-white border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          {item.description && <p className="text-sm text-gray-400">{item.description}</p>}
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{item.price}</p>
                        </div>
                      </div>
                      {item.link && (
                        <div className="mt-2 text-right">
                          <Link to={item.link}>
                            <Button variant="link" className="p-0 h-auto text-white hover:text-gray-300">
                              Learn more →
                            </Button>
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <Button 
            className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6"
            onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
          >
            Book a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
