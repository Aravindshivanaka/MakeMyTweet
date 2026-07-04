"use client";

import React from "react";
import SectionCard from "./SectionCard";
import { Input } from "@/components/ui/input";
import { useAppStore } from "@/store/use-app-store";
import RichBlueFrame from "../tweet/RichBlueFrame";
import BackgroundCropperModal from "./BackgroundCropperModal";
import TweetCard from "../tweet/TweetCard";
import {
  MessageCircle,
  Repeat2,
  Heart,
  BarChart2,
  Bookmark,
  Pencil,
  User,
  Clock,
  Image,
  Square,
  Maximize2,
  Copy,
  Download,
  Award,
  Loader2,
  Check,
} from "lucide-react";
import ReactCrop, { type Crop, type PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

function TiltWrapper({ children }: { children: React.ReactNode }) {
  const [style, setStyle] = React.useState<React.CSSProperties>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    transition: "transform 0.3s ease-out",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const width = box.width;
    const height = box.height;

    const normalizedX = (x / width) - 0.5;
    const normalizedY = (y / height) - 0.5;

    const rotateX = -normalizedY * 4;
    const rotateY = normalizedX * 4;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`,
      transition: "transform 0.05s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      transition: "transform 0.3s ease-out",
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className="flex-1 flex"
    >
      {children}
    </div>
  );
}

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
    showTimestamp,
    setShowTimestamp,
    backgroundColor,
    setBackgroundColor,
    backgroundType,
    setBackgroundType,
    backgroundImage,
    setBackgroundImage,
    showBackground,
    setShowBackground,
    showCardBackground,
    setShowCardBackground,
    exportFormat,
    setExportFormat,
    tweetTheme,
    setTweetTheme,
    showBorder,
    setShowBorder,
    borderColor,
    setBorderColor,
    borderSize,
    setBorderSize,
    backgroundScale,
    setBackgroundScale,
    backgroundPositionX,
    setBackgroundPositionX,
    backgroundPositionY,
    setBackgroundPositionY,
    organizationBadgeEnabled,
    setOrganizationBadgeEnabled,
    organizationBadgeImage,
    setOrganizationBadgeImage,
  } = useAppStore();

  const backdropPresets = [
    { name: "Deep Navy", value: "#0F2356" },
    { name: "Midnight Aurora", value: "linear-gradient(135deg, #0F2356 0%, #1a1a2e 50%, #16213e 100%)" },
    { name: "Purple Haze", value: "linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11022e 100%)" },
    { name: "Ocean Deep", value: "linear-gradient(135deg, #0f3443 0%, #34e89e 100%)" },
    { name: "Sunset Warm", value: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { name: "Golden Hour", value: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)" },
    { name: "Pure Black", value: "#000000" },
    { name: "Pure White", value: "#FFFFFF" },
  ];

  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const orgFileInputRef = React.useRef<HTMLInputElement>(null);
  const bgFileInputRef = React.useRef<HTMLInputElement>(null);

  // Crop local state
  const [rawImageForCrop, setRawImageForCrop] = React.useState<string | null>(null);
  const [isCropModalOpen, setIsCropModalOpen] = React.useState(false);
  const [cropType, setCropType] = React.useState<"profile" | "organization" | null>(null);
  const [rawBgImageForCrop, setRawBgImageForCrop] = React.useState<string | null>(null);
  const [isBgCropModalOpen, setIsBgCropModalOpen] = React.useState(false);
  const [originalBackgroundImage, setOriginalBackgroundImage] = React.useState<string | null>(null);
  const [copyStatus, setCopyStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [downloadStatus, setDownloadStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
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

  // Desktop detection for scoping defaults (same pattern as ResizableLayout)
  const [isDesktop, setIsDesktop] = React.useState(false);
  React.useEffect(() => {
    const desktop = window.innerWidth >= 1024;
    setIsDesktop(desktop);
    if (desktop) {
      setExportFormat("square");
    }
  }, [setExportFormat]);

  // Background visual edit local state
  const [isBgEditModalOpen, setIsBgEditModalOpen] = React.useState(false);
  const [tempScale, setTempScale] = React.useState(100);
  const [tempPositionX, setTempPositionX] = React.useState(0);
  const [tempPositionY, setTempPositionY] = React.useState(0);

  const modalPreviewRef = React.useRef<HTMLDivElement>(null);
  const [modalDimensions, setModalDimensions] = React.useState({ w: 0, h: 0 });

  const tempPositionXRef = React.useRef(tempPositionX);
  const tempPositionYRef = React.useRef(tempPositionY);
  const tempScaleRef = React.useRef(tempScale);

  React.useEffect(() => {
    tempPositionXRef.current = tempPositionX;
  }, [tempPositionX]);

  React.useEffect(() => {
    tempPositionYRef.current = tempPositionY;
  }, [tempPositionY]);

  React.useEffect(() => {
    tempScaleRef.current = tempScale;
  }, [tempScale]);

  React.useEffect(() => {
    if (isBgEditModalOpen) {
      const timer = setTimeout(() => {
        if (modalPreviewRef.current) {
          setModalDimensions({
            w: modalPreviewRef.current.clientWidth,
            h: modalPreviewRef.current.clientHeight,
          });
        }
      }, 50);

      const handleResize = () => {
        if (modalPreviewRef.current) {
          setModalDimensions({
            w: modalPreviewRef.current.clientWidth,
            h: modalPreviewRef.current.clientHeight,
          });
        }
      };

      window.addEventListener("resize", handleResize);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isBgEditModalOpen]);

  const dragStartRef = React.useRef<{ x: number; y: number } | null>(null);
  const startPosRef = React.useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastTouchDistanceRef = React.useRef<number | null>(null);

  const DESIGN_MAX_WIDTH: Record<"landscape" | "square" | "story", number> = {
    landscape: 740,
    square: 640,
    story: 440,
  };
  const canvasNaturalWidth = DESIGN_MAX_WIDTH[exportFormat] || 740;
  const canvasNaturalHeight =
    exportFormat === "square" ? canvasNaturalWidth
      : exportFormat === "story" ? Math.round((canvasNaturalWidth * 16) / 9)
        : Math.round((canvasNaturalWidth * 9) / 16);

  const scaleFactor = canvasNaturalWidth / (modalDimensions.w || 1);

  const handleDragStart = (clientX: number, clientY: number) => {
    dragStartRef.current = { x: clientX, y: clientY };
    startPosRef.current = { x: tempPositionXRef.current, y: tempPositionYRef.current };
  };

  const handleDragMove = (clientX: number, clientY: number) => {
    if (!dragStartRef.current) return;
    const deltaX = clientX - dragStartRef.current.x;
    const deltaY = clientY - dragStartRef.current.y;
    setTempPositionX(startPosRef.current.x + deltaX * scaleFactor);
    setTempPositionY(startPosRef.current.y + deltaY * scaleFactor);
  };

  const handleDragEnd = () => {
    dragStartRef.current = null;
  };

  React.useEffect(() => {
    const container = modalPreviewRef.current;
    if (!container) return;

    const onWheelEvent = (e: WheelEvent) => {
      e.preventDefault();
      const zoomIntensity = 0.03;
      const factor = e.deltaY < 0 ? (1 + zoomIntensity) : (1 - zoomIntensity);
      setTempScale(prev => Math.max(20, Math.min(500, Math.round(prev * factor))));
    };

    const onTouchStartEvent = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
      } else if (e.touches.length >= 2) {
        dragStartRef.current = null;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        lastTouchDistanceRef.current = Math.sqrt(dx * dx + dy * dy);
      }
    };

    const onTouchMoveEvent = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        e.preventDefault();
        handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
      } else if (e.touches.length >= 2 && lastTouchDistanceRef.current !== null) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const currentDist = Math.sqrt(dx * dx + dy * dy);
        if (currentDist > 0) {
          const ratio = currentDist / lastTouchDistanceRef.current;
          setTempScale(prev => Math.max(20, Math.min(500, Math.round(prev * ratio))));
          lastTouchDistanceRef.current = currentDist;
        }
      }
    };

    const onTouchEndEvent = () => {
      handleDragEnd();
      lastTouchDistanceRef.current = null;
    };

    container.addEventListener("wheel", onWheelEvent, { passive: false });
    container.addEventListener("touchstart", onTouchStartEvent, { passive: true });
    container.addEventListener("touchmove", onTouchMoveEvent, { passive: false });
    container.addEventListener("touchend", onTouchEndEvent, { passive: true });
    container.addEventListener("touchcancel", onTouchEndEvent, { passive: true });

    return () => {
      container.removeEventListener("wheel", onWheelEvent);
      container.removeEventListener("touchstart", onTouchStartEvent);
      container.removeEventListener("touchmove", onTouchMoveEvent);
      container.removeEventListener("touchend", onTouchEndEvent);
      container.removeEventListener("touchcancel", onTouchEndEvent);
    };
  }, [isBgEditModalOpen, modalDimensions]);

  const handleSaveBgEdit = () => {
    setBackgroundScale(tempScale);
    setBackgroundPositionX(tempPositionX);
    setBackgroundPositionY(tempPositionY);
    setIsBgEditModalOpen(false);
  };

  const handleCancelBgEdit = () => {
    setIsBgEditModalOpen(false);
  };

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
    if (cropType === "profile") {
      setProfileImage(croppedDataUrl);
    } else if (cropType === "organization") {
      setOrganizationBadgeImage(croppedDataUrl);
    }

    // Close modal and clean up
    setIsCropModalOpen(false);
    setRawImageForCrop(null);
    setCropType(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (orgFileInputRef.current) {
      orgFileInputRef.current.value = "";
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCropType("profile");
        setRawImageForCrop(reader.result as string);
        setIsCropModalOpen(true);
        setZoom(1);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOrgLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileType = file.type.toLowerCase();
      const fileName = file.name.toLowerCase();
      const isAllowed = 
        fileType === "image/png" || 
        fileType === "image/jpeg" || 
        fileType === "image/jpg" || 
        fileType === "image/webp" ||
        fileName.endsWith(".png") ||
        fileName.endsWith(".jpg") ||
        fileName.endsWith(".jpeg") ||
        fileName.endsWith(".webp");

      if (!isAllowed) {
        alert("Unsupported file format. Please upload PNG, JPG, JPEG, or WebP images.");
        if (orgFileInputRef.current) orgFileInputRef.current.value = "";
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setCropType("organization");
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
        const dataUrl = reader.result as string;
        setOriginalBackgroundImage(dataUrl);
        setRawBgImageForCrop(dataUrl);
        setIsBgCropModalOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBgCropConfirm = (croppedDataUrl: string) => {
    setBackgroundType("custom");
    setBackgroundImage(croppedDataUrl);
    setIsBgCropModalOpen(false);
    setRawBgImageForCrop(null);
    if (bgFileInputRef.current) bgFileInputRef.current.value = "";
  };

  const handleBgCropCancel = () => {
    setIsBgCropModalOpen(false);
    setRawBgImageForCrop(null);
    if (bgFileInputRef.current) bgFileInputRef.current.value = "";
  };

  const handleCopyImage = async () => {
    const node = document.getElementById("export-canvas");
    if (!node) {
      setCopyStatus("error");
      setTimeout(() => setCopyStatus("idle"), 2000);
      return;
    }
    setCopyStatus("loading");
    const originalBorderRadius = node.style.borderRadius;
    const originalBorder = node.style.border;
    try {
      node.style.borderRadius = "0px";
      node.style.border = "none";
      const htmlToImage = await import("html-to-image");
      const blob = await htmlToImage.toBlob(node, {
        pixelRatio: 3,
        style: {
          transform: "scale(1)",
          transformOrigin: "top left",
          width: node.offsetWidth + "px",
          height: node.offsetHeight + "px",
          borderRadius: "0px",
          border: "none",
          ...(!showBackground ? {
            background: "none",
            backgroundColor: "transparent",
            backgroundImage: "none",
            boxShadow: "none",
          } : {}),
        },
      });
      if (!blob) throw new Error("Failed to generate blob from canvas");
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      setCopyStatus("success");
      setTimeout(() => setCopyStatus("idle"), 2000);
    } catch (err) {
      console.error("Oops, Copy Image failed!", err);
      setCopyStatus("error");
      setTimeout(() => setCopyStatus("idle"), 2000);
    } finally {
      node.style.borderRadius = originalBorderRadius;
      node.style.border = originalBorder;
    }
  };

  const handleDownload = async () => {
    const node = document.getElementById("export-canvas");
    if (!node) {
      setDownloadStatus("error");
      setTimeout(() => setDownloadStatus("idle"), 2000);
      return;
    }
    setDownloadStatus("loading");
    const originalBorderRadius = node.style.borderRadius;
    const originalBorder = node.style.border;
    try {
      node.style.borderRadius = "0px";
      node.style.border = "none";
      const htmlToImage = await import("html-to-image");
      const blob = await htmlToImage.toBlob(node, {
        pixelRatio: 3,
        style: {
          transform: "scale(1)",
          transformOrigin: "top left",
          width: node.offsetWidth + "px",
          height: node.offsetHeight + "px",
          borderRadius: "0px",
          border: "none",
          ...(!showBackground ? {
            background: "none",
            backgroundColor: "transparent",
            backgroundImage: "none",
            boxShadow: "none",
          } : {}),
        },
      });

      if (!blob) {
        throw new Error("Failed to generate image blob");
      }

      const filename = `tweet-ss-${Date.now()}.png`;
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = filename;
      link.href = blobUrl;
      link.target = "_blank";
      link.rel = "noopener";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();

      // Delay link removal and blob revocation so mobile browsers
      // have enough time to process the download on every tap
      setTimeout(() => {
        if (document.body.contains(link)) {
          document.body.removeChild(link);
        }
      }, 10000);

      setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
      }, 40000);

      setDownloadStatus("success");
      setTimeout(() => setDownloadStatus("idle"), 700);
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        console.log("Share cancelled by user");
        setDownloadStatus("idle");
        return;
      }
      console.error("Oops, PNG export failed!", err);
      setDownloadStatus("error");
      setTimeout(() => setDownloadStatus("idle"), 2000);
    } finally {
      node.style.borderRadius = originalBorderRadius;
      node.style.border = originalBorder;
    }
  };

  return (
    <div
      className="w-full h-full bg-[#FAFBFD] dark:bg-[#0F172A] border-r border-gray-100 dark:border-[#1E2D4A] shadow-sm shadow-slate-100/50 dark:shadow-[2px_0_8px_rgba(0,0,0,0.3)] p-4 flex flex-col gap-[12px] select-none transition-all duration-150 ease-in-out"
    >
      <nav className="flex flex-col gap-[14px]" aria-label="Controls Navigation">

        {/* 1. Profile Settings */}
        <SectionCard
          id="profile-settings-section"
          title="Profile"
          icon={<User className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] shrink-0" strokeWidth={2} />}
          description="Name, handle, avatar, and platform logo."
        >
          <div className="flex flex-col gap-[10px]">
            {/* Profile image picker */}
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
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
                      width={64}
                      height={64}
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
                    Upload photo
                  </span>
                  <span className="text-[10px] text-slate-400/80 font-normal">
                    PNG or JPG
                  </span>
                </div>
              </div>
            </div>

            {/* Display Name & Username Inputs */}
            <div className="grid grid-cols-2 gap-4">
              {/* Display Name Input */}
              <div className="flex flex-col">
                <label htmlFor="displayNameInput" className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Display Name
                </label>
                <div className="relative">
                  <Input
                    id="displayNameInput"
                    placeholder="Display Name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    onFocus={(e) => e.target.select()}
                    className="pr-9 bg-[#111827] border-[#1E2D4A] text-white focus:border-[#1D6FEB] focus:ring-0 text-sm h-10 transition-all duration-150 ease-in-out"
                  />
                  <Pencil className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>
              </div>

              {/* Username Input */}
              <div className="flex flex-col">
                <label htmlFor="usernameInput" className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
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
                    onFocus={(e) => e.target.select()}
                    className="pl-7 pr-9 bg-[#111827] border-[#1E2D4A] text-white focus:border-[#1D6FEB] focus:ring-0 text-sm h-10 transition-all duration-150 ease-in-out"
                  />
                  <Pencil className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Platform Logo Dropdown and Toggle */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="platformLogoSelect" className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Platform Logo
              </label>
              <div className="flex flex-row flex-wrap items-center gap-3 w-full">
                <select
                  id="platformLogoSelect"
                  value={selectedLogo}
                  onChange={(e) => setSelectedLogo(e.target.value as "x" | "twitter" | "grok")}
                  className="flex-1 min-w-[120px] h-10 px-3 rounded-md bg-[#111827] border border-[#1E2D4A] text-slate-300 text-sm focus:border-[#1D6FEB] focus:outline-none cursor-pointer transition-all duration-150 ease-in-out"
                >
                  <option value="x">X Logo</option>
                  <option value="twitter">Twitter Bird Logo</option>
                  <option value="grok">Grok Logo</option>
                </select>
                <button
                  type="button"
                  onClick={() => setShowLogo(!showLogo)}
                  className={`relative w-9 h-5 rounded-full transition-colors duration-300 ease-in-out cursor-pointer shrink-0 ${showLogo ? "bg-[#1D6FEB]" : "bg-slate-700 dark:bg-slate-500"
                    }`}
                  aria-label="Toggle platform logo visibility"
                >
                  <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out ${showLogo ? "translate-x-4" : "translate-x-0"
                    }`} />
                </button>
              </div>
            </div>
          </div>
        </SectionCard>
 
        {/* Organization Badge */}
        <SectionCard
          id="organization-badge-section"
          title="Organization Badge"
          icon={<Award className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] shrink-0" strokeWidth={2} />}
          description="Square logo shown next to the verified badge."
        >
          <div className="flex flex-col gap-[10px]">
            {/* Enable Organization Badge Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-300">
                Show Badge
              </span>
              <button
                type="button"
                onClick={() => setOrganizationBadgeEnabled(!organizationBadgeEnabled)}
                className={`relative w-9 h-5 rounded-full transition-colors duration-300 ease-in-out cursor-pointer ${
                  organizationBadgeEnabled ? "bg-[#1D6FEB]" : "bg-slate-700 dark:bg-slate-500"
                }`}
                aria-label="Toggle organization badge visibility"
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out ${
                    organizationBadgeEnabled ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
 
            {/* Logo Upload Placeholder/Active Card */}
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Upload Logo
              </span>
              <input
                type="file"
                ref={orgFileInputRef}
                onChange={handleOrgLogoChange}
                accept="image/png, image/jpeg, image/jpg, image/webp"
                className="hidden"
              />              {!organizationBadgeImage ? (
                <div
                  onClick={() => orgFileInputRef.current?.click()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      orgFileInputRef.current?.click();
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className="group relative flex items-center gap-4 p-4 rounded-xl border border-dashed border-[#1E2D4A] bg-[#111827] hover:bg-[#1E2D4A]/30 hover:border-[#1D6FEB] focus:outline-none focus:border-[#1D6FEB] focus:bg-[#1E2D4A]/20 transition-all duration-200 cursor-pointer select-none"
                >
                  {/* Visual Placeholder Icon */}
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-slate-800 border-2 border-[#1E2D4A] group-hover:border-[#1D6FEB] transition-colors shrink-0 flex items-center justify-center">
                    <span className="text-slate-500 font-bold text-lg">L</span>
                  </div>

                  {/* Info Text */}
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-[#1D6FEB] transition-colors">
                      Upload Organization Logo
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Square logo only (PNG, JPG, WebP)
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3 p-3 bg-[#111827] border border-[#1E2D4A] rounded-xl">
                  {/* Thumbnail preview */}
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-slate-800 border border-[#1E2D4A] shrink-0 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={organizationBadgeImage}
                      alt="Organization Logo preview"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-2 min-w-0 flex-1">
                    <button
                      type="button"
                      onClick={() => orgFileInputRef.current?.click()}
                      className="px-3 py-1.5 rounded-lg bg-gradient-to-b from-[#3b82f6] to-[#1D6FEB] hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/10 active:translate-y-0 dark:hover:brightness-110 text-[11px] font-bold text-white transition-all duration-200 cursor-pointer text-center w-full"
                    >
                      Replace Logo
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setOrganizationBadgeImage(null);
                        if (orgFileInputRef.current) orgFileInputRef.current.value = "";
                      }}
                      className="text-[10px] text-rose-400 hover:text-rose-300 hover:underline cursor-pointer transition-all duration-200 ease-in-out text-center"
                    >
                      Remove Logo
                    </button>
                  </div>
                </div>
              )}
            </div>
 
            {/* Helper Text */}
            <p className="text-[10px] text-slate-400/70 font-normal leading-normal italic">
              Verification badge appears next to display name, organization badge next to username.
            </p>
          </div>
        </SectionCard>

        {/* 2. Tweet Content */}
        <SectionCard
          id="tweet-content-section"
          title="Post"
          icon={<Pencil className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] shrink-0" strokeWidth={2} />}
          description="The tweet body text."
        >
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-2">
              <textarea
                id="tweetTextarea"
                placeholder="What is happening?!"
                value={tweetText}
                onChange={(e) => { if (e.target.value.length <= 280) setTweetText(e.target.value); }}
                onFocus={(e) => e.target.select()}
                maxLength={280}
                className="w-full min-h-[90px] p-3 rounded-md bg-[#111827] border border-[#1E2D4A] text-white text-sm focus:border-[#1D6FEB] focus:outline-none resize-none"
              />
              <div className="text-[11px] text-right font-semibold text-[#64748B]">
                <span className={characterCount >= 260 ? (characterCount >= 280 ? 'text-red-500' : 'text-amber-500') : ''}>{characterCount}</span> / 280
              </div>
            </div>
          </div>
        </SectionCard>

        {/* 3. Engagement Controls */}
        <SectionCard
          id="engagement-controls-section"
          title="Metrics"
          icon={<BarChart2 className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] shrink-0" strokeWidth={2} />}
          description="Replies, reposts, likes, views, and bookmarks."
          headerToggle={{ checked: showMetrics, onChange: toggleMetrics, ariaLabel: "Toggle metrics visibility" }}
        >
          <div className="flex flex-col gap-[10px]">

            {/* Metrics inputs with corresponding left-aligned icons */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label htmlFor="input-Comments" className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
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
                      const num = val === "" ? 0 : Math.min(parseInt(val, 10), 99000000);
                      setComments(num);
                    }}
                    className="pl-9 bg-[#111827] border-[#1E2D4A] text-white focus:border-[#1D6FEB] focus:ring-0 text-sm h-10 transition-all duration-150 ease-in-out"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="input-Retweets" className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Reposts
                </label>
                <div className="relative">
                  <Repeat2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    id="input-Retweets"
                    placeholder="0"
                    value={retweets === 0 ? "" : retweets.toString()}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      const num = val === "" ? 0 : Math.min(parseInt(val, 10), 99000000);
                      setRetweets(num);
                    }}
                    className="pl-9 bg-[#111827] border-[#1E2D4A] text-white focus:border-[#1D6FEB] focus:ring-0 text-sm h-10 transition-all duration-150 ease-in-out"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="input-Likes" className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
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
                      const num = val === "" ? 0 : Math.min(parseInt(val, 10), 99000000);
                      setLikes(num);
                    }}
                    className="pl-9 bg-[#111827] border-[#1E2D4A] text-white focus:border-[#1D6FEB] focus:ring-0 text-sm h-10 transition-all duration-150 ease-in-out"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="input-Views" className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
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
                      const num = val === "" ? 0 : Math.min(parseInt(val, 10), 99000000);
                      setViews(num);
                    }}
                    className="pl-9 bg-[#111827] border-[#1E2D4A] text-white focus:border-[#1D6FEB] focus:ring-0 text-sm h-10 transition-all duration-150 ease-in-out"
                  />
                </div>
              </div>

              {/* Bookmarks Control */}
              <div className="flex flex-col col-span-2">
                <label htmlFor="input-Bookmarks" className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
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
                      const num = val === "" ? 0 : Math.min(parseInt(val, 10), 99000000);
                      setBookmarks(num);
                    }}
                    className="pl-9 bg-[#111827] border-[#1E2D4A] text-white focus:border-[#1D6FEB] focus:ring-0 text-sm h-10 transition-all duration-150 ease-in-out"
                  />
                </div>
              </div>
            </div>

            {/* Generate Sample Metrics */}
            <div className="flex flex-col gap-3 pt-3 border-t border-[#1E2D4A]">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Quick Fill
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleGenerateRandomMetrics}
                  className="px-3 rounded-lg border border-[#1E2D4A] bg-[#111827] hover:bg-[#1E2D4A]/50 text-xs font-semibold text-slate-200 h-10 transition-all duration-150 ease-in-out cursor-pointer text-center flex items-center justify-center"
                >
                  Randomize
                </button>
                <button
                  type="button"
                  onClick={handleClearMetrics}
                  className="px-3 rounded-lg border border-rose-950 bg-rose-950/20 hover:bg-rose-950/50 text-xs font-semibold text-rose-300 h-10 transition-all duration-150 ease-in-out cursor-pointer text-center flex items-center justify-center"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* 4. Timestamp Controls */}
        <SectionCard
          id="timestamp-controls-section"
          title="Timestamp"
          icon={<Clock className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] shrink-0" strokeWidth={2} />}
          description="Date and time shown on the post."
          headerToggle={{ checked: showTimestamp, onChange: () => setShowTimestamp(!showTimestamp), ariaLabel: "Toggle timestamp visibility" }}
        >
          <div className="grid grid-cols-5 gap-2">
            {/* Show Date Toggle */}
            <div className="flex items-center justify-between border-b border-[#1E2D4A] pb-3 col-span-5">
              <span className="text-xs font-medium text-slate-300">
                Show Date
              </span>
              <button
                type="button"
                onClick={() => setShowDate(!showDate)}
                className={`relative w-9 h-5 rounded-full transition-colors duration-300 ease-in-out cursor-pointer ${showDate ? "bg-[#1D6FEB]" : "bg-slate-700 dark:bg-slate-500"
                  }`}
                aria-label="Toggle date visibility"
              >
                <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out ${showDate ? "translate-x-4" : "translate-x-0"
                  }`} />
              </button>
            </div>

            {/* Show Time Toggle */}
            <div className="flex items-center justify-between border-b border-[#1E2D4A] pb-3 col-span-5 mb-2">
              <span className="text-xs font-medium text-slate-300">
                Show Time
              </span>
              <button
                type="button"
                onClick={() => setShowTime(!showTime)}
                className={`relative w-9 h-5 rounded-full transition-colors duration-300 ease-in-out cursor-pointer ${showTime ? "bg-[#1D6FEB]" : "bg-slate-700 dark:bg-slate-500"
                  }`}
                aria-label="Toggle time visibility"
              >
                <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out ${showTime ? "translate-x-4" : "translate-x-0"
                  }`} />
              </button>
            </div>

            {/* Date field (with increased contrast calendar icon styling) */}
            <div className="col-span-2 flex flex-col">
              <label htmlFor="dateInput" className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">Date</label>
              <Input
                id="dateInput"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-[#111827] border-[#1E2D4A] text-slate-300 text-sm h-10 transition-all duration-150 ease-in-out dark:[&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-80 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              />
            </div>

            {/* Hour select */}
            <div className="flex flex-col">
              <label htmlFor="hourSelect" className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">Hour</label>
              <select
                id="hourSelect"
                value={hour}
                onChange={(e) => setHour(e.target.value)}
                className="h-10 px-2 rounded-md bg-[#111827] border border-[#1E2D4A] text-slate-300 text-sm focus:border-[#1D6FEB] focus:outline-none cursor-pointer transition-all duration-150 ease-in-out"
              >
                {Array.from({ length: 12 }, (_, i) => String(i + 1)).map((h) => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>
            </div>

            {/* Minute select */}
            <div className="flex flex-col">
              <label htmlFor="minSelect" className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">Min</label>
              <select
                id="minSelect"
                value={minute}
                onChange={(e) => setMinute(e.target.value)}
                className="h-10 px-2 rounded-md bg-[#111827] border border-[#1E2D4A] text-slate-300 text-sm focus:border-[#1D6FEB] focus:outline-none cursor-pointer transition-all duration-150 ease-in-out"
              >
                {Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0")).map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Meridiem select */}
            <div className="flex flex-col">
              <label htmlFor="meridiemSelect" className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">AM/PM</label>
              <select
                id="meridiemSelect"
                value={meridiem}
                onChange={(e) => setMeridiem(e.target.value as "AM" | "PM")}
                className="h-10 px-2 rounded-md bg-[#111827] border border-[#1E2D4A] text-slate-300 text-sm focus:border-[#1D6FEB] focus:outline-none cursor-pointer transition-all duration-150 ease-in-out"
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
          title="Appearance"
          icon={<Image className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] shrink-0" strokeWidth={2} />}
          description="Theme, backdrop color, and background image."
        >
          <div className="flex flex-col gap-3">

            {/* Card Theme (moved from Tweet Content & Theme) */}
            <div className="flex items-center justify-between pb-3 border-b border-[#1E2D4A]">
              <span className="text-xs font-medium text-slate-300">
                Card Theme
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { theme: "light", label: "Light" },
                  { theme: "dark", label: "Dark" },
                ].map(({ theme, label }) => (
                  <button
                    key={theme}
                    type="button"
                    onClick={() => setTweetTheme(theme as "light" | "dark")}
                    className={`py-1.5 px-4 rounded-lg border text-xs font-semibold transition-all duration-200 cursor-pointer ${tweetTheme === theme
                      ? "bg-gradient-to-b from-[#3b82f6] to-[#1D6FEB] border-[#1D6FEB] text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/10 active:translate-y-0 dark:hover:brightness-110"
                      : "bg-[#111827] border-[#1E2D4A] text-slate-700 dark:text-slate-300 hover:bg-[#1E2D4A]/40 hover:text-[#1D6FEB] hover:border-[#1D6FEB]/50"
                      }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tweet Card Background toggle */}
            <div className="flex items-center justify-between pb-3 border-b border-[#1E2D4A]">
              <span className="text-xs font-medium text-slate-300">
                Card Fill
              </span>
              <button
                type="button"
                onClick={() => setShowCardBackground(!showCardBackground)}
                className={`relative w-9 h-5 rounded-full transition-colors duration-300 ease-in-out cursor-pointer ${showCardBackground ? "bg-[#1D6FEB]" : "bg-slate-700 dark:bg-slate-500"
                  }`}
                aria-label="Toggle tweet card background visibility"
              >
                <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out ${showCardBackground ? "translate-x-4" : "translate-x-0"
                  }`} />
              </button>
            </div>

            {/* Tweet Background master toggle */}
            <div className="flex items-center justify-between pb-3 border-b border-[#1E2D4A]">
              <span className="text-xs font-medium text-slate-300">
                Backdrop
              </span>
              <button
                type="button"
                onClick={() => setShowBackground(!showBackground)}
                className={`relative w-9 h-5 rounded-full transition-colors duration-300 ease-in-out cursor-pointer ${showBackground ? "bg-[#1D6FEB]" : "bg-slate-700 dark:bg-slate-500"
                  }`}
                aria-label="Toggle background visibility"
              >
                <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out ${showBackground ? "translate-x-4" : "translate-x-0"
                  }`} />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-2 pb-1">
              {/* Presets */}
              {backdropPresets.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setBackgroundType("preset");
                    setBackgroundColor(preset.value);
                  }}
                  className={`w-8 h-8 rounded-lg cursor-pointer flex-shrink-0 border transition-all duration-150 ease-in-out hover:scale-105 ${backgroundType === "preset" && backgroundColor === preset.value
                    ? "border-2 border-[#1D6FEB] scale-105"
                    : "border-[#1E2D4A]"
                    }`}
                  style={{ background: preset.value }}
                  aria-label={`Select background color preset ${preset.name}`}
                />
              ))}
            </div>

            {/* Custom Image Upload */}
            <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-[#1E2D4A]">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">Custom Image Backdrop</label>
              <div className="flex flex-col gap-3">
                <input
                  type="file"
                  ref={bgFileInputRef}
                  onChange={handleBgImageChange}
                  accept="image/png, image/jpeg, image/webp"
                  className="hidden"
                />
                {!backgroundImage ? (
                  <button
                    type="button"
                    onClick={() => bgFileInputRef.current?.click()}
                    className="w-full px-3 rounded-lg border border-dashed border-[#1E2D4A] bg-[#111827] hover:bg-[#1E2D4A]/30 hover:border-[#1D6FEB] text-xs font-medium text-slate-300 h-12 transition-all duration-150 ease-in-out cursor-pointer flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-slate-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 9 9M12 3v13.5" />
                    </svg>
                    Upload Background Image
                  </button>
                ) : (
                  <div className="flex items-center gap-3 p-2 bg-[#111827] border border-[#1E2D4A] rounded-xl">
                    {/* Thumbnail preview */}
                    <div className="relative w-16 h-10 rounded-lg overflow-hidden bg-slate-800 border border-[#1E2D4A] shrink-0 flex items-center justify-center">
                      <img
                        src={backgroundImage}
                        alt="Background thumbnail"
                        width={64}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col gap-1 min-w-0 flex-1">
                      <button
                        type="button"
                        onClick={() => {
                          setRawBgImageForCrop(originalBackgroundImage);
                          setIsBgCropModalOpen(true);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-gradient-to-b from-[#3b82f6] to-[#1D6FEB] hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/10 active:translate-y-0 dark:hover:brightness-110 text-[11px] font-bold text-white transition-all duration-200 cursor-pointer text-center w-full"
                      >
                        Edit Background
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setBackgroundImage(null);
                          setOriginalBackgroundImage(null);
                          setBackgroundType("preset");
                          setBackgroundColor("#FFFFFF"); // Reset to default White
                        }}
                        className="text-[10px] text-rose-400 hover:text-rose-300 hover:underline cursor-pointer transition-all duration-200 ease-in-out text-center"
                      >
                        Clear Image
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </SectionCard>

        {/* 6. Tweet Card Border */}
        <SectionCard
          id="tweet-card-border-section"
          title="Border"
          icon={<Square className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] shrink-0" strokeWidth={2} />}
          description="Color accent around the tweet card."
          headerToggle={{ checked: showBorder, onChange: () => setShowBorder(!showBorder), ariaLabel: "Toggle card border wrapper" }}
        >
          <div className="flex flex-col gap-[10px]">

            {/* Border Colors (Presets & Custom) */}
            {showBorder && (
              <div className="flex flex-col gap-3 pt-3 border-t border-[#1E2D4A]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Color
                </span>
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {[
                    { color: "#38BDF8", label: "Blue" },
                    { color: "#8B5CF6", label: "Purple" },
                    { color: "#06B6D4", label: "Cyan" },
                    { color: "#F97316", label: "Orange" },
                  ].map(({ color, label }) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setBorderColor(color)}
                      className={`w-8 h-8 rounded-full cursor-pointer flex-shrink-0 border transition-all hover:scale-110 ${borderColor.toLowerCase() === color.toLowerCase()
                        ? "border-white scale-105"
                        : "border-[#1E2D4A]"
                        }`}
                      style={{ backgroundColor: color }}
                      aria-label={`Select border color ${label}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Border Size Slider */}
            <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-[#1E2D4A]">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Thickness
                </span>
                <span className="text-[11px] font-medium text-slate-300">
                  {borderSize}px
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                step="1"
                value={borderSize}
                disabled={!showBorder}
                onChange={(e) => setBorderSize(parseInt(e.target.value, 10))}
                className={`w-full h-1 rounded-lg appearance-none cursor-pointer accent-[#1D6FEB] ${showBorder ? "opacity-100" : "opacity-40 cursor-not-allowed"
                  }`}
                style={{
                  background: showBorder ? "linear-gradient(to right, #1D6FEB 0%, #1D6FEB 100%)" : "#1E2D4A",
                }}
              />
            </div>

            {/* Custom Color Input */}
            {showBorder && (
              <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-[#1E2D4A]">
                <label htmlFor="customBorderColorInput" className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Custom Border Color
                </label>
                <div className="flex items-center gap-3">
                  <input
                    id="customBorderColorInput"
                    type="color"
                    value={borderColor}
                    onChange={(e) => setBorderColor(e.target.value)}
                    className="w-10 h-10 rounded-md bg-[#111827] border border-[#1E2D4A] cursor-pointer transition-all duration-150 ease-in-out"
                  />
                  <span className="text-xs font-mono text-slate-300">
                    {borderColor.toUpperCase()}
                  </span>
                </div>
              </div>
            )}
          </div>
        </SectionCard>

        {/* 7. Export Format */}
        <SectionCard
          key={`export-format-${isDesktop}`}
          id="export-format-section"
          title="Format"
          icon={<Maximize2 className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] shrink-0" strokeWidth={2} />}
          description="Aspect ratio for the exported image."
          defaultCollapsed={!isDesktop}
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
                className={`py-2 rounded-lg border text-xs font-semibold transition-all duration-200 ease-in-out cursor-pointer ${exportFormat === format
                  ? "bg-gradient-to-b from-[#3b82f6] to-[#1D6FEB] border-[#1D6FEB] text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/10 active:translate-y-0 dark:border-[#1D6FEB] dark:hover:brightness-110"
                  : "bg-[#111827] border-[#1E2D4A] text-slate-700 dark:text-slate-300 hover:bg-[#1E2D4A]/40 hover:text-[#1D6FEB] hover:border-[#1D6FEB]/50"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </SectionCard>

        {/* 7. Download & Copy Buttons */}
        <div className="pt-2 border-t border-[#1E2D4A] flex flex-row gap-3">
          <TiltWrapper>
            <button
              type="button"
              onClick={handleCopyImage}
              disabled={copyStatus === "loading"}
              className={`w-full h-12 rounded-xl text-white text-center text-sm font-bold transition-all duration-200 ease-in-out shadow-md flex items-center justify-center ${copyStatus === "loading"
                ? "bg-gradient-to-b from-[#3b82f6] to-[#1D6FEB] opacity-70 cursor-not-allowed"
                : copyStatus === "success"
                  ? "bg-[#22C55E] cursor-pointer"
                  : copyStatus === "error"
                    ? "bg-[#EF4444] cursor-pointer"
                    : "bg-gradient-to-b from-[#3b82f6] to-[#1D6FEB] hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/10 active:translate-y-0 hover:brightness-110 cursor-pointer"
                }`}
            >
              {copyStatus === "loading" ? (
                <>
                  <Loader2 className="w-[18px] h-[18px] mr-2 shrink-0 animate-spin" strokeWidth={2} />
                  <span>Copying...</span>
                </>
              ) : copyStatus === "success" ? (
                <>
                  <Check className="w-[18px] h-[18px] mr-2 shrink-0" strokeWidth={2.5} />
                  <span>Copied!</span>
                </>
              ) : copyStatus === "error" ? (
                <span>Failed. Try again.</span>
              ) : (
                <>
                  <Copy className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mr-3 shrink-0" strokeWidth={2} />
                  <span>Copy Image</span>
                </>
              )}
            </button>
          </TiltWrapper>
          <TiltWrapper>
            <button
              type="button"
              onClick={handleDownload}
              disabled={downloadStatus === "loading"}
              className={`w-full h-12 rounded-xl text-white text-center text-sm font-bold transition-all duration-200 ease-in-out shadow-md flex items-center justify-center ${downloadStatus === "loading"
                ? "bg-gradient-to-b from-[#3b82f6] to-[#1D6FEB] opacity-70 cursor-not-allowed"
                : downloadStatus === "success"
                  ? "bg-[#22C55E] cursor-pointer"
                  : downloadStatus === "error"
                    ? "bg-[#EF4444] cursor-pointer"
                    : "bg-gradient-to-b from-[#3b82f6] to-[#1D6FEB] hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/10 active:translate-y-0 hover:brightness-110 cursor-pointer"
                }`}
            >
              {downloadStatus === "loading" ? (
                <>
                  <Loader2 className="w-[18px] h-[18px] mr-2 shrink-0 animate-spin" strokeWidth={2} />
                  <span>Generating...</span>
                </>
              ) : downloadStatus === "success" ? (
                <>
                  <Check className="w-[18px] h-[18px] mr-2 shrink-0" strokeWidth={2.5} />
                  <span>Downloaded!</span>
                </>
              ) : downloadStatus === "error" ? (
                <span>Failed. Try again.</span>
              ) : (
                <>
                  <Download className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mr-3 shrink-0" strokeWidth={2} />
                  <span>Download Image</span>
                </>
              )}
            </button>
          </TiltWrapper>
        </div>

      </nav>

      {/* Crop Modal */}
      {isCropModalOpen && rawImageForCrop && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0B0F19] border border-[#1E2D4A] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="px-6 py-4 border-b border-[#1E2D4A] flex justify-between items-center">
              <h3 className="text-sm font-bold text-slate-200">
                {cropType === "profile" ? "Crop profile photo" : "Crop organization logo"}
              </h3>
              <button
                type="button"
                onClick={() => {
                  setIsCropModalOpen(false);
                  setRawImageForCrop(null);
                  setCropType(null);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                  if (orgFileInputRef.current) orgFileInputRef.current.value = "";
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
                  circularCrop={cropType === "profile"}
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
                <div className={`relative w-16 h-16 overflow-hidden bg-slate-800 border-2 border-[#1E2D4A] shrink-0 flex items-center justify-center ${cropType === "profile" ? "rounded-full" : "rounded-lg"}`}>
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
                    <span className="text-slate-500 font-bold text-lg">{cropType === "profile" ? "U" : "L"}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-xs font-semibold text-slate-200">
                    Preview
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {cropType === "profile" 
                      ? "Drag to position your avatar."
                      : "Drag to position your logo."}
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
                  setCropType(null);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                  if (orgFileInputRef.current) orgFileInputRef.current.value = "";
                }}
                className="px-4 py-2 rounded-lg border border-[#1E2D4A] hover:bg-white/[0.06] hover:text-white hover:border-[#1D6FEB]/50 text-xs font-semibold text-slate-300 transition-all duration-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveCrop}
                className="px-4 py-2 rounded-lg bg-gradient-to-b from-[#3b82f6] to-[#1D6FEB] hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/10 active:translate-y-0 dark:hover:brightness-110 text-xs font-semibold text-white transition-all duration-200 cursor-pointer"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Background Modal */}
      {isBgEditModalOpen && backgroundImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0B0F19] border border-[#1E2D4A] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="px-6 py-4 border-b border-[#1E2D4A] flex justify-between items-center">
              <h3 className="text-sm font-bold text-slate-200">Reposition background</h3>
              <button
                type="button"
                onClick={handleCancelBgEdit}
                className="text-slate-400 hover:text-slate-200 text-lg font-bold cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col gap-6 overflow-y-auto">
              {/* Editor Visual Area */}
              <div
                ref={modalPreviewRef}
                className="relative border border-[#1E2D4A] bg-[#090D16] rounded-xl overflow-hidden cursor-move select-none flex items-center justify-center mx-auto"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  aspectRatio: exportFormat === "square" ? "1/1" : exportFormat === "story" ? "9/16" : "16/9",
                  maxHeight: "320px",
                }}
                onMouseDown={(e) => handleDragStart(e.clientX, e.clientY)}
                onMouseMove={(e) => handleDragMove(e.clientX, e.clientY)}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
              >
                {/* Scaled canvas representation */}
                <div
                  style={{
                    position: "absolute",
                    width: canvasNaturalWidth,
                    height: canvasNaturalHeight,
                    transform: `scale(${modalDimensions.w / canvasNaturalWidth || 0.4})`,
                    transformOrigin: "center center",
                    pointerEvents: "none",
                  }}
                >
                  <div
                    className="w-full h-full rounded-[32px] overflow-hidden shadow-2xl relative border-2 border-[#1D6FEB]"
                    style={{
                      backgroundColor: "#080F1E",
                      backgroundImage: `url(${backgroundImage})`,
                      backgroundSize: `${tempScale}%`,
                      backgroundPosition: `calc(50% + ${tempPositionX}px) calc(50% + ${tempPositionY}px)`,
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
              </div>

              {/* Instructions and preview values */}
              <div className="flex flex-col gap-2 p-4 bg-[#111827]/50 border border-[#1E2D4A] rounded-xl">
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-xs font-semibold text-slate-200">Background editor</span>
                  <p className="text-[10px] text-slate-400 leading-normal">
                    Drag to reposition background. Scroll to zoom.
                  </p>
                  <div className="flex gap-4 mt-2 text-[10px] font-mono text-slate-400">
                    <span>Zoom: {Math.round(tempScale)}%</span>
                    <span>X: {Math.round(tempPositionX)}px</span>
                    <span>Y: {Math.round(tempPositionY)}px</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-[#1E2D4A] bg-[#090D16] flex justify-end gap-3">
              <button
                type="button"
                onClick={handleCancelBgEdit}
                className="px-4 py-2 rounded-lg border border-[#1E2D4A] hover:bg-white/[0.06] hover:text-white hover:border-[#1D6FEB]/50 text-xs font-semibold text-slate-300 transition-all duration-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveBgEdit}
                className="px-4 py-2 rounded-lg bg-gradient-to-b from-[#3b82f6] to-[#1D6FEB] hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/10 active:translate-y-0 dark:hover:brightness-110 text-xs font-semibold text-white transition-all duration-200 cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Background Crop Modal */}
      {isBgCropModalOpen && rawBgImageForCrop && (
        <BackgroundCropperModal
          rawImage={rawBgImageForCrop}
          onConfirm={handleBgCropConfirm}
          onCancel={handleBgCropCancel}
        />
      )}
    </div>
  );
}
