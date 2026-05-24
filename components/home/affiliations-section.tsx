'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

export function AffiliationsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-card relative overflow-hidden">
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground">
            {t('Local Expertise, Backed by Prestigious Global Affiliations', 'Expertise Locale, Soutenue par des Affiliations Mondiales Prestigieuses')}
          </h2>
        </motion.div>

        {/* Partner Logos - Styled like parklane */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-12 lg:gap-20 mb-16"
        >
          {/* Partner Logo Placeholders - Styled text representations */}
          <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-2xl lg:text-3xl font-serif tracking-wider text-foreground">
              PREMIUM
            </div>
            <div className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Land Network
            </div>
          </div>

          <div className="w-px h-16 bg-foreground/10 hidden lg:block" />

          <div className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-lg lg:text-xl font-serif italic text-foreground">
              Leading
            </div>
            <div className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Real Estate Companies
            </div>
            <div className="text-xs tracking-[0.2em] text-accent font-medium">
              of the World
            </div>
          </div>

          <div className="w-px h-16 bg-foreground/10 hidden lg:block" />

          <div className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border border-foreground/30 flex items-center justify-center">
                <span className="text-sm font-serif">LP</span>
              </div>
              <div>
                <div className="text-sm lg:text-base font-bold tracking-wide text-foreground">
                  EXCELLENCE
                </div>
                <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Portfolio International
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-muted-foreground leading-relaxed">
            {t(
              'At Versate, we bring you the highest standard of service, built on deep local expertise and a personalised approach. Our long-standing reputation in Mauritius is reinforced by our membership in the renowned networks of Premium Land Specialists and Leading Real Estate Companies of the World. These affiliations reflect our ongoing commitment to excellence and allow us to align with the world\'s most respected names in real estate.',
              'Chez Versate, nous vous offrons le plus haut standard de service, basé sur une expertise locale approfondie et une approche personnalisée. Notre réputation de longue date à Maurice est renforcée par notre adhésion aux réseaux renommés de Spécialistes Premium du Terrain et de Leading Real Estate Companies of the World. Ces affiliations reflètent notre engagement continu envers l\'excellence.'
            )}
          </p>
        </motion.div>
      </div>

      {/* Recognition Section - Like parklane.mu */}
      <div className="container mx-auto px-4 lg:px-8 mt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Excellence Portfolio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 border border-accent/30 flex items-center justify-center">
                <span className="text-2xl font-serif text-accent">LP</span>
              </div>
              <div>
                <div className="text-xl font-bold tracking-wide text-foreground">
                  Excellence Portfolio International
                </div>
                <div className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Magazine
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                'Versate is a proud member of the Excellence Portfolio Network, the single largest network of premier locally-owned and independent residential real estate firms.',
                'Versate est fier membre du Réseau Excellence Portfolio, le plus grand réseau de firmes immobilières résidentielles de premier plan, localement détenues et indépendantes.'
              )}
            </p>
          </motion.div>

          {/* Right - Awards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <p className="text-sm text-accent tracking-[0.2em] uppercase mb-2">
                {t('Recognised Globally for Excellence', 'Reconnu Mondialement pour l\'Excellence')}
              </p>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                {t('Excellence Awards', 'Prix d\'Excellence')}
              </h3>
            </div>
            
            {/* Award Badge */}
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 border-2 border-accent rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">WINNER</div>
                  <div className="text-lg font-bold text-accent">2024</div>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t(
                    'Versate is privileged to receive a prestigious award, recognising our excellence in service and expertise in the Mauritian land market.',
                    'Versate a le privilège de recevoir un prix prestigieux, reconnaissant notre excellence en service et notre expertise dans le marché foncier mauricien.'
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
}
