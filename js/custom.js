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

	// Bootstrap Gallery Modal - Simple initialization
	var galleryModal = function() {
		var galleryModalEl = document.getElementById('galleryModal');
		var galleryCarousel = document.getElementById('galleryCarousel');
		
		if (galleryModalEl && galleryCarousel) {
			// Cuando se abre el modal, ir a la slide correcta
			galleryModalEl.addEventListener('show.bs.modal', function(event) {
				var button = event.relatedTarget;
				var slideIndex = button ? parseInt(button.getAttribute('data-bs-slide-to')) : 0;
				
				// Usar Bootstrap Carousel API para ir a la slide correcta
				var bsCarousel = bootstrap.Carousel.getInstance(galleryCarousel);
				if (bsCarousel) {
					bsCarousel.to(slideIndex);
				} else {
					var carousel = new bootstrap.Carousel(galleryCarousel, {
						interval: false
					});
					carousel.to(slideIndex);
				}
			});
		}
	}
	galleryModal();

})()