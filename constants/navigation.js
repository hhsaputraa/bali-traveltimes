/**
 * Application-wide site metadata and configuration constants.
 */
export const SITE_CONFIG = {
  name: "Bali Travel Times",
  description: "Temukan petualangan dan keindahan Bali dengan panduan perjalanan terpercaya dan waktu tempuh akurat.",
  url: "https://balitraveltimes.com",
  ogImage: "/images/og-image.jpg",
  contact: {
    email: "info@balitraveltimes.com",
    phone: "+62 812-3456-7890",
    address: "Jl. Raya Sunset Road No. 100, Seminyak, Kuta, Badung, Bali 80361",
  },
};

/**
 * Primary navigation menu links.
 */
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Paket Wisata", href: "/#tours" },
  { label: "Waktu Tempuh", href: "/#travel-times" },
  { label: "Tentang Kami", href: "/#about" },
];

/**
 * Footer navigation groupings.
 */
export const FOOTER_LINKS = {
  destinations: [
    { label: "Ubud", href: "/tour/ubud-cultural-experience" },
    { label: "Kuta & Seminyak", href: "/tour/seminyak-beachfront-escape" },
    { label: "Nusa Penida", href: "/tour/nusa-penida-island-adventure" },
    { label: "Uluwatu", href: "/tour/uluwatu-sunset-cliff-tour" },
  ],
  company: [
    { label: "Tentang Kami", href: "/#about" },
    { label: "Hubungi Kami", href: "/#contact" },
    { label: "Syarat & Ketentuan", href: "/terms" },
    { label: "Kebijakan Privasi", href: "/privacy" },
  ],
};

/**
 * Social media profiles link configuration.
 */
export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://instagram.com/balitraveltimes",
    icon: "instagram",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/balitraveltimes",
    icon: "facebook",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/balitraveltimes",
    icon: "youtube",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/balitraveltime",
    icon: "twitter",
  },
];
