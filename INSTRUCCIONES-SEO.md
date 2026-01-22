# Instrucciones de Configuración SEO

## ✅ Implementación Completada

Se han agregado todas las mejoras de SEO al sitio web:

1. ✅ **Schema.org JSON-LD** - Datos estructurados (Product, Place, RealEstateAgent, WebSite, BreadcrumbList)
2. ✅ **Open Graph Tags** - Para Facebook, LinkedIn y otras redes sociales
3. ✅ **Twitter Cards** - Para compartir en Twitter
4. ✅ **Meta Tags Adicionales** - Canonical, robots, theme-color
5. ✅ **robots.txt** - Archivo para motores de búsqueda
6. ✅ **sitemap.xml** - Mapa del sitio

## 🔧 Configuración Requerida

**IMPORTANTE:** Debes reemplazar `YOUR-USERNAME` con tu URL real de GitHub Pages en los siguientes archivos:

### Archivos a modificar:

1. **`index.html`** - Buscar y reemplazar:
   - `https://YOUR-USERNAME.github.io/terrenos/` → Tu URL completa
   - Ejemplo: `https://juanperez.github.io/terrenos/`

2. **`robots.txt`** - Buscar y reemplazar:
   - `https://YOUR-USERNAME.github.io/terrenos/` → Tu URL completa

3. **`sitemap.xml`** - Buscar y reemplazar:
   - `https://YOUR-USERNAME.github.io/terrenos/` → Tu URL completa

### Cómo encontrar tu URL de GitHub Pages:

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. En "Source" verás tu URL, por ejemplo:
   - `https://TU-USUARIO.github.io/terrenos/`

### Reemplazo Rápido (si usas VS Code o similar):

1. Abre "Buscar y Reemplazar" (Ctrl+H / Cmd+H)
2. Buscar: `YOUR-USERNAME.github.io/terrenos`
3. Reemplazar con: `TU-USUARIO.github.io/terrenos` (o tu URL completa)
4. Reemplazar en todos los archivos

## 📋 Verificación Post-Implementación

Después de hacer el deploy a GitHub Pages, verifica:

1. **Google Rich Results Test:**
   - https://search.google.com/test/rich-results
   - Ingresa tu URL y verifica que los datos estructurados se detecten

2. **Facebook Sharing Debugger:**
   - https://developers.facebook.com/tools/debug/
   - Ingresa tu URL y verifica las Open Graph tags

3. **Twitter Card Validator:**
   - https://cards-dev.twitter.com/validator
   - Ingresa tu URL y verifica las Twitter Cards

4. **Google Search Console:**
   - Sube tu `sitemap.xml` en Google Search Console
   - URL: `https://TU-USUARIO.github.io/terrenos/sitemap.xml`

## 🎯 Beneficios Implementados

- ✅ **Mejor indexación** en Google y otros motores de búsqueda
- ✅ **Rich Snippets** en resultados de búsqueda (precio, ubicación, etc.)
- ✅ **Mejor apariencia** al compartir en redes sociales
- ✅ **Datos estructurados** que ayudan a Google a entender el contenido
- ✅ **Navegación mejorada** con breadcrumbs

## 📝 Notas Adicionales

- El `sitemap.xml` usa la fecha `2024-01-15` como ejemplo. Actualízala cuando hagas cambios importantes.
- El `robots.txt` permite indexar todo excepto archivos de sistema (CSS, JS, fonts).
- Todas las imágenes usan rutas absolutas para mejor SEO.

---

**¿Necesitas ayuda?** Revisa la documentación de:
- Schema.org: https://schema.org/
- Open Graph: https://ogp.me/
- Twitter Cards: https://developer.twitter.com/en/docs/twitter-for-websites/cards

