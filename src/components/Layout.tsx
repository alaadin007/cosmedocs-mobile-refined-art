
import { ReactNode, useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";

// Lazy load heavy components
const Footer = lazy(() => import("./Footer"));
const FloatingChatBot = lazy(() => import("./FloatingChatBot"));

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    // Set language attribute on html element
    document.documentElement.lang = "en-GB";
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
        <Suspense fallback={<div className="h-64 bg-black" />}>
          <Footer />
        </Suspense>
        <Suspense fallback={null}>
          <FloatingChatBot />
        </Suspense>
      </div>
    </>
  );
}
