const wrapper = document.querySelector(".wrapper");

for (let i = 1; i <= 12; i++) {
  let element = document.createElement("div");
  element.className = "box inactive";
  element.style.backgroundImage = `url('images/${i}.jpg')`;
  element.addEventListener("click", (event) => clickHandler(event));
  wrapper.appendChild(element);
}

function clickHandler(event) {
  if (event.target.classList.contains("active")) {
    event.target.classList.remove("active");
    event.target.classList.add("inactive");
  } else {
    event.target.classList.remove("inactive");
    event.target.classList.add("active");
  }
}
