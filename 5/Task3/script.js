const statistics = document.querySelector(".statistics");
const gameTask = document.querySelector(".game__task");
const gameAnswers = document.querySelector(".game__answers");
const labelResult = document.querySelector(".label-result");

let rounds = 10;
let currentRound = -1;
let correctAnswers = 0;
let correctAnswer;

nextTask();

function nextTask() {
  currentRound++;
  statistics.textContent = getStatistics();
  if (currentRound === rounds) {
    reset();
    return;
  }
  let firstNumber = getRandom(1, 10);
  let secondNumber = getRandom(1, 10);
  correctAnswer = firstNumber * secondNumber;
  gameTask.textContent = `${firstNumber} * ${secondNumber} = `;
  generateAnswers();
}

function reset() {
  currentRound = -1;
  correctAnswers = 0;
}

function generateAnswers() {
  let correctIndex = getRandom(0, 4);
  gameAnswers.textContent = "";
  for (let i = 0; i < 4; i++) {
    let radio = document.createElement("input");
    let label = document.createElement("label");
    let textContent;
    radio.type = "radio";
    if (correctIndex === i) {
      radio.value = correctAnswer;
      textContent = correctAnswer;
    } else {
      let wrongAnswer = getRandom(1, 82);
      while (wrongAnswer === correctAnswer) {
        wrongAnswer = getRandom(1, 82);
      }
      radio.value = wrongAnswer;
      textContent = wrongAnswer;
    }
    radio.name = "answer";
    radio.addEventListener("click", (event) => clickHandler(event.target));
    label.appendChild(radio);
    label.append(textContent);
    gameAnswers.appendChild(label);
  }
}

function clickHandler(radio) {
  let isCorrect = radio.value == correctAnswer;
  if (isCorrect) ++correctAnswers;
  labelResult.textContent = getLabelResult(isCorrect);
  disableRadioButtons();
}

function disableRadioButtons() {
  let radios = document.querySelectorAll("input");
  radios.forEach((item) => (item.disabled = true));
}

function getStatistics() {
  return `Загальний рахунок ${
    (currentRound / rounds) * 100
  }% (${correctAnswers} правильних відповідей з ${rounds})`;
}

function getLabelResult(isCorrect) {
  return isCorrect
    ? "Правильно"
    : `Помилка, правильна відповідь "${correctAnswer}"`;
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
