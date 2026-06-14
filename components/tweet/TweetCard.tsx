import React from "react";
import TweetHeader from "./TweetHeader";
import TweetContent from "./TweetContent";
import MediaContainer from "./MediaContainer";
import ActionBar from "./ActionBar";

interface TweetCardProps {
  displayName?: string;
  username?: string;
  profileImage?: string | null;
  isVerified?: boolean;
  showOptionalBadge?: boolean;
  selectedLogo?: "x" | "twitter" | "grok";
  showLogo?: boolean;
  timestamp?: string;
  showDate?: boolean;
  showTime?: boolean;
  tweetText?: string;
  fontSize?: number;
  hasMedia?: boolean;
  showMetrics?: boolean;
  comments?: number;
  retweets?: number;
  likes?: number;
  views?: number;
  bookmarks?: number;
  exportFormat?: "story" | "square" | "landscape";
  tweetTheme?: "light" | "dark";
  showBorder?: boolean;
  borderColor?: string;
}

export default function TweetCard({
  displayName,
  username,
  profileImage,
  isVerified,
  showOptionalBadge,
  selectedLogo,
  showLogo = true,
  timestamp,
  showDate = true,
  showTime = true,
  tweetText,
  fontSize,
  hasMedia,
  showMetrics,
  comments,
  retweets,
  likes,
  views,
  bookmarks,
  exportFormat = "landscape",
  tweetTheme = "light",
  showBorder = false,
  borderColor = "#38BDF8",
}: TweetCardProps) {
  // Format configurations for card size and padding
  let cardClass = "max-w-[520px] px-6 pt-5 pb-4";
  let contentMargin = "mt-4";
  let timestampSpacing = "mt-4 pb-3 mb-1";

  if (exportFormat === "square") {
    cardClass = "max-w-[480px] px-5.5 pt-4.5 pb-3.5";
    contentMargin = "mt-3.5";
    timestampSpacing = "mt-3.5 pb-3 mb-1";
  } else if (exportFormat === "story") {
    cardClass = "max-w-[365px] px-5 pt-4 pb-3";
    contentMargin = "mt-3";
    timestampSpacing = "mt-3 pb-2.5 mb-0.5";
  }

  // Theme styling overrides
  const isDark = tweetTheme === "dark";
  const bgClass = isDark ? "bg-black" : "bg-white";
  const borderClass = isDark ? "border-[#2f3336]" : "border-[#cfd9de]";
  const timestampTextClass = isDark ? "text-[#71767b]" : "text-[#536471]";
  const timestampBorderClass = isDark ? "border-[#2f3336]" : "border-[#eff3f4]";

  const cardElement = (
    <article
      aria-label="Tweet card mockup"
      className={`w-full border rounded-2xl flex flex-col select-none text-left shadow-[0_2px_12px_rgba(0,0,0,0.12)] ${bgClass} ${borderClass} ${cardClass}`}
    >
      {/* Header — avatar + name rows */}
      <TweetHeader
        displayName={displayName}
        username={username}
        profileImage={profileImage}
        isVerified={isVerified}
        showOptionalBadge={showOptionalBadge}
        selectedLogo={selectedLogo}
        showLogo={showLogo}
        exportFormat={exportFormat}
        tweetTheme={tweetTheme}
      />

      {/* Tweet body + media + actions — full width below header */}
      <div className={contentMargin}>
        {/* Tweet body text */}
        <TweetContent
          tweetText={tweetText}
          fontSize={fontSize}
          exportFormat={exportFormat}
          tweetTheme={tweetTheme}
        />

        {/* Optional media area */}
        <MediaContainer hasMedia={hasMedia} />

        {/* Timestamp (detailed layout style below content & media) */}
        {(showDate || showTime) && timestamp && (
          <div className={`${timestampTextClass} text-[13.5px] leading-5 border-b ${timestampBorderClass} ${timestampSpacing}`}>
            {timestamp}
          </div>
        )}

        {/* Engagement action bar */}
        <ActionBar
          comments={comments}
          retweets={retweets}
          likes={likes}
          views={views}
          bookmarks={bookmarks}
          showMetrics={showMetrics}
          exportFormat={exportFormat}
          tweetTheme={tweetTheme}
        />
      </div>
    </article>
  );

  if (showBorder) {
    // Outer border radius scales geometrically: 16px inner radius + 12px padding = 28px outer radius
    const maxOuterWidth = exportFormat === "story" ? "365px" : exportFormat === "square" ? "480px" : "520px";
    return (
      <div
        className="w-full flex justify-center"
        style={{ maxWidth: maxOuterWidth }}
      >
        <div
          className="w-full p-3 rounded-[28px]"
          style={{
            backgroundColor: borderColor,
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
          }}
        >
          {cardElement}
        </div>
      </div>
    );
  }

  return cardElement;
}
