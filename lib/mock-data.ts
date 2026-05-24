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
  type: 'villa' | 'apartment' | 'penthouse' | 'estate' | 'land';
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
    title: 'Oceanfront Villa Paradise',
    titleFr: 'Villa Paradis Face à l\'Océan',
    description: 'Experience ultimate luxury in this stunning oceanfront villa featuring panoramic views, private beach access, and world-class amenities. This architectural masterpiece combines modern design with timeless elegance.',
    descriptionFr: 'Découvrez le luxe ultime dans cette superbe villa face à l\'océan avec vue panoramique, accès privé à la plage et équipements de classe mondiale.',
    price: 4500000,
    currency: 'USD',
    location: 'Grand Baie, Mauritius',
    locationFr: 'Grand Baie, Maurice',
    address: '123 Coastal Drive, Grand Baie',
    bedrooms: 6,
    bathrooms: 7,
    area: 850,
    areaUnit: 'sqm',
    type: 'villa',
    status: 'for-sale',
    featured: true,
    new: true,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
    ],
    amenities: ['Pool', 'Private Beach', 'Home Theater', 'Wine Cellar', 'Smart Home', 'Gym', 'Spa'],
    yearBuilt: 2023,
    parking: 4,
    agent: {
      id: '1',
      name: 'Sophie Laurent',
      title: 'Senior Property Consultant',
      titleFr: 'Consultante Immobilière Senior',
      email: 'sophie@versate.com',
      phone: '+230 5XXX XXXX',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'With over 15 years of experience in luxury real estate, Sophie has helped countless clients find their dream properties.',
      bioFr: 'Avec plus de 15 ans d\'expérience dans l\'immobilier de luxe, Sophie a aidé de nombreux clients à trouver leurs propriétés de rêve.',
      properties: 45,
      experience: 15,
      languages: ['English', 'French', 'Creole'],
      specializations: ['Luxury Villas', 'Waterfront Properties'],
    },
  },
  {
    id: '2',
    title: 'Modern Penthouse Suite',
    titleFr: 'Suite Penthouse Moderne',
    description: 'A breathtaking penthouse offering 360-degree views of the city and ocean. Features include floor-to-ceiling windows, a rooftop terrace, and premium finishes throughout.',
    descriptionFr: 'Un penthouse époustouflant offrant une vue à 360 degrés sur la ville et l\'océan.',
    price: 2800000,
    currency: 'USD',
    location: 'Port Louis, Mauritius',
    locationFr: 'Port Louis, Maurice',
    address: '456 Marina Tower, Port Louis',
    bedrooms: 4,
    bathrooms: 4,
    area: 420,
    areaUnit: 'sqm',
    type: 'penthouse',
    status: 'for-sale',
    featured: true,
    new: false,
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
      'https://images.unsplash.com/photo-1600573472591-ee6c563aaec4?w=1200',
    ],
    amenities: ['Rooftop Pool', 'Concierge', 'Private Elevator', 'Smart Home', 'Wine Room'],
    yearBuilt: 2022,
    parking: 3,
    agent: {
      id: '2',
      name: 'Marc Dubois',
      title: 'Luxury Property Specialist',
      titleFr: 'Spécialiste Propriétés de Luxe',
      email: 'marc@versate.com',
      phone: '+230 5XXX XXXX',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: 'Marc specializes in high-end penthouses and apartments in prime urban locations.',
      bioFr: 'Marc se spécialise dans les penthouses et appartements haut de gamme.',
      properties: 38,
      experience: 12,
      languages: ['English', 'French'],
      specializations: ['Penthouses', 'Urban Luxury'],
    },
  },
  {
    id: '3',
    title: 'Tropical Garden Estate',
    titleFr: 'Domaine Jardin Tropical',
    description: 'An expansive estate set within lush tropical gardens. This property offers complete privacy, multiple living pavilions, and stunning mountain views.',
    descriptionFr: 'Un vaste domaine niché dans des jardins tropicaux luxuriants.',
    price: 6200000,
    currency: 'USD',
    location: 'Tamarin, Mauritius',
    locationFr: 'Tamarin, Maurice',
    address: '789 Mountain View Road, Tamarin',
    bedrooms: 8,
    bathrooms: 9,
    area: 1200,
    areaUnit: 'sqm',
    type: 'estate',
    status: 'for-sale',
    featured: true,
    new: true,
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200',
    ],
    amenities: ['Tennis Court', 'Pool', 'Guest House', 'Orchard', 'Staff Quarters', 'Helipad'],
    yearBuilt: 2021,
    parking: 6,
    agent: {
      id: '1',
      name: 'Sophie Laurent',
      title: 'Senior Property Consultant',
      titleFr: 'Consultante Immobilière Senior',
      email: 'sophie@versate.com',
      phone: '+230 5XXX XXXX',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'With over 15 years of experience in luxury real estate.',
      bioFr: 'Avec plus de 15 ans d\'expérience dans l\'immobilier de luxe.',
      properties: 45,
      experience: 15,
      languages: ['English', 'French', 'Creole'],
      specializations: ['Luxury Villas', 'Waterfront Properties'],
    },
  },
  {
    id: '4',
    title: 'Beachfront Luxury Apartment',
    titleFr: 'Appartement de Luxe en Bord de Mer',
    description: 'A sophisticated apartment with direct beach access and contemporary interiors designed by renowned architects.',
    descriptionFr: 'Un appartement sophistiqué avec accès direct à la plage.',
    price: 1500000,
    currency: 'USD',
    location: 'Flic en Flac, Mauritius',
    locationFr: 'Flic en Flac, Maurice',
    address: '321 Beach Boulevard, Flic en Flac',
    bedrooms: 3,
    bathrooms: 3,
    area: 280,
    areaUnit: 'sqm',
    type: 'apartment',
    status: 'for-sale',
    featured: false,
    new: true,
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1600573472591-ee6c563aaec4?w=1200',
    ],
    amenities: ['Beach Access', 'Pool', 'Gym', 'Concierge', '24/7 Security'],
    yearBuilt: 2023,
    parking: 2,
    agent: {
      id: '3',
      name: 'Priya Naidoo',
      title: 'Property Consultant',
      titleFr: 'Consultante Immobilière',
      email: 'priya@versate.com',
      phone: '+230 5XXX XXXX',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400',
      bio: 'Priya brings a fresh perspective to luxury real estate.',
      bioFr: 'Priya apporte une perspective nouvelle à l\'immobilier de luxe.',
      properties: 28,
      experience: 8,
      languages: ['English', 'French', 'Hindi'],
      specializations: ['Apartments', 'Investment Properties'],
    },
  },
  {
    id: '5',
    title: 'Hillside Contemporary Villa',
    titleFr: 'Villa Contemporaine sur la Colline',
    description: 'A stunning contemporary villa perched on the hillside with breathtaking sunset views and infinity pool.',
    descriptionFr: 'Une superbe villa contemporaine perchée sur la colline.',
    price: 3200000,
    currency: 'USD',
    location: 'Black River, Mauritius',
    locationFr: 'Rivière Noire, Maurice',
    address: '555 Sunset Heights, Black River',
    bedrooms: 5,
    bathrooms: 5,
    area: 550,
    areaUnit: 'sqm',
    type: 'villa',
    status: 'for-sale',
    featured: true,
    new: false,
    images: [
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1200',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200',
    ],
    amenities: ['Infinity Pool', 'Home Office', 'Cinema Room', 'Wine Cellar', 'Smart Home'],
    yearBuilt: 2022,
    parking: 3,
    agent: {
      id: '2',
      name: 'Marc Dubois',
      title: 'Luxury Property Specialist',
      titleFr: 'Spécialiste Propriétés de Luxe',
      email: 'marc@versate.com',
      phone: '+230 5XXX XXXX',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: 'Marc specializes in high-end properties.',
      bioFr: 'Marc se spécialise dans les propriétés haut de gamme.',
      properties: 38,
      experience: 12,
      languages: ['English', 'French'],
      specializations: ['Penthouses', 'Urban Luxury'],
    },
  },
  {
    id: '6',
    title: 'Prime Development Land',
    titleFr: 'Terrain de Premier Choix',
    description: 'Exceptional oceanfront land parcel perfect for a private estate or boutique development.',
    descriptionFr: 'Parcelle de terrain exceptionnelle en bord de mer.',
    price: 2000000,
    currency: 'USD',
    location: 'Belle Mare, Mauritius',
    locationFr: 'Belle Mare, Maurice',
    address: 'Coastal Road, Belle Mare',
    bedrooms: 0,
    bathrooms: 0,
    area: 5000,
    areaUnit: 'sqm',
    type: 'land',
    status: 'for-sale',
    featured: false,
    new: false,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200',
    ],
    amenities: ['Beach Access', 'Utilities Ready', 'Building Permits'],
    yearBuilt: 0,
    parking: 0,
    agent: {
      id: '1',
      name: 'Sophie Laurent',
      title: 'Senior Property Consultant',
      titleFr: 'Consultante Immobilière Senior',
      email: 'sophie@versate.com',
      phone: '+230 5XXX XXXX',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'With over 15 years of experience.',
      bioFr: 'Avec plus de 15 ans d\'expérience.',
      properties: 45,
      experience: 15,
      languages: ['English', 'French', 'Creole'],
      specializations: ['Luxury Villas', 'Waterfront Properties'],
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
  { id: 'villa', name: 'Luxury Villas', nameFr: 'Villas de Luxe', count: 24, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800' },
  { id: 'apartment', name: 'Apartments', nameFr: 'Appartements', count: 18, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800' },
  { id: 'penthouse', name: 'Penthouses', nameFr: 'Penthouses', count: 8, image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800' },
  { id: 'estate', name: 'Estates', nameFr: 'Domaines', count: 6, image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800' },
  { id: 'land', name: 'Land', nameFr: 'Terrains', count: 12, image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800' },
];

export const statistics = [
  { value: '500+', label: 'Properties Sold', labelFr: 'Propriétés Vendues' },
  { value: '$2B+', label: 'Total Sales Volume', labelFr: 'Volume Total des Ventes' },
  { value: '15+', label: 'Years Experience', labelFr: 'Années d\'Expérience' },
  { value: '98%', label: 'Client Satisfaction', labelFr: 'Satisfaction Client' },
];
