# Feature Specification

# Feature 08 — Atmosphere & Arrival

---

# Purpose

Implement the Atmosphere & Arrival section for the Padharo Sa website.

This section serves as the emotional bridge between the Hero and the Brand Story.

Its purpose is not to provide information.

Its purpose is to make the visitor emotionally experience the restaurant before understanding it.

This section should create the feeling of slowly walking into Padharo Sa for the very first time.

---

# Objective

Create an immersive editorial experience that

- extends the emotional momentum created by the Hero
- introduces the restaurant's atmosphere
- establishes luxury through restraint
- increases curiosity
- encourages visitors to continue scrolling
- prepares visitors for the Brand Story

---

# Scope

## In Scope

- Editorial layout
- Cinematic imagery
- Ambient looping video (optional)
- Headline
- Supporting copy
- Scroll-driven motion
- Parallax
- Responsive behaviour
- Accessibility

---

## Out of Scope

Do NOT build

- Brand Story
- Heritage
- Cuisine
- Reservation
- Gallery

Only the Atmosphere & Arrival experience.

---

# Experience Goal

The visitor should feel

Arrival

↓

Warmth

↓

Comfort

↓

Curiosity

↓

Luxury

↓

Belonging

This section should never feel promotional.

It should feel emotional.

---

# Narrative

The Hero welcomes the visitor.

The Atmosphere section allows them to step inside.

Imagine opening large carved wooden doors and entering a softly lit haveli.

Warm lighting.

Traditional architecture.

The aroma of spices.

Conversations.

Soft music.

Beautiful interiors.

Everything feels calm.

The visitor should unconsciously imagine themselves there.

---

# Storytelling Goal

This section should answer

"What does it feel like to walk inside?"

Not

"What food do we serve?"

The emotional experience always comes before product information.

---

# Information Density

Very low.

Less copy.

More imagery.

More whitespace.

Large visual storytelling.

Visitors should spend more time looking than reading.

---

# Section Structure

```
Editorial Layout

↓

Large Cinematic Image / Video

↓

Eyebrow

↓

Headline

↓

Supporting Copy

↓

Optional Quote

↓

Ambient Media
```

---

# Layout

Desktop

Asymmetrical editorial composition.

Large media dominates.

Typography occupies approximately one-third of the layout.

Tablet

Balanced two-column layout.

Mobile

Single-column.

Media first.

Typography follows naturally.

---

# Visual Direction

Photography should communicate

- Warm lighting
- Architectural beauty
- Traditional textures
- Elegant interiors
- Authentic materials
- Hospitality
- Calmness

Preferred subjects

- Handcrafted décor
- Wooden furniture
- Traditional lanterns
- Marble textures
- Dining ambience
- Courtyard views
- Warm candlelight
- Guests enjoying conversations

Avoid

- Busy compositions
- Crowded tables
- Overly staged photography
- Generic stock imagery

---

# Video Direction (Optional)

Short cinematic loop.

Length

6–10 seconds.

Suggested shots

- Flickering candle
- Steam rising from tea
- Slow camera movement through the dining area
- Chef plating a dish
- Fabric moving gently
- Traditional décor

No fast cuts.

No dramatic camera movement.

---

# Eyebrow

Purpose

Introduce the emotional tone.

Examples

Royal Hospitality

An Invitation to Slow Down

Crafted with Warmth

Authentically Rajasthan

Typography

Uppercase.

Wide letter spacing.

Accent colour.

---

# Headline

Purpose

Capture the feeling.

Maximum

8 words.

Examples

Where Hospitality Becomes Tradition.

Step Into Timeless Rajasthan.

Every Detail Welcomes You.

Typography

Display Large.

Playfair Display.

Maximum width

650px.

---

# Supporting Copy

Purpose

Describe the atmosphere.

Maximum

2–3 short paragraphs.

Tone

Elegant.

Warm.

Editorial.

Conversational.

Never sound like marketing.

Example direction

Every handcrafted detail, every aroma, and every warm greeting is designed to make you feel at home while celebrating the rich traditions of Rajasthan.

