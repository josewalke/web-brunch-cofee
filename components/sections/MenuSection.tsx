"use client";

import React, { useState, useCallback, useMemo } from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { MENU_ITEMS, TAG_COLORS, TEXTS, CONTACT_INFO } from "../../lib/constants";
import { staggerContainer, staggerItem } from "../../lib/utils";
import { Phone } from "lucide-react";

export const MenuSection = React.memo(() => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleMouseEnter = useCallback((id: number) => {
    setHoveredItem(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredItem(null);
  }, []);

  const filteredItems = useMemo(() => MENU_ITEMS, []);

  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }), []);

  return (
    <section id="menu" className="w-full py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--cobalt-blue)] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--plant-green)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif text-[var(--cobalt-blue)] mb-4">
            {TEXTS.menu.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {TEXTS.menu.subtitle}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  {/* Skeleton loader con efecto shimmer - más rápido */}
                  <div id={`skeleton-${item.id}`} className="absolute inset-0 bg-gray-200 animate-pulse">
                    <div className="w-full h-48 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-[shimmer_1.5s_infinite]"></div>
                  </div>
                  
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105 relative z-10"
                    style={{
                      width: '100%',
                      height: '192px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    loading={index > 2 ? 'lazy' : 'eager'}
                    onLoad={(e) => {
                      // Ocultar skeleton cuando la imagen carga - más rápido
                      const img = e.target as HTMLImageElement;
                      const skeleton = document.getElementById(`skeleton-${item.id}`);
                      if (skeleton) {
                        skeleton.style.opacity = '0';
                        skeleton.style.transition = 'opacity 0.2s ease';
                        setTimeout(() => skeleton.style.display = 'none', 200);
                      }
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      // Ocultar skeleton también en error
                      const skeleton = document.getElementById(`skeleton-${item.id}`);
                      if (skeleton) {
                        skeleton.style.opacity = '0';
                        skeleton.style.transition = 'opacity 0.2s ease';
                        setTimeout(() => skeleton.style.display = 'none', 200);
                      }
                      
                      // Sistema de fallback mejorado
                      if (!target.src.includes('data:image')) {
                        // Primero intentar con imagen de respaldo específica para cada plato
                        const fallbackImages = {
                          1: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&h=300&q=80", // huevos
                          2: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&h=300&q=80", // sandwich
                          3: "https://images.unsplash.com/photo-1505253213348-cd54c92b37ed?auto=format&fit=crop&w=400&h=300&q=80", // burrata
                          4: "https://images.unsplash.com/photo-1566843972142-a4cf65d29805?auto=format&fit=crop&w=400&h=300&q=80", // falafel
                          5: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=400&h=300&q=80", // pancakes
                          6: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?auto=format&fit=crop&w=400&h=300&q=80"  // zumo
                        };
                        target.src = fallbackImages[item.id as keyof typeof fallbackImages] || fallbackImages[1];
                      } else {
                        // Último recurso: placeholder SVG elegante
                        target.src = `data:image/svg+xml;base64,${btoa(`
                          <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient id="menuGrad${item.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#2563eb;stop-opacity:0.8" />
                                <stop offset="100%" style="stop-color:#1e40af;stop-opacity:0.6" />
                              </linearGradient>
                            </defs>
                            <rect width="400" height="300" fill="url(#menuGrad${item.id})" />
                            <circle cx="200" cy="120" r="30" fill="white" opacity="0.9"/>
                            <rect x="150" y="170" width="100" height="40" rx="8" fill="white" opacity="0.8"/>
                            <text x="200" y="250" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="16" font-weight="bold">${item.name}</text>
                            <text x="200" y="275" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="12" opacity="0.8">Fresquito Brunch</text>
                          </svg>
                        `)}`;
                      }
                    }}
                  />
                  {/* Precio solo visible en hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-white/50">
                      <span className="font-bold text-lg text-[var(--cobalt-blue)]">
                        {item.price}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg text-[var(--cobalt-blue)]">
                      {item.name}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className={`text-xs ${TAG_COLORS[tag] || 'bg-gray-100 text-gray-800'}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-muted-foreground mb-4 text-lg">
            ¿Tienes alguna alergia o preferencia especial?
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            No dudes en preguntarnos, estamos aquí para ayudarte.
          </p>
          <motion.a
            href={`tel:${CONTACT_INFO.phone}`}
            className="inline-flex items-center gap-2 text-[var(--cobalt-blue)] hover:text-[var(--cobalt-blue)]/80 transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="h-4 w-4" />
            <span>{CONTACT_INFO.phone}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
});

MenuSection.displayName = 'MenuSection';