"use client";

import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass-effect shadow-lg border-b border-white/20" 
          : "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <h1 className="text-2xl font-serif text-[var(--cobalt-blue)] tracking-tight">Fresquito</h1>
            <span className="text-sm text-muted-foreground">Brunch & Coffee</span>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "#menu", label: "Carta" },
              { href: "#location", label: "Ubicación" },
              { href: "#contact", label: "Contacto" }
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative text-foreground hover:text-[var(--cobalt-blue)] transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--cobalt-blue)] transition-all duration-200 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          <div className="flex md:hidden items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="sm" className="bg-[var(--cobalt-blue)] text-white" asChild>
                <a href="#menu">Carta</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}