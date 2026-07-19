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
  organizationBadgeEnabled: true,
  organizationBadgeImage: "/images/default-avatar.webp",

  // Actions
  setSelectedLogo: (selectedLogo) => set({ selectedLogo }),
  setOrganizationBadgeEnabled: (organizationBadgeEnabled) => set({ organizationBadgeEnabled }),
  setOrganizationBadgeImage: (organizationBadgeImage) => set({ organizationBadgeImage }),
});
