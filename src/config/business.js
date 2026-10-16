/**
 * ALL business configuration, content, colors, services, and image URLs.
 * A non-technical owner can edit this one file to customize the entire website.
 */

export const business = {
  name: "Samora Air & HVAC",
  tagline: "Expert Heating, Cooling & HVAC Services",
  businessType: "Cleaning & Climate Engineering",
  area: "Leeds, United Kingdom",
  fullAddress: "4th Floor, Toronto Square, Toronto St, Leeds LS1 2HJ, United Kingdom",
  phone: "+44 7347 959475",
  phoneRaw: "+447347959475",
  // Omit or leave null/empty if not provided:
  whatsapp: null,
  email: null,
  openingHours: null,
  
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=4th+Floor,+Toronto+Square,+Toronto+St,+Leeds+LS1+2HJ,+United+Kingdom",

  brandStyle: "Luxury",
  colors: {
    primary: "#D9A8A0",       // Refined rose bronze / warm blush
    secondary: "#748DD4",     // Elegant slate periwinkle
    ink: "#161514",           // Deep warm charcoal black
    inkMuted: "#625E5A",      // Calm secondary text
    bg: "#FAF8F5",            // Soft alabaster off-white
    bgAlt: "#F2EEE8",         // Muted contrast section background
    surface: "#FFFFFF",       // Clean card surface
    border: "#E7E1D8",        // Crisp architectural border
    overlay: "rgba(18, 16, 14, 0.62)",
  },

  hero: {
    eyebrow: "Leeds & West Yorkshire · Climate Specialists",
    title: "Quiet, refined heating and cooling tailored to your space.",
    subtitle: "From precision air conditioning installations to rapid diagnostics and seasonal maintenance, Samora Air & HVAC provides year-round thermal comfort for luxury homes and discerning commercial spaces.",
    primaryCta: {
      label: "Call Now",
      href: "tel:+447347959475",
    },
    secondaryCta: {
      label: "View Services",
      href: "#services",
    },
    trustNotice: "Based in Toronto Square, Leeds · Certified F-Gas Engineers",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },

  about: {
    eyebrow: "About Samora Air & HVAC",
    title: "Dedicated climate craft for Yorkshire homes and businesses.",
    lead: "We believe indoor climate should be felt, never heard or noticed. Our work combines meticulous mechanical engineering with architectural discretion.",
    paragraphs: [
      "Operating from central Leeds, Samora Air & HVAC delivers precision cooling, heating, and air hygiene solutions built for lasting performance. Every system we install or restore is engineered to run at whisper-quiet sound levels while maintaining balanced temperature control through all seasons.",
      "Whether you are upgrading an existing climate system, requiring an urgent repair, or seeking routine preventative maintenance, we bring punctual, tidy, and transparent service to every appointment."
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    imageCaption: "Leeds City Centre · Residential & Commercial Climate Solutions",
  },

  services: [
    {
      id: "ac-installation",
      title: "Air Conditioning Installation",
      description: "Bespoke split and multi-split cooling systems installed with clean architectural finishes, ultra-quiet operation, and peak energy efficiency.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: "ac-repair",
      title: "Air Conditioning Repair",
      description: "Swift diagnostic troubleshooting, refrigerant pressure testing, and component repairs to restore comfort with zero fuss.",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: "hvac-maintenance",
      title: "HVAC Maintenance",
      description: "Comprehensive seasonal health checks, thorough coil and filter sanitisation, airflow balancing, and preventative calibration.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: "heating-repair",
      title: "Heating System Repair",
      description: "Reliable heat pump and warm-air system repairs across Leeds to keep your interior warm and energy-efficient when temperatures drop.",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: "ac-replacement",
      title: "Air Conditioner Replacement",
      description: "Seamless modern replacements for ageing or inefficient cooling hardware, lowering energy bills and upgrading climate controls.",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: "hvac-installation",
      title: "HVAC System Installation",
      description: "End-to-end design and commissioning of complete heating, ventilation, and air conditioning infrastructure for luxury properties.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    },
  ],

  whyChooseUs: {
    eyebrow: "Why Samora Air",
    title: "A calm, dependable approach to indoor climate.",
    description: "We focus on technical excellence, transparent recommendations, and genuine respect for your property.",
    points: [
      {
        number: "01",
        title: "Leeds City Centre Base",
        description: "Stationed at Toronto Square, enabling prompt dispatch and reliable coverage across central Leeds and surrounding Yorkshire communities.",
      },
      {
        number: "02",
        title: "Certified F-Gas Technicians",
        description: "Fully compliant handling of modern eco-refrigerants, adhering to strict UK environmental safety standards and factory specifications.",
      },
      {
        number: "03",
        title: "Clear, Upfront Estimates",
        description: "No hidden charges or vague assessments. You receive an honest diagnostic evaluation and fixed quotation before any work commences.",
      },
      {
        number: "04",
        title: "Clean Air & Quiet Performance",
        description: "We prioritise hygienic air circulation and whisper-quiet operation so your home or workplace feels effortless and fresh.",
      },
    ],
  },

  // Testimonials: Empty per {{TESTIMONIALS}} specification. Testimonials section omitted automatically.
  testimonials: [],

  faqs: [
    {
      question: "How quickly can you respond for air conditioning or heating issues in Leeds?",
      answer: "We are centrally based at Toronto Square in Leeds city centre. For urgent breakdowns or temperature failures, we prioritise rapid same-day or next-day diagnostic appointments.",
    },
    {
      question: "Do you service both residential homes and commercial premises?",
      answer: "Yes. We work on private residential properties, apartments, retail spaces, boutique studios, and corporate offices across Leeds and West Yorkshire.",
    },
    {
      question: "How frequently should an HVAC or cooling system undergo maintenance?",
      answer: "For standard residential use, a full annual service before peak summer or winter is ideal. Commercial premises or high-use environments benefit from bi-annual maintenance to maintain optimal air filtration and energy efficiency.",
    },
    {
      question: "Can an older air conditioning unit be replaced without redesigning the whole property?",
      answer: "In most cases, yes. Modern compact indoor cassettes and wall units can often interface with existing conduits or be upgraded with minimal disruption to your decor.",
    },
  ],

  contact: {
    eyebrow: "Get In Touch",
    title: "Speak directly with our climate team.",
    description: "Whether you need urgent repair advice or wish to schedule a consultation for an upcoming installation, we are ready to assist.",
    primaryActionLabel: "Call +44 7347 959475",
    formHeading: "Request a Callback or Site Visit",
    formSubheading: "Send us a message and a technician will follow up shortly.",
  },

  footer: {
    copyrightNote: "All rights reserved. Professional heating, cooling & HVAC solutions in Leeds.",
  },
};
