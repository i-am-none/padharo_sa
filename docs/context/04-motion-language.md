# Motion Language

---

# Motion Philosophy

Motion is not decoration.

Motion is storytelling.

Every movement should help guide emotion, establish hierarchy, reinforce quality, and create anticipation.

Visitors should never consciously notice the animations.

Instead, they should simply feel that the website is calm, luxurious, and beautifully crafted.

Motion should always communicate confidence.

Confident brands never rush.

The website should feel like a slow cinematic journey through Rajasthan rather than a collection of webpages.

---

# Motion Principles

Every animation must satisfy at least one of the following goals.

* Reveal information.
* Direct attention.
* Reinforce hierarchy.
* Reward interaction.
* Improve spatial understanding.
* Build anticipation.
* Support storytelling.
* Increase perceived craftsmanship.

If an animation satisfies none of these objectives, it should not exist.

---

# Emotional Journey

Every scroll position should create a specific emotional response.

| Section     | Emotion    | Motion Behaviour                       |
| ----------- | ---------- | -------------------------------------- |
| Hero        | Wonder     | Slow reveal with cinematic entrance    |
| Brand Story | Curiosity  | Layered storytelling animations        |
| Heritage    | Connection | Gentle transitions between narratives  |
| Cuisine     | Desire     | Rich image reveals and subtle parallax |
| Experience  | Immersion  | Long-form cinematic scrolling          |
| Reservation | Confidence | Calm, distraction-free motion          |
| Footer      | Completion | Soft fade into final invitation        |

Motion should support these emotions rather than distract from them.

---

# Motion Characteristics

Animations should always feel

Elegant

Natural

Organic

Deliberate

Slow

Smooth

Confident

Immersive

Never feel

Mechanical

Aggressive

Playful

Cartoonish

Elastic

Overly energetic

Chaotic

Attention-seeking

---

# Motion Timing

## Micro Interaction

150ms–250ms

Examples

Hover

Button

Icon

Input focus

---

## Small Transition

300ms–500ms

Examples

Card reveal

Image fade

Menu transition

Modal

---

## Story Transition

700ms–1200ms

Examples

Section reveal

Hero animation

Video transition

Image sequence

Large text reveal

---

## Cinematic Transition

1200ms–2500ms

Reserved only for

Hero entrance

Page introduction

Large visual storytelling moments

---

# Preferred Easings

Primary

Power2 Out

Secondary

Power3 Out

Luxury Reveal

Expo Out

Slow Cinematic

Sine InOut

Avoid

Bounce

Elastic

Back

Overshoot

Rubber Band

Spring effects unless used intentionally for micro interactions.

---

# Animation Hierarchy

Motion should exist in layers.

## Layer One

Page

Large transitions

Hero

Scene changes

---

## Layer Two

Sections

Fade

Mask reveal

Parallax

---

## Layer Three

Components

Cards

Images

Buttons

Navigation

---

## Layer Four

Micro Interactions

Hover

Cursor

Icons

Buttons

Form fields

The deeper the layer, the smaller the movement.

---

# Scroll Philosophy

Scrolling is the primary storytelling mechanism.

Visitors should feel like they are travelling through a carefully choreographed narrative.

Never dump information all at once.

Content should reveal itself progressively.

Scrolling should encourage curiosity.

Every section should invite the visitor into the next one.

---

# Scroll Behaviour

Use Lenis for smooth scrolling.

Scrolling should feel weighted.

Never feel slippery.

Never snap unexpectedly.

Scroll speed should remain consistent.

Respect reduced-motion accessibility settings.

---

# Hero Motion

Hero should occupy the entire first viewport.

Sequence

1.

Page fades from black.

2.

Ambient sound or video begins.

3.

Hero video fades in.

4.

Background slowly scales from 105% to 100%.

5.

Headline reveals word by word.

6.

Subheading fades upward.

7.

Primary CTA fades in.

8.

Scroll indicator appears last.

Everything should feel calm.

Never rush the hero.

---

# Navigation Behaviour

