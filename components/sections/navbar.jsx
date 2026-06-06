"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Compass } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/navigation";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Main application Navigation Bar.
 * Incorporates dynamic styling transitions when page is scrolled.
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 20;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900 py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/25 group-hover:scale-105 transition-transform duration-200">
            <Compass className="h-5 w-5 animate-pulse" />
          </div>
          <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white group-hover:text-emerald-600 transition-colors duration-200">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Action Button */}
        <div className="hidden md:flex items-center">
          <Button variant="default" size="sm">
            Pesan Sekarang
          </Button>
        </div>

        {/* Mobile Navigation Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden p-2 rounded-lg text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900 transition-all duration-200"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer Panel */}
      <div
        className={cn(
          "fixed inset-0 top-[64px] z-40 w-full bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 px-4 py-6 md:hidden transition-all duration-300 flex flex-col gap-6",
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        )}
      >
        <nav className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold py-2 text-zinc-800 hover:text-emerald-600 dark:text-zinc-200 dark:hover:text-emerald-500 border-b border-zinc-50 dark:border-zinc-900 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto">
          <Button className="w-full" size="lg" onClick={() => setIsOpen(false)}>
            Pesan Sekarang
          </Button>
        </div>
      </div>
    </header>
  );
}
