"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Layers,
  ArrowRight,
  ArrowLeft,
  KeyRound,
  Sparkles,
  Receipt,
  BedDouble,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  UserCheck,
  Server,
  RefreshCw,
  GitBranch,
  Building2,
  HelpCircle,
  Terminal,
  WifiOff,
  Wifi,
} from "lucide-react";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

// Motion variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const CORE_CAPABILITIES = [
  {
    icon: Calendar,
    title: "Master Tape Chart Matrix",
    tag: "Sub-100ms Live Grid",
    description:
      "A high-density visual timeline across all rooms, floors, and unit types. Drag, extend, or swap reservations seamlessly with zero double-booking lock contention.",
    metrics: "Real-time room occupancy & turnover indexing",
  },
  {
    icon: Receipt,
    title: "True Consolidated Folio",
    tag: "Cross-Module Ledger",
    description:
      "Dining tabs from the Tauri POS, mini-bar consumption, banquet event orders (BEO), and room rates funnel automatically into one append-only guest master bill.",
    metrics: "100% elimination of end-of-shift billing audits",
  },
  {
    icon: Zap,
    title: "Event-Driven Automation",
    tag: "CloudEvents 1.0 Outbox",
    description:
      "Emits transactional lifecycle events (check-in, check-out, room swaps) across the Redis bus to instantly orchestrate smart locks, housekeeping, and revenue engines.",
    metrics: "Under 50ms trigger response across modules",
  },
  {
    icon: KeyRound,
    title: "Instant Digital Key Sync",
    tag: "Apple & Google Wallet",
    description:
      "Generates encrypted contactless door credentials upon pre-arrival check-in. Revokes keys automatically the millisecond checkout is finalized at reception.",
    metrics: "Zero physical plastic keycard overhead",
  },
  {
    icon: Sparkles,
    title: "Automated Housekeeping Dispatch",
    tag: "Live Room State Engine",
    description:
      "When a guest checks out, a CLEANING_REQUIRED order dispatches instantly to housekeeping staff mobile tablets. Logs consumable usage against room cleans to curb loss.",
    metrics: "35% faster room turnover speed",
  },
  {
    icon: RefreshCw,
    title: "2-Way Dynamic OTA Sync",
    tag: "Channel Manager Bridge",
    description:
      "Syncs availability and rates in both directions with Booking.com, Airbnb, Agoda, and Expedia. Automatically prompts RMS occupancy surge rate bumps at 80% capacity.",
    metrics: "Sub-second cross-channel rate parity",
  },
];

const ARCHITECTURE_PIPELINE = [
  {
    step: "01",
    phase: "Intake & Ingestion",
    title: "Reservation Ingestion",
    description:
      "Bookings enter via the direct commission-free website engine or 2-way OTA bridge. The PMS validates rates, verifies inventory constraints, and assigns a pending reservation record.",
    subsystem: "booking-engine & Channel Manager",
  },
  {
    step: "02",
    phase: "Pre-Arrival Magic Link",
    title: "Contactless Check-In",
    description:
      "24 hours prior to arrival, guest receives a WhatsApp/SMS Magic Link. Signs digital T&C, places incidental card pre-authorization, and downloads digital smart keys.",
    subsystem: "mobile-checkin & smart-locks",
  },
  {
    step: "03",
    phase: "In-Stay Lifecycle",
    title: "Unified Folio Orchestration",
    description:
      "Guest charges restaurant meals, pool drinks, or spa services. The offline-first POS fires room charges directly into the open PMS folio with room security verification.",
    subsystem: "pos-system & guest-crm",
  },
  {
    step: "04",
    phase: "Checkout Handoff",
    title: "Settlement & Housekeeping Handoff",
    description:
      "Guest checks out. Digital keys are revoked instantly. The PMS dispatches a priority cleaning order to staff devices and updates the public booking matrix to 'cleaning hold'.",
    subsystem: "property-inventory & staff-management",
  },
];

