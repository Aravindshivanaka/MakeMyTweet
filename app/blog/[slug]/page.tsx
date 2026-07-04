import React from "react";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import { ARTICLES } from "@/lib/blog";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | Make My Tweet Blog`,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: `${article.title} | Make My Tweet Blog`,
      description: article.excerpt,
      url: `/blog/${params.slug}`,
      images: ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Make My Tweet Blog`,
      description: article.excerpt,
      images: ["/og-image.png"],
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
      {/* Header */}
      <Header />

      {/* Main content container */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-12">
        {/* Navigation Breadcrumb / Go Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D6FEB] hover:text-[#1D6FEB]/80 transition-colors group"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
            >
              <path d="M19 12H5m7 7l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10 border-b border-[#1E2D4A] pb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
            <span>{article.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E2D4A]" />
            <span>{article.readTime}</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {article.content.map((section, index) => {
            switch (section.type) {
              case "heading":
                return (
                  <h2
                    key={index}
                    className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-4 tracking-tight"
                  >
                    {section.text as string}
                  </h2>
                );
              case "list":
                return (
                  <ul
                    key={index}
                    className="list-disc pl-6 space-y-3 my-6 text-muted-foreground leading-relaxed text-base"
                  >
                    {(section.text as string[]).map((item, idx) => (
                      <li key={idx} className="marker:text-[#1D6FEB]">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              case "paragraph":
              default:
                return (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed text-base mb-6"
                  >
                    {section.text as string}
                  </p>
                );
            }
          })}
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-[#1E2D4A]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D6FEB] hover:text-[#1D6FEB]/80 transition-colors group"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
            >
              <path d="M19 12H5m7 7l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </main>
    </div>
  );
}
