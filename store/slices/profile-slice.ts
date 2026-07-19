import { StateCreator } from "zustand";
import { RootStore, ProfileSliceState, ProfileSliceActions } from "../types";

export const createProfileSlice: StateCreator<
  RootStore,
  [],
  [],
  ProfileSliceState & ProfileSliceActions
> = (set) => ({
  // State
  displayName: "Naval",
  username: "naval",
  profileImage: "/images/default-avatar.webp",
  verificationBadge: "blue",

  // Actions
  setDisplayName: (displayName) => set({ displayName }),
  setUsername: (username) => set({ username }),
  setProfileImage: (profileImage) => set({ profileImage }),
  setVerificationBadge: (verificationBadge) => set({ verificationBadge }),
});
