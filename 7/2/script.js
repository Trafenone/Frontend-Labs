document.documentElement.addEventListener("keydown", onKeyDown);

let activeCircle = null;
let zIndex = 1;

start();

function start() {
  for (let i = 0; i < 20; i++) {
    let circle = createCircle();
    document.body.appendChild(circle);
    if (i === 0) {
      setActiveBlock(circle);
    }
  }
}

function createCircle() {
  let circle = document.createElement("div");
  circle.classList.add("circle");
  let x = Math.round(Math.random() * 500);
  let y = Math.round(Math.random() * 300);
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  let size = Math.floor(Math.random() * (31 - 10) + 10);
  circle.style.width = size + "px";
  circle.style.height = size + "px";
  circle.style.left = x + "px";
  circle.style.top = y + "px";
  circle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  return circle;
}

function setActiveBlock(newActiveCircle) {
  if (activeCircle !== null && activeCircle.classList.contains("active"))
    activeCircle.classList.remove("active");
  activeCircle = newActiveCircle;
  activeCircle.classList.add("active");
  activeCircle.style.zIndex = zIndex++;
}

function nextBlock() {
  if (activeCircle !== null) {
    let nextTag = activeCircle.nextElementSibling;
    if (nextTag === null || !nextTag.classList.contains("circle"))
      return;
    setActiveBlock(nextTag);
  }
}

function previousBlock() {
  if (activeCircle !== null) {
    let prevTag = activeCircle.previousElementSibling;
    if (prevTag === null || !prevTag.classList.contains("circle"))
      return;
    setActiveBlock(prevTag);
  }
}

function onKeyDown(event) {
  let step = 10;
  switch (event.code) {
    case "ArrowUp":
      moveBlock(activeCircle, 0, -step);
      break;
    case "ArrowDown":
      moveBlock(activeCircle, 0, step);
      break;
    case "ArrowLeft":
      moveBlock(activeCircle, -step, 0);
      break;
    case "ArrowRight":
      moveBlock(activeCircle, step, 0);
      break;
    case "Tab":
      event.preventDefault();
      if (event.shiftKey) previousBlock();
      else nextBlock();
      break;
  }
}

function moveBlock(tag, dx, dy) {
  let style = getComputedStyle(tag);
  let blockCoord = {
    x: parseInt(style.left) + dx,
    y: parseInt(style.top) + dy,
  };
  tag.style.left = blockCoord.x + "px";
  tag.style.top = blockCoord.y + "px";
}
