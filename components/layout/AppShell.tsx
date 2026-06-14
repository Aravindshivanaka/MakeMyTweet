import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import PreviewWorkspace from "./PreviewWorkspace";

export default function AppShell() {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#080F1E] overflow-hidden text-slate-100 font-sans">
      {/* 1. Full-Width Top Header */}
      <Header />

      {/* 
        2. Main Application Workspace Area
        On desktop: Two-column layout (Sidebar: ~400px | Desktop Preview: Remaining space).
      */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-0 w-full overflow-hidden">
        {/* Desktop Preview Workspace (takes remaining space, renders first on mobile stack) */}
        <div className="order-1 lg:order-2 flex-1 h-full overflow-y-auto scrollbar-none min-h-0">
          <PreviewWorkspace />
        </div>

        {/* Left Controls Sidebar (fixed ~400px, renders second on mobile stack) */}
        <div className="order-2 lg:order-1 lg:w-[400px] w-full h-full overflow-y-auto min-h-0 shrink-0">
          <Sidebar />
        </div>
      </div>

      {/* 3. Full-Width Bottom Footer Feature Bar */}
      <Footer />
    </div>
  );
}
