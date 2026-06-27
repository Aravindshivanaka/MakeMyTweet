"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Is Tweet SS Generator free?",
    answer: "Yes, Tweet SS Generator is 100% free to use. You can customize and generate unlimited high-quality tweet screenshots without any fees."
  },
  {
    question: "Can I download images?",
    answer: "Absolutely! You can download your customized tweet screenshots as high-resolution PNG images directly to your device."
  },
  {
    question: "Can I copy images?",
    answer: "Yes, you can copy the generated mockup image straight to your clipboard for instant sharing into apps like Slack, Notion, or email."
  },
  {
    question: "Can I use custom backgrounds?",
    answer: "Yes. You can choose from solid colors, preset gradients, or upload your own custom image as a backdrop."
  },
  {
    question: "Can I use Grok branding?",
    answer: "Yes, you can toggle brand badges, layout accents, and customize the overall look to match modern X/Grok interfaces."
  },
  {
    question: "Can I export Story format?",
    answer: "Yes. The generator supports Landscape (16:9), Square (1:1), and Story (9:16) export formats."
  },
  {
    question: "Is there a watermark?",
    answer: "No. All exported mockups are clean and free of watermarks, ready for any professional use."
  }
];

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-12">
      {/* FAQ Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
          Frequently Asked <span className="text-[#1D6FEB]">Questions</span>
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Got questions? We've got answers. Explore our detailed FAQ to learn more about the mockup generator features.
        </p>
      </div>

      {/* FAQ Accordion Items */}
      <div className="flex flex-col gap-4">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-panel-bg border border-[#1E2D4A] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#1D6FEB]/50 hover:shadow-lg dark:hover:shadow-[#1D6FEB]/10"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-foreground hover:text-[#1D6FEB] transition-colors focus:outline-none"
              >
                <span className="text-base md:text-lg">{item.question}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`w-5 h-5 text-[#1D6FEB] transform transition-transform ease-out ${
                    isOpen ? "rotate-180 chevron-expanded" : "chevron-collapsed"
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div
                className={`accordion-content-spring border-[#1E2D4A]/50 overflow-hidden ${
                  isOpen ? "border-t accordion-expanded" : "accordion-collapsed"
                }`}
                style={{
                  maxHeight: isOpen ? "200px" : "0px",
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateY(0px)" : "translateY(-4px)",
                }}
              >
                <div className="p-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
