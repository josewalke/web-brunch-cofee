import { Instagram, Star, User } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    id: 1,
    name: "María G.",
    text: "El mejor sitio para trabajar en Las Palmas. WiFi rápido, café delicioso y el ambiente perfecto.",
    rating: 5,
    source: "Google Reviews"
  },
  {
    id: 2,
    name: "Carlos R.",
    text: "Los pancakes están buenísimos y mi perro Luna siempre es bienvenida en la terraza.",
    rating: 5,
    source: "Local Guide GC"
  },
  {
    id: 3,
    name: "Ana K.",
    text: "Desayuno aquí todos los viernes antes de ir a la playa. La vajilla azul es preciosa!",
    rating: 5,
    source: "Instagram"
  }
];

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=300&h=300&fit=crop&auto=format",
    likes: 234,
    caption: "Bowl de burrata fresh 💙"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=300&h=300&fit=crop&auto=format",
    likes: 189,
    caption: "Pancakes Sunday mood ☀️"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=300&h=300&fit=crop&auto=format",
    likes: 156,
    caption: "Detox green juice 🌱"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=300&fit=crop&auto=format",
    likes: 298,
    caption: "Terraza vibes with friends ☕"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop&auto=format",
    likes: 167,
    caption: "Avocado toast perfection 🥑"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300&h=300&fit=crop&auto=format",
    likes: 201,
    caption: "Gran Bikini, our signature 🥪"
  }
];

export function SocialSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-[var(--cobalt-blue)] mb-4">
              Lo que dicen de nosotros
            </h2>
            <p className="text-muted-foreground">
              Mencionados en Local Guide Gran Canaria y Erasmus Life Las Palmas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{testimonial.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{testimonial.source}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Instagram Feed */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif text-[var(--cobalt-blue)] mb-4 flex items-center justify-center gap-2">
              <Instagram className="h-6 w-6" />
              @fresquitobrunch
            </h3>
            <p className="text-muted-foreground">
              Síguenos para ver las últimas delicias y momentos en la terraza
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {instagramPosts.map((post) => (
              <div key={post.id} className="relative group cursor-pointer">
                <ImageWithFallback
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-32 md:h-40 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center">
                    <Instagram className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-sm">{post.likes} ❤️</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-[var(--cobalt-blue)] text-[var(--cobalt-blue)] hover:bg-[var(--cobalt-blue)] hover:text-white"
              asChild
            >
              <a href="https://instagram.com/fresquitobrunch" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 mr-2" />
                Síguenos en Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}