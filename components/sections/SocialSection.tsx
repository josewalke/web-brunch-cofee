"use client";

import React, { useState, useEffect } from "react";
import { Instagram, Heart, MessageCircle, Star, User, Plus, Upload, RefreshCw, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { TESTIMONIALS, TEXTS, SOCIAL_LINKS, INSTAGRAM_POSTS } from "../../lib/constants";
import { InstagramPost } from "../../lib/instagram-official";
import { staggerContainer, staggerItem } from "../../lib/utils";

export function SocialSection() {
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [apiStatus, setApiStatus] = useState<{
    hasGraphAPI: boolean;
    hasBasicDisplay: boolean;
    isValid: boolean;
  } | null>(null);

  // Función para cargar posts usando APIs oficiales
  const loadInstagramPosts = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // En modo estático, usar contenido de respaldo directamente
      // La API no funciona en export estático
      setInstagramPosts(getFallbackPosts());
      setLastUpdate(new Date());
      setApiStatus({
        hasGraphAPI: false,
        hasBasicDisplay: false,
        isValid: false
      });
    } catch (error) {
      console.error('Error loading Instagram posts:', error);
      setError('No se pudieron cargar los posts de Instagram');
      // Usar contenido de respaldo
      setInstagramPosts(getFallbackPosts());
    } finally {
      setIsLoading(false);
    }
  };

  // Contenido de respaldo
  const getFallbackPosts = (): InstagramPost[] => {
    return [
      {
        id: "fallback-1",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=400&fit=crop&auto=format&q=80",
        caption: "Nuestro Gran Bikini estrella 🥪 Jamón ibérico, queso manchego y tomate fresco",
        likes: 234,
        timeAgo: "2h",
        isOriginal: true,
        tags: ["#GranBikini", "#LasCanteras", "#Brunch"]
      },
      {
        id: "fallback-2",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop&auto=format&q=80",
        caption: "Terraza vibes ☀️ El mejor lugar para trabajar con vistas al mar",
        likes: 189,
        timeAgo: "4h",
        isOriginal: true,
        tags: ["#WorkFriendly", "#Terraza", "#Café"]
      },
      {
        id: "fallback-3",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop&auto=format&q=80",
        caption: "Pet-friendly siempre 🐕 Luna disfrutando de su desayuno en nuestra terraza",
        likes: 156,
        timeAgo: "1d",
        isOriginal: true,
        tags: ["#PetFriendly", "#Mascotas", "#Terraza"]
      },
      {
        id: "fallback-4",
        image: "https://images.unsplash.com/photo-1559154755-82a173460e78?w=400&h=400&fit=crop&auto=format&q=80",
        caption: "Pancakes caseros 🥞 Con frutas frescas y sirope de arce",
        likes: 298,
        timeAgo: "2d",
        isOriginal: true,
        tags: ["#Pancakes", "#Desayuno", "#Dulce"]
      },
      {
        id: "fallback-5",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop&auto=format&q=80",
        caption: "Bowl de burrata 🍅 Con tomates cherry, albahaca y aceite de oliva",
        likes: 167,
        timeAgo: "3d",
        isOriginal: true,
        tags: ["#Burrata", "#Healthy", "#Bowl"]
      },
      {
        id: "fallback-6",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop&auto=format&q=80",
        caption: "Café de especialidad ☕ Nuestro barista preparando el mejor café",
        likes: 201,
        timeAgo: "4d",
        isOriginal: true,
        tags: ["#Café", "#Barista", "#Especialidad"]
      }
    ];
  };

  // Cargar posts al montar el componente
  useEffect(() => {
    loadInstagramPosts();
  }, []);

  // Actualizar automáticamente cada 30 minutos
  useEffect(() => {
    const interval = setInterval(() => {
      loadInstagramPosts();
    }, 30 * 60 * 1000); // 30 minutos

    return () => clearInterval(interval);
  }, []);

  // Función para obtener el estado de la API
  const getApiStatusText = () => {
    if (!apiStatus) return null;
    
    if (apiStatus.isValid) {
      if (apiStatus.hasGraphAPI) {
        return "Instagram Graph API (Business/Creator)";
      } else if (apiStatus.hasBasicDisplay) {
        return "Instagram Basic Display API (Personal)";
      }
    }
    
    return "";
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Testimonials */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-[var(--cobalt-blue)] mb-4">
              Lo que dicen de nosotros
            </h2>
            <p className="text-muted-foreground">
              Mencionados en Local Guide Gran Canaria y Erasmus Life Las Palmas
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="shadow-md hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <motion.div 
                      className="flex items-center mb-3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </motion.div>
                    <p className="text-sm text-muted-foreground mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{testimonial.author}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Google</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Instagram Feed - APIs OFICIALES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <motion.h3 
              className="text-2xl font-serif text-[var(--cobalt-blue)] mb-4 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Instagram className="h-6 w-6" />
              {TEXTS.social.title}
            </motion.h3>
            <p className="text-muted-foreground">
              {TEXTS.social.subtitle}
            </p>
            


            



          </div>

          {/* Instagram Posts Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {isLoading ? (
              // Loading skeleton
              Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={`loading-${index}`}
                  className="h-32 md:h-40 bg-gray-200 animate-pulse rounded-lg"
                  variants={staggerItem}
                />
              ))
            ) : (
              INSTAGRAM_POSTS.map((post, index) => (
                <motion.div 
                  key={post.id} 
                  className="relative group cursor-pointer"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-32 md:h-40 object-cover rounded-lg"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      // Sistema de fallback con imágenes reales de comida
                      if (!target.src.includes('backup-food')) {
                        // Primero intentar con imágenes de comida específicas como backup
                        const foodBackupImages = {
                          1: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&h=400&q=80", // bowl saludable
                          2: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&h=400&q=80", // sandwich
                          3: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&h=400&q=80", // café terraza
                          4: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=400&h=400&q=80", // pancakes
                          5: "https://images.unsplash.com/photo-1505253213348-cd54c92b37ed?auto=format&fit=crop&w=400&h=400&q=80", // burrata
                          6: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=400&h=400&q=80"  // zumo verde
                        };
                        target.src = foodBackupImages[post.id as keyof typeof foodBackupImages] + '&backup-food=true';
                      } else {
                        // Último recurso: imagen genérica de café
                        target.src = "https://images.unsplash.com/photo-1559154755-82a173460e78?auto=format&fit=crop&w=400&h=400&q=80";
                      }
                    }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="text-white text-center p-2">
                      <Instagram className="h-6 w-6 mx-auto mb-2" />
                      <p className="text-sm">{post.likes} ❤️</p>
                      {post.isOriginal && (
                        <Badge variant="secondary" className="text-xs mt-1">
                          Original
                        </Badge>
                      )}
                    </div>
                  </motion.div>
                  
                  {/* Tags overlay */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag: string, tagIndex: number) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs bg-black/70 text-white border-0"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Link to Instagram post */}
                  {post.permalink && (
                    <a
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0"
                      aria-label={`Ver post en Instagram: ${post.caption}`}
                    />
                  )}
                </motion.div>
              ))
            )}
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-[var(--cobalt-blue)] text-[var(--cobalt-blue)] hover:bg-[var(--cobalt-blue)] hover:text-white"
                asChild
              >
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 mr-2" />
                  {TEXTS.social.followText}
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}