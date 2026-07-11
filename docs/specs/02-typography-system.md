# Feature Specification

# Feature 02 — Typography System

---

# Purpose

Implement the complete typography system for the Padharo Sa website.

Typography is one of the strongest visual identifiers of the brand. It should communicate elegance, confidence, heritage, warmth, and luxury while remaining highly readable across all screen sizes.

This feature establishes every typography primitive that future UI components will consume.

No page-specific typography should be created during this feature.

---

# Objective

Build a reusable typography system that provides:

- Font loading
- Font configuration
- Responsive typography scale
- Typography utilities
- Semantic heading styles
- Utility classes
- Consistent spacing
- Accessible typography

After implementation, every text element throughout the application should use this system.

---

# Scope

## In Scope

- Font configuration
- Font loading
- Typography tokens
- Typography utilities
- Semantic heading styles
- Responsive typography
- Line heights
- Letter spacing
- Font weights
- Text utilities

---

## Out of Scope

Do NOT build

- Hero copy
- Navigation text
- Buttons
- Cards
- Sections
- Pages
- Marketing copy

Only typography foundations.

---

# Typography Philosophy

Typography should feel like luxury hospitality.

It should never feel:

- Corporate
- Technical
- Trendy
- Startup-like
- Loud

Typography should communicate:

- Elegance
- Heritage
- Confidence
- Simplicity
- Craftsmanship

Large headlines should feel cinematic.

Body copy should feel effortless to read.

Whitespace is considered part of typography.

---

# Font Stack

Display Font

Playfair Display

Purpose

- Hero
- Large headlines
- Editorial storytelling

---

Primary Font

Inter

Purpose

- Body
- Navigation
- Forms
- Buttons
- UI

---

Monospace

JetBrains Mono

Purpose

Development only.

Never use inside marketing pages.

---

# Font Loading

Fonts should use

next/font

Do not load fonts through Google CDN.

Benefits

- Self-hosted
- Better performance
- No layout shift
- Better privacy

---

# Typography Scale

## Display

Display XL

96px

Display L

80px

Display M

64px

Display S

56px

---

## Headings

H1

56px

H2

48px

H3

40px

H4

32px

H5

24px

H6

20px

---

## Body

Body XL

20px

Body

18px

Body Small

16px

Caption

14px

Label

13px

Overline

12px

---

# Responsive Scaling

Desktop

Use the default scale.

Tablet

Reduce display typography by approximately 10%.

Mobile

Reduce display typography by approximately 20%.

Body text should never be smaller than 16px.

---

# Font Weights

Display

700

Headings

600

Navigation

500

Body

400

Labels

500

Buttons

600

Caption

400

Never use font-weight 900.

Avoid ultra-light typography.

---

# Line Heights

Display

1.05

Headings

1.15

Body

1.75

Caption

1.5

Label

1.3

Readable rhythm is more important than fitting additional text.

---

# Letter Spacing

Display

-0.03em

Headings

-0.02em

Body

0

Caption

0.02em

Uppercase Labels

0.12em

Do not invent arbitrary tracking values.

---

# Text Width

Long-form copy

Maximum

680px

Editorial copy

Maximum

720px

Hero headline

Maximum

12 words

Body paragraphs

Maximum

3–5 lines before introducing whitespace.

---

# Text Alignment

Headlines

Prefer left alignment.

Hero may use centered layout when appropriate.

Body copy

Left aligned.

Avoid justified text.

---

# Typography Components

The implementation should create reusable typography primitives.

Examples

Display

Heading

Paragraph

Caption

Label

Quote

Overline

Section Title

Eyebrow

Each component should support

- Variant
- Weight
- Color
- Alignment
- Responsive behaviour

---

# Utility Classes

Provide reusable typography utilities.

Examples

text-display-xl

text-display-lg

text-h1

text-h2

text-body

text-caption

tracking-display

tracking-wide

leading-relaxed

Do not hardcode typography values inside components.

---

# Semantic HTML

Always use semantic elements.

Examples

Hero

h1

Major Sections

h2

Subsections

h3

Paragraph

p

Labels

label

Avoid skipping heading levels.

---

# Color Usage

Typography colors must consume design tokens.

Never hardcode colors.

Examples

Primary

Secondary

Muted

Accent

Inverse

---

# Accessibility

Minimum body size

16px

Maintain WCAG AA contrast.

Headings must remain readable.

Avoid relying solely on font weight for hierarchy.

Support browser zoom.

Support screen readers.

---

# Performance

Use

next/font

Avoid loading unnecessary font weights.

Only load required subsets.

Reduce layout shift.

Avoid duplicate font imports.

---

# File Structure

Expected implementation

```
styles/

typography.css

lib/

typography.ts

components/

ui/

typography/

```

Typography should remain reusable.

---

# Implementation Rules

Typography values must come from design tokens.

Never hardcode font sizes inside feature components.

Never duplicate typography utilities.

Always consume the shared typography system.

---

# Acceptance Criteria

The feature is complete when

✓ Fonts load through next/font.

✓ Typography utilities exist.

✓ Responsive typography is implemented.

✓ Semantic heading hierarchy is established.

✓ Typography components are reusable.

✓ No hardcoded font values exist.

✓ Build succeeds.

✓ TypeScript passes.

✓ Lint passes.

---

# Verification Checklist

Verify

- Responsive typography
- No layout shift
- Accessible contrast
- Semantic HTML
- No duplicated utilities
- Uses design tokens
- Uses next/font
- Follows Development Rules

---

# AI Instructions

Before implementation

Read

- project-overview.md
- brand-context.md
- ui-context.md
- design-system.md
- tech-architecture.md
- development-rules.md

Read this specification completely.

Implement only the Typography System.

Do not modify unrelated files.

Do not begin the Navigation.

Do not begin the Hero.

Do not create page-specific typography.

When finished

- Verify build
- Verify lint
- Verify TypeScript
- Update progress-tracker.md

Finally summarize:

- Files created
- Files modified
- Typography utilities created
- Any implementation decisions