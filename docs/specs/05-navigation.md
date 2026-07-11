# Feature Specification

# Feature 05 — Navigation System

---

# Purpose

Implement the primary navigation system for the Padharo Sa website.

The navigation should communicate elegance, confidence, calmness, and premium hospitality.

Unlike conventional restaurant websites where navigation dominates the interface, this navigation should remain understated, allowing the cinematic storytelling to take center stage.

It should feel like the concierge of a luxury hotel.

Always available.

Never intrusive.

---

# Objective

Build a responsive, accessible, reusable navigation system that:

- supports storytelling
- blends naturally into the Hero
- transitions smoothly while scrolling
- remains minimal
- adapts beautifully across all screen sizes
- encourages exploration rather than distraction

---

# Scope

## In Scope

- Desktop Navigation
- Mobile Navigation
- Sticky Navigation
- Scroll Behaviour
- Navigation Animation
- Reservation CTA
- Logo Component Integration
- Navigation Drawer
- Responsive Behaviour
- Accessibility
- Motion

---

## Out of Scope

Do NOT build

- Hero
- Loading Experience
- Footer
- Reservation Form
- Search
- Authentication
- User Accounts

Only the Navigation System.

---

# Experience Goal

The visitor should never consciously notice the navigation.

Instead, they should feel:

- Calm
- Curious
- Confident
- Guided

The navigation should resemble the digital concierge of a five-star luxury property.

---

# Navigation Philosophy

The navigation exists to support the experience.

Not interrupt it.

The Hero owns the first impression.

The navigation quietly assists.

Luxury interfaces rely on restraint.

---

# Information Architecture

Primary Navigation

- Experience
- Story
- Cuisine
- Gallery
- Contact

Secondary Action

- Reserve a Table

Logo

- Padharo Sa logo
- Always links to homepage

---

# Desktop Layout

Structure

```
Logo

↓

Navigation Links

↓

Reservation CTA
```

Layout

```
| Logo | Navigation Links | Reserve Button |
```

Logo aligned left.

Navigation centered.

CTA aligned right.

Maximum width

1440px

Navigation remains horizontally balanced.

---

# Mobile Layout

Structure

```
Logo

↓

Menu Button
```

When opened

Fullscreen overlay

Navigation items vertically centered.

Reservation CTA fixed near bottom.

Closing animation should feel smooth and calm.

---

# Navigation States

## Initial State

Transparent.

Positioned above the Hero.

No background.

No border.

No shadow.

White typography.

Hero video remains fully visible.

---

## Scrolled State

Background

Dark glass.

Backdrop blur.

Soft border.

Subtle shadow.

Navigation becomes easier to read while preserving elegance.

---

## Hover State

Navigation links

Slight opacity transition.

Subtle color shift.

Optional underline animation.

No dramatic movement.

---

## Active State

Current section highlighted.

Highlight should remain understated.

Never use bright colors.

---

## Focus State

Visible keyboard focus.

High contrast.

Accessible.

---

# Scroll Behaviour

At page load

Transparent.

↓

User scrolls

↓

Background fades in.

↓

Glass effect appears.

↓

Shadow increases slightly.

↓

Navigation remains fixed.

Transitions should be smooth.

Never snap.

Never bounce.

---

# Hide / Reveal Behaviour

Desktop

Always visible.

No hiding.

Luxury hospitality websites should feel stable.

Avoid disappearing navigation.

---

# Logo Behaviour

Logo remains constant.

Do not resize aggressively.

Optional

Slight scale reduction after scrolling.

Maximum scale change

5%

Logo should never animate dramatically.

---

# Navigation Links

Links

- Experience
- Story
- Cuisine
- Gallery
- Contact

Spacing should feel generous.

Avoid crowded navigation.

Typography

Medium weight.

Uppercase optional.

Large tracking.

Elegant.

---

# Reservation Button

Purpose

Primary conversion action.

Style

Filled.

Gold accent.

Rounded pill.

Hover

Slight brightness increase.

