import { StateCreator } from "zustand";
import { RootStore, ProfileSliceState, ProfileSliceActions } from "../types";

export const createProfileSlice: StateCreator<
  RootStore,
  [],
  [],
  ProfileSliceState & ProfileSliceActions
> = (set) => ({
  // State
  displayName: "Display Name",
  username: "username",
  profileImage: null,

  // Actions
  setDisplayName: (displayName) => set({ displayName }),
  setUsername: (username) => set({ username }),
  setProfileImage: (profileImage) => set({ profileImage }),
});
