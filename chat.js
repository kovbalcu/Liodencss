(function() {
	window.onload = function() {
		// Apply custom CSS to chat
		var iframe = document.querySelector('#fraSidebarChat iframe')
		var customStyles = document.querySelectorAll('#fraProfileContent link[rel="stylesheet"]');

		if (customStyles.length > 0) {
			customStyles.forEach(function(el) {
				var cssLink = document.createElement('link');
				cssLink.href = el.getAttribute('href');
				cssLink.rel = 'stylesheet';
				cssLink.type = 'text/css';

				iframe.contentWindow.document.body.appendChild(cssLink);
			});
		}
	}
}());
