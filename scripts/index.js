// Calculate the viewport height and set height for each slide
(function() {
	var viewportHeight = Math.max(document.documentElement.clientHeight,
					window.innerHeight || 0);

	var homeElems = document.getElementsByClassName('home-page');
	for (var i = 0; i < homeElems.length; i++) {
		homeElems[i].style.height = viewportHeight + 'px';
	}
	var tallElems = document.getElementsByClassName('tall');
	for (var i = 0; i < tallElems.length; i++) {
		tallElems[i].style.height = tallElems[i].style.height.slice(0, -2) * 2 + 'px';
	}
	var veryTallElems = document.getElementsByClassName('very-tall');
	for (var i = 0; i < veryTallElems.length; i++) {
		veryTallElems[i].style.height = veryTallElems[i].style.height.slice(0, -2) * 3 + 'px';
	}
}());

// Parallax Effect
(function($) {
	// Init Skrollr
	var s = skrollr.init({
		forceHeight: true, // Set to false to eliminate excess whitespace
		render: function(data) {
			// Debugging - Log the current scroll position.
			// console.log(data.curTop);
		}
	});
})(jQuery);
