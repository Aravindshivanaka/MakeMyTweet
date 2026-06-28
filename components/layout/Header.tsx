"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname() || "";
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

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

  useEffect(() => {
    if (!isDrawerOpen) return;

    const stateId = "drawer-" + Date.now();
    window.history.pushState({ drawerOpen: stateId }, "");

    const handlePopState = (event: PopStateEvent) => {
      setIsDrawerOpen(false);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      if (window.history.state?.drawerOpen === stateId) {
        window.history.back();
      }
    };
  }, [isDrawerOpen]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex relative w-full h-16 bg-white dark:bg-[#0B1220] border-b border-gray-100 dark:border-[rgba(255,255,255,0.06)] px-6 items-center justify-between shrink-0 select-none shadow-sm shadow-slate-100/50 dark:shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-colors duration-200">
        {/* Left Side: Brand Logo and Brand Name */}
        <Link href="/" className="flex items-center cursor-pointer">
          <Image
            src="/images/latest_logo.webp"
            alt="Make My Tweet Logo"
            className="h-12 w-auto object-contain shrink-0"
            width={396}
            height={60}
            priority
            fetchPriority="high"
          />
        </Link>

        {/* Center Side: Navigation Group */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <Link
            href="/"
            className={`inline-block w-24 text-center text-sm font-semibold transition-colors duration-200 ${pathname === "/"
              ? "text-[#1D6FEB]"
              : "text-slate-600 hover:text-[#1D6FEB] dark:text-muted-foreground dark:hover:text-[#1D6FEB]"
              }`}
          >
            Create
          </Link>
          <span className="text-border text-opacity-40 select-none">|</span>
          <Link
            href="/blog"
            className={`inline-block w-24 text-center text-sm font-semibold transition-colors duration-200 ${pathname.startsWith("/blog")
              ? "text-[#1D6FEB]"
              : "text-slate-600 hover:text-[#1D6FEB] dark:text-muted-foreground dark:hover:text-[#1D6FEB]"
              }`}
          >
            Blog
          </Link>
          <span className="text-border text-opacity-40 select-none">|</span>
          <Link
            href="/faq"
            className={`inline-block w-24 text-center text-sm font-semibold transition-colors duration-200 ${pathname === "/faq"
              ? "text-[#1D6FEB]"
              : "text-slate-600 hover:text-[#1D6FEB] dark:text-muted-foreground dark:hover:text-[#1D6FEB]"
              }`}
          >
            FAQ
          </Link>
          <span className="text-border text-opacity-40 select-none">|</span>
          <Link
            href="/help"
            className={`inline-block w-24 text-center text-sm font-semibold transition-colors duration-200 ${pathname === "/help"
              ? "text-[#1D6FEB]"
              : "text-slate-600 hover:text-[#1D6FEB] dark:text-muted-foreground dark:hover:text-[#1D6FEB]"
              }`}
          >
            Help
          </Link>
          <span className="text-border text-opacity-40 select-none">|</span>
          <Link
            href="/contact"
            className={`inline-block w-24 text-center text-sm font-semibold transition-colors duration-200 ${pathname === "/contact"
              ? "text-[#1D6FEB]"
              : "text-slate-600 hover:text-[#1D6FEB] dark:text-muted-foreground dark:hover:text-[#1D6FEB]"
              }`}
          >
            Contact
          </Link>
          <span className="text-border text-opacity-40 select-none">|</span>
          <Link
            href="/feedback"
            className={`inline-block w-24 text-center text-sm font-semibold transition-colors duration-200 ${pathname === "/feedback"
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

      {/* Mobile Header */}
      <header className="flex md:hidden relative w-full h-16 bg-white dark:bg-[#0B1220] border-b border-gray-100 dark:border-[rgba(255,255,255,0.06)] px-4 items-center justify-between shrink-0 select-none shadow-sm shadow-slate-100/50 dark:shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-colors duration-200">
        {/* Left Section: Hamburger Menu */}
        <div className="flex items-center justify-start flex-1">
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="p-2 rounded-lg hover:bg-input-bg text-muted-foreground hover:text-[#1D6FEB] dark:hover:text-[#1D6FEB] transition-colors"
            aria-label="Menu"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Center Section: Logo & Brand Name */}
        <Link href="/" className="flex items-center cursor-pointer">
          <img
            src="/images/latest_logo.webp"
            alt="Make My Tweet Logo"
            className="h-10 w-auto object-contain shrink-0"
          />
        </Link>

        {/* Right Section: Theme Toggle */}
        <div className="flex items-center justify-end flex-1">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-input-bg text-muted-foreground hover:text-[#1D6FEB] dark:hover:text-[#1D6FEB] transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
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

      {/* Mobile Drawer (rendered inside Portal on client-side) */}
      {mounted && createPortal(
        <>
          <style>{`
            .drawer-backdrop-transition {
              transition: opacity 350ms cubic-bezier(0.34, 1, 0.64, 1);
            }
            .drawer-panel-transition {
              transition: transform 480ms cubic-bezier(0.34, 1.15, 0.64, 1);
            }
          `}</style>

          {/* Backdrop overlay */}
          <div
            onClick={() => setIsDrawerOpen(false)}
            className={`fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[9998] drawer-backdrop-transition ${isDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
          />

          {/* Drawer panel */}
          <div
            className={`fixed top-0 left-0 h-screen w-[280px] bg-white dark:bg-[#0B1220] border-r border-gray-100 dark:border-[rgba(255,255,255,0.06)] shadow-2xl z-[9999] flex flex-col drawer-panel-transition ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            {/* Header area of drawer */}
            <div className="h-20 px-4 border-b border-gray-100 dark:border-[rgba(255,255,255,0.06)] flex items-center justify-between shrink-0">
              {/* Logo & Brand name */}
              <Link
                href="/"
                onClick={() => {
                  if (pathname === "/") {
                    setTimeout(() => setIsDrawerOpen(false), 150);
                  }
                }}
                className="flex items-center cursor-pointer"
              >
                <img
                  src="/images/latest_logo.webp"
                  alt="Make My Tweet Logo"
                  className="h-10 w-auto object-contain shrink-0"
                />
              </Link>
              {/* Close Button */}
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 rounded-lg hover:bg-input-bg text-muted-foreground hover:text-[#1D6FEB] dark:hover:text-[#1D6FEB] transition-colors"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Drawer content area */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <nav className="flex flex-col gap-1.5">
                {[
                  { label: "Generator", href: "/" },
                  { label: "Blog", href: "/blog", activeCheck: (p: string) => p.startsWith("/blog") },
                  { label: "FAQ", href: "/faq" },
                  { label: "Help", href: "/help" },
                  { label: "Contact", href: "/contact" },
                  { label: "Feedback", href: "/feedback" },
                ].map((item) => {
                  const isActive = item.activeCheck
                    ? item.activeCheck(pathname)
                    : pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        if (pathname === item.href) {
                          setTimeout(() => setIsDrawerOpen(false), 150);
                        }
                      }}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 ease-in-out cursor-pointer ${isActive
                        ? "bg-[#1D6FEB]/10 text-[#1D6FEB] dark:bg-[#1D6FEB]/15 dark:text-[#3b82f6]"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.05] hover:text-[#1D6FEB]"
                        }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer footer area */}
            <div className="p-4 border-t border-gray-100 dark:border-[rgba(255,255,255,0.06)] bg-slate-50/50 dark:bg-black/10 shrink-0">
              <div className="flex flex-col gap-2">
                <Link
                  href="/privacy-policy"
                  onClick={() => {
                    if (pathname === "/privacy-policy") {
                      setTimeout(() => setIsDrawerOpen(false), 150);
                    }
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-500 hover:text-[#1D6FEB] dark:text-slate-400 dark:hover:text-[#1D6FEB] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  onClick={() => {
                    if (pathname === "/terms-and-conditions") {
                      setTimeout(() => setIsDrawerOpen(false), 150);
                    }
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-500 hover:text-[#1D6FEB] dark:text-slate-400 dark:hover:text-[#1D6FEB] transition-colors cursor-pointer"
                >
                  Terms & Conditions
                </Link>
              </div>

              {/* Social Links Row */}
              <div className="flex items-center gap-3 mt-4 pt-3 border-t border-gray-100 dark:border-[rgba(255,255,255,0.06)] px-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-input-bg text-muted-foreground hover:text-[#1D6FEB] dark:hover:text-[#1D6FEB] transition-colors flex items-center gap-2"
                  aria-label="GitHub Repository"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span className="text-xs font-semibold">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-input-bg text-muted-foreground hover:text-[#1D6FEB] dark:hover:text-[#1D6FEB] transition-colors flex items-center gap-2"
                  aria-label="LinkedIn Profile"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="text-xs font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
}
