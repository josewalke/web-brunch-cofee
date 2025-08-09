// Configuración SEO centralizada
export const SEO_CONFIG = {
  // Información básica del sitio
  site: {
    name: 'Fresquito Brunch & Coffee',
    url: 'https://fresquito.com',
    description: 'El mejor brunch en Las Canteras, Las Palmas de Gran Canaria. Ambiente work-friendly y pet-friendly con café premium.',
    language: 'es',
    locale: 'es_ES',
  },

  // Palabras clave principales
  keywords: [
    'brunch Las Canteras',
    'café Las Palmas',
    'desayuno Gran Canaria',
    'brunch Las Palmas de Gran Canaria',
    'café de barrio Las Canteras',
    'work-friendly café',
    'pet-friendly restaurante',
    'mejor café Las Canteras',
    'desayuno gourmet Las Palmas',
    'café premium Gran Canaria',
    'restaurante Las Canteras',
    'brunch sin prisas',
    'café cerca playa',
    'desayuno saludable Las Palmas',
    'café terraza Las Canteras',
    'restaurante pet-friendly',
    'café work-friendly',
    'brunch vegetariano Las Palmas',
    'café orgánico Gran Canaria',
    'restaurante familiar Las Canteras',
    'café wifi Las Palmas',
    'brunch cerca playa',
    'desayuno Las Canteras',
    'café terraza Gran Canaria'
  ],

  // Datos estructurados
  structuredData: {
    restaurant: {
      "@type": "Restaurant",
      "name": "Fresquito Brunch & Coffee",
      "description": "El mejor brunch en Las Canteras, Las Palmas de Gran Canaria. Ambiente work-friendly y pet-friendly con café premium.",
      "url": "https://fresquito.com",
      "telephone": "+34 928 12 34 56",
      "email": "hola@fresquito.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C. Torres Quevedo, 12",
        "addressLocality": "Las Palmas de Gran Canaria",
        "postalCode": "35007",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.1234,
        "longitude": -15.4321
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday"],
          "opens": "09:30",
          "closes": "15:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Wednesday", "Thursday", "Friday"],
          "opens": "09:30",
          "closes": "15:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "16:00"
        }
      ],
      "servesCuisine": ["Brunch", "Café", "Desayuno", "Almuerzo"],
      "priceRange": "€€",
      "acceptsReservations": true,
      "petFriendly": true,
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Wi-Fi Gratis",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Terraza",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Work-friendly",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Pet-friendly",
          "value": true
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "156"
      },
      "image": [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=630&fit=crop&auto=format&q=80"
      ],
      "sameAs": [
        "https://instagram.com/fresquitobrunch"
      ]
    }
  },

  // Configuración para redes sociales
  social: {
    twitter: {
      handle: '@fresquitobrunch',
      site: '@fresquitobrunch',
    },
    facebook: {
      appId: 'your-facebook-app-id',
    },
    instagram: {
      username: 'fresquitobrunch',
    }
  },

  // Configuración para análisis
  analytics: {
    googleAnalytics: 'G-XXXXXXXXXX', // Reemplazar con tu ID de GA4
    googleTagManager: 'GTM-XXXXXXX', // Reemplazar con tu ID de GTM
  },

  // Configuración para verificación
  verification: {
    google: 'your-google-verification-code',
    bing: 'your-bing-verification-code',
    yandex: 'your-yandex-verification-code',
  }
};

// Función para generar metadatos dinámicos
export function generateMetadata(pageTitle?: string, pageDescription?: string) {
  const title = pageTitle 
    ? `${pageTitle} | ${SEO_CONFIG.site.name} - Las Canteras`
    : `${SEO_CONFIG.site.name} - El Mejor Brunch en Las Canteras, Las Palmas`;
  
  const description = pageDescription || SEO_CONFIG.site.description;

  return {
    title,
    description,
    keywords: SEO_CONFIG.keywords.join(', '),
    openGraph: {
      title,
      description,
      url: SEO_CONFIG.site.url,
      siteName: SEO_CONFIG.site.name,
      locale: SEO_CONFIG.site.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: SEO_CONFIG.social.twitter.handle,
    },
  };
}
