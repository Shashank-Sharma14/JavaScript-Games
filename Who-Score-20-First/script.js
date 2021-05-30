'use strict';
let player0Score = document.getElementById('score--0');
let player1Score = document.getElementById('score--1');
let activePlayer0 = document.querySelector('.player--0');
let activePlayer1 = document.querySelector('.player--1');

let dice = document.querySelector('.dice');
let newGame = document.querySelector('.btn--new');
let rollDice = document.querySelector('.btn--roll');
let holdDice = document.querySelector('.btn--hold');

let currentScoreOfPlayer, activePlayer, score, isPlaying;

let init = function () {
  isPlaying = true;
  activePlayer = 0;
  score = [0, 0];
  currentScoreOfPlayer = 0;

  player0Score.textContent = 0;
  player1Score.textContent = 0;

  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
};

init();

dice.classList.add('hidden');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScoreOfPlayer = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  activePlayer0.classList.toggle('player--active');
  activePlayer1.classList.toggle('player--active');
};

rollDice.addEventListener('click', function () {
  if (isPlaying) {
    var randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${randomDiceNumber}.png`;
    if (randomDiceNumber !== 1) {
      currentScoreOfPlayer += randomDiceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScoreOfPlayer;
    } else {
      switchPlayer();
    }
  }
});

holdDice.addEventListener('click', function () {
  if (isPlaying) {
    score[activePlayer] += currentScoreOfPlayer;
    console.log(score[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 50) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      isPlaying = false;
      dice.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

newGame.addEventListener('click', init);