Very subtle upward movement.

Active

Tiny scale reduction.

No bounce.

---

# Mobile Menu

Open

Fade

↓

Blur

↓

Overlay

↓

Navigation appears sequentially.

Close

Reverse sequence.

Avoid drawer slides.

Prefer elegant fades.

---

# Navigation Animation

Desktop

Opacity transitions.

Blur transitions.

Color transitions.

Small transforms.

Avoid

Bounce.

Elastic.

Rotate.

Flip.

---

# Motion Timeline

Page Load

↓

Hero fades in

↓

Navigation fades in

↓

CTA appears

↓

Scroll Indicator

Navigation should not appear before the Hero.

---

# GSAP Usage

Use GSAP only for

ScrollTrigger

Navigation background transition

Hero interaction

Timeline coordination

---

# Framer Motion Usage

Use Framer Motion for

Hover

Mobile menu

Button interaction

Link interaction

Do not mix GSAP and Framer Motion for the same animation.

---

# Accessibility

Support

Keyboard navigation.

Tab order.

Visible focus.

Screen readers.

ARIA labels.

Escape key closes menu.

Focus trap inside mobile menu.

Minimum touch target

44px

---

# Performance

Navigation should remain lightweight.

Avoid unnecessary JavaScript.

Avoid unnecessary dependencies.

GPU-accelerated animations only.

---

# Responsive Behaviour

Desktop

Three-column layout.

Tablet

Compressed spacing.

Mobile

Overlay menu.

Landscape

Ensure no overlap.

Navigation should remain usable on every device.

---

# SEO

Navigation should use semantic HTML.

```
<nav>

<ul>

<li>

<a>
```

Avoid unnecessary wrappers.

---

# Component Breakdown

Expected components

```
Navigation/

Navigation.tsx

DesktopNavigation.tsx

MobileNavigation.tsx

NavigationLogo.tsx

NavigationLink.tsx

NavigationCTA.tsx

NavigationMenu.tsx

NavigationOverlay.tsx

NavigationToggle.tsx
```

Each component should have a single responsibility.

---

# Props

Navigation

- transparent
- sticky
- animated

Navigation Link

- href
- label
- active

CTA

- variant
- size

Avoid excessive configuration.

---

# Future Extensibility

Navigation should later support

- Jain's Little India
- Tapri
- Additional brands
- Language switcher
- Reservation system
- Seasonal campaigns

Without major refactoring.

---

# Implementation Rules

The Navigation must

- use Design Tokens
- use Typography System
- use Layout System
- consume reusable components
- support responsive behaviour
- support accessibility
- remain performant

Never hardcode

- spacing
- colors
- typography
- animations

---

# Acceptance Criteria

The feature is complete when

✓ Desktop navigation exists.

✓ Mobile navigation exists.

✓ Sticky behaviour implemented.

✓ Transparent initial state.

✓ Glass scroll state.

✓ Reservation CTA implemented.

✓ Keyboard accessible.

✓ Responsive.

✓ Build succeeds.

✓ TypeScript succeeds.

✓ Lint succeeds.

---

# Verification Checklist

Verify

- Mobile responsiveness
- Desktop responsiveness
- Keyboard navigation
- Focus states
- Scroll behaviour
- Smooth animation
- Responsive spacing
- Uses Design Tokens
- Uses Typography System
- Uses Layout System
- Uses reusable components
- Lighthouse Performance remains high

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
- experience-blueprint.md
- design-system.md
- typography-system.md
- layout-system.md
- component-foundation.md

Read this specification completely.

Implement ONLY the Navigation System.

Do not begin the Hero.

Do not begin the Loading Experience.

Do not modify unrelated components.

Do not install unnecessary packages.

When complete

- Run npm run lint
- Run npm run build
- Verify TypeScript
- Verify accessibility
- Verify responsive behaviour
- Update progress-tracker.md

Finally provide

- Files created
- Files modified
- Component architecture
- Motion decisions
- Accessibility decisions
- Any assumptions made