import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/home/hero-section';
import { FeaturedProperties } from '@/components/home/featured-properties';
import { PropertyCategories } from '@/components/home/property-categories';
import { AboutSection } from '@/components/home/about-section';
import { StatisticsSection } from '@/components/home/statistics-section';
import { AgentsSection } from '@/components/home/agents-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { CTASection } from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedProperties />
      <PropertyCategories />
      <AboutSection />
      <StatisticsSection />
      <AgentsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
