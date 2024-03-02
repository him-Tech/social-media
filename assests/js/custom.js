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

  $('.service-slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000
        }
      }
    ]
  });

  $('.jsDropdown .dropdown-item').click(function(){
    var eleText = $(this).text();
    $('.jsDropdown').find('.dropdown-toggle').text(eleText);
  });
  
});

$('[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
  $('.service-slider').slick('unslick');
  $('.service-slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000
        }
      }
    ]
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