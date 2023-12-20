class Shape {
  static total = 100;

  static fill() {
    this.total = 100;
  }

  constructor(a) {
    this.a = a;
  }

  draw() {
    let div = document.createElement("div");
    div.style.width = this.a + "px";
    div.style.height = this.a + "px";
    div.style.backgroundColor = `rgba(138, 43, 226, ${Shape.total / 100})`;
    div.style.border = "3px solid black";
    Shape.total -= 10;
    document.querySelector("#container").appendChild(div);
  }
}

document.querySelector("#draw").addEventListener("click", () => {
  let shape = new Shape(50);
  shape.draw();
  console.log(Shape.total);
});

document.querySelector("#fill").addEventListener("click", () => {
  Shape.total = 100;
});
