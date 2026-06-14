import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { RootStore } from "./types";
import { createProfileSlice } from "./slices/profile-slice";
import { createTweetSlice } from "./slices/tweet-slice";
import { createLogoSlice } from "./slices/logo-slice";
import { createMetricsSlice } from "./slices/metrics-slice";
import { createTimestampSlice } from "./slices/timestamp-slice";
import { createBackgroundSlice } from "./slices/background-slice";
import { createExportSlice } from "./slices/export-slice";

export const useAppStore = create<RootStore>()(
  devtools((...args) => ({
    ...createProfileSlice(...args),
    ...createTweetSlice(...args),
    ...createLogoSlice(...args),
    ...createMetricsSlice(...args),
    ...createTimestampSlice(...args),
    ...createBackgroundSlice(...args),
    ...createExportSlice(...args),
  }))
);
export default useAppStore;
