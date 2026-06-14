import { StateCreator } from "zustand";
import { RootStore, BackgroundSliceState, BackgroundSliceActions } from "../types";

export const createBackgroundSlice: StateCreator<
  RootStore,
  [],
  [],
  BackgroundSliceState & BackgroundSliceActions
> = (set) => ({
  // State
  backgroundType: "solid",
  backgroundColor: "#0F2356", // Matches Rich Blue Frame default
  backgroundImage: null,

  // Actions
  setBackgroundType: (backgroundType) => set({ backgroundType }),
  setBackgroundColor: (backgroundColor) => set({ backgroundColor }),
  setBackgroundImage: (backgroundImage) => set({ backgroundImage }),
});
