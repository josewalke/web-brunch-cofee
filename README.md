# 🍳 Fresquito Brunch & Coffee - Website

Sitio web moderno para el café de barrio cerca de Las Canteras, Gran Canaria. Brunch sin prisas, Wi-Fi listo y café serio para empezar el día como debe ser.

## 🚀 Características

- **Diseño moderno** - Interfaz atractiva con animaciones suaves
- **Instagram feed automático** - Posts reales usando APIs oficiales
- **Responsive** - Funciona perfectamente en móvil y desktop
- **Performance optimizado** - Carga rápida y cache inteligente
- **SEO friendly** - Meta tags, sitemap y robots.txt
- **TypeScript** - Código tipado y mantenible

## 🛠️ Tecnologías

- **Framework:** Next.js 14
- **Lenguaje:** TypeScript
- **Styling:** Tailwind CSS
- **Animaciones:** Framer Motion
- **UI Components:** Radix UI
- **Deployment:** Vercel (recomendado)

## 📦 Instalación

1. **Clona el repositorio:**
```bash
git clone <tu-repositorio>
cd "Café Brunch Website - Las Canteras"
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Ejecuta en desarrollo:**
```bash
npm run dev
```

4. **Abre en tu navegador:**
```
http://localhost:3000
```

## 📸 Configuración de Instagram

### 🎯 **¿Por qué APIs oficiales?**

- ✅ **Cumple Términos de Uso** - No hay riesgo de bloqueo
- ✅ **Estable y confiable** - No se rompe con cambios de Instagram
- ✅ **Datos reales** - Posts, likes, captions, timestamps reales
- ✅ **Performance optimizado** - Cache inteligente y rate limiting

### 🔧 **Paso 1: Crear app en Facebook Developers**

1. Ve a [Facebook Developers](https://developers.facebook.com/)
2. Crea una nueva app
3. Selecciona "Consumer" o "Business"
4. Completa la información básica

### 🔧 **Paso 2: Configurar Instagram Graph API (Business/Creator)**

**Requisitos:**
- Cuenta de Instagram vinculada a una Página de Facebook
- Cuenta Business o Creator

**Configuración:**
1. **Añadir producto Instagram Graph API:**
   - En tu app, ve a "Add Product"
   - Busca "Instagram Graph API" y añádelo

2. **Configurar permisos:**
   - Ve a "App Review" > "Permissions and Features"
   - Solicita estos permisos:
     - `instagram_basic`
     - `pages_show_list`
     - `pages_read_engagement`

3. **Obtener Access Token:**
   - Ve a "Tools" > "Graph API Explorer"
   - Selecciona tu app
   - Genera un token con los permisos necesarios

4. **Obtener Instagram User ID:**
   - Usa este endpoint: `https://graph.facebook.com/v19.0/{page-id}?fields=instagram_business_account&access_token={token}`
   - El `instagram_business_account.id` es tu Instagram User ID

### 🔧 **Paso 3: Configurar Instagram Basic Display API (Personal)**

**Requisitos:**
- Cuenta personal de Instagram

**Configuración:**
1. **Añadir producto Instagram Basic Display:**
   - En tu app, ve a "Add Product"
   - Busca "Instagram Basic Display" y añádelo

2. **Configurar OAuth:**
   - Ve a "Instagram Basic Display" > "Basic Display"
   - Añade tu URI de redirección
   - Copia el Client ID y Client Secret

3. **Obtener Access Token:**
   - Sigue el flujo OAuth para obtener un token de larga duración

### 🔧 **Paso 4: Configurar variables de entorno**

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Instagram Graph API (Business/Creator accounts)
INSTAGRAM_ACCESS_TOKEN=tu_access_token_aqui
INSTAGRAM_USER_ID=tu_instagram_user_id_aqui

