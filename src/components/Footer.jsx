import React from "react";
import { business } from "../config/business";
import { Phone, MapPin, ExternalLink, ArrowUp } from "lucide-react";

export default function Footer() {
  const { name, tagline, fullAddress, phone, phoneRaw, googleMapsUrl, footer } = business;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--color-ink)",
        color: "#FFFFFF",
        paddingTop: "var(--space-8)",
        paddingBottom: "var(--space-6)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="site-container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "var(--space-6)",
            marginBottom: "var(--space-7)",
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {/* Brand Info */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.5rem",
                fontWeight: 500,
                color: "#FFFFFF",
                display: "block",
                marginBottom: "var(--space-2)",
              }}
            >
              {name}
            </span>
            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(255, 255, 255, 0.65)",
                lineHeight: 1.6,
                maxWidth: "320px",
              }}
            >
              {tagline}. Precision heating, cooling, and air handling engineered for modern homes and commercial spaces across Leeds.
            </p>
          </div>

          {/* Quick Navigation & Services */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.82rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-primary)",
                fontWeight: 600,
                marginBottom: "var(--space-4)",
              }}
            >
              Navigation
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-2)",
                fontSize: "0.92rem",
              }}
            >
              <li>
                <a
                  href="#services"
                  style={{ color: "rgba(255, 255, 255, 0.75)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  style={{ color: "rgba(255, 255, 255, 0.75)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)")}
                >
                  About the Company
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  style={{ color: "rgba(255, 255, 255, 0.75)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)")}
                >
                  Why Choose Samora Air
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  style={{ color: "rgba(255, 255, 255, 0.75)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)")}
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{ color: "rgba(255, 255, 255, 0.75)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)")}
                >
                  Contact & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Details */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.82rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-primary)",
                fontWeight: 600,
                marginBottom: "var(--space-4)",
              }}
            >
              Leeds Headquarters
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin size={18} style={{ color: "var(--color-secondary)", flexShrink: 0, marginTop: "2px" }} />
                <span style={{ fontSize: "0.92rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.5 }}>
                  {fullAddress}
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Phone size={18} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                <a
                  href={`tel:${phoneRaw}`}
                  style={{
                    fontSize: "0.95rem",
                    color: "#FFFFFF",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  {phone}
                </a>
              </div>

              {googleMapsUrl && (
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.85rem",
                    color: "rgba(255, 255, 255, 0.6)",
                    marginTop: "var(--space-1)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)")}
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: "var(--space-5)",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "var(--space-3)",
          }}
        >
          <p style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.5)", margin: 0 }}>
            © {currentYear} {name}. {footer.copyrightNote}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.85rem",
              color: "rgba(255, 255, 255, 0.7)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)")}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
