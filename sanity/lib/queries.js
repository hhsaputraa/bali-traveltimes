import { defineQuery } from "next-sanity";

// Ambil semua tour (untuk homepage grid)
export const ALL_TOURS_QUERY = defineQuery(`
  *[_type == "tour"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    category,
    isFeatured,
    description,
    price,
    duration,
    difficulty,
    location,
    rating,
    mainImage,
    highlights
  }
`);

// Ambil featured tours saja (untuk homepage hero section)
export const FEATURED_TOURS_QUERY = defineQuery(`
  *[_type == "tour" && isFeatured == true] | order(_createdAt desc) {
    _id,
    title,
    slug,
    category,
    description,
    price,
    duration,
    location,
    rating,
    mainImage
  }
`);

// Ambil 1 tour berdasarkan slug (untuk halaman detail)
export const TOUR_BY_SLUG_QUERY = defineQuery(`
  *[_type == "tour" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    description,
    content,
    price,
    duration,
    difficulty,
    location,
    rating,
    mainImage,
    gallery,
    highlights,
    includes,
    excludes,
    itinerary,
    whatsappNumber
  }
`);

// Ambil tour berdasarkan kategori (untuk filter)
export const TOURS_BY_CATEGORY_QUERY = defineQuery(`
  *[_type == "tour" && category == $category] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    price,
    duration,
    location,
    rating,
    mainImage
  }
`);