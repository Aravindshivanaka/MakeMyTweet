import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Twitter Screenshot Generator | Make My Tweet",
  description: "Create realistic, high-quality Twitter screenshots and X mockups instantly. No watermarks, completely free.",
  alternates: {
    canonical: "/twitter-screenshot-generator",
  },
  openGraph: {
    title: "Twitter Screenshot Generator",
    description: "Create realistic, high-quality Twitter screenshots and X mockups instantly. No watermarks, completely free.",
    url: "/twitter-screenshot-generator",
  },
};

export default function TwitterScreenshotGeneratorPage() {
  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-16 md:py-24">
      {/* 1. Hero Section */}
      <section id="hero" className="mb-16 md:mb-24 text-center pt-8" aria-labelledby="hero-heading">
        <header className="flex flex-col items-center">
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 max-w-4xl">
            Free Twitter Screenshot Generator
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Create realistic Twitter/X screenshots in seconds. Customize profiles, verified badges, engagement, themes, backgrounds, and export high-quality images. No login, no watermark, everything runs securely in your browser.
          </p>
          
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm md:text-base font-semibold text-slate-700 dark:text-slate-300 mb-10 max-w-3xl">
            <li className="flex items-center gap-1.5"><span className="text-[#1D6FEB]">✓</span> No Login Required</li>
            <li className="flex items-center gap-1.5"><span className="text-[#1D6FEB]">✓</span> No Watermark</li>
            <li className="flex items-center gap-1.5"><span className="text-[#1D6FEB]">✓</span> High-Quality PNG Export</li>
            <li className="flex items-center gap-1.5"><span className="text-[#1D6FEB]">✓</span> Works on Desktop & Mobile</li>
            <li className="flex items-center gap-1.5"><span className="text-[#1D6FEB]">✓</span> Runs 100% in Your Browser</li>
          </ul>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <Link 
              href="/" 
              className="px-8 py-3.5 bg-[#1D6FEB] hover:bg-[#1A61CE] text-white rounded-full font-bold transition-all duration-200 shadow-md shadow-blue-500/20 active:scale-95"
            >
              Create Twitter Screenshot
            </Link>
            <a 
              href="#key-features" 
              className="px-8 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-[rgba(255,255,255,0.08)] dark:hover:bg-[rgba(255,255,255,0.12)] text-foreground rounded-full font-bold transition-all duration-200 active:scale-95"
            >
              View Features
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto px-4 italic">
            "Your content never leaves your device. Everything runs locally in your browser. No uploads. No tracking of your tweet content."
          </p>
        </header>
      </section>

      {/* 2. Why Use This Tool */}
      <section id="why-use-this-tool" className="mb-16" aria-labelledby="why-heading">
        <h2 id="why-heading" className="text-3xl font-bold mb-6 text-foreground">
          [Why Use This Tool]
        </h2>
        {/* [Value Proposition Content Placeholder] */}
      </section>

      {/* 3. Key Features */}
      <section id="key-features" className="mb-16" aria-labelledby="features-heading">
        <h2 id="features-heading" className="text-3xl font-bold mb-6 text-foreground">
          [Key Features]
        </h2>
        {/* [Features List/Grid Placeholder] */}
      </section>

      {/* 4. How It Works */}
      <section id="how-it-works" className="mb-16" aria-labelledby="how-it-works-heading">
        <h2 id="how-it-works-heading" className="text-3xl font-bold mb-6 text-foreground">
          [How It Works]
        </h2>
        {/* [Step-by-Step Guide Placeholder] */}
      </section>

      {/* 5. Who It's For */}
      <section id="who-its-for" className="mb-16" aria-labelledby="audience-heading">
        <h2 id="audience-heading" className="text-3xl font-bold mb-6 text-foreground">
          [Who It's For]
        </h2>
        {/* [Target Audience Descriptions Placeholder] */}
      </section>

      {/* 6. Example Use Cases */}
      <section id="example-use-cases" className="mb-16" aria-labelledby="use-cases-heading">
        <h2 id="use-cases-heading" className="text-3xl font-bold mb-6 text-foreground">
          [Example Use Cases]
        </h2>
        {/* [Examples/Scenarios Placeholder] */}
      </section>

      {/* 7. Frequently Asked Questions */}
      <section id="faq" className="mb-16" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-3xl font-bold mb-6 text-foreground">
          [Frequently Asked Questions]
        </h2>
        {/* [FAQ Accordion/List Placeholder] */}
      </section>

      {/* 8. Final Call To Action */}
      <section id="cta" className="mb-8 text-center" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="text-3xl font-bold mb-6 text-foreground">
          [Final Call To Action]
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          [CTA Supporting Text Placeholder]
        </p>
        {/* [Final CTA Button Placeholder] */}
      </section>
    </main>
  );
}
