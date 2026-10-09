# SPEAR Master Operational Workflow

This document outlines the operational workflow of the **SPEAR (Smart Platform for Every Accommodation & Restaurant)** ecosystem. It provides a structured breakdown of the 20 distinct modules and the 7 core Hub applications, illustrating how they integrate to form a unified, highly resilient, and scalable Hospitality OS.

## 1. System-Wide Operational Principles
* **Hub-and-Spoke Deployment Model:** The system operates via a central Hub that deploys and manages individual client instances (Spokes).
* **Shared Server & Database Architecture:** To maximize cost-efficiency, the platform utilizes a shared server and shared database model (moving away from isolated per-tenant databases). The Hub ensures clients only access their own data.
* **Modular Monolith:** Core infrastructure is unified in `core-hub`, while business logic is decoupled into `/modules`.
* **Asynchronous Communication:** Modules communicate via a Redis-backed Transactional Outbox using the CloudEvents 1.0 standard.

## 2. CI/CD & Deployment Pipeline
1. **Local Development:** Code is written on local development machines.
2. **GitHub:** Code is pushed to private GitHub repositories where safeguards and architecture tests run.
3. **Staging Server:** Code is pushed from GitHub to the Staging Server, which holds the final, operational-ready version for testing.
4. **The SaaS Hub Server:** Pulls the operational code from Staging.
5. **Client Servers (Spokes):** The Hub deploys the system to the shared client servers, activating only the specific modules each customer has purchased via their license.

## 3. The Core Hub (The Control Plane)
[View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/core-hub/OPERATIONAL_WORKFLOW.md)

The Hub acts as both the deployment engine and the central SaaS operations dashboard. It allows business developers to deploy the system to clients frictionlessly.
* **`tenants`**: Manages the client registry, domain mappings, and orchestrates the deployment of client workspaces onto the shared servers.
* **`authentication`**: Handles stateless JWT issuance and ensures secure multi-tenant data isolation within the shared database.
* **`billing`**: Manages tenant subscriptions, 14-day trials, SaaS invoicing, and usage metering.
* **`finance`**: The master financial engine handling the strict append-only General Ledger.
* **`events`**: Manages the CloudEvents Event Bus and Transactional Outbox.
* **`analytics`**: The ETL data warehouse engine for global metrics.
* **`saas_admin`**: The frictionless platform owner's dashboard for deploying systems to clients without needing developers.

## 4. Module Group: Accommodations & Revenue
* **`hotel-pms` (Property Management System)**: [View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/modules/hotel-pms/OPERATIONAL_WORKFLOW.md)
  The central nervous system and absolute **Master Record**. It ingests bookings from both direct and OTA sources, allocating physical rooms at check-in. It controls the master state of the hotel, broadcasting CloudEvents when guests check-in/out (triggering smart locks and housekeeping). Finally, it packages the guest's folio (room + F&B charges) and passes it to the POS system for check-out billing.
* **`booking-engine`**: [View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/modules/booking-engine/OPERATIONAL_WORKFLOW.md)
  The direct booking widget embedded on tenant websites. It allows guests to search inventory and book directly. It calculates pricing (including dynamic RMS rates) and handles payment processing (deposit holds) before instantly firing an event to the PMS to lock the room.
* **The Channel Manager (External Bridge)**: Bridges external OTAs (Booking.com, Agoda) to the PMS.
* **`rms`**: [View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/modules/rms/OPERATIONAL_WORKFLOW.md)
  The Revenue Management System. Acts as the dynamic pricing oracle. Listens to PMS occupancy events to trigger rule-based price adjustments (e.g., raising prices at 80% capacity) and updates all OTAs. Future phases will integrate AI predictive analytics and external market intelligence.
* **`sales-banqueting`**: [View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/modules/sales-banqueting/OPERATIONAL_WORKFLOW.md)
  Event pipeline management and Banquet Event Order (BEO) generation. Coordinates cross-module resources by blocking group rooms via the PMS, reserving floor space via the restaurant reservation engine, and syncing set menus/buffets with the F&B pipeline.

