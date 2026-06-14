import React from "react";

interface ActionBarProps {
  comments?: number;
  retweets?: number;
  likes?: number;
  views?: number;
  bookmarks?: number;
  showMetrics?: boolean;
  exportFormat?: "story" | "square" | "landscape";
  tweetTheme?: "light" | "dark";
}

const formatCount = (val?: number): string | null => {
  if (val === undefined || val === null || isNaN(val)) return "0";
  if (val === 0) return null;
  if (val < 1000) return val.toString();
  if (val < 1000000) {
    const k = val / 1000;
    return k % 1 === 0 ? `${k}K` : `${k.toFixed(1)}K`;
  }
  const m = val / 1000000;
  return m % 1 === 0 ? `${m}M` : `${m.toFixed(1)}M`;
};

/* Authentic X SVG icon paths (outline style, viewBox 0 0 24 24) */
const XIcons = {
  reply: (
    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" />
  ),
  retweet: (
    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
  ),
  heart: (
    <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C10.085 6.01 8.628 5.44 7.407 5.5 5.091 5.6 3.177 7.506 3.177 9.9c0 2.012 1.107 4.12 3.303 6.246 2.14 2.08 4.675 3.74 5.765 4.42.16.1.372.1.53 0 1.09-.68 3.626-2.34 5.765-4.42 2.197-2.127 3.304-4.234 3.304-6.246 0-2.394-1.914-4.3-4.228-4.4zm-3.9 12.71c-.98-.62-3.28-2.13-5.18-3.98-1.913-1.86-2.74-3.49-2.74-4.89 0-1.4 1.13-2.51 2.51-2.57.85-.03 1.85.5 2.73 1.53l1.58 2.14 1.58-2.14c.88-1.03 1.88-1.56 2.73-1.53 1.38.06 2.51 1.17 2.51 2.57 0 1.4-.82 3.03-2.74 4.89-1.9 1.85-4.2 3.36-5.18 3.98z" />
  ),
  views: (
    <path d="M8.75 21V3h2v18h-2zM18.75 21V8h2v13h-2zM3.75 21v-6h2v6h-2zM13.75 21V6h2v15h-2z" />
  ),
  bookmark: (
    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" />
  ),
  share: (
    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" />
  ),
};

interface ActionItemConfig {
  icon: React.ReactNode;
  count: string | null;
  label: string;
  hoverColor: string;
  hoverBg: string;
}

export default function ActionBar({
  comments = 0,
  retweets = 0,
  likes = 0,
  views = 0,
  bookmarks = 0,
  showMetrics = true,
  exportFormat = "landscape",
  tweetTheme = "light",
}: ActionBarProps) {
  if (!showMetrics) return null;

  // Format adjustments (unconstrained full width spacing)
  let containerClass = "w-full mt-4 -ml-2 -mr-2";
  let iconSizeClass = "w-[18px] h-[18px]";
  let countTextClass = "text-[13px]";
  let paddingClass = "p-2";
  let buttonGapClass = "gap-1";

  if (exportFormat === "square") {
    containerClass = "w-full mt-3.5 -ml-1.5 -mr-1.5";
    iconSizeClass = "w-[17px] h-[17px]";
    countTextClass = "text-[12.5px]";
    paddingClass = "p-1.5";
    buttonGapClass = "gap-1";
  } else if (exportFormat === "story") {
    containerClass = "w-full mt-3 -ml-1 -mr-1";
    iconSizeClass = "w-[16px] h-[16px]";
    countTextClass = "text-[12px]";
    paddingClass = "p-1";
    buttonGapClass = "gap-0.5";
  }

  // Theme styling overrides
  const isDark = tweetTheme === "dark";
  const defaultColorClass = isDark ? "text-[#71767b]" : "text-[#536471]";

  const actions: ActionItemConfig[] = [
    {
      icon: XIcons.reply,
      count: formatCount(comments),
      label: "Reply",
      hoverColor: "group-hover:text-[#1D9BF0]",
      hoverBg: "group-hover:bg-[#1d9bf0]/10",
    },
    {
      icon: XIcons.retweet,
      count: formatCount(retweets),
      label: "Retweet",
      hoverColor: "group-hover:text-[#00BA7C]",
      hoverBg: "group-hover:bg-[#00ba7c]/10",
    },
    {
      icon: XIcons.heart,
      count: formatCount(likes),
      label: "Like",
      hoverColor: "group-hover:text-[#F91880]",
      hoverBg: "group-hover:bg-[#f91880]/10",
    },
    {
      icon: XIcons.views,
      count: formatCount(views),
      label: "Views",
      hoverColor: "group-hover:text-[#1D9BF0]",
      hoverBg: "group-hover:bg-[#1d9bf0]/10",
    },
    {
      icon: XIcons.bookmark,
      count: formatCount(bookmarks),
      label: "Bookmark",
      hoverColor: "group-hover:text-[#1D9BF0]",
      hoverBg: "group-hover:bg-[#1d9bf0]/10",
    },
    {
      icon: XIcons.share,
      count: null,
      label: "Share",
      hoverColor: "group-hover:text-[#1D9BF0]",
      hoverBg: "group-hover:bg-[#1d9bf0]/10",
    },
  ];

  // Under 9:16 Story format, display only: Comment, Retweet, Like, Views
  const visibleActions = exportFormat === "story"
    ? actions.filter(
        (a) =>
          a.label === "Reply" ||
          a.label === "Retweet" ||
          a.label === "Like" ||
          a.label === "Views"
      )
    : actions;

  return (
    <div
      className={`flex items-center justify-between ${containerClass}`}
      role="group"
      aria-label="Tweet actions"
    >
      {visibleActions.map(({ icon, count, label, hoverColor, hoverBg }) => (
        <button
          key={label}
          type="button"
          className={`group flex items-center ${buttonGapClass} ${defaultColorClass} transition-colors cursor-pointer`}
          aria-label={count ? `${count} ${label.toLowerCase()}` : label}
        >
          <div className={`${paddingClass} rounded-full transition-colors ${hoverBg}`}>
            <svg
              viewBox="0 0 24 24"
              className={`${iconSizeClass} fill-current transition-colors ${hoverColor}`}
            >
              {icon}
            </svg>
          </div>
          {count !== null && (
            <span className={`${countTextClass} leading-4 tabular-nums transition-colors ${hoverColor}`}>
              {count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
