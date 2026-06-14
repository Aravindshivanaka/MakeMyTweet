import { StateCreator } from "zustand";
import { RootStore, TimestampSliceState, TimestampSliceActions } from "../types";

export const createTimestampSlice: StateCreator<
  RootStore,
  [],
  [],
  TimestampSliceState & TimestampSliceActions
> = (set) => ({
  // State
  date: "2026-06-14",
  hour: "12",
  minute: "00",
  meridiem: "AM",
  showDate: true,
  showTime: true,

  // Actions
  setDate: (date) => set({ date }),
  setHour: (hour) => set({ hour }),
  setMinute: (minute) => set({ minute }),
  setMeridiem: (meridiem) => set({ meridiem }),
  setShowDate: (showDate) => set({ showDate }),
  setShowTime: (showTime) => set({ showTime }),
});
