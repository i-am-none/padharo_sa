# Architecture Context

---

# Architecture Philosophy

Padharo Sa is built using a modern composable architecture that prioritizes performance, maintainability, scalability, accessibility, and an immersive user experience.

The application follows a **content-first architecture**, where storytelling, media, and user experience are the primary focus. The public-facing website remains lightweight, highly optimized, and largely static, while future business logic such as authentication, reservations, dashboards, and CMS integrations can be layered on without requiring architectural changes.

The architecture is designed around the following principles:

* Performance before complexity.
* Reusable components before duplicated code.
* Server-first rendering before unnecessary client-side JavaScript.
* Long-term maintainability before short-term convenience.
* AI-friendly project organization through clear boundaries and documentation.

The website should behave more like a luxury digital publication than a traditional CRUD application.

---

# Stack

| Layer               | Technology                           | Role                                                      |
| ------------------- | ------------------------------------ | --------------------------------------------------------- |
| Framework           | Next.js 15 (App Router) + TypeScript | Routing, Server Components, Server Actions, Metadata, SEO |
| Runtime             | React 19                             | Component architecture                                    |
| Styling             | Tailwind CSS v4                      | Utility-first styling system                              |
| Component Library   | shadcn/ui                            | Accessible reusable UI components                         |
| Animation           | GSAP + ScrollTrigger                 | Cinematic storytelling and scroll-driven animations       |
| Component Animation | Framer Motion                        | Micro-interactions and UI state transitions               |
| Smooth Scrolling    | Lenis                                | Smooth premium scrolling experience                       |
| Icons               | Lucide React                         | Consistent outline iconography                            |
| Images              | Next/Image                           | Responsive image optimization                             |
| Video               | Native HTML5 Video                   | Local cinematic videos stored inside the project          |
| Forms               | React Hook Form                      | Accessible form handling                                  |
| Validation          | Zod                                  | Runtime validation                                        |
| Content             | Local JSON / Markdown                | Static content for Phase 1 prototype                      |
| Deployment          | Vercel                               | Hosting and preview deployments                           |
| Authentication      | BetterAuth *(Phase 2)*               | Admin authentication                                      |
| Database ORM        | Prisma *(Phase 2)*                   | Database abstraction                                      |
| Database            | Neon PostgreSQL *(Phase 2)*          | Persistent application data                               |
| CMS                 | Sanity / Payload CMS *(Phase 2)*     | Dynamic content management                                |
| Media CDN           | Cloudinary / Mux *(Phase 2)*         | Image and video optimization                              |

---

# Project Structure

```text
padharo-sa/

├── app/
├── components/
│   ├── ui/
│   ├── custom/
│   ├── animations/
│   ├── layout/
│   └── marketing/
│
├── features/
│   ├── hero/
│   ├── navbar/
│   ├── story/
│   ├── cuisine/
│   ├── gallery/
│   ├── reservation/
│   ├── experience/
│   ├── footer/
│   └── contact/
│
├── hooks/
├── lib/
├── schemas/
├── actions/
├── types/
├── styles/
├── public/
│   ├── videos/
│   ├── images/
│   ├── logos/
│   ├── icons/
│   └── textures/
│
├── content/
│   ├── home.json
│   ├── story.json
│   ├── menu.json
│   ├── gallery.json
│   └── contact.json
│
├── context/
│   ├── project-overview.md
│   ├── brand-context.md
│   ├── ui-context.md
│   ├── motion-language.md
│   ├── tech-architecture.md
│   ├── development-rules.md
│   └── progress.md
│
├── specs/
├── prompts/
├── references/
└── README.md
```

---

# System Boundaries

## `/app`

Owns routing, layouts, metadata, loading states, error boundaries, Server Components, and Server Actions.

This folder should never contain business logic.

---

## `/components`

Owns reusable presentation components.

Subfolders

* ui
* custom
* animations
* layout
* marketing

Components should remain reusable and presentation-focused.

---

## `/features`

Owns complete business features.

Each feature contains everything related to that feature.

Example

* Components
* Hooks
* Types
* Actions
* Validation

Examples

* Hero
* Story
* Reservation
* Gallery
* Cuisine
* Footer

---

## `/lib`

Owns reusable infrastructure.

Examples

* Utilities
* Helper functions
* Configuration
* Constants
* Animation helpers

---

## `/hooks`

Reusable React hooks.

No business-specific logic.

Examples

* useScrollPosition
* useMediaQuery
* useIntersectionObserver
* useLenis

---

## `/schemas`

Owns every Zod validation schema.

Every form should have exactly one schema.

---

## `/actions`

Reusable Server Actions.

Initially minimal.

Future

* Reservation
* Contact Form
* Newsletter

---

## `/types`

Shared TypeScript interfaces.

Avoid duplicate interfaces.

---

## `/public`

Owns static assets.

* Images
* Videos
* Icons
* Logos
* Textures
* Fonts

---

## `/content`

Stores editable content during Phase 1.

Examples

* Homepage copy
* Story
* Menu
* Gallery
* Contact information

Can later migrate to a CMS without changing UI components.

---

## `/context`

AI Context documents.

Contains

* Project Overview
* Brand Context
* UI Context
* Motion Language
* Architecture Context
* Development Rules
* Progress Tracker

