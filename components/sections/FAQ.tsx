"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { fadeUpVariant, staggerContainer } from "@/lib/motion-variants";
import { SITE_URL } from "@/lib/constants";

const FAQS = [
  {
    question: "How does SPEAR connect hotel room bookings with the restaurant POS?",
    answer: "SPEAR provides deep room folio charge integration out of the box. When a guest dines at your restaurant, their room number and name automatically sync to the POS. The waiter can post the charge directly to the guest's hotel bill with a single tap, eliminating manual reconciliation.",
  },
  {
    question: "Does SPEAR include a channel manager for OTAs like Booking.com and Expedia?",
    answer: "Yes. SPEAR includes a built-in 2-way channel manager that syncs your rates and availability in real-time across major OTAs (Booking.com, Expedia, Airbnb, Agoda, etc.). When a booking comes in from any channel, inventory is instantly updated everywhere.",
  },
  {
    question: "Can I use SPEAR if I only run a hotel or only run a restaurant?",
    answer: "Absolutely. SPEAR is modular. You can start with just the Hotel PMS or just the Restaurant POS and easily turn on other modules later as your business grows or your needs change.",
  },
  {
    question: "What POS and kitchen hardware does SPEAR support?",
    answer: "SPEAR is a cloud-based platform that works on standard tablets (iPad, Android) and modern web browsers. We support integration with industry-standard receipt printers, kitchen display systems (KDS), and payment terminals.",
  },
  {
    question: "How easy is it to migrate data from our existing PMS or POS?",
    answer: "We provide dedicated onboarding assistance for every new property. Our team will help export your existing guest profiles, future reservations, and restaurant menus, then map and import them directly into SPEAR so you can go live seamlessly.",
  },
];

export default function FAQ() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.15 }, true);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      ref={ref}
      id="faq"
      className="mode-b"
      style={{ padding: "6rem 2rem", background: "#EDE5D4" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div style={{ maxWidth: 800, margin: "0 auto", width: "100%" }}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <motion.h2
            variants={fadeUpVariant}
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "#221B16",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Frequently Asked Questions
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {FAQS.map((faq, index) => (
            <motion.details
              key={index}
              variants={fadeUpVariant}
              style={{
                background: "#F7F1E6",
                border: "1px solid rgba(199,154,69,0.2)",
                borderRadius: 8,
                padding: "1.5rem",
                cursor: "pointer",
              }}
            >
              <summary
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#221B16",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  listStyle: "none",
                }}
              >
                {faq.question}
                <span style={{ color: "#C79A45", fontSize: "1.5rem", lineHeight: 1 }}>
                  +
                </span>
              </summary>
              <p
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: "0.95rem",
                  color: "#5C4F44",
                  lineHeight: 1.6,
                  marginTop: "1rem",
                }}
              >
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </motion.div>
      </div>

      <style>{`
        details > summary::-webkit-details-marker {
          display: none;
        }
        details[open] summary span {
          transform: rotate(45deg);
        }
        details summary span {
          transition: transform 0.2s ease;
        }
      `}</style>
    </section>
  );
}
