'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Globe, ChevronDown } from 'lucide-react';
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
  { href: '/properties', label: 'Properties', labelFr: 'Propriétés' },
  { href: '/about', label: 'About', labelFr: 'À Propos' },
  { href: '/agents', label: 'Agents', labelFr: 'Agents' },
  { href: '/blog', label: 'Blog', labelFr: 'Blog' },
  { href: '/contact', label: 'Contact', labelFr: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-foreground/5"
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.span
                className="text-2xl font-serif font-bold tracking-tight text-foreground"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                VERSATE
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-sm font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300 group"
                  >
                    {t(link.label, link.labelFr)}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
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

              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                  >
                    <Globe className="h-4 w-4" />
                    <span className="uppercase text-xs font-medium tracking-wider">{language}</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-card/95 backdrop-blur-xl border-foreground/10">
                  <DropdownMenuItem onClick={() => setLanguage('en')} className="cursor-pointer">
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('fr')} className="cursor-pointer">
                    Français
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

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
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-card/95 backdrop-blur-xl z-50 lg:hidden border-l border-foreground/5"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-foreground/5">
                  <span className="text-xl font-serif font-bold text-foreground">VERSATE</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <div className="flex-1 overflow-y-auto py-6">
                  <div className="flex flex-col gap-1 px-6">
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
                          className="py-4 text-lg font-medium border-b border-foreground/5 transition-colors hover:text-accent flex items-center justify-between text-foreground/80"
                        >
                          {t(link.label, link.labelFr)}
                          <ChevronDown className="h-4 w-4 -rotate-90" />
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
                        className="py-4 text-lg font-medium border-b border-foreground/5 transition-colors hover:text-accent flex items-center justify-between text-foreground/80"
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
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium">
                      {t('Contact Us', 'Nous Contacter')}
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
