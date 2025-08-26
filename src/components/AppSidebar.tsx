import { useState } from "react";
import { Home, Sparkles, MessageSquare, Users, Phone, Mail, Instagram, Twitter } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Treatments", url: "/treatments", icon: Sparkles },
  { title: "Cosmetalk", url: "/cosmetalk", icon: MessageSquare },
  { title: "About Us", url: "/about", icon: Users },
  { title: "Partners", url: "/partners", icon: Users },
  { title: "Contact", url: "/contact", icon: Phone },
];

const contactItems = [
  {
    icon: Mail,
    label: "Email Us",
    action: () => window.open("mailto:info@cosmedocs.com", "_blank")
  },
  {
    icon: Phone,
    label: "Call Us",
    action: () => window.open("tel:+447735606447", "_blank")
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    action: () => window.open("https://wa.me/447735606447", "_blank")
  },
  {
    icon: Instagram,
    label: "Instagram",
    action: () => window.open("https://instagram.com/cosmedocs", "_blank")
  },
  {
    icon: Twitter,
    label: "Twitter",
    action: () => window.open("https://twitter.com/cosmedocs", "_blank")
  }
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const collapsed = state === "collapsed";
  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-amber-500/20 text-amber-400 font-medium border-l-2 border-amber-400" : "hover:bg-white/10 text-white/90 hover:text-white";

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-72"} bg-black/95 backdrop-blur-xl border-r border-amber-400/20`}
      collapsible="icon"
    >
      <SidebarContent className="bg-transparent pt-20">
        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-amber-400 font-medium px-4 py-2">
            {!collapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12">
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => 
                        `${getNavCls({ isActive })} flex items-center px-4 py-3 rounded-lg mx-2 transition-all duration-200`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Contact Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-amber-400 font-medium px-4 py-2">
            {!collapsed && "Quick Contact"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {contactItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild className="h-10">
                    <Button
                      variant="ghost"
                      onClick={item.action}
                      className="w-full justify-start text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 mx-2 rounded-lg"
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span className="ml-3">{item.label}</span>}
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Book Consultation Button */}
        {!collapsed && (
          <div className="p-4 mt-auto">
            <Button 
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-lg transition-all duration-300"
              onClick={() => window.open("https://www.harleystreetinstitute.com", "_blank")}
            >
              Book Consultation
            </Button>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}