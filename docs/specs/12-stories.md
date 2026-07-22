# Stories Experience Specification

## Overview

The Stories section is an editorial storytelling platform designed to transform the Padharo Sa website from a static restaurant website into a continuously evolving digital knowledge source.

Stories communicate the deeper identity behind the brand:

- Rajasthan's culinary heritage
- Traditional vegetarian cuisine
- Family recipes
- Ingredients and preparation techniques
- Hospitality philosophy
- Cultural connections between India and Mauritius
- Restaurant experiences and events

The purpose of Stories is not only customer engagement but also long-term digital authority.

Each published story contributes to:

- Search engine visibility
- Organic discovery
- AI assistant recommendations
- Brand credibility
- Customer education
- Internal linking opportunities

The Stories section should feel like a luxury hospitality journal rather than a conventional blog.

Reference feeling:

- Luxury hotel editorial magazines
- Michelin restaurant storytelling
- Heritage publications
- Culinary documentaries


---

# Goals

## Brand Storytelling

Create an immersive platform where visitors understand the philosophy, heritage, and cultural meaning behind Padharo Sa.

Visitors should feel:

"I am not just visiting a restaurant. I am experiencing Rajasthan."


---

## Search Visibility Growth

Create structured, indexable content that improves:

- Google ranking
- Local search visibility
- AI search discoverability
- Topic authority

Stories should target meaningful search queries such as:

- Best Indian vegetarian restaurant in Mauritius
- Authentic Rajasthani food Mauritius
- Traditional Indian cuisine Mauritius
- Dal Baati Mauritius
- Vegetarian fine dining Mauritius


---

## Customer Trust Building

Help customers understand:

- food origins
- cooking philosophy
- ingredients
- traditions
- restaurant values

The website should answer customer questions before they visit.


---

# Experience Principles

## Editorial First

Stories should prioritize storytelling quality over publishing frequency.

Every article should feel intentional and premium.


---

## Heritage Over Promotion

Stories should not feel like advertisements.

Avoid:

"Visit our restaurant today."

Prefer:

"Discover the centuries-old tradition behind this dish."


---

## Visual Storytelling

Every story should combine:

- cinematic photography
- elegant typography
- readable content
- meaningful narrative


---

# Information Architecture

## Routes

### Stories Index

```
/stories
```

Purpose:

Display all published stories.


---

### Individual Story

```
/stories/[slug]
```

Purpose:

Display a complete editorial article.


Example:

```
/stories/the-soul-of-rajasthan
```


---

# Stories Landing Page

## Structure


```
Stories Page

|
|
Hero Introduction

|
|
Featured Story

|
|
Latest Stories Grid

|
|
Categories

|
|
Newsletter / Reservation CTA
```


---

# Stories Hero Section

## Purpose

Introduce the editorial nature of the page.


Content:

Eyebrow:

```
Stories
```


Headline:

Example:

```
Discover the traditions,
flavours and stories behind Rajasthan.
```


Supporting text:

Explain that every dish carries history, craftsmanship, and culture.


Visual:

Large cinematic image or video.


---

# Story Card System


## Purpose

Create a premium preview experience.


Cards should not look like generic blog cards.


## Structure


```
Story Card

|
|-- Cover Image
|
|-- Category
|
|-- Title
|
|-- Short Description
|
|-- Read Story CTA
```


---

# Story Card Visual Rules


## Image

Requirements:

- cinematic photography
- rounded corners
- high contrast
- warm tones
- authentic food/culture imagery


Hover:

```
Image scale:
1 → 1.05

Overlay:
fade in

CTA:
slight movement
```


---

## Typography


Category:

Small uppercase label.

Example:

```
HERITAGE
```


Title:

Large serif typography.


Description:

Readable sans-serif.


CTA:

Elegant minimal link.


Example:

```
Explore Story →
```


---

# Story Detail Page Template


Every story follows this structure:


```
Story Page

|
|
Category

|
|
Title

|
|
Author + Date

|
|
Hero Media

|
|
Introduction

|
|
Article Sections

|
|
Pull Quote

|
|
Related Stories

|
|
Reservation CTA

```


---

# Article Content Structure


## Introduction

A short emotional opening.

Purpose:

Create curiosity.


Example:

```
Before a dish reaches the table,
it carries generations of memories.
```


---

## Sections

Each article should contain:


```
Heading

Paragraphs

Supporting Image

Reflection / Quote
```


---

