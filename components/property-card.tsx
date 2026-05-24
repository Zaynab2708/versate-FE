'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Bed, Bath, Maximize, MapPin } from 'lucide-react';
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Link href={`/properties/${property.id}`}>
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </Link>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {property.featured && (
              <Badge className="bg-accent text-accent-foreground">
                {t('Featured', 'En Vedette')}
              </Badge>
            )}
            {property.new && (
              <Badge variant="secondary">
                {t('New', 'Nouveau')}
              </Badge>
            )}
          </div>

          {/* Favorite Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full ${
              isFavorite(property.id) ? 'text-red-500' : 'text-gray-600'
            }`}
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(property.id);
            }}
          >
            <Heart className={`h-5 w-5 ${isFavorite(property.id) ? 'fill-current' : ''}`} />
          </Button>

          {/* Price Tag */}
          <div className="absolute bottom-4 left-4">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold">
              {formatPrice(property.price)}
            </div>
          </div>
        </div>

        <CardContent className="p-5">
          {/* Property Type */}
          <p className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
            {property.type}
          </p>

          {/* Title */}
          <Link href={`/properties/${property.id}`}>
            <h3 className="text-xl font-serif font-semibold mb-2 line-clamp-1 group-hover:text-accent transition-colors">
              {t(property.title, property.titleFr)}
            </h3>
          </Link>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-muted-foreground mb-4">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{t(property.location, property.locationFr)}</span>
          </div>

          {/* Features */}
          {property.type !== 'land' && (
            <div className="flex items-center gap-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <Bed className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{property.bedrooms}</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{property.bathrooms}</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{property.area} {property.areaUnit}</span>
              </div>
            </div>
          )}
          {property.type === 'land' && (
            <div className="flex items-center gap-2 pt-4 border-t border-border">
              <Maximize className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">{property.area.toLocaleString()} {property.areaUnit}</span>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
