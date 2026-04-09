import { Link } from "react-router-dom";
import { getPricingByIds, type PricingSection } from "@/data/pricing";

interface PricingWidgetProps {
  /** One or more pricing section IDs to display */
  categories: string[];
  /** Override widget title */
  title?: string;
  /** Compact mode hides descriptions */
  compact?: boolean;
  /** Maximum items to show per section (0 = all) */
  limit?: number;
  /** Optional className override */
  className?: string;
  /** Visual variant */
  variant?: "dark" | "light";
}

const PricingWidget = ({
  categories,
  title,
  compact = false,
  limit = 0,
  className = "",
  variant = "dark",
}: PricingWidgetProps) => {
  const sections = getPricingByIds(categories);
  const isLight = variant === "light";

  if (sections.length === 0) return null;

  return (
    <div
      className={`${isLight ? "bg-gray-100 border-gray-200" : "bg-white/5 border-white/10"} backdrop-blur-sm border rounded-2xl overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className={`px-5 py-4 border-b ${isLight ? "border-gray-200 bg-gray-50" : "border-white/10 bg-white/[0.03]"}`}>
        <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider">
          {title || "Price Guide"}
        </h3>
      </div>

      {/* Sections */}
      <div className={`divide-y ${isLight ? "divide-gray-100" : "divide-white/5"}`}>
        {sections.map((section) => (
          <SectionBlock
            key={section.id}
            section={section}
            compact={compact}
            limit={limit}
            isLight={isLight}
          />
        ))}
      </div>

      {/* Footer */}
      <div className={`px-5 py-3 border-t ${isLight ? "border-gray-200 bg-gray-50" : "border-white/10 bg-white/[0.02]"}`}>
        <Link
          to="/prices/"
          className={`text-xs ${isLight ? "text-gray-400 hover:text-[#C9A050]" : "text-white/40 hover:text-[#C9A050]"} transition-colors`}
        >
          View full price list →
        </Link>
      </div>
    </div>
  );
};

function SectionBlock({
  section,
  compact,
  limit,
  isLight,
}: {
  section: PricingSection;
  compact: boolean;
  limit: number;
  isLight: boolean;
}) {
  const items = limit > 0 ? section.items.slice(0, limit) : section.items;

  return (
    <div className="px-5 py-4">
      {/* Section title */}
      <p className={`text-xs font-medium ${isLight ? "text-gray-500" : "text-white/50"} uppercase tracking-wider mb-3`}>
        {section.title}
      </p>

      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i}>
            {item.prices ? (
              <div className="space-y-1.5">
                <p className={`text-sm ${isLight ? "text-gray-700" : "text-white/80"} font-medium`}>{item.title}</p>
                {item.description && !compact && (
                  <p className={`text-xs ${isLight ? "text-gray-400" : "text-white/40"}`}>{item.description}</p>
                )}
                {item.prices.map((p, j) => (
                  <div key={j} className="flex justify-between items-center pl-3">
                    <span className={`text-xs ${isLight ? "text-gray-500" : "text-white/60"}`}>{p.name}</span>
                    <span className="text-xs font-semibold text-[#C9A050]">
                      {p.price}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-between items-start gap-3">
                <div className="min-w-0 flex-1">
                  {item.link ? (
                    <Link
                      to={item.link}
                      className={`text-sm ${isLight ? "text-gray-700 hover:text-[#C9A050]" : "text-white/80 hover:text-[#C9A050]"} transition-colors leading-tight`}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <span className={`text-sm ${isLight ? "text-gray-700" : "text-white/80"} leading-tight`}>
                      {item.title}
                    </span>
                  )}
                  {item.description && !compact && (
                    <p className={`text-xs ${isLight ? "text-gray-400" : "text-white/40"} mt-0.5`}>{item.description}</p>
                  )}
                </div>
                {item.price && (
                  <span className="text-sm font-semibold text-[#C9A050] whitespace-nowrap">
                    {item.price}
                  </span>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      {limit > 0 && section.items.length > limit && (
        <p className={`text-xs ${isLight ? "text-gray-300" : "text-white/30"} mt-2`}>
          +{section.items.length - limit} more treatments
        </p>
      )}
    </div>
  );
}

export default PricingWidget;
