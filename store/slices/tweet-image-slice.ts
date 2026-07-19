import { StateCreator } from "zustand";
import { RootStore, TweetImageSliceState, TweetImageSliceActions } from "../types";

export const createTweetImageSlice: StateCreator<
  RootStore,
  [],
  [],
  TweetImageSliceState & TweetImageSliceActions
> = (set) => ({
  // State
  tweetImage: null,

  // Actions
  setTweetImage: (tweetImage) => set({ tweetImage }),
});
