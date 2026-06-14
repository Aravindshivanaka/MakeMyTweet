import React from "react";

export default function Footer() {
  const features = [
    { label: "High Quality Export", icon: "✦" },
    { label: "Real-time Preview", icon: "⚡" },
    { label: "Secure & Private", icon: "🛡️" },
    { label: "No Watermark", icon: "✓" },
    { label: "Works Everywhere", icon: "🌍" },
  ];

  return (
    <footer className="w-full h-12 bg-[#0D1425] border-t border-[#1E2D4A] px-8 flex items-center justify-center shrink-0 select-none overflow-x-auto scrollbar-none">
      <div className="flex items-center justify-between w-full max-w-5xl text-[10px] sm:text-[11px] text-slate-400 font-semibold tracking-wider uppercase">
        {features.map((feature, idx) => (
          <React.Fragment key={idx}>
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <span className="text-[#1D6FEB] text-xs">{feature.icon}</span>
              <span>{feature.label}</span>
            </div>
            {idx < features.length - 1 && (
              <span className="text-slate-800 select-none hidden md:inline" aria-hidden="true">
                |
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </footer>
  );
}