---

# Optional Editorial Quote

Short quotation.

Maximum

20 words.

Example

"Hospitality begins long before the first meal is served."

Displayed in italic display typography.

Optional.

---

# Media Behaviour

Images should reveal gradually.

Video should autoplay silently.

Media should never distract from typography.

Movement should remain subtle.

---

# Motion Philosophy

Motion should feel

Calm

Natural

Deliberate

Luxury

Avoid

Bounce

Elastic

Rotation

Fast slides

Oversized scaling

---

# Motion Timeline

Visitor enters section

↓

Media slowly fades in

↓

Eyebrow appears

↓

Headline reveals line-by-line

↓

Supporting copy fades upward

↓

Ambient media subtly animates

↓

Section transitions naturally into Brand Story

---

# GSAP Usage

Use GSAP for

- ScrollTrigger
- Text reveal
- Parallax
- Fade transitions
- Timeline sequencing

Keep timelines simple.

---

# Framer Motion Usage

Use only for

Hover interactions

Minor opacity transitions

Avoid using Framer Motion for scroll storytelling.

---

# Parallax

Maximum movement

10%

Purpose

Increase depth.

Not spectacle.

Media should feel alive rather than moving.

---

# Scroll Behaviour

As the visitor scrolls

Media gently shifts.

Typography remains readable.

Motion should encourage continued scrolling.

The transition into the Brand Story should feel seamless.

---

# Colour Palette

Use existing design tokens.

Background

Dark.

Typography

Warm ivory.

Accent

Gold.

Media

Warm natural tones.

Never introduce new colours.

---

# Accessibility

Support

Keyboard navigation.

Reduced motion.

Semantic HTML.

Readable contrast.

Alternative text for all media.

Video poster image.

Autoplay muted.

No flashing.

---

# Responsive Behaviour

Desktop

Editorial asymmetrical layout.

Tablet

Balanced split layout.

Mobile

Single-column.

Typography below media.

Readable spacing.

---

# Performance

Media must be optimized.

Use

Next/Image

Native HTML5 Video

Lazy-load non-critical assets.

GPU accelerated transforms only.

Avoid unnecessary JavaScript.

Target Lighthouse Performance above 90.

---

# Components

Expected structure

```
features/

atmosphere/

Atmosphere.tsx

AtmosphereMedia.tsx

AtmosphereContent.tsx

AtmosphereHeadline.tsx

AtmosphereQuote.tsx
```

Reusable components only.

---

# Content Strategy

Copy should describe

Feeling

Light

Textures

Hospitality

Emotion

Avoid

Restaurant history

Founder information

Business milestones

Menu descriptions

Those belong in later sections.

---

# Future Extensibility

This section should later support

- CMS-managed content
- Seasonal visuals
- Multiple layouts
- Brand-specific variations
- Video replacement without code changes

---

# Implementation Rules

The section must

- consume Design Tokens
- use Typography System
- use Layout System
- use Component Foundation
- follow Motion Language
- follow Experience Blueprint

Never

- hardcode spacing
- duplicate animations
- invent typography styles
- introduce unnecessary dependencies

---

# Acceptance Criteria

The feature is complete when

✓ Editorial layout implemented.

✓ Media behaves responsively.

✓ Headline reveals smoothly.

✓ Typography follows design system.

✓ Scroll animation implemented.

✓ Responsive across all devices.

✓ Accessible.

✓ Performance optimized.

✓ Build succeeds.

✓ TypeScript passes.

✓ Lint passes.

---

# Verification Checklist

Verify

- Editorial composition
- Responsive layout
- Smooth parallax
- Typography hierarchy
- Accessibility
- Reduced motion
- Image optimization
- Video optimization
- Design token usage
- Lighthouse score

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
- hero.md

Read this specification completely.

Implement ONLY the Atmosphere & Arrival section.

Do not begin the Brand Story.

Do not begin Heritage.

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
- Performance decisions
- Accessibility decisions
- Any assumptions made