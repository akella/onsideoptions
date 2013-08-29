$(document).ready(function() {


		pane = $('.pairs__scroll');
		pane.jScrollPane({
		  	autoReinitialise: true,
		  	hideFocus: true,
		  	animateTo: true
		});
		var api = pane.data('jsp');

	
});