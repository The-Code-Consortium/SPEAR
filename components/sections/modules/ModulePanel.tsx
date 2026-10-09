/**
 * ModulePanel — One of the 6 full-viewport panels in the horizontal module story.
 * Alternates text left/right for visual rhythm.
 * Last panel (06) has a "That's SPEAR." closing cue.
 */

import Link from "next/link";
import DeviceFrame from "./DeviceFrame";
import { ChevronDown, ArrowRight } from "lucide-react";

/** Background gradient per module — keeps each panel visually distinct */
const MODULE_GRADIENTS: Record<
  string,
  { from: string; to: string }
> = {
  "hotel-pms": { from: "#1E2214", to: "#161310" },
  "direct-booking": { from: "#2A1E14", to: "#161310" },
  "point-of-sale": { from: "#261C16", to: "#161310" },
  "restaurant-floor": { from: "#221A14", to: "#161310" },
  "kitchen-inventory": { from: "#201C14", to: "#161310" },
  "guest-experience": { from: "#2A1C1A", to: "#161310" },
  "channel-manager": { from: "#241814", to: "#161310" },
};

interface ModulePanelProps {
  id: string;
  numeral: string;
  title: string;
  titleAccent?: string;
  tagline: string;
  body: string;
  chips?: string[];
  actionLink?: string;
  actionHref?: string;
  layout: "text-left" | "text-right";
  isLast?: boolean;
}

export default function ModulePanel({
  id,
  numeral,
  title,
  titleAccent,
  tagline,
  body,
  chips,
  actionLink,
  actionHref,
  layout,
  isLast = false,
}: ModulePanelProps) {
  const gradient = MODULE_GRADIENTS[id] || {
    from: "#2C2118",
    to: "#161310",
  };

  const textFirst = layout === "text-left";

  return (
    <section
      id={`panel-${id}`}
      aria-labelledby={`module-${id}-title`}
      className="relative flex-shrink-0 flex items-center justify-center overflow-hidden"
      style={{
        width: "100vw",
        height: "100vh",
        background: `linear-gradient(160deg, ${gradient.from}, ${gradient.to})`,
      }}
    >
      {/* Large background numeral */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          right: textFirst ? "2%" : undefined,
          left: textFirst ? undefined : "2%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontSize: "clamp(8rem, 18vw, 16rem)",
          fontWeight: 900,
          color: "rgba(212,163,89,0.05)",
          lineHeight: 1,
          userSelect: "none",
          letterSpacing: "-0.04em",
          pointerEvents: "none",
        }}
      >
        {numeral}
      </span>

      {/* Content grid */}
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!textFirst ? "lg:flex-row-reverse" : ""}`}
      >
        {/* Text block — order controlled by flex direction */}
        <div
          className={`flex flex-col gap-5 ${textFirst ? "lg:order-1" : "lg:order-2"}`}
        >
          {/* Module numeral badge */}
          <span
            style={{
              color: "#D4A359",
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            {numeral} / 06
          </span>

          {/* Module title — formatted like Image 2 */}
          <h2
            id={`module-${id}-title`}
            style={{
              fontFamily: "var(--font-playfair), var(--font-fraunces), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.3rem, 4vw, 3.4rem)",
              fontWeight: 700,
              color: "#F3ECE0",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
            {titleAccent && (
              <>
                <br />
                <span
                  className="italic font-normal gold-gradient-text"
                  style={{
                    fontStyle: "italic",
                    fontWeight: 400,
                    display: "inline-block",
                  }}
                >
                  &amp;
                  <br />
                  {titleAccent}
                </span>
              </>
            )}
          </h2>

          {/* Tagline — matching Image 2: text-headline-sm italic text-primary/90 */}
          <p
            style={{
              fontFamily: "var(--font-playfair), var(--font-fraunces), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)",
              fontStyle: "italic",
              color: "rgba(242, 190, 113, 0.95)",
              lineHeight: 1.5,
            }}
          >
            {tagline}
          </p>

          {/* Body */}
          <p
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: "clamp(0.9rem, 1.4vw, 0.98rem)",
              fontWeight: 400,
              color: "#B5A99A",
              lineHeight: 1.75,
              maxWidth: "42ch",
            }}
          >
            {body}
          </p>

          {/* Sub-feature chips — matching Image 2 dark cards */}
          {chips && chips.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.6rem",
                marginTop: "0.25rem",
                maxWidth: "46ch",
              }}
            >
              {chips.map((chip, idx) => (
                <span
                  key={idx}
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    color: "#D3C4B3",
                    background: "#221F1C",
                    border: "1px solid rgba(156, 143, 127, 0.28)",
                    borderRadius: 6,
                    padding: "0.4rem 0.8rem",
                    lineHeight: 1.3,
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          )}

          {/* Action Link — matching Image 2 */}
          {actionLink && (
            <div style={{ marginTop: "0.5rem" }}>
              <Link
                href={actionHref || "#book-a-demo"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#D4A359",
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#F2BE71";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#D4A359";
                }}
              >
                <span>{actionLink}</span>
                <span>→</span>
              </Link>
            </div>
          )}

          {/* Last panel closing cue */}
          {isLast && (
            <div
              className="flex items-center gap-2 mt-2"
              style={{ color: "#7A6F63" }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Continue scrolling
              </span>
              <ChevronDown size={16} />
            </div>
          )}

          {/* Direction cue — only on panels 01–05: arrow points right */}
          {!isLast && (
            <div className="hidden lg:flex items-center gap-2 mt-1" aria-hidden="true">
              <ArrowRight
                size={14}
                style={{ color: "rgba(199,154,69,0.35)" }}
              />
            </div>
          )}
        </div>

        {/* Device frame */}
        <div className={textFirst ? "lg:order-2" : "lg:order-1"}>
          <DeviceFrame
            moduleId={id}
            moduleTitle={title}
            gradientFrom={gradient.from}
            gradientTo={gradient.to}
            isLast={isLast}
          />
        </div>
      </div>
    </section>
  );
}
