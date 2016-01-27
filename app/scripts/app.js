import svg4everybody from 'svg4everybody';
import validate from 'jquery-validation';
import './modernizr.custom.min.js';
import $ from 'jquery';
import './carousel.js';
import './jquery.magnific-popup.min.js';
import './jquery.placeholder.js';

// массив картинок
var images = [
							'Main-01.jpg','Main-02.jpg','Main-03.jpg','Main-04.jpg','Main-05.jpg',
							'Main-06.jpg','Main-07.jpg','Main-08.jpg','Main-09.jpg','Main-10.jpg','Main-11.jpg',
							'Main-12.jpg','Main-13.jpg','Main-14.jpg'];

// массив маленьких картинок
var imagesSmall = [
							'Main-01-small.jpg','Main-02-small.jpg','Main-03-small.jpg','Main-04-small.jpg','Main-05-small.jpg',
							'Main-06-small.jpg','Main-07-small.jpg','Main-08-small.jpg','Main-09-small.jpg','Main-10-small.jpg','Main-11-small.jpg',
							'Main-12-small.jpg','Main-13-small.jpg','Main-14-small.jpg'];



$(() => {
	// плагин для svg иконок в IE
	svg4everybody();


	// настройки для валидации
	$.validator.setDefaults({
		errorClass: 'field--is-invalid',
		debug: true, // debug убрать
		success: 'valid',
		onfocusout: false,
		onkeyup: false,
		errorPlacement: function(error, element){
			$(element).closest('.field-wrap').addClass('field--is-invalid');
		},
		highlight: function(element, errorClass, validClass) {
			$(element).closest('.field-wrap').addClass(errorClass);
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).closest('.field-wrap').removeClass(errorClass);
		},
		messages: {
			required: ''
		},
		rules: {
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				phoneUS: true
			},
			name: {
				required: true
			}
		}
	});


	// переопределение телефонного номера с US на белорусский
	$.validator.addMethod("phoneUS", function(phone_number, element) {
			phone_number = phone_number.replace(/\s+/g, "");
			return this.optional(element) || phone_number.length > 12 &&
				phone_number.match(/(^\+375\s*\(?(15|16|17|21|22|23|25|29|33|44)\)?\s*[0-9]{3}(\s*|\-)[0-9]{2}(\s*|\-)[0-9]{2}$)/);
	}, "Please specify a valid phone number");



	// при сабмите формы открывается попап "спасибо, мы вам перезвоним"
	$('#callback-form').validate({
		submitHandler: function(form) {
			$.magnificPopup.open({
				items: {
					src: '.js-callback-message-popup',
						preloader: false,
					type: 'inline'
				},
				callbacks: Utils.magnificPopupConfiguration()
			});
		}
	});

	// при сабмите формы открывается попап спасибо за информацию о проекте
	$('#send-form').validate({
		submitHandler: function(form) {
			$.magnificPopup.open({
				items: {
						src: '.js-send-message-popup',
						preloader: false,
						type: 'inline'
				},
				callbacks: Utils.magnificPopupConfiguration()
			});
		}
	});

	// сохранение позиции скролла
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
				}
			}
		}
	}

	// проверка на то, является ли устройство ios
	Modernizr.addTest('isios', function(){
		var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
		return iOS;
	});

	// placeholder polyfill — если не поддерживается, используется плагин
	if(!Modernizr.input.placeholder) {
		$('input[placeholder], textarea[placeholder]').placeholder();
	}

	// при смене размера экрана и загрузке происходит проверка на превышение ширины 720px:
	// если меньше — меняются атрибуты у фона на новые,
	// если больше — меняются атрибуты у фона на первоначальные
	$( window ).on('resize', function() {
		if ($( window ).width() < 720) {
			svgPosition.attr('width','770').attr('height','440').attr('transform','translate(-350, -120)').attr('x','50%').attr('y','50%');
			$('.clipping-bg').attr('transform','translate(350, 120)').attr('x','50%').attr('y','50%');
		} else {
			svgPosition.attr('width','1120').attr('height','640').attr('transform','translate(-560, -320)').attr('x','50%').attr('y','50%');
			$('.clipping-bg').attr('transform','translate(560, 320)').attr('x','50%').attr('y','50%');
		}
	});


	// открытие/закрытие секции с социальными кнопками
	var socialSection = $('.js-toggle-social').closest('.js-social-section');

	$('.js-toggle-social').on('click', function(){
		socialSection.hasClass('social--is-opened') ? socialSection.removeClass('social--is-opened') : socialSection.addClass('social--is-opened');
	});


	// открытие попапа что такое "краудфандинг"
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

	// открытие попапа о проекте 1
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

	// открытие попапа о проекте 2
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

	// открытие попапа о проекте 3
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

	// открытие попапа "перезвонить"
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

	// открытие попапа "информация для того, чтобы вам перезвонили принята"
	if ($('.js-callback-submit').length) {
		$('.js-callback-message-popup').on('click', '.js-close-message-popup', function(){
			$.magnificPopup.close();
		});
	}

	// открытие попапа "отправить информацию о проекте"
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


	// открытие попапа "спасибо за проект"
	if ($('.js-send-submit').length) {
		$('.js-send-message-popup').on('click', '.js-close-message-popup', function(){
			$.magnificPopup.close();
		});
	}

	// наведение на ячейку с проектом — показывается ссылка с текстом и заливка градиентом
	$('.js-project-tiles').on('mouseenter', '.js-tile a', function(){
		var tile = $(this).closest('.js-tile');
		tile.find('.js-tile-fill').show();
		tile.find('.js-tile-text').removeClass('is-hidden');
	});

	// убирается курсор с ячейки — ссылка с текстом и заливка градиентом скрываются
	$('.js-project-tiles').on('mouseleave','.js-tile a', function(){
		var tile = $(this).closest('.js-tile');
		tile.find('.js-tile-fill').hide();
		tile.find('.js-tile-text').addClass('is-hidden');
	});

});
