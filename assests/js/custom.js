$(document).ready(function() {

  $(".jsScroll").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    if($(window).width > 991) {
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 77
      }, 300);
    } else {
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 60
      }, 300);
    }

    var scroll = $(window).scrollTop();
    if (scroll >= 60) {
      $('header').addClass("active");
    } else {
      $('header').removeClass("active");
    }

    $('.navbar-nav .jsScroll').removeClass('active');
    $(this).addClass('active');
    $('.navbar-collapse').removeClass('show')
 
 });

  $('.client-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 60) {
    $('header').addClass("active");
  } else {
    $('header').removeClass("active");
  }
});