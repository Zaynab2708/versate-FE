'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PropertyCard } from '@/components/property-card';
import { useLanguage } from '@/lib/language-context';
import { properties } from '@/lib/mock-data';

export function FeaturedProperties() {
  const { t } = useLanguage();
  const featuredProperties = properties.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-px bg-accent mb-8 origin-left"
          />

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4">
                {t('Prime Selection', 'Sélection Premium')}
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1]">
                {t('Featured', 'Terrains')}
                <br />
                <span className="text-foreground/60">{t('Land Plots', 'en Vedette')}</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
              {t(
                'Explore our handpicked selection of the most exceptional land parcels currently available across Mauritius.',
                'Découvrez notre sélection des parcelles de terrain les plus exceptionnelles disponibles à Maurice.'
              )}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <Link href="/properties">
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-3 group border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 px-8"
            >
              {t('View All Land Plots', 'Voir Tous les Terrains')}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
