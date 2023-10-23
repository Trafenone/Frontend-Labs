const books = document.querySelectorAll(".book");

books.forEach((book) => {
  book.addEventListener("click", () => {
    const isGreen = book.style.backgroundColor === "rgb(224, 255, 224)";

    books.forEach((otherBook) => {
      otherBook.style.backgroundColor = "#FFFFFF";
    });

    book.style.backgroundColor = isGreen ? "#FFFFFF" : "#e0ffe0";
  });
});
