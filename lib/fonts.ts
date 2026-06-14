import {
  Inter,
  Noto_Sans,
  Noto_Sans_Telugu,
  Noto_Sans_Tamil,
  Noto_Sans_Kannada,
  Noto_Sans_Malayalam,
  Noto_Sans_Bengali,
  Noto_Sans_Gujarati,
  Noto_Sans_Gurmukhi,
  Noto_Sans_Devanagari,
  Noto_Nastaliq_Urdu,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const notoSansTelugu = Noto_Sans_Telugu({
  weight: ["400", "700"],
  variable: "--font-noto-telugu",
  display: "swap",
  preload: false,
});

export const notoSansTamil = Noto_Sans_Tamil({
  weight: ["400", "700"],
  variable: "--font-noto-tamil",
  display: "swap",
  preload: false,
});

export const notoSansKannada = Noto_Sans_Kannada({
  weight: ["400", "700"],
  variable: "--font-noto-kannada",
  display: "swap",
  preload: false,
});

export const notoSansMalayalam = Noto_Sans_Malayalam({
  weight: ["400", "700"],
  variable: "--font-noto-malayalam",
  display: "swap",
  preload: false,
});

export const notoSansBengali = Noto_Sans_Bengali({
  weight: ["400", "700"],
  variable: "--font-noto-bengali",
  display: "swap",
  preload: false,
});

export const notoSansGujarati = Noto_Sans_Gujarati({
  weight: ["400", "700"],
  variable: "--font-noto-gujarati",
  display: "swap",
  preload: false,
});

export const notoSansGurmukhi = Noto_Sans_Gurmukhi({
  weight: ["400", "700"],
  variable: "--font-noto-gurmukhi",
  display: "swap",
  preload: false,
});

export const notoSansDevanagari = Noto_Sans_Devanagari({
  weight: ["400", "700"],
  variable: "--font-noto-devanagari",
  display: "swap",
  preload: false,
});

export const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-noto-urdu",
  display: "swap",
  preload: false,
});
