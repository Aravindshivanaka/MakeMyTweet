# Tweet SS Generator

## Tweet/X Card Generator

### Product Requirements Document (PRD)

### Version 2.0 — Free Forever Edition

---

# 1. Executive Summary

Tweet SS Generator is a lightweight browser-based Tweet/X Card Generator that enables creators, marketers, founders, students, and social media users to generate premium-quality Twitter/X style post graphics within seconds.

The platform is designed around three principles:

* Completely Free Forever
* No Login or Signup
* 100% Client-Side Processing

Users can create professional social media cards, customize every visual element, preview changes instantly, and export high-quality PNG images directly from their browser.

No user data is stored.

No images are uploaded to servers.

No payment system exists.

No watermark is added.

---

# 2. Product Vision

Create the fastest and simplest Tweet/X mockup generator on the internet while maintaining premium visual quality and excellent performance on both desktop and mobile devices.

Target completion time:

Less than 30 seconds from page load to PNG export.

---

# 3. Product Goals

Users should be able to:

* Create Tweet/X style graphics
* Upload and crop profile pictures
* Select X logo or Twitter Bird logo
* Customize profile information
* Add tweet content in any supported language
* Enable or disable engagement metrics
* Customize likes, comments, retweets, and views
* Select preset backgrounds
* Upload custom backgrounds
* Export high-quality PNG images
* Use the application without creating an account

---

# 4. Core Principles

## Free Forever

No subscriptions.

No premium plans.

No hidden paywalls.

No upgrade buttons.

## Privacy First

All rendering happens inside the browser.

Nothing is sent to a server.

## Mobile First

Must work flawlessly on:

* Android
* iPhone
* Tablets

## Lightweight

Optimized for:

* Low bandwidth users
* 3G connections
* Budget smartphones

---

# 5. Technology Stack

## Frontend

### Next.js 14

Purpose:
Application framework.

### TypeScript

Purpose:
Type safety and maintainability.

### Tailwind CSS

Purpose:
UI styling.

### shadcn/ui

Purpose:
Reusable components.

### html-to-image

Purpose:
Client-side PNG generation.

### react-image-crop

Purpose:
Profile photo cropper.

### Zustand

Purpose:
Lightweight state management.

### React Hook Form

Purpose:
Form handling.

---

# 6. Architecture

## Rendering Model

Client-side rendering only.

## Backend

Not required.

## Database

Not required.

## Authentication

Not required.

## Storage

Not required.

---

# 7. Supported Languages

The platform must support:

* English
* Hindi
* Telugu
* Tamil
* Kannada
* Malayalam
* Bengali
* Gujarati
* Punjabi
* Marathi
* Odia
* Urdu

---

# 8. Fonts

Primary Font:

Inter

Regional Fonts:

* Noto Sans
* Noto Sans Telugu
* Noto Sans Tamil
* Noto Sans Kannada
* Noto Sans Malayalam
* Noto Sans Bengali
* Noto Sans Gujarati
* Noto Sans Gurmukhi
* Noto Sans Devanagari
* Noto Nastaliq Urdu

All exported PNGs must preserve regional language rendering.

---

# 9. Design System

## Color Tokens

### Primary Background

#080F1E

Usage:

Main application background.

### Panel Background

#0D1425

Usage:

Control panel background.

### Input Background

#111827

Usage:

Inputs and dropdowns.

### Border Color

#1E2D4A

Usage:

Dividers and panel borders.

### Primary Accent

#1D6FEB

Usage:

Buttons, highlights, active states.

### Rich Blue Frame

#0F2356

Usage:

Tweet card frame area.

### White

#FFFFFF

Usage:

Tweet card background.

### Primary Text

#0A0A0A

Usage:

Tweet content.

### Secondary Text

#64748B

Usage:

Timestamps and metadata.

### Success

#22C55E

### Error

#EF4444

---

# 10. Authentication

Completely removed.

No:

* Login
* Signup
* Accounts
* User Profiles
* Session Management

Users can use all features immediately after opening the website.

---

# 11. Layout Structure

## Desktop

Two-column layout.

### Left Panel

Width: 420px

Contains:

* Profile settings
* Tweet content settings
* Logo selector
* Engagement controls
* Background controls
* Export controls

### Right Panel

Contains:

* Live preview
* Download button

---

## Mobile

Single-column layout.

Order:

1. Live Preview
2. Profile Section
3. Tweet Section
4. Engagement Section
5. Background Section
6. Export Section
7. Download Button

---

# 12. Profile Photo Cropper

Library:

react-image-crop

Requirements:

