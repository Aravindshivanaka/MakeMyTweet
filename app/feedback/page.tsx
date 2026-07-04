import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import FeedbackContent from "@/components/layout/FeedbackContent";

export const metadata: Metadata = {
  title: "Feedback - Make My Tweet",
  description: "Share your feedback or suggest features to help improve Make My Tweet.",
  alternates: {
    canonical: "/feedback",
  },
  openGraph: {
    title: "Feedback - Make My Tweet",
    description: "Share your feedback or suggest features to help improve Make My Tweet.",
    url: "/feedback",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feedback - Make My Tweet",
    description: "Share your feedback or suggest features to help improve Make My Tweet.",
    images: ["/og-image.png"],
  },
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
