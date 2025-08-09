# 🔧 Configuración de Variables de Entorno

## 📝 Archivo .env.local

Crea un archivo `.env.local` en la raíz del proyecto con la siguiente configuración:

```env
# Instagram Configuration
# Copia este archivo a .env.local y completa con tus datos

# Instagram Graph API (Business/Creator accounts)
# Obtén estos valores en: https://developers.facebook.com/
INSTAGRAM_ACCESS_TOKEN=tu_access_token_aqui
INSTAGRAM_USER_ID=tu_instagram_user_id_aqui

# Instagram Basic Display API (Personal accounts)
# Obtén este valor siguiendo el flujo OAuth
INSTAGRAM_BASIC_TOKEN=tu_basic_token_aqui

# Configuración opcional
# NEXTAUTH_SECRET=tu_secret_aqui
# NEXTAUTH_URL=http://localhost:3000
```

## 🔍 Cómo obtener los valores

### **Para Instagram Graph API (Business/Creator):**

1. **Access Token:**
   - Ve a [Facebook Developers](https://developers.facebook.com/)
   - Crea una app o usa una existente
   - Ve a "Tools" > "Graph API Explorer"
   - Selecciona tu app y genera un token con permisos:
     - `instagram_basic`
     - `pages_show_list`
     - `pages_read_engagement`

2. **User ID:**
   - Usa este endpoint: `https://graph.facebook.com/v19.0/{page-id}?fields=instagram_business_account&access_token={token}`
   - El `instagram_business_account.id` es tu Instagram User ID

### **Para Instagram Basic Display API (Personal):**

1. **Basic Token:**
   - Ve a [Facebook Developers](https://developers.facebook.com/)
   - Crea una app o usa una existente
   - Añade el producto "Instagram Basic Display"
   - Sigue el flujo OAuth para obtener un token de larga duración

## ✅ Verificación

Una vez configuradas las variables, el sistema automáticamente:

1. **Detecta qué API usar** basándose en las variables disponibles
2. **Muestra el estado** en la interfaz (Graph API, Basic Display, o Fallback)
3. **Usa contenido de respaldo** si no hay configuración válida

## 🚨 Importante

- **Nunca subas** el archivo `.env.local` a Git
- **Mantén seguros** tus tokens de acceso
- **Renueva los tokens** cuando sea necesario
- **Usa variables de entorno** en producción

## 📞 Soporte

Si tienes problemas:
1. Verifica que las variables estén correctamente nombradas
2. Comprueba que los tokens sean válidos
3. Revisa la consola para errores específicos
4. Consulta la documentación de Facebook Developers
