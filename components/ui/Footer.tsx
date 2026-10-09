"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Globe, Share2 } from "lucide-react";


const FOOTER_LINKS = {
  Product: [
    { label: "Hotel PMS Core", href: "/modules/hotel-pms" },
    { label: "Direct Bookings & OTAs", href: "#direct-booking" },
    { label: "Hospitality POS & KDS", href: "#point-of-sale" },
    { label: "Dining Floor & QR Ordering", href: "#restaurant-floor" },
    { label: "Kitchen Inventory & COGS", href: "#kitchen-inventory" },
    { label: "Digital Keys & Guest Journey", href: "#guest-experience" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Book a Demo", href: "#book-a-demo" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const SOCIAL_LINKS = [
  { icon: X, label: "SPEAR on X (Twitter)" },
  { icon: Globe, label: "SPEAR Website" },
  { icon: Share2, label: "SPEAR on Instagram" },
];

const linkHoverStyle: React.CSSProperties = { color: "#F3ECE0" };
const linkBaseStyle: React.CSSProperties = { color: "#7A6F63" };
const socialHoverStyle: React.CSSProperties = { color: "#C79A45" };

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer
      style={{
        background: "#161310",
        borderTop: "1px solid rgba(212,163,89,0.15)",
        color: "#B5A99A",
        fontFamily: "var(--font-manrope), system-ui, sans-serif",
      }}
      role="contentinfo"
    >
      {/* Main footer grid */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "4rem 2.5rem 3rem",
          display: "grid",
          gridTemplateColumns: "2.5fr 1fr 1fr 1fr",
          gap: "3rem 4rem",
          alignItems: "start",
        }}
        className="footer-grid"
      >
        {/* Brand column — spans first grid track */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Link
            href="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                if (typeof window !== "undefined") {
                  sessionStorage.setItem("spear_disable_popup", "true");
                }
              }
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              textDecoration: "none",
            }}
            aria-label="SPEAR homepage"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo/nav-logo.png`}
              alt="SPEAR Hospitality Software Logo"
              width={140}
              height={56}
              style={{ height: 36, width: "auto", objectFit: "contain" }}
            />
          </Link>

          <p
            style={{
              fontSize: "0.85rem",
              lineHeight: 1.75,
              color: "#7A6F63",
              maxWidth: "28ch",
              margin: 0,
            }}
          >
            Smart Platform for Every Accommodation &amp; Restaurant.
            <br />
            One system for every reservation, every table, every guest.
          </p>

          {/* Social links — unlinked as requested */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
            {SOCIAL_LINKS.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                onClick={(e) => e.preventDefault()}
                role="button"
                aria-label={label}
                style={linkBaseStyle}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = socialHoverStyle.color as string)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = linkBaseStyle.color as string)
                }
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Sitemap link columns — each occupies 1 grid track */}
        {Object.entries(FOOTER_LINKS).map(([section, links]) => (
          <div key={section} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#C79A45",
                margin: 0,
              }}
            >
              {section}
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {links.map(({ label, href }) => {
                const isHash = href.startsWith("#");
                const targetHref = isHash ? (isHome ? href : `/${href}`) : href;
                const isDummy = href === "#";

                return (
                  <li key={label}>
                    <Link
                      href={targetHref}
                      onClick={(e) => {
                        if (isDummy) {
                          e.preventDefault();
                          return;
                        }
                        if (href === "/modules/hotel-pms" && pathname === "/modules/hotel-pms") {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          return;
                        }
                        if (isHash) {
                          if (typeof window !== "undefined") {
                            sessionStorage.setItem("spear_disable_popup", "true");
                          }
                          if (isHome) {
                            e.preventDefault();
                            const id = href.replace(/^#/, "");
                            const el = document.getElementById(id);
                            if (el) {
                              el.scrollIntoView({ behavior: "smooth" });
                            }
                          }
                        }
                      }}
                      style={{
                        ...linkBaseStyle,
                        fontSize: "0.85rem",
                        textDecoration: "none",
                        transition: "color 0.18s ease",
                        display: "block",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = linkHoverStyle.color as string)
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = linkBaseStyle.color as string)
                      }
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "1.5rem 2.5rem",
          borderTop: "1px solid rgba(199,154,69,0.1)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem",
          fontSize: "0.75rem",
          color: "#7A6F63",
        }}
      >
        <p style={{ margin: 0 }}>© {year} SPEAR. All rights reserved.</p>
        <p style={{ margin: 0 }}>Built for hospitality operators, by people who care about it.</p>
      </div>
    </footer>
  );
}
