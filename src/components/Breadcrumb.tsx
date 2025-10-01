import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li key={index} className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            {item.href ? (
              <>
                <Link 
                  to={item.href} 
                  className="text-purple-300 hover:text-purple-200 transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
                <meta itemProp="position" content={String(index + 1)} />
                {index < items.length - 1 && (
                  <ChevronRight className="mx-2 text-gray-500" size={16} />
                )}
              </>
            ) : (
              <>
                <span className="text-gray-400" itemProp="name">{item.label}</span>
                <meta itemProp="position" content={String(index + 1)} />
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
