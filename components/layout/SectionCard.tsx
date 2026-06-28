"use client";

import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SectionCardProps {
  title: string;
  icon?: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  id?: string;
  /** Optional toggle in the header row */
  headerToggle?: {
    checked: boolean;
    onChange: () => void;
    ariaLabel?: string;
  };
  /** Default collapsed state — defaults to true (collapsed) */
  defaultCollapsed?: boolean;
}

export default function SectionCard({
  title,
  icon,
  description,
  children,
  id,
  headerToggle,
  defaultCollapsed = true,
}: SectionCardProps) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed);

  return (
    <section
      id={id}
      className="rounded-xl border border-slate-200/60 dark:border-[#1E2D4A] bg-white dark:bg-panel-bg text-foreground flex flex-col shadow-sm shadow-slate-100/80 dark:shadow-none hover:shadow-md hover:shadow-slate-100/80 transition-all duration-300"
    >
      {/* Header row — fully clickable */}
      <div
        onClick={() => setCollapsed(!collapsed)}
        className="group flex items-center justify-between px-4 py-3 gap-2 cursor-pointer rounded-xl transition-all duration-200 ease-in-out hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[rgba(255,255,255,0.06)] active:bg-[rgba(0,0,0,0.08)] dark:active:bg-[rgba(255,255,255,0.08)]"
      >
        {/* Left: title */}
        <h2 className={`text-[12px] font-semibold tracking-[0.08em] uppercase select-none flex-1 min-w-0 transition-colors duration-200 ease-in-out flex items-center gap-3 ${collapsed
          ? "text-[#64748B] dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
          : "text-primary"
          }`}>
          {icon}
          <span className="truncate">{title}</span>
        </h2>

        {/* Middle: toggle switch (if provided) */}
        {headerToggle && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              headerToggle.onChange();
            }}
            className={`relative w-9 h-5 rounded-full transition-colors duration-300 ease-in-out cursor-pointer flex-shrink-0 ${headerToggle.checked ? "bg-[#1D6FEB]" : "bg-slate-700 dark:bg-slate-500"
              }`}
            aria-label={headerToggle.ariaLabel || "Toggle"}
          >
            <div
              className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out ${headerToggle.checked ? "translate-x-4" : "translate-x-0"
                }`}
            />
          </button>
        )}

        {/* Right: chevron icon */}
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-md text-[#94A3B8] transition-colors duration-200 ease-in-out group-hover:text-slate-800 dark:group-hover:text-[#CBD5E1]">
          <ChevronDown
            className={`w-4 h-4 transition-transform ease-out ${collapsed ? "chevron-collapsed" : "chevron-expanded"
              }`}
            style={{
              transform: collapsed ? "rotate(0deg)" : "rotate(180deg)",
            }}
            strokeWidth={2}
          />
        </div>
      </div>

      {/* Collapsible content */}
      <div
        className={`overflow-hidden accordion-content-spring ${collapsed ? "accordion-collapsed" : "accordion-expanded bg-[#F0F7FD] dark:bg-[#161F2F] rounded-b-xl"
          }`}
        style={{
          maxHeight: collapsed ? "0px" : "1000px",
          opacity: collapsed ? 0 : 1,
          transform: collapsed ? "translateY(-4px)" : "translateY(0px)",
        }}
      >
        <div className="px-4 pb-4 flex flex-col gap-4">
          {description && (
            <p className="text-[11px] text-[#475569] dark:text-slate-400 leading-relaxed">
              {description}
            </p>
          )}
          <div className="w-full text-sm">
            {children || (
              <div className="text-xs text-[#64748B] italic">
                No controls implemented yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
