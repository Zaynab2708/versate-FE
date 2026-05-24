'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { categories } from '@/lib/mock-data';

export function PropertyCategories() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            {t('Browse By', 'Parcourir Par')}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            {t('Property Categories', 'Catégories de Propriétés')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              'Find the perfect property type that matches your lifestyle and preferences.',
              'Trouvez le type de propriété parfait qui correspond à votre style de vie.'
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={`/properties?type=${category.id}`}
                className="group relative block aspect-[3/4] rounded-xl overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-white text-center">
                  <h3 className="text-lg md:text-xl font-semibold mb-1">
                    {t(category.name, category.nameFr)}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {category.count} {t('Properties', 'Propriétés')}
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent transition-colors rounded-xl" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
