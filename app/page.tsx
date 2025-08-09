import App from '../App'

export default function Home() {
  return (
    <>
      <App />
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Fresquito Brunch & Coffee - El Mejor Brunch en Las Canteras",
            "description": "Descubre el mejor brunch en Las Canteras, Las Palmas de Gran Canaria. Fresquito Brunch & Coffee ofrece desayunos gourmet, café premium, ambiente work-friendly y pet-friendly.",
            "url": "https://fresquito.com",
            "mainEntity": {
              "@type": "Restaurant",
              "name": "Fresquito Brunch & Coffee",
              "description": "El mejor brunch en Las Canteras, Las Palmas de Gran Canaria",
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
              "telephone": "+34 928 12 34 56",
              "email": "hola@fresquito.com",
              "servesCuisine": ["Brunch", "Café", "Desayuno", "Almuerzo"],
              "priceRange": "€€",
              "acceptsReservations": true,
              "petFriendly": true
            }
          }),
        }}
      />
    </>
  )
}
