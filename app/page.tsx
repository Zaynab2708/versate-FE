import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/home/hero-section';
import { TrustPillarsSection } from '@/components/home/trust-pillars-section';
import { FeaturedProperties } from '@/components/home/featured-properties';
import { AffiliationsSection } from '@/components/home/affiliations-section';
import { LuxuryCollectionSection } from '@/components/home/luxury-collection-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { CTASection } from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustPillarsSection />
      <FeaturedProperties />
      <AffiliationsSection />
      <LuxuryCollectionSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
