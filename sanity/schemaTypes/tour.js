const tourSchema = {
  name: "tour",
  title: "Tour Package",
  type: "document",
  groups: [
    { name: "basic", title: "Basic Info" },
    { name: "media", title: "Media" },
    { name: "details", title: "Tour Details" },
    { name: "booking", title: "Booking" },
  ],
  fields: [
    // ── BASIC INFO ──────────────────────────────────────
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "basic",
      validation: (Rule) => Rule.required().min(5).max(100),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "basic",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      group: "basic",
      options: {
        list: [
          { title: "Ubud Tour", value: "ubud" },
          { title: "South Bali Tour", value: "south" },
          { title: "North Bali Tour", value: "north" },
          { title: "East Bali Tour", value: "east" },
          { title: "West Bali Tour", value: "west" },
          { title: "Kintamani Tour", value: "kintamani" },
          { title: "Nusa Penida Tour", value: "nusa-penida" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isFeatured",
      title: "Featured on Homepage?",
      type: "boolean",
      group: "basic",
      initialValue: false,
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
      group: "basic",
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: "content",
      title: "Detailed Description",
      type: "array",
      group: "basic",
      of: [{ type: "block" }],
    },

    // ── MEDIA ───────────────────────────────────────────
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      group: "media",
      options: { hotspot: true },
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
      group: "media",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Alternative Text" },
          ],
        },
      ],
    },

    // ── TOUR DETAILS ────────────────────────────────────
    {
      name: "price",
      title: "Price (USD)",
      type: "number",
      group: "details",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
      group: "details",
      placeholder: "e.g., Full Day (10 Hours)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "difficulty",
      title: "Difficulty Level",
      type: "string",
      group: "details",
      options: {
        list: [
          { title: "Easy", value: "easy" },
          { title: "Medium", value: "medium" },
          { title: "Hard", value: "hard" },
        ],
        layout: "radio",
      },
    },
    {
      name: "location",
      title: "Primary Location",
      type: "string",
      group: "details",
      placeholder: "e.g., Ubud, Bali",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      group: "details",
      validation: (Rule) => Rule.min(1).max(5),
    },
    {
      name: "highlights",
      title: "Tour Highlights",
      description: "Poin-poin unggulan tour ini (muncul di halaman detail)",
      type: "array",
      group: "details",
      of: [{ type: "string" }],
    },
    {
      name: "includes",
      title: "What's Included",
      description: "Fasilitas yang sudah termasuk dalam harga",
      type: "array",
      group: "details",
      of: [{ type: "string" }],
    },
    {
      name: "excludes",
      title: "What's Not Included",
      description: "Yang tidak termasuk dalam harga",
      type: "array",
      group: "details",
      of: [{ type: "string" }],
    },
    {
      name: "itinerary",
      title: "Itinerary",
      type: "array",
      group: "details",
      of: [
        {
          type: "object",
          name: "itineraryStop",
          title: "Stop",
          fields: [
            { name: "time", type: "string", title: "Time", placeholder: "e.g., 08:00 AM" },
            { name: "place", type: "string", title: "Place Name" },
            { name: "description", type: "text", title: "Description", rows: 2 },
          ],
          preview: {
            select: { title: "place", subtitle: "time" },
          },
        },
      ],
    },

    // ── BOOKING ─────────────────────────────────────────
    {
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      group: "booking",
      description: "Format internasional tanpa + (e.g., 6281234567890)",
      placeholder: "6281234567890",
    },
  ],
};

export default tourSchema;