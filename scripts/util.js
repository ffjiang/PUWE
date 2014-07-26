/* Global helper functions. */

if (typeof Object.create !== 'function') {
	Object.create = function(o) {
		var F = function() {};
		F.prototype = o;
		return new F();
	};
}

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
})(window, document);