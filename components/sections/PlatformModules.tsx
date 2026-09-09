"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { fadeUpVariant, staggerContainer } from "@/lib/motion-variants";

const MODULES = [
  {
    title: "Direct Hotel Booking Engine",
    description: "Commission-free, multi-currency, guest upsells",
  },
  {
    title: "Cloud Hotel PMS",
    description: "Tape chart, room management, housekeeping, guest folios",
  },
  {
    title: "Restaurant Floor & Table Management",
    description: "Interactive dining floor plan, live waitlists, guest sync",
  },
  {
    title: "Hospitality Point of Sale (POS)",
    description: "Table order tickets, room folio charge integration",
  },
  {
    title: "Kitchen Inventory & Recipe Costing",
    description: "Ingredient tracking, real-time stock alerts, margin analytics",
  },
  {
    title: "2-Way Channel Manager",
    description: "Real-time OTA sync with Booking.com, Expedia, Airbnb, Agoda",
  },
];

export default function PlatformModules() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.15 }, true);

  return (
    <section
      ref={ref}
      className="mode-b"
      style={{ padding: "6rem 2rem", background: "#F7F1E6" }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto", width: "100%" }}>
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
          {MODULES.map((mod, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariant}
              style={{
                background: "#EDE5D4",
                border: "1px solid rgba(199,154,69,0.2)",
                borderRadius: 8,
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#221B16",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {mod.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: "0.95rem",
                  color: "#5C4F44",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {mod.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
