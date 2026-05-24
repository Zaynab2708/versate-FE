'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';

export function AboutSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t('Premium Locations', 'Emplacements Premium'),
      description: t(
        'Hand-selected land plots in the most desirable locations across Mauritius.',
        'Parcelles de terrain soigneusement sélectionnées dans les emplacements les plus prisés de Maurice.'
      ),
    },
    {
      icon: Users,
      title: t('Personal Service', 'Service Personnalisé'),
      description: t(
        'Dedicated guidance through every step of your land acquisition journey.',
        'Accompagnement dédié à chaque étape de votre acquisition de terrain.'
      ),
    },
    {
      icon: Building2,
      title: t('Verified Titles', 'Titres Vérifiés'),
      description: t(
        'All land plots come with clear titles and complete documentation.',
        'Tous les terrains sont accompagnés de titres clairs et d\'une documentation complète.'
      ),
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/mauritius-land-aerial.jpg"
                alt="Luxury Property"
                fill
                className="object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 md:bottom-8 md:-right-12 bg-accent text-accent-foreground p-8 rounded-2xl shadow-2xl max-w-[200px]"
            >
              <p className="text-5xl md:text-6xl font-bold mb-2">50+</p>
              <p className="text-sm font-medium opacity-90">
                {t('Land Parcels Available', 'Parcelles Disponibles')}
              </p>
            </motion.div>

            {/* Decorative corner */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-accent/30 rounded-tl-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-16 h-px bg-accent mb-8 origin-left"
            />

            <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4">
              {t('About Versate', 'À Propos de Versate')}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-[1.15]">
              {t(
                'Your Gateway to',
                'Votre Accès aux'
              )}
              <br />
              <span className="text-foreground/60">
                {t('Prime Mauritian Land', 'Terrains de Premier Choix')}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              {t(
                'Versate specializes in showcasing exceptional land parcels across Mauritius. Whether you\'re seeking a beachfront plot for your dream villa, a hillside retreat with panoramic views, or agricultural land for development, we offer carefully curated selections with verified titles and complete transparency.',
                'Versate se spécialise dans la présentation de parcelles de terrain exceptionnelles à travers Maurice. Que vous recherchiez un terrain en bord de mer, une retraite en colline avec vue panoramique, ou un terrain agricole, nous offrons des sélections soigneusement choisies avec titres vérifiés.'
              )}
            </p>

            {/* Features */}
            <div className="space-y-6 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <Button 
                size="lg" 
                className="gap-3 group bg-accent text-accent-foreground hover:bg-accent/90 px-8"
              >
                {t('Learn More About Us', 'En Savoir Plus')}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
