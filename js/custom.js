$(function(){
	$('.nav-link').click(function(e){
		e.preventDefault();
		// Get the navbar height.
		navHeight = $('.navbar').outerHeight();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - navHeight
		}, 1000);
	})
})