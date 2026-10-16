import React from "react";
import { business } from "../config/business";
import SectionHeading from "./ui/SectionHeading";
import ServiceCard from "./ui/ServiceCard";

export default function Services({ onSelectService }) {
  const { services, phoneRaw } = business;

  return (
    <section id="services" className="site-section">
      <div className="site-container">
        {/* Section Header */}
        <SectionHeading
          eyebrow="Main Specialisations"
          title="Engineered for silence, efficiency, and exact thermal balance."
          description="Comprehensive climate systems tailored for modern living spaces and commercial architecture across Leeds and West Yorkshire."
        />

        {/* 3-Column Service Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--space-5)",
          }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              primaryActionHref={`tel:${phoneRaw}`}
              onSelectService={onSelectService}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
