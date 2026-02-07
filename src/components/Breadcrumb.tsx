import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  label: string;
  path?: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage?: string;
}

const Breadcrumb = ({ items, currentPage }: BreadcrumbProps) => {
  // If currentPage is provided, use it. Otherwise, treat the last item as the current page
  const breadcrumbItems = currentPage ? items : items.slice(0, -1);
  const finalPage = currentPage || (items.length > 0 ? items[items.length - 1].label : '');
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.cosmedocs.co.uk"
      },
      ...breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://www.cosmedocs.co.uk${item.path || item.href || ''}`
      })),
      ...(finalPage ? [{
        "@type": "ListItem",
        "position": breadcrumbItems.length + 2,
        "name": finalPage,
        "item": `https://www.cosmedocs.co.uk${window.location.pathname}`
      }] : [])
    ]
  };

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
              className="text-white/50 hover:text-[#C9A050] transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-white/30" />
          </li>
          
          {breadcrumbItems.map((item, index) => {
            const itemPath = item.path || item.href || '#';
            return (
              <li key={itemPath} className="flex items-center gap-2">
                <Link 
                  to={itemPath}
                  className="text-white/50 hover:text-[#C9A050] transition-colors"
                >
                  {item.label}
                </Link>
                <ChevronRight className="w-4 h-4 text-white/30" />
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
