const names = document.querySelector("input[type=text]");
const result = document.querySelector("h3");
const images = document.querySelector(".images");
const image = document.querySelector(".image");

let data;

function clickHandler() {
  //const regex = /^[\[|\{](?:([\s\S]*|\"[^\"]*\")*)[\]|\}]$/;
  //["1.jpg","2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg"]
  try {
    data = JSON.parse(names.value);
    result.textContent = "OK";
    result.style.color = "green";
    showImages();
  } catch (error) {
    result.textContent = "Невірний формат JSON";
    result.style.color = "red";
  }
}

function showImages() {
  images.innerHTML = "";
  data.forEach((element) => {
    const img = createImage(element);
    img.addEventListener("click", () => {
      const fullImg = createImage(element);
      image.innerHTML = "";
      image.appendChild(fullImg);
    });
    images.appendChild(img);
  });
}

function createImage(fileName) {
  const element = document.createElement("img");
  element.src = `images/${fileName}`;
  element.alt = fileName;
  return element;
}
