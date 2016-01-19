import svg4everybody from 'svg4everybody';
import './modernizr.custom.min.js';
import $ from 'jquery';
import './carousel.js';
import './jquery.magnific-popup.min.js';
import './jquery.placeholder.js';
import './jquery.validate.js';

let images = [
							// 'Main-00.jpg',
							'Main-01.jpg','Main-02.jpg','Main-03.jpg','Main-04.jpg','Main-05.jpg',
							'Main-06.jpg','Main-07.jpg','Main-08.jpg','Main-09.jpg','Main-10.jpg','Main-11.jpg',
							'Main-12.jpg','Main-13.jpg','Main-14.jpg'];
							// ,'Main-15.jpg','Main-16.jpg','Main-17.jpg','Main-18.jpg','Main-19.jpg','Main-20.jpg',
							// 'Main-21.jpg','Main-22.jpg','Main-23.jpg','Main-24.jpg','Main-25.jpg'];

$(() => {
	svg4everybody();

	window.Utils = {
		magnificPopupConfiguration: function() {
			var startWindowScroll = 0;

			return {
				beforeOpen: function() {
					startWindowScroll = $(window).scrollTop();
					$('html').addClass('mfp-helper');
					$('.mfp-bg.mfp-ready').css('position', 'fixed');
				},
				close: function() {
					$('html').removeClass('mfp-helper');
					$(window).scrollTop(startWindowScroll);
					// setTimeout(function(){
					// 	$('body').animate({ scrollTop: startWindowScroll }, 0);
					// }, 0);
				}
			}
		}
	}

	Modernizr.addTest('isios', function(){
		var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
		return iOS;
	});

	if(!Modernizr.input.placeholder) {
		$('input[placeholder], textarea[placeholder]').placeholder();
	}



	var bgImage = $('.js-main-bg-image'), i = 0, speed = 300;

	setInterval(displayNextImage(), 40000);

	function displayNextImage() {
		console.log(i + ' ' + images.length);

		var downloadingImage = new Image();



		downloadingImage.onload = function(){
				bgImage.attr('xlink:href', this.src).fadeIn(speed);
		};

		bgImage.fadeOut(speed, function(){
			downloadingImage.src = './assets/images/' + images[(++i % images.length)];
		});



		// bgImage.attr('xlink:href', './assets/images/' + images[(++i % images.length)]);
	}

	$( window ).resize(function() {
		if ($( window ).width() < 720) {
			bgImage.attr('width','770').attr('height','440').attr('transform','translate(-350,-120)').attr('x','50%').attr('y','50%');
			$('.tile__gradient').attr('width','770').attr('height','440').attr('transform','translate(-350,-120)').attr('x','50%').attr('y','50%');
			$('.clipping-bg').attr('transform','translate(350,120)').attr('x','50%').attr('y','50%');
		} else {
			bgImage.attr('width','1120').attr('height','640').attr('transform','translate(-560,-320)').attr('x','50%').attr('y','50%');
			$('.tile__gradient').attr('width','1120').attr('height','640').attr('transform','translate(-560,-320)').attr('x','50%').attr('y','50%');
			$('.clipping-bg').attr('transform','translate(560,320)').attr('x','50%').attr('y','50%');
		}
	});

	function fadeImg() {
		bgImage.fadeOut(speed, function(){
			displayNextImage();
		});
	}

	$('.js-toggle-img').on('click', function () {
		displayNextImage();
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
			},
			callbacks: Utils.magnificPopupConfiguration()
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
			},
			callbacks: Utils.magnificPopupConfiguration()
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
			},
			callbacks: Utils.magnificPopupConfiguration()
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
			},
			callbacks: Utils.magnificPopupConfiguration()
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
			},
			callbacks: Utils.magnificPopupConfiguration()
		});
	}

	if ($('.js-callback-submit').length) {
		$('.js-callback-submit').magnificPopup({
			items: {
					src: '.js-callback-message-popup',
					preloader: false,
					type: 'inline'
			},
			callbacks: Utils.magnificPopupConfiguration()
		});
		$('.js-callback-message-popup').on('click', '.js-close-message-popup', function(){
			$.magnificPopup.close();
		});
	}

	if ($('.js-open-send').length) {
		$('.js-open-send').magnificPopup({
			items: {
					src: '.js-send-popup',
					preloader: false,
					type: 'inline',
					focus: '.js-send-name'
			},
			callbacks: Utils.magnificPopupConfiguration()
		});
	}



	if ($('.js-send-submit').length) {
		$('.js-send-submit').magnificPopup({
			items: {
					src: '.js-send-message-popup',
					preloader: false,
					type: 'inline'
			},
			callbacks: Utils.magnificPopupConfiguration()
		});
		$('.js-send-message-popup').on('click', '.js-close-message-popup', function(){
			$.magnificPopup.close();
		});
	}

	if ($('form').length) {
		$('form').validate({
			rules: {
				field: {
					required: true,
					email: true
				}
			},
			submitHandler: function(form) {
				form.submit();
			}
		});
	}
	$('.js-project-tiles').on('mouseenter', '.js-tile a', function(){
		var tile = $(this).closest('.js-tile');
		tile.find('.js-tile-fill').show();
		tile.find('.js-tile-text').removeClass('is-hidden');
	});
	$('.js-project-tiles').on('mouseleave','.js-tile a', function(){
		var tile = $(this).closest('.js-tile');
		tile.find('.js-tile-fill').hide();
		tile.find('.js-tile-text').addClass('is-hidden');
	});
});
