'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-foreground/5">
      {/* Newsletter Section */}
      <div className="border-b border-foreground/5">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-md">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-12 h-px bg-accent mb-6 origin-left"
              />
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-foreground">
                {t('Stay Informed', 'Restez Informé')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  'Get the latest luxury listings and market insights delivered to your inbox.',
                  'Recevez les dernières annonces de luxe et analyses du marché.'
                )}
              </p>
            </div>
            <div className="flex w-full max-w-md gap-3">
              <Input
                type="email"
                placeholder={t('Enter your email', 'Entrez votre email')}
                className="bg-background border-foreground/10 text-foreground placeholder:text-muted-foreground h-12"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap h-12 px-6">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div>
            <h4 className="text-2xl font-serif font-bold mb-6 text-foreground">VERSATE</h4>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t(
                'Mauritius premier luxury real estate agency, offering exceptional properties and unparalleled service since 2008.',
                'La première agence immobilière de luxe de Maurice, offrant des propriétés exceptionnelles depuis 2008.'
              )}
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2.5 rounded-full bg-foreground/5 hover:bg-accent hover:text-accent-foreground text-foreground/60 transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-[0.2em] mb-6 text-foreground">{t('Quick Links', 'Liens Rapides')}</h5>
            <ul className="space-y-4">
              {[
                { href: '/properties', label: t('All Properties', 'Toutes les Propriétés') },
                { href: '/properties?type=villa', label: t('Luxury Villas', 'Villas de Luxe') },
                { href: '/properties?type=penthouse', label: t('Penthouses', 'Penthouses') },
                { href: '/about', label: t('About Us', 'À Propos') },
                { href: '/agents', label: t('Our Agents', 'Nos Agents') },
                { href: '/blog', label: t('Blog', 'Blog') },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted-foreground hover:text-accent transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-[0.2em] mb-6 text-foreground">{t('Services', 'Services')}</h5>
            <ul className="space-y-4">
              {[
                t('Property Sales', 'Vente de Propriétés'),
                t('Property Rentals', 'Location de Propriétés'),
                t('Property Management', 'Gestion Immobilière'),
                t('Investment Advisory', 'Conseil en Investissement'),
                t('Legal Assistance', 'Assistance Juridique'),
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-[0.2em] mb-6 text-foreground">{t('Contact Us', 'Nous Contacter')}</h5>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/10 mt-0.5">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <span className="text-muted-foreground leading-relaxed">
                  Royal Road, Grand Baie<br />
                  Mauritius
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Phone className="h-4 w-4 text-accent" />
                </div>
                <a href="tel:+2305XXXXXXX" className="text-muted-foreground hover:text-accent transition-colors">
                  +230 5XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <a href="mailto:info@versate.com" className="text-muted-foreground hover:text-accent transition-colors">
                  info@versate.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-foreground/5">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Versate. {t('All rights reserved.', 'Tous droits réservés.')}
            </p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-accent transition-colors">
                {t('Privacy Policy', 'Politique de Confidentialité')}
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                {t('Terms of Service', 'Conditions d\'Utilisation')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
