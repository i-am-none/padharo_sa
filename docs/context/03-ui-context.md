# UI Context

---

# Theme

Padharo Sa follows an **Experiential Luxury Hospitality** design language.

The interface should feel timeless, immersive, refined, and emotionally engaging. Every screen should resemble the digital equivalent of entering a beautifully restored Rajasthani haveli rather than browsing a conventional restaurant website.

The visual hierarchy must prioritize storytelling before functionality.

The design should communicate warmth, craftsmanship, authenticity, and sophistication through restraint rather than excess.

The interface must never resemble:

* Generic restaurant templates
* Corporate SaaS dashboards
* E-commerce stores
* Food delivery platforms
* Fast-food websites
* Overly decorative "Indian" websites

The website should instead feel inspired by premium hospitality brands such as luxury resorts, boutique hotels, Michelin-starred restaurants, and destination experiences.

The experience should be:

* Elegant
* Cinematic
* Spacious
* Slow
* Immersive
* Premium
* Warm
* Authentic

The design language must always prioritize readability, accessibility, performance, and visual harmony over decorative complexity.

---

# Design Philosophy

Every section should answer one question:

**"How do we make the visitor feel like they have already entered Padharo Sa before they ever visit the restaurant?"**

Visual design should create anticipation.

Content should reveal itself gradually.

Animations should support storytelling.

White space should communicate confidence.

Images should become the primary storytelling medium.

Typography should feel luxurious without becoming ornamental.

---

# Theme Mode

Dark Mode Only

No Light Theme.

The website is designed around warm ambient lighting similar to an upscale restaurant during evening service.

Dark backgrounds enhance photography, typography, and cinematic motion while reinforcing premium perception.

---

# Colors

All colours must be defined using CSS Custom Properties.

Hardcoded HEX values are strictly prohibited inside components.

Every UI component must consume the design tokens below.

| Role                 | CSS Variable         | Value              |
| -------------------- | -------------------- | ------------------ |
| Page Background      | `--bg-base`          | `#0F0B09`          |
| Secondary Background | `--bg-secondary`     | `#18120E`          |
| Surface              | `--bg-surface`       | `#221A15`          |
| Elevated Surface     | `--bg-elevated`      | `#2C211A`          |
| Primary Text         | `--text-primary`     | `#F7F2EA`          |
| Secondary Text       | `--text-secondary`   | `#D7C6B3`          |
| Muted Text           | `--text-muted`       | `#A58F7A`          |
| Heading Accent       | `--text-heading`     | `#FFF7EF`          |
| Primary Accent       | `--accent-primary`   | `#C89A4B`          |
| Secondary Accent     | `--accent-secondary` | `#9C6432`          |
| Accent Hover         | `--accent-hover`     | `#D7AC61`          |
| Border               | `--border-default`   | `#3A2D24`          |
| Soft Border          | `--border-soft`      | `#2B211A`          |
| Divider              | `--divider`          | `#443428`          |
| Error                | `--state-error`      | `#C75A5A`          |
| Success              | `--state-success`    | `#6E9F6A`          |
| Warning              | `--state-warning`    | `#D29A3A`          |
| Overlay              | `--overlay`          | `rgba(8,6,5,0.72)` |

---

# Color Philosophy

Colours should never compete for attention.

The interface is intentionally restrained.

Gold exists to guide attention.

Dark surfaces exist to showcase photography.

Warm neutrals create atmosphere.

Avoid bright reds, saturated oranges, or loud yellows except when used naturally inside photography.

---

# Typography

Typography should communicate heritage and elegance while remaining highly readable.

| Role              | Font             | Variable         |
| ----------------- | ---------------- | ---------------- |
| Display Headlines | Playfair Display | `--font-display` |
| UI Text           | Inter            | `--font-sans`    |
| Small Labels      | Inter            | `--font-label`   |
| Numbers           | Inter            | `--font-numeric` |
| Mono / Debug      | JetBrains Mono   | `--font-mono`    |

---

# Typography Scale

Hero Heading

72–96px

Primary Section Heading

56–64px

Secondary Heading

36–44px

Card Heading

24–28px

Body Large

20px

Body

18px

Small Text

16px

Caption

14px

Never reduce body text below 16px.

---

# Font Weight Guidelines

Display Headings

700

Primary Headings

600

Body Text

400

Navigation

500

Buttons

600

Captions

400

---

# Spacing System

Use an 8-point spacing system.

Approved spacing values

4

8

12

16

24

32

40

48

64

80

96

128

Whitespace is considered a luxury element.

Never overcrowd layouts.

Every section should breathe.

