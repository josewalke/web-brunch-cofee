# 🔧 Guía de Solución de Problemas

## 🚨 Errores Comunes y Soluciones

### **1. Error: Iconos faltantes (404)**

**Problema:**
```
Failed to load resource: the server responded with a status of 404 (Not Found)
Error while trying to use the following icon from the Manifest: http://localhost:3000/icon-192x192.png
```

**Solución:**
✅ **Ya solucionado** - He actualizado el `manifest.ts` para usar solo el favicon.ico

**Si quieres iconos personalizados:**
1. Crea iconos en los tamaños necesarios:
   - `public/icon-192x192.png` (192x192 píxeles)
   - `public/icon-512x512.png` (512x512 píxeles)

2. Actualiza `app/manifest.ts`:
```typescript
icons: [
  {
    src: '/favicon.ico',
    sizes: 'any',
    type: 'image/x-icon',
  },
  {
    src: '/icon-192x192.png',
    sizes: '192x192',
    type: 'image/png',
  },
  {
    src: '/icon-512x512.png',
    sizes: '512x512',
    type: 'image/png',
  },
],
```

### **2. Error: Imágenes no cargan**

**Problema:**
```
Failed to load image: https://images.unsplash.com/photo-1559154755-82a173460e78?w=400&h=400&fit=crop&auto=format&q=80
```

**Solución:**
✅ **COMPLETAMENTE SOLUCIONADO** - Sistema de fallback en cascada implementado:

1. **Primera opción:** Imagen original (Unsplash, etc.)
2. **Segunda opción:** Placeholder SVG atractivo y confiable
3. **Tercera opción:** Placeholder básico con iconos

**Mejoras implementadas:**
- ✅ **SVG Placeholders locales** - No dependen de servicios externos
- ✅ **Fallback en cascada** - Si falla una imagen, prueba la siguiente
- ✅ **Placeholders temáticos** - Diferentes para food/cafe
- ✅ **Diseño atractivo** - Gradientes y iconos profesionales
- ✅ **Sistema robusto** - Siempre muestra algo bonito

**Uso:**
```tsx
<ImageWithFallback 
  src={imageUrl} 
  alt="Descripción" 
  category="food" // Automáticamente usa placeholders de comida
/>
```

### **3. Error: Variables de entorno no cargan**

**Problema:**
```
Environment variables not found
```

**Solución:**
1. Crea archivo `.env.local` en la raíz del proyecto
2. Añade las variables necesarias:
```env
# Instagram Graph API (Business/Creator accounts)
INSTAGRAM_ACCESS_TOKEN=tu_access_token_aqui
INSTAGRAM_USER_ID=tu_instagram_user_id_aqui

# Instagram Basic Display API (Personal accounts)
INSTAGRAM_BASIC_TOKEN=tu_basic_token_aqui
```

3. Reinicia el servidor de desarrollo:
```bash
npm run dev
```

### **4. Error: TypeScript compilation**

**Problema:**
```
TypeScript compilation errors
```

**Solución:**
1. Verifica que todas las dependencias estén instaladas:
```bash
npm install
```

2. Limpia la caché:
```bash
rm -rf .next
npm run dev
```

3. Verifica tipos:
```bash
npx tsc --noEmit
```

### **5. Error: Build falla**

**Problema:**
```
Build failed
```

**Solución:**
1. Verifica errores de TypeScript:
```bash
npx tsc --noEmit
```

2. Verifica linting:
```bash
npm run lint
```

3. Limpia y reconstruye:
```bash
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### **6. Error: btoa() con caracteres Unicode**

**Problema:**
```
InvalidCharacterError: Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.
```

**Solución:**
✅ **SOLUCIONADO** - Implementamos función `safeBase64Encode()`:

- ✅ **Manejo seguro de Unicode** - Convierte emojis y caracteres especiales
- ✅ **Fallback automático** - Si falla Base64, usa URL encoding
- ✅ **Texto limpio** - Remueve caracteres problemáticos automáticamente
- ✅ **Sin errores** - Los placeholders siempre funcionan

**Características:**
- Emojis en captions ✅ - Se mantienen
- Emojis en placeholders ✅ - Se limpian automáticamente  
- SVG generado ✅ - Siempre válido
- Base64 encoding ✅ - Manejo seguro de Unicode

## 🎯 **Verificación de Funcionamiento**

### **Checklist de verificación:**

- ✅ **Iconos:** Favicon se muestra correctamente
- ✅ **Imágenes:** Se cargan o muestran placeholders
- ✅ **Instagram:** Feed funciona (real o respaldo)
- ✅ **Responsive:** Funciona en móvil y desktop
- ✅ **Performance:** Carga rápida
- ✅ **SEO:** Meta tags correctos

### **Comandos de verificación:**

```bash
# Verificar tipos
npx tsc --noEmit

# Verificar linting
npm run lint

# Verificar build
npm run build

# Verificar desarrollo
npm run dev
```

## 🔍 **Debugging**

### **Herramientas útiles:**

1. **Consola del navegador (F12):**
   - Errores de JavaScript
   - Errores de red
   - Logs de la aplicación

2. **Network tab:**
   - Verificar que las imágenes se cargan
   - Verificar que las APIs responden

3. **React DevTools:**
   - Inspeccionar componentes
   - Verificar props y estado

### **Logs importantes:**

Busca estos mensajes en la consola:
```
✅ Instagram Graph API (Business/Creator) - Funcionando
✅ Instagram Basic Display API (Personal) - Funcionando
⚠️ APIs oficiales no disponibles, usando contenido de respaldo
❌ Graph API failed: 400 - Invalid access token
```

## 📞 **Soporte Adicional**

### **Si los problemas persisten:**

1. **Revisa la documentación:**
   - `README.md` - Guía principal
   - `INSTAGRAM_SETUP_GUIDE.md` - Configuración de Instagram
   - `ENV_SETUP.md` - Variables de entorno

2. **Verifica la configuración:**
   - Variables de entorno en `.env.local`
   - Configuración de Facebook Developers
   - Tokens de Instagram

3. **Contacta al desarrollador:**
   - Proporciona logs de error
   - Describe los pasos para reproducir
   - Incluye información del sistema

## 🎉 **Estado Actual**

**Tu sitio web ahora:**
- ✅ **Iconos funcionando** - Favicon y manifest correctos
- ✅ **Imágenes robustas** - Fallbacks y validación
- ✅ **Error handling** - Manejo elegante de errores
- ✅ **Performance** - Carga optimizada
- ✅ **UX mejorada** - Placeholders y loading states

**¡Todos los errores están solucionados! 🚀**
