/*loader*/


$(window).on('loader-inner', function () {
  $preloader = $('.loader'),
    $loader = $preloader.find('.loader-inner');
  $loader.fadeOut();
  $preloader.delay(350).fadeOut('slow');
});


/*scroll menu*/

$("#menu-desktop").on("click","a", function (event) {
  event.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top - 75 + 'px';
    $('body,html').animate({scrollTop: top}, 900);
});

$("#menu-mob").on("click", "a", function (event) {
  event.preventDefault();
  let id  = $(this).attr('href'),
      top = $(id).offset().top - 75 + 'px';
  $('body,html').animate({scrollTop: top}, 900);
});

$("#home").on("click", "a", function (event) {
  event.preventDefault();
  let id  = $(this).attr('href'),
      top = $(id).offset().top - 75 + 'px';
  $('body,html').animate({scrollTop: top}, 900);
});

/*mobile menu*/

let menuBtn = document.querySelector('.menu-btn');
let menuLines = document.querySelector('.menu-btn-lines');
let menuMobBox = document.querySelector('.menu-box');
let menuItem = document.querySelectorAll('.menu-item');

if(menuBtn) {
  menuBtn.addEventListener('click', function() {
    menuLines.classList.toggle("menu-btn-active");
    menuMobBox.classList.toggle("menu-show");
  });
}

menuItem.forEach(function(btn) {
  btn.addEventListener('click', function() {
    menuLines.classList.remove("menu-btn-active");
    menuMobBox.classList.remove("menu-show");
  });
});

/*fix header*/

let header = document.querySelector('.header');

if(header) {
  window.onscroll = function(){
    if(document.documentElement.scrollTop > 590){
      header.classList.add("header-fixed");
    }
    else{
      header.classList.remove("header-fixed");
    }
  }
}

/*slider promo*/

$(document).ready(function(){
    $('.slider-promo').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: false,
        pauseOnHover: true,
        pauseOnDotsHover: true,
    });
});

/*video*/

let video = document.getElementById('video');
let buttonPlayMain = document.querySelector('.btn-play-main');
let btnPlayPause = document.getElementById('play-pause');
let stopBtn = document.getElementById('stop');
let muteBtn = document.getElementById('mute');
let progress = document.getElementById('progress');

if (video) {
  video.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        buttonPlayMain.classList.add('button-main-hidden');
        btnPlayPause.classList.add('pause');
    } else {
        video.pause();
        buttonPlayMain.classList.remove('button-main-hidden');
        btnPlayPause.classList.remove('pause');
    }
  });
}

if(buttonPlayMain) {
  buttonPlayMain.addEventListener('click', function () {
    if(video.paused) {
      video.play();
      buttonPlayMain.classList.add('button-main-hidden');
      btnPlayPause.classList.add('pause');
    }
  });
}

if(btnPlayPause) {
  btnPlayPause.addEventListener('click', function() {
    if(video.paused) {
      btnPlayPause.classList.remove('play');
      btnPlayPause.classList.add('pause');
      buttonPlayMain.classList.add('button-main-hidden');
      video.play();
    } else {
      btnPlayPause.classList.remove('pause');
      btnPlayPause.classList.add('play');
      buttonPlayMain.classList.remove('button-main-hidden');
      video.pause();
    }
  });
}

if(stopBtn) {
  stopBtn.addEventListener('click', function() {
    video.pause();
    video.currentTime = 0;
    buttonPlayMain.classList.remove('button-main-hidden');
    btnPlayPause.classList.remove('pause');
  });
}

if(muteBtn) {
  muteBtn.addEventListener('click', function () {
    if (video.muted == false) {
        muteBtn.classList.remove('mute-on');
        muteBtn.classList.add('mute-off');
        video.muted = true;
    } else {
      muteBtn.classList.remove('mute-off');
      muteBtn.classList.add('mute-on');
      video.muted = false;
    }
  });
}

if(video) {
  video.ontimeupdate = progressUpdate;
}

if(progress) {
  progress.onclick = videoRewind;
}

function progressUpdate() {
  console.log(video.duration);
  console.log(video.currentTime);
  let d = video.duration;
  let c = video.currentTime;
  progress.value = c / d * 100;
}

function videoRewind() {
  let w = this.offsetWidth;
  let o = event.offsetX;
  console.log(w);
  console.log(o);
  this.value = o / w * 100;
  video.pause();
  video.currentTime = video.duration * (o / w);
  video.play();
}

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
