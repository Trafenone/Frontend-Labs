const container = document.querySelector(".container");

function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");
  
  square.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  let width = random(50, 150);
  let height = random(50, 150);

  square.style.width = `${width}px`;
  square.style.height = `${height}px`;

  const randomX = Math.floor(Math.random() * (container.clientWidth - width));
  const randomY = Math.floor(Math.random() * (container.clientHeight - height));

  square.style.left = randomX + "px";
  square.style.top = randomY + "px";

  let isDragging = false;
  let offset;

  square.addEventListener("mousedown", function (e) {
    isDragging = true;
    const coord = square.getBoundingClientRect();
    offset = {
      x: e.clientX - coord.left,
      y: e.clientY - coord.top,
    };
    document.addEventListener("mousemove", dragSquare);
    document.addEventListener("mouseup", stopDragging);
  });

  function dragSquare(e) {
    if (isDragging) {
      const x = e.clientX - offset.x;
      const y = e.clientY - offset.y;

      let newX = x < 0 ? 0 : x;
      newX = x + width > container.clientWidth ? container.clientWidth - width : newX;

      let newY = y < 0 ? 0 : y;
      newY = y + height > container.clientHeight ? container.clientHeight - height : newY;

      square.style.left = `${newX}px`;
      square.style.top = `${newY}px`;
    }
  }

  function stopDragging() {
    isDragging = false;
    document.removeEventListener("mousemove", dragSquare);
    document.removeEventListener("mouseup", stopDragging);
  }

  container.appendChild(square);
}

for (let i = 0; i < 5; i++) {
  createSquare();
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
