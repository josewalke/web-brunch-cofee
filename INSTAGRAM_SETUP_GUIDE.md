# 📸 Guía Completa: Configuración de Instagram

## 🎯 **Resumen Ejecutivo**

Esta guía te ayudará a configurar la integración de Instagram usando **APIs oficiales** para tu sitio web de café. El sistema soporta dos tipos de cuentas:

1. **Instagram Graph API** - Para cuentas Business/Creator
2. **Instagram Basic Display API** - Para cuentas personales

## 🚀 **Paso a Paso Completo**

### **Paso 1: Preparación**

#### **1.1 Verificar tipo de cuenta**
- **Business/Creator:** Ve a tu perfil de Instagram → Configuración → Cuenta → Cambiar a cuenta profesional
- **Personal:** Mantén tu cuenta personal

#### **1.2 Tener una Página de Facebook (solo para Business/Creator)**
- Ve a [Facebook](https://facebook.com)
- Crea una página para tu negocio
- Vincula tu cuenta de Instagram a esta página

### **Paso 2: Crear App en Facebook Developers**

#### **2.1 Acceder a Facebook Developers**
1. Ve a [Facebook Developers](https://developers.facebook.com/)
2. Inicia sesión con tu cuenta de Facebook
3. Haz clic en "Mis Apps" → "Crear App"

#### **2.2 Crear nueva app**
1. Selecciona "Consumer" (para cuentas personales) o "Business" (para Business/Creator)
2. Completa la información:
   - **Nombre de la app:** `Fresquito Instagram Feed`
   - **Email de contacto:** Tu email
   - **Categoría de la app:** `Entretenimiento` o `Negocios`
3. Haz clic en "Crear App"

### **Paso 3: Configurar Instagram Graph API (Business/Creator)**

#### **3.1 Añadir producto**
1. En tu app, ve a "Add Product"
2. Busca "Instagram Graph API"
3. Haz clic en "Set Up"

#### **3.2 Configurar permisos**
1. Ve a "App Review" → "Permissions and Features"
2. Solicita estos permisos:
   - `instagram_basic` - Acceso básico a Instagram
   - `pages_show_list` - Listar páginas
   - `pages_read_engagement` - Leer engagement de páginas

#### **3.3 Obtener Access Token**
1. Ve a "Tools" → "Graph API Explorer"
2. Selecciona tu app en el dropdown
3. En "Permissions", selecciona:
   - `instagram_basic`
   - `pages_show_list`
   - `pages_read_engagement`
4. Haz clic en "Generate Access Token"
5. **Copia el token** (lo necesitarás después)

#### **3.4 Obtener Instagram User ID**
1. Ve a tu Página de Facebook
2. Copia el ID de la página (está en la URL o en Configuración → Información de la página)
3. Usa este endpoint en Graph API Explorer:
   ```
   GET https://graph.facebook.com/v19.0/{page-id}?fields=instagram_business_account&access_token={tu-token}
   ```
4. **Copia el `instagram_business_account.id`** (este es tu Instagram User ID)

### **Paso 4: Configurar Instagram Basic Display API (Personal)**

#### **4.1 Añadir producto**
1. En tu app, ve a "Add Product"
2. Busca "Instagram Basic Display"
3. Haz clic en "Set Up"

#### **4.2 Configurar OAuth**
1. Ve a "Instagram Basic Display" → "Basic Display"
2. En "Client OAuth Settings":
   - **Valid OAuth Redirect URIs:** `https://tu-dominio.com/auth/instagram/callback`
   - **Deauthorize Callback URL:** `https://tu-dominio.com/auth/instagram/deauthorize`
   - **Data Deletion Request URL:** `https://tu-dominio.com/auth/instagram/delete`

#### **4.3 Obtener Access Token**
1. Ve a "Instagram Basic Display" → "Basic Display"
2. Copia el **Client ID** y **Client Secret**
3. Sigue el flujo OAuth:
   ```
   https://api.instagram.com/oauth/authorize?client_id={client-id}&redirect_uri={redirect-uri}&scope=user_profile,user_media&response_type=code
   ```
4. Intercambia el código por un token de larga duración

### **Paso 5: Configurar Variables de Entorno**

#### **5.1 Crear archivo .env.local**
En la raíz del proyecto, crea un archivo `.env.local`:

```env
# Instagram Graph API (Business/Creator accounts)
INSTAGRAM_ACCESS_TOKEN=tu_access_token_aqui
INSTAGRAM_USER_ID=tu_instagram_user_id_aqui

# Instagram Basic Display API (Personal accounts)
INSTAGRAM_BASIC_TOKEN=tu_basic_token_aqui
```

#### **5.2 Ejemplo con valores reales**
```env
# Ejemplo para Business/Creator
INSTAGRAM_ACCESS_TOKEN=EAABwzLixnjYBO7ZC...
INSTAGRAM_USER_ID=17841405793087218

# Ejemplo para Personal
INSTAGRAM_BASIC_TOKEN=IGQVJYeUk4YWNIY1h3...
```

### **Paso 6: Verificar Configuración**

#### **6.1 Probar en desarrollo**
1. Ejecuta `npm run dev`
2. Ve a `http://localhost:3000`
3. Navega a la sección de Instagram
4. Verifica que aparezca el estado de la API

#### **6.2 Verificar logs**
1. Abre la consola del navegador (F12)
2. Busca mensajes como:
   - ✅ "Instagram Graph API (Business/Creator)"
   - ✅ "Instagram Basic Display API (Personal)"
   - ⚠️ "Contenido de respaldo (APIs no configuradas)"

## 🔧 **Configuración Avanzada**

### **Cambiar duración del cache**
Edita `lib/instagram-config.ts`:
```typescript
export const INSTAGRAM_CONFIG: InstagramConfig = {
  // ... otras configuraciones
  cacheDuration: 60 * 60 * 1000, // 1 hora en lugar de 30 minutos
  maxPosts: 12, // Más posts en lugar de 6
};
```

### **Personalizar contenido de respaldo**
Edita `lib/instagram-official.ts` en la función `getFallbackPosts()`:
```typescript
private getFallbackPosts(): InstagramPost[] {
  return [
    {
      id: "tu-post-1",
      image: "https://tu-imagen.com/imagen.jpg",
      caption: "Tu caption personalizado",
      likes: 150,
      timeAgo: "1h",
      isOriginal: true,
      tags: ["#TuTag", "#Personalizado"]
    }
  ];
}
```

## 🐛 **Solución de Problemas**

### **Error: "No hay configuración válida"**
- ✅ Verifica que las variables de entorno estén en `.env.local`
- ✅ Comprueba que los nombres de las variables sean exactos
- ✅ Reinicia el servidor de desarrollo después de cambiar variables

### **Error: "Graph API failed"**
- ✅ Verifica que el Access Token sea válido
- ✅ Comprueba que el User ID sea correcto
- ✅ Asegúrate de que la cuenta sea Business/Creator
- ✅ Verifica que los permisos estén aprobados

### **Error: "Basic Display API failed"**
- ✅ Verifica que el Basic Token sea válido
- ✅ Comprueba que el flujo OAuth esté completo
- ✅ Asegúrate de que la URI de redirección esté configurada

### **Contenido de respaldo siempre visible**
- ✅ Verifica que las APIs estén configuradas correctamente
- ✅ Comprueba los logs en la consola
- ✅ Asegúrate de que los tokens no hayan expirado

## 📊 **Monitoreo y Mantenimiento**

### **Verificar estado de APIs**
El sistema muestra automáticamente:
- ✅ **Verde:** APIs funcionando correctamente
- ⚠️ **Naranja:** Usando contenido de respaldo
- ❌ **Rojo:** Error en la configuración

### **Renovar tokens**
- **Graph API:** Los tokens pueden expirar, renóvalos cuando sea necesario
- **Basic Display:** Los tokens de larga duración duran 60 días

### **Logs importantes**
Busca estos mensajes en la consola:
```
✅ Instagram Graph API (Business/Creator) - Funcionando
✅ Instagram Basic Display API (Personal) - Funcionando
⚠️ APIs oficiales no disponibles, usando contenido de respaldo
❌ Graph API failed: 400 - Invalid access token
```

## 🎯 **Próximos Pasos**

### **Inmediato:**
1. ✅ Configura las APIs según esta guía
2. ✅ Verifica que funcionen en desarrollo
3. ✅ Personaliza el contenido de respaldo

### **Futuro:**
1. 🔗 Conecta con Instagram real
2. 📊 Añade analytics de engagement
3. 🎨 Personaliza la interfaz
4. 📱 Añade notificaciones de nuevos posts

## 📞 **Soporte**

Si necesitas ayuda:
1. **Revisa esta guía** paso a paso
2. **Consulta los logs** en la consola
3. **Verifica la configuración** de Facebook Developers
4. **Contacta al desarrollador** si persisten los problemas

---

**¡Tu Instagram feed estará funcionando en poco tiempo! 🎉**
