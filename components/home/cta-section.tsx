'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Newspaper, BookOpen, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/lib/language-context';

const newsItems = [
  {
    title: 'Your Guide to Buying Land in Mauritius',
    titleFr: 'Votre Guide pour Acheter un Terrain à Maurice',
    category: 'Expert Tax',
    categoryFr: 'Expertise Fiscale',
  },
  {
    title: 'Agricultural Land in Mauritius for Locals and Foreigners',
    titleFr: 'Terrains Agricoles à Maurice pour Locaux et Étrangers',
    category: 'What Property Buyers Need to Know',
    categoryFr: 'Ce que les Acheteurs Doivent Savoir',
  },
  {
    title: 'Mauritius Property Taxes: What Estate Buyers Really Pay',
    titleFr: 'Taxes Immobilières à Maurice: Ce que les Acheteurs Paient Vraiment',
    category: 'Tax Guide Study',
    categoryFr: 'Guide d\'Étude Fiscale',
  },
];

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-background relative">
      {/* News Section */}
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            {t('Our News', 'Nos Actualités')}
          </h2>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-card border border-foreground/5 flex items-center justify-center mb-4 group-hover:border-accent/30 transition-colors">
                <div className="text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-4 border border-foreground/10 flex items-center justify-center">
                    {index === 0 && <Newspaper className="h-6 w-6 text-accent" />}
                    {index === 1 && <BookOpen className="h-6 w-6 text-accent" />}
                    {index === 2 && <Calculator className="h-6 w-6 text-accent" />}
                  </div>
                  <p className="text-xs text-accent uppercase tracking-wider mb-2">
                    {t(item.category, item.categoryFr)}
                  </p>
                </div>
              </div>
              <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-accent transition-colors">
                {t(item.title, item.titleFr)}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Beyond Real Estate Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-foreground/5 pt-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Title and Description */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                {t('Beyond Real Estate', 'Au-Delà de l\'Immobilier')}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="font-medium text-foreground">
                  {t('Our Commitment to Community', 'Notre Engagement envers la Communauté')}
                </p>
                <p>
                  {t(
                    'At Versate, our dedication goes far beyond land sales. We are deeply committed to giving back and strengthening our community, promoting environmental protection, and supporting initiatives that positively impact the lives of those around us.',
                    'Chez Versate, notre engagement va bien au-delà de la vente de terrains. Nous sommes profondément engagés à redonner et à renforcer notre communauté, à promouvoir la protection de l\'environnement.'
                  )}
                </p>
                <p>
                  {t(
                    'From empowering youth and education to our continued efforts in environmental protection through regular beach cleanups, supporting different charities, sponsoring various events across Mauritius, our values are reflected in our actions throughout the year.',
                    'De l\'autonomisation des jeunes et de l\'éducation à nos efforts continus de protection de l\'environnement à travers des nettoyages réguliers de plages, nos valeurs se reflètent dans nos actions tout au long de l\'année.'
                  )}
                </p>
              </div>
            </div>

            {/* Right - Newsletter CTA */}
            <div className="bg-card p-8 lg:p-10 border border-foreground/5">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                {t('Stay Updated', 'Restez Informé')}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t(
                  'Subscribe to receive the latest land listings, market insights, and exclusive opportunities directly to your inbox.',
                  'Abonnez-vous pour recevoir les dernières annonces de terrains et opportunités exclusives directement dans votre boîte mail.'
                )}
              </p>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder={t('Enter your email address', 'Entrez votre adresse email')}
                  className="bg-background border-foreground/10 text-foreground placeholder:text-muted-foreground h-12"
                />
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 h-12">
                    {t('Subscribe', 'S\'abonner')}
                  </Button>
                  <Link href="/contact" className="flex-1">
                    <Button 
                      variant="outline" 
                      className="w-full border-foreground/20 text-foreground hover:bg-foreground hover:text-background h-12 gap-2"
                    >
                      {t("Let's Talk", 'Parlons')}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
