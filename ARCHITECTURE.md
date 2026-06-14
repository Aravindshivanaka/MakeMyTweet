# Tweet_SS_Generator - System Architecture & Foundation Layer

This document describes the design decisions, folder structure, state management, and styling strategy for **Tweet_SS_Generator**.

---

## 1. Folder Structure

We use a modular and scalable folder layout directly at the root, facilitating separation of concerns and features:

* **/app**: Next.js 14 App Router layout templates, entry points, pages, and metadata.
* **/components**: Shared across the application.
  - `/components/layout`: App shell structural wrappers (`AppShell`, `Sidebar`, `PreviewWorkspace`, `SectionCard`).
  - `/components/ui`: UI components (such as buttons, inputs, toggles, form fields) from `shadcn/ui`.
* **/features**: Feature modules (e.g. `/features/tweet-generator`). Each feature module houses its own components, validators, assets, and hook structures.
* **/store**: Contains State Store files (Zustand configuration, slice creations, and types definition).
* **/hooks**: Application-wide custom React hooks (e.g. form validators, device detectors, export engines).
* **/lib**: Shared configurations (e.g. fonts loader `lib/fonts.ts`, shadcn utility helper `lib/utils.ts`).
* **/types**: TypeScript interfaces and types.
* **/styles**: Global and theme stylesheet configurations (`globals.css`).

---

## 2. Styling Strategy

### CSS Variables & Design Tokens
We define our design system color tokens as CSS variables in `styles/globals.css` and map them to Tailwind custom utility names in `tailwind.config.ts`.

Tokens configured:
* **Primary Background**: `#080F1E` -> `bg-[#080F1E]` / `bg-primary-bg`
* **Panel Background**: `#0D1425` -> `bg-[#0D1425]` / `bg-panel-bg`
* **Input Background**: `#111827` -> `bg-[#111827]` / `bg-input-bg`
* **Border Color**: `#1E2D4A` -> `border-[#1E2D4A]` / `border-primary-border`
* **Primary Accent**: `#1D6FEB` -> `bg-[#1D6FEB]` / `text-primary-accent`

### Fonts Configuration
Primary font (`Inter`) and the Google Noto Sans regional language fonts are configured via `next/font/google` in `lib/fonts.ts`. Regional scripts load on-demand (`preload: false`) to minimize bundling weight. They are mapped to CSS variables injected in `app/layout.tsx`.

---

## 3. State Management (Zustand Slices)

State management is handled by a unified Zustand store (`store/use-app-store.ts`) constructed using **slices**.

Slices configured:
* **profile**: Avatar URL, display name, handle username, verification status.
* **tweet**: Post text content, font size, custom timestamp settings, logo visibility.
* **metrics**: Quantitative engagement numbers (replies, retweets, likes, views).
* **background**: Backdrop presets and custom background image URLs.
* **export**: Aspect ratios (story, square, landscape), rendering state, output options.

This modular setup isolates state mutations to individual domain layers while exposing a combined selector hook (`useAppStore()`) for React components.

---

## 4. Form Validation & Sync (React Hook Form + Zod)

To support real-time preview updates (under 100ms response time), we combine **React Hook Form** and **Zod** schema validation:

1. **Schema Definition (`features/tweet-generator/schema.ts`)**: Defines constraints (e.g., character limits, handles, verified states) with Zod validation.
2. **Synchronization Hook (`hooks/use-tweet-generator-form.ts`)**: Initializes `useForm` with the Zod schema and sets up subscriptions (`form.watch`) to synchronize valid input edits directly to the Zustand store in real-time.
3. **Data Sanitation**: The hook automatically sanitizes username handles by removing spaces and unsupported characters, and converting to lowercase before updates are saved.
