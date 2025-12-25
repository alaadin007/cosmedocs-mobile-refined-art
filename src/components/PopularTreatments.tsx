import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import AutoLinkedText from "./AutoLinkedText";

interface Treatment {
  title: string;
  description: string;
  link?: string;
  hasBeforeAfter?: boolean;
}

interface PopularTreatmentsProps {
  title?: string;
  treatments?: Treatment[];
  className?: string;
  showBeforeAfter?: boolean;
}

const PopularTreatments = memo(({ 
  title = "Popular Treatments and Indications",
  treatments,
  className = "",
  showBeforeAfter = false
}: PopularTreatmentsProps) => {

  const defaultTreatments: Treatment[] = [
    {
      title: "Botox – The Art of a Natural Pause in Ageing",
      description: "Subtle muscle relaxation for a refreshed, rested look.\n\n• Frown lines (glabellar lines)\n• Forehead lines\n• Crow's feet (eye wrinkles)\n• Brow lift (non-surgical)\n• Gummy smile correction\n• Jawline slimming (masseter reduction)\n• Excessive sweating (hyperhidrosis)",
      link: "/botox-london"
    },
    {
      title: "Dermal Fillers – Restore Balance, Contour & Confidence",
      description: "Volume where it matters, definition where it's needed.\n\n• Cheek enhancement & contouring\n• Post-weight loss volume restoration\n• Sunken or hollow cheeks\n• Tear trough (under-eye hollows)\n• Temple hollow correction\n• Nose reshaping (liquid rhinoplasty)\n• Smile line (nasolabial folds) softening\n• Marionette line rejuvenation\n• Jawline & chin sculpting\n• Full-face rejuvenation & makeover",
      link: "/dermal-fillers"
    },
    {
      title: "Non-Surgical Facelift & Neck Lift",
      description: "✓ No scars, no marks\n⏱ Lasting 2-3 years\n\nCombination of volumising and lifting dissolvable threads. Forming and teaching this combination since 2014 — one of the first in the UK.\n\n✓ No downtime",
      link: "/non-surgical-facelift"
    },
    {
      title: "Lip Fillers – Elegance in Every Curve",
      description: "Subtle enhancement, never exaggerated.\n\n• Natural volume restoration\n• Cupid's bow & lip border definition\n• Correcting asymmetry\n• Hydration for smoother, softer lips",
      link: "/lip-fillers"
    },
    {
      title: "Non-Surgical Nose Job – Refined Harmony Without Surgery",
      description: "Reshape in minutes, no downtime.\n\n• Straighten small bumps\n• Lift drooping nasal tip\n• Correct minor asymmetry\n• Enhance nasal bridge",
      link: "/non-surgical-nose-job"
    },
    {
      title: "Skin Boosters – Radiance From Within",
      description: "Hydration, glow, and prevention in one.\n\n• Dry, dehydrated skin\n• Fine lines & crepiness\n• Sun-damaged skin\n• Loss of elasticity\n• Tired, dull complexion\n• Preventative anti-ageing",
      link: "/skin-boosters"
    }
  ];

  const treatmentsList = treatments || defaultTreatments;

  return (
    <section className={`py-20 bg-background ${className}`} aria-labelledby="treatments-heading">
      <div className="page-container">
        <h2 id="treatments-heading" className="text-3xl md:text-4xl font-bold mb-12 text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-amber-400 to-amber-600">{title}</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatmentsList.map((treatment, index) => (
            <div 
              key={treatment.title} 
              className="bg-accent rounded-lg p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-3">{treatment.title}</h3>
              <div className="text-muted-foreground text-sm mb-4 whitespace-pre-line">
                <AutoLinkedText>{treatment.description}</AutoLinkedText>
              </div>
              {treatment.link ? (
                <Link 
                  to={treatment.link}
                  className="text-link hover:text-link-hover text-sm font-medium transition-colors"
                >
                  Learn more →
                </Link>
              ) : (
                <div className="text-link hover:text-link-hover text-sm font-medium cursor-pointer">
                  Learn more →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default PopularTreatments;
