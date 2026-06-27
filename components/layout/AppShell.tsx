import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import PreviewWorkspace from "./PreviewWorkspace";

export default function AppShell() {
  return (
    <div className="relative flex flex-col h-screen w-screen bg-background overflow-hidden text-slate-100 font-sans">
      {/* Premium Dot Grid + Gold Glow Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none app-background-base">
        {/* Layer 1: Dot Grid (Static) */}
        <div className="absolute inset-0 app-background-dots" />
        {/* Layer 2 & 3: Glows (Animated) */}
        <div className="absolute inset-0 app-background-glows" />
      </div>

      <style>{`
        @media (max-width: 767px) {
          .mobile-preview-height,
          .mobile-preview-height > main {
            height: calc((100vh - 64px) * 0.45) !important;
          }
          .mobile-sidebar-height {
            height: calc((100vh - 64px) * 0.55 - 16px) !important;
          }
        }
      `}</style>

      {/* 1. Full-Width Top Header */}
      <div className="shrink-0 relative z-10">
        <Header />
      </div>

      {/* 
        2. Main Application Workspace Area
        On desktop: Two-column layout (Sidebar: ~400px | Desktop Preview: Remaining space).
      */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-0 w-full overflow-hidden relative z-10">
        {/* Desktop Preview Workspace (takes remaining space, renders first on mobile stack) */}
        <div className="order-1 lg:order-2 flex-1 h-full overflow-y-auto scrollbar-none min-h-0 max-md:sticky max-md:top-0 max-md:z-40 max-md:h-[45vh] max-md:flex-none max-md:bg-background max-md:overflow-hidden mobile-preview-height">
          <PreviewWorkspace />
        </div>

        {/* Beautiful Separator on mobile */}
        <div className="hidden max-md:flex order-2 h-4 w-full shrink-0 items-center justify-center border-t border-gray-100 dark:border-[#1E2D4A] bg-white dark:bg-[#0D1425] shadow-[0_-2px_8px_rgba(0,0,0,0.05)] dark:shadow-[0_-4px_12px_rgba(0,0,0,0.3)] z-50 select-none">
          <div className="w-9 h-1 bg-slate-300 dark:bg-[#334155] rounded-full" />
        </div>

        {/* Left Controls Sidebar (fixed ~400px, renders second on mobile stack) */}
        <div className="order-3 lg:order-1 lg:w-[400px] w-full h-full overflow-y-auto min-h-0 shrink-0 max-md:h-[calc(55vh-16px)] max-md:flex-none max-md:bg-background max-md:pt-2 max-md:scroll-smooth max-md:[-webkit-overflow-scrolling:touch] mobile-sidebar-height">
          <Sidebar />
        </div>
      </div>

      {/* 3. Full-Width Bottom Footer Feature Bar */}
      <div className="max-md:hidden shrink-0 relative z-10">
        <Footer />
      </div>
    </div>
  );
}
