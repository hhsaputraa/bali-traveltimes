"use client";

import Link from "next/link";
import { Compass, Mail, Phone, MapPin, Send, Star, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-zinc-300 border-t border-primary-900 mt-auto">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Section 1: Logo & About */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary-950 shadow-md">
                <Compass className="h-5 w-5 text-accent-600" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg tracking-tight text-white leading-none">
                  Bali Travel Times
                </span>
                <span className="text-[9px] text-zinc-400 font-medium tracking-widest uppercase mt-0.5">
                  Tour & Car Rental
                </span>
              </div>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Explore the beauty of Bali with a reliable private tour guide and professional driver. Offering customized day tours, airport transfers, and premier car hires since 2018.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/balitraveltimes"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-primary-800 text-zinc-400 hover:border-white hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com/balitraveltimes"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-primary-800 text-zinc-400 hover:border-white hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-sm text-white uppercase tracking-wider mb-6">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <Link href="/tour/ubud-full-day-tour" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                  Ubud Day Tour
                </Link>
              </li>
              <li>
                <Link href="/#tours" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                  Nusa Penida Tour
                </Link>
              </li>
              <li>
                <Link href="/#car-rental" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                  Private Car Rental
                </Link>
              </li>
              <li>
                <Link href="/#car-rental" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                  Airport Pick-up
                </Link>
              </li>
              <li>
                <Link href="/#activities" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                  Bali Activities
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: TripAdvisor Widget */}
          <div>
            <h4 className="font-serif font-semibold text-sm text-white uppercase tracking-wider mb-6">
              Reviews
            </h4>
            <div className="bg-primary-900/40 border border-primary-800/60 rounded-2xl p-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <TripAdvisorIcon className="h-6 w-6 text-emerald-400" />
                <span className="text-xs font-semibold tracking-wider text-white uppercase">TripAdvisor</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-serif">Excellent 5.0</div>
                <div className="flex items-center gap-1.5 mt-1 text-emerald-400">
                  <span className="inline-block w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="inline-block w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="inline-block w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="inline-block w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="inline-block w-3 h-3 rounded-full bg-emerald-500"></span>
                </div>
                <p className="text-xs text-zinc-400 mt-2">
                  Based on 520+ guest reviews in Bali.
                </p>
              </div>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center justify-between text-xs font-semibold text-accent-500 hover:text-accent-600 transition-colors duration-200 group"
              >
                <span>Write a review</span>
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Section 4: Contact info */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="font-serif font-semibold text-sm text-white uppercase tracking-wider mb-6">
                Get In Touch
              </h4>
              <ul className="flex flex-col gap-3.5 text-zinc-400">
                <li className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-accent-500 flex-shrink-0" />
                  <a href="https://wa.me/6281234567890" className="hover:text-white transition-colors duration-200">
                    +62 812-3456-7890
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-accent-500 flex-shrink-0" />
                  <a href="mailto:info@balitraveltimes.com" className="hover:text-white transition-colors duration-200 truncate">
                    info@balitraveltimes.com
                  </a>
                </li>
                <li className="flex gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Jln. Pengosekan no 14 Ubud, Bali, Indonesia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-primary-900 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {currentYear} Bali Travel Times. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/#terms" className="text-xs text-zinc-500 hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/#privacy" className="text-xs text-zinc-500 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
