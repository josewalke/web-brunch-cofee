// Utilidades para manejo de imágenes

export interface ImageConfig {
  src: string;
  alt: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
}

// Función segura para convertir a Base64 (maneja Unicode)
function safeBase64Encode(str: string): string {
  try {
    // Convertir a UTF-8 bytes y luego a Base64
    return btoa(unescape(encodeURIComponent(str)));
  } catch {
    // Fallback: usar URL encoding directo
    return encodeURIComponent(str);
  }
}

// Función para crear placeholder de imagen
export function createImagePlaceholder(width: number = 400, height: number = 400, text: string = 'Imagen'): string {
  // Limpiar el texto de caracteres problemáticos para SVG
  const cleanText = text.replace(/[🥪☕🥞🥗🍅🥐🏪💼🐕]/g, '').trim() || 'Fresquito';
  
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2563eb;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#1e40af;stop-opacity:0.6" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad1)" rx="12"/>
      <circle cx="${width/2}" cy="${height/3}" r="${Math.min(width, height)/8}" fill="white" opacity="0.9"/>
      <rect x="${width/4}" y="${height*0.6}" width="${width/2}" height="${height*0.2}" rx="8" fill="white" opacity="0.8"/>
      <text x="${width/2}" y="${height*0.9}" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="${Math.min(width, height)/20}" font-weight="bold">${cleanText}</text>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${safeBase64Encode(svg)}`;
}

// URLs de imágenes de respaldo - usando placeholders SVG más confiables
export const FALLBACK_IMAGES = {
  food: [
    // Placeholders SVG locales más confiables
    createImagePlaceholder(400, 400, 'Sandwich Gourmet'),
    createImagePlaceholder(400, 400, 'Cafe Especial'),
    createImagePlaceholder(400, 400, 'Pancakes Caseros'),
    createImagePlaceholder(400, 400, 'Bowl Saludable'),
    createImagePlaceholder(400, 400, 'Burrata Fresca'),
    createImagePlaceholder(400, 400, 'Brunch Delicioso')
  ],
  cafe: [
    createImagePlaceholder(400, 400, 'Cafe Premium'),
    createImagePlaceholder(400, 400, 'Terraza Acogedora'),
    createImagePlaceholder(400, 400, 'Espacio Work-Friendly')
  ]
};

// URLs de Unsplash como respaldo secundario (opcional)
export const UNSPLASH_FALLBACKS = {
  food: [
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=400&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop&auto=format&q=80'
  ],
  cafe: [
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=400&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop&auto=format&q=80'
  ]
};

// Función para obtener una imagen de respaldo aleatoria
export function getRandomFallbackImage(category: 'food' | 'cafe' = 'food'): string {
  const images = FALLBACK_IMAGES[category];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

// Función para validar URL de imagen
export function isValidImageUrl(url: string): boolean {
  if (!url) return false;
  
  // Verificar que sea una URL válida
  try {
    new URL(url);
  } catch {
    return false;
  }
  
  // Verificar que sea una imagen
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];
  const hasImageExtension = imageExtensions.some(ext => 
    url.toLowerCase().includes(ext)
  );
  
  return hasImageExtension || url.includes('unsplash.com') || url.includes('images.unsplash.com');
}

// Función para optimizar URL de imagen de Unsplash
export function optimizeUnsplashUrl(url: string, width: number = 400, height: number = 400): string {
  if (!url.includes('unsplash.com')) return url;
  
  // Si ya tiene parámetros de optimización, devolver como está
  if (url.includes('?w=') || url.includes('&w=')) return url;
  
  // Añadir parámetros de optimización
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}w=${width}&h=${height}&fit=crop&auto=format&q=80`;
}

// Función para intentar cargar imagen de Unsplash como respaldo
export function tryUnsplashFallback(category: 'food' | 'cafe' = 'food'): string {
  const images = UNSPLASH_FALLBACKS[category];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}
