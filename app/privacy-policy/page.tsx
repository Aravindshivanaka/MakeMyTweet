import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Make My Tweet",
  description: "Read our privacy policy to understand how Make My Tweet protects your data using client-side image creation.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy - Make My Tweet",
    description: "Read our privacy policy to understand how Make My Tweet protects your data using client-side image creation.",
    url: "/privacy-policy",
  },
};

interface PolicySection {
  title: string;
  paragraphs: string[];
}

const POLICY_SECTIONS: PolicySection[] = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "Make My Tweet is built as a client-side utility tool. We do not collect, store, or monitor any personal data or tweet content you enter into the generator application.",
      "Any texts, usernames, profile avatars, or custom background images you upload are loaded and processed locally within your browser sandbox."
    ]
  },
  {
    title: "2. Local Processing & Security",
    paragraphs: [
      "Image canvas generation and high-resolution exports (PNG files) are executed entirely in your local system memory using modern canvas rendering features.",
      "Since no content is sent to backend servers, your data is completely secure, private, and inaccessible to any external parties."
    ]
  },
  {
    title: "3. Third-Party Integrations",
    paragraphs: [
      "The application links to standard community portals such as GitHub repositories and LinkedIn profiles.",
      "These third-party destinations maintain their own independent tracking and privacy guidelines. We encourage you to review their policies when visiting them."
    ]
  },
  {
    title: "4. Policy Updates",
    paragraphs: [
      "We reserve the right to modify this statement at any time to align with future feature additions.",
      "Any updates will be posted directly to this page with an updated modification timestamp."
    ]
  },
  {
    title: "5. Contact & Support",
    paragraphs: [
      "If you have any questions or security concerns regarding these client-side privacy parameters, feel free to contact us through our email channel: support@tweetss.com."
    ]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="border-b border-[#1E2D4A] pb-8 mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Privacy <span className="text-[#1D6FEB]">Policy</span>
          </h1>
          <p className="text-muted-foreground text-sm font-medium">
            Last updated: June 24, 2026
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="flex flex-col gap-8">
          {POLICY_SECTIONS.map((section, idx) => (
            <section
              key={idx}
              className="bg-panel-bg border border-[#1E2D4A] rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-[#1D6FEB]/40 hover:shadow-lg dark:hover:shadow-[#1D6FEB]/10"
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
