function toggleAccordion(header) {
  const content = header.nextElementSibling;
  const icon = header.querySelector(".icon");

  const allContents = document.querySelectorAll(".accordion-item-content");

  allContents.forEach((item) => {
    if (item !== content) {
      item.style.display = "none";
    }
  });

  document.querySelectorAll('.icon').forEach((item) => {
    changeIcon(item, "plus", "minus"); 
  });

  if (content.style.display === "block") {
    content.style.display = "none";
    changeIcon(icon, "plus", "minus");
  } else {
    content.style.display = "block";
    changeIcon(icon, "minus", "plus");
  }
}

function changeIcon(container, setIcon, removeIcon) {
  container.classList.remove(removeIcon);
  container.classList.add(setIcon);
}
