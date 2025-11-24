const siteUrl = "https://plumeriaresort.in";

const keywordGroups = {
  location: [
    "Plumeria Resort Coorg",
    "Plumeria Resort Kushalnagar",
    "resort in Kushalnagar Coorg",
    "resorts in Coorg Karnataka",
    "luxury resort Coorg",
    "Coorg resort weekend getaway",
    "family resort Coorg",
    "nature resort Coorg",
    "Coorg honeymoon resort",
  ],
  amenities: [
    "resort with swimming pool Coorg",
    "kids pool resort Coorg",
    "resort with indoor games Karnataka",
    "wellness retreat Coorg",
    "meditation resort Coorg",
    "peaceful resort Coorg",
    "eco resort Coorg",
    "resort with restaurant Coorg",
  ],
  trips: [
    "weekend getaway from Bangalore to Coorg",
    "places to stay in Coorg",
    "Coorg tourist resort accommodation",
    "resort near Madikeri Coorg",
    "Coorg nature stay",
  ],
  longTail: [
    "best resort near Golden Temple Coorg",
    "affordable luxury resort in Coorg",
    "family friendly resorts in Coorg",
    "resorts in Coorg for weekend trip from Bangalore",
    "resort stay Coorg for couples",
    "things to do near Plumeria Resort Coorg",
  ],
  local: [
    "Plumeria Resort address Coorg",
    "Plumeria Resort Karnataka",
    "resort in Kushalnagar Karnataka",
    "Coorg resorts near Kushalnagar",
  ],
};

