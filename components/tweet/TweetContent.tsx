import React from "react";

interface TweetContentProps {
  tweetText?: string;
  fontSize?: number;
  exportFormat?: "story" | "square" | "landscape";
  tweetTheme?: "light" | "dark";
}

export default function TweetContent({
  tweetText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  fontSize,
  exportFormat = "landscape",
  tweetTheme = "light",
}: TweetContentProps) {
  // Determine base size (readability target is 18px)
  const baseSize = fontSize || 18;

  // Scale based on export format
  let finalFontSize = baseSize;
  if (exportFormat === "square") {
    finalFontSize = Math.max(13, baseSize - 1);
  } else if (exportFormat === "story") {
    finalFontSize = Math.max(12, baseSize - 2);
  }

  // Theme styling
  const isDark = tweetTheme === "dark";
  const textColorClass = isDark ? "text-[#e7e9ea]" : "text-[#0f1419]";

  return (
    <div
      className={`whitespace-pre-wrap break-words w-full ${textColorClass}`}
      style={{
        fontSize: `${finalFontSize}px`,
        lineHeight: "1.6",
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Nirmala UI", Gautami, Mangal, sans-serif',
        wordBreak: "break-word",
        overflowWrap: "break-word",
      }}
    >
      {tweetText}
    </div>
  );
}
