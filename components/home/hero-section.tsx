'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Maximize2, ChevronDown, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/lib/language-context';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export function HeroSection() {
  const { t } = useLanguage();
  const [searchTab, setSearchTab] = useState<'sale' | 'rent'>('sale');
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
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
        } catch {
          // Play was interrupted
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
          poster="/images/mauritius-hero.jpg"
        >
          <source
            src="https://videos.pexels.com/video-files/3773486/3773486-uhd_2732_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Video Controls - Bottom Left */}
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
          {isVideoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/10 text-foreground/80 hover:bg-foreground/20 transition-all duration-300"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </motion.div>

      {/* Main Content - Search Form Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-5xl"
        >
          {/* Search Form Container - Parklane Style */}
          <div className="bg-card/95 backdrop-blur-xl border border-foreground/10 shadow-2xl">
            {/* Tabs */}
            <div className="flex border-b border-foreground/10">
              <button
                onClick={() => setSearchTab('sale')}
                className={`flex-1 py-4 px-6 text-sm font-medium tracking-wide transition-colors ${
                  searchTab === 'sale'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {t('FOR SALE', 'À VENDRE')}
              </button>
              <button
                onClick={() => setSearchTab('rent')}
                className={`flex-1 py-4 px-6 text-sm font-medium tracking-wide transition-colors ${
                  searchTab === 'rent'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {t('FOR RENT', 'À LOUER')}
              </button>
              <button
                className="flex-1 py-4 px-6 text-sm font-medium tracking-wide text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors"
              >
                {t('DEVELOPMENTS', 'DÉVELOPPEMENTS')}
              </button>
              <button
                className="flex-1 py-4 px-6 text-sm font-medium tracking-wide text-accent hover:bg-foreground/5 transition-colors"
              >
                {t('PREMIUM COLLECTION', 'COLLECTION PREMIUM')}
              </button>
            </div>

            {/* Search Fields */}
            <div className="p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* Type */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {t('TYPE', 'TYPE')}
                  </label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-foreground/10 text-foreground h-11">
                      <SelectValue placeholder={t('Select', 'Sélectionner')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">{t('Residential Land', 'Terrain Résidentiel')}</SelectItem>
                      <SelectItem value="agricultural">{t('Agricultural Land', 'Terrain Agricole')}</SelectItem>
                      <SelectItem value="commercial">{t('Commercial Land', 'Terrain Commercial')}</SelectItem>
                      <SelectItem value="industrial">{t('Industrial Land', 'Terrain Industriel')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Region */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                    <MapPin className="h-3 w-3" />
                    {t('REGION', 'RÉGION')}
                  </label>
                  <Input 
                    placeholder={t('Cities or Regions...', 'Villes ou Régions...')}
                    className="bg-background/50 border-foreground/10 text-foreground h-11"
                  />
                </div>

                {/* Currency */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {t('CURRENCY', 'DEVISE')}
                  </label>
                  <Select defaultValue="mur">
                    <SelectTrigger className="bg-background/50 border-foreground/10 text-foreground h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mur">MUR</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="usd">USD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget Min */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {t('BUDGET MIN', 'BUDGET MIN')}
                  </label>
                  <Input 
                    placeholder="0"
                    className="bg-background/50 border-foreground/10 text-foreground h-11"
                  />
                </div>

                {/* Budget Max */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {t('BUDGET MAX', 'BUDGET MAX')}
                  </label>
                  <Input 
                    placeholder="Any"
                    className="bg-background/50 border-foreground/10 text-foreground h-11"
                  />
                </div>
              </div>

              {/* Checkboxes and Actions Row */}
              <div className="flex flex-wrap items-center justify-between gap-6 mt-6 pt-6 border-t border-foreground/5">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="foreigners" />
                    <label
                      htmlFor="foreigners"
                      className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                    >
                      {t('Accessible to foreigners', 'Accessible aux étrangers')}
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="premium" />
                    <label
                      htmlFor="premium"
                      className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                    >
                      {t('Premium Collection', 'Collection Premium')}
                    </label>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button 
                    className="bg-accent text-accent-foreground hover:bg-accent/90 h-11 px-8 gap-2"
                  >
                    <Search className="h-4 w-4" />
                    {t('Search', 'Rechercher')}
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="text-muted-foreground hover:text-foreground h-11 gap-2"
                  >
                    <Maximize2 className="h-4 w-4" />
                    {t('Advanced Search', 'Recherche Avancée')}
                  </Button>
                </div>
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
    </section>
  );
}
