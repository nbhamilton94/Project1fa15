var main = function() {

	//carosel //commmit
	var intv;
	var current = 0;  // STARTING SLIDE(<li>element button) INDEX
	var slN = $('div.slider slide').length; // get number of slides(buttons.. all the same)

  $('.arrow-next').click(function(event) {
	event.preventDefault();
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });


  $('.arrow-prev').click(function(event) {
	event.preventDefault();
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });
   function auto(){
   intv = setInterval(function() {
		$('.slider-nav').find('.arrow-next').click();
   }, 5000 );       
   
	}
	auto();
   
   $('.slider').on('mouseenter mouseleave', function( e ){
   var onMouEnt = e.type=='mouseenter' ? clearInterval(intv) : auto() ;
}); // to start immediately auto-slide
	// end carosel
   // This is a functions that scrolls to #{blah}link
function goToByScroll(id){
      // Remove "link" from the ID
		next = id;
		
        id = id.replace("link", "");
          // Scroll
		
		if(id === "home")
		{
			$('html,body').animate({
            scrollTop: 0},
            'slow');
			$("li.active").removeClass('active');
			
			$("a#"+next).closest("li").addClass('active');
		}
		else if (id === "about")
		{
			$('html,body').animate({
				scrollTop: $("#"+id).offset().top-2*($("#x").height())},
				'slow');
			$("li.active").removeClass('active');
			
			$("a#"+next).closest("li").addClass('active');			
		}
		else
		{
			$('html,body').animate({
				scrollTop: $("#"+id).offset().top-$("#x").height()},
				'slow');
			$("li.active").removeClass('active');
			
			$("a#"+next).closest("li").addClass('active');
		}
}

$("nav > div > ul > li > a").click(function(e) { 
      // Prevent a page reload when a link is pressed
    e.preventDefault(); 
      // Call the scroll function
	if (this.id !== "contactus-button"){
    goToByScroll(this.id);}
});

	//Locking the navigation bar into place
	var lock = $('#about').offset().top-200; //get the location of the div with the id #about
	var stickynav = function(){
		var currentposition = $(window).scrollTop();
		
		if (lock <= currentposition)
		{
			$("#G").addClass("navbar-fixed-top");
		}
		else
		{
			if (lock > currentposition)
			{
				$("#G").removeClass("navbar-fixed-top");
			}
		}
	}
	stickynav();
	
	$(window).scroll(function(){
		stickynav();
	});
}




$(document).ready(main);