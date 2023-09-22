const N = 3;
const M = 5;

let arr = Array.from(Array(M), () => new Array(N));

for (let i = 0; i < arr.length; i++)
  for (let j = 0; j < arr[i].length; j++)
    arr[i][j] = Math.floor(Math.random() * (10 + 10) - 10);

console.log(arr);

let positiveNumbers = [].concat(...arr).filter((value) => value > 0);
console.log("Кількість додатних елементів: " + positiveNumbers.length);

let countRowsWithoutZeroes = arr.filter((row) => row.every((element) => element !== 0)).length;
console.log("Кількість рядків, які не містять жодного нульового елемента: " + countRowsWithoutZeroes);

console.log("Кількість стовпців, які містять хоча б один нульовий елемент: " + countColumnsWithZeroes(arr));

console.log("Номер рядка, в якому знаходиться найдовша серія однакових елементів: " + findLongestSeriesRow(arr));

let products = productOfNonNegativeElements(arr);
if(products.length == 0)
    console.log("Для добутку, підходящий рядок відсутній");

let sum = sumOfNonNegativeElements(arr);
if(sum.length == 0)
    console.log("Для суми, підходящий стовпець відсутній");

let sumWithNegativeElements = sumOfColumnsWithNegativeElements(arr);
if(sumWithNegativeElements == 0)
    console.log("Для суми з від'ємними елементами, підходящий стовпець відсутній");

let transposedArray = arr[0].map((_, i) => arr.map(row => row[i]));
console.log("Транспонована матриця: ");
console.log(transposedArray);
console.log("Максимум серед сум елементів діагоналей, паралельних головній діагоналі матриці: " + findMaxSumOfDiagonal(arr));
console.log("Мінімум серед сум модулів елементів діагоналей, паралельних побічній діагоналі матриці: " + findMinSumOfDiagonal(arr));

function findMinSumOfDiagonal(arr) {
  let result = [];
  let N = arr.length;
  let M = arr[0].length;

  for(let i = -(N - 1); i < M; i++) {
    let sum = 0;
    for(let j = 0; j < N; j++) {
      let row = j;
      let col = i + j;
      if(0 <= row < N && 0 <= col < M) {
        let element = arr[row][M - col - 1];
        if(!isNaN(element))
          sum += Math.abs(element);
      }
    }
    if(i != 0)
      result.push(sum);
    sum = 0;
  }

  return Math.min(...result);
}

function findMaxSumOfDiagonal(arr) {
  let result = [];
  let N = arr.length;
  let M = arr[0].length;

  for(let i = -(N - 1); i < M; i++) {
    let sum = 0;
    for(let j = 0; j < N; j++) {
      let row = j;
      let col = i + j;
      if(0 <= row < N && 0 <= col < M) {
        let element = arr[row][col];
        if(!isNaN(element))
          sum += element;
      }
    }
    if(i != 0)
      result.push(sum);
    sum = 0;
  }

  return Math.max(...result);
}

function sumOfColumnsWithNegativeElements(arr) {
    let result = [];

    for(let i = 0; i < arr[0].length; i++) {
        let sum = 0;
        let isNegative = false;

        for(let j = 0; j < arr.length; j++) {
            let element = arr[j][i];
            if(element < 0) {
                isNegative = true;
            }
            sum += element;
        }

        if(isNegative) {
            result.push(sum);
            console.log(`Сума елементів стовпця ${i} дорівнює: ${sum}`);
        }
    }

    return result;
}

function sumOfNonNegativeElements(arr) {
    let result = [];

    for(let i = 0; i < arr[0].length; i++) {
        let sum = 0;
        let isNegative = false;

        for(let j = 0; j < arr.length; j++) {
            let element = arr[j][i];
            if(element > 0) {
                sum += element;
            } else {
                isNegative = true;
                break;
            }
        }

        if(!isNegative) {
            result.push(sum);
            console.log(`Сума елементів стовпця ${i} дорівнює: ${sum}`);
        }
    }

    return result;
}

function productOfNonNegativeElements(arr) {
  let products = [];

  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    let isNegative = false;

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > 0) {
        product *= arr[i][j];
      } else {
        isNegative = true;
        break;
      }
    }

    if (!isNegative) {
      products.push(product);
      console.log(`Добуток елементів ряду ${i} дорівнює: ${product}`);
    }
  }

  return products;
}

function countColumnsWithZeroes(arr) {
  let count = 0;
  for (let j = 0; j < arr[0].length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][j] == 0) {
        count++;
        break;
      }
    }
  }
  return count;
}

function findLongestSeriesRow(arr) {
  let maxSeriesLength = 0;
  let rowOfTheLongestSeries = -1;

  for (let i = 0; i < arr.length; i++) {
    let currentSeriesLength = 1;
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] === arr[i][j - 1]) {
        currentSeriesLength++;
      } else {
        updateMaxSeries(currentSeriesLength, i);
        currentSeriesLength = 1;
      }
    }

    updateMaxSeries(currentSeriesLength, i);
  }

  return rowOfTheLongestSeries;

  function updateMaxSeries(length, rowIndex) {
    if (length > maxSeriesLength) {
      maxSeriesLength = length;
      rowOfTheLongestSeries = rowIndex;
    }
  }
}
