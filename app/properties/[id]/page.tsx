'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Bed,
  Bath,
  Maximize,
  Car,
  Calendar,
  MapPin,
  Check,
  Phone,
  Mail,
  Calculator,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PropertyCard } from '@/components/property-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { useLanguage } from '@/lib/language-context';
import { useFavorites } from '@/lib/favorites-context';
import { properties } from '@/lib/mock-data';
import { notFound } from 'next/navigation';

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { t } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loanAmount, setLoanAmount] = useState([500000]);
  const [loanTerm, setLoanTerm] = useState([20]);
  const [interestRate, setInterestRate] = useState([5]);

  const property = properties.find((p) => p.id === resolvedParams.id);

  if (!property) {
    notFound();
  }

  const similarProperties = properties
    .filter((p) => p.id !== property.id && p.type === property.type)
    .slice(0, 3);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: property.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  // Mortgage calculation
  const monthlyPayment = () => {
    const principal = loanAmount[0];
    const monthlyRate = interestRate[0] / 100 / 12;
    const numberOfPayments = loanTerm[0] * 12;
    
    if (monthlyRate === 0) return principal / numberOfPayments;
    
    const payment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return payment;
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              {t('Home', 'Accueil')}
            </Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-foreground transition-colors">
              {t('Properties', 'Propriétés')}
            </Link>
            <span>/</span>
            <span className="text-foreground">{t(property.title, property.titleFr)}</span>
          </nav>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden">
            <Image
              src={property.images[currentImageIndex]}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
            
            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Thumbnails */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Actions */}
            <div className="absolute top-4 right-4 flex gap-2">
              <Button
                variant="secondary"
                size="icon"
                onClick={() => toggleFavorite(property.id)}
                className={isFavorite(property.id) ? 'text-red-500' : ''}
              >
                <Heart className={`h-5 w-5 ${isFavorite(property.id) ? 'fill-current' : ''}`} />
              </Button>
              <Button variant="secondary" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-colors ${
                  index === currentImageIndex ? 'border-accent' : 'border-transparent'
                }`}
              >
                <Image src={image} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Property Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
                  {property.type}
                </p>
                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                  {t(property.title, property.titleFr)}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="h-5 w-5" />
                  <span>{property.address}</span>
                </div>
                <div className="text-3xl font-bold text-accent">
                  {formatPrice(property.price)}
                </div>
              </motion.div>

              {/* Quick Stats */}
              {property.type !== 'land' && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                    <Bed className="h-6 w-6 text-accent" />
                    <div>
                      <p className="text-2xl font-semibold">{property.bedrooms}</p>
                      <p className="text-sm text-muted-foreground">{t('Bedrooms', 'Chambres')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                    <Bath className="h-6 w-6 text-accent" />
                    <div>
                      <p className="text-2xl font-semibold">{property.bathrooms}</p>
                      <p className="text-sm text-muted-foreground">{t('Bathrooms', 'Salles de bain')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                    <Maximize className="h-6 w-6 text-accent" />
                    <div>
                      <p className="text-2xl font-semibold">{property.area}</p>
                      <p className="text-sm text-muted-foreground">{property.areaUnit}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                    <Car className="h-6 w-6 text-accent" />
                    <div>
                      <p className="text-2xl font-semibold">{property.parking}</p>
                      <p className="text-sm text-muted-foreground">{t('Parking', 'Parking')}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tabs */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="overview">{t('Overview', 'Aperçu')}</TabsTrigger>
                  <TabsTrigger value="amenities">{t('Amenities', 'Équipements')}</TabsTrigger>
                  <TabsTrigger value="location">{t('Location', 'Localisation')}</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <h3 className="text-xl font-semibold mb-4">{t('Description', 'Description')}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(property.description, property.descriptionFr)}
                    </p>
                    
                    {property.yearBuilt > 0 && (
                      <div className="flex items-center gap-2 mt-6 text-muted-foreground">
                        <Calendar className="h-5 w-5" />
                        <span>{t('Built in', 'Construit en')} {property.yearBuilt}</span>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">{t('Features & Amenities', 'Caractéristiques & Équipements')}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                          <Check className="h-4 w-4 text-accent" />
                        </div>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="location" className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">{t('Location', 'Localisation')}</h3>
                  <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
                    <p className="text-muted-foreground">
                      {t('Map placeholder - Interactive map would be displayed here', 'Carte interactive ici')}
                    </p>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Mortgage Calculator */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-accent" />
                    {t('Mortgage Calculator', 'Calculateur de Prêt')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="mb-2 block">
                      {t('Loan Amount', 'Montant du Prêt')}: ${loanAmount[0].toLocaleString()}
                    </Label>
                    <Slider
                      value={loanAmount}
                      onValueChange={setLoanAmount}
                      min={100000}
                      max={property.price}
                      step={10000}
                    />
                  </div>
                  <div>
                    <Label className="mb-2 block">
                      {t('Loan Term', 'Durée du Prêt')}: {loanTerm[0]} {t('years', 'ans')}
                    </Label>
                    <Slider
                      value={loanTerm}
                      onValueChange={setLoanTerm}
                      min={5}
                      max={30}
                      step={1}
                    />
                  </div>
                  <div>
                    <Label className="mb-2 block">
                      {t('Interest Rate', 'Taux d\'intérêt')}: {interestRate[0]}%
                    </Label>
                    <Slider
                      value={interestRate}
                      onValueChange={setInterestRate}
                      min={1}
                      max={15}
                      step={0.25}
                    />
                  </div>
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">
                      {t('Estimated Monthly Payment', 'Mensualité Estimée')}
                    </p>
                    <p className="text-3xl font-bold text-accent">
                      ${Math.round(monthlyPayment()).toLocaleString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Agent Card & Contact Form */}
            <div className="space-y-6">
              {/* Agent Card */}
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={property.agent.image}
                        alt={property.agent.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{property.agent.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t(property.agent.title, property.agent.titleFr)}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <a
                      href={`tel:${property.agent.phone}`}
                      className="flex items-center gap-3 p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      <Phone className="h-5 w-5 text-accent" />
                      <span>{property.agent.phone}</span>
                    </a>
                    <a
                      href={`mailto:${property.agent.email}`}
                      className="flex items-center gap-3 p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-accent" />
                      <span>{property.agent.email}</span>
                    </a>
                  </div>

                  {/* Contact Form */}
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">{t('Your Name', 'Votre Nom')}</Label>
                      <Input id="name" placeholder={t('John Doe', 'Jean Dupont')} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">{t('Email', 'Email')}</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">{t('Phone', 'Téléphone')}</Label>
                      <Input id="phone" type="tel" placeholder="+230 5XXX XXXX" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="message">{t('Message', 'Message')}</Label>
                      <Textarea
                        id="message"
                        placeholder={t(
                          'I am interested in this property...',
                          'Je suis intéressé par cette propriété...'
                        )}
                        className="mt-1"
                        rows={4}
                      />
                    </div>
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      {t('Send Inquiry', 'Envoyer la Demande')}
                    </Button>
                  </form>

                  {/* Schedule Viewing */}
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">
                      {t('Schedule a Viewing', 'Planifier une Visite')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      {similarProperties.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
              {t('Similar Properties', 'Propriétés Similaires')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((prop, index) => (
                <PropertyCard key={prop.id} property={prop} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
