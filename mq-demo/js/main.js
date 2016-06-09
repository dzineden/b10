jQuery(document).ready(function($) {
	$('.hamburger').click(function(event) {
		$(this).toggleClass('close');
		$('.site-header nav').slideToggle();
	});
});