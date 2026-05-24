'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/lib/language-context';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    titleFr: 'Visitez-nous',
    content: 'Royal Road, Grand Baie\nMauritius',
  },
  {
    icon: Phone,
    title: 'Call Us',
    titleFr: 'Appelez-nous',
    content: '+230 5XXX XXXX',
  },
  {
    icon: Mail,
    title: 'Email Us',
    titleFr: 'Écrivez-nous',
    content: 'info@versate.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    titleFr: 'Heures d\'ouverture',
    content: 'Mon - Fri: 9:00 - 18:00\nSat: 9:00 - 13:00',
  },
];

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              {t('Get in Touch', 'Contactez-Nous')}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {t('Contact Us', 'Nous Contacter')}
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              {t(
                'Have a question or ready to start your property search? Our team is here to help.',
                'Vous avez une question ou êtes prêt à commencer votre recherche? Notre équipe est là pour vous aider.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold mb-2">
                      {t(info.title, info.titleFr)}
                    </h3>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">
                      {info.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                {t('Send Us a Message', 'Envoyez-nous un Message')}
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">{t('First Name', 'Prénom')}</Label>
                    <Input id="firstName" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">{t('Last Name', 'Nom')}</Label>
                    <Input id="lastName" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">{t('Email', 'Email')}</Label>
                  <Input id="email" type="email" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">{t('Phone', 'Téléphone')}</Label>
                  <Input id="phone" type="tel" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="subject">{t('Subject', 'Sujet')}</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder={t('Select a subject', 'Choisir un sujet')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buy">{t('Buying a Property', 'Acheter une Propriété')}</SelectItem>
                      <SelectItem value="sell">{t('Selling a Property', 'Vendre une Propriété')}</SelectItem>
                      <SelectItem value="rent">{t('Renting a Property', 'Louer une Propriété')}</SelectItem>
                      <SelectItem value="valuation">{t('Property Valuation', 'Estimation Immobilière')}</SelectItem>
                      <SelectItem value="general">{t('General Inquiry', 'Demande Générale')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">{t('Message', 'Message')}</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    className="mt-1"
                    placeholder={t('How can we help you?', 'Comment pouvons-nous vous aider?')}
                  />
                </div>
                <Button className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                  <Send className="h-4 w-4" />
                  {t('Send Message', 'Envoyer le Message')}
                </Button>
              </form>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                {t('Our Location', 'Notre Emplacement')}
              </h2>
              <div className="aspect-square lg:aspect-auto lg:h-[500px] bg-muted rounded-xl flex items-center justify-center">
                <p className="text-muted-foreground text-center px-4">
                  {t(
                    'Interactive map would be displayed here',
                    'Carte interactive affichée ici'
                  )}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
