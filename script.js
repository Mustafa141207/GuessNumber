'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighScore = 0;
console.log(randomNumber);
const newRound = () => {
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('Second Randowm', randomNumber);
};
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
function resetValue() {
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = 0;
  heighScore = 0;
  score = 20;
  document.querySelector('body').style.backgroundColor = 'black';
}
document.querySelector('.check').addEventListener('click', () => {
  let guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber);
  if (!guessNumber) {
    displayMessage('No number please enter number');
    score = score - 1;
  } else if (guessNumber === randomNumber) {
    document.querySelector('.number').textContent = guessNumber;
    displayMessage('You Win');
    document.querySelector('body').style.backgroundColor = 'green';
    heighScore = heighScore + guessNumber;
    document.querySelector('.highscore').textContent = heighScore;
    newRound();
  } else if (guessNumber !== randomNumber) {
    if (score > 1) {
      displayMessage(
        guessNumber > randomNumber ? 'Number is to heigh' : 'Number is to low'
      );
      score = score - 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'black';
    } else {
      alert(`The guess Number is ${guessNumber}`);
      displayMessage('You lose the game');
      newRound();
      resetValue();
    }
  }
});
document.querySelector('.again').addEventListener('click', () => {
  newRound();
  resetValue();
});
