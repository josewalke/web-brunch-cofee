"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS_INFO, NAVIGATION_ITEMS, CONTACT_INFO } from "../../lib/constants";

export const Header = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <a 
              href="#home" 
              className="text-xl font-serif font-bold text-[var(--cobalt-blue)] hover:text-[var(--cobalt-blue)]/80 transition-colors"
              onClick={closeMenu}
            >
              {BUSINESS_INFO.name}
            </a>
            <span className="text-sm text-muted-foreground hidden sm:block">
              Brunch & Coffee
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Navegación principal">
            {NAVIGATION_ITEMS.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative group text-sm font-medium text-muted-foreground hover:text-[var(--cobalt-blue)] transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--cobalt-blue)] transition-all duration-200 group-hover:w-full" />
              </motion.a>
            ))}
            
            {/* Phone Number */}
            <motion.a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-[var(--cobalt-blue)] hover:text-[var(--cobalt-blue)]/80 transition-colors"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">{CONTACT_INFO.phone}</span>
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Button
              size="sm"
              className="bg-[var(--cobalt-blue)] text-white"
              asChild
            >
              <a href="#menu">Carta</a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-white/20"
            role="navigation"
            aria-label="Menú móvil"
          >
            <div className="px-4 py-6 space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block text-lg font-medium text-muted-foreground hover:text-[var(--cobalt-blue)] transition-colors py-2"
                  onClick={closeMenu}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.a>
              ))}
              
              {/* Phone Number in Mobile Menu */}
              <motion.a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2 text-lg font-medium text-[var(--cobalt-blue)] hover:text-[var(--cobalt-blue)]/80 transition-colors py-2"
                onClick={closeMenu}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="h-5 w-5" />
                {CONTACT_INFO.phone}
              </motion.a>
              
              <div className="pt-4 border-t border-white/20">
                <Button className="w-full bg-[var(--cobalt-blue)] text-white" asChild>
                  <a href="#menu" onClick={closeMenu}>
                    Ver Carta
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
});

Header.displayName = 'Header';