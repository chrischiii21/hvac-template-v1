// ===========================================
// SITE CONFIGURATION
// Update this file with client information
// All components will automatically use these values
// ===========================================

export const siteConfig = {
  // Business Information
  business: {
    name: "HVAC Template",
    fullName: "ABC Company Heating and Cooling",
    tagline: "Heating and Cooling",
    description: "Professional HVAC Services",
  },

  // Location
  location: {
    city: "New York",
    state: "SC",
    address: "3648 Rorance Road",
    fullAddress: "3648 Rorance Road, New York, SC 29170",
  },

  // Contact
  contact: {
    email: "dealer@domain.com",
    phone: "0123456789",
    phoneFormatted: "012-345-6789",
  },

  // Brand Colors (used in CSS variables)
  colors: {
    primary: "#1F1F1F",      // Most dominant - text, headers
    secondary: "#2F5A8B",    // Semi dominant - buttons, highlights, accent
    tertiary: "#6BC3DE",     // Subtle accent - muted backgrounds
    quaternary: "#FAFAFA",   // Subtle accent - page background
    accent: "#3999DB",       // Secondary accent
    highlight: "#3999DB",    // Vibrant accent - small elements, pops of color
  },

  // Logo
  logo: {
    src: "/images/dealer-logo-96.webp",
    alt: "Acme Inc. Logo",
  },

  // Social Media (optional)
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    youtube: "",
  },

  // SEO
  seo: {
    siteName: "HVAC Template",
    defaultTitle: "Expert HVAC Services | Heating, Cooling & IAQ Solutions",
    defaultDescription: "Professional HVAC services including AC repair, furnace installation, and indoor air quality solutions. Trusted local experts for residential and commercial comfort.",
    keywords: "hvac repair, ac installation, furnace service, heating and cooling, indoor air quality, emergency hvac, commercial hvac",
    siteUrl: "https://hvac-template.com", 
    ogImage: "https://hvac-template.com/og-image.jpg",
    twitterHandle: "@hvactemplate",
  },

  // Template Info
  template: {
    id: "8",
    name: "Progressive Section Layout",
  },
}

// Helper to get location-aware text
export function getLocationText(text: string): string {
  return text
    .replaceAll("{city}", siteConfig.location.city)
    .replaceAll("{state}", siteConfig.location.state)
    .replaceAll("{business}", siteConfig.business.name)
    .replaceAll("{fullName}", siteConfig.business.fullName)
}

// Process an array of strings through getLocationText
export function processLocationArray(arr: string[]): string[] {
  return arr.map(getLocationText)
}
