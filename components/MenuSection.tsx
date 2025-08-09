"use client";

import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const menuItems = [
  {
    id: 1,
    name: "Huevos Florentine",
    description: "Huevos escalfados sobre pan tostado con espinacas frescas y salsa holandesa",
    price: "8.50€",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop&auto=format",
    tags: ["signature", "vegetariano"]
  },
  {
    id: 2,
    name: "Gran Bikini",
    description: "Nuestro sándwich estrella con jamón ibérico, queso manchego y tomate",
    price: "7.90€",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&h=300&fit=crop&auto=format",
    tags: ["signature"]
  },
  {
    id: 3,
    name: "Bowl de Burrata",
    description: "Burrata cremosa con tomates cherry, rúcula y aceite de albahaca",
    price: "9.20€",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&auto=format",
    tags: ["vegetariano", "fresco"]
  },
  {
    id: 4,
    name: "Falafel Bowl",
    description: "Falafel casero con hummus, tahini, verduras frescas y quinoa",
    price: "8.90€",
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop&auto=format",
    tags: ["vegano", "saludable"]
  },
  {
    id: 5,
    name: "Pancakes Clásicos",
    description: "Tortitas esponjosas con sirope de arce, frutos rojos y nata",
    price: "6.50€",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop&auto=format",
    tags: ["dulce", "desayuno"]
  },
  {
    id: 6,
    name: "Zumo Detox Verde",
    description: "Espinacas, apio, manzana verde, pepino y jengibre",
    price: "4.80€",
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop&auto=format",
    tags: ["detox", "saludable"]
  }
];

const tagColors = {
  signature: "bg-[var(--cobalt-blue)] text-white",
  vegetariano: "bg-[var(--plant-green)] text-white",
  vegano: "bg-green-600 text-white",
  fresco: "bg-blue-400 text-white",
  saludable: "bg-emerald-500 text-white",
  dulce: "bg-pink-500 text-white",
  desayuno: "bg-orange-500 text-white",
  detox: "bg-lime-600 text-white"
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function MenuSection() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section id="menu" className="w-full py-20 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--cobalt-blue)] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--plant-green)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-serif text-[var(--cobalt-blue)] mb-6 text-balance tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nuestra Carta
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Producto fresco y casero. Tostas, sándwiches, bowls y zumos naturales 
            con guiños veggie para todos los gustos.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                  
                  {/* Price overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredItem === item.id ? 1 : 0,
                      scale: hoveredItem === item.id ? 1 : 0.8
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg"
                  >
                    <span className="font-semibold text-[var(--cobalt-blue)]">{item.price}</span>
                  </motion.div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg tracking-tight">{item.name}</h3>
                    <span className="font-semibold text-[var(--cobalt-blue)] md:opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
                      {item.price}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {item.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 260, 
                          damping: 20,
                          delay: (index * 0.1) + (tagIndex * 0.05)
                        }}
                      >
                        <Badge 
                          variant="secondary"
                          className={`text-xs px-3 py-1 ${tagColors[tag as keyof typeof tagColors] || 'bg-gray-100 text-gray-800'}`}
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4 text-lg">
            ¿Te apetece venir a probar nuestras delicias?
          </p>
          <motion.p 
            className="text-2xl font-semibold text-[var(--cobalt-blue)] mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            📞 +34 928 12 34 56
          </motion.p>
          <p className="text-sm text-muted-foreground">
            Llámanos para reservar mesa
          </p>
        </motion.div>
      </div>
    </section>
  );
}