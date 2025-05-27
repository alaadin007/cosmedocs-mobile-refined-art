
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Treatments from "./pages/Treatments";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import DermalFillerMakeover from "./pages/DermalFillerMakeover";
import NotFound from "./pages/NotFound";

// SEO helper function to generate standard metadata
export const generateSEOMetadata = (
  title: string,
  description: string,
  canonicalPath: string = "",
  imageUrl: string = "/lovable-uploads/c60a1e1c-0406-4552-9246-e93bdc4d7474.png"
) => {
  const siteName = "Cosmedocs - Premium Aesthetic Medicine Treatments";
  const fullTitle = `${title} | ${siteName}`;
  const siteUrl = "https://cosmedocs.com";
  
  return {
    title: fullTitle,
    description,
    canonical: canonicalPath ? `${siteUrl}${canonicalPath}` : siteUrl,
    image: imageUrl.startsWith("http") ? imageUrl : `${siteUrl}${imageUrl}`,
  };
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Default SEO tags - will be overridden by page-specific ones */}
        <title>Cosmedocs | Premium Aesthetic Medicine Treatments in London Harley Street</title>
        <meta name="description" content="Experience premium aesthetic medicine treatments including botox, fillers, and skin rejuvenation at Cosmedocs. Our expert practitioners deliver natural-looking results." />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cosmedocs.com/" />
        <meta property="og:title" content="Cosmedocs | Premium Aesthetic Medicine Treatments in London Harley Street" />
        <meta property="og:description" content="Experience premium aesthetic medicine treatments including botox, fillers, and skin rejuvenation at Cosmedocs. Our expert practitioners deliver natural-looking results." />
        <meta property="og:image" content="https://cosmedocs.com/lovable-uploads/c60a1e1c-0406-4552-9246-e93bdc4d7474.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cosmedocs.com/" />
        <meta property="twitter:title" content="Cosmedocs | Premium Aesthetic Medicine Treatments in London Harley Street" />
        <meta property="twitter:description" content="Experience premium aesthetic medicine treatments including botox, fillers, and skin rejuvenation at Cosmedocs. Our expert practitioners deliver natural-looking results." />
        <meta property="twitter:image" content="https://cosmedocs.com/lovable-uploads/c60a1e1c-0406-4552-9246-e93bdc4d7474.png" />
        {/* Structured data - Organization */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Cosmedocs",
              "url": "https://cosmedocs.com/",
              "logo": "https://cosmedocs.com/lovable-uploads/c60a1e1c-0406-4552-9246-e93bdc4d7474.png",
              "description": "Premium aesthetic medicine treatments in London Harley Street",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8-10 Harley Street",
                "addressLocality": "London",
                "postalCode": "W1G 9PF",
                "addressCountry": "UK"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44-000-000-0000",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/cosmedocs",
                "https://www.instagram.com/cosmedocs",
                "https://twitter.com/cosmedocs"
              ]
            }
          `}
        </script>
      </Helmet>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/treatments" element={<Treatments />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/dermal-filler-makeover" element={<DermalFillerMakeover />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
