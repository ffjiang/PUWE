ScrollView = function(panels) {
	this._panels = panels;
	this._navBar = new NavBar('#home-top', NavBar.Endpoints.HOME);
};



ScrollView.prototype.render = function() {
	var i;

	this._navBar.render();
	this._$content = document.getElementById('content');
	this._$homePanels = document.getElementsByClassName('home-page');
	this._$homeTallPanels = document.getElementsByClassName('tall');
	this._$homeVeryTallPanels = document.getElementsByClassName('very-tall');

	// Calculate the viewport height and set appropriate height for each slide
	var viewportHeight = util.viewportHeight();
	for (i = 0; i < this._$homePanels.length; i++) {
		this._$homePanels[i].style.height = viewportHeight + 'px';
	}
	for (i = 0; i < this._$homeTallPanels.length; i++) {
		this._$homeTallPanels[i].style.height =
			this._$homeTallPanels[i].style.height.slice(0, -2) * 2 + 'px';
	}
	for (i = 0; i < this._$homeVeryTallPanels.length; i++) {
		this._$homeVeryTallPanels[i].style.height =
			this._$homeVeryTallPanels.style.height.slice(0, -2) * 3 + 'px';
	}


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
};

Panel = function() {};

// Execute the website
(function() {
	// Set up all panels that will be on home page.
	var panels = {};

	var scrollView = new ScrollView(panels);
	scrollView.render();

	$('a[href="#top"]').click(function() {
  		$('html, body').animate({ scrollTop: 0 }, 'slow');
  		return false;
	});
})();

