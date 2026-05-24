'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';
import { agents } from '@/lib/mock-data';

export function AgentsSection() {
  const { t } = useLanguage();
  const displayedAgents = agents.slice(0, 4);

  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-16 h-px bg-accent mb-8 origin-left"
              />
              <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4">
                {t('Our Team', 'Notre Équipe')}
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1]">
                {t('Meet Our', 'Rencontrez Nos')}
                <br />
                <span className="text-foreground/60">{t('Agents', 'Agents')}</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
              {t(
                'Our experienced team of luxury real estate professionals is dedicated to finding your perfect property.',
                'Notre équipe expérimentée de professionnels de l\'immobilier de luxe est dédiée à trouver votre propriété parfaite.'
              )}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayedAgents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-5 bg-background">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={`mailto:${agent.email}`}
                    className="p-3 rounded-full bg-accent/10 hover:bg-accent text-foreground hover:text-accent-foreground transition-all duration-300"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href={`tel:${agent.phone}`}
                    className="p-3 rounded-full bg-accent/10 hover:bg-accent text-foreground hover:text-accent-foreground transition-all duration-300"
                  >
                    <Phone className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-1 text-foreground group-hover:text-accent transition-colors duration-300">{agent.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {t(agent.title, agent.titleFr)}
                </p>
                <p className="text-accent text-sm font-medium">
                  {agent.properties} {t('Properties', 'Propriétés')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <Link href="/agents">
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-3 group border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 px-8"
            >
              {t('View All Agents', 'Voir Tous les Agents')}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
