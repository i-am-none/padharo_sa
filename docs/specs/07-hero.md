# Feature Specification

# Feature 07 — Cinematic Hero Experience

---

# Purpose

Implement the cinematic Hero experience for the Padharo Sa website.

The Hero is the emotional gateway to the entire digital experience.

It should immediately communicate the atmosphere, elegance, authenticity, and warmth of Rajasthan before presenting any information.

The Hero is not a banner.

It is the opening scene of a film.

Every visual element, animation, and interaction should support storytelling.

---

# Objective

Create a premium cinematic Hero that

- captures attention within the first three seconds
- communicates luxury hospitality
- establishes emotional tone
- encourages scrolling
- introduces the brand naturally
- performs exceptionally across all devices

---

# Scope

## In Scope

- Hero video
- Hero overlay
- Headline
- Supporting copy
- Primary CTA
- Secondary CTA
- Scroll indicator
- Ambient overlays
- Responsive behaviour
- Motion
- Accessibility

---

## Out of Scope

Do NOT build

- Story Section
- Gallery
- Reservation Form
- Footer
- Navigation Logic
- Business Logic

Only the Hero.

---

# Experience Goal

The visitor should feel

Arrival

↓

Wonder

↓

Curiosity

↓

Warmth

↓

Luxury

↓

Anticipation

↓

Desire to Continue

The Hero should never feel promotional.

It should feel experiential.

---

# Storytelling Goal

The Hero should answer

"What does it feel like to visit Padharo Sa?"

It should NOT answer

"What does the restaurant sell?"

The visitor should emotionally connect before learning practical information.

---

# Hero Narrative

Imagine the visitor entering an elegant Rajasthani haveli during sunset.

Warm light.

Soft music.

Beautiful architecture.

Guests smiling.

Fresh food being prepared.

Candles.

Textures.

Hospitality.

The Hero should recreate this emotional moment digitally.

---

# Hero Structure

```
Full Screen Hero

↓

Background Video

↓

Gradient Overlay

↓

Content Container

↓

Eyebrow

↓

Headline

↓

Supporting Text

↓

Primary CTA

↓

Secondary CTA

↓

Scroll Indicator
```

---

# Viewport

Desktop

100vh

Tablet

100svh

Mobile

100svh

The Hero should always occupy the first screen.

---

# Background Video

Purpose

Create atmosphere.

Not explanation.

The video should

- autoplay
- muted
- loop
- cover the viewport
- play smoothly
- preload metadata

Avoid rapid cuts.

Prefer

5–10 second seamless loops.

---

# Video Direction

Preferred shots

- Exterior architecture
- Interior ambience
- Chef preparing food
- Guests dining
- Fire
- Steam
- Traditional décor
- Close-up craftsmanship
- Warm lighting

Avoid

Fast editing

Drone overload

People looking directly into camera

Corporate footage

Stock feeling

---

# Overlay

Add a cinematic overlay.

Purpose

Improve text readability.

Increase atmosphere.

Overlay should include

Dark gradient

Warm brown tint

Subtle vignette

Maximum opacity

60%

Never hide the video.

---

# Content Position

Desktop

Left aligned.

Vertically centered.

Tablet

Centered horizontally.

Mobile

Bottom aligned.

Readable.

Comfortable thumb reach.

---

# Eyebrow Text

Purpose

Introduce the experience.

Examples

Royal Hospitality

Authentic Rajasthan

A Journey Through India

Typography

Uppercase

Small

Wide tracking

Accent colour

Optional.

---

# Headline

Purpose

Communicate emotion.

Maximum

10 words.

Examples

Experience the Soul of Rajasthan.

Where Every Meal Becomes a Celebration.

Luxury Through Heritage.

Typography

Display XL

Playfair Display

Maximum width

700px

Avoid long headlines.

---

# Supporting Copy

Purpose

Provide context.

Maximum

2–3 lines.

Tone

Warm

