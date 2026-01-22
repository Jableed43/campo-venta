(function () {

	'use strict'


	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});

	var preloader = function() {

		var loader = document.querySelector('.loader');
		var overlay = document.getElementById('overlayer');

		function fadeOut(el) {
			el.style.opacity = 1;
			(function fade() {
				if ((el.style.opacity -= .1) < 0) {
					el.style.display = "none";
				} else {
					requestAnimationFrame(fade);
				}
			})();
		};

		setTimeout(function() {
			fadeOut(loader);
			fadeOut(overlay);
		}, 200);
	};
	preloader();
	

	// Hero slider desactivado - ahora es una imagen estática
	// var tinySdlier = function() {
	// 	var heroSlider = document.querySelectorAll('.hero-slide');

	// 	if ( heroSlider.length > 0 ) {
	// 		var tnsHeroSlider = tns({
	// 			container: '.hero-slide',
	// 			mode: 'carousel',
	// 			speed: 700,
	// 			autoplay: true,
	// 			controls: false,
	// 			nav: false,
	// 			autoplayButtonOutput: false,
	// 			controlsContainer: '#hero-nav',
	// 		});
	// 	}
	// }
	// tinySdlier();

	// Lightbox Gallery
	var lightboxGallery = function() {
		var lightbox = document.getElementById('lightbox');
		var lightboxImg = document.getElementById('lightbox-img');
		var lightboxClose = document.querySelector('.lightbox-close');
		var lightboxPrev = document.querySelector('.lightbox-prev');
		var lightboxNext = document.querySelector('.lightbox-next');
		var lightboxCurrent = document.getElementById('lightbox-current');
		var lightboxTotal = document.getElementById('lightbox-total');
		var galleryItems = document.querySelectorAll('[data-gallery="galeria"]');
		var currentIndex = 0;
		var images = [];

		// Recopilar todas las imágenes de la galería
		galleryItems.forEach(function(item) {
			var img = item.querySelector('img');
			if (img) {
				images.push({
					src: img.src,
					alt: img.alt
				});
			}
		});

		// Actualizar contador total
		if (lightboxTotal) {
			lightboxTotal.textContent = images.length;
		}

		// Función para preparar el lightbox para mobile
		function prepareMobileLightbox() {
			if (window.innerWidth <= 768) {
				var content = document.querySelector('.lightbox-content');
				if (content && content.children.length === 1) {
					// Limpiar contenido
					content.innerHTML = '';
					// Agregar todas las imágenes
					images.forEach(function(imgData) {
						var img = document.createElement('img');
						img.src = imgData.src;
						img.alt = imgData.alt;
						content.appendChild(img);
					});
				}
			} else {
				// Desktop: mantener solo una imagen
				var content = document.querySelector('.lightbox-content');
				if (content && content.children.length > 1) {
					content.innerHTML = '<img id="lightbox-img" src="" alt="">';
					lightboxImg = document.getElementById('lightbox-img');
				}
			}
		}

		// Función para abrir el lightbox
		function openLightbox(index) {
			if (index < 0 || index >= images.length) return;
			currentIndex = index;
			
			prepareMobileLightbox();
			
			if (window.innerWidth <= 768) {
				// Mobile: usar scroll
				var content = document.querySelector('.lightbox-content');
				if (content) {
					lightbox.classList.add('active');
					document.body.style.overflow = 'hidden';
					setTimeout(function() {
						content.scrollLeft = currentIndex * window.innerWidth;
						if (lightboxCurrent) {
							lightboxCurrent.textContent = currentIndex + 1;
						}
					}, 100);
				}
			} else {
				// Desktop: mostrar imagen individual
				lightboxImg.src = images[currentIndex].src;
				lightboxImg.alt = images[currentIndex].alt;
				if (lightboxCurrent) {
					lightboxCurrent.textContent = currentIndex + 1;
				}
				lightbox.classList.add('active');
				document.body.style.overflow = 'hidden';
			}
		}

		// Función para cerrar el lightbox
		function closeLightbox() {
			lightbox.classList.remove('active');
			document.body.style.overflow = '';
			// Restaurar contenido original para desktop
			if (window.innerWidth > 768) {
				var content = document.querySelector('.lightbox-content');
				if (content && content.children.length > 1) {
					content.innerHTML = '<img id="lightbox-img" src="" alt="">';
					lightboxImg = document.getElementById('lightbox-img');
				}
			}
		}

		// Función para ir a la siguiente imagen
		function nextImage() {
			var nextIndex = (currentIndex + 1) % images.length;
			openLightbox(nextIndex);
		}

		// Función para ir a la imagen anterior
		function prevImage() {
			var prevIndex = (currentIndex - 1 + images.length) % images.length;
			openLightbox(prevIndex);
		}

		// Event listeners para abrir el lightbox
		galleryItems.forEach(function(item, index) {
			item.addEventListener('click', function(e) {
				e.preventDefault();
				openLightbox(index);
			});
		});

		// Cerrar con el botón X
		if (lightboxClose) {
			lightboxClose.addEventListener('click', closeLightbox);
		}

		// Cerrar al hacer clic fuera de la imagen
		lightbox.addEventListener('click', function(e) {
			// En desktop: cerrar al hacer clic en el fondo o en la imagen
			if (window.innerWidth > 768) {
				if (e.target === lightbox || e.target === lightboxImg) {
					closeLightbox();
				}
			} else {
				// En mobile: solo cerrar al hacer clic en el fondo (no en las imágenes)
				if (e.target === lightbox) {
					closeLightbox();
				}
			}
		});

		// Navegación con flechas
		if (lightboxNext) {
			lightboxNext.addEventListener('click', function(e) {
				e.stopPropagation();
				nextImage();
			});
		}

		if (lightboxPrev) {
			lightboxPrev.addEventListener('click', function(e) {
				e.stopPropagation();
				prevImage();
			});
		}

		// Navegación con teclado
		document.addEventListener('keydown', function(e) {
			if (!lightbox.classList.contains('active')) return;
			
			if (e.key === 'Escape') {
				closeLightbox();
			} else if (e.key === 'ArrowRight') {
				nextImage();
			} else if (e.key === 'ArrowLeft') {
				prevImage();
			}
		});

		// Scroll horizontal en mobile - detectar cambio de imagen
		var lightboxContent = document.querySelector('.lightbox-content');
		if (lightboxContent) {
			var isScrolling = false;
			lightboxContent.addEventListener('scroll', function() {
				if (window.innerWidth > 768) return;
				if (isScrolling) return;
				isScrolling = true;
				
				setTimeout(function() {
					var scrollLeft = lightboxContent.scrollLeft;
					var imageWidth = window.innerWidth;
					var newIndex = Math.round(scrollLeft / imageWidth);
					
					if (newIndex !== currentIndex && newIndex >= 0 && newIndex < images.length) {
						currentIndex = newIndex;
						if (lightboxCurrent) {
							lightboxCurrent.textContent = currentIndex + 1;
						}
					}
					
					isScrolling = false;
				}, 150);
			});
		}

		// Reajustar en cambio de tamaño de ventana
		window.addEventListener('resize', function() {
			if (lightbox.classList.contains('active')) {
				prepareMobileLightbox();
				if (window.innerWidth <= 768) {
					var content = document.querySelector('.lightbox-content');
					if (content) {
						content.scrollLeft = currentIndex * window.innerWidth;
					}
				}
			}
		});
	}
	lightboxGallery();

})()