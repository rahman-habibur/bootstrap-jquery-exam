$(function($){
    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $(".scroll-to-top").fadeIn();
        }else{
            $(".scroll-to-top").fadeOut();
            
        }
    });
});

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    arrow: true,
    prevArrow: '<button type="button"  class="slide-arrow slick-prev"><i class="fa-solid fa-left"></i></button>',
    nextArrow: '<button type="button" class="slide-arrow slick-next"><i class="fa-solid fa-right"></i></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

