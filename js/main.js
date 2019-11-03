/*scroll menu*/

$("#menu-desktop").on("click","a", function (event) {
  event.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

$("#menu-mob").on("click","a", function (event) {
  event.preventDefault();
  let id  = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});

/*slider promo*/

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

/*slider team*/

$('.team-slider').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
      }
    },
  ]
});

/*slider review*/

$('.slider-text-review').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
});
$('.slider-clients').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '59px',
    asNavFor: '.slider-text-review',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: '65px',
        }
      }
    ]
});