* Circular crop
* Mobile friendly
* Lightweight
* Zoom support
* Drag support
* Reposition support

Supported formats:

* PNG
* JPG
* WEBP

Maximum size:

5 MB

Processing:

100% local.

---

# 13. Profile Information

## Display Name

Supports all languages.

## Username

Rules:

* Auto lowercase
* No spaces
* Supports underscore
* Supports hyphen

Example:

@Tweet_SS_Generator

---

# 14. Tweet Text

Features:

* Auto growing textarea
* Emoji support
* Character counter
* Multi-language support

Character Limit:

280

Warning starts at:

270

Error Color:

#EF4444

---

# 15. Platform Logo Selector

## Dropdown Component

Label:

Platform Logo

Options:

### Option 1

Twitter Bird Logo

### Option 2

X Logo

Default:

X Logo

---

# 16. Logo Placement Rules

Selected logo must appear in:

### Position 1

Top-right corner inside tweet card.

Mandatory.

### Position 2

Outside platform badge.

Optional.

Controlled by:

Show Platform Badge Toggle

ON/OFF

---

# 17. Tweet Card Design

## Shape

Rounded corners.

Border Radius:

20px

## Background

White

#FFFFFF

## Border

1px solid #E2E8F0

## Shadow

0px 20px 60px rgba(0,0,0,0.25)

---

# 18. Rich Blue Frame

New Requirement

Every tweet card must sit inside a premium blue frame.

Color:

#0F2356

Specifications:

* 24px padding
* Rounded corners
* Visible in exports
* Consistent across all formats

Layout:

Background Layer

→ Rich Blue Frame

→ Tweet Card

---

# 19. Engagement Metrics

## Master Toggle

Label:

Show Engagement Metrics

Default:

ON

---

## When Enabled

Show:

* Comments
* Retweets
* Likes
* Views

---

## When Disabled

Entire engagement section disappears.

---

# 20. Editable Metrics

Each metric contains:

* Label
* Pencil icon
* Input field

Accepted formats:

* 100
* 1000
* 1.2K
* 5.4M
* 2.1B

Live preview updates instantly.

---

# 21. Timestamp Controls

Fields:

* Date
* Hour
* Minute
* AM/PM

Output example:

9:41 AM · May 20, 2025

---

# 22. Background System

## Solid Backgrounds

Keep existing preset backgrounds.

---

## Custom Background Upload

Supported:

* JPG
* PNG
* WEBP

Processing:

Local only.

No upload to server.

---

## Image Behavior

CSS:

background-size: cover

background-position: center

background-repeat: no-repeat

---

# 23. Export Formats

## Story

1080 × 1920

## Square

1080 × 1080

## Landscape

1920 × 1080

---

# 24. Export Engine

Library:

html-to-image

Settings:

pixelRatio: 3

Output:

PNG

Filename:

Tweet_SS_Generator-export.png

---

# 25. Removed Features

The following features must not exist anywhere in the product:

* Razorpay
* Stripe
* Premium Plans
* Subscriptions
* Upgrade Buttons
* Watermarks
* User Accounts
* Login
* Signup
* Supabase Auth
* Pricing Pages
* Payment Pages
* Premium Export Modes

---

# 26. Performance Requirements

Initial Load:

Less than 2 seconds

Input Response:

Less than 100ms

Export Speed:

Less than 3 seconds

Bundle Size Goal:

Under 300KB initial JS

---

# 27. Browser Support

* Chrome
* Firefox
* Edge
* Safari
* Samsung Browser

---

# 28. Accessibility

Must support:

* Keyboard navigation
* ARIA labels
* Screen readers
* Visible focus states

---

# 29. Development Phases

## Phase 1

Foundation

* Next.js Setup
* Tailwind Setup
* Theme Setup
* Font Setup

## Phase 2

UI Components

* Forms
* Dropdowns
* Toggles
* Inputs

## Phase 3

Tweet Card

* Rich Blue Frame
* Rounded Card
* Logo Selector
* Metrics Controls

## Phase 4

Background System

* Presets
* Image Upload

## Phase 5

Export Engine

* html-to-image Integration

## Phase 6

QA & Deployment

* Cross-browser Testing
* Mobile Testing
* Production Deployment

---

# 30. Future Roadmap

Version 2

* LinkedIn Post Generator
* Instagram Quote Cards
* Threads Cards

Version 3

* Multiple Templates
* Design Presets

Tweet SS Generator will remain free forever and continue operating without subscriptions, paywalls, or mandatory user accounts.

---

End of Document

Tweet SS Generator PRD v2.0
Free Forever Edition
