let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = 12;
  if (n > slides) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides;
  }
  const img = document.querySelector("img");
  img.src = `images/${slideIndex}.jpg`;
}
