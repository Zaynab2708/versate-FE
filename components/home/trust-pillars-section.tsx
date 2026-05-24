'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Globe, Users } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const pillars = [
  {
    icon: Shield,
    title: 'Integrity',
    titleFr: 'Intégrité',
    description: 'We uphold the highest standards of honesty and transparency in all our dealings.',
    descriptionFr: 'Nous maintenons les plus hauts standards d\'honnêteté et de transparence dans toutes nos transactions.',
  },
  {
    icon: Award,
    title: 'Trust',
    titleFr: 'Confiance',
    description: 'We offer professional advice in all confidentiality, building lasting relationships.',
    descriptionFr: 'Nous offrons des conseils professionnels en toute confidentialité, bâtissant des relations durables.',
  },
  {
    icon: Globe,
    title: 'Network',
    titleFr: 'Réseau',
    description: 'We operate from strategically situated branches across Mauritius.',
    descriptionFr: 'Nous opérons depuis des branches stratégiquement situées à travers Maurice.',
  },
  {
    icon: Users,
    title: 'Expertise',
    titleFr: 'Expertise',
    description: 'We accompany you in your real estate project and help you find the best investment.',
    descriptionFr: 'Nous vous accompagnons dans votre projet immobilier et vous aidons à trouver le meilleur investissement.',
  },
];

export function TrustPillarsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }} 
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-foreground">
            {t('Versate', 'Versate')}
          </h2>
          <p className="text-xl md:text-2xl font-serif text-foreground/70">
            {t('Your Trusted Land Partner in Mauritius', 'Votre Partenaire Terrain de Confiance à Maurice')}
          </p>
        </motion.div>

        {/* Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-foreground/10 rounded-none group-hover:border-accent/30 transition-colors duration-300">
                <pillar.icon className="h-7 w-7 text-accent" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-serif font-bold mb-3 text-foreground">
                {t(pillar.title, pillar.titleFr)}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t(pillar.description, pillar.descriptionFr)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Description Text - Like parklane.mu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto text-center mt-20"
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            {t(
              'For over 10 years, Versate has been at the forefront of the Mauritian land market. As an independent, family-owned boutique agency, we are dedicated to offering bespoke, high-quality service rooted in integrity and a genuine commitment to prioritising our clients\' needs.',
              'Depuis plus de 10 ans, Versate est à l\'avant-garde du marché foncier mauricien. En tant qu\'agence boutique familiale et indépendante, nous nous engageons à offrir un service sur mesure de haute qualité, ancré dans l\'intégrité et un engagement sincère à prioriser les besoins de nos clients.'
            )}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t(
              'Our deep market knowledge and strong relationships with developers allow us to present an extensive portfolio of premium land parcels across the island. With locations in key areas, our unmatched local expertise and personalised approach make us the standout choice for discerning buyers seeking their perfect plot in Mauritius.',
              'Notre connaissance approfondie du marché et nos relations solides avec les promoteurs nous permettent de présenter un vaste portefeuille de parcelles de terrain premium à travers l\'île. Avec des emplacements dans les zones clés, notre expertise locale inégalée et notre approche personnalisée font de nous le choix évident pour les acheteurs exigeants à la recherche de leur parcelle parfaite à Maurice.'
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
