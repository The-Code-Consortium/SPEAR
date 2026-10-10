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
    title: "Live Room Booking Calendar",
    tag: "Visual Timeline",
    description:
      "A clear, color-coded calendar of every room, floor, and guest stay. Drag to extend bookings, swap rooms in seconds, and eliminate double-booking mistakes.",
    metrics: "Instant real-time room availability across your property",
  },
  {
    icon: Receipt,
    title: "One Combined Guest Bill",
    tag: "All-in-One Billing",
    description:
      "Restaurant meals, bar drinks, pool snacks, and room nights automatically roll into one simple invoice for the guest upon checkout.",
    metrics: "Eliminates missing receipts and manual end-of-day billing checks",
  },
  {
    icon: Sparkles,
    title: "Instant Housekeeping Alerts",
    tag: "Mobile Cleaning Dispatch",
    description:
      "The second a guest checks out at reception, housekeeping staff receive a phone alert so clean rooms are ready faster for incoming arrivals.",
    metrics: "35% faster room turnover between guest stays",
  },
  {
    icon: KeyRound,
    title: "Digital Door Keys on Phone",
    tag: "Apple & Google Wallet",
    description:
      "Guests can unlock their hotel room right from their smartphone wallet. Keys activate on arrival and expire automatically the moment they check out.",
    metrics: "Eliminates lost plastic keycards and front desk waiting lines",
  },
  {
    icon: RefreshCw,
    title: "Automatic OTA & Booking Sync",
    tag: "Channel Manager Sync",
    description:
      "Live 2-way sync with Booking.com, Airbnb, Agoda, and Expedia. When a room sells anywhere, your inventory updates everywhere automatically.",
    metrics: "100% price and room availability sync across all channels",
  },
  {
    icon: Server,
    title: "Works 100% Offline When Wi-Fi Drops",
    tag: "Always-On Reliability",
    description:
      "Your front desk, restaurant POS, and room keys keep running even during total internet outages. When connection returns, everything syncs automatically.",
    metrics: "Zero guest delays or frozen front desk screens during outages",
  },
];

