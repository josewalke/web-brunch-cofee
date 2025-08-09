"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Coffee, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { BUSINESS_INFO, HERO_BADGES, TEXTS } from "../../lib/constants";
import { staggerContainer, staggerItem } from "../../lib/utils";

export const HeroSection = React.memo(() => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const badgeVariants = useMemo(() => ({
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }), []);

  const backgroundStyle = useMemo(() => ({
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    transform: `translateY(${scrollY * 0.5}px)`
  }), [scrollY]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[var(--sand-beige)] to-white"
      itemScope 
      itemType="https://schema.org/Restaurant"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={backgroundStyle} />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 pt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={staggerItem} className="mb-6">
              <Badge 
                variant="outline" 
                className="mb-4 px-4 py-2 text-sm border-[var(--cobalt-blue)]/20 bg-[var(--cobalt-blue)]/5 text-[var(--cobalt-blue)] no-break"
              >
                {TEXTS.hero.openBadge}
              </Badge>
            </motion.div>

            <motion.h1 
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--cobalt-blue)] mb-6 text-balance tracking-tight optimal-reading"
              itemProp="name"
            >
              {TEXTS.hero.title}
            </motion.h1>
            
            <motion.div 
              variants={staggerItem}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed optimal-reading"
              itemProp="description"
            >
              <p className="mb-2">
                {TEXTS.hero.subtitle}
              </p>
              <p>
                <span className="text-[var(--cobalt-blue)] font-medium no-break">Work-friendly</span>,{" "}
                <span className="text-[var(--plant-green)] font-medium no-break">pet-friendly</span>{" "}
                y con el mejor café de la zona.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerItem}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              {HERO_BADGES.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  variants={badgeVariants}
                  custom={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/50 no-break"
                >
                  <badge.icon className={`h-4 w-4 ${badge.color}`} />
                  <span className="text-sm font-medium whitespace-nowrap">{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="bg-[var(--cobalt-blue)] hover:bg-[var(--cobalt-blue)]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="#menu">Ver Carta</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[var(--cobalt-blue)] text-[var(--cobalt-blue)] hover:bg-[var(--cobalt-blue)] hover:text-white transition-all duration-300"
                asChild
              >
                <a href="#location">Cómo llegar</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Skeleton loader con efecto shimmer para hero */}
              <div className="absolute inset-0 bg-gray-200 rounded-2xl animate-pulse">
                <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer rounded-2xl min-h-[400px]"></div>
              </div>
              
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&h=400&q=80"
                alt="Fresquito Brunch & Coffee - Terraza y ambiente"
                className="rounded-2xl shadow-2xl w-full h-auto max-w-lg mx-auto block hero-main-image relative z-10"
                style={{ 
                  display: 'block',
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  width: '100%',
                  aspectRatio: '3/2'
                }}
                onLoad={(e) => {
                  // Ocultar skeleton cuando la imagen carga
                  const img = e.target as HTMLImageElement;
                  const skeleton = img.parentElement?.querySelector('.animate-pulse') as HTMLElement;
                  if (skeleton) {
                    skeleton.style.display = 'none';
                  }
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // Ocultar skeleton también en error
                  const skeleton = target.parentElement?.querySelector('.animate-pulse') as HTMLElement;
                  if (skeleton) {
                    skeleton.style.display = 'none';
                  }
                  if (target.src.includes('photo-1554118811')) {
                    // Primer fallback: otra imagen de café
                    target.src = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&h=400&q=80";
                  } else if (target.src.includes('photo-1501339847302')) {
                    // Segundo fallback: otra imagen diferente
                    target.src = "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&h=400&q=80";
                  } else {
                    // Último recurso: placeholder SVG elegante
                    target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#2563eb;stop-opacity:0.9" />
                            <stop offset="100%" style="stop-color:#1e40af;stop-opacity:0.7" />
                          </linearGradient>
                        </defs>
                        <rect width="600" height="400" fill="url(#heroGrad)" rx="24"/>
                        <circle cx="300" cy="160" r="50" fill="white" opacity="0.9"/>
                        <rect x="200" y="250" width="200" height="60" rx="12" fill="white" opacity="0.8"/>
                        <text x="300" y="345" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">Fresquito Brunch & Coffee</text>
                        <text x="300" y="375" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="16" opacity="0.8">Tu café de barrio en Las Canteras</text>
                      </svg>
                    `)}`;
                  }
                }}
              />
            </div>
            
            {/* Floating elements - positioned above the image */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg z-30"
            >
              <Coffee className="h-6 w-6 text-[var(--cobalt-blue)]" />
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg z-30"
            >
              <Heart className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';