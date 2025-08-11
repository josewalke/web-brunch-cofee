/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para exportación estática
  output: 'export',
  
  // Configuración de imágenes
  images: {
    unoptimized: true,
  },
  
  // Configuración de trailing slash
  trailingSlash: true,
  
  // Configuración de base path (útil si tienes subdirectorios)
  // basePath: '',
  
  // Configuración de asset prefix (útil para CDN)
  // assetPrefix: '',
  
  // Configuración de experimental features
  experimental: {
    // Deshabilitar features que no funcionan en export estático
    appDir: true,
  },
  
  // Configuración de webpack
  webpack: (config, { isServer }) => {
    // Configuraciones específicas de webpack si las necesitas
    if (!isServer) {
      // Configuraciones para el cliente
    }
    return config;
  },
  
  // Configuración de headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  
  // Configuración de redirects
  async redirects() {
    return [
      // Añade redirects personalizados si los necesitas
    ];
  },
};

module.exports = nextConfig;
