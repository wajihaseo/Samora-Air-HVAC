import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  const [selectedService, setSelectedService] = useState(null);

  const handleSelectService = (service) => {
    setSelectedService(service);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-primary)] selection:text-[var(--color-ink)]">
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Hero />
        <Services onSelectService={handleSelectService} />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <Faq />
        <Contact selectedService={selectedService} />
      </main>
      <Footer />
    </div>
  );
}
