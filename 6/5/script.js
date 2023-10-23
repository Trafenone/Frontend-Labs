const palette = document.querySelector("#palette");
const canvas = document.querySelector("#canvas");
let selectedColor = "#FFFFFF";

palette.querySelectorAll("td").forEach((item) => {
  let color = item.textContent;
  item.style = `color: ${color}; background-color: ${color}`;
  item.addEventListener("click", () => {
    selectedColor = item.textContent;
  });
});

for (let i = 0; i < 10; i++) {
  let tr = document.createElement('tr');
  for(let j = 0; j < 10; j++) {
    let td = document.createElement('td');
    td.addEventListener('click', () => {
      td.style.backgroundColor = selectedColor; 
    });
    tr.appendChild(td);
  }
  canvas.appendChild(tr);
}
