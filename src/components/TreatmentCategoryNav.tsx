import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface TreatmentItem {
  title: string;
  link?: string;
}

interface Category {
  id: string;
  label: string;
  items: TreatmentItem[];
}

const categories: Category[] = [
  {
    id: "botox",
    label: "Botox",
    items: [
      { title: "Face Botox Areas", link: "/botox-london" },
      { title: "Forehead Lines Botox", link: "/forehead-lines-botox" },
      { title: "Frown Lines Botox", link: "/frown-line-botox" },
      { title: "Crow's Feet Botox", link: "/crows-feet-botox" },
      { title: "Chin Botox", link: "/chin-botox" },
      { title: "Gummy Smile Botox", link: "/gummy-smile-botox" },
      { title: "Bunny Lines Botox", link: "/bunny-lines-botox" },
      { title: "Lip Flip Botox", link: "/lip-flip" },
      { title: "Nefertiti Lift", link: "/nefertiti-botox-face-jaw-lift" },
      { title: "Migraine Botox", link: "/migraine-botox" },
      { title: "Bruxism Botox", link: "/bruxism-botox" },
      { title: "Masseter Botox", link: "/masseter-botox" },
      { title: "Hyperhidrosis", link: "/excessive-sweat-botox" },
      { title: "Trap Botox", link: "/trap-botox" },
    ]
  },
  {
    id: "fillers",
    label: "Dermal Fillers",
    items: [
      { title: "Lip Fillers", link: "/lip-fillers" },
      { title: "Cheek Filler", link: "/cheek-filler" },
      { title: "Jawline Filler", link: "/jawline-filler" },
      { title: "Chin Filler", link: "/chin-filler" },
      { title: "Under Eye Filler", link: "/tear-trough-filler" },
      { title: "Nasolabial Folds", link: "/nasolabial-folds" },
      { title: "Marionette Lines", link: "/marionette-lines" },
      { title: "Non-Surgical Rhinoplasty", link: "/non-surgical-nose-job" },
      { title: "Temple Filler", link: "/temple-filler-london" },
      { title: "Neck Fillers", link: "/neck-fillers" },
    ]
  },
  {
    id: "facelift",
    label: "Mini Facelifts",
    items: [
      { title: "Nefertiti Botox Lift", link: "/treatments/nefertiti-lift" },
      { title: "HA Makeover", link: "/treatments/ha-makeover" },
      { title: "PDO Thread Lift", link: "/treatments/pdo-threads" },
      { title: "Laser Fibre Lift", link: "/treatments/endolaser" },
    ]
  },
  {
    id: "skinBoosters",
    label: "Skin Boosters",
    items: [
      { title: "Profhilo", link: "/treatments/profhilo/" },
      { title: "Polynucleotides", link: "/treatments/polynucleotides/" },
      { title: "Sunekos 200", link: "/treatments/sunekos/" },
      { title: "Jalupro", link: "/treatments/jalupro/" },
      { title: "Lumi Eyes", link: "/treatments/lumi-eyes/" },
      { title: "Exosomes", link: "/treatments/exosomes/" },
      { title: "Microneedling", link: "/treatments/microneedling/" },
      { title: "HydraFacial", link: "/treatments/hydrafacial/" },
      { title: "PRP Treatment", link: "/treatments/prp/" },
      { title: "Skin Peel (Chemical)", link: "/treatments/chemical-peels/" },
    ]
  },
  {
    id: "medspa",
    label: "Skin & Hair Medicine",
    items: [
      { title: "Microneedling", link: "/microneedling" },
      { title: "Fat Dissolve", link: "/fat-dissolve" },
      { title: "Hair Transplant", link: "/hair-transplant-surgeon" },
      { title: "Prescription Skincare", link: "/prescription-skin-care" },
      { title: "Scar Reduction", link: "/scar-reduction" },
    ]
  },
  {
    id: "plasticsurgery",
    label: "Plastic Surgery",
    items: [
      { title: "Blepharoplasty", link: "/blepharoplasty" },
      { title: "Rhinoplasty", link: "/rhinoplasty" },
      { title: "Facelift Surgery", link: "/facelift-surgery" },
      { title: "Liposuction", link: "/liposuction" },
      { title: "CO2 Laser", link: "/co2-laser-resurfacing" },
    ]
  },
  {
    id: "dermatology",
    label: "Dermatology",
    items: [
      { title: "Mole Removal", link: "/mole-removal" },
      { title: "Skin Tag Removal", link: "/skin-tag-removal" },
      { title: "Acne Treatment", link: "/acne-treatment" },
      { title: "Eczema Treatment", link: "/eczema-treatment" },
      { title: "Psoriasis Treatment", link: "/psoriasis-treatment" },
    ]
  }
];

export default function TreatmentCategoryNav() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="relative bg-black/30 backdrop-blur-md border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-1 py-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <DropdownMenu key={category.id} onOpenChange={(open) => open && setActiveCategory(category.id)}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`text-sm px-4 py-2 rounded-md transition-all duration-200 whitespace-nowrap ${
                    activeCategory === category.id
                      ? "bg-white text-black"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {category.label}
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="bg-zinc-900 border-zinc-800 min-w-[200px] max-h-[400px] overflow-y-auto z-[60]"
              >
                <DropdownMenuItem
                  className="text-white hover:bg-white/10 cursor-pointer font-medium"
                  onClick={() => navigate(`/treatments?tab=${category.id}`)}
                >
                  View All {category.label}
                </DropdownMenuItem>
                <div className="h-px bg-zinc-700 my-1" />
                {category.items.map((item, index) => (
                  item.link ? (
                    <DropdownMenuItem
                      key={index}
                      className="text-gray-300 hover:text-white hover:bg-white/10 cursor-pointer"
                      onClick={() => navigate(item.link!)}
                    >
                      {item.title}
                    </DropdownMenuItem>
                  ) : null
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>
      </div>
    </div>
  );
}
