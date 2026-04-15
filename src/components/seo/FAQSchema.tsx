import { Helmet } from "react-helmet-async";
import { generateFAQSchema, type FAQItem } from "@/utils/richSchemas";

interface FAQSchemaProps {
  faqs: FAQItem[];
}

/**
 * Drop-in component that injects FAQPage JSON-LD schema.
 * Usage: <FAQSchema faqs={faqs} />
 */
const FAQSchema = ({ faqs }: FAQSchemaProps) => {
  if (!faqs || faqs.length === 0) return null;
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(generateFAQSchema(faqs))}
      </script>
    </Helmet>
  );
};

export default FAQSchema;
