---
name: Aethelgard Hospitality OS
colors:
  surface: '#161310'
  surface-dim: '#161310'
  surface-bright: '#3c3835'
  surface-container-lowest: '#100e0b'
  surface-container-low: '#1e1b18'
  surface-container: '#221f1c'
  surface-container-high: '#2d2926'
  surface-container-highest: '#383430'
  on-surface: '#e9e1dc'
  on-surface-variant: '#d3c4b3'
  inverse-surface: '#e9e1dc'
  inverse-on-surface: '#33302c'
  outline: '#9c8f7f'
  outline-variant: '#4f4538'
  surface-tint: '#f2be71'
  primary: '#f2be71'
  on-primary: '#442b00'
  primary-container: '#d4a359'
  on-primary-container: '#583a00'
  inverse-primary: '#7e5713'
  secondary: '#c9c6c1'
  on-secondary: '#31312d'
  secondary-container: '#474743'
  on-secondary-container: '#b7b5af'
  tertiary: '#f0bf6d'
  on-tertiary: '#422c00'
  tertiary-container: '#d2a455'
  on-tertiary-container: '#563a00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb1'
  primary-fixed-dim: '#f2be71'
  on-primary-fixed: '#291800'
  on-primary-fixed-variant: '#614000'
  secondary-fixed: '#e5e2dc'
  secondary-fixed-dim: '#c9c6c1'
  on-secondary-fixed: '#1c1c18'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#ffdeac'
  tertiary-fixed-dim: '#f0bf6c'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#5f4100'
  background: '#161310'
  on-background: '#e9e1dc'
  surface-variant: '#383430'
typography:
  headline-2xl:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-2xl-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.12em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

### Personality & Positioning
This design system embodies high-touch heritage luxury fused with architectural enterprise precision. It is crafted for operators of luxury boutique hotels, Michelin-starred dining groups, private estates, and luxury wellness resorts. The aesthetic rejects sterile, generic SaaS tropes in favor of an editorial, warm, and cinematic presence reminiscent of heritage club concierge registries, bespoke stationery, and tactile tactile leather-bound ledgers.

### Visual Mood & Influence
The system bridges **Editorial Luxury** and **Modern Functional SaaS**:
- Deep roasted espresso and warm charcoal provide an intimate, prestigious nocturnal frame.
- Sun-washed parchment and creamy alabaster deliver warmth and effortless readability in daylight modules and operational cards.
- Polished brass and antique ochre gold establish intentional focal points, active states, and prestige tier designations.
- Ultra-subtle warm borders, precise hairline dividers, and atmospheric low-radiance glows instill deep tactile value without cluttering high-density operational data.

## Colors

### Palette Philosophy
The chromatic structure is built around a bi-thematic dialogue between deep roasted grounds and warm organic parchment:

- **Dominant Base (Dark Canvas)**: `#181512` (Deep Espresso Charcoal) anchors the overall layout and navigation. A slightly elevated surface `#221E19` is used for containers and sidebars, paired with hairline warm borders in `#342D26` or `#D4A359` with low opacity.
- **Secondary Canvas (Warm Parchment)**: `#F7F4EE` (Parchment White) and `#EFECE4` (Aged Cream) are employed for high-contrast card blocks, guest folios, and daylight operational views.
- **Accent & Metallics**: `#D4A359` (Warm Luxury Gold) acts as the primary interactive accent, paired with `#C5984A` (Polished Ochre) for active, pressed, and focus states.
- **Text Hierarchy on Espresso**: Primary text is `#F7F4EE`, muted secondary text is `#B3AAA0`, and tertiary caption text is `#7F756B`.
- **Text Hierarchy on Parchment**: Primary text is `#181512`, secondary text is `#5E574E`, and subtle labels are `#8C8276`.
- **Semantic Accents**: Success states utilize a muted olive gold `#7E9F6E`, warning states utilize warm amber `#D89042`, and critical error states utilize antique burgundy `#B84A39`.

## Typography

### Structural Pairings
- **Display & Headlines (`Playfair Display`)**: Conveys timeless elegance and hospitality heritage. High stroke contrast with graceful serifs anchors hero titles, tier cards, and section banners.
- **Interface & Operational Text (`Plus Jakarta Sans`)**: Provides crisp geometric legibility across complex operational grids, room calendars, POS order streams, and guest management tables.

### Typesetting Directives
- Section overlines, category pill labels, and step markers (e.g., `PILLAR 01`, `TAILORED OPERATIONAL PACKAGES`) must always be rendered in `label-sm`, all caps, with generous letter spacing (`0.12em`) in primary gold `#D4A359`.
- Editorial titles combine italic accents sparingly for secondary descriptors and mission statements to emulate bespoke editorial publications.

## Layout & Spacing

### Layout Grid Architecture
- **Desktop (>= 1280px)**: 12-column symmetrical fluid grid. Outer margins set to `margin` (3rem/48px) with internal column gutters of `gutter` (1.5rem/24px). Maximum container width is constrained to `1360px` to maintain optimal editorial line lengths.
- **Tablet (768px – 1279px)**: 8-column grid with `2rem` outer margins and `1.25rem` gutters.
- **Mobile (< 768px)**: 4-column grid with `1.25rem` outer margins and `1rem` gutters. Multi-column pricing and feature cards stack vertically in sequential order.

