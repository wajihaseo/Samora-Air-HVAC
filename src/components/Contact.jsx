import React, { useState } from "react";
import { business } from "../config/business";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { Phone, MapPin, ExternalLink, Clock, Mail, MessageSquare, CheckCircle } from "lucide-react";

export default function Contact({ selectedService }) {
  const { contact, fullAddress, phone, phoneRaw, whatsapp, email, openingHours, googleMapsUrl, services } = business;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceId: selectedService ? selectedService.id : (services[0]?.id || ""),
    propertyType: "residential",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="site-section">
      <div className="site-container">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.description}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--space-7)",
            alignItems: "start",
          }}
          className="grid-cols-1 lg:grid-cols-12"
        >
          {/* Contact Details Column */}
          <div className="lg:col-span-5" style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            {/* Primary Direct Call Card */}
            <div
              style={{
                backgroundColor: "var(--color-surface)",
                padding: "var(--space-5)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-resting)",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "0.78rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-primary-hover)",
                  fontWeight: 600,
                  marginBottom: "var(--space-2)",
                }}
              >
                Immediate Assistance
              </span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "var(--space-3)", color: "var(--color-ink)" }}>
                Speak directly with an engineer
              </h3>
              <p style={{ fontSize: "0.95rem", marginBottom: "var(--space-4)" }}>
                For priority diagnostic bookings, repair inquiries, or site consultations across Leeds.
              </p>
              <Button href={`tel:${phoneRaw}`} variant="primary" style={{ width: "100%" }}>
                <Phone size={17} />
                <span>Call {phone}</span>
              </Button>
            </div>

            {/* Address & Directions Card */}
            <div
              style={{
                backgroundColor: "var(--color-surface)",
                padding: "var(--space-5)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-resting)",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
                <MapPin size={22} style={{ color: "var(--color-secondary)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "var(--space-1)", color: "var(--color-ink)" }}>
                    Leeds Office Location
                  </h4>
                  <p style={{ fontSize: "0.95rem", color: "var(--color-ink-muted)", lineHeight: 1.5 }}>
                    {fullAddress}
                  </p>
                </div>
              </div>

              {googleMapsUrl && (
                <Button
                  href={googleMapsUrl}
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "100%", fontSize: "0.88rem", padding: "10px 18px" }}
                >
                  <ExternalLink size={15} />
                  <span>Get Directions on Google Maps</span>
                </Button>
              )}

              {/* Conditional opening hours */}
              {openingHours && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "var(--space-4)",
                    paddingTop: "var(--space-3)",
                    borderTop: "1px solid var(--color-border)",
                    fontSize: "0.9rem",
                    color: "var(--color-ink-muted)",
                  }}
                >
                  <Clock size={16} />
                  <span>{openingHours}</span>
                </div>
              )}
            </div>

            {/* Optional WhatsApp or Email if provided */}
            {(whatsapp || email) && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-3)",
                }}
              >
                {whatsapp && (
                  <Button
                    href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`}
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare size={16} />
                    <span>Chat on WhatsApp</span>
                  </Button>
                )}
                {email && (
                  <Button href={`mailto:${email}`} variant="outline">
                    <Mail size={16} />
                    <span>Email Us: {email}</span>
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Interactive Contact / Quote Form Column */}
          <div className="lg:col-span-7">
            <div
              style={{
                backgroundColor: "var(--color-surface)",
                padding: "clamp(24px, 4vw, 40px)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-resting)",
              }}
            >
              <h3 style={{ fontSize: "1.45rem", marginBottom: "var(--space-2)", color: "var(--color-ink)" }}>
                {contact.formHeading}
              </h3>
              <p style={{ fontSize: "0.95rem", marginBottom: "var(--space-5)" }}>
                {contact.formSubheading}
              </p>

              {isSubmitted ? (
                <div
                  style={{
                    padding: "var(--space-6) var(--space-4)",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "var(--space-3)",
                    backgroundColor: "var(--color-bg)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <CheckCircle size={44} style={{ color: "var(--color-secondary)" }} />
                  <h4 style={{ fontSize: "1.25rem", color: "var(--color-ink)" }}>
                    Inquiry Received
                  </h4>
                  <p style={{ fontSize: "0.95rem", maxWidth: "460px" }}>
                    Thank you, {formData.name || "for reaching out"}. Our technical team has received your details and will call you directly at {formData.phone || "your number"} to discuss your requirements.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        serviceId: services[0]?.id || "",
                        propertyType: "residential",
                        notes: "",
                      });
                    }}
                    style={{ marginTop: "var(--space-2)" }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="client-name"
                      style={{
                        display: "block",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "var(--color-ink)",
                        marginBottom: "var(--space-1)",
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        fontSize: "0.95rem",
                        fontFamily: "var(--font-body)",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--color-border)",
                        backgroundColor: "#FFFFFF",
                        color: "var(--color-ink)",
                      }}
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label
                      htmlFor="client-phone"
                      style={{
                        display: "block",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "var(--color-ink)",
                        marginBottom: "var(--space-1)",
                      }}
                    >
                      Contact Phone Number *
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      placeholder="e.g. 07123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        fontSize: "0.95rem",
                        fontFamily: "var(--font-body)",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--color-border)",
                        backgroundColor: "#FFFFFF",
                        color: "var(--color-ink)",
                      }}
                    />
                  </div>

                  {/* Service Selection */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }} className="grid-cols-1 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="service-select"
                        style={{
                          display: "block",
                          fontSize: "0.85rem",
                          fontWeight: 500,
                          color: "var(--color-ink)",
                          marginBottom: "var(--space-1)",
                        }}
                      >
                        Service Required
                      </label>
                      <select
                        id="service-select"
                        value={formData.serviceId}
                        onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          fontSize: "0.95rem",
                          fontFamily: "var(--font-body)",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--color-border)",
                          backgroundColor: "#FFFFFF",
                          color: "var(--color-ink)",
                        }}
                      >
                        {services.map((svc) => (
                          <option key={svc.id} value={svc.id}>
                            {svc.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="property-type"
                        style={{
                          display: "block",
                          fontSize: "0.85rem",
                          fontWeight: 500,
                          color: "var(--color-ink)",
                          marginBottom: "var(--space-1)",
                        }}
                      >
                        Property Type
                      </label>
                      <select
                        id="property-type"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          fontSize: "0.95rem",
                          fontFamily: "var(--font-body)",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--color-border)",
                          backgroundColor: "#FFFFFF",
                          color: "var(--color-ink)",
                        }}
                      >
                        <option value="residential">Residential Residence</option>
                        <option value="commercial">Commercial / Office</option>
                        <option value="retail">Retail / Hospitality</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Details */}
                  <div>
                    <label
                      htmlFor="client-notes"
                      style={{
                        display: "block",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "var(--color-ink)",
                        marginBottom: "var(--space-1)",
                      }}
                    >
                      Brief Project or Issue Details (Optional)
                    </label>
                    <textarea
                      id="client-notes"
                      rows={3}
                      placeholder="Describe your current system or what you are looking to achieve..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        fontSize: "0.95rem",
                        fontFamily: "var(--font-body)",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--color-border)",
                        backgroundColor: "#FFFFFF",
                        color: "var(--color-ink)",
                        resize: "vertical",
                      }}
                    />
                  </div>

                  <Button type="submit" variant="primary" style={{ marginTop: "var(--space-2)" }}>
                    <span>Submit Callback Request</span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
