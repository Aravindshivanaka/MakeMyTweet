//123
CanvasStudio
Social Media Canvas Generator
Product Requirements Document  |  Version 1.0  |  Confidential
Field	Detail
Document Version	v1.0 — Initial Release
Product Name	CanvasStudio
Product Type	Micro-SaaS Web Application
Target Launch	MVP — Phase 1 (Free Tier)
Primary Market	India + Global (English & Regional Languages)
Monetisation	Freemium — Payments added post-MVP validation
Infrastructure Cost	₹0 / $0 per month (client-side rendering)

 
1. Executive Summary
CanvasStudio is a zero-burn-cost Micro-SaaS platform that allows content creators, digital marketers, and brands to generate premium-quality social media graphic cards — specifically pixel-perfect Twitter/X post mockups — superimposed on beautiful custom backgrounds, in under 30 seconds.

The entire image generation pipeline runs inside the user's browser using client-side JavaScript (html-to-image library), eliminating server rendering costs entirely. This gives CanvasStudio a structural cost advantage: ₹0 per image generated, regardless of scale.

Phase 1 launches as a fully free product with a subtle watermark on exports. Payments (Razorpay for India, Stripe for global) are added only after real user demand validates the premium tier — a capital-efficient, zero-risk go-to-market strategy.

2. Problem & Solution
2.1 The Problem
•	Content creators waste 1–3 hours per post using Canva or Figma to make a single quote card look aesthetic and shareable
•	No existing tool offers a dedicated, fast, one-page experience for Twitter/X post mockup generation
•	Regional language creators (Telugu, Hindi, Tamil, Kannada, Marathi, Bengali, Malayalam, Gujarati, Punjabi, Odia) face broken character rendering in most Western tools
•	Professional-looking output typically requires design skills or expensive subscriptions

2.2 Our Solution
•	Single-page web app: fill in your post details, see a live preview, click download — done in under 30 seconds
•	First-class Indian regional language support via Google Fonts (Noto Sans family)
•	Zero-cost client-side PNG export at high resolution
•	Premium dark UI that looks like a paid product from first load, building instant trust

3. Target Users
User Type	Use Case	Platform They Share On
LinkedIn Thought Leaders	Turn tweets into shareable quote cards	LinkedIn
Instagram Content Creators	Repurpose viral tweets as story/post graphics	Instagram
Twitter/X Influencers	Archive and beautify their own best tweets	Twitter/X
Regional Language Creators	Generate cards with Telugu, Hindi, Tamil etc.	All platforms
Marketing Agencies	Batch-create multiple client cards (future)	All platforms
Startup Founders	Share product announcements as premium visuals	LinkedIn, Twitter

 
4. Technology Stack
4.1 Frontend
Technology	Version	Purpose	Why Chosen
Next.js	14 (App Router)	Core React framework	Handles frontend + API routes in one repo; perfect Vercel integration
TypeScript	5.x	Type-safe JavaScript	Prevents runtime bugs; makes codebase scalable and maintainable
Tailwind CSS	3.x	Utility-first styling	Build dark navy UI fast without custom CSS files
shadcn/ui	Latest	Pre-built dark components	Premium inputs, dropdowns, sliders out of the box; saves weeks of styling
html-to-image	Latest	Browser-side PNG export	Captures DOM as crisp high-res PNG entirely in user's browser; ₹0 server cost
react-image-crop	Latest	Profile photo circular cropper	Lightweight, mobile-friendly, no server upload needed
Google Fonts	Inter + Noto Sans	Typography & regional languages	Noto Sans covers all Indian scripts: Telugu, Hindi, Tamil, Kannada etc.

4.2 Backend
Technology	Version	Purpose	Why Chosen
Supabase	Latest	Auth + Database + Storage	Free tier covers 50,000 MAU; no server to manage; built-in auth
Next.js API Routes	14	Lightweight backend endpoints	Rate limiting, webhook handlers; no separate backend server needed
Razorpay	Latest	India payments (Phase 2)	UPI, cards, net banking; best for Indian market
Stripe	Latest	Global payments (Phase 2)	International cards; added only after MVP validation

