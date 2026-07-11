# Feature Specification

# Feature 04 — Component Foundation

---

# Purpose

Implement the reusable component foundation for the Padharo Sa website.

This feature establishes every reusable UI primitive that future sections will compose.

The goal is not to build pages.

The goal is to build an elegant, scalable component library that communicates the luxury, craftsmanship, and editorial nature of the Padharo Sa brand.

Every future page should be assembled from these components.

No feature should create its own custom UI if an existing component already satisfies the requirement.

---

# Objective

Create a reusable component system that provides:

- UI primitives
- Layout primitives
- Typography primitives
- Interactive primitives
- Media primitives
- Storytelling primitives

The component library should prioritize composition over duplication.

---

# Scope

## In Scope

- Button
- Typography
- Container
- Section
- Stack
- Divider
- Badge
- Tag
- CTA
- Image
- Video
- Logo
- Icon Wrapper
- Link
- Surface
- Card Foundation

---

## Out of Scope

Do NOT build

- Navigation
- Hero
- Gallery
- Reservation
- Footer
- Story Sections
- Pages

Only reusable components.

---

# Component Philosophy

Every component should have exactly one responsibility.

Good components

Button

Section

Heading

Video

Surface

Container

Bad components

HomepageCard

HeroEverything

MegaSection

LandingLayout

Components should solve one problem only.

---

# Design Principles

Every component should be

Elegant

Minimal

Reusable

Accessible

Responsive

Composable

Predictable

Components should never feel decorative.

Luxury comes from restraint.

---

# Component Hierarchy

The component system should follow this hierarchy.

Primitive Components

↓

Layout Components

↓

Content Components

↓

Experience Components

↓

Feature Components

↓

Pages

Never skip layers unnecessarily.

---

# Folder Structure

Expected implementation

```text
components/

ui/

Button/

Typography/

Badge/

Divider/

Logo/

Icon/

Image/

Video/

Surface/

Container/

Section/

Stack/

Card/

Link/

CTA/

layout/

content/

experience/
```

Components should remain modular.

---

# Primitive Components

Implement the following reusable primitives.

---

## Button

Purpose

Primary interaction.

Variants

Primary

Secondary

Ghost

Outline

Text

Icon

Support

Hover

Focus

Disabled

Loading

Icon Left

Icon Right

Full Width

Small

Medium

Large

---

## Typography

Reusable typography wrapper.

Support

Display

Heading

Body

Caption

Label

Quote

Color variants

Responsive scaling

Semantic HTML

---

## Badge

Purpose

Highlight information.

Examples

Featured

New

Signature

Award Winning

Variants

Filled

Outline

Soft

---

## Divider

Purpose

Separate content elegantly.

Variants

Horizontal

Decorative

Minimal

---

## Icon

Purpose

Standardize icon usage.

Library

Lucide React

Support

16

20

24

32

Never use inconsistent icon sizing.

---

## Link

Purpose

Navigation.

Variants

Default

Underline

CTA

Animated

External

---

# Layout Components

Implement reusable layout primitives.

---

## Container

Support

Narrow

Content

Wide

Full

---

## Section

Support

Default

Compact

Large

Immersive

Responsible for

Padding

Background

Container

Spacing

---

## Stack

Purpose

Vertical spacing.

Support

Small

Medium

Large

Extra Large

Never manually stack margins.

---

## Surface

Purpose

Cards

Glass

Panels

Content blocks

Support

Default

Elevated

Glass

Transparent

---

# Media Components

---

## Image

Wrapper around

next/image

Responsibilities

Lazy loading

Responsive sizing

Aspect ratios

Accessibility

Placeholder

Priority loading

---

## Video

Wrapper around

HTML5 Video

Responsibilities

Poster

Autoplay

Muted

Loop

Responsive sizing

Lazy loading

Accessibility

Never duplicate video configuration.

---

## Logo

Reusable logo component.

Support

Light

Dark

Small

Large

Animated (future)

Never place logo images directly inside pages.

---

# Storytelling Components

These components support the editorial nature of the website.

---

## CTA

Purpose

Primary storytelling call-to-action.

Variants

Primary

Secondary

Reservation

Menu

Support

Icons

Animation

Loading

Responsive sizing

---

## Card Foundation

Purpose

Base card only.

Future cards inherit from this component.

Examples

Experience Card

Menu Card

Gallery Card

Review Card

Never duplicate card styling.

---

# Props Philosophy

Every component should expose only meaningful props.

Good

```tsx
<Button variant="primary" size="lg" />
```

Bad

```tsx
<Button
background="#111"
padding="18"
fontSize="17"
...
/>
```

Visual styling belongs inside the design system.

---

# State Management

Interactive components should support

Hover

Active

Focus

Disabled

Loading

Error (where appropriate)

Never implement custom states per feature.

---

# Composition Rules

Prefer composition over configuration.

Good

```tsx
<Section>

<Container>

<Heading />

<Text />

<Button />

</Container>

</Section>
```

Avoid

Massive configurable components.

---

# Accessibility

Every interactive component must support

Keyboard navigation

Visible focus states

ARIA labels

Screen readers

WCAG AA contrast

Minimum touch target

44px

Accessibility is mandatory.

---

# Responsiveness

Every component should work across

Mobile

Tablet

Desktop

Large Desktop

Avoid creating separate mobile components.

Components should adapt naturally.

---

# Motion

Components should consume the shared motion system.

Buttons

Framer Motion

Sections

GSAP

Media

GSAP

Hover

Framer Motion

Never invent custom animations inside feature components.

---

# Styling Rules

Every component must use

Design Tokens

Typography System

Layout System

Never hardcode

Colors

Spacing

Radius

Typography

Shadows

Transitions

---

# File Structure

Each component should follow

```text
Button/

Button.tsx

button.types.ts

button.constants.ts

index.ts
```

Large components may include

hooks/

utils/

styles/

Avoid oversized files.

---

# Naming Convention

Components

PascalCase

Hooks

camelCase

Folders

PascalCase

Props

Explicit

Avoid abbreviations.

---

# Performance

Components should

Minimize JavaScript

Avoid unnecessary re-renders

Support memoization where appropriate

Lazy load heavy media

Avoid unnecessary dependencies

---

# Future Extensibility

The component system should support

Jain's Little India

Tapri

Future brands

Only theme tokens should change.

Components should remain reusable.

---

# Acceptance Criteria

The feature is complete when

✓ Component folder structure exists.

✓ UI primitives exist.

✓ Layout primitives exist.

✓ Media wrappers exist.

✓ CTA exists.

✓ Card Foundation exists.

✓ Components consume design tokens.

✓ Components consume typography system.

✓ Components consume layout system.

✓ No duplicated styling exists.

✓ Build succeeds.

✓ TypeScript succeeds.

✓ Lint succeeds.

---

# Verification Checklist

Before marking complete verify

- Responsive
- Accessible
- Semantic HTML
- Uses design tokens
- No duplicated styling
- No hardcoded values
- Folder structure matches architecture
- Follows development rules

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
- layout-system.md

Read this specification completely.

Implement ONLY the Component Foundation.

Do not begin Navigation.

Do not begin Hero.

Do not create pages.

Do not implement business logic.

When complete

- Run TypeScript
- Run Lint
- Run Build
- Update progress-tracker.md

Finally summarize

- Files created
- Files modified
- Components implemented
- Architectural decisions
- Any assumptions made
