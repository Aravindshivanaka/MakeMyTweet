import { Metadata } from "next";
import Link from "next/link";
import AppShell from "@/components/layout/AppShell";
import FormatSelectorInit from "./FormatSelectorInit";

export const metadata: Metadata = {
  title: "9:16 Twitter Screenshot Generator | Make My Tweet",
  description: "Create realistic, high-quality 9:16 Twitter screenshots and vertical X story mockups. No watermarks, completely free.",
  alternates: {
    canonical: "/9-16-twitter-screenshot-generator",
  },
  openGraph: {
    title: "9:16 Twitter Screenshot Generator",
    description: "Create realistic, high-quality 9:16 Twitter screenshots and vertical X story mockups. No watermarks, completely free.",
    url: "/9-16-twitter-screenshot-generator",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "9:16 Twitter Screenshot Generator",
    description: "Create realistic, high-quality 9:16 Twitter screenshots and vertical X story mockups. No watermarks, completely free.",
    images: ["/og-image.png"],
  },
};

export default function NineSixteenTwitterScreenshotGeneratorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I create 9:16 Twitter/X screenshots for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Make My Tweet allows you to create realistic 9:16 Twitter/X story screenshots directly in your browser without requiring an account."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to create an account to use the 9:16 generator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. You can use the vertical screenshot generator without signing up or logging in."
        }
      },
      {
        "@type": "Question",
        "name": "Does the 9:16 format add a watermark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. All downloaded images, including 9:16 layouts, are completely free of watermarks."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize the profile details on the vertical mockup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can edit the profile name, username, avatar, verified badge, organization badge, engagement metrics, timestamps, and more."
        }
      },
      {
        "@type": "Question",
        "name": "Can I export high-quality 9:16 images?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Export clean PNG images suitable for Instagram Stories, TikTok, YouTube Shorts, WhatsApp Status, and other mobile layouts."
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
        "name": "Can I upload my own background image for the story format?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Upload your own background image and adjust its position to create custom vertical composition mockups."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data uploaded to a server?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Your edits remain in your browser. Tweet content and uploaded images are processed locally."
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
        "name": "Who is the 9:16 story format designed for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is designed for creators, marketers, businesses, agencies, designers, educators, and anyone who needs realistic vertical Twitter/X screenshots."
        }
      }
    ]
  };

  return (
    <>
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* SEO Landing Page Text for Crawlers */}
      <main className="sr-only">
        {/* 1. Hero Section */}
        <section id="hero" aria-labelledby="hero-heading">
          <h1 id="hero-heading">9:16 Twitter Screenshot Generator</h1>
          <p>
            Create realistic 9:16 Twitter/X screenshots and vertical story mockups in seconds. Customize profiles, verified badges, engagement, themes, backgrounds, and export high-quality images. No login, no watermark, everything runs securely in your browser.
          </p>
          <ul>
            <li>No Login Required</li>
            <li>No Watermark</li>
            <li>High-Quality PNG Export</li>
            <li>Works on Desktop & Mobile</li>
            <li>Runs 100% in Your Browser</li>
          </ul>
          <Link href="/">Create 9:16 Twitter Screenshot</Link>
        </section>

        {/* 2. Why Use This Tool */}
        <section id="why-use-this-tool" aria-labelledby="why-heading">
          <h2 id="why-heading">Why Use Make My Tweet's 9:16 Layout?</h2>
          <p>
            The 9:16 aspect ratio is perfect for mobile-first platforms like Instagram Stories, TikTok, YouTube Shorts, and WhatsApp Status. Our tool lets you generate these vertical Twitter/X screenshots instantly and easily, without needing advanced design software.
          </p>
          <div>
            <h3>Realistic Vertical Design</h3>
            <p>Create tweet screenshots that match the look of posts on X, designed for portrait mode.</p>
            <h3>No Account Needed</h3>
            <p>Start creating immediately without sign-up or registration.</p>
            <h3>100% Browser-Based</h3>
            <p>All data stays secure on your computer. Images are processed locally.</p>
            <h3>High-Resolution Exports</h3>
            <p>Download premium PNG images ready for mobile social media channels.</p>
          </div>
        </section>

        {/* 3. Key Features */}
        <section id="key-features" aria-labelledby="features-heading">
          <h2 id="features-heading">Key Features</h2>
          <p>Everything you need to create realistic vertical Twitter/X mockups.</p>
          <ul>
            <li>Perfect 9:16 Vertical Story Layout</li>
            <li>Complete Custom Profile Details</li>
            <li>Editable Engagement Metrics (likes, retweets, views)</li>
            <li>Background Customization (colors, gradients, custom image upload)</li>
            <li>High-Quality PNG Exports and Clipboard Copy</li>
          </ul>
        </section>

        {/* 4. How It Works */}
        <section id="how-it-works" aria-labelledby="how-it-works-heading">
          <h2 id="how-it-works-heading">How It Works</h2>
          <p>Generate vertical 9:16 tweet screenshots in three simple steps.</p>
          <ol>
            <li>Select 9:16 layout format and enter your tweet details.</li>
            <li>Preview changes in real time.</li>
            <li>Export and download your custom PNG mockup.</li>
          </ol>
        </section>

        {/* 5. Who It's For */}
        <section id="who-its-for" aria-labelledby="audience-heading">
          <h2 id="audience-heading">Who Is This Vertical Generator For?</h2>
          <p>Designed for professional creators and digital agencies needing mobile-ready content layouts.</p>
          <ul>
            <li>Content Creators (YouTube Shorts, TikTok, Reels)</li>
            <li>Digital Marketers (social media campaigns)</li>
            <li>UI Designers (mobile prototypes)</li>
            <li>Educators (mobile-friendly slide materials)</li>
          </ul>
        </section>

        {/* 6. Example Use Cases */}
        <section id="example-use-cases" aria-labelledby="use-cases-heading">
          <h2 id="use-cases-heading">Example Use Cases</h2>
          <p>Get creative with 9:16 Twitter screenshots across digital media.</p>
          <ul>
            <li>Instagram & Facebook Stories</li>
            <li>TikTok Video Backgrounds</li>
            <li>YouTube Shorts Mockups</li>
            <li>Mobile App Prototyping</li>
          </ul>
        </section>

        {/* 7. Frequently Asked Questions */}
        <section id="faq" aria-labelledby="faq-heading">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <div>
            <h3>Can I create 9:16 Twitter/X screenshots for free?</h3>
            <p>Yes. Make My Tweet allows you to create realistic 9:16 Twitter/X story screenshots directly in your browser without requiring an account.</p>
            <h3>Do I need to create an account to use the 9:16 generator?</h3>
            <p>No. You can use the vertical screenshot generator without signing up or logging in.</p>
            <h3>Does the 9:16 format add a watermark?</h3>
            <p>No. All downloaded images, including 9:16 layouts, are completely free of watermarks.</p>
            <h3>Can I customize the profile details on the vertical mockup?</h3>
            <p>Yes. You can edit the profile name, username, avatar, verified badge, organization badge, engagement metrics, timestamps, and more.</p>
            <h3>Can I export high-quality 9:16 images?</h3>
            <p>Yes. Export clean PNG images suitable for Instagram Stories, TikTok, YouTube Shorts, WhatsApp Status, and other mobile layouts.</p>
            <h3>Does this work on mobile devices?</h3>
            <p>Yes. Make My Tweet works on modern desktop and mobile browsers.</p>
            <h3>Can I upload my own background image for the story format?</h3>
            <p>Yes. Upload your own background image and adjust its position to create custom vertical composition mockups.</p>
            <h3>Is my data uploaded to a server?</h3>
            <p>No. Your edits remain in your browser. Tweet content and uploaded images are processed locally.</p>
            <h3>Which image formats are supported?</h3>
            <p>You can generate screenshots optimized for square (1:1), portrait (9:16), and landscape (16:9) layouts.</p>
            <h3>Who is the 9:16 story format designed for?</h3>
            <p>It is designed for creators, marketers, businesses, agencies, designers, educators, and anyone who needs realistic vertical Twitter/X screenshots.</p>
          </div>
        </section>

        {/* 8. Final Call To Action */}
        <section id="cta" aria-labelledby="cta-heading">
          <h2 id="cta-heading">Ready to Create Your 9:16 Twitter Screenshot?</h2>
          <p>Create realistic vertical X mockups and stories. No watermark, no signup, 100% free.</p>
          <Link href="/">Create 9:16 Twitter Screenshot</Link>
        </section>

        {/* Related Tools */}
        <section id="related-tools" aria-labelledby="related-heading">
          <h2 id="related-heading">Related Tools</h2>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold">
            <Link href="/twitter-screenshot-generator">Twitter Screenshot Generator</Link>
            <Link href="/fake-tweet-generator">Fake Tweet Generator</Link>
            <Link href="/16-9-twitter-screenshot-generator">16:9 Twitter Screenshot Generator</Link>
            <Link href="/tweet-image-generator">Tweet Image Generator</Link>
          </div>
        </section>
      </main>

      {/* Render the Initializer to preselect 9:16 state */}
      <FormatSelectorInit />

      {/* Render the exact same interactive editor environment */}
      <AppShell />
    </>
  );
}
