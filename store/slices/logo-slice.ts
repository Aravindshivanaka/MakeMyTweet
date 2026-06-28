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
  organizationBadgeEnabled: false,
  organizationBadgeImage: null,

  // Actions
  setSelectedLogo: (selectedLogo) => set({ selectedLogo }),
  setShowLogo: (showLogo) => set({ showLogo }),
  setOrganizationBadgeEnabled: (organizationBadgeEnabled) => set({ organizationBadgeEnabled }),
  setOrganizationBadgeImage: (organizationBadgeImage) => set({ organizationBadgeImage }),
});
