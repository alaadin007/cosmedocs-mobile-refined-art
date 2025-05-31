
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";

interface Treatment {
  title: string;
  description: string;
  hasBeforeAfter?: boolean;
  baType?: string;
  link?: string;
}

interface PopularTreatmentsProps {
  title?: string;
  treatments?: Treatment[];
  showBeforeAfter?: boolean;
  className?: string;
}

const PopularTreatments = ({ 
  title = "Popular Treatments",
  treatments,
  showBeforeAfter = true,
  className = ""
}: PopularTreatmentsProps) => {
  // Default treatments if none provided
  const defaultTreatments: Treatment[] = [
    {
      title: "Botox",
      description: "Anti-wrinkle injections for frown lines, crows feet & forehead lines",
      hasBeforeAfter: true,
      baType: "botox"
    },
    {
      title: "Dermal Fillers",
      description: "Restore volume and enhance facial features. Pioneer of full face makeover & rejuvenation",
      hasBeforeAfter: true,
      baType: "dermal",
      link: "/dermal-filler-makeover"
    },
    {
      title: "Lip Fillers",
      description: "Subtle enhancement for natural-looking fullness",
      hasBeforeAfter: true,
      baType: "lip",
      link: "/lip-fillers"
    },
    {
      title: "Non-Surgical Nose Job",
      description: "Reshape without surgery",
      hasBeforeAfter: true,
      baType: "nose",
      link: "/non-surgical-nose-job"
    },
    {
      title: "Skin Boosters",
      description: "Deep hydration and rejuvenation",
      hasBeforeAfter: true,
      baType: "skin"
    },
    {
      title: "Chin & Jawline Enhancement",
      description: "Define your facial profile",
      hasBeforeAfter: true,
      baType: "chin"
    }
  ];

  const treatmentsList = treatments || defaultTreatments;

  // Before/after image data with properly organized lip filler images
  const getBeforeAfterImages = (baType: string) => {
    const imageData = {
      botox: [
        { 
          src: "/lovable-uploads/36b15e21-1905-49d8-b920-68bc23b235c5.png", 
          alt: "Botox before and after treatment results", 
          caption: "Professional botox treatment for wrinkle reduction and facial rejuvenation" 
        }
      ],
      dermal: [
        { 
          src: "/lovable-uploads/90c69926-3cb1-4844-a634-68a8f111cb1a.png", 
          alt: "Dermal fillers before and after treatment", 
          caption: "Full face dermal filler makeover showing enhanced facial contours" 
        }
      ],
      lip: [
        { 
          src: "/lovable-uploads/a9533a9b-0dd5-4e65-8c88-8e415e07f1ff.png", 
          alt: "Lip fillers transformation 2016-2019", 
          caption: "Dramatic lip transformation journey over 3 years showing progressive enhancement" 
        },
        { 
          src: "/lovable-uploads/0fc2f9cc-be54-45a6-b6ac-11c1f0dc04ad.png", 
          alt: "Lip fillers with defined peaks and improved ratio", 
          caption: "Enhanced lip definition with improved upper to lower lip ratio and defined peaks" 
        },
        { 
          src: "/lovable-uploads/ca0d519c-295a-47a5-ad68-27462c0fa778.png", 
          alt: "Natural lip enhancement before and after", 
          caption: "Subtle, natural-looking lip enhancement maintaining facial harmony" 
        },
        { 
          src: "/lovable-uploads/94868651-44b6-4cfb-b3a4-8d3629c1358b.png", 
          alt: "Lip fillers progression before, after, and 5 weeks", 
          caption: "Complete lip filler journey: before treatment, immediately after, and 5 weeks healed" 
        },
        { 
          src: "/lovable-uploads/a91d9151-e465-4ba8-82e8-f59fee576396.png", 
          alt: "Lip fillers progression from none to two syringes", 
          caption: "Progressive lip enhancement from natural to 1ml to 2ml showing gradual improvement" 
        },
        { 
          src: "/lovable-uploads/155a5ab6-6a67-4fe4-a246-f77856aba78d.png", 
          alt: "Lip volume progression before, 1ml, and 2ml", 
          caption: "Step-by-step lip volume enhancement: before treatment, after 1ml, and after 2ml" 
        }
      ],
      nose: [
        { 
          src: "/lovable-uploads/8fc7a776-c255-4ca9-a8d9-573f4083b7f1.png", 
          alt: "Non-surgical nose job before and after", 
          caption: "Non-surgical rhinoplasty results showing improved nose profile and symmetry" 
        }
      ],
      skin: [
        { 
          src: "/lovable-uploads/0146916c-8864-4889-b0d5-b330859a2c85.png", 
          alt: "Skin boosters before and after treatment", 
          caption: "Skin booster treatment results showing improved hydration and skin quality" 
        }
      ],
      chin: [
        { 
          src: "/lovable-uploads/1c08600a-b561-48ca-ae0a-246717da30a7.png", 
          alt: "Chin and jawline enhancement before and after", 
          caption: "Chin and jawline enhancement results showing improved facial definition and profile" 
        }
      ]
    };
    return imageData[baType as keyof typeof imageData] || [];
  };

  return (
    <section className={`py-20 bg-black ${className}`} aria-labelledby="treatments-heading">
      <div className="page-container">
        <h2 id="treatments-heading" className="text-3xl font-bold mb-12 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatmentsList.map((treatment, index) => (
            <motion.div 
              key={treatment.title} 
              className="bg-accent rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">{treatment.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{treatment.description}</p>
              {showBeforeAfter && treatment.hasBeforeAfter && treatment.baType ? (
                <div className="flex gap-3">
                  <BeforeAfterImageViewer 
                    images={getBeforeAfterImages(treatment.baType)}
                    triggerLabel="See Before & After"
                    title={`${treatment.title} Before & After`}
                    description={`Results achieved with our premium ${treatment.title.toLowerCase()} treatments`}
                  />
                  {treatment.link && (
                    <Link 
                      to={treatment.link}
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                    >
                      Learn more →
                    </Link>
                  )}
                </div>
              ) : treatment.link ? (
                <Link 
                  to={treatment.link}
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium cursor-pointer transition-colors"
                >
                  Learn more →
                </Link>
              ) : (
                <div className="text-purple-400 hover:text-purple-300 text-sm font-medium cursor-pointer">
                  Learn more →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTreatments;