4.3 DevOps & Deployment
Technology	Purpose	Cost
Vercel	Hosting + CDN + Auto HTTPS + Custom domain	Free tier — sufficient for full MVP
GitHub	Version control + CI/CD pipeline	Free private repository
Supabase Free Tier	Database + Auth (50K MAU limit)	₹0 until scale
Google Fonts CDN	Font delivery for all regional scripts	Always free

 
5. Colour System & Design Tokens
The entire UI uses a restrained two-colour system: deep navy as the base and cobalt blue as the single accent. This avoids the AI-generated purple-neon-glow aesthetic and instead communicates premium, funded-startup quality — similar to Linear.app and Stripe Dashboard.

Colour Swatch	Token Name	Usage / Purpose
#080F1E	Navy Black — Primary Background	Page background, main canvas background behind tweet card
#0D1425	Navy Dark — Panel Background	Left control panel, section cards, input container backgrounds
#111827	Navy Input — Input Background	Individual input fields, textarea, dropdown backgrounds
#1E2D4A	Navy Border — Subtle Borders	Hairline borders on cards, dividers, inactive input borders
#1D6FEB	Cobalt Blue — Primary Accent	CTA button, active input focus border, selected backdrop ring, logo accent, links
#0F2356	Royal Blue — Card Frame	Background frame/mat around the tweet card (replaced by user custom image)
#FFFFFF	Pure White — Tweet Card	Tweet card background — always pure white, no blur or glass effect
#F8FAFC	Off White — Card Internals	Subtle backgrounds inside tweet card (hover states, metric row)
#0A0A0A	Near Black — Tweet Text	Main tweet body text inside the white card
#64748B	Slate Gray — Secondary Text	Timestamps, metric labels, placeholder text, footer trust badges
#E2E8F0	Light Border — Card Border	1px border around the white tweet card
#1D9BF0	Twitter Blue — Verified Badge	The blue verified checkmark colour inside tweet card
#22C55E	Success Green — Free Badge	Free tier indicator, success states
#EF4444	Alert Red — Error States	Form validation errors, character limit exceeded warnings

 
6. UI Layout & Screen Architecture
6.1 Desktop Layout (16:9 — 1920x1080)
The desktop interface is a fixed split-screen workspace divided into two panels separated by a 1px cobalt blue hairline divider.

Zone	Width	Content
Top Navigation Bar	100% full width	Logo | Nav links | Upgrade to Pro button | Sign In
Left Panel — Design Controls	~420px fixed	All input controls, settings, backdrop selector
Right Panel — Live Preview Canvas	Remaining width	Live tweet card preview + Download button
Bottom Footer Strip	100% full width	5 trust badges: Trusted by creators | Rating | Secure | No Watermark (Pro) | 4K Export

6.2 Mobile Layout (9:16 — 375px width)
On mobile, the split-screen collapses into a single-column vertical scroll layout. The live preview card appears at the top so users see their output first, followed by all control sections as stacked dark cards below.

Section Order	Content
1 — Top Bar	Hamburger menu | CanvasStudio logo | PRO badge | User avatar
2 — Live Preview Card	Tweet card preview with royal blue frame background
3 — Profile Card	Photo upload + Display Name + Username + Tweet text
4 — Engagement Numbers Card	2x2 grid: Replies | Retweets | Likes | Views
5 — Export Format Card	Dropdown: 9:16 Story / 16:9 Landscape / 1:1 Square
6 — Font Size Card	Cobalt slider + numeric display
7 — Backdrop Card	Horizontal scrollable preset thumbnails + Custom Upload
8 — Sticky Bottom CTA	Full-width Generate & Download PNG button

 
7. Feature Specifications
7.1 Top Navigation Bar
•	Logo: 'CanvasStudio' in white bold + cobalt blue accent on 'Studio' word
•	Centre nav links: Dashboard | Templates | Pricing (plain white, medium weight)
•	Right side: solid cobalt blue 'Upgrade to Pro' pill button with diamond ◆ icon
•	Right side: minimal 'Sign In' text button
•	Background: deep navy #080F1E with subtle 1px bottom border #1E2D4A

