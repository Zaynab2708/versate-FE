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
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200"
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
              <p className="text-5xl md:text-6xl font-bold mb-2">15+</p>
              <p className="text-sm font-medium opacity-90">
                {t('Years of Excellence', 'Années d\'Excellence')}
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
              {t('About Us', 'À Propos')}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-[1.15]">
              {t(
                'Your Trusted Partner in',
                'Votre Partenaire de Confiance en'
              )}
              <br />
              <span className="text-foreground/60">
                {t('Luxury Real Estate', 'Immobilier de Luxe')}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              {t(
                'Since 2008, Versate has been the premier destination for discerning buyers seeking exceptional properties in Mauritius. Our team of experienced professionals combines deep market knowledge with personalized service to deliver extraordinary results.',
                'Depuis 2008, Versate est la destination de choix pour les acheteurs exigeants recherchant des propriétés exceptionnelles à Maurice. Notre équipe de professionnels expérimentés combine une connaissance approfondie du marché avec un service personnalisé.'
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
