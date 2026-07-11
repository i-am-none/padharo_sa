# Development Rules

---

# Purpose

This document defines the engineering standards, coding conventions, architectural principles, and AI collaboration workflow for the Padharo Sa website.

Every AI coding assistant (Claude Code, Cursor, Codex, Gemini CLI, etc.) **must read this document before implementing any feature.**

These rules are non-negotiable.

If there is a conflict between generated code and this document, **this document always wins.**

---

# Development Philosophy

The goal is not to write code quickly.

The goal is to build a maintainable, scalable, elegant, and production-ready application.

Every implementation should prioritize:

* Simplicity
* Readability
* Reusability
* Performance
* Accessibility
* Consistency
* Maintainability

Never optimize for short-term speed at the expense of long-term quality.

---

# AI Workflow

Every development session must follow the exact sequence below.

## Step 1

Read

* project-overview.md
* brand-context.md
* ui-context.md
* motion-language.md
* tech-architecture.md
* progress.md

---

## Step 2

Read the relevant Feature Specification.

Never implement features without reading their specification.

---

## Step 3

Understand the existing implementation.

Search before creating.

Never assume something does not already exist.

---

## Step 4

Implement only the requested feature.

Do not modify unrelated files.

Do not refactor unrelated components.

Do not rename folders unless explicitly instructed.

---

## Step 5

Verify

* TypeScript
* Build
* Lint
* Accessibility
* Responsiveness

Only after all checks pass should the implementation be considered complete.

---

## Step 6

Update

* Progress Tracker
* Documentation (if necessary)

---

# Scope Control

Implement **only** the requested scope.

Never build additional functionality because it "might be useful."

Avoid feature creep.

Examples of prohibited behavior:

* Adding authentication to a public page.
* Building admin functionality during homepage development.
* Creating reusable abstractions before they are actually needed.
* Installing packages that are not required for the current feature.

---

# Component Rules

Every UI component must have one responsibility.

Good examples

* Hero
* Button
* Navigation
* Gallery
* ReservationCard

Bad examples

* HomePageComponent
* LandingEverything
* MegaSection

Keep components focused.

---

# Reusability

Before creating any component:

1. Search `components/ui`
2. Search `components/custom`
3. Search the relevant feature folder

Only create a new component if one does not already exist.

Never duplicate components.

---

# File Size Guidelines

Target maximum sizes:

Component

200 lines

Feature Component

300 lines

Hook

100 lines

Utility

100 lines

If a file grows beyond these guidelines, consider splitting it into smaller units.

---

# Naming Conventions

Components

PascalCase

Example

HeroSection.tsx

---

Hooks

camelCase beginning with "use"

Example

useScrollReveal.ts

---

Utilities

camelCase

Example

formatDate.ts

---

Types

PascalCase

Example

Reservation.ts

---

Folders

kebab-case

Example

reservation-form

---

# TypeScript Rules

Strict mode is required.

Never use

```ts
any
```

Prefer

* unknown
* generics
* explicit interfaces

All props must be typed.

Avoid unnecessary type assertions.

---

# Styling Rules

Never use inline styles unless absolutely necessary.

Never hardcode

* Colors
* Typography
* Spacing
* Border Radius

Always use

* Tailwind utility classes
* Design tokens
* CSS variables

Every component must follow the Design System.

---

# Tailwind Rules

Prefer utility classes.

Avoid deeply nested custom CSS.

Create custom CSS only when

* Browser limitations require it.
* GSAP requires it.
* Performance benefits justify it.

---

# Animation Rules

Every animation must have a purpose.

Allowed purposes

* Reveal
* Hierarchy
* Storytelling
* Feedback
* Navigation

Never animate simply because something can move.

Prefer

GSAP

for

* Scroll animations
* Timelines
* Complex sequences

Prefer

Framer Motion

for

* Hover
* State transitions
* Enter/Exit animations

Never mix animation libraries for the same interaction.

---

# Performance Rules

