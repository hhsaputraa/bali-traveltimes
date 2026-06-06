"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Compass, ChevronDown, Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/constants/navigation";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Custom TripAdvisor Icon SVG
function TripAdvisorIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.5-9c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm7 0c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5z" />
    </svg>
  );
}

// Custom Facebook Icon SVG
function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// Custom Instagram Icon SVG
function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const TOUR_ITEMS = [
  { label: "Ubud Full Day Tour", href: "/tour/ubud-full-day-tour" },
  { label: "Uluwatu Sunset Tour", href: "/#tours" },
  { label: "Nusa Penida Day Tour", href: "/#tours" },
  { label: "East Bali Gates of Heaven", href: "/#tours" },
  { label: "Mount Batur Sunrise Jeep", href: "/#tours" },
];

const ACTIVITY_ITEMS = [
  { label: "White Water Rafting", href: "/#activities" },
  { label: "ATV Quad Biking", href: "/#activities" },
  { label: "Mount Batur Sunrise Trekking", href: "/#activities" },
  { label: "Bali Jungle Swing", href: "/#activities" },
  { label: "Tanjung Benoa Watersports", href: "/#activities" },
];

const SERVICE_ITEMS = [
  { label: "Car Rental with Driver", href: "/#car-rental" },
  { label: "Scooter Rental Ubud", href: "/#car-rental" },
  { label: "Airport Transfer Service", href: "/#car-rental" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 40;

  const toggleMobileSubmenu = (menu) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  return (
    <header className="w-full z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-primary-950 text-white/80 py-2 border-b border-primary-900/40 text-xs transition-all duration-300">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <a href="mailto:info@balitraveltimes.com" className="flex items-center gap-1.5 hover:text-white transition-colors duration-200">
              <Mail className="h-3.5 w-3.5 text-accent-500" />
              <span>info@balitraveltimes.com</span>
            </a>
            <a href="https://wa.me/6281234567890" className="flex items-center gap-1.5 hover:text-white transition-colors duration-200">
              <Phone className="h-3.5 w-3.5 text-accent-500" />
              <span>+62 812-3456-7890</span>
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-white/60">Follow Us:</span>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/balitraveltimes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="Instagram">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href="https://facebook.com/balitraveltimes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="Facebook">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="TripAdvisor">
                <TripAdvisorIcon className="h-4 w-4 text-emerald-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <div
        className={cn(
          "left-0 right-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "fixed top-0 bg-background/90 backdrop-blur-md border-b border-zinc-200/50 py-3 shadow-md"
            : "relative bg-background border-b border-zinc-100 py-4"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-900 text-white shadow-md shadow-primary-900/25 group-hover:scale-105 transition-transform duration-200">
              <Compass className="h-5 w-5 text-accent-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg tracking-tight text-primary-950 leading-none">
                Bali Travel Times
              </span>
              <span className="text-[10px] text-zinc-500 font-medium tracking-widest uppercase mt-0.5">
                Tour & Car Rental
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-zinc-700 hover:text-primary-700 transition-colors duration-200"
            >
              Home
            </Link>

            {/* Tours Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-primary-700 transition-colors duration-200 cursor-pointer">
                <span>Tour Packages</span>
                <ChevronDown className="h-4 w-4 text-zinc-400 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-60 bg-white border border-zinc-200/60 rounded-xl shadow-xl py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {TOUR_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-zinc-600 hover:bg-primary-50 hover:text-primary-950 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Activities Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-primary-700 transition-colors duration-200 cursor-pointer">
                <span>Bali Activities</span>
                <ChevronDown className="h-4 w-4 text-zinc-400 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-60 bg-white border border-zinc-200/60 rounded-xl shadow-xl py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {ACTIVITY_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-zinc-600 hover:bg-primary-50 hover:text-primary-950 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-primary-700 transition-colors duration-200 cursor-pointer">
                <span>Our Services</span>
                <ChevronDown className="h-4 w-4 text-zinc-400 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-60 bg-white border border-zinc-200/60 rounded-xl shadow-xl py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {SERVICE_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-zinc-600 hover:bg-primary-50 hover:text-primary-950 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop CTA Action Button */}
          <div className="hidden md:flex items-center">
            <Button
              onClick={() => window.open("https://wa.me/6281234567890?text=Hi%20Bali%20Travel%20Times,%20I%20would%20like%20to%20book%20a%20tour/car%20rental.", "_blank")}
              className="bg-primary-900 text-white hover:bg-primary-950 transition-colors duration-200 font-medium"
              size="sm"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Navigation Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden p-2 rounded-lg text-zinc-600 hover:bg-zinc-100 transition-all duration-200"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Panel */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 top-[100px] z-40 w-full bg-background border-t border-zinc-200/60 px-4 py-6 md:hidden transition-all duration-300 flex flex-col gap-6 overflow-y-auto",
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        )}
      >
        <nav className="flex flex-col gap-2">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold py-2.5 px-3 rounded-lg text-zinc-800 hover:bg-zinc-50 transition-colors duration-200"
          >
            Home
          </Link>

          {/* Tours Collapsible */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu("tours")}
              className="flex items-center justify-between w-full text-base font-semibold py-2.5 px-3 rounded-lg text-zinc-800 hover:bg-zinc-50 transition-colors duration-200"
            >
              <span>Tour Packages</span>
              <ChevronDown className={cn("h-5 w-5 text-zinc-400 transition-transform duration-300", mobileSubmenu === "tours" && "rotate-180")} />
            </button>
            <div className={cn("pl-6 pr-3 overflow-hidden transition-all duration-300 max-h-0", mobileSubmenu === "tours" && "max-h-[300px] py-1")}>
              {TOUR_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm text-zinc-600 hover:text-primary-700 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Activities Collapsible */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu("activities")}
              className="flex items-center justify-between w-full text-base font-semibold py-2.5 px-3 rounded-lg text-zinc-800 hover:bg-zinc-50 transition-colors duration-200"
            >
              <span>Bali Activities</span>
              <ChevronDown className={cn("h-5 w-5 text-zinc-400 transition-transform duration-300", mobileSubmenu === "activities" && "rotate-180")} />
            </button>
            <div className={cn("pl-6 pr-3 overflow-hidden transition-all duration-300 max-h-0", mobileSubmenu === "activities" && "max-h-[300px] py-1")}>
              {ACTIVITY_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm text-zinc-600 hover:text-primary-700 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services Collapsible */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu("services")}
              className="flex items-center justify-between w-full text-base font-semibold py-2.5 px-3 rounded-lg text-zinc-800 hover:bg-zinc-50 transition-colors duration-200"
            >
              <span>Our Services</span>
              <ChevronDown className={cn("h-5 w-5 text-zinc-400 transition-transform duration-300", mobileSubmenu === "services" && "rotate-180")} />
            </button>
            <div className={cn("pl-6 pr-3 overflow-hidden transition-all duration-300 max-h-0", mobileSubmenu === "services" && "max-h-[300px] py-1")}>
              {SERVICE_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm text-zinc-600 hover:text-primary-700 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        
        <div className="mt-auto pt-6 border-t border-zinc-100 flex flex-col gap-4">
          <div className="text-center text-xs text-zinc-500">
            Need urgent assistance?
          </div>
          <Button
            className="w-full bg-primary-900 text-white hover:bg-primary-950"
            size="lg"
            onClick={() => {
              setIsOpen(false);
              window.open("https://wa.me/6281234567890?text=Hi%20Bali%20Travel%20Times,%20I%20would%20like%20to%20book%20a%20tour/car%20rental.", "_blank");
            }}
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
}
