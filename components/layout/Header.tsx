"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname() || "";
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Check initial theme from localStorage or default to dark
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="relative w-full h-16 bg-white dark:bg-[#0B1220] border-b border-gray-100 dark:border-[rgba(255,255,255,0.06)] px-6 flex items-center justify-between shrink-0 select-none shadow-sm shadow-slate-100/50 dark:shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-colors duration-200">
      {/* Left Side: Brand Logo and Brand Name */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-[#1D6FEB] flex items-center justify-center font-bold text-white text-base">
          T
        </div>
        <span className="text-lg font-bold tracking-tight text-foreground">
          Tweet <span className="text-[#1D6FEB]">SS</span> Generator
        </span>
      </div>

      {/* Center Side: Navigation Group */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
        <Link
          href="/"
          className={`inline-block w-24 text-center text-sm font-semibold transition-colors duration-200 ${
            pathname === "/"
              ? "text-[#1D6FEB]"
              : "text-slate-600 hover:text-[#1D6FEB] dark:text-muted-foreground dark:hover:text-[#1D6FEB]"
          }`}
        >
          Generator
        </Link>
        <span className="text-border text-opacity-40 select-none">|</span>
        <Link
          href="/blog"
          className={`inline-block w-24 text-center text-sm font-semibold transition-colors duration-200 ${
            pathname.startsWith("/blog")
              ? "text-[#1D6FEB]"
              : "text-slate-600 hover:text-[#1D6FEB] dark:text-muted-foreground dark:hover:text-[#1D6FEB]"
          }`}
        >
          Blog
        </Link>
        <span className="text-border text-opacity-40 select-none">|</span>
        <Link
          href="/faq"
          className={`inline-block w-24 text-center text-sm font-semibold transition-colors duration-200 ${
            pathname === "/faq"
              ? "text-[#1D6FEB]"
              : "text-slate-600 hover:text-[#1D6FEB] dark:text-muted-foreground dark:hover:text-[#1D6FEB]"
          }`}
        >
          FAQ
        </Link>
        <span className="text-border text-opacity-40 select-none">|</span>
        <Link
          href="/help"
          className={`inline-block w-24 text-center text-sm font-semibold transition-colors duration-200 ${
            pathname === "/help"
              ? "text-[#1D6FEB]"
              : "text-slate-600 hover:text-[#1D6FEB] dark:text-muted-foreground dark:hover:text-[#1D6FEB]"
          }`}
        >
          Help
        </Link>
        <span className="text-border text-opacity-40 select-none">|</span>
        <Link
          href="/contact"
          className={`inline-block w-24 text-center text-sm font-semibold transition-colors duration-200 ${
            pathname === "/contact"
              ? "text-[#1D6FEB]"
              : "text-slate-600 hover:text-[#1D6FEB] dark:text-muted-foreground dark:hover:text-[#1D6FEB]"
          }`}
        >
          Contact
        </Link>
        <span className="text-border text-opacity-40 select-none">|</span>
        <Link
          href="/feedback"
          className={`inline-block w-24 text-center text-sm font-semibold transition-colors duration-200 ${
            pathname === "/feedback"
              ? "text-[#1D6FEB]"
              : "text-slate-600 hover:text-[#1D6FEB] dark:text-muted-foreground dark:hover:text-[#1D6FEB]"
          }`}
        >
          Feedback
        </Link>
      </div>

      {/* Right Side: GitHub, LinkedIn Buttons and Theme Toggle Button */}
      <div className="flex items-center gap-4">
        {/* GitHub Button */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-input-bg text-muted-foreground hover:text-[#1D6FEB] dark:hover:text-[#1D6FEB] transition-colors"
          aria-label="GitHub Repository"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-input-bg text-muted-foreground hover:text-[#1D6FEB] dark:hover:text-[#1D6FEB] transition-colors"
          aria-label="LinkedIn Profile"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-input-bg text-muted-foreground hover:text-[#1D6FEB] dark:hover:text-[#1D6FEB] transition-colors"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? (
            // Sun Icon (click to switch to light mode)
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m0 13.5V21M5.25 12H3m18 0h-2.25m-1.357-6.363l-1.591 1.591M6.82 17.18l-1.591 1.591m12.728 0l-1.591-1.591M6.82 6.82L5.229 5.23M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
              />
            </svg>
          ) : (
            // Moon Icon (click to switch to dark mode)
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
