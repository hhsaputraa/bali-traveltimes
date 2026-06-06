import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names and resolves Tailwind CSS conflicts.
 * @param  {...any} inputs - Class names or conditional class name objects.
 * @returns {string} - Cleaned and merged class names.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number into Indonesian Rupiah (IDR) currency format.
 * @param {number} amount - The numeric amount to format.
 * @returns {string} - Formatted currency string.
 */
export function formatRupiah(amount) {
  if (amount === undefined || amount === null) return "Rp 0";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formats a date string or Date object into Indonesian locale format.
 * @param {string|Date} date - The date to format.
 * @param {object} [options] - Custom formatting options.
 * @returns {string} - Formatted date string.
 */
export function formatDate(date, options = {}) {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;
  
  const defaultOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return new Intl.NumberFormat("id-ID", {
    ...defaultOptions,
    ...options,
  }).format(d);
}

/**
 * Calculates the estimated reading time of text content.
 * @param {string} text - The text content to analyze.
 * @returns {number} - Estimated reading time in minutes.
 */
export function calculateReadingTime(text) {
  if (!text) return 0;
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
