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

  // Per-format layout rules — each format has unique card width, padding, and aspect ratio
  let formatClasses = "max-w-[680px] aspect-[16/9] p-12";
  let cardWidthStyle: React.CSSProperties = {};

  if (exportFormat === "square") {
    formatClasses = "max-w-[600px] aspect-square p-10";
  } else if (exportFormat === "story") {
    // Story format: taller canvas, generous horizontal padding, card fills width comfortably
    formatClasses = "max-w-[420px] aspect-[9/16] px-6 py-10";
    cardWidthStyle = { maxWidth: "92%" };
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
      <div style={cardWidthStyle} className="w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
