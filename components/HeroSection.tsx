"use client";

import { Coffee, Heart, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
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
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[var(--sand-beige)] to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          transform: `translateY(${scrollY * 0.5}px)`
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 pt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <Badge 
                variant="outline" 
                className="mb-4 px-4 py-2 text-sm border-[var(--cobalt-blue)]/20 bg-[var(--cobalt-blue)]/5 text-[var(--cobalt-blue)] no-break"
              >
                ☀️ Abierto hoy · 9:00 - 16:00
              </Badge>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--cobalt-blue)] mb-6 text-balance tracking-tight optimal-reading"
            >
              Brunch sin prisas en Las Canteras
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed optimal-reading"
            >
              <p className="mb-2">
                Tu café de barrio donde el tiempo se detiene.
              </p>
              <p>
                <span className="text-[var(--cobalt-blue)] font-medium no-break">Work-friendly</span>,{" "}
                <span className="text-[var(--plant-green)] font-medium no-break">pet-friendly</span>{" "}
                y con el mejor café de la zona.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              {[
                { icon: Coffee, label: "Café premium", color: "text-[var(--stone-gray)]" },
                { icon: Heart, label: "Pet-friendly", color: "text-[var(--cobalt-blue)]" },
                { icon: Coffee, label: "Café premium", color: "text-[var(--stone-gray)]" },
                { icon: Clock, label: "Sin prisas", color: "text-orange-500" }
              ].map((badge, index) => (
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
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-[var(--cobalt-blue)] hover:bg-[var(--cobalt-blue)]/90 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 no-break"
                  asChild
                >
                  <a href="#menu">Ver Carta</a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[var(--cobalt-blue)]/20 text-[var(--cobalt-blue)] hover:bg-[var(--cobalt-blue)]/5 px-8 py-6 rounded-xl backdrop-blur-sm no-break"
                  asChild
                >
                  <a href="#location">Cómo llegar</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, 1, 0, -1, 0],
                  scale: [1, 1.02, 1, 1.02, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="aspect-square w-full max-w-lg mx-auto"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=600&fit=crop&auto=format"
                  alt="Fresquito Brunch & Coffee - terraza"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-white/50"
              >
                <Coffee className="h-6 w-6 text-[var(--cobalt-blue)]" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-[var(--plant-green)]/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg text-white"
              >
                <Heart className="h-6 w-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}