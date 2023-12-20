const closeScreenBtn = document.querySelector("#closeScreen");

document.querySelector("#addPhoto").addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      let img = new Image();
      img.src = data.message;
      img.style.width = "250px";
      img.style.height = "250px";
      document.querySelector("#container").appendChild(img);
    });
});

document.querySelector("#openScreen").addEventListener("click", () => {
  const container = document.querySelector("#container");
  container.requestFullscreen();
});

document.addEventListener("fullscreenchange", function () {
  if (document.fullscreenElement) {
    closeScreenBtn.style.display = "block";
  } else {
    closeScreenBtn.style.display = "none";
  }
});

closeScreenBtn.addEventListener("click", () => {
  document.exitFullscreen();
});