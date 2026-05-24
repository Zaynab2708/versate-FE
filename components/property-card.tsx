'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Maximize, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';
import { useFavorites } from '@/lib/favorites-context';
import type { Property } from '@/lib/mock-data';

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const { t } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: property.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden bg-card border-foreground/5 hover:border-foreground/10 transition-all duration-500">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Link href={`/properties/${property.id}`}>
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Elegant hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          </Link>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {property.featured && (
              <Badge className="bg-accent text-accent-foreground font-medium text-xs tracking-wider">
                {t('Featured', 'En Vedette')}
              </Badge>
            )}
            {property.new && (
              <Badge className="bg-foreground/90 text-background font-medium text-xs tracking-wider">
                {t('New', 'Nouveau')}
              </Badge>
            )}
          </div>

          {/* Favorite Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-4 right-4 bg-background/20 backdrop-blur-md hover:bg-background/40 rounded-full border border-foreground/10 transition-all duration-300 ${
              isFavorite(property.id) ? 'text-red-400' : 'text-foreground/80'
            }`}
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(property.id);
            }}
          >
            <Heart className={`h-4 w-4 ${isFavorite(property.id) ? 'fill-current' : ''}`} />
          </Button>

          {/* Price Tag */}
          <div className="absolute bottom-4 left-4">
            <div className="bg-background/90 backdrop-blur-md text-foreground px-4 py-2 rounded-lg font-semibold border border-foreground/10">
              {formatPrice(property.price)}
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          {/* Property Type */}
          <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-3">
            {property.type}
          </p>

          {/* Title */}
          <Link href={`/properties/${property.id}`}>
            <h3 className="text-xl font-serif font-semibold mb-3 line-clamp-1 text-foreground group-hover:text-accent transition-colors duration-300">
              {t(property.title, property.titleFr)}
            </h3>
          </Link>

          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground mb-5">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="text-sm">{t(property.location, property.locationFr)}</span>
          </div>

          {/* Features - Land focused (area only) */}
          <div className="flex items-center gap-2 pt-5 border-t border-foreground/5">
            <Maximize className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">{property.area.toLocaleString()} {property.areaUnit}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
