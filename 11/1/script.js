// document.querySelector("#addPhoto").addEventListener("click", async () => {
//   const response = await fetch("https://dog.ceo/api/breeds/image/random");
//   const photo = await response.json();
//   console.log(photo);
// });

document.querySelector("#addPhoto").addEventListener("click", async () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      let img = new Image();
      img.src = data.message;
      img.style.width = "250px";
      img.style.height = "250px";

      document.querySelector("#container").appendChild(img);
    });
});
