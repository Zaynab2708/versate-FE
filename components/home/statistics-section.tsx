'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { statistics } from '@/lib/mock-data';

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState('0');
  
  useEffect(() => {
    if (!inView) return;
    
    // Extract numeric part and suffix
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
      className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            {t('Numbers That Speak', 'Les Chiffres Parlent')}
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            {t(
              'Our track record of success reflects our commitment to excellence in luxury real estate.',
              'Notre historique de succès reflète notre engagement envers l\'excellence dans l\'immobilier de luxe.'
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-3">
                <AnimatedCounter value={stat.value} inView={isInView} />
              </div>
              <p className="text-primary-foreground/70 text-sm md:text-base">
                {t(stat.label, stat.labelFr)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
