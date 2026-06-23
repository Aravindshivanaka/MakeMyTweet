"use client";

import React from "react";
import ReactCrop, { type Crop, type PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useAppStore } from "@/store/use-app-store";
import RichBlueFrame from "../tweet/RichBlueFrame";
import TweetCard from "../tweet/TweetCard";

type AspectOption = "16:9" | "1:1" | "9:16";

const ASPECT_RATIOS: Record<AspectOption, number> = {
  "16:9": 16 / 9,
  "1:1": 1,
  "9:16": 9 / 16,
};

const DESIGN_DIMENSIONS = {
  "16:9": { w: 740, h: 416 },
  "1:1": { w: 640, h: 640 },
  "9:16": { w: 440, h: 782 },
};

interface BackgroundCropperModalProps {
  rawImage: string;
  onConfirm: (croppedDataUrl: string) => void;
  onCancel: () => void;
}

export default function BackgroundCropperModal({
  rawImage,
  onConfirm,
  onCancel,
}: BackgroundCropperModalProps) {
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
    showBorder,
    borderColor,
    borderSize,
    showCardBackground,
  } = useAppStore();

  const [selectedAspect, setSelectedAspect] = React.useState<AspectOption>("1:1");
  const [showTweetPreview, setShowTweetPreview] = React.useState(false);
  const [crop, setCrop] = React.useState<Crop>({
    unit: "px",
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [completedCrop, setCompletedCrop] = React.useState<PixelCrop | null>(null);
  const [zoom, setZoom] = React.useState(1);
  const [imageWidth, setImageWidth] = React.useState(0);
  const [imageHeight, setImageHeight] = React.useState(0);

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

  const imgRef = React.useRef<HTMLImageElement | null>(null);

  const computeInitialCrop = (
    width: number,
    height: number,
    aspect: number
  ): PixelCrop => {
    // Fit the largest crop of the given aspect ratio within the image
    let cropW: number;
    let cropH: number;
    if (width / height > aspect) {
      // Image is wider than needed
      cropH = height * 0.8;
      cropW = cropH * aspect;
    } else {
      // Image is taller than needed
      cropW = width * 0.8;
      cropH = cropW / aspect;
    }
    const x = (width - cropW) / 2;
    const y = (height - cropH) / 2;
    return { unit: "px", x, y, width: cropW, height: cropH };
  };

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget;
    setImageWidth(width);
    setImageHeight(height);
    const aspect = ASPECT_RATIOS[selectedAspect];
    const initialCrop = computeInitialCrop(width, height, aspect);
    setCrop(initialCrop);
    setCompletedCrop(initialCrop);
  };

  const handleAspectChange = (option: AspectOption) => {
    setSelectedAspect(option);
    const aspect = ASPECT_RATIOS[option];
    // Recompute initial crop for the zoomed image dimensions
    const w = imageWidth * zoom;
    const h = imageHeight * zoom;
    if (w > 0 && h > 0) {
      const newCrop = computeInitialCrop(w, h, aspect);
      setCrop(newCrop);
      setCompletedCrop(newCrop);
    }
  };

  const handleZoomChange = (newZoom: number) => {
    if (!crop || !crop.width || !crop.height) return;
    const ratio = newZoom / zoom;
    setZoom(newZoom);

    const centerX = crop.x + crop.width / 2;
    const centerY = crop.y + crop.height / 2;

    const newCenterX = centerX * ratio;
    const newCenterY = centerY * ratio;

    const newWidth = crop.width;
    const newHeight = crop.height;

    const zoomedWidth = imageWidth * newZoom;
    const zoomedHeight = imageHeight * newZoom;

    const newX = Math.max(0, Math.min(zoomedWidth - newWidth, newCenterX - newWidth / 2));
    const newY = Math.max(0, Math.min(zoomedHeight - newHeight, newCenterY - newHeight / 2));

    const updatedCrop: PixelCrop = {
      unit: "px",
      x: newX,
      y: newY,
      width: newWidth,
      height: newHeight,
    };

    setCrop(updatedCrop);
    setCompletedCrop(updatedCrop);
  };

  const handleOk = () => {
    if (
      !imgRef.current ||
      !completedCrop ||
      completedCrop.width === 0 ||
      completedCrop.height === 0
    ) {
      return;
    }

    const image = imgRef.current;
    const canvas = document.createElement("canvas");

    const scaleX = image.naturalWidth / image.clientWidth;
    const scaleY = image.naturalHeight / image.clientHeight;

    const cropWidth = completedCrop.width * scaleX;
    const cropHeight = completedCrop.height * scaleY;

    canvas.width = cropWidth;
    canvas.height = cropHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
      0,
      0,
      cropWidth,
      cropHeight
    );

    const croppedDataUrl = canvas.toDataURL("image/png");
    onConfirm(croppedDataUrl);
  };

  const aspectOptions: AspectOption[] = ["16:9", "1:1", "9:16"];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="bg-[#0B0F19] border border-[#1E2D4A] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        style={{ width: "100%", maxWidth: "540px", maxHeight: "90vh" }}
      >
        {/* Header with aspect ratio buttons */}
        <div className="px-6 py-4 border-b border-[#1E2D4A]">
          <h3 className="text-sm font-bold text-slate-200 mb-3">Crop Background Image</h3>
          <div className="grid grid-cols-3 gap-2">
            {aspectOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleAspectChange(option)}
                style={{
                  background: selectedAspect === option ? "#1D6FEB" : "#111827",
                  color: selectedAspect === option ? "#FFFFFF" : "#94A3B8",
                  border: selectedAspect === option ? "1px solid #1D6FEB" : "1px solid #1E2D4A",
                  padding: "8px 0",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 150ms ease-in-out",
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Body - Cropper */}
        <div className="p-6 flex flex-col gap-5 overflow-y-auto">
          <div className="relative max-h-[340px] overflow-auto border border-[#1E2D4A] bg-[#090D16] rounded-xl flex items-center justify-center p-4">
            <ReactCrop
              crop={crop}
              onChange={(c) => setCrop(c)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={ASPECT_RATIOS[selectedAspect]}
              keepSelection
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={imgRef}
                src={rawImage}
                alt="Crop source"
                onLoad={onImageLoad}
                style={{
                  width: `${zoom * 100}%`,
                  maxWidth: "none",
                  display: "block",
                }}
              />

              {showTweetPreview && crop && crop.width > 0 && (
                <div
                  style={{
                    position: "absolute",
                    left: `${crop.x}px`,
                    top: `${crop.y}px`,
                    width: `${crop.width}px`,
                    height: `${crop.height}px`,
                    pointerEvents: "none",
                    zIndex: 10,
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: `${DESIGN_DIMENSIONS[selectedAspect].w}px`,
                      height: `${DESIGN_DIMENSIONS[selectedAspect].h}px`,
                      transform: `scale(${crop.width / DESIGN_DIMENSIONS[selectedAspect].w})`,
                      transformOrigin: "center center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pointerEvents: "none",
                      flexShrink: 0,
                    }}
                  >
                    <RichBlueFrame
                      backgroundColor="transparent"
                      backgroundType="preset"
                      backgroundImage={null}
                      exportFormat={selectedAspect === "16:9" ? "landscape" : selectedAspect === "1:1" ? "square" : "story"}
                      showBackground={false}
                    >
                      {/* We want the frame's background to be transparent, so we override it */}
                      <style dangerouslySetInnerHTML={{ __html: `
                        #export-canvas {
                          background: transparent !important;
                          background-color: transparent !important;
                          background-image: none !important;
                          box-shadow: none !important;
                          border: none !important;
                        }
                      `}} />
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
                        exportFormat={selectedAspect === "16:9" ? "landscape" : selectedAspect === "1:1" ? "square" : "story"}
                        tweetTheme={tweetTheme}
                        showBorder={showBorder}
                        borderColor={borderColor}
                        borderSize={borderSize}
                        showCardBackground={showCardBackground}
                      />
                    </RichBlueFrame>
                  </div>
                </div>
              )}
            </ReactCrop>

            {/* Show Tweet / Hide Tweet button */}
            <button
              type="button"
              onClick={() => setShowTweetPreview(!showTweetPreview)}
              style={{
                position: "absolute",
                bottom: "12px",
                left: "12px",
                zIndex: 50,
                background: "rgba(0,0,0,0.6)",
                color: "white",
                fontSize: "12px",
                borderRadius: "8px",
                padding: "6px 10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              {showTweetPreview ? "Hide Tweet" : "Show Tweet"}
            </button>
          </div>

          {/* Zoom Control */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-400">
              <span>Zoom</span>
              <span>{Math.round(zoom * 100)}%</span>
            </div>
            <input
              type="range"
              min="1"
              max="3"
              step="0.05"
              value={zoom}
              onChange={(e) => handleZoomChange(parseFloat(e.target.value))}
              className="w-full h-1 bg-[#111827] rounded-lg appearance-none cursor-pointer accent-[#1D6FEB]"
            />
          </div>
        </div>

        {/* Footer - Cancel & OK */}
        <div className="px-6 py-4 border-t border-[#1E2D4A] bg-[#090D16] flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            style={{
              background: "#1D6FEB",
              color: "#FFFFFF",
              border: "none",
              padding: "8px 20px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 150ms ease-in-out",
              minWidth: "90px",
              textAlign: "center",
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleOk}
            style={{
              background: "#1D6FEB",
              color: "#FFFFFF",
              border: "none",
              padding: "8px 20px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 150ms ease-in-out",
              minWidth: "90px",
              textAlign: "center",
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
