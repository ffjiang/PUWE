NavBar = function(anchor) {
	var i;

	var navStr = '<section id="nav-bar"' +
		' data--60-top="position: absolute; top: 0; background-color: rgba(246,127,37,0);"' +
		' data-center-bottom="top: -48px; position: fixed; background-color: rgba(246,127,37,1);"' +
		' data-35p-top-bottom="top: 0;"' +
		' data-anchor-target="' + anchor + '"></section>';

	this._$navBar = util.create(navStr);

	// Set up the navigation bar.
	var navBarItems = ['HOME',
					   'CURRENT_SEASON',
					   'MUSIC',
					   'HISTORY',
					   'BIO',
					   'JOIN'];
	for (i = 0; i < navBarItems.length; i++) {
		var $el = util.create('<div class="nav-bar-item"><a href="' + 
			NavBar.Endpoints[navBarItems[i]] + '">' + 
			NavBar.EndpointNames[navBarItems[i]] + '</a></div>');
		if (i === 0) {
			util.extendClass($el, 'left');
		} else if (i === navBarItems.length - 1) {
			util.extendClass($el, 'right');
		} else if (i > 1) {
			var $dash = util.create('<div class="nav-bar-item"><span>-</span></div>');
			this._$navBar.appendChild($dash);
		}
		this._$navBar.appendChild($el);
	}

	return this;
};

NavBar.Endpoints = {
	HOME: 'index.html',
	CURRENT_SEASON: 'current.html',
	MUSIC: 'music.html',
	HISTORY: 'history.html',
	BIO: 'bio.html',
	JOIN: 'join.html'
};

// Replace this with the full HTML of the page
NavBar.EndpointNames = {
	HOME: 'PUWE',
	CURRENT_SEASON: 'Current Season',
	MUSIC: 'Music',
	HISTORY: 'History',
	BIO: 'Biographies',
	JOIN: 'Join PUWE!'
};

NavBar.prototype.render = function() {
	if (document.body.firstChild && !document.getElementById('nav-bar')) {
		document.body.insertBefore(this._$navBar, document.body.firstChild);
	}
};