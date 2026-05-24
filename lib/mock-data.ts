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
    title: 'Prime Industrial Land - Riche Terre',
    titleFr: 'Terrain Industriel Premium - Riche Terre',
    description: 'Exceptional industrial land parcel in the Riche Terre Industrial Zone. Flat terrain with direct access to major highways. Utilities ready, zoning approved for manufacturing and warehousing.',
    descriptionFr: 'Parcelle de terrain industriel exceptionnelle dans la zone industrielle de Riche Terre. Terrain plat avec accès direct aux autoroutes principales.',
    price: 205000000,
    currency: 'MUR',
    location: 'Riche Terre, Mauritius',
    locationFr: 'Riche Terre, Maurice',
    address: 'Industrial Zone, Riche Terre',
    bedrooms: 0,
    bathrooms: 0,
    area: 5000,
    areaUnit: 'sqm',
    type: 'commercial',
    status: 'for-sale',
    featured: true,
    new: true,
    images: [
      '/images/land-plot-1.jpg',
      '/images/land-plot-2.jpg',
      '/images/land-plot-3.jpg',
    ],
    amenities: ['Highway Access', 'Utilities Ready', 'Industrial Zoning', 'Clear Title', 'Fenced'],
    yearBuilt: 0,
    parking: 0,
    agent: {
      id: '1',
      name: 'Sophie Laurent',
      title: 'Senior Land Consultant',
      titleFr: 'Consultante Terrain Senior',
      email: 'sophie@versate.com',
      phone: '+230 5XXX XXXX',
      image: '/images/agent-portrait.jpg',
      bio: 'With over 15 years of experience in Mauritian industrial land sales, Sophie has helped countless businesses find their perfect parcels.',
      bioFr: 'Avec plus de 15 ans d\'expérience dans la vente de terrains industriels à Maurice.',
      properties: 45,
      experience: 15,
      languages: ['English', 'French', 'Creole'],
      specializations: ['Industrial Land', 'Commercial Zones'],
    },
  },
  {
    id: '2',
    title: 'Industrial Plot - Phoenix',
    titleFr: 'Parcelle Industrielle - Phoenix',
    description: 'Strategic industrial land in the Phoenix Industrial Estate. Close to port facilities and major distribution centers. Ideal for logistics, warehousing, or manufacturing operations.',
    descriptionFr: 'Terrain industriel stratégique dans le domaine industriel de Phoenix. Proche des installations portuaires et des centres de distribution.',
    price: 128000000,
    currency: 'MUR',
    location: 'Phoenix, Mauritius',
    locationFr: 'Phoenix, Maurice',
    address: 'Industrial Estate, Phoenix',
    bedrooms: 0,
    bathrooms: 0,
    area: 4000,
    areaUnit: 'sqm',
    type: 'commercial',
    status: 'for-sale',
    featured: true,
    new: false,
    images: [
      '/images/land-plot-2.jpg',
      '/images/land-plot-4.jpg',
      '/images/land-plot-1.jpg',
    ],
    amenities: ['Port Access', 'Utilities Ready', 'Industrial Zoning', 'Security', 'Paved Roads'],
    yearBuilt: 0,
    parking: 0,
    agent: {
      id: '1',
      name: 'Sophie Laurent',
      title: 'Senior Land Consultant',
      titleFr: 'Consultante Terrain Senior',
      email: 'sophie@versate.com',
      phone: '+230 5XXX XXXX',
      image: '/images/agent-portrait.jpg',
      bio: 'With over 15 years of experience in Mauritian industrial land sales.',
      bioFr: 'Avec plus de 15 ans d\'expérience dans la vente de terrains industriels.',
      properties: 45,
      experience: 15,
      languages: ['English', 'French', 'Creole'],
      specializations: ['Industrial Land', 'Commercial Zones'],
    },
  },
  {
    id: '3',
    title: 'Warehouse Development Site - Coromandel',
    titleFr: 'Site de Développement Entrepôt - Coromandel',
    description: 'Large industrial land parcel perfect for warehouse development or distribution center. Excellent connectivity to the national road network and proximity to the capital.',
    descriptionFr: 'Grande parcelle de terrain industriel parfaite pour le développement d\'entrepôts ou de centres de distribution.',
    price: 55000000,
    currency: 'MUR',
    location: 'Coromandel, Mauritius',
    locationFr: 'Coromandel, Maurice',
    address: 'Industrial Road, Coromandel',
    bedrooms: 0,
    bathrooms: 0,
    area: 3500,
    areaUnit: 'sqm',
    type: 'commercial',
    status: 'for-sale',
    featured: true,
    new: true,
    images: [
      '/images/land-plot-3.jpg',
      '/images/land-plot-5.jpg',
      '/images/land-plot-6.jpg',
    ],
    amenities: ['Road Access', 'Utilities Available', 'Industrial Zoning', 'Flat Terrain', 'Near Port Louis'],
    yearBuilt: 0,
    parking: 0,
    agent: {
      id: '1',
      name: 'Sophie Laurent',
      title: 'Senior Land Consultant',
      titleFr: 'Consultante Terrain Senior',
      email: 'sophie@versate.com',
      phone: '+230 5XXX XXXX',
      image: '/images/agent-portrait.jpg',
      bio: 'With over 15 years of experience in Mauritian industrial land sales.',
      bioFr: 'Avec plus de 15 ans d\'expérience dans la vente de terrains industriels.',
      properties: 45,
      experience: 15,
      languages: ['English', 'French', 'Creole'],
      specializations: ['Industrial Land', 'Commercial Zones'],
    },
  },
  {
    id: '4',
    title: 'Manufacturing Zone Land - Goodlands',
    titleFr: 'Terrain Zone Manufacturière - Goodlands',
    description: 'Well-positioned industrial land in the Goodlands industrial corridor. Perfect for light manufacturing or assembly operations with good labor access.',
    descriptionFr: 'Terrain industriel bien situé dans le corridor industriel de Goodlands. Parfait pour la fabrication légère.',
    price: 39000000,
    currency: 'MUR',
    location: 'Goodlands, Mauritius',
    locationFr: 'Goodlands, Maurice',
    address: 'Industrial Corridor, Goodlands',
    bedrooms: 0,
    bathrooms: 0,
    area: 2500,
    areaUnit: 'sqm',
    type: 'commercial',
    status: 'for-sale',
    featured: false,
    new: true,
    images: [
      '/images/land-plot-4.jpg',
      '/images/land-plot-1.jpg',
      '/images/land-plot-2.jpg',
    ],
    amenities: ['Utilities Ready', 'Labor Access', 'Industrial Zoning', 'Quiet Area', 'Expandable'],
    yearBuilt: 0,
    parking: 0,
    agent: {
      id: '1',
      name: 'Sophie Laurent',
      title: 'Senior Land Consultant',
      titleFr: 'Consultante Terrain Senior',
      email: 'sophie@versate.com',
      phone: '+230 5XXX XXXX',
      image: '/images/agent-portrait.jpg',
      bio: 'With over 15 years of experience in Mauritian industrial land sales.',
      bioFr: 'Avec plus de 15 ans d\'expérience dans la vente de terrains industriels.',
      properties: 45,
      experience: 15,
      languages: ['English', 'French', 'Creole'],
      specializations: ['Industrial Land', 'Commercial Zones'],
    },
  },
  {
    id: '5',
    title: 'Premium Commercial Plot - Ebene',
    titleFr: 'Parcelle Commerciale Premium - Ebène',
    description: 'Prime industrial/commercial land in the Ebene Cybercity zone. Ideal for corporate headquarters, data centers, or tech-focused manufacturing. Modern infrastructure.',
    descriptionFr: 'Terrain industriel/commercial de premier choix dans la zone Cybercité d\'Ebène. Idéal pour sièges sociaux ou centres de données.',
    price: 251000000,
    currency: 'MUR',
    location: 'Ebene, Mauritius',
    locationFr: 'Ebène, Maurice',
    address: 'Cybercity Zone, Ebene',
    bedrooms: 0,
    bathrooms: 0,
    area: 6000,
    areaUnit: 'sqm',
    type: 'commercial',
    status: 'for-sale',
    featured: true,
    new: false,
    images: [
      '/images/land-plot-5.jpg',
      '/images/land-plot-6.jpg',
      '/images/land-plot-3.jpg',
    ],
    amenities: ['Prime Location', 'Fiber Optic', 'All Utilities', 'Commercial Zoning', 'Easy Access'],
    yearBuilt: 0,
    parking: 0,
    agent: {
      id: '1',
      name: 'Sophie Laurent',
      title: 'Senior Land Consultant',
      titleFr: 'Consultante Terrain Senior',
      email: 'sophie@versate.com',
      phone: '+230 5XXX XXXX',
      image: '/images/agent-portrait.jpg',
      bio: 'With over 15 years of experience in Mauritian industrial land sales.',
      bioFr: 'Avec plus de 15 ans d\'expérience dans la vente de terrains industriels.',
      properties: 45,
      experience: 15,
      languages: ['English', 'French', 'Creole'],
      specializations: ['Industrial Land', 'Commercial Zones'],
    },
  },
  {
    id: '6',
    title: 'Industrial Parcel - Jin Fei',
    titleFr: 'Parcelle Industrielle - Jin Fei',
    description: 'Strategic industrial land in the Jin Fei Economic Zone. Special economic zone benefits available. Excellent for export-oriented manufacturing.',
    descriptionFr: 'Terrain industriel stratégique dans la zone économique de Jin Fei. Avantages de zone économique spéciale disponibles.',
    price: 146000000,
    currency: 'MUR',
    location: 'Jin Fei, Mauritius',
    locationFr: 'Jin Fei, Maurice',
    address: 'Economic Zone, Jin Fei',
    bedrooms: 0,
    bathrooms: 0,
    area: 4500,
    areaUnit: 'sqm',
    type: 'commercial',
    status: 'for-sale',
    featured: false,
    new: false,
    images: [
      '/images/land-plot-6.jpg',
      '/images/land-plot-1.jpg',
      '/images/land-plot-4.jpg',
    ],
    amenities: ['SEZ Benefits', 'Port Access', 'Utilities Ready', 'Tax Incentives', 'Clear Title'],
    yearBuilt: 0,
    parking: 0,
    agent: {
      id: '1',
      name: 'Sophie Laurent',
      title: 'Senior Land Consultant',
      titleFr: 'Consultante Terrain Senior',
      email: 'sophie@versate.com',
      phone: '+230 5XXX XXXX',
      image: '/images/agent-portrait.jpg',
      bio: 'With over 15 years of experience in Mauritian industrial land sales.',
      bioFr: 'Avec plus de 15 ans d\'expérience dans la vente de terrains industriels.',
      properties: 45,
      experience: 15,
      languages: ['English', 'French', 'Creole'],
      specializations: ['Industrial Land', 'Commercial Zones'],
    },
  },
];

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Sophie Laurent',
    title: 'Senior Land Consultant',
    titleFr: 'Consultante Terrain Senior',
    email: 'sophie@versate.com',
    phone: '+230 5XXX XXXX',
    image: '/images/agent-portrait.jpg',
    bio: 'With over 15 years of experience in Mauritian industrial land sales, Sophie has helped countless businesses find their perfect parcels. Her deep knowledge of zoning regulations, industrial zones, and the Mauritian market makes her the go-to consultant for investors seeking premium industrial land opportunities.',
    bioFr: 'Avec plus de 15 ans d\'expérience dans la vente de terrains industriels à Maurice, Sophie a aidé de nombreuses entreprises à trouver leurs parcelles parfaites.',
    properties: 45,
    experience: 15,
    languages: ['English', 'French', 'Creole'],
    specializations: ['Industrial Land', 'Commercial Zones', 'SEZ Properties'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Raj Doorgakant',
    role: 'Manufacturing Director',
    roleFr: 'Directeur de Fabrication',
    content: 'Versate helped us secure the perfect industrial plot in Phoenix for our new manufacturing facility. Their knowledge of zoning and permits was invaluable.',
    contentFr: 'Versate nous a aidés à obtenir la parcelle industrielle parfaite à Phoenix pour notre nouvelle usine. Leur connaissance du zonage était inestimable.',
    image: '/images/agent-portrait.jpg',
    rating: 5,
  },
  {
    id: '2',
    name: 'Anushka Doobory',
    role: 'Business Owner',
    roleFr: 'Propriétaire d\'Entreprise',
    content: 'The team at Versate provided exceptional guidance for our warehouse development. Their market knowledge is unparalleled in Mauritius.',
    contentFr: 'L\'équipe de Versate nous a fourni des conseils exceptionnels pour notre développement d\'entrepôt.',
    image: '/images/agent-portrait.jpg',
    rating: 5,
  },
  {
    id: '3',
    name: 'Kevin Doorgakant',
    role: 'International Investor',
    roleFr: 'Investisseur International',
    content: 'From Singapore to Mauritius, Versate handled our industrial land acquisition seamlessly. A truly professional experience.',
    contentFr: 'De Singapour à Maurice, Versate a géré notre acquisition de terrain industriel parfaitement.',
    image: '/images/agent-portrait.jpg',
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
