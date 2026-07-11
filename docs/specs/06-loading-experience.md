# Feature Specification

# Feature 06 — Loading Experience

---

# Purpose

Implement the cinematic loading experience for the Padharo Sa website.

The loading sequence serves as the opening scene of the visitor's journey.

It should establish the atmosphere, introduce the brand, mask any initial asset loading, and create anticipation before revealing the homepage.

This is not a loading spinner.

This is the opening scene of the experience.

---

# Objective

Create a premium loading sequence that:

- establishes the luxury tone
- feels calm and intentional
- hides media loading
- transitions naturally into the Hero
- introduces the Padharo Sa brand
- performs efficiently
- remains accessible

---

# Scope

## In Scope

- Full-screen loader
- Logo animation
- Brand reveal
- Loading state management
- Transition into Hero
- Accessibility
- Performance optimization
- Motion choreography

---

## Out of Scope

Do NOT build

- Hero animations
- Navigation
- Story sections
- Reservation
- Page transitions between routes

Only the initial loading experience.

---

# Experience Goal

The visitor should feel:

Curiosity

↓

Calm

↓

Anticipation

↓

Wonder

The loader should create emotional momentum before revealing the Hero.

---

# Experience Philosophy

Luxury brands never rush.

The loader should never feel like waiting.

Instead, it should feel like preparation.

Like opening the doors of a palace before welcoming a guest.

---

# Narrative

Scene 0

Black screen

↓

Ambient texture appears

↓

Padharo Sa logo slowly fades in

↓

Soft gold highlight moves across logo

↓

Brand tagline appears

↓

Ambient glow

↓

Everything fades away

↓

Hero video appears naturally

No abrupt transitions.

---

# Duration

Target

1.5 – 2.5 seconds

Never exceed

3 seconds

If assets finish loading early,

continue the animation naturally.

Never abruptly skip.

---

# Loading States

## State 1

Background

Solid dark background.

No visible UI.

---

## State 2

Logo Reveal

Logo fades in.

Opacity only.

No scaling.

No rotation.

---

## State 3

Ambient Light

Very subtle warm glow.

Maximum opacity

15%

Creates warmth.

Never flashy.

---

## State 4

Brand Tagline

Optional

Small editorial typography.

Example

"Experience the Royal Hospitality of Rajasthan"

Fade in.

Pause.

Fade out.

---

## State 5

Transition

Loader fades.

Hero video begins simultaneously.

Navigation fades shortly afterward.

The visitor should never notice the transition.

---

# Visual Direction

Background

Dark charcoal.

Warm brown undertones.

Logo

Gold or light ivory.

Typography

Elegant.

Minimal.

Large negative space.

Avoid unnecessary graphics.

---

# Motion Philosophy

Every movement should feel

Slow

Elegant

Confident

Purposeful

Avoid

Bounce

Elastic

Rotation

Flash

Overshoot

Fast scaling

---

# Animation Sequence

Timeline

0ms

↓

Background

200ms

↓

Logo Fade

600ms

↓

Glow Appears

900ms

↓

Tagline Appears

1400ms

↓

Pause

1800ms

↓

Fade Out

2200ms

↓

Hero Fade In

2500ms

This timeline should remain flexible depending on asset loading.

---

# GSAP Usage

GSAP should orchestrate

- Logo reveal
- Glow animation
- Timeline sequencing
- Hero transition

Avoid complex timelines.

Keep implementation maintainable.

---

# Framer Motion Usage

Optional.

Only for

Opacity transitions.

Simple component state.

Avoid mixing responsibilities.

---

# Background

Solid color.

Optional

Very subtle animated texture.

Maximum opacity

5%

No particles.

No excessive effects.

---

# Logo Behaviour

Fade only.

Optional

Very slight upward movement

Maximum

8px

Never rotate.

Never bounce.

Never overshoot.

---

# Brand Tagline

Typography

Display Small

Centered

Maximum

1 line

Optional.

Should disappear before Hero appears.

---

# Sound

No autoplay audio.

Future versions may support optional ambient sound.

Current implementation

Silent.

---

# Skip Behaviour

The loader should automatically disappear.

Do not provide a Skip button.

Luxury experiences should feel uninterrupted.

---

# Performance

The loader must never increase page load time.

The animation should run while assets load.

Avoid blocking rendering.

GPU accelerated properties only.

Prefer

Opacity

Transform

Avoid

Width

Height

Margin

Top

Left

---

# Accessibility

Respect

prefers-reduced-motion

Reduced Motion

Skip timeline.

Use simple fades.

Never trap keyboard focus.

Loader should not interfere with screen readers.

---

# Responsive Behaviour

Loader should remain identical across

Desktop

Tablet

Mobile

Only typography scales.

---

# Theme

Dark mode only.

Warm gold accents.

No bright colors.

---

# Components

Expected structure

```
components/

loading/

LoadingScreen.tsx

LoadingLogo.tsx

LoadingTagline.tsx

LoadingOverlay.tsx
```

---

# State Management

The loader should expose a single loading state.

Example

```
Loading

↓

Completed

↓

Hero
```

Avoid multiple complex loading states.

---

# File Structure

Expected

```
components/

loading/

hooks/

useLoading.ts

lib/

loading.ts
```

Keep the feature isolated.

---

# Styling Rules

Consume

Design Tokens

Typography System

Layout System

Motion Language

Never hardcode

Colors

Spacing

Typography

Animation durations

---

# Future Extensibility

Future versions may support

- Seasonal branding
- Festival themes
- Brand-specific intros
- Route transitions
- Video preloading
- Progressive asset loading

Current implementation should remain simple enough to support these later.

---

# Acceptance Criteria

The feature is complete when

✓ Full-screen loader exists.

✓ Logo reveal implemented.

✓ Smooth Hero transition implemented.

✓ Responsive.

✓ Accessible.

✓ Reduced-motion supported.

✓ Build succeeds.

✓ TypeScript succeeds.

✓ Lint succeeds.

✓ No layout shift introduced.

---

# Verification Checklist

Verify

- Animation smoothness
- Hero transition
- Asset loading
- No flashing
- No abrupt cuts
- GPU acceleration
- Responsive layout
- Accessibility
- Reduced motion
- Performance impact

---

# AI Instructions

Before implementation

Read

- project-overview.md
- brand-context.md
- ui-context.md
- motion-language.md
- experience-blueprint.md
- tech-architecture.md
- development-rules.md
- design-system.md
- typography-system.md
- layout-system.md
- component-foundation.md

Read this specification completely.

Implement ONLY the Loading Experience.

Do not begin Navigation.

Do not begin Hero.

Do not modify unrelated files.

Do not install unnecessary packages.

When complete

- Run npm run lint
- Run npm run build
- Verify TypeScript
- Verify accessibility
- Verify responsive behaviour
- Update progress-tracker.md

Finally summarize

- Files created
- Files modified
- Animation timeline
- Performance considerations
- Accessibility decisions
- Any assumptions made