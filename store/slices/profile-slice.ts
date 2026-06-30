import { StateCreator } from "zustand";
import { RootStore, ProfileSliceState, ProfileSliceActions } from "../types";

export const createProfileSlice: StateCreator<
  RootStore,
  [],
  [],
  ProfileSliceState & ProfileSliceActions
> = (set) => ({
  // State
  displayName: "Naval Ravikant",
  username: "naval",
  profileImage: null,

  // Actions
  setDisplayName: (displayName) => set({ displayName }),
  setUsername: (username) => set({ username }),
  setProfileImage: (profileImage) => set({ profileImage }),
});
