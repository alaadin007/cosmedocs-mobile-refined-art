import { EyeOff } from "lucide-react";

interface DiscretionBadgeProps {
  variant?: "inline" | "card";
  className?: string;
}

/**
 * Reusable discretion trust signal — sprinkle across treatment pages.
 * "inline" = compact one-liner for trust rows / sidebars
 * "card" = expanded card for sections needing more context
 */
const DiscretionBadge = ({ variant = "inline", className = "" }: DiscretionBadgeProps) => {
  if (variant === "card") {
    return (
      <div className={`bg-white/[0.02] border border-[#C9A050]/20 rounded-xl p-4 ${className}`}>
        <div className="flex items-center gap-2 mb-1.5">
          <EyeOff className="w-3.5 h-3.5 text-[#C9A050]" />
          <p className="text-xs text-[#C9A050] font-medium uppercase tracking-wider">Completely Discreet</p>
        </div>
        <p className="text-xs text-white/50 leading-relaxed">
          No outside signage. No clinic branding. Your privacy is absolute — trusted by celebrities and high-profile patients.
        </p>
      </div>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 text-xs text-white/50 ${className}`}>
      <EyeOff className="w-3 h-3 text-[#C9A050]" />
      <span>No signage · Total discretion</span>
    </span>
  );
};

export default DiscretionBadge;
