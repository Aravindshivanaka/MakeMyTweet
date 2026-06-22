import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import PreviewWorkspace from "./PreviewWorkspace";

export default function AppShell() {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#080F1E] overflow-hidden text-slate-100 font-sans">
      {/* 1. Full-Width Top Header */}
      <div className="max-md:hidden shrink-0">
        <Header />
      </div>

      {/* 
        2. Main Application Workspace Area
        On desktop: Two-column layout (Sidebar: ~400px | Desktop Preview: Remaining space).
      */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-0 w-full overflow-hidden">
        {/* Desktop Preview Workspace (takes remaining space, renders first on mobile stack) */}
        <div className="order-1 lg:order-2 flex-1 h-full overflow-y-auto scrollbar-none min-h-0 max-md:sticky max-md:top-0 max-md:z-40 max-md:h-[45vh] max-md:flex-none max-md:bg-[#080F1E] max-md:overflow-hidden">
          <PreviewWorkspace />
        </div>

        {/* Beautiful Separator on mobile */}
        <div className="hidden max-md:flex h-[28px] w-full shrink-0 items-center justify-center border-t border-[#1E2D4A] bg-gradient-to-b from-[#0D1425] to-[#111827] shadow-[0_-4px_12px_rgba(0,0,0,0.3)] z-50 select-none">
          <div className="w-[40px] h-[4px] bg-[#334155] rounded-full" />
        </div>

        {/* Left Controls Sidebar (fixed ~400px, renders second on mobile stack) */}
        <div className="order-2 lg:order-1 lg:w-[400px] w-full h-full overflow-y-auto min-h-0 shrink-0 max-md:h-[calc(55vh-28px)] max-md:flex-none max-md:bg-[#080F1E] max-md:pt-2 max-md:scroll-smooth max-md:[-webkit-overflow-scrolling:touch]">
          <Sidebar />
        </div>
      </div>

      {/* 3. Full-Width Bottom Footer Feature Bar */}
      <div className="max-md:hidden shrink-0">
        <Footer />
      </div>
    </div>
  );
}
