import React from "react";
import RichBlueFrame from "../tweet/RichBlueFrame";
import TweetCard from "../tweet/TweetCard";

export default function MobilePreviewWorkspace() {
  const accordionSections = [
    "1. Profile Settings",
    "2. Tweet Content",
    "3. Engagement Controls",
    "4. Timestamp Controls",
    "5. Background Controls",
    "6. Export Format",
  ];

  return (
    <div
      className="w-full h-full bg-[#0D1425] border-l border-[#1E2D4A] p-6 flex flex-col gap-6 select-none"
    >
      {/* Workspace Header */}
      <div className="text-center flex flex-col gap-1 border-b border-[#1E2D4A] pb-4">
        <h2 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider">
          Mobile Preview
        </h2>
        <p className="text-xs text-[#64748B]/80">
          Flawless responsive mockup viewport
        </p>
      </div>

      {/* Realistic Smartphone Mockup Frame */}
      <div className="w-full flex justify-center py-2">
        <div className="w-[290px] h-[450px] border-[10px] border-[#1E2D4A] bg-[#080F1E] rounded-[40px] flex flex-col items-center justify-start overflow-hidden relative shadow-2xl">
          {/* Top Notch Mock */}
          <div className="w-28 h-5 bg-[#0D1425] rounded-b-2xl absolute top-0 left-1/2 -translate-x-1/2 border-x border-b border-[#1E2D4A] z-20 flex items-center justify-center">
            {/* Camera dot */}
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900 absolute right-4" />
          </div>

          {/* Status Bar Mock */}
          <div className="w-full h-7 px-6 pt-1.5 flex items-center justify-between text-[9px] text-slate-500 font-semibold select-none z-10">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span>📶</span>
              <span>🔋</span>
            </div>
          </div>
          
          {/* Mock Screen Content (Scaled Down Live Preview) */}
          <div className="scale-[0.48] origin-top mt-2 w-[520px] flex items-center justify-center pointer-events-none">
            <RichBlueFrame>
              <TweetCard />
            </RichBlueFrame>
          </div>

          {/* Bottom Swipe Home Bar Mock */}
          <div className="w-28 h-1 bg-slate-700 rounded-full absolute bottom-1.5 left-1/2 -translate-x-1/2 z-10" />
        </div>
      </div>

      {/* Mobile Control Accordion Mockups */}
      <div className="flex flex-col gap-2.5">
        {accordionSections.map((section, idx) => (
          <div
            key={idx}
            className="w-full border border-[#1E2D4A] rounded-lg bg-[#111827] px-4 py-3 flex items-center justify-between text-xs font-semibold text-slate-300 hover:bg-[#1E2D4A]/30 cursor-pointer transition-colors"
          >
            <span>{section}</span>
            <span className="text-slate-500">▼</span>
          </div>
        ))}
      </div>

      {/* Mobile Download Button Placeholder */}
      <div className="mt-auto pt-4 border-t border-[#1E2D4A]">
        <button
          className="w-full py-3 rounded-xl bg-[#1D6FEB] hover:bg-[#155fc7] text-white text-center text-sm font-semibold transition-colors shadow-md cursor-pointer"
          aria-label="Download Tweet PNG"
        >
          Download PNG
        </button>
      </div>
    </div>
  );
}
