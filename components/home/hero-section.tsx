'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Home, DollarSign, ChevronDown, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/lib/language-context';

export function HeroSection() {
  const { t } = useLanguage();
  const [searchType, setSearchType] = useState('buy');
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Trigger entrance animation after component mounts
    setIsLoaded(true);
    
    // Ensure video autoplay works
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay was prevented, video will show poster
        setIsVideoPlaying(false);
      });
    }
  }, []);

  const togglePlay = async () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        try {
          await videoRef.current.play();
          setIsVideoPlaying(true);
        } catch (error) {
          // Play was interrupted, ignore the error
        }
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => {
            videoRef.current?.play().catch(() => setIsVideoPlaying(false));
          }}
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/3773486/3773486-uhd_2732_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Elegant gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/30 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/40" />
      </div>

      {/* Video Controls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-8 z-20 flex gap-2"
      >
        <button
          onClick={togglePlay}
          className="p-3 rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/10 text-foreground/80 hover:bg-foreground/20 transition-all duration-300"
          aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
        >
          {isVideoPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </button>
        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/10 text-foreground/80 hover:bg-foreground/20 transition-all duration-300"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </button>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-4 lg:px-8 pt-32 pb-16">
        {/* Animated Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isLoaded ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-20 h-px bg-accent mb-8 origin-left"
        />

        {/* Main Heading with Staggered Animation */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            {t('Premium Land Sales', 'Vente de Terrains Premium')}
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={isLoaded ? { y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-[1] mb-2"
          >
            {t('Own Your', 'Possédez Votre')}
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={isLoaded ? { y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-[1] mb-2"
          >
            {t('Piece of', 'Coin de')}
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 100 }}
            animate={isLoaded ? { y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[0.95]"
          >
            <span className="text-accent">{t('Mauritius', 'Maurice')}</span>
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-foreground/60 max-w-xl leading-relaxed mb-12"
          >
            {t(
              'Explore exclusive land plots across Mauritius. From beachfront parcels to hillside retreats, find the perfect location to build your dream.',
              'Explorez des parcelles de terrain exclusives à travers Maurice. Des terrains en bord de mer aux retraites en colline, trouvez l\'emplacement parfait.'
            )}
          </motion.p>
        </div>

        {/* Search Box - Elegant Glass Design */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          {/* Search Type Tabs */}
          <div className="flex mb-4">
            <div className="inline-flex bg-foreground/5 backdrop-blur-md rounded-full p-1 border border-foreground/10">
              <button
                onClick={() => setSearchType('buy')}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  searchType === 'buy'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {t('Buy', 'Acheter')}
              </button>
              <button
                onClick={() => setSearchType('rent')}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  searchType === 'rent'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {t('Rent', 'Louer')}
              </button>
            </div>
          </div>

          {/* Search Form */}
          <div className="bg-card/80 backdrop-blur-xl rounded-2xl p-4 md:p-6 border border-foreground/10 shadow-2xl shadow-black/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Location */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground flex items-center gap-2 uppercase tracking-wider">
                  <MapPin className="h-3.5 w-3.5" />
                  {t('Location', 'Localisation')}
                </label>
                <Select>
                  <SelectTrigger className="bg-background/50 border-foreground/10 text-foreground">
                    <SelectValue placeholder={t('Select location', 'Choisir localisation')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grand-baie">Grand Baie</SelectItem>
                    <SelectItem value="port-louis">Port Louis</SelectItem>
                    <SelectItem value="tamarin">Tamarin</SelectItem>
                    <SelectItem value="flic-en-flac">Flic en Flac</SelectItem>
                    <SelectItem value="belle-mare">Belle Mare</SelectItem>
                    <SelectItem value="black-river">Black River</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Land Type */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground flex items-center gap-2 uppercase tracking-wider">
                  <Home className="h-3.5 w-3.5" />
                  {t('Land Type', 'Type de Terrain')}
                </label>
                <Select>
                  <SelectTrigger className="bg-background/50 border-foreground/10 text-foreground">
                    <SelectValue placeholder={t('Select type', 'Choisir type')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beachfront">{t('Beachfront', 'Bord de Mer')}</SelectItem>
                    <SelectItem value="hillside">{t('Hillside', 'Colline')}</SelectItem>
                    <SelectItem value="residential">{t('Residential', 'Résidentiel')}</SelectItem>
                    <SelectItem value="agricultural">{t('Agricultural', 'Agricole')}</SelectItem>
                    <SelectItem value="commercial">{t('Commercial', 'Commercial')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground flex items-center gap-2 uppercase tracking-wider">
                  <DollarSign className="h-3.5 w-3.5" />
                  {t('Price Range', 'Gamme de Prix')}
                </label>
                <Select>
                  <SelectTrigger className="bg-background/50 border-foreground/10 text-foreground">
                    <SelectValue placeholder={t('Select range', 'Choisir gamme')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-500000">$0 - $500,000</SelectItem>
                    <SelectItem value="500000-1000000">$500,000 - $1M</SelectItem>
                    <SelectItem value="1000000-2000000">$1M - $2M</SelectItem>
                    <SelectItem value="2000000-5000000">$2M - $5M</SelectItem>
                    <SelectItem value="5000000+">$5M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button className="w-full h-10 bg-accent text-accent-foreground hover:bg-accent/90 gap-2 font-medium">
                  <Search className="h-4 w-4" />
                  {t('Search', 'Rechercher')}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-8 z-20 text-foreground/50"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.2em] font-medium">
            {t('Scroll', 'Défiler')}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-24 right-8 w-px h-20 bg-gradient-to-b from-accent/50 to-transparent hidden lg:block" />
      <div className="absolute top-24 right-8 w-20 h-px bg-gradient-to-l from-accent/50 to-transparent hidden lg:block" />
    </section>
  );
}
