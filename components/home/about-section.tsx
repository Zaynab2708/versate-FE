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
      title: t('Excellence', 'Excellence'),
      description: t(
        'Uncompromising quality and attention to detail in every transaction.',
        'Qualité sans compromis et attention aux détails dans chaque transaction.'
      ),
    },
    {
      icon: Users,
      title: t('Personal Service', 'Service Personnalisé'),
      description: t(
        'Dedicated agents providing tailored solutions for each client.',
        'Agents dévoués offrant des solutions sur mesure pour chaque client.'
      ),
    },
    {
      icon: Building2,
      title: t('Prime Properties', 'Propriétés de Premier Choix'),
      description: t(
        'Access to the most exclusive properties in Mauritius.',
        'Accès aux propriétés les plus exclusives de Maurice.'
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200"
                alt="Luxury Property"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-accent text-accent-foreground p-6 md:p-8 rounded-xl shadow-xl max-w-[200px]">
              <p className="text-4xl md:text-5xl font-bold mb-2">15+</p>
              <p className="text-sm">
                {t('Years of Excellence', 'Années d\'Excellence')}
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              {t('About Us', 'À Propos')}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              {t(
                'Your Trusted Partner in Luxury Real Estate',
                'Votre Partenaire de Confiance en Immobilier de Luxe'
              )}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t(
                'Since 2008, Versate has been the premier destination for discerning buyers seeking exceptional properties in Mauritius. Our team of experienced professionals combines deep market knowledge with personalized service to deliver extraordinary results.',
                'Depuis 2008, Versate est la destination de choix pour les acheteurs exigeants recherchant des propriétés exceptionnelles à Maurice. Notre équipe de professionnels expérimentés combine une connaissance approfondie du marché avec un service personnalisé.'
              )}
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about">
              <Button size="lg" className="gap-2 group bg-primary text-primary-foreground hover:bg-primary/90">
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
