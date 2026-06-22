import React from "react";

interface TweetContentProps {
  tweetText?: string;
  fontSize?: number;
  exportFormat?: "story" | "square" | "landscape";
  tweetTheme?: "light" | "dark";
}

export default function TweetContent({
  tweetText = "",
  fontSize,
  exportFormat = "landscape",
  tweetTheme = "light",
}: TweetContentProps) {
  // Determine base size (readability target is 20px)
  const baseSize = 20;

  // Scale based on export format
  let finalFontSize = baseSize;
  if (exportFormat === "square") {
    finalFontSize = 19;
  } else if (exportFormat === "story") {
    finalFontSize = 18;
  }

  // Theme styling
  const isDark = tweetTheme === "dark";
  const textColorClass = isDark ? "text-[#e7e9ea]" : "text-[#0f1419]";

  return (
    <div
      className={`whitespace-pre-wrap break-words w-full ${textColorClass}`}
      style={{
        fontSize: `${finalFontSize}px`,
        lineHeight: "1.3",
        fontWeight: 400,
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Nirmala UI", Gautami, Mangal, sans-serif',
        wordBreak: "break-word",
        overflowWrap: "break-word",
      }}
    >
      {tweetText}
    </div>
  );
}
