import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import FAQContent from "@/components/layout/FAQContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Make My Tweet",
  description: "Find answers to common questions about features, formats, and customization options on Make My Tweet.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions - Make My Tweet",
    description: "Find answers to common questions about features, formats, and customization options on Make My Tweet.",
    url: "/faq",
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
      {/* Header */}
      <Header />

      {/* Main FAQ Accordion Component */}
      <FAQContent />
    </div>
  );
}