Elegant

Minimal

Never marketing-heavy.

---

# Primary CTA

Purpose

Reservation.

Examples

Reserve Your Table

Book Your Experience

Style

Primary

Gold

Rounded pill

Hover

Brightness increase

Very slight lift

---

# Secondary CTA

Purpose

Explore Menu

Watch Story

Discover More

Style

Ghost

Minimal

Never compete with Primary CTA.

---

# Scroll Indicator

Purpose

Encourage exploration.

Placement

Bottom center.

Animation

Slow vertical movement.

Fade.

Loop.

Never distracting.

---

# Motion Timeline

Page Ready

↓

Hero Video Begins

↓

Overlay Appears

↓

Eyebrow Fade

↓

Headline Word Reveal

↓

Supporting Copy

↓

Primary CTA

↓

Secondary CTA

↓

Scroll Indicator

Every reveal should feel calm.

---

# GSAP Usage

Use GSAP for

- Hero timeline
- SplitText headline
- ScrollTrigger
- Overlay fade
- Scroll indicator

Avoid unnecessary complexity.

---

# Framer Motion Usage

Use only for

Buttons

Hover interactions

Minor UI transitions

---

# SplitText

Headline should reveal

Word by word.

Not character by character.

Duration

1.2–1.6 seconds.

---

# Scroll Behaviour

When scrolling

Video continues naturally.

Content fades gradually.

Navigation becomes visible.

The Hero should transition seamlessly into the next section.

---

# Parallax

Maximum

10%

Very subtle.

Purpose

Create depth.

Never create motion sickness.

---

# Accessibility

Provide

Poster image

Video fallback

Reduced motion support

Keyboard accessibility

Readable contrast

Screen reader labels

Never autoplay audio.

---

# Responsive Behaviour

Desktop

Large typography.

Wide layout.

Tablet

Slightly reduced typography.

Centered content.

Mobile

Bottom aligned.

Smaller typography.

Larger touch targets.

---

# Performance

Hero must remain performant.

Requirements

- Optimized video
- Lazy load below-the-fold assets
- GPU accelerated animations
- No layout shift
- Minimal JavaScript
- Lighthouse Performance above 90

---

# Components

Expected structure

```
features/

hero/

Hero.tsx

HeroVideo.tsx

HeroOverlay.tsx

HeroContent.tsx

HeroHeadline.tsx

HeroCopy.tsx

HeroCTA.tsx

ScrollIndicator.tsx
```

---

# Future Extensibility

Hero should later support

- Seasonal campaigns
- Brand-specific themes
- Festival experiences
- Multiple hero videos
- CMS-managed content
- Language variations

Without changing architecture.

---

# Implementation Rules

The Hero must

- consume Design Tokens
- use Typography System
- use Layout System
- use Component Foundation
- follow Motion Language
- follow Experience Blueprint

Never

- hardcode spacing
- hardcode colours
- duplicate animation logic
- create custom typography

---

# Acceptance Criteria

The feature is complete when

✓ Hero fills the viewport.

✓ Video loads smoothly.

✓ Overlay implemented.

✓ Headline reveals correctly.

✓ CTA implemented.

✓ Scroll indicator implemented.

✓ Responsive across devices.

✓ Accessible.

✓ Performance optimized.

✓ TypeScript passes.

✓ Lint passes.

✓ Build succeeds.

---

# Verification Checklist

Verify

- Hero performance
- Mobile responsiveness
- Typography hierarchy
- Animation smoothness
- Video quality
- Accessibility
- Reduced motion
- Design token usage
- Lighthouse score
- Responsive behaviour

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
- navigation.md
- loading-experience.md

Read this specification completely.

Implement ONLY the Hero.

Do not begin the Story section.

Do not begin Gallery.

Do not modify unrelated components.

Do not install unnecessary dependencies.

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
- Component architecture
- Performance decisions
- Accessibility decisions
- Any assumptions made