Every new dependency increases project complexity.

Before installing a package ask:

Can this be solved with existing tools?

Avoid unnecessary packages.

Prefer native browser APIs.

Use dynamic imports for heavy features.

Optimize images.

Compress videos.

Lazy-load below-the-fold content.

---

# Accessibility Rules

Every page must support keyboard navigation.

Every image requires descriptive alt text.

Interactive elements require visible focus states.

Never rely on colour alone to communicate information.

Respect reduced-motion preferences.

Maintain semantic HTML.

Target WCAG AA compliance.

---

# SEO Rules

Every page requires

* Metadata
* Proper heading hierarchy
* Canonical URL
* Open Graph
* Semantic HTML

Avoid duplicate metadata.

---

# Server vs Client

Prefer Server Components.

Only use Client Components when interaction requires JavaScript.

Examples

Client

* Forms
* Carousel
* Interactive Gallery

Server

* Hero
* Story
* Menu
* Footer

Minimize client-side JavaScript.

---

# Folder Ownership

Each folder owns exactly one responsibility.

Business logic

features

Presentation

components

Utilities

lib

Validation

schemas

Actions

actions

Documentation

context

Specifications

specs

Never violate folder boundaries.

---

# Imports

Use path aliases.

Example

```ts
@/components/ui/button
```

Avoid deep relative imports.

Never import across unrelated features unless shared.

---

# Error Handling

Never silently fail.

Provide graceful fallbacks.

Use meaningful error messages.

Avoid exposing implementation details.

---

# Logging

Development

Console logging is acceptable.

Before merging

Remove unnecessary logs.

Production

Avoid console logging.

Use structured logging when introduced.

---

# Forms

Every form must use

* React Hook Form
* Zod validation

Validation should occur

Client-side

and

Server-side (future implementation).

---

# Images

Always use

Next/Image

Never use HTML `<img>` unless absolutely necessary.

Provide

* Width
* Height
* Alt text

Optimize every asset.

---

# Video

Use native HTML5 video.

Autoplay only when muted.

Loop only when appropriate.

Lazy-load below-the-fold videos.

Compress before adding to the repository.

---

# Content

Marketing copy must never be hardcoded inside components.

Content belongs inside

```text
/content
```

Future migration to a CMS should not require changing component code.

---

# Documentation

Whenever architecture changes

Update

* Architecture Context
* Progress
* Feature Specs

Documentation is part of the codebase.

Outdated documentation is considered a bug.

---

# Git Workflow

Every completed feature should represent one logical commit.

Commit messages should be descriptive.

Example

```
feat(hero): implement cinematic homepage hero
```

Avoid commits such as

```
update
fix
changes
misc
```

---

# Code Review Checklist

Before considering a feature complete, verify:

* TypeScript passes
* Build succeeds
* Lint succeeds
* Mobile responsive
* Desktop responsive
* Accessibility verified
* Animations smooth
* No duplicated components
* No hardcoded values
* Uses design tokens
* Matches Brand Context
* Matches UI Context
* Matches Motion Language

---

# AI Collaboration Rules

AI should never guess.

If context is missing

Stop.

Read documentation.

If documentation conflicts

Ask for clarification.

Never invent architecture.

Never invent folder structures.

Never invent design systems.

Never invent colour palettes.

Never invent motion styles.

Everything must align with the project context.

---

# Non-Negotiable Rules

1. Read all context documents before writing code.

2. Never implement features outside the requested scope.

3. Never duplicate components.

4. Never hardcode design values.

5. Never use `any` in TypeScript.

6. Prefer Server Components.

7. Keep components small and reusable.

8. Follow the design system without exception.

9. Every animation must support storytelling.

10. Optimize for performance from the beginning.

11. Documentation is part of the implementation.

12. Accessibility is mandatory.

13. Every feature must leave the codebase cleaner than it was before.

14. If uncertain, choose the simpler solution.

15. Build experiences, not just interfaces.
