let array = [];
document.querySelectorAll('#paragraphs p').forEach((value) => {
  array.push(value.innerHTML.length);
});
console.log(array);

let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];
console.log(`Найменше: ${Math.min(...arr)}\nНайбільше: ${Math.max(...arr)}`);

let oddNumbers = arr.filter((num) => num % 2);
console.log(`Парних: ${arr.length - oddNumbers.length}\nНепарних: ${oddNumbers.length}`);

let numbersWithTwoDigit = arr.filter((num) => Math.abs(num).toString().length == 2);
console.log('Чисел з двома цифрами: ' + numbersWithTwoDigit.length);

let positiveNumbers = arr.filter((num) => num > 0);
console.log(`Додатних: ${positiveNumbers.length}\nНегативних: ${arr.length - positiveNumbers.length}`);

console.log(arr.sort((a, b) => a - b));

let reversedArr = arr.reverse();
console.log(reversedArr);