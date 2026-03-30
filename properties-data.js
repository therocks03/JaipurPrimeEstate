// ===== SHARED PROPERTIES DATA MODULE =====
// This file should be included in both index.html and property.html

const PROPERTIES_DATA = [
  {
    id: 1,
    name: "Golden Heritage Villa",
    location: "Malviya Nagar, Jaipur",
    price: "₹3.8 Cr",
    type: "Villa",
    tag: "LUXURY",
    excerpt: "Exquisite 5 BHK villa with traditional Rajasthani architecture, modern amenities, and private garden.",
    description: "This magnificent villa combines the grandeur of Rajasthani heritage with contemporary luxury. Featuring hand-carved jali work, marble flooring, and a private garden with fountain.",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80"
    ],
    bedrooms: 5,
    bathrooms: 6,
    area: "5,200 sq.ft",
    parking: "3 Cars",
    furnished: "Fully Furnished",
    facing: "East",
    floor: "Ground + 2",
    age: "2 Years",
    amenities: ["Swimming Pool", "Home Theatre", "Modular Kitchen", "Garden", "Servant Quarter", "Security", "Power Backup", "Gym"],
    featured: true
  },
  {
    id: 2,
    name: "Skyline Penthouse",
    location: "Vaishali Nagar, Jaipur",
    price: "₹2.4 Cr",
    type: "Penthouse",
    tag: "PREMIUM",
    excerpt: "Spectacular 4 BHK penthouse with 360° city views, private terrace, and designer interiors.",
    description: "Experience luxury living at its finest in this stunning penthouse featuring floor-to-ceiling windows, imported Italian marble, and a sprawling private terrace perfect for entertaining.",
    imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
    ],
    bedrooms: 4,
    bathrooms: 5,
    area: "3,800 sq.ft",
    parking: "2 Cars",
    furnished: "Semi-Furnished",
    facing: "North",
    floor: "15th Floor",
    age: "1 Year",
    amenities: ["Private Terrace", "Jacuzzi", "Smart Home", "Club House", "Concierge", "Lift", "24/7 Security", "Sky Lounge"],
    featured: false
  },
  {
    id: 3,
    name: "Royal Garden Estate",
    location: "Mansarovar, Jaipur",
    price: "₹1.8 Cr",
    type: "Independent House",
    tag: "FEATURED",
    excerpt: "Elegant 4 BHK independent house in gated community with lush gardens and premium amenities.",
    description: "A perfect blend of comfort and luxury, this independent house offers spacious rooms, beautiful landscaping, and access to world-class amenities within a secure gated community.",
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80"
    ],
    bedrooms: 4,
    bathrooms: 4,
    area: "3,200 sq.ft",
    parking: "2 Cars",
    furnished: "Unfurnished",
    facing: "West",
    floor: "Ground + 1",
    age: "Ready to Move",
    amenities: ["Club House", "Kids Play Area", "Jogging Track", "Park", "CCTV", "Gated Security", "Water Supply", "Visitor Parking"],
    featured: false
  },
  {
    id: 4,
    name: "Urban Luxe Apartment",
    location: "Jagatpura, Jaipur",
    price: "₹95 Lac",
    type: "Apartment",
    tag: "NEW LAUNCH",
    excerpt: "Contemporary 3 BHK apartment with modern design, smart features, and excellent connectivity.",
    description: "This well-designed apartment offers the perfect urban lifestyle with contemporary interiors, smart home features, and proximity to IT parks, schools, and shopping centers.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80"
    ],
    bedrooms: 3,
    bathrooms: 3,
    area: "1,800 sq.ft",
    parking: "2 Cars",
    furnished: "Semi-Furnished",
    facing: "South",
    floor: "7th Floor",
    age: "Under Construction",
    amenities: ["Swimming Pool", "Gym", "Lift", "Power Backup", "Kids Play Area", "Intercom", "Security", "Rainwater Harvesting"],
    featured: false
  },
  {
    id: 5,
    name: "Heritage Courtyard Home",
    location: "C-Scheme, Jaipur",
    price: "₹4.2 Cr",
    type: "Kothi",
    tag: "EXCLUSIVE",
    excerpt: "Rare heritage kothi in prime location with traditional architecture and modern restoration.",
    description: "A rare gem in the heart of Jaipur - this beautifully restored heritage kothi features original architecture with all modern conveniences. Perfect for those who appreciate history and luxury.",
    imageUrl: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
    ],
    bedrooms: 6,
    bathrooms: 7,
    area: "6,500 sq.ft",
    parking: "4 Cars",
    furnished: "Fully Furnished",
    facing: "North-East",
    floor: "Ground + 2",
    age: "Heritage (Restored)",
    amenities: ["Courtyard", "Fountain", "Library", "Wine Cellar", "Servant Quarters", "Generator", "Heritage Architecture", "Modern Kitchen"],
    featured: false
  },
  {
    id: 6,
    name: "Green Valley Farmhouse",
    location: "Ajmer Road, Jaipur",
    price: "₹2.2 Cr",
    type: "Farmhouse",
    tag: "INVESTMENT",
    excerpt: "Sprawling farmhouse with organic farm, swimming pool, and serene countryside views.",
    description: "Escape the city in this beautiful farmhouse set on 5 acres of land. Features include an organic farm, swimming pool, guest cottages, and stunning views of the Aravalli hills.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80"
    ],
    bedrooms: 5,
    bathrooms: 5,
    area: "4,200 sq.ft + 5 Acres",
    parking: "5 Cars",
    furnished: "Furnished",
    facing: "East",
    floor: "Ground + 1",
    age: "3 Years",
    amenities: ["Swimming Pool", "Organic Farm", "Guest Cottage", "Gazebo", "Borewell", "Solar Panels", "Orchard", "Caretaker Room"],
    featured: false
  }
];

// Get all properties
function getAllProperties() {
  return PROPERTIES_DATA;
}

// Get featured properties
function getFeaturedProperties(limit = 3) {
  return PROPERTIES_DATA.filter(p => p.featured).slice(0, limit);
}

// Get latest properties (first N properties)
function getLatestProperties(limit = 4) {
  return PROPERTIES_DATA.slice(0, limit);
}

// Get property by ID
function getPropertyById(id) {
  return PROPERTIES_DATA.find(p => p.id === parseInt(id));
}

// Search properties
function searchProperties(query) {
  const lowerQuery = query.toLowerCase();
  return PROPERTIES_DATA.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.location.toLowerCase().includes(lowerQuery) ||
    p.type.toLowerCase().includes(lowerQuery) ||
    p.tag.toLowerCase().includes(lowerQuery) ||
    p.excerpt.toLowerCase().includes(lowerQuery)
  );
}

// Filter properties by type
function filterByType(type) {
  if (type === 'All') return PROPERTIES_DATA;
  return PROPERTIES_DATA.filter(p => p.type === type);
}

// Get property types for filter
function getPropertyTypes() {
  const types = [...new Set(PROPERTIES_DATA.map(p => p.type))];
  return ['All', ...types];
}
