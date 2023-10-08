const figure = document.querySelector(".figure");
const width = document.querySelector(".width");
const height = document.querySelector(".height");
const rotate = document.querySelector(".rotate");

width.textContent = "0";
height.textContent = "0";
rotate.textContent = "0";

const changeFigure = () => {
    figure.style.width = width.textContent + "px";
    figure.style.height = height.textContent + "px";
    figure.style.transform = `rotate(${rotate.textContent}deg)`;
};

const updateValue = (element, event) => {
  element.textContent = event.target.value;
  changeFigure();
};

const widthChange = (event) => {
  updateValue(width, event);
};

const heightChange = (event) => {
  updateValue(height, event);
};

const rotateChange = (event) => {
  updateValue(rotate, event);
};
