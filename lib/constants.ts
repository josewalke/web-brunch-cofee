import { Coffee, Wifi, Heart, Clock, MapPin, Phone, Instagram, Mail, Briefcase } from "lucide-react";
import type { MenuItem, Badge, NavigationItem, ContactInfo, BusinessHours, SocialPost, TagColor } from "./types";

// Información del negocio
export const BUSINESS_INFO = {
  name: "Fresquito Brunch & Coffee",
  tagline: "Brunch sin prisas en Las Canteras",
  description: "Tu café de barrio donde el tiempo se detiene.",
  features: ["Work-friendly", "pet-friendly", "con el mejor café de la zona"]
};

// Información de contacto
export const CONTACT_INFO: ContactInfo = {
  phone: "+34 928 12 34 56",
  email: "hola@fresquito.com",
  address: {
    street: "C. Torres Quevedo, 12",
    city: "Las Palmas de Gran Canaria",
    postalCode: "35007"
  }
};

// Horarios de apertura
export const BUSINESS_HOURS: BusinessHours[] = [
  { day: "Lunes", hours: "9:30 - 15:00", isOpen: true },
  { day: "Martes", hours: "Cerrado", isOpen: false, isClosed: true },
  { day: "Miércoles - Viernes", hours: "9:30 - 15:00", isOpen: true },
  { day: "Sábado - Domingo", hours: "9:00 - 16:00", isOpen: true }
];

// Navegación principal
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: "#menu", label: "Carta" },
  { href: "#location", label: "Ubicación" },
  { href: "#contact", label: "Contacto" }
];

// Badges del hero
export const HERO_BADGES: Badge[] = [
  { icon: Wifi, label: "Wi-Fi gratis", color: "text-[var(--plant-green)]" },
  { icon: Heart, label: "Pet-friendly", color: "text-[var(--cobalt-blue)]" },
  { icon: Coffee, label: "Café premium", color: "text-[var(--stone-gray)]" },
  { icon: Clock, label: "Sin prisas", color: "text-orange-500" }
];

// Footer badges
export const FOOTER_BADGES: Badge[] = [
  { icon: Wifi, label: "Work-friendly", color: "text-[var(--plant-green)]" },
  { icon: Heart, label: "Pet-friendly", color: "text-[var(--cobalt-blue)]" },
  { icon: Briefcase, label: "Terraza", color: "text-[var(--stone-gray)]" }
];

// Colores de tags del menú
export const TAG_COLORS: TagColor = {
  signature: "bg-[var(--cobalt-blue)] text-white",
  vegetariano: "bg-[var(--plant-green)] text-white",
  vegano: "bg-green-600 text-white",
  fresco: "bg-blue-400 text-white",
  saludable: "bg-emerald-500 text-white",
  dulce: "bg-pink-500 text-white",
  desayuno: "bg-orange-500 text-white",
  detox: "bg-lime-600 text-white"
};

// Items del menú
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Huevos Florentine",
    description: "Huevos escalfados sobre pan tostado con espinacas frescas y salsa holandesa",
    price: "8.50€",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=400&h=300&q=80",
    tags: ["signature", "vegetariano"]
  },
  {
    id: 2,
    name: "Gran Bikini",
    description: "Nuestro sándwich estrella con jamón ibérico, queso manchego y tomate",
    price: "7.90€",
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=400&h=300&q=80",
    tags: ["signature"]
  },
  {
    id: 3,
    name: "Bowl de Burrata",
    description: "Burrata cremosa con tomates cherry, rúcula y aceite de albahaca",
    price: "9.20€",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&h=300&q=80",
    tags: ["vegetariano", "fresco"]
  },
  {
    id: 4,
    name: "Falafel Bowl",
    description: "Falafel casero con hummus, tahini, verduras frescas y quinoa",
    price: "8.90€",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&h=300&q=80",
    tags: ["vegano", "saludable"]
  },
  {
    id: 5,
    name: "Pancakes Clásicos",
    description: "Tortitas esponjosas con sirope de arce, frutos rojos y nata",
    price: "6.50€",
    image: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&w=400&h=300&q=80",
    tags: ["dulce", "desayuno"]
  },
  {
    id: 6,
    name: "Zumo Detox Verde",
    description: "Espinacas, apio, manzana verde, pepino y jengibre",
    price: "4.80€",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=400&h=300&q=80",
    tags: ["detox", "saludable"]
  }
];

