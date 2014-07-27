ScrollView = function(panels) {
	this._$panels = panels;
};

ScrollView.Endpoints = {
	HOME: 'PUWE',
	CURRENT_SEASON: 'Current Season',
	MUSIC: 'Music',
	HISTORY: 'History',
	BIO: 'Biographies',
	JOIN: 'Join PUWE'
};

// Replace this with the full HTML of the page
ScrollView.PageContent = {
	HOME: 'PUWE',
	CURRENT_SEASON: 'Current Season',
	MUSIC: 'Music',
	HISTORY: 'History',
	BIO: 'Biographies',
	JOIN: 'Join PUWE!'
};

ScrollView.prototype.render = function() {
	var i;

	// Set up the navigation bar.
	var navBarItems = [ScrollView.PageContent.HOME,
					   ScrollView.PageContent.CURRENT_SEASON,
					   ScrollView.PageContent.MUSIC,
					   ScrollView.PageContent.HISTORY,
					   ScrollView.PageContent.BIO,
					   ScrollView.PageContent.JOIN];
	this._$navBar = document.getElementById('nav-bar');
	for (i = 0; i < navBarItems.length; i++) {
		var $el = util.create('<div class="nav-bar-item"><span>' + 
			navBarItems[i] + '</span></div>');
		if (i === 0) {
			util.extendClass($el, 'left');
		} else if (i === navBarItems.length - 1) {
			util.extendClass($el, 'right');
		} else if (i > 1) {
			var $dash = util.create('<div class="nav-bar-item"><span>-</span></div>');
			this._$navBar.appendChild($dash);
		}
		$el.onclick = this.handleNavClick.bind(this);
		this._$navBar.appendChild($el);
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
	this.showPage(util.getText(e.target));
};

ScrollView.prototype.showPage = function(endpoint) {
	console.log(ScrollView.Endpoints);
	switch (endpoint) {
		case ScrollView.Endpoints.HOME:
			util.setHTML(this._$content, ScrollView.PageContent.HOME);
			break;
		case ScrollView.Endpoints.CURRENT_SEASON:
			util.setHTML(this._$content, ScrollView.PageContent.CURRENT_SEASON);
			break;
		case ScrollView.Endpoints.MUSIC:
			util.setHTML(this._$content, ScrollView.PageContent.MUSIC);
			break;
		case ScrollView.Endpoints.BIO:
			util.setHTML(this._$content, ScrollView.PageContent.BIO);
			break;
		case ScrollView.Endpoints.JOIN:
			util.setHTML(this._$content, ScrollView.PageContent.JOIN);
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

