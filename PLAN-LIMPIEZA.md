# 🧹 Plan de Limpieza - One Page Website

## Objetivo
Eliminar archivos, componentes y código innecesario para optimizar la one page, manteniendo solo lo esencial.

---

## ✅ ANÁLISIS DE USO ACTUAL

### **Componentes y Scripts USADOS:**
- ✅ `bootstrap.bundle.min.js` - **NECESARIO** (Bootstrap 5)
- ✅ `aos.js` + `aos.css` - **NECESARIO** (animaciones en scroll)
- ✅ `tiny-slider.js` + `tiny-slider.css` - **NECESARIO** (hero slider)
- ✅ `navbar.js` - **NECESARIO** (menú móvil)
- ✅ `custom.js` - **NECESARIO** (inicializa AOS, preloader, tiny-slider)
- ❌ `counter.js` - **NO SE USA** (no hay elementos .countup en la página)

### **Imágenes USADAS:**
- ✅ `hero_bg_1.jpg` - Hero slider + Galería
- ✅ `hero_bg_2.jpg` - Hero slider + Galería
- ✅ `hero_bg_3.jpg` - Hero slider + Galería + Características del terreno
- ✅ `img_1.jpg` - Galería
- ✅ `img_2.jpg` - Galería
- ✅ `img_3.jpg` - Galería
- ❌ `img_4.jpg` - **NO SE USA**
- ❌ `img_5.jpg` - **NO SE USA**
- ❌ `img_6.jpg` - **NO SE USA**
- ❌ `img_7.jpg` - **NO SE USA**
- ❌ `img_8.jpg` - **NO SE USA**
- ❌ `person_1-min.jpg` a `person_6-min.jpg` - **NO SE USA** (eran para testimonios/agentes)
- ✅ `dots.png` - **MANTENER** (usado en CSS para `.img-about.dots`)

### **Páginas HTML NO NECESARIAS:**
- ❌ `about.html` - **ELIMINAR** (one page)
- ❌ `contact.html` - **ELIMINAR** (one page, contacto en footer)
- ❌ `properties.html` - **ELIMINAR** (one page)
- ❌ `property-single.html` - **ELIMINAR** (one page)
- ❌ `services.html` - **ELIMINAR** (one page)

### **Archivos de Configuración:**
- ❌ `prepros-6.config` - **ELIMINAR** (configuración de preprocesador, no necesario)
- ❌ `README.txt` - **OPCIONAL** (puede mantener o eliminar)

### **Carpetas y Archivos de Desarrollo:**
- ❌ `scss/` - **ELIMINAR** (archivos fuente SCSS, ya compilados en CSS)
- ❓ `css/bootstrap/` - **VERIFICAR** (parece ser un archivo suelto, verificar si se usa)
- ❓ `css/index.html` - **ELIMINAR** (archivo HTML suelto en carpeta CSS)
- ❓ `fonts/index.html` - **ELIMINAR** (archivo HTML suelto)
- ❓ `images/index.html` - **ELIMINAR** (archivo HTML suelto)
- ❓ `js/index.html` - **ELIMINAR** (archivo HTML suelto)

### **Archivos de Fuentes:**
- ✅ `fonts/icomoon/` - **MANTENER** (iconos usados: icon-whatsapp, icon-home2, icon-cloud-rain, icon-mountain, icon-tree, icon-map-pin, icofont-close)
- ✅ `fonts/flaticon/` - **MANTENER** (iconos usados: flaticon-house, flaticon-building, flaticon-house-3, flaticon-house-1)
- ❓ `fonts/flaticon/backup.txt` - **OPCIONAL** (backup, puede eliminar)
- ❓ `fonts/flaticon/license/` - **MANTENER** (licencia, mejor mantener)
- ❓ `fonts/icomoon/demo-files/` y `demo.html` - **OPCIONAL** (archivos de demostración, pueden eliminarse)

---

## 📋 PLAN DE LIMPIEZA DETALLADO

### **FASE 1: Eliminar Scripts No Usados**

#### 1.1 Remover counter.js del index.html
**Archivo:** `index.html` línea 743
**Acción:** Eliminar la línea:
```html
<script src="js/counter.js"></script>
```

#### 1.2 Eliminar archivo counter.js
**Archivo:** `js/counter.js`
**Acción:** Eliminar archivo completo

---

### **FASE 2: Limpiar custom.js**

#### 2.1 Optimizar custom.js
**Archivo:** `js/custom.js`
**Acción:** Eliminar inicializaciones de sliders que no se usan:
- `property-slider` - NO se usa
- `img-property-slide` - NO se usa  
- `testimonial-slider` - NO se usa

**Mantener solo:**
- Inicialización de AOS
- Preloader
- `hero-slide` slider

---

### **FASE 3: Eliminar Imágenes No Usadas**

