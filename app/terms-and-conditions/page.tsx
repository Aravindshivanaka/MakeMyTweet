import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions - Tweet SS Generator",
  description: "Read the Terms & Conditions for using the Tweet SS Generator mockup tool.",
};

interface TermsSection {
  title: string;
  paragraphs: string[];
}

const TERMS_SECTIONS: TermsSection[] = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing or using Tweet SS Generator, you agree to be bound by these Terms & Conditions and all applicable laws and regulations.",
      "If you do not agree with any of these terms, you are prohibited from using or accessing this site."
    ]
  },
  {
    title: "2. Description of Service",
    paragraphs: [
      "Tweet SS Generator is a free utility tool that allows users to create high-resolution mockups of Twitter/X posts with custom gradient backgrounds and borders.",
      "The tool operates entirely client-side. We do not provide hosting services for your output images; all files must be exported and saved to your own device."
    ]
  },
  {
    title: "3. Acceptable Use",
    paragraphs: [
      "You agree to use this generator responsibly and solely for lawful purposes. You must not use the tool to create deceptive, misleading, defamatory, or hateful content.",
      "Generating mockups that impersonate entities or spread disinformation is strictly prohibited under these Terms."
    ]
  },
  {
    title: "4. Intellectual Property",
    paragraphs: [
      "The layout formatting of tweet cards represents standard platform patterns. Users retain the rights to their custom text input and uploaded custom background visual configurations.",
      "The design code, brand, and layout logic of Tweet SS Generator are protected under copyright and intellectual property standards."
    ]
  },
  {
    title: "5. Disclaimer of Warranties",
    paragraphs: [
      "The service is provided on an 'as is' and 'as available' basis. We make no warranties, expressed or implied, regarding the reliability, completeness, or availability of the image exporter tool."
    ]
  }
];

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="border-b border-[#1E2D4A] pb-8 mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Terms & <span className="text-[#1D6FEB]">Conditions</span>
          </h1>
          <p className="text-muted-foreground text-sm font-medium">
            Last updated: June 24, 2026
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="flex flex-col gap-8">
          {TERMS_SECTIONS.map((section, idx) => (
            <section
              key={idx}
              className="bg-panel-bg border border-[#1E2D4A] rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-[#1D6FEB]/20"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                {section.title}
              </h2>
              <div className="flex flex-col gap-4">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
