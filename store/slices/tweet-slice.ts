import { StateCreator } from "zustand";
import { RootStore, TweetSliceState, TweetSliceActions } from "../types";

export const createTweetSlice: StateCreator<
  RootStore,
  [],
  [],
  TweetSliceState & TweetSliceActions
> = (set) => ({
  // State
  tweetText: "A fit body, a calm mind, a house full of love. These things cannot be bought — they must be earned.",
  characterCount: 100,
  tweetTheme: "dark",
  showBorder: false,
  borderColor: "#1D6FEB",
  borderSize: 10,

  // Actions
  setTweetText: (tweetText) => {
    const truncated = tweetText.slice(0, 280);
    set({
      tweetText: truncated,
      characterCount: truncated.length,
    });
  },
  setTweetTheme: (tweetTheme) => set({ tweetTheme }),
  setShowBorder: (showBorder) => set({ showBorder }),
  setBorderColor: (borderColor) => set({ borderColor }),
  setBorderSize: (borderSize) => set({ borderSize }),
});
