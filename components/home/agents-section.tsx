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
            {t('Our Team', 'Notre Équipe')}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            {t('Meet Our Agents', 'Rencontrez Nos Agents')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              'Our experienced team of luxury real estate professionals is dedicated to finding your perfect property.',
              'Notre équipe expérimentée de professionnels de l\'immobilier de luxe est dédiée à trouver votre propriété parfaite.'
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedAgents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={`mailto:${agent.email}`}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href={`tel:${agent.phone}`}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-1">{agent.name}</h3>
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
          className="text-center mt-12"
        >
          <Link href="/agents">
            <Button variant="outline" size="lg" className="gap-2 group">
              {t('View All Agents', 'Voir Tous les Agents')}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
