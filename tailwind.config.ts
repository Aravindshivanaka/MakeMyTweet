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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
