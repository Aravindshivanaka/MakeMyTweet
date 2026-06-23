import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import FAQContent from "@/components/layout/FAQContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Tweet SS Generator",
  description: "Find answers to common questions about features, formats, and customization options on Tweet SS Generator.",
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
