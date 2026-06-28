"use client";

import React from "react";

interface ResizableLayoutProps {
  sidebar: React.ReactNode;
  preview: React.ReactNode;
}

export default function ResizableLayout({ sidebar, preview }: ResizableLayoutProps) {
  const [sidebarWidth, setSidebarWidth] = React.useState<number>(400);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const saved = sessionStorage.getItem("sidebar-width");
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed) && parsed >= 320 && parsed <= 600) {
        setSidebarWidth(parsed);
      }
    }
  }, []);

  React.useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = sidebarWidth;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const newWidth = Math.max(320, Math.min(600, startWidth + deltaX));
      setSidebarWidth(newWidth);
      sessionStorage.setItem("sidebar-width", String(newWidth));
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="flex-1 flex flex-col lg:flex-row min-h-0 w-full overflow-hidden relative z-10">
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 767px) {
          .mobile-preview-height,
          .mobile-preview-height > main {
            height: calc((100vh - 64px) * 0.45) !important;
          }
          .mobile-sidebar-height {
            height: calc((100vh - 64px) * 0.55 - 16px) !important;
          }
        }
        @media (min-width: 1024px) {
          .custom-scrollbar-sidebar::-webkit-scrollbar {
            width: 10px;
            background-color: transparent;
          }
          .custom-scrollbar-sidebar::-webkit-scrollbar-track {
            background-color: transparent;
          }
          .custom-scrollbar-sidebar::-webkit-scrollbar-thumb {
            background-color: rgba(148, 163, 184, 0.25);
            border-radius: 9999px;
            border: 3px solid transparent;
            background-clip: padding-box;
            transition: background-color 0.2s ease, border-width 0.2s ease;
          }
          .custom-scrollbar-sidebar:hover::-webkit-scrollbar-thumb {
            background-color: rgba(148, 163, 184, 0.45);
            border-width: 2px;
          }
          .custom-scrollbar-sidebar {
            scrollbar-width: thin;
            scrollbar-color: rgba(148, 163, 184, 0.25) transparent;
          }
        }
      ` }} />
      {/* Desktop Preview Workspace (takes remaining space, renders first on mobile stack) */}
      <div className="order-1 lg:order-3 flex-1 h-full overflow-y-auto scrollbar-none min-h-0 max-md:sticky max-md:top-0 max-md:z-40 max-md:h-[45vh] max-md:flex-none max-md:bg-background max-md:overflow-hidden mobile-preview-height">
        {preview}
      </div>

      {/* Beautiful Separator on mobile */}
      <div className="hidden max-md:flex order-2 h-4 w-full shrink-0 items-center justify-center border-t border-gray-100 dark:border-[#1E2D4A] bg-white dark:bg-[#0D1425] shadow-[0_-2px_8px_rgba(0,0,0,0.05)] dark:shadow-[0_-4px_12px_rgba(0,0,0,0.3)] z-50 select-none">
        <div className="w-9 h-1 bg-slate-300 dark:bg-[#334155] rounded-full" />
      </div>

      {/* Desktop drag handle */}
      {isDesktop && (
        <div
          onMouseDown={handleMouseDown}
          className="hidden lg:flex w-[6px] h-full cursor-col-resize hover:bg-slate-400/5 transition-colors z-30 lg:order-2 shrink-0 select-none items-center justify-center group"
        >
          <div className="w-[4px] h-full bg-white/[0.08] group-hover:bg-white/25 group-active:bg-white/35 transition-colors duration-200" />
        </div>
      )}

      {/* Left Controls Sidebar (fixed ~400px or resizable on desktop, renders second on mobile stack) */}
      <div
        className="order-3 lg:order-1 w-full h-full overflow-y-auto min-h-0 shrink-0 max-md:h-[calc(55vh-16px)] max-md:flex-none max-md:bg-background max-md:pt-2 max-md:scroll-smooth max-md:[-webkit-overflow-scrolling:touch] mobile-sidebar-height custom-scrollbar-sidebar"
        style={isDesktop ? { width: `${sidebarWidth}px` } : {}}
      >
        {sidebar}
      </div>
    </div>
  );
}
