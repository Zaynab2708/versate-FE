export interface Property {
  id: string;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  price: number;
  currency: string;
  location: string;
  locationFr: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: string;
  type: 'beachfront' | 'hillside' | 'residential' | 'agricultural' | 'commercial';
  status: 'for-sale' | 'for-rent' | 'sold';
  featured: boolean;
  new: boolean;
  images: string[];
  amenities: string[];
  yearBuilt: number;
  parking: number;
  agent: Agent;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  titleFr: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
  bioFr: string;
  properties: number;
  experience: number;
  languages: string[];
  specializations: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  roleFr: string;
  content: string;
  contentFr: string;
  image: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  titleFr: string;
  excerpt: string;
  excerptFr: string;
  content: string;
  contentFr: string;
  image: string;
  author: string;
  date: string;
  category: string;
  categoryFr: string;
  readTime: number;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Prime Beachfront Land - Grand Baie',
    titleFr: 'Terrain de Premier Choix - Grand Baie',
    description: 'Exceptional beachfront land parcel with 50 meters of pristine coastline. Perfect for building a luxury villa with direct ocean access. Utilities ready, building permits available.',
    descriptionFr: 'Parcelle de terrain exceptionnelle en bord de mer avec 50 mètres de côte vierge. Parfait pour construire une villa de luxe avec accès direct à l\'océan.',
    price: 4500000,
    currency: 'USD',
    location: 'Grand Baie, Mauritius',
    locationFr: 'Grand Baie, Maurice',
    address: 'Coastal Road, Grand Baie',
    bedrooms: 0,
    bathrooms: 0,
    area: 2500,
    areaUnit: 'sqm',
    type: 'beachfront',
    status: 'for-sale',
    featured: true,
    new: true,
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200',
      'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200',
    ],
    amenities: ['Beach Access', 'Utilities Ready', 'Building Permits', 'Clear Title', 'Road Access'],
    yearBuilt: 0,
    parking: 0,
    agent: {
      id: '1',
      name: 'Sophie Laurent',
      title: 'Senior Land Consultant',
      titleFr: 'Consultante Terrain Senior',
      email: 'sophie@versate.com',
      phone: '+230 5XXX XXXX',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'With over 15 years of experience in Mauritian land sales, Sophie has helped countless clients find their perfect parcels.',
      bioFr: 'Avec plus de 15 ans d\'expérience dans la vente de terrains à Maurice, Sophie a aidé de nombreux clients à trouver leurs parcelles parfaites.',
      properties: 45,
      experience: 15,
      languages: ['English', 'French', 'Creole'],
      specializations: ['Beachfront Land', 'Premium Parcels'],
    },
  },
  {
    id: '2',
    title: 'Panoramic Hillside Plot - Tamarin',
    titleFr: 'Parcelle Colline Panoramique - Tamarin',
    description: 'Stunning hillside land with 360-degree views of mountains and ocean. Gentle slope perfect for an architectural masterpiece. Quiet, exclusive neighborhood.',
    descriptionFr: 'Terrain de colline magnifique avec vue à 360 degrés sur les montagnes et l\'océan. Pente douce parfaite pour un chef-d\'œuvre architectural.',
    price: 2800000,
    currency: 'USD',
    location: 'Tamarin, Mauritius',
    locationFr: 'Tamarin, Maurice',
    address: 'Mountain View Heights, Tamarin',
    bedrooms: 0,
    bathrooms: 0,
    area: 4000,
    areaUnit: 'sqm',
    type: 'hillside',
    status: 'for-sale',
    featured: true,
    new: false,
    images: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200',
    ],
    amenities: ['Mountain Views', 'Ocean Views', 'Utilities Ready', 'Gated Community', 'Security'],
    yearBuilt: 0,
    parking: 0,
    agent: {
      id: '2',
      name: 'Marc Dubois',
      title: 'Land Investment Specialist',
      titleFr: 'Spécialiste Investissement Terrain',
      email: 'marc@versate.com',
      phone: '+230 5XXX XXXX',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: 'Marc specializes in premium hillside and mountain view land parcels across Mauritius.',
      bioFr: 'Marc se spécialise dans les parcelles de terrain premium en colline à travers Maurice.',
      properties: 38,
      experience: 12,
      languages: ['English', 'French'],
      specializations: ['Hillside Land', 'Investment Parcels'],
    },
  },
  {
    id: '3',
    title: 'Expansive Agricultural Land - Black River',
    titleFr: 'Vaste Terrain Agricole - Rivière Noire',
    description: 'Large agricultural land parcel perfect for farming, eco-tourism development, or subdivision. Rich soil, water access, and stunning natural surroundings.',
    descriptionFr: 'Grande parcelle de terrain agricole parfaite pour l\'agriculture, le développement éco-touristique ou le lotissement.',
    price: 1200000,
    currency: 'USD',
    location: 'Black River, Mauritius',
    locationFr: 'Rivière Noire, Maurice',
    address: 'Rural Road, Black River District',
    bedrooms: 0,
    bathrooms: 0,
    area: 50000,
    areaUnit: 'sqm',
    type: 'agricultural',
    status: 'for-sale',
    featured: true,
    new: true,
    images: [
      'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=1200',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200',
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200',
    ],
    amenities: ['Water Source', 'Fertile Soil', 'Road Access', 'Subdivision Potential', 'Mountain Views'],
    yearBuilt: 0,
    parking: 0,
    agent: {
      id: '1',
      name: 'Sophie Laurent',
      title: 'Senior Land Consultant',
      titleFr: 'Consultante Terrain Senior',
      email: 'sophie@versate.com',
      phone: '+230 5XXX XXXX',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'With over 15 years of experience in Mauritian land sales.',
      bioFr: 'Avec plus de 15 ans d\'expérience dans la vente de terrains à Maurice.',
      properties: 45,
      experience: 15,
      languages: ['English', 'French', 'Creole'],
      specializations: ['Beachfront Land', 'Premium Parcels'],
    },
  },
  {
    id: '4',
    title: 'Residential Plot - Flic en Flac',
    titleFr: 'Parcelle Résidentielle - Flic en Flac',
    description: 'Well-positioned residential land in the sought-after Flic en Flac area. Walking distance to beaches, shops, and restaurants. Ready for immediate development.',
    descriptionFr: 'Terrain résidentiel bien situé dans le quartier prisé de Flic en Flac. À distance de marche des plages, commerces et restaurants.',
    price: 850000,
    currency: 'USD',
    location: 'Flic en Flac, Mauritius',
    locationFr: 'Flic en Flac, Maurice',
    address: 'Palm Avenue, Flic en Flac',
    bedrooms: 0,
    bathrooms: 0,
    area: 1200,
    areaUnit: 'sqm',
    type: 'residential',
    status: 'for-sale',
    featured: false,
    new: true,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    ],
    amenities: ['Near Beach', 'All Utilities', 'Building Permits', 'Quiet Area', 'Near Amenities'],
    yearBuilt: 0,
    parking: 0,
    agent: {
      id: '3',
      name: 'Priya Naidoo',
      title: 'Land Consultant',
      titleFr: 'Consultante Terrain',
      email: 'priya@versate.com',
      phone: '+230 5XXX XXXX',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400',
      bio: 'Priya brings expertise in residential land sales and development opportunities.',
      bioFr: 'Priya apporte son expertise dans la vente de terrains résidentiels.',
      properties: 28,
      experience: 8,
      languages: ['English', 'French', 'Hindi'],
      specializations: ['Residential Land', 'Development Sites'],
    },
  },
  {
    id: '5',
    title: 'Commercial Development Site - Port Louis',
    titleFr: 'Site de Développement Commercial - Port Louis',
    description: 'Prime commercial land in the heart of Port Louis business district. Ideal for office building, retail complex, or mixed-use development.',
    descriptionFr: 'Terrain commercial de premier choix au cœur du quartier d\'affaires de Port Louis. Idéal pour immeuble de bureaux ou complexe commercial.',
    price: 5500000,
    currency: 'USD',
    location: 'Port Louis, Mauritius',
    locationFr: 'Port Louis, Maurice',
    address: 'Business District, Port Louis',
    bedrooms: 0,
    bathrooms: 0,
    area: 3500,
    areaUnit: 'sqm',
    type: 'commercial',
    status: 'for-sale',
    featured: true,
    new: false,
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
      'https://images.unsplash.com/photo-1464938050520-ef2571696b65?w=1200',
      'https://images.unsplash.com/photo-1577760258779-e787a1733016?w=1200',
    ],
    amenities: ['Prime Location', 'High Traffic', 'All Utilities', 'Commercial Zoning', 'Easy Access'],
    yearBuilt: 0,
    parking: 0,
    agent: {
      id: '2',
      name: 'Marc Dubois',
      title: 'Land Investment Specialist',
      titleFr: 'Spécialiste Investissement Terrain',
      email: 'marc@versate.com',
      phone: '+230 5XXX XXXX',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: 'Marc specializes in commercial and investment land opportunities.',
      bioFr: 'Marc se spécialise dans les opportunités de terrains commerciaux.',
      properties: 38,
      experience: 12,
      languages: ['English', 'French'],
      specializations: ['Commercial Land', 'Investment Sites'],
    },
  },
  {
    id: '6',
    title: 'Oceanview Parcel - Belle Mare',
    titleFr: 'Parcelle Vue Océan - Belle Mare',
    description: 'Exceptional oceanfront land parcel with unobstructed views of the turquoise lagoon. Perfect location for a luxury beachside estate.',
    descriptionFr: 'Parcelle de terrain exceptionnelle en bord de mer avec vue imprenable sur le lagon turquoise.',
    price: 3200000,
    currency: 'USD',
    location: 'Belle Mare, Mauritius',
    locationFr: 'Belle Mare, Maurice',
    address: 'Coastal Road, Belle Mare',
    bedrooms: 0,
    bathrooms: 0,
    area: 3000,
    areaUnit: 'sqm',
    type: 'beachfront',
    status: 'for-sale',
    featured: false,
    new: false,
    images: [
      'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200',
    ],
    amenities: ['Beach Access', 'Lagoon View', 'Utilities Ready', 'Building Permits', 'Clear Title'],
    yearBuilt: 0,
    parking: 0,
    agent: {
      id: '1',
      name: 'Sophie Laurent',
      title: 'Senior Land Consultant',
      titleFr: 'Consultante Terrain Senior',
      email: 'sophie@versate.com',
      phone: '+230 5XXX XXXX',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'With over 15 years of experience in Mauritian land sales.',
      bioFr: 'Avec plus de 15 ans d\'expérience dans la vente de terrains.',
      properties: 45,
      experience: 15,
      languages: ['English', 'French', 'Creole'],
      specializations: ['Beachfront Land', 'Premium Parcels'],
    },
  },
];

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Sophie Laurent',
    title: 'Senior Property Consultant',
    titleFr: 'Consultante Immobilière Senior',
    email: 'sophie@versate.com',
    phone: '+230 5XXX XXXX',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    bio: 'With over 15 years of experience in luxury real estate, Sophie has helped countless clients find their dream properties across Mauritius. Her deep knowledge of the market and commitment to excellence makes her the go-to consultant for discerning buyers.',
    bioFr: 'Avec plus de 15 ans d\'expérience dans l\'immobilier de luxe, Sophie a aidé de nombreux clients à trouver leurs propriétés de rêve à travers Maurice.',
    properties: 45,
    experience: 15,
    languages: ['English', 'French', 'Creole'],
    specializations: ['Luxury Villas', 'Waterfront Properties', 'Investment Advisory'],
  },
  {
    id: '2',
    name: 'Marc Dubois',
    title: 'Luxury Property Specialist',
    titleFr: 'Spécialiste Propriétés de Luxe',
    email: 'marc@versate.com',
    phone: '+230 5XXX XXXX',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    bio: 'Marc specializes in high-end penthouses and apartments in prime urban locations. His architectural background gives him unique insights into property value and potential.',
    bioFr: 'Marc se spécialise dans les penthouses et appartements haut de gamme dans les emplacements urbains de premier ordre.',
    properties: 38,
    experience: 12,
    languages: ['English', 'French'],
    specializations: ['Penthouses', 'Urban Luxury', 'New Developments'],
  },
  {
    id: '3',
    name: 'Priya Naidoo',
    title: 'Property Consultant',
    titleFr: 'Consultante Immobilière',
    email: 'priya@versate.com',
    phone: '+230 5XXX XXXX',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400',
    bio: 'Priya brings a fresh perspective to luxury real estate with her background in hospitality and tourism. She excels at matching international clients with their perfect Mauritius retreat.',
    bioFr: 'Priya apporte une perspective nouvelle à l\'immobilier de luxe avec son expérience en hôtellerie et tourisme.',
    properties: 28,
    experience: 8,
    languages: ['English', 'French', 'Hindi'],
    specializations: ['Apartments', 'Investment Properties', 'Holiday Homes'],
  },
  {
    id: '4',
    name: 'Jean-Pierre Morel',
    title: 'Estate Director',
    titleFr: 'Directeur Immobilier',
    email: 'jp@versate.com',
    phone: '+230 5XXX XXXX',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    bio: 'As Estate Director, Jean-Pierre oversees our portfolio of exclusive estates and manages relationships with high-net-worth clients seeking trophy properties.',
    bioFr: 'En tant que Directeur Immobilier, Jean-Pierre supervise notre portefeuille de domaines exclusifs.',
    properties: 52,
    experience: 20,
    languages: ['English', 'French', 'German'],
    specializations: ['Estates', 'Land Development', 'Private Sales'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'James & Victoria Chen',
    role: 'Villa Owners',
    roleFr: 'Propriétaires de Villa',
    content: 'Versate made our dream of owning a beachfront villa in Mauritius a reality. Their attention to detail and understanding of our needs was exceptional.',
    contentFr: 'Versate a réalisé notre rêve de posséder une villa en bord de mer à Maurice. Leur attention aux détails était exceptionnelle.',
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marie-Claire Fontaine',
    role: 'Investment Client',
    roleFr: 'Cliente Investissement',
    content: 'The team at Versate provided invaluable guidance for my property portfolio. Their market knowledge is unparalleled.',
    contentFr: 'L\'équipe de Versate m\'a fourni des conseils inestimables pour mon portefeuille immobilier.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
    rating: 5,
  },
  {
    id: '3',
    name: 'Robert Anderson',
    role: 'International Buyer',
    roleFr: 'Acheteur International',
    content: 'From London to Mauritius, Versate handled everything seamlessly. A truly professional and luxurious experience.',
    contentFr: 'De Londres à Maurice, Versate a tout géré parfaitement. Une expérience vraiment professionnelle.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Rise of Luxury Real Estate in Mauritius',
    titleFr: 'L\'Essor de l\'Immobilier de Luxe à Maurice',
    excerpt: 'Discover why Mauritius has become the premier destination for luxury property investment in the Indian Ocean.',
    excerptFr: 'Découvrez pourquoi Maurice est devenue la destination de choix pour l\'investissement immobilier de luxe.',
    content: 'Full article content here...',
    contentFr: 'Contenu complet de l\'article ici...',
    image: 'https://images.unsplash.com/photo-1589979481223-deb893043163?w=1200',
    author: 'Sophie Laurent',
    date: '2024-01-15',
    category: 'Market Insights',
    categoryFr: 'Analyse du Marché',
    readTime: 5,
  },
  {
    id: '2',
    title: 'Designing Your Dream Island Villa',
    titleFr: 'Concevoir Votre Villa de Rêve',
    excerpt: 'Expert tips on creating the perfect tropical luxury residence that blends with the natural environment.',
    excerptFr: 'Conseils d\'experts pour créer la résidence tropicale parfaite.',
    content: 'Full article content here...',
    contentFr: 'Contenu complet de l\'article ici...',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
    author: 'Marc Dubois',
    date: '2024-01-10',
    category: 'Design',
    categoryFr: 'Design',
    readTime: 7,
  },
  {
    id: '3',
    title: 'Investment Opportunities in 2024',
    titleFr: 'Opportunités d\'Investissement en 2024',
    excerpt: 'Our comprehensive guide to the most promising real estate investment opportunities this year.',
    excerptFr: 'Notre guide complet des opportunités d\'investissement immobilier les plus prometteuses.',
    content: 'Full article content here...',
    contentFr: 'Contenu complet de l\'article ici...',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200',
    author: 'Jean-Pierre Morel',
    date: '2024-01-05',
    category: 'Investment',
    categoryFr: 'Investissement',
    readTime: 8,
  },
];

export const categories = [
  { id: 'beachfront', name: 'Beachfront', nameFr: 'Bord de Mer', count: 12, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800' },
  { id: 'hillside', name: 'Hillside', nameFr: 'Colline', count: 15, image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800' },
  { id: 'residential', name: 'Residential', nameFr: 'Résidentiel', count: 18, image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800' },
  { id: 'agricultural', name: 'Agricultural', nameFr: 'Agricole', count: 8, image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800' },
  { id: 'commercial', name: 'Commercial', nameFr: 'Commercial', count: 6, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800' },
];

export const statistics = [
  { value: '50+', label: 'Land Parcels Available', labelFr: 'Parcelles Disponibles' },
  { value: '200+', label: 'Hectares of Land', labelFr: 'Hectares de Terrain' },
  { value: '100%', label: 'Verified Titles', labelFr: 'Titres Vérifiés' },
  { value: '98%', label: 'Client Satisfaction', labelFr: 'Satisfaction Client' },
];
