import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import './carousel.js';
// import './Popup.js';
import './jquery.magnific-popup.min.js';

$(() => {
	svg4everybody();

	Modernizr.addTest('isios', function(){
		var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
		return iOS;
	});

	let openWhatIs = $('.js-open-what-is');
	let whatIsPopup = $('.js-what-is-popup');

	// openWhatIs.on('click', () => {
		// new Popup(whatIsPopup)
	// })

	$('.js-open-what-is').magnificPopup({
		items: {
				src: '.js-what-is-popup',
				preloader: false,
				type: 'inline'
		}
	});
	$('.js-open-callback').magnificPopup({
		items: {
				src: '.js-callback-popup',
				preloader: false,
				type: 'inline'
		}
	});
});
