import React from "react";

interface RichBlueFrameProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  backgroundType?: string;
  backgroundImage?: string | null;
  exportFormat?: "story" | "square" | "landscape";
}

export default function RichBlueFrame({
  children,
  backgroundColor,
  backgroundType,
  backgroundImage,
  exportFormat = "landscape",
}: RichBlueFrameProps) {
  const isCustomBg = backgroundType === "solid" || backgroundType === "custom" || backgroundType === "preset";

  // Map format to specific aspect ratio and padding classes
  let formatClasses = "max-w-[640px] aspect-[16/9] p-10";
  if (exportFormat === "square") {
    formatClasses = "max-w-[560px] aspect-square p-8";
  } else if (exportFormat === "story") {
    formatClasses = "max-w-[360px] aspect-[9/16] p-6";
  }

  const customStyles: React.CSSProperties = {};
  if (backgroundType === "solid" || backgroundType === "preset") {
    if (backgroundColor) {
      customStyles.backgroundColor = backgroundColor;
    }
  } else if (backgroundType === "custom" && backgroundImage) {
    customStyles.backgroundImage = `url(${backgroundImage})`;
    customStyles.backgroundSize = "cover";
    customStyles.backgroundPosition = "center";
  }

  return (
    <div 
      id="export-canvas"
      className={`rounded-[32px] flex items-center justify-center w-full shadow-2xl select-none transition-all duration-300 ${formatClasses} ${
        isCustomBg ? "" : "bg-rich-blue-frame"
      }`}
      style={customStyles}
      role="img"
      aria-label="Rich Blue Tweet Card Frame"
    >
      {children}
    </div>
  );
}
