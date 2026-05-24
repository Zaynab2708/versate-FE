'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, MapPin, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';
import { useFavorites } from '@/lib/favorites-context';
import { properties } from '@/lib/mock-data';

function LuxuryPropertyCard({ property, index }: { property: typeof properties[0]; index: number }) {
  const { t } = useLanguage();
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(property.id);

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `Rs ${(price / 1000000).toFixed(1)}M`;
    }
    return `Rs ${price.toLocaleString()}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={`/properties/${property.id}`}>
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-card">
          <Image
            src={property.images[0] || '/images/land-plot-1.jpg'}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Watermark overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <span className="text-4xl font-serif text-white/50 tracking-[0.3em]">VERSATE</span>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(property.id);
          }}
          className="absolute top-4 left-4 z-10"
        >
          <Heart 
            className={`h-6 w-6 transition-colors ${
              favorite ? 'fill-accent text-accent' : 'text-white hover:text-accent'
            }`} 
          />
        </button>

        {/* Content */}
        <div className="pt-4">
          <h3 className="text-lg font-serif font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
            {t(property.title, property.titleFr)}
          </h3>
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
            <MapPin className="h-3.5 w-3.5" />
            {t(property.location, property.locationFr)}
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <Maximize2 className="h-3.5 w-3.5" />
              {property.area.toLocaleString()} {property.areaUnit}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-accent">
              {formatPrice(property.price)}
            </span>
            <span className="text-xs text-muted-foreground">
              Ref. {property.id.toUpperCase()}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function LuxuryCollectionSection() {
  const { t } = useLanguage();
  // Get premium/luxury properties (highest priced)
  const luxuryProperties = [...properties]
    .sort((a, b) => b.price - a.price)
    .slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-card relative overflow-hidden">
      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4">
            {t('Premium Collection', 'Collection Premium')}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            {t('Versate Premium Collection', 'Collection Premium Versate')}
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-muted-foreground leading-relaxed">
            {t(
              'Step into a world of refined elegance and exceptional investment with Versate\'s Premium Collection. This exclusive selection of prestigious land plots represents the finest opportunities curated for discerning buyers seeking unparalleled quality in Mauritius. From prime beachfront parcels to strategic commercial zones with exceptional views, our Premium Collection showcases properties that are accessible to both Mauritians and international buyers in extraordinary locations, catering to those who demand the finest.',
              'Entrez dans un monde d\'élégance raffinée et d\'investissement exceptionnel avec la Collection Premium de Versate. Cette sélection exclusive de parcelles de terrain prestigieuses représente les meilleures opportunités organisées pour les acheteurs exigeants à la recherche d\'une qualité inégalée à Maurice.'
            )}
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {luxuryProperties.map((property, index) => (
            <LuxuryPropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link href="/properties?collection=premium">
            <Button 
              className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 px-8"
            >
              {t('Explore the Collection', 'Explorer la Collection')}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
}
