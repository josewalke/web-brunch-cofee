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
    // Solo mantener features compatibles con export estático
  },
  
  // Configuración de webpack
  webpack: (config, { isServer }) => {
    // Configuraciones específicas de webpack si las necesitas
    if (!isServer) {
      // Configuraciones para el cliente
    }
    return config;
  },
};

module.exports = nextConfig;
