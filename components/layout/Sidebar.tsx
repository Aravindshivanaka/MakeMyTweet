"use client";

import React from "react";
import SectionCard from "./SectionCard";
import { Input } from "@/components/ui/input";
import { useAppStore } from "@/store/use-app-store";
import {
  MessageCircle,
  Repeat2,
  Heart,
  BarChart2,
  Bookmark,
  Pencil,
} from "lucide-react";
import * as htmlToImage from "html-to-image";
import ReactCrop, { type Crop, type PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export default function Sidebar() {
  const {
    displayName,
    setDisplayName,
    username,
    setUsername,
    profileImage,
    setProfileImage,
    selectedLogo,
    setSelectedLogo,
    showLogo,
    setShowLogo,
    tweetText,
    setTweetText,
    characterCount,
    showMetrics,
    toggleMetrics,
    likes,
    setLikes,
    comments,
    setComments,
    retweets,
    setRetweets,
    views,
    setViews,
    bookmarks,
    setBookmarks,
    date,
    setDate,
    hour,
    setHour,
    minute,
    setMinute,
    meridiem,
    setMeridiem,
    showDate,
    setShowDate,
    showTime,
    setShowTime,
    backgroundColor,
    setBackgroundColor,
    backgroundType,
    setBackgroundType,
    backgroundImage,
    setBackgroundImage,
    exportFormat,
    setExportFormat,
  } = useAppStore();

  const backdropPresets = [
    "#FFFFFF", // White
    "#000000", // Black
    "#0F2356", // Sky Blue (Default)
    "#6B7280", // Gray
  ];

  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const bgFileInputRef = React.useRef<HTMLInputElement>(null);

  // Crop local state
  const [rawImageForCrop, setRawImageForCrop] = React.useState<string | null>(null);
  const [isCropModalOpen, setIsCropModalOpen] = React.useState(false);
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

  const imgRef = React.useRef<HTMLImageElement | null>(null);

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget;
    // Center a square crop
    const size = Math.min(width, height) * 0.8;
    const x = (width - size) / 2;
    const y = (height - size) / 2;

    const initialCrop: PixelCrop = {
      unit: "px",
      x,
      y,
      width: size,
      height: size,
    };

    setCrop(initialCrop);
    setCompletedCrop(initialCrop);
    setImageWidth(width);
    setImageHeight(height);
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

    // Zoomed image dimensions
    const zoomedWidth = imageWidth * newZoom;
    const zoomedHeight = imageHeight * newZoom;

    // Clamp coordinates to image boundaries
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

  const handleSaveCrop = () => {
    if (!imgRef.current || !completedCrop || completedCrop.width === 0 || completedCrop.height === 0) {
      alert("Please select a crop area first.");
      return;
    }

    const image = imgRef.current;
    const canvas = document.createElement("canvas");
    
    // Calculate the scale between the rendered image and the natural image
    const scaleX = image.naturalWidth / image.clientWidth;
    const scaleY = image.naturalHeight / image.clientHeight;

    // Canvas size should match the natural cropped size to preserve high quality
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
    setProfileImage(croppedDataUrl);
    
    // Close modal and clean up
    setIsCropModalOpen(false);
    setRawImageForCrop(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRawImageForCrop(reader.result as string);
        setIsCropModalOpen(true);
        setZoom(1);
      };
      reader.readAsDataURL(file);
    }
  };

  // Metrics actions
  const handleGenerateRandomMetrics = () => {
    const randomComments = Math.floor(Math.random() * (500 - 10 + 1)) + 10;
    const randomRetweets = Math.floor(Math.random() * (5000 - 20 + 1)) + 20;
    const randomLikes = Math.floor(Math.random() * (50000 - 100 + 1)) + 100;
    const randomViews = Math.floor(Math.random() * (1000000 - 1000 + 1)) + 1000;
    const randomBookmarks = Math.floor(Math.random() * (2000 - 5 + 1)) + 5;

    setComments(randomComments);
    setRetweets(randomRetweets);
    setLikes(randomLikes);
    setViews(randomViews);
    setBookmarks(randomBookmarks);
  };

  const handleClearMetrics = () => {
    setComments(0);
    setRetweets(0);
    setLikes(0);
    setViews(0);
    setBookmarks(0);
  };

  const handleBgImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundType("custom");
        setBackgroundImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    const node = document.getElementById("export-canvas");
    if (!node) {
      alert("Error: Preview canvas not found!");
      return;
    }
    try {
      const dataUrl = await htmlToImage.toPng(node, {
        pixelRatio: 3,
        style: {
          transform: "scale(1)",
          transformOrigin: "top left",
          width: node.offsetWidth + "px",
          height: node.offsetHeight + "px",
        },
      });
      const link = document.createElement("a");
      link.download = `tweet-ss-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Oops, PNG export failed!", err);
      alert("Oops, PNG export failed! See developer console for logs.");
    }
  };

  return (
    <div
      className="w-full h-full bg-panel-bg border-r border-border p-6 flex flex-col gap-6 select-none transition-colors duration-200"
    >
      <nav className="flex flex-col gap-5" aria-label="Controls Navigation">
        
        {/* 1. Profile Settings */}
        <SectionCard
          id="profile-settings-section"
          title="1. Profile Settings"
          description="Customize the user profile details and platform logo."
        >
          <div className="flex flex-col gap-4">
            {/* Profile image picker */}
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Profile Photo
              </span>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleAvatarChange}
                accept="image/*"
                className="hidden"
              />
              <div
                onClick={() => fileInputRef.current?.click()}
                className="group relative flex items-center gap-4 p-4 rounded-xl border border-dashed border-[#1E2D4A] bg-[#111827] hover:bg-[#1E2D4A]/30 hover:border-[#1D6FEB] transition-all duration-200 cursor-pointer select-none"
              >
                {/* Prominent Avatar Preview */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-800 border-2 border-[#1E2D4A] group-hover:border-[#1D6FEB] transition-colors shrink-0 flex items-center justify-center">
                  {profileImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={profileImage}
                      alt="Profile preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-slate-500 font-bold text-lg">U</span>
                  )}
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[10px] text-white font-semibold">Change</span>
                  </div>
                </div>

                {/* Upload action info */}
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-[#1D6FEB] transition-colors">
                    Upload new photo
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    Click to browse files (PNG, JPG)
                  </span>
                </div>
              </div>
            </div>

            {/* Display Name Input */}
            <div className="flex flex-col">
              <label htmlFor="displayNameInput" className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Display Name
              </label>
              <div className="relative">
                <Input
                  id="displayNameInput"
                  placeholder="Display Name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="pr-9 bg-[#111827] border-[#1E2D4A] text-white focus:border-[#1D6FEB] focus:ring-0 text-sm"
                />
                <Pencil className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
              </div>
            </div>

            {/* Username Input */}
            <div className="flex flex-col">
              <label htmlFor="usernameInput" className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Username
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1D6FEB] text-sm font-semibold">
                  @
                </span>
                <Input
                  id="usernameInput"
                  placeholder="username"
                  value={username}
                  onChange={(e) => {
                    const cleaned = e.target.value
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .replace(/[^a-z0-9_-]/g, "");
                    setUsername(cleaned);
                  }}
                  className="pl-7 pr-9 bg-[#111827] border-[#1E2D4A] text-white focus:border-[#1D6FEB] focus:ring-0 text-sm"
                />
                <Pencil className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
              </div>
            </div>

            {/* Platform Logo Dropdown and Toggle */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label htmlFor="platformLogoSelect" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Platform Logo
                </label>
                <button
                  type="button"
                  onClick={() => setShowLogo(!showLogo)}
                  className={`w-9 h-5 rounded-full p-0.5 transition-colors cursor-pointer flex items-center ${
                    showLogo ? "bg-[#1D6FEB] justify-end" : "bg-slate-700 justify-start"
                  }`}
                  aria-label="Toggle platform logo visibility"
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                </button>
              </div>
              <select
                id="platformLogoSelect"
                value={selectedLogo}
                onChange={(e) => setSelectedLogo(e.target.value as "x" | "twitter")}
                className="h-10 px-3 rounded-md bg-[#111827] border border-[#1E2D4A] text-slate-300 text-sm focus:border-[#1D6FEB] focus:outline-none cursor-pointer"
              >
                <option value="x">X Logo</option>
                <option value="twitter">Twitter Bird Logo</option>
              </select>
            </div>
          </div>
        </SectionCard>

        {/* 2. Tweet Content */}
        <SectionCard
          id="tweet-content-section"
          title="2. Tweet Content"
          description="Write the mock post text."
        >
          <div className="flex flex-col gap-2">
            <textarea
              id="tweetTextarea"
              placeholder="Write your mock tweet content here..."
              value={tweetText}
              onChange={(e) => setTweetText(e.target.value)}
              className="w-full min-h-[90px] p-3 rounded-md bg-[#111827] border border-[#1E2D4A] text-white text-sm focus:border-[#1D6FEB] focus:outline-none resize-none"
            />
            <div className="text-[11px] text-right font-semibold text-[#64748B]">
              {characterCount} / 280
            </div>
          </div>
        </SectionCard>

        {/* 3. Engagement Controls */}
        <SectionCard
          id="engagement-controls-section"
          title="3. Engagement Controls"
          description="Enable metrics and customize counter values."
        >
          <div className="flex flex-col gap-4">
            {/* Show Metrics Toggle */}
            <div className="flex items-center justify-between border-b border-[#1E2D4A] pb-3">
              <span className="text-xs font-semibold text-slate-300">
                Show Engagement Metrics
              </span>
              <button
                type="button"
                onClick={toggleMetrics}
                className={`w-9 h-5 rounded-full p-0.5 transition-colors cursor-pointer flex items-center ${
                  showMetrics ? "bg-[#1D6FEB] justify-end" : "bg-slate-700 justify-start"
                }`}
                aria-label="Toggle metrics visibility"
              >
                <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
              </button>
            </div>

            {/* Metrics inputs with corresponding left-aligned icons */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label htmlFor="input-Comments" className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Comments
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    id="input-Comments"
                    placeholder="0"
                    value={comments === 0 ? "" : comments.toString()}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      setComments(val === "" ? 0 : parseInt(val, 10));
                    }}
                    className="pl-9 bg-[#111827] border-[#1E2D4A] text-white focus:border-[#1D6FEB] focus:ring-0 text-xs"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="input-Retweets" className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Retweets
                </label>
                <div className="relative">
                  <Repeat2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    id="input-Retweets"
                    placeholder="0"
                    value={retweets === 0 ? "" : retweets.toString()}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      setRetweets(val === "" ? 0 : parseInt(val, 10));
                    }}
                    className="pl-9 bg-[#111827] border-[#1E2D4A] text-white focus:border-[#1D6FEB] focus:ring-0 text-xs"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="input-Likes" className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Likes
                </label>
                <div className="relative">
                  <Heart className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    id="input-Likes"
                    placeholder="0"
                    value={likes === 0 ? "" : likes.toString()}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      setLikes(val === "" ? 0 : parseInt(val, 10));
                    }}
                    className="pl-9 bg-[#111827] border-[#1E2D4A] text-white focus:border-[#1D6FEB] focus:ring-0 text-xs"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="input-Views" className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Views
                </label>
                <div className="relative">
                  <BarChart2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    id="input-Views"
                    placeholder="0"
                    value={views === 0 ? "" : views.toString()}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      setViews(val === "" ? 0 : parseInt(val, 10));
                    }}
                    className="pl-9 bg-[#111827] border-[#1E2D4A] text-white focus:border-[#1D6FEB] focus:ring-0 text-xs"
                  />
                </div>
              </div>

              {/* Bookmarks Control */}
              <div className="flex flex-col col-span-2">
                <label htmlFor="input-Bookmarks" className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Bookmarks
                </label>
                <div className="relative">
                  <Bookmark className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    id="input-Bookmarks"
                    placeholder="0"
                    value={bookmarks === 0 ? "" : bookmarks.toString()}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      setBookmarks(val === "" ? 0 : parseInt(val, 10));
                    }}
                    className="pl-9 bg-[#111827] border-[#1E2D4A] text-white focus:border-[#1D6FEB] focus:ring-0 text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Generate Sample Metrics */}
            <div className="flex flex-col gap-3 pt-3 border-t border-[#1E2D4A]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Generate Sample Metrics
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleGenerateRandomMetrics}
                  className="px-3 py-2 rounded-lg border border-[#1E2D4A] bg-[#111827] hover:bg-[#1E2D4A]/50 text-xs font-semibold text-slate-200 transition-colors cursor-pointer text-center"
                >
                  Generate Random Metrics
                </button>
                <button
                  type="button"
                  onClick={handleClearMetrics}
                  className="px-3 py-2 rounded-lg border border-rose-950 bg-rose-950/20 hover:bg-rose-950/50 text-xs font-semibold text-rose-300 transition-colors cursor-pointer text-center"
                >
                  Clear Metrics
                </button>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* 4. Timestamp Controls */}
        <SectionCard
          id="timestamp-controls-section"
          title="4. Timestamp Controls"
          description="Adjust mock timestamp."
        >
          <div className="grid grid-cols-5 gap-2">
            {/* Show Date Toggle */}
            <div className="flex items-center justify-between border-b border-[#1E2D4A] pb-3 col-span-5">
              <span className="text-xs font-semibold text-slate-300">
                Show Date
              </span>
              <button
                type="button"
                onClick={() => setShowDate(!showDate)}
                className={`w-9 h-5 rounded-full p-0.5 transition-colors cursor-pointer flex items-center ${
                  showDate ? "bg-[#1D6FEB] justify-end" : "bg-slate-700 justify-start"
                }`}
                aria-label="Toggle date visibility"
              >
                <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
              </button>
            </div>

            {/* Show Time Toggle */}
            <div className="flex items-center justify-between border-b border-[#1E2D4A] pb-3 col-span-5 mb-2">
              <span className="text-xs font-semibold text-slate-300">
                Show Time
              </span>
              <button
                type="button"
                onClick={() => setShowTime(!showTime)}
                className={`w-9 h-5 rounded-full p-0.5 transition-colors cursor-pointer flex items-center ${
                  showTime ? "bg-[#1D6FEB] justify-end" : "bg-slate-700 justify-start"
                }`}
                aria-label="Toggle time visibility"
              >
                <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
              </button>
            </div>

            {/* Date field (with increased contrast calendar icon styling) */}
            <div className="col-span-2 flex flex-col">
              <label htmlFor="dateInput" className="text-[10px] font-bold uppercase text-slate-400 mb-1">Date</label>
              <Input
                id="dateInput"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-[#111827] border-[#1E2D4A] text-slate-300 text-xs dark:[&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-80 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              />
            </div>

            {/* Hour select */}
            <div className="flex flex-col">
              <label htmlFor="hourSelect" className="text-[10px] font-bold uppercase text-slate-400 mb-1">Hour</label>
              <select
                id="hourSelect"
                value={hour}
                onChange={(e) => setHour(e.target.value)}
                className="h-9 px-1 rounded-md bg-[#111827] border border-[#1E2D4A] text-slate-300 text-xs focus:outline-none cursor-pointer"
              >
                {Array.from({ length: 12 }, (_, i) => String(i + 1)).map((h) => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>
            </div>

            {/* Minute select */}
            <div className="flex flex-col">
              <label htmlFor="minSelect" className="text-[10px] font-bold uppercase text-slate-400 mb-1">Min</label>
              <select
                id="minSelect"
                value={minute}
                onChange={(e) => setMinute(e.target.value)}
                className="h-9 px-1 rounded-md bg-[#111827] border border-[#1E2D4A] text-slate-300 text-xs focus:outline-none cursor-pointer"
              >
                {Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0")).map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Meridiem select */}
            <div className="flex flex-col">
              <label htmlFor="meridiemSelect" className="text-[10px] font-bold uppercase text-slate-400 mb-1">AM/PM</label>
              <select
                id="meridiemSelect"
                value={meridiem}
                onChange={(e) => setMeridiem(e.target.value as "AM" | "PM")}
                className="h-9 px-1 rounded-md bg-[#111827] border border-[#1E2D4A] text-slate-300 text-xs focus:outline-none cursor-pointer"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
        </SectionCard>

        {/* 5. Background Controls */}
        <SectionCard
          id="background-controls-section"
          title="5. Background Controls"
          description="Select solid gradient presets or upload image."
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {/* Presets */}
              {backdropPresets.map((color, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setBackgroundType("preset");
                    setBackgroundColor(color);
                  }}
                  className={`w-8 h-8 rounded-full cursor-pointer flex-shrink-0 border transition-all hover:scale-110 ${
                    backgroundType === "preset" && backgroundColor === color
                      ? "border-white scale-105"
                      : "border-[#1E2D4A]"
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Select background color preset ${color}`}
                />
              ))}
            </div>

            {/* Custom Image Upload */}
            <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-[#1E2D4A]">
              <label className="text-[10px] font-bold uppercase text-slate-400">Custom Image Backdrop</label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  ref={bgFileInputRef}
                  onChange={handleBgImageChange}
                  accept="image/png, image/jpeg, image/webp"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => bgFileInputRef.current?.click()}
                  className="px-3 py-1.5 rounded-lg border border-[#1E2D4A] bg-[#111827] hover:bg-[#1E2D4A]/50 text-xs font-semibold text-slate-300 transition-colors cursor-pointer"
                >
                  Upload Background
                </button>
                {backgroundImage && (
                  <button
                    type="button"
                    onClick={() => {
                      setBackgroundImage(null);
                      setBackgroundType("preset");
                      setBackgroundColor("#0F2356"); // Reset to default Navy
                    }}
                    className="text-xs text-rose-500 hover:underline cursor-pointer"
                  >
                    Clear Image
                  </button>
                )}
              </div>
            </div>
          </div>
        </SectionCard>

        {/* 6. Export Format */}
        <SectionCard
          id="export-format-section"
          title="6. Export Format"
          description="Choose canvas layout dimensions."
        >
          <div className="grid grid-cols-3 gap-2">
            {[
              { format: "story", label: "Story (9:16)" },
              { format: "square", label: "Square (1:1)" },
              { format: "landscape", label: "Landscape (16:9)" },
            ].map(({ format, label }) => (
              <button
                key={format}
                type="button"
                onClick={() => setExportFormat(format as "story" | "square" | "landscape")}
                className={`py-2 rounded-lg border text-xs font-semibold transition-colors cursor-pointer ${
                  exportFormat === format
                    ? "bg-[#1D6FEB] border-[#1D6FEB] text-white"
                    : "bg-[#111827] border-[#1E2D4A] text-slate-300 hover:bg-[#1E2D4A]/30"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </SectionCard>

        {/* 7. Download Button */}
        <div className="pt-2 border-t border-[#1E2D4A]">
          <button
            type="button"
            onClick={handleDownload}
            className="w-full py-3.5 rounded-xl bg-[#1D6FEB] hover:bg-[#155fc7] text-white text-center text-sm font-semibold transition-colors shadow-md cursor-pointer"
          >
            Download PNG
          </button>
        </div>

      </nav>

      {/* Crop Modal */}
      {isCropModalOpen && rawImageForCrop && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0B0F19] border border-[#1E2D4A] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="px-6 py-4 border-b border-[#1E2D4A] flex justify-between items-center">
              <h3 className="text-sm font-bold text-slate-200">Crop Profile Photo</h3>
              <button
                type="button"
                onClick={() => {
                  setIsCropModalOpen(false);
                  setRawImageForCrop(null);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
                className="text-slate-400 hover:text-slate-200 text-lg font-bold cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col gap-6 overflow-y-auto">
              {/* Cropper Container */}
              <div className="relative max-h-[300px] overflow-auto border border-[#1E2D4A] bg-[#090D16] rounded-xl flex items-center justify-center p-4">
                <ReactCrop
                  crop={crop}
                  onChange={(c) => setCrop(c)}
                  onComplete={(c) => setCompletedCrop(c)}
                  aspect={1}
                  circularCrop
                  keepSelection
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    ref={imgRef}
                    src={rawImageForCrop}
                    alt="Crop source"
                    onLoad={onImageLoad}
                    style={{
                      width: `${zoom * 100}%`,
                      maxWidth: "none",
                      display: "block",
                    }}
                  />
                </ReactCrop>
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

              {/* Live Preview & Info */}
              <div className="flex items-center gap-4 p-4 bg-[#111827]/50 border border-[#1E2D4A] rounded-xl">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-800 border-2 border-[#1E2D4A] shrink-0 flex items-center justify-center">
                  {imageWidth > 0 && crop?.width && crop.width > 0 ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={rawImageForCrop}
                      alt="Live preview"
                      style={{
                        position: "absolute",
                        width: `${(imageWidth * zoom * 64) / crop.width}px`,
                        height: `${(imageHeight * zoom * 64) / (crop.height || crop.width)}px`,
                        left: `-${(crop.x * 64) / crop.width}px`,
                        top: `-${(crop.y * 64) / (crop.height || crop.width)}px`,
                        maxWidth: "none",
                      }}
                    />
                  ) : (
                    <span className="text-slate-500 font-bold text-lg">U</span>
                  )}
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-xs font-semibold text-slate-200">Avatar Preview</span>
                  <span className="text-[10px] text-slate-400">
                    Drag the crop circle or adjust the slider to center your avatar.
                  </span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-[#1E2D4A] bg-[#090D16] flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsCropModalOpen(false);
                  setRawImageForCrop(null);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
                className="px-4 py-2 rounded-lg border border-[#1E2D4A] hover:bg-slate-800 text-xs font-semibold text-slate-300 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveCrop}
                className="px-4 py-2 rounded-lg bg-[#1D6FEB] hover:bg-[#155fc7] text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                Save Crop
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
