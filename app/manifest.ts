import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fresquito Brunch & Coffee - El Mejor Brunch en Las Canteras',
    short_name: 'Fresquito',
    description: 'El mejor brunch en Las Canteras, Las Palmas de Gran Canaria. Ambiente work-friendly y pet-friendly.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
