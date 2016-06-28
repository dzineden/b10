jQuery(document).ready(function($) {

// Hamburger menu

	$('.hamburger').click(function(event) {
		$(this).toggleClass('close');
		$('.site-header nav').slideToggle();
	});

// carousel
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

