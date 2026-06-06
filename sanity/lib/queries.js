/**
 * GROQ Queries for fetching content from Sanity.
 * Centralizing queries ensures reusable fetching logic across pages.
 */

// Fetch all tours with essential list-view details
export const allToursQuery = `
  *[_type == "tour"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    price,
    duration,
    difficulty,
    location,
    rating
  }
`;

// Fetch single tour detail using its slug
export const tourBySlugQuery = `
  *[_type == "tour" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    content,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    gallery[] {
      asset->{
        _id,
        url
      },
      alt
    },
    price,
    duration,
    difficulty,
    location,
    rating,
    travelTimes[] {
      destination,
      durationMinutes
    },
    itinerary[] {
      day,
      title,
      activities[]
    }
  }
`;

// Fetch all categories
export const categoriesQuery = `
  *[_type == "category"] {
    _id,
    title,
    "slug": slug.current,
    description
  }
`;
