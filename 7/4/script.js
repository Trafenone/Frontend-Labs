const items = document.querySelectorAll(".items > li");
items.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metsaKey) {
        item.classList.toggle("selected");
    } else {
      for (const li of items) {
        if (li !== item) {
          li.classList.remove("selected");
        }
      }
      item.classList.add("selected");
    }
  });
});
