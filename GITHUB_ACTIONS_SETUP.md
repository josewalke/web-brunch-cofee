# 🚀 GitHub Actions Setup - Café Brunch Website

## 📋 **Workflows Disponibles**

### 1. 🚀 **Netlify Deploy** (Recomendado)
- **Archivo**: `.github/workflows/netlify-deploy.yml`
- **Función**: Deploy automático a Netlify
- **Trigger**: Push a main/master + Pull Requests

### 2. 🧪 **Test & Quality Check**
- **Archivo**: `.github/workflows/test.yml`
- **Función**: Verificación de calidad del código
- **Trigger**: Push a main/master + Pull Requests

### 3. 🌐 **GitHub Pages** (Alternativa)
- **Archivo**: `.github/workflows/github-pages.yml`
- **Función**: Deploy a GitHub Pages
- **Trigger**: Push a main/master

## 🎯 **¿Cuál Usar?**

### **Para Netlify (Recomendado):**
- ✅ Hosting gratuito y rápido
- ✅ SSL automático
- ✅ CDN global
- ✅ Funciones serverless
- ✅ Formularios automáticos

### **Para GitHub Pages:**
- ✅ Totalmente gratuito
- ✅ Integrado con GitHub
- ✅ SSL automático
- ❌ Menos funcionalidades

## 🔧 **Configuración Paso a Paso**

### **Opción 1: Netlify (Recomendada)**

#### 1. **Crear cuenta en Netlify**
- Ve a [netlify.com](https://netlify.com)
- Crea una cuenta gratuita

#### 2. **Crear nuevo sitio**
- Click en "New site from Git"
- Conecta tu repositorio de GitHub
- Configura:
  - **Build command**: `npm run build`
  - **Publish directory**: `out`
  - **Node version**: `18`

#### 3. **Configurar Secrets en GitHub**
Ve a tu repo → Settings → Secrets and variables → Actions

**Añade estos secrets:**
```
NETLIFY_AUTH_TOKEN = [Tu token de Netlify]
NETLIFY_SITE_ID = [ID de tu sitio en Netlify]
```

#### 4. **Obtener NETLIFY_AUTH_TOKEN**
1. Ve a [Netlify User Settings](https://app.netlify.com/user/settings)
2. "Applications" → "Personal access tokens"
3. "New access token"
4. Copia el token generado

#### 5. **Obtener NETLIFY_SITE_ID**
1. En tu dashboard de Netlify
2. Selecciona tu sitio
3. "Site settings" → "General"
4. Copia el "Site ID"

### **Opción 2: GitHub Pages**

#### 1. **Habilitar GitHub Pages**
- Ve a tu repo → Settings → Pages
- Source: "GitHub Actions"

#### 2. **Configurar permisos**
- Ve a Settings → Actions → General
- "Workflow permissions": "Read and write permissions"

## 🚀 **Cómo Funciona**

### **Flujo Automático:**
```
Push a GitHub → Se ejecuta el Workflow → Build → Deploy → Sitio actualizado
```

### **En Pull Requests:**
- Se ejecuta solo el testing
- **NO** se hace deploy
- Verifica que todo funcione antes del merge

### **En Push a main/master:**
- Se ejecuta testing + build + deploy
- Sitio se actualiza automáticamente

## 📁 **Archivos Creados**

- `.github/workflows/netlify-deploy.yml` - Deploy a Netlify
- `.github/workflows/test.yml` - Testing y calidad
- `.github/workflows/github-pages.yml` - Deploy a GitHub Pages
- `netlify.toml` - Configuración de Netlify
- `next.config.js` - Configuración optimizada de Next.js
- `GITHUB_ACTIONS_SETUP.md` - Este archivo

## 🛠️ **Comandos de Verificación**

```bash
# Verificar que todo funciona localmente
npm run lint
npx tsc --noEmit
npm run build

# Verificar la estructura del build
ls -la out/
```

## 🚨 **Solución de Problemas**

### **Error de Build:**
- Verifica que `npm run build` funcione localmente
- Revisa los logs en GitHub Actions
- Asegúrate de que `package-lock.json` esté en el repo

### **Error de Deploy:**
- Verifica que los secrets estén configurados
- Asegúrate de que el NETLIFY_SITE_ID sea correcto
- Revisa la configuración en Netlify

### **Error de Dependencias:**
- Verifica que todas las dependencias estén en `package.json`
- Asegúrate de que `package-lock.json` esté actualizado
- Ejecuta `npm ci` localmente para verificar

## 🎉 **¡Listo para Usar!**

Una vez configurado:
1. **Cada push a main** = Deploy automático
2. **Cada Pull Request** = Testing automático
3. **Sitio siempre actualizado** = Sin trabajo manual

## 📞 **Soporte**

Si tienes problemas:
1. Revisa los logs en la pestaña "Actions" de GitHub
2. Verifica la configuración de Netlify/GitHub Pages
3. Asegúrate de que los secrets estén configurados correctamente
4. Ejecuta los comandos localmente para verificar

---

**¡Tu sitio de Café Brunch estará siempre actualizado automáticamente! 🚀☕**
