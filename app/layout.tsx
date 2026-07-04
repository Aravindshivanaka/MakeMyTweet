import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  inter,
  notoSans,
  notoSansTelugu,
  notoSansTamil,
  notoSansKannada,
  notoSansMalayalam,
  notoSansBengali,
  notoSansGujarati,
  notoSansGurmukhi,
  notoSansDevanagari,
  notoNastaliqUrdu,
} from "@/lib/fonts";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.makemytweet.com"),
  title: "Twitter Screenshot Generator – Create Realistic X Posts | Make My Tweet",
  description: "Create realistic Twitter (X) screenshots in seconds. Customize profile, verified badges, organization logos, themes, backgrounds, and export high-quality images. Free online Tweet Screenshot Generator.",
  keywords: [
    "Twitter Screenshot Generator",
    "Fake Tweet Generator",
    "Tweet Generator",
    "X Post Generator",
    "Tweet Image Generator",
    "Twitter Mockup",
    "Tweet Mockup",
    "Twitter Card Generator",
    "X Screenshot Generator",
    "Social Media Screenshot Generator"
  ],
  applicationName: "Make My Tweet",
  authors: [{ name: "Make My Tweet", url: "https://www.makemytweet.com" }],
  creator: "Make My Tweet",
  publisher: "Make My Tweet",
  category: "Design",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Twitter Screenshot Generator – Create Realistic X Posts",
    description: "Create realistic Twitter (X) screenshots with premium customization, organization badges, custom backgrounds, and high-quality exports.",
    url: "/",
    siteName: "Make My Tweet",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Make My Tweet preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Twitter Screenshot Generator",
    description: "Generate beautiful, realistic X (Twitter) screenshots with advanced customization.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.makemytweet.com/#website",
      url: "https://www.makemytweet.com/",
      name: "Make My Tweet",
      description: metadata.description,
      publisher: {
        "@id": "https://www.makemytweet.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.makemytweet.com/#organization",
      name: "Make My Tweet",
      url: "https://www.makemytweet.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.makemytweet.com/og-image.png",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.makemytweet.com/#software",
      name: "Make My Tweet",
      applicationCategory: "WebApplication",
      operatingSystem: "Any",
      url: "https://www.makemytweet.com/",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description: "Browser-based Twitter/X Screenshot Generator.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        notoSans.variable,
        notoSansTelugu.variable,
        notoSansTamil.variable,
        notoSansKannada.variable,
        notoSansMalayalam.variable,
        notoSansBengali.variable,
        notoSansGujarati.variable,
        notoSansGurmukhi.variable,
        notoSansDevanagari.variable,
        notoNastaliqUrdu.variable
      )}
    >
      <head>
        <meta name="trustpilot-one-time-domain-verification-id" content="333c2991-8f2b-41b7-811f-ea5cee94c681" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans transition-colors duration-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <GoogleAnalytics gaId="G-PLB3J4X3XZ" />
      </body>
    </html>
  );
}
