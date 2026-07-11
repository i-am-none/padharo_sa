# Feature Specification

# Feature 03 — Layout System

---

# Purpose

Implement the foundational layout system for the Padharo Sa website.

The layout system defines how every page, section, container, image, and content block is structured across all screen sizes.

The goal is to create a reusable editorial layout framework that communicates luxury, openness, elegance, and calmness.

Future pages should compose layouts using these primitives instead of creating custom layouts.

---

# Objective

Build a reusable layout system that provides:

- Containers
- Grid system
- Responsive layouts
- Editorial spacing
- Vertical rhythm
- Section primitives
- Alignment utilities
- Page composition utilities

Every future section should be built using this layout system.

---

# Scope

## In Scope

- Containers
- Grid
- Sections
- Responsive breakpoints
- Alignment
- Whitespace
- Vertical rhythm
- Layout primitives

---

## Out of Scope

Do NOT build

- Navbar
- Hero
- Cards
- Gallery
- Buttons
- Forms
- Components
- Animations

Only layout primitives.

---

# Layout Philosophy

Whitespace is content.

Negative space creates luxury.

The layout should never feel crowded.

Every section should breathe.

The visitor should feel invited to explore rather than overwhelmed with information.

Layouts should resemble premium editorial magazines more than traditional restaurant websites.

---

# Core Principles

Every layout should satisfy the following:

- Clear hierarchy
- Generous whitespace
- Balanced composition
- Consistent rhythm
- Predictable alignment
- Responsive behaviour
- Easy scanning
- Storytelling first

---

# Responsive Breakpoints

Mobile

0–767px

Tablet

768–1023px

Desktop

1024–1439px

Large Desktop

1440px+

Ultra Wide

1920px+

These breakpoints should become reusable utilities.

---

# Container System

Implement reusable containers.

## Narrow Container

Purpose

Long-form reading.

Maximum width

720px

---

## Content Container

Purpose

General content.

Maximum width

1200px

---

## Wide Container

Purpose

Editorial sections.

Maximum width

1440px

---

## Full Width

Purpose

Hero

Videos

Image galleries

Immersive storytelling

Width

100%

---

# Horizontal Padding

Desktop

48px

Tablet

32px

Mobile

20px

Never hardcode page padding.

---

# Vertical Spacing

Use a consistent vertical rhythm.

Desktop

160px

Tablet

120px

Mobile

80px

Compact Sections

64px

Large Storytelling Sections

200px

Avoid inconsistent spacing between sections.

---

# Grid System

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

Gutter

32px

The grid should remain invisible but consistent.

---

# Editorial Layouts

Implement reusable editorial patterns.

## Pattern A

Large image

↓

Small text block

---

## Pattern B

Centered content

↓

Supporting imagery

---

## Pattern C

Split layout

50 / 50

---

## Pattern D

Image left

Content right

---

## Pattern E

Content left

Image right

---

## Pattern F

Full-width immersive media

↓

Supporting content

These layouts should become reusable section primitives.

---

# Alignment Rules

Headlines

Left aligned

Body copy

Left aligned

Hero

May be centered

Cards

Consistent alignment

Never randomly center content.

---

# Reading Width

Long-form paragraphs

Maximum width

680px

Avoid extremely wide text blocks.

---

# Image Placement

Images should dominate.

Text should support imagery.

Photography should receive more visual weight than copy.

---

# Section Primitive

Create a reusable Section component.

Responsibilities

- Vertical spacing
- Container selection
- Background handling
- Responsive padding

Every page section should use this component.

---

# Container Primitive

Create reusable Container component.

Support

- Narrow
- Content
- Wide
- Full

Future sections should compose layouts using this component.

---

# Stack Utility

Create reusable Stack component.

Purpose

Consistent vertical spacing.

Support

Small

Medium

Large

Extra Large

Avoid manually adding margins between children.

---

# Spacer Utility

Reusable spacing component.

Used sparingly.

Prefer Stack where possible.

---

# Divider Primitive

Reusable divider.

Support

- Horizontal
- Decorative
- Minimal

Never duplicate divider styles.

---

# Aspect Ratios

Landscape

16:9

Editorial

4:3

Portrait

3:4

Square

1:1

Hero

21:9

Future media should use these ratios whenever possible.

---

# Responsive Behaviour

Layouts should adapt naturally.

Never simply shrink desktop layouts.

Examples

Desktop

Two-column

↓

Tablet

Two-column with adjusted spacing

↓

Mobile

Single-column

Content should reflow naturally.

---

# Safe Areas

Support devices with

- Notches
- Dynamic islands
- Rounded corners

Respect browser safe areas where appropriate.

---

# Overflow Rules

Avoid horizontal scrolling.

Images may overflow intentionally only when part of a storytelling effect.

Content should never overflow.

---

# Scrolling Behaviour

The layout should encourage continuous scrolling.

Every section should lead naturally into the next.

Avoid abrupt layout changes.

---

# Accessibility

Reading width

680px maximum

Touch targets

Minimum 44px

Logical document order

Maintain semantic structure

Responsive zoom support

Required

---

# Performance

Avoid deeply nested wrappers.

Prefer composition over excessive div nesting.

Minimize layout shifts.

Prevent cumulative layout shift (CLS).

---

# File Structure

Expected implementation

```
components/

layout/

Container.tsx

Section.tsx

Stack.tsx

Grid.tsx

Spacer.tsx

Divider.tsx

lib/

layout.ts

styles/

layout.css
```

---

# Utility Classes

Provide reusable layout utilities.

Examples

container-content

container-wide

container-narrow

section-padding

stack-lg

grid-editorial

Avoid one-off layout classes.

---

# Implementation Rules

Every section must use the shared layout primitives.

Never hardcode container widths.

Never hardcode page padding.

Never create custom layout utilities inside feature components.

Always compose layouts from reusable primitives.

---

# Acceptance Criteria

The feature is complete when

✓ Responsive container system exists.

✓ Section component exists.

✓ Grid system exists.

✓ Stack component exists.

✓ Spacer component exists.

✓ Divider component exists.

✓ Layout utilities exist.

✓ Responsive behaviour verified.

✓ Build succeeds.

✓ TypeScript succeeds.

✓ Lint succeeds.

---

# Verification Checklist

Verify

- Responsive layouts
- No hardcoded widths
- No duplicated spacing
- Consistent section rhythm
- No layout shifts
- Semantic structure
- Accessibility
- Uses design system tokens
- Follows Development Rules

---

# AI Instructions

Before implementation

Read

- project-overview.md
- brand-context.md
- ui-context.md
- motion-language.md
- tech-architecture.md
- development-rules.md
- design-system.md
- typography-system.md

Read this specification completely.

Implement ONLY the Layout System.

Do not begin Navigation.

Do not begin Hero.

Do not create pages.

Do not create business logic.

When complete

- Run TypeScript
- Run Lint
- Run Build
- Update progress-tracker.md

Finally summarize:

- Files created
- Files modified
- Layout primitives implemented
- Utility classes created
- Any architectural decisions