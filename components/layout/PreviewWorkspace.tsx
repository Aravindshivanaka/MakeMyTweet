"use client";

import React from "react";
import RichBlueFrame from "../tweet/RichBlueFrame";
import TweetCard from "../tweet/TweetCard";
import { useAppStore } from "@/store/use-app-store";

export default function PreviewWorkspace() {
  const {
    displayName,
    username,
    profileImage,
    selectedLogo,
    showLogo,
    tweetText,
    showMetrics,
    comments,
    retweets,
    likes,
    views,
    bookmarks,
    date,
    hour,
    minute,
    meridiem,
    showDate,
    showTime,
    backgroundColor,
    backgroundType,
    backgroundImage,
    exportFormat,
  } = useAppStore();

  const formatTimestamp = () => {
    if (!showDate && !showTime) return "";

    let dateStr = "";
    if (showDate && date) {
      try {
        const d = new Date(date);
        if (!isNaN(d.getTime())) {
          dateStr = d.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          });
        } else {
          dateStr = date;
        }
      } catch {
        dateStr = date;
      }
    }

    let timeStr = "";
    if (showTime) {
      timeStr = `${parseInt(hour, 10) || 12}:${minute.padStart(2, "0")} ${meridiem}`;
    }

    if (showDate && showTime) {
      return `${timeStr} · ${dateStr}`;
    } else if (showDate) {
      return dateStr;
    } else if (showTime) {
      return timeStr;
    }
    return "";
  };

  return (
    <main
      aria-label="Desktop Preview Canvas"
      className="flex-1 bg-background p-6 lg:p-12 flex flex-col items-center justify-center min-h-[400px] lg:h-full overflow-auto select-none transition-colors duration-200"
    >
      <div className="w-full max-w-2xl flex flex-col items-center gap-6">
        {/* Workspace Title */}
        <div className="text-center flex flex-col gap-1">
          <h2 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider">
            Desktop Preview
          </h2>
          <p className="text-xs text-[#64748B]/80">
            Card mockups auto-scale to fit this area
          </p>
        </div>

        {/* Live Preview Canvas Mock */}
        <div className="w-full flex justify-center py-4">
          <RichBlueFrame
            backgroundColor={backgroundColor}
            backgroundType={backgroundType}
            backgroundImage={backgroundImage}
            exportFormat={exportFormat}
          >
            <TweetCard
              displayName={displayName || "Display Name"}
              username={username || "username"}
              profileImage={profileImage}
              isVerified={true}
              showOptionalBadge={false}
              selectedLogo={selectedLogo}
              showLogo={showLogo}
              timestamp={formatTimestamp()}
              showDate={showDate}
              showTime={showTime}
              tweetText={tweetText || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
              fontSize={15}
              hasMedia={false}
              showMetrics={showMetrics}
              comments={comments}
              retweets={retweets}
              likes={likes}
              views={views}
              bookmarks={bookmarks}
            />
          </RichBlueFrame>
        </div>
      </div>
    </main>
  );
}
