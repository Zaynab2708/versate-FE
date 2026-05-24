'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { categories } from '@/lib/mock-data';

export function PropertyCategories() {
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

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
                {t('Browse By', 'Parcourir Par')}
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1]">
                {t('Land', 'Catégories de')}
                <br />
                <span className="text-foreground/60">{t('Categories', 'Terrains')}</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
              {t(
                'Find the perfect land type that matches your vision and investment goals.',
                'Trouvez le type de terrain parfait qui correspond à votre vision et vos objectifs.'
              )}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/properties?type=${category.id}`}
                className="group relative block aspect-[3/4] rounded-xl overflow-hidden bg-card"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-foreground group-hover:text-accent transition-colors duration-300">
                    {t(category.name, category.nameFr)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.count} {t('Plots', 'Parcelles')}
                  </p>
                </div>
                <div className="absolute inset-0 border border-foreground/5 group-hover:border-accent/50 transition-colors duration-300 rounded-xl" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
