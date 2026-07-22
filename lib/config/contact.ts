export const contactConfig = {
  restaurant: {
    name: "Jain's Little India",
    address: "Royal Road, Grand Baie, Mauritius",
    phone: "+230 123 4567",
    email: "info@jainslittleindia.mu",
  },
  hours: {
    monday: { open: "11:00", close: "22:00" },
    tuesday: { open: "11:00", close: "22:00" },
    wednesday: { open: "11:00", close: "22:00" },
    thursday: { open: "11:00", close: "22:00" },
    friday: { open: "11:00", close: "23:00" },
    saturday: { open: "11:00", close: "23:00" },
    sunday: { open: "11:00", close: "22:00" },
  },
  cuisine: "Authentic Rajasthani & North Indian Cuisine",
  dressCode: "Smart Casual",
  parking: "Free parking available on premises",
  accessibility: "Wheelchair accessible entrance and dining area",
  paymentMethods: ["Cash", "Credit Card", "Mobile Payment"] as string[],
  platforms: {
    whatsapp: {
      url: "https://wa.me/2301234567",
      description: "Chat with us instantly on WhatsApp",
      cta: "Chat On WhatsApp",
    },
    telegram: {
      url: "https://t.me/jainslittleindia",
      description: "Join our Telegram channel for updates",
      cta: "Open Telegram",
    },
    phone: {
      url: "tel:+2301234567",
      description: "Call our reservation team directly",
      cta: "Call Restaurant",
    },
    email: {
      url: "mailto:info@jainslittleindia.mu",
      description: "Send us a detailed email enquiry",
      cta: "Send Email",
    },
  },
  social: {
    instagram: {
      url: "https://instagram.com/jainslittleindia",
      handle: "@jainslittleindia",
    },
    facebook: {
      url: "https://facebook.com/jainslittleindia",
      handle: "Jain's Little India",
    },
    tiktok: {
      url: "https://tiktok.com/@jainslittleindia",
      handle: "@jainslittleindia",
    },
    tripadvisor: {
      url: "https://tripadvisor.com/Restaurant_Review-g304032-d1234567",
      handle: "Jain's Little India",
    },
    googleBusiness: {
      url: "https://maps.google.com/?cid=123456789",
      handle: "Jain's Little India",
    },
  },
  maps: {
    googleMaps: {
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.123456789!2d57.5555555!3d-20.0555555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAzJzE5LjkiTiA1N8KwMzMnMjAuMCJF!5e0!3m2!1sen!2smu!4v1234567890",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Jain's+Little+India+Grand+Bai+Mauritius",
    },
    // Future: Apple Maps support
    appleMaps: {
      url: "https://maps.apple.com/?q=Jain's+Little+India+Grand+Bai+Mauritius",
    },
  },
  reservations: {
    url: "/reserve",
    menuUrl: "/menu",
  },
} as const;
