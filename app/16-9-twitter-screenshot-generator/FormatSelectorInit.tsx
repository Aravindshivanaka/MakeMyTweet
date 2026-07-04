"use client";

import { useEffect } from "react";
import useAppStore from "@/store/use-app-store";

export default function FormatSelectorInit() {
  const setExportFormat = useAppStore((state) => state.setExportFormat);

  useEffect(() => {
    // Set a tiny timeout to ensure that the Sidebar's mount-time default ("square")
    // is executed first, and then we override it to "landscape" (16:9 layout).
    const timer = setTimeout(() => {
      setExportFormat("landscape");
    }, 100);
    return () => clearTimeout(timer);
  }, [setExportFormat]);

  return null;
}
