// http://kenwheeler.github.io/slick/
import 'slick-carousel';
import $ from 'jquery';

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else if (typeof module === 'object' && module.exports) {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {
	$('.js-cards-carousel').slick({
		arrows: false,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.js-stories-carousel',
		centerPadding: '40px',
		focusOnSelect: true,
		infinite: false,
		responsive: [
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			}
		},{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			}
		}]
	});
	$('.js-stories-carousel').slick({
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		fade: true,
		centerMode: true,
		centerPadding: '20px',
		asNavFor: '.js-cards-carousel',
		responsive: [{
			breakpoint: 370,
			settings: 'unslick'
		}]
	});
}));
