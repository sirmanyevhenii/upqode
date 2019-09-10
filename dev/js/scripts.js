"use strict";


// toggle menu button

$(".hamburger").click(function(e) {
	$(".header-nav").toggleClass('open');
});




// slider

$('.banner-slider').slick({
	dots: true
});

$('.products-slider').slick({
	arrow: false,
	dots: true
});



// scroll page to section

// $(function() {
// 	$('.smooth').on('click', function(event) {
// 		let target = $(this.getAttribute('href'));
// 		if (target.length) {
// 			event.preventDefault();
// 			$('html, body').stop().animate({
// 				scrollTop: target.offset().top
// 			}, 750);
// 		}
// 	});
// });