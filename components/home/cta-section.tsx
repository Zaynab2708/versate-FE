'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-primary-foreground max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            {t(
              'Ready to Find Your Dream Property?',
              'Prêt à Trouver Votre Propriété de Rêve?'
            )}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            {t(
              'Let our expert team guide you through the process of finding and acquiring the perfect luxury property in Mauritius.',
              'Laissez notre équipe d\'experts vous guider dans le processus de recherche et d\'acquisition de la propriété de luxe parfaite à Maurice.'
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 group">
                {t('Browse Properties', 'Parcourir les Propriétés')}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                {t('Contact Us', 'Nous Contacter')}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
