import React from "react";
import { business } from "../config/business";
import SectionHeading from "./ui/SectionHeading";

/**
 * Rendered ONLY if testimonials exist in business.js.
 * If empty or missing, gracefully returns null with zero filler.
 */
export default function Testimonials() {
  const { testimonials } = business;

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="site-section site-section--alt">
      <div className="site-container">
        <SectionHeading
          eyebrow="Client Experiences"
          title="Quiet confidence, proven in Leeds."
          align="center"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--space-6)",
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "var(--color-surface)",
                padding: "var(--space-6)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-resting)",
              }}
            >
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                  color: "var(--color-ink)",
                  lineHeight: 1.7,
                  marginBottom: "var(--space-4)",
                }}
              >
                "{t.quote}"
              </p>
              <div>
                <strong style={{ display: "block", color: "var(--color-ink)", fontSize: "0.95rem" }}>
                  {t.author}
                </strong>
                {t.location && (
                  <span style={{ fontSize: "0.85rem", color: "var(--color-ink-muted)" }}>
                    {t.location}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
