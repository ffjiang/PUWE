NavBar = function(anchor, endpoint) {
	var i;
	this._endpoint = endpoint;

	var navStr = '<section id="nav-bar"' +
		' data--60-top="position: absolute; top: 0; height: 60px;"' +
		' data-center-bottom="top: -48px; height: 45px; position: fixed;"' +
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
		} else if (i === navBarItems.length - 2) {
			util.extendClass($el, 'last');
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
	CURRENT_SEASON: 'CURRENT SEASON',
	MUSIC: 'MUSIC',
	HISTORY: 'HISTORY',
	BIO: 'BIOGRAPHIES',
	JOIN: 'JOIN PUWE!'
};

NavBar.prototype.render = function() {
	if (document.body.firstChild && !document.getElementById('nav-bar')) {
		document.body.insertBefore(this._$navBar, document.body.firstChild);
	}

	childNodes = this._$navBar.childNodes;
	for (var i = 0; i < childNodes.length; i++) {
		switch (util.getText(childNodes[i])) {
			case NavBar.EndpointNames.HOME:
				this._$homeTab = childNodes[i];
				break;
			case NavBar.EndpointNames.CURRENT_SEASON:
				this._$currentTab = childNodes[i];
				break;
			case NavBar.EndpointNames.MUSIC:
				this._$musicTab = childNodes[i];
				break;
			case NavBar.EndpointNames.HISTORY:
				this._$historyTab = childNodes[i];
				break;
			case NavBar.EndpointNames.BIO:
				this._$bioTab = childNodes[i];
				break;
			case NavBar.EndpointNames.JOIN:
				this._$joinTab = childNodes[i];
				break;
		}
	}

	this.setCurrentTab();
};

NavBar.prototype.setCurrentTab = function() {
	switch (this._endpoint) {
		case NavBar.Endpoints.HOME:
			this._$currentTab = this._$homeTab;
			break;
		case NavBar.Endpoints.CURRENT_SEASON:
			this._$currentTab = this._$currentTab;
			break;
		case NavBar.Endpoints.MUSIC:
			this._$currentTab = this._$musicTab;
			break;
		case NavBar.Endpoints.HISTORY:
			this._$currentTab = this._$historyTab;
			break;
		case NavBar.Endpoints.BIO:
			this._$currentTab = this._$bioTab;
			break;
		case NavBar.Endpoints.JOIN:
			this._$currentTab = this._$joinTab;
			break;
	}
	util.extendClass(this._$currentTab, 'active');
};
