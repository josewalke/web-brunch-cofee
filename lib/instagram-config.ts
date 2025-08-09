// Configuración para APIs oficiales de Instagram

export interface InstagramConfig {
  // Instagram Graph API (Business/Creator accounts)
  graphApi: {
    baseUrl: string;
    accessToken: string;
    userId: string;
  };
  // Instagram Basic Display API (Personal accounts)
  basicDisplay: {
    baseUrl: string;
    accessToken: string;
  };
  // Configuración general
  cacheDuration: number;
  maxPosts: number;
  fallbackEnabled: boolean;
}

// Configuración por defecto
export const INSTAGRAM_CONFIG: InstagramConfig = {
  // Para Instagram Graph API (Business/Creator accounts)
  graphApi: {
    baseUrl: 'https://graph.facebook.com/v19.0',
    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN || '',
    userId: process.env.INSTAGRAM_USER_ID || '',
  },
  // Para Instagram Basic Display API (Personal accounts)
  basicDisplay: {
    baseUrl: 'https://graph.instagram.com',
    accessToken: process.env.INSTAGRAM_BASIC_TOKEN || '',
  },
  // Configuración general
  cacheDuration: 30 * 60 * 1000, // 30 minutos
  maxPosts: 6,
  fallbackEnabled: true
};

// Función para validar la configuración
export function validateInstagramConfig(): {
  hasGraphAPI: boolean;
  hasBasicDisplay: boolean;
  isValid: boolean;
} {
  const hasGraphAPI = !!(INSTAGRAM_CONFIG.graphApi.accessToken && INSTAGRAM_CONFIG.graphApi.userId);
  const hasBasicDisplay = !!INSTAGRAM_CONFIG.basicDisplay.accessToken;
  const isValid = hasGraphAPI || hasBasicDisplay;

  return {
    hasGraphAPI,
    hasBasicDisplay,
    isValid
  };
}

// Función para obtener la configuración activa
export function getActiveConfig(): 'graph' | 'basic' | 'none' {
  const { hasGraphAPI, hasBasicDisplay } = validateInstagramConfig();
  
  if (hasGraphAPI) return 'graph';
  if (hasBasicDisplay) return 'basic';
  return 'none';
}
