"use client";

import React from "react";
import Link from "next/link";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  const [activeGroup, setActiveGroup] = React.useState<"tools" | "resources" | "legal" | null>(null);
  const footerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (footerRef.current && !footerRef.current.contains(e.target as Node)) {
        setActiveGroup(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const tools = [
    { label: "Twitter Screenshot Generator", href: "/twitter-screenshot-generator" },
    { label: "Fake Tweet Generator", href: "/fake-tweet-generator" },
    { label: "Tweet Image Generator", href: "/tweet-image-generator" },
    { label: "9:16 Screenshot", href: "/9-16-twitter-screenshot-generator" },
    { label: "16:9 Screenshot", href: "/16-9-twitter-screenshot-generator" },
  ];

  const resources = [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Help", href: "/help" },
    { label: "Contact", href: "/contact" },
    { label: "Feedback", href: "/feedback" },
  ];

  const legal = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  const features = [
    { label: "High Quality Export", icon: "✦" },
    { label: "Real-time Preview", icon: "⚡" },
    { label: "Secure & Private", icon: "🛡️" },
    { label: "No Watermark", icon: "✓" },
    { label: "Works Everywhere", icon: "🌍" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative w-full h-12 bg-white/80 dark:bg-[#0B1220] border-t border-gray-100 dark:border-[rgba(255,255,255,0.06)] backdrop-blur-md px-6 flex items-center justify-between shrink-0 select-none z-45"
    >
      {/* Left: Trademark text / Logo hint */}
      <div className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase select-none">
        © 2026 Make My Tweet
      </div>

      {/* Center: Quiet features */}
      <div className="flex items-center justify-center gap-6 text-[10px] text-slate-400 dark:text-slate-500 font-semibold tracking-wider uppercase max-lg:hidden">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-[#1D6FEB] text-xs">{feature.icon}</span>
            <span>{feature.label}</span>
          </div>
        ))}
      </div>

      {/* Right: The 3 Navigation Dropdowns */}
      <div className="flex items-center gap-6 relative">
        
        {/* Tools Group */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setActiveGroup(activeGroup === "tools" ? null : "tools")}
            className={`flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-colors duration-150 cursor-pointer ${
              activeGroup === "tools" ? "text-[#1D6FEB]" : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            <span>Tools</span>
            <ChevronUp className={`w-3.5 h-3.5 transition-transform duration-200 ${activeGroup === "tools" ? "rotate-180" : ""}`} />
          </button>

          {/* Tools Popover */}
          {activeGroup === "tools" && (
            <div className="absolute bottom-full right-0 mb-3 min-w-[240px] bg-white dark:bg-[#0F172A] border border-slate-200/60 dark:border-[#1E2D4A] rounded-xl shadow-xl dark:shadow-2xl py-2 flex flex-col gap-0.5 z-50">
              {tools.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveGroup(null)}
                  className="px-4 py-2 text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase text-slate-500 hover:text-[#1D6FEB] dark:text-slate-400 dark:hover:text-[#1D6FEB] hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Resources Group */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setActiveGroup(activeGroup === "resources" ? null : "resources")}
            className={`flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-colors duration-150 cursor-pointer ${
              activeGroup === "resources" ? "text-[#1D6FEB]" : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            <span>Resources</span>
            <ChevronUp className={`w-3.5 h-3.5 transition-transform duration-200 ${activeGroup === "resources" ? "rotate-180" : ""}`} />
          </button>

          {/* Resources Popover */}
          {activeGroup === "resources" && (
            <div className="absolute bottom-full right-0 mb-3 min-w-[150px] bg-white dark:bg-[#0F172A] border border-slate-200/60 dark:border-[#1E2D4A] rounded-xl shadow-xl dark:shadow-2xl py-2 flex flex-col gap-0.5 z-50">
              {resources.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveGroup(null)}
                  className="px-4 py-2 text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase text-slate-500 hover:text-[#1D6FEB] dark:text-slate-400 dark:hover:text-[#1D6FEB] hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Legal Group */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setActiveGroup(activeGroup === "legal" ? null : "legal")}
            className={`flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-colors duration-150 cursor-pointer ${
              activeGroup === "legal" ? "text-[#1D6FEB]" : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-[#1D6FEB]"
            }`}
          >
            <span>Legal</span>
            <ChevronUp className={`w-3.5 h-3.5 transition-transform duration-200 ${activeGroup === "legal" ? "rotate-180" : ""}`} />
          </button>

          {/* Legal Popover */}
          {activeGroup === "legal" && (
            <div className="absolute bottom-full right-0 mb-3 min-w-[180px] bg-white dark:bg-[#0F172A] border border-slate-200/60 dark:border-[#1E2D4A] rounded-xl shadow-xl dark:shadow-2xl py-2 flex flex-col gap-0.5 z-50">
              {legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveGroup(null)}
                  className="px-4 py-2 text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase text-slate-500 hover:text-[#1D6FEB] dark:text-slate-400 dark:hover:text-[#1D6FEB] hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </footer>
  );
}
