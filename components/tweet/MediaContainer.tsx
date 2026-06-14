import React from "react";

interface MediaContainerProps {
  hasMedia?: boolean;
}

export default function MediaContainer({ hasMedia = false }: MediaContainerProps) {
  if (!hasMedia) return null;

  return (
    <div
      className="w-full mt-3 rounded-2xl border border-[#eff3f4] bg-[#f7f9f9] min-h-[200px] flex items-center justify-center overflow-hidden"
      aria-label="Media container"
    >
      <span className="text-[#536471] text-sm select-none">Media</span>
    </div>
  );
}