Navigation should remain unobtrusive.

Initial State

Transparent.

As the visitor scrolls

Background softly darkens.

Glass effect appears.

Logo slightly scales.

Navigation links fade.

Reservation button becomes more prominent.

Never animate aggressively.

---

# Section Reveal

Every major section follows the same rhythm.

1.

Whitespace

↓

2.

Image

↓

3.

Headline

↓

4.

Body

↓

5.

Supporting media

↓

6.

CTA

This creates consistency throughout the experience.

---

# Text Animation

Use SplitText for major headlines.

Preferred

Word reveal

Line reveal

Mask reveal

Opacity transition

Avoid

Typing effects

Scrambling text

Fast slide animations

Letters flying individually

Headlines should feel as if they are emerging from darkness.

---

# Image Behaviour

Images should feel alive.

Allowed

Fade

Mask Reveal

Scale

Parallax

Slow Zoom

Clip Reveal

Image Sequence

Avoid

Rotation

Bounce

Flip

Spin

Excessive blur

---

# Video Behaviour

Videos should autoplay.

Muted.

Looped.

Optimized.

Videos should not compete with text.

Video exists to create atmosphere rather than explain information.

Use slow cinematic footage.

Avoid rapid editing.

---

# Parallax

Parallax should be subtle.

Maximum movement

10%

Purpose

Increase depth.

Never create motion sickness.

Never use exaggerated parallax.

---

# Gallery Motion

Gallery should feel curated.

Images should enter one after another.

Hover

Slight zoom.

Soft shadow increase.

Text gently appears.

Avoid dramatic movement.

---

# Menu Cards

Cards should reveal gradually.

Image first.

Then title.

Then description.

Then CTA.

Cards should never pop into existence.

---

# Buttons

Primary Hover

Brightness increases.

Gold glow.

Slight upward movement.

Secondary Hover

Border brightens.

Background subtly changes.

Click

Very small scale reduction.

No bounce.

---

# Forms

Focus state

Elegant glow.

Labels animate softly.

Validation

Fade.

Never shake.

Success

Gentle confirmation.

---

# Cursor Behaviour

Desktop only.

Cursor should remain minimal.

Optional

Image preview.

Soft magnetic buttons.

Custom cursor only if it improves usability.

Avoid novelty cursors.

---

# Loading Experience

Loading should feel intentional.

Never show default browser loaders.

Use

Logo reveal.

Subtle animation.

Warm ambience.

Short loading messages.

Maximum loading time should be minimized through optimization.

---

# Page Transitions

Fade.

Mask reveal.

Video continuity.

Soft overlay.

Never slide entire pages.

Transitions should resemble cinema editing rather than PowerPoint.

---

# Motion Density

Not every element should animate.

Approximately

20%

Animated

80%

Static

Stillness creates contrast.

Luxury brands use restraint.

---

# Performance Rules

Animations must use GPU-accelerated properties.

Prefer

Transform

Opacity

Filter (sparingly)

Avoid animating

Width

Height

Top

Left

Margin

Padding

Use GSAP ScrollTrigger for complex storytelling.

Use CSS transitions for simple interactions.

Lazy-load animation libraries where appropriate.

---

# Accessibility

Respect prefers-reduced-motion.

Replace large animations with fades.

Ensure content remains understandable without animation.

No animation should block interaction.

---

# Technical Stack

Smooth Scroll

Lenis

Complex Storytelling

GSAP + ScrollTrigger

Component Motion

Framer Motion

3D Experiences

Three.js

Text Animation

GSAP SplitText

SVG Animation

GSAP DrawSVG

Image Sequences

GSAP

Video

Native HTML5

---

# Motion Rules

Every animation must improve storytelling.

Every animation must improve usability.

Every animation must reinforce craftsmanship.

Every animation must be performant.

Every animation must be accessible.

Every animation must feel intentional.

Every animation must reflect luxury hospitality.

When in doubt,

choose less motion,

slower motion,

and better timing.

Elegance is created through restraint, not complexity.
