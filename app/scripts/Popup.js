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
	function Popup(element) {
		this.el = element;
		this.closeBtn = this.el.find('.js-close-popup');
		this.offset = $(window).scrollTop();
		this.initEvents();
	}

	Popup.prototype = {
		initEvents : function() {
			var obj = this;

			obj.savePos();

			obj.el.on('click', '.js-close-popup', function(){
				obj.close();
			});
		},
		savePos : function() {
			$('.overlayer').removeClass('overlayer--is-visible');
			this.el.addClass('overlayer--is-visible');
			$('body').css('top',-this.offset).addClass('body--popup');
		},
		close : function() {
			this.el.removeClass('overlayer--is-visible');
			$('body').removeClass('body--popup');
			$('html,body').scrollTop(this.offset);
			$('body').css('top',0);
		}
	}
}));
