import React from "react";

interface TweetMetricsProps {
  comments?: string;
  retweets?: string;
  likes?: string;
  views?: string;
  showMetrics?: boolean;
}

export default function TweetMetrics({
  comments = "0",
  retweets = "0",
  likes = "0",
  views = "0",
  showMetrics = true,
}: TweetMetricsProps) {
  if (!showMetrics) return null;

  return (
    <div 
      className="w-full pt-4 flex items-center justify-between text-xs sm:text-sm text-[#64748B] font-medium"
      aria-label="Tweet engagement statistics"
    >
      {/* Comments / Replies */}
      <div className="flex items-center gap-2 hover:text-[#1D9BF0] transition-colors cursor-pointer" role="group" aria-label={`${comments} replies`}>
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
          <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.49c4.418 0 8.004 3.58 8.004 8s-3.586 8-8.004 8h-4.49c-.447 0-.895-.037-1.332-.111l-3.328 3.33c-.15.15-.353.23-.568.23-.414 0-.75-.336-.75-.75v-2.82C3.593 16.486 1.751 13.447 1.751 10zm8.005-6c-3.313 0-6.005 2.69-6.005 6 0 2.537 1.567 4.747 3.88 5.518.297.1.502.379.502.693v1.7l2.262-2.263c.15-.15.352-.233.567-.233h4.49c3.31 0 6.004-2.687 6.004-6s-2.694-6-6.004-6h-4.49z" />
        </svg>
        <span>{comments}</span>
      </div>

      {/* Retweets */}
      <div className="flex items-center gap-2 hover:text-[#00BA7C] transition-colors cursor-pointer" role="group" aria-label={`${retweets} retweets`}>
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
          <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
        </svg>
        <span>{retweets}</span>
      </div>

      {/* Likes */}
      <div className="flex items-center gap-2 hover:text-[#F91880] transition-colors cursor-pointer" role="group" aria-label={`${likes} likes`}>
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
          <path d="M16.697 5.5c-1.222-.06-2.679.69-3.894 2.12-.175.206-.499.206-.674 0-1.215-1.43-2.672-2.18-3.894-2.12-2.316.1-4.228 2.006-4.228 4.395 0 2.013 1.107 4.111 3.303 6.242 2.14 2.079 4.675 3.738 5.765 4.417.16.1.37.1.53 0 1.09-.679 3.625-2.338 5.765-4.417 2.196-2.131 3.303-4.229 3.303-6.242 0-2.389-1.912-4.3-4.228-4.395zm3.02 4.395c0 1.408-.824 3.036-2.736 4.892-1.905 1.85-4.204 3.359-5.184 3.974-.98-.615-3.279-2.124-5.184-3.974-1.912-1.856-2.736-3.484-2.736-4.892 0-1.398 1.127-2.503 2.505-2.564.847-.037 1.855.495 2.733 1.53L12 11.082l2.905-3.418c.878-1.035 1.886-1.567 2.733-1.53 1.378.061 2.505 1.166 2.505 2.564z" />
        </svg>
        <span>{likes}</span>
      </div>

      {/* Views */}
      <div className="flex items-center gap-2 hover:text-[#1D9BF0] transition-colors cursor-pointer" role="group" aria-label={`${views} views`}>
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
          <path d="M8.75 21V3h2v18h-2zM3.8 21H1.75V10h2v11zm9.95 0h2V7h-2v14zm4.9 0h2v-8h-2v8z" />
        </svg>
        <span>{views}</span>
      </div>
    </div>
  );
}
