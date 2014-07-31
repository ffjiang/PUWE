HistoryView = function() {
	this._navBar = new NavBar('#timelineContainer', NavBar.Endpoints.HISTORY);
};

HistoryView.prototype.render = function() {
	this._navBar.render();
	this._$timelineContainer = document.getElementById('timelineContainer');
	this._$timelineContainer.style.minHeight = util.viewportHeight() + 'px';
};

(function($) {
	var historyView = new HistoryView();
	historyView.render();

	// Animate the expanding and collapsing of the events
	// as the user scrolls.
	$(document).ready(function() {
		// Timeline effect
		// If startOpen array is changed, remember to update the code above
		// which sets their 'expanded' bool to true.
		$.timeliner({startOpen: ['#foundingEX', '#tragedyEX']});
/*
		var dt = document.getElementsByTagName('dt');
		var anchors = [];
		for (var i = 0; i < dt.length; i++) {
			var anchor = util.getByTag(dt[i], 'a');
			if (anchor) {
				anchors.push(anchor);
			}
		}
		setTimeout(function() {
			var i;
			for (i = 0; i < anchors.length; i++) {
				$(anchors[i]).waypoint({
					handler: (function(j) {
						return function(direction) {
							var expanded = $(anchors[j]).hasClass('open');
							if (direction === 'down' && !expanded) {
								// Expand
								anchors[j].click();
								console.log('expand');
							} else if (direction === 'up' && expanded) {
								// Collapse
								anchors[j].click();
								console.log('collapse');
							}
						}
					})(i),
					offset: function() {
						return $.waypoints('viewportHeight') - 50;
					}
				});
			}
		}, 1500); */
	});

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
	})($);
})(jQuery);
