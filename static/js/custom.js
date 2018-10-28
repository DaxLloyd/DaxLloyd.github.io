var vh = window.innerHeight;

$(document).ready(function(){
  
  $(".fade-in").delay(500).fadeIn(2500);
  
  $(window).scroll(function () {
    var windowHeight = $(this).scrollTop();

    if (windowHeight >= vh ) { 
      $("#navbar").css("background", "#212121");
      $(".nav-title").addClass("nav-title-dark-bg");
      $(".nav-link").addClass("nav-link-dark-bg");
    } else if ($(this).scrollTop() < vh ) {
      $("#navbar").css("background", "none");
      $(".nav-title").removeClass("nav-title-dark-bg");
      $(".nav-link").removeClass("nav-link-dark-bg");
    }

  });        
});