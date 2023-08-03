let myButton = document.getElementById('myBtn');

window.addEventListener('scroll', () => {
  myButton.style.display = window.scrollY > 20 ? 'block' : 'none';
});

function topFunction() {
  scrollToTop(500);
}

function scrollToTop(duration) {
  const startingY = window.scrollY;
  const diff = -startingY;
  let start;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);
    window.scrollTo(0, startingY + diff * percent);
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('slides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 3500);
}

function mobileTab() {
  var x = document.getElementById('myMenu');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

var TEXTS = ['FRONT-END', 'DEVELOPER', 'TALENT'];

var index = 0;

$(function () {
  setInterval(function () {
    $('#header-txt-change').fadeOut(500, function () {
      $(this).text(TEXTS[index++]).fadeIn(500);
      if (index === TEXTS.length) index = 0;
    });
  }, 3500);
});
