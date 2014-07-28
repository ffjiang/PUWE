/* Global helper functions. */

Function.prototype.method = function(name, func) {
	if (!this.prototype[name]) {
		Function.prototype[name] = func;
	}
};

Number.method('integer', function() {
	return Math[this < 0 ? 'ceiling': 'floor'](this);
});

/* General utility functions. */

(function(window, document) {
	var util = window.util = {};

	util.isArray = function(value) {
		return value &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			typeof value.splice === 'function' &&
			!(value.propertyIsEnumerable('length'));
	};

	var $div = document.createElement('div');
	util.create = function(htmlString) {
		$div.innerHTML = htmlString;
		return $div.firstChild;
	};

	util.getByClass = function($el, className) {
		if (className === undefined) {
			className = $el;
			$el = document;
		}
		return $el.getElementsByClassName(className)[0];
	};

	util.getByTag = function($el, tagName) {
		if (tagName === undefined) {
			tagName = $el;
			$el = document;
		}
    	return $el.getElementsByTagName(tagName)[0];
  	};

  	util.extendClass = function($el, className) {
  		if (className) {
  			$el.className += ' ' + className;
  		}
  	};

  	util.getText = function($el) {
  		return $el.textContent || $el.innerText || '';
  	};

  	util.setText = function($el, text) {
    	if (typeof $el.textContent !== 'undefined') {
      		$el.textContent = text;
    	} else {
      		$el.innerText = text;
    	}
  	};

  	util.setHTML = function($el, html) {
  		$el.innerHTML = html;
  	};

  	util.findAbsPos = function(obj) {
    	var left = 0;
    	var top = 0;
    	while (obj.offsetParent) {
      		left += obj.offsetLeft;
      		top += obj.offsetTop;
      		obj = obj.offsetParent;
    	}
    	return {left: left, top: top};
  	};

    // Returns viewport height as a number.
    util.viewportHeight = function() {
      return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    };

    /*
     * @param {Element} $el
     * @param {!Number} wiggleRoom Percentage of window height (in coefficient form) 
     * added on when checking if an element is on screen.
     * @return {Boolean}
     */
    util.isOnScreen = function($el, wiggleRoom) {
        var rect = $el.getBoundingClientRect();
        var height = window.innerHeight || document.documentElement.clientHeight;
        var wiggle = wiggleRoom * height || 0;
        return rect.bottom >= -wiggle && rect.top <= height + wiggle;
    };

    // Fix this janky comment
    /*
     * Same as inOnScreen but only checks the top.
     * Meant to be used in cases where an element's top position is already
     * known and they will only be hidden before the page scrolls down
     * past them.
     *
     * @param {Number} top
     * @return {Boolean}
     */
    util.isAboveScreen = function($el, wriggleRoom) {
        var rect = $el.getBoundingClientRect();
        var height = window.innerHeight || document.documentElement.clientHeight;
        var wriggle = wriggleRoom * height || 0;
        return rect.bottom < -wriggle;
    };

    util.isBelowScreen = function($el, wriggleRoom) {
        var rect = $el.getBoundingClientRect();
        var height = window.innerHeight || document.documentElement.clientHeight;
        var wriggle = wriggleRoom * height || 0;
        return rect.top > height + wriggle;
    };
})(window, document);