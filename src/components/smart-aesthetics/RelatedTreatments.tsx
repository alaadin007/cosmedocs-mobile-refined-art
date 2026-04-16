import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const treatmentLinks: Record<string, { title: string; link: string }[]> = {
  "why-treatments-fail": [
    { title: "Free AI Assessment", link: "https://ai.cosmedocs.com" },
    { title: "Book Consultation", link: "https://med.as.me/harleystreet" },
  ],
  "skin-not-surface": [
    { title: "Chemical Peel", link: "/chemical-peel" },
    { title: "HydraFacial", link: "/hydrafacial" },
    { title: "Prescription Skincare", link: "/prescription-skin-care" },
  ],
  "structure-before-lift": [
    { title: "Profhilo", link: "/profhilo" },
    { title: "Polynucleotides", link: "/polynucleotide-treatment" },
    { title: "Skin Boosters", link: "/skin-boosters" },
  ],
  "volume-story": [
    { title: "Cheek Filler", link: "/cheek-filler" },
    { title: "Tear Trough Filler", link: "/tear-trough-filler" },
    { title: "Mini Facelift", link: "/non-surgical-facelift" },
  ],
  "thirties-shift": [
    { title: "Preventative Botox", link: "/botox-london" },
    { title: "Jawline Filler", link: "/jawline-filler" },
    { title: "Lip Filler", link: "/lip-fillers" },
  ],
  "forties-lift": [
    { title: "HA Makeover", link: "/treatments/ha-makeover" },
    { title: "PDO Threads", link: "/pdo-threads" },
    { title: "Profhilo", link: "/profhilo" },
  ],
  "fifties-elegance": [
    { title: "Mini Facelift", link: "/non-surgical-facelift" },
    { title: "Neck Fillers", link: "/neck-fillers" },
    { title: "CO2 Laser", link: "/co2-laser-resurfacing" },
  ],
  "when-not-to-treat": [
    { title: "Chat With AI Doctor", link: "#" },
    { title: "Book Consultation", link: "https://med.as.me/harleystreet" },
  ],
  "core-principles": [
    { title: "View All Treatments", link: "/treatments" },
    { title: "About CosmeDocs", link: "/about" },
  ],
  "three-cell-philosophy": [
    { title: "Vitamin C Serum", link: "/shop/vitamin-c-serum/" },
    { title: "Retinol Cream", link: "/shop/retinol-cream/" },
    { title: "Shop Cosmeceuticals", link: "/shop/" },
    { title: "Read the Full Article", link: "/blog/three-cell-skin-philosophy/" },
  ],
};

export default function RelatedTreatments({ principleId }: { principleId: string }) {
  const treatments = treatmentLinks[principleId];
  if (!treatments) return null;

  return (
    <div className="mt-10 pt-8 border-t border-gray-200">
      <p className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em] mb-4">
        Where this matters clinically
      </p>
      <div className="flex flex-wrap gap-3">
        {treatments.map((treatment, index) => {
          const isExternal = treatment.link.startsWith("http");
          const Component = isExternal ? "a" : Link;
          const props = isExternal
            ? { href: treatment.link, target: "_blank", rel: "noopener noreferrer" }
            : { to: treatment.link };

          return (
            <Component
              key={index}
              {...(props as any)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-amber-50 border border-gray-200 hover:border-[#C9A050]/40 text-gray-500 hover:text-[#C9A050] rounded-full text-xs font-medium transition-all duration-300 shadow-sm"
            >
              {treatment.title}
              <ArrowRight className="w-3 h-3" />
            </Component>
          );
        })}
      </div>
    </div>
  );
}
