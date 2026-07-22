# Gallery Experience Specification


## Overview

The Gallery page is a visual storytelling experience designed to showcase the world of Padharo Sa / Jain's Little India.

The purpose is not only to display photographs.

The purpose is to communicate:

- atmosphere
- hospitality
- cuisine
- heritage
- emotions
- guest experiences


The gallery should make visitors feel:

"I want to experience this place."


---

# Objectives


## Create Emotional Connection

Images should communicate:

- warmth
- authenticity
- royal Indian hospitality
- culinary craftsmanship


The visitor should understand the experience before visiting.


---

## Increase Conversion

Gallery supports the journey:


```
Discover Brand

↓

Explore Gallery

↓

Feel Experience

↓

Reserve Table
```


---

## Build Social Trust

The website should become the primary visual destination.

However, visitors should also be able to explore authentic content from:


- Instagram
- Facebook
- TikTok
- Tripadvisor
- Google


The website remains the main experience.

Social platforms act as verification channels.


---

# Design Philosophy


## Website First

The gallery should prioritize owned content.


Primary:

```
Website Gallery
```

Secondary:

```
External Social Platforms
```


Do not simply embed Instagram feeds as the main gallery.

Reasons:

- slower performance
- dependency on external platforms
- reduced design control
- inconsistent branding


---

# Route


Create:


```
/gallery
```


Navigation:

Navbar:


```
Gallery
```


opens this page.


---

# Page Architecture


Structure:


```
Gallery Page


|

Hero Introduction


|

Featured Gallery


|

Photo Collection


|

Video Moments


|

Social Experience


|

Reservation CTA

```


---

# Hero Section


## Purpose

Introduce gallery as a journey.


Content:


Eyebrow:

```
Visual Journey
```


Headline:


Example:


```
A Glimpse Into Our World
```


Supporting text:


Explain that every frame captures the traditions, flavours, and hospitality of Rajasthan.


Visual:


Large cinematic image/video.


---

# Featured Gallery Section


## Purpose

Create the main visual attraction.


This should receive the highest attention.


Layout:


Editorial masonry/grid layout.


Example:


```
┌──────────┬───────┐
│          │       │
│  Image   │Image  │
│          ├───────┤
│          │Video  │
├──────────┴───────┤
│      Image       │
└──────────────────┘
```


Avoid a boring equal grid.


---

# Media Frames


Every image/video should have a premium frame.


Design:


- rounded corners
- subtle borders
- elegant spacing
- dark background
- gold accent details


Example:


```
┌─────────────────┐
│                 │
│                 │
│     PHOTO       │
│                 │
│                 │
└─────────────────┘
```


The frame itself should feel like a museum display.


---

# Media Categories


Organize gallery into:


## Culinary Stories


Content:

- signature dishes
- preparation
- ingredients
- plating


Examples:

- dal baati
- thali presentation
- sweets
- traditional recipes


---

## Dining Atmosphere


Content:


- interiors
- lighting
- seating
- ambience


---

## Hospitality Moments


Content:


- guest interactions
- celebrations
- family dining
- service moments


---

## Heritage & Culture


Content:


- Rajasthan traditions
- artwork
- textiles
- cultural details


---

## Behind The Scenes


Content:


- chefs
- kitchen
- preparation process


---

# Image Card Component


Create reusable component:


```
GalleryCard
```


Properties:


```typescript
{
id:string;

type:
'image' | 'video';

src:string;

title:string;

category:string;

description?:string;

}
```


---

# Video Experience


Support:


- cinematic restaurant videos
- food preparation clips
- ambience videos


Requirements:


Videos should:

- autoplay only when appropriate
- be muted by default
- lazy load
- support mobile performance


Controls:

Optional.


---

# Lightbox Experience


Clicking media opens:


```
Fullscreen Gallery Viewer
```


Features:


- image/video preview
- next/previous navigation
- close button


Maintain premium animation.


---

# Social Media Integration


## Purpose


Allow visitors to continue exploring.


Create:


```
Follow Our Journey
```


Section.


---

# Social Platform Cards


Platforms:


## Instagram


Purpose:

Daily stories and visual updates.


CTA:

```
Visit Instagram
```


---

## Facebook


Purpose:

Community updates.


CTA:

```
Visit Facebook
```


---

## TikTok


Purpose:

Short-form videos.


CTA:

```
Watch Videos
```


---

## Tripadvisor


Purpose:

Traveler experiences.


CTA:

```
Explore Tripadvisor
```


---

## Google


Purpose:

Photos and customer uploads.


CTA:

```
View Google Photos
```


---

# Social Section Design


Do not make it dominant.


Priority:


```
Website Gallery

90% attention


Social Links

10% attention
```


Social media should support the brand, not replace it.


---

# Component Architecture


Create:


```
features/

marketing/

gallery/


├── gallery-hero/

├── gallery-grid/

├── gallery-card/

├── gallery-lightbox/

├── gallery-category-filter/

├── gallery-video/

└── social-platforms/

```


---

# Data Architecture


Prepare for future CMS.


Example:


```typescript

GalleryItem {

id:string;

type:
"image" | "video";


category:
"food" |
"ambience" |
"culture" |
"hospitality";


title:string;

description?:string;

src:string;


}

```


---

# Layout Rules


Follow:


- layout-system.md
- design-system.md


Desktop:


Large editorial composition.


Tablet:


Adaptive masonry.


Mobile:


Single column.


---

# Typography


Headlines:


Elegant serif typography.


Descriptions:


Readable sans-serif.


Captions:


Small uppercase labels.


---

# Motion Design


Follow existing motion language.


## Entrance


Media:


```
opacity:
0 → 1


translateY:
30px → 0
```


---

## Hover


Images:


- slight scale
- brightness adjustment
- frame emphasis


Avoid excessive effects.


---

# Performance Requirements


Gallery can become heavy.

Implement:


## Image Optimization


Use:

- Next Image component
- responsive sizes
- WebP/AVIF


---

## Lazy Loading


Only load visible media.


---

## Video Optimization


Use:

- compressed formats
- lazy loading
- poster images


---

# SEO Requirements


Metadata:


Title:


```
Gallery | Jain's Little India Mauritius
```


Description:


```
Explore authentic Indian cuisine, hospitality, interiors, and cultural moments from Jain's Little India Mauritius.
```


---

# Accessibility


Ensure:


✓ image alt text

✓ keyboard lightbox navigation

✓ video accessibility

✓ proper button labels


---

# Future Expansion


Possible additions:


## AI Generated Gallery Search


Example:


Visitor:

"Show me romantic dinner experiences"


AI:

Displays relevant gallery items.


---

## User Generated Content


Future:


Allow guests to submit:

- photos
- videos
- experiences


After moderation.


---

# Security Considerations


Do not:

- directly expose storage credentials
- trust external media URLs blindly


Future:


Use:

- CDN
- secure storage
- image validation


---

# Success Criteria


Gallery is complete when:


✓ Website gallery is the primary experience

✓ Images have premium frames

✓ Videos integrate beautifully

✓ Social platforms are accessible

✓ Mobile experience is excellent

✓ Performance remains optimized

✓ Gallery supports reservation conversion
