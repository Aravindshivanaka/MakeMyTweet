import { StateCreator } from "zustand";
import { RootStore, ExportSliceState, ExportSliceActions } from "../types";

export const createExportSlice: StateCreator<
  RootStore,
  [],
  [],
  ExportSliceState & ExportSliceActions
> = (set) => ({
  // State
  exportFormat: "landscape",

  // Actions
  setExportFormat: (exportFormat) => set({ exportFormat }),
});
