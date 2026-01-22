# Archivos No Utilizados - Campo La Abrita

## 📋 Resumen
Este documento lista todos los archivos que **NO se están utilizando** en el sitio web y pueden ser eliminados de forma segura.

---

## 🗑️ ARCHIVOS PARA ELIMINAR

### 📜 JavaScript (JS) - NO UTILIZADOS

#### ❌ `js/tiny-slider.js`
- **Razón**: El slider del hero fue desactivado y reemplazado por una imagen estática
- **Evidencia**: El código en `custom.js` está comentado (líneas 36-53)
- **Tamaño estimado**: ~15-20 KB
- **Acción**: ✅ ELIMINAR

---

### 🎨 CSS - NO UTILIZADOS

#### ❌ `css/tiny-slider.css`
- **Razón**: No hay sliders activos en el sitio
- **Evidencia**: No se usa ningún componente de tiny-slider
- **Tamaño estimado**: ~5-10 KB
- **Acción**: ✅ ELIMINAR

#### ❌ `css/bootstrap-grid.css`
- **Razón**: Bootstrap completo ya está incluido en `style.css`
- **Evidencia**: No se carga en `index.html`, solo se carga `style.css` que incluye todo Bootstrap
- **Tamaño estimado**: ~15-20 KB
- **Acción**: ✅ ELIMINAR

#### ❌ `css/bootstrap-reboot.css`
- **Razón**: Bootstrap completo ya está incluido en `style.css`
- **Evidencia**: No se carga en `index.html`
- **Tamaño estimado**: ~5-10 KB
- **Acción**: ✅ ELIMINAR

#### ❌ `css/bootstrap-utilities.css`
- **Razón**: Bootstrap completo ya está incluido en `style.css`
- **Evidencia**: No se carga en `index.html`
- **Tamaño estimado**: ~10-15 KB
- **Acción**: ✅ ELIMINAR

#### ❌ `css/bootstrap.css`
- **Razón**: Bootstrap completo ya está incluido en `style.css`
- **Evidencia**: No se carga en `index.html`, `style.css` ya incluye todo Bootstrap
- **Tamaño estimado**: ~150-200 KB
- **Acción**: ✅ ELIMINAR

---

### 🖼️ Imágenes - UTILIZADAS

#### ✅ `images/dots.png`
- **Estado**: ✅ SE USA
- **Uso**: Patrón de fondo decorativo en `.img-about.dots` (CSS línea ~10014)
- **Evidencia**: Se usa en la sección "Características del Terreno"
- **Acción**: ✅ NO ELIMINAR

---

## ✅ ARCHIVOS QUE SÍ SE UTILIZAN (NO ELIMINAR)

### 📜 JavaScript (JS) - UTILIZADOS

- ✅ `js/bootstrap.bundle.min.js` - **USADO** (Bootstrap JavaScript)
- ✅ `js/aos.js` - **USADO** (Animaciones on scroll)
- ✅ `js/navbar.js` - **USADO** (Menú móvil)
- ✅ `js/custom.js` - **USADO** (Lógica personalizada: preloader, lightbox)

### 🎨 CSS - UTILIZADOS

- ✅ `css/style.css` - **USADO** (Estilos principales + Bootstrap completo)
- ✅ `css/aos.css` - **USADO** (Estilos de animaciones)

### 🎨 Fuentes - UTILIZADAS

- ✅ `fonts/icomoon/style.css` - **USADO** (Iconos)
- ✅ `fonts/flaticon/font/flaticon.css` - **USADO** (Iconos)

### 🖼️ Imágenes - UTILIZADAS

- ✅ `images/fotos/portada.jpeg` - **USADO** (Hero/Portada)
- ✅ `images/fotos/caracteristicas_del_terreno.png` - **USADO** (Sección características)
- ✅ `images/fotos/galeria_1.png` - **USADO** (Galería)
- ✅ `images/fotos/galeria_2.png` - **USADO** (Galería)
- ✅ `images/fotos/galeria_3.png` - **USADO** (Galería)
- ✅ `images/fotos/galeria_4.png` - **USADO** (Galería)
- ✅ `images/fotos/galeria_5.jpeg` - **USADO** (Galería)
- ✅ `images/fotos/galeria_6.png` - **USADO** (Galería)
- ✅ `images/dots.png` - **USADO** (Patrón decorativo en CSS)
- ✅ `favicon.png` - **USADO** (Favicon del sitio)

---

## 📊 Estadísticas

### Archivos a eliminar:
- **JavaScript**: 1 archivo (~15-20 KB)
- **CSS**: 5 archivos (~185-255 KB)
- **Total estimado**: ~200-275 KB de espacio ahorrado

### Archivos verificados y en uso:
- **Imágenes**: `dots.png` ✅ (se usa en CSS)

---

## 🔍 Referencias en el código

### En `index.html` se cargan:
```html
<!-- CSS -->
<link rel="stylesheet" href="css/tiny-slider.css" />  <!-- ❌ NO SE USA -->
<link rel="stylesheet" href="css/aos.css" />          <!-- ✅ SE USA -->
<link rel="stylesheet" href="css/style.css" />       <!-- ✅ SE USA -->

<!-- JavaScript -->
<script src="js/bootstrap.bundle.min.js"></script>   <!-- ✅ SE USA -->
<script src="js/tiny-slider.js"></script>            <!-- ❌ NO SE USA -->
<script src="js/aos.js"></script>                    <!-- ✅ SE USA -->
<script src="js/navbar.js"></script>                 <!-- ✅ SE USA -->
<script src="js/custom.js"></script>                 <!-- ✅ SE USA -->
```

### En `custom.js`:
- `tiny-slider.js` está comentado (líneas 36-53) - **NO SE USA**

---

## ✅ Acciones Recomendadas

1. **Eliminar inmediatamente**:
   - `js/tiny-slider.js`
   - `css/tiny-slider.css`
   - `css/bootstrap-grid.css`
   - `css/bootstrap-reboot.css`
   - `css/bootstrap-utilities.css`
   - `css/bootstrap.css`

2. **NO eliminar**:
   - `images/dots.png` ✅ (se usa como patrón de fondo en CSS)

3. **Actualizar `index.html`**:
   - Eliminar la línea: `<link rel="stylesheet" href="css/tiny-slider.css" />`
   - Eliminar la línea: `<script src="js/tiny-slider.js"></script>`

---

## 📝 Notas

- Todos los archivos de Bootstrap individuales (`bootstrap-grid.css`, `bootstrap-reboot.css`, `bootstrap-utilities.css`, `bootstrap.css`) están duplicados porque `style.css` ya incluye Bootstrap completo compilado.
- El sitio es una one-page, por lo que no se necesitan archivos HTML adicionales.
- Las imágenes antiguas del template (`hero_bg_*.jpg`, `img_*.jpg`, `person_*.jpg`) ya no existen en el directorio, fueron reemplazadas por las nuevas imágenes en `images/fotos/`.

---

**Fecha de análisis**: Diciembre 2024  
**Versión del sitio**: One-page para Campo La Abrita