### Rhythm & Alignment
Components prioritize open, breathable negative space. High-density data grids (tape charts, POS order queues) leverage compact micro-spacers (`space-xs` and `space-sm`) within cell boundaries, while external card shells maintain structured padding of `space-lg` to `space-xl`.

## Elevation & Depth

### Atmospheric Depth Model
Visual layering relies on warm surface stacking combined with subtle atmospheric luminescence rather than heavy cold drop shadows:

- **Level 0 (Canvas Base)**: `#181512` flat backdrop.
- **Level 1 (Subtle Inset / Panels)**: Surface color `#201B17` bounded by a 1px solid hairline border of `#312922`.
- **Level 2 (Cards & Modules)**: 
  - *Dark Variant*: Surface `#25201B` with 1px border `rgba(212, 163, 89, 0.18)` and an ambient tint shadow `0 12px 36px -8px rgba(0, 0, 0, 0.45)`.
  - *Parchment Variant*: Surface `#EFECE4` or `#F7F4EE` with 1px border `rgba(197, 152, 74, 0.15)` and soft diffused warm shadow `0 14px 40px -12px rgba(24, 21, 18, 0.08)`.
- **Level 3 (Floating Modals & Flyouts)**: Surface `#2A241F` with a frosted backdrop filter (`backdrop-blur: 16px`), 1px gold highlight border `rgba(212, 163, 89, 0.35)`, and drop shadow `0 24px 54px -10px rgba(0, 0, 0, 0.65)`.
- **Prestige Accent Glow**: Highlighted packages or current active reservation states feature a subtle warm ambient halo: `0 0 40px -4px rgba(212, 163, 89, 0.14)`.

## Shapes

### Corner Curvature Language
The system adopts an architectural rounded shape language (`roundedness: 2`). This balances modern software ergonomics with the refined geometry of luxury hospitality:

- **Cards & Primary Modules**: `1rem` (16px) corner radius, creating a warm, organic card container that softens dense hospitality datasets.
- **Inner Metric Chips & Badges**: `0.5rem` (8px) corner radius for sharp structural contrast against larger card perimeters.
- **Action Buttons & Form Controls**: `0.5rem` (8px) for buttons, text inputs, and table headers, ensuring geometric alignment.
- **Pill Highlights (Status & Flags)**: Status markers such as "MOST POPULAR" or "CHECKED IN" use fully rounded caps (`9999px`) to immediately signal transient tags.

## Components

### Buttons
- **Primary Luxury Action**: Solid gold background `#D4A359` with deep espresso typography `#181512`, `label-lg`, font weight 600, padding `12px 28px`, rounded `8px`. Hover shifts to `#C5984A` with subtle scale transition and gold ambient bloom `0 4px 16px rgba(212, 163, 89, 0.3)`.
- **Secondary Ghost Action**: Transparent fill, 1px border `rgba(212, 163, 89, 0.4)`, text color `#F7F4EE`. Hover introduces background `rgba(212, 163, 89, 0.08)` and border `#D4A359`.
- **Parchment Card Action**: Transparent fill with 1px border `#181512`, text `#181512`. Hover introduces fill `#181512` and text `#F7F4EE`.

### Badges & Feature Chips
- **Category Pill Overline**: Fully rounded capsule (`9999px`), background `rgba(212, 163, 89, 0.12)`, text `#D4A359`, font `label-sm` in full uppercase, letter spacing `0.12em`.
- **Operational Data Badges (e.g., POS, Tape Chart tags)**: Warm parchment fill `rgba(24, 21, 18, 0.06)` on light cards or `rgba(247, 244, 238, 0.08)` on dark cards, 1px border in matching muted tone, radius `6px`, padding `6px 12px`, typography `label-md`.

### Cards & Pricing Tiles
- **Dual Aesthetic Options**:
  - *Warm Cream Card*: Background `#EFECE4`, text `#181512`. Body text in `#5E574E`. Checkmark icons in dark ochre `#C5984A`.
  - *Signature Dark Card (Featured Tier)*: Background `#221C16`, text `#F7F4EE`. Elevated with an accent gold top flag ("MOST POPULAR"), 1.5px border `rgba(212, 163, 89, 0.45)`, and golden glow underlay.
- **Card Spacing**: Minimum internal padding `32px` desktop, `20px` mobile.

### Inputs & Selection Controls
- **Input Fields**: Background `#1F1A15`, border 1px solid `rgba(212, 163, 89, 0.25)`, text `#F7F4EE`, placeholder text `#7F756B`. On focus: border shifts to `#D4A359` with a delicate outer ring `rgba(212, 163, 89, 0.15)`.
- **Checkboxes & Radios**: 1.5px border `#D4A359`. Checked fill is `#D4A359` with check icon in `#181512`.

### Hospitality-Specific Components
- **Room Calendar Tape Chart Cells**: Clean rectangular blocks with status states: *Occupied* (Muted Charcoal `#2A241F` with gold accent indicator), *Confirmed* (Deep Olive `#2F382A`), *Maintenance* (Subtle Wine `#362121`).
- **POS Quick-Action Kitchen Tiles**: High-contrast tiles displaying table number, guest surname, and firing countdown with prominent typographic distinction.