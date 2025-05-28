
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";

interface Treatment {
  title: string;
  description: string;
  hasBeforeAfter?: boolean;
  baType?: string;
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
      baType: "dermal"
    },
    {
      title: "Lip Fillers",
      description: "Subtle enhancement for natural-looking fullness",
      hasBeforeAfter: true,
      baType: "lip"
    },
    {
      title: "Non-Surgical Nose Job",
      description: "Reshape without surgery",
      hasBeforeAfter: true,
      baType: "nose"
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

  // Before/after image data with new lip filler images
  const getBeforeAfterImages = (baType: string) => {
    const imageData = {
      botox: [
        { src: "/lovable-uploads/36b15e21-1905-49d8-b920-68bc23b235c5.png", alt: "Botox before and after", caption: "Botox treatment results" }
      ],
      dermal: [
        { src: "/lovable-uploads/90c69926-3cb1-4844-a634-68a8f111cb1a.png", alt: "Dermal fillers before and after", caption: "Dermal filler treatment results" }
      ],
      lip: [
        { src: "/lovable-uploads/a9533a9b-0dd5-4e65-8c88-8e415e07f1ff.png", alt: "Lip fillers before and after 2016-2019", caption: "Dramatic lip transformation over 3 years" },
        { src: "/lovable-uploads/0fc2f9cc-be54-45a6-b6ac-11c1f0dc04ad.png", alt: "Lip fillers showing defined peaks", caption: "Enhanced lip definition with improved ratio" },
        { src: "/lovable-uploads/ca0d519c-295a-47a5-ad68-27462c0fa778.png", alt: "Natural lip enhancement", caption: "Subtle, natural-looking lip enhancement" },
        { src: "/lovable-uploads/94868651-44b6-4cfb-b3a4-8d3629c1358b.png", alt: "Lip fillers progression", caption: "Before, after, and 5 weeks later results" },
        { src: "/lovable-uploads/a91d9151-e465-4ba8-82e8-f59fee576396.png", alt: "Lip fillers none to two syringes", caption: "Progressive enhancement from none to two syringes" },
        { src: "/lovable-uploads/155a5ab6-6a67-4fe4-a246-f77856aba78d.png", alt: "Lip volume progression", caption: "Before, 1ml, and 2ml treatment progression" }
      ],
      nose: [
        { src: "/lovable-uploads/8fc7a776-c255-4ca9-a8d9-573f4083b7f1.png", alt: "Non-surgical nose job before and after", caption: "Non-surgical nose job results" }
      ],
      skin: [
        { src: "/lovable-uploads/0146916c-8864-4889-b0d5-b330859a2c85.png", alt: "Skin boosters before and after", caption: "Skin booster treatment results" }
      ],
      chin: [
        { src: "/lovable-uploads/1c08600a-b561-48ca-ae0a-246717da30a7.png", alt: "Chin and jawline enhancement before and after", caption: "Chin and jawline enhancement results" }
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
                <BeforeAfterImageViewer 
                  images={getBeforeAfterImages(treatment.baType)}
                  triggerLabel="See Before & After"
                  title={`${treatment.title} Before & After`}
                  description={`Results achieved with our premium ${treatment.title.toLowerCase()} treatments`}
                />
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
