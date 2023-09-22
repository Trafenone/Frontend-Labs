let tables = document.querySelectorAll(".table");

tables.forEach((value) => {
  value.querySelectorAll("td").forEach((value, index) => {
    if (index % 2) value.className = "selected";
  });
});
