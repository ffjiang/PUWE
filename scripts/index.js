ScrollView = function(panels) {
	this._$panels = panels;
};

ScrollView.Endpoints = {
	HOME: 'PUWE',
	CURRENT_SEASON: 'Current Season',
	MUSIC: 'Music',
	BIO: 'Biographies',
	JOIN: 'Join PUWE'
};

ScrollView.prototype.render = function() {
	var i;

	var navBarItems = ['PUWE', 'Current Season', 'Music', 'History', 'Biographies', 'Join PUWE'];
	this._$navBarItems = [];
	for (i = 0; i < navBarItems.length; i++) {
		var $el = util.create('<span class="nav-bar-item">' + navBarItems[i] + '</span>');
		$el.onclick = this.handleNavClick.bind(this);
		this._$navBarItems.push($el);
	}

	this._$content = document.getElementById('content');
	this._$homePanels = document.getElementsByClassName('home-page');
	this._$homeTallPanels = document.getElementsByClassName('tall');
	this._$homeVeryTallPanels = document.getElementsByClassName('very-tall');

	// Calculate the viewport height and set appropriate height for each slide
	var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
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

ScrollView.prototype.handleNavClick = function(e) {
	this.showPage(e.target);
};

ScrollView.prototype.showPage = function(endpoint) {
	switch (endpoint) {
		case ScrollView.Endpoints.HOME:
			this.
			break;
	}
};

Panel = function() {};

// Execute the website
(function() {
	// Set up all panels that will be on home page.
	var panels = {};

	var scrollView = new ScrollView(panels);
	scrollView.render();
})();

