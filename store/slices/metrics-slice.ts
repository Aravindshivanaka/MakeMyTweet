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
  likes: 44200,
  comments: 22600,
  retweets: 4800,
  views: 4600000,
  bookmarks: 0,

  // Actions
  toggleMetrics: () => set((state) => ({ showMetrics: !state.showMetrics })),
  setLikes: (likes) => set({ likes: Math.min(Math.max(0, likes), 99000000) }),
  setComments: (comments) => set({ comments: Math.min(Math.max(0, comments), 99000000) }),
  setRetweets: (retweets) => set({ retweets: Math.min(Math.max(0, retweets), 99000000) }),
  setViews: (views) => set({ views: Math.min(Math.max(0, views), 99000000) }),
  setBookmarks: (bookmarks) => set({ bookmarks: Math.min(Math.max(0, bookmarks), 99000000) }),
});
