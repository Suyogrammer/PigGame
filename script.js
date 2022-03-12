'use strict';

let player1Score = document.querySelector('#score--0');
let player2Score = document.querySelector('#score--1');

player1Score.textContent = 0;
player2Score.textContent = 0;

const diceElement = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');

let currentScore = 0;
let playing = 0;

btnRoll.addEventListener('click', function () {
  //Generate number between 1 and 6
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //Remove the hidden class to show the dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  //Adding to the score and switch the player
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${playing}`).textContent = currentScore;
  } else {
    playing = playing === 0 ? 1 : 0;
  }
});
