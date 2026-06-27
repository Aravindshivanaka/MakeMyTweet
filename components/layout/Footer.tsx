import React from "react";
import Link from "next/link";

export default function Footer() {
  const features = [
    { label: "High Quality Export", icon: "✦" },
    { label: "Real-time Preview", icon: "⚡" },
    { label: "Secure & Private", icon: "🛡️" },
    { label: "No Watermark", icon: "✓" },
    { label: "Works Everywhere", icon: "🌍" },
  ];

  return (
    <footer className="relative w-full h-12 bg-white/80 dark:bg-[#0B1220] border-t border-gray-100 dark:border-[rgba(255,255,255,0.06)] backdrop-blur-md px-8 flex items-center shrink-0 select-none overflow-x-auto scrollbar-none">
      {/* Privacy Policy Link - Far Left */}
      <div className="absolute left-8 flex items-center">
        <Link
          href="/privacy-policy"
          className="text-[10px] sm:text-[11px] text-slate-500 hover:text-[#1D6FEB] dark:text-slate-400 dark:hover:text-[#1D6FEB] font-semibold tracking-wider uppercase hover:underline cursor-pointer transition-all duration-200 whitespace-nowrap"
        >
          Privacy Policy
        </Link>
      </div>

      {/* Existing Centered Feature Badges */}
      <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 w-full max-w-5xl mx-auto text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-semibold tracking-wider uppercase">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default whitespace-nowrap">
            <span className="text-[#1D6FEB] text-xs">{feature.icon}</span>
            <span>{feature.label}</span>
          </div>
        ))}
      </div>

      {/* Terms & Conditions Link - Far Right */}
      <div className="absolute right-8 flex items-center">
        <Link
          href="/terms-and-conditions"
          className="text-[10px] sm:text-[11px] text-slate-500 hover:text-[#1D6FEB] dark:text-slate-400 dark:hover:text-[#1D6FEB] font-semibold tracking-wider uppercase hover:underline cursor-pointer transition-all duration-200 whitespace-nowrap"
        >
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
}
