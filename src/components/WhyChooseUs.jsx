import React from "react";
import { business } from "../config/business";
import SectionHeading from "./ui/SectionHeading";

export default function WhyChooseUs() {
  const { whyChooseUs } = business;

  return (
    <section id="why-us" className="site-section">
      <div className="site-container">
        {/* Section Header */}
        <SectionHeading
          eyebrow={whyChooseUs.eyebrow}
          title={whyChooseUs.title}
          description={whyChooseUs.description}
        />

        {/* 4 Points Grid with clean luxury numbering */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "var(--space-6)",
          }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {whyChooseUs.points.map((pt, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "var(--color-surface)",
                padding: "var(--space-5)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-resting)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "border-color var(--transition-default), transform var(--transition-default)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-primary)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Quiet Architectural Number */}
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.8rem",
                  fontWeight: 400,
                  color: "var(--color-secondary)",
                  lineHeight: 1,
                  marginBottom: "var(--space-4)",
                  display: "block",
                }}
              >
                {pt.number}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "var(--space-2)",
                  color: "var(--color-ink)",
                }}
              >
                {pt.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                  color: "var(--color-ink-muted)",
                }}
              >
                {pt.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
