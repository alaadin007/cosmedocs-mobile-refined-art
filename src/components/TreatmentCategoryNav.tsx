import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      { title: "Brow Lift Botox", link: "/botox-london" },
      { title: "Gummy Smile Botox", link: "/gummy-smile-botox" },
      { title: "Bunny Lines Botox", link: "/bunny-lines-botox" },
      { title: "Lip Flip Botox", link: "/lip-flip" },
      { title: "Nefertiti Lift", link: "/nefertiti-lift" },
      { title: "Migraine Botox", link: "/migraine-botox" },
      { title: "Bruxism Botox", link: "/bruxism-botox" },
      { title: "Masseter Botox", link: "/masseter-botox" },
      { title: "Hyperhidrosis", link: "/hyperhidrosis-botox" },
    ]
  },
  {
    id: "fillers",
    label: "Dermal Fillers",
    items: [
      { title: "Lip Fillers", link: "/lip-fillers" },
      { title: "Cheek Fillers", link: "/cheek-fillers-london" },
      { title: "Jawline Filler", link: "/jawline-filler-london" },
      { title: "Chin Filler", link: "/chin-filler-london" },
      { title: "Under Eye Fillers", link: "/tear-trough-filler" },
      { title: "Nasolabial Folds", link: "/nasolabial-folds-filler" },
      { title: "Non-Surgical Rhinoplasty", link: "/non-surgical-nose-job" },
      { title: "Temple Filler", link: "/temple-filler" },
      { title: "Hand Rejuvenation", link: "/hand-rejuvenation" },
    ]
  },
  {
    id: "hyaluronic",
    label: "HA Makeover",
    items: [
      { title: "Full Face Rejuvenation", link: "/non-surgical-facelift" },
      { title: "8 Point Facelift", link: "/8-point-facelift" },
      { title: "Liquid Facelift", link: "/liquid-facelift" },
    ]
  },
  {
    id: "skinBoosters",
    label: "Skin Boosters",
    items: [
      { title: "Profhilo", link: "/profhilo-treatment" },
      { title: "Polynucleotides", link: "/polynucleotide-treatment" },
      { title: "Seventy Hyal", link: "/seventy-hyal" },
      { title: "Sunekos", link: "/sunekos" },
      { title: "Lemon Bottle", link: "/lemon-bottle" },
    ]
  },
  {
    id: "medspa",
    label: "Skin & Hair Medicine",
    items: [
      { title: "PRP Treatment", link: "/prp-treatment" },
      { title: "Microneedling", link: "/microneedling" },
      { title: "Chemical Peels", link: "/chemical-peels" },
      { title: "Mesotherapy", link: "/mesotherapy" },
      { title: "Hair Loss Treatment", link: "/hair-loss-treatment" },
    ]
  },
  {
    id: "plasticsurgery",
    label: "Plastic Surgery",
    items: [
      { title: "Blepharoplasty", link: "/blepharoplasty" },
      { title: "Rhinoplasty", link: "/rhinoplasty" },
      { title: "Facelift Surgery", link: "/facelift-surgery" },
    ]
  },
  {
    id: "dermatology",
    label: "Dermatology",
    items: [
      { title: "Skin Lesion Removal", link: "/skin-lesion-removal" },
      { title: "Mole Removal", link: "/mole-removal" },
      { title: "Skin Tag Removal", link: "/skin-tag-removal" },
      { title: "Acne Treatment", link: "/acne-treatment" },
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
