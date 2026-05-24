'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, Award, Building2, Languages, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';

// Featured agent data - the main person handling deals
const featuredAgent = {
  id: '1',
  name: 'Sophie Laurent',
  title: 'Senior Land Consultant',
  titleFr: 'Consultante Terrain Senior',
  email: 'sophie@versate.com',
  phone: '+230 5XXX XXXX',
  image: '/images/agent-portrait.jpg',
  bio: 'With over 15 years of experience in Mauritian industrial land sales, Sophie has helped countless clients find their perfect parcels. Her deep knowledge of the market, strong negotiation skills, and commitment to excellence makes her the go-to consultant for discerning buyers looking for premium industrial land opportunities in Mauritius.',
  bioFr: 'Avec plus de 15 ans d\'expérience dans la vente de terrains industriels à Maurice, Sophie a aidé de nombreux clients à trouver leurs parcelles parfaites. Sa connaissance approfondie du marché, ses compétences en négociation et son engagement envers l\'excellence font d\'elle la consultante de référence.',
  properties: 45,
  experience: 15,
  languages: ['English', 'French', 'Creole'],
  specializations: ['Industrial Land', 'Commercial Zones', 'Premium Parcels'],
};

export function FeaturedAgentSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-px bg-accent mb-8 mx-auto"
          />
          
          <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4">
            {t('Your Expert', 'Votre Expert')}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1]">
            {t('Meet Your', 'Rencontrez Votre')}
            <br />
            <span className="text-foreground/60">{t('Land Specialist', 'Spécialiste Terrain')}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Agent Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src={featuredAgent.image}
                alt={featuredAgent.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-l-2 border-t-2 border-accent/50 rounded-tl-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-accent/50 rounded-br-2xl" />
            
            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-8 left-8 bg-card/95 backdrop-blur-xl rounded-xl p-4 border border-foreground/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{featuredAgent.experience}+</p>
                  <p className="text-sm text-muted-foreground">{t('Years Experience', 'Ans d\'Expérience')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Agent Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                {featuredAgent.name}
              </h3>
              <p className="text-accent font-medium tracking-wide">
                {t(featuredAgent.title, featuredAgent.titleFr)}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">
              {t(featuredAgent.bio, featuredAgent.bioFr)}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card/50 rounded-xl p-4 border border-foreground/5">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">{featuredAgent.properties}+</p>
                    <p className="text-sm text-muted-foreground">{t('Parcels Sold', 'Parcelles Vendues')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-card/50 rounded-xl p-4 border border-foreground/5">
                <div className="flex items-center gap-3">
                  <Languages className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">{featuredAgent.languages.length}</p>
                    <p className="text-sm text-muted-foreground">{t('Languages', 'Langues')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div>
              <p className="text-sm font-medium text-foreground mb-3">{t('Specializations', 'Spécialisations')}</p>
              <div className="flex flex-wrap gap-2">
                {featuredAgent.specializations.map((spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1.5 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
                asChild
              >
                <a href={`tel:${featuredAgent.phone}`}>
                  <Phone className="w-4 h-4" />
                  {t('Call Now', 'Appeler')}
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="gap-2 border-foreground/10"
                asChild
              >
                <a href={`mailto:${featuredAgent.email}`}>
                  <Mail className="w-4 h-4" />
                  {t('Send Email', 'Envoyer un Email')}
                </a>
              </Button>
              <Button 
                variant="ghost" 
                className="gap-2 text-foreground/70 hover:text-foreground"
                asChild
              >
                <Link href="/contact">
                  {t('Contact Page', 'Page Contact')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
