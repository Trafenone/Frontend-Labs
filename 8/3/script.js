const container = document.querySelector(".slideshow-container");

for (let i = 1; i <= 12; i++) {
    let img = document.createElement('img');
    img.setAttribute('src', `images/${i}.jpg`);
    container.appendChild(img);
}

const images = document.querySelectorAll('img');

let currentImageIndex = 0;

function showNextImage() {
    images[currentImageIndex].style.opacity = 0;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = 1;
}

showNextImage();

setInterval(showNextImage, 2000);

