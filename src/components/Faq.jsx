import React, { useState } from "react";
import { business } from "../config/business";
import SectionHeading from "./ui/SectionHeading";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const { faqs } = business;
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) {
    return null;
  }

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="site-section site-section--alt">
      <div className="site-container">
        <SectionHeading
          eyebrow="Questions & Clarity"
          title="Everything you need to know about our service."
          description="Clear answers regarding response times, equipment compatibility, and scheduled maintenance."
          align="left"
        />

        <div
          style={{
            maxWidth: "840px",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3)",
          }}
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderRadius: "var(--radius-sm)",
                  border: isOpen ? "1px solid var(--color-primary)" : "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-resting)",
                  overflow: "hidden",
                  transition: "border-color var(--transition-default)",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "var(--space-4) var(--space-4)",
                    textAlign: "left",
                    color: "var(--color-ink)",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    gap: "var(--space-3)",
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.15rem",
                      fontWeight: 500,
                      color: isOpen ? "var(--color-ink)" : "var(--color-ink)",
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 220ms ease",
                      color: isOpen ? "var(--color-secondary)" : "var(--color-ink-muted)",
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 var(--space-4) var(--space-4)",
                      color: "var(--color-ink-muted)",
                      fontSize: "0.98rem",
                      lineHeight: 1.7,
                      borderTop: "1px solid rgba(231, 225, 216, 0.4)",
                      paddingTop: "var(--space-3)",
                    }}
                  >
                    <p style={{ maxWidth: "100%" }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