Every AI coding session should read these first.

---

## `/specs`

Feature Specifications.

Each feature receives its own specification.

Example

* hero.md
* navbar.md
* gallery.md
* reservation.md

---

## `/references`

Design inspiration.

Contains

* Moodboards
* Screenshots
* Animation references
* Competitor analysis

---

## `/prompts`

Reusable prompts for

* Claude Code
* Cursor
* Codex
* Gemini CLI
* Future AI agents

---

# Rendering Strategy

## Static Rendering

Default strategy.

Used for

* Homepage
* Story
* Menu
* Experience
* Gallery
* Contact

---

## Server Components

Default component type.

Responsible for

* Data loading
* SEO
* Metadata
* Structured Data

---

## Client Components

Only when interaction requires JavaScript.

Examples

* Navigation
* Carousel
* Reservation Form
* Animated Galleries
* Interactive Components

---

# Storage Model

## Local Project Assets

Stores

* Hero videos
* Background videos
* Images
* Logos
* Icons
* Restaurant photography
* Demo assets

Location

```text
public/

    videos/

    images/

    logos/

    icons/

    textures/
```

This keeps the prototype simple while allowing rapid iteration.

---

## Local Static Content

Stores

* Homepage copy
* Story content
* Menus
* Testimonials
* Gallery metadata
* Contact details

Location

```text
content/

    home.json

    story.json

    menu.json

    gallery.json

    contact.json
```

This structure allows an easy migration to a CMS in Phase 2.

---

## Git Repository

Stores

* Source Code
* Documentation
* AI Context
* Specifications
* Assets
* Design System

---

# Data Flow

## Phase 1

```text
Static JSON

↓

Server Components

↓

React Components

↓

Visitor
```

No database required.

---

## Future Phase

```text
CMS

↓

Server Components

↓

React Components

↓

Visitor
```

Business Data

```text
Forms

↓

Server Actions

↓

Prisma

↓

Neon PostgreSQL

↓

Response

↓

UI
```

---

# Authentication and Access Model

## Phase 1

No authentication.

The public website should remain fully accessible.

---

## Phase 2

Administrators authenticate using BetterAuth.

Role hierarchy

Guest

↓

Content Editor

↓

Administrator

↓

Super Administrator

Authentication should never affect public performance.

---

# API Philosophy

Prefer

Server Actions

Avoid unnecessary REST APIs.

Create Route Handlers only for

* Webhooks
* Third-party integrations
* Public APIs

---

# Performance Strategy

Target Lighthouse Performance Score above **90**.

Guidelines

* Server Components by default.
* Use Next/Image for every image.
* Compress videos before adding them.
* Prefer WebM with MP4 fallback.
* Lazy-load below-the-fold media.
* Tree shake dependencies.
* Code split automatically.
* Defer non-critical JavaScript.
* Prefer CSS transforms over layout-triggering animations.
* Every animation must justify its JavaScript cost.

---

# SEO Strategy

Every page must include

* Metadata
* Canonical URL
* Open Graph
* Twitter Cards
* JSON-LD Structured Data
* XML Sitemap
* Robots.txt
* Semantic HTML
* Accessible heading hierarchy

SEO is considered part of the core architecture.

---

# Error Handling

Every route should provide

* Loading UI
* Error Boundary
* Not Found Page
* Graceful Fallback

Never expose implementation details.

---

# Security

* Validate all forms using Zod.
* Never trust client-side validation.
* Protect environment variables.
* Sanitize user-generated content.
* Escape HTML where appropriate.
* Future forms should implement rate limiting.

---

# Scalability Strategy

The architecture should support future additions without restructuring.

Future features include

* Admin Dashboard
* Reservation Management
* Dynamic CMS
* Online Ordering
* Loyalty Programs
* Events
* Franchise Portal
* Multiple Restaurant Locations
* Multi-language Support
* Additional Jain's Little India Brands

---

# Future Migration Plan

| Current Prototype | Production Upgrade  |
| ----------------- | ------------------- |
| Local JSON        | Headless CMS        |
| Local Videos      | Cloudinary / Mux    |
| Local Images      | Cloudinary          |
| Static Content    | CMS-managed content |
| Manual Updates    | Editor Dashboard    |
| No Database       | Prisma + Neon       |
| No Authentication | BetterAuth          |

The UI layer should remain unchanged during this migration.

---

# Invariants

1. Server Components are the default. Client Components are introduced only when interaction genuinely requires them.

2. Every reusable UI element belongs inside the shared component library before creating new implementations.

3. All content displayed to visitors must originate from either the `content` directory or future CMS integrations. Marketing copy must never be hardcoded inside components.

4. Every animation must remain isolated from business logic and must never interfere with accessibility, responsiveness, or performance.

5. Every form must validate data using shared Zod schemas before any future database interaction.

6. Business logic belongs inside `features`, not inside pages or UI components.

7. Every page must meet accessibility, SEO, and performance standards before deployment.

8. No dependency should be introduced unless it provides measurable value to the user experience or developer productivity.

9. Every AI coding session must begin by reading the Context folder and the relevant Feature Specification.

10. The architecture must always favor simplicity, modularity, maintainability, and storytelling over unnecessary technical complexity.
