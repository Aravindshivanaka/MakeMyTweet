import { StateCreator } from "zustand";
import { RootStore, BackgroundSliceState, BackgroundSliceActions } from "../types";

export const createBackgroundSlice: StateCreator<
  RootStore,
  [],
  [],
  BackgroundSliceState & BackgroundSliceActions
> = (set) => ({
  // State
  backgroundType: "preset",
  backgroundColor: "#FFFFFF", // Matches Rich Blue Frame default
  backgroundImage: null,
  showBackground: true,
  showCardBackground: true,

  // Actions
  setBackgroundType: (backgroundType) => set({ backgroundType }),
  setBackgroundColor: (backgroundColor) => set({ backgroundColor }),
  setBackgroundImage: (backgroundImage) => set({ backgroundImage }),
  setShowBackground: (showBackground) => set({ showBackground }),
  setShowCardBackground: (showCardBackground) => set({ showCardBackground }),
});
