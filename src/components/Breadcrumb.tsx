import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { generateBreadcrumbSchema } from "@/utils/richSchemas";

interface BreadcrumbItem {
  label: string;
  path?: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage?: string;
  variant?: "dark" | "light";
}

const Breadcrumb = ({ items, currentPage, variant = "dark" }: BreadcrumbProps) => {
  const location = useLocation();
  const isLight = variant === "light";
  const linkColor = isLight ? "text-gray-400 hover:text-[#C9A050]" : "text-white/50 hover:text-[#C9A050]";
  const chevronColor = isLight ? "text-gray-300" : "text-white/30";
  const breadcrumbItems = currentPage ? items : items.slice(0, -1);
  const finalPage = currentPage || (items.length > 0 ? items[items.length - 1].label : '');
  
  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbItems.map(item => ({
      name: item.label,
      url: item.path || item.href || '',
    })),
    finalPage,
    location.pathname
  );

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          <li className="flex items-center gap-2">
            <Link 
              to="/" 
              className={`${linkColor} transition-colors flex items-center gap-1`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className={`w-4 h-4 ${chevronColor}`} />
          </li>
          
          {breadcrumbItems.map((item, index) => {
            const itemPath = item.path || item.href || '#';
            return (
              <li key={itemPath} className="flex items-center gap-2">
                <Link 
                  to={itemPath}
                  className={`${linkColor} transition-colors`}
                >
                  {item.label}
                </Link>
                <ChevronRight className={`w-4 h-4 ${chevronColor}`} />
              </li>
            );
          })}
          
          {finalPage && (
            <li>
              <span className="text-[#C9A050] font-medium" aria-current="page">
                {finalPage}
              </span>
            </li>
          )}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
