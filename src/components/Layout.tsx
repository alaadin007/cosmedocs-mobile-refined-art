
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  console.log("Layout component rendering");
  console.log("Current pathname:", window.location.pathname);
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
