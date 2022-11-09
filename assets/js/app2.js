document.addEventListener("DOMContentLoaded", () => {
  let i = 1;
showSlides(i);

function plusSlides(n) {
  showSlides(i += n);
}

function currentSlide(n) {
  showSlides(i = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {i = 1}
  if (n < 1) {i = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[i-1].style.display = "block";
  dots[i-1].className += " active";
}
});