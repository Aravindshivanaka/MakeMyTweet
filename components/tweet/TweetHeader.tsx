import React from "react";

interface TweetHeaderProps {
  displayName?: string;
  username?: string;
  profileImage?: string | null;
  isVerified?: boolean;
  showOptionalBadge?: boolean;
  selectedLogo?: "x" | "twitter" | "grok";
  showLogo?: boolean;
  exportFormat?: "story" | "square" | "landscape";
  tweetTheme?: "light" | "dark";
  organizationBadgeEnabled?: boolean;
  organizationBadgeImage?: string | null;
}

export default function TweetHeader({
  displayName = "Display Name",
  username = "username",
  profileImage = null,
  isVerified = true,
  showOptionalBadge = false,
  selectedLogo = "x",
  showLogo = true,
  exportFormat = "landscape",
  tweetTheme = "light",
  organizationBadgeEnabled = false,
  organizationBadgeImage = null,
}: TweetHeaderProps) {
  const [logoError, setLogoError] = React.useState(false);

  React.useEffect(() => {
    setLogoError(false);
  }, [organizationBadgeImage]);

  // Responsive layout configs per export format
  let avatarSize = "w-[56px] h-[56px]";
  let displayNameSize = "text-[16px] leading-[20px]";
  let usernameSize = "text-[15px] leading-[20px]";
  let logoSize = "w-[19px] h-[19px] mt-[4px]";
  let gapClass = "gap-2";

  if (exportFormat === "square") {
    avatarSize = "w-[56px] h-[56px]";
    displayNameSize = "text-[16px] leading-[20px]";
    usernameSize = "text-[15px] leading-[20px]";
    logoSize = "w-[18px] h-[18px] mt-[4px]";
    gapClass = "gap-2";
  } else if (exportFormat === "story") {
    avatarSize = "w-[52px] h-[52px]";
    displayNameSize = "text-[15px] leading-[18px]";
    usernameSize = "text-[14px] leading-[18px]";
    logoSize = "w-[17px] h-[17px] mt-[4px]";
    gapClass = "gap-2";
  }

  // Theme styling overrides
  const isDark = tweetTheme === "dark";
  const nameColorClass = isDark ? "text-[#e7e9ea]" : "text-[#0f1419]";
  const usernameColorClass = isDark ? "text-[#71767b]" : "text-[#536471]";
  const logoColorClass = isDark ? "text-[#71767b]" : "text-[#536471]";

  return (
    <div className={`flex items-start ${gapClass} w-full`}>
      {/* Avatar */}
      <div className={`${avatarSize} rounded-full overflow-hidden ${isDark ? "bg-[#2f3336]" : "bg-[#cfd9de]"} flex-shrink-0 flex items-center justify-center`}>
        {profileImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profileImage}
            alt={`${displayName}'s avatar`}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-[#536471] font-bold text-sm select-none">U</span>
        )}
      </div>

      {/* Name + Handle column */}
      <div className="flex-1 min-w-0 flex flex-col gap-[2px] text-left">
        {/* Row 1: Display Name + Verification Badges */}
        <div className="flex items-center gap-2 min-w-0">
          <span className={`font-bold truncate ${nameColorClass} ${displayNameSize}`}>
            {displayName}
          </span>

          {/* Verification Badge */}
          {isVerified && (
            <svg
              aria-label="Verified account"
              className="w-[18.75px] h-[18.75px] text-[#1D9BF0] fill-current flex-shrink-0 mt-[2.5px]"
              viewBox="0 0 22 22"
            >
              <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.855-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.69-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.636.433 1.221.878 1.69.47.446 1.055.752 1.69.883.635.13 1.294.083 1.902-.143.271.586.702 1.084 1.24 1.438.54.354 1.167.551 1.813.568.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.225 1.261.272 1.894.142.634-.13 1.219-.437 1.69-.882.445-.47.749-1.055.878-1.69.13-.634.085-1.29-.138-1.893.587-.274 1.087-.705 1.443-1.245.355-.54.554-1.17.573-1.817zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
            </svg>
          )}

          {/* Organization Badge */}
          {organizationBadgeEnabled && organizationBadgeImage && !logoError && (
            <div className="org-badge-container flex-shrink-0 flex items-center justify-center w-[18.75px] h-[18.75px] mt-[2.5px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={organizationBadgeImage}
                alt="Organization Badge"
                onError={() => setLogoError(true)}
                className="w-full h-full rounded-[3px] object-contain"
              />
            </div>
          )}

          {/* Optional Organisation Badge */}
          {showOptionalBadge && (
            <svg
              aria-label="Organisation badge"
              className="w-[18px] h-[18px] text-[#e8a000] fill-current flex-shrink-0"
              viewBox="0 0 22 22"
            >
              <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.855-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.69-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.636.433 1.221.878 1.69.47.446 1.055.752 1.69.883.635.13 1.294.083 1.902-.143.271.586.702 1.084 1.24 1.438.54.354 1.167.551 1.813.568.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.225 1.261.272 1.894.142.634-.13 1.219-.437 1.69-.882.445-.47.749-1.055.878-1.69.13-.634.085-1.29-.138-1.893.587-.274 1.087-.705 1.443-1.245.355-.54.554-1.17.573-1.817zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
            </svg>
          )}
        </div>

        {/* Row 2: @username */}
        <span className={`font-normal truncate ${usernameColorClass} ${usernameSize}`}>
          @{username}
        </span>
      </div>

      {/* Platform Logo — top-right corner */}
      {showLogo && (
        <div className={`flex-shrink-0 ${logoColorClass} ${logoSize}`}>
          {selectedLogo === "x" ? (
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          ) : selectedLogo === "grok" ? (
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <path d="M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815" />
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
