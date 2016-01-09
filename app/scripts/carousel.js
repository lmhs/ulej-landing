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
	$('.js-carousel').slick({
		prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left-fff-13x24 slick-prev__icon"></i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right-fff-13x24 slick-next__icon"></i></button>',
		dots: true,
		responsive: [
		{
			breakpoint: 720,
			settings: {
				arrows: false
			}
		},{
			breakpoint: 480,
			settings: {
				arrows: true,
				dots: false
			}
		}]
	});
	$('.js-live-carousel').slick({
		prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left-fff-13x24 slick-prev__icon"></i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right-fff-13x24 slick-next__icon"></i></button>',
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}
		},{
			breakpoint: 720,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}
		},{
			breakpoint: 480,
			settings: 'unslick'
		}]
	});
	$('.js-similar-carousel').slick({
		prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left-fff-13x24 slick-prev__icon"></i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right-fff-13x24 slick-next__icon"></i></button>',
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}
		},{
			breakpoint: 720,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}
		},{
			breakpoint: 480,
			settings: 'unslick'
		}]
	});
	$('.js-set-items-row').slick({
		prevArrow: '<button type="button" data-role="none" class="slick-prev slick-prev-small" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left-fff-13x24 slick-prev__icon"></i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next slick-next-small" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right-fff-13x24 slick-next__icon"></i></button>',
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1
	});
	$('.js-set-categories-row').slick({
		prevArrow: '<button type="button" data-role="none" class="slick-prev slick-prev-small" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left-fff-13x24 slick-prev__icon"></i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next slick-next-small" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right-fff-13x24 slick-next__icon"></i></button>',
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1
	});
	$('.js-other-carousel').slick({
		prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left-fff-13x24 slick-prev__icon"></i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right-fff-13x24 slick-next__icon"></i></button>',
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}
		},{
			breakpoint: 720,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}
		},{
			breakpoint: 480,
			settings: 'unslick'
		}]
	});
	$('.js-announce-carousel').slick({
		mobileFirst: true,
		centerMode: true,
		centerPadding: '20px',
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 481,
			settings: 'unslick'
		}]
	});
	$('.js-recent-carousel').slick({
		prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left-fff-13x24 slick-prev__icon"></i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right-fff-13x24 slick-next__icon"></i></button>',
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}
		},{
			breakpoint: 720,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}
		},{
			breakpoint: 480,
			settings: 'unslick'
		}]
	});
	$('.js-cards-carousel').slick({
		arrows: false,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.js-stories-carousel',
		centerMode: true,
		centerPadding: '40px',
  	focusOnSelect: true,
		responsive: [
		{
			breakpoint: 990,
			settings: 'unslick'
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
		asNavFor: '.js-cards-carousel'
	});
}));
