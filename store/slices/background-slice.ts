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
  backgroundScale: 100,
  backgroundPositionX: 0,
  backgroundPositionY: 0,

  // Actions
  setBackgroundType: (backgroundType) => set({ backgroundType }),
  setBackgroundColor: (backgroundColor) => set({ backgroundColor }),
  setBackgroundImage: (backgroundImage) => set({ backgroundImage, backgroundScale: 100, backgroundPositionX: 0, backgroundPositionY: 0 }),
  setShowBackground: (showBackground) => set({ showBackground }),
  setShowCardBackground: (showCardBackground) => set({ showCardBackground }),
  setBackgroundScale: (backgroundScale) => set({ backgroundScale }),
  setBackgroundPositionX: (backgroundPositionX) => set({ backgroundPositionX }),
  setBackgroundPositionY: (backgroundPositionY) => set({ backgroundPositionY }),
});
