import svg4everybody from 'svg4everybody';
import './modernizr.custom.min.js';
import $ from 'jquery';
import './carousel.js';
import './jquery.magnific-popup.min.js';
import './jquery.placeholder-enhanced.min.js';
// import './jquery.adaptive.background.js';

$(() => {
	svg4everybody();

	Modernizr.addTest('isios', function(){
		var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
		return iOS;
	});

	$('.js-toggle-social').on('click', function(){
		$(this).closest('.social').toggleClass('social--is-opened');
	});

	if ($('.js-open-what-is').length) {
		$('.js-open-what-is').magnificPopup({
			items: {
					src: '.js-what-is-popup',
					preloader: false,
					type: 'inline'
			}
		});
		$('.js-what-is-popup').on('click', '.js-close-message-popup', function(){
			$.magnificPopup.close();
		});
	}
	if ($('.js-open-about-project-popup-1').length) {
		$('.js-open-about-project-popup-1').magnificPopup({
			items: {
					src: '.js-about-project-popup-1',
					preloader: false,
					type: 'inline'
			}
		});
		$('.js-about-project-popup-1').on('click', '.js-close-message-popup', function(){
			$.magnificPopup.close();
		});
	}
	if ($('.js-open-about-project-popup-2').length) {
		$('.js-open-about-project-popup-2').magnificPopup({
			items: {
					src: '.js-about-project-popup-2',
					preloader: false,
					type: 'inline'
			}
		});
		$('.js-about-project-popup-2').on('click', '.js-close-message-popup', function(){
			$.magnificPopup.close();
		});
	}
	if ($('.js-open-about-project-popup-3').length) {
		$('.js-open-about-project-popup-3').magnificPopup({
			items: {
					src: '.js-about-project-popup-3',
					preloader: false,
					type: 'inline'
			}
		});
		$('.js-about-project-popup-3').on('click', '.js-close-message-popup', function(){
			$.magnificPopup.close();
		});
	}

	if ($('.js-open-callback').length) {
		$('.js-open-callback').magnificPopup({
			items: {
					src: '.js-callback-popup',
					preloader: false,
					type: 'inline',
					focus: '.js-callback-name'
			}
		});
	}

	if ($('.js-callback-submit').length) {
		$('.js-callback-submit').magnificPopup({
			items: {
					src: '.js-callback-message-popup',
					preloader: false,
					type: 'inline'
			}
		});
	}

	if ($('.js-open-send').length) {
		$('.js-open-send').magnificPopup({
			items: {
					src: '.js-send-popup',
					preloader: false,
					type: 'inline',
					focus: '.js-send-name'
			}
		});
	}


	if ($('.js-send-submit').length) {
		$('.js-send-submit').magnificPopup({
			items: {
					src: '.js-send-message-popup',
					preloader: false,
					type: 'inline'
			}
		});
	}

	$('.js-project-tiles').on('mouseenter', '.js-tile a', function(){
		var tile = $(this).closest('.js-tile');
		tile.find('.js-tile-fill').show();
		tile.find('.js-tile-text').removeClass('is-hidden');
	});
	// $('.js-project-tiles').on('mouseenter','.js-tile-text',function(){
	// 	var tile = $(this).closest('.js-tile');
	// 	tile.find('.js-tile-fill').show();
	// });
	$('.js-project-tiles').on('mouseleave','.js-tile a', function(){
		var tile = $(this).closest('.js-tile');
		tile.find('.js-tile-fill').hide();
		tile.find('.js-tile-text').addClass('is-hidden');
	});

	// $.adaptiveBackground.run({
	//  	parent: '.js-tile'
	// });
});
