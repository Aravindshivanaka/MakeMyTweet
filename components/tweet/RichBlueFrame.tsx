import React from "react";
import { useAppStore } from "@/store/use-app-store";

interface RichBlueFrameProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  backgroundType?: string;
  backgroundImage?: string | null;
  exportFormat?: "story" | "square" | "landscape";
  showBackground?: boolean;
  overrideScale?: number;
  overridePositionX?: number;
  overridePositionY?: number;
}

export default function RichBlueFrame({
  children,
  backgroundColor,
  backgroundType,
  backgroundImage,
  exportFormat = "landscape",
  showBackground: propShowBackground,
  overrideScale,
  overridePositionX,
  overridePositionY,
}: RichBlueFrameProps) {
  const store = useAppStore();
  const showBackground = propShowBackground ?? store.showBackground;

  const isCustomBg = showBackground && (backgroundType === "solid" || backgroundType === "custom" || backgroundType === "preset");

  const backgroundScale = overrideScale ?? store.backgroundScale;
  const backgroundPositionX = overridePositionX ?? store.backgroundPositionX;
  const backgroundPositionY = overridePositionY ?? store.backgroundPositionY;

  // Per-format layout rules — each format has unique card width, padding, and aspect ratio
  let formatClasses = "max-w-[740px] aspect-[16/9] p-6";
  let cardWidth = "90%";

  if (exportFormat === "square") {
    formatClasses = "max-w-[640px] aspect-square p-6";
    cardWidth = "92%";
  } else if (exportFormat === "story") {
    formatClasses = "max-w-[440px] aspect-[9/16] p-6";
    cardWidth = "92%";
  }

  const customStyles: React.CSSProperties = {};
  if (showBackground) {
    if (backgroundType === "solid" || backgroundType === "preset") {
      if (backgroundColor) {
        if (backgroundColor.includes("gradient")) {
          customStyles.background = backgroundColor;
        } else {
          customStyles.backgroundColor = backgroundColor;
        }
      }
    } else if (backgroundType === "custom" && backgroundImage) {
      customStyles.backgroundImage = `url(${backgroundImage})`;
      customStyles.backgroundSize = `${backgroundScale}%`;
      customStyles.backgroundPosition = `calc(50% + ${backgroundPositionX}px) calc(50% + ${backgroundPositionY}px)`;
      customStyles.backgroundRepeat = "no-repeat";
    }
  } else {
    customStyles.backgroundColor = "var(--canvas-bg)";
    customStyles.background = "none";
    customStyles.backgroundImage = "none";
  }

  return (
    <div 
      id="export-canvas"
      className={`rounded-[32px] flex items-center justify-center w-full border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-2xl select-none transition-all duration-300 ${formatClasses} ${
        (showBackground && !isCustomBg) ? "bg-rich-blue-frame" : ""
      }`}
      style={customStyles}
      role="img"
      aria-label="Rich Blue Tweet Card Frame"
    >
      <style dangerouslySetInnerHTML={{__html: `
        #export-canvas > article {
          width: ${cardWidth} !important;
          max-width: none !important;
        }
      `}} />
      {children}
    </div>
  );
}
