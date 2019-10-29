$(document).ready(function(){
  $("#menu-desktop").on("click","a", function (event) {
      event.preventDefault();
      let id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});

$(document).ready(function(){
  $("#menu-mob").on("click","a", function (event) {
      event.preventDefault();
      let id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});

$(document).ready(function(){
    $('.slider-promo').slick({
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: false,
        pauseOnHover: true,
        pauseOnDotsHover: true,
    });
});

$(document).ready(function(){
  $('.slider-text-review').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
  //  asNavFor: '.slider-clients',
  });
});
$(document).ready(function(){
  $('.slider-clients').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    //centerPadding: '60px',
    asNavFor: '.slider-text-review',
  });
});