const resortStructuredData = {
  "@context": "https://schema.org",
  "@type": "Resort",
  name: "Plumeria Resort",
  url: siteUrl,
  description:
    "Plumeria Resort is a calm nature retreat in Kushalnagar, Coorg with spacious rooms, private villas, a swimming pool, and wellness-focused amenities.",
  image: `${siteUrl}/plumeria.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kushalnagar",
    addressLocality: "Coorg",
    addressRegion: "Karnataka",
    postalCode: "571234",
    addressCountry: "IN",
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Swimming pool & kids pool",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Indoor & outdoor games",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Meditation & wellness zones",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Multi-cuisine restaurant",
      value: true,
    },
  ],
  areaServed: "Coorg, Karnataka",
  hasMap: "https://maps.app.goo.gl/",
};

const buildCanonical = (path = "/") =>
  path === "/" ? siteUrl : `${siteUrl}${path}`;

const seoConfig = {
  default: {
    path: "/",
    canonical: siteUrl,
    title: "Plumeria Resort | Nature & Wellness Retreat in Coorg",
    description:
      "Stay at Plumeria Resort in Kushalnagar, Coorg for a serene nature retreat with wellness amenities, spacious rooms, and easy access to top tourist spots.",
    keywords: [
      ...keywordGroups.location,
      ...keywordGroups.amenities,
      ...keywordGroups.trips,
    ],
    ogDescription:
      "Plan a calm, family-friendly holiday at Plumeria Resort, the nature resort in Kushalnagar, Coorg known for its pool, games, and meditation zone.",
    structuredData: resortStructuredData,
  },
  home: {
    path: "/",
    canonical: buildCanonical("/"),
    title: "Plumeria Resort Coorg | Nature Resort in Kushalnagar",
    description:
      "Book Plumeria Resort for a nature-filled getaway in Kushalnagar, Coorg with villas, deluxe rooms, swimming pools, indoor-outdoor games, and meditation spaces.",
    keywords: [
      ...keywordGroups.location,
      ...keywordGroups.amenities,
      ...keywordGroups.trips,
      ...keywordGroups.longTail,
    ],
    ogTitle: "Plumeria Resort Coorg - Weekend Getaway & Family Retreat",
    ogDescription:
      "Escape to a peaceful Coorg resort with villas, kids-friendly pools, and curated experiences for couples, families, and wellness seekers.",
    structuredData: resortStructuredData,
  },
  about: {
    path: "/about-us",
    canonical: buildCanonical("/about-us"),
    title: "About Plumeria Resort | Eco & Family Friendly Resort in Coorg",
    description:
      "Learn how Plumeria Resort in Kushalnagar, Coorg blends eco-friendly stays, wellness programs, and family-friendly experiences for weekend getaways.",
    keywords: [
      "About Plumeria Resort",
      ...keywordGroups.location,
      "nature resort Coorg story",
      "family friendly resorts in Coorg",
    ],
    ogTitle: "About Plumeria Resort Kushalnagar",
    ogDescription:
      "Discover the story, team, and values behind Plumeria Resort — a nature-first luxury retreat in Coorg.",
  },
  facilities: {
    path: "/facilities",
    canonical: buildCanonical("/facilities"),
    title:
      "Facilities & Services | Plumeria Resort with Pool, Games & Meditation",
    description:
      "Explore Plumeria Resort amenities: swimming pool, kids pool, indoor & outdoor games, meditation decks, multi-cuisine restaurant, and curated local experiences.",
    keywords: [
      ...keywordGroups.amenities,
      "resort with activities in Coorg",
      "family resort Coorg amenities",
    ],
    ogTitle: "Facilities at Plumeria Resort Coorg",
    ogDescription:
      "From wellness zones to kids entertainment, see why Plumeria Resort is the go-to family resort in Kushalnagar.",
  },
  gallery: {
    path: "/gallery",
    canonical: buildCanonical("/gallery"),
    title: "Gallery | Plumeria Resort Coorg Nature Stay",
    description:
      "View photos of Plumeria Resort’s luxury villas, lush landscapes, swimming pools, meditation corners, and family-friendly spaces in Coorg.",
    keywords: [
      "Plumeria Resort gallery",
      "Coorg nature stay",
      ...keywordGroups.location,
    ],
    ogTitle: "Plumeria Resort Photo Gallery",
    ogDescription:
      "Take a visual tour of our Kushalnagar resort surrounded by Coorg’s greenery and wellness amenities.",
  },
  contact: {
    path: "/contact-us",
    canonical: buildCanonical("/contact-us"),
    title: "Contact Plumeria Resort | Directions to Kushalnagar, Coorg",
    description:
      "Get in touch with Plumeria Resort for bookings, directions, and assistance planning your Coorg getaway near the Namdroling Monastery.",
    keywords: [
      ...keywordGroups.local,
      "contact Plumeria Resort",
      "Plumeria Resort address Coorg",
    ],
    ogTitle: "Contact & Directions | Plumeria Resort",
    ogDescription:
      "Reach our team for reservations, resort tours, or travel help for your Kushalnagar stay.",
  },
  privacy: {
    path: "/privacy-policy",
    canonical: buildCanonical("/privacy-policy"),
    title:
      "Privacy Policy | Plumeria Resort Website & Guest Data Protection",
    description:
      "Read how Plumeria Resort collects, stores, and protects guest information, booking data, and cookies on plumeriaresort.in.",
    keywords: [
      "Plumeria Resort privacy policy",
      "Coorg resort data protection",
      "resort booking privacy Karnataka",
    ],
    ogTitle: "Plumeria Resort Privacy Policy",
    ogDescription:
      "Understand our approach to safeguarding your booking and contact data.",
  },
  terms: {
    path: "/terms-conditions",
    canonical: buildCanonical("/terms-conditions"),
    title: "Terms & Conditions | Plumeria Resort Bookings & Policies",
    description:
      "Review Plumeria Resort’s booking rules, cancellation policy, resort guidelines, and guest responsibilities for a seamless Coorg stay.",
    keywords: [
      "Plumeria Resort terms",
      "Coorg resort cancellation policy",
      "Kushalnagar resort guidelines",
    ],
    ogTitle: "Plumeria Resort Terms & Conditions",
    ogDescription:
      "Know the policies that keep your Coorg vacation stress-free.",
  },
  book: {
    path: "/book-now",
    canonical: buildCanonical("/book-now"),
    title: "Book Plumeria Resort | Affordable Luxury Stay in Coorg",
    description:
      "Reserve villas or deluxe rooms at Plumeria Resort Kushalnagar. Pick travel dates, customize rooms, and plan a weekend getaway from Bangalore.",
    keywords: [
      ...keywordGroups.location,
      ...keywordGroups.longTail,
      "book Plumeria Resort Coorg",
    ],
    ogTitle: "Reserve Your Stay | Plumeria Resort Coorg",
    ogDescription:
      "Lock in your dates for a peaceful Coorg holiday with pools, games, and meditation decks.",
  },
  bookingStatus: {
    path: "/booking-status",
    canonical: buildCanonical("/booking-status"),
    title: "Check Booking Status | Plumeria Resort Reservations",
    description:
      "Track the status of your Plumeria Resort reservation, verify payment, and manage your stay details online.",
    keywords: [
      "Plumeria Resort booking status",
      "Coorg resort reservation lookup",
    ],
    ogTitle: "Plumeria Resort Booking Status",
    ogDescription:
      "Confirm your Coorg stay details and manage reservations.",
    noindex: true,
  },
  bookingSuccess: {
    path: "/booking-success",
    canonical: buildCanonical("/booking-success"),
    title: "Booking Confirmed | Plumeria Resort Coorg",
    description:
      "Your Plumeria Resort booking is successful. Check email for confirmation and travel tips for Kushalnagar, Coorg.",
    keywords: ["Plumeria Resort booking confirmation"],
    ogTitle: "Plumeria Resort Booking Confirmed",
    ogDescription:
      "Thank you for choosing our Kushalnagar nature resort for your getaway.",
    noindex: true,
  },
};

export { siteUrl, keywordGroups };
export default seoConfig;

