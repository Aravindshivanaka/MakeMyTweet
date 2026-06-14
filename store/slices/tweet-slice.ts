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

  // Actions
  setTweetText: (tweetText) =>
    set({
      tweetText,
      characterCount: tweetText.length,
    }),
});