// Posts de Instagram con imágenes reales de comida verificadas
export const INSTAGRAM_POSTS: SocialPost[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&h=400&q=80",
    caption: "Buenos días desde Las Canteras ☕ Café recién hecho y vistas al mar",
    likes: 147,
    timeAgo: "2h"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=400&h=400&q=80",
    caption: "Gran Bikini de la casa 🥪 Jamón ibérico y queso manchego al punto",
    likes: 203,
    timeAgo: "4h"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&h=400&q=80",
    caption: "Nuestra terraza pet-friendly 🐕 Donde tu mascota también es bienvenida",
    likes: 156,
    timeAgo: "8h"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&h=400&q=80",
    caption: "Pancakes del domingo 🥞 Con frutos rojos frescos y sirope de arce",
    likes: 189,
    timeAgo: "1d"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&h=400&q=80",
    caption: "Bowl de burrata cremosa 🍅 La combinación perfecta para el brunch",
    likes: 234,
    timeAgo: "2d"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1559154755-82a173460e78?auto=format&fit=crop&w=400&h=400&q=80",
    caption: "Zumo detox verde 🥒 Energía natural para empezar el día",
    likes: 112,
    timeAgo: "3d"
  }
];

// Testimonios
export const TESTIMONIALS = [
  {
    id: 1,
    text: "El mejor café de la zona. Ambiente súper tranquilo para trabajar y el personal es encantador.",
    author: "María García",
    rating: 5
  },
  {
    id: 2,
    text: "Me encanta venir con mi perrito. Es el único sitio cerca de la playa que es realmente pet-friendly.",
    author: "Carlos Ruiz",
    rating: 5
  },
  {
    id: 3,
    text: "Los huevos Florentine están buenísimos. Y las vistas desde la terraza no tienen precio.",
    author: "Ana López",
    rating: 5
  }
];

// URLs y enlaces
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/fresquitobrunch",
  maps: "https://maps.google.com/?q=C.+Torres+Quevedo,+12,+35007+Las+Palmas+de+Gran+Canaria,+Las+Palmas"
};

// Textos predefinidos
export const TEXTS = {
  hero: {
    title: "Brunch sin prisas en Las Canteras",
    subtitle: "Tu café de barrio donde el tiempo se detiene.",
    features: "Work-friendly, pet-friendly y con el mejor café de la zona.",
    openBadge: "☀️ Abierto hoy · 9:00 - 16:00"
  },
  menu: {
    title: "Nuestra Carta",
    subtitle: "Producto fresco y casero. Tostas, sándwiches, bowls y zumos naturales con guiños veggie para todos los gustos.",
    cta: "¿Te apetece venir a probar nuestras delicias?",
    reservationText: "Llámanos para reservar mesa"
  },
  location: {
    title: "Cerca de Las Canteras",
    subtitle: "A solo 3 minutos caminando de Playa Chica. El spot perfecto para desayunar antes o después de la playa.",
    tip: "💡 Tip: Los fines de semana solemos estar más llenos. Te recomendamos venir temprano o llamar para reservar.",
    reservationNote: "Para reservar: Llámanos al teléfono de arriba"
  },
  social: {
    title: "Síguenos en Instagram",
    subtitle: "Comparte tus momentos Fresquito con #FresquitoBrunch",
    followText: "Seguir en Instagram"
  },
  footer: {
    description: "Tu café de barrio cerca de Las Canteras. Brunch sin prisas, Wi-Fi listo y café serio para empezar el día como debe ser.",
    copyright: "© 2024 Fresquito Brunch & Coffee. A 3 min de Las Canteras, Gran Canaria."
  }
};