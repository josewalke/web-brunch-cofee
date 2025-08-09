# 📸 Contenido Original de Instagram

## 🎯 Cómo añadir contenido original

### **Opción 1: Subida manual (Recomendado)**

1. **Prepara tus imágenes:**
   - Formato: JPG, PNG, WebP
   - Tamaño recomendado: 1080x1080px (cuadrado) o 1080x1350px (vertical)
   - Peso máximo: 5MB
   - Calidad: Alta (80%+)

2. **Nombra tus archivos:**
   ```
   original-1.jpg
   original-2.jpg
   original-3.jpg
   ...
   ```

3. **Sube las imágenes:**
   - Coloca las imágenes en esta carpeta: `/public/images/instagram/`
   - Asegúrate de que los nombres coincidan con los del código

4. **Actualiza el código:**
   - Ve a `lib/instagram.ts`
   - Actualiza las rutas de las imágenes
   - Añade descripciones y etiquetas

### **Opción 2: Subida automática (Avanzado)**

1. **Configura la API de Instagram:**
   - Crea una app en [Facebook Developers](https://developers.facebook.com/)
   - Obtén un access token
   - Configura las variables de entorno

2. **Variables de entorno necesarias:**
   ```env
   NEXT_PUBLIC_INSTAGRAM_APP_ID=tu_app_id
   INSTAGRAM_APP_SECRET=tu_app_secret
   INSTAGRAM_ACCESS_TOKEN=tu_access_token
   INSTAGRAM_USER_ID=tu_user_id
   ```

3. **Usa el componente de subida:**
   - Haz clic en "Subir contenido original" en la sección de Instagram
   - Selecciona una imagen
   - Añade descripción y etiquetas
   - Sube el contenido

## 📋 Estructura de archivos

```
public/
└── images/
    └── instagram/
        ├── README.md (este archivo)
        ├── original-1.jpg
        ├── original-2.jpg
        ├── original-3.jpg
        ├── original-4.jpg
        ├── original-5.jpg
        └── original-6.jpg
```

## 🎨 Consejos para contenido original

### **Tipos de contenido recomendados:**
- ✅ **Platos del menú** - Fotos profesionales de tus mejores platos
- ✅ **Ambiente del local** - Terraza, interior, detalles decorativos
- ✅ **Experiencia del cliente** - Gente disfrutando, mascotas, trabajo
- ✅ **Proceso de preparación** - Barista, cocina, ingredientes frescos
- ✅ **Eventos especiales** - Celebraciones, días especiales

### **Mejores prácticas:**
- 📸 **Calidad alta** - Usa buena iluminación y composición
- 🎯 **Consistencia** - Mantén un estilo visual coherente
- 📝 **Descripciones atractivas** - Usa emojis y lenguaje cercano
- 🏷️ **Etiquetas relevantes** - #LasCanteras #Brunch #Café #GranCanaria
- ⏰ **Frecuencia regular** - Sube contenido nuevo semanalmente

### **Etiquetas recomendadas:**
```javascript
const recommendedTags = [
  "#LasCanteras",
  "#Brunch",
  "#Café", 
  "#GranCanaria",
  "#LasPalmas",
  "#WorkFriendly",
  "#PetFriendly",
  "#Terraza",
  "#Desayuno",
  "#Healthy",
  "#Fresh",
  "#Local"
];
```

## 🔧 Configuración técnica

### **Para desarrollo local:**
1. Crea la carpeta si no existe: `mkdir -p public/images/instagram`
2. Añade algunas imágenes de ejemplo
3. Actualiza `lib/instagram.ts` con las rutas correctas

### **Para producción:**
1. Sube las imágenes al servidor
2. Verifica que las rutas sean correctas
3. Prueba la funcionalidad de subida

## 📊 Análisis y métricas

### **Métricas a seguir:**
- 📈 **Engagement** - Likes, comentarios, compartidos
- 👥 **Alcance** - Nuevos seguidores
- 🎯 **Conversiones** - Visitas al local desde Instagram
- 📍 **Ubicación** - Check-ins en el local

### **Herramientas recomendadas:**
- 📊 **Instagram Insights** - Métricas nativas
- 📈 **Later** - Programación y análisis
- 🎨 **Canva** - Creación de contenido
- 📸 **VSCO** - Edición de fotos

## 🚀 Próximos pasos

1. **Contenido inicial:** Sube 6-10 imágenes de alta calidad
2. **Consistencia:** Establece un calendario de publicaciones
3. **Engagement:** Responde comentarios y mensajes
4. **Análisis:** Revisa métricas semanalmente
5. **Optimización:** Ajusta estrategia según resultados

---

**¡Tu contenido original hará que tu Instagram destaque y atraiga más clientes a tu local! 🎯**