## Pull Quote


Purpose:

Create visual rhythm.


Example:

```
Food is not merely sustenance.
It is memory, tradition,
and love served on a plate.
```


---

# Initial Stories


## Story One


Slug:

```
the-soul-of-rajasthan
```


Title:

```
The Soul of Rajasthan:
A Journey Through Royal Vegetarian Cuisine
```


Category:

```
Heritage & Cuisine
```


Summary:

```
Explore the traditions, ingredients,
and culinary wisdom that shaped Rajasthan's
iconic vegetarian cuisine.
```


Purpose:

SEO focus:

- Rajasthani cuisine
- authentic Indian food
- vegetarian cuisine Mauritius


---

## Story Two


Slug:

```
dal-baati-churma-heritage
```


Title:

```
Dal Baati Churma:
The Heritage Dish That Carries Rajasthan's Identity
```


Category:

```
Signature Dishes
```


Summary:

```
Discover the history behind Rajasthan's most
recognised dish and the traditions preserved
through every serving.
```


Purpose:

SEO focus:

- Dal Baati Mauritius
- traditional Rajasthan dishes
- Indian vegetarian cuisine


---

# Content Categories


Initial categories:


## Heritage

Stories about:

- Rajasthan history
- traditions
- culture


---

## Cuisine

Stories about:

- recipes
- cooking techniques
- ingredients


---

## Signature Dishes

Stories about:

- famous dishes
- preparation methods
- origins


---

## Hospitality

Stories about:

- guest experiences
- restaurant philosophy
- service traditions


---

## Mauritius Connection

Stories about:

- Indian diaspora
- cultural exchange
- local community


---

# Data Model


Future CMS-compatible structure:


```typescript
Story {

 id: string

 slug: string

 title: string

 subtitle: string

 category: string

 excerpt: string

 coverImage: string

 content: RichText

 author: string

 publishedAt: Date


 seoTitle: string

 seoDescription: string

 keywords: string[]

}
```


---

# SEO Requirements


Every story page must include:


## Metadata

```
Title

Description

Keywords

Open Graph image

Canonical URL
```


---

## Structured Data

Implement Article schema:


```json
{
 "@type": "Article",
 "publisher": {
   "@type": "Organization",
   "name": "Jain's Little India"
 }
}
```


---

# Internal Linking Strategy


Stories should connect the entire website.


Examples:


Story:

"The History of Dal Baati"


Links to:

```
Menu
 ↓
Dal Baati dish
```


Story:

"Rajasthan Hospitality"


Links to:

```
Experience page
 ↓
Reservation
```


This creates stronger website authority.


---

# Motion Language


## Story Cards


Entrance:

```
opacity:
0 → 1

translateY:
30px → 0
```


Hover:

```
image scale:
1 → 1.05
```


---

## Story Detail Page


Hero image:

```
opacity:
0 → 1

scale:
1.05 → 1
```


Content:

```
fade upward
```


Avoid:

- excessive parallax
- scroll locking
- cinematic hero replacement


Stories should feel calm and premium.


---

# Responsive Behaviour


## Desktop

Layout:

- featured story
- multi-column story grid
- large typography


---

## Tablet

Layout:

- reduced spacing
- two-column cards


---

## Mobile

Layout:

```
Hero

Featured Story

Story Cards

CTA
```


Cards become single column.


---

# Components


Create:


```
features/

marketing/

stories/

├── story-page/
├── story-card/
├── story-grid/
├── story-hero/
├── story-content/
├── related-stories/
└── category-filter/
```


---

# Out of Scope


The first implementation will NOT include:


- CMS dashboard
- author management
- comments
- user accounts
- newsletter system
- database storage


Content will initially use static data.


---

# Future Expansion


Possible future integrations:


## CMS

Examples:

- Sanity
- Strapi
- Payload CMS


## AI Content Assistant

Possible features:

- SEO suggestions
- article outlines
- keyword research
- social media repurposing


## Distribution Pipeline

Automatically publish story excerpts to:

- Instagram
- Facebook
- LinkedIn
- Reddit
- Google Business Profile


---

# Success Criteria


The Stories system is successful when:


1. Visitors can discover and read beautifully designed stories.

2. Each story has a unique SEO-friendly URL.

3. Stories strengthen the brand narrative.

4. Content structure supports future CMS integration.

5. Pages are optimised for search engines and AI discovery.

6. The experience feels like a premium hospitality publication rather than a generic blog.