import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import FeedbackContent from "@/components/layout/FeedbackContent";

export const metadata: Metadata = {
  title: "Feedback - Tweet SS Generator",
  description: "Share your feedback or suggest features to help improve Tweet SS Generator.",
};

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
      {/* Header */}
      <Header />

      {/* Main Form Content */}
      <FeedbackContent />
    </div>
  );
}
