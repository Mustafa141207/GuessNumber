'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighScore = 0;
console.log(randomNumber);
const reset = () => {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'black';
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('Second Randowm', randomNumber);
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = 0;
  heighScore = 0;
  score = 20;
};
const more = () => {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'black';
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('Thired Randowm', randomNumber);
  document.querySelector('.guess').value = '';
};
document.querySelector('.check').addEventListener('click', () => {
  let guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber);
  if (!guessNumber) {
    document.querySelector('.message').textContent =
      'No number please enter number';
    score = score - 1;
  } else if (guessNumber === randomNumber) {
    document.querySelector('.number').textContent = guessNumber;
    document.querySelector('.message').textContent = 'You win';
    document.querySelector('body').style.backgroundColor = 'green';
    heighScore = heighScore + guessNumber;
    document.querySelector('.highscore').textContent = heighScore;
    more();
  } else if (guessNumber > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is to heigh';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game';
      document.querySelector('.message').textContent = 'Number is to heigh';
      alert(`The guess Number is ${guessNumber}`);
      reset();
    }
  } else if (guessNumber < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is to low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game';
      document.querySelector('.score').textContent = 0;
      alert(`The guess Number is ${guessNumber}`);
      reset();
    }
  }
});
document.querySelector('.again').addEventListener('click', () => {
  reset();
});
