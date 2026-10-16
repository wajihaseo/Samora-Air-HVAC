import React from "react";
import { business } from "../config/business";
import Button from "./ui/Button";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  const { hero, phoneRaw } = business;

  return (
    <section
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "var(--color-ink)",
        overflow: "hidden",
        paddingTop: "100px",
        paddingBottom: "64px",
      }}
    >
      {/* Background Image Container */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src={hero.image}
          alt="Luxury climate-controlled interior"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        {/* Tonal Luxury Dark Overlay for Pristine Legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(16, 15, 14, 0.88) 0%, rgba(22, 21, 20, 0.74) 60%, rgba(22, 21, 20, 0.62) 100%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div
        className="site-container"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "760px",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "var(--space-3)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.82rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-primary)",
                fontWeight: 600,
              }}
            >
              {hero.eyebrow}
            </span>
          </div>

          {/* Confident H1 Headline */}
          <h1
            style={{
              color: "#FFFFFF",
              marginBottom: "var(--space-4)",
              fontWeight: 400,
            }}
          >
            {hero.title}
          </h1>

          {/* Supporting Line */}
          <p
            style={{
              color: "rgba(255, 255, 255, 0.82)",
              fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
              lineHeight: 1.6,
              marginBottom: "var(--space-6)",
              maxWidth: "620px",
            }}
          >
            {hero.subtitle}
          </p>

          {/* Primary & Secondary CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-3)",
              alignItems: "center",
              marginBottom: "var(--space-6)",
            }}
          >
            <Button
              href={hero.primaryCta.href || `tel:${phoneRaw}`}
              variant="primary"
            >
              <Phone size={17} style={{ strokeWidth: 2.2 }} />
              <span>{hero.primaryCta.label}</span>
            </Button>

            <Button
              href={hero.secondaryCta.href || "#services"}
              variant="secondary"
            >
              <span>{hero.secondaryCta.label}</span>
              <ArrowRight size={16} />
            </Button>
          </div>

          {/* Quiet Trust Line */}
          {hero.trustNotice && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                paddingTop: "var(--space-3)",
                borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                color: "rgba(255, 255, 255, 0.68)",
                fontSize: "0.88rem",
              }}
            >
              <ShieldCheck size={16} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
              <span>{hero.trustNotice}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
