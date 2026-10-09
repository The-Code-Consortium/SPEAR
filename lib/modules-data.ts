/**
 * SPEAR Module Story — Data definitions for all 6 compacted master pillars.
 * Styled matching the Stitch Redesign specification (Playfair Display + italic gold accents).
 */

export interface ModuleData {
  id: string;
  numeral: string; // "01" through "06"
  title: string;
  titleAccent?: string; // renders in italic font-normal gold-gradient-text
  tagline: string;
  body: string;
  layout: "text-left" | "text-right"; // alternates for visual rhythm
  isLast?: boolean; // marks the final panel
  chips: string[]; // Nested sub-features
  actionLink?: string;
  actionHref?: string;
}

export const modules: ModuleData[] = [
  {
    id: "hotel-pms",
    numeral: "01",
    title: "Hotel PMS",
    titleAccent: "Room Operations",
    tagline: "One master record for every room, rate, and guest folio.",
    body: "Extend stays, reassign rooms, and manage your full property without double-booking risk. Controls the hotel master state, dispatches housekeeping work orders automatically on checkout, and consolidates room charges and restaurant tabs onto one unified folio.",
    layout: "text-left",
    actionLink: "Explore PMS Architecture",
    actionHref: "/modules/hotel-pms",
    chips: [
      "Master Tape Chart",
      "Consolidated Folio Billing",
      "Auto-Housekeeping Dispatch",
      "Biometric Staff Timeclock",
    ],
  },
  {
    id: "direct-booking",
    numeral: "02",
    title: "Direct Bookings",
    titleAccent: "Channel Manager",
    tagline: "Own your direct revenue and sync instantly across every OTA.",
    body: "Drive commission-free direct hotel bookings with instant deposit hold processing. 2-way real-time distribution synchronizes Booking.com, Expedia, Airbnb, and Agoda, while dynamic RMS rules adjust rates automatically by occupancy thresholds.",
    layout: "text-right",
    actionLink: "Explore Channel Distribution",
    chips: [
      "Commission-Free Booking Engine",
      "2-Way Global OTA Sync",
      "Dynamic RMS Surge Pricing",
      "Branded Web Storefronts",
    ],
  },
  {
    id: "point-of-sale",
    numeral: "03",
    title: "Offline Tauri POS",
    titleAccent: "Kitchen Display",
    tagline: "High-speed, hardware-integrated POS that works even when WiFi drops.",
    body: "Built as an offline-first Tauri desktop app with local printer drivers and tamper-proof ledger accounting. Automatically routes orders to kitchen KDS screens with Green/Yellow/Red pacing and posts dining tabs directly to hotel room folios.",
    layout: "text-left",
    actionLink: "View Hardware Compatibility Matrix",
    chips: [
      "100% Offline Desktop Tauri POS",
      "Station KDS & Ticket Routing",
      "One-Tap Room Folio Posting",
      "Anti-Fraud Append-Only Ledger",
    ],
  },
  {
    id: "restaurant-floor",
    numeral: "04",
    title: "Dining Floor Plans",
    titleAccent: "Digital Ordering",
    tagline: "Let guests pick their table and order seamlessly from any device.",
    body: "Design interactive restaurant floor plans with real-time table statuses. Seating a guest automatically creates an active tab on the POS, while guest QR code ordering and waiter tablets funnel every order into a single kitchen pipeline.",
    layout: "text-right",
    actionLink: "Explore Floor Management",
    chips: [
      "Interactive Floor Plan Designer",
      "Seated-to-POS Auto Tab",
      "Guest QR & Waiter Tablets",
      "Live Digital Menu Taxonomy",
    ],
  },
  {
    id: "kitchen-inventory",
    numeral: "05",
    title: "Smart Inventory",
    titleAccent: "Recipe Costing",
    tagline: "Recipe-level stock deduction with automated 86 item protection.",
    body: "Stop counting by hand. Raw materials deduct in real-time as meals are sold. When ingredients hit zero, the system instantly triggers 86 protocols across all menus, syncs COGS with accounting, and audits housekeeping consumables against cleans.",
    layout: "text-left",
    actionLink: "Explore Inventory Control",
    chips: [
      "Real-Time Recipe Blueprints",
      'Instant "86" Stockout Protocol',
      "COGS & General Ledger Sync",
      "Housekeeping Room Asset Audits",
    ],
  },
  {
    id: "guest-experience",
    numeral: "06",
    title: "Contactless Guest Journey",
    titleAccent: "Digital Keys",
    tagline: "That's SPEAR: One unified hospitality ecosystem.",
    body: "Eliminate front desk queues with 24-hour pre-arrival WhatsApp magic links, incidental payment holds, and contactless Apple & Google Wallet digital room keys. Omnichannel priority messaging and a 360° guest CRM complete the guest journey.",
    layout: "text-right",
    isLast: true,
    actionLink: "Explore Contactless Experience",
    chips: [
      "Pre-Arrival Magic Links",
      "Apple & Google Wallet Keys",
      "WhatsApp & SMS Unified Inbox",
      "360° Guest CRM Profile",
    ],
  },
];
