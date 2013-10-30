$(document).ready(function() {


// var clock = $('.bet__timer').FlipClock({
// // ... your options here
// });


// var clock = new FlipClock($('.bet__timer'), {
//  ... your options here
// });


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

if ($('.bet__percent').length > 0) {
	textFit($(".bet__percent")[0], {minFontSize:10, maxFontSize: 250,widthOnly: true})
};

//$(".bet__percent").textfill({ maxFontPixels: 206 });


//table
function table() {
	var table_row = $('.table__row');
	var table_head = $('.table__header');
	table_row.find('td').each(function() {
		var width = $(this).width();
		var attr = $(this).attr('data-col');
		table_head.find('.'+attr).width(width);
	});
}
table();

//window resize
$(window).bind('resize', function(){
	table();
});

});