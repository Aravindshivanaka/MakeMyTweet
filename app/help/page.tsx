import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "User Guide & Help Center - Tweet SS Generator",
  description: "Learn how to use Tweet SS Generator, upload profile photos, edit background images, copy to clipboard, and choose export aspect formats.",
};

interface HelpSection {
  id: string;
  title: string;
  description: string;
  steps: string[];
}

const HELP_SECTIONS: HelpSection[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Welcome to Tweet SS Generator! The tool is designed to help you create beautiful, high-resolution screenshots of Twitter/X posts with custom backdrops. Here is how to begin:",
    steps: [
      "Select a preset background style (solid color, preset gradient, or custom background image) from the controls sidebar.",
      "Modify the tweet text, username, handle, verification status, and timestamp directly in the editor controls.",
      "Adjust layout details like showing/hiding likes, replies, retweets, and bookmark counters."
    ]
  },
  {
    id: "upload-profile-photo",
    title: "Upload Profile Photo",
    description: "Personalize the tweet card with a custom profile image to represent any Twitter/X user account:",
    steps: [
      "Find the Avatar section in the generator controls sidebar.",
      "Click the Upload Avatar button, or drag-and-drop your image directly.",
      "We support PNG, JPG, JPEG, and WEBP file types. Images are automatically cropped into circular profiles."
    ]
  },
  {
    id: "add-background",
    title: "Add Background",
    description: "Choose and apply an elegant backdrop to make the tweet card pop in social feeds:",
    steps: [
      "Navigate to the Background settings tab.",
      "Select Solid for a flat single color backdrop, or choose Preset Gradient for a curated list of rich visual colors.",
      "Select Custom Image to upload your own branding background files."
    ]
  },
  {
    id: "edit-background",
    title: "Edit Background",
    description: "Reposition and scale your backdrop image for the perfect crop alignment:",
    steps: [
      "Once a custom background image is uploaded, click the Edit / Position Background button.",
      "Drag the image in the workspace preview window to adjust X/Y offset values.",
      "Use the scale slider or your mouse scroll wheel to zoom in or out, then click Save to apply."
    ]
  },
  {
    id: "export-png",
    title: "Export PNG",
    description: "Download your completed social media card mockups in high-quality PNG format:",
    steps: [
      "After finalizing your design configurations, click the Download Image button in the bottom workspace.",
      "The export engine generates the image at 2x retina density to guarantee crisp, clean typography.",
      "The file is automatically saved directly to your local downloads folder."
    ]
  },
  {
    id: "copy-image",
    title: "Copy Image",
    description: "Copy screenshots directly to your device clipboard for quick pasting into workflow documents:",
    steps: [
      "Click the Copy Image button in the actions workspace bar.",
      "Wait a brief second for the render confirmation notification.",
      "Paste the clipboard contents directly into Slack, Notion, Discord, email, or other social platforms (Ctrl+V or Cmd+V)."
    ]
  },
  {
    id: "story-format",
    title: "Story Format",
    description: "Optimize your graphics for vertical view modes like Instagram Stories, YouTube Shorts, or TikTok posts:",
    steps: [
      "Under the Canvas Format options, choose Story (9:16 layout ratio).",
      "The background expands vertically, centering the tweet card with generous top and bottom margins.",
      "Perfect for mobile-first scrolling audiences."
    ]
  },
  {
    id: "square-format",
    title: "Square Format",
    description: "Prepare mockups in square format ideal for Instagram feeds, LinkedIn posts, or grid layouts:",
    steps: [
      "Select Square (1:1 layout ratio) in the Format dropdown panel.",
      "The card adjusts to equal width and height dimensions, maintaining responsive typography size.",
      "Ideal for creating balanced feeds and presentation slides."
    ]
  },
  {
    id: "landscape-format",
    title: "Landscape Format",
    description: "Generate horizontal format mockups suitable for website header banners, blog illustrations, and presentations:",
    steps: [
      "Choose Landscape (16:9 layout ratio), which is the default format preset.",
      "The layout provides a spacious widescreen look, centering the card with optimized horizontal space."
    ]
  }
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
      {/* Header */}
      <Header />

      {/* Main Guide Content */}
      <div className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        {/* Left column: Sticky Table of Contents Navigation */}
        <aside className="lg:w-64 shrink-0 lg:sticky lg:top-24 h-fit max-lg:mb-8">
          <div className="bg-panel-bg border border-[#1E2D4A] rounded-xl p-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
              Help Center Sections
            </h2>
            <nav className="flex flex-col gap-2">
              {HELP_SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm font-semibold text-muted-foreground hover:text-[#1D6FEB] transition-colors leading-normal"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Right column: Detailed Help Guides */}
        <main className="flex-1 flex flex-col gap-10">
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              User Guide & <span className="text-[#1D6FEB]">Documentation</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-2xl">
              Learn how to customize, crop, adjust, and export high-fidelity Twitter screenshot cards using Tweet SS Generator.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {HELP_SECTIONS.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 bg-panel-bg border border-[#1E2D4A] rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-[#1D6FEB]/20"
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                  {section.description}
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground leading-relaxed text-base">
                  {section.steps.map((step, idx) => (
                    <li key={idx} className="marker:text-[#1D6FEB] marker:font-bold">
                      {step}
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
