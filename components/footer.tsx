'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-2">
                {t('Subscribe to Our Newsletter', 'Abonnez-vous à Notre Newsletter')}
              </h3>
              <p className="text-primary-foreground/70">
                {t(
                  'Get the latest luxury listings and market insights delivered to your inbox.',
                  'Recevez les dernières annonces de luxe et analyses du marché.'
                )}
              </p>
            </div>
            <div className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder={t('Enter your email', 'Entrez votre email')}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap">
                {t('Subscribe', 'S\'abonner')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h4 className="text-2xl font-serif font-bold mb-6">VERSATE</h4>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              {t(
                'Mauritius premier luxury real estate agency, offering exceptional properties and unparalleled service since 2008.',
                'La première agence immobilière de luxe de Maurice, offrant des propriétés exceptionnelles depuis 2008.'
              )}
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-6">{t('Quick Links', 'Liens Rapides')}</h5>
            <ul className="space-y-3">
              <li>
                <Link href="/properties" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('All Properties', 'Toutes les Propriétés')}
                </Link>
              </li>
              <li>
                <Link href="/properties?type=villa" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('Luxury Villas', 'Villas de Luxe')}
                </Link>
              </li>
              <li>
                <Link href="/properties?type=penthouse" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('Penthouses', 'Penthouses')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('About Us', 'À Propos')}
                </Link>
              </li>
              <li>
                <Link href="/agents" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('Our Agents', 'Nos Agents')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('Blog', 'Blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-lg font-semibold mb-6">{t('Services', 'Services')}</h5>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('Property Sales', 'Vente de Propriétés')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('Property Rentals', 'Location de Propriétés')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('Property Management', 'Gestion Immobilière')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('Investment Advisory', 'Conseil en Investissement')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t('Legal Assistance', 'Assistance Juridique')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold mb-6">{t('Contact Us', 'Nous Contacter')}</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70">
                  Royal Road, Grand Baie<br />
                  Mauritius
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+2305XXXXXXX" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  +230 5XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@versate.com" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  info@versate.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>
              © {new Date().getFullYear()} Versate. {t('All rights reserved.', 'Tous droits réservés.')}
            </p>
            <div className="flex gap-6">
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
