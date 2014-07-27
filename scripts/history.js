HistoryView = function() {
	this._navBar = new NavBar('#timelineContainer');
};

HistoryView.prototype.render = function() {
	this._navBar.render();
	this._$timelineContainer = document.getElementById('timelineContainer');
	this._$timelineContainer.style.minHeight = util.viewportHeight() + 'px';
};

(function() {
	var historyView = new HistoryView();
	historyView.render();

	// Timeline effect
	$.timeliner({startState: 'open'});

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
})();