# Instagram Basic Display API (Personal accounts)
INSTAGRAM_BASIC_TOKEN=tu_basic_token_aqui
```

### 🔧 **Paso 5: Verificar configuración**

El sistema automáticamente detectará qué API usar basándose en las variables de entorno disponibles.

## 🏗️ Estructura del Proyecto

```
Café Brunch Website - Las Canteras/
├── app/                          # Next.js 14 App Router
│   ├── api/                      # API routes
│   │   └── instagram/            # Instagram API endpoint
│   ├── layout.tsx               # Layout principal
│   └── page.tsx                 # Página principal
├── components/                   # Componentes React
│   ├── sections/                # Secciones de la página
│   │   ├── SocialSection.tsx    # Instagram feed
│   │   ├── MenuSection.tsx      # Menú
│   │   └── LocationSection.tsx  # Ubicación
│   ├── ui/                      # Componentes UI
│   └── figma/                   # Componentes específicos
├── lib/                         # Utilidades y configuraciones
│   ├── instagram-config.ts      # Configuración de Instagram
│   ├── instagram-official.ts    # APIs oficiales de Instagram
│   ├── constants.ts             # Constantes del proyecto
│   └── types.ts                 # Tipos TypeScript
├── public/                      # Archivos estáticos
├── styles/                      # Estilos globales
└── docs/                        # Documentación
```

## 🎨 Personalización

### **Cambiar información del negocio:**
Edita `lib/constants.ts`:
```typescript
export const BUSINESS_INFO = {
  name: "Tu Nombre del Negocio",
  tagline: "Tu tagline personalizada",
  description: "Tu descripción",
  features: ["feature1", "feature2", "feature3"]
};
```

### **Cambiar menú:**
Edita `lib/constants.ts` en la sección `MENU_ITEMS`:
```typescript
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Tu Plato",
    description: "Descripción del plato",
    price: "8.50€",
    image: "url-de-la-imagen",
    tags: ["signature", "vegetariano"]
  }
];
```

### **Cambiar colores:**
Edita `styles/globals.css`:
```css
:root {
  --cobalt-blue: #1e40af;
  --plant-green: #16a34a;
  --stone-gray: #6b7280;
}
```

## 🚀 Deployment

### **Vercel (Recomendado):**

1. **Conecta tu repositorio:**
   - Ve a [Vercel](https://vercel.com)
   - Conecta tu repositorio de GitHub
   - Vercel detectará automáticamente Next.js

2. **Configura variables de entorno:**
   - En el dashboard de Vercel, ve a "Settings" > "Environment Variables"
   - Añade las variables de Instagram:
     - `INSTAGRAM_ACCESS_TOKEN`
     - `INSTAGRAM_USER_ID`
     - `INSTAGRAM_BASIC_TOKEN`

3. **Deploy:**
   - Vercel hará deploy automáticamente en cada push
   - Tu sitio estará disponible en `https://tu-proyecto.vercel.app`

### **Otros proveedores:**
- **Netlify:** Similar a Vercel
- **Railway:** Para aplicaciones más complejas
- **DigitalOcean:** Para control total

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Ejecuta en modo desarrollo
npm run build        # Construye para producción
npm run start        # Ejecuta en modo producción
npm run lint         # Ejecuta ESLint
```

## 📊 Monitoreo y Mantenimiento

### **Logs:**
- Los errores se registran automáticamente en la consola
- Revisa la consola del navegador para errores del frontend
- Revisa los logs del servidor para errores del backend

### **Cache:**
- El sistema cachea los posts de Instagram por 30 minutos
- Se actualiza automáticamente cada 30 minutos
- Puedes cambiar la duración en `lib/instagram-config.ts`

### **Tokens:**
- Los tokens de Instagram pueden expirar
- Renueva los tokens cuando sea necesario
- El sistema mostrará contenido de respaldo si los tokens fallan

## 🐛 Solución de Problemas

### **Instagram no carga:**
1. Verifica que las variables de entorno estén configuradas
2. Comprueba que los tokens sean válidos
3. Revisa la consola para errores específicos
4. El sistema mostrará contenido de respaldo automáticamente

### **Errores de build:**
1. Verifica que todas las dependencias estén instaladas
2. Comprueba que TypeScript esté configurado correctamente
3. Revisa los logs de build para errores específicos

### **Problemas de performance:**
1. Verifica que las imágenes estén optimizadas
2. Comprueba que el cache esté funcionando
3. Revisa las métricas de Core Web Vitals

## 📞 Soporte

Si necesitas ayuda:
1. **Revisa la documentación** - Archivos README y docs/
2. **Consulta los logs** - Consola del navegador y servidor
3. **Verifica la configuración** - Variables de entorno y tokens
4. **Contacta al desarrollador** - Si persisten los problemas

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- **Next.js** - Framework de React
- **Tailwind CSS** - Framework de CSS
- **Radix UI** - Componentes accesibles
- **Framer Motion** - Animaciones
- **Instagram** - APIs oficiales

---

**¡Disfruta de tu sitio web de café! ☕**
