import { Metadata } from "next";
import Link from "next/link";
import AppShell from "@/components/layout/AppShell";
import FormatSelectorInit from "./FormatSelectorInit";

export const metadata: Metadata = {
  title: "16:9 Twitter Screenshot Generator | Make My Tweet",
  description: "Create realistic, high-quality 16:9 Twitter screenshots and landscape X mockups. No watermarks, completely free.",
  alternates: {
    canonical: "/16-9-twitter-screenshot-generator",
  },
  openGraph: {
    title: "16:9 Twitter Screenshot Generator",
    description: "Create realistic, high-quality 16:9 Twitter screenshots and landscape X mockups. No watermarks, completely free.",
    url: "/16-9-twitter-screenshot-generator",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "16:9 Twitter Screenshot Generator",
    description: "Create realistic, high-quality 16:9 Twitter screenshots and landscape X mockups. No watermarks, completely free.",
    images: ["/og-image.png"],
  },
};

export default function SixteenNineTwitterScreenshotGeneratorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I create 16:9 Twitter/X screenshots for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Make My Tweet allows you to create realistic 16:9 Twitter/X landscape screenshots directly in your browser without requiring an account."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to create an account to use the 16:9 generator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. You can use the landscape screenshot generator without signing up or logging in."
        }
      },
      {
        "@type": "Question",
        "name": "Does the 16:9 format add a watermark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. All downloaded images, including 16:9 layouts, are completely free of watermarks."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize the profile details on the landscape mockup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can edit the profile name, username, avatar, verified badge, organization badge, engagement metrics, timestamps, and more."
        }
      },
      {
        "@type": "Question",
        "name": "Can I export high-quality 16:9 images?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Export clean PNG images suitable for presentations, newsletters, blog headers, YouTube thumbnails, and horizontal desktop layouts."
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
        "name": "Can I upload my own background image for the landscape format?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Upload your own background image and adjust its position to create custom horizontal composition mockups."
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
        "name": "Who is the 16:9 landscape format designed for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is designed for creators, marketers, businesses, agencies, designers, educators, and anyone who needs realistic landscape Twitter/X screenshots."
        }
      },
      {
        "@type": "Question",
        "name": "How do I change the language of the 16:9 landscape tweet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can edit all text, dates, and engagement counts in any language by typing directly in the preview editor or using the sidebar inputs."
        }
      },
      {
        "@type": "Question",
        "name": "Can I toggle the verified badge on a 16:9 mockup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can toggle the blue verified checkmark, as well as gold and grey business/government badges, using the sidebar."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a limit to how many 16:9 screenshots I can generate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. You can generate and download an unlimited number of 16:9 screenshots for free with no daily limits."
        }
      },
      {
        "@type": "Question",
        "name": "Can I set custom numbers for likes and reposts on the 16:9 layout?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Click on any metric number or use the sidebar inputs to enter custom numbers for replies, reposts, likes, views, and bookmarks."
        }
      },
      {
        "@type": "Question",
        "name": "How does the 16:9 aspect ratio look on desktop presentations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 16:9 aspect ratio is optimized for widescreen monitors, making it perfect for slide decks, presentations, and website banners."
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
        "name": "Can I switch the 16:9 layout to dark mode?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The editor supports light, dim, and lights-out dark mode themes to match the different X appearance options."
        }
      },
      {
        "@type": "Question",
        "name": "Can I attach an image to my 16:9 landscape screenshot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can attach a custom image directly to the body of the tweet to simulate a photo or media post in a horizontal format."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose the background container style for landscape shots?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can select a solid background, a transparent background, or any of our custom gradient backdrops in the sidebar panels."
        }
      },
      {
        "@type": "Question",
        "name": "Is the 16:9 format suitable for LinkedIn banners and newsletters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The horizontal aspect ratio is ideal for email newsletter banners, blog header images, and LinkedIn updates."
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
          <h1 id="hero-heading">16:9 Twitter Screenshot Generator</h1>
          <p>
            Create realistic 16:9 Twitter/X screenshots and landscape mockups in seconds. Customize profiles, verified badges, engagement, themes, backgrounds, and export high-quality images. No login, no watermark, everything runs securely in your browser.
          </p>
          <ul>
            <li>No Login Required</li>
            <li>No Watermark</li>
            <li>High-Quality PNG Export</li>
            <li>Works on Desktop & Mobile</li>
            <li>Runs 100% in Your Browser</li>
          </ul>
          <Link href="/">Create 16:9 Twitter Screenshot</Link>
        </section>

        {/* 2. Why Use This Tool */}
        <section id="why-use-this-tool" aria-labelledby="why-heading">
          <h2 id="why-heading">Why Use Make My Tweet's 16:9 Layout?</h2>
          <p>
            The 16:9 aspect ratio is perfect for desktop-first layouts, business newsletters, blog banners, YouTube thumbnails, and LinkedIn posts. Our tool lets you generate these landscape Twitter/X screenshots instantly and easily, without needing advanced design software.
          </p>
          <div>
            <h3>Realistic Landscape Design</h3>
            <p>Create tweet screenshots that match the look of posts on X, designed for landscape orientation.</p>
            <h3>No Account Needed</h3>
            <p>Start creating immediately without sign-up or registration.</p>
            <h3>100% Browser-Based</h3>
            <p>All data stays secure on your computer. Images are processed locally.</p>
            <h3>High-Resolution Exports</h3>
            <p>Download premium PNG images ready for desktop and presentation channels.</p>
          </div>
        </section>

        {/* 3. Key Features */}
        <section id="key-features" aria-labelledby="features-heading">
          <h2 id="features-heading">Key Features</h2>
          <p>Everything you need to create realistic landscape Twitter/X mockups.</p>
          <ul>
            <li>Perfect 16:9 Landscape Layout</li>
            <li>Complete Custom Profile Details</li>
            <li>Editable Engagement Metrics (likes, retweets, views)</li>
            <li>Background Customization (colors, gradients, custom image upload)</li>
            <li>High-Quality PNG Exports and Clipboard Copy</li>
          </ul>
        </section>

        {/* 4. How It Works */}
        <section id="how-it-works" aria-labelledby="how-it-works-heading">
          <h2 id="how-it-works-heading">How It Works</h2>
          <p>Generate landscape 16:9 tweet screenshots in three simple steps.</p>
          <ol>
            <li><strong>Select 16:9 layout format and enter your tweet details:</strong> Use the sidebar editor panels to customize the display name, username, profile photo, verified checkmarks, and tweet body. Specify your custom reposts and likes count.</li>
            <li><strong>Preview changes in real time:</strong> See the typography, font scaling, outer layout bounds, and custom card media adjust instantly to check visual balance.</li>
            <li><strong>Export and download your custom PNG mockup:</strong> Click 'Download PNG' or copy the generated landscape frame directly to your clipboard for instant social media usage.</li>
          </ol>
        </section>

        {/* 5. Who It's For */}
        <section id="who-its-for" aria-labelledby="audience-heading">
          <h2 id="audience-heading">Who Is This Landscape Generator For?</h2>
          <p>Designed for professional creators and digital agencies needing presentation-ready content layouts.</p>
          <ul>
            <li>Content Creators (blog authors, newsletter writers)</li>
            <li>Digital Marketers (social media campaigns and LinkedIn posts)</li>
            <li>UI Designers (desktop prototypes)</li>
            <li>Educators (wide-format slide materials)</li>
          </ul>
        </section>

        {/* 6. Example Use Cases */}
        <section id="example-use-cases" aria-labelledby="use-cases-heading">
          <h2 id="use-cases-heading">Example Use Cases</h2>
          <p>Get creative with 16:9 Twitter screenshots across digital media.</p>
          <ul>
            <li><strong>LinkedIn Banner Mockups & Image Shares:</strong> Share quote cards, brand reviews, or customer praise visually within horizontal professional feeds.</li>
            <li><strong>Email Newsletter Headers:</strong> Use widescreen landscape tweet layouts to introduce sections, display social proofs, or highlight viral quotes.</li>
            <li><strong>YouTube Video Thumbnails:</strong> Embed high-quality widescreen X screenshots as graphics inside video cover thumbnails.</li>
            <li><strong>Desktop Presentations & Pitch Decks:</strong> Embed high-resolution landscape slides in corporate presentations and client pitch decks.</li>
          </ul>
        </section>

        {/* 7. Frequently Asked Questions */}
        <section id="faq" aria-labelledby="faq-heading">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <div>
            <h3>Can I create 16:9 Twitter/X screenshots for free?</h3>
            <p>Yes. Make My Tweet allows you to create realistic 16:9 Twitter/X landscape screenshots directly in your browser without requiring an account.</p>
            <h3>Do I need to create an account to use the 16:9 generator?</h3>
            <p>No. You can use the landscape screenshot generator without signing up or logging in.</p>
            <h3>Does the 16:9 format add a watermark?</h3>
            <p>No. All downloaded images, including 16:9 layouts, are completely free of watermarks.</p>
            <h3>Can I customize the profile details on the landscape mockup?</h3>
            <p>Yes. You can edit the profile name, username, avatar, verified badge, organization badge, engagement metrics, timestamps, and more.</p>
            <h3>Can I export high-quality 16:9 images?</h3>
            <p>Yes. Export clean PNG images suitable for presentations, newsletters, blog headers, YouTube thumbnails, and horizontal desktop layouts.</p>
            <h3>Does this work on mobile devices?</h3>
            <p>Yes. Make My Tweet works on modern desktop and mobile browsers.</p>
            <h3>Can I upload my own background image for the landscape format?</h3>
            <p>Yes. Upload your own background image and adjust its position to create custom horizontal composition mockups.</p>
            <h3>Is my data uploaded to a server?</h3>
            <p>No. Your edits remain in your browser. Tweet content and uploaded images are processed locally.</p>
            <h3>Which image formats are supported?</h3>
            <p>You can generate screenshots optimized for square (1:1), portrait (9:16), and landscape (16:9) layouts.</p>
            <h3>Who is the 16:9 landscape format designed for?</h3>
            <p>It is designed for creators, marketers, businesses, agencies, designers, educators, and anyone who needs realistic landscape Twitter/X screenshots.</p>
            <h3>How do I change the language of the 16:9 landscape tweet?</h3>
            <p>You can edit all text, dates, and engagement counts in any language by typing directly in the preview editor or using the sidebar inputs.</p>
            <h3>Can I toggle the verified badge on a 16:9 mockup?</h3>
            <p>Yes. You can toggle the blue verified checkmark, as well as gold and grey business/government badges, using the sidebar.</p>
            <h3>Is there a limit to how many 16:9 screenshots I can generate?</h3>
            <p>No. You can generate and download an unlimited number of 16:9 screenshots for free with no daily limits.</p>
            <h3>Can I set custom numbers for likes and reposts on the 16:9 layout?</h3>
            <p>Yes. Click on any metric number or use the sidebar inputs to enter custom numbers for replies, reposts, likes, views, and bookmarks.</p>
            <h3>How does the 16:9 aspect ratio look on desktop presentations?</h3>
            <p>The 16:9 aspect ratio is optimized for widescreen monitors, making it perfect for slide decks, presentations, and website banners.</p>
            <h3>Can I adjust or crop my uploaded profile picture?</h3>
            <p>Yes. When you upload a custom avatar, you can position and crop it using the built-in image cropper.</p>
            <h3>Can I switch the 16:9 layout to dark mode?</h3>
            <p>Yes. The editor supports light, dim, and lights-out dark mode themes to match the different X appearance options.</p>
            <h3>Can I attach an image to my 16:9 landscape screenshot?</h3>
            <p>Yes. You can attach a custom image directly to the body of the tweet to simulate a photo or media post in a horizontal format.</p>
            <h3>How do I choose the background container style for landscape shots?</h3>
            <p>You can select a solid background, a transparent background, or any of our custom gradient backdrops in the sidebar panels.</p>
            <h3>Is the 16:9 format suitable for LinkedIn banners and newsletters?</h3>
            <p>Yes. The horizontal aspect ratio is ideal for email newsletter banners, blog header images, and LinkedIn updates.</p>
          </div>
        </section>

        {/* 8. Final Call To Action */}
        <section id="cta" aria-labelledby="cta-heading">
          <h2 id="cta-heading">Ready to Create Your 16:9 Twitter Screenshot?</h2>
          <p>Create realistic landscape X mockups and banners. No watermark, no signup, 100% free.</p>
          <Link href="/">Create 16:9 Twitter Screenshot</Link>
        </section>

        {/* Related Tools */}
        <section id="related-tools" aria-labelledby="related-heading">
          <h2 id="related-heading">Related Tools</h2>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold">
            <Link href="/twitter-screenshot-generator">Twitter Screenshot Generator</Link>
            <Link href="/fake-tweet-generator">Fake Tweet Generator</Link>
            <Link href="/9-16-twitter-screenshot-generator">9:16 Twitter Screenshot Generator</Link>
            <Link href="/tweet-image-generator">Tweet Image Generator</Link>
          </div>
        </section>
      </main>

      {/* Render the Initializer to preselect 16:9 state */}
      <FormatSelectorInit />

      {/* Render the exact same interactive editor environment */}
      <AppShell />
    </>
  );
}
