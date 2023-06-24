let myButton = document.getElementById("myBtn");

window.addEventListener('scroll', () => {
  myButton.style.display = (window.scrollY > 20) ? "block" : "none";
});

function topFunction() {
  scrollToTop(500); // Define a duração da animação em milissegundos
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