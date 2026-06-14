import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Design system custom tokens
        "primary-bg": "var(--primary-bg)",
        "panel-bg": "var(--panel-bg)",
        "input-bg": "var(--input-bg)",
        "primary-border": "var(--border-color)",
        "primary-accent": "var(--primary-accent)",
        "rich-blue-frame": "var(--rich-blue-frame)",
        white: "var(--white)",
        "tweet-primary-text": "var(--tweet-primary-text)",
        "tweet-secondary-text": "var(--tweet-secondary-text)",
        success: "var(--success)",
        error: "var(--error)",

        // shadcn/ui semantic colors mapping to CSS variables
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        // Custom Fonts
        sans: ["var(--font-inter)", "var(--font-noto-sans)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        telugu: ["var(--font-noto-telugu)", "sans-serif"],
        tamil: ["var(--font-noto-tamil)", "sans-serif"],
        kannada: ["var(--font-noto-kannada)", "sans-serif"],
        malayalam: ["var(--font-noto-malayalam)", "sans-serif"],
        bengali: ["var(--font-noto-bengali)", "sans-serif"],
        gujarati: ["var(--font-noto-gujarati)", "sans-serif"],
        gurmukhi: ["var(--font-noto-gurmukhi)", "sans-serif"],
        devanagari: ["var(--font-noto-devanagari)", "sans-serif"],
        urdu: ["var(--font-noto-urdu)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