#### 3.1 Imágenes a Eliminar
**Carpeta:** `images/`
**Archivos:**
- `img_4.jpg`
- `img_5.jpg`
- `img_6.jpg`
- `img_7.jpg`
- `img_8.jpg`
- `person_1-min.jpg`
- `person_2-min.jpg`
- `person_3-min.jpg`
- `person_4-min.jpg`
- `person_5-min.jpg`
- `person_6-min.jpg`

**Nota:** Verificar si `dots.png` se usa en CSS antes de eliminar.

---

### **FASE 4: Eliminar Páginas HTML No Necesarias**

#### 4.1 Páginas a Eliminar
**Archivos:**
- `about.html`
- `contact.html`
- `properties.html`
- `property-single.html`
- `services.html`

---

### **FASE 5: Eliminar Archivos de Configuración y Desarrollo**

#### 5.1 Archivos a Eliminar
- `prepros-6.config`
- `README.txt` (opcional, puede mantener)

#### 5.2 Archivos HTML Sueltos
- `css/index.html`
- `fonts/index.html`
- `images/index.html`
- `js/index.html`

---

### **FASE 6: Eliminar Carpeta SCSS**

#### 6.1 Carpeta Completa
**Carpeta:** `scss/`
**Acción:** Eliminar carpeta completa (archivos fuente, ya compilados en CSS)

**Nota:** Si en el futuro necesitas modificar estilos, edita directamente `css/style.css`

---

### **FASE 7: Limpiar Carpeta CSS**

#### 7.1 Verificar carpeta bootstrap/
**Carpeta:** `css/bootstrap/`
**Acción:** Verificar si contiene solo `mixins/_text-truncate.css`. Si es un archivo suelto sin uso, eliminar carpeta.

---

### **FASE 8: Limpiar Archivos de Fuentes (Opcional)**

#### 8.1 Archivos Opcionales a Eliminar
**Carpeta:** `fonts/icomoon/`
- `demo-files/` (carpeta completa)
- `demo.html`

**Carpeta:** `fonts/flaticon/`
- `backup.txt` (opcional)
- `font/flaticon.html` (archivo HTML de demo)

**Mantener:**
- ✅ Todos los archivos de fuentes (.eot, .svg, .ttf, .woff, .woff2)
- ✅ Archivos CSS de iconos
- ✅ Licencias

---

### **FASE 9: Verificar y Limpiar Referencias en index.html**

#### 9.1 Verificar enlaces rotos
**Archivo:** `index.html`
**Acción:** Asegurar que no haya referencias a páginas eliminadas

#### 9.2 Limpiar comentarios innecesarios
**Archivo:** `index.html`
**Acción:** Eliminar comentarios HTML excesivos o innecesarios (opcional)

---

## 📊 RESUMEN DE ARCHIVOS A ELIMINAR

### **Archivos JavaScript:**
- [ ] `js/counter.js`

### **Imágenes:**
- [ ] `images/img_4.jpg`
- [ ] `images/img_5.jpg`
- [ ] `images/img_6.jpg`
- [ ] `images/img_7.jpg`
- [ ] `images/img_8.jpg`
- [ ] `images/person_1-min.jpg`
- [ ] `images/person_2-min.jpg`
- [ ] `images/person_3-min.jpg`
- [ ] `images/person_4-min.jpg`
- [ ] `images/person_5-min.jpg`
- [ ] `images/person_6-min.jpg`

### **Páginas HTML:**
- [ ] `about.html`
- [ ] `contact.html`
- [ ] `properties.html`
- [ ] `property-single.html`
- [ ] `services.html`

### **Carpetas Completas:**
- [ ] `scss/` (toda la carpeta)

### **Archivos de Configuración:**
- [ ] `prepros-6.config`
- [ ] `README.txt` (opcional)

### **Archivos HTML Sueltos:**
- [ ] `css/index.html`
- [ ] `fonts/index.html`
- [ ] `images/index.html`
- [ ] `js/index.html`

### **Archivos de Fuentes (Opcional):**
- [ ] `fonts/icomoon/demo-files/` (carpeta)
- [ ] `fonts/icomoon/demo.html`
- [ ] `fonts/flaticon/backup.txt` (opcional)
- [ ] `fonts/flaticon/font/flaticon.html` (opcional)

### **Carpetas a Verificar:**
- [ ] `css/bootstrap/` (solo contiene `mixins/_text-truncate.css`, probablemente no se usa - verificar antes de eliminar)

---

## ⚠️ ARCHIVOS QUE DEBEN MANTENERSE

### **JavaScript (NECESARIOS):**
- ✅ `js/bootstrap.bundle.min.js`
- ✅ `js/aos.js`
- ✅ `js/tiny-slider.js`
- ✅ `js/navbar.js`
- ✅ `js/custom.js` (optimizado)

