'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';
import { useFavorites } from '@/lib/favorites-context';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { href: '/', label: 'Home', labelFr: 'Accueil' },
  { href: '/properties', label: 'Land For Sale', labelFr: 'Terrains à Vendre' },
  { href: '/about', label: 'About', labelFr: 'À Propos' },
  { href: '/contact', label: 'Contact', labelFr: 'Contact' },
];

const currencies = ['MUR', 'EUR', 'USD'];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('MUR');
  const { language, setLanguage, t } = useLanguage();
  const { favorites } = useFavorites();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/98 backdrop-blur-xl border-b border-foreground/5' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo Section - Styled like parklane with dual branding */}
            <Link href="/" className="flex items-center gap-4 group">
              {/* Main Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                  {/* Stylized V Logo */}
                  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                    <path 
                      d="M8 12L24 36L40 12" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      className="text-accent"
                    />
                    <path 
                      d="M14 12L24 28L34 12" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      className="text-foreground/30"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg lg:text-xl font-serif font-bold tracking-wider text-foreground">
                    VERSATE
                  </span>
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                    Land Sales
                  </span>
                </div>
              </div>
              
              {/* Divider */}
              <div className="hidden md:block w-px h-10 bg-foreground/20" />
              
              {/* Partner Badge - Similar to Christie's on parklane */}
              <div className="hidden md:flex flex-col items-start">
                <span className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
                  Premium
                </span>
                <span className="text-sm font-serif text-foreground/80">
                  Land Specialists
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-sm font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300 group py-2"
                  >
                    {t(link.label, link.labelFr)}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 lg:gap-4">
              {/* Currency Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 text-foreground/70 hover:text-foreground hover:bg-foreground/5 px-2 lg:px-3"
                  >
                    <span className="text-sm font-medium">{currency}</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-card/98 backdrop-blur-xl border-foreground/10">
                  {currencies.map((cur) => (
                    <DropdownMenuItem 
                      key={cur} 
                      onClick={() => setCurrency(cur)} 
                      className="cursor-pointer"
                    >
                      {cur}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Language Flag */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                  >
                    <div className="w-5 h-4 rounded-sm overflow-hidden flex items-center justify-center">
                      {language === 'en' ? (
                        <svg viewBox="0 0 60 30" className="w-full h-full">
                          <rect fill="#00247d" width="60" height="30"/>
                          <path stroke="#fff" strokeWidth="6" d="m0 0 60 30m0-30L0 30"/>
                          <path stroke="#cf142b" strokeWidth="4" d="m0 0 60 30m0-30L0 30"/>
                          <path stroke="#fff" strokeWidth="10" d="m30 0v30m-30-15h60"/>
                          <path stroke="#cf142b" strokeWidth="6" d="m30 0v30m-30-15h60"/>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 3 2" className="w-full h-full">
                          <rect fill="#002395" width="1" height="2"/>
                          <rect fill="#fff" x="1" width="1" height="2"/>
                          <rect fill="#ed2939" x="2" width="1" height="2"/>
                        </svg>
                      )}
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-card/98 backdrop-blur-xl border-foreground/10">
                  <DropdownMenuItem onClick={() => setLanguage('en')} className="cursor-pointer">
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('fr')} className="cursor-pointer">
                    Français
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Favorites */}
              <Link href="/favorites">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                >
                  <Heart className="h-5 w-5" />
                  {favorites.length > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
                      {favorites.length}
                    </span>
                  )}
                </Button>
              </Link>

              {/* Search */}
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground/70 hover:text-foreground hover:bg-foreground/5"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-card z-50 lg:hidden border-l border-foreground/5"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-foreground/5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8">
                      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                        <path d="M8 12L24 36L40 12" stroke="currentColor" strokeWidth="3" className="text-accent"/>
                      </svg>
                    </div>
                    <span className="text-xl font-serif font-bold text-foreground">VERSATE</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <div className="flex-1 overflow-y-auto py-8">
                  <div className="flex flex-col px-6">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="py-5 text-lg font-medium border-b border-foreground/5 transition-colors hover:text-accent flex items-center justify-between text-foreground"
                        >
                          {t(link.label, link.labelFr)}
                          <ChevronDown className="h-4 w-4 -rotate-90 text-foreground/40" />
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.35 }}
                    >
                      <Link
                        href="/favorites"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-5 text-lg font-medium border-b border-foreground/5 transition-colors hover:text-accent flex items-center justify-between text-foreground"
                      >
                        <span className="flex items-center gap-3">
                          <Heart className="h-5 w-5" />
                          {t('Favorites', 'Favoris')}
                        </span>
                        {favorites.length > 0 && (
                          <span className="bg-accent text-accent-foreground text-sm px-2.5 py-0.5 rounded-full">
                            {favorites.length}
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  </div>
                </div>
                <div className="p-6 border-t border-foreground/5">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium h-12">
                      {t("Let's Talk", 'Parlons')}
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
