/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-backgroundblendmode-cssanimations-csstransforms-csstransforms3d-details-flexbox-input-inputtypes-placeholder-rgba-search-smil-svg-svgclippaths-addtest-domprefixes-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,o,a,s;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],s=a.split("."),1===s.length?Modernizr[s[0]]=i:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=i),b.push((i?"":"no-")+s.join("-"))}}function o(e){var t=x.className,n=Modernizr._config.classPrefix||"";if(E&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?x.className.baseVal=t:x.className=t)}function a(e,t){if("object"==typeof e)for(var n in e)k(e,n)&&a(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(){var e=t.body;return e||(e=s(E?"svg":"body"),e.fake=!0),e}function f(e,n,r,i){var o,a,l,u,f="modernizr",d=s("div"),p=c();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=i?i[r]:f+(r+1),d.appendChild(l);return o=s("style"),o.type="text/css",o.id="s"+f,(p.fake?p:d).appendChild(o),p.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),a=n(d,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=u,x.offsetHeight):d.parentNode.removeChild(d),!!a}function d(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?d(i,n||t):i);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(m(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+m(t[i])+":"+r+")");return o=o.join(" or "),f("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function g(e,t,i,o){function a(){f&&(delete D.style,delete D.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var c=h(e,i);if(!r(c,"undefined"))return c}for(var f,d,p,m,g,v=["modernizr","tspan"];!D.style;)f=!0,D.modElem=s(v.shift()),D.style=D.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],g=D.style[m],l(m,"-")&&(m=u(m)),D.style[m]!==n){if(o||r(i,"undefined"))return a(),"pfx"==t?m:!0;try{D.style[m]=i}catch(y){}if(D.style[m]!=g)return a(),"pfx"==t?m:!0}return a(),!1}function v(e,t,n,i,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+O.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?g(s,t,i,o):(s=(e+" "+T.join(a+" ")+a).split(" "),p(s,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var b=[],C=[],S={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var w=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];S._prefixes=w;var x=t.documentElement,E="svg"===x.nodeName.toLowerCase();E||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function i(e,t){var n=b.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),b.elements=n+" "+e,u(t)}function o(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function a(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||m.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)i.createElement(s[a]);return i}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function u(e){e||(e=t);var r=o(e);return!b.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var c,f,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,f=!0}}();var b={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:f,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:i};e.html5=b,u(t),"object"==typeof module&&module.exports&&(module.exports=b)}("undefined"!=typeof e?e:this,t);var _="Moz O ms Webkit",T=S._config.usePrefixes?_.toLowerCase().split(" "):[];S._domPrefixes=T;var k;!function(){var e={}.hasOwnProperty;k=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),S._l={},S.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},S._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){S.addTest=a}),Modernizr.addTest("rgba",function(){var e=s("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("placeholder","placeholder"in s("input")&&"placeholder"in s("textarea"));var N=s("input"),P="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),z={};Modernizr.input=function(t){for(var n=0,r=t.length;r>n;n++)z[t[n]]=!!(t[n]in N);return z.list&&(z.list=!(!s("datalist")||!e.HTMLDataListElement)),z}(P);var A="search tel url email datetime date month week time datetime-local number range color".split(" "),j={};Modernizr.inputtypes=function(e){for(var r,i,o,a=e.length,s="1)",l=0;a>l;l++)N.setAttribute("type",r=e[l]),o="text"!==N.type&&"style"in N,o&&(N.value=s,N.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&N.style.WebkitAppearance!==n?(x.appendChild(N),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(N,null).WebkitAppearance&&0!==N.offsetHeight,x.removeChild(N)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?N.checkValidity&&N.checkValidity()===!1:N.value!=s)),j[e[l]]=!!o;return j}(A);var L=function(){function e(e,t){var i;return e?(t&&"string"!=typeof t||(t=s(t||"div")),e="on"+e,i=e in t,!i&&r&&(t.setAttribute||(t=s("div")),t.setAttribute(e,""),i="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),i):!1}var r=!("onblur"in t.documentElement);return e}();S.hasEvent=L,Modernizr.addTest("inputsearchevent",L("search"));var F="CSS"in e&&"supports"in e.CSS,M="supportsCSS"in e;Modernizr.addTest("supports",F||M);var H={}.toString;Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(H.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var O=S._config.usePrefixes?_.split(" "):[];S._cssomPrefixes=O,Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(H.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))});var V=S.testStyles=f;Modernizr.addTest("details",function(){var e,t=s("details");return"open"in t?(V("#modernizr details{display:block}",function(n){n.appendChild(t),t.innerHTML="<summary>a</summary>b",e=t.offsetHeight,t.open=!0,e=e!=t.offsetHeight}),e):!1});var q=function(t){var r,i=w.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var a=0;i>a;a++){var s=w[a],l=s.toUpperCase()+"_"+r;if(l in o)return"@-"+s.toLowerCase()+"-"+t}return!1};S.atRule=q;var B={elem:s("modernizr")};Modernizr._q.push(function(){delete B.elem});var D={style:B.elem.style};Modernizr._q.unshift(function(){delete D.style});S.testProp=function(e,t,r){return g([e],n,t,r)};S.testAllProps=v,S.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in x.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",V(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e});var $=S.prefixed=function(e,t,n){return 0===e.indexOf("@")?q(e):(-1!=e.indexOf("-")&&(e=u(e)),t?v(e,t,n):v(e,"pfx"))};Modernizr.addTest("backgroundblendmode",$("backgroundBlendMode","text")),i(),o(b),delete S.addTest,delete S.addAsyncTest;for(var R=0;R<Modernizr._q.length;R++)Modernizr._q[R]();e.Modernizr=Modernizr}(window,document);


!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof exports?module.exports=b():a.svg4everybody=b()}(this,function(){/*! svg4everybody v2.0.0 | github.com/jonathantneal/svg4everybody */
function a(a,b){if(b){var c=!a.getAttribute("viewBox")&&b.getAttribute("viewBox"),d=document.createDocumentFragment(),e=b.cloneNode(!0);for(c&&a.setAttribute("viewBox",c);e.childNodes.length;)d.appendChild(e.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=document.createElement("x");c.innerHTML=b.responseText,b.s.splice(0).map(function(b){a(b[0],c.querySelector("#"+b[1].replace(/(\W)/g,"\\$1")))})}},b.onreadystatechange()}function c(c){function d(){for(var c,j,k=0;k<e.length;)if(c=e[k],j=c.parentNode,j&&/svg/i.test(j.nodeName)){var l=c.getAttribute("xlink:href");if(f&&(!g||g(l,j,c))){var m=l.split("#"),n=m[0],o=m[1];if(j.removeChild(c),n.length){var p=i[n]=i[n]||new XMLHttpRequest;p.s||(p.s=[],p.open("GET",n),p.send()),p.s.push([j,o]),b(p)}else a(j,document.getElementById(o))}}else k+=1;h(d,17)}c=c||{};var e=document.getElementsByTagName("use"),f="polyfill"in c?c.polyfill:/\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent)||(navigator.userAgent.match(/AppleWebKit\/(\d+)/)||[])[1]<537,g=c.validate,h=window.requestAnimationFrame||setTimeout,i={};f&&d()}return c});

/*! Magnific Popup - v1.0.1 - 2015-12-30
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
;(function (factory) {
if (typeof define === 'function' && define.amd) {
 // AMD. Register as an anonymous module.
 define(['jquery'], factory);
 } else if (typeof exports === 'object') {
 // Node/CommonJS
 factory(require('jquery'));
 } else {
 // Browser globals
 factory(window.jQuery || window.Zepto);
 }
 }(function($) {

/*>>core*/
/**
 *
 * Magnific Popup Core JS file
 *
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars
 */
/*jshint -W079 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			/*jshint -W020 */
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true;
		}

		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}

		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin.
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1;
		mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
		mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) {
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}

		mfp.types = [];
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data );
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}


		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}



		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute',
				top: _window.scrollTop()
			});
		}



		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}

		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();


		var windowStyles = {};

		if( mfp.fixedContentPos ) {
						if(mfp._hasScrollBar(windowHeight)){
								var s = mfp._getScrollbarSize();
								if(s) {
										windowStyles.marginRight = s;
								}
						}
				}

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}



		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);

		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;

		// Wait for next cycle to allow CSS transition
		setTimeout(function() {

			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}

			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}

		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},

	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });

		mfp.currItem = item;





		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}

		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;

		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;

		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},




	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		}

		var eName = 'click.magnificPopup';
		options.mainEl = el;

		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}

		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}


		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( '<img src="'+value+'" class="' + el.attr('class') + '" />' );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}


		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);
		this.modules.push(name);
	},

	defaults: {

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

		disableOn: 0,

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened

		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true,

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,

		removalDelay: 0,

		prependTo: null,

		fixedContentPos: 'auto',

		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...',

		autoFocusLast: true

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);

		/*
		 * As Zepto doesn't support .data() method for objects
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};


//Quick benchmark
/*
var start = performance.now(),
	i,
	rounds = 1000;

for(i = 0; i < rounds; i++) {

}
console.log('Test #1:', performance.now() - start);

start = performance.now();
for(i = 0; i < rounds; i++) {

}
console.log('Test #2:', performance.now() - start);
*/


/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder,
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			$(document.body).removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur) {
				$(document.body).addClass(_ajaxCur);
			}

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});







/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined)
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title',
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					$(document.body).addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					$(document.body).removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {

				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}

				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');

					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');

							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');

						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			}

			return template;
		}
	}
});



/*>>image*/

