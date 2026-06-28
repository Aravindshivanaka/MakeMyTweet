import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import PreviewWorkspace from "./PreviewWorkspace";
import ResizableLayout from "./ResizableLayout";

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

      {/* 1. Full-Width Top Header */}
      <div className="shrink-0 relative z-10">
        <Header />
      </div>

      {/* 
        2. Main Application Workspace Area
        Uses ResizableLayout client wrapper to host resizable sidebar and preview panels on desktop.
      */}
      <ResizableLayout
        sidebar={<Sidebar />}
        preview={<PreviewWorkspace />}
      />

      {/* 3. Full-Width Bottom Footer Feature Bar */}
      <div className="max-md:hidden shrink-0 relative z-10">
        <Footer />
      </div>
    </div>
  );
}
