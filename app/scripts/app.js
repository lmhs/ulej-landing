import svg4everybody from 'svg4everybody';
import './modernizr.custom.min.js';
import $ from 'jquery';
import './carousel.js';
import './jquery.magnific-popup.min.js';
import './jquery.placeholder-enhanced.min.js';

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
});
