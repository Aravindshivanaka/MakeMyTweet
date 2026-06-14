import React from "react";

interface TweetContentProps {
  tweetText?: string;
  fontSize?: number;
}

export default function TweetContent({
  tweetText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  fontSize = 15,
}: TweetContentProps) {
  return (
    <div
      className="text-[#0f1419] font-normal leading-[20px] whitespace-pre-wrap break-words mt-0.5 w-full"
      style={{ fontSize: `${fontSize}px` }}
      lang="en"
    >
      {tweetText}
    </div>
  );
}
