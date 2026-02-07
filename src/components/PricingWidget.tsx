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
}

const PricingWidget = ({
  categories,
  title,
  compact = false,
  limit = 0,
  className = "",
}: PricingWidgetProps) => {
  const sections = getPricingByIds(categories);

  if (sections.length === 0) return null;

  return (
    <div
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="px-5 py-4 border-b border-white/10 bg-white/[0.03]">
        <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider">
          {title || "Price Guide"}
        </h3>
      </div>

      {/* Sections */}
      <div className="divide-y divide-white/5">
        {sections.map((section) => (
          <SectionBlock
            key={section.id}
            section={section}
            compact={compact}
            limit={limit}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-white/10 bg-white/[0.02]">
        <Link
          to="/treatments/"
          className="text-xs text-white/40 hover:text-[#C9A050] transition-colors"
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
}: {
  section: PricingSection;
  compact: boolean;
  limit: number;
}) {
  const items = limit > 0 ? section.items.slice(0, limit) : section.items;

  return (
    <div className="px-5 py-4">
      {/* Section title (only if multiple sections might display) */}
      <p className="text-xs font-medium text-white/50 uppercase tracking-wider mb-3">
        {section.title}
      </p>

      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i}>
            {/* Multi-price item */}
            {item.prices ? (
              <div className="space-y-1.5">
                <p className="text-sm text-white/80 font-medium">{item.title}</p>
                {item.description && !compact && (
                  <p className="text-xs text-white/40">{item.description}</p>
                )}
                {item.prices.map((p, j) => (
                  <div key={j} className="flex justify-between items-center pl-3">
                    <span className="text-xs text-white/60">{p.name}</span>
                    <span className="text-xs font-semibold text-[#C9A050]">
                      {p.price}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              /* Single-price item */
              <div className="flex justify-between items-start gap-3">
                <div className="min-w-0 flex-1">
                  {item.link ? (
                    <Link
                      to={item.link}
                      className="text-sm text-white/80 hover:text-[#C9A050] transition-colors leading-tight"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <span className="text-sm text-white/80 leading-tight">
                      {item.title}
                    </span>
                  )}
                  {item.description && !compact && (
                    <p className="text-xs text-white/40 mt-0.5">{item.description}</p>
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
        <p className="text-xs text-white/30 mt-2">
          +{section.items.length - limit} more treatments
        </p>
      )}
    </div>
  );
}

export default PricingWidget;
