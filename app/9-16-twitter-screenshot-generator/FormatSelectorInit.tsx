"use client";

import { useEffect } from "react";
import useAppStore from "@/store/use-app-store";

export default function FormatSelectorInit() {
  const setExportFormat = useAppStore((state) => state.setExportFormat);

  useEffect(() => {
    // Set a tiny timeout to ensure that the Sidebar's mount-time default ("square")
    // is executed first, and then we override it to "story" (9:16 layout).
    const timer = setTimeout(() => {
      setExportFormat("story");
    }, 100);
    return () => clearTimeout(timer);
  }, [setExportFormat]);

  return null;
}