/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;

			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image);

					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}


					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');

					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*

			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',

	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) {
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com',
				id: 'v=',
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					}
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;

			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});

			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery',
				supportsFastClick = Boolean($.fn.mfpFastClick);

			mfp.direction = true; // true - next, false - prev

			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					var eName = supportsFastClick ? 'mfpFastClick' : 'click';
					arrowLeft[eName](function() {
						mfp.prev();
					});
					arrowRight[eName](function() {
						mfp.next();
					});

					// Polyfill for :before and :after (adds elements with classes mfp-a and mfp-b)
					if(mfp.isIE7) {
						_getEl('b', arrowLeft[0], false, true);
						_getEl('a', arrowLeft[0], false, true);
						_getEl('b', arrowRight[0], false, true);
						_getEl('a', arrowRight[0], false, true);
					}

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);

				if(mfp.arrowLeft && supportsFastClick) {
					mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();
				}
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		},
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*
Touch Support that might be implemented some day

addSwipeGesture: function() {
	var startX,
		moved,
		multipleTouches;

		return;

	var namespace = '.mfp',
		addEventNames = function(pref, down, move, up, cancel) {
			mfp._tStart = pref + down + namespace;
			mfp._tMove = pref + move + namespace;
			mfp._tEnd = pref + up + namespace;
			mfp._tCancel = pref + cancel + namespace;
		};

	if(window.navigator.msPointerEnabled) {
		addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
	} else if('ontouchstart' in window) {
		addEventNames('touch', 'start', 'move', 'end', 'cancel');
	} else {
		return;
	}
	_window.on(mfp._tStart, function(e) {
		var oE = e.originalEvent;
		multipleTouches = moved = false;
		startX = oE.pageX || oE.changedTouches[0].pageX;
	}).on(mfp._tMove, function(e) {
		if(e.originalEvent.touches.length > 1) {
			multipleTouches = e.originalEvent.touches.length;
		} else {
			//e.preventDefault();
			moved = true;
		}
	}).on(mfp._tEnd + ' ' + mfp._tCancel, function(e) {
		if(moved && !multipleTouches) {
			var oE = e.originalEvent,
				diff = startX - (oE.pageX || oE.changedTouches[0].pageX);

			if(diff > 20) {
				mfp.next();
			} else if(diff < -20) {
				mfp.prev();
			}
		}
	});
},
*/


/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/

/*>>fastclick*/
/**
 * FastClick event implementation. (removes 300ms delay on touch devices)
 * Based on https://developers.google.com/mobile/articles/fast_buttons
 *
 * You may use it outside the Magnific Popup by calling just:
 *
 * $('.your-el').mfpFastClick(function() {
 *     console.log('Clicked!');
 * });
 *
 * To unbind:
 * $('.your-el').destroyMfpFastClick();
 *
 *
 * Note that it's a very basic and simple implementation, it blocks ghost click on the same element where it was bound.
 * If you need something more advanced, use plugin by FT Labs https://github.com/ftlabs/fastclick
 *
 */

(function() {
	var ghostClickDelay = 1000,
		supportsTouch = 'ontouchstart' in window,
		unbindTouchMove = function() {
			_window.off('touchmove'+ns+' touchend'+ns);
		},
		eName = 'mfpFastClick',
		ns = '.'+eName;


	// As Zepto.js doesn't have an easy way to add custom events (like jQuery), so we implement it in this way
	$.fn.mfpFastClick = function(callback) {

		return $(this).each(function() {

			var elem = $(this),
				lock;

			if( supportsTouch ) {

				var timeout,
					startX,
					startY,
					pointerMoved,
					point,
					numPointers;

				elem.on('touchstart' + ns, function(e) {
					pointerMoved = false;
					numPointers = 1;

					point = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];
					startX = point.clientX;
					startY = point.clientY;

					_window.on('touchmove'+ns, function(e) {
						point = e.originalEvent ? e.originalEvent.touches : e.touches;
						numPointers = point.length;
						point = point[0];
						if (Math.abs(point.clientX - startX) > 10 ||
							Math.abs(point.clientY - startY) > 10) {
							pointerMoved = true;
							unbindTouchMove();
						}
					}).on('touchend'+ns, function(e) {
						unbindTouchMove();
						if(pointerMoved || numPointers > 1) {
							return;
						}
						lock = true;
						e.preventDefault();
						clearTimeout(timeout);
						timeout = setTimeout(function() {
							lock = false;
						}, ghostClickDelay);
						callback();
					});
				});

			}

			elem.on('click' + ns, function() {
				if(!lock) {
					callback();
				}
			});
		});
	};

	$.fn.destroyMfpFastClick = function() {
		$(this).off('touchstart' + ns + ' click' + ns);
		if(supportsTouch) _window.off('touchmove'+ns+' touchend'+ns);
	};
})();

/*>>fastclick*/
 _checkInstance(); }));


