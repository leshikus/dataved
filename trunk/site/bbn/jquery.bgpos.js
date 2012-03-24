/**
 * @author Alexander Farkas
 * @modified
 */


(function($) {
	if(!document.defaultView || !document.defaultView.getComputedStyle) { // IE6-IE8
		var oldCurCSS = jQuery.curCSS;
		jQuery.curCSS = function(elem, name, force) {
			if(name === 'background-position') {
				name = 'backgroundPosition';
			}
			if(name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[ name ]) {
				return oldCurCSS.apply(this, arguments);
			}
			var style = elem.style;
			if ( !force && style && style[ name ] ) {
				return style[ name ];
			}
			return oldCurCSS(elem, 'backgroundPositionX', force) +' '+ oldCurCSS(elem, 'backgroundPositionY', force);
		};
	}

	var oldAnim = $.fn.animate;
	$.fn.animate = function(prop) {
		if('background-position' in prop) {
			prop.backgroundPosition = prop['background-position'];
			delete prop['background-position'];
		}
		if('backgroundPosition' in prop) {
			prop.backgroundPosition = '('+ prop.backgroundPosition;
		}
		return oldAnim.apply(this, arguments);
	};

	function toArray(strg) {
		strg = strg.replace(/left|top/g,'0px');
		strg = strg.replace(/right|bottom/g,'100%');
		strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
		var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
		return [parseFloat(res[1],10),res[2]];
	}

	$.fx.step.backgroundPosition = function(fx) {
		console.log("fx.elem.textContent = " + fx.elem.textContent);
	    console.log("fx.elem.style.backgroundPosition = " + fx.elem.style.backgroundPosition);
		if (!fx.bgPosReady) {
			var start = $.curCSS(fx.elem, 'backgroundPosition');

			if(!start) {//FF2 no inline-style fallback
				start = '0px 0px';
			}

			start = toArray(start);
			fx.start = start[0];

			var end = toArray(fx.options.curAnim.backgroundPosition);
			fx.end = end[0];

			fx.unit = end[1];
			fx.bgPosReady = true;
		}

		var x = ((fx.end - fx.start) * fx.pos) + fx.start + fx.unit;
		fx.elem.style.backgroundPosition = x + ' 0px';
	    console.log("fx.elem.style.backgroundPosition becomes " + fx.elem.style.backgroundPosition);

	};
})(jQuery);