7.2 Profile Photo Upload & Circular Cropper
•	Drag-and-drop zone OR click-to-browse file picker
•	Accepts: JPG, PNG, WEBP — Maximum file size: 5MB
•	On upload: opens react-image-crop in circular crop mode
•	User can drag, zoom, and center their face inside the circular crop area
•	Cropped image stored as Base64 data URL in React state — never sent to server
•	Circular avatar preview with thin cobalt blue ring border shown in left panel
•	Camera icon overlay on avatar for re-upload

7.3 Display Name Field
•	Free text input — accepts any language including Telugu, Hindi, Tamil, Kannada, Marathi, Bengali, Malayalam, Gujarati, Punjabi, Odia
•	Font: Noto Sans (loaded via Google Fonts) — renders all Indian scripts without broken characters
•	Active state: thin cobalt blue bottom border glow only
•	Placeholder text: 'Your Display Name'

7.4 Username / Handle Field
•	@ prefix locked in cobalt blue — user cannot delete or modify it
•	Auto-converts all input to lowercase
•	Strips spaces automatically — no spaces allowed
•	Strips special characters except underscore _ and hyphen -
•	Placeholder: 'your_handle'

7.5 Tweet Text Textarea
•	Multi-line textarea with auto-height expansion
•	Live character counter displayed bottom-right: '91 / 280' format
•	Counter turns red (#EF4444) when over 270 characters (warning zone)
•	Supports all Indian regional language scripts via Noto Sans font
•	Supports emoji input natively
•	Text wraps automatically — never clips outside the tweet card

7.6 Font Size Slider
•	Range: 14px minimum to 28px maximum
•	Default value: 18px
•	Cobalt blue track with white circle thumb labelled 'Aa'
•	Numeric display box on the right shows current value
•	Instantly updates tweet card text size in real-time on change

7.7 Engagement Metrics — Editable Input Fields
All four metric fields are fully editable by the user. Each field accepts numbers and alphanumeric shorthand (e.g. 18.2K, 5.4M, 1.2B).

Field Label	Icon	Accepts	Example Value
Replies	Comment bubble 💬	Numbers + K/M shorthand	2.3K
Retweets	Retweet arrows 🔁	Numbers + K/M shorthand	12K
Likes	Heart ♥	Numbers + K/M shorthand	98K
Views	Bar chart 📊	Numbers + K/M shorthand	4.1M

•	Desktop: 4 fields in a single horizontal row
•	Mobile: 4 fields in a 2x2 grid layout
•	Each field has its icon top-left + gray label — cobalt blue active border on focus

7.8 Date & Time Picker
The timestamp shown on the tweet card is fully customisable via four separate dropdown selectors:

Control	Type	Options / Range	Default
Date	Calendar date picker or dropdown	Any date selectable	Today's date
Hour	Dropdown	01 through 12	9
Minute	Dropdown	00 through 59 (all values)	41
Period	Toggle or Dropdown	AM / PM	AM

•	Output format on tweet card: '9:41 AM · May 20, 2024' — matches native Twitter timestamp style
•	All four controls use dark #111827 background with cobalt active border

7.9 Platform Logo Selector
This control manages which platform logo appears in both positions simultaneously:

Position	Location	Behaviour
Inside card — top right	Inside the white tweet card	Mandatory — always visible
Outside card — top left	Above the tweet card in the backdrop area	Optional — controlled by toggle switch

•	Logo selector: dropdown with two visual options displayed as logo thumbnails
•	Option 1: Old Twitter Bird logo (blue bird icon)
•	Option 2: New X logo (black X mark)
•	Whichever is selected updates BOTH positions simultaneously in real-time
•	Outside logo toggle: 'Show Platform Badge' ON/OFF switch — default ON
•	When toggle OFF: outside top-left logo is hidden completely; inside card logo remains
•	Rationale: power users wanting a clean minimal card can hide the outside badge; beginners keep it for full Twitter feel

7.10 Tweet Card Visual Specifications
The tweet card must exactly replicate the native Twitter/X post card appearance. Key visual rules:

•	Background: pure white #FFFFFF — no glassmorphism, no blur, no frosted texture on the card itself
•	Border radius: 16px rounded corners — NOT sharp rectangle
•	Border: 1px solid #E2E8F0 (light gray) around the entire card
•	Drop shadow: 0px 20px 60px rgba(0,0,0,0.25) beneath the card — gives floating effect
•	Card frame/mat: royal blue #0F2356 surrounds the card as the backdrop — replaced by user's custom image when uploaded
•	Card internal padding: 20px all sides

Card internal layout (top to bottom):
◦	Row 1: Circular avatar (48px) | Display name bold + verified badge | @handle gray | X/Twitter logo top-right
◦	Row 2: Tweet body text — black #0A0A0A, Inter/Noto Sans font, user-controlled size 14–28px
◦	Row 3: Timestamp — gray #64748B, format: '9:41 AM · May 20, 2024'
◦	Divider: 1px horizontal line #E2E8F0
◦	Row 4: 5 metric icons in a row — Replies | Retweets | Likes | Views | Share — all editable values displayed

7.11 Export Format Selector
Users can choose the aspect ratio of their exported image via a dropdown. This changes the shape of the preview frame and the final downloaded PNG.

Option	Ratio	Dimensions	Best For
Vertical Story	9:16	1080 x 1920px	Instagram Stories, WhatsApp Status, YouTube Shorts thumbnail
Landscape	16:9	1920 x 1080px	Twitter/X header, LinkedIn post, YouTube community
Square Post	1:1	1080 x 1080px	Instagram feed post, Facebook post, Threads

•	Dropdown placement: in left control panel, labelled 'Export Format'
•	On selection change: the right panel preview frame immediately reflows to the selected aspect ratio
•	The tweet card always stays centered inside the new frame

7.12 Backdrop / Background Selector
•	6 pre-built aesthetic gradient/photo thumbnail presets shown in a horizontal scrollable row
•	Suggested preset themes: Deep Space (dark navy stars), Aurora Green, Purple Haze, Pink Sunset, Golden Hour, Pure Navy solid
•	One additional card with dashed cobalt border, camera icon, and '+ Custom' label
•	Custom card opens device file picker — user selects any photo from their device
•	Custom photo stored as Base64 in React state — never uploaded to server
•	Selected backdrop fills the royal blue card frame area behind the tweet card
•	CSS applied: background-size: cover; background-position: center — auto-scales proportionally
•	Selected preset highlighted with solid cobalt blue border

7.13 Generate & Download PNG Button
•	Full-width button at the bottom of the right panel (desktop) / sticky bottom (mobile)
•	Colour: solid cobalt blue #1D6FEB background, white bold text
•	Label: 'Generate & Download PNG' with white download arrow icon left + sparkle ✨ icons right
•	On click: html-to-image captures the preview DOM element at pixelRatio: 3 for crisp 4K-quality export
•	Download triggers automatically as a PNG file named 'canvasstudio-export.png'
•	Loading state: button shows spinner + 'Generating...' text during processing
•	Free tier: watermark text 'CanvasStudio.app' embedded at bottom-center of exported image
•	Premium tier: watermark removed; pixelRatio bumped to 4 for ultra-HD

 
8. Indian Regional Language Support
CanvasStudio is built with first-class support for all major Indian regional language scripts. This is a core differentiator — most Western design tools render Indian scripts as broken boxes or garbled text.

8.1 Implementation
•	Google Fonts loaded globally: Inter (Latin/English) + Noto Sans (all Indian scripts)
•	Noto Sans packages loaded: Noto Sans Devanagari, Noto Sans Telugu, Noto Sans Tamil, Noto Sans Kannada, Noto Sans Malayalam, Noto Sans Bengali, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Odia
•	Font-face declarations in global CSS with unicode-range targeting to prevent unnecessary font loading on non-regional content
•	CSS font-family stack: 'Inter', 'Noto Sans', 'Noto Sans Devanagari', 'Noto Sans Telugu', 'Noto Sans Tamil', sans-serif
•	html-to-image captures fonts at render time — exported PNG preserves all regional text correctly

8.2 Supported Scripts
Language	Script	States / Users	Google Font Package
Hindi	Devanagari	Uttar Pradesh, Delhi, Maharashtra, MP, Rajasthan	Noto Sans Devanagari
Telugu	Telugu	Andhra Pradesh, Telangana	Noto Sans Telugu
Tamil	Tamil	Tamil Nadu, Sri Lanka	Noto Sans Tamil
Kannada	Kannada	Karnataka	Noto Sans Kannada
Malayalam	Malayalam	Kerala	Noto Sans Malayalam
Bengali	Bengali	West Bengal, Bangladesh	Noto Sans Bengali
Gujarati	Gujarati	Gujarat	Noto Sans Gujarati
Punjabi	Gurmukhi	Punjab	Noto Sans Gurmukhi
Marathi	Devanagari	Maharashtra	Noto Sans Devanagari
Odia	Odia	Odisha	Noto Sans Odia
Urdu	Arabic/Nastaliq	Multiple states	Noto Nastaliq Urdu

 
9. Monetisation Strategy
9.1 Phase 1 — Free MVP (Launch Now)
•	All users access all core features at zero cost
•	Exported PNG includes a subtle 'CanvasStudio.app' watermark at bottom-center
•	Watermark acts as viral marketing — every shared image is a free brand impression
•	No payment gateway, no Stripe/Razorpay integration, no user account required for basic use
•	Infrastructure cost: ₹0/month — Vercel free + Supabase free + client-side rendering

9.2 Phase 2 — Premium Tier (Add When Users Ask)
Payment integration is added ONLY when organic demand signals are clear (users asking how to remove watermark, requesting higher quality, etc.). Target signal: 100+ users asking for premium.

Feature	Free Tier	Premium Tier
Image downloads	Unlimited	Unlimited
Export quality	Standard (pixelRatio: 2)	4K Ultra HD (pixelRatio: 4)
Watermark	CanvasStudio.app watermark	No watermark
Backdrop presets	6 standard presets	20+ premium presets + 3D effects
Custom backgrounds	1 upload per session	Unlimited saved backgrounds
Templates	Twitter/X only	Twitter, LinkedIn, Instagram, Threads
Price	₹0 forever	₹299/month or ₹2999 lifetime deal
Payment methods	N/A	Razorpay (India) + Stripe (Global)

 
10. Development Phases & Task List
Phase 1 — Foundation (Week 1)
•	Task 1.1: Initialise Next.js 14 project with TypeScript and Tailwind CSS
•	Task 1.2: Configure shadcn/ui with dark theme preset
•	Task 1.3: Set up Google Fonts in next/font — Inter + all Noto Sans regional packages
•	Task 1.4: Define global CSS colour tokens (navy palette + cobalt accent)
•	Task 1.5: Build top navigation bar component with logo, nav links, Pro button

Phase 2 — Core UI (Week 1–2)
•	Task 2.1: Build desktop split-screen layout — left control panel + right preview canvas
•	Task 2.2: Build mobile single-column stacked layout with sticky bottom CTA
•	Task 2.3: Implement all left panel input controls (name, handle, textarea, slider, metrics, date/time)
•	Task 2.4: Build logo selector dropdown with Twitter bird and X logo options
•	Task 2.5: Build platform badge toggle switch
•	Task 2.6: Build export format dropdown (9:16, 16:9, 1:1) with live preview reflow
•	Task 2.7: Build backdrop selector with 6 presets + custom upload card

Phase 3 — Tweet Card & Live Preview (Week 2)
•	Task 3.1: Build pixel-perfect white tweet card component — 16px border-radius, 1px gray border, drop shadow
•	Task 3.2: Implement real-time two-way data binding — every input change instantly updates card preview
•	Task 3.3: Implement circular avatar with react-image-crop and Base64 storage
•	Task 3.4: Implement verified badge toggle and logo swap (Twitter bird vs X)
•	Task 3.5: Implement outside platform badge with toggle show/hide
•	Task 3.6: Implement royal blue card frame with custom backdrop image overlay
•	Task 3.7: Test all Indian regional language scripts in tweet card text area

Phase 4 — Export Engine (Week 2–3)
•	Task 4.1: Integrate html-to-image library
•	Task 4.2: Hook Generate & Download button to html-to-image capture function
•	Task 4.3: Set pixelRatio: 3 for high-res export
•	Task 4.4: Implement free tier watermark overlay on exported PNG
•	Task 4.5: Test PNG download on Chrome, Safari (iOS), Firefox, Samsung Browser
•	Task 4.6: Test 9:16, 16:9, and 1:1 export dimensions

Phase 5 — Deploy (Week 3)
•	Task 5.1: Push repository to GitHub
•	Task 5.2: Connect GitHub repo to Vercel — auto-deploy on push
•	Task 5.3: Configure custom domain on Vercel
•	Task 5.4: Set up Supabase project (for future auth — not required for MVP)
•	Task 5.5: Final cross-device QA testing
•	Task 5.6: Launch — share on LinkedIn, Twitter, Product Hunt, IndieHackers

 
11. Future Roadmap
Phase	Feature	Target
v1.1	User accounts via Supabase Auth (Google login)	Post-launch Month 1
v1.2	Premium tier + Razorpay payment integration	When 100 users request watermark removal
v1.3	Stripe global payments	When international traffic grows
v2.0	LinkedIn post card template	Month 2-3
v2.0	Instagram comment quote card template	Month 2-3
v2.0	Threads post card template	Month 3
v2.1	My Designs — save and revisit past cards	Month 3-4
v3.0	Batch CSV automation — upload 100 rows, download 100 PNGs	Month 6
v3.1	Developer API — programmatic card generation	Month 8-12
v4.0	White-label agency tier	Year 2

 
12. Non-Functional Requirements
Requirement	Specification
Performance	Live preview updates in under 100ms on any input change
Export Speed	PNG generation completes in under 3 seconds on mid-range device
Mobile Responsiveness	Fully functional on screens from 375px width upward
Browser Support	Chrome 90+, Safari 14+, Firefox 88+, Samsung Browser 14+, Edge 90+
Accessibility	Keyboard navigation, visible focus states, ARIA labels on all inputs
Font Loading	All Noto Sans regional packages preloaded — zero broken characters
Data Privacy	All user data (photos, text) stays in browser memory — never sent to server
Security	No server-side processing of user images — zero data exposure risk
Uptime	Vercel CDN guarantees 99.99% uptime on free tier
SEO	Next.js static generation for landing page — fully crawlable

13. Known Constraints & Mitigations
Constraint	Risk	Mitigation
html-to-image on iOS Safari	Occasional rendering bugs on older iOS versions	Test on iOS 14, 15, 16. Add fallback message for unsupported browsers
Custom fonts in PNG export	Google Fonts may not embed in html-to-image capture	Pre-load fonts with document.fonts.ready promise before capture
Large backdrop images	Slow Base64 encoding on low-end mobile devices	Compress image client-side before Base64 conversion using canvas API
Twitter/X IP concerns	Platform may object to mockup tool mimicking their UI	Add clear disclaimer: 'For content creation purposes only — not affiliated with X Corp'
Supabase free tier limits	50,000 MAU limit on free tier	Monitor usage; upgrade to Pro (₹20/month) when approaching limit

14. Success Metrics (Post-Launch)
Metric	Target (Month 1)	Target (Month 3)
Unique visitors	500+	5,000+
Images generated	1,000+	20,000+
Users asking to remove watermark	50+	200+ (payment trigger)
Social shares of watermarked cards	100+	2,000+
Bounce rate	Under 60%	Under 45%
Regional language users	20%+ of total	35%+ of total

 
End of Document
CanvasStudio PRD v1.0  —  Confidential  —  All rights reserved
