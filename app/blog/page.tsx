import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import { ARTICLES } from "@/lib/blog";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Premium Tweet Screenshot Guides & Resources",
  description: "Learn how to create high-converting Twitter screenshots, social media mockups, and viral post graphics.",
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12">
        {/* Blog Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Guides & <span className="text-[#1D6FEB]">Resources</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Master the art of creating viral tweet screenshots, optimizing image scales, and designing beautiful mockups that capture visual attention.
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="bg-panel-bg border border-[#1E2D4A] rounded-xl p-6 transition-all duration-300 hover:border-[#1D6FEB]/50 hover:shadow-lg hover:shadow-[#1D6FEB]/5 flex flex-col h-full justify-between"
            >
              <div>
                {/* Date & Read Time */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 font-semibold">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#1E2D4A]" />
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-foreground mb-3 hover:text-[#1D6FEB] transition-colors line-clamp-2">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Read More Link */}
              <div>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D6FEB] hover:text-[#1D6FEB]/80 transition-colors group"
                >
                  Read More
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
