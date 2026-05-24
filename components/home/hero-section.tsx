'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Home, DollarSign, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/lib/language-context';

export function HeroSection() {
  const { t } = useLanguage();
  const [searchType, setSearchType] = useState('buy');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-4xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight mb-6 text-balance">
            {t(
              'Discover Luxury Living in Mauritius',
              'Découvrez le Luxe à Maurice'
            )}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            {t(
              'Experience the finest properties in paradise. From oceanfront villas to exclusive estates, find your dream home.',
              'Découvrez les plus belles propriétés du paradis. Des villas en bord de mer aux domaines exclusifs.'
            )}
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Search Type Tabs */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex bg-white/10 backdrop-blur-md rounded-full p-1">
              <button
                onClick={() => setSearchType('buy')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  searchType === 'buy'
                    ? 'bg-white text-primary'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {t('Buy', 'Acheter')}
              </button>
              <button
                onClick={() => setSearchType('rent')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  searchType === 'rent'
                    ? 'bg-white text-primary'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {t('Rent', 'Louer')}
              </button>
            </div>
          </div>

          {/* Search Form */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Location */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {t('Location', 'Localisation')}
                </label>
                <Select>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder={t('Select location', 'Choisir localisation')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grand-baie">Grand Baie</SelectItem>
                    <SelectItem value="port-louis">Port Louis</SelectItem>
                    <SelectItem value="tamarin">Tamarin</SelectItem>
                    <SelectItem value="flic-en-flac">Flic en Flac</SelectItem>
                    <SelectItem value="belle-mare">Belle Mare</SelectItem>
                    <SelectItem value="black-river">Black River</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Property Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  {t('Property Type', 'Type de Propriété')}
                </label>
                <Select>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder={t('Select type', 'Choisir type')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="villa">{t('Villa', 'Villa')}</SelectItem>
                    <SelectItem value="apartment">{t('Apartment', 'Appartement')}</SelectItem>
                    <SelectItem value="penthouse">{t('Penthouse', 'Penthouse')}</SelectItem>
                    <SelectItem value="estate">{t('Estate', 'Domaine')}</SelectItem>
                    <SelectItem value="land">{t('Land', 'Terrain')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  {t('Price Range', 'Gamme de Prix')}
                </label>
                <Select>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder={t('Select range', 'Choisir gamme')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-500000">$0 - $500,000</SelectItem>
                    <SelectItem value="500000-1000000">$500,000 - $1M</SelectItem>
                    <SelectItem value="1000000-2000000">$1M - $2M</SelectItem>
                    <SelectItem value="2000000-5000000">$2M - $5M</SelectItem>
                    <SelectItem value="5000000+">$5M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button className="w-full h-10 bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                  <Search className="h-4 w-4" />
                  {t('Search', 'Rechercher')}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
