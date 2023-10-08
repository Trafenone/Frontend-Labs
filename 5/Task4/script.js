const statistics = document.querySelector(".statistics");
const gameTask = document.querySelector(".game__task");
const gameAnswer = document.querySelector(".game__answer");
const gameCheck = document.querySelector(".game__check");
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
  
  gameAnswer.disabled = false;
  gameAnswer.value = "";
  gameCheck.disabled = false;
  gameTask.textContent = `${firstNumber} * ${secondNumber} = `;
}

function clickHandler(btn) {
  let isCorrect = gameAnswer.value == correctAnswer;
  labelResult.textContent = getLabelResult(isCorrect);
  if (isCorrect) correctAnswers++;
  btn.disabled = true;
  gameAnswer.disabled = true;
}

function reset() {
  currentRound = -1;
  correctAnswers = 0;
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
