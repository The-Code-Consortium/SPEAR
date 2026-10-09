"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { fadeUpVariant, staggerContainer } from "@/lib/motion-variants";

const PILLARS = [
  {
    numeral: "01",
    id: "hotel-pms",
    title: "Hotel PMS & Room Operations",
    description:
      "Central master record controlling room assignments, tape chart scheduling, automated housekeeping task dispatch, and combined folio billing.",
    chips: [
      "Master Tape Chart",
      "Consolidated Folio Billing",
      "Housekeeping Dispatch",
      "Biometric Staff Clock-In",
    ],
    href: "/modules/hotel-pms",
    cta: "Explore PMS Architecture",
  },
  {
    numeral: "02",
    id: "direct-booking",
    title: "Direct Bookings & Channel Manager",
    description:
      "Commission-free website engine with deposit holds, real-time 2-way OTA synchronization, and occupancy-based dynamic RMS surge pricing.",
    chips: [
      "Direct Booking Engine",
      "2-Way OTA Sync",
      "Dynamic RMS Pricing",
      "Branded Storefronts",
    ],
  },
  {
    numeral: "03",
    id: "point-of-sale",
    title: "Offline Tauri POS & Kitchen Display",
    description:
      "Desktop application with local hardware printer drivers that operates 100% offline, paired with digital kitchen KDS station pacing.",
    chips: [
      "100% Offline Tauri POS",
      "Kitchen Display (KDS)",
      "Single-Tap Room Charge",
      "Tamper-Proof Ledger",
    ],
  },
  {
    numeral: "04",
    id: "restaurant-floor",
    title: "Dining Floor Plans & Digital Ordering",
    description:
      "Interactive restaurant floor plans, automated seating-to-POS ticket opening, guest QR code mobile ordering, and live digital menu catalogs.",
    chips: [
      "Visual Floor Designer",
      "Seated-to-POS Auto Tab",
      "Guest QR & Waiter Tablets",
      "Live Menu Taxonomy",
    ],
  },
  {
    numeral: "05",
    id: "kitchen-inventory",
    title: "Smart Inventory & Recipe Costing",
    description:
      "Automatic ingredient depletion based on recipe blueprints, instant 86 stockout protection, COGS accounting sync, and room asset tracking.",
    chips: [
      "Recipe Blueprints",
      'Instant "86" Stockout Protocol',
      "COGS Financial Sync",
      "Housekeeping Asset Audits",
    ],
  },
  {
    numeral: "06",
    id: "guest-experience",
    title: "Contactless Guest Journey & Digital Keys",
    description:
      "Pre-arrival WhatsApp magic links, contactless Apple & Google Wallet digital door keys, omnichannel guest messaging, and 360° CRM profiles.",
    chips: [
      "Pre-Arrival Magic Links",
      "Apple & Google Wallet Keys",
      "WhatsApp & SMS Inbox",
      "360° Guest CRM Profile",
    ],
  },
];

export default function PlatformModules() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.15 }, true);

  return (
    <section
      id="product"
      ref={ref}
      className="mode-b"
      style={{
        padding: "6rem 2rem",
        background: "#F7F1E6",
        scrollMarginTop: "72px",
      }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto", width: "100%" }}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <motion.span
            variants={fadeUpVariant}
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
            Unified Operating System
          </motion.span>
          <motion.h2
            variants={fadeUpVariant}
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
            The 6 Pillars of the <span className="italic font-normal gold-gradient-text">SPEAR Ecosystem</span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: "1rem",
              color: "#5C4F44",
              maxWidth: "50ch",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            20 integrated modules organized into 6 master operating pillars.
            Everything your accommodation and restaurant team needs to run in complete harmony.
          </motion.p>
        </motion.div>

        {/* 6 Pillars Grid with Hover & Zoom Effects */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            alignItems: "stretch",
          }}
        >
          {PILLARS.map((mod, i) => {
            const isFirst = i === 0;
            const CardContent = (
              <motion.div
                id={mod.id}
                variants={fadeUpVariant}
                whileHover={{
                  y: -7,
                  scale: 1.025,
                  boxShadow: "0 20px 40px rgba(199,154,69,0.22), 0 4px 16px rgba(34,27,22,0.08)",
                  borderColor: "#C79A45",
                  backgroundColor: "#F0E8D9",
                }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  scrollMarginTop: "90px",
                  background: "#EDE5D4",
                  border: isFirst ? "1.5px solid rgba(199,154,69,0.4)" : "1px solid rgba(199,154,69,0.2)",
                  borderRadius: 8,
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  height: "100%",
                  cursor: "pointer",
                  transition: "background-color 0.25s ease, border-color 0.25s ease",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#C79A45",
                    }}
                  >
                    Pillar {mod.numeral}
                  </span>

                  {isFirst && (
                    <span
                      style={{
                        background: "rgba(199,154,69,0.18)",
                        color: "#8C6A2E",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        padding: "0.2rem 0.55rem",
                        borderRadius: 12,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      Deep Dive Available
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-playfair), var(--font-fraunces), 'Playfair Display', Georgia, serif",
                    fontSize: "1.28rem",
                    fontWeight: 700,
                    color: "#221B16",
                    margin: 0,
                    lineHeight: 1.25,
                  }}
                >
                  {mod.title.includes(" & ") ? (
                    <>
                      {mod.title.split(" & ")[0]}{" "}
                      <span className="italic font-normal text-[#C5984A]">
                        &amp; {mod.title.split(" & ")[1]}
                      </span>
                    </>
                  ) : (
                    mod.title
                  )}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: "0.92rem",
                    color: "#5C4F44",
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  {mod.description}
                </p>

                {/* Nested Sub-Feature Chips */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.45rem",
                    marginTop: "auto",
                    paddingTop: "0.75rem",
                  }}
                >
                  {mod.chips.map((chip, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontFamily: "var(--font-manrope), system-ui, sans-serif",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "#221B16",
                        background: "rgba(199,154,69,0.12)",
                        border: "1px solid rgba(199,154,69,0.25)",
                        borderRadius: 4,
                        padding: "0.25rem 0.55rem",
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Clickable Explore Prompt on Pillar 01 */}
                {isFirst && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "#8C6A2E",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      marginTop: "0.5rem",
                      paddingTop: "0.75rem",
                      borderTop: "1px solid rgba(199,154,69,0.2)",
                    }}
                  >
                    <span>Explore PMS Architecture</span>
                    <ArrowRight size={15} />
                  </div>
                )}
              </motion.div>
            );

            if (isFirst) {
              return (
                <Link
                  key={i}
                  href="/modules/hotel-pms"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {CardContent}
                </Link>
              );
            }

            return <div key={i}>{CardContent}</div>;
          })}
        </motion.div>
      </div>
    </section>
  );
}
