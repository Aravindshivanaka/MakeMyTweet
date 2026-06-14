import React from "react";

interface TweetHeaderProps {
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
}

export default function TweetHeader({
  displayName = "Display Name",
  username = "username",
  profileImage = null,
  isVerified = true,
  showOptionalBadge = false,
  selectedLogo = "x",
  showLogo = true,
  timestamp = "2h",
  showDate = true,
  showTime = true,
}: TweetHeaderProps) {
  return (
    <div className="flex items-start gap-3 w-full">
      {/* Avatar — 40px matches standard X feed sizing */}
      <div className="w-10 h-10 rounded-full overflow-hidden bg-[#cfd9de] flex-shrink-0 flex items-center justify-center">
        {profileImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profileImage}
            alt={`${displayName}'s avatar`}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-[#536471] font-semibold text-xs">U</span>
        )}
      </div>

      {/* Name · Handle · Timestamp info section */}
      <div className="flex-1 min-w-0 flex flex-col gap-0.5 pt-0.5">
        {/* Row 1: Display Name + Badges on left, Timestamp on right */}
        <div className="flex items-center justify-between gap-2 w-full min-w-0">
          <div className="flex items-center gap-1 min-w-0">
            <span className="font-bold text-[#0f1419] text-[15px] leading-5 truncate">
              {displayName}
            </span>

            {/* Verification Badge */}
            {isVerified && (
              <svg
                aria-label="Verified account"
                className="w-[15px] h-[15px] text-[#1D9BF0] fill-current flex-shrink-0"
                viewBox="0 0 22 22"
              >
                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.855-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.69-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.636.433 1.221.878 1.69.47.446 1.055.752 1.69.883.635.13 1.294.083 1.902-.143.271.586.702 1.084 1.24 1.438.54.354 1.167.551 1.813.568.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.225 1.261.272 1.894.142.634-.13 1.219-.437 1.69-.882.445-.47.749-1.055.878-1.69.13-.634.085-1.29-.138-1.893.587-.274 1.087-.705 1.443-1.245.355-.54.554-1.17.573-1.817zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
              </svg>
            )}

            {/* Optional Organisation Badge */}
            {showOptionalBadge && (
              <svg
                aria-label="Organisation badge"
                className="w-[15px] h-[15px] text-[#e8a000] fill-current flex-shrink-0"
                viewBox="0 0 22 22"
              >
                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.855-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.69-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.636.433 1.221.878 1.69.47.446 1.055.752 1.69.883.635.13 1.294.083 1.902-.143.271.586.702 1.084 1.24 1.438.54.354 1.167.551 1.813.568.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.225 1.261.272 1.894.142.634-.13 1.219-.437 1.69-.882.445-.47.749-1.055.878-1.69.13-.634.085-1.29-.138-1.893.587-.274 1.087-.705 1.443-1.245.355-.54.554-1.17.573-1.817zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
              </svg>
            )}
          </div>

          {/* Timestamp inline */}
          {(showDate || showTime) && (
            <span className="text-[#536471] text-[15px] leading-5 shrink-0 hover:underline cursor-pointer">
              {timestamp}
            </span>
          )}
        </div>

        {/* Row 2: Username */}
        <div className="flex items-center min-w-0">
          <span className="text-[#536471] text-[15px] leading-5 truncate">
            @{username}
          </span>
        </div>
      </div>

      {/* Platform Logo — replaces More Menu */}
      {showLogo && (
        <div className="flex-shrink-0 w-4 h-4 text-[#536471] mt-0.5">
          {selectedLogo === "x" ? (
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-full h-full fill-[#1D9BF0]">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          )}
        </div>
      )}
    </div>
  );
}
