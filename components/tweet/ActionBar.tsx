import React from "react";
import {
  MessageCircle,
  Repeat2,
  Heart,
  BarChart2,
  Bookmark,
  Share,
} from "lucide-react";

interface ActionBarProps {
  comments?: number;
  retweets?: number;
  likes?: number;
  views?: number;
  bookmarks?: number;
  showMetrics?: boolean;
}

interface ActionItem {
  icon: React.ElementType;
  count: string | null;
  label: string;
  hoverColor: string;
  hoverBg: string;
}

const formatCount = (val?: number): string | null => {
  if (val === undefined || val === null || isNaN(val)) return "0";
  if (val < 1000) return val.toString();
  if (val < 1000000) {
    const k = val / 1000;
    return k % 1 === 0 ? `${k}K` : `${k.toFixed(1)}K`;
  }
  const m = val / 1000000;
  return m % 1 === 0 ? `${m}M` : `${m.toFixed(1)}M`;
};

export default function ActionBar({
  comments = 0,
  retweets = 0,
  likes = 0,
  views = 0,
  bookmarks = 0,
  showMetrics = true,
}: ActionBarProps) {
  if (!showMetrics) return null;

  const actions: ActionItem[] = [
    {
      icon: MessageCircle,
      count: formatCount(comments),
      label: "Reply",
      hoverColor: "group-hover:text-[#1D9BF0]",
      hoverBg: "group-hover:bg-[#1d9bf0]/10",
    },
    {
      icon: Repeat2,
      count: formatCount(retweets),
      label: "Retweet",
      hoverColor: "group-hover:text-[#00BA7C]",
      hoverBg: "group-hover:bg-[#00ba7c]/10",
    },
    {
      icon: Heart,
      count: formatCount(likes),
      label: "Like",
      hoverColor: "group-hover:text-[#F91880]",
      hoverBg: "group-hover:bg-[#f91880]/10",
    },
    {
      icon: BarChart2,
      count: formatCount(views),
      label: "Views",
      hoverColor: "group-hover:text-[#1D9BF0]",
      hoverBg: "group-hover:bg-[#1d9bf0]/10",
    },
    {
      icon: Bookmark,
      count: formatCount(bookmarks),
      label: "Bookmark",
      hoverColor: "group-hover:text-[#1D9BF0]",
      hoverBg: "group-hover:bg-[#1d9bf0]/10",
    },
    {
      icon: Share,
      count: null,
      label: "Share",
      hoverColor: "group-hover:text-[#1D9BF0]",
      hoverBg: "group-hover:bg-[#1d9bf0]/10",
    },
  ];

  return (
    <div
      className="flex items-center justify-between w-full max-w-[425px] mt-3 -ml-1.5"
      role="group"
      aria-label="Tweet actions"
    >
      {actions.map(({ icon: Icon, count, label, hoverColor, hoverBg }) => (
        <button
          key={label}
          type="button"
          className="group flex items-center gap-0.5 text-[#536471] transition-colors cursor-pointer"
          aria-label={count ? `${count} ${label.toLowerCase()}` : label}
        >
          <div className={`p-1.5 rounded-full transition-colors ${hoverBg}`}>
            <Icon className={`w-[18px] h-[18px] transition-colors ${hoverColor}`} strokeWidth={1.75} />
          </div>
          {count !== null && (
            <span className={`text-[13px] leading-4 text-[#536471] transition-colors ${hoverColor}`}>
              {count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
