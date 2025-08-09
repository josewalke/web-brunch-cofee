import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'Fresquito Brunch & Coffee - El Mejor Brunch en Las Canteras, Las Palmas',
    template: '%s | Fresquito Brunch & Coffee - Las Canteras'
  },
  description: 'Descubre el mejor brunch en Las Canteras, Las Palmas de Gran Canaria. Fresquito Brunch & Coffee ofrece desayunos gourmet, café premium, ambiente work-friendly y pet-friendly. Ubicado a 3 minutos de Playa Chica. Reserva tu mesa hoy.',
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
    'restaurante familiar Las Canteras'
  ],
  authors: [{ name: 'Fresquito Brunch & Coffee', url: 'https://fresquito.com' }],
  creator: 'Fresquito Brunch & Coffee',
  publisher: 'Fresquito Brunch & Coffee',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fresquito.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Fresquito Brunch & Coffee - El Mejor Brunch en Las Canteras, Las Palmas',
    description: 'Descubre el mejor brunch en Las Canteras, Las Palmas de Gran Canaria. Ambiente work-friendly y pet-friendly. Ubicado a 3 minutos de Playa Chica.',
    url: 'https://fresquito.com',
    siteName: 'Fresquito Brunch & Coffee',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fresquito Brunch & Coffee - Brunch gourmet en Las Canteras, Las Palmas',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fresquito Brunch & Coffee - El Mejor Brunch en Las Canteras',
    description: 'Descubre el mejor brunch en Las Canteras, Las Palmas de Gran Canaria. Ambiente work-friendly y pet-friendly.',
    images: ['/og-image.jpg'],
    creator: '@fresquitobrunch',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'ES-CN',
    'geo.placename': 'Las Palmas de Gran Canaria',
    'geo.position': '28.1234;-15.4321',
    'ICBM': '28.1234, -15.4321',
    'DC.title': 'Fresquito Brunch & Coffee',
    'DC.creator': 'Fresquito Brunch & Coffee',
    'DC.subject': 'Brunch, Café, Restaurante, Las Canteras, Las Palmas',
    'DC.description': 'El mejor brunch en Las Canteras, Las Palmas de Gran Canaria',
    'DC.publisher': 'Fresquito Brunch & Coffee',
    'DC.contributor': 'Fresquito Brunch & Coffee',
    'DC.date': '2024',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': 'https://fresquito.com',
    'DC.language': 'es',
    'DC.coverage': 'Las Canteras, Las Palmas de Gran Canaria, España',
    'DC.rights': '© 2024 Fresquito Brunch & Coffee',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
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
  };

  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
