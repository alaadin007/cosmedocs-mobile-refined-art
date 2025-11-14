
import { ReactNode, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import FloatingChatBot from "./FloatingChatBot";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  console.log("Layout component rendering");
  console.log("Current pathname:", window.location.pathname);
  
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
        <Footer />
        <FloatingChatBot />
      </div>
    </>
  );
}
