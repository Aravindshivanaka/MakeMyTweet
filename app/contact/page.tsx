import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Contact Us - Make My Tweet",
  description: "Get in touch with Make My Tweet support or follow our development updates on GitHub and LinkedIn.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us - Make My Tweet",
    description: "Get in touch with Make My Tweet support or follow our development updates on GitHub and LinkedIn.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
      {/* Header */}
      <Header />

      {/* Main Container */}
      <main className="flex-1 max-w-xl w-full mx-auto px-6 py-16 flex flex-col items-center justify-center">
        {/* Contact Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Get in <span className="text-[#1D6FEB]">Touch</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-sm mx-auto leading-relaxed">
            Have a question, feature request, or just want to say hello? Contact us directly via email or check out our developer profiles.
          </p>
        </div>

        {/* Email Placement Card */}
        <div className="bg-panel-bg border border-[#1E2D4A] rounded-xl p-6 w-full text-center shadow-lg hover:border-[#1D6FEB]/30 transition-all duration-300 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
            Send an Email
          </span>
          <a
            href="mailto:support@tweetss.com"
            className="text-lg md:text-xl font-bold text-[#1D6FEB] hover:text-[#3B82F6] hover:underline transition-colors duration-200"
          >
            support@tweetss.com
          </a>
        </div>

        {/* Connect Section */}
        <div className="w-full">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block text-center mb-4">
            Connect With Us
          </span>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            {/* LinkedIn Button */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#0A66C2] hover:brightness-110 hover:shadow-[0_0_12px_rgba(10,102,194,0.4)] text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-md shadow-[#0A66C2]/10"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn Profile
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-input-bg border border-[#1E2D4A] hover:bg-[#1E2D4A]/40 hover:text-[#1D6FEB] hover:border-[#1D6FEB]/50 text-foreground rounded-xl font-semibold text-sm transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub Project
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
