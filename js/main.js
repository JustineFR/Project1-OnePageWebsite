 
$.stellar();

$('nav').onePageNav();

// Menu toggle
// when i click on the things we put in the quote, do what's inside the function / jQuery 
 $('#menu').click(function() {   
 	$('nav ul').slideToggle();
});

 // to fix the bug (nav / sreen size)

 const nav = $('nav ul');

$(window).resize(function(){
   const width = $(window).width();
   if(width > 768 && nav.is(':hidden')) {
       nav.removeAttr('style');
   }
});