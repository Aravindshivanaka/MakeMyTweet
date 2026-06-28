export interface ProfileSliceState {
  displayName: string;
  username: string;
  profileImage: string | null;
}

export interface ProfileSliceActions {
  setDisplayName: (name: string) => void;
  setUsername: (username: string) => void;
  setProfileImage: (image: string | null) => void;
}

export interface TweetSliceState {
  tweetText: string;
  characterCount: number;
  tweetTheme: "light" | "dark";
  showBorder: boolean;
  borderColor: string;
  borderSize: number;
}

export interface TweetSliceActions {
  setTweetText: (text: string) => void;
  setTweetTheme: (theme: "light" | "dark") => void;
  setShowBorder: (show: boolean) => void;
  setBorderColor: (color: string) => void;
  setBorderSize: (size: number) => void;
}

export interface LogoSliceState {
  selectedLogo: "x" | "twitter" | "grok";
  showLogo: boolean;
  organizationBadgeEnabled: boolean;
  organizationBadgeImage: string | null;
}

export interface LogoSliceActions {
  setSelectedLogo: (logo: "x" | "twitter" | "grok") => void;
  setShowLogo: (show: boolean) => void;
  setOrganizationBadgeEnabled: (enabled: boolean) => void;
  setOrganizationBadgeImage: (image: string | null) => void;
}

export interface MetricsSliceState {
  showMetrics: boolean;
  likes: number;
  comments: number;
  retweets: number;
  views: number;
  bookmarks: number;
}

export interface MetricsSliceActions {
  toggleMetrics: () => void;
  setLikes: (likes: number) => void;
  setComments: (comments: number) => void;
  setRetweets: (retweets: number) => void;
  setViews: (views: number) => void;
  setBookmarks: (bookmarks: number) => void;
}

export interface TimestampSliceState {
  date: string;
  hour: string;
  minute: string;
  meridiem: "AM" | "PM";
  showDate: boolean;
  showTime: boolean;
  showTimestamp: boolean;
}

export interface TimestampSliceActions {
  setDate: (date: string) => void;
  setHour: (hour: string) => void;
  setMinute: (minute: string) => void;
  setMeridiem: (meridiem: "AM" | "PM") => void;
  setShowDate: (show: boolean) => void;
  setShowTime: (show: boolean) => void;
  setShowTimestamp: (show: boolean) => void;
}

export interface BackgroundSliceState {
  backgroundType: "solid" | "preset" | "custom";
  backgroundColor: string;
  backgroundImage: string | null;
  showBackground: boolean;
  showCardBackground: boolean;
  backgroundScale: number;
  backgroundPositionX: number;
  backgroundPositionY: number;
}

export interface BackgroundSliceActions {
  setBackgroundType: (type: "solid" | "preset" | "custom") => void;
  setBackgroundColor: (color: string) => void;
  setBackgroundImage: (image: string | null) => void;
  setShowBackground: (show: boolean) => void;
  setShowCardBackground: (show: boolean) => void;
  setBackgroundScale: (scale: number) => void;
  setBackgroundPositionX: (x: number) => void;
  setBackgroundPositionY: (y: number) => void;
}

export interface ExportSliceState {
  exportFormat: "story" | "square" | "landscape";
}

export interface ExportSliceActions {
  setExportFormat: (format: "story" | "square" | "landscape") => void;
}

export type RootStoreState =
  ProfileSliceState &
  TweetSliceState &
  LogoSliceState &
  MetricsSliceState &
  TimestampSliceState &
  BackgroundSliceState &
  ExportSliceState;

export type RootStoreActions =
  ProfileSliceActions &
  TweetSliceActions &
  LogoSliceActions &
  MetricsSliceActions &
  TimestampSliceActions &
  BackgroundSliceActions &
  ExportSliceActions;

export type RootStore = RootStoreState & RootStoreActions;