## 5. Module Group: Food & Beverage Operations
* **`pos-system`**: [View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/modules/pos-system/OPERATIONAL_WORKFLOW.md)
  The primary Point of Sale, uniquely built as a standalone **Tauri desktop app** for extreme offline resilience. It connects to local hardware (receipt/bill printers via USB/IP), enforces a strict append-only True Accounting ledger (preventing fraud), and syncs with the central cloud via a Local Server Buffer. It routes room charges to the PMS and fires events to KDS and Inventory.
* **`menu-ordering`**: [View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/modules/menu-ordering/OPERATIONAL_WORKFLOW.md)
  The multi-interface frontend intake pipeline for F&B. It supports three distinct operational styles: Guest QR Code ordering (PWA), optimized Staff Waiter Tablets, and Traditional Printed Menus (via manual POS entry). Regardless of entry point, it funnels all orders into the automated backend pipeline.
* **`digital-menus`**: [View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/modules/digital-menus/OPERATIONAL_WORKFLOW.md)
  The backend configuration hub for F&B. Managers define the menu taxonomy, pricing, visual assets, and critically, the **Recipe Blueprints** (exact ingredient composition) used by the inventory module. It is the single source of truth for what appears on the `menu-ordering` frontend.
* **`kds` (Kitchen Display System)**: [View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/modules/kds/OPERATIONAL_WORKFLOW.md)
  The kitchen orchestration engine. It routes incoming orders to prep stations. It supports both legacy physical ticket printing and modern digital "dumb TV" displays (via video casting). Digital displays feature time-based color coding (Green/Yellow/Red) to visually prioritize the cooking pipeline.
* **`kitchen-inventory`**: [View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/modules/kitchen-inventory/OPERATIONAL_WORKFLOW.md)
  Tracks raw F&B materials in real-time. It listens asynchronously to `pos.meal_sold` events and uses the recipe blueprints to deduct exact ingredient amounts. It triggers "86" protocols if stock hits zero, supports physical invoice input (future AI OCR), and synchronizes Cost of Goods Sold (COGS) directly with the Finance module.
* **`restaurant-reservations`**: [View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/modules/restaurant-reservations/OPERATIONAL_WORKFLOW.md)
  Manages physical floor plans and table bookings. Exports an interactive booking widget to the tenant websites. It orchestrates the guest's arrival, transitioning a reservation to a `SEATED` state, which automatically opens a tab in the POS system and begins the F&B service pipeline.

## 6. Module Group: Guest Experience & Journey
* **`mobile-checkin`**: [View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/modules/mobile-checkin/OPERATIONAL_WORKFLOW.md)
  A frictionless check-in portal designed for line-bypassing via proactive "Magic Links" sent 24 hours before arrival. It handles T&C signing, incidental payment holds via Hyperswitch, biometric identity verification (Google/Apple), and provisions Apple/Google Wallet smart keys upon completion. It also acts as the primary touchpoint for automated room upsells.
* **`guest-messaging`**: [View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/modules/guest-messaging/OPERATIONAL_WORKFLOW.md)
  A unified omnichannel inbox for staff to converse with guests. It features intelligent priority fallback routing (WhatsApp -> SMS -> Email) and monitors deliverability via webhooks to ensure critical alerts (like Mobile Check-in links) never fail silently.
* **`guest-crm`**: [View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/modules/guest-crm/OPERATIONAL_WORKFLOW.md)
  The centralized profile engine acting as the single source of truth for guest PII, preferences, and lifetime spending habits. It absorbs data asynchronously from the PMS and POS, building a comprehensive 360-degree guest profile used for personalized marketing.
* **`smart-locks`**: [View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/modules/smart-locks/OPERATIONAL_WORKFLOW.md)
  The secure provisioning engine for contactless room entry. Issues digital keys to Apple/Google Wallet during mobile check-in. It features a highly customizable provider architecture for different hardware vendors and strictly syncs key validity (extensions and revocations) with the PMS reservation lifecycle.

