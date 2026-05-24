'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, Grid3X3, List, X } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PropertyCard } from '@/components/property-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import { useLanguage } from '@/lib/language-context';
import { properties } from '@/lib/mock-data';

const propertyTypes = [
  { value: 'villa', label: 'Villa', labelFr: 'Villa' },
  { value: 'apartment', label: 'Apartment', labelFr: 'Appartement' },
  { value: 'penthouse', label: 'Penthouse', labelFr: 'Penthouse' },
  { value: 'estate', label: 'Estate', labelFr: 'Domaine' },
  { value: 'land', label: 'Land', labelFr: 'Terrain' },
];

const locations = [
  'Grand Baie',
  'Port Louis',
  'Tamarin',
  'Flic en Flac',
  'Belle Mare',
  'Black River',
];

export default function PropertiesPage() {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 500000000]);
  const [bedroomsMin, setBedroomsMin] = useState('');

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Type filter
    if (selectedTypes.length > 0) {
      result = result.filter((p) => selectedTypes.includes(p.type));
    }

    // Location filter
    if (selectedLocations.length > 0) {
      result = result.filter((p) =>
        selectedLocations.some((loc) => p.location.includes(loc))
      );
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Bedrooms filter
    if (bedroomsMin) {
      result = result.filter((p) => p.bedrooms >= parseInt(bedroomsMin));
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
    }

    return result;
  }, [searchQuery, sortBy, selectedTypes, selectedLocations, priceRange, bedroomsMin]);

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleLocation = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTypes([]);
    setSelectedLocations([]);
    setPriceRange([0, 500000000]);
    setBedroomsMin('');
  };

  const hasActiveFilters =
    searchQuery ||
    selectedTypes.length > 0 ||
    selectedLocations.length > 0 ||
    priceRange[0] > 0 ||
    priceRange[1] < 500000000 ||
    bedroomsMin;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Property Type */}
      <div>
        <Label className="text-base font-semibold mb-4 block">
          {t('Property Type', 'Type de Propriété')}
        </Label>
        <div className="space-y-3">
          {propertyTypes.map((type) => (
            <div key={type.value} className="flex items-center gap-3">
              <Checkbox
                id={type.value}
                checked={selectedTypes.includes(type.value)}
                onCheckedChange={() => toggleType(type.value)}
              />
              <label htmlFor={type.value} className="text-sm cursor-pointer">
                {t(type.label, type.labelFr)}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Location */}
      <div>
        <Label className="text-base font-semibold mb-4 block">
          {t('Location', 'Localisation')}
        </Label>
        <div className="space-y-3">
          {locations.map((location) => (
            <div key={location} className="flex items-center gap-3">
              <Checkbox
                id={location}
                checked={selectedLocations.includes(location)}
                onCheckedChange={() => toggleLocation(location)}
              />
              <label htmlFor={location} className="text-sm cursor-pointer">
                {location}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <Label className="text-base font-semibold mb-4 block">
          {t('Price Range', 'Gamme de Prix')}
        </Label>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={500000000}
            step={5000000}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Rs {(priceRange[0] / 1000000).toFixed(0)}M</span>
            <span>Rs {(priceRange[1] / 1000000).toFixed(0)}M</span>
          </div>
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <Label className="text-base font-semibold mb-4 block">
          {t('Minimum Bedrooms', 'Chambres Minimum')}
        </Label>
        <Select value={bedroomsMin} onValueChange={setBedroomsMin}>
          <SelectTrigger>
            <SelectValue placeholder={t('Any', 'Tous')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">{t('Any', 'Tous')}</SelectItem>
            <SelectItem value="1">1+</SelectItem>
            <SelectItem value="2">2+</SelectItem>
            <SelectItem value="3">3+</SelectItem>
            <SelectItem value="4">4+</SelectItem>
            <SelectItem value="5">5+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button variant="outline" onClick={clearFilters} className="w-full">
          {t('Clear All Filters', 'Effacer les Filtres')}
        </Button>
      )}
    </div>
  );

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {t('Our Properties', 'Nos Propriétés')}
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              {t(
                'Explore our exclusive collection of luxury properties in Mauritius',
                'Découvrez notre collection exclusive de propriétés de luxe à Maurice'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 bg-card rounded-xl border border-border p-6">
                <h2 className="text-lg font-semibold mb-6">
                  {t('Filters', 'Filtres')}
                </h2>
                <FilterContent />
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1">
              {/* Search and Controls */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder={t('Search properties...', 'Rechercher des propriétés...')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="flex gap-2">
                  {/* Mobile Filter Button */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden gap-2">
                        <SlidersHorizontal className="h-4 w-4" />
                        {t('Filters', 'Filtres')}
                        {hasActiveFilters && (
                          <span className="ml-1 px-1.5 py-0.5 bg-accent text-accent-foreground text-xs rounded-full">
                            !
                          </span>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80 overflow-y-auto">
                      <SheetHeader>
                        <SheetTitle>{t('Filters', 'Filtres')}</SheetTitle>
                        <SheetDescription>
                          {t('Refine your property search', 'Affinez votre recherche')}
                        </SheetDescription>
                      </SheetHeader>
                      <div className="mt-6">
                        <FilterContent />
                      </div>
                    </SheetContent>
                  </Sheet>

                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[160px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">{t('Newest', 'Plus Récent')}</SelectItem>
                      <SelectItem value="price-asc">{t('Price: Low to High', 'Prix: Croissant')}</SelectItem>
                      <SelectItem value="price-desc">{t('Price: High to Low', 'Prix: Décroissant')}</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Toggle */}
                  <div className="hidden sm:flex border border-border rounded-md">
                    <Button
                      variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                      size="icon"
                      onClick={() => setViewMode('grid')}
                      className="rounded-r-none"
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                      size="icon"
                      onClick={() => setViewMode('list')}
                      className="rounded-l-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Active Filters Tags */}
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedTypes.map((type) => (
                    <span
                      key={type}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {type}
                      <button onClick={() => toggleType(type)}>
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  {selectedLocations.map((location) => (
                    <span
                      key={location}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {location}
                      <button onClick={() => toggleLocation(location)}>
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}

              {/* Results Count */}
              <p className="text-muted-foreground mb-6">
                {filteredProperties.length} {t('properties found', 'propriétés trouvées')}
              </p>

              {/* Properties Grid/List */}
              {filteredProperties.length > 0 ? (
                <div
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                      : 'flex flex-col gap-6'
                  }
                >
                  {filteredProperties.map((property, index) => (
                    <PropertyCard key={property.id} property={property} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg mb-4">
                    {t('No properties found matching your criteria.', 'Aucune propriété trouvée correspondant à vos critères.')}
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    {t('Clear Filters', 'Effacer les Filtres')}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
