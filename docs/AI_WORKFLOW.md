# AI WORKFLOW

Version: 1.0

This document defines the mandatory workflow every AI coding assistant must follow while working on the Padharo Sa website.

This repository follows a Specification-Driven Development workflow.

AI is responsible for implementing features.

AI is NOT responsible for inventing product decisions.

Every implementation must strictly follow the existing specifications.

---

# Project Philosophy

The website is not a restaurant website.

It is a cinematic luxury hospitality experience.

Every implementation should reinforce:

- Luxury
- Elegance
- Warmth
- Authenticity
- Craftsmanship
- Storytelling

The implementation should never resemble a dashboard, SaaS application, or template website.

---

# Golden Rule

Never invent.

Always implement.

If a required behaviour is not defined in the specifications, make the smallest reasonable assumption and clearly document it in the implementation summary.

---

# AI Workflow

Every implementation must follow this sequence.

```
Understand Project

↓

Read Context

↓

Read Feature Specification

↓

Analyze Existing Code

↓

Plan

↓

Implement

↓

Self Review

↓

Test

↓

Update Documentation

↓

Stop
```

Never skip any step.

---

# Step 1 — Understand the Project

Before writing code, understand the product.

Read every file inside

```
context/
```

Required

- project-overview.md
- brand-context.md
- ui-context.md
- motion-language.md
- tech-architecture.md
- development-rules.md
- experience-blueprint.md
- progress-tracker.md

Do not skip any document.

---

# Step 2 — Read the Feature Specification

Read ONLY the requested feature.

Example

```
specs/05-navigation.md
```

This specification becomes the single source of truth.

Never implement multiple features simultaneously.

---

# Step 3 — Analyze the Existing Codebase

Before creating files

Analyze

- folder structure
- reusable components
- existing utilities
- hooks
- animation helpers
- design tokens
- typography
- layout primitives

Never duplicate functionality.

Prefer reuse.

---

# Step 4 — Implementation Planning

Before coding

Create a mental implementation plan.

Identify

- components
- hooks
- utilities
- dependencies
- motion requirements
- accessibility considerations
- performance considerations

Do not immediately begin coding.

---

# Step 5 — Implementation

Implement ONLY the requested feature.

Never

- modify unrelated features
- redesign existing components
- rename folders unnecessarily
- introduce architectural changes without reason

Keep commits focused.

---

# Feature Isolation

Each implementation should complete one feature only.

Good

```
Navigation
```

Bad

```
Navigation

+

Hero

+

Footer
```

One implementation session equals one completed feature.

---

# Architecture Rules

Follow

```
context/tech-architecture.md
```

Do not create new architectural patterns.

Use the existing structure.

Prefer consistency over creativity.

---

# Design Rules

Every component must consume

- Design Tokens
- Typography System
- Layout System
- Motion Language

Never hardcode

- colors
- spacing
- typography
- shadows
- border radius
- animation durations

---

# Component Rules

Components should have

One responsibility.

Good

```
NavigationLink
```

Bad

```
NavigationEverything
```

Prefer composition.

Avoid massive configurable components.

---

# Styling Rules

Use

Tailwind CSS

Design Tokens

CSS Variables

Never

- hardcode colors
- hardcode spacing
- duplicate utility classes

---

# Motion Rules

Follow

```
context/motion-language.md
```

GSAP

Use only for

- timelines
- scroll interactions
- cinematic sequences

Framer Motion

Use only for

- hover
- tap
- small UI interactions

Never mix both libraries for the same animation.

---

# Performance Rules

Performance is mandatory.

Every feature should already be optimized.

Requirements

- Server Components by default
- Client Components only when required
- GPU accelerated animations
- Lazy loading
- Dynamic imports when appropriate
- Minimize JavaScript
- Avoid unnecessary state

Do not postpone performance until later.

---

# Accessibility Rules

Every feature must support

- keyboard navigation
- screen readers
- semantic HTML
- visible focus states
- reduced motion
- WCAG AA contrast

Accessibility is part of implementation.

Not an optional improvement.

---

# Responsive Rules

Every implementation must support

- Mobile
- Tablet
- Desktop
- Large Desktop

Never build desktop-only interfaces.

---

# Folder Rules

Follow the existing project structure.

Never create folders unless required.

Never duplicate components.

Never create multiple implementations of the same feature.

---

# State Management

Prefer

Local state.

Avoid

Global state.

Only introduce shared state when multiple features genuinely require it.

---

# Error Handling

Handle

- loading states
- empty states
- fallback media
- animation cleanup
- hydration safety

Never assume data always exists.

---

# File Organization

Each feature should remain self-contained.

Example

```
features/

navigation/

Navigation.tsx

DesktopNavigation.tsx

MobileNavigation.tsx

NavigationCTA.tsx

NavigationLogo.tsx

NavigationMenu.tsx

index.ts
```

Avoid oversized files.

---

# Before Finishing

Perform a complete self-review.

Verify

✓ Build

✓ Lint

✓ TypeScript

✓ Responsive behaviour

✓ Accessibility

✓ Motion

✓ Performance

✓ Folder structure

✓ Naming consistency

Fix every issue before completing the task.

---

# Definition of Done

A feature is complete only if

✓ Feature matches specification.

✓ Responsive.

✓ Accessible.

✓ Performance optimized.

✓ Uses design tokens.

✓ Uses typography system.

✓ Uses layout system.

✓ Follows motion language.

✓ No hardcoded values.

✓ TypeScript passes.

✓ ESLint passes.

✓ Build succeeds.

✓ Documentation updated.

If any condition fails

The feature is NOT complete.

---

# Documentation Update

At the end of every completed feature

Update

```
context/progress-tracker.md
```

Update

- Current Phase
- Current Goal
- Completed
- In Progress
- Architecture Decisions
- Session Notes

Never skip documentation.

---

# Implementation Report

Every completed feature must end with a concise report.

Include

## Overview

What was implemented.

## Files Created

List every new file.

## Files Modified

List modified files.

## Components Created

List reusable components.

## Accessibility

Explain accessibility decisions.

## Performance

Explain performance decisions.

## Architecture

Explain architectural decisions.

## Assumptions

Document any assumptions made during implementation.

---

# Definition of Success

The objective is not simply to make the website work.

The objective is to build a premium digital experience that feels timeless, cinematic, elegant, and scalable.

Every line of code should contribute toward that goal.