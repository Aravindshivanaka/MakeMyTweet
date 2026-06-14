import React from "react";

interface SectionCardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  id?: string;
}

export default function SectionCard({ title, description, children, id }: SectionCardProps) {
  return (
    <section
      id={id}
      className="p-5 rounded-xl border border-border bg-panel-bg text-foreground flex flex-col gap-4 transition-colors duration-200"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-sm font-semibold tracking-wide text-slate-200 uppercase">
          {title}
        </h2>
        {description && (
          <p className="text-xs text-[#64748B] leading-relaxed">
            {description}
          </p>
        )}
      </div>
      <div className="w-full text-sm">
        {children || <div className="text-xs text-[#64748B] italic">No controls implemented yet.</div>}
      </div>
    </section>
  );
}
