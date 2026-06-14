import { StateCreator } from "zustand";
import { RootStore, MetricsSliceState, MetricsSliceActions } from "../types";

export const createMetricsSlice: StateCreator<
  RootStore,
  [],
  [],
  MetricsSliceState & MetricsSliceActions
> = (set) => ({
  // State
  showMetrics: true,
  likes: 0,
  comments: 0,
  retweets: 0,
  views: 0,
  bookmarks: 0,

  // Actions
  toggleMetrics: () => set((state) => ({ showMetrics: !state.showMetrics })),
  setLikes: (likes) => set({ likes }),
  setComments: (comments) => set({ comments }),
  setRetweets: (retweets) => set({ retweets }),
  setViews: (views) => set({ views }),
  setBookmarks: (bookmarks) => set({ bookmarks }),
});
