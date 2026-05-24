'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PropertyCard } from '@/components/property-card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';
import { useFavorites } from '@/lib/favorites-context';
import { properties } from '@/lib/mock-data';

export default function FavoritesPage() {
  const { t } = useLanguage();
  const { favorites } = useFavorites();

  const favoriteProperties = properties.filter((p) => favorites.includes(p.id));

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
              {t('My Favorites', 'Mes Favoris')}
            </h1>
            <p className="text-primary-foreground/80">
              {t(
                'Your curated collection of saved properties',
                'Votre collection personnelle de propriétés sauvegardées'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Favorites List */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {favoriteProperties.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-8">
                {favoriteProperties.length} {t('properties saved', 'propriétés sauvegardées')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {favoriteProperties.map((property, index) => (
                  <PropertyCard key={property.id} property={property} index={index} />
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-serif font-semibold mb-4">
                {t('No Favorites Yet', 'Aucun Favori')}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                {t(
                  'Start exploring our collection and save properties you love by clicking the heart icon.',
                  'Commencez à explorer notre collection et sauvegardez les propriétés que vous aimez en cliquant sur l\'icône coeur.'
                )}
              </p>
              <Link href="/properties">
                <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('Browse Properties', 'Parcourir les Propriétés')}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
