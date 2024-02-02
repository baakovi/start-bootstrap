$(document).ready(function(){
  $(window).bind('scroll', function(){
    if($(window).scrollTop() >= 100){
      $('.navbar').addClass('bg-dark');
    } else {
      $('.navbar').removeClass('bg-dark');
    }
  });
});