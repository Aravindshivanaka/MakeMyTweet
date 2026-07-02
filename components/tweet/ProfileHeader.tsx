import React from "react";

interface ProfileHeaderProps {
  displayName?: string;
  username?: string;
  profileImage?: string | null;
  isVerified?: boolean;
  selectedLogo?: "x" | "twitter";
}

export default function ProfileHeader({
  displayName = "Display Name",
  username = "username",
  profileImage = null,
  isVerified = true,
  selectedLogo = "x",
}: ProfileHeaderProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        {/* Circular Avatar Placeholder */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 border border-slate-100 flex-shrink-0 flex items-center justify-center text-slate-400 font-semibold text-sm">
          {profileImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profileImage}
              alt={`${displayName}'s avatar`}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          ) : (
            <span>U</span>
          )}
        </div>

        {/* Name and Handle */}
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-[#0A0A0A] text-[15px] truncate leading-5">
              {displayName}
            </span>
            {isVerified && (
              // Twitter blue verified checkmark badge SVG
              <svg
                aria-label="Verified account"
                className="w-[18.75px] h-[18.75px] text-[#1D9BF0] fill-current flex-shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.99-3.818-3.99-.48 0-.941.1-1.358.275C14.77 2.515 13.512 1.5 12 1.5s-2.77 1.015-3.412 2.285c-.417-.175-.878-.275-1.358-.275-2.108 0-3.818 1.78-3.818 3.99 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.71 3.99 3.818 3.99.48 0 .941-.1 1.358-.275C9.23 21.485 10.488 22.5 12 22.5s2.77-1.015 3.412-2.285c.417.175.878.275 1.358.275 2.108 0 3.818-1.78 3.818-3.99 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zm-12.72 3.23l-3.07-3.07 1.41-1.41 1.66 1.66 4.31-4.31 1.41 1.41-5.72 5.72z" />
              </svg>
            )}
          </div>
          <span className="text-sm text-[#64748B] leading-4 truncate">
            @{username}
          </span>
        </div>
      </div>

      {/* Platform Logo Placeholder */}
      <div className="flex-shrink-0 text-slate-800 w-[22px] h-[22px] flex items-center justify-center">
        {selectedLogo === "x" ? (
          // New X logo SVG
          <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        ) : (
          // Twitter Bird logo SVG
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#1D9BF0]">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        )}
      </div>
    </div>
  );
}