const ARCHITECTURE_PIPELINE = [
  {
    step: "01",
    phase: "Guest Reserves",
    title: "Direct or OTA Booking Intake",
    description:
      "The guest reserves a stay on your direct website or an OTA like Booking.com. The room is locked on your calendar instantly, deposits are processed, and dates are held.",
    subsystem: "Direct Booking Engine & OTAs",
  },
  {
    step: "02",
    phase: "Before Arrival",
    title: "Easy Pre-Arrival & Mobile Key",
    description:
      "The guest receives a welcome message on WhatsApp with reservation details, online check-in, and the option to save a digital door key to their smartphone.",
    subsystem: "Contactless Check-In & Smart Keys",
  },
  {
    step: "03",
    phase: "During the Stay",
    title: "Dining & Room Charges",
    description:
      "Whenever the guest orders food at the restaurant, drinks at the bar, or enjoys room service, staff simply tap the room number to post the tab directly to their bill.",
    subsystem: "Restaurant POS & Room Billing",
  },
  {
    step: "04",
    phase: "Departure",
    title: "Quick Checkout & Housekeeping Alert",
    description:
      "The guest settles their bill in seconds. Digital keys expire immediately, the room calendar turns to 'Ready to Clean', and housekeeping gets an instant phone alert.",
    subsystem: "Housekeeping Dispatch & Front Desk",
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
                  Pillar 01 • Hotel Property Management System
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
                The complete operating heart of your hotel. Effortlessly manage bookings, eliminate
                double-booking risks, speed up guest check-ins, and keep your front desk, housekeeping team,
                and restaurant dining tabs in perfect harmony—with continuous offline reliability even during network outages.
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
                  <span>Book PMS Walkthrough</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#how-it-works-preview"
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
                  <span>See How It Works</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ============================================================
            METRIC SPEC BAR (HOTEL OPERATOR VALUE)
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
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              { label: "Double Bookings", val: "0% Risk", detail: "Real-time calendar synchronization" },
              { label: "Check-In Speed", val: "< 60 Seconds", detail: "Fast front desk arrivals & key handoff" },
              { label: "Guest Billing", val: "100% Unified", detail: "Rooms, restaurant & bar on one invoice" },
              { label: "Offline Resilience", val: "100% Uptime", detail: "Front desk stays fully operational during network outages" },
              { label: "Room Turnover", val: "35% Faster", detail: "Instant cleaning alerts for housekeeping" },
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
                Everything Your Team Needs,{" "}
                <span className="italic font-normal gold-gradient-text">Made Simple to Run</span>
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
                { id: "tape-chart", label: "01. Live Room Calendar (Tape Chart)" },
                { id: "folio", label: "02. One Combined Guest Bill (Folio)" },
                { id: "events", label: "03. Instant Staff & Cleaning Sync" },
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
                        Live Room Calendar &amp; Booking Timeline
                      </h3>
                      <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: "0.88rem", color: "#A89C8F", margin: "0.35rem 0 0" }}>
                        See every room, reservation, and guest checkout at a glance with instant drag-and-drop flexibility
                      </p>
                    </div>
                    <div style={{ display: "flex", gap: "0.75rem", fontSize: "0.75rem", fontFamily: "var(--font-manrope), sans-serif" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "#F2BE71" }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#C79A45" }} /> Occupied Stay
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "#8AE0A0" }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4CAF50" }} /> Ready &amp; Clean
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "#FFB4AB" }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF5252" }} /> Cleaning in Progress
                      </span>
                    </div>
                  </div>

                  {/* Tape Chart Matrix Mock */}
                  <div style={{ overflowX: "auto", border: "1px solid rgba(212,163,89,0.15)", borderRadius: 8, background: "#181512" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem", fontFamily: "var(--font-manrope), sans-serif" }}>
                      <thead>
                        <tr style={{ background: "#26211D", borderBottom: "1px solid rgba(212,163,89,0.2)" }}>
                          <th style={{ padding: "0.85rem 1rem", textAlign: "left", color: "#C79A45", width: 160 }}>Room / Unit</th>
                          <th style={{ padding: "0.85rem 1rem", textAlign: "center", color: "#D3C4B3" }}>Today (Arrivals)</th>
                          <th style={{ padding: "0.85rem 1rem", textAlign: "center", color: "#D3C4B3" }}>Tomorrow</th>
                          <th style={{ padding: "0.85rem 1rem", textAlign: "center", color: "#D3C4B3" }}>Day 3</th>
                          <th style={{ padding: "0.85rem 1rem", textAlign: "center", color: "#D3C4B3" }}>Day 4</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { room: "101 Deluxe King", guest: "Elena Vance (Direct Booking)", span: 3, status: "Occupied", bg: "rgba(199,154,69,0.25)", border: "#C79A45" },
                          { room: "102 Superior Queen", guest: "Inspected & Ready for Arrival", span: 1, status: "Ready & Clean", bg: "rgba(76,175,80,0.18)", border: "#4CAF50" },
                          { room: "201 Ocean Suite", guest: "Sophia Lin (Booking.com VIP)", span: 4, status: "Occupied", bg: "rgba(199,154,69,0.25)", border: "#C79A45" },
                          { room: "202 Garden Villa", guest: "Checked Out (Housekeeper Assigned)", span: 1, status: "Cleaning in Progress", bg: "rgba(255,82,82,0.18)", border: "#FF5252" },
                          { room: "301 Penthouse Suite", guest: "Marcus Thorne (3 Nights)", span: 2, status: "Occupied", bg: "rgba(199,154,69,0.25)", border: "#C79A45" },
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
                                Ready to Book
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
                      One Clean Guest Invoice for All Charges
                    </h3>
                    <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: "0.88rem", color: "#A89C8F", margin: "0.35rem 0 0" }}>
                      Room 201 — Restaurant meals, bar drinks, and room rates merge automatically into one clear bill
                    </p>
                  </div>

                  <div style={{ border: "1px solid rgba(212,163,89,0.18)", borderRadius: 8, background: "#181512", padding: "1.25rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(212,163,89,0.15)", paddingBottom: "0.75rem", marginBottom: "1rem" }}>
                      <div>
                        <span style={{ fontSize: "0.75rem", color: "#C79A45", textTransform: "uppercase", fontWeight: 700 }}>Guest Invoice #FOL-88219</span>
                        <div style={{ fontSize: "1rem", color: "#F7F4EE", fontWeight: 700 }}>Sophia Lin (Ocean Suite)</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ fontSize: "0.75rem", color: "#9C8F7F" }}>Status</span>
                        <div style={{ fontSize: "0.85rem", color: "#4CAF50", fontWeight: 600 }}>Active Stay (Card Pre-Authorized)</div>
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.85rem", fontFamily: "var(--font-manrope), sans-serif" }}>
                      {[
                        { item: "Room Stay: 3 Nights ($320 / night)", source: "Front Desk Booking", time: "Oct 08, 14:00", amount: "$960.00" },
                        { item: "Hotel Restaurant: Filet Mignon, Barolo Wine", source: "Restaurant POS (Room Charge)", time: "Oct 08, 20:45", amount: "$184.50" },
                        { item: "Poolside Bar: Fresh Cocktails & Snacks", source: "Waiter Tablet (Pool Bar)", time: "Oct 09, 13:15", amount: "$42.00" },
                        { item: "Late Checkout Extension (to 2:00 PM)", source: "Front Desk Request", time: "Oct 09, 16:30", amount: "$50.00" },
                      ].map((entry, idx) => (
                        <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.6rem 0.85rem", background: "rgba(255,255,255,0.03)", borderRadius: 4 }}>
                          <div>
                            <span style={{ color: "#F7F4EE", fontWeight: 600 }}>{entry.item}</span>
                            <span style={{ display: "block", fontSize: "0.72rem", color: "#9C8F7F" }}>Added via {entry.source} • {entry.time}</span>
                          </div>
                          <span style={{ color: "#F2BE71", fontWeight: 700, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem" }}>{entry.amount}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(212,163,89,0.2)", marginTop: "1.25rem", paddingTop: "1rem" }}>
                      <span style={{ fontSize: "0.85rem", color: "#D3C4B3", fontWeight: 600 }}>Total Balance Ready for Checkout:</span>
                      <span style={{ fontSize: "1.35rem", color: "#F7F4EE", fontWeight: 700, fontFamily: "var(--font-playfair), Georgia, serif" }}>$1,236.50</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "events" && (
                <div>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", color: "#F7F4EE", margin: 0 }}>
                      Automatic Staff &amp; Department Coordination
                    </h3>
                    <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: "0.88rem", color: "#A89C8F", margin: "0.35rem 0 0" }}>
                      When front desk checks a guest in or out, your entire hotel responds instantly without extra phone calls
                    </p>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
                    {[
                      {
                        action: "When a Guest Checks In",
                        trigger: "Front desk confirms arrival for Elena Vance (Room 101)",
                        steps: [
                          "Digital Door Key delivered directly to guest phone (Apple/Google Wallet)",
                          "Room calendar instantly switches to 'Occupied' on all team screens",
                          "Welcome amenity task created for housekeeping and minibar team",
                        ],
                        badgeColor: "#10B981",
                        badgeText: "ARRIVAL WORKFLOW",
                      },
                      {
                        action: "When a Guest Checks Out",
                        trigger: "Guest settles their invoice and hands in room at reception",
                        steps: [
                          "Housekeeping maid's phone beeps: 'Room 101 ready for cleaning'",
                          "Digital door key access expires automatically for security",
                          "Room becomes available on booking engine and OTAs once inspected",
                        ],
                        badgeColor: "#C79A45",
                        badgeText: "DEPARTURE WORKFLOW",
                      },
                    ].map((item, idx) => (
                      <div key={idx} style={{ background: "#181512", border: "1px solid rgba(212,163,89,0.18)", borderRadius: 8, padding: "1.25rem" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                          <span style={{ background: "rgba(199,154,69,0.18)", color: item.badgeColor, padding: "0.25rem 0.6rem", borderRadius: 4, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em" }}>
                            {item.badgeText}
                          </span>
                        </div>
                        <h4 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", color: "#F7F4EE", margin: "0 0 0.4rem" }}>
                          {item.action}
                        </h4>
                        <div style={{ background: "#221D18", padding: "0.6rem 0.75rem", borderRadius: 4, fontSize: "0.82rem", color: "#D3C4B3", marginBottom: "1rem", borderLeft: `3px solid ${item.badgeColor}` }}>
                          {item.trigger}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                          <span style={{ fontSize: "0.72rem", color: "#C79A45", textTransform: "uppercase", fontWeight: 700 }}>What happens automatically:</span>
                          {item.steps.map((step, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.82rem", color: "#D3C4B3" }}>
                              <CheckCircle2 size={15} color="#C79A45" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                              <span>{step}</span>
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

          <div style={{ maxWidth: 1320, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* LEFT COLUMN: TITLE & VALUE PROPOSITION */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
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
                    marginBottom: "1.25rem",
                  }}
                >
                  Zero Downtime Guarantee
                </span>

                <h2
                  style={{
                    fontFamily: "var(--font-playfair), var(--font-fraunces), 'Playfair Display', Georgia, serif",
                    fontSize: "clamp(2rem, 3.2vw, 2.85rem)",
                    fontWeight: 700,
                    color: "#F7F4EE",
                    lineHeight: 1.18,
                    letterSpacing: "-0.02em",
                    marginBottom: "1.5rem",
                  }}
                >
                  Offline-First Reliability:{" "}
                  <span className="italic font-normal gold-gradient-text block mt-1">
                    Your Front Desk Never Freezes
                  </span>
                </h2>

                <p
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: "1.02rem",
                    color: "#D3C4B3",
                    lineHeight: 1.75,
                    marginBottom: "2rem",
                  }}
                >
                  When bad weather or construction cuts your property&apos;s internet, ordinary hotel software
                  stops working and leaves guests waiting in the lobby. With SPEAR, your front desk can check in
                  arrivals, create door keys, post restaurant tabs, and print bills 100% offline—and everything
                  syncs back to the cloud automatically when Wi-Fi returns.
                </p>

                {/* 3 Quick Hotel Staff Pillars */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", marginBottom: "2rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <div style={{ marginTop: "0.2rem", color: "#10B981" }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <strong style={{ color: "#F7F4EE", fontSize: "0.92rem", display: "block" }}>100% On-Site Independence</strong>
                      <span style={{ color: "#A89C8F", fontSize: "0.84rem", lineHeight: 1.5 }}>
                        Front desk computers, key encoders, and kitchen printers continue running without a hiccup.
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <div style={{ marginTop: "0.2rem", color: "#10B981" }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <strong style={{ color: "#F7F4EE", fontSize: "0.92rem", display: "block" }}>Zero Lobby Queues</strong>
                      <span style={{ color: "#A89C8F", fontSize: "0.84rem", lineHeight: 1.5 }}>
                        Check in arriving guests in under 60 seconds with active room keys—no loading spinners.
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <div style={{ marginTop: "0.2rem", color: "#10B981" }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <strong style={{ color: "#F7F4EE", fontSize: "0.92rem", display: "block" }}>Automated Background Cloud Sync</strong>
                      <span style={{ color: "#A89C8F", fontSize: "0.84rem", lineHeight: 1.5 }}>
                        When connection restores, all guest folios, room cleanings, and check-ins reconcile seamlessly in seconds.
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.55rem 0.95rem",
                    borderRadius: 8,
                    background: "rgba(199,154,69,0.08)",
                    border: "1px solid rgba(199,154,69,0.2)",
                    fontSize: "0.8rem",
                    color: "#D4A359",
                    fontWeight: 600,
                  }}
                >
                  <ShieldCheck size={16} color="#D4A359" />
                  <span>Tested for 72+ continuous offline operating hours</span>
                </div>
              </div>

              {/* RIGHT COLUMN: FRAMED ARCHITECTURE SVG CANVAS */}
              <div className="lg:col-span-7">
                <div
                  style={{
                    background: "linear-gradient(180deg, #1A1512 0%, #14110E 100%)",
                    borderRadius: 18,
                    border: "1.5px solid rgba(212,163,89,0.3)",
                    boxShadow: "0 24px 60px rgba(0,0,0,0.65), 0 0 35px rgba(212,163,89,0.08)",
                    padding: "2rem 1.75rem",
                    position: "relative",
                  }}
                >
                  {/* Top Canvas Bar */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid rgba(212,163,89,0.15)",
                      paddingBottom: "0.85rem",
                      marginBottom: "1.75rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 8px #10B981" }} />
                      <span style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "#F2BE71", fontWeight: 700, letterSpacing: "0.08em" }}>
                        EDGE ARCHITECTURE FLOW
                      </span>
                    </div>
                    <span style={{ fontSize: "0.72rem", color: "#A89C8F", fontFamily: "var(--font-manrope), sans-serif" }}>
                      Continuous Offline Resilience
                    </span>
                  </div>

                  {/* Serpentine 4-Phase SVG Flow */}
                  <div style={{ position: "relative" }}>

                    {/* --------------------------------------------------------
                        BOX 01: FRONT DESK & POS TERMINAL (TOP-LEFT)
                        -------------------------------------------------------- */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ amount: 0.3, once: false }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      style={{
                        width: "100%",
                        maxWidth: "320px",
                        marginRight: "auto",
                        marginLeft: 0,
                        background: "#221D18",
                        border: "1px solid rgba(212,163,89,0.35)",
                        borderRadius: 12,
                        padding: "1rem 1.15rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                      }}
                    >
                      {/* POS Screen & Card Reader SVG */}
                      <div style={{ flexShrink: 0 }}>
                        <svg width="56" height="42" viewBox="0 0 64 48" fill="none">
                          <rect x="6" y="4" width="38" height="26" rx="3" fill="#15120F" stroke="#D4A359" strokeWidth="1.5" />
                          <rect x="10" y="8" width="30" height="18" rx="1.5" fill="#25201A" />
                          <line x1="14" y1="13" x2="26" y2="13" stroke="#D4A359" strokeWidth="1.5" strokeLinecap="round" />
                          <line x1="14" y1="17" x2="34" y2="17" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" />
                          <line x1="14" y1="21" x2="22" y2="21" stroke="#F2BE71" strokeWidth="1.2" strokeLinecap="round" />
                          <path d="M25 30 L25 37 M18 37 L32 37" stroke="#D4A359" strokeWidth="1.5" strokeLinecap="round" />
                          <rect x="47" y="14" width="13" height="22" rx="2" fill="#15120F" stroke="#10B981" strokeWidth="1.5" />
                          <rect x="50" y="17" width="7" height="4" rx="0.5" fill="#10B981" opacity="0.6" />
                          <line x1="49" y1="25" x2="58" y2="25" stroke="#D4A359" strokeWidth="1" />
                          <circle cx="53.5" cy="31" r="1.5" fill="#10B981" />
                        </svg>
                      </div>

                      <div>
                        <span style={{ fontSize: "0.66rem", color: "#C79A45", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.06em", display: "block" }}>
                          01 • POS &amp; TERMINALS
                        </span>
                        <h4 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.05rem", color: "#F7F4EE", margin: "0.15rem 0 0.2rem" }}>
                          Front Desk Stations
                        </h4>
                        <p style={{ fontSize: "0.75rem", color: "#A89C8F", margin: 0, lineHeight: 1.4 }}>
                          Check-in, guest folios &amp; key encoding execute locally on device with zero lag.
                        </p>
                      </div>
                    </motion.div>

                    {/* --------------------------------------------------------
                        SWOOPING ARROW 1 (↘ DOWN-RIGHT TO SERVER)
                        -------------------------------------------------------- */}
                    <div style={{ width: "100%", height: "65px", position: "relative", margin: "0.25rem 0" }}>
                      <svg viewBox="0 0 500 65" fill="none" style={{ width: "100%", height: "100%", overflow: "visible" }}>
                        <defs>
                          <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#C79A45" />
                            <stop offset="100%" stopColor="#F2BE71" />
                          </linearGradient>
                          <marker id="arrowHead1" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L8,3 z" fill="#F2BE71" />
                          </marker>
                        </defs>
                        <path d="M 155,10 C 155,50 345,15 345,55" stroke="rgba(242,190,113,0.18)" strokeWidth="6" strokeLinecap="round" />
                        <motion.path
                          d="M 155,10 C 155,50 345,15 345,55"
                          stroke="url(#flowGrad1)"
                          strokeWidth="2.5"
                          strokeDasharray="5 5"
                          initial={{ pathLength: 0.2, opacity: 0.4 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ amount: 0.3, once: false }}
                          transition={{ duration: 0.8 }}
                          markerEnd="url(#arrowHead1)"
                        />
                      </svg>
                      <div
                        style={{
                          position: "absolute",
                          top: "45%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          background: "#161310",
                          border: "1px solid rgba(212,163,89,0.35)",
                          borderRadius: 14,
                          padding: "0.2rem 0.65rem",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          color: "#F2BE71",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Internal Wi-Fi Network ↘
                      </div>
                    </div>

                    {/* --------------------------------------------------------
                        BOX 02: ON-SITE LOCAL HOTEL HUB (MIDDLE-RIGHT)
                        -------------------------------------------------------- */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ amount: 0.3, once: false }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      style={{
                        width: "100%",
                        maxWidth: "320px",
                        marginLeft: "auto",
                        marginRight: 0,
                        background: "#221D18",
                        border: "1px solid rgba(212,163,89,0.35)",
                        borderRadius: 12,
                        padding: "1rem 1.15rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                      }}
                    >
                      {/* Server Rack & Wi-Fi SVG */}
                      <div style={{ flexShrink: 0 }}>
                        <svg width="56" height="42" viewBox="0 0 64 48" fill="none">
                          <rect x="8" y="6" width="34" height="34" rx="3" fill="#15120F" stroke="#D4A359" strokeWidth="1.5" />
                          <rect x="12" y="10" width="26" height="7" rx="1.5" fill="#25201A" stroke="rgba(212,163,89,0.3)" strokeWidth="1" />
                          <circle cx="16" cy="13.5" r="1.5" fill="#10B981" />
                          <circle cx="21" cy="13.5" r="1.5" fill="#10B981" />
                          <line x1="26" y1="13.5" x2="34" y2="13.5" stroke="#C79A45" strokeWidth="1" strokeLinecap="round" />
                          <rect x="12" y="19" width="26" height="7" rx="1.5" fill="#25201A" stroke="rgba(212,163,89,0.3)" strokeWidth="1" />
                          <circle cx="16" cy="22.5" r="1.5" fill="#10B981" />
                          <circle cx="21" cy="22.5" r="1.5" fill="#F59E0B" />
                          <line x1="26" y1="22.5" x2="34" y2="22.5" stroke="#C79A45" strokeWidth="1" strokeLinecap="round" />
                          <rect x="12" y="28" width="26" height="7" rx="1.5" fill="#25201A" stroke="rgba(212,163,89,0.3)" strokeWidth="1" />
                          <circle cx="16" cy="31.5" r="1.5" fill="#10B981" />
                          <circle cx="21" cy="31.5" r="1.5" fill="#10B981" />
                          <path d="M47 18 A12 12 0 0 1 57 28" stroke="#D4A359" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                          <path d="M47 23 A6 6 0 0 1 52 28" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                          <circle cx="47" cy="28" r="2" fill="#F2BE71" />
                        </svg>
                      </div>

                      <div>
                        <span style={{ fontSize: "0.66rem", color: "#C79A45", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.06em", display: "block" }}>
                          02 • ON-SITE HUB
                        </span>
                        <h4 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.05rem", color: "#F7F4EE", margin: "0.15rem 0 0.2rem" }}>
                          On-Site Hotel Server
                        </h4>
                        <p style={{ fontSize: "0.75rem", color: "#A89C8F", margin: 0, lineHeight: 1.4 }}>
                          Syncs restaurant dining bills and housekeeping updates across property over internal Wi-Fi.
                        </p>
                      </div>
                    </motion.div>

                    {/* --------------------------------------------------------
                        SWOOPING ARROW 2 (↙ DOWN-LEFT TO INTERNET CUT)
                        -------------------------------------------------------- */}
                    <div style={{ width: "100%", height: "65px", position: "relative", margin: "0.25rem 0" }}>
                      <svg viewBox="0 0 500 65" fill="none" style={{ width: "100%", height: "100%", overflow: "visible" }}>
                        <defs>
                          <linearGradient id="flowGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#F2BE71" />
                            <stop offset="100%" stopColor="#EF4444" />
                          </linearGradient>
                          <marker id="arrowHead2" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L8,3 z" fill="#EF4444" />
                          </marker>
                        </defs>
                        <path d="M 345,10 C 345,50 155,15 155,55" stroke="rgba(239,68,68,0.18)" strokeWidth="6" strokeLinecap="round" />
                        <motion.path
                          d="M 345,10 C 345,50 155,15 155,55"
                          stroke="url(#flowGrad2)"
                          strokeWidth="2.5"
                          strokeDasharray="5 5"
                          initial={{ pathLength: 0.2, opacity: 0.4 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ amount: 0.3, once: false }}
                          transition={{ duration: 0.8 }}
                          markerEnd="url(#arrowHead2)"
                        />
                      </svg>
                      <div
                        style={{
                          position: "absolute",
                          top: "45%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          background: "#161310",
                          border: "1px solid rgba(239,68,68,0.4)",
                          borderRadius: 14,
                          padding: "0.2rem 0.65rem",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          color: "#EF4444",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Network Disconnected (Link Down) ↙
                      </div>
                    </div>

                    {/* --------------------------------------------------------
                        BOX 03: CLOUD LINK DOWN / OFFLINE SAFEGUARD (MIDDLE-LEFT)
                        -------------------------------------------------------- */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ amount: 0.3, once: false }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      style={{
                        width: "100%",
                        maxWidth: "320px",
                        marginRight: "auto",
                        marginLeft: 0,
                        background: "#221D18",
                        border: "1px solid rgba(239,68,68,0.35)",
                        borderRadius: 12,
                        padding: "1rem 1.15rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                      }}
                    >
                      {/* Cloud Cut & Glowing Shield SVG */}
                      <div style={{ flexShrink: 0 }}>
                        <svg width="56" height="42" viewBox="0 0 64 48" fill="none">
                          <path d="M12 28a7 7 0 0 1 2-13.7A11 11 0 0 1 35 17a6 6 0 0 1 5 11z" fill="#15120F" stroke="#EF4444" strokeWidth="1.5" />
                          <line x1="10" y1="12" x2="38" y2="34" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                          <path d="M42 16 L54 12 L54 26 C54 32 48 37 42 39 C36 37 30 32 30 26 L30 12 Z" fill="#18271E" stroke="#10B981" strokeWidth="1.5" />
                          <path d="M37 25 L40 28 L47 20" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                      </div>

                      <div>
                        <span style={{ fontSize: "0.66rem", color: "#F59E0B", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.06em", display: "block" }}>
                          03 • OFFLINE SAFEGUARD
                        </span>
                        <h4 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.05rem", color: "#F7F4EE", margin: "0.15rem 0 0.2rem" }}>
                          Autonomous Local Mode
                        </h4>
                        <p style={{ fontSize: "0.75rem", color: "#A89C8F", margin: 0, lineHeight: 1.4 }}>
                          Zero front desk downtime. All arrivals, payments, and key cards buffer safely in local storage.
                        </p>
                      </div>
                    </motion.div>

                    {/* --------------------------------------------------------
                        SWOOPING ARROW 3 (↘ DOWN-RIGHT TO CLOUD RESTORED)
                        -------------------------------------------------------- */}
                    <div style={{ width: "100%", height: "65px", position: "relative", margin: "0.25rem 0" }}>
                      <svg viewBox="0 0 500 65" fill="none" style={{ width: "100%", height: "100%", overflow: "visible" }}>
                        <defs>
                          <linearGradient id="flowGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#EF4444" />
                            <stop offset="50%" stopColor="#10B981" />
                            <stop offset="100%" stopColor="#10B981" />
                          </linearGradient>
                          <marker id="arrowHead3" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L8,3 z" fill="#10B981" />
                          </marker>
                        </defs>
                        <path d="M 155,10 C 155,50 345,15 345,55" stroke="rgba(16,185,129,0.18)" strokeWidth="6" strokeLinecap="round" />
                        <motion.path
                          d="M 155,10 C 155,50 345,15 345,55"
                          stroke="url(#flowGrad3)"
                          strokeWidth="2.5"
                          strokeDasharray="5 5"
                          initial={{ pathLength: 0.2, opacity: 0.4 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ amount: 0.3, once: false }}
                          transition={{ duration: 0.8 }}
                          markerEnd="url(#arrowHead3)"
                        />
                      </svg>
                      <div
                        style={{
                          position: "absolute",
                          top: "45%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          background: "#161310",
                          border: "1px solid rgba(16,185,129,0.4)",
                          borderRadius: 14,
                          padding: "0.2rem 0.65rem",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          color: "#10B981",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Connection Restored &amp; Cloud Sync ↘
                      </div>
                    </div>

                    {/* --------------------------------------------------------
                        BOX 04: CLOUD RESTORED & RAPID SYNC (BOTTOM-RIGHT)
                        -------------------------------------------------------- */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ amount: 0.3, once: false }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      style={{
                        width: "100%",
                        maxWidth: "320px",
                        marginLeft: "auto",
                        marginRight: 0,
                        background: "#221D18",
                        border: "1px solid rgba(16,185,129,0.35)",
                        borderRadius: 12,
                        padding: "1rem 1.15rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                      }}
                    >
                      {/* Cloud Sync Replay SVG */}
                      <div style={{ flexShrink: 0 }}>
                        <svg width="56" height="42" viewBox="0 0 64 48" fill="none">
                          <path d="M10 30a7 7 0 0 1 2-13.7A11 11 0 0 1 33 19a6 6 0 0 1 5 11z" fill="#15120F" stroke="#10B981" strokeWidth="1.5" />
                          <path d="M23 27 L23 17 M19 21 L23 17 L27 21" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="48" cy="24" r="11" fill="#15120F" stroke="#D4A359" strokeWidth="1.5" />
                          <path d="M44 24 L47 27 L53 20" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                      </div>

                      <div>
                        <span style={{ fontSize: "0.66rem", color: "#10B981", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.06em", display: "block" }}>
                          04 • CLOUD UP &amp; SYNC
                        </span>
                        <h4 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.05rem", color: "#F7F4EE", margin: "0.15rem 0 0.2rem" }}>
                          Instant Cloud Re-Sync
                        </h4>
                        <p style={{ fontSize: "0.75rem", color: "#A89C8F", margin: 0, lineHeight: 1.4 }}>
                          Queued data uploads in seconds. Live room availability refreshes on Booking.com &amp; Airbnb.
                        </p>
                      </div>
                    </motion.div>

                  </div>
                </div>
              </div>
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
                Core Hotel Features
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
                Built for <span className="italic font-normal gold-gradient-text">Stress-Free Daily Hotel Operations</span>
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
                Everything your team needs to run a smooth, profitable property. Front desk, housekeeping, and management stay aligned without complicated software.
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
                Guest Experience Workflow
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
                The Complete Guest Journey: From First Booking to <span className="italic font-normal gold-gradient-text">Smooth Departure</span>
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
                Connected Property Hub
              </span>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "2rem", color: "#F7F4EE", marginTop: "0.5rem" }}>
                Connect Every Corner of Your Hotel
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {[
                { name: "Restaurant & Bar POS", desc: "Restaurant and room service charges post directly to the guest's room bill in real time.", icon: Receipt },
                { name: "Direct Website Bookings", desc: "Guests book directly on your website with live room calendar availability, saving you high OTA commissions.", icon: BedDouble },
                { name: "Mobile Digital Keys", desc: "Send contactless phone room keys upon check-in so VIP guests can walk straight to their rooms.", icon: KeyRound },
                { name: "Smart Rate Optimization", desc: "Automatically adjusts room pricing for weekends, holidays, and peak seasons to maximize your revenue.", icon: Zap },
                { name: "Housekeeping & Linen Supply", desc: "Tracks cleaning supplies, minibar refills, and fresh linens so every room is perfectly prepped.", icon: Layers },
                { name: "Staff Shifts & Checklists", desc: "Assigns daily cleaning checklists and manages front desk shifts so the whole team stays coordinated.", icon: UserCheck },
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
                    <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "0.88rem", color: "#F2BE71", fontWeight: 700 }}>
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
              Simple Setup &amp; 24/7 Support
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
              Ready to Upgrade Your <span className="italic font-normal gold-gradient-text">Hotel Operations</span>?
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
              Our hospitality onboarding specialists set up your rooms, import your past guest history,
              and train your staff without interrupting your daily business. Get running in days.
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
                <span>Book a Free Hotel Walkthrough</span>
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
