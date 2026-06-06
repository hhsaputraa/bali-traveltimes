/**
 * Sanity Schema for Tour Package documents.
 * Declares all fields, validation constraints, and groupings for Sanity Studio.
 */
const tourSchema = {
  name: "tour",
  title: "Tour Package",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(100),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "content",
      title: "Detailed Description / Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true, // Enables UI crop/hotspot editor in studio
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "price",
      title: "Price (IDR)",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
      placeholder: "e.g., 3 Hari 2 Malam",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "difficulty",
      title: "Difficulty Level",
      type: "string",
      options: {
        list: [
          { title: "Mudah (Easy)", value: "easy" },
          { title: "Sedang (Medium)", value: "medium" },
          { title: "Menantang (Hard)", value: "hard" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Primary Location / Region",
      type: "string",
      placeholder: "e.g., Ubud, Uluwatu, Nusa Penida",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    },
    {
      name: "travelTimes",
      title: "Travel Times (Waktu Tempuh)",
      type: "array",
      of: [
        {
          type: "object",
          name: "travelTimeItem",
          title: "Travel Time Detail",
          fields: [
            { name: "destination", type: "string", title: "Destination Node" },
            { name: "durationMinutes", type: "number", title: "Duration (minutes)" },
          ],
        },
      ],
    },
    {
      name: "itinerary",
      title: "Itinerary Plan",
      type: "array",
      of: [
        {
          type: "object",
          name: "itineraryDay",
          title: "Itinerary Day Plan",
          fields: [
            { name: "day", type: "number", title: "Day Number" },
            { name: "title", type: "string", title: "Day Title / Theme" },
            {
              name: "activities",
              type: "array",
              title: "Activities list",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
  ],
};

export default tourSchema;