## 7. Module Group: Property & Staff Operations
* **`property-inventory`**: [View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/modules/property-inventory/OPERATIONAL_WORKFLOW.md)
  Event-driven housekeeping and asset tracking. Dispatches `CLEANING_REQUIRED` work orders instantly upon PMS check-out. Manages frictionless replenishment of consumables (soaps, lotions) and audits fixed assets (hair dryers, kettles). Features a strict ledger to track consumption against actual room cleans to prevent theft.
* **`staff-management`**: [View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/modules/staff-management/OPERATIONAL_WORKFLOW.md)
  A streamlined HRIS focusing on operational efficiency. Manages shift scheduling, task assignments, and time tracking. Features a premium biometric WebAuthn timeclock with strict local-network geofencing to prevent fraud, and integrates with the PMS to dynamically prompt staff with tasks (e.g., room cleaning upon guest checkout).
* **`website-builder`**: *(Deprecated)* Will be removed. The system is not a visual self-serve CMS.
* **`tenant-websites`**: [View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/modules/tenant-websites/OPERATIONAL_WORKFLOW.md)
  The hosting repository and routing engine. Internal staff build highly customized websites, zip them, and upload them to this module. It ingests the static bundles and automatically deploys them to tenant-specific subdomains (e.g., `resort.spear-os.com`) or custom domains, acting as the public storefront.

## 8. Platform Interfaces & Unified Shell
* **`spear-os`**: [View Operational Workflow](file:///home/omaaradmin/hospitality-saas-monorepo/modules/spear-os/OPERATIONAL_WORKFLOW.md)
  The fundamental web-based React single-page application (SPA) that acts as the unified UI shell for the entire system (excluding the POS and Tenant Websites). It dynamically renders views based on tenant module licenses and strict Role-Based Access Control (RBAC). It also acts as the engine driving the guest-facing mobile check-in portal.

---

## The Master Integration Flow

The SPEAR ecosystem relies heavily on asynchronous event-driven architecture to ensure all modules operate seamlessly without tight coupling. Below are examples of how these modules interact in real-world scenarios:

### Example 1: The F&B Pipeline
1. A guest orders a steak via **`menu-ordering`**.
2. The **`pos-system`** processes the payment and records the sale.
3. The **`kds`** immediately displays the prep ticket for the chef.
4. An asynchronous `pos.meal_sold` event is fired to the **`events`** outbox.
5. The **`kitchen-inventory`** catches the event and instantly deducts the raw meat from the stock ledger.
6. The **`analytics`** engine updates the real-time F&B revenue dashboard.

### Example 2: The Housekeeping & Staff Handoff
1. A guest's stay concludes, and they are checked out via the **`hotel-pms`**.
2. An asynchronous `pms.guest_checked_out` event is fired.
3. The **`smart-locks`** module catches the event and immediately revokes the digital key from the guest's Apple/Google Wallet.
4. The **`staff-management`** module catches the event and instantly prompts the active housekeeping staff on their **`spear-os`** device to clean the specific room.
5. Once marked clean, the **`property-inventory`** module automatically logs the consumption of standard room consumables (soaps, lotions).

### Example 3: The Banqueting & Event Pipeline
1. A corporate retreat is booked and a BEO is signed via **`sales-banqueting`**.
2. The system dispatches async events to coordinate resources across the property.
3. The **`hotel-pms`** automatically blocks the required overnight rooms.
4. The **`restaurant-reservations`** module locks out the necessary floor space for the private dinner.
5. The **`kitchen-inventory`** module receives an advanced warning to order bulk ingredients for the scheduled buffet.

### Example 4: The Frictionless Mobile Check-in
1. 24 hours before arrival, the **`guest-messaging`** module routes a personalized "Magic Link" to the guest via WhatsApp (or SMS fallback).
2. The guest clicks the link, entering the **`mobile-checkin`** portal (a guest-facing extension of **`spear-os`**).
3. They agree to T&Cs and securely place an incidental hold via the payment gateway.
4. Upon success, the **`smart-locks`** module provisions a secure digital key, allowing the guest to bypass the front desk entirely.
