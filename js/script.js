"use strict";

(function() {
	document.getElementById('toggle-btn').addEventListener('click', function(event) {
		document.getElementById('my-nav').classList.add('transition');
		document.getElementById('my-nav').classList.toggle('expand');
	});

	window.addEventListener("resize", function(event) {
		document.getElementById('my-nav').classList.remove('transition');
	});
})();