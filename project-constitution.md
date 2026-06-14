# Tweet_SS_Generator Project Constitution

## Project Overview

Tweet_SS_Generator is a browser-based Tweet/X Card Generator.

The product is:

* Free Forever
* No Login
* No Signup
* No Backend
* No Database
* No Authentication
* No Payment System
* No Watermarks

All processing happens client-side.

---

# Primary Objective

Build the fastest Tweet/X screenshot generator possible.

Prioritize:

1. Simplicity
2. Performance
3. Mobile usability
4. Maintainability

---

# Architecture Rules

## Allowed

* Next.js 14
* TypeScript
* Tailwind CSS
* shadcn/ui
* Zustand
* React Hook Form
* html-to-image
* react-image-crop

## Forbidden

Do NOT introduce:

* Express
* NestJS
* Firebase
* Supabase
* Prisma
* MongoDB
* PostgreSQL
* MySQL
* GraphQL
* Stripe
* Razorpay
* Clerk
* Auth.js
* NextAuth
* Redis

Unless explicitly requested.

---

# Modification Rules

When executing a prompt:

Only modify files required for that task.

Do not:

* Refactor unrelated code
* Rename folders
* Rename components
* Move files
* Delete files

Unless explicitly requested.

---

# Scope Rules

Implement only what the prompt requests.

Do not:

* Anticipate future features
* Build future roadmap items
* Add placeholder implementations
* Add mock APIs
* Add fake backend layers

---

# UI Rules

Design style:

* Professional SaaS
* Clean
* Modern
* Minimal

Avoid:

* Glassmorphism
* Neon effects
* AI-style gradients
* Heavy animations

---

# State Management Rules

Use Zustand only.

Do not:

* Introduce Redux
* Introduce MobX
* Introduce Context API for global state

Unless explicitly requested.

---

# Performance Rules

Target:

* Initial load < 2 seconds
* Export < 3 seconds
* Mobile-first implementation

Avoid unnecessary dependencies.

---

# Code Quality Rules

Always:

* Use TypeScript
* Use reusable components
* Use strict typing
* Use descriptive naming

Never:

* Use any
* Leave dead code
* Leave unused imports

---

# Prompt Execution Rules

Before implementing:

1. Read current prompt
2. Follow only current prompt
3. Respect existing architecture
4. Preserve previous work

After implementation:

Provide:

* Files created
* Files modified
* Reasoning
* Next recommended step

Do not automatically implement the next step.
Wait for instructions.

---

# Final Rule

If a prompt conflicts with this constitution:

Ask for clarification instead of making assumptions.





# Document Priority

When implementing:

Priority 1:
UI_REFERENCE.md

Priority 2:
project-constitution.md

Priority 3:
PRD2.md

If documents conflict:

Follow the higher priority document.

Never redesign the UI.

Never move components unless explicitly instructed.

