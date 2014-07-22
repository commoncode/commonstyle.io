// Function to find the return the luminance value.
// Useful to compare if a color can will have enough contrast.
function rgb2luma(rgb) {
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	return Math.sqrt(
		rgb[1] * rgb[1] * .299 +
		rgb[2] * rgb[2] * .587 +
		rgb[3] * rgb[3] * .114
	);
}


$(document).ready(function() {

	$('#fullpage').fullpage({
		css3: true,
		verticalCentered: false,
		navigation: true,
		navigationPosition: 'right',

		onLeave: function(anchorLink, index, slideAnchor, slideIndex){
			var luma = rgb2luma( $('.section.active').css( "background-color" ) ) ;
			if (luma < 160){
				$('#fullPage-nav').addClass( "-light")
			}else{
				$('#fullPage-nav').removeClass( "-light")
			}
		},
	});

	$('.js-moveSectionDown').click(function(){
		$.fn.fullpage.moveSectionDown();
	})
});


$(window).resize(function() {


});


$(window).load(function() {


});