/*
		 _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
									 |__/

 Version: 1.5.9
	Author: Ken Wheeler
	Website: http://kenwheeler.github.io
	Docs: http://kenwheeler.github.io/slick
	Repo: http://github.com/kenwheeler/slick
	Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
		'use strict';
		if (typeof define === 'function' && define.amd) {
				define(['jquery'], factory);
		} else if (typeof exports !== 'undefined') {
				module.exports = factory(require('jquery'));
		} else {
				factory(jQuery);
		}

}(function($) {
		'use strict';
		var Slick = window.Slick || {};

		Slick = (function() {

				var instanceUid = 0;

				function Slick(element, settings) {

						var _ = this, dataSettings;

						_.defaults = {
								accessibility: true,
								adaptiveHeight: false,
								appendArrows: $(element),
								appendDots: $(element),
								arrows: true,
								asNavFor: null,
								prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
								nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
								autoplay: false,
								autoplaySpeed: 3000,
								centerMode: false,
								centerPadding: '50px',
								cssEase: 'ease',
								customPaging: function(slider, i) {
										return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (i + 1) + '</button>';
								},
								dots: false,
								dotsClass: 'slick-dots',
								draggable: true,
								easing: 'linear',
								edgeFriction: 0.35,
								fade: false,
								focusOnSelect: false,
								infinite: true,
								initialSlide: 0,
								lazyLoad: 'ondemand',
								mobileFirst: false,
								pauseOnHover: true,
								pauseOnDotsHover: false,
								respondTo: 'window',
								responsive: null,
								rows: 1,
								rtl: false,
								slide: '',
								slidesPerRow: 1,
								slidesToShow: 1,
								slidesToScroll: 1,
								speed: 500,
								swipe: true,
								swipeToSlide: false,
								touchMove: true,
								touchThreshold: 5,
								useCSS: true,
								useTransform: false,
								variableWidth: false,
								vertical: false,
								verticalSwiping: false,
								waitForAnimate: true,
								zIndex: 1000
						};

						_.initials = {
								animating: false,
								dragging: false,
								autoPlayTimer: null,
								currentDirection: 0,
								currentLeft: null,
								currentSlide: 0,
								direction: 1,
								$dots: null,
								listWidth: null,
								listHeight: null,
								loadIndex: 0,
								$nextArrow: null,
								$prevArrow: null,
								slideCount: null,
								slideWidth: null,
								$slideTrack: null,
								$slides: null,
								sliding: false,
								slideOffset: 0,
								swipeLeft: null,
								$list: null,
								touchObject: {},
								transformsEnabled: false,
								unslicked: false
						};

						$.extend(_, _.initials);

						_.activeBreakpoint = null;
						_.animType = null;
						_.animProp = null;
						_.breakpoints = [];
						_.breakpointSettings = [];
						_.cssTransitions = false;
						_.hidden = 'hidden';
						_.paused = false;
						_.positionProp = null;
						_.respondTo = null;
						_.rowCount = 1;
						_.shouldClick = true;
						_.$slider = $(element);
						_.$slidesCache = null;
						_.transformType = null;
						_.transitionType = null;
						_.visibilityChange = 'visibilitychange';
						_.windowWidth = 0;
						_.windowTimer = null;

						dataSettings = $(element).data('slick') || {};

						_.options = $.extend({}, _.defaults, dataSettings, settings);

						_.currentSlide = _.options.initialSlide;

						_.originalSettings = _.options;

						if (typeof document.mozHidden !== 'undefined') {
								_.hidden = 'mozHidden';
								_.visibilityChange = 'mozvisibilitychange';
						} else if (typeof document.webkitHidden !== 'undefined') {
								_.hidden = 'webkitHidden';
								_.visibilityChange = 'webkitvisibilitychange';
						}

						_.autoPlay = $.proxy(_.autoPlay, _);
						_.autoPlayClear = $.proxy(_.autoPlayClear, _);
						_.changeSlide = $.proxy(_.changeSlide, _);
						_.clickHandler = $.proxy(_.clickHandler, _);
						_.selectHandler = $.proxy(_.selectHandler, _);
						_.setPosition = $.proxy(_.setPosition, _);
						_.swipeHandler = $.proxy(_.swipeHandler, _);
						_.dragHandler = $.proxy(_.dragHandler, _);
						_.keyHandler = $.proxy(_.keyHandler, _);
						_.autoPlayIterator = $.proxy(_.autoPlayIterator, _);

						_.instanceUid = instanceUid++;

						// A simple way to check for HTML strings
						// Strict HTML recognition (must start with <)
						// Extracted from jQuery v1.11 source
						_.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


						_.registerBreakpoints();
						_.init(true);
						_.checkResponsive(true);

				}

				return Slick;

		}());

		Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

				var _ = this;

				if (typeof(index) === 'boolean') {
						addBefore = index;
						index = null;
				} else if (index < 0 || (index >= _.slideCount)) {
						return false;
				}

				_.unload();

				if (typeof(index) === 'number') {
						if (index === 0 && _.$slides.length === 0) {
								$(markup).appendTo(_.$slideTrack);
						} else if (addBefore) {
								$(markup).insertBefore(_.$slides.eq(index));
						} else {
								$(markup).insertAfter(_.$slides.eq(index));
						}
				} else {
						if (addBefore === true) {
								$(markup).prependTo(_.$slideTrack);
						} else {
								$(markup).appendTo(_.$slideTrack);
						}
				}

				_.$slides = _.$slideTrack.children(this.options.slide);

				_.$slideTrack.children(this.options.slide).detach();

				_.$slideTrack.append(_.$slides);

				_.$slides.each(function(index, element) {
						$(element).attr('data-slick-index', index);
				});

				_.$slidesCache = _.$slides;

				_.reinit();

		};

		Slick.prototype.animateHeight = function() {
				var _ = this;
				if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
						var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
						_.$list.animate({
								height: targetHeight
						}, _.options.speed);
				}
		};

		Slick.prototype.animateSlide = function(targetLeft, callback) {

				var animProps = {},
						_ = this;

				_.animateHeight();

				if (_.options.rtl === true && _.options.vertical === false) {
						targetLeft = -targetLeft;
				}
				if (_.transformsEnabled === false) {
						if (_.options.vertical === false) {
								_.$slideTrack.animate({
										left: targetLeft
								}, _.options.speed, _.options.easing, callback);
						} else {
								_.$slideTrack.animate({
										top: targetLeft
								}, _.options.speed, _.options.easing, callback);
						}

				} else {

						if (_.cssTransitions === false) {
								if (_.options.rtl === true) {
										_.currentLeft = -(_.currentLeft);
								}
								$({
										animStart: _.currentLeft
								}).animate({
										animStart: targetLeft
								}, {
										duration: _.options.speed,
										easing: _.options.easing,
										step: function(now) {
												now = Math.ceil(now);
												if (_.options.vertical === false) {
														animProps[_.animType] = 'translate(' +
																now + 'px, 0px)';
														_.$slideTrack.css(animProps);
												} else {
														animProps[_.animType] = 'translate(0px,' +
																now + 'px)';
														_.$slideTrack.css(animProps);
												}
										},
										complete: function() {
												if (callback) {
														callback.call();
												}
										}
								});

						} else {

								_.applyTransition();
								targetLeft = Math.ceil(targetLeft);

								if (_.options.vertical === false) {
										animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
								} else {
										animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
								}
								_.$slideTrack.css(animProps);

								if (callback) {
										setTimeout(function() {

												_.disableTransition();

												callback.call();
										}, _.options.speed);
								}

						}

				}

		};

		Slick.prototype.asNavFor = function(index) {

				var _ = this,
						asNavFor = _.options.asNavFor;

				if ( asNavFor && asNavFor !== null ) {
						asNavFor = $(asNavFor).not(_.$slider);
				}

				if ( asNavFor !== null && typeof asNavFor === 'object' ) {
						asNavFor.each(function() {
								var target = $(this).slick('getSlick');
								if(!target.unslicked) {
										target.slideHandler(index, true);
								}
						});
				}

		};

		Slick.prototype.applyTransition = function(slide) {

				var _ = this,
						transition = {};

				if (_.options.fade === false) {
						transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
				} else {
						transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
				}

				if (_.options.fade === false) {
						_.$slideTrack.css(transition);
				} else {
						_.$slides.eq(slide).css(transition);
				}

		};

		Slick.prototype.autoPlay = function() {

				var _ = this;

				if (_.autoPlayTimer) {
						clearInterval(_.autoPlayTimer);
				}

				if (_.slideCount > _.options.slidesToShow && _.paused !== true) {
						_.autoPlayTimer = setInterval(_.autoPlayIterator,
								_.options.autoplaySpeed);
				}

		};

		Slick.prototype.autoPlayClear = function() {

				var _ = this;
				if (_.autoPlayTimer) {
						clearInterval(_.autoPlayTimer);
				}

		};

		Slick.prototype.autoPlayIterator = function() {

				var _ = this;

				if (_.options.infinite === false) {

						if (_.direction === 1) {

								if ((_.currentSlide + 1) === _.slideCount -
										1) {
										_.direction = 0;
								}

								_.slideHandler(_.currentSlide + _.options.slidesToScroll);

						} else {

								if ((_.currentSlide - 1 === 0)) {

										_.direction = 1;

								}

								_.slideHandler(_.currentSlide - _.options.slidesToScroll);

						}

				} else {

						_.slideHandler(_.currentSlide + _.options.slidesToScroll);

				}

		};

		Slick.prototype.buildArrows = function() {

				var _ = this;

				if (_.options.arrows === true ) {

						_.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
						_.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

						if( _.slideCount > _.options.slidesToShow ) {

								_.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
								_.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

								if (_.htmlExpr.test(_.options.prevArrow)) {
										_.$prevArrow.prependTo(_.options.appendArrows);
								}

								if (_.htmlExpr.test(_.options.nextArrow)) {
										_.$nextArrow.appendTo(_.options.appendArrows);
								}

								if (_.options.infinite !== true) {
										_.$prevArrow
												.addClass('slick-disabled')
												.attr('aria-disabled', 'true');
								}

						} else {

								_.$prevArrow.add( _.$nextArrow )

										.addClass('slick-hidden')
										.attr({
												'aria-disabled': 'true',
												'tabindex': '-1'
										});

						}

				}

		};

		Slick.prototype.buildDots = function() {

				var _ = this,
						i, dotString;

				if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

						dotString = '<ul class="' + _.options.dotsClass + '">';

						for (i = 0; i <= _.getDotCount(); i += 1) {
								dotString += '<li>' + _.options.customPaging.call(this, _, i) + '</li>';
						}

						dotString += '</ul>';

						_.$dots = $(dotString).appendTo(
								_.options.appendDots);

						_.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

				}

		};

		Slick.prototype.buildOut = function() {

				var _ = this;

				_.$slides =
						_.$slider
								.children( _.options.slide + ':not(.slick-cloned)')
								.addClass('slick-slide');

				_.slideCount = _.$slides.length;

				_.$slides.each(function(index, element) {
						$(element)
								.attr('data-slick-index', index)
								.data('originalStyling', $(element).attr('style') || '');
				});

				_.$slider.addClass('slick-slider');

				_.$slideTrack = (_.slideCount === 0) ?
						$('<div class="slick-track"/>').appendTo(_.$slider) :
						_.$slides.wrapAll('<div class="slick-track"/>').parent();

				_.$list = _.$slideTrack.wrap(
						'<div aria-live="polite" class="slick-list"/>').parent();
				_.$slideTrack.css('opacity', 0);

				if (_.options.centerMode === true || _.options.swipeToSlide === true) {
						_.options.slidesToScroll = 1;
				}

				$('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

				_.setupInfinite();

				_.buildArrows();

				_.buildDots();

				_.updateDots();


				_.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

				if (_.options.draggable === true) {
						_.$list.addClass('draggable');
				}

		};

		Slick.prototype.buildRows = function() {

				var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

				newSlides = document.createDocumentFragment();
				originalSlides = _.$slider.children();

				if(_.options.rows > 1) {

						slidesPerSection = _.options.slidesPerRow * _.options.rows;
						numOfSlides = Math.ceil(
								originalSlides.length / slidesPerSection
						);

						for(a = 0; a < numOfSlides; a++){
								var slide = document.createElement('div');
								for(b = 0; b < _.options.rows; b++) {
										var row = document.createElement('div');
										for(c = 0; c < _.options.slidesPerRow; c++) {
												var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
												if (originalSlides.get(target)) {
														row.appendChild(originalSlides.get(target));
												}
										}
										slide.appendChild(row);
								}
								newSlides.appendChild(slide);
						}

						_.$slider.html(newSlides);
						_.$slider.children().children().children()
								.css({
										'width':(100 / _.options.slidesPerRow) + '%',
										'display': 'inline-block'
								});

				}

		};

		Slick.prototype.checkResponsive = function(initial, forceUpdate) {

				var _ = this,
						breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
				var sliderWidth = _.$slider.width();
				var windowWidth = window.innerWidth || $(window).width();

				if (_.respondTo === 'window') {
						respondToWidth = windowWidth;
				} else if (_.respondTo === 'slider') {
						respondToWidth = sliderWidth;
				} else if (_.respondTo === 'min') {
						respondToWidth = Math.min(windowWidth, sliderWidth);
				}

				if ( _.options.responsive &&
						_.options.responsive.length &&
						_.options.responsive !== null) {

						targetBreakpoint = null;

						for (breakpoint in _.breakpoints) {
								if (_.breakpoints.hasOwnProperty(breakpoint)) {
										if (_.originalSettings.mobileFirst === false) {
												if (respondToWidth < _.breakpoints[breakpoint]) {
														targetBreakpoint = _.breakpoints[breakpoint];
												}
										} else {
												if (respondToWidth > _.breakpoints[breakpoint]) {
														targetBreakpoint = _.breakpoints[breakpoint];
												}
										}
								}
						}

						if (targetBreakpoint !== null) {
								if (_.activeBreakpoint !== null) {
										if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
												_.activeBreakpoint =
														targetBreakpoint;
												if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
														_.unslick(targetBreakpoint);
												} else {
														_.options = $.extend({}, _.originalSettings,
																_.breakpointSettings[
																		targetBreakpoint]);
														if (initial === true) {
																_.currentSlide = _.options.initialSlide;
														}
														_.refresh(initial);
												}
												triggerBreakpoint = targetBreakpoint;
										}
								} else {
										_.activeBreakpoint = targetBreakpoint;
										if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
												_.unslick(targetBreakpoint);
										} else {
												_.options = $.extend({}, _.originalSettings,
														_.breakpointSettings[
																targetBreakpoint]);
												if (initial === true) {
														_.currentSlide = _.options.initialSlide;
												}
												_.refresh(initial);
										}
										triggerBreakpoint = targetBreakpoint;
								}
						} else {
								if (_.activeBreakpoint !== null) {
										_.activeBreakpoint = null;
										_.options = _.originalSettings;
										if (initial === true) {
												_.currentSlide = _.options.initialSlide;
										}
										_.refresh(initial);
										triggerBreakpoint = targetBreakpoint;
								}
						}

						// only trigger breakpoints during an actual break. not on initialize.
						if( !initial && triggerBreakpoint !== false ) {
								_.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
						}
				}

		};

		Slick.prototype.changeSlide = function(event, dontAnimate) {

				var _ = this,
						$target = $(event.target),
						indexOffset, slideOffset, unevenOffset;

				// If target is a link, prevent default action.
				if($target.is('a')) {
						event.preventDefault();
				}

				// If target is not the <li> element (ie: a child), find the <li>.
				if(!$target.is('li')) {
						$target = $target.closest('li');
				}

				unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
				indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

				switch (event.data.message) {

						case 'previous':
								slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
								if (_.slideCount > _.options.slidesToShow) {
										_.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
								}
								break;

						case 'next':
								slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
								if (_.slideCount > _.options.slidesToShow) {
										_.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
								}
								break;

						case 'index':
								var index = event.data.index === 0 ? 0 :
										event.data.index || $target.index() * _.options.slidesToScroll;

								_.slideHandler(_.checkNavigable(index), false, dontAnimate);
								$target.children().trigger('focus');
								break;

						default:
								return;
				}

		};

		Slick.prototype.checkNavigable = function(index) {

				var _ = this,
						navigables, prevNavigable;

				navigables = _.getNavigableIndexes();
				prevNavigable = 0;
				if (index > navigables[navigables.length - 1]) {
						index = navigables[navigables.length - 1];
				} else {
						for (var n in navigables) {
								if (index < navigables[n]) {
										index = prevNavigable;
										break;
								}
								prevNavigable = navigables[n];
						}
				}

				return index;
		};

		Slick.prototype.cleanUpEvents = function() {

				var _ = this;

				if (_.options.dots && _.$dots !== null) {

						$('li', _.$dots).off('click.slick', _.changeSlide);

						if (_.options.pauseOnDotsHover === true && _.options.autoplay === true) {

								$('li', _.$dots)
										.off('mouseenter.slick', $.proxy(_.setPaused, _, true))
										.off('mouseleave.slick', $.proxy(_.setPaused, _, false));

						}

				}

				if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
						_.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
						_.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
				}

				_.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
				_.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
				_.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
				_.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

				_.$list.off('click.slick', _.clickHandler);

				$(document).off(_.visibilityChange, _.visibility);

				_.$list.off('mouseenter.slick', $.proxy(_.setPaused, _, true));
				_.$list.off('mouseleave.slick', $.proxy(_.setPaused, _, false));

				if (_.options.accessibility === true) {
						_.$list.off('keydown.slick', _.keyHandler);
				}

				if (_.options.focusOnSelect === true) {
						$(_.$slideTrack).children().off('click.slick', _.selectHandler);
				}

				$(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

				$(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

				$('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

				$(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
				$(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
		};

		Slick.prototype.cleanUpRows = function() {

				var _ = this, originalSlides;

				if(_.options.rows > 1) {
						originalSlides = _.$slides.children().children();
						originalSlides.removeAttr('style');
						_.$slider.html(originalSlides);
				}

		};

		Slick.prototype.clickHandler = function(event) {

				var _ = this;

				if (_.shouldClick === false) {
						event.stopImmediatePropagation();
						event.stopPropagation();
						event.preventDefault();
				}

		};

		Slick.prototype.destroy = function(refresh) {

				var _ = this;

				_.autoPlayClear();

				_.touchObject = {};

				_.cleanUpEvents();

				$('.slick-cloned', _.$slider).detach();

				if (_.$dots) {
						_.$dots.remove();
				}


				if ( _.$prevArrow && _.$prevArrow.length ) {

						_.$prevArrow
								.removeClass('slick-disabled slick-arrow slick-hidden')
								.removeAttr('aria-hidden aria-disabled tabindex')
								.css("display","");

						if ( _.htmlExpr.test( _.options.prevArrow )) {
								_.$prevArrow.remove();
						}
				}

				if ( _.$nextArrow && _.$nextArrow.length ) {

						_.$nextArrow
								.removeClass('slick-disabled slick-arrow slick-hidden')
								.removeAttr('aria-hidden aria-disabled tabindex')
								.css("display","");

						if ( _.htmlExpr.test( _.options.nextArrow )) {
								_.$nextArrow.remove();
						}

				}


				if (_.$slides) {

						_.$slides
								.removeClass('slick-slide slick-active slick-center slick-visible slick-current')
								.removeAttr('aria-hidden')
								.removeAttr('data-slick-index')
								.each(function(){
										$(this).attr('style', $(this).data('originalStyling'));
								});

						_.$slideTrack.children(this.options.slide).detach();

						_.$slideTrack.detach();

						_.$list.detach();

						_.$slider.append(_.$slides);
				}

				_.cleanUpRows();

				_.$slider.removeClass('slick-slider');
				_.$slider.removeClass('slick-initialized');

				_.unslicked = true;

				if(!refresh) {
						_.$slider.trigger('destroy', [_]);
				}

		};

		Slick.prototype.disableTransition = function(slide) {

				var _ = this,
						transition = {};

				transition[_.transitionType] = '';

				if (_.options.fade === false) {
						_.$slideTrack.css(transition);
				} else {
						_.$slides.eq(slide).css(transition);
				}

		};

		Slick.prototype.fadeSlide = function(slideIndex, callback) {

				var _ = this;

				if (_.cssTransitions === false) {

						_.$slides.eq(slideIndex).css({
								zIndex: _.options.zIndex
						});

						_.$slides.eq(slideIndex).animate({
								opacity: 1
						}, _.options.speed, _.options.easing, callback);

				} else {

						_.applyTransition(slideIndex);

						_.$slides.eq(slideIndex).css({
								opacity: 1,
								zIndex: _.options.zIndex
						});

						if (callback) {
								setTimeout(function() {

										_.disableTransition(slideIndex);

										callback.call();
								}, _.options.speed);
						}

				}

		};

		Slick.prototype.fadeSlideOut = function(slideIndex) {

				var _ = this;

				if (_.cssTransitions === false) {

						_.$slides.eq(slideIndex).animate({
								opacity: 0,
								zIndex: _.options.zIndex - 2
						}, _.options.speed, _.options.easing);

				} else {

						_.applyTransition(slideIndex);

						_.$slides.eq(slideIndex).css({
								opacity: 0,
								zIndex: _.options.zIndex - 2
						});

				}

		};

		Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

				var _ = this;

				if (filter !== null) {

						_.$slidesCache = _.$slides;

						_.unload();

						_.$slideTrack.children(this.options.slide).detach();

						_.$slidesCache.filter(filter).appendTo(_.$slideTrack);

						_.reinit();

				}

		};

		Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

				var _ = this;
				return _.currentSlide;

		};

		Slick.prototype.getDotCount = function() {

				var _ = this;

				var breakPoint = 0;
				var counter = 0;
				var pagerQty = 0;

				if (_.options.infinite === true) {
						while (breakPoint < _.slideCount) {
								++pagerQty;
								breakPoint = counter + _.options.slidesToScroll;
								counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
						}
				} else if (_.options.centerMode === true) {
						pagerQty = _.slideCount;
				} else {
						while (breakPoint < _.slideCount) {
								++pagerQty;
								breakPoint = counter + _.options.slidesToScroll;
								counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
						}
				}

				return pagerQty - 1;

		};

		Slick.prototype.getLeft = function(slideIndex) {

				var _ = this,
						targetLeft,
						verticalHeight,
						verticalOffset = 0,
						targetSlide;

				_.slideOffset = 0;
				verticalHeight = _.$slides.first().outerHeight(true);

				if (_.options.infinite === true) {
						if (_.slideCount > _.options.slidesToShow) {
								_.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
								verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
						}
						if (_.slideCount % _.options.slidesToScroll !== 0) {
								if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
										if (slideIndex > _.slideCount) {
												_.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
												verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
										} else {
												_.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
												verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
										}
								}
						}
				} else {
						if (slideIndex + _.options.slidesToShow > _.slideCount) {
								_.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
								verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
						}
				}

				if (_.slideCount <= _.options.slidesToShow) {
						_.slideOffset = 0;
						verticalOffset = 0;
				}

				if (_.options.centerMode === true && _.options.infinite === true) {
						_.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
				} else if (_.options.centerMode === true) {
						_.slideOffset = 0;
						_.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
				}

				if (_.options.vertical === false) {
						targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
				} else {
						targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
				}

				if (_.options.variableWidth === true) {

						if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
								targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
						} else {
								targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
						}

						if (_.options.rtl === true) {
								if (targetSlide[0]) {
										targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
								} else {
										targetLeft =  0;
								}
						} else {
								targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
						}

						if (_.options.centerMode === true) {
								if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
										targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
								} else {
										targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
								}

								if (_.options.rtl === true) {
										if (targetSlide[0]) {
												targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
										} else {
												targetLeft =  0;
										}
								} else {
										targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
								}

								targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
						}
				}

				return targetLeft;

		};

		Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

				var _ = this;

				return _.options[option];

		};

		Slick.prototype.getNavigableIndexes = function() {

				var _ = this,
						breakPoint = 0,
						counter = 0,
						indexes = [],
						max;

				if (_.options.infinite === false) {
						max = _.slideCount;
				} else {
						breakPoint = _.options.slidesToScroll * -1;
						counter = _.options.slidesToScroll * -1;
						max = _.slideCount * 2;
				}

				while (breakPoint < max) {
						indexes.push(breakPoint);
						breakPoint = counter + _.options.slidesToScroll;
						counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
				}

				return indexes;

		};

		Slick.prototype.getSlick = function() {

				return this;

		};

		Slick.prototype.getSlideCount = function() {

				var _ = this,
						slidesTraversed, swipedSlide, centerOffset;

				centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

				if (_.options.swipeToSlide === true) {
						_.$slideTrack.find('.slick-slide').each(function(index, slide) {
								if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
										swipedSlide = slide;
										return false;
								}
						});

						slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

						return slidesTraversed;

				} else {
						return _.options.slidesToScroll;
				}

		};

		Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

				var _ = this;

				_.changeSlide({
						data: {
								message: 'index',
								index: parseInt(slide)
						}
				}, dontAnimate);

		};

		Slick.prototype.init = function(creation) {

				var _ = this;

				if (!$(_.$slider).hasClass('slick-initialized')) {

						$(_.$slider).addClass('slick-initialized');

						_.buildRows();
						_.buildOut();
						_.setProps();
						_.startLoad();
						_.loadSlider();
						_.initializeEvents();
						_.updateArrows();
						_.updateDots();

				}

				if (creation) {
						_.$slider.trigger('init', [_]);
				}

				if (_.options.accessibility === true) {
						_.initADA();
				}

		};

		Slick.prototype.initArrowEvents = function() {

				var _ = this;

				if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
						_.$prevArrow.on('click.slick', {
								message: 'previous'
						}, _.changeSlide);
						_.$nextArrow.on('click.slick', {
								message: 'next'
						}, _.changeSlide);
				}

		};

		Slick.prototype.initDotEvents = function() {

				var _ = this;

				if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
						$('li', _.$dots).on('click.slick', {
								message: 'index'
						}, _.changeSlide);
				}

				if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.options.autoplay === true) {
						$('li', _.$dots)
								.on('mouseenter.slick', $.proxy(_.setPaused, _, true))
								.on('mouseleave.slick', $.proxy(_.setPaused, _, false));
				}

		};

		Slick.prototype.initializeEvents = function() {

				var _ = this;

				_.initArrowEvents();

				_.initDotEvents();

				_.$list.on('touchstart.slick mousedown.slick', {
						action: 'start'
				}, _.swipeHandler);
				_.$list.on('touchmove.slick mousemove.slick', {
						action: 'move'
				}, _.swipeHandler);
				_.$list.on('touchend.slick mouseup.slick', {
						action: 'end'
				}, _.swipeHandler);
				_.$list.on('touchcancel.slick mouseleave.slick', {
						action: 'end'
				}, _.swipeHandler);

				_.$list.on('click.slick', _.clickHandler);

				$(document).on(_.visibilityChange, $.proxy(_.visibility, _));

				_.$list.on('mouseenter.slick', $.proxy(_.setPaused, _, true));
				_.$list.on('mouseleave.slick', $.proxy(_.setPaused, _, false));

				if (_.options.accessibility === true) {
						_.$list.on('keydown.slick', _.keyHandler);
				}

				if (_.options.focusOnSelect === true) {
						$(_.$slideTrack).children().on('click.slick', _.selectHandler);
				}

				$(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

				$(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

				$('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

				$(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
				$(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

		};

		Slick.prototype.initUI = function() {

				var _ = this;

				if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

						_.$prevArrow.show();
						_.$nextArrow.show();

				}

				if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

						_.$dots.show();

				}

				if (_.options.autoplay === true) {

						_.autoPlay();

				}

		};

		Slick.prototype.keyHandler = function(event) {

				var _ = this;
				 //Dont slide if the cursor is inside the form fields and arrow keys are pressed
				if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
						if (event.keyCode === 37 && _.options.accessibility === true) {
								_.changeSlide({
										data: {
												message: 'previous'
										}
								});
						} else if (event.keyCode === 39 && _.options.accessibility === true) {
								_.changeSlide({
										data: {
												message: 'next'
										}
								});
						}
				}

		};

		Slick.prototype.lazyLoad = function() {

				var _ = this,
						loadRange, cloneRange, rangeStart, rangeEnd;

				function loadImages(imagesScope) {
						$('img[data-lazy]', imagesScope).each(function() {

								var image = $(this),
										imageSource = $(this).attr('data-lazy'),
										imageToLoad = document.createElement('img');

								imageToLoad.onload = function() {
										image
												.animate({ opacity: 0 }, 100, function() {
														image
																.attr('src', imageSource)
																.animate({ opacity: 1 }, 200, function() {
																		image
																				.removeAttr('data-lazy')
																				.removeClass('slick-loading');
																});
												});
								};

								imageToLoad.src = imageSource;

						});
				}

				if (_.options.centerMode === true) {
						if (_.options.infinite === true) {
								rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
								rangeEnd = rangeStart + _.options.slidesToShow + 2;
						} else {
								rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
								rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
						}
				} else {
						rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
						rangeEnd = rangeStart + _.options.slidesToShow;
						if (_.options.fade === true) {
								if (rangeStart > 0) rangeStart--;
								if (rangeEnd <= _.slideCount) rangeEnd++;
						}
				}

				loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
				loadImages(loadRange);

				if (_.slideCount <= _.options.slidesToShow) {
						cloneRange = _.$slider.find('.slick-slide');
						loadImages(cloneRange);
				} else
				if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
						cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
						loadImages(cloneRange);
				} else if (_.currentSlide === 0) {
						cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
						loadImages(cloneRange);
				}

		};

		Slick.prototype.loadSlider = function() {

				var _ = this;

				_.setPosition();

				_.$slideTrack.css({
						opacity: 1
				});

				_.$slider.removeClass('slick-loading');

				_.initUI();

				if (_.options.lazyLoad === 'progressive') {
						_.progressiveLazyLoad();
				}

		};

		Slick.prototype.next = Slick.prototype.slickNext = function() {

				var _ = this;

				_.changeSlide({
						data: {
								message: 'next'
						}
				});

		};

		Slick.prototype.orientationChange = function() {

				var _ = this;

				_.checkResponsive();
				_.setPosition();

		};

		Slick.prototype.pause = Slick.prototype.slickPause = function() {

				var _ = this;

				_.autoPlayClear();
				_.paused = true;

		};

		Slick.prototype.play = Slick.prototype.slickPlay = function() {

				var _ = this;

				_.paused = false;
				_.autoPlay();

		};

		Slick.prototype.postSlide = function(index) {

				var _ = this;

				_.$slider.trigger('afterChange', [_, index]);

				_.animating = false;

				_.setPosition();

				_.swipeLeft = null;

				if (_.options.autoplay === true && _.paused === false) {
						_.autoPlay();
				}
				if (_.options.accessibility === true) {
						_.initADA();
				}

		};

		Slick.prototype.prev = Slick.prototype.slickPrev = function() {

				var _ = this;

				_.changeSlide({
						data: {
								message: 'previous'
						}
				});

		};

		Slick.prototype.preventDefault = function(event) {
				event.preventDefault();
		};

		Slick.prototype.progressiveLazyLoad = function() {

				var _ = this,
						imgCount, targetImage;

				imgCount = $('img[data-lazy]', _.$slider).length;

				if (imgCount > 0) {
						targetImage = $('img[data-lazy]', _.$slider).first();
						targetImage.attr('src', null);
						targetImage.attr('src', targetImage.attr('data-lazy')).removeClass('slick-loading').load(function() {
										targetImage.removeAttr('data-lazy');
										_.progressiveLazyLoad();

										if (_.options.adaptiveHeight === true) {
												_.setPosition();
										}
								})
								.error(function() {
										targetImage.removeAttr('data-lazy');
										_.progressiveLazyLoad();
								});
				}

		};

		Slick.prototype.refresh = function( initializing ) {

				var _ = this, currentSlide, firstVisible;

				firstVisible = _.slideCount - _.options.slidesToShow;

				// check that the new breakpoint can actually accept the
				// "current slide" as the current slide, otherwise we need
				// to set it to the closest possible value.
				if ( !_.options.infinite ) {
						if ( _.slideCount <= _.options.slidesToShow ) {
								_.currentSlide = 0;
						} else if ( _.currentSlide > firstVisible ) {
								_.currentSlide = firstVisible;
						}
				}

				 currentSlide = _.currentSlide;

				_.destroy(true);

				$.extend(_, _.initials, { currentSlide: currentSlide });

				_.init();

				if( !initializing ) {

						_.changeSlide({
								data: {
										message: 'index',
										index: currentSlide
								}
						}, false);

				}

		};

		Slick.prototype.registerBreakpoints = function() {

				var _ = this, breakpoint, currentBreakpoint, l,
						responsiveSettings = _.options.responsive || null;

				if ( $.type(responsiveSettings) === "array" && responsiveSettings.length ) {

						_.respondTo = _.options.respondTo || 'window';

						for ( breakpoint in responsiveSettings ) {

								l = _.breakpoints.length-1;
								currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

								if (responsiveSettings.hasOwnProperty(breakpoint)) {

										// loop through the breakpoints and cut out any existing
										// ones with the same breakpoint number, we don't want dupes.
										while( l >= 0 ) {
												if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
														_.breakpoints.splice(l,1);
												}
												l--;
										}

										_.breakpoints.push(currentBreakpoint);
										_.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

								}

						}

						_.breakpoints.sort(function(a, b) {
								return ( _.options.mobileFirst ) ? a-b : b-a;
						});

				}

		};

		Slick.prototype.reinit = function() {

				var _ = this;

				_.$slides =
						_.$slideTrack
								.children(_.options.slide)
								.addClass('slick-slide');

				_.slideCount = _.$slides.length;

				if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
						_.currentSlide = _.currentSlide - _.options.slidesToScroll;
				}

				if (_.slideCount <= _.options.slidesToShow) {
						_.currentSlide = 0;
				}

				_.registerBreakpoints();

				_.setProps();
				_.setupInfinite();
				_.buildArrows();
				_.updateArrows();
				_.initArrowEvents();
				_.buildDots();
				_.updateDots();
				_.initDotEvents();

				_.checkResponsive(false, true);

				if (_.options.focusOnSelect === true) {
						$(_.$slideTrack).children().on('click.slick', _.selectHandler);
				}

				_.setSlideClasses(0);

				_.setPosition();

				_.$slider.trigger('reInit', [_]);

				if (_.options.autoplay === true) {
						_.focusHandler();
				}

		};

		Slick.prototype.resize = function() {

				var _ = this;

				if ($(window).width() !== _.windowWidth) {
						clearTimeout(_.windowDelay);
						_.windowDelay = window.setTimeout(function() {
								_.windowWidth = $(window).width();
								_.checkResponsive();
								if( !_.unslicked ) { _.setPosition(); }
						}, 50);
				}
		};

		Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

				var _ = this;

				if (typeof(index) === 'boolean') {
						removeBefore = index;
						index = removeBefore === true ? 0 : _.slideCount - 1;
				} else {
						index = removeBefore === true ? --index : index;
				}

				if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
						return false;
				}

				_.unload();

				if (removeAll === true) {
						_.$slideTrack.children().remove();
				} else {
						_.$slideTrack.children(this.options.slide).eq(index).remove();
				}

				_.$slides = _.$slideTrack.children(this.options.slide);

				_.$slideTrack.children(this.options.slide).detach();

				_.$slideTrack.append(_.$slides);

				_.$slidesCache = _.$slides;

				_.reinit();

		};

		Slick.prototype.setCSS = function(position) {

				var _ = this,
						positionProps = {},
						x, y;

				if (_.options.rtl === true) {
						position = -position;
				}
				x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
				y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

				positionProps[_.positionProp] = position;

				if (_.transformsEnabled === false) {
						_.$slideTrack.css(positionProps);
				} else {
						positionProps = {};
						if (_.cssTransitions === false) {
								positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
								_.$slideTrack.css(positionProps);
						} else {
								positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
								_.$slideTrack.css(positionProps);
						}
				}

		};

		Slick.prototype.setDimensions = function() {

				var _ = this;

				if (_.options.vertical === false) {
						if (_.options.centerMode === true) {
								_.$list.css({
										padding: ('0px ' + _.options.centerPadding)
								});
						}
				} else {
						_.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
						if (_.options.centerMode === true) {
								_.$list.css({
										padding: (_.options.centerPadding + ' 0px')
								});
						}
				}

				_.listWidth = _.$list.width();
				_.listHeight = _.$list.height();


				if (_.options.vertical === false && _.options.variableWidth === false) {
						_.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
						_.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

				} else if (_.options.variableWidth === true) {
						_.$slideTrack.width(5000 * _.slideCount);
				} else {
						_.slideWidth = Math.ceil(_.listWidth);
						_.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
				}

				var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
				if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

		};

		Slick.prototype.setFade = function() {

				var _ = this,
						targetLeft;

				_.$slides.each(function(index, element) {
						targetLeft = (_.slideWidth * index) * -1;
						if (_.options.rtl === true) {
								$(element).css({
										position: 'relative',
										right: targetLeft,
										top: 0,
										zIndex: _.options.zIndex - 2,
										opacity: 0
								});
						} else {
								$(element).css({
										position: 'relative',
										left: targetLeft,
										top: 0,
										zIndex: _.options.zIndex - 2,
										opacity: 0
								});
						}
				});

				_.$slides.eq(_.currentSlide).css({
						zIndex: _.options.zIndex - 1,
						opacity: 1
				});

		};

		Slick.prototype.setHeight = function() {

				var _ = this;

				if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
						var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
						_.$list.css('height', targetHeight);
				}

		};

		Slick.prototype.setOption = Slick.prototype.slickSetOption = function(option, value, refresh) {

				var _ = this, l, item;

				if( option === "responsive" && $.type(value) === "array" ) {
						for ( item in value ) {
								if( $.type( _.options.responsive ) !== "array" ) {
										_.options.responsive = [ value[item] ];
								} else {
										l = _.options.responsive.length-1;
										// loop through the responsive object and splice out duplicates.
										while( l >= 0 ) {
												if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {
														_.options.responsive.splice(l,1);
												}
												l--;
										}
										_.options.responsive.push( value[item] );
								}
						}
				} else {
						_.options[option] = value;
				}

				if (refresh === true) {
						_.unload();
						_.reinit();
				}

		};

		Slick.prototype.setPosition = function() {

				var _ = this;

				_.setDimensions();

				_.setHeight();

				if (_.options.fade === false) {
						_.setCSS(_.getLeft(_.currentSlide));
				} else {
						_.setFade();
				}

				_.$slider.trigger('setPosition', [_]);

		};

		Slick.prototype.setProps = function() {

				var _ = this,
						bodyStyle = document.body.style;

				_.positionProp = _.options.vertical === true ? 'top' : 'left';

				if (_.positionProp === 'top') {
						_.$slider.addClass('slick-vertical');
				} else {
						_.$slider.removeClass('slick-vertical');
				}

				if (bodyStyle.WebkitTransition !== undefined ||
						bodyStyle.MozTransition !== undefined ||
						bodyStyle.msTransition !== undefined) {
						if (_.options.useCSS === true) {
								_.cssTransitions = true;
						}
				}

				if ( _.options.fade ) {
						if ( typeof _.options.zIndex === 'number' ) {
								if( _.options.zIndex < 3 ) {
										_.options.zIndex = 3;
								}
						} else {
								_.options.zIndex = _.defaults.zIndex;
						}
				}

				if (bodyStyle.OTransform !== undefined) {
						_.animType = 'OTransform';
						_.transformType = '-o-transform';
						_.transitionType = 'OTransition';
						if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
				}
				if (bodyStyle.MozTransform !== undefined) {
						_.animType = 'MozTransform';
						_.transformType = '-moz-transform';
						_.transitionType = 'MozTransition';
						if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
				}
				if (bodyStyle.webkitTransform !== undefined) {
						_.animType = 'webkitTransform';
						_.transformType = '-webkit-transform';
						_.transitionType = 'webkitTransition';
						if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
				}
				if (bodyStyle.msTransform !== undefined) {
						_.animType = 'msTransform';
						_.transformType = '-ms-transform';
						_.transitionType = 'msTransition';
						if (bodyStyle.msTransform === undefined) _.animType = false;
				}
				if (bodyStyle.transform !== undefined && _.animType !== false) {
						_.animType = 'transform';
						_.transformType = 'transform';
						_.transitionType = 'transition';
				}
				_.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
		};


		Slick.prototype.setSlideClasses = function(index) {

				var _ = this,
						centerOffset, allSlides, indexOffset, remainder;

				allSlides = _.$slider
						.find('.slick-slide')
						.removeClass('slick-active slick-center slick-current')
						.attr('aria-hidden', 'true');

				_.$slides
						.eq(index)
						.addClass('slick-current');

				if (_.options.centerMode === true) {

						centerOffset = Math.floor(_.options.slidesToShow / 2);

						if (_.options.infinite === true) {

								if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

										_.$slides
												.slice(index - centerOffset, index + centerOffset + 1)
												.addClass('slick-active')
												.attr('aria-hidden', 'false');

								} else {

										indexOffset = _.options.slidesToShow + index;
										allSlides
												.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
												.addClass('slick-active')
												.attr('aria-hidden', 'false');

								}

								if (index === 0) {

										allSlides
												.eq(allSlides.length - 1 - _.options.slidesToShow)
												.addClass('slick-center');

								} else if (index === _.slideCount - 1) {

										allSlides
												.eq(_.options.slidesToShow)
												.addClass('slick-center');

								}

						}

						_.$slides
								.eq(index)
								.addClass('slick-center');

				} else {

						if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

								_.$slides
										.slice(index, index + _.options.slidesToShow)
										.addClass('slick-active')
										.attr('aria-hidden', 'false');

						} else if (allSlides.length <= _.options.slidesToShow) {

								allSlides
										.addClass('slick-active')
										.attr('aria-hidden', 'false');

						} else {

								remainder = _.slideCount % _.options.slidesToShow;
								indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

								if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

										allSlides
												.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
												.addClass('slick-active')
												.attr('aria-hidden', 'false');

								} else {

										allSlides
												.slice(indexOffset, indexOffset + _.options.slidesToShow)
												.addClass('slick-active')
												.attr('aria-hidden', 'false');

								}

						}

				}

				if (_.options.lazyLoad === 'ondemand') {
						_.lazyLoad();
				}

		};

		Slick.prototype.setupInfinite = function() {

				var _ = this,
						i, slideIndex, infiniteCount;

				if (_.options.fade === true) {
						_.options.centerMode = false;
				}

				if (_.options.infinite === true && _.options.fade === false) {

						slideIndex = null;

						if (_.slideCount > _.options.slidesToShow) {

								if (_.options.centerMode === true) {
										infiniteCount = _.options.slidesToShow + 1;
								} else {
										infiniteCount = _.options.slidesToShow;
								}

								for (i = _.slideCount; i > (_.slideCount -
												infiniteCount); i -= 1) {
										slideIndex = i - 1;
										$(_.$slides[slideIndex]).clone(true).attr('id', '')
												.attr('data-slick-index', slideIndex - _.slideCount)
												.prependTo(_.$slideTrack).addClass('slick-cloned');
								}
								for (i = 0; i < infiniteCount; i += 1) {
										slideIndex = i;
										$(_.$slides[slideIndex]).clone(true).attr('id', '')
												.attr('data-slick-index', slideIndex + _.slideCount)
												.appendTo(_.$slideTrack).addClass('slick-cloned');
								}
								_.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
										$(this).attr('id', '');
								});

						}

				}

		};

		Slick.prototype.setPaused = function(paused) {

				var _ = this;

				if (_.options.autoplay === true && _.options.pauseOnHover === true) {
						_.paused = paused;
						if (!paused) {
								_.autoPlay();
						} else {
								_.autoPlayClear();
						}
				}
		};

		Slick.prototype.selectHandler = function(event) {

				var _ = this;

				var targetElement =
						$(event.target).is('.slick-slide') ?
								$(event.target) :
								$(event.target).parents('.slick-slide');

				var index = parseInt(targetElement.attr('data-slick-index'));

				if (!index) index = 0;

				if (_.slideCount <= _.options.slidesToShow) {

						_.setSlideClasses(index);
						_.asNavFor(index);
						return;

				}

				_.slideHandler(index);

		};

		Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

				var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
						_ = this;

				sync = sync || false;

				if (_.animating === true && _.options.waitForAnimate === true) {
						return;
				}

				if (_.options.fade === true && _.currentSlide === index) {
						return;
				}

				if (_.slideCount <= _.options.slidesToShow) {
						return;
				}

				if (sync === false) {
						_.asNavFor(index);
				}

				targetSlide = index;
				targetLeft = _.getLeft(targetSlide);
				slideLeft = _.getLeft(_.currentSlide);

				_.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

				if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
						if (_.options.fade === false) {
								targetSlide = _.currentSlide;
								if (dontAnimate !== true) {
										_.animateSlide(slideLeft, function() {
												_.postSlide(targetSlide);
										});
								} else {
										_.postSlide(targetSlide);
								}
						}
						return;
				} else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
						if (_.options.fade === false) {
								targetSlide = _.currentSlide;
								if (dontAnimate !== true) {
										_.animateSlide(slideLeft, function() {
												_.postSlide(targetSlide);
										});
								} else {
										_.postSlide(targetSlide);
								}
						}
						return;
				}

				if (_.options.autoplay === true) {
						clearInterval(_.autoPlayTimer);
				}

				if (targetSlide < 0) {
						if (_.slideCount % _.options.slidesToScroll !== 0) {
								animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
						} else {
								animSlide = _.slideCount + targetSlide;
						}
				} else if (targetSlide >= _.slideCount) {
						if (_.slideCount % _.options.slidesToScroll !== 0) {
								animSlide = 0;
						} else {
								animSlide = targetSlide - _.slideCount;
						}
				} else {
						animSlide = targetSlide;
				}

				_.animating = true;

				_.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

				oldSlide = _.currentSlide;
				_.currentSlide = animSlide;

				_.setSlideClasses(_.currentSlide);

				_.updateDots();
				_.updateArrows();

				if (_.options.fade === true) {
						if (dontAnimate !== true) {

								_.fadeSlideOut(oldSlide);

								_.fadeSlide(animSlide, function() {
										_.postSlide(animSlide);
								});

						} else {
								_.postSlide(animSlide);
						}
						_.animateHeight();
						return;
				}

				if (dontAnimate !== true) {
						_.animateSlide(targetLeft, function() {
								_.postSlide(animSlide);
						});
				} else {
						_.postSlide(animSlide);
				}

		};

		Slick.prototype.startLoad = function() {

				var _ = this;

				if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

						_.$prevArrow.hide();
						_.$nextArrow.hide();

				}

				if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

						_.$dots.hide();

				}

				_.$slider.addClass('slick-loading');

		};

		Slick.prototype.swipeDirection = function() {

				var xDist, yDist, r, swipeAngle, _ = this;

				xDist = _.touchObject.startX - _.touchObject.curX;
				yDist = _.touchObject.startY - _.touchObject.curY;
				r = Math.atan2(yDist, xDist);

				swipeAngle = Math.round(r * 180 / Math.PI);
				if (swipeAngle < 0) {
						swipeAngle = 360 - Math.abs(swipeAngle);
				}

				if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
						return (_.options.rtl === false ? 'left' : 'right');
				}
				if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
						return (_.options.rtl === false ? 'left' : 'right');
				}
				if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
						return (_.options.rtl === false ? 'right' : 'left');
				}
				if (_.options.verticalSwiping === true) {
						if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
								return 'left';
						} else {
								return 'right';
						}
				}

				return 'vertical';

		};

		Slick.prototype.swipeEnd = function(event) {

				var _ = this,
						slideCount;

				_.dragging = false;

				_.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

				if (_.touchObject.curX === undefined) {
						return false;
				}

				if (_.touchObject.edgeHit === true) {
						_.$slider.trigger('edge', [_, _.swipeDirection()]);
				}

				if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

						switch (_.swipeDirection()) {
								case 'left':
										slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
										_.slideHandler(slideCount);
										_.currentDirection = 0;
										_.touchObject = {};
										_.$slider.trigger('swipe', [_, 'left']);
										break;

								case 'right':
										slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
										_.slideHandler(slideCount);
										_.currentDirection = 1;
										_.touchObject = {};
										_.$slider.trigger('swipe', [_, 'right']);
										break;
						}
				} else {
						if (_.touchObject.startX !== _.touchObject.curX) {
								_.slideHandler(_.currentSlide);
								_.touchObject = {};
						}
				}

		};

		Slick.prototype.swipeHandler = function(event) {

				var _ = this;

				if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
						return;
				} else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
						return;
				}

				_.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
						event.originalEvent.touches.length : 1;

				_.touchObject.minSwipe = _.listWidth / _.options
						.touchThreshold;

				if (_.options.verticalSwiping === true) {
						_.touchObject.minSwipe = _.listHeight / _.options
								.touchThreshold;
				}

				switch (event.data.action) {

						case 'start':
								_.swipeStart(event);
								break;

						case 'move':
								_.swipeMove(event);
								break;

						case 'end':
								_.swipeEnd(event);
								break;

				}

		};

		Slick.prototype.swipeMove = function(event) {

				var _ = this,
						edgeWasHit = false,
						curLeft, swipeDirection, swipeLength, positionOffset, touches;

				touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

				if (!_.dragging || touches && touches.length !== 1) {
						return false;
				}

				curLeft = _.getLeft(_.currentSlide);

				_.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
				_.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

				_.touchObject.swipeLength = Math.round(Math.sqrt(
						Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

				if (_.options.verticalSwiping === true) {
						_.touchObject.swipeLength = Math.round(Math.sqrt(
								Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
				}

				swipeDirection = _.swipeDirection();

				if (swipeDirection === 'vertical') {
						return;
				}

				if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
						event.preventDefault();
				}

				positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
				if (_.options.verticalSwiping === true) {
						positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
				}


				swipeLength = _.touchObject.swipeLength;

				_.touchObject.edgeHit = false;

				if (_.options.infinite === false) {
						if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
								swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
								_.touchObject.edgeHit = true;
						}
				}

				if (_.options.vertical === false) {
						_.swipeLeft = curLeft + swipeLength * positionOffset;
				} else {
						_.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
				}
				if (_.options.verticalSwiping === true) {
						_.swipeLeft = curLeft + swipeLength * positionOffset;
				}

				if (_.options.fade === true || _.options.touchMove === false) {
						return false;
				}

				if (_.animating === true) {
						_.swipeLeft = null;
						return false;
				}

				_.setCSS(_.swipeLeft);

		};

		Slick.prototype.swipeStart = function(event) {

				var _ = this,
						touches;

				if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
						_.touchObject = {};
						return false;
				}

				if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
						touches = event.originalEvent.touches[0];
				}

				_.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
				_.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

				_.dragging = true;

		};

		Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

				var _ = this;

				if (_.$slidesCache !== null) {

						_.unload();

						_.$slideTrack.children(this.options.slide).detach();

						_.$slidesCache.appendTo(_.$slideTrack);

						_.reinit();

				}

		};

		Slick.prototype.unload = function() {

				var _ = this;

				$('.slick-cloned', _.$slider).remove();

				if (_.$dots) {
						_.$dots.remove();
				}

				if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
						_.$prevArrow.remove();
				}

				if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
						_.$nextArrow.remove();
				}

				_.$slides
						.removeClass('slick-slide slick-active slick-visible slick-current')
						.attr('aria-hidden', 'true')
						.css('width', '');

		};

		Slick.prototype.unslick = function(fromBreakpoint) {

				var _ = this;
				_.$slider.trigger('unslick', [_, fromBreakpoint]);
				_.destroy();

		};

		Slick.prototype.updateArrows = function() {

				var _ = this,
						centerOffset;

				centerOffset = Math.floor(_.options.slidesToShow / 2);

				if ( _.options.arrows === true &&
						_.slideCount > _.options.slidesToShow &&
						!_.options.infinite ) {

						_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
						_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

						if (_.currentSlide === 0) {

								_.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
								_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

						} else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

								_.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
								_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

						} else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

								_.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
								_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

						}

				}

		};

		Slick.prototype.updateDots = function() {

				var _ = this;

				if (_.$dots !== null) {

						_.$dots
								.find('li')
								.removeClass('slick-active')
								.attr('aria-hidden', 'true');

						_.$dots
								.find('li')
								.eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
								.addClass('slick-active')
								.attr('aria-hidden', 'false');

				}

		};

		Slick.prototype.visibility = function() {

				var _ = this;

				if (document[_.hidden]) {
						_.paused = true;
						_.autoPlayClear();
				} else {
						if (_.options.autoplay === true) {
								_.paused = false;
								_.autoPlay();
						}
				}

		};
		Slick.prototype.initADA = function() {
				var _ = this;
				_.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
						'aria-hidden': 'true',
						'tabindex': '-1'
				}).find('a, input, button, select').attr({
						'tabindex': '-1'
				});

				_.$slideTrack.attr('role', 'listbox');

				_.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
						$(this).attr({
								'role': 'option',
								'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
						});
				});

				if (_.$dots !== null) {
						_.$dots.attr('role', 'tablist').find('li').each(function(i) {
								$(this).attr({
										'role': 'presentation',
										'aria-selected': 'false',
										'aria-controls': 'navigation' + _.instanceUid + i + '',
										'id': 'slick-slide' + _.instanceUid + i + ''
								});
						})
								.first().attr('aria-selected', 'true').end()
								.find('button').attr('role', 'button').end()
								.closest('div').attr('role', 'toolbar');
				}
				_.activateADA();

		};

		Slick.prototype.activateADA = function() {
				var _ = this;

				_.$slideTrack.find('.slick-active').attr({
						'aria-hidden': 'false'
				}).find('a, input, button, select').attr({
						'tabindex': '0'
				});

		};

		Slick.prototype.focusHandler = function() {
				var _ = this;
				_.$slider.on('focus.slick blur.slick', '*', function(event) {
						event.stopImmediatePropagation();
						var sf = $(this);
						setTimeout(function() {
								if (_.isPlay) {
										if (sf.is(':focus')) {
												_.autoPlayClear();
												_.paused = true;
										} else {
												_.paused = false;
												_.autoPlay();
										}
								}
						}, 0);
				});
		};

		$.fn.slick = function() {
				var _ = this,
						opt = arguments[0],
						args = Array.prototype.slice.call(arguments, 1),
						l = _.length,
						i,
						ret;
				for (i = 0; i < l; i++) {
						if (typeof opt == 'object' || typeof opt == 'undefined')
								_[i].slick = new Slick(_[i], opt);
						else
								ret = _[i].slick[opt].apply(_[i].slick, args);
						if (typeof ret != 'undefined') return ret;
				}
				return _;
		};

}));

/*!
 * jQuery Validation Plugin v1.14.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2015 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend($.fn, {
	// http://jqueryvalidation.org/validate/
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {
				if ( validator.settings.submitHandler ) {
					validator.submitButton = event.target;
				}

				// allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			});

			// validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {
					// prevent form submit to be able to see console output
					event.preventDefault();
				}
				function handle() {
					var hidden, result;
					if ( validator.settings.submitHandler ) {
						if ( validator.submitButton ) {
							// insert a hidden input as a replacement for the missing submit button
							hidden = $( "<input type='hidden'/>" )
								.attr( "name", validator.submitButton.name )
								.val( $( validator.submitButton ).val() )
								.appendTo( validator.currentForm );
						}
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( validator.submitButton ) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}

		return validator;
	},
	// http://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				errorList = errorList.concat( validator.errorList );
			});
			validator.errorList = errorList;
		}
		return valid;
	},

	// http://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			settings, staticRules, existingRules, data, param, filtered;

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );
				// remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
					if ( method === "required" ) {
						$( element ).removeAttr( "aria-required" );
					}
				});
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
			$( element ).attr( "aria-required", "true" );
		}

		// make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param });
		}

		return data;
	}
});

// Custom selectors
$.extend( $.expr[ ":" ], {
	// http://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !$.trim( "" + $( a ).val() );
	},
	// http://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		return !!$.trim( "" + $( a ).val() );
	},
	// http://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// http://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		});
	});
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {
			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element === this.lastElement ) {
				this.element( element );
			}
		},
		onclick: function( element ) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// http://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date ( ISO ).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				});
			});
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			});

			function delegate( event ) {
				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox']", delegate)
				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}

			// Add aria-required to any Static/Data/Class required fields before first validation
			// Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
			$( this.currentForm ).find( "[required], [data-rule-required], .required" ).attr( "aria-required", "true" );
		},

		// http://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend({}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// http://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				result = true;

			this.lastElement = checkElement;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				result = this.check( checkElement ) !== false;
				if ( result ) {
					delete this.invalid[ checkElement.name ];
				} else {
					this.invalid[ checkElement.name ] = true;
				}
			}
			// Add aria-invalid status for screen readers
			$( element ).attr( "aria-invalid", !result );

			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[ name ],
						element: this.findByName( name )[ 0 ]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				});
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// http://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.submitted = {};
			this.lastElement = null;
			this.prepareForm();
			this.hideErrors();
			var i, elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
				}
			} else {
				elements.removeClass( this.settings.errorClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {
				count++;
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [])
					.filter( ":visible" )
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			}).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				if ( !this.name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ this.name ] = true;
				return true;
			});
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var val,
				$element = $( element ),
				type = element.type;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter(":checked").val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? false : $element.val();
			}

			val = $element.val();
			if ( typeof val === "string" ) {
				return val.replace(/\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				}).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule;

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {

					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ]);
		},

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		defaultMessage: function( element, method ) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customDataMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[ method ],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}
			this.errorList.push({
				message: message,
				element: element,
				method: rule.method
			});

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map(function() {
				return this.element;
			});
		},

		showLabel: function( element, message ) {
			var place, group, errorID,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );
			if ( error.length ) {
				// refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );
				// replace message on existing label
				error.html( message );
			} else {
				// create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement( place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {
					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );
				} else if ( error.parents( "label[for='" + elementID + "']" ).length === 0 ) {
					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby

					errorID = error.attr( "id" ).replace( /(:|\.|\[|\]|\$)/g, "\\$1");
					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + errorID + "\\b" ) ) ) {
						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						$.each( this.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + name + "']", this.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						});
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.idOrName( element ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// aria-describedby should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + describer.replace( /\s+/g, ", #" );
			}
			return this
				.errors()
				.filter( selector );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + name + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[typeof param] ? this.dependTypes[typeof param]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
				this.formSubmitted = false;
			}
		},

		previousValue: function( element ) {
			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		},

		// cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ]);
				}
			});
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// maxlength may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {
		// handle dependency check
		$.each( rules, function( prop, val ) {
			// ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[ prop ];
				}
			}
		});

		// evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = $.isFunction( parameter ) ? parameter( element ) : parameter;
		});

		// clean number parameters
		$.each([ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		});
		$.each([ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( $.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ]), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace(/[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ]), Number( parts[ 1 ] ) ];
				}
			}
		});

		if ( $.validator.autoCreateRanges ) {
			// auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			});
			data = transformed;
		}
		return data;
	},

	// http://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	methods: {

		// http://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {
			// check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {
				// could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value.length > 0;
		},

		// http://jqueryvalidation.org/email-method/
		email: function( value, element ) {
			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// http://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// http://jqueryvalidation.org/date-method/
		date: function( value, element ) {
			return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
		},

		// http://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// http://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// http://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// http://jqueryvalidation.org/creditcard-method/
		// based on http://en.wikipedia.org/wiki/Luhn_algorithm
		creditcard: function( value, element ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}
			// accept only spaces, digits and dashes
			if ( /[^0-9 \-]+/.test( value ) ) {
				return false;
			}
			var nCheck = 0,
				nDigit = 0,
				bEven = false,
				n, cDigit;

			value = value.replace( /\D/g, "" );

			// Basing min and max length on
			// http://developer.ean.com/general_info/Valid_Credit_Card_Types
			if ( value.length < 13 || value.length > 19 ) {
				return false;
			}

			for ( n = value.length - 1; n >= 0; n--) {
				cDigit = value.charAt( n );
				nDigit = parseInt( cDigit, 10 );
				if ( bEven ) {
					if ( ( nDigit *= 2 ) > 9 ) {
						nDigit -= 9;
					}
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return ( nCheck % 10 ) === 0;
		},

		// http://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// http://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// http://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// http://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// http://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $( param );
			if ( this.settings.onfocusout ) {
				target.off( ".validate-equalTo" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				});
			}
			return value === target.val();
		},

		// http://jqueryvalidation.org/remote-method/
		remote: function( value, element, param ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			var previous = this.previousValue( element ),
				validator, data;

			if (!this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = this.settings.messages[ element.name ].remote;
			this.settings.messages[ element.name ].remote = previous.message;

			param = typeof param === "string" && { url: param } || param;

			if ( previous.old === value ) {
				return previous.valid;
			}

			previous.old = value;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ].remote = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.prepareElement( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						delete validator.invalid[ element.name ];
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, "remote" );
						errors[ element.name ] = previous.message = $.isFunction( message ) ? message( value ) : message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

});

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;
// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter(function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			pendingRequests[port] = xhr;
		}
	});
} else {
	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			pendingRequests[port] = ajax.apply(this, arguments);
			return pendingRequests[port];
		}
		return ajax.apply(this, arguments);
	};
}

}));

$(function() {

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


	// проверка на то, является ли браузер Internet Explorer
	Modernizr.addTest('isie', function(){
		var IE = /(MSIE |Trindent\/|Edge\/)/g.test( navigator.userAgent );
		return IE;
	});

	// placeholder polyfill — если не поддерживается, загружается и используется плагин
	if(!Modernizr.input.placeholder) {
		$.getScript( '/assets/scripts/jquery.placeholder.js' )
			.done(function( script, textStatus ) {
				$('input[placeholder], textarea[placeholder]').placeholder();
			})
			.fail(function( jqxhr, settings, exception ) {
				console.log('failed to load placeholder script');
		});

	}

	var svgPos = $('.js-change-svg-position');
	var imgSmall = $('.js-main-bg-image-small');

	// при смене размера экрана и загрузке происходит проверка на превышение ширины 720px:
	// если меньше — меняются атрибуты у фона на новые,
	// если больше — меняются атрибуты у фона на первоначальные
	$( window ).on('resize', function() {
		if ($( window ).width() < 720) {
			svgPos.attr('width','770').attr('height','440').attr('transform','translate(-350, -120)').attr('x','50%').attr('y','50%');
			$('.clipping-bg').attr('transform','translate(350, 120)').attr('x','50%').attr('y','50%');
		} else {
			svgPos.attr('width','1120').attr('height','640').attr('transform','translate(-560, -320)').attr('x','50%').attr('y','50%');
			imgSmall.attr('width','1120').attr('height','644').attr('transform','translate(-560, -322)').attr('x','50%').attr('y','50%');
			$('.clipping-bg').attr('transform','translate(560, 320)').attr('x','50%').attr('y','50%');
		}
	});


	// открытие/закрытие секции с социальными кнопками
	var socialSection = $('.js-toggle-social').closest('.js-social-section');

	$('.js-toggle-social').on('click', function(){
		// repaint on safari
		socialSection.hide().show(0);
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

	// карусель
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
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			}
		},{
			breakpoint: 720,
			settings: {
				centerPadding: '20px',
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
		asNavFor: '.js-cards-carousel'
	});

});
