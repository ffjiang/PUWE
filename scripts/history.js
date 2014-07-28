HistoryView = function() {
	this._navBar = new NavBar('#timelineContainer');
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
		var i;

		document.body.scrollTop = 0;
		
		var dt = document.getElementsByTagName('dt');
		var anchors = [];
		for (i = 0; i < dt.length; i++) {
			var anchor = util.getByTag(dt[i], 'a');
			if (anchor) {
				anchors.push(anchor);
			}
		}
		
		var throttled = false;
		$(window).scroll(function() {
			if (!throttled) {
				throttled = true;
				for (var i = 0; i < anchors.length; i++) {
					var expanded = $(anchors[i]).hasClass('open');
					if (util.isOnScreen(anchors[i], -0.05) && !expanded) {
						anchors[i].click();
					}
				}
				throttled = false;
			}
		});
	});

	// Timeline effect
	// If startOpen array is changed, remember to update the code above
	// which sets their 'expanded' bool to true.
	$.timeliner({startOpen: ['#foundingEX', '#tragedyEX']});

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
