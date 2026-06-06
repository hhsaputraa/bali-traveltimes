"use client";

import Link from "next/link";
import { Compass, Mail, Phone, MapPin, Send } from "lucide-react";
import { FOOTER_LINKS, SITE_CONFIG, SOCIAL_LINKS } from "@/constants/navigation";
import { Button } from "@/components/ui/button";

/**
 * Main application Footer section.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 border-t border-zinc-100 dark:bg-zinc-950 dark:border-zinc-900 mt-auto">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Section 1: Logo & About */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
                <Compass className="h-4 w-4" />
              </div>
              <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-emerald-600 hover:text-emerald-600 dark:hover:border-emerald-500 dark:hover:text-emerald-500 transition-colors duration-200"
                  title={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <span className="text-xs uppercase font-semibold tracking-wider">{social.name.substring(0, 2)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Destinations */}
          <div>
            <h4 className="font-bold text-sm text-zinc-900 dark:text-white uppercase tracking-wider mb-6">
              Destinasi Populer
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.destinations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Company */}
          <div>
            <h4 className="font-bold text-sm text-zinc-900 dark:text-white uppercase tracking-wider mb-6">
              Perusahaan
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Contact & Newsletter */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="font-bold text-sm text-zinc-900 dark:text-white uppercase tracking-wider mb-6">
                Hubungi Kami
              </h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span>{SITE_CONFIG.contact.phone}</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <Mail className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span className="truncate">{SITE_CONFIG.contact.email}</span>
                </li>
                <li className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{SITE_CONFIG.contact.address}</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-semibold text-xs text-zinc-950 dark:text-white mb-2">
                Langganan Info Perjalanan
              </h5>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-4 py-2 text-sm rounded-full border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  required
                />
                <Button type="submit" variant="default" size="icon" className="rounded-full">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-zinc-200 dark:border-zinc-900 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-xs text-zinc-500 hover:text-emerald-600 dark:text-zinc-500 transition-colors duration-200">
              Syarat Layanan
            </Link>
            <Link href="/privacy" className="text-xs text-zinc-500 hover:text-emerald-600 dark:text-zinc-500 transition-colors duration-200">
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
