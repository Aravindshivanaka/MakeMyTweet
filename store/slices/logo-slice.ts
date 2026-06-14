import { StateCreator } from "zustand";
import { RootStore, LogoSliceState, LogoSliceActions } from "../types";

export const createLogoSlice: StateCreator<
  RootStore,
  [],
  [],
  LogoSliceState & LogoSliceActions
> = (set) => ({
  // State
  selectedLogo: "x",
  showLogo: true,

  // Actions
  setSelectedLogo: (selectedLogo) => set({ selectedLogo }),
  setShowLogo: (showLogo) => set({ showLogo }),
});
