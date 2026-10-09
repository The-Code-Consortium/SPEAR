"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [inHorizontalSection, setInHorizontalSection] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on resize to desktop (>= 1024px)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    const hSection = document.getElementById("module-story");
    if (hSection) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => setInHorizontalSection(entry.isIntersecting),
        { threshold: 0.05 }
      );
      observerRef.current.observe(hSection);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  const bgStyle: React.CSSProperties = isMobileMenuOpen
    ? {
      background: "rgba(22,19,16,0.98)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(212,163,89,0.2)",
    }
    : inHorizontalSection
      ? {
        background: "rgba(22,19,16,0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(212,163,89,0.14)",
      }
      : isScrolled
        ? {
          background: "rgba(22,19,16,0.96)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(212,163,89,0.12)",
          boxShadow: "0 2px 20px rgba(0,0,0,0.45)",
        }
        : {
          background: "transparent",
          borderBottom: "1px solid transparent",
        };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          ...bgStyle,
        }}
        role="banner"
      >
        <nav
          className="nav-container"
          aria-label="Primary navigation"
        >
          {/* Logo — clicks go to home page */}
          <Link
            href="/"
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                if (typeof window !== "undefined") {
                  sessionStorage.setItem("spear_disable_popup", "true");
                }
              }
            }}
            style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}
            aria-label="SPEAR — Home"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo/nav-logo.png`}
              alt="SPEAR Hospitality Software Logo"
              width={160}
              height={60}
              priority
              className="nav-logo-img"
              style={{ height: 32, width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Nav links — visible on desktop (≥1024px) */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="nav-links"
            role="list"
          >
            {NAV_LINKS.map((link) => {
              const isHome = pathname === "/";
              const targetHref = isHome ? link.href : `/${link.href}`;

              return (
                <li key={link.href}>
                  <Link
                    href={targetHref}
                    onClick={(e) => {
                      if (typeof window !== "undefined") {
                        sessionStorage.setItem("spear_disable_popup", "true");
                      }
                      if (isHome) {
                        e.preventDefault();
                        const id = link.href.replace(/^#/, "");
                        const el = document.getElementById(id);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#B5A99A",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                      lineHeight: 1,
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#F3ECE0")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#B5A99A")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Actions Cluster — balanced for mobile & desktop */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexShrink: 0 }}>
            {/* Client Login — visible on desktop (≥768px), accessible inside drawer on mobile */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              id="nav-client-login"
              className="nav-desktop-login"
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 38,
                padding: "0 1.15rem",
                borderRadius: 4,
                border: "1px solid rgba(212,163,89,0.35)",
                background: "rgba(22,19,16,0.6)",
                color: "#D3C4B3",
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                lineHeight: 1,
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
                boxSizing: "border-box",
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
              aria-label="Client Login"
            >
              Client Login
            </a>

            {/* Book a Demo — always accessible */}
            <Link
              href={pathname === "/" ? "#book-a-demo" : "/#book-a-demo"}
              id="nav-book-demo-cta"
              className="nav-book-cta"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (typeof window !== "undefined") {
                  sessionStorage.setItem("spear_disable_popup", "true");
                }
                if (pathname === "/") {
                  e.preventDefault();
                  const el = document.getElementById("book-a-demo");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 38,
                padding: "0 1.25rem",
                borderRadius: 4,
                border: "none",
                background: "#D4A359",
                color: "#161310",
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                lineHeight: 1,
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
                boxShadow: "0 2px 10px rgba(212,163,89,0.22)",
                boxSizing: "border-box",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#F2BE71";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(212,163,89,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#D4A359";
                e.currentTarget.style.boxShadow = "0 2px 10px rgba(212,163,89,0.22)";
              }}
              aria-label="Book a demo with SPEAR"
            >
              Book a Demo
            </Link>

            {/* Mobile Menu Hamburger Toggle (<1024px) */}
            <button
              type="button"
              className="nav-mobile-toggle"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 38,
                height: 38,
                borderRadius: 4,
                border: "1px solid rgba(212,163,89,0.3)",
                background: isMobileMenuOpen ? "rgba(212,163,89,0.18)" : "rgba(22,19,16,0.7)",
                color: "#F3ECE0",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.2s ease",
              }}
            >
              {isMobileMenuOpen ? (
                <X size={20} color="#D4A359" />
              ) : (
                <Menu size={20} color="#D4A359" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu & Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0, 0, 0, 0.65)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                zIndex: 48,
              }}
              aria-hidden="true"
            />

            {/* Drawer Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              style={{
                position: "fixed",
                top: 72,
                left: 0,
                right: 0,
                background: "rgba(18, 15, 12, 0.98)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(212, 163, 89, 0.25)",
                boxShadow: "0 24px 48px rgba(0, 0, 0, 0.8)",
                padding: "1.25rem 1.25rem 2rem",
                zIndex: 49,
                maxHeight: "calc(100vh - 72px)",
                overflowY: "auto",
              }}
            >
              <div style={{ maxWidth: 500, margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {/* Navigation Links */}
                {NAV_LINKS.map((link) => {
                  const isHome = pathname === "/";
                  const targetHref = isHome ? link.href : `/${link.href}`;

                  return (
                    <Link
                      key={link.href}
                      href={targetHref}
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        if (typeof window !== "undefined") {
                          sessionStorage.setItem("spear_disable_popup", "true");
                        }
                        if (isHome) {
                          e.preventDefault();
                          const id = link.href.replace(/^#/, "");
                          const el = document.getElementById(id);
                          if (el) {
                            el.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0.9rem 1.1rem",
                        borderRadius: 6,
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(212, 163, 89, 0.12)",
                        color: "#F0E7D8",
                        textDecoration: "none",
                        fontFamily: "var(--font-manrope), system-ui, sans-serif",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        letterSpacing: "0.03em",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <span>{link.label}</span>
                      <span style={{ color: "#D4A359", fontSize: "1rem" }}>→</span>
                    </Link>
                  );
                })}

                {/* Featured Direct Pillar Link */}
                <Link
                  href="/modules/hotel-pms"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (pathname === "/modules/hotel-pms") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.9rem 1.1rem",
                    borderRadius: 6,
                    background: "rgba(212, 163, 89, 0.09)",
                    border: "1px solid rgba(212, 163, 89, 0.3)",
                    color: "#F7F4EE",
                    textDecoration: "none",
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                    <span>Hotel PMS Architecture</span>
                    <span
                      style={{
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        padding: "0.18rem 0.5rem",
                        borderRadius: 4,
                        background: "rgba(212, 163, 89, 0.22)",
                        color: "#F2BE71",
                      }}
                    >
                      Pillar 01
                    </span>
                  </div>
                  <span style={{ color: "#F2BE71", fontSize: "1rem" }}>→</span>
                </Link>

                {/* Subtle Divider */}
                <div
                  style={{
                    height: 1,
                    background: "rgba(212, 163, 89, 0.15)",
                    margin: "0.5rem 0",
                  }}
                />

                {/* Mobile Drawer Actions */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 44,
                      borderRadius: 6,
                      border: "1px solid rgba(212, 163, 89, 0.35)",
                      background: "rgba(22, 19, 16, 0.7)",
                      color: "#D3C4B3",
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    Client Login
                  </a>

                  <Link
                    href={pathname === "/" ? "#book-a-demo" : "/#book-a-demo"}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (typeof window !== "undefined") {
                        sessionStorage.setItem("spear_disable_popup", "true");
                      }
                      if (pathname === "/") {
                        e.preventDefault();
                        const el = document.getElementById("book-a-demo");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 44,
                      borderRadius: 6,
                      border: "none",
                      background: "#D4A359",
                      color: "#161310",
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      boxShadow: "0 4px 16px rgba(212, 163, 89, 0.28)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    Book a Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
