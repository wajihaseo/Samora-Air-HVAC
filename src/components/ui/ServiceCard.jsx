import React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * ServiceCard:
 * - 16px card border radius
 * - Large image with fixed aspect ratio (16:10 or 4:3) and tonal hover zoom
 * - Clear title and one-line description
 * - Working click/action to contact/phone
 */
export default function ServiceCard({
  service,
  onSelectService,
  primaryActionHref = "tel:+447347959475",
}) {
  return (
    <article
      className="service-card group"
      style={{
        backgroundColor: "var(--color-surface)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-resting)",
        transition: "transform var(--transition-default), box-shadow var(--transition-default), border-color var(--transition-default)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow-hover)";
        e.currentTarget.style.borderColor = "var(--color-primary)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-resting)";
        e.currentTarget.style.borderColor = "var(--color-border)";
      }}
    >
      {/* Top Image Container with zoom effect */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "62.5%", // 16:10 aspect ratio
          overflow: "hidden",
          backgroundColor: "var(--color-bg-alt)",
        }}
      >
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 400ms ease",
          }}
          className="group-hover:scale-105"
        />
        {/* Subtle tonal gradient overlay for luxury depth */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(22, 21, 20, 0.35) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Card Content */}
      <div
        style={{
          padding: "var(--space-4)",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "1.25rem",
              marginBottom: "var(--space-2)",
              color: "var(--color-ink)",
              transition: "color var(--transition-default)",
            }}
            className="group-hover:text-[#C8928A]"
          >
            {service.title}
          </h3>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.6,
              color: "var(--color-ink-muted)",
              marginBottom: "var(--space-4)",
            }}
          >
            {service.description}
          </p>
        </div>

        {/* Action Link */}
        <div
          style={{
            paddingTop: "var(--space-3)",
            borderTop: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href={primaryActionHref}
            style={{
              fontSize: "0.88rem",
              fontWeight: 600,
              color: "var(--color-ink)",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              letterSpacing: "0.01em",
            }}
            aria-label={`Inquire about ${service.title}`}
          >
            Inquire Now
            <ArrowUpRight
              size={16}
              style={{
                color: "var(--color-secondary)",
                transition: "transform var(--transition-default)",
              }}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {onSelectService && (
            <button
              type="button"
              onClick={() => onSelectService(service)}
              style={{
                fontSize: "0.8rem",
                color: "var(--color-ink-muted)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Request Quote
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