### **CSS (NECESARIOS):**
- ✅ `css/bootstrap.css` (o bootstrap-grid.css, bootstrap-reboot.css, bootstrap-utilities.css)
- ✅ `css/aos.css`
- ✅ `css/tiny-slider.css`
- ✅ `css/style.css`

### **Fuentes (NECESARIOS):**
- ✅ `fonts/icomoon/style.css`
- ✅ `fonts/icomoon/fonts/` (todos los archivos de fuente)
- ✅ `fonts/flaticon/font/flaticon.css`
- ✅ `fonts/flaticon/font/` (todos los archivos de fuente)

### **Imágenes (NECESARIAS):**
- ✅ `images/hero_bg_1.jpg`
- ✅ `images/hero_bg_2.jpg`
- ✅ `images/hero_bg_3.jpg`
- ✅ `images/img_1.jpg`
- ✅ `images/img_2.jpg`
- ✅ `images/img_3.jpg`
- ✅ `images/dots.png` (usado en CSS para `.img-about.dots`)

### **Otros:**
- ✅ `favicon.png`
- ✅ `index.html`

---

## 🔍 VERIFICACIONES ANTES DE ELIMINAR

### **1. Verificar uso de dots.png:**
```bash
grep -r "dots.png" css/
grep -r "dots" css/
```

### **2. Verificar uso de css/bootstrap/:**
```bash
grep -r "bootstrap/mixins" css/
```

### **3. Verificar que no haya referencias a páginas eliminadas:**
```bash
grep -r "about.html\|contact.html\|properties.html\|property-single.html\|services.html" index.html
```

---

## 📝 MODIFICACIONES EN CÓDIGO

### **1. index.html:**
- [ ] Eliminar línea: `<script src="js/counter.js"></script>`

### **2. js/custom.js:**
- [ ] Eliminar inicialización de `property-slider`
- [ ] Eliminar inicialización de `img-property-slide`
- [ ] Eliminar inicialización de `testimonial-slider`
- [ ] Mantener solo `hero-slide`, AOS y preloader

---

## ✅ CHECKLIST FINAL

### **Antes de Eliminar:**
- [ ] Hacer backup del proyecto completo
- [ ] Verificar que el sitio funciona correctamente
- [ ] Probar en navegador local
- [ ] Verificar que todas las imágenes se cargan
- [ ] Verificar que los scripts funcionan

### **Después de Eliminar:**
- [ ] Probar el sitio completo
- [ ] Verificar que no hay errores en consola
- [ ] Verificar que todas las funcionalidades funcionan:
  - [ ] Hero slider
  - [ ] Menú móvil
  - [ ] Animaciones AOS
  - [ ] Botón WhatsApp
  - [ ] Mapa
  - [ ] Galería
- [ ] Verificar responsive en móvil
- [ ] Verificar que no hay enlaces rotos

---

## 📦 TAMAÑO ESTIMADO DE REDUCCIÓN

**Antes:** ~X MB
**Después:** ~Y MB (estimado 30-40% de reducción)

**Archivos eliminados:**
- ~6 imágenes (person_*.jpg) = ~500KB-1MB
- ~5 imágenes (img_4-8.jpg) = ~500KB-1MB
- Carpeta scss/ = ~2-3MB
- 5 páginas HTML = ~100KB
- Archivos demo y backups = ~500KB

**Total estimado:** ~4-6MB de reducción

---

## 🚀 ORDEN DE EJECUCIÓN RECOMENDADO

1. **Fase 1:** Eliminar counter.js (más seguro)
2. **Fase 2:** Optimizar custom.js
3. **Fase 3:** Eliminar imágenes no usadas
4. **Fase 4:** Eliminar páginas HTML
5. **Fase 5:** Eliminar archivos de configuración
6. **Fase 6:** Eliminar carpeta SCSS
7. **Fase 7:** Limpiar archivos HTML sueltos
8. **Fase 8:** Limpiar archivos de fuentes (opcional)
9. **Verificación final:** Probar todo

---

## ⚠️ ADVERTENCIAS

1. **NO eliminar** archivos de fuentes (.eot, .svg, .ttf, .woff, .woff2)
2. **NO eliminar** archivos CSS compilados
3. **NO eliminar** archivos JavaScript esenciales
4. **Hacer backup** antes de eliminar
5. **Probar** después de cada fase

---

## 📌 NOTAS FINALES

- Este plan es **conservador** - solo elimina lo que definitivamente no se usa
- Los archivos de fuentes y demos son **opcionales** - puedes mantenerlos si quieres
- La carpeta `scss/` puede ser útil si planeas modificar estilos, pero para producción no es necesaria
- Siempre **probar** después de eliminar archivos

---

**Estado:** ✅ PLAN COMPLETO Y LISTO PARA EJECUTAR