export default function HotelPmsModulePage() {
  const [activeTab, setActiveTab] = useState<"tape-chart" | "folio" | "events">("tape-chart");

  return (
    <div style={{ background: "#161310", color: "#F3ECE0", minHeight: "100vh", overflowX: "hidden" }}>
      <NavBar />

      <main style={{ paddingTop: "5.5rem" }}>
        {/* ============================================================
            HERO SECTION
            ============================================================ */}
        <section
          style={{
            padding: "5rem 2rem 4rem",
            position: "relative",
            background: "radial-gradient(ellipse at 50% 0%, rgba(199,154,69,0.14) 0%, rgba(22,19,16,0.98) 70%)",
            borderBottom: "1px solid rgba(212,163,89,0.18)",
          }}
        >
          <div style={{ maxWidth: 1152, margin: "0 auto", width: "100%" }}>
            {/* Top Navigation Breadcrumb */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              style={{ marginBottom: "2rem" }}
            >
              <Link
                href="/#product"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    sessionStorage.setItem("spear_disable_popup", "true");
                  }
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#D4A359",
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F2BE71")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#D4A359")}
              >
                <ArrowLeft size={16} />
                <span>Back to All 6 Pillars</span>
              </Link>
            </motion.div>

            {/* Pillar Badge */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              style={{ maxWidth: 840 }}
            >
              <motion.div variants={fadeUpVariant} style={{ marginBottom: "1rem" }}>
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#C79A45",
                    background: "rgba(199,154,69,0.12)",
                    border: "1px solid rgba(199,154,69,0.25)",
                    padding: "0.35rem 0.85rem",
                    borderRadius: 20,
                  }}
                >
                  Pillar 01 • Master Operating Hub
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                style={{
                  fontFamily: "var(--font-playfair), var(--font-fraunces), 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                  color: "#F7F4EE",
                }}
              >
                Hotel PMS &amp;{" "}
                <span className="italic font-normal gold-gradient-text">Room Operations</span>
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                  color: "#D3C4B3",
                  lineHeight: 1.7,
                  maxWidth: "68ch",
                  marginBottom: "2.5rem",
                }}
              >
                The central nervous system and absolute <strong>Master Record</strong> of the SPEAR
                ecosystem. Ingests direct and OTA reservations, controls physical room inventory
                without double-booking race conditions, and unifies dining tabs and room charges onto
                one consolidated folio.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUpVariant}
                style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}
              >
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.85rem 1.75rem",
                    borderRadius: 6,
                    background: "#D4A359",
                    color: "#161310",
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    boxShadow: "0 4px 20px rgba(212,163,89,0.25)",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#F2BE71";
                    e.currentTarget.style.boxShadow = "0 6px 24px rgba(212,163,89,0.38)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#D4A359";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(212,163,89,0.25)";
                  }}
                >
                  <span>Book PMS Architecture Walkthrough</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#architecture-specs"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.85rem 1.5rem",
                    borderRadius: 6,
                    border: "1px solid rgba(212,163,89,0.35)",
                    background: "rgba(22,19,16,0.6)",
                    color: "#D3C4B3",
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.borderColor = "#D4A359";
                    e.currentTarget.style.background = "rgba(212,163,89,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#D3C4B3";
                    e.currentTarget.style.borderColor = "rgba(212,163,89,0.35)";
                    e.currentTarget.style.background = "rgba(22,19,16,0.6)";
                  }}
                >
                  <span>View Technical Architecture</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ============================================================
            METRIC SPEC BAR
            ============================================================ */}
        <section
          style={{
            background: "#1E1B18",
            borderBottom: "1px solid rgba(212,163,89,0.14)",
            padding: "1.75rem 2rem",
          }}
        >
          <div
            style={{
              maxWidth: 1152,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              { label: "Architecture", val: "CloudEvents 1.0", detail: "Redis Transactional Outbox" },
              { label: "Tape Chart Latency", val: "< 100ms", detail: "Optimistic visual updates" },
              { label: "Data Integrity", val: "Append-Only", detail: "Strict General Ledger accounting" },
              { label: "Concurrency", val: "Zero Collisions", detail: "Pessimistic room lock bounds" },
            ].map((stat, i) => (
              <div key={i} style={{ borderLeft: "2px solid #C79A45", paddingLeft: "1rem" }}>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#9C8F7F",
                    marginBottom: "0.25rem",
                  }}
                >
                  {stat.label}
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#F7F4EE",
                    lineHeight: 1.2,
                  }}
                >
                  {stat.val}
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: "0.8rem",
                    color: "#7A6F63",
                    marginTop: "0.2rem",
                  }}
                >
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
            INTERACTIVE ARCHITECTURE SHOWCASE (Tape Chart, Folio, Events)
            ============================================================ */}
        <section style={{ padding: "5rem 2rem", background: "#161310" }}>
          <div style={{ maxWidth: 1152, margin: "0 auto", width: "100%" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#C79A45",
                  marginBottom: "0.75rem",
                }}
              >
                Interactive System Previews
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), var(--font-fraunces), 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 700,
                  color: "#F7F4EE",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                Inside the <span className="italic font-normal gold-gradient-text">Master Record</span> Engine
              </h2>
            </div>

            {/* Tab Selector */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.75rem",
                marginBottom: "2.5rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { id: "tape-chart", label: "01. Tape Chart & Room Matrix" },
                { id: "folio", label: "02. True Consolidated Folio Ledger" },
                { id: "events", label: "03. CloudEvents Lifecycle Bus" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  style={{
                    padding: "0.75rem 1.25rem",
                    borderRadius: 6,
                    fontSize: "0.85rem",
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: activeTab === tab.id ? "1px solid #C79A45" : "1px solid rgba(212,163,89,0.18)",
                    background: activeTab === tab.id ? "rgba(199,154,69,0.16)" : "#221F1C",
                    color: activeTab === tab.id ? "#F2BE71" : "#A89C8F",
                    transition: "all 0.2s ease",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB CONTENT PANELS */}
            <div
              style={{
                background: "#221F1C",
                borderRadius: 12,
                border: "1px solid rgba(212,163,89,0.22)",
                padding: "2.5rem",
                boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
              }}
            >
              {activeTab === "tape-chart" && (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", color: "#F7F4EE", margin: 0 }}>
                        Master Tape Chart Visual Grid
                      </h3>
                      <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: "0.88rem", color: "#A89C8F", margin: "0.35rem 0 0" }}>
                        Instant room inventory state with optimistic multi-user editing
                      </p>
                    </div>
                    <div style={{ display: "flex", gap: "0.75rem", fontSize: "0.75rem", fontFamily: "var(--font-manrope), sans-serif" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "#F2BE71" }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#C79A45" }} /> Occupied Stay
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "#8AE0A0" }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4CAF50" }} /> Vacant Clean
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "#FFB4AB" }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF5252" }} /> Cleaning Hold
                      </span>
                    </div>
                  </div>

                  {/* Tape Chart Matrix Mock */}
                  <div style={{ overflowX: "auto", border: "1px solid rgba(212,163,89,0.15)", borderRadius: 8, background: "#181512" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem", fontFamily: "var(--font-manrope), sans-serif" }}>
                      <thead>
                        <tr style={{ background: "#26211D", borderBottom: "1px solid rgba(212,163,89,0.2)" }}>
                          <th style={{ padding: "0.85rem 1rem", textAlign: "left", color: "#C79A45", width: 140 }}>Room / Type</th>
                          <th style={{ padding: "0.85rem 1rem", textAlign: "center", color: "#D3C4B3" }}>Today (14:00)</th>
                          <th style={{ padding: "0.85rem 1rem", textAlign: "center", color: "#D3C4B3" }}>Tomorrow</th>
                          <th style={{ padding: "0.85rem 1rem", textAlign: "center", color: "#D3C4B3" }}>Day 3</th>
                          <th style={{ padding: "0.85rem 1rem", textAlign: "center", color: "#D3C4B3" }}>Day 4</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { room: "101 Deluxe King", guest: "Alexander Vance", span: 3, status: "Occupied", bg: "rgba(199,154,69,0.25)", border: "#C79A45" },
                          { room: "102 Superior Queen", guest: "Clean & Inspected", span: 1, status: "Vacant Clean", bg: "rgba(76,175,80,0.18)", border: "#4CAF50" },
                          { room: "201 Ocean Suite", guest: "Sophia Lin (OTA VIP)", span: 4, status: "Occupied", bg: "rgba(199,154,69,0.25)", border: "#C79A45" },
                          { room: "202 Garden Villa", guest: "Departed (Work Order #481)", span: 1, status: "Cleaning Hold", bg: "rgba(255,82,82,0.18)", border: "#FF5252" },
                          { room: "301 Penthouse", guest: "Marcus Thorne (Direct)", span: 2, status: "Occupied", bg: "rgba(199,154,69,0.25)", border: "#C79A45" },
                        ].map((row, idx) => (
                          <tr key={idx} style={{ borderBottom: "1px solid rgba(212,163,89,0.1)" }}>
                            <td style={{ padding: "0.85rem 1rem", fontWeight: 700, color: "#F7F4EE", background: "#221D18" }}>
                              {row.room}
                            </td>
                            <td
                              colSpan={row.span}
                              style={{
                                padding: "0.6rem 0.85rem",
                                background: row.bg,
                                borderLeft: `3px solid ${row.border}`,
                                color: "#F3ECE0",
                                fontWeight: 500,
                              }}
                            >
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span>{row.guest}</span>
                                <span style={{ fontSize: "0.7rem", opacity: 0.8, textTransform: "uppercase" }}>{row.status}</span>
                              </div>
                            </td>
                            {row.span < 4 && (
                              <td
                                colSpan={4 - row.span}
                                style={{
                                  padding: "0.6rem 0.85rem",
                                  color: "#7A6F63",
                                  textAlign: "center",
                                  background: "rgba(255,255,255,0.02)",
                                }}
                              >
                                Available for Booking
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "folio" && (
                <div>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", color: "#F7F4EE", margin: 0 }}>
                      Unified Cross-Module Folio Architecture
                    </h3>
                    <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: "0.88rem", color: "#A89C8F", margin: "0.35rem 0 0" }}>
                      Room 201 — Master Ledger with instant asynchronous F&amp;B POS tab aggregation
                    </p>
                  </div>

                  <div style={{ border: "1px solid rgba(212,163,89,0.18)", borderRadius: 8, background: "#181512", padding: "1.25rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(212,163,89,0.15)", paddingBottom: "0.75rem", marginBottom: "1rem" }}>
                      <div>
                        <span style={{ fontSize: "0.75rem", color: "#C79A45", textTransform: "uppercase", fontWeight: 700 }}>Guest Folio #FOL-88219</span>
                        <div style={{ fontSize: "1rem", color: "#F7F4EE", fontWeight: 700 }}>Sophia Lin (Ocean Suite)</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ fontSize: "0.75rem", color: "#9C8F7F" }}>Status</span>
                        <div style={{ fontSize: "0.85rem", color: "#4CAF50", fontWeight: 600 }}>Active (Pre-Authorized $1,500.00)</div>
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.85rem", fontFamily: "var(--font-manrope), sans-serif" }}>
                      {[
                        { item: "Room Rate: 3 Nights @ $320/night", source: "hotel-pms", time: "Oct 08, 14:00", amount: "$960.00" },
                        { item: "Dining Tab #882: Filet Mignon, Barolo Reserve", source: "pos-system (Tauri App)", time: "Oct 08, 20:45", amount: "$184.50" },
                        { item: "Pool Bar Cocktail Tab #104", source: "menu-ordering (Waiter Tablet)", time: "Oct 09, 13:15", amount: "$42.00" },
                        { item: "Late Checkout Extension (to 14:00)", source: "hotel-pms", time: "Oct 09, 16:30", amount: "$50.00" },
                      ].map((entry, idx) => (
                        <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.6rem 0.85rem", background: "rgba(255,255,255,0.03)", borderRadius: 4 }}>
                          <div>
                            <span style={{ color: "#F7F4EE", fontWeight: 600 }}>{entry.item}</span>
                            <span style={{ display: "block", fontSize: "0.72rem", color: "#9C8F7F" }}>Routed via {entry.source} • {entry.time}</span>
                          </div>
                          <span style={{ color: "#F2BE71", fontWeight: 700, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem" }}>{entry.amount}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(212,163,89,0.2)", marginTop: "1.25rem", paddingTop: "1rem" }}>
                      <span style={{ fontSize: "0.85rem", color: "#D3C4B3", fontWeight: 600 }}>Total Balance Pending Checkout:</span>
                      <span style={{ fontSize: "1.35rem", color: "#F7F4EE", fontWeight: 700, fontFamily: "var(--font-playfair), Georgia, serif" }}>$1,236.50</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "events" && (
                <div>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", color: "#F7F4EE", margin: 0 }}>
                      CloudEvents 1.0 Transactional Outbox Pipeline
                    </h3>
                    <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: "0.88rem", color: "#A89C8F", margin: "0.35rem 0 0" }}>
                      Asynchronous messaging ensures zero coupling between PMS, smart locks, and housekeeping
                    </p>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {[
                      {
                        event: "pms.guest_checked_in",
                        payload: "{ reservationId: 'RES-991', roomId: '101', guestId: 'G-404' }",
                        effects: [
                          "smart-locks: Provisions Apple & Google Wallet NFC pass",
                          "guest-crm: Appends VIP check-in log and guest lifetime spend metric",
                          "rms: Recalculates remaining occupancy curve and updates OTA yield limits",
                        ],
                      },
                      {
                        event: "pms.guest_checked_out",
                        payload: "{ reservationId: 'RES-991', folioState: 'SETTLED', checkoutTime: '11:02' }",
                        effects: [
                          "smart-locks: Instantly revokes door lock cryptographic tokens",
                          "staff-management: Dispatches priority CLEANING_REQUIRED alert to mobile tablet",
                          "property-inventory: Deducts guest replenishment pack from floor par level",
                        ],
                      },
                    ].map((item, idx) => (
                      <div key={idx} style={{ background: "#181512", border: "1px solid rgba(212,163,89,0.18)", borderRadius: 8, padding: "1.25rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                          <span style={{ background: "rgba(199,154,69,0.2)", color: "#F2BE71", padding: "0.2rem 0.6rem", borderRadius: 4, fontSize: "0.72rem", fontFamily: "monospace", fontWeight: 700 }}>
                            EVENT
                          </span>
                          <span style={{ fontFamily: "monospace", fontSize: "0.92rem", color: "#F7F4EE", fontWeight: 700 }}>
                            {item.event}
                          </span>
                        </div>
                        <div style={{ background: "#110E0B", padding: "0.5rem 0.75rem", borderRadius: 4, fontFamily: "monospace", fontSize: "0.78rem", color: "#9C8F7F", marginBottom: "0.75rem" }}>
                          {item.payload}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                          <span style={{ fontSize: "0.72rem", color: "#C79A45", textTransform: "uppercase", fontWeight: 700 }}>Asynchronous Downstream Handlers:</span>
                          {item.effects.map((eff, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "#D3C4B3" }}>
                              <CheckCircle2 size={14} color="#C79A45" />
                              <span>{eff}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ============================================================
            OFFLINE-FIRST ARCHITECTURE: SERPENTINE FLOW & ANIMATION SLIDER UX
            Terminal -> Server -> Cloud Link Down -> Cloud Up & Fast Sync
            ============================================================ */}
        <section
          id="offline-resilience"
          style={{
            padding: "6rem 2rem 7rem",
            background: "#161310",
            color: "#F7F4EE",
            position: "relative",
            borderTop: "1px solid rgba(212,163,89,0.18)",
            borderBottom: "1px solid rgba(212,163,89,0.18)",
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            style={{
              position: "absolute",
              top: "15%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "800px",
              height: "500px",
              background: "radial-gradient(circle, rgba(199,154,69,0.08) 0%, rgba(22,19,16,0) 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: 1152, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#C79A45",
                  background: "rgba(199,154,69,0.12)",
                  border: "1px solid rgba(199,154,69,0.25)",
                  padding: "0.35rem 0.9rem",
                  borderRadius: 20,
                  marginBottom: "1rem",
                }}
              >
                Property-Wide Architectural Integrity
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-playfair), var(--font-fraunces), 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  color: "#F7F4EE",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.25rem",
                }}
              >
                Offline-First Resilience:{" "}
                <span className="italic font-normal gold-gradient-text">Always Operable, Zero Downtime</span>
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: "1.05rem",
                  color: "#D3C4B3",
                  maxWidth: "72ch",
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                Unlike fragile web-only systems where front desk terminals freeze the moment internet drops,
                SPEAR implements an enterprise local-first mesh across <strong>all 20 hotel modules</strong>.
                Front desk check-ins, room key issuance, dining tabs, housekeeping dispatches, and night audits
                execute with zero lag during complete ISP blackouts—then sync to the cloud instantaneously.
              </p>
            </div>

            {/* ============================================================
                THE SERPENTINE / S-CURVE FLOW (SCROLL-DRIVEN ARCHITECTURE)
                Matching Hand-Drawn Reference Diagram:
                [Card 1 (Left)] -> Swooping Arrow (↘) -> [Card 2 (Right)]
                -> Swooping Arrow (↙) -> [Card 3 (Left)] -> Swooping Arrow (↘) -> [Card 4 (Right)]
                ============================================================ */}
            <div style={{ position: "relative", marginTop: "2rem" }}>

              {/* ----------------------------------------------------------
                  PHASE 01: TERMINAL VIEW (LEFT BOX)
                  ---------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, y: 40, x: -25 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ amount: 0.25, once: false }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                style={{
                  width: "100%",
                  maxWidth: "620px",
                  marginRight: "auto",
                  marginLeft: 0,
                  transition: "box-shadow 0.3s ease",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(180deg, #1F1A15 0%, #171411 100%)",
                    borderRadius: 14,
                    border: "1.5px solid rgba(212,163,89,0.35)",
                    boxShadow: "0 12px 36px rgba(0,0,0,0.6), 0 0 25px rgba(212,163,89,0.12)",
                    padding: "2rem",
                    position: "relative",
                  }}
                >
                  {/* Phase Marker Badge */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <span
                      style={{
                        background: "rgba(199,154,69,0.18)",
                        color: "#F2BE71",
                        fontSize: "0.72rem",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        padding: "0.25rem 0.65rem",
                        borderRadius: 4,
                        letterSpacing: "0.08em",
                      }}
                    >
                      PHASE 01 // CLIENT WORKSTATION
                    </span>

                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "#10B981",
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 6px #10B981" }} />
                      REALTIME LOCAL CAPTURE
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "1.45rem",
                      fontWeight: 700,
                      color: "#F7F4EE",
                      marginBottom: "0.6rem",
                    }}
                  >
                    Terminal Execution (Front Desk / POS / Housekeeping)
                  </h3>

                  <p style={{ fontSize: "0.9rem", color: "#D3C4B3", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    Staff workstations run high-performance native client runtimes with an embedded SQLite WAL database.
                    Every check-in, keycard issuance, and dining charge commits instantly to local disk within <strong>0.4 milliseconds</strong>—never waiting on cloud latency.
                  </p>

                  {/* HIGH-FIDELITY TERMINAL SVG VIEW */}
                  <div
                    style={{
                      background: "#0D0A08",
                      borderRadius: 8,
                      border: "1px solid rgba(212,163,89,0.3)",
                      overflow: "hidden",
                      marginBottom: "1.5rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {/* Terminal Window Header Bar */}
                    <div
                      style={{
                        background: "#161310",
                        padding: "0.5rem 0.75rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444", display: "inline-block" }} />
                        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B", display: "inline-block" }} />
                        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981", display: "inline-block" }} />
                        <span style={{ color: "#9C8F7F", fontSize: "0.72rem", marginLeft: "0.5rem" }}>
                          terminal://reception-desk-01 (192.168.1.42)
                        </span>
                      </div>
                      <span style={{ fontSize: "0.68rem", color: "#10B981", fontWeight: 700 }}>
                        ● WAL WRITES LIVE
                      </span>
                    </div>

                    {/* Terminal Console Body */}
                    <div style={{ padding: "1rem", fontSize: "0.78rem", lineHeight: 1.6 }}>
                      <div style={{ color: "#D4A359" }}>
                        [reception@spear-pms ~]$ spear-terminal dispatch-checkin --room 402 --guest &quot;Elena Vance&quot;
                      </div>
                      <div style={{ color: "#10B981", marginTop: "0.25rem" }}>
                        ✔ Guest Folio #F-40291 created in local WAL cache (0.38ms)
                      </div>
                      <div style={{ color: "#10B981" }}>
                        ✔ Door Key encoded over local NFC hardware (0.12ms)
                      </div>
                      <div style={{ color: "#F2BE71" }}>
                        ➜ Dispatched to On-Premise Mesh Bus [outbox_seq: 88192]
                      </div>
                      <div style={{ color: "#7A6E62", marginTop: "0.25rem" }}>
                        Status: Transaction Committed Locally • Zero Cloud Latency
                      </div>
                    </div>
                  </div>

                  {/* Bullet Details */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#D3C4B3" }}>
                      <CheckCircle2 size={16} color="#C79A45" />
                      <span><strong>Universal Workstation Immunity:</strong> Front desk terminals, dining POS iPads, and housekeeping units operate 100% locally.</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#D3C4B3" }}>
                      <CheckCircle2 size={16} color="#C79A45" />
                      <span><strong>Local Key Hardware Interface:</strong> Keycard encoders connect over local USB/LAN—guests get keys instantly even if internet is severed.</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ----------------------------------------------------------
                  CURVED ARROW 1: DESKTOP SWOOPING DOWN-RIGHT (↘)
                  Connecting Left Card 1 to Right Card 2
                  ---------------------------------------------------------- */}
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.3, once: false }}
                transition={{ duration: 0.6 }}
                style={{
                  width: "100%",
                  height: "100px",
                  position: "relative",
                  margin: "0.5rem 0",
                }}
              >
                <svg
                  viewBox="0 0 1000 100"
                  fill="none"
                  style={{ width: "100%", height: "100%", overflow: "visible" }}
                >
                  <defs>
                    <linearGradient id="goldCurveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C79A45" />
                      <stop offset="50%" stopColor="#F2BE71" />
                      <stop offset="100%" stopColor="#C79A45" />
                    </linearGradient>
                    <marker id="arrowhead-down-right" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L8,3 z" fill="#F2BE71" />
                    </marker>
                  </defs>

                  {/* Ambient Glow Trail */}
                  <path
                    d="M 280,10 C 280,75 750,25 750,90"
                    stroke="rgba(242,190,113,0.22)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />

                  {/* Animated Dashed Vector Line on Scroll */}
                  <motion.path
                    d="M 280,10 C 280,75 750,25 750,90"
                    stroke="url(#goldCurveGrad1)"
                    strokeWidth="3.5"
                    strokeDasharray="6 6"
                    initial={{ pathLength: 0.15, opacity: 0.35 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ amount: 0.3, once: false }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    markerEnd="url(#arrowhead-down-right)"
                  />
                </svg>

                {/* Floating Badge in Middle of Swoop */}
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ amount: 0.4, once: false }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "52%",
                    transform: "translate(-50%, -50%)",
                    background: "#161310",
                    border: "1px solid rgba(212,163,89,0.4)",
                    borderRadius: 20,
                    padding: "0.3rem 0.9rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#F2BE71",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.6)",
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981" }} />
                  <span>Buffered Local LAN Dispatch (Sub-1ms)</span>
                </motion.div>
              </motion.div>

              {/* Mobile Vertical Fallback Connector */}
              <div
                className="flex md:hidden items-center justify-center my-3"
                style={{ gap: "0.5rem", color: "#F2BE71", fontSize: "0.75rem", fontWeight: 700 }}
              >
                <div style={{ width: 2, height: 26, background: "linear-gradient(to bottom, #C79A45, #F2BE71)" }} />
                <span>LAN Broadcast ↘</span>
              </div>

              {/* ----------------------------------------------------------
                  PHASE 02: SERVER RUNNING STATUS (RIGHT BOX)
                  ---------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, y: 40, x: 25 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ amount: 0.25, once: false }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                style={{
                  width: "100%",
                  maxWidth: "620px",
                  marginLeft: "auto",
                  marginRight: 0,
                  transition: "box-shadow 0.3s ease",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(180deg, #1F1A15 0%, #171411 100%)",
                    borderRadius: 14,
                    border: "1.5px solid rgba(212,163,89,0.35)",
                    boxShadow: "0 12px 36px rgba(0,0,0,0.6), 0 0 25px rgba(212,163,89,0.12)",
                    padding: "2rem",
                    position: "relative",
                  }}
                >
                  {/* Phase Marker Badge */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <span
                      style={{
                        background: "rgba(199,154,69,0.18)",
                        color: "#F2BE71",
                        fontSize: "0.72rem",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        padding: "0.25rem 0.65rem",
                        borderRadius: 4,
                        letterSpacing: "0.08em",
                      }}
                    >
                      PHASE 02 // ON-PREMISE EDGE GATEWAY
                    </span>

                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "#10B981",
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 6px #10B981" }} />
                      ON-PREM EDGE ACTIVE
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "1.45rem",
                      fontWeight: 700,
                      color: "#F7F4EE",
                      marginBottom: "0.6rem",
                    }}
                  >
                    On-Premise Server Running &amp; Outbox Mesh
                  </h3>

                  <p style={{ fontSize: "0.9rem", color: "#D3C4B3", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    An on-site physical edge micro-server acts as the local property hub. If a guest charges champagne at the pool bar, the charge posts to the front desk folio immediately across the local property Wi-Fi without leaving the premises.
                  </p>

                  {/* HIGH-FIDELITY SERVER RUNNING STATUS SVG */}
                  <div
                    style={{
                      background: "#0D0A08",
                      borderRadius: 8,
                      border: "1px solid rgba(212,163,89,0.3)",
                      overflow: "hidden",
                      marginBottom: "1.5rem",
                      padding: "1rem",
                    }}
                  >
                    {/* Visual Server Chassis with Flashing LEDs */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "0.5rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Server size={18} color="#D4A359" />
                        <span style={{ fontFamily: "monospace", fontSize: "0.82rem", fontWeight: 700, color: "#F7F4EE" }}>
                          SPEAR-EDGE-NODE-01
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 6px #10B981" }} />
                        <span style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "#10B981", fontWeight: 700 }}>
                          DAEMON RUNNING (PID 4920)
                        </span>
                      </div>
                    </div>

                    {/* Server Metrics Visual Grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem", fontFamily: "monospace", fontSize: "0.72rem", marginBottom: "0.75rem" }}>
                      <div style={{ background: "#161310", padding: "0.45rem", borderRadius: 4, border: "1px solid rgba(255,255,255,0.04)" }}>
                        <div style={{ color: "#7A6E62" }}>LAN BUS</div>
                        <div style={{ color: "#10B981", fontWeight: 700 }}>1000 Mbps Active</div>
                      </div>
                      <div style={{ background: "#161310", padding: "0.45rem", borderRadius: 4, border: "1px solid rgba(255,255,255,0.04)" }}>
                        <div style={{ color: "#7A6E62" }}>MUTEX LOCK</div>
                        <div style={{ color: "#F2BE71", fontWeight: 700 }}>Room 402 ACQUIRED</div>
                      </div>
                      <div style={{ background: "#161310", padding: "0.45rem", borderRadius: 4, border: "1px solid rgba(255,255,255,0.04)" }}>
                        <div style={{ color: "#7A6E62" }}>OUTBOX QUEUE</div>
                        <div style={{ color: "#D4A359", fontWeight: 700 }}>1 Transaction Buffered</div>
                      </div>
                    </div>

                    <div style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "#9C8F7F" }}>
                      ➜ Local Redis bus guarantees cross-department instant sync with 0 dropped packets.
                    </div>
                  </div>

                  {/* Bullet Details */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#D3C4B3" }}>
                      <CheckCircle2 size={16} color="#C79A45" />
                      <span><strong>Zero Double-Booking Mutex:</strong> Distributed local locks ensure two receptionists or booking agents can never double-assign the same room.</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#D3C4B3" }}>
                      <CheckCircle2 size={16} color="#C79A45" />
                      <span><strong>Instant Cross-Department Folio:</strong> Bar drinks, spa sessions, and restaurant tabs land on guest master bills via local LAN mesh in milliseconds.</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ----------------------------------------------------------
                  CURVED ARROW 2: DESKTOP SWOOPING DOWN-LEFT (↙)
                  Connecting Right Card 2 back to Left Card 3
                  ---------------------------------------------------------- */}
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.3, once: false }}
                transition={{ duration: 0.6 }}
                style={{
                  width: "100%",
                  height: "100px",
                  position: "relative",
                  margin: "0.5rem 0",
                }}
              >
                <svg
                  viewBox="0 0 1000 100"
                  fill="none"
                  style={{ width: "100%", height: "100%", overflow: "visible" }}
                >
                  <defs>
                    <linearGradient id="goldCurveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#C79A45" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#EF4444" />
                    </linearGradient>
                    <marker id="arrowhead-down-left" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L8,3 z" fill="#F59E0B" />
                    </marker>
                  </defs>

                  {/* Ambient Glow Trail */}
                  <path
                    d="M 750,10 C 750,75 280,25 280,90"
                    stroke="rgba(245,158,11,0.22)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />

                  {/* Animated Dashed Vector Line on Scroll */}
                  <motion.path
                    d="M 750,10 C 750,75 280,25 280,90"
                    stroke="url(#goldCurveGrad2)"
                    strokeWidth="3.5"
                    strokeDasharray="6 6"
                    initial={{ pathLength: 0.15, opacity: 0.35 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ amount: 0.3, once: false }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    markerEnd="url(#arrowhead-down-left)"
                  />
                </svg>

                {/* Floating Badge in Middle of Swoop */}
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ amount: 0.4, once: false }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "48%",
                    transform: "translate(-50%, -50%)",
                    background: "#161310",
                    border: "1px solid rgba(239,68,68,0.4)",
                    borderRadius: 20,
                    padding: "0.3rem 0.9rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#F59E0B",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.6)",
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#EF4444" }} />
                  <span>WAN Internet Severed (Autonomous Mode Engaged)</span>
                </motion.div>
              </motion.div>

              {/* Mobile Vertical Fallback Connector */}
              <div
                className="flex md:hidden items-center justify-center my-3"
                style={{ gap: "0.5rem", color: "#F59E0B", fontSize: "0.75rem", fontWeight: 700 }}
              >
                <div style={{ width: 2, height: 26, background: "linear-gradient(to bottom, #F2BE71, #EF4444)" }} />
                <span>Cloud Link Cut ↙</span>
              </div>

              {/* ----------------------------------------------------------
                  PHASE 03: CLOUD LINK DOWN (LEFT BOX)
                  ---------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, y: 40, x: -25 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ amount: 0.25, once: false }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                style={{
                  width: "100%",
                  maxWidth: "620px",
                  marginRight: "auto",
                  marginLeft: 0,
                  transition: "box-shadow 0.3s ease",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(180deg, #1F1A15 0%, #171411 100%)",
                    borderRadius: 14,
                    border: "1.5px solid rgba(245,158,11,0.35)",
                    boxShadow: "0 12px 36px rgba(0,0,0,0.6), 0 0 25px rgba(245,158,11,0.12)",
                    padding: "2rem",
                    position: "relative",
                  }}
                >
                  {/* Phase Marker Badge */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <span
                      style={{
                        background: "rgba(239,68,68,0.18)",
                        color: "#F59E0B",
                        fontSize: "0.72rem",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        padding: "0.25rem 0.65rem",
                        borderRadius: 4,
                        letterSpacing: "0.08em",
                      }}
                    >
                      PHASE 03 // WAN LINK DOWN
                    </span>

                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "#F59E0B",
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F59E0B", boxShadow: "0 0 6px #F59E0B" }} />
                      AUTONOMOUS EDGE ENGAGED
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "1.45rem",
                      fontWeight: 700,
                      color: "#F7F4EE",
                      marginBottom: "0.6rem",
                    }}
                  >
                    Cloud Link Down: Continuous Offline Immunity
                  </h3>

                  <p style={{ fontSize: "0.9rem", color: "#D3C4B3", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    When construction cuts property fiber or regional ISP towers fail, traditional cloud PMS software crashes. With SPEAR, <strong>zero staff workflows halt</strong>. Transactions buffer into durable encrypted outbox queues.
                  </p>

                  {/* HIGH-FIDELITY CLOUD LINK DOWN STATUS SVG */}
                  <div
                    style={{
                      background: "#0D0A08",
                      borderRadius: 8,
                      border: "1px solid rgba(245,158,11,0.3)",
                      overflow: "hidden",
                      marginBottom: "1.5rem",
                      padding: "1rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "0.5rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <WifiOff size={18} color="#EF4444" />
                        <span style={{ fontFamily: "monospace", fontSize: "0.82rem", fontWeight: 700, color: "#EF4444" }}>
                          WAN UPLINK: DISCONNECTED (0 kbps)
                        </span>
                      </div>
                      <span
                        style={{
                          background: "rgba(16,185,129,0.15)",
                          border: "1px solid rgba(16,185,129,0.3)",
                          color: "#10B981",
                          padding: "0.2rem 0.5rem",
                          borderRadius: 4,
                          fontSize: "0.7rem",
                          fontFamily: "monospace",
                          fontWeight: 700,
                        }}
                      >
                        OFFLINE SHIELD ACTIVE
                      </span>
                    </div>

                    <div style={{ fontFamily: "monospace", fontSize: "0.78rem", lineHeight: 1.6 }}>
                      <div style={{ color: "#EF4444" }}>
                        [ALERT] Public Cloud Cluster unreachable. Autonomous edge protocol engaged.
                      </div>
                      <div style={{ color: "#10B981", marginTop: "0.25rem" }}>
                        ✔ 20 Modules Operational: Check-in, Door Locks, Tape Chart, POS, Housekeeping
                      </div>
                      <div style={{ color: "#F2BE71" }}>
                        ➜ Outbox Buffer: 48 local transactions queued &amp; cryptographically signed
                      </div>
                      <div style={{ color: "#7A6E62", marginTop: "0.25rem" }}>
                        Front Desk &amp; Guest Disruption: EXACTLY 0%
                      </div>
                    </div>
                  </div>

                  {/* Bullet Details */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#D3C4B3" }}>
                      <CheckCircle2 size={16} color="#C79A45" />
                      <span><strong>No Loading Spinners:</strong> Front desk receptionists never get frozen modals, page timeouts, or reconnect popups.</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#D3C4B3" }}>
                      <CheckCircle2 size={16} color="#C79A45" />
                      <span><strong>Complete Night Audit Capability:</strong> Night audits, shift reconciliations, and daily reporting execute on time regardless of WAN status.</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ----------------------------------------------------------
                  CURVED ARROW 3: DESKTOP SWOOPING DOWN-RIGHT (↘)
                  Connecting Left Card 3 to Right Card 4
                  ---------------------------------------------------------- */}
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.3, once: false }}
                transition={{ duration: 0.6 }}
                style={{
                  width: "100%",
                  height: "100px",
                  position: "relative",
                  margin: "0.5rem 0",
                }}
              >
                <svg
                  viewBox="0 0 1000 100"
                  fill="none"
                  style={{ width: "100%", height: "100%", overflow: "visible" }}
                >
                  <defs>
                    <linearGradient id="goldCurveGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="50%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#F2BE71" />
                    </linearGradient>
                    <marker id="arrowhead-down-right-sync" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L8,3 z" fill="#10B981" />
                    </marker>
                  </defs>

                  {/* Ambient Glow Trail */}
                  <path
                    d="M 280,10 C 280,75 750,25 750,90"
                    stroke="rgba(16,185,129,0.22)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />

                  {/* Animated Dashed Vector Line on Scroll */}
                  <motion.path
                    d="M 280,10 C 280,75 750,25 750,90"
                    stroke="url(#goldCurveGrad3)"
                    strokeWidth="3.5"
                    strokeDasharray="6 6"
                    initial={{ pathLength: 0.15, opacity: 0.35 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ amount: 0.3, once: false }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    markerEnd="url(#arrowhead-down-right-sync)"
                  />
                </svg>

                {/* Floating Badge in Middle of Swoop */}
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ amount: 0.4, once: false }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "52%",
                    transform: "translate(-50%, -50%)",
                    background: "#161310",
                    border: "1px solid rgba(16,185,129,0.4)",
                    borderRadius: 20,
                    padding: "0.3rem 0.9rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#10B981",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.6)",
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981" }} />
                  <span>Cloud Up Detected: Rapid Delta Burst Replay</span>
                </motion.div>
              </motion.div>

              {/* Mobile Vertical Fallback Connector */}
              <div
                className="flex md:hidden items-center justify-center my-3"
                style={{ gap: "0.5rem", color: "#10B981", fontSize: "0.75rem", fontWeight: 700 }}
              >
                <div style={{ width: 2, height: 26, background: "linear-gradient(to bottom, #EF4444, #10B981)" }} />
                <span>Cloud Restored ↘</span>
              </div>

              {/* ----------------------------------------------------------
                  PHASE 04: CLOUD UP & RAPID DELTA SYNC (RIGHT BOX)
                  ---------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, y: 40, x: 25 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ amount: 0.25, once: false }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                style={{
                  width: "100%",
                  maxWidth: "620px",
                  marginLeft: "auto",
                  marginRight: 0,
                  transition: "box-shadow 0.3s ease",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(180deg, #1F1A15 0%, #171411 100%)",
                    borderRadius: 14,
                    border: "1.5px solid rgba(16,185,129,0.35)",
                    boxShadow: "0 12px 36px rgba(0,0,0,0.6), 0 0 25px rgba(16,185,129,0.12)",
                    padding: "2rem",
                    position: "relative",
                  }}
                >
                  {/* Phase Marker Badge */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <span
                      style={{
                        background: "rgba(16,185,129,0.18)",
                        color: "#10B981",
                        fontSize: "0.72rem",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        padding: "0.25rem 0.65rem",
                        borderRadius: 4,
                        letterSpacing: "0.08em",
                      }}
                    >
                      PHASE 04 // CLOUD RECONNECTED &amp; FAST SYNC
                    </span>

                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "#10B981",
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 6px #10B981" }} />
                      DELTA STREAM RECONCILED
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "1.45rem",
                      fontWeight: 700,
                      color: "#F7F4EE",
                      marginBottom: "0.6rem",
                    }}
                  >
                    Cloud Up &amp; Rapid Delta Sync Replay
                  </h3>

                  <p style={{ fontSize: "0.9rem", color: "#D3C4B3", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    The millisecond the WAN link reconnects, SPEAR’s high-velocity sync engine bursts queued transactions to the global cloud cluster at over <strong>1,850 events per second</strong> with automated conflict resolution.
                  </p>

                  {/* HIGH-FIDELITY CLOUD UP & SYNC REPLAY SVG */}
                  <div
                    style={{
                      background: "#0D0A08",
                      borderRadius: 8,
                      border: "1px solid rgba(16,185,129,0.3)",
                      overflow: "hidden",
                      marginBottom: "1.5rem",
                      padding: "1rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "0.5rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Wifi size={18} color="#10B981" />
                        <span style={{ fontFamily: "monospace", fontSize: "0.82rem", fontWeight: 700, color: "#10B981" }}>
                          WAN UPLINK: RESTORED (1 Gbps FIBER)
                        </span>
                      </div>
                      <span
                        style={{
                          background: "rgba(16,185,129,0.18)",
                          color: "#10B981",
                          fontSize: "0.7rem",
                          fontFamily: "monospace",
                          fontWeight: 700,
                          padding: "0.2rem 0.5rem",
                          borderRadius: 4,
                        }}
                      >
                        100% RECONCILED
                      </span>
                    </div>

                    <div style={{ fontFamily: "monospace", fontSize: "0.78rem", lineHeight: 1.6 }}>
                      <div style={{ color: "#F2BE71" }}>
                        ➜ AWS Master Cluster handshake completed (18ms)
                      </div>
                      <div style={{ color: "#10B981", marginTop: "0.25rem" }}>
                        ✔ 48 buffered transactions streamed in 148ms (1,850 ops/sec)
                      </div>
                      <div style={{ color: "#10B981" }}>
                        ✔ CRDT Conflict Resolution: 0 Contention, 0 Overwritten Bills
                      </div>
                      <div style={{ color: "#D4A359", marginTop: "0.25rem" }}>
                        ✔ 2-Way OTA Channel Manager (Booking.com, Airbnb) Re-aligned
                      </div>
                    </div>
                  </div>

                  {/* Bullet Details */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#D3C4B3" }}>
                      <CheckCircle2 size={16} color="#C79A45" />
                      <span><strong>High-Velocity Burst Sync:</strong> Hours of offline check-ins and charges reconcile to the cloud in fractions of a second.</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#D3C4B3" }}>
                      <CheckCircle2 size={16} color="#C79A45" />
                      <span><strong>OTA Inventory Re-Alignment:</strong> The channel manager pushes updated room inventories to external OTAs immediately upon reconnection.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section
          id="architecture-specs"
          style={{
            padding: "6rem 2rem",
            background: "#F7F1E6",
            color: "#221B16",
          }}
        >
          <div style={{ maxWidth: 1152, margin: "0 auto", width: "100%" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#C79A45",
                  marginBottom: "0.75rem",
                }}
              >
                Comprehensive Feature Set
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), var(--font-fraunces), 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 700,
                  color: "#221B16",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  marginBottom: "1rem",
                }}
              >
                Engineered for <span className="italic font-normal gold-gradient-text">Zero Operational Friction</span>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: "1rem",
                  color: "#5C4F44",
                  maxWidth: "52ch",
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                Organized into 6 core operational competencies. Every capability integrates
                natively with the broader SPEAR hub without third-party middleware.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.75rem",
                alignItems: "stretch",
              }}
            >
              {CORE_CAPABILITIES.map((cap, i) => (
                <div
                  key={i}
                  style={{
                    background: "#EDE5D4",
                    border: "1px solid rgba(199,154,69,0.25)",
                    borderRadius: 8,
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 6,
                        background: "rgba(199,154,69,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#C79A45",
                      }}
                    >
                      <cap.icon size={22} />
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-manrope), system-ui, sans-serif",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#8C6A2E",
                        background: "rgba(199,154,69,0.14)",
                        padding: "0.2rem 0.55rem",
                        borderRadius: 4,
                      }}
                    >
                      {cap.tag}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#221B16",
                      margin: "0.25rem 0 0",
                    }}
                  >
                    {cap.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: "0.9rem",
                      color: "#5C4F44",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {cap.description}
                  </p>

                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: "0.75rem",
                      borderTop: "1px solid rgba(199,154,69,0.2)",
                      fontSize: "0.78rem",
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontWeight: 600,
                      color: "#7A5E2E",
                    }}
                  >
                    ✦ {cap.metrics}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            STEP-BY-STEP OPERATIONAL FLOW
            ============================================================ */}
        <section style={{ padding: "6rem 2rem", background: "#161310", borderTop: "1px solid rgba(212,163,89,0.15)" }}>
          <div style={{ maxWidth: 1152, margin: "0 auto", width: "100%" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#C79A45",
                  marginBottom: "0.75rem",
                }}
              >
                Lifecycle Pipeline
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), var(--font-fraunces), 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 700,
                  color: "#F7F4EE",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  marginBottom: "1rem",
                }}
              >
                The Complete Guest Journey Through the <span className="italic font-normal gold-gradient-text">PMS State Machine</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
              {ARCHITECTURE_PIPELINE.map((p, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#221F1C",
                    borderRadius: 8,
                    border: "1px solid rgba(212,163,89,0.2)",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "2.8rem",
                      fontWeight: 800,
                      color: "rgba(199,154,69,0.25)",
                      lineHeight: 1,
                    }}
                  >
                    {p.step}
                  </span>

                  <div>
                    <span style={{ fontSize: "0.72rem", color: "#C79A45", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {p.phase}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", color: "#F7F4EE", margin: "0.35rem 0 0" }}>
                      {p.title}
                    </h3>
                  </div>

                  <p style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "0.86rem", color: "#A89C8F", lineHeight: 1.65, margin: 0 }}>
                    {p.description}
                  </p>

                  <div style={{ marginTop: "auto", paddingTop: "0.75rem", borderTop: "1px solid rgba(212,163,89,0.15)", fontSize: "0.74rem", color: "#D4A359", fontFamily: "monospace" }}>
                    Connected: {p.subsystem}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            CONNECTED MODULES DIRECTORY
            ============================================================ */}
        <section style={{ padding: "5rem 2rem", background: "#1B1714", borderTop: "1px solid rgba(212,163,89,0.12)" }}>
          <div style={{ maxWidth: 1152, margin: "0 auto", width: "100%" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{ fontSize: "0.7rem", color: "#C79A45", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Ecosystem Integration Grid
              </span>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "2rem", color: "#F7F4EE", marginTop: "0.5rem" }}>
                Modules Interconnected with the PMS
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {[
                { name: "pos-system", desc: "Tauri offline desktop POS pushes meal tabs to open room folios instantly.", icon: Receipt },
                { name: "booking-engine", desc: "Direct website widget checks tape chart availability and locks rooms.", icon: BedDouble },
                { name: "smart-locks", desc: "Issues and revokes Apple/Google Wallet digital NFC keys via cloud API.", icon: KeyRound },
                { name: "rms", desc: "Monitors PMS occupancy curves to calculate yield rate multipliers.", icon: Zap },
                { name: "property-inventory", desc: "Receives checkout events to trigger linen and consumable restocks.", icon: Layers },
                { name: "staff-management", desc: "Syncs room cleaning tasks with biometric staff shift records.", icon: UserCheck },
              ].map((m, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1.25rem",
                    borderRadius: 6,
                    background: "#221D18",
                    border: "1px solid rgba(212,163,89,0.15)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.85rem",
                  }}
                >
                  <div style={{ color: "#C79A45", marginTop: "0.2rem" }}>
                    <m.icon size={20} />
                  </div>
                  <div>
                    <span style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "#F2BE71", fontWeight: 700 }}>
                      {m.name}
                    </span>
                    <p style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "0.8rem", color: "#A89C8F", margin: "0.35rem 0 0", lineHeight: 1.5 }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            FINAL CALL TO ACTION
            ============================================================ */}
        <section
          style={{
            padding: "6rem 2rem",
            background: "radial-gradient(circle at 50% 50%, #2A2118 0%, #161310 80%)",
            textAlign: "center",
            borderTop: "1px solid rgba(212,163,89,0.2)",
          }}
        >
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <span
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C79A45",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Enterprise Hospitality Engineering
            </span>
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#F7F4EE",
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              Ready to Deploy the <span className="italic font-normal gold-gradient-text">SPEAR PMS</span>?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "1.05rem",
                color: "#D3C4B3",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              Our dedicated hospitality engineers handle legacy database extraction, room inventory imports,
              and tape chart mapping without taking your hotel offline. Live in under 72 hours.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                role="button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.9rem 2rem",
                  borderRadius: 6,
                  background: "#D4A359",
                  color: "#161310",
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(212,163,89,0.3)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#F2BE71";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#D4A359";
                }}
              >
                <span>Schedule 1-on-1 Walkthrough</span>
                <ArrowRight size={16} />
              </a>

              <Link
                href="/#product"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    sessionStorage.setItem("spear_disable_popup", "true");
                  }
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.9rem 1.75rem",
                  borderRadius: 6,
                  border: "1px solid rgba(212,163,89,0.3)",
                  background: "transparent",
                  color: "#F7F4EE",
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <span>Back to All 6 Pillars</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
