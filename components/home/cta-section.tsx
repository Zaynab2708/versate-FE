'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/mauritius-land-aerial.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-px bg-accent mb-8 mx-auto"
          />
          
          <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4">
            {t('Get Started', 'Commencez')}
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-foreground text-balance leading-[1.1]">
            {t(
              'Ready to Own Your Piece of Paradise?',
              'Prêt à Posséder Votre Coin de Paradis?'
            )}
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            {t(
              'Let us guide you through the process of finding and acquiring the perfect land parcel in Mauritius for your dream project.',
              'Laissez-nous vous guider dans le processus de recherche et d\'acquisition de la parcelle parfaite à Maurice pour votre projet de rêve.'
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-3 group px-8 h-12">
                {t('Browse Land Plots', 'Parcourir les Terrains')}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 px-8 h-12"
              >
                {t('Contact Us', 'Nous Contacter')}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-px h-32 bg-gradient-to-t from-accent/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-px h-32 bg-gradient-to-t from-accent/30 to-transparent" />
    </section>
  );
}
