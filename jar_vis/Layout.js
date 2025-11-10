import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { MessageSquare, Database, Settings, Info, Sparkles } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Chat",
    url: createPageUrl("Chat"),
    icon: MessageSquare,
  },
  {
    title: "Knowledge Base",
    url: createPageUrl("KnowledgeBase"),
    icon: Database,
  },
  {
    title: "Settings",
    url: createPageUrl("Settings"),
    icon: Settings,
  },
  {
    title: "About",
    url: createPageUrl("About"),
    icon: Info,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <Sidebar className="border-r border-gray-800 bg-gray-900/95 backdrop-blur-sm">
          <SidebarHeader className="border-b border-gray-800 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-pulse">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-white text-xl tracking-tight">J.A.R.V.I.S</h2>
                <p className="text-xs text-gray-400">Just A Rather Very Intelligent System</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-4">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                Navigation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`hover:bg-gray-800 hover:text-cyan-400 transition-all duration-200 rounded-xl mb-1 ${
                          location.pathname === item.url ? 'bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-600/20 text-cyan-400 border border-cyan-500/30' : 'text-gray-300'
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 px-6 py-4">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-gray-800 p-2 rounded-lg transition-colors duration-200 text-gray-300 hover:text-cyan-400" />
              <h1 className="text-xl font-bold text-white">J.A.R.V.I.S</h1>
            </div>
          </header>

          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}