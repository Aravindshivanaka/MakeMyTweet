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
  metadataBase: new URL("https://makemytweet.com"),
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
  alternates: {
    canonical: "https://makemytweet.com",
  },
  openGraph: {
    title: "Twitter Screenshot Generator – Create Realistic X Posts",
    description: "Create realistic Twitter (X) screenshots with premium customization, organization badges, custom backgrounds, and high-quality exports.",
    url: "https://makemytweet.com",
    siteName: "Make My Tweet",
    images: [
      {
        url: "https://makemytweet.com/og-image.png",
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
    images: ["https://makemytweet.com/og-image.png"],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
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
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans transition-colors duration-200">
        {children}
        <GoogleAnalytics gaId="G-PLB3J4X3XZ" />
      </body>
    </html>
  );
}
