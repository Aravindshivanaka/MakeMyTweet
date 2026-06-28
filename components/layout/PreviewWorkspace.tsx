"use client";

import React from "react";
import { createPortal } from "react-dom";
import RichBlueFrame from "../tweet/RichBlueFrame";
import TweetCard from "../tweet/TweetCard";
import { useAppStore } from "@/store/use-app-store";

export default function PreviewWorkspace() {
  const {
    displayName,
    username,
    profileImage,
    selectedLogo,
    showLogo,
    tweetText,
    tweetTheme,
    showMetrics,
    comments,
    retweets,
    likes,
    views,
    bookmarks,
    date,
    hour,
    minute,
    meridiem,
    showDate,
    showTime,
    showTimestamp,
    backgroundColor,
    backgroundType,
    backgroundImage,
    exportFormat,
    showBorder,
    borderColor,
    showBackground,
    showCardBackground,
    borderSize,
    backgroundScale,
    backgroundPositionX,
    backgroundPositionY,
    organizationBadgeEnabled,
    organizationBadgeImage,
  } = useAppStore();

  const [isMobile, setIsMobile] = React.useState(false);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [windowSize, setWindowSize] = React.useState<{ w: number; h: number }>({ w: 0, h: 0 });

  const previewContainerRef = React.useRef<HTMLDivElement>(null);
  const sizerAreaRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- ISSUE 1 / 3 -----------------------------------------------------------
  // The canvas (#export-canvas / RichBlueFrame) defines the card's TRUE natural
  // size for the active format. We measure it and compute ONE uniform scale that
  // fits it inside the visible preview area without overflow. transform: scale()
  // is used because it visually fits WITHOUT altering the node's
  // offsetWidth/offsetHeight, which the export engine relies on — so the exported
  // image stays byte-identical regardless of preview scale.
  //
  // IMPORTANT: the natural size must be computed from the format's DESIGN max-width
  // (matching what the export renders in isolation), NOT from a transient offsetWidth.
  // Reading offsetWidth while the card wrapper is position:absolute causes a
  // shrink-to-fit feedback loop that collapses the canvas — that was the "card too
  // small" regression. We pin the natural width to the design max-width so the
  // preview lays the card out at exactly the proportions the export produces.
  const DESIGN_MAX_WIDTH: Record<"landscape" | "square" | "story", number> = {
    landscape: 740,
    square: 640,
    story: 440,
  };
  const canvasNaturalWidth = DESIGN_MAX_WIDTH[exportFormat];
  const canvasNaturalHeight =
    exportFormat === "square" ? canvasNaturalWidth                       // 1:1
    : exportFormat === "story" ? Math.round((canvasNaturalWidth * 16) / 9) // 9:16
    : Math.round((canvasNaturalWidth * 9) / 16);                          // 16:9
  const canvasNatural = { w: canvasNaturalWidth, h: canvasNaturalHeight };

  const [viewport, setViewport] = React.useState<{ w: number; h: number } | null>(null);

  React.useEffect(() => {
    const sizerArea = sizerAreaRef.current;
    if (!sizerArea) return;
    const measure = () => {
      // Measure the actual space available for the card sizer.
      // This is the inner flex column's content area, which already
      // accounts for sibling elements (title bar, dimension label).
      const w = sizerArea.clientWidth;
      const h = sizerArea.clientHeight;
      if (w && h) setViewport({ w, h });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(sizerArea);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [isMobile, exportFormat]);

  // Uniform preview scale. Capped at 1 so desktop landscape (which already fits
  // naturally) is rendered unscaled — i.e. desktop layout behavior is preserved.
  let previewFitScale = 1;
  if (viewport && viewport.w > 0 && viewport.h > 0) {
    const padW = isMobile ? 24 : 16;
    const padH = isMobile ? 24 : 32;
    const availW = Math.max(0, viewport.w - padW);
    const availH = Math.max(0, viewport.h - padH);
    previewFitScale = Math.min(availW / canvasNatural.w, availH / canvasNatural.h, 1);
    if (!isFinite(previewFitScale) || previewFitScale <= 0) previewFitScale = 1;
  }

  let fullscreenFitScale = 1;
  if (isFullscreen && windowSize.w > 0 && windowSize.h > 0) {
    const padW = 32;
    const padH = 64;
    const availW = Math.max(0, windowSize.w - padW);
    const availH = Math.max(0, windowSize.h - padH);
    fullscreenFitScale = Math.min(availW / canvasNatural.w, availH / canvasNatural.h, 1);
    if (!isFinite(fullscreenFitScale) || fullscreenFitScale <= 0) fullscreenFitScale = 1;
  }



  const formatTimestamp = () => {
    if (!showDate && !showTime) return "";

    let dateStr = "";
    if (showDate && date) {
      try {
        const d = new Date(date);
        if (!isNaN(d.getTime())) {
          dateStr = d.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          });
        } else {
          dateStr = date;
        }
      } catch {
        dateStr = date;
      }
    }

    let timeStr = "";
    if (showTime) {
      timeStr = `${parseInt(hour, 10) || 12}:${minute.padStart(2, "0")} ${meridiem}`;
    }

    if (showDate && showTime) {
      return `${timeStr} · ${dateStr}`;
    } else if (showDate) {
      return dateStr;
    } else if (showTime) {
      return timeStr;
    }
    return "";
  };

  // Build the background styles for the canvas
  const previewBgStyles: React.CSSProperties = {};
  if (showBackground) {
    if (backgroundType === "solid" || backgroundType === "preset") {
      if (backgroundColor) {
        if (backgroundColor.includes("gradient")) {
          previewBgStyles.background = backgroundColor;
        } else {
          previewBgStyles.backgroundColor = backgroundColor;
        }
      }
    } else if (backgroundType === "custom" && backgroundImage) {
      previewBgStyles.backgroundImage = `url(${backgroundImage})`;
      previewBgStyles.backgroundSize = `${backgroundScale}%`;
      previewBgStyles.backgroundPosition = `calc(50% + ${backgroundPositionX}px) calc(50% + ${backgroundPositionY}px)`;
      previewBgStyles.backgroundRepeat = "no-repeat";
    }
  } else {
    previewBgStyles.backgroundColor = "var(--canvas-bg)";
    previewBgStyles.background = "none";
    previewBgStyles.backgroundImage = "none";
  }

  // Fullscreen overlay background — fully opaque, matching canvas bg
  const fullscreenBgStyles: React.CSSProperties = {};
  if (showBackground) {
    if (backgroundType === "solid" || backgroundType === "preset") {
      if (backgroundColor) {
        if (backgroundColor.includes("gradient")) {
          fullscreenBgStyles.background = backgroundColor;
        } else {
          fullscreenBgStyles.backgroundColor = backgroundColor;
        }
      }
    } else if (backgroundType === "custom" && backgroundImage) {
      fullscreenBgStyles.backgroundImage = `url(${backgroundImage})`;
      fullscreenBgStyles.backgroundSize = `${backgroundScale}%`;
      fullscreenBgStyles.backgroundPosition = `calc(50% + ${backgroundPositionX}px) calc(50% + ${backgroundPositionY}px)`;
      fullscreenBgStyles.backgroundRepeat = "no-repeat";
    }
  } else {
    fullscreenBgStyles.backgroundColor = "var(--canvas-bg)";
  }

  const workspaceStyles: React.CSSProperties = {};
  workspaceStyles.backgroundColor = "var(--workspace-bg)";
  workspaceStyles.backgroundImage = "var(--workspace-grid)";
  workspaceStyles.backgroundSize = "var(--workspace-grid-size)";

  // The tweet card content shared between normal preview and fullscreen
  const tweetCardContent = (
    <RichBlueFrame
      backgroundColor={backgroundColor}
      backgroundType={backgroundType}
      backgroundImage={backgroundImage}
      exportFormat={exportFormat}
      showBackground={showBackground}
    >
      <TweetCard
        displayName={displayName || "Display Name"}
        username={username || "username"}
        profileImage={profileImage}
        isVerified={true}
        showOptionalBadge={false}
        selectedLogo={selectedLogo}
        showLogo={showLogo}
        timestamp={formatTimestamp()}
        showDate={showDate}
        showTime={showTime}
        showTimestamp={showTimestamp}
        tweetText={tweetText}
        fontSize={18}
        hasMedia={false}
        showMetrics={showMetrics}
        comments={comments}
        retweets={retweets}
        likes={likes}
        views={views}
        bookmarks={bookmarks}
        exportFormat={exportFormat}
        tweetTheme={tweetTheme}
        showBorder={showBorder}
        borderColor={borderColor}
        borderSize={borderSize}
        showCardBackground={showCardBackground}
        organizationBadgeEnabled={organizationBadgeEnabled}
        organizationBadgeImage={organizationBadgeImage}
      />
    </RichBlueFrame>
  );



  // Mobile fullscreen overlay — renders as a portal-like fixed overlay
  const overlayContent = isMobile && isFullscreen && typeof document !== "undefined" ? (
    createPortal(
      <>
        {/* Fullscreen opaque overlay */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            backgroundColor: "#080F1E",
            overflow: "hidden",
          }}
          className="flex items-center justify-center select-none"
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: canvasNatural.w,
              height: canvasNatural.h,
              transform: `translate(-50%, -50%) scale(${fullscreenFitScale})`,
              transformOrigin: "center center",
            }}
          >
            {tweetCardContent}
          </div>
        </div>

        {/* Close X button */}
        <button
          type="button"
          onClick={() => setIsFullscreen(false)}
          style={{
            position: "fixed",
            top: 16,
            right: 16,
            zIndex: 10000,
            background: "rgba(0,0,0,0.5)",
            color: "white",
            borderRadius: 8,
            padding: 8,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Close fullscreen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" style={{ width: 20, height: 20 }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </>,
      document.body
    )
  ) : null;

  return (
    <main
      ref={previewContainerRef}
      aria-label="Desktop Preview Canvas"
      // ISSUE 3: overflow hidden on all viewports — no preview scrollbar ever.
      className="flex-1 bg-background p-3 lg:p-5 flex items-center justify-center max-md:min-h-0 max-md:h-[45vh] md:min-h-[400px] lg:h-full overflow-hidden select-none transition-colors duration-200 relative"
      style={workspaceStyles}
    >
      {/* Fullscreen Button - visible on mobile only */}
      {isMobile && (
        <button
          type="button"
          onClick={() => setIsFullscreen(true)}
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            zIndex: 60,
            color: "white",
            borderRadius: 8,
            padding: "6px 8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="bg-black/50 border border-transparent dark:bg-[#111827]/80 dark:border-[#506285] hover:bg-[#1D6FEB] transition-all duration-200"
          aria-label="Fullscreen preview"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" style={{ width: 16, height: 16 }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m5.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
          </svg>
        </button>
      )}

      {overlayContent}


      <div className="w-full h-full max-w-[740px] flex flex-col items-center justify-center gap-4 max-md:gap-2.5 max-md:py-4 max-md:px-4 max-md:overflow-hidden" style={{ minHeight: 0 }}>
        {/* Workspace Title */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200/50 dark:border-[rgba(255,255,255,0.08)] bg-white/60 dark:bg-[rgba(17,24,39,0.85)] backdrop-blur-sm shadow-sm shadow-slate-100/50 dark:shadow-[0_4px_12px_rgba(0,0,0,0.25)] shrink-0 max-md:border-none max-md:bg-transparent max-md:p-0 max-md:shadow-none">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 max-md:hidden" />
          <span className="text-[10px] font-bold tracking-wider text-slate-600 dark:text-slate-300 max-md:text-[#475569] dark:max-md:text-slate-400 max-md:tracking-[0.1em] uppercase select-none">
            Live Preview Sandbox
          </span>
        </div>

        {/*
          Sizer reserves the FITTED footprint (scaled dimensions) so the flex
          layout doesn't overflow. The canvas inside renders at its TRUE natural
          size and is visually shrunk via transform: scale(). offsetWidth/Height on
          #export-canvas are unaffected by the transform, so export output stays
          identical. The card-width proportions (80/85/90%) come from RichBlueFrame's
          #export-canvas > article rule, untouched here.
        */}
        <div
          ref={sizerAreaRef}
          className="relative flex items-center justify-center max-md:flex-none"
          style={{
            flex: "1 1 0%",
            minHeight: 0,
            width: "100%",
            maxWidth: "100%",
            maxHeight: "100%",
            overflow: "hidden",
          }}
        >
          {/*
            Card wrapper — the ONLY element with transform: scale(). It is laid
            out at the canvas natural size (NOT shrink-to-fit), then visually
            scaled to fit. Pinch-zoom (mobile) multiplies on top of the fit scale.
          */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: canvasNatural.w,
              height: canvasNatural.h,
              transform: `translate(-50%, -50%) scale(${previewFitScale})`,
              transformOrigin: "center center",
            }}
          >
            {tweetCardContent}
          </div>
        </div>

        {/* Artboard Dimension Label — desktop only, positioned in normal flow
            (no longer inside the transformed wrapper, so it never gets scaled). */}
        <div className="text-[10px] font-mono text-slate-600 dark:text-slate-300 tracking-wider select-none shrink-0 max-md:hidden bg-white/60 dark:bg-[rgba(17,24,39,0.85)] px-2.5 py-0.5 rounded border border-slate-200/50 dark:border-[rgba(255,255,255,0.08)] shadow-sm shadow-slate-100/50 dark:shadow-[0_2px_6px_rgba(0,0,0,0.2)]">
          {exportFormat === "square"
            ? "1080 x 1080 (1:1)"
            : exportFormat === "story"
            ? "1080 x 1920 (9:16)"
            : "1200 x 675 (16:9)"}
        </div>
      </div>
    </main>
  );
}
