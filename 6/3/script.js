const palette = document.querySelector("#palette");
const rectangle = document.querySelector("#rectangle");
let arr = [];

palette.querySelectorAll("td").forEach((item) => {
  let color = item.textContent;
  item.style = `color: ${color}; background-color: ${color}`;
  item.addEventListener("click", () => {
    if (arr.includes(item.textContent)) {
      arr = arr.filter((x) => x !== item.textContent);
      item.classList.toggle("active");
    } else {
      arr.push(item.textContent);
      item.classList.toggle("active");
    }
    update();
  });
});

function update() {
  if (arr.length > 1) {
    rectangle.style.background =
      `linear-gradient(${arr.join(',')})`;
  } else if (arr.length === 1) {
    rectangle.style.background = arr[0];
  } else {
    rectangle.style.background = "#FFFFFF";
  }
}
