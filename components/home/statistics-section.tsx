'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { statistics } from '@/lib/mock-data';

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState('0');
  
  useEffect(() => {
    if (!inView) return;
    
    const numericMatch = value.match(/[\d.]+/);
    const suffix = value.replace(/[\d.]+/, '');
    
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }
    
    const targetNum = parseFloat(numericMatch[0]);
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = targetNum * easeOut;
      
      if (targetNum >= 100) {
        setDisplayValue(Math.round(currentValue).toString() + suffix);
      } else {
        setDisplayValue(currentValue.toFixed(targetNum % 1 === 0 ? 0 : 1) + suffix);
      }
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  }, [value, inView]);
  
  return <span>{displayValue}</span>;
}

export function StatisticsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-card relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }} />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-px bg-accent mb-8 mx-auto"
          />
          <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4">
            {t('Our Achievement', 'Nos Réalisations')}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-foreground">
            {t('Numbers That', 'Les Chiffres')}
            <br />
            <span className="text-foreground/60">{t('Speak', 'Parlent')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            {t(
              'Our track record reflects our commitment to connecting buyers with exceptional land opportunities.',
              'Notre historique reflète notre engagement à connecter les acheteurs avec des opportunités de terrain exceptionnelles.'
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-4">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-accent">
                  <AnimatedCounter value={stat.value} inView={isInView} />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-px bg-accent/30 group-hover:w-16 transition-all duration-300" />
              </div>
              <p className="text-muted-foreground text-sm md:text-base tracking-wide">
                {t(stat.label, stat.labelFr)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
