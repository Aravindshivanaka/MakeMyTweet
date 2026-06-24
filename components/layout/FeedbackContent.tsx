"use client";

import React, { useState } from "react";

export default function FeedbackContent() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    // Static page, no backend submit logic needed
    setSubmitted(true);
    setFeedback("");
  };

  return (
    <main className="flex-1 max-w-lg w-full mx-auto px-6 py-16 flex flex-col justify-center">
      <div className="bg-panel-bg border border-[#1E2D4A] rounded-2xl p-6 md:p-8 shadow-xl">
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#1D6FEB]/10 text-[#1D6FEB] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3">Thank You!</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Your feedback has been received. We appreciate you taking the time to help us improve Tweet SS Generator!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 bg-input-bg border border-[#1E2D4A] hover:bg-[#1E2D4A]/40 hover:text-[#1D6FEB] hover:border-[#1D6FEB]/50 text-foreground font-semibold rounded-xl text-sm transition-all duration-200"
            >
              Send Another Response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground mb-3">
                Share Your <span className="text-[#1D6FEB]">Feedback</span>
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We are constantly striving to make Tweet SS Generator better. Let us know what features you'd like to see next!
              </p>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label
                htmlFor="feedback-text"
                className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                Your Comments
              </label>
              <textarea
                id="feedback-text"
                rows={5}
                required
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="What can we improve? What feature suggestions do you have?"
                className="w-full bg-input-bg border border-[#1E2D4A] rounded-xl p-4 text-foreground text-sm focus:outline-none focus:border-[#1D6FEB] transition-colors resize-none placeholder:text-muted-foreground/50"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#1D6FEB] hover:brightness-110 hover:shadow-[0_0_12px_rgba(29,111,235,0.4)] text-white rounded-xl font-bold text-sm transition-all duration-200 shadow-lg"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
