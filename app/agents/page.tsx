'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, Award, Globe } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/language-context';
import { agents } from '@/lib/mock-data';

export default function AgentsPage() {
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
              {t('Our Team', 'Notre Équipe')}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {t('Meet Our Expert Agents', 'Rencontrez Nos Agents Experts')}
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              {t(
                'Our team of dedicated professionals brings together years of experience and a passion for exceptional real estate.',
                'Notre équipe de professionnels dévoués réunit des années d\'expérience et une passion pour l\'immobilier exceptionnel.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* Image */}
                      <div className="relative w-full lg:w-64 aspect-square lg:aspect-auto shrink-0">
                        <Image
                          src={agent.image}
                          alt={agent.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Content */}
                      <div className="p-6 flex-1">
                        <h3 className="text-2xl font-serif font-semibold mb-1">
                          {agent.name}
                        </h3>
                        <p className="text-accent font-medium mb-4">
                          {t(agent.title, agent.titleFr)}
                        </p>
                        <p className="text-muted-foreground mb-6 line-clamp-3">
                          {t(agent.bio, agent.bioFr)}
                        </p>

                        {/* Stats */}
                        <div className="flex gap-6 mb-6">
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-accent" />
                            <span className="text-sm">
                              {agent.experience} {t('Years', 'Ans')}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Globe className="h-5 w-5 text-accent" />
                            <span className="text-sm">
                              {agent.languages.join(', ')}
                            </span>
                          </div>
                        </div>

                        {/* Specializations */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {agent.specializations.map((spec, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>

                        {/* Contact */}
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <a href={`mailto:${agent.email}`}>
                              <Mail className="h-4 w-4 mr-2" />
                              {t('Email', 'Email')}
                            </a>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a href={`tel:${agent.phone}`}>
                              <Phone className="h-4 w-4 mr-2" />
                              {t('Call', 'Appeler')}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              {t('Join Our Team', 'Rejoignez Notre Équipe')}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t(
                'Are you passionate about luxury real estate? We\'re always looking for talented individuals to join our growing team.',
                'Vous êtes passionné par l\'immobilier de luxe? Nous recherchons toujours des talents pour rejoindre notre équipe.'
              )}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                {t('Get in Touch', 'Contactez-Nous')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
