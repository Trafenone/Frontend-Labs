const checkboxes = document.querySelectorAll("input");
const content = document.querySelector("div");
let result = [];

const clickHandler = (item) => {
  if (item.checked) {
    result.push(item.value);
  } else {
    let i = result.indexOf(item.value);
    result = result.filter((item, index) => {
      return index !== i;
    });
  }

  content.innerHTML = result.join("; ");
};

checkboxes.forEach((item) => {
  item.addEventListener("click", () => clickHandler(item));
});
