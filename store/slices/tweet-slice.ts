import { StateCreator } from "zustand";
import { RootStore, TweetSliceState, TweetSliceActions } from "../types";

export const createTweetSlice: StateCreator<
  RootStore,
  [],
  [],
  TweetSliceState & TweetSliceActions
> = (set) => ({
  // State
  tweetText: "This is a mockup tweet! Type your content in the sidebar to see it update here in real-time. #mockup #generator",
  characterCount: 108,
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
