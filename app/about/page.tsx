'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Users, Building2, Globe, Target, Gem } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/lib/language-context';
import { statistics } from '@/lib/mock-data';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    titleFr: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from property curation to client service.',
    descriptionFr: 'Nous maintenons les normes les plus élevées dans tout ce que nous faisons.',
  },
  {
    icon: Target,
    title: 'Integrity',
    titleFr: 'Intégrité',
    description: 'Transparency and honesty guide every interaction with our clients and partners.',
    descriptionFr: 'La transparence et l\'honnêteté guident chaque interaction avec nos clients.',
  },
  {
    icon: Gem,
    title: 'Exclusivity',
    titleFr: 'Exclusivité',
    description: 'Access to the most prestigious properties and off-market opportunities.',
    descriptionFr: 'Accès aux propriétés les plus prestigieuses et opportunités hors marché.',
  },
  {
    icon: Users,
    title: 'Personal Service',
    titleFr: 'Service Personnalisé',
    description: 'Tailored solutions and dedicated attention for every client relationship.',
    descriptionFr: 'Solutions sur mesure et attention dédiée pour chaque relation client.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    titleFr: 'Portée Mondiale',
    description: 'International network connecting buyers and sellers across the globe.',
    descriptionFr: 'Réseau international connectant acheteurs et vendeurs à travers le monde.',
  },
  {
    icon: Building2,
    title: 'Local Expertise',
    titleFr: 'Expertise Locale',
    description: 'Deep knowledge of the Mauritius real estate market and regulations.',
    descriptionFr: 'Connaissance approfondie du marché immobilier mauricien.',
  },
];

const timeline = [
  { year: '2008', title: 'Foundation', titleFr: 'Fondation', description: 'Versate was established with a vision to transform luxury real estate in Mauritius.' },
  { year: '2012', title: 'Expansion', titleFr: 'Expansion', description: 'Opened our flagship office in Grand Baie and expanded our team of experts.' },
  { year: '2016', title: 'Recognition', titleFr: 'Reconnaissance', description: 'Awarded Best Luxury Real Estate Agency in the Indian Ocean.' },
  { year: '2020', title: 'Digital Innovation', titleFr: 'Innovation Numérique', description: 'Launched virtual property tours and enhanced digital services.' },
  { year: '2024', title: 'Market Leader', titleFr: 'Leader du Marché', description: 'Celebrating our position as the premier luxury real estate agency.' },
];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/mauritius-land-aerial.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-primary-foreground max-w-3xl mx-auto"
          >
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              {t('About Us', 'À Propos')}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              {t('Premium Industrial Land Sales', 'Vente de Terrains Industriels Premium')}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              {t(
                'For over 15 years, Versate has been the trusted name in industrial land sales across Mauritius, delivering exceptional service and unparalleled results for businesses and investors.',
                'Depuis plus de 15 ans, Versate est le nom de confiance dans la vente de terrains industriels à Maurice.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                {t('Our Story', 'Notre Histoire')}
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                {t('A Legacy of Excellence', 'Un Héritage d\'Excellence')}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {t(
                    'Founded in 2008, Versate emerged from a passion for exceptional properties and a commitment to redefining the real estate experience in Mauritius. Our founders recognized a need for a truly premium service that could match the caliber of the island\'s most extraordinary homes.',
                    'Fondé en 2008, Versate est né d\'une passion pour les propriétés exceptionnelles et d\'un engagement à redéfinir l\'expérience immobilière à Maurice.'
                  )}
                </p>
                <p>
                  {t(
                    'Today, we are proud to be recognized as the leading luxury real estate agency in Mauritius, serving discerning clients from around the world. Our team of experienced professionals combines deep local knowledge with international standards of excellence.',
                    'Aujourd\'hui, nous sommes fiers d\'être reconnus comme l\'agence immobilière de luxe leader à Maurice, servant des clients exigeants du monde entier.'
                  )}
                </p>
                <p>
                  {t(
                    'We believe that finding the perfect property is about more than just location and specifications—it\'s about discovering a place that resonates with your lifestyle and aspirations.',
                    'Nous croyons que trouver la propriété parfaite va au-delà de l\'emplacement et des spécifications—il s\'agit de découvrir un lieu qui résonne avec votre style de vie.'
                  )}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/mauritius-hero.jpg"
                  alt="Industrial Land Mauritius"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <p className="text-primary-foreground/70">
                  {t(stat.label, stat.labelFr)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              {t('What Drives Us', 'Ce Qui Nous Motive')}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              {t('Our Core Values', 'Nos Valeurs Fondamentales')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-secondary/30 rounded-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t(value.title, value.titleFr)}
                </h3>
                <p className="text-muted-foreground">
                  {t(value.description, value.descriptionFr)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              {t('Our Journey', 'Notre Parcours')}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              {t('Milestones', 'Jalons')}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="shrink-0 w-20 text-right">
                  <span className="text-2xl font-bold text-accent">{item.year}</span>
                </div>
                <div className="relative pb-8 border-l-2 border-accent/30 pl-6">
                  <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-accent" />
                  <h3 className="text-lg font-semibold mb-1">
                    {t(item.title, item.titleFr)}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
