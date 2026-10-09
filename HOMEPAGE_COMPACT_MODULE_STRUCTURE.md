# SPEAR: Compact Homepage Architecture & Subpage Blueprint

> **Objective:** Streamline all 20 SPEAR modules and 7 Core Hub services into **6 high-impact Master Pillars** for the homepage to prevent content bloat, while establishing the architecture for dedicated drill-down feature pages.

---

## 1. Homepage Strategy: The "6 Master Pillars" Model

Instead of listing 20 separate modules on the homepage (which creates cognitive overload and endless scrolling), we compact the entire ecosystem into **6 Master Pillars**.

Each Master Pillar acts as an anchor on the homepage, displaying:
* A bold headline and core value proposition.
* **3 to 4 nested sub-feature tags / pills** showing what's powered underneath.
* A clean link or CTA (*"Explore Details →"*) designed to open a dedicated subpage.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           THE 6 HOMEPAGE PILLARS                            │
├───────────────────────────────┬─────────────────────────────────────────────┤
│ 1. Lodging & PMS Core         │ Ingests bookings, tape chart, room folios   │
│ 2. Direct Booking & OTAs      │ Booking engine, channel manager, dynamic RMS│
│ 3. Point of Sale & KDS        │ Offline Tauri POS, kitchen display, tickets │
│ 4. Dining Floor & QR Ordering │ Visual table layouts, QR & tablet ordering  │
│ 5. Smart Inventory & Recipes  │ Kitchen deductions, recipe COGS, assets     │
│ 6. Contactless Guest Journey  │ Mobile check-in, Apple/Google keys, WhatsApp│
└───────────────────────────────┴─────────────────────────────────────────────┘
```

---

## 2. Pillar-by-Pillar Nested Breakdown

### Pillar 01: Cloud Hotel PMS & Lodging Core
* **Homepage Title:** Hotel PMS & Front Desk Operations
* **Tagline:** One master record for every room, rate, and guest folio.
* **Nested Sub-Features Compacted Inside:**
  * 🔹 **Master Tape Chart:** Visual drag-and-drop room assignments and stay extensions.
  * 🔹 **Unified Guest Folio:** Combines accommodation, room charges, and restaurant dining bills into one checkout invoice.
  * 🔹 **Event-Driven Housekeeping Dispatch:** Automatically alerts cleaning staff upon guest checkout (`property-inventory`).
  * 🔹 **Biometric Staff Timeclock:** Shift scheduling and geofenced attendance (`staff-management`).
* **Target Subpage Route:** `/modules/hotel-pms`

---

### Pillar 02: Distribution & Dynamic Revenue (Booking Engine + OTAs + RMS)
* **Homepage Title:** Direct Bookings & 2-Way Channel Distribution
* **Tagline:** Maximize direct revenue while synchronizing across global OTAs.
* **Nested Sub-Features Compacted Inside:**
  * 🔹 **Commission-Free Direct Booking Engine:** Embedded guest booking widget with instant payment authorization (`booking-engine`).
  * 🔹 **2-Way OTA Channel Manager:** Real-time rate and inventory synchronization with Booking.com, Expedia, Agoda, and Airbnb.
  * 🔹 **RMS Dynamic Pricing Oracle:** Rule-based surge pricing triggered by occupancy thresholds (`rms`).
  * 🔹 **Custom Web Storefronts:** Branded hotel subdomains and domains (`tenant-websites`).
* **Target Subpage Route:** `/modules/distribution-and-booking`

---

### Pillar 03: High-Speed POS & Kitchen Display (F&B Floor & Kitchen)
* **Homepage Title:** Hospitality Point of Sale & Kitchen Display
* **Tagline:** Offline-resilient POS hardware integration paired with real-time kitchen routing.
* **Nested Sub-Features Compacted Inside:**
  * 🔹 **Tauri Desktop Offline-First POS:** Runs locally; takes orders and prints receipts even if WiFi drops (`pos-system`).
  * 🔹 **Kitchen Display System (KDS):** Station routing with Green/Yellow/Red time-coded ticket prioritization (`kds`).
  * 🔹 **One-Tap Room Folio Charging:** Seamlessly routes dining tabs to the guest's hotel room.
  * 🔹 **Anti-Fraud Append-Only Ledger:** Tamper-proof transaction logging synced to the financial hub.
* **Target Subpage Route:** `/modules/pos-and-kitchen`

---

### Pillar 04: Dining Room Floor Plans & Digital Ordering
* **Homepage Title:** Interactive Floor Management & Digital Menus
* **Tagline:** Let guests reserve specific tables and order effortlessly from any device.
* **Nested Sub-Features Compacted Inside:**
  * 🔹 **Interactive Floor Plan Designer:** Live table statuses, capacity control, and waitlists (`restaurant-reservations`).
  * 🔹 **Auto-Table Seating to POS:** Transitioning a guest to `SEATED` automatically opens a live ticket on the POS.
  * 🔹 **Multi-Mode Digital Ordering:** Guest QR code ordering (PWA), waiter tablets, and print menus (`menu-ordering`).
  * 🔹 **Live Menu Taxonomy:** Real-time pricing, dietary tags, and visual item catalogs (`digital-menus`).
* **Target Subpage Route:** `/modules/floor-and-ordering`

---

### Pillar 05: Real-Time Inventory, Recipe Costing & Assets
* **Homepage Title:** Smart Stock Control & Automated Recipe Costing
* **Tagline:** Automatic ingredient deduction per meal sold with instant stockout protection.
* **Nested Sub-Features Compacted Inside:**
  * 🔹 **Recipe Blueprint Deductions:** Deducts exact gram/unit ingredients when meals are rung up on the POS (`kitchen-inventory`).
  * 🔹 **Automatic "86" Protocol:** Disables menu items across digital menus and QR codes the moment stock hits zero.
  * 🔹 **COGS & General Ledger Sync:** Synchronizes food and beverage margins directly with accounting (`finance`).
  * 🔹 **Property Housekeeping Inventory:** Audits room consumables and high-value room assets to prevent shrinkage (`property-inventory`).
* **Target Subpage Route:** `/modules/inventory-and-costing`

---

### Pillar 06: Contactless Guest Journey & Digital Keys
* **Homepage Title:** Contactless Guest Experience & Digital Wallet Keys
* **Tagline:** Bypass front desk lines with WhatsApp magic links and phone-as-a-key access.
* **Nested Sub-Features Compacted Inside:**
  * 🔹 **24h Pre-Arrival Magic Links:** Contactless check-in with T&C signing and incidental holds via Hyperswitch (`mobile-checkin`).
  * 🔹 **Apple & Google Wallet Smart Keys:** Contactless digital room keys automatically synced to PMS check-in/out times (`smart-locks`).
  * 🔹 **Omnichannel Guest Messaging:** Priority fallback routing (`WhatsApp` → `SMS` → `Email`) with deliverability webhooks (`guest-messaging`).
  * 🔹 **360° Guest Profile & CRM:** Tracks lifetime spend, preferences, and dietary restrictions (`guest-crm`).
* **Target Subpage Route:** `/modules/guest-experience`

---

### 🌟 Bonus Pillar for Resorts & Groups: Sales & Banqueting
*(Can be featured as an enterprise highlight badge or card)*
* **Sub-Features Compacted Inside:**
  * Banquet Event Orders (BEO) generation.
  * Synchronized group room blocks in PMS + dining floor space reservation + bulk kitchen ingredient forecasting.
* **Target Subpage Route:** `/modules/sales-and-banqueting`

---

## 3. How to Present This on the Homepage (Clean UI Pattern)

To keep the homepage light and aesthetic without text clutter, each pillar card on the homepage uses a **Compact Pill/Badge Grid**:

### Example Card UI Layout:
```
┌────────────────────────────────────────────────────────┐
│ 06 / 06                                                │
│ Contactless Guest Experience & Digital Wallet Keys    │
│ "Bypass the front desk. Unlock rooms directly with     │
│ Apple & Google Wallet."                                │
│                                                        │
│ [Pre-Arrival Magic Link]   [Apple & Google Wallet Keys]│
│ [WhatsApp / SMS Inbox]     [360° Guest CRM Profile]    │
│                                                        │
│ [ Learn More → ]                                       │
└────────────────────────────────────────────────────────┘
```

**Benefits of this structure:**
1. **Zero Clutter:** Visitors immediately grasp the breadth of SPEAR in 6 clean cards.
2. **High-Tech Appeal:** Visitors immediately spot modern differentiators like *Apple Wallet Keys* and *Offline Tauri POS* at a glance.
3. **SEO Hierarchy:** The homepage targets high-level hospitality keywords, while dedicated subpages target long-tail search intent (e.g. *"hotel smart lock software"*, *"offline restaurant POS"*).

---

## 4. Next.js Dedicated Subpages Blueprint

When ready to build dedicated drill-down pages, the folder structure will be:

```
app/
├── (marketing)/
│   ├── page.tsx                     <-- Clean Homepage (6 Master Pillars)
│   ├── modules/
│   │   ├── hotel-pms/page.tsx       <-- Deep-dive into PMS, Folios & Housekeeping
│   │   ├── distribution/page.tsx    <-- Deep-dive into Direct Booking, OTAs & RMS
│   │   ├── pos-kitchen/page.tsx     <-- Deep-dive into Tauri POS & KDS
│   │   ├── floor-ordering/page.tsx  <-- Deep-dive into Floor Plans & QR Menus
│   │   ├── inventory/page.tsx       <-- Deep-dive into Recipe Costing & Stock
│   │   ├── guest-experience/page.tsx<-- Deep-dive into Digital Keys & Mobile Check-in
│   │   └── banqueting/page.tsx      <-- Deep-dive into BEOs & Event Management
│   ├── solutions/
│   │   ├── restaurants/page.tsx     <-- The F&B Package Persona Page
│   │   ├── hotels/page.tsx          <-- The Accommodation Package Persona Page
│   │   └── resorts/page.tsx         <-- The All-in-One Package Persona Page
│   ├── privacy/page.tsx             <-- Privacy Policy
│   └── terms/page.tsx               <-- Terms of Service
```

---

## 5. Summary of Benefits

1. **Main Page Stays Fast & Elegant:** Preserves the minimalist, luxury aesthetic and fast load times.
2. **Every Master Spec is Accounted For:** None of the 20 modules are lost; they are nested neatly into intuitive categories.
3. **Clear Path to Expansion:** Adding new subpages can happen iteratively without disrupting the live homepage.
