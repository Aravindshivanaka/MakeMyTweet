import React from "react";
import TweetHeader from "./TweetHeader";
import TweetContent from "./TweetContent";
import MediaContainer from "./MediaContainer";
import ActionBar from "./ActionBar";

interface TweetCardProps {
  displayName?: string;
  username?: string;
  profileImage?: string | null;
  verificationBadge?: "none" | "blue" | "gold";
  showOptionalBadge?: boolean;
  selectedLogo?: "none" | "x" | "twitter" | "grok";
  timestamp?: string;
  showDate?: boolean;
  showTime?: boolean;
  showTimestamp?: boolean;
  tweetText?: string;
  fontSize?: number;
  hasMedia?: boolean;
  tweetImage?: string | null;
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
  borderSize?: number;
  showCardBackground?: boolean;
  organizationBadgeEnabled?: boolean;
  organizationBadgeImage?: string | null;
}

export default function TweetCard({
  displayName,
  username,
  profileImage,
  verificationBadge,
  showOptionalBadge,
  selectedLogo,
  timestamp,
  showDate = true,
  showTime = true,
  showTimestamp = true,
  tweetText,
  fontSize,
  hasMedia,
  tweetImage = null,
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
  borderSize = 10,
  showCardBackground = true,
  organizationBadgeEnabled = false,
  organizationBadgeImage = null,
}: TweetCardProps) {
  // Format configurations for card size and padding
  let cardClass = "max-w-[520px] p-4";

  if (exportFormat === "square") {
    cardClass = "max-w-[480px] p-4";
  } else if (exportFormat === "story") {
    cardClass = "max-w-[365px] p-4";
  }

  // Theme styling overrides
  const isDark = tweetTheme === "dark";
  const bgClass = isDark ? "bg-black" : "bg-[#FFFFFF]";
  const textClass = isDark ? "text-[#e7e9ea]" : "text-[#0f1419]";
  const borderClass = isDark ? "border-[#2f3336]" : "border-[#eff3f4]";

  const cardElement = (
    <article
      aria-label="Tweet card mockup"
      className={`w-full border flex flex-col select-none text-left ${bgClass} ${textClass} ${borderClass} ${cardClass}`}
      style={{
        borderRadius: "16px",
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        boxShadow: !showCardBackground
          ? "none"
          : showBorder
            ? `0 0 0 ${borderSize}px ${borderColor}, 0 4px 20px rgba(0,0,0,0.15)`
            : "0 2px 12px rgba(0,0,0,0.12)",
        ...(showCardBackground ? {} : { background: "transparent", border: "none" }),
      }}
    >
      {/* Header — avatar + name rows */}
      <TweetHeader
        displayName={displayName}
        username={username}
        profileImage={profileImage}
        verificationBadge={verificationBadge}
        showOptionalBadge={showOptionalBadge}
        selectedLogo={selectedLogo}
        exportFormat={exportFormat}
        tweetTheme={tweetTheme}
        organizationBadgeEnabled={organizationBadgeEnabled}
        organizationBadgeImage={organizationBadgeImage}
      />

      {/* Row 3: Tweet text */}
      <div className="mt-3">
        <TweetContent
          tweetText={tweetText}
          fontSize={fontSize}
          exportFormat={exportFormat}
          tweetTheme={tweetTheme}
        />
      </div>

      {/* Optional media area */}
      <MediaContainer hasMedia={hasMedia} />

      {/* Optional tweet image attachment */}
      {tweetImage && (
        <div className="mt-[12px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tweetImage}
            alt="Tweet attachment"
            style={{
              width: "100%",
              maxHeight: "350px",
              objectFit: "cover",
              borderRadius: "16px",
              display: "block",
            }}
          />
        </div>
      )}

      {/* Row 4: Timestamp on its own line — gray muted small */}
      {showTimestamp && (showDate || showTime) && timestamp && (
        <div className={`mt-[12px] text-[14px] font-normal ${isDark ? "text-[#71767b]" : "text-[#536471]"}`}>
          {timestamp}
        </div>
      )}

      {/* Row 5: Thin horizontal divider line */}
      {showMetrics && (
        <hr className={`mt-[12px] mb-[12px] border-t ${isDark ? "border-[#2f3336]" : "border-[#eff3f4]"}`} />
      )}

      {/* Row 6: Metrics row */}
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
    </article>
  );

  return cardElement;
}
