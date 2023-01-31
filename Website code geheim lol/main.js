$(document).ready(function(){
	$('.header').height($(window).height());
})

// Met dit stukje code zorg ik ervoor dat wanneer er een sprong gebeurd in mijn webpagina dat deze 
// niet plots verspringt maar vlotjes linear scrollt
$(document).ready(function() {
    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500, 'linear');
    });
  });