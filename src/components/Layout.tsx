import { ReactNode, useEffect, lazy, Suspense, memo } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";

// Lazy load heavy components with preload hints
const Footer = lazy(() => import("./Footer"));
const FloatingChatBot = lazy(() => import("./FloatingChatBot"));

interface LayoutProps {
  children: ReactNode;
}

// Memoize layout to prevent unnecessary re-renders
const Layout = memo(function Layout({ children }: LayoutProps) {
  useEffect(() => {
    document.documentElement.lang = "en-GB";
    
    // Preload footer after initial render
    const timer = setTimeout(() => {
      import("./Footer");
    }, 100);
    
    // Preload chatbot after page settles
    const chatTimer = setTimeout(() => {
      import("./FloatingChatBot");
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(chatTimer);
    };
  }, []);
  
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta httpEquiv="Content-Language" content="en-GB" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen w-full">
        <Header />
        <main className="flex-grow pt-16">{children}</main>
        <Suspense fallback={<div className="h-48 bg-background" aria-hidden="true" />}>
          <Footer />
        </Suspense>
        <Suspense fallback={null}>
          <FloatingChatBot />
        </Suspense>
      </div>
    </>
  );
});

export default Layout;
