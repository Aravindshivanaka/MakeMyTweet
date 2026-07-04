import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Fake Tweet Generator | Make My Tweet",
  description: "Create realistic, high-quality fake tweet screenshots and X mockups instantly. No watermarks, completely free.",
  alternates: {
    canonical: "/fake-tweet-generator",
  },
  openGraph: {
    title: "Fake Tweet Generator",
    description: "Create realistic, high-quality fake tweet screenshots and X mockups instantly. No watermarks, completely free.",
    url: "/fake-tweet-generator",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fake Tweet Generator",
    description: "Create realistic, high-quality fake tweet screenshots and X mockups instantly. No watermarks, completely free.",
    images: ["/og-image.png"],
  },
};

export default function FakeTweetGeneratorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I create fake tweets/X screenshots for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Make My Tweet allows you to create realistic fake tweets and Twitter/X screenshots directly in your browser without requiring an account."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to create an account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. You can use the fake tweet generator without signing up or logging in."
        }
      },
      {
        "@type": "Question",
        "name": "Does Make My Tweet add a watermark to fake tweets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Downloaded fake tweet images do not include any watermark."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize profile information on the fake tweet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can edit the profile name, username, avatar, verified badge, organization badge, engagement metrics, timestamps, and more."
        }
      },
      {
        "@type": "Question",
        "name": "Can I export high-quality fake tweet images?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Export clean PNG fake tweet images suitable for presentations, marketing materials, websites, blogs, and social media."
        }
      },
      {
        "@type": "Question",
        "name": "Does this work on mobile devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Make My Tweet works on modern desktop and mobile browsers."
        }
      },
      {
        "@type": "Question",
        "name": "Can I upload my own background image?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Upload your own background image and adjust its position to create custom fake tweet layouts."
        }
      },
      {
        "@type": "Question",
        "name": "Is my fake tweet data uploaded to a server?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Your edits remain in your browser. Fake tweet content and uploaded images are processed locally."
        }
      },
      {
        "@type": "Question",
        "name": "Which image formats are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can generate screenshots optimized for square (1:1), portrait (9:16), and landscape (16:9) layouts."
        }
      },
      {
        "@type": "Question",
        "name": "Who is this fake tweet tool designed for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Make My Tweet is designed for creators, marketers, businesses, agencies, designers, educators, and anyone who needs realistic fake tweets."
        }
      },
      {
        "@type": "Question",
        "name": "How do I change the language of the fake tweet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can edit all fake tweet text, dates, and engagement counts in any language by typing directly in the preview editor or using the sidebar inputs."
        }
      },
      {
        "@type": "Question",
        "name": "Can I toggle the verified badge on a fake tweet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can toggle the blue verified checkmark, as well as gold and grey business/government badges, on any fake profile."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a limit to the number of fake tweets I can generate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. You can generate and download an unlimited number of fake tweet mockups for free with no daily limits."
        }
      },
      {
        "@type": "Question",
        "name": "Can I set custom numbers for likes, replies, and reposts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Click on any metric number or use the sidebar inputs to enter custom numbers for replies, reposts, likes, views, and bookmarks."
        }
      },
      {
        "@type": "Question",
        "name": "Does the generator use standard Twitter/X fonts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The editor replicates the official typography, styling, and spacings to ensure your fake tweets look authentic."
        }
      },
      {
        "@type": "Question",
        "name": "Can I adjust or crop my uploaded profile picture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. When you upload a custom avatar, you can position and crop it using the built-in image cropper."
        }
      },
      {
        "@type": "Question",
        "name": "Can I switch the fake tweet layout to dark mode?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The editor supports light, dim, and lights-out dark mode themes to match the different X appearance options."
        }
      },
      {
        "@type": "Question",
        "name": "Can I attach an image to my fake tweet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can attach a custom image directly to the body of the fake tweet to simulate a photo or media post."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose the background container style?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can select a solid background, a transparent background, or any of our custom gradient backdrops in the sidebar panels."
        }
      },
      {
        "@type": "Question",
        "name": "Are these fake tweets suitable for memes and creative content?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The fake tweet generator is designed for creators, educators, and social media managers looking to build engaging visual mockups."
        }
      }
    ]
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Global Background */}
      <div className="fixed inset-0 pointer-events-none z-0 select-none app-background-base">
        <div className="absolute inset-0 app-background-dots" />
        <div className="absolute inset-0 app-background-glows" />
      </div>

      {/* Global Header */}
      <div className="shrink-0 relative z-20 h-16">
        <Header />
      </div>

      <main className="relative z-10 flex-1 w-full max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* 1. Hero Section */}
        <section id="hero" className="mb-16 md:mb-24 text-center pt-8" aria-labelledby="hero-heading">
          <header className="flex flex-col items-center">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 max-w-4xl">
              Free Fake Tweet Generator
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              Create realistic fake tweet screenshots in seconds. Customize profiles, verified badges, engagement, themes, backgrounds, and export high-quality images. No login, no watermark, everything runs securely in your browser.
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
                Create Fake Tweet
              </Link>
              <a 
                href="#key-features" 
                className="px-8 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-[rgba(255,255,255,0.08)] dark:hover:bg-[rgba(255,255,255,0.12)] text-foreground rounded-full font-bold transition-all duration-200 active:scale-95"
              >
                View Features
              </a>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto px-4 italic">
              "Your content never leaves your device. Everything runs locally in your browser. No uploads. No tracking of your fake tweet content."
            </p>
          </header>
        </section>

        {/* 2. Why Use This Tool */}
        <section id="why-use-this-tool" className="mb-16 md:mb-24" aria-labelledby="why-heading">
          <div className="text-center mb-12">
            <h2 id="why-heading" className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Why Use Make My Tweet's Fake Tweet Generator?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Make My Tweet helps creators, marketers, businesses, and designers generate realistic fake tweet screenshots without the complexity of graphic design software. Everything runs directly in your browser, so you can create, customize, and export high-quality fake tweet images in just a few clicks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Realistic Fake Tweet Design</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Create fake tweet screenshots that closely match the appearance of posts on X, making them suitable for presentations, mockups, marketing, and educational content.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">No Login Required</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Start creating fake tweets immediately. No account creation, sign-up, or personal information is required.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Runs Completely in Your Browser</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Your edits stay on your device. Images and fake tweet content are processed locally without being uploaded to a server.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">High-Quality Image Export</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Download clean, high-resolution PNG fake tweet images ready for social media posts, presentations, websites, and promotional materials.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Customize Every Detail</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Edit profile information, verified badges, engagement numbers, themes, backgrounds, timestamps, and more to create the exact fake tweet screenshot you need.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Works Across Multiple Formats</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Create fake tweet screenshots optimized for square posts, landscape graphics, and vertical story formats without additional editing.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Key Features */}
        <section id="key-features" className="mb-16 md:mb-24" aria-labelledby="features-heading">
          <div className="text-center mb-12">
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Key Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to create realistic fake tweets without design software or editing tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Realistic Fake Tweet Layout</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Generate fake tweet screenshots that closely match the appearance of posts on X with clean typography, spacing, and layout.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Complete Profile Customization</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Edit profile name, username, avatar, verified badges, organization badge, and bio information.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Editable Engagement Metrics</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Customize likes, replies, reposts, views, bookmarks, timestamps, and other fake tweet details.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Background & Theme Controls</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Choose light or dark themes, solid colors, or upload your own background image with built-in positioning controls.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Multiple Export Formats</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Create images optimized for 1:1, 9:16, and 16:9 layouts suitable for social media and presentations.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">High-Quality PNG Export</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Download clean, high-resolution PNG fake tweet images or copy screenshots directly to your clipboard.
              </p>
            </div>
          </div>
        </section>

        {/* 4. How It Works */}
        <section id="how-it-works" className="mb-16 md:mb-24" aria-labelledby="how-it-works-heading">
          <div className="text-center mb-12">
            <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Create realistic fake tweets in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#1D6FEB]/10 dark:bg-[#1D6FEB]/20 text-[#1D6FEB] flex items-center justify-center font-bold text-xl mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Customize Your Fake Tweet</h3>
              <p className="text-muted-foreground leading-relaxed">
                Enter your fake tweet content, profile information, verified badges, engagement metrics, themes, and backgrounds.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                Use the sidebar panel to edit all details. You can upload custom avatars, add background gradients, select verified checkmark variants, and customize numeric statistics for replies, reposts, and likes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#1D6FEB]/10 dark:bg-[#1D6FEB]/20 text-[#1D6FEB] flex items-center justify-center font-bold text-xl mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Preview Instantly</h3>
              <p className="text-muted-foreground leading-relaxed">
                See every change in real time while adjusting your fake tweet until it matches exactly what you need.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                The mockup template reflects your customizations instantly. Observe exact text wrapping, handle placements, font scaling, and alignment choices directly inside your browser container.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#1D6FEB]/10 dark:bg-[#1D6FEB]/20 text-[#1D6FEB] flex items-center justify-center font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Export Your Screenshot</h3>
              <p className="text-muted-foreground leading-relaxed">
                Download a high-quality PNG fake tweet image or copy it directly to your clipboard for immediate use.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                Click "Download PNG" to export a clean, high-resolution graphic with no watermarks, or choose "Copy Image" to quickly copy the mockup and paste it straight into your documents or emails.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Who It's For */}
        <section id="who-its-for" className="mb-16 md:mb-24" aria-labelledby="audience-heading">
          <div className="text-center mb-12">
            <h2 id="audience-heading" className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Who Is This Fake Tweet Generator For?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you're creating marketing content, educational material, or social media mockups, Make My Tweet helps you generate realistic fake tweets quickly and professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Audience 1 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Content Creators</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Create engaging fake tweet screenshots for YouTube videos, blogs, social media posts, and online content.
              </p>
            </div>

            {/* Audience 2 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Digital Marketers</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Design realistic fake tweet examples for campaigns, advertisements, presentations, and client reports.
              </p>
            </div>

            {/* Audience 3 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Businesses</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Showcase product announcements, customer conversations, and promotional concepts using professional fake tweet mockups.
              </p>
            </div>

            {/* Audience 4 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Designers</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Use realistic fake tweet screenshots in UI mockups, portfolios, prototypes, and creative projects.
              </p>
            </div>

            {/* Audience 5 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Educators</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Create visual examples for presentations, online courses, workshops, and educational demonstrations.
              </p>
            </div>

            {/* Audience 6 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Agencies</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Prepare professional social media concepts, client proposals, and campaign visuals in minutes.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Example Use Cases */}
        <section id="example-use-cases" className="mb-16 md:mb-24" aria-labelledby="use-cases-heading">
          <div className="text-center mb-12">
            <h2 id="use-cases-heading" className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Example Use Cases
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Make My Tweet helps you create realistic fake tweets for a wide range of professional and creative purposes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Use Case 1 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Social Media Marketing</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Create realistic fake tweet graphics for marketing campaigns, promotions, announcements, and brand storytelling.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3 border-t border-slate-100 dark:border-[#1E2D4A]/50 pt-3">
                <strong>Example:</strong> Mock up customer testimonials or partner praise with tailored statistics to show clients, or draft viral campaign announcements before sharing.
              </p>
            </div>

            {/* Use Case 2 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Presentations</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Add professional fake tweet screenshots to business presentations, client meetings, workshops, and reports.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3 border-t border-slate-100 dark:border-[#1E2D4A]/50 pt-3">
                <strong>Example:</strong> Embed clean slides containing tweets from industry experts or user quotes to highlight social sentiment during pitch decks.
              </p>
            </div>

            {/* Use Case 3 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Educational Content</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Create fake tweet examples for online courses, tutorials, classroom demonstrations, and learning materials.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3 border-t border-slate-100 dark:border-[#1E2D4A]/50 pt-3">
                <strong>Example:</strong> Display sample tweets to teach lessons on social media literacy, digital communications, or online research.
              </p>
            </div>

            {/* Use Case 4 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">UI & Product Mockups</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Design realistic fake tweet interfaces for prototypes, portfolios, product showcases, and concept demonstrations.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3 border-t border-slate-100 dark:border-[#1E2D4A]/50 pt-3">
                <strong>Example:</strong> Embed post designs in application layout mockups to demonstrate how standard social previews integrate into design components.
              </p>
            </div>

            {/* Use Case 5 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Blog Articles</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Use fake tweet screenshots to enhance blog posts, case studies, product reviews, and social media guides.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3 border-t border-slate-100 dark:border-[#1E2D4A]/50 pt-3">
                <strong>Example:</strong> Create visual case study evidence or include sample product user quotes as graphics to break up long text blocks.
              </p>
            </div>

            {/* Use Case 6 */}
            <div className="bg-white dark:bg-panel-bg border border-slate-200 dark:border-[#1E2D4A] rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">Content Creation</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Generate authentic-looking fake tweet visuals for YouTube videos, Instagram posts, LinkedIn content, newsletters, and other digital media.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3 border-t border-slate-100 dark:border-[#1E2D4A]/50 pt-3">
                <strong>Example:</strong> Compile structured quotes into 1:1 square layouts for Instagram or 16:9 for presentations to increase audience engagement.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Frequently Asked Questions */}
        <section id="faq" className="mb-16 md:mb-24" aria-labelledby="faq-heading">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {/* FAQ 1 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Can I create fake tweets/X screenshots for free?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes. Make My Tweet allows you to create realistic fake tweets and Twitter/X screenshots directly in your browser without requiring an account.
              </p>
            </div>

            {/* FAQ 2 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Do I need to create an account?</h3>
              <p className="text-muted-foreground leading-relaxed">
                No. You can use the fake tweet generator without signing up or logging in.
              </p>
            </div>

            {/* FAQ 3 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Does Make My Tweet add a watermark to fake tweets?</h3>
              <p className="text-muted-foreground leading-relaxed">
                No. Downloaded fake tweet images do not include any watermark.
              </p>
            </div>

            {/* FAQ 4 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Can I customize profile information on the fake tweet?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes. You can edit the profile name, username, avatar, verified badge, organization badge, engagement metrics, timestamps, and more.
              </p>
            </div>

            {/* FAQ 5 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Can I export high-quality fake tweet images?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes. Export clean PNG fake tweet images suitable for presentations, marketing materials, websites, blogs, and social media.
              </p>
            </div>

            {/* FAQ 6 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Does this work on mobile devices?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes. Make My Tweet works on modern desktop and mobile browsers.
              </p>
            </div>

            {/* FAQ 7 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Can I upload my own background image?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes. Upload your own background image and adjust its position to create custom fake tweet layouts.
              </p>
            </div>

            {/* FAQ 8 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Is my fake tweet data uploaded to a server?</h3>
              <p className="text-muted-foreground leading-relaxed">
                No. Your edits remain in your browser. Fake tweet content and uploaded images are processed locally.
              </p>
            </div>

            {/* FAQ 9 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Which image formats are supported?</h3>
              <p className="text-muted-foreground leading-relaxed">
                You can generate screenshots optimized for square (1:1), portrait (9:16), and landscape (16:9) layouts.
              </p>
            </div>

            {/* FAQ 10 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Who is this fake tweet tool designed for?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Make My Tweet is designed for creators, marketers, businesses, agencies, designers, educators, and anyone who needs realistic fake tweets.
              </p>
            </div>

            {/* FAQ 11 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">How do I change the language of the fake tweet?</h3>
              <p className="text-muted-foreground leading-relaxed">
                You can edit all fake tweet text, dates, and engagement counts in any language by typing directly in the preview editor or using the sidebar inputs.
              </p>
            </div>

            {/* FAQ 12 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Can I toggle the verified badge on a fake tweet?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes. You can toggle the blue verified checkmark, as well as gold and grey business/government badges, on any fake profile.
              </p>
            </div>

            {/* FAQ 13 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Is there a limit to the number of fake tweets I can generate?</h3>
              <p className="text-muted-foreground leading-relaxed">
                No. You can generate and download an unlimited number of fake tweet mockups for free with no daily limits.
              </p>
            </div>

            {/* FAQ 14 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Can I set custom numbers for likes, replies, and reposts?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes. Click on any metric number or use the sidebar inputs to enter custom numbers for replies, reposts, likes, views, and bookmarks.
              </p>
            </div>

            {/* FAQ 15 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Does the generator use standard Twitter/X fonts?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes. The editor replicates the official typography, styling, and spacings to ensure your fake tweets look authentic.
              </p>
            </div>

            {/* FAQ 16 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Can I adjust or crop my uploaded profile picture?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes. When you upload a custom avatar, you can position and crop it using the built-in image cropper.
              </p>
            </div>

            {/* FAQ 17 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Can I switch the fake tweet layout to dark mode?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes. The editor supports light, dim, and lights-out dark mode themes to match the different X appearance options.
              </p>
            </div>

            {/* FAQ 18 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Can I attach an image to my fake tweet?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes. You can attach a custom image directly to the body of the fake tweet to simulate a photo or media post.
              </p>
            </div>

            {/* FAQ 19 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">How do I choose the background container style?</h3>
              <p className="text-muted-foreground leading-relaxed">
                You can select a solid background, a transparent background, or any of our custom gradient backdrops in the sidebar panels.
              </p>
            </div>

            {/* FAQ 20 */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Are these fake tweets suitable for memes and creative content?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes. The fake tweet generator is designed for creators, educators, and social media managers looking to build engaging visual mockups.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Final Call To Action */}
        <section id="cta" className="mb-8 md:mb-16 text-center bg-slate-50 dark:bg-[#1E2D4A]/20 border border-slate-200 dark:border-[#1E2D4A] rounded-3xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-extrabold mb-6 text-foreground">
            Ready to Create Your Fake Tweet?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Create realistic fake tweet screenshots in seconds. No login. No watermark. High-quality PNG exports. Everything runs securely in your browser.
          </p>
          
          <Link 
            href="/" 
            className="inline-block mb-8 px-10 py-4 bg-[#1D6FEB] hover:bg-[#1A61CE] text-white rounded-full font-bold text-lg transition-all duration-200 shadow-md shadow-blue-500/20 active:scale-95"
          >
            Create Fake Tweet
          </Link>
          
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Start creating professional fake tweets for marketing, presentations, mockups, education, and content creation.
          </p>
        </section>

        {/* Related Tools */}
        <section id="related-tools" className="mt-16 text-center" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-xl font-bold mb-6 text-foreground">Related Tools</h2>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold">
            <Link href="/twitter-screenshot-generator" className="text-[#1D6FEB] hover:underline">Twitter Screenshot Generator</Link>
            <Link href="/9-16-twitter-screenshot-generator" className="text-[#1D6FEB] hover:underline">9:16 Twitter Screenshot Generator</Link>
            <Link href="/16-9-twitter-screenshot-generator" className="text-[#1D6FEB] hover:underline">16:9 Twitter Screenshot Generator</Link>
            <Link href="/tweet-image-generator" className="text-[#1D6FEB] hover:underline">Tweet Image Generator</Link>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <div className="shrink-0 relative z-20 mt-auto">
        <Footer />
      </div>
    </div>
  );
}
