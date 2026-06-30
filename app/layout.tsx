import type { Metadata, Viewport } from "next";
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
  title: "Make My Tweet - Premium Tweet Screenshot Mockup Maker",
  description: "Create pixel-perfect Twitter/X post mockups on customizable backdrops in seconds.",
  alternates: {
    canonical: "https://makemytweet.com",
  },
  openGraph: {
    title: "Make My Tweet - Premium Tweet Screenshot Mockup Maker",
    description: "Create pixel-perfect Twitter/X post mockups on customizable backdrops in seconds.",
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
    title: "Make My Tweet - Premium Tweet Screenshot Mockup Maker",
    description: "Create pixel-perfect Twitter/X post mockups on customizable backdrops in seconds.",
    images: ["https://makemytweet.com/og-image.png"],
  },
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
      </body>
    </html>
  );
}
