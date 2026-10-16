import React from "react";

/**
 * SectionHeading provides consistent typographic hierarchy across all page sections.
 * Eyebrow (0.8rem, 0.12em tracking) -> H2 (refined scale) -> supporting paragraph.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  titleId,
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 ${isCenter ? "text-center flex flex-col items-center" : ""} ${className}`}
      style={{ marginBottom: "var(--space-6)" }}
    >
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      {title && (
        <h2 id={titleId} style={{ marginBottom: description ? "var(--space-3)" : "0" }}>
          {title}
        </h2>
      )}
      {description && (
        <p
          style={{
            maxWidth: isCenter ? "600px" : "640px",
            fontSize: "1.05rem",
            color: "var(--color-ink-muted)",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
