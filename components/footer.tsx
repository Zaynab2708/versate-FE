'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const contactLocations = [
  {
    name: 'Grand Baie',
    phone: '+230 5XXX XXXX',
    email: 'grandbay@versate.com',
    address: 'Royal Road, Grand Baie, Mauritius',
  },
  {
    name: 'Port Louis',
    phone: '+230 5XXX XXXX',
    email: 'portlouis@versate.com',
    address: 'Business District, Port Louis, Mauritius',
  },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        {/* Top Row - Logo and Partner Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-8 pb-12 border-b border-foreground/5"
        >
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10">
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                  <path d="M8 12L24 36L40 12" stroke="currentColor" strokeWidth="3" className="text-accent"/>
                  <path d="M14 12L24 28L34 12" stroke="currentColor" strokeWidth="2" className="text-foreground/30"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold tracking-wider text-foreground">VERSATE</span>
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Land Sales</span>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-foreground/10" />
            <div className="hidden md:flex flex-col items-start">
              <span className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase">Premium</span>
              <span className="text-sm font-serif text-foreground/80">Land Specialists</span>
            </div>
          </div>

          {/* Partner Badges - Text representations */}
          <div className="flex flex-wrap items-center gap-8 lg:gap-12">
            <div className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-lg font-serif tracking-wider text-foreground">PREMIUM</span>
              <span className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase">Land Network</span>
            </div>
            <div className="flex flex-col items-center gap-0 opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-sm font-serif italic text-foreground">Leading</span>
              <span className="text-[9px] tracking-[0.15em] text-muted-foreground uppercase">Real Estate Companies</span>
              <span className="text-[9px] tracking-[0.15em] text-accent">of the World</span>
            </div>
            <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 border border-foreground/30 flex items-center justify-center">
                <span className="text-[10px] font-serif">LP</span>
              </div>
              <div>
                <div className="text-xs font-bold tracking-wide text-foreground">EXCELLENCE</div>
                <div className="text-[8px] tracking-[0.15em] text-muted-foreground uppercase">Portfolio International</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Links Row - Like parklane.mu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 lg:gap-10 py-10 border-b border-foreground/5"
        >
          {[
            { href: '/properties?status=for-sale', label: t('Buy', 'Acheter') },
            { href: '/properties?status=for-rent', label: t('Rent', 'Louer') },
            { href: '/contact', label: t('Sell your land', 'Vendez votre terrain') },
            { href: '/properties?foreign=true', label: t('Foreigners', 'Étrangers') },
            { href: '/contact', label: t('Contact us', 'Nous contacter') },
            { href: '/about', label: t('About us', 'À propos') },
            { href: '/about#team', label: t('Our team', 'Notre équipe') },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12">
          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h5 className="text-accent font-medium text-lg mb-6">{t('Menu', 'Menu')}</h5>
            <ul className="space-y-3">
              {[
                { href: '/properties?status=for-sale', label: t('Buy', 'Acheter') },
                { href: '/properties?status=for-rent', label: t('Rent', 'Louer') },
                { href: '/contact', label: t('Sell your land', 'Vendez votre terrain') },
                { href: '/properties?foreign=true', label: t('Foreigners', 'Étrangers') },
                { href: '/contact', label: t('Contact us', 'Nous contacter') },
                { href: '/about', label: t('About us', 'À propos') },
                { href: '/about#team', label: t('Our team', 'Notre équipe') },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact - Location 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h5 className="text-accent font-medium text-lg mb-6">{t('Contact', 'Contact')}</h5>
            <div className="space-y-4">
              <p className="text-foreground font-medium">{contactLocations[0].name}</p>
              <div className="space-y-2">
                <a href={`tel:${contactLocations[0].phone}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm">
                  <Phone className="h-4 w-4 text-accent/70" />
                  {contactLocations[0].phone}
                </a>
                <a href={`mailto:${contactLocations[0].email}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm">
                  <Mail className="h-4 w-4 text-accent/70" />
                  {contactLocations[0].email}
                </a>
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 text-accent/70 shrink-0 mt-0.5" />
                  {contactLocations[0].address}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact - Location 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h5 className="text-accent font-medium text-lg mb-6 invisible">{t('Contact', 'Contact')}</h5>
            <div className="space-y-4">
              <p className="text-foreground font-medium">{contactLocations[1].name}</p>
              <div className="space-y-2">
                <a href={`tel:${contactLocations[1].phone}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm">
                  <Phone className="h-4 w-4 text-accent/70" />
                  {contactLocations[1].phone}
                </a>
                <a href={`mailto:${contactLocations[1].email}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm">
                  <Mail className="h-4 w-4 text-accent/70" />
                  {contactLocations[1].email}
                </a>
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 text-accent/70 shrink-0 mt-0.5" />
                  {contactLocations[1].address}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Subscribe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h5 className="text-accent font-medium text-lg mb-6">{t('Subscribe', 'S\'abonner')}</h5>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              {t('Get the latest land listings and market insights!', 'Recevez les dernières annonces et analyses du marché!')}
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder={t('Your email', 'Votre email')}
                className="bg-background border-foreground/10 text-foreground placeholder:text-muted-foreground h-11"
              />
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-11">
                {t('Subscribe Now', 'S\'abonner')}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-foreground/5"
        >
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-2.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          
          {/* Personalized Search CTA */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {t('Free personalized search', 'Recherche personnalisée gratuite')}
            </span>
            <Link href="/contact">
              <Button variant="outline" size="sm" className="border-foreground/20 text-foreground hover:bg-foreground hover:text-background gap-2">
                {t('Request', 'Demander')}
                <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-foreground/5 bg-background/50">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Versate. {t('All rights reserved.', 'Tous droits réservés.')}
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                {t('Privacy Policy', 'Politique de Confidentialité')}
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                {t('Terms of Service', 'Conditions d\'Utilisation')}
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                {t('Cookies', 'Cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
