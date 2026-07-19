"use client";

import React from "react";

export default function FeedbackContent() {
  return (
    <main className="flex-1 max-w-lg w-full mx-auto px-6 py-16 flex flex-col justify-center">
      {/* Premium Trustpilot Review Card */}
      <div className="bg-panel-bg border border-[#1E2D4A] rounded-2xl p-8 md:p-10 shadow-xl flex flex-col gap-6">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground mb-4">
            Share Your Experience
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            If Make My Tweet helped you create realistic Twitter (X) screenshots, we'd love to hear about your experience.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Your review helps other creators discover Make My Tweet and helps us continue improving the product.
          </p>
        </div>

        <div className="border-t border-[#1E2D4A] pt-6 flex flex-col gap-5">
          <div className="flex items-center justify-center gap-2 text-xl font-bold text-foreground">
            <span>⭐</span>
            <span>Trustpilot</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed text-center">
            Leave a public review on Trustpilot and share your experience with other creators.
          </p>
          <a
            href="https://www.trustpilot.com/evaluate/makemytweet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3.5 bg-[#1D6FEB] hover:brightness-110 hover:shadow-[0_0_12px_rgba(29,111,235,0.4)] text-white rounded-xl font-bold text-sm transition-all duration-200 shadow-lg block"
          >
            ⭐ Leave a Review on Trustpilot
          </a>
        </div>
      </div>
    </main>
  );
}
