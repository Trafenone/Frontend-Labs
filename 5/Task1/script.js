const p = document.querySelector("p");
const checkboxes = document.querySelectorAll("input");

const submitHandler = () => {
  let result = [];
  checkboxes.forEach((item) => {
    if (item.checked) {
      result.push(item.value);
    }
  });

  p.textContent = result.join(', ');
};
