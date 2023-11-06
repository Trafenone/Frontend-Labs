function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const button = document.querySelector(".btn");
button.addEventListener("mouseenter", () => {
  const container = document.querySelector(".container");
  const containerRect = container.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();

  const maxX = containerRect.width - buttonRect.width;
  const maxY = containerRect.height - buttonRect.height;
  const minX = Math.ceil(buttonRect.width / 2);
  const minY = Math.ceil(buttonRect.height / 2);

  button.style.left = random(minX, maxX) + "px";
  button.style.top = random(minY, maxY) + "px";
});
