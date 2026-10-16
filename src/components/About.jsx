import React from "react";
import { business } from "../config/business";
import Button from "./ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function About() {
  const { about, phoneRaw } = business;

  return (
    <section id="about" className="site-section site-section--alt">
      <div className="site-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--space-7)",
            alignItems: "center",
          }}
          className="grid-cols-1 lg:grid-cols-12"
        >
          {/* Visual Column */}
          <div className="lg:col-span-5" style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-resting)",
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface)",
                position: "relative",
              }}
            >
              <div style={{ position: "relative", width: "100%", paddingTop: "120%" }}>
                <img
                  src={about.image}
                  alt={about.imageCaption || "Samora Air & HVAC interior"}
                  loading="lazy"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            {/* Quiet architectural caption */}
            {about.imageCaption && (
              <p
                style={{
                  fontSize: "0.82rem",
                  letterSpacing: "0.04em",
                  color: "var(--color-ink-muted)",
                  marginTop: "var(--space-3)",
                  textAlign: "center",
                }}
              >
                {about.imageCaption}
              </p>
            )}
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7">
            <span className="section-eyebrow">{about.eyebrow}</span>
            <h2
              style={{
                marginBottom: "var(--space-4)",
                color: "var(--color-ink)",
              }}
            >
              {about.title}
            </h2>

            <p
              style={{
                fontSize: "1.12rem",
                color: "var(--color-ink)",
                lineHeight: 1.6,
                marginBottom: "var(--space-4)",
                fontWeight: 450,
              }}
            >
              {about.lead}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginBottom: "var(--space-5)" }}>
              {about.paragraphs.map((p, idx) => (
                <p key={idx} style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Core credentials inline */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "var(--space-3)",
                marginBottom: "var(--space-6)",
                paddingTop: "var(--space-4)",
                borderTop: "1px solid var(--color-border)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <CheckCircle2 size={18} style={{ color: "var(--color-primary-hover)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.92rem", fontWeight: 500, color: "var(--color-ink)" }}>
                  Toronto Sq, Leeds Dispatch
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <CheckCircle2 size={18} style={{ color: "var(--color-primary-hover)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.92rem", fontWeight: 500, color: "var(--color-ink)" }}>
                  F-Gas Compliant Systems
                </span>
              </div>
            </div>

            <Button href={`tel:${phoneRaw}`} variant="outline">
              <span>Speak with an Engineer</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
