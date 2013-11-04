$(document).ready(function() {

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

//general scroll
if ($('.js-scroll').length > 0) {
	$('.js-scroll').jScrollPane({
		showArrows: false,
		verticalDragMinHeight: 35,
		verticalDragMaxHeight: 35,
		autoReinitialise: true
	});
};

if ($(".bet__percent").length>0) {
	textFit($(".bet__percent")[0], {minFontSize:10, maxFontSize: 250,widthOnly: true})
};
//$(".bet__percent").textfill({ maxFontPixels: 206 });

//table
function table() {
	var table_row = $('.table-settled__row');
	var table_head = $('.table-settled__header');
	table_row.find('td').each(function() {
		var width = $(this).width();
		var attr = $(this).attr('class');
		table_head.find('.'+attr).width(width);
	});
}
table();

//window resize
$(window).bind('resize', function(){
	table();
});

});