---

# Border Radius

| Context          | Class            |
| ---------------- | ---------------- |
| Buttons          | `rounded-full`   |
| Inputs           | `rounded-xl`     |
| Cards            | `rounded-3xl`    |
| Images           | `rounded-3xl`    |
| Video Containers | `rounded-[32px]` |
| Modals           | `rounded-[36px]` |
| Gallery Items    | `rounded-[28px]` |

Avoid sharp corners unless intentionally used for editorial layouts.

---

# Shadows

Use soft layered shadows.

Avoid hard drop shadows.

Preferred

Large blur

Low opacity

Natural depth

Avoid

Dark floating cards

Heavy elevation

Material Design style shadows

---

# Component Library

Framework

shadcn/ui

Styling

Tailwind CSS v4

Icons

Lucide React

Animation

GSAP

Framer Motion

Smooth Scroll

Lenis

3D

Three.js

Images

Next/Image

Video

HTML5 Video

Never build base UI components from scratch.

Always extend shadcn/ui where appropriate.

Custom components belong inside

```text
components/custom
```

Shared UI belongs inside

```text
components/ui
```

---

# Layout Patterns

## Hero

Full viewport cinematic section.

Large video.

Minimal copy.

Centered focus.

---

## Story Sections

Alternating editorial layouts.

Large imagery.

Generous whitespace.

One clear narrative.

---

## Gallery

Masonry or editorial composition.

Avoid equal-sized grids.

Images should feel curated.

---

## Menu Preview

Large cards.

Editorial spacing.

Minimal information.

Photography first.

---

## Reservation

Centered experience.

Minimal distractions.

One primary call-to-action.

---

## Footer

Large.

Elegant.

Destination-like.

Not information dense.

---

# Grid System

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

Maximum Content Width

1440px

Reading Width

720px

Section Padding

120px Desktop

80px Tablet

64px Mobile

---

# Motion Language

Motion should reinforce emotion.

Every animation must have purpose.

Allowed animations

* Fade
* Scale
* Mask Reveal
* Clip Path Reveal
* Split Text
* Image Reveal
* Slow Parallax
* Sticky Scroll
* Horizontal Scroll Gallery
* Section Pinning
* Cinematic Video Transition

Avoid

* Bounce
* Elastic
* Cartoon easing
* Continuous floating
* Flashing
* Rotation gimmicks

Preferred easing

```
power2.out

power3.out

expo.out
```

Animation duration

0.4s–1.2s

Story transitions may last longer.

---

# Photography Guidelines

Photography should dominate the experience.

Images should emphasize

* Ingredients
* Fire
* Steam
* Texture
* Human interaction
* Craftsmanship
* Architecture
* Interior ambience
* Warm lighting

Never use

* Stock photos
* Artificial HDR
* Overly saturated food
* Busy compositions

---

# Buttons

Buttons should feel calm.

Primary

Gold outline

Dark fill

Elegant hover

Secondary

Transparent

Thin border

Text Link

Minimal underline animation

Buttons should never feel aggressive.

---

# Forms

Minimal.

Large spacing.

Few fields.

Elegant focus states.

No unnecessary borders.

---

# Icons

Library

Lucide React

Style

Outline only

Stroke Width

1.75

Sizes

Inline

`h-4 w-4`

Navigation

`h-5 w-5`

Hero

`h-6 w-6`

Avoid filled icons.

Avoid emoji inside the interface.

---

# Accessibility

Maintain WCAG AA contrast.

Keyboard navigation must function throughout.

Every image requires descriptive alt text.

Every interactive element requires a visible focus state.

Animations must respect the user's reduced motion preferences.

---

# Responsive Behaviour

Desktop First.

Gracefully adapt to tablet and mobile.

Never remove storytelling.

Instead, simplify layouts while preserving narrative flow.

Animations should degrade intelligently on lower-powered devices.

---

# Performance Guidelines

Target Lighthouse Performance Score above 90.

Optimize all imagery.

Lazy-load below-the-fold assets.

Use Next/Image for every image.

Prefer CSS transforms over layout-triggering animations.

Avoid unnecessary JavaScript.

Every animation must justify its performance cost.

---

# Non-Negotiable UI Rules

* Never hardcode colours.
* Never hardcode spacing.
* Never hardcode typography.
* Never create inconsistent button styles.
* Never introduce a new component without checking the existing design system.
* Every page must reuse existing components before creating new ones.
* Every animation must enhance storytelling.
* Every layout must communicate premium hospitality.
* Every design decision should reinforce authenticity, elegance, warmth, and timeless craftsmanship.
