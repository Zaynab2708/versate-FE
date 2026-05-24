'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/language-context';
import { blogPosts } from '@/lib/mock-data';

export default function BlogPage() {
  const { t } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

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
              {t('Insights & News', 'Actualités & Conseils')}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {t('Our Blog', 'Notre Blog')}
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              {t(
                'Stay informed with the latest market insights, property trends, and lifestyle inspiration.',
                'Restez informé avec les dernières analyses du marché, tendances immobilières et inspirations.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <Image
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-accent text-accent-foreground">
                      {t('Featured', 'En Vedette')}
                    </Badge>
                    <p className="text-sm text-accent font-medium uppercase tracking-wider mb-2">
                      {t(blogPosts[0].category, blogPosts[0].categoryFr)}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                      {t(blogPosts[0].title, blogPosts[0].titleFr)}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {t(blogPosts[0].excerpt, blogPosts[0].excerptFr)}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(blogPosts[0].date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {blogPosts[0].readTime} min read
                      </span>
                    </div>
                    <Link
                      href={`/blog/${blogPosts[0].id}`}
                      className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                    >
                      {t('Read More', 'Lire Plus')}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold">
              {t('Latest Articles', 'Derniers Articles')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full group">
                  <CardContent className="p-0">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-accent font-medium uppercase tracking-wider mb-2">
                        {t(post.category, post.categoryFr)}
                      </p>
                      <h3 className="text-xl font-serif font-semibold mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                        {t(post.title, post.titleFr)}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {t(post.excerpt, post.excerptFr)}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{post.author}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime} min
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              {t('Stay Updated', 'Restez Informé')}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t(
                'Subscribe to our newsletter and never miss the latest market insights and exclusive property listings.',
                'Abonnez-vous à notre newsletter et ne manquez jamais les dernières analyses et annonces exclusives.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
