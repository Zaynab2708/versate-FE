import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/home/hero-section';
import { FeaturedProperties } from '@/components/home/featured-properties';
import { AboutSection } from '@/components/home/about-section';
import { StatisticsSection } from '@/components/home/statistics-section';
import { FeaturedAgentSection } from '@/components/home/featured-agent-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { CTASection } from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedProperties />
      <AboutSection />
      <StatisticsSection />
      <FeaturedAgentSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
