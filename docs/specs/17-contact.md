# Contact Experience Specification

# Overview

The Contact page is the final human touchpoint before a visitor becomes a guest.

Unlike traditional contact pages that simply list an address and phone number, this page should reassure visitors that reaching out is effortless, personal, and welcoming.

The experience should communicate:

- Hospitality
- Accessibility
- Trust
- Warmth
- Professionalism

The visitor should leave with the feeling:

"We're looking forward to welcoming you."

---

# Philosophy

The Contact page is not about providing information.

It is about beginning a conversation.

Every interaction should feel personal.

The design should reflect the same hospitality that guests receive inside the restaurant.

---

# Objectives

## Build Confidence

Visitors should instantly know:

- where the restaurant is
- how to contact the team
- when the restaurant is open
- how quickly they can expect a response

---

## Remove Friction

Provide multiple communication channels.

Visitors should never wonder:

"How do I reach them?"

---

## Increase Reservations

Every contact opportunity should naturally guide visitors toward reserving a table.

The page should complement—not replace—the Reservation page.

---

# Route

Create:

```
/contact
```

Navbar:

```
Contact
```

---

# Page Structure

```
Contact Page

↓

Hero

↓

Contact Overview

↓

Restaurant Information

↓

Interactive Map

↓

Contact Form

↓

Social & Messaging

↓

Frequently Asked Questions

↓

Reservation CTA
```

---

# Hero Section

Purpose:

Welcome visitors.

Eyebrow:

```
Get In Touch
```

Headline:

```
We'd Love To Hear From You
```

Supporting Text:

Whether you're planning a celebration, making an enquiry, or simply saying hello, our team is always ready to help.

Visual:

Warm hospitality imagery.

Avoid generic office imagery.

---

# Contact Overview

Display elegant information cards.

Cards:

## Call Us

Display:

- phone number

CTA:

```
Call Now
```

---

## Email

Display:

official email

CTA:

```
Send Email
```

---

## Visit Us

Display:

restaurant address

CTA:

```
Open in Google Maps
```

---

## Business Hours

Display:

Opening hours

Current status:

Open Now

or

Closed

Future-ready for dynamic updates.

---

# Restaurant Information

Present information in editorial format.

Include:

Restaurant Name

Address

Opening Hours

Cuisine

Dress Code (optional)

Parking Availability

Accessibility Information

Payment Methods

---

# Interactive Map

Embed:

Google Maps

Requirements:

Responsive

Lazy loaded

Rounded container

Dark aesthetic integration

Buttons:

```
Get Directions
```

```
Open In Google Maps
```

Future:

Support Apple Maps deep link.

---

# Contact Form

Purpose:

General enquiries.

Fields:

Required:

Name

Email

Message

Optional:

Phone Number

Subject

Occasion

Examples:

Birthday

Anniversary

Corporate

Other

---

# Form Behaviour

Client-side validation.

Loading state:

```
Sending...
```

Success:

```
Thank you.

Our team will respond shortly.
```

Failure:

Clear error message.

No page refresh.

---

# Messaging Platforms

Create a dedicated section.

Headline:

```
Continue The Conversation
```

Provide elegant cards for:

## WhatsApp

CTA:

```
Chat On WhatsApp
```

---

## Telegram

CTA:

```
Open Telegram
```

---

## Phone

CTA:

```
Call Restaurant
```

---

## Email

CTA:

```
Email Us
```

Future:

Messenger

Instagram

WeChat (if required)

---

# Social Presence

Purpose:

Allow visitors to stay connected.

Platforms:

Instagram

Facebook

TikTok

Tripadvisor

Google Business

Design:

Minimal icon cards.

Do not dominate the page.

---

# FAQ Section

Common Questions:

Do I need a reservation?

Do you offer vegan options?

Do you host private events?

Where can I park?

Do you provide takeaway?

Can I celebrate birthdays?

Do you offer catering?

Create accordion layout.

---

# Final CTA

Headline:

```
Your Table Is Waiting
```

Buttons:

Reserve Table

Explore Menu

This section connects Contact with Reservation.

---

# Component Architecture

Create:

```
features/

marketing/

contact/

├── contact-page/

├── contact-hero/

├── contact-cards/

├── restaurant-information/

├── map-section/

├── contact-form/

├── messaging-platforms/

├── faq/

└── reservation-cta/
```

---

# Visual Language

Follow:

- design-system.md
- typography-system.md
- layout-system.md
- motion-language.md

Use:

Dark luxury palette

Warm gold accents

Editorial spacing

Elegant serif headings

Readable body typography

---

# Motion

Subtle.

Hero:

Fade reveal.

Cards:

Stagger reveal.

Map:

Gentle fade.

Accordion:

Smooth expand/collapse.

Buttons:

Soft hover transitions.

Avoid flashy animations.

---

# Responsive Behaviour

Desktop:

Editorial multi-column layouts.

Tablet:

Reduce columns.

Mobile:

Single-column.

Large tap targets.

Sticky contact actions if appropriate.

---

# Accessibility

Provide:

✓ Semantic HTML

✓ Keyboard navigation

✓ Focus states

✓ Proper labels

✓ ARIA for accordion

✓ Screen-reader friendly forms

---

# SEO

Metadata

Title:

```
Contact | Jain's Little India Mauritius
```

Description:

```
Get in touch with Jain's Little India. Find our location, opening hours, contact details and reserve your dining experience in Mauritius.
```

Structured Data:

Restaurant

LocalBusiness

ContactPoint

---

# Performance

Lazy-load:

Google Maps

Social embeds

Heavy assets

Optimize:

Images

Icons

Fonts

---

# Security

Validate all form inputs.

Protect future API endpoints.

Implement:

Rate limiting

Spam prevention

CSRF protection

Future CAPTCHA integration.

Never expose API keys.

---

# Future Integrations

## AI Concierge

Visitors ask:

"I'd like to organise a birthday dinner."

AI responds and guides them.

---

## CRM Integration

Automatically create customer enquiries.

---

## WhatsApp AI

Forward enquiries to AI concierge.

---

## Live Chat

Optional future enhancement.

---

## Appointment Scheduling

Private dining

Corporate events

Festival reservations

---

# Success Criteria

The Contact experience is complete when:

✓ Visitors can contact the restaurant through multiple channels

✓ Maps work correctly

✓ Contact form validates successfully

✓ Messaging platforms are available

✓ FAQ answers common questions

✓ Reservation CTA is present

✓ Mobile experience is excellent

✓ Design feels welcoming and premium

✓ Architecture supports future AI concierge integration