'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';
import { testimonials } from '@/lib/mock-data';

export function TestimonialsSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-px bg-accent mb-8 mx-auto"
          />
          <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4">
            {t('Testimonials', 'Témoignages')}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
            {t('What Our Clients', 'Ce Que Disent')}
            <br />
            <span className="text-foreground/60">{t('Say', 'Nos Clients')}</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 md:p-12 lg:p-16 border border-foreground/5">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-accent/10">
              <Quote className="h-20 w-20" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < currentTestimonial.rating
                          ? 'text-accent fill-accent'
                          : 'text-foreground/10'
                      }`}
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-xl md:text-2xl text-center font-serif leading-relaxed mb-10 text-foreground/90">
                  &ldquo;{t(currentTestimonial.content, currentTestimonial.contentFr)}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-accent/20">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-lg text-foreground">{currentTestimonial.name}</h4>
                  <p className="text-muted-foreground">
                    {t(currentTestimonial.role, currentTestimonial.roleFr)}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-10">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-foreground/10 text-foreground/70 hover:text-foreground hover:bg-foreground/5"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-accent w-6' : 'bg-foreground/20'
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-foreground/10 text-foreground/70 hover:text-foreground hover:bg-foreground/5"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
