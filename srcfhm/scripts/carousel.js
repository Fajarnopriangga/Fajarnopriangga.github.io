let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slider = document.getElementsByClassName("caraousel");
  let points = document.getElementsByClassName("point");
  if (n > slider.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slider.length;
  }
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
  for (i = 0; i < points.length; i++) {
    points[i].className = points[i].className.replace(" active", "");
  }
  slider[slideIndex - 1].style.display = "block";
  points[slideIndex - 1].className += " active";
}
