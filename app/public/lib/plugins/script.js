// Function to find the return the luminance value.
// Useful to compare if a color can will have enough contrast.
function rgb2luma(rgb) {
	rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
	return Math.sqrt(
		rgb[1] * rgb[1] * .299 +
		rgb[2] * rgb[2] * .587 +
		rgb[3] * rgb[3] * .114
	);
}

var commonfullpage = {};

commonfullpage.build = function() {
  $('#fullpage').fullpage({
    // autoScrolling: false,
    css3: true,
    verticalCentered: false,
    navigation: true,
    navigationPosition: 'right',

    onLeave: function(anchorLink, index, slideAnchor, slideIndex){
      var luma = rgb2luma( $('.section.active').css( "background-color" ) ) ;
      if (luma < 160){
        $('#fp-nav').addClass( "-light")
      }else{
        $('#fp-nav').removeClass( "-light")
      }
    },
  });

  // deactivate the autScrolling behaviour when interacting with a form, reactivate onBlur
  $('input, textarea, select').on('focus', function(){
    $.fn.fullpage.setAllowScrolling(false);
  }).on('blur', function(){
    $.fn.fullpage.setAllowScrolling(true);
  });

  $('.js-moveSectionDown').click(function(){
    $.fn.fullpage.moveSectionDown();
  });
  
}

commonfullpage.rebuild = function(scrollToPage) {
  $.fn.fullpage.destroy('all');
  commonfullpage.build();
  
  if (typeof scrollToPage === 'number') {
    $.fn.fullpage.moveTo(scrollToPage);
  }
}

$(document).ready(function() {
  commonfullpage.build();
  $("#fullpage").fadeIn(200, function() {
    //if scrolltopage session value set, scroll to it and clear it.
    var scrollToPage = Session.get('commonfullpage.ScrollToPage');
    if (typeof scrollToPage === 'number') {
      delete Session.keys['commonfullpage.ScrollToPage'];
      $.fn.fullpage.moveTo(scrollToPage);
    }
  });
});

$(window).resize(function() {


});


$(window).load(function() {


});
