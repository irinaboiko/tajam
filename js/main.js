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
    $('.slider-text-review').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-clients',
        draggable: false,
      });
      $('.slider-clients').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-text-review',
        dots: false,
        arrows: true,
        centerMode: true,
        centerPadding: '60px',
        focusOnSelect: true,
      });
});
