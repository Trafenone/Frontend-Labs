let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;

let newStr =
  text.charAt(12) + text.charAt(6) + text.charAt(18) + text.charAt(25);

console.log(newStr.toLowerCase());

let pos = -1;
while ((pos = text.indexOf("in", pos + 1)) != -1) console.log(pos);

let separatedStrings = text.split(" ");
for (let str of separatedStrings) console.log(str);

let reversedText = text.split("").reverse().join("");
console.log(reversedText);

function ucFirst(txt) {
  let newTxt = txt.at(0).toUpperCase() + txt.slice(1);
  return newTxt;
}
console.log(ucFirst("some text"));
