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
  selectedLogo?: "x" | "twitter";
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
}: TweetCardProps) {
  return (
    <article
      aria-label="Tweet card mockup"
      className="w-full max-w-[560px] bg-white rounded-2xl border border-[#eff3f4] px-4 py-3 flex flex-col select-none text-left shadow-[0px_20px_60px_rgba(0,0,0,0.25)]"
    >
      {/* Row 1: Header — avatar + name row */}
      <TweetHeader
        displayName={displayName}
        username={username}
        profileImage={profileImage}
        isVerified={isVerified}
        showOptionalBadge={showOptionalBadge}
        selectedLogo={selectedLogo}
        showLogo={showLogo}
        timestamp={timestamp}
        showDate={showDate}
        showTime={showTime}
      />

      {/* Rows 2–4 offset past the avatar column (40px avatar + 12px gap = 52px) */}
      <div className="pl-[52px]">
        {/* Row 2: Tweet body text */}
        <TweetContent tweetText={tweetText} fontSize={fontSize} />

        {/* Row 3: Optional media area */}
        <MediaContainer hasMedia={hasMedia} />

        {/* Row 4: Engagement action bar */}
        <ActionBar
          comments={comments}
          retweets={retweets}
          likes={likes}
          views={views}
          bookmarks={bookmarks}
          showMetrics={showMetrics}
        />
      </div>
    </article>
  );
}
