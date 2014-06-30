// Calculate the viewport height and set height for each slide
(function() {
	var viewportHeight = Math.max(document.documentElement.clientHeight,
					window.innerHeight || 0);

	var homeElems = document.getElementsByClassName('home-page');
	for (var i = 0; i < homeElems.length; i++) {
		homeElems[i].style.height = viewportHeight + 'px';
	}
	var homeTallElems = document.getElementsByClassName('home-page-tall');
	for (var i = 0; i < homeTallElems.length; i++) {
		homeTallElems[i].style.height = viewportHeight*2 + 'px';
	}
}());

// Parallax Effect
(function($) {
	// Init Skrollr
	var s = skrollr.init({
		forceHeight: true,
		render: function(data) {
			// Debugging - Log the current scroll position.
			// console.log(data.curTop);
		}
	});
})(jQuery);
