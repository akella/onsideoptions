$(document).ready(function() {


// var clock = $('.bet__timer').FlipClock({
// // ... your options here
// });


var clock = new FlipClock($('.bet__timer'), {
// ... your options here
});


//scroll
if ($('.scroll').length > 0) {
	$('.scroll').jScrollPane({
		showArrows: true,
		verticalArrowPositions: 'split',
		horizontalArrowPositions: 'split',
		verticalDragMinHeight: 35,
		verticalDragMaxHeight: 35,
		autoReinitialise: true,
		contentWidth: "300px"
	});
};

textFit($(".bet__percent")[0], {minFontSize:10, maxFontSize: 250,widthOnly: true})
//$(".bet__percent").textfill({ maxFontPixels: 206 });

});