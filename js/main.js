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

/*video*/

let video = document.getElementById('video');
let progress = document.querySelector('.progress');
let buttonPlayMain = document.querySelector('.btn-play-main');
let btnPlayPause = document.getElementById('play-pause');
let mute = document.getElementById('mute');


buttonPlayMain.addEventListener('click', function () {
  if(video.paused) {
    video.play();
    buttonPlayMain.classList.add('button-main-hidden');
  }
});

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

video.addEventListener('timeupdate', function() {
  let progressPosition = video.currentTime / video.duration;
  progress.style.width = progressPosition * 100 + "%";
});

mute.addEventListener('click', function () {
  if (video.muted == false) {
      video.muted = true;
  } else {
      video.muted = false;
  }
});





/*
let video = document.querySelector('#video');
let buttonPlayMain = document.querySelector('#play-main');
let controls = document.querySelector('#controls');
let videoVolume = document.querySelector('#volume');
let pauseVideo = document.querySelector('#pause');
let stopVideo = document.querySelector('#stop');*/
/*
buttonPlayMain.addEventListener('click', function () {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  if (video.paused == false) {
    buttonPlayMain.classList.add('button-main-hidden');
    //controls.classList.toggle('show-controls');
  }
});

pauseVideo.addEventListener('click', function () {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

stopVideo.addEventListener('click', function () {
  video.pause();
  video.currentTime = 0;
});

videoVolume.addEventListener('click', function () {
  let v = this.value;
  console.log(v);
  video.volume = v / 100;
});



/*
let videoPlayer = function () {
  let video = document.querySelector('#video');
  let buttonPlayMain = document.querySelector('#play-main');
  let controls = document.querySelector('#controls');


  buttonPlayMain.addEventListener('click', function () {
    if (video.paused == true) {
      video.play();
      buttonPlayMain.classList.add('hide-btn');
      controls.classList.add('show-controls');

    }

  });
}*/


/*

document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;
document.querySelector('#stop').onclick = stop;
document.querySelector('#volume').oninput = videoVolume;

let video;
let display;
let progress;

video = document.querySelector('#video-player');
progress = document.querySelector('#progress');

video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;

function play(){
  video.play();
}
function pause(){
  video.pause();
}
function stop(){
  video.pause();
  video.currentTime = 0;
}
function videoVolume(){
  let v = this.value;
  console.log(v);
  video.volume = v / 100;
}
function progressUpdate(){
  console.log(video.duration);
  console.log(video.currentTime);
  let d = video.duration;
  let c = video.currentTime;
  progress.value = c / d * 100;
}
function videoRewind(){
  let w = this.offsetWidth;
  let o = event.offsetX;
  console.log(w);
  console.log(o);
  this.value = o / w * 100;
  video.pause();
  video.currentTime = video.duration * (o / w);
  video.play();
}*/

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
