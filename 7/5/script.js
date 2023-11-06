const btn = document.querySelector(".btn");
let isMouseDown = false;

btn.addEventListener("mousedown", (e) => {
  isMouseDown = true;
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

document.addEventListener("mousemove", (e) => {
  if (isMouseDown) {
    const slider = document.querySelector(".slider");
    const sliderRect = slider.getBoundingClientRect();
    const btnWidth = btn.offsetWidth;
    const maxX = sliderRect.width - btnWidth;

    let newX = e.clientX - sliderRect.left - btnWidth / 2;

    if (newX < 0) {
      newX = 0;
    } else if (newX > maxX) {
      newX = maxX;
    }

    btn.style.left = newX + "px";
  }
});
