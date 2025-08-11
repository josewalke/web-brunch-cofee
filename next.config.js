/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para exportación estática
  output: 'export',
  
  // Configuración específica para GitHub Pages
  basePath: '/web-brunch-cofee',
  assetPrefix: '/web-brunch-cofee/',
  
  // Configuración de imágenes
  images: {
    unoptimized: true,
  },
  
  // Configuración de trailing slash
  trailingSlash: true,
  
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
