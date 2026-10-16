import React, { useState, useEffect } from "react";
import { business } from "../config/business";
import Button from "./ui/Button";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background-color 240ms ease, border-color 240ms ease, box-shadow 240ms ease",
        backgroundColor: isScrolled
          ? "rgba(22, 21, 20, 0.94)"
          : "rgba(22, 21, 20, 0.78)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: isScrolled
          ? "1px solid rgba(231, 225, 216, 0.14)"
          : "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: isScrolled ? "0 4px 24px rgba(0, 0, 0, 0.25)" : "none",
      }}
    >
      <div
        className="site-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "80px",
        }}
      >
        {/* Brand Wordmark */}
        <a
          href="#"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            color: "#FFFFFF",
          }}
          aria-label={business.name}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.35rem",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: "#FFFFFF",
              whiteSpace: "nowrap",
            }}
          >
            {business.name}
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-primary)",
              fontWeight: 500,
            }}
          >
            {business.area}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "var(--space-5)",
          }}
          className="md:flex"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.92rem",
                color: "rgba(255, 255, 255, 0.85)",
                fontWeight: 450,
                transition: "color var(--transition-default)",
                position: "relative",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Action */}
        <div style={{ display: "none", alignItems: "center", gap: "var(--space-3)" }} className="md:flex">
          <Button
            href={`tel:${business.phoneRaw}`}
            variant="primary"
            style={{
              padding: "10px 20px",
              fontSize: "0.9rem",
            }}
          >
            <Phone size={15} style={{ strokeWidth: 2.2 }} />
            <span>{business.phone}</span>
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            color: "#FFFFFF",
            borderRadius: "var(--radius-sm)",
          }}
          className="md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Panel */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "var(--color-ink)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
            padding: "var(--space-4) var(--container-padding) var(--space-5)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
          className="md:hidden"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "1.05rem",
                  color: "rgba(255, 255, 255, 0.9)",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ paddingTop: "var(--space-2)" }}>
            <Button
              href={`tel:${business.phoneRaw}`}
              variant="primary"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone size={16} />
              <span>Call {business.phone}</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
