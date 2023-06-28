let myButton = document.getElementById("myBtn");

window.addEventListener('scroll', () => {
  myButton.style.display = (window.scrollY > 20) ? "block" : "none";
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


function photo(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgText");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
  const background =document.getElementById(".backGround");
  background.forEach(background=>{
    background.addEventListener("click",()=>{
      background.forEach(p=> p.classList.display(expandImg));
      background.classList.add("backGround");
    });
  });
}